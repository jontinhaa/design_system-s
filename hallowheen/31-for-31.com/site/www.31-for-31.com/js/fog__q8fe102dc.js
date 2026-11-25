/* Green fog behind the whole page, after the red smoke on scope-creep.xyz: a fixed canvas under the content running a
   small fragment shader (three octaves of value noise drifting slowly, a soft vignette, a hint of pointer parallax).
   Half resolution, paused while the tab is hidden, a still frame under reduced motion. */
(() => {
  const canvas = document.getElementById("fog");
  if (!canvas) return;
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: true, powerPreference: "low-power" });
  if (!gl) { canvas.remove(); return; }

  const vs = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;
  const fs = `
    precision mediump float;
    uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uAmount;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
    float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++){ v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return v; }
    void main(){
      vec2 uv = gl_FragCoord.xy / uRes;
      vec2 q = uv * vec2(uRes.x / uRes.y, 1.0);
      float t = uTime * 0.07;                                   // a slow crawl: doubled so the drift reads as movement, not a still
      vec2 drift = vec2(t * 0.6, -t * 0.25) + uMouse * 0.06;
      // two layers of smoke sliding past each other
      float n1 = fbm(q * 1.6 + drift);
      float n2 = fbm(q * 3.1 - drift * 1.4 + vec2(5.2, 1.3));
      float smoke = smoothstep(0.35, 0.95, n1 * 0.75 + n2 * 0.45);
      // pool it toward the middle and fade at the frame edge
      float vig = 1.0 - smoothstep(0.35, 1.05, length((uv - 0.5) * vec2(1.15, 1.35)));
      float a = smoke * vig * uAmount;
      vec3 col = mix(vec3(0.04, 0.28, 0.13), vec3(0.22, 0.80, 0.42), smoke);
      gl_FragColor = vec4(col * a, a);
    }`;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(s)); return s; };
  const prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(prog); gl.useProgram(prog);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uRes = gl.getUniformLocation(prog, "uRes"), uTime = gl.getUniformLocation(prog, "uTime"), uMouse = gl.getUniformLocation(prog, "uMouse"), uAmount = gl.getUniformLocation(prog, "uAmount");
  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const TOUCH = matchMedia("(hover: none) and (pointer: coarse)").matches;
  const SCALE = TOUCH ? 0.3 : 0.5;                      // phones draw the fog at under a third of the screen: it is blurred anyway, and the fill rate is what costs
  function resize() { canvas.width = Math.ceil(innerWidth * SCALE); canvas.height = Math.ceil(innerHeight * SCALE); gl.viewport(0, 0, canvas.width, canvas.height); }
  addEventListener("resize", resize); resize();

  const mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };
  if (matchMedia("(pointer:fine)").matches) addEventListener("pointermove", e => { target.x = (e.clientX / innerWidth - 0.5) * 2; target.y = -(e.clientY / innerHeight - 0.5) * 2; }, { passive: true });

  let amount = 0, running = false;
  const start = performance.now();
  let last = 0;
  function frame(now) {
    if (document.hidden || document.documentElement.classList.contains("view-open")) { running = false; return; }   // nothing to see under a view: the overlay is near black
    running = true;
    if (now - last < 33) { requestAnimationFrame(frame); return; }                 // the smoke drifts at 30fps: half the GPU time, no visible difference
    last = now;
    const t = (now - start) / 1000;
    amount += (0.45 - amount) * 0.02;                          // fades in over the first couple of seconds
    mouse.x += (target.x - mouse.x) * 0.03; mouse.y += (target.y - mouse.y) * 0.03;
    gl.uniform2f(uRes, canvas.width, canvas.height); gl.uniform1f(uTime, REDUCED ? 40 : t); gl.uniform2f(uMouse, mouse.x, mouse.y); gl.uniform1f(uAmount, amount);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (REDUCED && amount > 0.44) { running = false; return; }    // one settled frame is enough without motion
    requestAnimationFrame(frame);
  }
  document.addEventListener("visibilitychange", () => { if (!document.hidden && !running) requestAnimationFrame(frame); });
  addEventListener("v31:view", () => { if (!document.hidden && !document.documentElement.classList.contains("view-open") && !running) requestAnimationFrame(frame); });
  requestAnimationFrame(frame);
})();
