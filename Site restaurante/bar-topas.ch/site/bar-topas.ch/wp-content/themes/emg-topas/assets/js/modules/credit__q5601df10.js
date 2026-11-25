/**
 * Crédits Piqo et e-Medias : au survol la mention passe en espagnol (CSS).
 * Easter egg : plus on insiste, plus le chef a des choses à dire, en franco-espagnol
 * approximatif (c'est voulu, comme dans toute la marque).
 */
const LINES = {
	emedias: [
		null,
		'Alors, tu aimes ce chef-d’œuvre ? ¿Sí o sí, amigo?',
		null,
		'Dato curioso : 47 pinchos ont été sacrificados pendant la création de ce chef-d’œuvre.',
		null,
		'¿Encore toi ? Ce chef-d’œuvre ne se mange pas… pero se clica.',
		'Una obra maestra, je sais. Bon, tu peux cliquer maintenant, por favor.',
	],
	piqo: [
		null,
		'Chaque pincho a été dessiné à la main. Sí, señor, à la main.',
		null,
		'51 pictogrammes dessinés. Nosotros ? On a juste goûté.',
		null,
		'« Le Piqo » est aussi un pincho de la carte. ¿Coincidencia? No creo.',
		'¡Arte puro! Bon, clique, ils le méritent.',
	],
};

export function initCredit() {
	document.querySelectorAll('[data-credit]').forEach((link) => {
		const bubble = link.querySelector('[data-credit-bubble]');
		const lines = LINES[link.dataset.credit] || [];
		if (!bubble || !lines.length) return;
		let count = 0;
		let timer = 0;
		link.addEventListener('pointerenter', () => {
			const line = lines[count % lines.length];
			count++;
			if (!line) return;
			bubble.textContent = line;
			bubble.classList.add('is-on');
			clearTimeout(timer);
			timer = setTimeout(() => bubble.classList.remove('is-on'), 3800);
		});
	});
}
