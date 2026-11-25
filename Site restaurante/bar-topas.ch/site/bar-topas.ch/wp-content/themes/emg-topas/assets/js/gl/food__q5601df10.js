/**
 * Ingrédients 3D sculptés en code (aucun modèle à télécharger).
 * Unité : rayon d'une tranche de pain ≈ 1. Axe Y vers le haut.
 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { fbm, noise3, rng, smoothstep, lerp } from 'emg-topas/gl/noise';
import * as T from 'emg-topas/gl/textures';

const C = (h) => new THREE.Color(h);

/* ---------------------------------------------------------------------------
   Matériaux partagés
   ------------------------------------------------------------------------ */
export async function createMaterials(data) {
	const crust = T.crust();
	const crumb = T.crumb();
	const slate = T.slate();
	const cheeseT = T.cheese();
	const lemonT = T.lemon();
	const rindT = T.rind();
	const fiberT = T.fiber();
	const chorizoT = T.chorizo();
	const pasteT = T.paste();
	const wood = T.wood();
	const flagTex = await T.flag(data.logo);
	const flagBack = flagTex.clone();
	flagBack.wrapS = THREE.RepeatWrapping;
	flagBack.repeat.x = -1;
	flagBack.needsUpdate = true;
	const shadowTex = T.shadow();

	const phys = (o) => new THREE.MeshPhysicalMaterial(o);
	const cheeseO = {
		color: C('#F3CF6A'),
		map: cheeseT.map,
		bumpMap: cheeseT.bump,
		bumpScale: 1.4,
		roughness: 0.32,
		roughnessMap: cheeseT.rough,
		clearcoat: 1,
		clearcoatRoughness: 0.14,
		sheen: 0.25,
		sheenColor: C('#FFF0B8'),
		emissive: C('#5C3800'),
		emissiveIntensity: 0.08,
	};

	return {
		crust: new THREE.MeshStandardMaterial({ map: crust.map, bumpMap: crust.bump, bumpScale: 1.6, roughness: 0.62 }),
		crumb: new THREE.MeshStandardMaterial({ map: crumb.map, bumpMap: crumb.bump, bumpScale: 5, roughness: 0.92 }),
		cheese: phys(cheeseO),
		pepper: new THREE.MeshStandardMaterial({ color: C('#1E1712'), roughness: 0.85 }),
		// Nappe à deux couches : seule la face du dessous projette l'ombre (sinon auto-ombrage).
		cheeseDS: phys({ ...cheeseO, side: THREE.DoubleSide, shadowSide: THREE.FrontSide }),
		cheeseBlanket: phys({ ...cheeseO, side: THREE.DoubleSide, shadowSide: THREE.BackSide }),
		veg: phys({ vertexColors: true, roughness: 0.32, clearcoat: 0.85, clearcoatRoughness: 0.18 }),
		onion: phys({ vertexColors: true, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.4, sheenColor: C('#FFFFFF'), emissive: C('#FFF4E2'), emissiveIntensity: 0.02 }),
		glossy: phys({ vertexColors: true, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.12 }),
		// Pomme de terre rôtie : surface grenue, légèrement huileuse.
		potato: phys({ vertexColors: true, roughness: 0.6, clearcoat: 0.3, clearcoatRoughness: 0.45 }),
		matte: phys({ vertexColors: true, roughness: 0.55, clearcoat: 0.3, clearcoatRoughness: 0.4 }),
		cocktail: phys({ color: C('#F29A80'), roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.1, emissive: C('#5A1400'), emissiveIntensity: 0.08 }),
		aioli: phys({ color: C('#FBF7EE'), roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.06 }),
		herb: new THREE.MeshStandardMaterial({ color: C('#3C8A27'), roughness: 0.5, side: THREE.DoubleSide }),
		parsley: phys({ color: C('#348F24'), roughness: 0.42, clearcoat: 0.45, clearcoatRoughness: 0.3, sheen: 0.4, sheenColor: C('#B8E07A'), side: THREE.DoubleSide }),
		flake: phys({ color: C('#FFFFFF'), vertexColors: true, bumpMap: fiberT, bumpScale: 3, roughness: 0.6, clearcoat: 0.28, clearcoatRoughness: 0.42, sheen: 0.35, sheenColor: C('#FFE6D0') }),
		// Citron : pulpe juteuse (reflet vif, fausse translucidité par émission), écorce piquetée.
		lemonFlesh: phys({ map: lemonT.map, bumpMap: lemonT.bump, bumpScale: 2.2, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.12, emissive: C('#FFFFFF'), emissiveMap: lemonT.map, emissiveIntensity: 0.16 }),
		lemonRind: phys({ map: rindT.map, bumpMap: rindT.bump, bumpScale: 2, roughness: 0.36, clearcoat: 0.8, clearcoatRoughness: 0.2 }),
		bits: new THREE.MeshStandardMaterial({ color: C('#FFFFFF'), roughness: 0.9 }),
		dust: new THREE.MeshStandardMaterial({ color: C('#C2401C'), roughness: 0.8 }),
		dice: phys({ color: C('#FFFFFF'), roughness: 0.25, clearcoat: 1 }),
		crispy: new THREE.MeshStandardMaterial({ color: C('#B9772F'), roughness: 0.55 }),
		redOnion: phys({ vertexColors: true, roughness: 0.26, clearcoat: 0.9, clearcoatRoughness: 0.12, sheen: 0.15, sheenColor: C('#FFD6EE') }),
		olive: phys({ color: C('#2A2B1C'), roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.05 }),
		pimento: phys({ color: C('#C81E14'), roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08, emissive: C('#5A0600'), emissiveIntensity: 0.2 }),
		chorizoCut: phys({ map: chorizoT.map, bumpMap: chorizoT.bump, bumpScale: 2, roughness: 0.42, clearcoat: 0.6, clearcoatRoughness: 0.25 }),
		chorizoSkin: phys({ color: C('#6A170F'), bumpMap: fiberT, bumpScale: 1.5, roughness: 0.38, clearcoat: 0.8, clearcoatRoughness: 0.2 }),
		paste: phys({ map: pasteT.map, bumpMap: pasteT.bump, bumpScale: 2.5, roughness: 0.55, sheen: 0.3, sheenColor: C('#FFF3C8') }),
		pasteRind: new THREE.MeshStandardMaterial({ color: C('#A8601F'), bumpMap: crust.bump, bumpScale: 1.6, roughness: 0.85 }),
		bamboo: new THREE.MeshStandardMaterial({ map: wood.map, bumpMap: wood.bump, bumpScale: 1.5, roughness: 0.6 }),
		flag: new THREE.MeshStandardMaterial({ map: flagTex, roughness: 0.75, side: THREE.FrontSide }),
		flagBack: new THREE.MeshStandardMaterial({ map: flagBack, roughness: 0.75, side: THREE.BackSide }),
		// Fonte émaillée : brillance irrégulière et léger grain.
		pot: phys({ color: C('#1C1B1E'), roughness: 0.75, roughnessMap: slate.bump, bumpMap: slate.bump, bumpScale: 0.4, clearcoat: 0.55, clearcoatRoughness: 0.28, side: THREE.DoubleSide }),
		slate: new THREE.MeshStandardMaterial({ map: slate.map, bumpMap: slate.bump, bumpScale: 2, roughness: 1.05, roughnessMap: slate.bump }),
		glass: phys({ color: C('#FFFFFF'), roughness: 0.03, metalness: 0, transparent: true, opacity: 0.16, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 2.6, specularIntensity: 1, depthWrite: false, side: THREE.DoubleSide }),
		beer: phys({ color: C('#E8901A'), roughness: 0.05, clearcoat: 1, emissive: C('#B35500'), emissiveIntensity: 0.55 }),
		foam: phys({ color: C('#FFF8EA'), roughness: 0.7, sheen: 1, sheenRoughness: 0.5, sheenColor: C('#FFFFFF') }),
		bubble: new THREE.MeshBasicMaterial({ color: C('#FFF3CF'), transparent: true, opacity: 0.7 }),
		wine: phys({ color: C('#7E0B26'), roughness: 0.06, clearcoat: 0.6, clearcoatRoughness: 0.04, envMapIntensity: 0.55, emissive: C('#4A0414'), emissiveIntensity: 0.7 }),
		spark: new THREE.MeshBasicMaterial({ color: C('#EFEFE3') }),
		shadow: new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, toneMapped: false }),
	};
}

/* ---------------------------------------------------------------------------
   Utilitaires géométrie
   ------------------------------------------------------------------------ */
function eachVertex(geo, fn) {
	const p = geo.attributes.position;
	const v = new THREE.Vector3();
	for (let i = 0; i < p.count; i++) {
		v.fromBufferAttribute(p, i);
		fn(v, i);
		p.setXYZ(i, v.x, v.y, v.z);
	}
	p.needsUpdate = true;
}

