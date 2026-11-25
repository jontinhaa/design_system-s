/**
 * Textures générées au chargement (canvas 2D) : aucune image à télécharger
 * pour la 3D, sauf le logo du drapeau.
 */
import * as THREE from 'three';
import { fbm, noise3, rng, smoothstep } from 'emg-topas/gl/noise';

function canvas(w, h) {
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	return c;
}

function tex(c, { srgb = true, repeat = false } = {}) {
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
	t.anisotropy = 4;
	if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
	t.needsUpdate = true;
	return t;
}

const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

/** Peint une image pixel par pixel : fn(u, v) -> [r, g, b, bump]. */
function paint(w, h, fn) {
	const col = canvas(w, h);
	const bmp = canvas(w, h);
	const cc = col.getContext('2d');
	const bc = bmp.getContext('2d');
	const ci = cc.createImageData(w, h);
	const bi = bc.createImageData(w, h);
	for (let y = 0; y < h; y++) {
		for (let x = 0; x < w; x++) {
			const [r, g, b, k] = fn(x / w, y / h, x, y);
			const i = (y * w + x) * 4;
			ci.data[i] = r; ci.data[i + 1] = g; ci.data[i + 2] = b; ci.data[i + 3] = 255;
			const kk = Math.max(0, Math.min(255, k * 255));
			bi.data[i] = bi.data[i + 1] = bi.data[i + 2] = kk; bi.data[i + 3] = 255;
		}
	}
	cc.putImageData(ci, 0, 0);
	bc.putImageData(bi, 0, 0);
	return { col, bmp };
}

/** Croûte de baguette (côté de la tranche), u = tour, v = hauteur. */
export function crust() {
	const dark = hex('#82451C');
	const mid = hex('#BC7D3A');
	const light = hex('#DDAF68');
	const flour = hex('#EFE2C8');
	const { col, bmp } = paint(512, 192, (u, v) => {
		const a = u * Math.PI * 2;
		const cx = Math.cos(a) * 2.2;
		const cz = Math.sin(a) * 2.2;
		const n = fbm(cx, v * 2.4, cz, 5);
		const fine = noise3(cx * 9, v * 18, cz * 9) * 0.5;
		const blister = smoothstep(0.45, 0.7, noise3(cx * 4, v * 5, cz * 4));
		let c = mix(dark, mid, smoothstep(-0.7, 0.1, n));
		c = mix(c, light, smoothstep(0.1, 0.8, n) * 0.7);
		c = mix(c, dark, blister * 0.22);
		// Bord supérieur grillé (comme sur les photos), bas légèrement plus clair.
		const char = smoothstep(0.16, 0.0, v) * (0.75 + 0.25 * noise3(cx * 6, 1, cz * 6));
		c = mix(c, hex('#3E1E0C'), char * 0.85);
		c = mix(c, light, smoothstep(0.85, 1, v) * 0.3);
		const f = smoothstep(0.62, 0.85, noise3(cx * 2 + 9, v * 3, cz * 2)) * 0.18;
		c = mix(c, flour, f);
		// Craquelures fines de la croûte (sombres et creusées).
		const crack = smoothstep(0.955, 0.995, 1 - Math.abs(noise3(cx * 3.2 + 4, v * 6, cz * 3.2))) * (0.6 + 0.4 * smoothstep(-0.2, 0.4, n));
		c = mix(c, dark, crack * 0.3);
		return [c[0] + fine * 8, c[1] + fine * 6, c[2] + fine * 4, 0.5 + n * 0.35 + fine * 0.15 - blister * 0.2 - crack * 0.12];
	});
	return { map: tex(col), bump: tex(bmp, { srgb: false }) };
}

