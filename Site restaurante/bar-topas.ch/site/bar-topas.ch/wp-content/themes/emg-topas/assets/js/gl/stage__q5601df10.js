/**
 * Scène 3D unique pour toute la page.
 *
 * Un seul contexte WebGL (hors DOM) rend chaque vue visible, puis l'image est
 * copiée dans le <canvas> 2D de la section concernée. Les vues restent ainsi
 * dans le flux normal (empilement CSS, sections épinglées) sans multiplier les
 * contextes WebGL, et les ressources (textures, matériaux) sont partagées.
 *
 * Fluidité : aucune lecture de mise en page par frame (tailles via ResizeObserver,
 * visibilité via IntersectionObserver), shaders compilés et textures envoyées au GPU
 * pendant l'intro, résolution réduite automatiquement si la machine peine.
 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createMaterials } from 'emg-topas/gl/food';
import * as S from 'emg-topas/gl/scenes';

export async function createStage(state, data) {
	const mobile = matchMedia('(max-width: 760px), (pointer: coarse)').matches;
	const renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true,
		premultipliedAlpha: true,
		powerPreference: 'high-performance',
	});
	// Budget de pixels : sur les grands écrans haute densité, on ne rend pas 15 millions
	// de pixels par frame. La résolution est plafonnée pour rester sous ~3 Mpx par vue.
	const budget = mobile ? 1.6e6 : 3.0e6;
	const screenPx = window.innerWidth * window.innerHeight;
	const maxDpr = Math.max(0.75, Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.5, Math.sqrt(budget / screenPx)));
	let dpr = maxDpr;
	renderer.setPixelRatio(dpr);
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	renderer.toneMapping = THREE.NeutralToneMapping;
	renderer.toneMappingExposure = 1.0;
	renderer.setClearColor(0x000000, 0);
	renderer.autoClear = false;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFShadowMap;
	renderer.localClippingEnabled = true;

	const pmrem = new THREE.PMREMGenerator(renderer);
	const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
	pmrem.dispose();

	const mats = await createMaterials(data);
	const kit = { renderer, env, mats, mobile };

	const factories = { hero: S.hero, build: S.build, drinks: S.drinks, rain: S.rain };
	const views = [];
	for (const el of document.querySelectorAll('[data-view]')) {
		const make = factories[el.dataset.view];
		if (!make) continue;
		const v = make(kit, state);
		const canvas = document.createElement('canvas');
		el.prepend(canvas);
		Object.assign(v, { el, canvas, ctx: canvas.getContext('2d'), visible: false, cw: 0, ch: 0, pw: 0, ph: 0 });
		// Vue en deux calques : le calque 1 est rendu dans un second canvas, au-dessus du texte.
		if (v.split) {
			const front = document.createElement('div');
			front.className = el.className + ' gl-front';
			front.setAttribute('aria-hidden', 'true');
			v.canvas2 = document.createElement('canvas');
			front.append(v.canvas2);
			el.after(front);
			v.ctx2 = v.canvas2.getContext('2d');
		}
		views.push(v);
		if (v.pointer) {
			const send = (e, active) => {
				const r = el.getBoundingClientRect();
				v.pointer(e.clientX - r.left, e.clientY - r.top, r.width, r.height, active);
			};
			el.addEventListener('pointermove', (e) => send(e, true), { passive: true });
			el.addEventListener('pointerdown', (e) => send(e, true), { passive: true });
			el.addEventListener('pointerleave', (e) => send(e, false), { passive: true });
		}
	}

	// Tailles : lues seulement quand elles changent.
	let bufW = 0;
	let bufH = 0;
	const ensureBuffer = (w, h) => {
		if (w > bufW || h > bufH) {
			bufW = Math.max(bufW, Math.ceil(w));
			bufH = Math.max(bufH, Math.ceil(h));
			renderer.setSize(bufW, bufH, false);
		}
	};
	const sizeCanvas = (v) => {
		const pw = Math.max(1, Math.round(v.cw * dpr));
		const ph = Math.max(1, Math.round(v.ch * dpr));
		if (v.pw !== pw || v.ph !== ph) {
			v.canvas.width = v.pw = pw;
			v.canvas.height = v.ph = ph;
			if (v.canvas2) {
				v.canvas2.width = pw;
				v.canvas2.height = ph;
			}
		}
	};
	const ro = new ResizeObserver((entries) => {
		for (const e of entries) {
			const v = views.find((x) => x.el === e.target);
			if (!v) continue;
			const box = e.contentBoxSize?.[0];
			v.cw = Math.round(box ? box.inlineSize : e.contentRect.width);
			v.ch = Math.round(box ? box.blockSize : e.contentRect.height);
			ensureBuffer(v.cw, v.ch);
			sizeCanvas(v);
		}
	});
	views.forEach((v) => {
		const r = v.el.getBoundingClientRect();
		v.cw = Math.round(r.width);
		v.ch = Math.round(r.height);
		ensureBuffer(v.cw, v.ch);
		sizeCanvas(v);
		ro.observe(v.el);
	});
	ensureBuffer(window.innerWidth, window.innerHeight);

	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				const v = views.find((x) => x.el === e.target);
				if (v) v.visible = e.isIntersecting;
			}
		},
		{ rootMargin: '80px 0px' }
	);
	views.forEach((v) => io.observe(v.el));

	function draw(v, dt, t) {
		const w = v.cw;
		const h = v.ch;
		if (w < 2 || h < 2) return;
		v.update(dt, t, w, h);
		renderer.setViewport(0, 0, w, h);
		renderer.setScissor(0, 0, w, h);
		renderer.setScissorTest(true);
		renderer.clear();
		const src = renderer.domElement;
		if (v.split) v.camera.layers.set(0);
		renderer.render(v.scene, v.camera);
		v.ctx.clearRect(0, 0, v.pw, v.ph);
		v.ctx.drawImage(src, 0, src.height - v.ph, v.pw, v.ph, 0, 0, v.pw, v.ph);
		if (v.split) {
			renderer.clear();
			v.camera.layers.set(1);
			renderer.render(v.scene, v.camera);
			v.camera.layers.set(0);
			v.ctx2.clearRect(0, 0, v.pw, v.ph);
			v.ctx2.drawImage(src, 0, src.height - v.ph, v.pw, v.ph, 0, 0, v.pw, v.ph);
		}
	}

	// Préchauffage : shaders compilés en parallèle (sans bloquer), puis un rendu de
	// chaque vue pour envoyer textures et géométries au GPU avant le premier scroll.
	views.forEach((v) => v.update(0.016, 0, v.cw || 800, v.ch || 600));
	try {
		await Promise.all(views.map((v) => renderer.compileAsync(v.scene, v.camera)));
	} catch (e) {
		views.forEach((v) => renderer.compile(v.scene, v.camera));
	}
	views.forEach((v) => {
		v.warm?.(true);
		draw(v, 0.016, 0);
		v.warm?.(false);
	});

	// Gouverneur de qualité : uniquement à la baisse, après une lenteur durable
	// (deux fenêtres d'environ 1,5 s au-dessus de ~28 ms). Jamais d'aller-retour :
	// chaque changement de résolution réalloue les canvas et coûte une frame.
	let acc = 0;
	let frames = 0;
	let slow = 0;
	let cooldown = 3;
	const govern = (dt) => {
		acc += dt;
		frames++;
		if (acc < 1.5) return;
		const avg = acc / frames;
		acc = 0;
		frames = 0;
		if (cooldown > 0) {
			cooldown--;
			return;
		}
		slow = avg > 0.028 ? slow + 1 : 0;
		if (slow >= 2 && dpr > 0.7) {
			slow = 0;
			cooldown = 3;
			dpr = Math.max(0.7, dpr - 0.2);
			renderer.setPixelRatio(dpr);
			renderer.setSize(bufW, bufH, false);
			views.forEach(sizeCanvas);
		}
	};

	let last = performance.now();
	const t0 = last;
	function tick() {
		const now = performance.now();
		// 3D plafonnée à ~60 images/s (sur un écran 120/144 Hz, inutile de rendre deux fois plus).
		if (now - last < 12) return;
		const dt = Math.min(0.05, (now - last) / 1000);
		last = now;
		const t = (now - t0) / 1000;
		let drawn = 0;
		for (const v of views) {
			if (!v.visible) continue;
			draw(v, dt, t);
			drawn++;
		}
		if (drawn && !document.hidden) govern(dt);
	}

	window.gsap.ticker.add(tick);

	return {
		views,
		renderer,
		destroy() {
			window.gsap.ticker.remove(tick);
			io.disconnect();
			ro.disconnect();
			renderer.dispose();
		},
	};
}
