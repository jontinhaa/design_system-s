/**
 * Plats assemblés : pinchos et cazuelas, d'après les vraies photos du Topaze.
 * Chaque pincho a son origine au centre de la tranche de pain.
 */
import * as THREE from 'three';
import * as F from 'emg-topas/gl/food';
import { rng, smoothstep } from 'emg-topas/gl/noise';

const TOP = F.BREAD.top + 0.035; // dessus de la mie

function onTop(r, radius = 0.62, y = TOP) {
	const a = r() * Math.PI * 2;
	const d = Math.sqrt(r()) * radius;
	return new THREE.Vector3(Math.cos(a) * d * F.BREAD.squash, y, Math.sin(a) * d);
}

/** Le Suisse : raclette fondue, cornichon, oignon grelot. */
export function pinchoSuisse(mats, { flag = false, seed = 1 } = {}) {
	const group = new THREE.Group();
	const bread = F.bread(mats, seed);
	const cheese = F.breadCheese(mats, seed);
	const pepper = F.pepper(mats, 50, 0.55, seed + 2);
	pepper.position.y = F.BREAD.h / 2 + 0.04 + 0.085;
	const pepperG = new THREE.Group();
	pepperG.add(pepper);

	const corni = F.cornichon(mats, seed + 3);
	corni.position.set(-0.04, TOP + 0.235, 0.02);
	corni.scale.setScalar(1.15);
	corni.rotation.set(0.12, 0.7, 0.1);

	const onion = F.pearlOnion(mats, 0.21);
	onion.position.set(0.03, TOP + 0.49, 0);

	let pick;
	let wave = null;
	if (flag) {
		const fp = F.flagPick(mats, 2.35);
		pick = fp.group;
		wave = fp.wave;
	} else {
		pick = F.knotPick(mats, 1.55);
	}
	pick.position.set(0.03, -0.12, 0);
	pick.rotation.z = -0.05;

	group.add(bread, cheese, pepperG, corni, onion, pick);
	return { group, parts: { bread, cheese, pepper: pepperG, corni, onion, pick }, wave };
}

/** Pincho poulet paprika, oignon rouge, ciboulette (photos 8 à 10). */
export function pinchoPoulet(mats, { seed = 11 } = {}) {
	const group = new THREE.Group();
	group.add(F.bread(mats, seed));
	const r = rng(seed);
	for (let i = 0; i < 10; i++) {
		const c = F.stewChunk(mats, seed + i, 0.12 + r() * 0.05);
		c.position.copy(onTop(r, 0.55, TOP + 0.05 + r() * 0.08));
		c.rotation.set(r() * 3, r() * 3, r() * 3);
		group.add(c);
	}
	for (let i = 0; i < 2; i++) {
		const o = F.redOnion(mats, Math.PI * (1.05 + r() * 0.2), 0.3 + r() * 0.06);
		o.position.set((i - 0.5) * 0.35, TOP + 0.12, (r() - 0.5) * 0.2);
		o.rotation.set(0, (r() - 0.5) * 1.2, 0);
		group.add(o);
	}
	group.add(F.scatter(F.chiveGeo(), mats.herb, 26, (rr) => onTop(rr, 0.55, TOP + 0.24 + rr() * 0.06), seed + 3));
	const pick = F.knotPick(mats, 1.45);
	pick.position.set(0.02, -0.1, 0.02);
	group.add(pick);
	return { group };
}

/** Le Chalutier : crevettes, sauce cocktail, oignons crispy. */
export function pinchoChalutier(mats, { seed = 21 } = {}) {
	const group = new THREE.Group();
	group.add(F.bread(mats, seed));
	const sauce = new THREE.Mesh(new THREE.SphereGeometry(0.6, 48, 24), mats.cocktail);
	sauce.scale.set(F.BREAD.squash, 0.16, 1);
	sauce.position.y = TOP + 0.02;
	group.add(sauce);
	const r = rng(seed);
	for (let i = 0; i < 2; i++) {
		const s = F.shrimp(mats, seed + i);
		s.scale.setScalar(1.25);
		s.position.set((i - 0.5) * 0.42, TOP + 0.22, (r() - 0.5) * 0.15);
		s.rotation.set(-0.35, (i - 0.5) * 1.4 + r() * 0.3, 0.1);
		group.add(s);
	}
	group.add(F.scatter(F.crispyGeo(), mats.crispy, 22, (rr) => onTop(rr, 0.5, TOP + 0.12 + rr() * 0.1), seed + 2));
	group.add(F.scatter(F.chiveGeo(), mats.herb, 14, (rr) => onTop(rr, 0.5, TOP + 0.2 + rr() * 0.08), seed + 4));
	const pick = F.knotPick(mats, 1.45);
	pick.position.set(0, -0.1, 0);
	group.add(pick);
	return { group };
}