function paintVertices(geo, fn) {
	const p = geo.attributes.position;
	const colors = new Float32Array(p.count * 3);
	const v = new THREE.Vector3();
	const c = new THREE.Color();
	for (let i = 0; i < p.count; i++) {
		v.fromBufferAttribute(p, i);
		fn(v, c, i);
		colors[i * 3] = c.r;
		colors[i * 3 + 1] = c.g;
		colors[i * 3 + 2] = c.b;
	}
	geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

/** UV planaires (vue de dessus) d'après un tableau de positions, échelle `size`. */
function planarUV(geo, pos, size) {
	const n = pos.length / 3;
	const uv = new Float32Array(n * 2);
	for (let i = 0; i < n; i++) {
		uv[i * 2] = pos[i * 3] / size + 0.5;
		uv[i * 2 + 1] = pos[i * 3 + 2] / size + 0.5;
	}
	geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

/** Fusionne les sommets (supprime coutures et facettes) avant de sculpter. */
function smooth(geo) {
	geo.deleteAttribute('normal');
	geo.deleteAttribute('uv');
	return mergeVertices(geo, 1e-4);
}

function mesh(geo, mat, cast = true) {
	const m = new THREE.Mesh(geo, mat);
	m.castShadow = cast;
	return m;
}

/* ---------------------------------------------------------------------------
   Pain (tranche de baguette) : croûte + mie + bords arrondis
   ------------------------------------------------------------------------ */
export const BREAD = { h: 0.62, squash: 1.12, top: 0.31 };

/** Contour de la tranche (rayon selon l'angle) : partagé par le pain et sa raclette. */
export function breadRadius(seed = 1) {
	const s = seed * 3.7;
	return (th) => 1 + 0.05 * noise3(Math.cos(th) * 1.2 + s, Math.sin(th) * 1.2, s) + 0.018 * noise3(Math.cos(th) * 4, Math.sin(th) * 4, s + 5);
}

/**
 * Profil de la tranche dans le plan (rayon, hauteur) pour un angle donné : dessus bombé,
 * épaule arrondie, puis flanc. Retourne une fonction at(s) → { r, y, nr, ny, len } le long
 * de l'abscisse curviligne s (0 = centre du dessus).
 */
function breadProfile(R, th) {
	const h = BREAD.h;
	const Rt = R(th);
	const pts = [];
	for (let i = 0; i <= 28; i++) {
		const rho = i / 28;
		const e = smoothstep(0.78, 1, rho);
		pts.push([rho * Rt * (1 - 0.07 * e ** 1.5), 0.5 * h + 0.04 * (1 - rho * rho) - 0.05 * h * e * e]);
	}
	for (let i = 1; i <= 24; i++) {
		const t = 1 - (i / 24) * 0.9;
		const rt = smoothstep(0.8, 1, t);
		const rb = smoothstep(0.16, 0, t);
		const y = t - 0.5;
		pts.push([Rt * (1 + 0.03 * (1 - (2 * y) ** 2)) * (1 - 0.07 * rt ** 1.5 - 0.045 * rb ** 1.5), y * h - 0.05 * h * rt * rt + 0.03 * h * rb * rb]);
	}
	const acc = [0];
	for (let i = 1; i < pts.length; i++) acc.push(acc[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
	const topLen = acc[28];
	const at = (sv) => {
		let i = 1;
		while (i < pts.length - 1 && acc[i] < sv) i++;
		const k = Math.min(1, Math.max(0, (sv - acc[i - 1]) / (acc[i] - acc[i - 1] || 1)));
		const r = pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k;
		const y = pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k;
		const tx = pts[i][0] - pts[i - 1][0];
		const ty = pts[i][1] - pts[i - 1][1];
		const l = Math.hypot(tx, ty) || 1;
		return { r, y, nr: -ty / l, ny: tx / l };
	};
	return { at, topLen };
}

export function breadGeometry(seed = 1) {
	const h = BREAD.h;
	const s = seed * 3.7;
	const R = breadRadius(seed);

	const side = new THREE.CylinderGeometry(1, 1, 1, 128, 14, true);
	eachVertex(side, (v) => {
		const th = Math.atan2(v.z, v.x);
		const t = v.y + 0.5;
		const rt = smoothstep(0.8, 1, t);
		const rb = smoothstep(0.16, 0, t);
		const crustN = 0.014 * fbm(v.x * 3 + s, v.y * 5, v.z * 3, 4) * (1 - rt) * (1 - rb);
		const rad = R(th) * (1 + 0.03 * (1 - (2 * v.y) ** 2)) * (1 - 0.07 * rt ** 1.5 - 0.045 * rb ** 1.5) + crustN;
		const y = v.y * h - 0.05 * h * rt * rt + 0.03 * h * rb * rb;
		v.set(Math.cos(th) * rad, y, Math.sin(th) * rad);
	});

	const cap = (top) => {
		const g = new THREE.RingGeometry(0, 1, 128, top ? 22 : 6);
		g.rotateX(top ? -Math.PI / 2 : Math.PI / 2);
		eachVertex(g, (v) => {
			const rho = Math.min(1, Math.hypot(v.x, v.z));
			const th = Math.atan2(v.z, v.x);
			const e = smoothstep(0.78, 1, rho);
			let rad, y;
			if (top) {
				rad = rho * R(th) * (1 - 0.07 * e ** 1.5);
				const pores = 0.016 * fbm(v.x * 4 + s, v.z * 4, s, 4) * (1 - e);
				y = 0.5 * h + 0.04 * (1 - rho * rho) - 0.05 * h * e * e + pores;
			} else {
				rad = rho * R(th) * (1 - 0.045 * e ** 1.5);
				y = -0.5 * h + 0.03 * h * e * e;
			}
			v.set(Math.cos(th) * rad, y, Math.sin(th) * rad);
		});
		return g;
	};

	const parts = [side, cap(true), cap(false)];
	parts.forEach((g) => {
		g.scale(BREAD.squash, 1, 1);
		g.computeVertexNormals();
	});
	return mergeGeometries(parts, true);
}

export function bread(mats, seed = 1) {
	return mesh(breadGeometry(seed), [mats.crust, mats.crumb, mats.crust]);
}

/* ---------------------------------------------------------------------------
   Raclette : tranche qui fond et coule sur les bords (morph target « fonte »)
   ------------------------------------------------------------------------ */
export function cheeseGeometry({ radius = 1.1, edge = 0.86, sag = 1.25, seed = 2, squash = BREAD.squash, dome = 0.05, hug = 0.5 } = {}) {
	const geo = new THREE.SphereGeometry(1, 192, 64);
	const pos = geo.attributes.position;
	const flat = new Float32Array(pos.count * 3);
	const melt = new Float32Array(pos.count * 3);
	const v = new THREE.Vector3();
	for (let i = 0; i < pos.count; i++) {
		v.fromBufferAttribute(pos, i);
		const th = Math.atan2(v.z, v.x);
		const d = Math.hypot(v.x, v.z);
		const thick = Math.sign(v.y) * Math.abs(v.y) ** 0.42 * 0.045;
		// Tranche à plat (légèrement carrée comme une vraie tranche de raclette).
		const sq = 1 + 0.06 * Math.cos(th * 4);
		flat[i * 3] = Math.cos(th) * d * radius * 0.92 * sq * squash;
		flat[i * 3 + 1] = thick + 0.01 * noise3(v.x * 3, v.z * 3, seed);
		flat[i * 3 + 2] = Math.sin(th) * d * radius * 0.92 * sq;
		// Fondue : déborde, s'affaisse, coulures.
		const r = d * radius * 1.06;
		const over = Math.max(0, r - edge);
		// Nappage qui déborde de la croûte et coule en larges vagues arrondies (pas de pointes).
		const lobe = smoothstep(-0.35, 0.55, noise3(Math.cos(th) * 1.1 + seed, Math.sin(th) * 1.1, seed));
		const droop = Math.min(0.26, over ** 1.1 * sag * (0.45 + 0.9 * lobe));
		const rr = r - over * hug + droop * 0.12;
		melt[i * 3] = Math.cos(th) * rr * squash;
		melt[i * 3 + 1] = thick * (1 - over * 0.8) + dome * (1 - Math.min(1, r * r)) - droop + 0.012 * fbm(v.x * 5, v.z * 5, seed, 3);
		melt[i * 3 + 2] = Math.sin(th) * rr;
	}
	pos.array.set(flat);
	pos.needsUpdate = true;
	// Soudure de la couture de la sphère (sinon une ligne visible sur la nappe).
	geo.morphAttributes.position = [new THREE.BufferAttribute(melt, 3)];
	const welded = smooth(geo);
	planarUV(welded, welded.attributes.position.array, 2.6);
	welded.computeVertexNormals();
	const tmp = new THREE.BufferGeometry();
	tmp.setIndex(welded.index);
	tmp.setAttribute('position', welded.morphAttributes.position[0].clone());
	tmp.computeVertexNormals();
	welded.morphAttributes.normal = [tmp.attributes.normal];
	geo.dispose();
	return welded;
}

export function cheese(mats, opts = {}) {
	const m = mesh(cheeseGeometry(opts), mats.cheese);
	m.morphTargetInfluences = [1];
	return m;
}

/**
 * Raclette posée sur une tranche : la nappe suit exactement le profil du pain
 * (dessus, épaule, flanc) et coule uniformément d'environ `drape` le long de la croûte.
 * Morph target 0 : tranche à plat → fondue. Repère : celui du pain (origine au centre).
 */
export function breadCheeseGeometry(seed = 1, { drape = 0.17, wave = 0.03, cover = 0.92 } = {}) {
	const R = breadRadius(seed);
	const NT = 144;
	const NS = 40;
	const ring = (NS + 1);
	const count = (NT + 1) * ring * 2;
	const flat = new Float32Array(count * 3);
	const melt = new Float32Array(count * 3);
	const topY = BREAD.h / 2 + 0.04;
	// Coulures : quelques langues arrondies (profil en demi-ellipse) à des angles choisis.
	const rd = rng(seed * 5 + 2);
	const tongues = Array.from({ length: 6 }, (_, k) => ({ a: (k / 6) * Math.PI * 2 + rd() * 0.8, w: 0.16 + rd() * 0.16, l: 0.05 + rd() * 0.12 }));
	const dripAt = (th) => {
		let m = 0;
		for (const t of tongues) {
			const d = Math.atan2(Math.sin(th - t.a), Math.cos(th - t.a)) / t.w;
			if (Math.abs(d) < 1) m = Math.max(m, t.l * Math.sqrt(1 - d * d));
		}
		return m;
	};
	for (let i = 0; i <= NT; i++) {
		const th = (i / NT) * Math.PI * 2;
		const prof = breadProfile(R, th);
		// Coulures : langues arrondies de longueur variable le long de la croûte.
		const dl = dripAt(th);
		const drip = dl / 0.17;
		const len = prof.topLen + drape + wave * noise3(Math.cos(th) * 1.4 + seed, Math.sin(th) * 1.4, seed + 9) + dl;
		const cx = Math.cos(th);
		const cz = Math.sin(th);
		for (let j = 0; j <= NS; j++) {
			const u = j / NS;
			// Plus épais au bout des coulures (goutte qui s'accumule).
			const thick = 0.05 * (1 - u ** 3) + 0.012 + drip * 0.018 * smoothstep(0.78, 0.97, u);
			const p = prof.at(u * len);
			for (let layer = 0; layer < 2; layer++) {
				const off = layer === 0 ? 0.022 + thick : 0.022;
				const k = ((layer * (NT + 1) + i) * ring + j) * 3;
				const r = p.r + p.nr * off;
				const y = p.y + p.ny * off;
				melt[k] = cx * r * BREAD.squash;
				melt[k + 1] = y;
				melt[k + 2] = cz * r;
				// À plat : une tranche posée sur le dessus, avant de fondre.
				const rf = u * R(th) * cover;
				flat[k] = cx * rf * BREAD.squash;
				flat[k + 1] = topY + 0.03 + (layer === 0 ? thick : 0);
				flat[k + 2] = cz * rf;
			}
		}
	}
	const index = [];
	const v = (layer, i, j) => (layer * (NT + 1) + i) * ring + j;
	for (let i = 0; i < NT; i++) {
		for (let j = 0; j < NS; j++) {
			index.push(v(0, i, j), v(0, i, j + 1), v(0, i + 1, j), v(0, i + 1, j), v(0, i, j + 1), v(0, i + 1, j + 1));
			index.push(v(1, i, j), v(1, i + 1, j), v(1, i, j + 1), v(1, i + 1, j), v(1, i + 1, j + 1), v(1, i, j + 1));
		}
		// Bord arrondi : couture dessus / dessous.
		index.push(v(0, i, NS), v(1, i, NS), v(0, i + 1, NS), v(0, i + 1, NS), v(1, i, NS), v(1, i + 1, NS));
	}
	const geo = new THREE.BufferGeometry();
	geo.setIndex(index);
	geo.setAttribute('position', new THREE.BufferAttribute(flat, 3));
	planarUV(geo, melt, 2.8);
	geo.computeVertexNormals();
	const tmp = new THREE.BufferGeometry();
	tmp.setIndex(index);
	tmp.setAttribute('position', new THREE.BufferAttribute(melt.slice(), 3));
	tmp.computeVertexNormals();
	geo.morphAttributes.position = [new THREE.BufferAttribute(melt, 3)];
	geo.morphAttributes.normal = [new THREE.BufferAttribute(tmp.attributes.normal.array.slice(), 3)];
	tmp.dispose();
	return geo;
}

export function breadCheese(mats, seed = 1, opts = {}) {
	const m = mesh(breadCheeseGeometry(seed, opts), mats.cheeseDS);
	m.morphTargetInfluences = [1];
	return m;
}

/** Poivre moulu sur le fromage (petits éclats). */
export function pepper(mats, count = 46, radius = 0.6, seed = 3) {
	const geo = new THREE.IcosahedronGeometry(0.014, 0);
	const im = new THREE.InstancedMesh(geo, mats.pepper, count);
	const r = rng(seed);
	const m4 = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	for (let i = 0; i < count; i++) {
		const a = r() * Math.PI * 2;
		const d = Math.sqrt(r()) * radius;
		q.setFromEuler(new THREE.Euler(r() * 3, r() * 3, r() * 3));
		const s = 0.6 + r() * 1.2;
		m4.compose(new THREE.Vector3(Math.cos(a) * d * BREAD.squash, 0, Math.sin(a) * d), q, new THREE.Vector3(s, s * 0.5, s));
		im.setMatrixAt(i, m4);
	}
	return im;
}

/* ---------------------------------------------------------------------------
   Légumes
   ------------------------------------------------------------------------ */
export function cornichon(mats, seed = 4) {
	const geo = smooth(new THREE.SphereGeometry(1, 72, 40));
	const L = 0.56;
	const warts = [];
	eachVertex(geo, (v) => {
		const n = v.clone();
		// Verrues nettes (petits picots) + léger relief en côtes.
		const w = smoothstep(0.58, 0.86, noise3(v.x * 9 + seed, v.y * 9, v.z * 9));
		warts.push(w);
		const rib = noise3(Math.atan2(v.y, v.x) * 2, v.z * 3, seed) * 0.025;
		const taper = 1 - 0.24 * Math.abs(v.z) ** 2.2;
		const k = 1 + w * 0.085 + rib;
		v.set(n.x * 0.18 * taper * k, n.y * 0.155 * taper * k, n.z * L);
		v.x += 0.1 * (n.z ** 2);
	});
	geo.computeVertexNormals();
	const dark = C('#2C4509');
	const mid = C('#567318');
	const light = C('#8FA53E');
	const tipC = C('#B9C46E');
	const endC = C('#8E9A3C');
	let i = 0;
	paintVertices(geo, (v, c) => {
		const stripe = noise3(Math.atan2(v.y, v.x) * 1.5, v.z * 2, seed + 2) * 0.5 + 0.5;
		c.copy(dark).lerp(mid, stripe);
		c.lerp(light, smoothstep(0.55, 0.9, noise3(v.x * 16, v.y * 16, v.z * 16)) * 0.35);
		c.lerp(tipC, warts[i++] * 0.75);
		c.lerp(endC, smoothstep(0.42, 0.56, Math.abs(v.z)) * 0.7);
	});
	return mesh(geo, mats.veg);
}

export function pearlOnion(mats, size = 0.25, seed = 1) {
	const geo = smooth(new THREE.SphereGeometry(1, 72, 54));
	eachVertex(geo, (v) => {
		const y = v.y;
		// Pointe en haut, base un peu aplatie (plateau de racine), légère asymétrie.
		const tip = y > 0.5 ? (y - 0.5) ** 2 * 1.5 : 0;
		const base = y < -0.82 ? (y + 0.82) * 0.5 : 0;
		const lean = 0.04 * noise3(v.x * 2 + seed, v.y * 2, v.z * 2);
		v.set(v.x * size * (1 + lean), (y + tip - base) * size * 1.1, v.z * size * (1 - lean));
	});
	geo.computeVertexNormals();
	const base = C('#F6F2E4');
	const vein = C('#D6CBA6');
	const top = C('#E2DA9E');
	const root = C('#C9B48A');
	const r = rng(seed * 7 + 3);
	// Nervures irrégulières (méridiens des couches).
	const veins = Array.from({ length: 24 }, (_, i) => (i / 24) * Math.PI * 2 + (r() - 0.5) * 0.2);
	paintVertices(geo, (v, c) => {
		const th = Math.atan2(v.z, v.x);
		const y = v.y / size;
		let k = 0;
		for (const a of veins) {
			const dd = Math.abs(Math.atan2(Math.sin(th - a), Math.cos(th - a)));
			k = Math.max(k, smoothstep(0.045, 0, dd));
		}
		c.copy(base).lerp(vein, k * 0.9 * smoothstep(1.1, 0.3, Math.abs(y)));
		c.lerp(top, smoothstep(0.8, 1.25, y));
		c.lerp(root, smoothstep(-0.9, -1.02, y) * 0.85);
		c.multiplyScalar(0.97 + 0.03 * noise3(v.x * 40, v.y * 40, v.z * 40));
	});
	return mesh(geo, mats.onion);
}

/** Demi-anneau d'oignon rouge (extérieur violet, intérieur blanc rosé). */
export function redOnion(mats, arc = Math.PI * 1.15, R = 0.34, { layers = 1, seed = 3 } = {}) {
	const outer = C('#43062F');
	const ring = C('#9A2468');
	const inner = C('#F4E2EA');
	const g = new THREE.Group();
	for (let L = 0; L < layers; L++) {
		const RR = R - L * 0.075;
		const a0 = L * 0.35;
		const span = arc - L * 0.5;
		const w = 0.05;
		const hh = 0.014;
		const geo = grid(Math.round(48 * span / Math.PI), 16, (s, t) => {
			const al = a0 + s * span;
			const ph = t * Math.PI * 2;
			// Extrémités arrondies (la tranche se referme), section rectangulaire adoucie.
			const end = Math.sqrt(Math.max(0, Math.min(1, s / 0.03, (1 - s) / 0.03)));
			const cx = Math.sign(Math.cos(ph)) * Math.abs(Math.cos(ph)) ** 0.45 * w * end;
			const cz = Math.sign(Math.sin(ph)) * Math.abs(Math.sin(ph)) ** 0.45 * hh * (0.4 + 0.6 * end);
			const wob = 1 + 0.015 * noise3(Math.cos(al) * 3 + seed, Math.sin(al) * 3, L);
			const rad = RR * wob + cx;
			return [Math.cos(al) * rad, Math.sin(al) * rad, cz, s, t];
		}, (c) => {
			const al = Math.atan2(c.y, c.x);
			return new THREE.Vector3(c.x - Math.cos(al) * RR, c.y - Math.sin(al) * RR, c.z);
		});
		paintVertices(geo, (v, c) => {
			const k = (Math.hypot(v.x, v.y) - RR) / w;
			c.copy(inner).lerp(ring, smoothstep(-0.25, 0.25, k)).lerp(outer, smoothstep(0.4, 0.75, k));
		});
		g.add(mesh(geo, mats.redOnion));
	}
	return g;
}

export function olive(mats, { green = false, seed = 2 } = {}) {
	const geo = smooth(new THREE.SphereGeometry(1, 48, 32));
	const RX = 0.2;
	const RY = 0.142;
	eachVertex(geo, (v) => {
		const n = v.x;
		// Extrémité dénoyautée : cratère (farci au poivron pour la verte, creux pour la noire).
		const crater = smoothstep(0.72, 0.98, n) * (green ? 0.1 : 0.05);
		const wrinkle = 0.006 * noise3(v.x * 5 + seed, v.y * 5, v.z * 5);
		v.set((v.x * RX - crater) * (1 + wrinkle), v.y * RY * (1 + wrinkle), v.z * RY * (1 + wrinkle));
	});
	geo.computeVertexNormals();
	const a = green ? C('#5F6E1C') : C('#151012');
	const b = green ? C('#7C8A2A') : C('#2A2024');
	const lip = green ? C('#A3A458') : C('#0D0909');
	paintVertices(geo, (v, c) => {
		c.copy(a).lerp(b, noise3(v.x * 6 + seed, v.y * 6, v.z * 6) * 0.5 + 0.5);
		c.lerp(lip, smoothstep(0.14, 0.19, v.x) * (green ? 0.6 : 0.8));
	});
	const g = new THREE.Group();
	g.add(mesh(geo, mats.glossy));
	if (green) {
		const p = smooth(new THREE.SphereGeometry(0.06, 24, 16));
		eachVertex(p, (v) => {
			v.x *= 0.7;
			v.multiplyScalar(1 + 0.15 * noise3(v.x * 60, v.y * 60, v.z * 60));
		});
		p.computeVertexNormals();
		const pim = mesh(p, mats.pimento);
		pim.position.x = RX - 0.075;
		g.add(pim);
	}
	return g;
}

/** Rondelle de chorizo, légèrement bombée : coupe marbrée des deux côtés, boyau sur la tranche. */
export function chorizoSlice(mats, r = 0.2, seed = 5) {
	const th = r * 0.24;
	const bulge = th * 0.3;
	const curl = r * 0.08;
	const Rr = (a) => r * (1 + 0.035 * noise3(Math.cos(a) * 2 + seed, Math.sin(a) * 2, seed));
	const face = (side) =>
		grid(64, 12, (s, t) => {
			const a = s * Math.PI * 2;
			const rr = t * Rr(a);
			const x = Math.cos(a) * rr;
			const z = Math.sin(a) * rr;
			const y = side * th / 2 + curl * t * t + (t < 1 ? side * 0.004 * noise3(x * 30, z * 30, side) : 0);
			return [x, y, z, 0.5 + x / (2 * r) * 0.97, 0.5 + z / (2 * r) * 0.97];
		}, new THREE.Vector3(0, side, 0));
	const skin = grid(64, 6, (s, t) => {
		const a = s * Math.PI * 2;
		const ph = -Math.PI / 2 + t * Math.PI;
		const rr = Rr(a) + bulge * Math.cos(ph);
		return [Math.cos(a) * rr, Math.sin(ph) * th / 2 + curl, Math.sin(a) * rr, s, t];
	}, (c) => new THREE.Vector3(c.x, 0, c.z));
	const geo = mergeGeometries([mergeGeometries([face(1), face(-1)]), skin], true);
	const m = new THREE.Mesh(geo, [mats.chorizoCut, mats.chorizoSkin]);
	m.castShadow = true;
	return m;
}

/** Pointe de raclette (part de meule) : pâte trouée, croûte orangée sur le bord bombé. */
export function cheeseWedge(mats, R = 0.34, seed = 1) {
	const TH = 0.5;
	const h = 0.15;
	const bulge = 0.016;
	const Rr = (a) => R * (1 + 0.012 * noise3(a * 6 + seed, seed, 0));
	const uv = (x, z) => [0.5 + x / (2 * R) * 0.98, 0.5 + z / (2 * R) * 0.98];
	const top = (side) =>
		grid(18, 10, (s, t) => {
			const a = s * TH;
			const rr = t * Rr(a);
			const x = Math.cos(a) * rr;
			const z = Math.sin(a) * rr;
			return [x, side * h / 2 + (side > 0 ? 0.004 * noise3(x * 20, z * 20, seed) : 0), z, ...uv(x, z)];
		}, new THREE.Vector3(0, side, 0));
	const cut = (a, out) =>
		grid(12, 6, (s, t) => {
			const rr = s * Rr(a);
			const y = (t - 0.5) * h;
			return [Math.cos(a) * rr, y, Math.sin(a) * rr, 0.5 + rr / (2 * R) * 0.98, 0.5 + y / (2 * R)];
		}, out);
	const rind = grid(18, 6, (s, t) => {
		const a = s * TH;
		const ph = -Math.PI / 2 + t * Math.PI;
		const rr = Rr(a) + bulge * Math.cos(ph);
		return [Math.cos(a) * rr, Math.sin(ph) * h / 2, Math.sin(a) * rr, s, t];
	}, (c) => new THREE.Vector3(c.x, 0, c.z));
	const pasteGeo = mergeGeometries([top(1), top(-1), cut(0, new THREE.Vector3(0, 0, -1)), cut(TH, new THREE.Vector3(-Math.sin(TH), 0, Math.cos(TH)))]);
	const geo = mergeGeometries([pasteGeo, rind], true);
	// Centre de gravité de la part ramené à l'origine (rotation naturelle en vol).
	geo.translate(-Math.cos(TH / 2) * R * 0.6, 0, -Math.sin(TH / 2) * R * 0.6);
	const m = new THREE.Mesh(geo, [mats.paste, mats.pasteRind]);
	m.castShadow = true;
	return m;
}

/** Petits éléments instanciés (ciboulette, persil, oignons crispy) répartis sur une surface. */
export function scatter(geo, mat, count, place, seed = 5) {
	const im = new THREE.InstancedMesh(geo, mat, count);
	const r = rng(seed);
	const m4 = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	const e = new THREE.Euler();
	for (let i = 0; i < count; i++) {
		const p = place(r);
		e.set(r() * Math.PI, r() * Math.PI * 2, r() * Math.PI);
		q.setFromEuler(e);
		const s = 0.7 + r() * 0.6;
		m4.compose(p, q, new THREE.Vector3(s, s, s));
		im.setMatrixAt(i, m4);
	}
	im.castShadow = true;
	return im;
}

export const chiveGeo = () => {
	const g = new THREE.CylinderGeometry(0.017, 0.017, 0.1, 8, 1);
	return g;
};
export const parsleyGeo = (s = 1) => {
	const g = new THREE.CircleGeometry(0.03 * s, 9, 0, Math.PI * 2);
	eachVertex(g, (v) => {
		const a = Math.atan2(v.y, v.x);
		const d = Math.hypot(v.x, v.y);
		// Contour dentelé (feuille hachée) et surface froissée.
		const k = 1 + 0.35 * Math.sin(a * 3 + 1) + 0.2 * noise3(Math.cos(a) * 3, Math.sin(a) * 3, 2);
		v.x = Math.cos(a) * d * k;
		v.y = Math.sin(a) * d * k * 0.8;
		v.z = 0.012 * s * noise3(v.x * 50, v.y * 50, 1) + 0.008 * s * (d / (0.03 * s)) ** 2;
	});
	g.computeVertexNormals();
	return g;
};
export const crispyGeo = () => new THREE.TorusGeometry(0.045, 0.013, 6, 14, Math.PI * 1.3);

/** Demi-rondelle de citron (écorce, ziste, quartiers). Debout dans le plan XY. */
/**
 * Grille (nu × nv) : fn(i/nu, j/nv) → [x, y, z, u, v]. Orientée pour que ses faces
 * regardent vers `out` (vecteur ou fonction du centre de face).
 */
function grid(nu, nv, fn, out) {
	const pos = [];
	const uv = [];
	for (let j = 0; j <= nv; j++) {
		for (let i = 0; i <= nu; i++) {
			const [x, y, z, u, v] = fn(i / nu, j / nv);
			pos.push(x, y, z);
			uv.push(u, v);
		}
	}
	const index = [];
	const row = nu + 1;
	for (let j = 0; j < nv; j++) {
		for (let i = 0; i < nu; i++) {
			const a = j * row + i;
			index.push(a, a + 1, a + row, a + 1, a + row + 1, a + row);
		}
	}
	const g = new THREE.BufferGeometry();
	g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
	g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
	g.setIndex(index);
	// Orientation : on teste la face centrale et on retourne tout si besoin.
	const p = g.attributes.position;
	const k = Math.floor(index.length / 6) * 3;
	const A = new THREE.Vector3().fromBufferAttribute(p, index[k]);
	const B = new THREE.Vector3().fromBufferAttribute(p, index[k + 1]);
	const Cc = new THREE.Vector3().fromBufferAttribute(p, index[k + 2]);
	const n = new THREE.Vector3().subVectors(B, A).cross(new THREE.Vector3().subVectors(Cc, A));
	const centre = A.clone().add(B).add(Cc).divideScalar(3);
	const want = typeof out === 'function' ? out(centre) : out;
	if (n.dot(want) < 0) {
		for (let t = 0; t < index.length; t += 3) [index[t + 1], index[t + 2]] = [index[t + 2], index[t + 1]];
		g.setIndex(index);
	}
	g.computeVertexNormals();
	return g;
}

/**
 * Demi-rondelle de citron, debout dans le plan XY (bord droit sur y = 0) :
 * deux faces de pulpe (texture détaillée), tranche droite, écorce bombée piquetée.
 */
export function lemonSlice(mats, r = 0.3) {
	const th = r * 0.19;
	const bulge = th * 0.32;
	const NA = 56;
	const NP = 8;
	const rimR = (phi) => r + bulge * Math.cos(phi);
	const face = (side) =>
		grid(NA, 18, (s, t) => {
			const a = s * Math.PI;
			const rho = t;
			// Pulpe légèrement bombée au centre, irrégulière.
			const z = side * (th / 2) * (1 + 0.06 * (1 - rho * rho) + 0.04 * noise3(Math.cos(a) * rho * 6, Math.sin(a) * rho * 6, side));
			const x = Math.cos(a) * rho * r;
			const y = Math.sin(a) * rho * r;
			return [x, y, rho >= 1 ? side * th / 2 : z, 0.5 + x / (2 * r) * 0.995, 0.5 + y / (2 * r) * 0.995];
		}, new THREE.Vector3(0, 0, side));
	const cut = grid(40, NP, (s, t) => {
		const phi = -Math.PI / 2 + t * Math.PI;
		const x = (s * 2 - 1) * rimR(phi);
		return [x, 0, Math.sin(phi) * th / 2, 0.5 + x / (2 * r) * 0.995, 0.5 + Math.sin(phi) * 0.006];
	}, new THREE.Vector3(0, -1, 0));
	const peel = grid(NA, NP, (s, t) => {
		const a = s * Math.PI;
		const phi = -Math.PI / 2 + t * Math.PI;
		const rr = rimR(phi) * (1 + 0.006 * noise3(Math.cos(a) * 9, Math.sin(a) * 9, phi));
		return [Math.cos(a) * rr, Math.sin(a) * rr, Math.sin(phi) * th / 2, s, t];
	}, (c) => new THREE.Vector3(c.x, c.y, 0));
	const geo = mergeGeometries([mergeGeometries([face(1), face(-1), cut]), peel], true);
	const m = new THREE.Mesh(geo, [mats.lemonFlesh, mats.lemonRind]);
	m.castShadow = true;
	return m;
}

/* ---------------------------------------------------------------------------
   Protéines et garnitures
   ------------------------------------------------------------------------ */
/**
 * Crevette décortiquée en forme de C : corps fermé aux deux bouts (tête arrondie),
 * légèrement aplati sur les côtés, anneaux de segments, éventail de queue.
 */
export function shrimp(mats, seed = 6) {
	const pts = [];
	for (let i = 0; i <= 12; i++) {
		const a = THREE.MathUtils.degToRad(215 - i * 23);
		const rr = 0.2 - i * 0.004;
		pts.push(new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, (i / 12 - 0.5) * 0.05));
	}
	const curve = new THREE.CatmullRomCurve3(pts);
	const TS = 110;
	const RS = 22;
	const geo = new THREE.TubeGeometry(curve, TS, 1, RS, false);
	const pos = geo.attributes.position;
	const v = new THREE.Vector3();
	const c = new THREE.Vector3();
	const out = new THREE.Vector3();
	const SEG = 6.5;
	const profile = (t) => {
		let r = lerp(0.118, 0.032, t ** 1.15);
		r *= 1 + 0.07 * Math.sin(t * Math.PI * SEG * 2) ** 2;
		if (t < 0.09) r *= Math.sqrt(1 - (1 - t / 0.09) ** 2);
		if (t > 0.96) r *= Math.sqrt(Math.max(0, 1 - ((t - 0.96) / 0.04) ** 2));
		return Math.max(r, 0.0005);
	};
	for (let i = 0; i <= TS; i++) {
		const t = i / TS;
		curve.getPointAt(t, c);
		const r = profile(t);
		for (let j = 0; j <= RS; j++) {
			const k = i * (RS + 1) + j;
			v.fromBufferAttribute(pos, k).sub(c);
			v.z *= 0.82;
			v.multiplyScalar(r).add(c);
			pos.setXYZ(k, v.x, v.y, v.z);
		}
	}
	geo.computeVertexNormals();

	const belly = C('#FADCCB');
	const mid = C('#F6A27C');
	const back = C('#EC6638');
	const band = C('#C93A17');
	paintVertices(geo, (p, col, idx) => {
		const t = Math.floor(idx / (RS + 1)) / TS;
		curve.getPointAt(t, c);
		out.set(c.x, c.y, 0).normalize();
		const d = p.clone().sub(c).normalize().dot(out);
		col.copy(belly).lerp(mid, smoothstep(-0.6, 0.1, d)).lerp(back, smoothstep(0.1, 0.75, d));
		const ring = Math.abs(Math.sin(t * Math.PI * SEG));
		col.lerp(band, smoothstep(0.86, 1, 1 - ring) * smoothstep(-0.1, 0.5, d) * 0.65);
		col.lerp(C('#F8C1A6'), (1 - smoothstep(0, 0.12, t)) * 0.4);
	});
	const g = new THREE.Group();
	g.add(mesh(geo, mats.glossy));

	// Éventail de queue : trois lobes aplatis.
	const end = curve.getPointAt(1);
	const tan = curve.getTangentAt(1);
	const lobe = new THREE.SphereGeometry(1, 20, 12);
	lobe.scale(0.045, 0.085, 0.014);
	lobe.translate(0, 0.07, 0);
	const tc = C('#E2532A');
	const tip = C('#F7A27F');
	paintVertices(lobe, (p, col) => col.copy(tc).lerp(tip, smoothstep(0.06, 0.15, p.y)));
	lobe.computeVertexNormals();
	const fan = new THREE.Group();
	for (const a of [-0.55, 0, 0.55]) {
		const l = mesh(lobe, mats.glossy);
		l.rotation.z = a;
		fan.add(l);
	}
	fan.position.copy(end);
	fan.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
	g.add(fan);
	return g;
}

/** Morceau mijoté (poulet paprika, sauce brillante). */
export function stewChunk(mats, seed = 7, size = 0.13) {
	const geo = smooth(new THREE.IcosahedronGeometry(size, 4));
	eachVertex(geo, (v) => {
		const n = fbm(v.x * 8 + seed, v.y * 8, v.z * 8, 3);
		v.multiplyScalar(1 + n * 0.35);
		v.y *= 0.8;
	});
	geo.computeVertexNormals();
	const a = C('#A9441A');
	const b = C('#E1883A');
	const glaze = C('#F2A85A');
	paintVertices(geo, (v, c) => {
		c.copy(a).lerp(b, noise3(v.x * 14 + seed, v.y * 14, v.z * 14) * 0.5 + 0.5);
		c.lerp(glaze, smoothstep(0.02, 0.1, v.y) * 0.35);
	});
	return mesh(geo, mats.glossy);
}

/** Tas de thon mayonnaise (effiloché). */
export function tunaHeap(mats, seed = 8) {
	const geo = smooth(new THREE.SphereGeometry(0.62, 72, 36, 0, Math.PI * 2, 0, Math.PI / 2));
	eachVertex(geo, (v) => {
		const n = fbm(v.x * 6 + seed, v.y * 6, v.z * 6, 4);
		// Mottes de thon : relief doux, nul au pied du tas (pas de pointes sur le pain).
		const lump = (noise3(v.x * 9 + seed, v.y * 9, v.z * 9) * 0.5 + 0.5) * 0.05 * smoothstep(0, 0.25, v.y);
		v.y = v.y * 0.42 + n * 0.06 * smoothstep(0, 0.2, v.y) + lump;
		v.x *= BREAD.squash * (1 + n * 0.08);
		v.z *= 1 + n * 0.08;
	});
	geo.computeVertexNormals();
	const deep = C('#8E6142');
	const a = C('#BC906A');
	const b = C('#DDBC98');
	paintVertices(geo, (v, c) => {
		c.copy(a).lerp(b, noise3(v.x * 16, v.y * 16, v.z * 16) * 0.5 + 0.5);
		// Occlusion : les creux (relief faible) sont plus sombres.
		c.lerp(deep, smoothstep(0.12, 0, v.y) * 0.5);
	});
	return mesh(geo, mats.matte);
}

/**
 * Thon effiloché : des dizaines de fibres posées sur le dôme (instanciées, une couleur
 * par fibre). height(x, z) donne la surface du tas.
 */
export function tunaFlakes(mats, count, height, { rx = 0.6, rz = 0.55, seed = 12 } = {}) {
	// Trois formes de flocon : plaques feuilletées aux bords déchirés, striées dans la longueur.
	const shapes = [0, 1, 2].map((k) => {
		const s = seed * 1.7 + k * 13.1;
		const L = [0.09, 0.075, 0.06][k];
		const Wd = [0.05, 0.055, 0.04][k];
		const Th = [0.022, 0.026, 0.02][k];
		const curl = [0.018, -0.012, 0.01][k];
		const geo = smooth(new THREE.IcosahedronGeometry(1, 3));
		const pos = geo.attributes.position;
		const uv = new Float32Array(pos.count * 2);
		const col = new Float32Array(pos.count * 3);
		const v = new THREE.Vector3();
		for (let i = 0; i < pos.count; i++) {
			v.fromBufferAttribute(pos, i);
			const a = Math.atan2(v.z, v.x);
			const torn = 1 + 0.3 * noise3(Math.cos(a) * 1.6 + s, Math.sin(a) * 1.6, s) + 0.12 * noise3(Math.cos(a) * 5 + s, Math.sin(a) * 5, s + 3);
			const top = v.y > 0;
			const slab = Math.sign(v.y) * Math.abs(v.y) ** 0.55;
			const x = v.x * L * torn;
			const z = v.z * Wd * torn;
			let y = slab * Th * (0.8 + 0.2 * noise3(x * 25, s, z * 25));
			if (top) {
				// Feuillets : petites marches, et stries de fibres parallèles à la longueur.
				y += noise3(x * 14 + s, 0, z * 14) > 0.2 ? 0.007 : 0;
				y += 0.003 * noise3(x * 6, s, z * 95);
			}
			y += (x / L) ** 2 * curl;
			pos.setXYZ(i, x, y, z);
			uv[i * 2] = x / (2 * L) + 0.5;
			uv[i * 2 + 1] = z / (2 * Wd) + 0.5;
			// Dessous et tranches un peu plus sombres, nuances le long des fibres.
			const shade = (0.74 + 0.26 * smoothstep(-Th, Th, y)) * (1 + 0.07 * noise3(x * 5, s, z * 70));
			col[i * 3] = shade;
			col[i * 3 + 1] = shade * 0.985;
			col[i * 3 + 2] = shade * 0.97;
		}
		geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
		geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
		geo.computeVertexNormals();
		return geo;
	});
	const pal = ['#D8B48E', '#CFA37D', '#C49473', '#E3C4A2', '#B9845F', '#DDB79E', '#A97650', '#E8CFB2'].map(C);
	const per = Math.ceil(count / shapes.length);
	const ims = shapes.map((g) => new THREE.InstancedMesh(g, mats.flake, per));
	const r = rng(seed);
	const m4 = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	const qy = new THREE.Quaternion();
	const qt = new THREE.Quaternion();
	const n = new THREE.Vector3();
	const up = new THREE.Vector3(0, 1, 0);
	const sc = new THREE.Vector3();
	const p = new THREE.Vector3();
	const e = 0.02;
	for (let i = 0; i < per * shapes.length; i++) {
		// Répartition uniforme sur la surface du dôme (hauteur uniforme = aire uniforme).
		const a = r() * Math.PI * 2;
		const hy = 0.02 + r() * 0.98;
		const d = Math.min(0.995, Math.sqrt(1 - hy * hy));
		const x = Math.cos(a) * d * rx;
		const z = Math.sin(a) * d * rz;
		const y = height(x, z);
		// Posé à plat sur le dôme : axe Y du flocon = normale de la surface.
		n.set(-(height(x + e, z) - height(x - e, z)) / (2 * e), 1, -(height(x, z + e) - height(x, z - e)) / (2 * e)).normalize();
		q.setFromUnitVectors(up, n);
		qy.setFromAxisAngle(up, r() * Math.PI * 2);
		qt.setFromEuler(new THREE.Euler((r() - 0.5) * 0.8, 0, (r() - 0.5) * 0.8));
		q.multiply(qy).multiply(qt);
		const s = 0.75 + r() * 0.6;
		sc.set(s * (0.85 + r() * 0.3), s * (0.8 + r() * 0.4), s);
		p.set(x, y - 0.012 + r() * r() * 0.05, z);
		m4.compose(p, q, sc);
		const im = ims[i % shapes.length];
		const k = Math.floor(i / shapes.length);
		im.setMatrixAt(k, m4);
		im.setColorAt(k, pal[Math.floor(r() * pal.length)]);
	}
	const g = new THREE.Group();
	ims.forEach((im) => {
		im.castShadow = true;
		g.add(im);
	});
	return g;
}

/** Petits éclats posés sur une surface (paprika, oignon rouge haché…). */
export function sprinkle(geo, mat, count, height, { rx = 0.55, rz = 0.5, seed = 13, colors = null, lift = 0.01 } = {}) {
	const im = new THREE.InstancedMesh(geo, mat, count);
	const r = rng(seed);
	const m4 = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	const e = new THREE.Euler();
	for (let i = 0; i < count; i++) {
		const a = r() * Math.PI * 2;
		const d = Math.sqrt(r());
		const x = Math.cos(a) * d * rx;
		const z = Math.sin(a) * d * rz;
		e.set(r() * Math.PI, r() * Math.PI, r() * Math.PI);
		q.setFromEuler(e);
		const s = 0.6 + r() * 0.8;
		m4.compose(new THREE.Vector3(x, height(x, z) + lift, z), q, new THREE.Vector3(s, s, s));
		im.setMatrixAt(i, m4);
		if (colors) im.setColorAt(i, colors[Math.floor(r() * colors.length)]);
	}
	return im;
}

export const dustGeo = () => new THREE.IcosahedronGeometry(0.011, 0);
export const diceGeo = () => new RoundedBoxGeometry(0.06, 0.035, 0.05, 1, 0.01);

/** Cube de pomme de terre rôtie ou de chorizo. */
export function cube(mats, kind = 'potato', seed = 9) {
	const potato = kind === 'potato';
	const rr = rng(seed * 3 + 1);
	const s = (potato ? [0.34, 0.27, 0.3] : [0.22, 0.2, 0.22]).map((v) => (potato ? v * (0.82 + rr() * 0.36) : v));
	// Pomme de terre : cube arrondi lisse (super-ellipsoïde, sans couture) ; chorizo : cube arrondi.
	const geo = potato ? smooth(new THREE.IcosahedronGeometry(1, 4)) : new RoundedBoxGeometry(s[0], s[1], s[2], 3, 0.05);
	if (potato) {
		const se = (x) => Math.sign(x) * Math.abs(x) ** 0.4;
		eachVertex(geo, (v) => v.set(se(v.x) * s[0] / 2, se(v.y) * s[1] / 2, se(v.z) * s[2] / 2));
	}
	eachVertex(geo, (v) => {
		// Morceau irrégulier (coupe au couteau, arêtes émoussées à la cuisson).
		const n = noise3(v.x * 9 + seed, v.y * 9, v.z * 9);
		const low = potato ? noise3(v.x * 3 + seed, v.y * 3, v.z * 3 + 7) * 0.26 + noise3(v.x * 6 + 4, v.y * 6 + seed, v.z * 6) * 0.08 : 0;
		const grain = potato ? noise3(v.x * 70, v.y * 70, v.z * 70) * 0.012 : 0;
		v.multiplyScalar(1 + n * 0.06 + low + grain);
	});
	const cols = potato ? ['#F1D68E', '#F8E6B4', '#A8692A'] : ['#B9351A', '#E1612E', '#F3C6A4'];
	const [a, b, d] = cols.map(C);
	const crisp = C('#D89A40');
	const skin = C('#8E6331');
	// Une face garde sa peau (brune, piquetée).
	const axis = Math.floor(rr() * 3);
	const sign = rr() < 0.5 ? -1 : 1;
	paintVertices(geo, (v, c) => {
		const n = noise3(v.x * 7 + seed, v.y * 7, v.z * 7) * 0.5 + 0.5;
		c.copy(a).lerp(b, n * 0.7);
		if (potato) {
			// Arêtes et coins dorés-croustillants, faces plus pâles.
			const e = Math.abs(v.x) / (s[0] / 2) + Math.abs(v.y) / (s[1] / 2) + Math.abs(v.z) / (s[2] / 2);
			c.lerp(crisp, smoothstep(1.5, 2.3, e) * 0.8);
			const f = (sign * [v.x, v.y, v.z][axis]) / (s[axis] / 2);
			c.lerp(skin, smoothstep(0.62, 0.85, f) * (0.7 + 0.3 * noise3(v.x * 40, v.y * 40, v.z * 40)));
			// Points rôtis (bruns) et paillettes dorées.
			c.lerp(d, smoothstep(0.55, 0.8, noise3(v.x * 34 + seed, v.y * 34, v.z * 34)) * 0.7);
			c.lerp(crisp, smoothstep(0.5, 0.75, noise3(v.x * 22, v.y * 22 + seed, v.z * 22)) * 0.5);
		}
		const spot = smoothstep(0.55, 0.8, noise3(v.x * 13 + 3, v.y * 13, v.z * 13 + seed));
		c.lerp(d, spot * (potato ? 0.6 : 0.6));
	});
	geo.computeVertexNormals();
	const m = mesh(geo, potato ? mats.potato : mats.glossy);
	return m;
}

/** Filet de sauce qui serpente sur une surface. height(x, z) donne l'altitude. */
export function drizzle(mats, mat, { width = 1.2, depth = 0.7, turns = 5, height = () => 0.4, radius = 0.024, seed = 10 } = {}) {
	const r = rng(seed);
	const pts = [];
	const n = turns * 2 + 1;
	for (let i = 0; i < n; i++) {
		const x = (i / (n - 1) - 0.5) * width + (r() - 0.5) * 0.06;
		const z = (i % 2 ? 0.5 : -0.5) * depth * (0.75 + r() * 0.25);
		pts.push(new THREE.Vector3(x, height(x, z) + radius * 0.6, z));
		if (i < n - 1) {
			const xm = x + width / (n - 1) / 2;
			pts.push(new THREE.Vector3(xm, height(xm, 0) + radius * 0.8, (r() - 0.5) * depth * 0.2));
		}
	}
	const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
	const SEG = 260;
	const RAD = 10;
	const geo = new THREE.TubeGeometry(curve, SEG, radius, RAD, false);
	const p = geo.attributes.position;
	const c = new THREE.Vector3();
	const o = new THREE.Vector3();
	for (let i = 0; i <= SEG; i++) {
		const t = i / SEG;
		curve.getPointAt(t, c);
		const k = (0.7 + 0.45 * (noise3(t * 14, seed, 0.5) * 0.5 + 0.5)) * smoothstep(0, 0.04, t) * smoothstep(1, 0.96, t);
		for (let j = 0; j <= RAD; j++) {
			const idx = i * (RAD + 1) + j;
			o.fromBufferAttribute(p, idx).sub(c);
			o.x *= k * 1.15;
			o.z *= k * 1.15;
			o.y = o.y * k * 0.6 - radius * 0.2;
			p.setXYZ(idx, c.x + o.x, c.y + o.y, c.z + o.z);
		}
	}
	geo.computeVertexNormals();
	const m = mesh(geo, mat);
	m.userData.indexCount = geo.index.count;
	return m;
}

/* ---------------------------------------------------------------------------
   Pics, drapeau, vaisselle
   ------------------------------------------------------------------------ */
/** Pic en bambou noué (comme sur les photos). La pointe est à y = 0. */
export function knotPick(mats, length = 2.1) {
	const g = new THREE.Group();
	const shaft = new THREE.CylinderGeometry(0.02, 0.013, length, 10);
	shaft.translate(0, length / 2 + 0.08, 0);
	const tip = new THREE.ConeGeometry(0.013, 0.08, 10);
	tip.rotateX(Math.PI);
	tip.translate(0, 0.04, 0);
	const pts = [
		[0, 0, 0], [0.04, 0.1, 0.01], [0.15, 0.22, 0.02], [0.13, 0.36, 0], [0.02, 0.4, -0.02],
		[-0.09, 0.32, -0.01], [-0.07, 0.18, 0.01], [0.03, 0.08, 0.02], [0.16, 0.04, 0.02], [0.24, 0.07, 0.01],
	].map(([x, y, z]) => new THREE.Vector3(x, y + length + 0.06, z));
	const knot = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 90, 0.022, 8, false);
	knot.scale(1, 1, 1);
	g.add(mesh(mergeGeometries([shaft, tip]), mats.bamboo));
	g.add(mesh(knot, mats.bamboo));
	return g;
}

/** Pic droit avec drapeau « TÒPAS » qui flotte. Retourne { group, flag, wave(t) }. */
export function flagPick(mats, length = 2.5) {
	const g = new THREE.Group();
	const shaft = new THREE.CylinderGeometry(0.022, 0.014, length, 12);
	shaft.translate(0, length / 2 + 0.08, 0);
	const tip = new THREE.ConeGeometry(0.014, 0.08, 12);
	tip.rotateX(Math.PI);
	tip.translate(0, 0.04, 0);
	const ball = new THREE.SphereGeometry(0.04, 16, 12);
	ball.translate(0, length + 0.1, 0);
	g.add(mesh(mergeGeometries([shaft, tip, ball]), mats.bamboo));

	const W = 0.92;
	const H = 0.57;
	const fg = new THREE.PlaneGeometry(W, H, 28, 14);
	fg.translate(W / 2, 0, 0);
	const base = fg.attributes.position.array.slice();
	const flag = mesh(fg, mats.flag);
	flag.position.set(0.02, length - H / 2 + 0.02, 0);
	const back = mesh(fg, mats.flagBack);
	flag.add(back);
	g.add(flag);
	const wave = (t, amp = 1) => {
		const p = fg.attributes.position;
		for (let i = 0; i < p.count; i++) {
			const x = base[i * 3];
			const y = base[i * 3 + 1];
			const k = x / W;
			const z = (Math.sin(x * 6.5 - t * 4.2) * 0.07 + Math.sin(x * 3 + y * 4 - t * 2.3) * 0.025) * k * amp;
			p.setXYZ(i, x - k * k * 0.03 * amp, y - k * 0.03 * Math.sin(t * 2), z);
		}
		p.needsUpdate = true;
		fg.computeVertexNormals();
	};
	wave(0);
	return { group: g, flag, wave };
}

/** Planche d'ardoise aux bords irréguliers. */
export function slateBoard(mats, w = 4.6, d = 1.5) {
	const geo = new RoundedBoxGeometry(w, 0.09, d, 3, 0.02);
	eachVertex(geo, (v) => {
		const ex = smoothstep(w / 2 - 0.12, w / 2, Math.abs(v.x));
		const ez = smoothstep(d / 2 - 0.1, d / 2, Math.abs(v.z));
		const e = Math.max(ex, ez);
		const n = noise3(v.x * 3, v.y * 3, v.z * 3);
		v.x -= Math.sign(v.x) * ex * Math.abs(n) * 0.06;
		v.z -= Math.sign(v.z) * ez * Math.abs(n) * 0.05;
		if (v.y > 0) v.y += e * n * 0.01 + 0.004 * noise3(v.x * 2, 0, v.z * 6);
	});
	geo.computeVertexNormals();
	const m = mesh(geo, mats.slate);
	m.receiveShadow = true;
	return m;
}

/**
 * Miettes de croûte et de mie, grains de poivre, posées sur l'ardoise autour de la
 * tranche (anneau elliptique). Origine : dessus de l'ardoise.
 */
export function crumbs(mats, count = 30, { rx = 1.25, rx2 = 2.1, rz = 0.72, seed = 15 } = {}) {
	const geo = smooth(new THREE.IcosahedronGeometry(0.024, 1));
	eachVertex(geo, (v) => {
		v.multiplyScalar(1 + noise3(v.x * 60, v.y * 60, v.z * 60) * 0.35);
		v.y *= 0.6;
	});
	geo.computeVertexNormals();
	const im = new THREE.InstancedMesh(geo, mats.bits, count);
	const pal = ['#EBD7AC', '#E2C893', '#B97B3B', '#8E4B1E', '#2A211B'].map(C);
	const r = rng(seed);
	const m4 = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	const e = new THREE.Euler();
	for (let i = 0; i < count; i++) {
		const a = r() * Math.PI * 2;
		const d = 1 + r() * r() * (rx2 / rx - 1);
		const x = Math.cos(a) * d * rx;
		const z = Math.max(-rz, Math.min(rz, Math.sin(a) * d * 0.95));
		e.set(r() * 0.6, r() * Math.PI * 2, r() * 0.6);
		q.setFromEuler(e);
		const s = 0.45 + r() * r() * 1.4;
		m4.compose(new THREE.Vector3(x, 0.008 * s, z), q, new THREE.Vector3(s, s, s));
		im.setMatrixAt(i, m4);
		im.setColorAt(i, pal[Math.floor(r() * pal.length)]);
	}
	return im;
}

/** Petite cocotte noire à oreilles (comme sur les photos). Hauteur intérieure du fond : 0.1. */
export function cazuelaPot(mats) {
	const prof = [
		[0, 0.1], [0.82, 0.1], [0.98, 0.16], [1.06, 0.4], [1.09, 0.56], [1.12, 0.6], [1.17, 0.6],
		[1.2, 0.56], [1.17, 0.38], [1.1, 0.12], [1.0, 0.02], [0.9, 0], [0, 0],
	].map(([r, y]) => new THREE.Vector2(r, y));
	const body = smooth(new THREE.LatheGeometry(prof, 112));
	body.computeVertexNormals();
	const g = new THREE.Group();
	g.add(mesh(body, mats.pot));
	const ear = new THREE.TorusGeometry(0.2, 0.06, 14, 28, Math.PI);
	ear.scale(1, 1, 0.55);
	ear.rotateZ(-Math.PI / 2);
	ear.rotateX(Math.PI / 2);
	for (const s of [-1, 1]) {
		const e = mesh(ear, mats.pot);
		e.position.set(s * 1.1, 0.5, 0);
		if (s < 0) e.rotation.y = Math.PI;
		g.add(e);
	}
	return g;
}

/** Fourchette en bois plate (bâtonnet). */
export function woodFork(mats) {
	// Contour d'une petite fourchette apéritif en bois : trois dents, tête évasée, manche.
	const sh = new THREE.Shape();
	const tine = (x0, x1) => {
		sh.lineTo(x0, 0.03);
		sh.quadraticCurveTo((x0 + x1) / 2, -0.012, x1, 0.03);
	};
	sh.moveTo(-0.072, 0.24);
	tine(-0.072, -0.04);
	sh.lineTo(-0.04, 0.2);
	sh.lineTo(-0.016, 0.2);
	tine(-0.016, 0.016);
	sh.lineTo(0.016, 0.2);
	sh.lineTo(0.04, 0.2);
	tine(0.04, 0.072);
	sh.lineTo(0.072, 0.24);
	sh.quadraticCurveTo(0.07, 0.36, 0.032, 0.44);
	sh.lineTo(0.026, 1.18);
	sh.quadraticCurveTo(0, 1.25, -0.026, 1.18);
	sh.lineTo(-0.032, 0.44);
	sh.quadraticCurveTo(-0.07, 0.36, -0.072, 0.24);
	const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.016, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 8 });
	geo.translate(0, -0.625, -0.008);
	geo.rotateX(Math.PI / 2); // dents vers -z (plantées dans le plat)
	geo.computeVertexNormals();
	return mesh(geo, mats.bamboo);
}

