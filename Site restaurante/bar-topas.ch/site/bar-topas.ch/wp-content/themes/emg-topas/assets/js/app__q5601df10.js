/**
 * Tòpas — point d'entrée.
 *
 * Ordre : statut/horaires (toujours) → smooth scroll → intro (pendant que la 3D
 * se prépare) → animations des sections. La 3D n'est jamais abandonnée : si elle
 * n'est pas prête à la fin de l'intro, elle apparaît en fondu dès qu'elle l'est.
 * En mouvement réduit, la 3D est affichée mais immobile (pas d'animations au scroll).
 */
import { initStatus } from 'emg-topas/status';
import { setupScroll } from 'emg-topas/scroll';
import { loadIntro, revealIntro } from 'emg-topas/intro';
import { initSections } from 'emg-topas/sections';
import { initCursor } from 'emg-topas/cursor';
import { preloadAll } from 'emg-topas/preload';
import { initCredit } from 'emg-topas/credit';
import { initMap } from 'emg-topas/vmap';

const root = document.documentElement;
const data = JSON.parse(document.getElementById('emg-topas-data')?.textContent || '{}');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** État partagé entre les animations GSAP (écriture) et la 3D (lecture). */
const state = (window.__topas = {
	reduced,
	hero: { p: 0, mx: 0, my: 0, enter: 0 },
	build: { p: 0 },
	drinks: { p: 0 },
	rain: { active: false, reset: null },
});

function webgl() {
	try {
		const c = document.createElement('canvas');
		return !!(window.WebGL2RenderingContext && c.getContext('webgl2'));
	} catch (e) {
		return false;
	}
}

/** Lance la 3D ; réessaie une fois en cas d'échec réseau ponctuel. */
function loadGL() {
	if (data.no3d || !webgl()) return Promise.resolve(null);
	const attempt = () => import('emg-topas/gl/stage').then((m) => m.createStage(state, data));
	return attempt()
		.catch(() => new Promise((r) => setTimeout(r, 1200)).then(attempt))
		.catch((e) => {
			console.error('[Tòpas] 3D indisponible :', e);
			return null;
		});
}

/** Active la 3D (fondu croisé avec les illustrations de secours). */
function showGL(gl, late = false) {
	if (!gl || root.classList.contains('has-gl')) return;
	root.classList.add('has-gl');
	if (window.gsap && !reduced) {
		window.gsap.fromTo('[data-view] canvas', { opacity: 0 }, { opacity: 1, duration: 0.9, ease: 'power2.out' });
		// Arrivée tardive : le pincho du hero fait son entrée à ce moment-là.
		if (late) window.gsap.fromTo(state.hero, { enter: 0 }, { enter: 1, duration: 1.8, ease: 'power2.out' });
	} else {
		state.hero.enter = 1;
	}
}

/** Attend que le navigateur ait réellement peint (le loader doit apparaître en premier). */
const painted = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

async function boot() {
	initStatus(data);
	initCredit();

	const { gsap, ScrollTrigger, SplitText, CustomEase } = window;
	if (reduced || !gsap || !ScrollTrigger) {
		// Statique : pincho complet, verres qui trinquent, pas de pluie.
		root.classList.add('reduced');
		state.build.p = 0.75;
		state.drinks.p = 1;
		state.hero.enter = 1;
		initMap({ reduced: true });
		loadGL().then(showGL);
		return;
	}
	gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
	// Mobile : la barre d'adresse qui apparaît/disparaît ne doit pas recalculer les pins (sauts).
	ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
	CustomEase.create('topas', 'M0,0 C0.2,0.8 0.2,1 1,1');

	const lenis = setupScroll();
	lenis.stop();
	initCursor();

	// 1. Le loader d'abord : rien de lourd ne démarre avant qu'il soit à l'écran.
	await painted();

	// 2. Pendant le loader : 3D (shaders compilés, scènes rendues une fois) et
	//    toutes les images (téléchargées et décodées). Plus rien à charger ensuite.
	const glReady = loadGL();
	let onImg = () => {};
	const images = preloadAll((f) => onImg(f));
	const gl = await loadIntro({ glReady, images, onImages: (cb) => (onImg = cb) });
	if (gl) showGL(gl);
	else glReady.then((g) => showGL(g, true));

	// 3. Animations installées sous le loader (découpes de texte, pins…), puis ouverture.
	initSections(state, lenis);
	initMap({ gsap, ScrollTrigger });
	ScrollTrigger.refresh();
	await revealIntro(state);
	lenis.start();

	// Redimensionnement réel (largeur) : un seul recalcul, différé.
	let lastW = innerWidth;
	let timer = 0;
	addEventListener('resize', () => {
		if (innerWidth === lastW) return;
		lastW = innerWidth;
		clearTimeout(timer);
		timer = setTimeout(() => ScrollTrigger.refresh(), 250);
	});
}

boot();