/** Mie (face coupée) : alvéoles, bord toasté. UV planaires 0..1, centre (0.5, 0.5). */
export function crumb() {
	const W = 384;
	const base = hex('#F4E4BF');
	const shade = hex('#DCC08B');
	const toast = hex('#CF9550');
	const crustC = hex('#94511F');
	const { col, bmp } = paint(W, W, (u, v) => {
		const dx = u - 0.5;
		const dy = v - 0.5;
		const d = Math.sqrt(dx * dx + dy * dy) * 2;
		const n = fbm(u * 7, v * 7, 3.1, 4);
		let c = mix(base, shade, smoothstep(-0.2, 0.6, n) * 0.55);
		c = mix(c, toast, smoothstep(0.76, 0.93, d) * 0.85);
		c = mix(c, crustC, smoothstep(0.92, 1.0, d));
		return [c[0], c[1], c[2], 0.62 + n * 0.12];
	});
	// Alvéoles : ellipses sombres (couleur) et creuses (relief).
	const r = rng(7);
	const cc = col.getContext('2d');
	const bc = bmp.getContext('2d');
	for (let i = 0; i < 320; i++) {
		const rr = Math.sqrt(r()) * 0.44;
		const a = r() * Math.PI * 2;
		const x = (0.5 + Math.cos(a) * rr) * W;
		const y = (0.5 + Math.sin(a) * rr) * W;
		const s = (0.003 + r() * r() * 0.024) * W;
		const rot = r() * Math.PI;
		const sy = s * (0.45 + r() * 0.8);
		for (const [ctx, inner, outer] of [
			[cc, 'rgba(176,132,72,0.75)', 'rgba(205,168,108,0)'],
			[bc, 'rgba(0,0,0,0.85)', 'rgba(0,0,0,0)'],
		]) {
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(rot);
			ctx.scale(1, sy / s);
			const g = ctx.createRadialGradient(0, 0, 0, 0, 0, s);
			g.addColorStop(0, inner);
			g.addColorStop(0.7, inner);
			g.addColorStop(1, outer);
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.arc(0, 0, s, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	}
	return { map: tex(col), bump: tex(bmp, { srgb: false }) };
}

/** Ardoise : gris anthracite, strates et rayures. */
export function slate() {
	const a = hex('#1F2226');
	const b = hex('#33383E');
	const c2 = hex('#474D55');
	const { col, bmp } = paint(512, 256, (u, v) => {
		const n = fbm(u * 4, v * 3, 1.7, 4);
		const strata = noise3(u * 2.5, v * 14, 4.2) * 0.5 + 0.5;
		let c = mix(a, b, smoothstep(-0.5, 0.6, n));
		c = mix(c, c2, smoothstep(0.82, 0.97, strata) * 0.35);
		return [c[0], c[1], c[2], 0.5 + n * 0.25 + strata * 0.05];
	});
	const t = tex(col, { repeat: true });
	const bump = tex(bmp, { srgb: false, repeat: true });
	return { map: t, bump };
}

/**
 * Raclette fondue (UV planaires, centre 0.5) : teinte multipliée par la couleur du
 * matériau, zones plus dorées, petites bulles en relief, film gras plus brillant.
 */
export function cheese() {
	const W = 256;
	const warm = hex('#FBEAD0');
	const gold = hex('#E7B676');
	const { col, bmp } = paint(W, W, (u, v) => {
		const n = fbm(u * 5, v * 5, 8.3, 4);
		const spot = smoothstep(0.35, 0.9, noise3(u * 6, v * 6, 2.7));
		let c = mix([255, 252, 246], warm, smoothstep(-0.35, 0.55, n) * 0.5);
		c = mix(c, gold, spot * 0.22);
		return [c[0], c[1], c[2], 0.5 + n * 0.18 + noise3(u * 40, v * 40, 1) * 0.04];
	});
	// Bulles : petits dômes (relief) au reflet un peu plus clair.
	const r = rng(23);
	const cc = col.getContext('2d');
	const bc = bmp.getContext('2d');
	for (let i = 0; i < 140; i++) {
		const x = r() * W;
		const y = r() * W;
		const s = 1.2 + r() * r() * 5.5;
		for (const [ctx, inner] of [[cc, 'rgba(255,253,240,0.55)'], [bc, 'rgba(255,255,255,0.7)']]) {
			const g = ctx.createRadialGradient(x, y, 0, x, y, s);
			g.addColorStop(0, inner);
			g.addColorStop(1, 'rgba(255,255,255,0)');
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.arc(x, y, s, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	// Quelques taches dorées (fromage passé sous la braise).
	for (let i = 0; i < 26; i++) {
		const x = r() * W;
		const y = r() * W;
		const s = 3 + r() * 9;
		const g = cc.createRadialGradient(x, y, 0, x, y, s);
		g.addColorStop(0, 'rgba(214,150,70,0.32)');
		g.addColorStop(1, 'rgba(214,150,70,0)');
		cc.fillStyle = g;
		cc.beginPath();
		cc.arc(x, y, s, 0, Math.PI * 2);
		cc.fill();
	}
	// Rugosité : film gras (lisse) par plaques.
	const { bmp: rough } = paint(128, 128, (u, v) => [0, 0, 0, 0.55 + 0.45 * smoothstep(-0.4, 0.5, fbm(u * 4 + 7, v * 4, 2, 3))]);
	return { map: tex(col), bump: tex(bmp, { srgb: false }), rough: tex(rough, { srgb: false }) };
}

/**
 * Chair de citron (face coupée), disque centré, rayon = 0.5 en UV :
 * écorce, ziste blanc, quartiers de pulpe en vésicules, membranes, cœur, pépins.
 * Retourne aussi un relief (vésicules bombées, membranes en creux).
 */
export function lemon() {
	const W = 512;
	const R = W / 2;
	const col = canvas(W, W);
	const bmp = canvas(W, W);
	const c = col.getContext('2d');
	const b = bmp.getContext('2d');
	const r = rng(31);
	const disc = (ctx, rad, fill) => {
		ctx.fillStyle = fill;
		ctx.beginPath();
		ctx.arc(R, R, rad, 0, Math.PI * 2);
		ctx.fill();
	};
	// Écorce, ziste, fond de pulpe.
	disc(c, R, '#D8B70C');
	disc(c, R * 0.975, '#F3D21C');
	disc(c, R * 0.945, '#F7E7A6');
	disc(c, R * 0.925, '#FBF4DA');
	const pulp = c.createRadialGradient(R, R, R * 0.05, R, R, R * 0.87);
	pulp.addColorStop(0, '#F6EB9A');
	pulp.addColorStop(0.6, '#F1E06A');
	pulp.addColorStop(1, '#EBD651');
	disc(c, R * 0.87, pulp);
	b.fillStyle = '#808080';
	b.fillRect(0, 0, W, W);
	disc(b, R * 0.93, '#8C8C8C');
	disc(b, R * 0.87, '#6E6E6E');

	// Quartiers : angles légèrement irréguliers.
	const N = 10;
	const angles = [];
	let acc = r() * Math.PI;
	for (let i = 0; i < N; i++) {
		angles.push(acc);
		acc += ((Math.PI * 2) / N) * (0.85 + r() * 0.3);
	}
	const scale = (Math.PI * 2) / (acc - angles[0]);
	for (let i = 0; i < N; i++) angles[i] = angles[0] + (angles[i] - angles[0]) * scale;
	const tones = ['#F3E26C', '#EDD94F', '#F7EC98', '#E7D243', '#F1DF60'];
	for (let i = 0; i < N; i++) {
		const a0 = angles[i];
		const a1 = i + 1 < N ? angles[i + 1] : angles[0] + Math.PI * 2;
		const span = a1 - a0;
		// Vésicules : gouttes allongées, orientées vers le centre.
		for (let k = 0; k < 150; k++) {
			const rho = 0.13 + Math.sqrt(r()) * 0.71;
			const margin = 0.05 / Math.max(0.2, rho);
			const a = a0 + margin + r() * Math.max(0, span - margin * 2);
			const x = R + Math.cos(a) * rho * R;
			const y = R + Math.sin(a) * rho * R;
			const len = (0.045 + r() * 0.06) * R;
			const wid = (0.012 + r() * 0.014) * R * (0.6 + rho);
			for (const [ctx, fill, hi] of [
				[c, tones[Math.floor(r() * tones.length)], 'rgba(255,250,215,0.55)'],
				[b, 'rgba(225,225,225,0.9)', 'rgba(255,255,255,0.8)'],
			]) {
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(a);
				ctx.globalAlpha = 0.9;
				ctx.fillStyle = fill;
				ctx.beginPath();
				ctx.ellipse(0, 0, len, wid, 0, 0, Math.PI * 2);
				ctx.fill();
				// Reflet de jus sur le bord extérieur de chaque vésicule.
				ctx.globalAlpha = 1;
				ctx.fillStyle = hi;
				ctx.beginPath();
				ctx.ellipse(len * 0.25, -wid * 0.25, len * 0.45, wid * 0.35, 0, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();
			}
		}
		// Membrane entre deux quartiers.
		for (const [ctx, stroke, w] of [[c, 'rgba(252,247,225,0.95)', 0.016], [b, '#5A5A5A', 0.02]]) {
			ctx.strokeStyle = stroke;
			ctx.lineWidth = w * R;
			ctx.lineCap = 'round';
			ctx.beginPath();
			ctx.moveTo(R + Math.cos(a0) * R * 0.07, R + Math.sin(a0) * R * 0.07);
			const am = a0 + (r() - 0.5) * 0.04;
			ctx.quadraticCurveTo(R + Math.cos(am) * R * 0.5, R + Math.sin(am) * R * 0.5, R + Math.cos(a0) * R * 0.875, R + Math.sin(a0) * R * 0.875);
			ctx.stroke();
		}
	}
	// Cœur blanc et pépins.
	const core = c.createRadialGradient(R, R, 0, R, R, R * 0.1);
	core.addColorStop(0, '#FCF7E2');
	core.addColorStop(0.75, '#F8EDC0');
	core.addColorStop(1, 'rgba(248,237,192,0)');
	disc(c, R * 0.1, core);
	for (let i = 0; i < 3; i++) {
		const k = Math.floor(r() * N);
		const a = angles[k] + 0.3;
		const x = R + Math.cos(a) * R * 0.24;
		const y = R + Math.sin(a) * R * 0.24;
		for (const [ctx, fill] of [[c, '#EFE3B8'], [b, '#D8D8D8']]) {
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(a);
			ctx.fillStyle = fill;
			ctx.beginPath();
			ctx.ellipse(0, 0, R * 0.05, R * 0.022, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	}
	// Ombre douce au pied du ziste (pulpe un peu plus sombre en bordure).
	const rim = c.createRadialGradient(R, R, R * 0.7, R, R, R * 0.87);
	rim.addColorStop(0, 'rgba(200,140,0,0)');
	rim.addColorStop(1, 'rgba(190,160,0,0.2)');
	disc(c, R * 0.87, rim);
	const map = tex(col);
	map.anisotropy = 8;
	return { map, bump: tex(bmp, { srgb: false }) };
}

/** Écorce de citron : pores (relief) et légères nuances. u = tour, v = épaisseur. */
export function rind() {
	const { col, bmp } = paint(512, 64, (u, v) => {
		const n = noise3(u * 60, v * 8, 2.1);
		const pore = smoothstep(0.35, 0.75, Math.abs(noise3(u * 180, v * 24, 5.3)));
		const k = 0.94 + n * 0.06 - pore * 0.05;
		return [244 * k, 212 * k, 30 * k, 0.6 - pore * 0.35 + n * 0.05];
	});
	return { map: tex(col), bump: tex(bmp, { srgb: false }) };
}

/**
 * Coupe de chorizo (disque, rayon 0.5 en UV) : chair rouge paprika marbrée de gras,
 * grains de paprika, boyau sombre en bordure.
 */
export function chorizo() {
	const W = 256;
	const R = W / 2;
	const { col, bmp } = paint(W, W, (u, v) => {
		const d = Math.hypot(u - 0.5, v - 0.5) * 2;
		const n = fbm(u * 6, v * 6, 3.3, 3);
		let c = mix(hex('#9E2216'), hex('#B83A22'), smoothstep(-0.4, 0.5, n));
		c = mix(c, hex('#7A160F'), smoothstep(0.55, 0.85, noise3(u * 30, v * 30, 1.7)) * 0.5);
		c = mix(c, hex('#4E0E0A'), smoothstep(0.9, 0.97, d));
		return [c[0], c[1], c[2], 0.45 + n * 0.1];
	});
	const r = rng(41);
	const cc = col.getContext('2d');
	const bc = bmp.getContext('2d');
	// Gras : petits morceaux irréguliers, crème rosé, légèrement en relief.
	for (let i = 0; i < 70; i++) {
		const rho = Math.sqrt(r()) * 0.84;
		const a = r() * Math.PI * 2;
		const x = R + Math.cos(a) * rho * R;
		const y = R + Math.sin(a) * rho * R;
		const s = (0.018 + r() * r() * 0.05) * R;
		const pts = 7;
		for (const [ctx, fill] of [[cc, ['#F1D2C2', '#EBC0AC', '#F6E0D2'][Math.floor(r() * 3)]], [bc, '#B0B0B0']]) {
			ctx.fillStyle = fill;
			ctx.beginPath();
			for (let k = 0; k < pts; k++) {
				const t = (k / pts) * Math.PI * 2;
				const rr = s * (0.6 + 0.5 * Math.abs(Math.sin(t * 2 + i)));
				const px = x + Math.cos(t) * rr * 1.3;
				const py = y + Math.sin(t) * rr;
				if (k) ctx.lineTo(px, py);
				else ctx.moveTo(px, py);
			}
			ctx.closePath();
			ctx.fill();
		}
	}
	// Grains de paprika et de poivre.
	for (let i = 0; i < 160; i++) {
		const rho = Math.sqrt(r()) * 0.86;
		const a = r() * Math.PI * 2;
		cc.fillStyle = r() < 0.7 ? 'rgba(120,20,10,0.8)' : 'rgba(40,10,8,0.8)';
		cc.beginPath();
		cc.arc(R + Math.cos(a) * rho * R, R + Math.sin(a) * rho * R, 0.6 + r() * 1.6, 0, Math.PI * 2);
		cc.fill();
	}
	return { map: tex(col), bump: tex(bmp, { srgb: false }) };
}

/**
 * Pâte de raclette (UV planaires, rayon de la meule = 0.49) : crème doré, quelques
 * petits trous, liseré de croûte orangé au bord.
 */
export function paste() {
	const W = 256;
	const R = W / 2;
	const { col, bmp } = paint(W, W, (u, v) => {
		const d = Math.hypot(u - 0.5, v - 0.5) * 2;
		const n = fbm(u * 5, v * 5, 6.1, 3);
		let c = mix(hex('#F2D98C'), hex('#EBCB72'), smoothstep(-0.3, 0.5, n));
		c = mix(c, hex('#E0B257'), smoothstep(0.84, 0.94, d) * 0.7);
		c = mix(c, hex('#A8601F'), smoothstep(0.94, 0.965, d));
		return [c[0], c[1], c[2], 0.55 + n * 0.06];
	});
	const r = rng(52);
	const cc = col.getContext('2d');
	const bc = bmp.getContext('2d');
	for (let i = 0; i < 14; i++) {
		const x = R + (r() - 0.5) * R * 1.4;
		const y = R + (r() - 0.5) * R * 1.4;
		const s = (0.02 + r() * 0.035) * R;
		for (const [ctx, inner, outer] of [[cc, 'rgba(196,150,60,0.9)', 'rgba(230,200,120,0)'], [bc, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0)']]) {
			const g = ctx.createRadialGradient(x, y, 0, x, y, s);
			g.addColorStop(0, inner);
			g.addColorStop(0.75, inner);
			g.addColorStop(1, outer);
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.ellipse(x, y, s, s * 0.85, r() * 3, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	return { map: tex(col), bump: tex(bmp, { srgb: false }) };
}

/** Fibres de thon (relief) : stries parallèles à u, légèrement ondulées. */
export function fiber() {
	const { bmp } = paint(256, 256, (u, v) => {
		const warp = noise3(u * 3, v * 3, 1.3) * 0.08;
		const ridge = 1 - Math.abs(noise3(u * 2.5, (v + warp) * 46, 4.2));
		const fine = noise3(u * 10, (v + warp) * 140, 7.7) * 0.5 + 0.5;
		return [0, 0, 0, 0.2 + ridge * 0.55 + fine * 0.25];
	});
	return tex(bmp, { srgb: false });
}

/** Bambou / bois clair (pics, fourchettes en bois). */
export function wood() {
	const a = hex('#C9A46A');
	const b = hex('#E6CC98');
	const { col, bmp } = paint(256, 64, (u, v) => {
		const n = noise3(u * 2, v * 30, 0.5) * 0.5 + noise3(u * 8, v * 80, 2) * 0.25;
		const c = mix(a, b, 0.5 + n);
		return [c[0], c[1], c[2], 0.5 + n * 0.5];
	});
	return { map: tex(col, { repeat: true }), bump: tex(bmp, { srgb: false, repeat: true }) };
}

/** Drapeau « TÒPAS » : fond rouge, logo crème (fichier officiel). */
export async function flag(logoUrl) {
	const c = canvas(1024, 640);
	const ctx = c.getContext('2d');
	ctx.fillStyle = '#B21236';
	ctx.fillRect(0, 0, 1024, 640);
	try {
		const img = new Image();
		img.decoding = 'async';
		img.src = logoUrl;
		await img.decode();
		const w = 760;
		const h = (w * img.naturalHeight) / img.naturalWidth || 345;
		ctx.drawImage(img, (1024 - w) / 2, (640 - h) / 2, w, h);
	} catch (e) {
		ctx.fillStyle = '#EFEFE3';
		ctx.font = '900 240px Archivo, Arial Black, sans-serif';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText('TÒPAS', 512, 330);
	}
	const t = tex(c);
	t.anisotropy = 8;
	return t;
}

/** Ombre de contact douce (dégradé radial). */
export function shadow() {
	const c = canvas(256, 256);
	const ctx = c.getContext('2d');
	const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
	g.addColorStop(0, 'rgba(0,0,0,0.55)');
	g.addColorStop(0.45, 'rgba(0,0,0,0.25)');
	g.addColorStop(1, 'rgba(0,0,0,0)');
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, 256, 256);
	return tex(c);
}