/**
 * Raclette fondue dans la cocotte : nappe qui épouse le tas de pommes de terre.
 * height(x, z) donne la surface fondue ; morph 0 : tranche à plat → fondue.
 */
export function meltBlanket(mats, height, { R = 1.0, flatR = 0.78, flatY = 1.0, seed = 3 } = {}) {
	const melt = [];
	const geo = grid(112, 30, (s, t) => {
		const a = s * Math.PI * 2;
		const sq = 1 + 0.06 * Math.cos(a * 4);
		const xf = Math.cos(a) * t * flatR * sq;
		const zf = Math.sin(a) * t * flatR * sq;
		const x = Math.cos(a) * t * R;
		const z = Math.sin(a) * t * R;
		melt.push(x, height(x, z) + 0.004 * noise3(x * 20, z * 20, seed), z);
		return [xf, flatY + 0.012 * noise3(xf * 3, zf * 3, seed) - 0.03 * t * t, zf, 0.5 + x / 2.8, 0.5 + z / 2.8];
	}, new THREE.Vector3(0, 1, 0));
	const tmp = new THREE.BufferGeometry();
	tmp.setIndex(geo.index);
	tmp.setAttribute('position', new THREE.Float32BufferAttribute(melt, 3));
	tmp.computeVertexNormals();
	geo.morphAttributes.position = [tmp.attributes.position];
	geo.morphAttributes.normal = [tmp.attributes.normal];
	const m = new THREE.Mesh(geo, mats.cheeseBlanket);
	m.morphTargetInfluences = [1];
	m.castShadow = true;
	return m;
}

