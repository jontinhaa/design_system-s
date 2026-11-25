(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89480,e=>{"use strict";let t;var a=e.i(38710);let o=[1e3,3e3,9e3];function r(e,t){return t>0?`${e}${e.includes("?")?"&":"?"}retry=${t}`:e}let n=e=>new Promise(t=>window.setTimeout(t,e));async function i(e){try{return await e.decode(),!0}catch{return e.complete||await new Promise(t=>{e.addEventListener("load",t,{once:!0}),e.addEventListener("error",t,{once:!0})}),e.naturalWidth>0}}async function s(e){for(let t=0;;t++){let a=new Image;if(a.src=r(e,t),await i(a))return a;if(t>=o.length)throw Error(`image failed to load: ${e}`);await n(o[t])}}let l=null;e.s(["RETRY_MS",0,o,"clearTimer",0,function(e){null!==e.current&&(window.clearTimeout(e.current),e.current=null)},"cssVar",0,function(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()},"decodeImage",0,i,"isWebKit",0,function(){if("u"<typeof navigator)return!1;let e=navigator.userAgent;return/iP(hone|ad|od)/.test(e)||/Safari\//.test(e)&&!/Chrom(e|ium)|Android|Edg\//.test(e)},"loadImage",0,s,"prefersReducedMotion",0,function(){if(void 0===t){let e=window.matchMedia("(prefers-reduced-motion: reduce)");t=e.matches,e.addEventListener("change",e=>{t=e.matches,(0,a.wake)()})}return t},"retrySrc",0,r,"safeInsets",0,function(){if("u"<typeof document)return{top:0,right:0,bottom:0,left:0};l||((l=document.createElement("div")).setAttribute("aria-hidden","true"),l.style.cssText="position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);",document.body.appendChild(l));let e=getComputedStyle(l);return{top:parseFloat(e.paddingTop)||0,right:parseFloat(e.paddingRight)||0,bottom:parseFloat(e.paddingBottom)||0,left:parseFloat(e.paddingLeft)||0}},"saveData",0,function(){if("u"<typeof navigator)return!1;let e=navigator.connection;return!!e&&(!0===e.saveData||"slow-2g"===e.effectiveType||"2g"===e.effectiveType)},"touchCapable",0,function(){return"u">typeof navigator&&navigator.maxTouchPoints>0},"touchFirst",0,function(){return window.matchMedia("(hover: none)").matches},"touchOnly",0,function(){return window.matchMedia("(pointer: coarse) and (hover: none)").matches},"urlParam",0,function(e){return new URLSearchParams(window.location.search).get(e)},"whenIdle",0,function(e,t){"function"==typeof window.requestIdleCallback?window.requestIdleCallback(e,{timeout:t}):window.setTimeout(e,t/4)}])},67987,e=>{"use strict";let t=`#version 300 es
in vec2 aPos;
in vec2 aUv;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,a={curvature:25,scanlines:30,scanlineSize:2,aberration:.05,portraitAberration:1.5,vignette:60,static:60,staticSize:3,staticBrightness:.8,staticFps:24};function o(){return{curvature:a.curvature/100,scanlines:a.scanlines/100,chroma:1.15*a.aberration,vignette:a.vignette/100,static:a.static/100}}let r=`
float hash21(vec2 p) {
  vec3 h = fract(vec3(p.x, p.y, p.x) * 0.1031);
  h += dot(h, h.yzx + 33.33);
  return fract((h.x + h.y) * h.z);
}

float hash31(vec3 p) {
  vec3 h = fract(p * vec3(0.1031, 0.1030, 0.0973));
  h += vec3(dot(h, h.yzx + 33.33));
  return fract((h.x + h.y) * h.z);
}

vec2 snow(vec2 cell, float field) {
  float white = hash31(vec3(cell, field));
  float hiss = hash21(vec2(cell.y, field * 1.7)) - 0.5;
  return vec2(white, clamp(white + hiss * 0.35, 0.0, 1.0) * ${a.staticBrightness.toFixed(2)});
}`,n=()=>1/(1+.7*o().curvature);function i(e,t){let a=e/t,o=Math.hypot(a,1)/Math.SQRT2;return{x:a/o,y:1/o}}let s=`#version 300 es
// highp: positions reach thousands of px.
precision highp float;
precision mediump int;

in highp vec2 vUv;
out vec4 outColor;

uniform sampler2D uTex;
// The canvas size, px, and how many canvas px a layout px is.
uniform vec2 uDims;
uniform float uPx;
// curvature, scanlines, scanline size (layout px), vignette
uniform vec4 uParams;
// Color fringe strength and the barrel's scale (barrelFit below).
uniform float uChroma;
uniform float uFit;
// Static: amount (0 — off), grain (layout px), the current snow field.
uniform vec3 uStatic;
// Signal follows you (nosignal.ts): a patch of calmer snow — its center in
// scene px, its radius, and how calm it is at the middle (0 — no patch).
uniform vec4 uCalm;
// Vertical hold (vhold.ts, holdState): the strength of the signal loss
// (0 - off), the sync bar's center and half-height in scene uv from the top,
// and the motion blur length in scene uv.
uniform vec4 uHold;

// The frame — in layout px: the center and half-size of the glass window,
// the corner radius; the frame color.
uniform vec4 uFrame;
uniform float uFrameRadius;
uniform vec3 uFrameColor;
// The empty screen color (--color-screen): the static replaces only it, so
// whatever is drawn on the channel — the title, the button — stays on top.
uniform vec3 uScreenColor;
// The layout grid (1512\xd7982): the scene canvas is exactly that.
uniform vec2 uLayout;
// How colorful the picture under the glass is: 1 — as drawn, 0 — black and
// white (the idle sleep, idle.ts). Only the scene: the frame, the fringes
// and the scanlines stay as they are.
uniform float uSaturation;

// Boxes the glass bends but doesn't split into colors — a link preview's
// star lockup. Layout px: center and half-size.
uniform vec4 uSharp[8];
uniform int uSharpCount;
// The scene's alpha marks what to keep free of color fringes (0 — keep,
// 1 — fringe as usual): the same-brand previews, in their own shape
// (Painter.sharp). Read only when something is marked, and only near it:
// uMaskBox — the box around everything marked, in scene uv (left, top,
// right, bottom); outside it the alpha is 1.
uniform bool uMasked;
uniform vec4 uMaskBox;

const float TAU = 6.28318530718;
${r}

// How far a scene point (uv) is from the glass window's edge, layout px:
// below zero — inside the window, above — in the frame.
float frameDistance(vec2 uv) {
  vec2 p = uv * uLayout - uFrame.xy;
  vec2 q = abs(p) - uFrame.zw + uFrameRadius;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uFrameRadius;
}

// How much frame there is at a scene point (uv): 0 — the glass window,
// 1 — the frame. The edge is antialiased over one canvas pixel.
float frameCover(vec2 uv) {
  return clamp(frameDistance(uv) * uPx + 0.5, 0.0, 1.0);
}

// A scene sample at uSaturation (Rec. 709 luma for the grey).
vec3 withSaturation(vec3 tex) {
  return mix(vec3(dot(tex, vec3(0.2126, 0.7152, 0.0722))), tex, uSaturation);
}

// 1 where the scene shows the plain screen color, 0 where something is
// drawn on it (the channel's title and button, their black outlines).
float emptyScreen(vec3 tex) {
  return 1.0 - smoothstep(0.02, 0.06, distance(tex, uScreenColor));
}

// Vertical hold: the picture smeared along its motion, keeping the glass's
// color fringes (5 taps x 3 channel reads). "near": 1 by the bar, 0 away.
vec3 holdBlur(vec2 at, vec2 spread, float sharp, float near, out vec3 empty) {
  const int TAPS = 5;
  float split = uHold.x * 2.0 / uLayout.x * near;
  vec3 sum = vec3(0.0);
  for (int i = 0; i < TAPS; i += 1) {
    float s = float(i) / float(TAPS - 1) - 0.5;
    vec2 base = at + vec2(0.0, s * uHold.w);
    for (int c = 0; c < 3; c += 1) {
      float t = (float(1 - c) * 0.5 + s) * sharp;
      vec2 uv = clamp(base + spread * t + vec2((float(1 - c)) * split, 0.0), vec2(0.0), vec2(1.0));
      vec3 tex = texture(uTex, uv).rgb;
      sum[c] += mix(withSaturation(tex)[c], uFrameColor[c], frameCover(uv));
    }
  }
  sum /= float(TAPS);
  float cover = frameCover(at);
  empty = vec3((1.0 - cover) * emptyScreen(texture(uTex, clamp(at, vec2(0.0), vec2(1.0))).rgb));
  return sum;
}

// Analog static, as in Figma: a random grey per grain plus a per-line
// hiss, a new field uStatic.z times a second, black and white and dimmed
// (CRT_PARAMS.staticBrightness). Unlike Figma, the grain rows are the
// scanlines — one row per line, centered on its bright middle — so the
// snow is drawn by the lines, like on a real tube, and the scanlines stay
// visible through it at any grain size. \`scanSize\` — their period, canvas px.
vec3 withStatic(vec3 col, vec2 uv, float scanSize) {
  float grain = max(uStatic.y * uPx, 1.0);
  vec2 cell = vec2(floor(uv.x * uDims.x / grain), floor(uv.y * uDims.y / scanSize + 0.5));
  vec2 s = snow(cell, uStatic.z);
  // The calm patch thins the snow around the pointer, softly towards its edge.
  float amount = uStatic.x;
  if (uCalm.w > 0.0) {
    amount *= 1.0 - uCalm.w * (1.0 - smoothstep(0.0, uCalm.z, distance(uv * uLayout, uCalm.xy)));
  }
  col = mix(col, vec3(s.y), amount * 0.55);
  return col * (1.0 + (s.x - 0.5) * amount * 0.25);
}

// The color fringes — the old lens's lateral aberration. Each channel sees
// the lens slightly stronger or weaker, so a point shifts along the ray from
// the center by t \xd7 spread: red outwards, blue inwards. \`spread\` grows as
// d\xb3 + d⁵ (d — distance from the center over half the diagonal), so the
// center stays clean. Every channel is averaged over a triangle-weighted
// window of shifts (the old kernel: red over t 0…1, green −0.5…0.5, blue
// −1…0) — hence a soft rainbow rather than a triple outline.
//
// The shifts span t −0.875…0.875 in up to 15 samples (FRINGE_HALF each
// side of the center, \`taps\` in the code). Near the middle the fringes
// are only a few pixels wide, so fewer samples cover them just as well: as
// many as keep them no more than one canvas pixel apart. \`reach\` — the full shift, canvas px.
const int FRINGE_HALF = 7;
const float FRINGE_SPAN = 0.875;

// \`empty\` — per color channel, how much of what the samples saw is the
// empty screen (the glass window, the plain screen color): where the static
// goes. It fades towards the frame and splits into colors there exactly like
// the picture does on the home screen.
//
// \`sharp\` — how much the picture itself splits (0 inside a sharp box): the
// frame is always sampled with the full spread, so its fringes don't stop
// where a preview begins.
vec3 fringeSample(vec2 at, vec2 spread, float sharp, float reach, out vec3 empty) {
  int taps = clamp(int(ceil(FRINGE_SPAN * reach)), 1, FRINGE_HALF);
  float gap = FRINGE_SPAN / float(taps);
  vec3 sum = vec3(0.0);
  vec3 weight = vec3(0.0);
  empty = vec3(0.0);
  for (int i = -taps; i <= taps; i += 1) {
    float t = float(i) * gap;
    vec3 w = max(vec3(0.0), 1.0 - abs(2.0 * (vec3(t) - vec3(0.5, 0.0, -0.5))));
    vec2 uv = clamp(at + spread * t, vec2(0.0), vec2(1.0));
    float cover = frameCover(uv);
    vec3 tex = texture(uTex, clamp(at + spread * (t * sharp), vec2(0.0), vec2(1.0))).rgb;
    sum += mix(withSaturation(tex), uFrameColor, cover) * w;
    if (uStatic.x > 0.0) empty += (1.0 - cover) * emptyScreen(tex) * w;
    weight += w;
  }
  empty /= weight;
  return sum / weight;
}

// How much color splitting a pixel's picture gets: 1 — the full fringes,
// 0 — none (inside a sharp box). \`at\` — where it looks in the scene (uv);
// \`spread\` — how far its color samples reach, canvas px, so the fringe of
// a box doesn't leak into the pixels just outside it.
float fringe(vec2 at, float spread) {
  float k = 1.0;
  vec2 p = at * uLayout;
  for (int i = 0; i < 8; i += 1) {
    if (i >= uSharpCount) break;
    vec2 q = abs(p - uSharp[i].xy) - uSharp[i].zw;
    float d = (length(max(q, 0.0)) + min(max(q.x, q.y), 0.0)) * uPx - spread;
    k = min(k, smoothstep(0.0, 6.0, d));
  }
  return k;
}

// How much a pixel may split into colors by the fringe mask (uMasked):
// the least scene alpha along its own sample line — the middle, both ends
// (\xb1FRINGE_SPAN, as far as fringeSample reaches) and halfway, so a thin
// part of a preview in between isn't missed. A pixel inside a preview, or
// close enough that its color samples would land on it (just outside its
// outline, in its see-through holes), stays sharp: the band is exactly as
// wide as the fringe there and follows the preview's shape.
float unmasked(vec2 at, vec2 spread) {
  float a = texture(uTex, clamp(at, vec2(0.0), vec2(1.0))).a;
  for (int i = 1; i <= 2; i += 1) {
    vec2 step_ = spread * (FRINGE_SPAN * float(i) / 2.0);
    a = min(a, texture(uTex, clamp(at + step_, vec2(0.0), vec2(1.0))).a);
    a = min(a, texture(uTex, clamp(at - step_, vec2(0.0), vec2(1.0))).a);
  }
  return a;
}

// Whether unmasked() could see anything marked from this pixel: its sample
// line (\`at\` \xb1 \`spread\` \xd7 FRINGE_SPAN, as unmasked() reads it) touches
// uMaskBox. Elsewhere every sample reads alpha 1 and unmasked() would
// return 1, so the five reads are skipped — the same picture, and the
// mask costs only around the previews and the art credit.
bool nearMask(vec2 at, vec2 spread) {
  vec2 r = abs(spread) * FRINGE_SPAN;
  // Clamped like unmasked()'s samples.
  vec2 lo = clamp(at - r, vec2(0.0), vec2(1.0));
  vec2 hi = clamp(at + r, vec2(0.0), vec2(1.0));
  return all(greaterThanEqual(hi, uMaskBox.xy)) && all(lessThanEqual(lo, uMaskBox.zw));
}

void main() {
  float curvature = uParams.x;
  float scanSize = max(uParams.z * uPx, 1.0);
  float vigAmt = clamp(uParams.w, 0.0, 1.0);

  vec2 outDims = max(uDims, vec2(1.0));
  vec2 aspectRaw = vec2(outDims.x / outDims.y, 1.0);
  vec2 aspect = aspectRaw / (length(aspectRaw) / sqrt(2.0));

  // Barrel warp in aspect-corrected coordinates.
  vec2 c = (vUv * 2.0 - 1.0) * aspect;
  float r2 = dot(c, c);
  vec2 warped = (c * (1.0 + curvature * 0.35 * r2) * uFit / aspect) * 0.5 + 0.5;

  // Vertical hold: rows tear sideways by the sync bar (up to 6 layout px,
  // gone within 3 bar half-heights), a new tear every snow field. Done on
  // the position itself, so the masks and fringes below follow it.
  float holdK = uHold.x;
  float holdDist = abs(warped.y - uHold.y);
  float holdNear = 1.0 - smoothstep(uHold.z * 0.5, uHold.z * 3.0, holdDist);
  if (holdK > 0.0) {
    float row = floor(warped.y * uLayout.y / 3.0);
    warped.x += (hash21(vec2(row, uStatic.z + 7.0)) - 0.5) * 2.0 * holdNear * holdK * 6.0 / uLayout.x;
  }

  // The fringe spread at this point, uv per unit of channel shift.
  vec2 fromCenter = (warped - 0.5) * uLayout;
  float d2 = dot(fromCenter, fromCenter) / dot(uLayout * 0.5, uLayout * 0.5);
  vec2 spread = fromCenter * uChroma * (d2 + d2 * d2);
  float sharp = uSharpCount > 0 ? fringe(warped, length(spread) * uPx + 2.0) : 1.0;

  // The fringes cost up to 15 samples a pixel, so they're taken only where
  // they show: where the samples reach under half a canvas pixel (the very
  // middle of the glass) one sample is the same picture, and deep in the
  // frame every sample is the frame color anyway.
  float reach = length(spread) * uPx;
  vec3 empty = vec3(0.0);
  // A sharp picture away from the frame is one sample too.
  vec3 col;
  // Where one sample would do anyway, the mask isn't needed.
  if (uMasked && reach >= 0.5 && nearMask(warped, spread / uLayout)) {
    sharp = min(sharp, unmasked(warped, spread / uLayout));
  }
  float edge = frameDistance(clamp(warped, 0.0, 1.0)) * uPx;
  if (holdK > 0.0 && uHold.w * uDims.y >= 2.0) {
    col = holdBlur(warped, spread / uLayout, sharp, holdNear, empty);
  } else if (edge - 0.5 > reach) {
    col = uFrameColor;
  } else {
    if (reach < 0.5 || (sharp <= 0.0 && edge + 0.5 < -reach)) {
      vec2 uv = clamp(warped, 0.0, 1.0);
      vec3 tex = texture(uTex, uv).rgb;
      float cover = frameCover(uv);
      col = mix(withSaturation(tex), uFrameColor, cover);
      empty = vec3((1.0 - cover) * emptyScreen(tex));
    } else {
      col = fringeSample(warped, spread / uLayout, sharp, reach, empty);
    }
  }

  // Static on the empty channel (nosignal.ts): only over the empty screen,
  // so the title and the button stay clean on top; black and white inside,
  // fading and splitting into colors at the frame like the home screen's
  // picture; under the scanlines and the vignette.
  // Cubed: the bright snow shows even where little of it is left, while the
  // dark home screen melts into the frame unseen — so the snow fades further
  // inside to look as soft.
  if (uStatic.x > 0.0 && max(empty.r, max(empty.g, empty.b)) > 0.0) {
    col = mix(col, withStatic(col, warped, scanSize), empty * empty * empty);
  }

  // Vertical hold: snow riding the sync bar (up to 45 %), a light dusting
  // over the rest (8 %), and a dip in the bar's own light (15 %), all
  // within the glass and gone when the picture locks.
  if (holdK > 0.0) {
    float grain = max(uStatic.y * uPx, 1.0);
    vec2 cell = vec2(floor(warped.x * uDims.x / grain), floor(warped.y * uDims.y / scanSize + 0.5));
    vec2 s = snow(cell, uStatic.z + 3.0);
    float band = 1.0 - smoothstep(uHold.z, uHold.z * 2.5, holdDist);
    float dip = 1.0 - smoothstep(uHold.z, uHold.z * 2.0, holdDist);
    float inside = 1.0 - frameCover(clamp(warped, 0.0, 1.0));
    col = mix(col, vec3(s.y), (band * 0.45 + 0.08) * holdK * inside);
    col *= 1.0 - 0.15 * holdK * dip;
  }

  // Scanlines in canvas pixel space, normalized to keep the mean level.
  float scanAmt = uParams.y * mix(0.6, 1.0, smoothstep(1.0, 2.5, scanSize));
  float py = warped.y * outDims.y;
  col *= (1.0 - scanAmt * 0.5 * (1.0 - cos(TAU * py / scanSize))) / (1.0 - scanAmt * 0.5);

  // Vignette along the curved glass: one amount drives both darkness and
  // reach, and the reach widens with curvature.
  vec2 cc = (warped * 2.0 - 1.0) * aspect;
  float vigStrength = 3.0 * vigAmt * vigAmt * (0.35 + 0.65 * vigAmt);
  float vigSpread = clamp(vigAmt * vigAmt * (0.6 + 0.4 * clamp(curvature, 0.0, 1.0)), 0.0, 1.0);
  col *= max(1.0 - vigStrength * smoothstep(mix(1.4, 0.0, vigSpread), 2.0, dot(cc, cc)), 0.0);

  // Soft highlight knee: the scanline normalization lifts the bright rows
  // past white — roll them off instead of clipping.
  vec3 excess = max(col - vec3(0.8), vec3(0.0));
  vec3 compressed = vec3(0.8) + 0.2 * (vec3(1.0) - exp(-excess / 0.2));
  col = mix(col, compressed, vec3(greaterThan(col, vec3(0.8))));

  outColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;e.s(["CRT_FRAG",0,s,"CRT_PARAMS",0,a,"MAX_SHARP",0,8,"STATIC_GLSL",0,r,"VERT",0,t,"barrelFit",0,n,"crtBarrel",0,function(e,t){return{aspect:i(e,t),curve:.35*o().curvature,fit:n()}},"crtUniforms",0,o,"crtWarp",0,function(e,t,a,r){let s=i(a,r),l=2*e/a*s.x,c=2*t/r*s.y,h=(1+.35*o().curvature*(l*l+c*c))*n();return{x:l*h/s.x*(a/2),y:c*h/s.y*(r/2)}},"glassChroma",0,function(e){return o().chroma*(e?a.portraitAberration:1)},"staticField",0,function(e,t){return t?0:Math.floor(e/1e3*a.staticFps)%1024},"staticFieldIn",0,function(e){let t=1e3/a.staticFps;return t-e%t}])},38710,e=>{"use strict";let t=1/0,a=!1,o=!1,r=new Map,n=new WeakMap,i=new WeakSet,s=new WeakMap,l=!1,c=null;function h(){o=!0,c?.(!1)}function u(e,t){s.set(e,t.mediaTime)}function d(e){let t=s.get(e);return void 0===t||i.has(e)?-1-Math.floor(30*e.currentTime):t}function p(e){return!e.paused&&!e.ended&&e.readyState>=2}function m(e){i.add(e),r.set(e,d(e))}e.s(["CLIP_FPS",0,30,"cameraQuiet",0,function(){return l},"cameraShown",0,function(e){l=e,e&&c?.(!1)},"onResume",0,function(e){return c=e,()=>{c===e&&(c=null)}},"pollingVideos",0,function(){return r.size>0},"redrawIn",0,function(e){e<t&&(t=e)},"redrawNow",0,function(){if(o)return!0;for(let[e,t]of r)if(d(e)!==t)return!0;return!1},"redrawOnComicFrame",0,function(){a=!0},"resetDemand",0,function(){t=1/0,a=!1,o=!1,r.clear()},"stir",0,function(){c?.(!0)},"takeDemand",0,function(){return{soonest:t,comic:a}},"videoFrameKey",0,d,"videoPresented",0,u,"videoShown",0,function e(t){if("function"!=typeof t.requestVideoFrameCallback)return void r.set(t,d(t));let a=performance.now();if(i.has(t)){p(t)&&r.set(t,d(t));return}let o=n.get(t);if(void 0!==o)return void(p(t)?a-o>66.66666666666667&&m(t):n.set(t,a));n.set(t,a);let s=window.setTimeout(()=>{let e=n.get(t);void 0===e||!p(t)||performance.now()-e<66.66666666666667||(m(t),h())},67.66666666666667),l=d(t);t.requestVideoFrameCallback((a,o)=>{window.clearTimeout(s),n.delete(t),i.delete(t),u(t,o),d(t)===l?e(t):h()})},"wake",0,h])},59270,e=>{"use strict";let t={w:1512,h:982},a={desktop:{x:48,y:24},tabletSideways:{x:16,y:12},phoneSideways:{x:16,y:12},upright:{x:8,y:12},og:{x:24,y:24}},o=(a.upright.x+a.upright.y)/2,r={top:59,h:864},n={w:1442,h:812,radius:80},i=r.top+(r.h-n.h)/2,s={size:48,line:40,weight:900,stroke:3,shadow:4},l={display:s,body:{size:24,weight:500},captionType:{size:20,weight:500,stroke:2,shadow:2},captionName:{size:.81*s.size,weight:s.weight,stroke:.81*s.stroke,shadow:.81*s.shadow}},c={big:28,plain:l.captionType.size,refW:1290,refH:780,minPlain:14,barPad:.2,inset:.8,listInset:.8,leading:.1,numberGap:.5,lockCaps:.8,lockLift:.068,lockGap:.3,lockAspect:.8125,bodyGap:2,tailGap:2.5,groupGap:.5,maxCols:3,touch:44,tapRow:25},h={type:{asc:12.7,desc:10.3,size:l.captionType.size},name:{asc:24.69,desc:20.31,size:l.captionName.size}},u={phone:{glass:360,air:18,thumb:32,type:14,name:26,desc:14,typeStroke:1,typeShadow:.8,descStroke:1},design:{glass:882,air:62,thumb:96,type:l.captionType.size,name:l.captionName.size,desc:l.captionType.size,typeStroke:l.captionType.stroke,typeShadow:l.captionType.shadow,descStroke:l.captionType.stroke},bottom:1.2,upright:{frame:.5,ends:2,sides:.5,roomy:.75,thumb:1.5}},d={stagger:.08,tossStagger:.14,tossBack:1.7,openTilt:3},p={thumbOut:.15,thumbHoldMs:180,thumbHover:1.1,pinTypeUp:24+.5*h.type.desc,pinNameDown:24+.5*h.name.asc,pinLabelScale:.5,labelFrom:.3,labelTo:.6,revealAt:.95,lag:{hz:1.5,damping:.65}},m={home:{x:t.w/2,y:r.top+r.h/2,zoom:1},maxZoom:1,minZoom:.4,revealZoomStart:.46,revealZoomEnd:.85,revealFocusPx:320,magnetRadiusPx:950,homeStayShare:.5,homeStayFullWidthPx:1024,homeStayShareWheel:.25,focusThreshold:.22,focusZoom:1,overviewZoom:.55,videoZoom:.7,videoPreloadZoom:.63,hopZoom:.75,radius:0,cardRadius:56,screenRadius:24,siteRadius:16,fisheyeRadiusPx:620,fisheyeMaxScale:1.4,scatter:.8,scatterRadiusPx:620,lookPx:{x:90,y:60},lookEaseMs:300,lookOpenScale:.5},f={previews:3,previewGap:.35,workScale:.5,fan:{tilt:2*d.openTilt,overlap:d.tossStagger,sideScale:.85}};e.s(["ART",0,n,"ART_TOP",0,i,"CAPTION",0,p,"CAPTION_BOX",0,h,"COPY",0,{hello:{x:434,y:134.43,lines:["HELLO","MY NAME IS"]},x:{x:434.5,y:223.45,text:"X"},and:{x:434.5,y:468.35,text:"AND I’M A"},role:{x:434.5,y:554.41,lines:["SENIOR PRODUCT","DESIGNER"]}},"CREDIT",0,f,"FRAME",0,a,"FRAME_DEVICE",0,{phoneShort:500,tabletShort:1040},"FRAME_EDGE_BLEED",0,{base:.5,fringe:.11,minCut:2},"GLASS_ASPECT",0,{min:4/3,max:2},"HERO",0,r,"HERO_PORTRAIT",0,{pad:-110,y:.8,copyGap:40,roomX:.68,overviewGrow:1.2},"ILNAZ",0,{x:434.75,y:345.2,w:428.2,h:283.8,angle:-8},"INSIDES_PHOTO",0,{reference:{w:1584,h:1155},share:.58,tuck:.5,gap:56,drop:.2},"INSIDES_TOSS",0,d,"LOCKUP",0,{x:81,y:62,w:869,h:681},"LOCKUP_FIT",0,.81,"OPEN_ZONES",0,u,"PAN",0,{speed:640,step:96},"PORTRAIT",0,{viewW:480,boardSquash:{x:.72,y:.95},boardSquashTablet:{x:.8,y:1},tabletW:700},"ROW",0,{show:{upright:.33,sideways:.8,wide:.55,min:.22},dim:.5,tapMargin:{phone:12,tablet:16,desktop:8},reach:18},"SCREEN",0,t,"SIBLING",0,{size:{upright:1.45,wide:1.2},overlap:.22,inset:.5,clear:.35,sideGap:.1,min:.6,tap:{phone:12,tablet:14,desktop:8},hoverLift:3,label:{on:!1,size:.9,gap:.2}},"SIDE_SHARE",0,.75,"STAR",0,{w:869,h:681},"STICKER",0,{ink:"#ffee00",scale:{desktop:1,tabletSideways:1,phoneSideways:1.2,uprightPhone:.975,uprightTablet:.55},work:{w:252,h:138,texture:{w:252,h:138},spot:{corner:"br",at:{x:30,y:15},angle:-7,peel:-165},title:{size:26,line:22,bottom:12,dx:-1},desc:{size:12,line:12,bottom:37,dx:-1}},help:{w:132,h:92,texture:{w:132,h:92},spot:{corner:"tl",at:{x:14,y:8},angle:6,peel:15},title:{size:26,line:22,bottom:11,dx:0},ink:"#000000",desc:null,peel:{rest:{min:13,max:20},restCurl:{min:110,max:120},hover:8,maxCurl:25,breathMs:3100,phase:.37,hoverMs:40},tilt:{deg:-12,ms:350,overshoot:1.1,after:.97,pivotUp:2},flip:{ms:720,crease:2}},words:{popShare:.45},tabCaption:{gap:8,cssVar:"--help-sticker-bottom"},peel:{rest:{min:22,max:34},restCurl:{min:110,max:125},hover:54,maxCurl:125,workHover:{hover:70,maxCurl:150},breathMs:4200,phase:0,hoverMs:70,fps:30,restFps:12,press:{length:0,ms:30,holdMs:90}},shadow:{cast:.35,offset:{back:.3,down:.15},soft:4,fade:6},enter:{slapMs:300,from:1.15,turn:3,peelMs:520,peelFadeMs:120,fadeMs:{min:250,max:600},reducedMs:150,ease:"cubic-bezier(0.16, 1, 0.3, 1)"},light:{x:-.35,y:-.55,z:1},front:.45,back:{base:.5,lit:.3},pad:4,seam:1.5},"SYSMSG",0,{size:32,minCss:24,padY:.5,padX:.7,gap:.6,stackW:.86,hintBottom:.09,hintBottomUpright:.15,hintMs:6e3},"TELETEXT",0,c,"TICKER",0,{passS:18,hoverRate:.15,labelShare:.36,phoneInset:.08,maxZoomOverOverview:1.08,showS:36,strokeEm:.07,shadowEm:.07,fadeMs:260},"TYPE",0,l,"UPRIGHT_RADIUS",0,{phone:Math.max(32,55-o),tablet:Math.max(32,18-o)},"WORLD",0,m])},77994,e=>{"use strict";function t(e,t,a){return Math.min(a,Math.max(t,e))}e.s(["approach",0,function(e,t){return 1-Math.exp(-e/t)},"chase",0,function(e,t,a,o=.001){let r=e+(t-e)*a;return Math.abs(t-r)<o?t:r},"clamp",0,t,"clamp01",0,function(e){return t(e,0,1)},"easeOutBack",0,function(e,t){return 1+(t+1)*(e-1)**3+t*(e-1)**2},"easeOutCubic",0,function(e){return 1-(1-e)**3},"easeOutQuart",0,function(e){return 1-(1-e)**4},"lerp",0,function(e,t,a){return e+(t-e)*a},"rad",0,function(e){return e*Math.PI/180},"smoothstep",0,function(e){return e*e*(3-2*e)}])},96480,e=>{"use strict";let t;var a=e.i(67987),o=e.i(89480),r=e.i(77994),n=e.i(59270);function i(e){let t=null;return()=>{let a=window.innerWidth,o=window.innerHeight;return(t?.w!==a||t.h!==o)&&(t={w:a,h:o,value:e()}),t.value}}function s(){return t??=null!==(0,o.urlParam)("og")}function l(){return window.innerHeight>window.innerWidth}function c(){return Math.max(window.innerWidth/n.SCREEN.w,window.innerHeight/n.SCREEN.h)}function h(){return Math.min(window.devicePixelRatio||1,2)}let u={gpu:6,canvas:2.2},d=u.gpu,p=!0;function m(){return Math.sqrt(1e6*d/(n.SCREEN.w*n.SCREEN.h))}function f(){return Math.max(1,Math.min(c()*h(),m()))}function w(e){return{width:Math.max(1,Math.round(n.SCREEN.w*e)),height:Math.max(1,Math.round(n.SCREEN.h*e))}}function v(e,t){let o=(0,a.crtWarp)(e-n.SCREEN.w/2,t-n.SCREEN.h/2,n.SCREEN.w,n.SCREEN.h);return{x:o.x+n.SCREEN.w/2,y:o.y+n.SCREEN.h/2}}function x(e,t){let a="x"===t?n.SCREEN.w/2:n.SCREEN.h/2,o=e=>"x"===t?v(e,n.SCREEN.h/2).x:v(n.SCREEN.w/2,e).y,r=a-2*n.SCREEN.w,i=a+2*n.SCREEN.w;for(let t=0;t<40;t++){let t=(r+i)/2;o(t)<e?r=t:i=t}return(r+i)/2}function y(e,t){return v(n.SCREEN.w/2,x(e,"y")+t).y}let g=i(()=>{let e=c(),t=window.innerWidth/e,a=window.innerHeight/e;return{x:n.SCREEN.w/2-t/2,y:n.SCREEN.h/2-a/2,w:t,h:a}}),S=i(()=>{let e=g(),t=1/0,a=1/0,o=-1/0,r=-1/0;for(let n of[0,.5,1])for(let i of[0,.5,1]){let s=v(e.x+e.w*n,e.y+e.h*i);t=Math.min(t,s.x),a=Math.min(a,s.y),o=Math.max(o,s.x),r=Math.max(r,s.y)}return(t=Math.max(0,t-48),a=Math.max(0,a-48),o=Math.min(n.SCREEN.w,o+48),r=Math.min(n.SCREEN.h,r+48),o>t&&r>a)?{x:t,y:a,w:o-t,h:r-a}:{x:0,y:0,w:n.SCREEN.w,h:n.SCREEN.h}});function E(){return s()?"og":l()?"upright":A()?"phoneSideways":Math.min(window.innerWidth,window.innerHeight)<=n.FRAME_DEVICE.tabletShort&&(0,o.touchCapable)()?"tabletSideways":"desktop"}let b=i(()=>{let e=c();if(!(e>0)||!Number.isFinite(e))return C(0,0,n.SCREEN.w,n.SCREEN.h);let t=g(),a={x:n.SCREEN.w/2,y:n.SCREEN.h/2},r=function(){let e=E(),t=n.FRAME[e],a=(0,o.safeInsets)(),r={left:t.x+a.left,right:t.x+a.right,top:t.y+a.top,bottom:t.y+a.bottom};if("og"===e)return r;let i=(e,t)=>{let a=e-R(e,t);return Math.max(n.FRAME_EDGE_BLEED.minCut,e-R(a,t))};return{left:i(r.left,"x"),right:i(r.right,"x"),top:i(r.top,"y"),bottom:i(r.bottom,"y")}}(),i=v(t.x+r.left/e,a.y).x,h=v(t.x+t.w-r.right/e,a.y).x,u=v(a.x,t.y+r.top/e).y,d=v(a.x,t.y+t.h-r.bottom/e).y;if(l())return C(i,u,h,d);if(s())return C(Math.max((n.SCREEN.w-n.ART.w)/2,i),Math.max(n.ART_TOP,u),Math.min((n.SCREEN.w+n.ART.w)/2,h),Math.min(n.ART_TOP+n.ART.h,d));let p={w:2*Math.min(a.x-i,h-a.x),h:d-u},m=Math.min(p.w,p.h*n.GLASS_ASPECT.max),f=Math.min(p.h,m/n.GLASS_ASPECT.min),w=(u+d)/2;return C(a.x-m/2,w-f/2,a.x+m/2,w+f/2)});function R(e,t){let o=g(),r=c(),i={x:n.SCREEN.w/2,y:n.SCREEN.h/2},s=("x"===t?o.x:o.y)+e/r,h=e=>"x"===t?v(e,i.y).x:v(i.x,e).y,u=h(s),d=Math.abs(u-("x"===t?i.x:i.y)),p=d*d/(i.x*i.x+i.y*i.y),m=d*(0,a.glassChroma)(l())*(p+p*p),f=Math.abs(h(s+1)-u);return n.FRAME_EDGE_BLEED.base+n.FRAME_EDGE_BLEED.fringe*(m/f*r)}function C(e,t,a,o){return{left:e,top:t,right:a,bottom:o,w:Math.max(0,a-e),h:Math.max(0,o-t)}}function T(){let e=b();return Math.min(l()?(A()?n.UPRIGHT_RADIUS.phone:n.UPRIGHT_RADIUS.tablet)/c():n.ART.radius,e.w/2,e.h/2)}let k=i(()=>{let e=b(),t=c(),a=(e,a)=>(x(e,a)-("x"===a?n.SCREEN.w:n.SCREEN.h)/2)*t+("x"===a?window.innerWidth:window.innerHeight)/2,[o,r]=[a(e.left,"x"),a(e.right,"x")],[i,s]=[a(e.top,"y"),a(e.bottom,"y")];return{left:o,top:i,right:r,bottom:s,w:r-o,h:s-i,radius:T()*t}});function M(e,t){let a={x:e,y:t};for(let o=0;o<12;o++){let o=v(a.x,a.y);a={x:a.x+e-o.x,y:a.y+t-o.y}}let o=c();return{x:(a.x-n.SCREEN.w/2)*o+window.innerWidth/2,y:(a.y-n.SCREEN.h/2)*o+window.innerHeight/2}}let P=i(()=>{let e=b(),t=T(),a=[],o=(e,t,o,r)=>{for(let n=0;n<16;n++)a.push(M(e+(o-e)*n/16,t+(r-t)*n/16))},r=(e,o,r)=>{for(let n=0;n<8;n++){let i=(r+90*n/8)*Math.PI/180;a.push(M(e+t*Math.cos(i),o+t*Math.sin(i)))}};return o(e.left+t,e.top,e.right-t,e.top),r(e.right-t,e.top+t,-90),o(e.right,e.top+t,e.right,e.bottom-t),r(e.right-t,e.bottom-t,0),o(e.right-t,e.bottom,e.left+t,e.bottom),r(e.left+t,e.bottom-t,90),o(e.left,e.bottom-t,e.left,e.top+t),r(e.left+t,e.top+t,180),a});function A(){return Math.min(window.innerWidth,window.innerHeight)<=n.FRAME_DEVICE.phoneShort}function N(){let e=b();return l()?Math.min(1,e.w/n.PORTRAIT.viewW):Math.min(1,e.w/n.ART.w,e.h/n.ART.h)}function I(e){return e*N()}let F=()=>({x:n.LOCKUP.x+n.LOCKUP.w/2,y:n.LOCKUP.y+n.LOCKUP.h/2}),z=i(()=>{let e,t,a=F(),o=b(),r=(o.w-2*n.HERO_PORTRAIT.pad)/n.LOCKUP.w,i=o.top+o.h*n.HERO_PORTRAIT.y,s=y(o.bottom,-n.HERO_PORTRAIT.copyGap/c())-(e=n.TYPE.display,t=n.COPY.role,(n.LOCKUP.y+t.y+(t.lines.length-1)/2*e.line+e.size/2+e.stroke+e.shadow-a.y)*r),l=Math.max(o.top+o.h/2,Math.min(i,s));return{from:a,to:{x:n.SCREEN.w/2,y:l-n.HERO.top},scale:r}});e.s(["boardSquash",0,function(){return l()?window.innerWidth>=n.PORTRAIT.tabletW?n.PORTRAIT.boardSquashTablet:n.PORTRAIT.boardSquash:{x:1,y:1}},"clientToLayout",0,function(e,t){let a=c();return{x:(e-window.innerWidth/2)/a+n.SCREEN.w/2,y:(t-window.innerHeight/2)/a+n.SCREEN.h/2}},"contentScale",0,f,"contentSize",0,function(){return w(f())},"deviceClass",0,function(){let e=E();return"phoneSideways"===e?"phone":"tabletSideways"===e?"tablet":"upright"===e?A()?"phone":"tablet":"desktop"},"fitScale",0,c,"frameBox",0,b,"frameDevice",0,E,"frameRadius",0,T,"glassOn",0,()=>p,"glassOutline",0,P,"glassWindowBox",0,k,"heroArt",0,function(){let e=b();return{x:e.left,y:e.top,w:e.w,h:e.h}},"heroGrow",0,function(e){if(!l())return 1;let t=I(n.WORLD.overviewZoom),a=(0,r.clamp01)((e-t)/(n.WORLD.maxZoom-t));return 1+(n.HERO_PORTRAIT.overviewGrow-1)*(1-a)},"isPortrait",0,l,"lockupPlace",0,function(){if(l())return z();let e=F(),t=n.SCREEN.w/2,a=n.SCREEN.h/2-n.HERO.top;return{from:e,to:{x:t+(e.x-t)*n.LOCKUP_FIT,y:a+(e.y-a)*n.LOCKUP_FIT},scale:n.LOCKUP_FIT}},"maxContentScale",0,m,"ogMode",0,s,"perWindow",0,i,"physicalSize",0,function(){let e=Math.sqrt(1e7/(n.SCREEN.w*n.SCREEN.h));return w(Math.min(c()*h(),e))},"screenPx",0,function(e){return l()?e*N():e},"seenRect",0,S,"seenShiftY",0,y,"setContentRenderer",0,function(e){d=u[e],p="gpu"===e},"unwarpAxis",0,x,"viewRect",0,g,"warp",0,v,"zoomOf",0,I])}]);