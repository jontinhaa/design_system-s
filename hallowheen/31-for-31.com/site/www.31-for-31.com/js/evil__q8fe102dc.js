/* Section above the footer — an evil ghost (Meshy model, assets/models/evil-ghost.glb) that comes out of
   the darkness toward the viewer as the section scrolls. main.js pins the section and writes
   window.riseProgress (0..1); this module moves the ghost from deep in the fog up to the camera. */
import * as THREE from "three";
import * as VHS from "./vhs3d.js?v=20261026a";

const canvas = document.getElementById("evil");
if (canvas) init();

function init() {
  const section = canvas.parentElement;
  const renderer = VHS.renderer(canvas);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07090c, 0.105);          // swallows the ghost while it is far away, in the page's own dark rather than black
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.3, 8);
  camera.lookAt(0, 0, 0);

  VHS.environment(renderer, scene);
  const { warm, rim, under } = VHS.lights(scene, 4);
  scene.remove(rim, under);                              // no green rim or underlight on the ghost: it is lit plainly, cold from the side and warm from above

  const rig = new THREE.Group(); scene.add(rig);
  const uniforms = { uGlow: { value: 0.0 } };
  let ready = false, fitScale = 1, height = 2;


  VHS.gltfLoader().load("assets/models/evil-ghost.glb", gltf => {
    const root = gltf.scene;
    root.traverse(o => {
      if (o.isMesh) {
        o.frustumCulled = false;
        const m = o.material;
        m.roughness = Math.min(1, (m.roughness ?? 0.8));
        VHS.treat(m, { glow: uniforms.uGlow, cacheKey: "vhs-evil" });
      }
    });
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
    const holder = new THREE.Group(); holder.add(root); rig.add(holder);
    holder.position.set(-center.x, -center.y, -center.z);
    fitScale = 2.6 / size.y; height = size.y;
    ready = true;
    window.__evil = { rig, root, uniforms, camera };   // camera exposed for checks
  }, undefined, err => console.error("evil ghost load failed", err));

  /* ---- pointer ---- */
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasPointer = matchMedia("(pointer:fine)").matches;
  const target = { x: 0, y: 0 }, mouse = { x: 0, y: 0 };
  if (hasPointer && !REDUCED) addEventListener("pointermove", e => {
    const r = section.getBoundingClientRect();
    target.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    target.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
  }, { passive: true });

  function resize() {
    const r = canvas.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
  }
  addEventListener("resize", resize); resize();
  let visible = false, running = false;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !running) requestAnimationFrame(frame); }).observe(canvas);

  const start = performance.now();
  let lastDof = "";
  function frame(now) {
    running = true;
    if (!visible) { running = false; return; }
    const t = REDUCED ? 0 : (now - start) / 1000;             // reduced motion: no idle drift, no grain crawl
    if (!hasPointer) { target.x = Math.sin(t * 0.3) * 0.5; target.y = Math.sin(t * 0.45) * 0.3; }
    mouse.x += (target.x - mouse.x) * 0.05; mouse.y += (target.y - mouse.y) * 0.05;
    warm.position.set(mouse.x * 2, mouse.y * 1.2 + 2.2, 4.5);   // a gentle drift, mostly from above so the hood and hands catch it

    const P = (window.__evil && window.__evil.pose) || {};
    const raw = P.p ?? (window.riseProgress || 0);
    const p = 1 - Math.pow(1 - raw, 3);                       // fast at first, settling as it arrives
    const wide = Math.min(1, Math.max(0, (camera.aspect - 0.9) / 0.7));
    rig.scale.setScalar(P.s ?? fitScale * (0.95 + 0.35 * wide));
    // starts deep in the fog, drifts up and forward, then hangs just in front of the camera. It leans toward the
    // camera, so the face and hands lead and the hem stays back in the dark; the pointer only sways it a little.
    // the last stretch of the pin is the rush: it keeps coming until the face fills the frame, then the page scrolls on
    const q = THREE.MathUtils.smoothstep(raw, 0.66, 1.0);
    rig.position.set(mouse.x * 0.08 * (1 - q), 0.9 - 1.15 * p - 0.25 * q + Math.sin(t * 0.9) * 0.08 * p, -14 + 15.4 * p + 4.7 * q);
    rig.rotation.y = mouse.x * 0.07 * (1 - q) + Math.sin(t * 0.5) * 0.04;
    rig.rotation.x = 0.42 + 0.12 * q - mouse.y * 0.03 + Math.sin(t * 0.7) * 0.03;
    uniforms.uGlow.value = 0; VHS.tick(t);                     // no fresnel glow on this one
    // invisible at the start of the pin, fading in as it comes, and faded out again over the last stretch so the
    // section never rests on a frozen close up
    canvas.style.opacity = (THREE.MathUtils.smoothstep(raw, 0.0, 0.22) * (1 - THREE.MathUtils.smoothstep(raw, 0.86, 1.0))).toFixed(3);
    // shallow focus: the lower part of the frame softens as the figure comes close, so the hem falls out of focus
    const dof = (1.5 * p + 12 * q).toFixed(1) + "px";
    if (dof !== lastDof) { section.style.setProperty("--dof-blur", dof); lastDof = dof; }
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