/* ---------------------------------------------------------------------------
   Boissons
   ------------------------------------------------------------------------ */
export function beerMug(mats) {
	const g = new THREE.Group();
	const outer = [
		[0, 0], [0.5, 0], [0.57, 0.03], [0.59, 0.14], [0.6, 1.55], [0.62, 1.6], [0.59, 1.63], [0.56, 1.6],
		[0.545, 0.24], [0.5, 0.2], [0, 0.19],
	].map(([r, y]) => new THREE.Vector2(r, y));
	const glass = mesh(new THREE.LatheGeometry(outer, 72), mats.glass, false);
	glass.renderOrder = 3;

	const beer = new THREE.LatheGeometry([[0, 0.205], [0.5, 0.215], [0.535, 0.26], [0.538, 1.28], [0, 1.28]].map(([r, y]) => new THREE.Vector2(r, y)), 72);
	const liquid = mesh(beer, mats.beer, false);
	liquid.renderOrder = 1;

	const foamGeo = new THREE.LatheGeometry([[0, 1.25], [0.54, 1.25], [0.575, 1.42], [0.6, 1.6], [0.56, 1.73], [0.36, 1.82], [0.12, 1.86], [0, 1.865]].map(([r, y]) => new THREE.Vector2(r, y)), 96, 0, Math.PI * 2);
	eachVertex(foamGeo, (v) => {
		if (v.y > 1.4) {
			const n = fbm(v.x * 5, v.y * 5, v.z * 5, 3);
			const k = 1 + n * 0.08;
			v.x *= k;
			v.z *= k;
			v.y += n * 0.05;
		}
	});
	foamGeo.computeVertexNormals();
	const foam = mesh(foamGeo, mats.foam, false);
	foam.renderOrder = 2;

	const handleGeo = new THREE.TorusGeometry(0.36, 0.075, 16, 44, Math.PI);
	handleGeo.rotateZ(-Math.PI / 2);
	const handle = mesh(handleGeo, mats.glass, false);
	handle.position.set(0.58, 0.88, 0);
	handle.renderOrder = 3;

	// Bulles qui montent.
	const N = 70;
	const bubbles = new THREE.InstancedMesh(new THREE.SphereGeometry(0.012, 6, 4), mats.bubble, N);
	const r = rng(11);
	const seeds = Array.from({ length: N }, () => [r() * Math.PI * 2, Math.sqrt(r()) * 0.46, r(), 0.15 + r() * 0.35]);
	const m4 = new THREE.Matrix4();
	const update = (t) => {
		for (let i = 0; i < N; i++) {
			const [a, d, o, sp] = seeds[i];
			const y = 0.25 + (((o + t * sp) % 1) * 1.0);
			m4.makeTranslation(Math.cos(a) * d, y, Math.sin(a) * d);
			bubbles.setMatrixAt(i, m4);
		}
		bubbles.instanceMatrix.needsUpdate = true;
	};
	update(0);
	g.add(liquid, foam, bubbles, glass, handle);
	return { group: g, update };
}