/**
 * Le Pêcheur : thon effiloché, mayo, persil, oignon rouge, citron, paprika.
 * Avec { flag: true }, pic droit et drapeau TÒPAS (hero).
 */
export function pinchoPecheur(mats, { seed = 31, flag = false, lite = false } = {}) {
	const group = new THREE.Group();
	group.add(F.bread(mats, seed));
	const RX = 0.66 * F.BREAD.squash;
	const RZ = 0.66;
	const H = 0.52;
	const base = TOP - 0.02;
	const height = (x, z) => base + H * Math.sqrt(Math.max(0, 1 - (x / RX) ** 2 - (z / RZ) ** 2));

	const heap = F.tunaHeap(mats, seed);
	heap.scale.set(0.97, 1.86, 0.97);
	heap.position.y = base - 0.03;
	group.add(heap);
	group.add(F.tunaFlakes(mats, lite ? 170 : 380, height, { rx: RX, rz: RZ, seed }));

	const mayo = F.drizzle(mats, mats.aioli, { width: RX * 1.25, depth: RZ * 1.15, turns: 3, height: (x, z) => height(x, z) + 0.058, radius: 0.04, seed: seed + 1 });
	group.add(mayo);

	const parsleyCols = ['#FFFFFF', '#CFE2BC', '#A9C78F', '#E6F2CC', '#8FB774'].map((c) => new THREE.Color(c));
	group.add(F.sprinkle(F.parsleyGeo(1.05), mats.parsley, lite ? 70 : 140, (x, z) => height(x, z) + 0.05, { rx: RX * 0.88, rz: RZ * 0.88, seed: seed + 2, colors: parsleyCols }));
	group.add(F.sprinkle(F.dustGeo(), mats.dust, 70, (x, z) => height(x, z) + 0.03, { rx: RX * 0.8, rz: RZ * 0.8, seed: seed + 3 }));
	const onionCols = ['#8E2A63', '#B5487F', '#F2DCE7'].map((c) => new THREE.Color(c));
	group.add(F.sprinkle(F.diceGeo(), mats.dice, 16, (x, z) => height(x, z) + 0.02, { rx: RX * 0.75, rz: RZ * 0.75, seed: seed + 4, colors: onionCols }));
	group.add(F.scatter(F.crispyGeo(), mats.crispy, 9, (rr) => {
		const a = rr() * Math.PI * 2;
		const d = Math.sqrt(rr()) * 0.45;
		const x = Math.cos(a) * d;
		const z = Math.sin(a) * d;
		return new THREE.Vector3(x, height(x, z) + 0.03, z);
	}, seed + 5));

	const lemon = F.lemonSlice(mats, 0.34);
	lemon.position.set(-0.12, height(-0.12, 0.34) - 0.02, 0.34);
	lemon.rotation.set(-0.2, 0.15, 0.12);
	group.add(lemon);

	let pick;
	let wave = null;
	if (flag) {
		const fp = F.flagPick(mats, 2.35);
		pick = fp.group;
		wave = fp.wave;
	} else {
		pick = F.knotPick(mats, 1.45);
	}
	pick.position.set(0.08, -0.1, -0.02);
	pick.rotation.z = -0.06;
	group.add(pick);
	return { group, wave };
}

/**
 * Cazuela : cocotte + pommes de terre (+ garniture).
 * kind : 'suissesse' (raclette, cornichons, oignons) ou 'piqo' (chorizo, sauce cocktail).
 * Retourne aussi la liste des cubes et la nappe pour les animer.
 */
