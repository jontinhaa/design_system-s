/**
 * Bruit procédural (simplex 3D, fbm) et hasard déterministe.
 * Sert à sculpter le pain, les garnitures et à générer les textures.
 */

export function rng(seed = 1) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = (a + 0x6d2b79f5) | 0;
		let t = Math.imul(a ^ (a >>> 15), 1 | a);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

const grad3 = new Float32Array([
	1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0,
	1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1,
	0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
]);
const perm = new Uint8Array(512);
const permMod12 = new Uint8Array(512);
{
	const r = rng(1312);
	const p = new Uint8Array(256);
	for (let i = 0; i < 256; i++) p[i] = i;
	for (let i = 255; i > 0; i--) {
		const j = Math.floor(r() * (i + 1));
		[p[i], p[j]] = [p[j], p[i]];
	}
	for (let i = 0; i < 512; i++) {
		perm[i] = p[i & 255];
		permMod12[i] = perm[i] % 12;
	}
}
const F3 = 1 / 3;
const G3 = 1 / 6;

/** Simplex 3D, sortie dans [-1, 1]. */
export function noise3(xin, yin, zin) {
	let n0, n1, n2, n3;
	const s = (xin + yin + zin) * F3;
	const i = Math.floor(xin + s);
	const j = Math.floor(yin + s);
	const k = Math.floor(zin + s);
	const t = (i + j + k) * G3;
	const x0 = xin - (i - t);
	const y0 = yin - (j - t);
	const z0 = zin - (k - t);
	let i1, j1, k1, i2, j2, k2;
	if (x0 >= y0) {
		if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
		else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
		else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
	} else {
		if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
		else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
		else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
	}
	const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
	const x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3;
	const x3 = x0 - 1 + 3 * G3, y3 = y0 - 1 + 3 * G3, z3 = z0 - 1 + 3 * G3;
	const ii = i & 255, jj = j & 255, kk = k & 255;
	let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
	if (t0 < 0) n0 = 0;
	else {
		const g = permMod12[ii + perm[jj + perm[kk]]] * 3;
		t0 *= t0;
		n0 = t0 * t0 * (grad3[g] * x0 + grad3[g + 1] * y0 + grad3[g + 2] * z0);
	}
	let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
	if (t1 < 0) n1 = 0;
	else {
		const g = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
		t1 *= t1;
		n1 = t1 * t1 * (grad3[g] * x1 + grad3[g + 1] * y1 + grad3[g + 2] * z1);
	}
	let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
	if (t2 < 0) n2 = 0;
	else {
		const g = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
		t2 *= t2;
		n2 = t2 * t2 * (grad3[g] * x2 + grad3[g + 1] * y2 + grad3[g + 2] * z2);
	}
	let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
	if (t3 < 0) n3 = 0;
	else {
		const g = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
		t3 *= t3;
		n3 = t3 * t3 * (grad3[g] * x3 + grad3[g + 1] * y3 + grad3[g + 2] * z3);
	}
	return 32 * (n0 + n1 + n2 + n3);
}

/** Bruit fractal (somme d'octaves), environ dans [-1, 1]. */
export function fbm(x, y, z, octaves = 4, lacunarity = 2, gain = 0.5) {
	let sum = 0;
	let amp = 0.5;
	let f = 1;
	let norm = 0;
	for (let o = 0; o < octaves; o++) {
		sum += amp * noise3(x * f, y * f, z * f);
		norm += amp;
		amp *= gain;
		f *= lacunarity;
	}
	return sum / norm;
}

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, v) => {
	const t = clamp((v - a) / (b - a));
	return t * t * (3 - 2 * t);
};
/** Remappe v de [a, b] vers [0, 1] (borné). */
export const range = (v, a, b) => clamp((v - a) / (b - a));