/**
 * Verre à vin : coupe au galbe continu (fond arrondi, ventre, col resserré), pied et jambe.
 * Le vin remplit l'intérieur de la coupe ; sa surface reste horizontale quand le verre
 * penche (plan de coupe en repère monde + faces arrière visibles comme surface du vin).
 */
export function wineGlass(mats) {
	const g = new THREE.Group();
	const B0 = 0.9; // fond de la coupe
	const B1 = 1.96; // bord
	const RMAX = 0.475;
	const RRIM = 0.405;
	const TM = 0.42; // hauteur relative du ventre
	const bowlR = (t) => (t < TM ? RMAX * Math.sqrt(Math.max(0, 1 - (1 - t / TM) ** 2)) : RMAX - (RMAX - RRIM) * ((t - TM) / (1 - TM)) ** 1.6);
	const N = 44;
	const outer = [];
	const inner = [];
	for (let i = 0; i <= N; i++) {
		const t = i / N;
		const y = B0 + t * (B1 - B0);
		outer.push([Math.max(0.035 * (1 - t) ** 4, bowlR(t)), y]);
		// Paroi intérieure : fine sur le haut, fond plus épais.
		const ti = Math.min(1, (y - (B0 + 0.04)) / (B1 - B0 - 0.04));
		if (ti >= 0) inner.push([Math.max(0, bowlR(t) - 0.016), y + 0.04 * (1 - t) ** 3]);
	}
	const prof = [
		[0, 0], [0.42, 0], [0.44, 0.02], [0.41, 0.045], [0.07, 0.075], [0.035, 0.16], [0.035, 0.82], [0.05, 0.87],
		...outer.slice(1),
		[RRIM - 0.008, B1 + 0.006],
		...inner.slice(1).reverse(),
		[0, B0 + 0.045],
	].map(([r, y]) => new THREE.Vector2(r, y));
	const glass = mesh(new THREE.LatheGeometry(prof, 96), mats.glass, false);
	glass.renderOrder = 3;

	// Volume de vin : intérieur de la coupe (un peu en retrait de la paroi), fermé en haut.
	const wp = [[0, B0 + 0.05]];
	for (let i = 1; i <= N; i++) {
		const t = i / N;
		const y = B0 + t * (B1 - B0);
		if (y > 1.66) break;
		wp.push([Math.max(0, bowlR(t) - 0.022), Math.max(B0 + 0.05, y + 0.04 * (1 - t) ** 3)]);
	}
	wp.push([0, wp[wp.length - 1][1]]);
	const wineGeo = new THREE.LatheGeometry(wp.map(([r, y]) => new THREE.Vector2(r, y)), 96);
	const plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
	const body = mats.wine.clone();
	body.clippingPlanes = [plane];
	const surface = new THREE.MeshBasicMaterial({ color: C('#8E1630'), side: THREE.BackSide, clippingPlanes: [plane] });
	const wine = mesh(wineGeo, body, false);
	const cap = mesh(wineGeo, surface, false);
	wine.renderOrder = 1;
	cap.renderOrder = 1;
	g.add(cap, wine, glass);

	// Niveau du vin : point de l'axe à hauteur LEVEL (coupe) ramené en repère monde.
	const LEVEL = 1.33;
	const p = new THREE.Vector3();
	const settle = () => {
		g.updateWorldMatrix(true, false);
		p.set(0, LEVEL, 0).applyMatrix4(g.matrixWorld);
		plane.constant = p.y;
	};
	return { group: g, settle };
}