export function cazuela(mats, { kind = 'suissesse', seed = 41 } = {}) {
	const group = new THREE.Group();
	const pot = F.cazuelaPot(mats);
	group.add(pot);
	const r = rng(seed);
	const cubes = [];
	const layers = [[0.1, 0.62, 9], [0.32, 0.55, 7], [0.5, 0.38, 4]];
	for (const [y, rad, n] of layers) {
		for (let i = 0; i < n; i++) {
			const isChorizo = kind === 'piqo' && r() < 0.35;
			const c = F.cube(mats, isChorizo ? 'chorizo' : 'potato', seed + cubes.length);
			const a = (i / n) * Math.PI * 2 + r() * 0.6;
			const d = rad * (0.55 + r() * 0.45);
			c.position.set(Math.cos(a) * d, y + 0.14 + r() * 0.05, Math.sin(a) * d);
			c.rotation.set(r() * 0.8, r() * 3, r() * 0.8);
			c.userData.rest = c.position.clone();
			c.userData.restRot = c.rotation.clone();
			cubes.push(c);
			group.add(c);
		}
	}
	let topping = null;
	let dust = null;
	const extras = [];
	if (kind === 'suissesse') {
		// Surface fondue : enveloppe douce des pommes de terre, flaque contre la paroi.
		const H = (x, z) => {
			let acc = 0;
			for (const c of cubes) {
				const p = c.userData.rest;
				const d = Math.hypot(x - p.x, z - p.z);
				// Nappe fine : épouse chaque morceau, les plus hauts dépassent.
				const top = p.y + 0.135 - (d / 0.26) ** 2 * 0.28;
				acc += Math.exp(top / 0.028);
			}
			acc += Math.exp(0.42 / 0.028);
			let h = 0.028 * Math.log(acc) + 0.008;
			const rr = Math.hypot(x, z);
			h += (0.44 - h) * smoothstep(0.82, 1.0, rr);
			return h;
		};
		topping = F.meltBlanket(mats, H, { R: 1.0, seed });
		topping.userData.baseY = 0;
		group.add(topping);
		const place = (o, x, z, lift, yaw, tilt = 0.15) => {
			o.position.set(x, H(x, z) + lift, z);
			o.rotation.set(tilt * (r() - 0.5) * 2, yaw, tilt * (r() - 0.5) * 2);
			extras.push(o);
			group.add(o);
		};
		for (let i = 0; i < 2; i++) {
			const c = F.cornichon(mats, seed + 9 + i);
			c.scale.setScalar(0.72);
			const x = (i - 0.5) * 0.62;
			const z = (r() - 0.5) * 0.3;
			place(c, x, z, 0.075, 0.6 + i * 2.1 + r() * 0.5);
		}
		const spots = [[-0.1, -0.38], [0.32, 0.28], [-0.4, 0.2]];
		spots.forEach(([x, z], i) => {
			const o = F.pearlOnion(mats, 0.14 + i * 0.01, i + 4);
			place(o, x, z, 0.1, r() * 6, 0.35);
		});
		dust = F.sprinkle(new THREE.IcosahedronGeometry(0.008, 0), mats.pepper, 90, (x, z) => H(x, z) + 0.008, { rx: 0.8, rz: 0.8, seed: seed + 5 });
		dust.visible = false;
		group.add(dust);
	} else {
		topping = F.drizzle(mats, mats.cocktail, { width: 1.4, depth: 1.05, turns: 7, height: (x, z) => 0.7 + 0.14 * Math.max(0, 1 - (x * x + z * z) / 0.6), radius: 0.02, seed });
		topping.userData.baseY = 0;
		group.add(topping);
	}
	const forks = [];
	for (const s of [-1, 1]) {
		const f = F.woodFork(mats);
		f.position.set(s * 0.45, 1.05, -0.15 * s);
		f.rotation.set(-0.9, s * 0.5, s * 0.25);
		forks.push(f);
		group.add(f);
	}
	return { group, cubes, topping, extras, forks, dust };
}

/** Assortiment d'ingrédients flottants (hero). */
export function floatingIngredients(mats) {
	const items = [];
	const add = (m, s = 1) => {
		m.scale.multiplyScalar(s);
		items.push(m);
	};
	add(F.pearlOnion(mats, 0.24, 1));
	add(F.pearlOnion(mats, 0.2, 2));
	add(F.cornichon(mats, 51));
	add(F.cornichon(mats, 52), 0.8);
	add(F.redOnion(mats, Math.PI * 1.35, 0.32, { layers: 2, seed: 4 }));
	add(F.redOnion(mats, Math.PI * 2, 0.24, { seed: 6 }));
	add(F.shrimp(mats, 53), 1.6);
	add(F.shrimp(mats, 54), 1.3);
	add(F.lemonSlice(mats, 0.3));
	add(F.lemonSlice(mats, 0.24));
	add(F.cheeseWedge(mats, 0.4, 1), 1.4);
	add(F.cheeseWedge(mats, 0.34, 2), 1.4);
	add(F.chorizoSlice(mats, 0.21, 5), 1.6);
	add(F.chorizoSlice(mats, 0.18, 9), 1.6);
	add(F.olive(mats, { seed: 2 }), 1.1);
	add(F.olive(mats, { green: true, seed: 3 }), 1.1);
	return items;
}
