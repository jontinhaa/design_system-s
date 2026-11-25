/* Hero background — a severed zombie hand throwing the horns (Meshy model, decimated and exported from Blender
   to assets/models/rock-hand.glb). three.js renders it with a warm point light that follows the pointer.
   The fingers are articulated in the vertex shader: everything above the knuckle line curls toward the palm,
   each finger on its own phase, and the whole hand grabs when the pointer comes close. */
import * as THREE from "three";
import * as VHS from "./vhs3d.js?v=20261026a";

const canvas = document.getElementById("glove");
const HAND_PARAM = (() => { const v = parseFloat(new URLSearchParams(location.search).get("hand")); return Number.isFinite(v) ? v : undefined; })();   // ?hand=0.85 poses the hand for captures
if (canvas) init();

function init() {
  const hero = canvas.parentElement;
  const renderer = VHS.renderer(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0.6, 9.5);
  camera.lookAt(0, 0.2, 0);

  VHS.environment(renderer, scene);
  const { warm } = VHS.lights(scene, 4.2);

  const rig = new THREE.Group(); scene.add(rig);
  // model specific: where the knuckle line and fingertips sit on the Y axis of the mesh
  const uniforms = { uCurl: { value: 0 }, uTime: { value: 0 }, uKnuckle: { value: 0.22 }, uTip: { value: 0.95 }, uPivotZ: { value: 0.0 }, uGlow: { value: 0.0 } };
  let ready = false, fitScale = 1;

  // Vertex shader curl: rotate points above the knuckle line around the X axis through the knuckle pivot,
  // with the angle growing toward the fingertips. Each finger (spread along X) gets its own phase.
  function articulate(m) {
    VHS.treat(m, { glow: uniforms.uGlow, cacheKey: "vhs-curl", vertex: shader => {
      Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", `#include <common>
          uniform float uCurl, uTime, uKnuckle, uTip, uPivotZ;
          float curlAngle(vec3 p){
            float t = smoothstep(uKnuckle, uTip, p.y);
            float finger = 0.75 + 0.35 * sin(p.x * 11.0 + uTime * 1.3) ;   // staggered per finger
            return t * t * uCurl * finger;
          }
          vec3 curlPoint(vec3 p, float a){
            vec3 piv = vec3(p.x, uKnuckle, uPivotZ);
            vec3 d = p - piv; float c = cos(a), s = sin(a);
            return piv + vec3(d.x, c * d.y - s * d.z, s * d.y + c * d.z);
          }
          vec3 curlDir(vec3 n, float a){ float c = cos(a), s = sin(a); return vec3(n.x, c * n.y - s * n.z, s * n.y + c * n.z); }`)
        .replace("#include <beginnormal_vertex>", `#include <beginnormal_vertex>
          float curlA = curlAngle(position);
          objectNormal = curlDir(objectNormal, curlA);`)
        .replace("#include <begin_vertex>", `#include <begin_vertex>
          transformed = curlPoint(transformed, curlA);`);
    } });
  }

  VHS.gltfLoader().load("assets/models/rock-hand.glb", gltf => {
    const root = gltf.scene;
    root.traverse(o => {
      if (o.isMesh) {
        o.frustumCulled = false;
        const m = o.material;
        m.roughness = Math.min(1, (m.roughness ?? 0.8) * 1.05);
        if (m.normalScale) m.normalScale.set(1.1, 1.1);
        articulate(m);
      }
    });
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
    // keep the model's own origin for the curl math; offset the wrapper instead
    const holder = new THREE.Group(); holder.add(root); rig.add(holder);
    holder.position.set(-center.x, -box.min.y, -center.z);
    fitScale = 3.0 / Math.max(size.x, size.y, size.z);
    ready = true;
    window.__zombie = { rig, root, uniforms, box: { size, center } };
  }, undefined, err => console.error("zombie hand load failed", err));

  // palm toward the viewer, slight tilt so the fingers lean out of the screen
  const basePose = { x: 0.1, y: -0.25 };

  /* ---- pointer ---- */
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasPointer = matchMedia("(pointer:fine)").matches;
  const target = { x: -0.4, y: 0.3 }, mouse = { x: -0.4, y: 0.3 };
  if (hasPointer && !REDUCED) addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    target.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    target.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
  }, { passive: true });

  function resize() {
    const r = canvas.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
  }
  addEventListener("resize", resize); resize();
  let visible = true, running = false, lastDraw = 0;
  const TOUCH = matchMedia("(hover: none) and (pointer: coarse)").matches;
  const covered = () => document.documentElement.classList.contains("view-open");   // a view is over the page
  const wake = () => { if (visible && !covered() && !running) requestAnimationFrame(frame); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; wake(); }).observe(canvas);
  addEventListener("v31:view", wake);

  const start = performance.now();
  function frame(now) {
    running = true;
    if (!visible || covered()) { running = false; return; }
    if (TOUCH && now - lastDraw < 33) { requestAnimationFrame(frame); return; }     // phones: the hand at 30fps, half the GPU time, same slow drift
    lastDraw = now;
    const t = REDUCED ? 0 : (now - start) / 1000;             // reduced motion: no idle drift, no grain crawl
    if (!hasPointer) { target.x = Math.sin(t * 0.35) * 0.7; target.y = Math.sin(t * 0.5 + 1) * 0.4; }
    mouse.x += (target.x - mouse.x) * 0.06; mouse.y += (target.y - mouse.y) * 0.06;

    warm.position.set(mouse.x * 5.5, mouse.y * 3.5 + 1.2, 3.8);
    const P = (window.__zombie && window.__zombie.pose) || {};
    rig.rotation.y = (P.y ?? basePose.y) + mouse.x * 0.28 + Math.sin(t * 0.4) * 0.04;
    rig.rotation.x = (P.x ?? basePose.x) - mouse.y * 0.12;
    const wide = Math.min(1, Math.max(0, (camera.aspect - 0.9) / 0.7));
    rig.scale.setScalar(P.s ?? fitScale * (0.95 + 0.6 * wide));
    // scroll driven reach: the hand starts below the bottom edge with just the fingertips showing
    // and climbs to its resting spot as the hero scrolls (window.heroReach, 0..1, set by main.js)
    const reachRaw = P.reach ?? HAND_PARAM ?? (window.heroReach || 0);
    const reach = 1 - Math.pow(1 - reachRaw, 3);
    const height = (window.__zombie ? window.__zombie.box.size.y : 1.9) * rig.scale.y;
    const restY = P.py ?? (-height * 0.5 + 0.35);                   // ends a touch above centre so the fingers clear the title
    const hiddenY = -(2.7 + height) + 0.7;
    rig.position.set((P.px ?? 0) + mouse.x * 0.12, hiddenY + (restY - hiddenY) * reach, 0);
    rig.rotation.x += (1 - reach) * 0.45;                   // leans back while it climbs, straightens on arrival

    if (ready) {
      const near = 1 - Math.min(1, Math.hypot(mouse.x - 0.35 * wide, mouse.y + 0.1) / 0.9);
      const grab = near * near * 0.45;
      // keep the horns readable: a slow flex with a little tremor, more when the pointer is close
      const idle = 0.04 + 0.22 * (0.5 + 0.5 * Math.sin(t * 1.1)) + 0.05 * Math.sin(t * 5.3) * Math.max(0, Math.sin(t * 0.7));
      // fingers stretch straight while reaching, then the flex takes over once the hand has arrived
      const arrived = Math.min(1, Math.max(0, (reachRaw - 0.55) / 0.45));
      uniforms.uCurl.value = P.curl ?? (-0.08 * (1 - arrived) + (idle + grab) * arrived);
      uniforms.uTime.value = t; VHS.tick(t);
      uniforms.uGlow.value = 0.22 + 0.1 * Math.sin(t * 2.1) + 0.25 * grab;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