/** Petites étincelles « dessinées » (traits crème) autour d'un impact. */
export function sparks(mats, count = 9) {
	const g = new THREE.Group();
	const geo = new THREE.CapsuleGeometry(0.018, 0.22, 4, 8);
	for (let i = 0; i < count; i++) {
		const m = new THREE.Mesh(geo, mats.spark);
		const a = (i / count) * Math.PI * 2;
		m.userData.dir = new THREE.Vector3(Math.cos(a), Math.sin(a), 0);
		m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), m.userData.dir);
		m.visible = false;
		g.add(m);
	}
	/** k : 0 → 1 (vie de l'étincelle). */
	g.userData.play = (k, radius = 0.8) => {
		g.children.forEach((m) => {
			m.visible = k > 0 && k < 1;
			const e = 1 - (1 - k) ** 3;
			m.position.copy(m.userData.dir).multiplyScalar(radius * (0.45 + e * 0.6));
			const s = Math.sin(Math.min(1, k) * Math.PI);
			m.scale.set(1, Math.max(0.001, s), 1);
		});
	};
	return g;
}

/** Ombre de contact douce posée au sol. */
export function contactShadow(mats, w = 2.6, d = 2) {
	const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mats.shadow);
	m.rotation.x = -Math.PI / 2;
	m.renderOrder = -1;
	return m;
}
