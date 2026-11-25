/* Shared look for every three.js scene on the site, so the hand, the ghost and the VCR feel shot on the same tape.
   - one renderer setup (tone mapping, exposure, pixel ratio)
   - one light rig: warm key that rides on the pointer, cold fill, green rim from behind and a green underlight
   - one material treatment: green fresnel rim, a teal shadowed colour grade, crushed highlights and live film grain */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export const GREEN = 0x4dff8c, WARM = 0xff5a14, COLD = 0x5a6c8c;
const shared = { uTime: { value: 0 } };

export function renderer(canvas) {
  const r = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  r.setPixelRatio(Math.min(devicePixelRatio, matchMedia("(hover: none) and (pointer: coarse)").matches ? 1 : 1.5));   // one device pixel on phones: the scenes are soft by design and a 3x screen would otherwise draw nine times the fragments
  r.outputColorSpace = THREE.SRGBColorSpace;
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 0.95;
  return r;
}

export function environment(r, scene) {
  const pmrem = new THREE.PMREMGenerator(r);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
}

/* radius scales the rig to the scene; returns the lights so a module can move the warm key with the pointer */
export function lights(scene, radius = 4) {
  const warm = new THREE.PointLight(WARM, 40 * (radius / 4) ** 2, radius * 3.5, 1.7); warm.position.set(-radius * 0.5, radius * 0.4, radius * 0.9); scene.add(warm);
  const cold = new THREE.DirectionalLight(COLD, 0.25); cold.position.set(radius * 0.8, radius * 0.5, radius * 0.5); scene.add(cold);
  const rim = new THREE.PointLight(GREEN, 36 * (radius / 4) ** 2, radius * 3, 1.5); rim.position.set(radius * 0.5, radius * 0.8, -radius * 0.7); scene.add(rim);
  const under = new THREE.PointLight(GREEN, 14 * (radius / 4) ** 2, radius * 3, 1.6); under.position.set(0, -radius * 0.7, radius * 0.8); scene.add(under);
  const key = new THREE.SpotLight(0xdfe8ff, 16 * (radius / 4) ** 2, radius * 6, 0.55, 0.6, 1.1); key.position.set(-radius, radius * 1.5, radius); scene.add(key); scene.add(key.target);
  scene.add(new THREE.AmbientLight(0x161c22, 0.6));
  return { warm, cold, rim, under, key };
}

/* glow: a { value } uniform the module drives (0 = none). vertex: optional (shader) => void for extra vertex work.
   grain and scan: strength of the live film grain and the scanlines (defaults suit the dark hero scenes; a lit scene
   like the shelf wants far less or the noise sits on top of everything). */
export function treat(m, { glow = { value: 0.25 }, vertex = null, cacheKey = "vhs", grain = 0.05, scan = 0.06, lift = 1.0 } = {}) {
  m.emissive && m.emissive.set(0x000000); m.emissiveMap = null;
  m.envMapIntensity = Math.min(m.envMapIntensity ?? 1, 0.45);
  m.onBeforeCompile = shader => {
    shader.uniforms.uGlow = glow;
    shader.uniforms.uTime = shared.uTime;
    shader.uniforms.uGrain = { value: grain }; shader.uniforms.uScan = { value: scan }; shader.uniforms.uLift = { value: lift };
    if (vertex) vertex(shader);
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>
        uniform float uGlow; uniform float uTime; uniform float uGrain; uniform float uScan; uniform float uLift;
        float vhsHash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }`)
      .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
        float rimG = pow(1.0 - max(dot(normalize(vNormal), normalize(vViewPosition)), 0.0), 2.6);
        totalEmissiveRadiance += vec3(0.30, 1.0, 0.55) * rimG * uGlow;`)
      .replace("#include <tonemapping_fragment>", `#include <tonemapping_fragment>
        {
          vec3 c = gl_FragColor.rgb;
          float l = dot(c, vec3(0.299, 0.587, 0.114));
          c = mix(vec3(l), c, 0.84);                                   // pull saturation in a touch
          c = c * vec3(0.93, 1.03, 0.99) + vec3(0.004, 0.018, 0.016) * uLift;  // teal lift in the shadows
          c = pow(max(c, 0.0), vec3(1.06));                             // crush the blacks slightly
          float g = vhsHash(floor(gl_FragCoord.xy * 0.5) + floor(uTime * 24.0));
          c += (g - 0.5) * uGrain;                                      // live grain
          c *= (1.0 - uScan) + uScan * sin(gl_FragCoord.y * 1.4);       // faint scanlines
          gl_FragColor.rgb = c;
        }`);
  };
  m.customProgramCacheKey = () => cacheKey;
  m.needsUpdate = true;
  return m;
}

export function tick(t) { shared.uTime.value = t; }

/* One GLTFLoader for every scene, with Draco for the compressed models (gltf-transform optimize: Draco meshes, 1k WebP
   textures). The decoder comes from the same unpkg three build as the importmap; it is fetched once, on the first model. */
let draco = null;
export function gltfLoader() {
  if (!draco) { draco = new DRACOLoader(); draco.setDecoderPath("https://unpkg.com/three@0.170.0/examples/jsm/libs/draco/gltf/"); }
  const loader = new GLTFLoader(); loader.setDRACOLoader(draco); return loader;
}
