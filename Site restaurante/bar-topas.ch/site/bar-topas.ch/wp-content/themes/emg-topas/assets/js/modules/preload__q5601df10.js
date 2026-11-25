/**
 * Chargement complet pendant le loader : toutes les images de la page sont
 * téléchargées puis décodées avant l'ouverture, pour qu'aucun chargement ni
 * décodage ne tombe pendant le défilement.
 * (Les illustrations de secours de la 3D sont ignorées : elles ne servent que sans WebGL.)
 */
export function preloadAll(onProgress = () => {}) {
	const imgs = [...document.querySelectorAll('img')].filter((i) => !i.closest('[data-intro]') && !i.classList.contains('gl-fallback'));
	// Images d'illustrations intégrées dans des SVG (<image>) : chargées aussi.
	document.querySelectorAll('svg image[href]').forEach((el) => {
		const im = new Image();
		im.src = el.getAttribute('href');
		imgs.push(im);
	});
	const total = imgs.length || 1;
	let done = 0;
	const tick = () => onProgress(++done / total);
	if (!imgs.length) {
		onProgress(1);
		return Promise.resolve();
	}
	return Promise.all(
		imgs.map((img) => {
			img.loading = 'eager';
			const loaded = img.complete && img.naturalWidth
				? Promise.resolve()
				: new Promise((r) => {
					img.addEventListener('load', r, { once: true });
					img.addEventListener('error', r, { once: true });
				});
			return loaded
				.then(() => (img.decode ? img.decode().catch(() => {}) : null))
				.then(tick);
		})
	);
}
