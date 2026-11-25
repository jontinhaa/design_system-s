/**
 * Curseur personnalisé (souris uniquement) et boutons magnétiques.
 */
export function initCursor() {
	const { gsap } = window;
	const fine = matchMedia('(pointer: fine) and (hover: hover)').matches;
	if (!fine) return;

	const cursor = document.querySelector('[data-cursor]');
	const label = document.querySelector('[data-cursor-label]');
	if (cursor) {
		document.documentElement.classList.add('has-cursor');
		const x = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
		const y = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
		gsap.set(cursor, { x: innerWidth / 2, y: innerHeight / 2 });
		addEventListener('pointermove', (e) => {
			cursor.classList.add('is-on');
			x(e.clientX);
			y(e.clientY);
		});
		document.addEventListener('pointerleave', () => cursor.classList.remove('is-on'));
		addEventListener('pointerdown', () => cursor.classList.add('is-down'));
		addEventListener('pointerup', () => cursor.classList.remove('is-down'));
		document.addEventListener('pointerover', (e) => {
			const t = e.target.closest('a, button, [data-cursor-text]');
			cursor.classList.toggle('is-hover', !!t);
			if (label) label.textContent = t ? t.dataset.cursorText || '¡Vamos!' : '';
		});
	}

	document.querySelectorAll('[data-magnetic]').forEach((el) => {
		const qx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
		const qy = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
		el.addEventListener('pointermove', (e) => {
			const r = el.getBoundingClientRect();
			qx((e.clientX - (r.left + r.width / 2)) * 0.28);
			qy((e.clientY - (r.top + r.height / 2)) * 0.32);
		});
		el.addEventListener('pointerleave', () => {
			gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' });
		});
	});
}
