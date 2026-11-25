/**
 * Smooth scroll (Lenis) synchronisé avec GSAP ScrollTrigger.
 */
export function setupScroll() {
	const { gsap, ScrollTrigger, Lenis } = window;
	if (!Lenis) {
		return { stop() {}, start() {}, scrollTo: (t) => document.querySelector(t)?.scrollIntoView(), on() {} };
	}
	const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, touchMultiplier: 1.4 });
	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((time) => lenis.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);
	window.__lenis = lenis;

	document.addEventListener('click', (e) => {
		const a = e.target.closest('a[href^="#"]');
		if (!a) return;
		const id = a.getAttribute('href');
		const target = id.length > 1 ? document.querySelector(id) : null;
		if (!target && id !== '#top') return;
		e.preventDefault();
		lenis.scrollTo(target || 0, { duration: 1.6 });
	});
	return lenis;
}
