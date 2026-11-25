/**
 * Intro en trois temps.
 *
 * 1. Préchargement : pincho qui rebondit, messages décalés et barre de progression,
 *    animés uniquement en CSS (GPU) — fluides même pendant que le JS charge la 3D,
 *    compile les shaders et décode les images.
 * 2. Tout est prêt (le navigateur est libre) : le logo TÒPAS tombe lettre par lettre,
 *    puis « ¡Listo! ¡Vamos! ».
 * 3. revealIntro : le rideau s'ouvre sur le hero.
 */
const letters = (svg) => {
	const paths = [...svg.querySelectorAll('path')].map((p) => ({ p, b: p.getBBox() }));
	const accent = paths.reduce((a, c) => (c.b.width * c.b.height < a.b.width * a.b.height ? c : a));
	return {
		letters: paths.filter((x) => x !== accent).sort((a, b) => a.b.x - b.b.x).map((x) => x.p),
		accent: accent.p,
	};
};

export async function loadIntro({ glReady, images, onImages }) {
	const { gsap } = window;
	const intro = document.querySelector('[data-intro]');
	const bar = document.querySelector('[data-intro-bar]');
	const wait = (ms) => new Promise((r) => setTimeout(r, ms));
	if (intro) intro.classList.add('is-run');

	// Progression réelle : polices 10 %, 3D 50 %, images 40 % (barre animée en CSS).
	const parts = { fonts: 0, gl: 0, img: 0 };
	const update = () => {
		const v = Math.max(0.04, parts.fonts * 0.1 + parts.gl * 0.5 + parts.img * 0.4);
		if (bar) bar.style.transform = `scaleX(${v.toFixed(3)})`;
	};
	onImages((f) => {
		parts.img = f;
		update();
	});
	const fonts = (document.fonts?.ready || Promise.resolve()).then(() => {
		parts.fonts = 1;
		update();
	});
	let gl = null;
	const glDone = glReady.then((g) => {
		gl = g;
		parts.gl = 1;
		update();
	});
	await Promise.race([Promise.all([fonts, glDone, images, wait(2600)]), wait(30000)]);
	parts.fonts = parts.gl = parts.img = 1;
	update();

	// Deux frames calmes avant d'animer : le navigateur a fini son travail.
	await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
	await wait(350);

	if (intro) {
		intro.classList.add('is-ready');
		const L = letters(intro.querySelector('svg'));
		gsap.set(L.letters, { yPercent: -160, rotation: 'random(-25, 25)', opacity: 1, transformOrigin: '50% 100%' });
		gsap.set(L.accent, { yPercent: -400, opacity: 0 });
		await new Promise((r) => {
			gsap.timeline({ onComplete: r })
				.to(L.letters, { yPercent: 0, rotation: 0, duration: 0.9, stagger: 0.07, ease: 'bounce.out' })
				.to(L.accent, { yPercent: 0, opacity: 1, duration: 0.7, ease: 'back.out(3)' }, '-=0.25');
		});
		intro.classList.add('is-done');
		await wait(800);
	}
	return gl;
}

export function revealIntro(state) {
	const { gsap } = window;
	const intro = document.querySelector('[data-intro]');
	const hero = document.querySelector('.s-hero');
	const heroLogo = hero?.querySelector('[data-hero-logo]');
	const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

	if (intro) {
		tl.to('.intro__logo', { scale: 1.6, opacity: 0, duration: 0.7, ease: 'power3.in' }, 0)
			.set(intro, { backgroundColor: 'transparent' }, 0.25)
			.to('.intro__done, .intro__word', { opacity: 0, duration: 0.3 }, 0)
			.to('.intro__panels span', { yPercent: -101, duration: 1.1, stagger: 0.07, ease: 'expo.inOut' }, 0.25)
			.set(intro, { display: 'none' });
	}
	if (heroLogo) {
		const H = letters(heroLogo);
		tl.from(H.letters, { yPercent: 120, rotation: (k) => (k % 2 ? 12 : -12), duration: 1.3, stagger: 0.06, ease: 'back.out(1.6)' }, 0.55)
			.from(H.accent, { yPercent: -300, opacity: 0, duration: 0.9, ease: 'bounce.out' }, 0.95);
	}
	tl.to(state.hero, { enter: 1, duration: 1.8, ease: 'power2.out' }, 0.7)
		.from('.s-hero__kicker > *', { y: -30, opacity: 0, stagger: 0.08, duration: 0.9 }, 0.9)
		.from('.s-hero__foot > *', { y: 40, opacity: 0, stagger: 0.12, duration: 1 }, 1)
		.from('.s-hero__stamp', { scale: 0, rotation: -180, duration: 1.2, ease: 'back.out(1.7)' }, 1.1)
		.from('.topbar > *', { y: -60, opacity: 0, stagger: 0.08, duration: 0.9 }, 1.1)
		.from('.s-hero__scroll', { opacity: 0, y: 20, duration: 0.8 }, 1.4);
	return new Promise((r) => tl.call(r, null, 1.4));
}
