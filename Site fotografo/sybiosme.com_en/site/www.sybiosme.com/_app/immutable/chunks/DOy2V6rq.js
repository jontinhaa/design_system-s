import{s as vo,b as _o}from"./BY8q4oQ7.js";import{b as Dn,a as ms,o as Ln,w as fs}from"./CF90zjjr.js";import{L as xt,D as ps,E as hs,v as xs}from"./BtPcHT3g.js";import{e as vs,s as ko,a as Cn}from"./DTw7rtVG.js";import{t as go}from"./CNg8u8nT.js";import{r as Jt,c as _s}from"./DOTQOv6-.js";import{d as yo}from"./B49dweYj.js";import{a as bo,d as ks}from"./Ds4jHZlJ.js";const re=4,gs=16384,ys=`#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
uniform vec2 u_resolution;
uniform float u_scale;
uniform float u_rotation;
uniform vec2 u_offset;
uniform vec2 u_travel;
out vec2 v_objectUV;
out vec2 v_lensUV;
out vec2 v_grainUV;
out vec2 v_tileUV;
void main() {
gl_Position = vec4(a_position, 0., 1.);
v_tileUV = a_position * .5 + .5;
vec2 uv = a_position * .5;
uv *= u_resolution / min(u_resolution.x, u_resolution.y);
uv += vec2(-u_offset.x, u_offset.y);
float r = radians(u_rotation);
mat2 turn = mat2(cos(r), sin(r), -sin(r), cos(r));
v_objectUV = turn * ((uv - vec2(0., u_travel.x)) / u_scale);
v_lensUV = turn * (uv / u_scale);
v_grainUV = turn * ((uv - vec2(0., u_travel.y)) / u_scale);
}`,bs=`#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float u_time;
uniform vec4 u_colours[${re}];
uniform float u_colourCount;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_grainScale;
uniform float u_phase;
uniform vec3 u_tile;
uniform vec2 u_spotOffsets[${re}];
uniform vec2 u_eddies;
uniform vec4 u_screen;
uniform vec2 u_resolution;
uniform float u_scale;
uniform float u_rotation;
uniform sampler2D u_wakeFlow;
uniform sampler2D u_wakeDrift;
uniform vec4 u_wake;
uniform vec4 u_wake2;
uniform vec3 u_wakeTint;
in vec2 v_objectUV;
in vec2 v_lensUV;
in vec2 v_grainUV;
in vec2 v_tileUV;
out vec4 fragColour;
vec2 rotate(vec2 uv, float th) {
return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
vec2 current(vec2 uv, vec2 centre, float strength) {
vec2 delta = uv - centre;
float falloff = exp(-dot(delta, delta) * 3.8);
return centre + rotate(delta, strength * falloff);
}
float hash21(vec2 p) {
p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
p += dot(p, p + 19.19);
return fract(p.x * p.y);
}
float valueNoise(vec2 st) {
vec2 i = floor(st);
vec2 f = fract(st);
float a = hash21(i);
float b = hash21(i + vec2(1.0, 0.0));
float c = hash21(i + vec2(0.0, 1.0));
float d = hash21(i + vec2(1.0, 1.0));
vec2 u = f * f * (3.0 - 2.0 * f);
return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
void blend(vec2 offset, vec4 tint, inout vec3 colour, inout float opacity, inout float total) {
float weight = 1. / (pow(length(offset), 3.5) + 1e-3);
colour += tint.rgb * tint.a * weight;
opacity += tint.a * weight;
total += weight;
}
vec2 spot(int i, float t) {
float a = float(i) * .37;
float b = .6 + fract(float(i) / 3.) * .9;
float c = .8 + fract(float(i + 1) / 4.);
return .5 + .5 * vec2(sin(t * b + a), cos(t * c + a * 1.5));
}
void main() {
vec2 objectUV = v_objectUV;
vec2 lensUV = v_lensUV;
float wakeMark = 0.;
float wakeSpeed = 0.;
if (u_wake.x > .5) {
vec2 s = gl_FragCoord.xy / u_resolution;
vec4 w = texture(u_wakeDrift, s);
vec2 d = w.xy * u_wake.y;
float m = length(d);
if (m > u_wake2.z) d *= u_wake2.z / m;
float r = radians(u_rotation);
mat2 turn = mat2(cos(r), sin(r), -sin(r), cos(r));
vec2 step = turn * (d / u_scale);
objectUV += step;
lensUV += step;
wakeMark = clamp(w.z, 0., 1.) * u_wake2.w;
wakeSpeed = length(texture(u_wakeFlow, s).xy);
}
vec2 uv = objectUV + .5;
vec2 grainUV = (v_grainUV + .5) * u_grainScale;
float mixerGrain = 0.;
if (u_grainMixer > 0.) {
mixerGrain = .4 * u_grainMixer * (valueNoise(grainUV) - .5);
}
float t = .5 * (u_time + u_phase);
vec2 lens = lensUV + .5;
vec2 shift = objectUV - lensUV;
float radius = smoothstep(0., 1., length(lens - .5));
float centre = 1. - radius;
vec2 warp = lens;
for (float i = 1.; i <= 2.; i++) {
warp.x += u_distortion * centre / i * sin(t + i * .4 * smoothstep(.0, 1., warp.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., warp.y));
warp.y += u_distortion * centre / i * cos(t + i * 2. * smoothstep(.0, 1., warp.x));
}
uv += warp - lens;
vec2 eye = .5 + shift;
vec2 swirled = rotate(uv - eye, -3. * u_swirl * radius) + eye;
if (dot(abs(u_eddies), vec2(1.)) > 0.00001) {
swirled = current(swirled, eye + vec2(-.28, -.08), u_eddies.x);
swirled = current(swirled, eye + vec2(.3, .12), u_eddies.y);
}
vec3 colour = vec3(0.);
float opacity = 0.;
float total = 0.;
for (int i = 0; i < ${re}; i++) {
if (i >= int(u_colourCount)) break;
vec2 pos = spot(i, t) + mixerGrain + u_spotOffsets[i];
if (u_tile.z > 0.) {
vec2 step = u_tile.xy * u_tile.z;
float n = floor(dot(swirled - pos, u_tile.xy) / u_tile.z);
blend(swirled - pos - n * step, u_colours[i], colour, opacity, total);
blend(swirled - pos - (n + 1.) * step, u_colours[i], colour, opacity, total);
} else {
blend(swirled - pos, u_colours[i], colour, opacity, total);
}
}
colour /= max(1e-4, total);
opacity /= max(1e-4, total);
if (u_wake.x > .5) {
colour = mix(colour, u_wakeTint, wakeMark * clamp(u_wake.w, 0., 1.));
float glint = u_wake2.x * smoothstep(0., max(1e-3, u_wake2.y), wakeSpeed) * u_wake2.w;
float lift = clamp(wakeMark * abs(u_wake.z) + glint, 0., 1.);
colour = mix(colour, u_wake.z < 0. ? vec3(0.) : vec3(1.), lift);
}
if (u_grainOverlay > 0.) {
float g = valueNoise(rotate(grainUV, 1.) + vec2(3.));
g = mix(g, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
g = pow(g, 1.3);
float v = g * 2. - 1.;
float strength = pow(u_grainOverlay * abs(v), .8);
colour = mix(colour, vec3(step(0., v)), .35 * strength);
opacity += .5 * strength;
}
if (u_screen.x > 0. && u_screen.y > 0.) {
vec2 p = vec2(v_tileUV.x, 1. - v_tileUV.y) * u_resolution;
vec2 q = mod(p, u_screen.x) - .5 * u_screen.x;
float d = length(q) - u_screen.y;
float ink = (1. - smoothstep(-u_screen.w, u_screen.w, d)) * u_screen.z;
colour = mix(colour, vec3(1.), ink);
}
fragColour = vec4(colour, clamp(opacity, 0., 1.));
}`,Ms=["u_resolution","u_scale","u_rotation","u_offset","u_travel","u_time","u_colours[0]","u_colourCount","u_distortion","u_swirl","u_grainMixer","u_grainOverlay","u_grainScale","u_phase","u_tile","u_spotOffsets[0]","u_eddies","u_screen","u_wakeFlow","u_wakeDrift","u_wake","u_wake2","u_wakeTint"],ws=new Float32Array(re*2),Ts=new Float32Array(2);function yn(e,t={}){const a=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"low-power"});if(!a)return null;let n=t.parallel?a.getExtension("KHR_parallel_shader_compile"):null,o=null,r=null,s=null,c=null,i={},m=!1,p=!1,l=0,d=0;const f=()=>{const M=a.createShader(a.VERTEX_SHADER);a.shaderSource(M,ys),a.compileShader(M);const b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,bs),a.compileShader(b);const T=a.createProgram();return a.attachShader(T,M),a.attachShader(T,b),a.linkProgram(T),{p:T,v:M,f:b}},x=()=>(o=f(),n?!1:v()),v=()=>{if(!o)return!1;const{p:M,v:b,f:T}=o;o=null;const R=a.getProgramParameter(M,a.LINK_STATUS);if(!R){for(const E of[b,T])a.getShaderParameter(E,a.COMPILE_STATUS)||console.error("[ground]",a.getShaderInfoLog(E));console.error("[ground]",a.getProgramInfoLog(M))}return a.deleteShader(b),a.deleteShader(T),R?(r=M,i=Object.fromEntries(Ms.map(E=>[E,a.getUniformLocation(M,E)])),c=a.createVertexArray(),a.bindVertexArray(c),s=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,s),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW),a.enableVertexAttribArray(0),a.vertexAttribPointer(0,2,a.FLOAT,!1,0,0),a.useProgram(r),l&&d&&(a.viewport(0,0,l,d),a.uniform2f(i.u_resolution,l,d)),a.uniform1i(i.u_wakeFlow,3),a.uniform1i(i.u_wakeDrift,4),a.uniform4f(i.u_wake,0,0,0,0),!0):(a.deleteProgram(M),!1)},A=M=>{M.preventDefault(),m=!1,r=null},F=()=>{p||(t.parallel&&(n=a.getExtension("KHR_parallel_shader_compile")),m=x())};return e.addEventListener("webglcontextlost",A),e.addEventListener("webglcontextrestored",F),m=x(),!m&&!o?(e.removeEventListener("webglcontextlost",A),e.removeEventListener("webglcontextrestored",F),null):{get gl(){return a},get ok(){return m},poll(){return m||!o?m:n&&!a.getProgramParameter(o.p,n.COMPLETION_STATUS_KHR)?!1:(m=v(),m)},get width(){return l},get height(){return d},resize(M,b,T){const R=Math.max(1,Math.round(M*T)),E=Math.max(1,Math.round(b*T));R===l&&E===d||(l=R,d=E,e.width=R,e.height=E,!(!m||!r)&&(a.useProgram(r),a.viewport(0,0,R,E),a.uniform2f(i.u_resolution,R,E)))},render(M,b,T,R,E,C,w){if(!m||!r)return;a.useProgram(r);const u=C?Math.min(l,Math.max(1,Math.round(C[0]))):l,_=C?Math.min(d,Math.max(1,Math.round(C[1]))):d;a.viewport(0,C?.[2]??0,u,_),a.uniform2f(i.u_resolution,u,_),a.bindVertexArray(c),a.uniform1f(i.u_time,M),a.uniform4fv(i["u_colours[0]"],b),a.uniform1f(i.u_colourCount,T),a.uniform1f(i.u_distortion,R.distortion),a.uniform1f(i.u_swirl,R.swirl),a.uniform1f(i.u_grainMixer,R.grainMixer),a.uniform1f(i.u_grainOverlay,R.grainOverlay),a.uniform1f(i.u_grainScale,R.grainScale),a.uniform1f(i.u_phase,R.phase);const g=R.rotation*Math.PI/180;a.uniform3f(i.u_tile,Math.sin(g),-Math.cos(g),R.tile),a.uniform1f(i.u_scale,R.scale),a.uniform1f(i.u_rotation,R.rotation),a.uniform2f(i.u_offset,R.offsetX,R.offsetY),a.uniform2f(i.u_travel,E[0],E[1]),a.uniform2fv(i["u_spotOffsets[0]"],R.spotOffsets??ws),a.uniform2fv(i.u_eddies,R.eddies??Ts),R.screen?a.uniform4f(i.u_screen,...R.screen):a.uniform4f(i.u_screen,0,0,0,0),w&&w.flow&&w.drift&&!C?(a.activeTexture(a.TEXTURE3),a.bindTexture(a.TEXTURE_2D,w.flow),a.activeTexture(a.TEXTURE4),a.bindTexture(a.TEXTURE_2D,w.drift),a.activeTexture(a.TEXTURE0),a.uniform4f(i.u_wake,1,w.displace,w.light,w.tint),a.uniform4f(i.u_wake2,w.glint,w.glintRef,w.cap,w.fade),a.uniform3f(i.u_wakeTint,w.tintColour[0],w.tintColour[1],w.tintColour[2])):a.uniform4f(i.u_wake,0,0,0,0),a.drawArrays(a.TRIANGLES,0,3)},sample(){if(!m||!l||!d)return null;const M=new Uint8Array(l*4);let b=0,T=0,R=0,E=0;for(let C=1;C<=5;C++){a.readPixels(0,Math.round(d*C/6),l,1,a.RGBA,a.UNSIGNED_BYTE,M);for(let w=0;w<l;w++)b+=M[w*4],T+=M[w*4+1],R+=M[w*4+2],E++}return E?[b/E,T/E,R/E]:null},row(M){if(!m||!l||!d)return null;const b=Math.min(d-1,Math.max(0,Math.round((1-M)*(d-1)))),T=new Uint8Array(l*4);a.readPixels(0,b,l,1,a.RGBA,a.UNSIGNED_BYTE,T);const R=[],E=Math.max(1,Math.floor(l/96));for(let C=0;C<l;C+=E)R.push(.2126*T[C*4]+.7152*T[C*4+1]+.0722*T[C*4+2]);return R},band(M,b,T,R){if(!m||!l||!d)return null;const E=Math.min(d-1,Math.max(0,Math.round((1-M)*(d-1)))),C=Math.min(l-1,Math.max(0,Math.round(T))),w=Math.min(l-C,Math.max(1,Math.round(R))),u=Math.min(E+1,Math.max(1,Math.round(b))),_=new Uint8Array(w*u*4);a.readPixels(C,E+1-u,w,u,a.RGBA,a.UNSIGNED_BYTE,_);const g=[];for(let k=u-1;k>=0;k--){const y=[];for(let P=0;P<w;P++){const h=(k*w+P)*4;y.push(.2126*_[h]+.7152*_[h+1]+.0722*_[h+2])}g.push(y)}return g},dispose(){p=!0,m=!1,o&&(a.deleteShader(o.v),a.deleteShader(o.f),a.deleteProgram(o.p),o=null),e.removeEventListener("webglcontextlost",A),e.removeEventListener("webglcontextrestored",F),a.deleteBuffer(s),a.deleteVertexArray(c),a.deleteProgram(r),r=null}}}const nr=(()=>{const e=navigator.userAgent;return/iP(hone|ad|od)/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1?!0:/AppleWebKit/.test(e)&&!/(Chrome|Chromium|Edg|OPR|SamsungBrowser)\//.test(e)})(),Es={letter:0,globe:1,field:2},or=4.32,Rs=1.15,As=Math.PI*2,Ss=`uniform vec4 u_art;
uniform vec2 u_artPointer;
uniform sampler2D u_letter;
const float ART_ENVELOPE = 0.35;
const float ART_LETTER_FIT = 0.796 / (ART_ENVELOPE * 2.0);
float radarSweep(vec2 q, float radius, float phase) {
float r = length(q);
float disc = 1.0 - smoothstep(radius - 0.45, radius + 0.45, r);
float angle = atan(q.y, q.x + 0.00001);
float age = mod(phase - angle + 6.2831853, 6.2831853);
float t = age / ${As.toFixed(7)};
float trail = pow(max(0.0, 1.0 - t), 0.85);
return disc * trail * (1.0 - smoothstep(0.97, 1.0, t));
}
float optionAt(vec2 c, float aa) {
float side = min(u_rect.z, u_rect.w);
float cells = side / u_cell;
vec2 q = (c - u_rect.zw * 0.5) / u_cell;
q -= u_artPointer * 0.008 * cells;
q /= 1.0 + u_art.z * 0.018 - u_art.w * 0.025;
if (u_art.x < 0.5) {
vec2 uv = q * ART_LETTER_FIT / cells + 0.5;
if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return 0.0;
float lod = max(0.0, log2(256.0 * ART_LETTER_FIT / max(1.0, cells)));
float cov = textureLod(u_letter, uv, lod).r;
return clamp(lumOfArea(cov * dotOf(1.0) * dotOf(1.0)), 0.0, 1.0);
}
if (u_art.x < 1.5) {
vec2 uv = (c - u_rect.zw * 0.5) / side + 0.5;
if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return 0.0;
float lod = max(0.0, log2(256.0 / max(1.0, cells)));
float coverage = textureLod(u_letter, uv, lod).r;
coverage = min(1.0, coverage * (1.0 + 2.0 * smoothstep(0.035, 0.25, coverage)));
return clamp(lumOfArea(coverage * dotOf(1.0) * dotOf(1.0)), 0.0, 1.0);
}
float radius = cells * ART_ENVELOPE;
float phase = mod(u_art.y / ${or.toFixed(2)}, 1.0) * 6.2831853 - 1.5707963;
float cov = 0.0;
for (int y = 0; y < 2; y++) {
for (int x = 0; x < 2; x++) {
vec2 offset = (vec2(float(x), float(y)) - 0.5) * 0.5;
cov += radarSweep(q + offset, radius, phase) * 0.25;
}
}
float restTone = max(u_grid.x, 1.5 / 255.0);
float restRadius = mix(u_sweep.y, u_sweep.z, restTone * u_grid.z);
float peakRadius = max(restRadius, dotOf(1.0) * 0.90);
float inkRadius = mix(restRadius, peakRadius, cov);
return clamp(lumOfArea(inkRadius * inkRadius), 0.0, 1.0);
}`,Aa=32,Fe=8,Ae={sphere:0,chart:1,dart:2,ruler:3,grid:4,option:5},Fs=`#version 300 es
void main() {
vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,rr=`#version 300 es
precision highp float;
uniform vec4  u_rect;
uniform float u_cell;
uniform vec2  u_phase;
uniform int   u_source;
uniform float u_time;
float hash(vec2 p) {
p = fract(p * vec2(123.34, 456.21));
p += dot(p, p + 45.32);
return fract(p.x * p.y);
}
float smin(float a, float b, float k) {
if (k <= 0.0) return min(a, b);
float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
return mix(b, a, h) - k * h * (1.0 - h);
}
float band(float c, float e, float lo, float hi) {
if (e <= 0.0) return (c >= lo && c <= hi) ? 1.0 : 0.0;
return clamp((min(c + e, hi) - max(c - e, lo)) / (2.0 * e), 0.0, 1.0);
}
float capsule(vec2 p, vec2 a, vec2 b, float r) {
vec2 pa = p - a, ba = b - a;
float h = clamp(dot(pa, ba) / max(1e-6, dot(ba, ba)), 0.0, 1.0);
return length(pa - ba * h) - r;
}
float box(vec2 p, vec2 half_, float r) {
vec2 d = abs(p) - half_ + r;
return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r;
}`,Ps=`${rr}
uniform vec2  u_field;
uniform vec4  u_tone;
uniform vec2  u_ink;
uniform vec4  u_grid;
uniform sampler2D u_sheet;
uniform vec4  u_sheetGrid;
uniform vec4  u_sphere;
uniform vec4  u_mask;
uniform vec4  u_maskSoft;
uniform vec4  u_holes[${Fe}];
uniform float u_holeFade[${Fe}];
uniform float u_holeR[${Fe}];
uniform vec2  u_hole;
uniform float u_flip;
uniform vec4  u_bars[${Aa/4}];
uniform vec4  u_inks[${Aa/4}];
uniform vec4  u_chart;
uniform vec4  u_geom;
uniform vec4  u_rail;
uniform vec4  u_sweep;
uniform vec4  u_dart;
uniform vec4  u_rule;
uniform vec4  u_thick;
uniform vec4  u_hot;
uniform vec4  u_rule2;
uniform vec4  u_len2;
uniform vec4  u_road2;
uniform vec4  u_trail;
uniform vec4  u_shut;
uniform vec4  u_slat;
uniform vec4  u_drum;
uniform vec4  u_set;
uniform vec4  u_deep;
uniform vec4  u_rank;
uniform vec4  u_road;
uniform vec4  u_blind;
uniform vec4  u_cam;
uniform vec4  u_eye;
uniform vec2  u_pp;
uniform vec4  u_shade;
out vec4 fragColour;
float barAt(int i) {
vec4 v = u_bars[i >> 2];
int k = i & 3;
return k == 0 ? v.x : k == 1 ? v.y : k == 2 ? v.z : v.w;
}
float inkAt(int i) {
vec4 v = u_inks[i >> 2];
int k = i & 3;
return k == 0 ? v.x : k == 1 ? v.y : k == 2 ? v.z : v.w;
}
float sheetTap(float frame, vec2 uv) {
float cols = u_sheetGrid.x;
float f    = mod(frame, u_sheetGrid.z);
float col  = mod(f, cols);
float row  = floor(f / cols);
vec2 t = (vec2(col, row) + clamp(uv, u_sheetGrid.w, 1.0 - u_sheetGrid.w))
/ vec2(cols, u_sheetGrid.y);
return texture(u_sheet, t).r;
}
float sphereAt(vec2 c) {
vec2 uv = (c - u_sphere.xy) / u_sphere.z * 0.5 + 0.5;
uv.x = mix(uv.x, 1.0 - uv.x, u_flip);
if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
float f = u_sphere.w;
float a = floor(f);
float b = mod(a + 1.0, u_sheetGrid.z);
return mix(sheetTap(a, uv), sheetTap(b, uv), fract(f));
}
float maskAt(vec2 c) {
vec4 s = max(vec4(1.0), u_maskSoft);
return smoothstep(u_mask.x, u_mask.x + s.x, c.x)
* (1.0 - smoothstep(u_mask.y - s.y, u_mask.y, c.x))
* smoothstep(u_mask.z, u_mask.z + s.z, c.y)
* (1.0 - smoothstep(u_mask.w - s.w, u_mask.w, c.y));
}
vec2 onPage(vec2 c) {
int n = int(u_hole.x + 0.5);
if (n <= 0) return vec2(1.0);
vec2 keep = vec2(1.0);
vec2 p = c + u_rect.xy;
float fade = max(1e-3, u_hole.y * u_cell);
for (int i = 0; i < ${Fe}; i++) {
if (i >= n) break;
float sd = box(p - u_holes[i].xy, u_holes[i].zw, u_holeR[i]);
float coverage = smoothstep(-max(fade, u_holeFade[i]), 0.0, sd);
if (u_holeFade[i] > 0.0) keep.y = min(keep.y, coverage);
else keep.x = min(keep.x, coverage);
}
return keep;
}
float rail(float x, float ph) {
return (floor((x + ph) / u_cell) + 0.5) * u_cell - ph;
}
int imod(int a, int n) {
int r = a - (a / n) * n;
return r < 0 ? r + n : r;
}
float chance(int idx, int row) {
return hash(vec2(float(idx) * 1.37 + 7.1, float(row) * 2.11 + 3.7));
}
int rowsIn(float share, int total) {
int r = max(1, int(share * float(total) + 0.5));
return min(total, r + imod(total - r, 2));
}
float ramp2(float x) { x = max(0.0, x); return x * x; }
float shut(float d, float w, float s) {
float a = (1.0 + w) * 0.5, b = abs(1.0 - w) * 0.5;
if (s < 1e-4) return clamp(a - abs(d), 0.0, min(1.0, w));
float h = s * 0.5, x1 = d + h, x0 = d - h;
float F1 = ramp2(x1 + a) - ramp2(x1 + b) - ramp2(x1 - b) + ramp2(x1 - a);
float F0 = ramp2(x0 + a) - ramp2(x0 + b) - ramp2(x0 - b) + ramp2(x0 - a);
return clamp((F1 - F0) * 0.5 / s, 0.0, 1.0);
}
float dotOf(float level) {
float t = pow(clamp((level - u_tone.x) / max(1e-4, u_tone.y - u_tone.x), 0.0, 1.0), u_tone.z);
return mix(u_sweep.y, u_sweep.z, t * u_grid.z);
}
float inkOf(float level) { float r = dotOf(level); return r * r; }
float lumOfArea(float area) {
float r = sqrt(max(0.0, area));
float t = (r - u_sweep.y) / max(1e-4, (u_sweep.z - u_sweep.y) * max(1e-4, u_grid.z));
if (t <= 0.0) return 0.0;
return u_tone.x + (u_tone.y - u_tone.x) * pow(min(1.0, t), 1.0 / max(0.05, u_tone.z));
}
float settle(float x) { x = clamp(x, 0.0, 1.0); float y = 1.0 - x; return 1.0 - y * y * y; }
${Ss}
float chartAt(vec2 c, float aa) {
vec2 s = u_rect.zw;
int kind = int(u_chart.x);
float grow = clamp(u_chart.y, 0.0, 1.0);
int ring = max(1, int(u_chart.w));
float area = 0.0;
float pad = u_shade.w * min(s.x, s.y);
vec4 b = vec4(pad, pad, max(1.0, s.x - 2.0 * pad), max(1.0, s.y - 2.0 * pad));
int pitch = max(1, int(u_rail.z + 0.5));
int cols  = max(1, int(u_rail.w + 0.5));
int wide  = kind == 3 ? max(1, min(pitch, int(u_geom.y + 0.5))) : 1;
float bx0 = b.x;
float bx1 = b.x + b.z;
float travel = kind == 2 ? 0.0 : max(0.0, u_chart.z);
float here   = (c.x - u_rail.x) / u_cell + travel;
float mid = float(wide - 1) * 0.5;
float gk  = floor((here - mid) / float(pitch) + 0.5);
int   idx = int(gk + 1024.0) - 1024;
float m0  = gk * float(pitch);
float cov = shut(here - (m0 + mid), float(wide), max(0.0, u_sweep.x)) * band(c.x, aa, bx0, bx1);
float lid = u_rail.y - u_cell * 0.5;
float sit = lid + max(1.0, floor((b.y + b.w - lid) / u_cell + 1e-3)) * u_cell;
float H   = max(u_cell, sit - lid);
float at = clamp((c.x - b.x) / b.z, 0.0, 1.0);
float rise = smoothstep(0.0, 0.45, grow);
float across = (c.x - bx0) / u_cell;
float arrive = clamp(grow * ((bx1 - bx0) / u_cell + 6.0) - 2.0 - across, 0.0, 1.0);
float void_ = u_shade.x * rise;
float ink   = mix(void_, 1.0, arrive);
if (kind == 0) {
float foot = u_geom.x, climb = u_geom.y, amp = u_geom.z;
if (cov > 0.0) {
float v = barAt(imod(idx, ring));
float h = clamp(foot + climb * at + amp * (v * 2.0 - 1.0), 0.06, 1.0);
float bI = band(c.y, aa, sit - h * H, sit);
float bV = band(c.y, aa, lid, sit);
area = max(area, cov * (bI * inkOf(ink) + max(0.0, bV - bI) * inkOf(void_)));
}
} else if (kind == 1) {
float level = u_geom.x, amp = u_geom.y, roofv = u_geom.z;
if (cov > 0.0) {
float v = barAt(imod(idx, ring));
float e = clamp(roofv + amp * (v * 2.0 - 1.0), level + 0.1, 1.0);
float bI = band(c.y, aa, sit - level * H, sit);
float bV = band(c.y, aa, sit - e * H, sit);
area = max(area, cov * (bI * inkOf(ink) + max(0.0, bV - bI) * inkOf(void_)));
}
} else if (kind == 2) {
float paid = u_geom.x, owned = u_geom.y;
int cursor = min(cols - 1, int(u_geom.z + 0.5));
float mm = mod(u_chart.z, float(ring));
float span = max(0.2, u_sweep.w);
float offRing = 1.0 - smoothstep(float(ring) - 1.0, float(ring) - 0.1, mm);
int total = max(1, int(H / u_cell + 0.5));
float rV = dotOf(void_), rI = dotOf(ink);
int col = idx >= 0 && idx < cols ? idx : -1;
if (col >= 0 && col != cursor && cov > 0.0) {
int barR  = rowsIn(paid, total);
float top = lid + float((total - barR) / 2) * u_cell;
float bot = top + float(barR) * u_cell;
float fade = col > cursor
? mix(1.0, 0.55, smoothstep(0.0, 1.0, float(col - cursor) / max(1.0, float(cols - 1 - cursor))))
: 1.0;
float on = col < cursor ? settle((mm - float(col)) / span) * offRing : 0.0;
float rl = mix(rV, rI, on);
area = max(area, band(c.y, aa, top, bot) * cov * rl * rl * fade);
}
float lit13 = settle((mm - float(cursor)) / span) * offRing;
float half13 = 0.5 + 0.5 * max(0.0, u_geom.w) * lit13;
float cut = u_rail.x + float(cursor * pitch) * u_cell;
float curs = band(c.x, aa, max(cut - half13 * u_cell, bx0), min(cut + half13 * u_cell, bx1));
if (curs > 0.0) {
int barR  = rowsIn(owned, total);
float top = lid + float((total - barR) / 2) * u_cell;
float bot = top + float(barR) * u_cell;
float rl = mix(rV, rI, lit13);
area = max(area, band(c.y, aa, top, bot) * curs * rl * rl);
}
} else {
int rows = max(1, int(u_geom.z + 0.5));
int step = max(1, int(u_geom.w + 0.5));
int high = wide;
int n = int(floor((c.y - u_rail.y) / u_cell + 0.5));
int row = n >= 0 && n < (rows - 1) * step + high ? n / step : -1;
if (row >= 0 && n - row * step >= high) row = -1;
if (cov > 0.0 && row >= 0) {
float a2 = chance(imod(idx, ring), row) < u_geom.x ? ink : void_;
area = max(area, cov * inkOf(a2));
}
}
return clamp(lumOfArea(area), 0.0, 1.0);
}
const vec2 DART[4] = vec2[4](
vec2(2.6, 1.4), vec2(16.8, 12.0), vec2(2.6, 22.6), vec2(7.4, 12.0)
);
float dartAt(vec2 c, float aa, out float ink) {
vec2 s = u_rect.zw;
float k = min(s.x / 18.0, s.y / 24.0) * 0.82;
vec2 p = (c - s * 0.5) / k + vec2(9.0, 12.0);
p.x -= u_dart.z;
float d = 1e9;
float sgn = 1.0;
for (int i = 0; i < 4; i++) {
vec2 a = DART[i], b = DART[(i + 1) & 3];
vec2 e = b - a, w = p - a;
vec2 q = w - e * clamp(dot(w, e) / dot(e, e), 0.0, 1.0);
d = min(d, dot(q, q));
bvec3 cnd = bvec3(p.y >= a.y, p.y < b.y, e.x * w.y > e.y * w.x);
if (all(cnd) || all(not(cnd))) sgn = -sgn;
}
float sd = (sgn * sqrt(d) - 0.75) * k;
ink = 1.0;
float cov = 1.0 - smoothstep(-aa * 0.7, aa * 0.7, sd);
float tail = smoothstep(9.5, 3.0, p.x);
float wave = sin(p.x * u_dart.y - u_time) * 0.5 + 0.5;
float level = 1.32 - u_dart.x * tail * (1.0 - wave) + u_dart.w;
return cov * max(level, 0.0);
}
float rulerAt(vec2 c, out float ink, out float depth) {
float f = max(1.0, u_cam.x);
vec2 o = u_cam.yz;
float kap = max(0.0, u_drum.x);
float phx = clamp(u_drum.y, 0.0, 2.5);
float sF = u_drum.w;
float R1 = max(1.0, u_eye.x);
float th = clamp(u_eye.y, 0.05, 1.5708);
float Lr = max(0.0, u_eye.z);
float R2 = max(1.0, u_eye.w);
float st = sin(th), ct = cos(th);
float sx = sin(phx), cx = cos(phx);
float Sx = u_set.x;
vec2 E = u_set.yz;
vec2 nE = vec2(-sx, cx);
vec2 C1 = E + R1 * nE;
vec2 nrm = vec2(st, ct);
vec2 P1 = C1 - R1 * nrm;
vec2 dir = vec2(-ct, st);
vec2 P2 = P1 + Lr * dir;
vec2 C2 = P2 - R2 * nrm;
vec2 P3 = C2 + vec2(0.0, R2);
float S1 = Sx + R1 * (th + phx);
float S2 = S1 + Lr;
float S3 = S2 + R2 * th;
float dx = c.x - u_pp.x;
float dy = u_pp.y - c.y;
vec2 d = vec2(dy, -f);
float qa = max(1e-8, dot(d, d));
vec2 oF = vec2(o.x + sF, o.y);
float A = kap * qa;
float B = 2.0 * (kap * dot(oF, d) + d.y);
float Cc = kap * dot(oF, oF) + 2.0 * oF.y;
float discD = B * B - 4.0 * A * Cc;
float kD = 2.0 * Cc / max(1e-6, -B + sqrt(max(discD, 0.0)));
vec2 pD = oF + kD * d;
float xa = -pD.x * kap;
float xb = 1.0 + pD.y * kap;
float xr = xa / max(1e-6, xb);
float x2 = xr * xr;
float phS = xr * (1.0 - x2 * (1.0 / 3.0 - x2 * (0.2 - x2 * (1.0 / 7.0 - x2 * (1.0 / 9.0 - x2 / 11.0)))));
float phD = abs(xr) < 0.5 ? phS : atan(xa, xb);
float arcF = kap > 1e-12 ? phD / kap : -pD.x;
float sW = sF + arcF;
float okD = step(0.0, discD) * step(1e-4, kD) * step(sW, Sx + 0.5);
vec2 oc1 = o - C1;
float qb1 = 2.0 * dot(oc1, d);
float qc1 = dot(oc1, oc1) - R1 * R1;
float disc1 = qb1 * qb1 - 4.0 * qa * qc1;
float sq1 = sqrt(max(disc1, 0.0));
float k1a = (-qb1 - sq1) / (2.0 * qa);
float k1b = (-qb1 + sq1) / (2.0 * qa);
vec2 p1a = oc1 + k1a * d;
vec2 p1b = oc1 + k1b * d;
float al1a = atan(-p1a.x, -p1a.y);
float al1b = atan(-p1b.x, -p1b.y);
float on1 = step(0.0, disc1);
float ok1a = on1 * step(1e-4, k1a) * step(-phx - 1e-4, al1a) * step(al1a, th + 1e-4);
float ok1b = on1 * step(1e-4, k1b) * step(-phx - 1e-4, al1b) * step(al1b, th + 1e-4);
float kC1 = ok1a > 0.5 ? k1a : (ok1b > 0.5 ? k1b : 1e6);
float alC1 = ok1a > 0.5 ? al1a : al1b;
float okC1 = max(ok1a, ok1b);
float dn = dot(d, nrm);
float dnSafe = abs(dn) < 1e-6 ? 1e-6 : dn;
float kR = dot(P1 - o, nrm) / dnSafe;
vec2 pR = o + kR * d;
float uR = dot(pR - P1, dir);
float okR = step(1e-4, kR) * step(1e-6, abs(dn)) * step(0.0, uR) * step(uR, Lr);
vec2 oc2 = o - C2;
float qb2 = 2.0 * dot(oc2, d);
float qc2 = dot(oc2, oc2) - R2 * R2;
float disc2 = qb2 * qb2 - 4.0 * qa * qc2;
float sq2 = sqrt(max(disc2, 0.0));
float k2a = (-qb2 - sq2) / (2.0 * qa);
float k2b = (-qb2 + sq2) / (2.0 * qa);
vec2 p2a = oc2 + k2a * d;
vec2 p2b = oc2 + k2b * d;
float ph2a = atan(p2a.x, p2a.y);
float ph2b = atan(p2b.x, p2b.y);
float on2 = step(0.0, disc2);
float ok2a = on2 * step(1e-4, k2a) * step(0.0, p2a.x) * step(0.0, p2a.y) * step(ph2a, th + 1e-4);
float ok2b = on2 * step(1e-4, k2b) * step(0.0, p2b.x) * step(0.0, p2b.y) * step(ph2b, th + 1e-4);
float kC2 = ok2a > 0.5 ? k2a : (ok2b > 0.5 ? k2b : 1e6);
float phC2 = ok2a > 0.5 ? ph2a : ph2b;
float okC2 = max(ok2a, ok2b);
float kN = (o.y - P3.y) / max(1e-6, -d.y);
float yN = o.x + kN * d.x;
float okN = step(1e-4, kN) * step(yN, P3.x);
float kw = okD > 0.5 ? kD : 1e6;
float kc1 = okC1 > 0.5 ? kC1 : 1e6;
float kr = okR > 0.5 ? kR : 1e6;
float kc2 = okC2 > 0.5 ? kC2 : 1e6;
float kn = okN > 0.5 ? kN : 1e6;
float k = min(min(kw, kc1), min(kr, min(kc2, kn)));
float hit = step(k, 1e5);
float sC1 = Sx + R1 * (alC1 + phx);
float sR = S1 + uR;
float sC2 = S2 + R2 * (th - phC2);
float sN = S3 + (P3.x - yN);
float s = k == kn ? sN : (k == kc2 ? sC2 : (k == kr ? sR : (k == kc1 ? sC1 : sW)));
float t = u_rule.y + (s - u_cam.w) / u_rule.x;
float u = u_pp.x + k * dx;
depth = k;
float dsW = fwidth(sW);
float dsC1a = fwidth(Sx + R1 * (al1a + phx));
float dsC1b = fwidth(Sx + R1 * (al1b + phx));
float dsR = fwidth(sR);
float dsC2a = fwidth(S2 + R2 * (th - ph2a));
float dsC2b = fwidth(S2 + R2 * (th - ph2b));
float dsN = fwidth(sN);
float duW = fwidth(kD * dx);
float duC1a = fwidth(k1a * dx);
float duC1b = fwidth(k1b * dx);
float duR = fwidth(kR * dx);
float duC2a = fwidth(k2a * dx);
float duC2b = fwidth(k2b * dx);
float duN = fwidth(kN * dx);
float ds = k == kn ? dsN : (k == kc2 ? (ok2a > 0.5 ? dsC2a : dsC2b) : (k == kr ? dsR : (k == kc1 ? (ok1a > 0.5 ? dsC1a : dsC1b) : dsW)));
float du = k == kn ? duN : (k == kc2 ? (ok2a > 0.5 ? duC2a : duC2b) : (k == kr ? duR : (k == kc1 ? (ok1a > 0.5 ? duC1a : duC1b) : duW)));
float et = ds / max(1e-6, u_rule.x) * 0.5;
float eu = du * 0.5;
float n = floor(t + 0.5);
float isDay = step(mod(abs(n), max(1.0, u_rank.x)), 0.5);
float isKey = step(mod(n - u_rank.z, max(1.0, u_rank.y)), 0.5) * step(u_rank.z - 0.5, n);
float w = (1.0 - smoothstep(0.0, max(0.05, u_rule.z), abs(n - u_rule.y))) * u_hot.w;
float behind = u_trail.x - n;
float dT = mix(abs(behind), max(0.0, behind), clamp(u_trail.z, 0.0, 1.0));
float wT = 1.0 - smoothstep(0.0, max(0.05, u_trail.y), dT);
float al = clamp(u_rule2.w, 0.0, 1.0);
float lay = smoothstep(0.0, S1, s);
float lenF = mix(mix(u_rule2.x, u_rule2.y, isDay), mix(u_rule2.y, u_rule2.z, w), isKey);
float mb = clamp(u_slat.z, 0.0, 1.0);
float isSlat = step(mod(n - u_slat.y, max(1.0, u_slat.x)), 0.5);
lenF = mix(lenF, u_slat.w, mb);
float Lw = lenF * u_shade.w;
float face = smoothstep(S2, S3, s);
float lo = mix(u_shade.x - al * Lw, u_road2.z, face);
float hi = mix(u_shade.x + (1.0 - al) * Lw, u_road2.w, face);
float fw = max(1.0, u_rect.z);
float ppx = clamp(u_pp.x, 1.0, fw - 1.0);
float reach = min((ppx - lo) / ppx, (hi - ppx) / (fw - ppx)) / max(1e-4, k);
float swell = smoothstep(1.0, 1.0 + max(0.02, u_road2.x), reach);
float halfR = mix(mix(u_thick.x, u_thick.y, isDay), u_thick.z, isKey);
float halfT = mix(halfR, u_thick.x + (halfR - u_thick.x) * clamp(u_len2.w, 0.0, 1.0), lay);
float halfH = min(mix(mix(u_hot.x, u_hot.y, isDay), u_hot.z, isKey), max(0.01, u_road2.y));
halfT = mix(halfT, halfH, wT);
float halfW = halfT;
float halfC = mix(u_shut.z, u_shut.w, smoothstep(0.0, 1.0, (n - u_shut.x) / max(0.05, u_shut.y)));
halfC = max(halfC, .5 * u_slat.x * smoothstep(.40 * u_slat.x, .46 * u_slat.x, halfC));
halfT = max(halfT, halfC * isSlat);
halfT = max(halfT, 0.5 * u_blind.w * k / u_rule.x);
float cov = band(t, et, n - halfT, n + halfT) * max(band(u, eu, lo, hi), swell);
cov *= 1.0 - mb * (1.0 - isSlat);
float per = max(1.0, u_slat.x);
float nS = u_slat.y + per * floor((t - u_slat.y) / per);
float leftHalf = mix(u_shut.z, u_shut.w, smoothstep(0.0, 1.0, (nS - u_shut.x) / max(0.05, u_shut.y)));
float rightHalf = mix(u_shut.z, u_shut.w, smoothstep(0.0, 1.0, (nS + per - u_shut.x) / max(0.05, u_shut.y)));
float strokeFloor = max(u_thick.x, 0.5 * u_blind.w * k / u_rule.x);
leftHalf = max(leftHalf, strokeFloor);
rightHalf = max(rightHalf, strokeFloor);
float gap = max(0.0, per - leftHalf - rightHalf);
float centre = nS + (per + leftHalf - rightHalf) * .5;
float gapT = gap * smoothstep(.08 * per, .20 * per, gap);
float halfGap = .5 * gapT;
float covW = band(t, et, n - halfW, n + halfW) * isSlat;
float unresolved = smoothstep(0.25, 0.5, eu / max(1.0, hi - lo)) * smoothstep(0.15 * per, 0.35 * per, et);
float across = max(band(u, eu, lo, hi), swell) * (1.0 - unresolved);
float covS = max(1.0 - band(t, et, centre - halfGap, centre + halfGap), covW) * across;
cov = mix(cov, covS, mb);
float near = exp(-abs(t - u_rule.y) / max(0.5, u_shade.y));
float attn = mix(u_shade.z, u_rank.w, near);
attn = mix(attn, u_rule.w, w);
float onRoad = clamp(u_road.w, 0.0, 1.0);
ink = mix(attn, clamp(u_road.z, 0.0, 1.0), onRoad);
ink = mix(ink, 1.0, clamp(u_blind.x, 0.0, 1.0));
float dist = k * sqrt(dx * dx + qa) / f;
float fog = 1.0 - smoothstep(u_road.x, max(u_road.x + 0.05, u_road.y), dist);
float deep = (k - 1.0) * f;
float dm = clamp((deep - u_deep.x) / max(1.0, u_deep.y - u_deep.x), 0.0, 1.0);
float veilD = pow(1.0 - smoothstep(0.0, 1.0, dm), max(0.05, u_deep.z));
float haze = mix(veilD, fog, clamp(u_deep.w, 0.0, 1.0));
return cov * haze * hit * step(1e-4, k);
}
void main() {
vec2 g = vec2(gl_FragCoord.x, u_field.y - gl_FragCoord.y);
vec2 c = (g - 1.0) * u_cell - u_phase;
float aa = u_cell * 0.5;
float lum = 0.0;
float ink = 1.0;
SYBIOSME_SOURCE_DISPATCH
float tone = clamp((lum - u_tone.x) / max(1e-4, u_tone.y - u_tone.x), 0.0, 1.0);
tone = pow(tone, u_tone.z) * maskAt(c);
tone += (hash(g + u_time * 0.017) - 0.5) * u_tone.w * 4.0 * tone * (1.0 - tone);
tone = clamp(tone, 0.0, 1.0);
vec2 keep = onPage(c);
tone *= keep.y;
float rest = u_grid.w * max(u_grid.x, 1.5 / 255.0);
tone = mix(rest, max(tone, rest), u_grid.z);
float lit = u_grid.w > 0.5
? smoothstep(0.0, 0.06, tone - rest)
: smoothstep(0.0, 1e-4, tone);
ink = mix(u_grid.y, max(ink, u_grid.y), lit);
fragColour = vec4(tone, clamp(ink * u_ink.y + u_ink.x, 0.0, 1.0), 1.0 - lit, keep.x);
}`,Ds=`${rr}
uniform sampler2D u_fieldTex;
uniform ivec2 u_fieldSize;
uniform vec4  u_disc;
uniform vec4  u_paint;
uniform vec4  u_screen;
uniform vec4  u_paper;
out vec4 fragColour;
void main() {
vec2 p = vec2(gl_FragCoord.x - u_rect.x, u_rect.y + u_rect.w - gl_FragCoord.y);
vec2 q = (p + u_phase) / u_cell;
ivec2 k = ivec2(floor(q));
float d = 1e9;
float ink = 0.0;
float bare = 0.0;
float best = 1e9;
float keep = 1.0;
float soft = u_disc.z * u_cell;
for (int j = -1; j <= 1; j++) {
for (int i = -1; i <= 1; i++) {
ivec2 c = k + ivec2(i, j) + ivec2(1);
c = clamp(c, ivec2(0), u_fieldSize - 1);
vec4 f = texelFetch(u_fieldTex, ivec2(c.x, u_fieldSize.y - 1 - c.y), 0);
if (f.r <= 0.0) continue;
vec2 ctr = (vec2(k + ivec2(i, j)) + 0.5) * u_cell - u_phase;
float rf = mix(u_disc.x, u_disc.y, f.r) * u_cell;
float r = mix(u_screen.a, max(rf, u_screen.a), 1.0 - f.b) * f.a;
float dd = length(p - ctr) - r;
if (dd < best) { best = dd; ink = f.g; bare = f.b; keep = f.a; }
if (f.a <= 0.0) continue;
d = smin(d, dd, soft);
}
}
float aa = u_disc.w;
float a = 1.0 - smoothstep(-aa, aa, d);
float out_ = a * clamp(ink, 0.0, 1.0) * u_paint.a;
vec3 rgb = mix(u_paint.rgb, u_screen.rgb, bare);
vec2 corner = floor((p + u_phase) / u_cell + 0.5) * u_cell - u_phase;
float dp = length(p - corner) - u_paper.y;
float ap = (1.0 - smoothstep(-aa, aa, dp)) * clamp(u_paper.x, 0.0, 1.0) * keep;
fragColour = vec4(rgb * out_ * (1.0 - ap), out_ * (1.0 - ap) + ap);
}`,Ls=["u_rect","u_cell","u_phase","u_source","u_time","u_field","u_tone","u_ink","u_grid","u_sheet","u_sheetGrid","u_sphere","u_mask","u_maskSoft","u_flip","u_hole","u_holes[0]","u_holeR[0]","u_holeFade[0]","u_bars[0]","u_inks[0]","u_chart","u_geom","u_rail","u_sweep","u_dart","u_rule","u_thick","u_hot","u_rule2","u_len2","u_road2","u_rank","u_road","u_blind","u_cam","u_eye","u_pp","u_shade","u_trail","u_shut","u_slat","u_drum","u_deep","u_set","u_art","u_artPointer","u_letter"],Cs=["u_rect","u_cell","u_phase","u_source","u_time","u_fieldTex","u_fieldSize","u_disc","u_paint","u_screen","u_paper"],Ns=[0,0,0,0],Is=[-1e6,1e6,-1e6,1e6],Us=[1,1,1,1],Os=[-1e6,1,0,0],$s=[1e6,1,0,0],Mo=[0,.1,.8,1],zs=[1,0,0,0],Xs=[0,0,1e6,0],Bs=[1e6,-1e6,0,0],Gs=[0,1e6,1,0],Hs=new Float32Array(Fe),qs={sphere:"lum = sphereAt(c);",chart:"lum = chartAt(c, aa);",dart:"lum = dartAt(c, aa, ink);",ruler:"float depth; lum = rulerAt(c, ink, depth);",grid:"",option:"lum = optionAt(c, aa);"};function Vs(e=Object.keys(Ae)){const t=e.filter(a=>a!=="grid").map(a=>`if (u_source == ${Ae[a]}) { ${qs[a]} }`).join(" else ");return Ps.replace("SYBIOSME_SOURCE_DISPATCH",t)}function Ws(e,t,a={}){let n=a.parallel?e.getExtension("KHR_parallel_shader_compile"):null,o=null,r=!1,s=null,c=null,i={},m={},p=null,l=null,d=null,f=null,x=0,v=0,A=0,F=0,M=[8,8,63,0];const b=u=>{const _=e.createShader(e.VERTEX_SHADER);e.shaderSource(_,Fs),e.compileShader(_);const g=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(g,u),e.compileShader(g);const k=e.createProgram();return e.attachShader(k,_),e.attachShader(k,g),e.linkProgram(k),{p:k,v:_,f:g}},T=(u,_)=>{const{p:g,v:k,f:y}=u,P=e.getProgramParameter(g,e.LINK_STATUS);if(!P){for(const D of[k,y])e.getShaderParameter(D,e.COMPILE_STATUS)||console.error(`[halftone:${t}]`,e.getShaderInfoLog(D));console.error(`[halftone:${t}]`,e.getProgramInfoLog(g))}if(e.deleteShader(k),e.deleteShader(y),!P)return e.deleteProgram(g),null;const h={};for(const D of _)h[D]=e.getUniformLocation(g,D);return{p:g,at:h}},R=()=>{if(!o)return!1;const{a:u,b:_}=o;o=null;const g=T(u,Ls),k=T(_,Cs);return!g||!k?!1:(s=g.p,i=g.at,c=k.p,m=k.at,p=e.createVertexArray(),l=e.createFramebuffer(),d=e.createTexture(),e.bindTexture(e.TEXTURE_2D,d),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),!0)},E=()=>(o={a:b(Vs(a.sources)),b:b(Ds)},n?!1:R());r=E();const C=(u,_)=>{u<=x&&_<=v||(x=Math.max(x,u,4),v=Math.max(v,_,4),e.bindTexture(e.TEXTURE_2D,d),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,x,v,0,e.RGBA,e.UNSIGNED_BYTE,null))},w=(u,_)=>{const g=_??Ns;e.uniform4f(u,g[0],g[1],g[2],g[3])};return{get ok(){return r},get pending(){return!!o},poll(){return r||!o?r:n&&!(e.getProgramParameter(o.a.p,n.COMPLETION_STATUS_KHR)&&e.getProgramParameter(o.b.p,n.COMPLETION_STATUS_KHR))?!1:(r=R(),r)},rebuild(){return a.parallel&&(n=e.getExtension("KHR_parallel_shader_compile")),r=E(),x=0,v=0,r},setSheet(u,_,g,k){r&&(f||(f=e.createTexture(),e.bindTexture(e.TEXTURE_2D,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),e.bindTexture(e.TEXTURE_2D,f),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.R8,e.RED,e.UNSIGNED_BYTE,u),M=[_,g,k,.5/(u.width/_)])},async setSheetInBands(u,_,g,k,y,P=4){if(!r)return!1;const h=u.width,D=u.height,S=e.createTexture();if(!S)return!1;e.bindTexture(e.TEXTURE_2D,S),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texStorage2D(e.TEXTURE_2D,1,e.R8,h,D);const L=Math.ceil(D/Math.max(1,P));for(let I=0;I<D;I+=L){const U=await createImageBitmap(u,0,I,h,Math.min(L,D-I));if(await y(),!r||e.isContextLost())return U.close(),e.deleteTexture(S),!1;e.bindTexture(e.TEXTURE_2D,S),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texSubImage2D(e.TEXTURE_2D,0,0,I,e.RED,e.UNSIGNED_BYTE,U),U.close()}return f&&e.deleteTexture(f),f=S,M=[_,g,k,.5/(h/_)],!0},get hasSheet(){return!!f},draw(u,_){this.field(u)&&this.meta(u,_)},field(u){if(!r||!s||!c)return!1;const _=Math.max(1,u.cell),g=Math.ceil(u.rect.w/_)+2,k=Math.ceil(u.rect.h/_)+2;C(g,k),A=g,F=k,e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,d,0),e.viewport(0,0,g,k),e.disable(e.BLEND),e.useProgram(s),e.bindVertexArray(p),e.uniform4f(i.u_rect,u.rect.x,u.rect.y,u.rect.w,u.rect.h),e.uniform1f(i.u_cell,_),e.uniform2f(i.u_phase,u.phaseX,u.phaseY),e.uniform1i(i.u_source,u.source),e.uniform1f(i.u_time,u.time),e.uniform2f(i.u_field,g,k),w(i.u_tone,u.tone),e.uniform2f(i.u_ink,u.ink[0],u.ink[1]),e.uniform4f(i.u_grid,u.grid?.[0]??0,u.grid?.[1]??0,u.grid?.[2]??1,u.grid?.[3]??0),w(i.u_mask,u.mask??Is),w(i.u_maskSoft,u.maskSoft??Us);const y=Math.min(Fe,u.hole?.[0]??0);return e.uniform2f(i.u_hole,y,u.hole?.[1]??1),y>0&&(e.uniform4fv(i["u_holes[0]"],u.holes),e.uniform1fv(i["u_holeR[0]"],u.holeR),e.uniform1fv(i["u_holeFade[0]"],u.holeFade??Hs)),u.source===Ae.sphere?(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,f),e.uniform1i(i.u_sheet,0),w(i.u_sheetGrid,M),w(i.u_sphere,u.sphere),e.uniform1f(i.u_flip,u.flip??0)):u.source===Ae.option?(w(i.u_art,u.art),w(i.u_sweep,u.sweep??Mo),e.uniform2f(i.u_artPointer,u.artPointer?.[0]??0,u.artPointer?.[1]??0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,u.letter??null),e.uniform1i(i.u_letter,1),e.activeTexture(e.TEXTURE0)):u.source===Ae.chart?(w(i.u_chart,u.chart),w(i.u_geom,u.geom),w(i.u_rail,u.rail),w(i.u_sweep,u.sweep??Mo),e.uniform4fv(i["u_bars[0]"],u.bars),e.uniform4fv(i["u_inks[0]"],u.inks),w(i.u_shade,u.shade)):u.source===Ae.dart?w(i.u_dart,u.dart):u.source===Ae.ruler&&(w(i.u_rule,u.rule),w(i.u_thick,u.thick),w(i.u_hot,u.hot),w(i.u_rule2,u.rule2),w(i.u_len2,u.len2),w(i.u_road2,u.road2),w(i.u_rank,u.rank),w(i.u_road,u.road),w(i.u_blind,u.blind),w(i.u_trail,u.trail??Os),w(i.u_shut,u.shut??$s),w(i.u_slat,u.slat??zs),w(i.u_drum,u.drum??Xs),w(i.u_deep,u.deep??Gs),w(i.u_set,u.set??Bs),w(i.u_shade,u.shade),w(i.u_cam,u.cam),w(i.u_eye,u.eye),e.uniform2f(i.u_pp,u.pp?.[0]??0,u.pp?.[1]??0)),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),!0},meta(u,_){if(!r||!s||!c)return;const g=Math.max(1,u.cell),k=A,y=F;e.bindFramebuffer(e.FRAMEBUFFER,null);const P=_-u.rect.y-u.rect.h;e.viewport(u.rect.x,P,u.rect.w,u.rect.h),e.useProgram(c),e.uniform4f(m.u_rect,u.rect.x,P,u.rect.w,u.rect.h),e.uniform1f(m.u_cell,g),e.uniform2f(m.u_phase,u.phaseX,u.phaseY),e.uniform1f(m.u_time,u.time),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,d),e.uniform1i(m.u_fieldTex,0),e.uniform2i(m.u_fieldSize,k,y),w(m.u_disc,u.disc),w(m.u_paint,u.paint),w(m.u_screen,u.screen??[u.paint[0],u.paint[1],u.paint[2],0]),w(m.u_paper,u.paper??[0,0,0,0]),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLES,0,3),e.disable(e.BLEND)},readField(u,_){if(!r)return null;e.bindFramebuffer(e.FRAMEBUFFER,l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,d,0);const g=new Uint8Array(u*_*4);return e.readPixels(0,0,u,_,e.RGBA,e.UNSIGNED_BYTE,g),e.bindFramebuffer(e.FRAMEBUFFER,null),g},dispose(){if(r=!1,o){for(const u of[o.a,o.b])e.deleteShader(u.v),e.deleteShader(u.f),e.deleteProgram(u.p);o=null}e.deleteProgram(s),e.deleteProgram(c),e.deleteVertexArray(p),e.deleteFramebuffer(l),e.deleteTexture(d),f&&e.deleteTexture(f),s=c=null,f=null,x=v=0}}}const we=e=>Math.max(0,Math.min(1,e)),sr=e=>{const t=we(e);return t*t*(3-2*t)};function Jc(e,t){const a=sr((e+.5)/.26),n=a,o=we(t===void 0?(e-.2)/.3:(t-.53)/.2);return{reveal:a,detail:n,exit:o,opacity:a>0&&o<1-1e-6?1:0}}const Ys=e=>e<=0?0:e>=1-1e-6?1:1-2**(-10*e);function eu(e,t,a,n,o=!1){const r=a>1?.135+.03*a:0,s=we((e+.5)/.26)*(.15+r+.85),c=.15+(a>1?t*r/(a-1):0),i=we((s-c)/.85),m=o?1-(1-i)**3:Ys(i),p=we(n)*(r+.85),l=sr((p-(c-.15))/.85);return{enter:m,exit:l,y:80*(1-m)-18*l,scale:.96+.04*m}}const tu=(e,t,a)=>a*Math.tanh((e-t)/2);function au(e){const t=we((e-.12)/.32);return{lead:1,trail:t,asset:t}}function nu(e,t,a){if(e<=0){const n=a>=.66?we((t-.08)/.52):0;return-.5+.26*Math.min(n,we((e+1.45)/.9))}return .2+.3*we((e-.55)/.9)}function ou(e,t,a,n,o=.19){if(a<=0||!n||o<=0)return null;const r=Math.min(.19,o);for(const s of t){const c=(e-s)/a;if(n>0&&c>=-.24-r&&c<-.24)return s-.24*a;if(n<0&&c>.2&&c<=.2+r)return s+.2*a}return null}function Zs(e){const t=e.length-1,a=new Float64Array(t+1);for(let r=1;r<=t;r++){const s=Math.max(.001,e[r-1]),c=Math.max(.001,e[r]);a[r]=a[r-1]+(s+c)/2}const n=new Float64Array(t+1);let o=0;for(let r=1;r<t;r++){const s=a[t]*r/t;for(;o<t-1&&a[o+1]<s;)o++;n[r]=(o+(s-a[o])/(a[o+1]-a[o]))/t}return n[t]=1,n}function Ks(e){const t=we(e),a=.2,n=.3,o=Math.min(1,t/a);return(t<a?n*t+(1-n)*a*(o**3-.5*o**4):t-(1-n)*a/2)/(1-(1-n)*a/2)}const Nn=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Qs=e=>{const t=e%19,a=Math.floor(e/100),n=e%100,o=Math.floor(a/4),r=a%4,s=Math.floor((a+8)/25),c=Math.floor((a-s+1)/3),i=(19*t+a-o-c+15)%30,m=Math.floor(n/4),p=n%4,l=(32+2*r+2*m-i-p)%7,d=Math.floor((t+11*i+22*l)/451),f=i+l-7*d+114;return new Date(e,Math.floor(f/31)-1,f%31+1)},wo=new Map,js=e=>{const t=wo.get(e);if(t)return t;const a=Qs(e),n=r=>Nn(new Date(a.getFullYear(),a.getMonth(),a.getDate()+r)),o=new Set([`${e}-01-01`,n(1),`${e}-05-01`,`${e}-05-08`,n(39),n(50),`${e}-07-14`,`${e}-08-15`,`${e}-11-01`,`${e}-11-11`,`${e}-12-25`]);return wo.set(e,o),o},Js=e=>{const t=e.getDay();return t!==0&&t!==6&&!js(e.getFullYear()).has(Nn(e))},ei=new Intl.DateTimeFormat("fr-FR",{weekday:"short",day:"numeric",month:"short"}),ti=e=>{const t=ei.formatToParts(e),a=n=>t.find(o=>o.type===n)?.value??"";return`${a("weekday")} ${a("day")} ${a("month")}`},ai=new Intl.DateTimeFormat("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),ni=e=>{const t=ai.formatToParts(e),a=n=>t.find(o=>o.type===n)?.value??"";return`${a("weekday")} ${a("day")} ${a("month")} ${a("year")}`},tn=(e,t)=>{const a=new Date(e.getFullYear(),e.getMonth(),e.getDate());for(let n=0;n<21&&(a.setDate(a.getDate()+t),!Js(a));n++);return a},oi=(e,t,a,n="fr-FR")=>{if(a<t)return[];const o=tn(e,1),r=new Map([[1,o]]);let s=o;for(let i=2;i<=a;i++)r.set(i,s=tn(s,1));s=o;for(let i=0;i>=t;i--)r.set(i,s=tn(s,-1));const c=[];for(let i=t;i<=a;i++){const m=r.get(i);m&&c.push({day:i,iso:Nn(m),label:n==="fr-FR"?ti(m):new Intl.DateTimeFormat(n,{weekday:"short",day:"numeric",month:"short"}).format(m),long:n==="fr-FR"?ni(m):new Intl.DateTimeFormat(n,{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(m)})}return c},ri=(e,t=new Date,a="fr-FR")=>oi(t,e,e,a)[0]??null,si=`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.7873 49.7863L55.7073 46.8263V39.413M37.9206 26.0797L32.0006 29.0397L37.9206 26.0797ZM32.0006 29.0397L26.0806 26.0797L32.0006 29.0397ZM32.0006 29.0397V36.453V29.0397ZM55.7073 17.173L49.7873 20.133L55.7073 17.173ZM55.7073 17.173L49.7873 14.213L55.7073 17.173ZM55.7073 17.173V24.5863V17.173ZM37.9206 8.29301L32.0006 5.33301L26.0806 8.29301H37.9206ZM8.29395 17.173L14.2139 14.213L8.29395 17.173ZM8.29395 17.173L14.2139 20.133L8.29395 17.173ZM8.29395 17.173V24.5863V17.173ZM32.0006 58.6663L26.0806 55.7063L32.0006 58.6663ZM32.0006 58.6663L37.9206 55.7063L32.0006 58.6663ZM32.0006 58.6663V51.253V58.6663ZM14.2139 49.7863L8.29395 46.8263V39.413L14.2139 49.7863Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,Rt={share:.088,leading:1,measure:.78,icon:.128,gap:.053},ii={well:"rgb(0 0 0 / 8%)",ink:"#000000",soft:"#737373",ring:"#b8b8b8",icon:"#292f33"},li=si.match(/<path\s+d="([^"]+)"/)[1],ci=(e,t,a,n)=>Math.max(a,Math.min(n,e*t)),ui=async(e,t)=>{try{const a=document.fonts;if(!a?.load)return;await Promise.all([a.load(`${t} 64px ${e}`),a.ready])}catch{}},di=(e,t,a,n,o,r)=>{const s=Math.max(0,Math.min(r,n/2,o/2));e.beginPath(),e.moveTo(t+s,a),e.lineTo(t+n-s,a),e.arcTo(t+n,a,t+n,a+s,s),e.lineTo(t+n,a+o-s),e.arcTo(t+n,a+o,t+n-s,a+o,s),e.lineTo(t+s,a+o),e.arcTo(t,a+o,t,a+o-s,s),e.lineTo(t,a+s),e.arcTo(t,a,t+s,a,s),e.closePath()};function mi(e){const t=document.createElement("canvas"),a=Math.max(1,Math.round(e.width*e.dpr)),n=Math.max(1,Math.round(e.height*e.dpr));t.width=a,t.height=n;const o=t.getContext("2d");if(!o)return t;o.scale(e.dpr,e.dpr);const r=e.width,s=e.height;o.clearRect(0,0,r,s),o.fillStyle=e.well,o.fillRect(0,0,r,s);const c=r*.02,i=ci(r,.0011,1,1.5),m=r*.012;o.strokeStyle=e.ring,o.lineWidth=i,o.lineCap="butt",o.setLineDash([m,m*.75]),di(o,c,c,r-2*c,s-2*c,e.corner*s-c),o.stroke(),o.setLineDash([]);const p=E=>{o.font=`${e.weight} ${E}px ${e.family}`,"letterSpacing"in o&&(o.letterSpacing=`${e.tracking*E}px`)},l=e.date?[e.lead,e.date]:[e.undated],d=r*Rt.measure;let f=Math.max(8,s*Rt.share);p(f);const x=()=>Math.max(...l.map(E=>o.measureText(E).width));for(;f>8&&x()>d;)f=Math.max(8,f-.5),p(f);const v=o.measureText("H").actualBoundingBoxAscent||f*.7,A=f*Rt.leading,F=v+A*(l.length-1),M=s*Rt.icon,b=s*Rt.gap,T=(s-M-b-F)/2;o.save(),o.translate((r-M)/2,T),o.scale(M/64,M/64),o.strokeStyle=ii.icon,o.lineWidth=4,o.lineCap="round",o.lineJoin="round",o.stroke(new Path2D(li)),o.restore();const R=T+M+b+v;return o.textBaseline="alphabetic",o.textAlign="center",l.forEach((E,C)=>{o.fillStyle=C===0?e.ink:e.soft,o.fillText(E,r/2,R+A*C)}),t}const G={width:2.38,height:1.5771,segmentsX:48,segmentsY:24,cornerRadius:.04},In=G.width/G.height,bn=9,To=bn*4,la=e=>Number.isInteger(e)?`${e}.0`:`${e}`,Un=e=>`#version 300 es
precision highp float;
const int   SEGMENTS_X = ${G.segmentsX};
const int   SEGMENTS_Y = ${G.segmentsY};
const int   ROW_STRIDE = ${G.segmentsX+1};
const int   CARDS = ${e};
const float HALF_WIDTH = ${la(G.width/2)};
const float HALF_HEIGHT = ${la(G.height/2)};
const float PLANE_ASPECT = ${la(In)};
const float CORNER_RADIUS = ${la(G.cornerRadius)};
uniform highp sampler2D u_cards;
uniform vec4 u_clock;
vec4 cardTexel(int card, int i) { return texelFetch(u_cards, ivec2(i, card), 0); }
mat4 cardModel(int card) {
return mat4(cardTexel(card, 0), cardTexel(card, 1), cardTexel(card, 2), cardTexel(card, 3));
}
mat4 cardPrevious(int card) {
return mat4(cardTexel(card, 4), cardTexel(card, 5), cardTexel(card, 6), cardTexel(card, 7));
}
vec4 cardShade(int card) { return cardTexel(card, 8); }
float cardMatte(int card) { return cardTexel(card, 8).w; }
vec2 gridUv(int vertexIndex) {
int column = vertexIndex % ROW_STRIDE;
int row = vertexIndex / ROW_STRIDE;
return vec2(float(column) / float(SEGMENTS_X), 1.0 - float(row) / float(SEGMENTS_Y));
}
vec3 restPosition(vec2 uv, float curve, float matte) {
vec3 local = vec3(HALF_WIDTH * (2.0 * uv.x - 1.0), HALF_HEIGHT * (2.0 * uv.y - 1.0), 0.0);
float bend = max(curve, 0.001);
float angle = (local.x / HALF_WIDTH) * bend;
float radius = HALF_WIDTH / bend;
local.x = sin(angle) * radius;
local.z += (cos(angle) - 1.0) * radius;
local.z += sin((uv.y * 4.0) + (u_clock.x * 0.72)) * 0.006 * u_clock.z * (1.0 - matte);
return local;
}
vec3 restNormal(vec2 uv, float curve) {
float bend = max(curve, 0.001);
float angle = (2.0 * uv.x - 1.0) * bend;
return vec3(sin(angle), 0.0, cos(angle));
}
float slack(vec2 uv) {
vec2 centred = (uv - 0.5) * vec2(PLANE_ASPECT, 1.0);
return clamp(length(centred) / (0.5 * length(vec2(PLANE_ASPECT, 1.0))), 0.0, 1.0);
}`,fi=`#version 300 es
void main() {
vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,pi=e=>Un(e)+`uniform highp sampler2D u_position;
uniform highp sampler2D u_velocity;
uniform vec4 u_step;
uniform vec4 u_spring;
layout(location = 0) out vec4 outPosition;
layout(location = 1) out vec4 outVelocity;
void main() {
ivec2 at = ivec2(gl_FragCoord.xy);
vec2 uv = gridUv(at.x);
vec4 shade = cardShade(at.y);
vec3 local = restPosition(uv, shade.z, shade.w);
vec3 rest = (cardModel(at.y) * vec4(local, 1.0)).xyz;
if (u_step.y > 0.5 || u_clock.w < 0.001) {
outPosition = vec4(rest, 0.0);
outVelocity = vec4(0.0);
return;
}
vec3 offset = texelFetch(u_position, at, 0).xyz - rest;
vec3 velocity = texelFetch(u_velocity, at, 0).xyz;
float looseness = slack(uv);
float omega = 6.2831853 * mix(u_spring.x, u_spring.y, looseness);
float zeta = mix(u_spring.z, u_spring.w, looseness);
float damped = omega * sqrt(max(1.0 - zeta * zeta, 1e-4));
float dt = u_step.x;
float decay = exp(-zeta * omega * dt);
float cosine = cos(damped * dt);
float sine = sin(damped * dt);
vec3 a = offset;
vec3 b = (velocity + zeta * omega * offset) / damped;
vec3 nextOffset = decay * (a * cosine + b * sine);
vec3 nextVelocity =
decay * (-zeta * omega * (a * cosine + b * sine) + damped * (b * cosine - a * sine));
float reach = length(nextOffset);
if (reach > u_step.z) nextOffset *= u_step.z / max(reach, 1e-6);
outPosition = vec4(rest + nextOffset, 0.0);
outVelocity = vec4(nextVelocity, 0.0);
}`,hi=e=>Un(e)+`uniform mat4 u_viewProjection;
uniform highp sampler2D u_film;
uniform int u_order[CARDS];
uniform vec4 u_camera;
out vec2 v_uv;
out vec3 v_normal;
out vec3 v_world;
out vec2 v_shade;
out float v_layer;
out float v_matte;
out vec2 v_blur;
void main() {
int card = u_order[gl_InstanceID];
vec2 uv = gridUv(gl_VertexID);
vec4 shade = cardShade(card);
float matte = shade.w;
mat4 model = cardModel(card);
vec3 local = restPosition(uv, shade.z, matte);
vec3 rest = (model * vec4(local, 1.0)).xyz;
vec3 simulated = texelFetch(u_film, ivec2(gl_VertexID, card), 0).xyz;
vec3 world = mix(rest, simulated, u_clock.w * (1.0 - matte));
vec3 previous = (cardPrevious(card) * vec4(local, 1.0)).xyz;
mat3 basis = mat3(model[0].xyz, model[1].xyz, model[2].xyz);
float scale = length(model[0].xyz);
vec3 localTravel = (transpose(basis) * (world - previous)) / max(scale * scale, 1e-6);
gl_Position = u_viewProjection * vec4(world, 1.0);
v_uv = uv;
v_normal = basis * restNormal(uv, shade.z);
v_world = world;
v_shade = vec2(shade.x, 0.0);
v_layer = shade.y;
v_matte = matte;
v_blur =
vec2(localTravel.x / (HALF_WIDTH * 2.0), -localTravel.y / (HALF_HEIGHT * 2.0)) *
u_camera.w * (1.0 - matte);
}`,xi=(e,t)=>Un(e)+`uniform mediump sampler2DArray u_atlas;
uniform mediump sampler2D u_slot;
uniform vec4 u_camera;
uniform vec4 u_light;
uniform vec4 u_haze;
uniform vec4 u_mist;
in vec2 v_uv;
in vec3 v_normal;
in vec3 v_world;
in vec2 v_shade;
in float v_layer;
in float v_matte;
in vec2 v_blur;
out vec4 fragment;
const vec3 LIGHT_DIRECTION = vec3(-0.42, 0.55, 0.72);
const int BLUR_TAPS = ${t};
float roundedDistance(vec2 uv, float radius, float aspect) {
vec2 halfSize = vec2(0.5 * aspect, 0.5);
vec2 position = abs((uv - 0.5) * vec2(aspect, 1.0)) - (halfSize - radius);
return length(max(position, vec2(0.0))) + min(max(position.x, position.y), 0.0) - radius;
}
void main() {
float opacity = v_shade.x;
float deep = smoothstep(u_mist.x, u_mist.y, u_camera.z - v_world.z);
float veil = clamp(pow(deep, max(u_mist.z, 0.05)), 0.0, 1.0);
float defocus = u_haze.w * veil;
if (!gl_FrontFacing) discard;
bool onSlot = v_layer < -0.5;
float edge = roundedDistance(v_uv, CORNER_RADIUS, PLANE_ASPECT);
float coverage = 1.0 - smoothstep(-0.004, 0.006, edge);
if (coverage * opacity < 0.008) discard;
vec2 base = vec2(v_uv.x, 1.0 - v_uv.y);
vec2 dimensions =
onSlot ? vec2(textureSize(u_slot, 0).xy) : vec2(textureSize(u_atlas, 0).xy);
vec2 stepX = dFdx(base) * dimensions;
vec2 stepY = dFdy(base) * dimensions;
float level = max(0.5 * log2(max(dot(stepX, stepX), dot(stepY, stepY))), 0.0) + defocus;
vec4 colour = vec4(0.0);
vec2 tap = v_blur / float(BLUR_TAPS);
for (int i = 0; i < BLUR_TAPS; i++) {
vec2 offset = tap * (float(i) - float(BLUR_TAPS - 1) * 0.5);
vec2 at = clamp(base + offset, vec2(0.0), vec2(1.0));
colour += onSlot
? textureLod(u_slot, at, level)
: textureLod(u_atlas, vec3(at, v_layer), level);
}
vec4 texel = colour / float(BLUR_TAPS);
if (onSlot && texel.a > 0.0) texel.rgb /= texel.a;
vec3 normal = normalize(v_normal);
vec3 view = normalize(u_camera.xyz - v_world);
vec3 halfway = normalize(normalize(LIGHT_DIRECTION) + view);
float specular =
pow(max(dot(normal, halfway), 0.0), max(u_light.y, 1.0)) * u_light.x * (1.0 - v_matte);
float rim = pow(1.0 - clamp(dot(normal, view), 0.0, 1.0), 4.0) * u_light.z * (1.0 - v_matte);
float alpha = texel.a * coverage * opacity * (1.0 - veil);
if (alpha < 0.008) discard;
vec3 lit = mix(texel.rgb + specular + rim, u_haze.rgb, veil * u_mist.w);
fragment = vec4(lit * alpha, alpha);
}`;function vi(e,t){const a=G.segmentsX+1,n=a*(G.segmentsY+1);let o=!1,r=!1,s=5,c=null,i=null,m={},p={},l=null,d=null,f=null,x=null,v=null,A=[0,0],F=null,M=[],b=0,T=0,R=0;const E=new Int32Array(t),C=(h,D)=>{const S=e.createShader(h);return e.shaderSource(S,D),e.compileShader(S),e.getShaderParameter(S,e.COMPILE_STATUS)?S:(console.error("[spiral]",e.getShaderInfoLog(S)),e.deleteShader(S),null)},w=(h,D,S)=>{const L=C(e.VERTEX_SHADER,h),I=C(e.FRAGMENT_SHADER,D);if(!L||!I)return null;const U=e.createProgram();if(e.attachShader(U,L),e.attachShader(U,I),e.linkProgram(U),e.deleteShader(L),e.deleteShader(I),!e.getProgramParameter(U,e.LINK_STATUS))return console.error("[spiral]",e.getProgramInfoLog(U)),e.deleteProgram(U),null;const z={};for(const ne of S)z[ne]=e.getUniformLocation(U,ne);return{p:U,at:z}},u=()=>{const h=new Uint16Array(G.segmentsX*G.segmentsY*6);let D=0;for(let S=0;S<G.segmentsY;S++)for(let L=0;L<G.segmentsX;L++){const I=L+a*S,U=I+a;h[D++]=I,h[D++]=U,h[D++]=I+1,h[D++]=I+1,h[D++]=U,h[D++]=U+1}T=h.length,d=e.createBuffer(),l=e.createVertexArray(),e.bindVertexArray(l),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,d),e.bufferData(e.ELEMENT_ARRAY_BUFFER,h,e.STATIC_DRAW),e.bindVertexArray(null)},_=()=>{const h=e.createTexture();return e.bindTexture(e.TEXTURE_2D,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,n,t,0,e.RGBA,e.FLOAT,null),h},g=()=>{const h=w(hi(t),xi(t,s),["u_viewProjection","u_cards","u_film","u_atlas","u_slot","u_clock","u_camera","u_order","u_light","u_haze","u_mist"]);return h?(c&&e.deleteProgram(c),c=h.p,m=h.at,!0):!1},k=()=>{v&&e.deleteTexture(v),v=e.createTexture(),A=[0,0],e.bindTexture(e.TEXTURE_2D,v),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)},y=()=>{if(c=null,!g())return!1;if(u(),k(),f=e.createTexture(),e.bindTexture(e.TEXTURE_2D,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,bn,t,0,e.RGBA,e.FLOAT,null),r=!!e.getExtension("EXT_color_buffer_float"),r){const h=w(fi,pi(t),["u_cards","u_position","u_velocity","u_clock","u_step","u_spring"]);h?(i=h.p,p=h.at,F=e.createFramebuffer(),M=[0,1].map(()=>({position:_(),velocity:_()}))):r=!1}return!0};o=y();const P=(h,D,S=e.TEXTURE_2D)=>{e.activeTexture(e.TEXTURE0+h),e.bindTexture(S,D)};return{get ok(){return o},get hasFilm(){return r},get hasImages(){return R>0},get taps(){return s},get hasSlot(){return A[0]>0},get maxTexture(){return e.getParameter(e.MAX_TEXTURE_SIZE)},setTaps(h){const D=Math.max(1,Math.min(9,Math.round(h)));D===s||!o||(s=D,o=g())},rebuild(){return o=y(),R=0,o},setImages(h,D,S){if(!o||!h.length)return!1;x||(x=e.createTexture());const L=Math.floor(Math.log2(Math.max(D,S)))+1;e.bindTexture(e.TEXTURE_2D_ARRAY,x),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texStorage3D(e.TEXTURE_2D_ARRAY,L,e.RGBA8,D,S,h.length),h.forEach((U,z)=>{e.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,z,D,S,1,e.RGBA,e.UNSIGNED_BYTE,U)}),e.generateMipmap(e.TEXTURE_2D_ARRAY),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const I=e.getExtension("EXT_texture_filter_anisotropic");if(I){const U=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);e.texParameterf(e.TEXTURE_2D_ARRAY,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(4,U))}return R=h.length,!0},setSlot(h,D,S){if(!o)return!1;if(!h||D<1||S<1)return k(),!1;v&&e.deleteTexture(v),v=e.createTexture();const L=Math.floor(Math.log2(Math.max(D,S)))+1;e.bindTexture(e.TEXTURE_2D,v),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texStorage2D(e.TEXTURE_2D,L,e.RGBA8,D,S),e.texSubImage2D(e.TEXTURE_2D,0,0,0,D,S,e.RGBA,e.UNSIGNED_BYTE,h),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const I=e.getExtension("EXT_texture_filter_anisotropic");if(I){const U=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);e.texParameterf(e.TEXTURE_2D,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(4,U))}return A=[D,S],!0},draw(h,D,S){if(!o||!R)return!1;e.bindTexture(e.TEXTURE_2D,f),e.texSubImage2D(e.TEXTURE_2D,0,0,0,bn,t,e.RGBA,e.FLOAT,h.cards);const L=r?h.film:0;if(r&&i){const I=M[b],U=M[b^1];e.bindFramebuffer(e.FRAMEBUFFER,F),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,U.position,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,U.velocity,0),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.viewport(0,0,n,t),e.disable(e.BLEND),e.useProgram(i),P(0,f),P(1,I.position),P(2,I.velocity),e.uniform1i(p.u_cards,0),e.uniform1i(p.u_position,1),e.uniform1i(p.u_velocity,2),e.uniform4f(p.u_clock,h.time,h.curve,h.motion,L),e.uniform4f(p.u_step,Math.min(Math.max(h.dt,1/240),1/20),h.reset?1:0,h.springs.maxOffset,0),e.uniform4f(p.u_spring,h.springs.centreFrequency,h.springs.edgeFrequency,h.springs.centreDamping,h.springs.edgeDamping),e.bindVertexArray(l),e.drawArrays(e.TRIANGLES,0,3),b^=1,e.bindFramebuffer(e.FRAMEBUFFER,null)}if(e.viewport(0,0,D,S),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),!h.visible)return!0;e.useProgram(c),e.bindVertexArray(l),P(0,f),P(1,r?M[b].position:f),P(2,x,e.TEXTURE_2D_ARRAY),P(3,v),e.uniform1i(m.u_cards,0),e.uniform1i(m.u_film,1),e.uniform1i(m.u_atlas,2),e.uniform1i(m.u_slot,3),e.uniformMatrix4fv(m.u_viewProjection,!1,h.viewProjection),e.uniform4f(m.u_clock,h.time,h.curve,h.motion,L),e.uniform4f(m.u_camera,0,0,h.cameraZ,h.shutter),e.uniform4f(m.u_light,h.material.sheen,h.material.sharpness,h.material.fresnel,0),e.uniform4f(m.u_haze,h.haze[0],h.haze[1],h.haze[2],h.blur),e.uniform4f(m.u_mist,h.mist[0],h.mist[1],h.mist[2],h.mist[3]);for(let I=0;I<t;I++)E[I]=h.order[I]??0;return e.uniform1iv(m.u_order,E),e.enable(e.BLEND),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA),e.drawElementsInstanced(e.TRIANGLES,T,e.UNSIGNED_SHORT,0,h.visible),e.bindVertexArray(null),!0},dispose(){c&&e.deleteProgram(c),i&&e.deleteProgram(i),d&&e.deleteBuffer(d),l&&e.deleteVertexArray(l),f&&e.deleteTexture(f),x&&e.deleteTexture(x),v&&e.deleteTexture(v),F&&e.deleteFramebuffer(F);for(const h of M)e.deleteTexture(h.position),e.deleteTexture(h.velocity);M=[],x=null,v=null,A=[0,0],o=!1,R=0}}}const W=(e,t,a)=>e<t?t:e>a?a:e,pe=(e,t,a)=>e+(t-e)*a,He=(e,t,a)=>{const n=W((a-e)/Math.max(t-e,1e-4),0,1);return n*n*(3-2*n)},_i=(e,t,a,n)=>pe(e,t,1-Math.exp(-a*n)),ki=(e,t,a,n)=>{const o=Math.atan2(Math.sin(t-e),Math.cos(t-e));return e+o*(1-Math.exp(-a*n))};function Eo(e,t,a,n,o,r,s,c,i){const m=Math.cos(r),p=Math.sin(r),l=Math.cos(s),d=Math.sin(s),f=Math.cos(c),x=Math.sin(c);e[t+0]=i*(l*f),e[t+1]=i*(m*x+p*d*f),e[t+2]=i*(p*x-m*d*f),e[t+3]=0,e[t+4]=i*(-l*x),e[t+5]=i*(m*f-p*d*x),e[t+6]=i*(p*f+m*d*x),e[t+7]=0,e[t+8]=i*d,e[t+9]=i*-p*l,e[t+10]=i*(m*l),e[t+11]=0,e[t+12]=a,e[t+13]=n,e[t+14]=o,e[t+15]=1}function gi(e,t,a,n,o,r,s=1,c=0){const i=s/Math.tan(t*Math.PI/360),m=1/(n-o);e.fill(0),e[0]=i,e[5]=i*a,e[10]=(o+n)*m,e[11]=-1,e[14]=(-(o+n)*r+2*o*n)*m,e[15]=r,e[9]=-c,e[13]=c*r}const oe={fov:65.7,z:8.1,near:.1,far:40},qe=.28,On=.042,Mn=.042,Ee=.5,Ro=(e,t)=>{if(e<=0)return 0;const a=Math.max(.001,t);if(e>=a)return a/2+(e-a);const n=e/a;return a*(n*n*n-n*n*n*n/2)},$n=(e,t)=>1+(t.zoom-1)*He(-t.lead,t.tail,e),yi=(e,t)=>{const a=Math.max(.001,t.tail+t.lead),n=W((e+t.lead)/a,0,1);return(t.zoom-1)*6*n*(1-n)/a},bi=.35,ca={reference:5,attack:7,release:2.2,radius:.11},Mi=3,he=Jt("coil","Réalisations · bobine",{print:.33,printTall:.69,standUp:1.05,spread:1,round:1,turn:.73,rise:.42,gap:.06,ribbon:1.5,sink:0,fade:1,wash:1,blur:5,profile:.1,bleed:.5,cardStep:.5,coilIn:2.6,coilOut:1.2,lift:.65,drag:1,zoom:1,zoomLead:.5,passed:.6,sheen:.66,sharpness:40,fresnel:.5,shutter:.4,taps:5,film:1,centreHz:9.5,edgeHz:3.6,centreZeta:.7,edgeZeta:.75,give:.16,lean:.2,twist:.13,settle:13,tension:1.25,quality:1,maxDpr:2,idleFps:30},[{key:"print",label:"Le visuel · part du cadre",group:"Bobine",kind:"range",min:.12,max:.9,step:.005},{key:"printTall",label:"Le visuel · cadre étroit",group:"Bobine",kind:"range",min:.2,max:.95,step:.005},{key:"standUp",label:"La bobine se redresse sous",group:"Bobine",kind:"range",min:.6,max:1.8,step:.01,unit:" de ratio"},{key:"spread",label:"Amplitude · part de la place",group:"Bobine",kind:"range",min:.2,max:1,step:.01},{key:"round",label:"Rondeur · profondeur / amplitude",group:"Bobine",kind:"range",min:.05,max:2,step:.01},{key:"turn",label:"Pas horizontal · rotation par visuel",group:"Bobine",kind:"range",min:.1,max:1.4,step:.01,unit:" rad"},{key:"rise",label:"Pas vertical · au moins",group:"Bobine",kind:"range",min:.1,max:2,step:.01,unit:" hauteur"},{key:"gap",label:"Écart gardé entre deux visuels",group:"Bobine",kind:"range",min:0,max:.4,step:.005,unit:" de leur taille"},{key:"ribbon",label:"Cintrage · part de la courbe du chemin",group:"Bobine",kind:"range",min:0,max:1.6,step:.02},{key:"bleed",label:"Amplitude au-delà du cadre",group:"Bobine",kind:"range",min:0,max:3,step:.01,unit:" du demi-cadre"},{key:"coilNote",label:"La bobine",group:"Bobine",kind:"note",text:Ti},{key:"gapNote",label:"Le pas",group:"Bobine",kind:"note",text:Ei},{key:"sink",label:"Portée du fondu",group:"Profondeur",kind:"range",min:0,max:5,step:.05,unit:" demi-visuels"},{key:"fade",label:"Courbe de la profondeur",group:"Profondeur",kind:"range",min:.3,max:4,step:.05},{key:"wash",label:"Part perdue en contraste",group:"Profondeur",kind:"range",min:0,max:1,step:.01},{key:"blur",label:"Flou au fond",group:"Profondeur",kind:"range",min:0,max:5,step:.05,unit:" niveaux"},{key:"profile",label:"Extinction de profil",group:"Profondeur",kind:"range",min:0,max:.6,step:.01},{key:"depthNote",label:"Le fond",group:"Profondeur",kind:"note",text:Ri},{key:"cardStep",label:"Page par visuel",group:"Défilement",kind:"range",min:.15,max:1.5,step:.01,unit:" écran"},{key:"coilIn",label:"Entrée",group:"Défilement",kind:"range",min:0,max:10,step:.1,unit:" crans"},{key:"coilOut",label:"Sortie · sans mesure",group:"Défilement",kind:"range",min:0,max:12,step:.1,unit:" crans"},{key:"lift",label:"Recouvrement du store",group:"Défilement",kind:"range",min:0,max:2.5,step:.05,unit:" écran"},{key:"drag",label:"Les offres tirées",group:"Défilement",kind:"range",min:0,max:2,step:.05,unit:" écran"},{key:"passNote",label:"La passe",group:"Défilement",kind:"note",text:Ai},{key:"seamNote",label:"Les coutures",group:"Défilement",kind:"note",text:Si},{key:"coverNote",label:"La phrase · le dernier visuel",group:"Défilement",kind:"note",text:Pi},{key:"zoom",label:"Grossissement · au moins ×",group:"Feuillet vide",kind:"range",min:1,max:3,step:.01},{key:"zoomLead",label:"L'objectif se ferme",group:"Feuillet vide",kind:"range",min:0,max:3,step:.05,unit:" cran(s) avant le feuillet de face"},{key:"passed",label:"Déjà sorti au relâchement",group:"Feuillet vide",kind:"range",min:0,max:.9,step:.01,unit:" du feuillet"},{key:"zoomNote",label:"Le septième feuillet",group:"Feuillet vide",kind:"note",text:Fi},{key:"sheen",label:"Brillance",group:"Matière",kind:"range",min:0,max:1.2,step:.01},{key:"sharpness",label:"Dureté du reflet",group:"Matière",kind:"range",min:2,max:120,step:1},{key:"fresnel",label:"Tranche",group:"Matière",kind:"range",min:0,max:.6,step:.005},{key:"shutter",label:"Obturateur",group:"Matière",kind:"range",min:0,max:1.5,step:.01},{key:"taps",label:"Échantillons du filé",group:"Matière",kind:"range",min:1,max:9,step:1},{key:"film",label:"Pellicule",group:"Pellicule",kind:"range",min:0,max:1,step:.01},{key:"centreHz",label:"Ressort · centre",group:"Pellicule",kind:"range",min:1,max:20,step:.1,unit:" Hz"},{key:"edgeHz",label:"Ressort · coins",group:"Pellicule",kind:"range",min:.5,max:12,step:.1,unit:" Hz"},{key:"centreZeta",label:"Amorti · centre",group:"Pellicule",kind:"range",min:.05,max:1,step:.01},{key:"edgeZeta",label:"Amorti · coins",group:"Pellicule",kind:"range",min:.05,max:1,step:.01},{key:"give",label:"Débattement max",group:"Pellicule",kind:"range",min:.01,max:.6,step:.005,unit:" hauteur"},{key:"lean",label:"Roulis selon le sens",group:"Pellicule",kind:"range",min:0,max:.5,step:.005,unit:" rad"},{key:"twist",label:"Retard de rotation",group:"Pellicule",kind:"range",min:0,max:.4,step:.005,unit:" rad"},{key:"settle",label:"Tenue des poses",group:"Pellicule",kind:"range",min:2,max:30,step:.5},{key:"tension",label:"Réaction à la vitesse",group:"Pellicule",kind:"range",min:0,max:2,step:.05},{key:"filmNote",label:"Les ressorts",group:"Pellicule",kind:"note",text:Di},{key:"quality",label:"Résolution",group:"Qualité",kind:"range",min:.4,max:2,step:.05},{key:"maxDpr",label:"Densité max",group:"Qualité",kind:"range",min:1,max:3,step:.5},{key:"idleFps",label:"Cadence au repos",group:"Qualité",kind:"range",min:6,max:60,step:1,unit:" i/s"},{key:"qualityNote",label:"Le tampon",group:"Qualité",kind:"note",text:Li}]),N=xt({live:!1,film:!1,cards:0,images:0,visible:0,fps:0,buffer:[0,0],source:[0,0],span:0,q:0,progress:0,spin:0,swing:0,turn:0,pitch:0,clear:0,reach:0,depth:0,alive:0,print:0,swings:0,column:!1,covered:0,dolly:0,home:null,dragAuto:null,tailAuto:null});he.readout=()=>N.live?`${N.visible}/${N.images} · ${N.fps} i/s · ${N.buffer[0]}×${N.buffer[1]}${N.column?" · debout":""}`:"en attente";function Oa(e=N.cards){const t=he.values,a=-Math.max(0,t.coilIn),n=Math.max(1,e)+(N.tailAuto??Math.max(0,t.coilOut)),o=Math.max(.05,t.cardStep);return{from:a,to:n,step:o,span:(n-a)*o}}function ru(){return N.covered}let Ao="",an={from:Number.NaN,to:Number.NaN,peak:0};function ir(){const e=Oa(),t=i=>(i-e.from)*e.step;if(!$e||!N.live)return{from:Number.NaN,to:Number.NaN,peak:0};const a=ea(lr),n=`${Sa}|${Xn}|${e.from}|${e.step}`;if(n===Ao)return an;let o=0,r=Number.NaN,s=Number.NaN;const c=Gt()+ur;for(let i=Gt()-a.geo.reach;i<=c+.001;i+=.02)o=Math.max(o,Tn(i,a.pitch,a.geo,$e)),Number.isNaN(r)&&o>.01&&(r=t(i)),Number.isNaN(s)&&o>.999&&(s=t(i));return Ao=n,an={from:r,to:s,peak:o},an}function wi(){const e=he.values,t=N.dragAuto??e.drag;return{lift:Math.max(0,e.lift),drag:Math.max(0,t)}}function Ti(){return`${N.visible} visuel(s) à l’écran · ${N.reach.toFixed(2)} cran(s) jusqu’au profil · ${N.turn.toFixed(3)} rad et ${N.pitch.toFixed(2)} de montée par visuel · balayage de ${N.swings.toFixed(2)} visuel(s)`+(N.column?" — LA BOBINE EST DEBOUT":"")}function Ei(){const e=N.clear;return N.live?`au plus serré, ${(e*100).toFixed(1)} % entre deux voisins · montée tenue à ${N.pitch.toFixed(2)}`+(e<-5e-4?" — DEUX VISUELS SE CHEVAUCHENT":""):"en attente du premier rendu"}function Ri(){return N.live?`${N.depth.toFixed(2)} de profondeur pour ${N.swing.toFixed(2)} d’amplitude · ${N.alive} visuel(s) visible(s) sur ${N.visible} dessiné(s)`+(N.alive<4?" — IL N’Y EN A PAS ASSEZ À LA FOIS":""):"en attente du premier rendu"}function Ai(){const e=Oa();return`${e.span.toFixed(2)} écran(s) de défilement + 1 d’épingle · position ${N.progress.toFixed(2)} sur ${e.from.toFixed(1)} → ${e.to.toFixed(1)}`}function Si(){const e=wi();return`store recouvert sur ${e.lift.toFixed(2)} écran(s) · offres tirées de ${e.drag.toFixed(2)}`}function Fi(){const e=za();if(!e)return"en attente de la mesure";const t=Oa(),a=(cr()-t.from)*t.step,n=(t.to-t.from)*t.step;return`l'objectif se ferme de ${Math.max(0,a-Math.max(0,he.values.zoomLead)*t.step).toFixed(2)} à ${n.toFixed(2)} écran(s) (feuillet de face à ${a.toFixed(2)}) · se pose à ${Math.round(e.sheetPx)} × ${Math.round(e.sheetH)} px${N.home?` (offres ${Math.round(N.home.w)})`:""}, sorti de ${Math.round(-e.top)} px au relâchement · ×${e.zoom.toFixed(2)} · fermé à ${(N.dolly*100).toFixed(0)} % · tenue ${(N.tailAuto??he.values.coilOut).toFixed(2)} cran(s) · offres tirées de ${(N.dragAuto??he.values.drag).toFixed(2)} écran${De?` · peint ${De.width} × ${De.height}`:" · pas encore peint"}`}function Pi(){const e=ir();return Number.isNaN(e.from)&&!e.peak?"en attente du premier rendu":Number.isNaN(e.from)?"LE DERNIER VISUEL NE COUVRE JAMAIS LA PHRASE — elle reste sur le cadre":`emportée de ${e.from.toFixed(2)} à ${Number.isNaN(e.to)?"…":e.to.toFixed(2)} écran(s) · au plus ${Math.round(e.peak*100)} % derrière le dernier visuel`+(Number.isNaN(e.to)?" — JAMAIS ENTIÈREMENT : elle ne partira pas":"")}function Di(){return N.live?N.film?`ressorts actifs · tension ${N.spin.toFixed(2)}`:"cible flottante absente — la pellicule est au repos (rendu identique, sans ondulation)":"en attente du premier rendu"}function Li(){const[e,t]=N.buffer,[a,n]=N.source;if(!e||!a)return"pas encore de tampon";const o=N.print*e,r=o/a;return`tampon ${e} × ${t} px · le visuel au premier plan fait ${Math.round(o)} px pour ${a} × ${n} px de source`+(r>1.1?` — agrandi ×${r.toFixed(2)}`:" — source suffisante")}const Ci=.55;let Sa="",ua=null,lr=1.6;function ea(e){const t=he.values,a=[e,t.print,t.printTall,t.standUp,t.spread,t.round,t.turn,t.rise,t.gap,t.ribbon,t.profile,t.sink,t.fade,t.bleed,t.give,t.lean,t.twist].map(_=>_.toFixed(4)).join("|");if(a===Sa&&ua)return ua;const n=pe(W(t.printTall,.05,.98),W(t.print,.05,.98),He(Math.max(.2,t.standUp)-Ci,Math.max(.2,t.standUp),e)),o=Math.tan(oe.fov*Math.PI/360),r=W(t.round,.05,2),s=W(t.spread,.2,1),c=W(t.bleed,0,3),i=Math.max(.05,t.turn),m=Math.max(0,t.ribbon),p=_=>Math.max(1,oe.z+qe-_)*o;let l=2,d=1,f=.9,x=2;for(let _=0;_<24;_++)d=p(l),f=n*2*d/G.width,x=Math.max(.05,d*(1+c)-G.width/2*f)*s,l=pe(l,r*x,.55);const v=i,A=Math.PI/2/v,F=oe.z-(l-qe),M=Math.max(F+.4,oe.z+qe+G.width/2*f*Math.max(.2,t.sink)),b={radius:x,depth:l,size:f,turn:v,ribbon:m,aspect:e,gap:Math.max(0,t.gap),reach:A,profile:Math.max(.02,t.profile),fade:Math.max(.05,t.fade),near:F,far:M,tilt:On+Math.abs(W(t.lean,0,.5)),twist:Math.abs(W(t.twist,0,.4)),give:Math.max(.005,t.give)*G.height*f,halfFrame:d},T=Math.max(.02,t.rise)*G.height*f,R=Gi(b,T),E=Je(0,R.pitch,b,!0);let C=-1,w=1;for(let _=0;_<E.xs.length;_++)C=Math.max(C,E.lo[_]),w=Math.min(w,E.hi[_]);const u=x/Math.max(1e-4,G.width*f);return Sa=a,ua={geo:b,pitch:R.pitch,clear:R.clear,halfFrame:d,share:n,swings:u,column:u<.5,cover:[Math.max(0,(E.r-E.l)/2),Math.max(0,(w-C)/2)]},ua}const zn=(e,t,a)=>Math.atan2(a*Math.sin(e),Math.max(1e-4,t)*Math.cos(e)),Ni=(e,t,a)=>{const n=Math.cos(e),o=Math.sin(e);return Math.pow(t*t*n*n+a*a*o*o,1.5)/Math.max(1e-4,t*a)},Ii=.42,wn=(e,t,a)=>W(G.width/2*a*t.ribbon/Ni(e,t.radius,t.depth),.001,Ii),So=9;function Je(e,t,a,n=!1){const o=e*a.turn,r=zn(o,a.radius,a.depth),s=a.size,c=wn(o,a,s),i=G.width/2/c,m=Math.sin(o)*a.radius,p=Math.cos(o)*a.depth-qe,l=e*t,d=Math.sign(r||1)*Math.max(0,Math.abs(r)+(n?a.twist:-a.twist)),f=Math.cos(d),x=Math.sin(d),v=1/Math.tan(oe.fov*Math.PI/360),A=v*a.aspect,F=G.cornerRadius*G.height,M=n?Math.max(.02,G.height/2*s*Math.cos(On)-F*s-a.give-Mn):G.height/2*s*Math.cos(a.tilt)+G.width/2*s*Math.sin(a.tilt)+Mn+a.give*bi,b=n?Math.max(.05,1-F/(G.width/2)):1,T=Math.PI/2-Math.abs(d),R=Math.min(c*b,d>=0?T:c*b),E=Math.max(-c*b,d<=0?-T:-c*b),C=Math.min(E,R-.001),w=Math.max(R,C+.001),u=[],_=[],g=[];for(let k=0;k<So;k++){const y=C+(w-C)*k/(So-1),P=Math.sin(y)*i,h=(Math.cos(y)-1)*i,D=m+s*(P*f+h*x),S=p+s*(-P*x+h*f),L=Math.max(.05,oe.z-S);u.push(v*D/L),_.push(A*(l-M)/L),g.push(A*(l+M)/L)}return{xs:u,lo:_,hi:g,l:u[0],r:u[u.length-1]}}function mt(e,t,a){if(a<=e[0])return t[0];const n=e.length-1;if(a>=e[n])return t[n];for(let o=1;o<=n;o++)if(a<=e[o]){const r=e[o]-e[o-1],s=r>1e-9?(a-e[o-1])/r:0;return t[o-1]+(t[o]-t[o-1])*s}return t[n]}const Fo=14;function Ui(e,t,a,n){const o=(t.l-e.r)/a,r=Math.max(e.l,t.l),s=Math.min(e.r,t.r);let c=1/0;if(s>r)for(let i=0;i<=Fo;i++){const m=r+(s-r)*i/Fo,p=(mt(t.xs,t.lo,m)-mt(e.xs,e.hi,m))/n;p<c&&(c=p)}else{const i=(e.r+t.l)/2;c=(mt(t.xs,t.lo,i)-mt(e.xs,e.hi,i))/n}return Math.max(o,c)}function Bt(e,t){const a=e*t.turn,n=zn(a,t.radius,t.depth),o=Math.cos(n),r=He(0,t.profile,o),s=Math.cos(a)*t.depth-qe,c=He(t.near,t.far,oe.z-s),i=W(Math.pow(c,t.fade),0,1);return{heading:n,cosine:o,opacity:r,z:s,deep:c,veil:i,alpha:r*(1-i)}}function Oi(e,t){const a=Bt(e,t);return a.alpha*(1-a.veil)}function Po(e,t,a,n=0){const o=Bt(e,t),r=o.alpha*(1-o.veil),s=n>0?n:(()=>{const i=Je(0,a,t);return Math.max(1e-4,i.r-i.l)})(),c=Je(e,a,t);return r*W((c.r-c.l)/s,0,1)}const $i=.06,zi=3,Xi=1.05,Bi=.02;let Do="",nn={pitch:.54,clear:1};function Gi(e,t){const a=[e.radius,e.depth,e.size,e.turn,e.ribbon,e.aspect,e.gap,e.reach,e.profile,e.near,e.far,e.fade,e.tilt,e.give,t].map(r=>r.toFixed(4)).join("|");if(a===Do)return nn;const n=r=>{const s=Je(0,r,e),c=Math.max(1e-4,s.r-s.l),i=Math.max(1e-4,s.hi[0]-s.lo[0]);let m=1/0;for(let p=1;p<=zi;p++)for(let l=-e.reach;l<=e.reach-p+1e-6;l+=.05){const d=Po(l,e,r,c),f=Po(l+p,e,r,c);if(Math.min(d,f)<$i)continue;const x=Bt(l,e),v=Bt(l+p,e),A=x.z>=v.z?x:v,F=x.z>=v.z?v:x,M=x.z>=v.z?f:d,b=oe.z-A.z;if(oe.z-F.z>=b*Xi&&(1-A.alpha)*M<=Bi)continue;const R=Ui(Je(l,r,e),Je(l+p,r,e),c,i);R<m&&(m=R)}return m===1/0?1:m};let o=t;if(n(t)<e.gap){let r=t,s=t;for(let c=t;c<=12.001&&(s=c,!(n(c)>=e.gap));c+=.05)r=c;for(let c=0;c<14;c++){const i=(r+s)/2;n(i)>=e.gap?s=i:r=i}o=s}return Do=a,nn={pitch:o,clear:n(o)},nn}let $e=null;const ga=9,Hi=.97,At=new Float32Array(ga),Gt=()=>Math.max(1,N.cards)-1,cr=()=>Math.max(1,N.cards);function Tn(e,t,a,n){At.fill(0);const o=Math.max(1e-4,n.y1-n.y0),r=e-Gt();if(Math.abs(r)<=a.reach&&Bt(r,a).alpha>=Hi){const c=Je(r,t,a,!0);for(let i=0;i<ga;i++){const m=n.x0+(n.x1-n.x0)*i/(ga-1);if(m<c.l||m>c.r||mt(c.xs,c.lo,m)>n.y0)continue;const p=W((mt(c.xs,c.hi,m)-n.y0)/o,0,1);p>At[i]&&(At[i]=p)}}let s=1;for(let c=0;c<ga;c++)At[c]<s&&(s=At[c]);return s}const on=.06,ur=1;let Lo="",St=Number.NEGATIVE_INFINITY,lt=0;function qi(e,t,a,n){if(!$e)return 0;const o=Gt()-a.reach-on;if((n!==Lo||e<St)&&(Lo=n,lt=0,St=o),e<o)return 0;const r=Math.min(e,Gt()+ur);for(let s=Math.max(St+on,o);s<r;s+=on)lt=Math.max(lt,Tn(s,t,a,$e));return r>St&&(lt=Math.max(lt,Tn(r,t,a,$e))),St=r,lt}class Vi{count;cards;titled;progress=0;velocity=0;spin=0;aspect=1;canvasAspect=1;shift=0;motion=1;elapsed=0;lens=1;curveNow=.3;pitchNow=.54;visible=0;covered=0;cardData;order;matrix=new Float32Array(16);constructor(t,a){this.count=t,this.titled=a;const n=o=>({index:o,x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1,opacity:0,curve:.3,relative:0,page:0,matte:0});this.cards=Array.from({length:t},(o,r)=>n(r)),this.cardData=new Float32Array(t*To),this.order=new Uint16Array(t)}get camera(){return oe}setViewport(t,a,n=a){this.aspect=t/Math.max(1,a),this.canvasAspect=t/Math.max(1,n),this.shift=1-a/Math.max(1,n),lr=this.aspect}update(t,a,n,o,r){const s=he.values;this.elapsed=a,this.velocity=n>0&&!o?(t-this.progress)/n:0,this.progress=t;const c=this.motion?Math.max(0,s.tension):0,i=W(this.velocity/ca.reference,-1,1),m=Math.abs(i)>Math.abs(this.spin)?ca.attack:ca.release;this.spin=o?0:_i(this.spin,i,m,n);const p=r?.along??0,l=this.progress-(this.count-1),d=this.titled&&r?W((p-l)/Ee,0,1):1,f=this.titled&&r?He(p-Ee,p,l):0,x=this.titled&&r?He(0,Math.max(.001,r.tail),l):0,v=Math.abs(this.spin)*c*d,A=this.spin*W(s.lean,0,.5)*c*d,F=this.spin*W(s.twist,0,.4)*c*d,M=ea(this.aspect),b=M.geo,T=M.pitch,R=b.turn,E=b.radius*(1+v*ca.radius),C=b.profile,w=Math.max(1,s.settle)*(mr?.matches?Mi:1),u=o?1:1-Math.exp(-w*n),_=pe(u,1,f);for(const k of this.cards){const y=this.titled&&k.index===this.count-1;if(y&&!r?.ready){k.opacity=0;continue}const P=this.progress-k.index;let h=P;if(y&&P>p-Ee){const me=W((P-p+Ee)/Ee,0,1);h=P>p?p:p-Ee*(1-me)*(1-me)*(1+me)}const D=y?x:0,S=y?x:0,L=h*R,I=zn(L,E,b.depth),U=Math.cos(I),z=Math.sin(a*.48+k.index*1.37)*Mn*this.motion*(1-D);k.relative=P;const ne=y?Math.min(P,0):P;let Y=ne*T;if(y&&r)if(P>=0){const me=r.kBase*$n(P,r);Y=(r.bottom0+r.r0*P+(r.page-r.r0)*Ro(P,r.tail))/me+r.hW/2}else P>-Ee&&(Y=P*T+(r.rateFront-T)*Ro(P+Ee,Ee));const ce=pe(Math.sin(L)*E,r?.x??0,D),Te=Y+z,Ve=pe(Math.cos(L)*b.depth-qe,b.depth-qe,D),Be=ne*-.01+z*.05,ve=I*(1-D)-F,kt=Math.sin(ne*.68)*On*(1-D)+A,We=b.size,ot=He(0,C,U);if(k.x=pe(k.x,ce,_),k.y=pe(k.y,Te,_),k.z=pe(k.z,Ve,_),k.rotX=pe(k.rotX,Be,_),o)k.rotY=ve;else{const me=ki(k.rotY,ve,w,n),gt=Math.atan2(Math.sin(ve-me),Math.cos(ve-me));k.rotY=me+gt*f}k.rotZ=pe(k.rotZ,kt,_),k.scale=pe(k.scale,We,_),k.opacity=pe(k.opacity,ot,_),k.page=S,k.matte=y?S:0,k.curve=wn(L,b,k.scale)*(1-D)}this.curveNow=wn(0,b,b.size),this.pitchNow=T,this.covered=qi(this.progress,T,b,Sa+"|"+Xn),this.pack(o),N.visible=this.visible,N.spin=this.spin,N.swing=E,N.turn=R,N.pitch=T,N.clear=M.clear,N.reach=b.reach,N.depth=b.depth;let g=0;for(const k of this.cards)Oi(k.relative,b)>.05&&g++;N.alive=g,N.print=M.share,N.swings=M.swings,N.column=M.column,N.covered=this.covered}pack(t){const{cards:a,cardData:n,order:o}=this;let r=0;for(const s of a){const c=s.index*To;t?Eo(n,c+16,s.x,s.y,s.z,s.rotX,s.rotY,s.rotZ,s.scale):n.copyWithin(c+16,c,c+16),Eo(n,c,s.x,s.y,s.z,s.rotX,s.rotY,s.rotZ,s.scale);const i=this.titled&&s.index===this.count-1;n[c+32]=s.opacity,n[c+33]=i?-1:s.index,n[c+34]=s.curve,n[c+35]=s.matte,s.opacity>.002&&(o[r++]=s.index)}for(let s=1;s<r;s++){const c=o[s],i=a[c].z;let m=s-1;for(;m>=0&&a[o[m]].z>i;)o[m+1]=o[m],m--;o[m+1]=c}this.visible=r}projection(){return gi(this.matrix,oe.fov,this.canvasAspect,oe.near,oe.far,oe.z,this.lens,this.shift),this.matrix}}let K=null,Fa=null,Ft=null,It=null,Pa=null,Xn="",ya=[1,1,1],Pe=[],Lt=null,Z=null,ee=null,da=null,Pt=null,dr=null,mr=null,Ct=!1,En=!1,Ut=!1,Da=!1,Ue;const fr=()=>document.documentElement.getAttribute("data-landing-intro")==="pending";let ft=0,rn=0,sn=0,ma=Number.NaN,fa=0,pt=!0,pr=0,tt=800,ln=1,La=null,ba={left:0,width:0},et=null,De=null,Rn="",$a=!1,Ca=null,An=!1;const H={viewProjection:new Float32Array(16),cards:new Float32Array(0),order:new Uint16Array(0),visible:0,time:0,dt:1/60,motion:1,film:1,shutter:.6,curve:.3,cameraZ:oe.z,haze:[1,1,1],blur:2.6,mist:[6,10,1,.55],material:{sheen:.3,sharpness:40,fresnel:.1},springs:{centreFrequency:8.5,edgeFrequency:2.9,centreDamping:.62,edgeDamping:.26,maxOffset:.3},reset:!0};let Re=()=>{};function su(e){Re=e}const ze=()=>document.documentElement;let Ht=0,qt=0,hr=0;const Wi=Math.min(1,Math.max(.4,parseFloat(new URLSearchParams(location.search).get("density")||"1")||1)),Bn=()=>{K&&(Ht=K.clientWidth,qt=K.clientHeight,hr=K.getBoundingClientRect().left)},cn=()=>{if(!Fa)return;Bn();const e=getComputedStyle(ze());tt=parseFloat(e.getPropertyValue("--vh"))||window.innerHeight,pr=Fa.getBoundingClientRect().top+Cn();const t=e.getPropertyValue("--ground-paper-2").trim(),a=/^#([0-9a-f]{6})$/i.exec(t);ya=a?[parseInt(a[1].slice(0,2),16)/255,parseInt(a[1].slice(2,4),16)/255,parseInt(a[1].slice(4,6),16)/255]:[1,1,1],Ki(),Yi()},Yi=()=>{if(!La){N.home=null,Ma(),un();return}const e=La.getBoundingClientRect();if(e.width<1){N.home=null,Ma(),un();return}ba={left:e.left,width:e.width},N.home={w:e.width},Ma(),un()},Gn=()=>Math.min(qt||tt,tt||qt||1),za=()=>{if(!K||!ee)return null;const e=he.values,t=Ht||1,a=Gn(),n=ea(t/Math.max(1,a)),o=Math.tan(oe.fov*Math.PI/360),r=n.geo.depth-qe,s=G.width*n.geo.size,c=s*t/(2*o*(oe.z-r)),i=N.home?ba.width:c,m=Math.max(1,e.zoom,i/Math.max(1,c)),p=t/(2*o*(oe.z-r)),l=m*p,d=1/l,f=s*l,x=f/In,v=hr,F=(N.home?ba.left+ba.width/2-v-t/2:0)*d,M=Math.asin(W(F/Math.max(.001,n.geo.radius),-.9,.9))/n.geo.turn,b=a*Math.max(.05,e.cardStep),T=G.height*n.geo.size,R=Math.max(0,e.zoomLead),E=-W(e.passed,0,.9)*x,C=a/2-(E+x);let w=1,u=0,_=b,g=n.pitch;for(let y=0;y<12;y++){const P={tail:w,lead:R,zoom:m},h=p*$n(0,P),D=p*yi(0,P),S=(b+T*D/2)/h;g=Math.min(n.pitch,S),u=((g-n.pitch)*Ee/2-T/2)*h,_=Math.min(b,g*h-T*D/2),w=Math.max(.05,2*(C-u)/(_+b))}const k=C+x/2;return{x:F,along:M,size:d,sheetPx:f,sheetH:x,zoom:m,kBase:p,top:E,risen:k,tail:w,lead:R,page:b,bottom0:u,r0:_,rateFront:g,hW:T}},Ma=()=>{const e=za(),t=e?e.tail:null;N.tailAuto!==t&&(N.tailAuto=t);let a=null;if(e){const o=Gn()/2-e.risen+e.sheetH/2;a=Math.round((1-o/Math.max(1,tt))*1e5)/1e5}N.dragAuto!==a&&(N.dragAuto=a)},Zi=e=>{const t=he.values,a=Math.min(window.devicePixelRatio||1,Math.max(1,t.maxDpr))*Math.max(.4,t.quality),n=Z?Math.min(Z.maxTexture-2,3072)/Math.max(1,e):a;return Math.max(.5,Math.min(a,n,3))},pa=(e,t)=>(e.style.color=`var(${t})`,getComputedStyle(e).color),un=()=>{if(!Z||!et||!An)return;const e=za();if(!e)return;const t=Math.max(1,Math.round(e.sheetPx)),a=Zi(t),n=`${t}@${a.toFixed(2)}|${Ca?.iso??""}`;if(n===Rn&&De&&Z.hasSlot)return;const o=getComputedStyle(ze()),r=document.createElement("span");et.append(r);const s=mi({width:t,height:t/In,dpr:a,corner:G.cornerRadius,lead:go(yo(location.pathname)||"fr",bo.lead,{},{typeset:!1}),date:Ca?.long??null,undated:go(yo(location.pathname)||"fr",bo.undated,{},{typeset:!1}),well:pa(r,"--slot-well"),ink:pa(r,"--slot-ink"),soft:pa(r,"--slot-soft"),ring:pa(r,"--slot-ring"),family:o.getPropertyValue("--font-heading").trim()||"sans-serif",weight:500,tracking:parseFloat(o.getPropertyValue("--tracking-heading"))||-.05});r.remove(),De=s,Rn=n,$a=Z.setSlot(s,s.width,s.height),Re()},Co=.92,Ki=()=>{if(!K||!It)return;const e=Ht,t=Gn();if(!e||!t)return;const a=ea(e/Math.max(1,t));if(It.style.setProperty("--coil-print",`${Math.round(a.cover[0]*e*Co)}px`),It.style.setProperty("--coil-cover",`${Math.round(a.cover[1]*t*Co)}px`),!Pa){$e=null;return}const n=Pa.getBoundingClientRect();if(!n.width||!n.height){$e=null;return}$e={x0:-n.width/e,x1:n.width/e,y0:-n.height/t,y1:n.height/t},Xn=`${Math.round(n.width)}|${Math.round(n.height)}|${e}|${t}`},Qi=()=>{if(!K||!ee)return!1;(!Ht||!qt)&&Bn();const e=Ht,t=qt;if(!e||!t)return!1;ln=Math.min(window.devicePixelRatio||1,Math.max(1,he.values.maxDpr))*Math.max(.4,he.values.quality)*Wi;const a=Math.max(1,Math.round(e*ln)),n=Math.max(1,Math.round(t*ln));return(K.width!==a||K.height!==n)&&(K.width=a,K.height=n,N.buffer=[a,n]),ee.setViewport(e,Math.min(t,tt||t),t),!0},Ot=async()=>{if(Da||!Z||!Pe.length)return;Da=!0;for(const n of Pe)n.loading="eager";try{await Promise.all(Pe.map(n=>n.decode?n.decode():Promise.resolve()))}catch{}if(fr()||await ms(180,1500),!Z){Ue?.(),Ue=void 0;return}const e=Pe.filter(n=>n.naturalWidth>0),t=e[0]?.naturalWidth??0,a=e[0]?.naturalHeight??0;if(!e.length||!Z.setImages(e.filter(n=>n.naturalWidth===t&&n.naturalHeight===a),t,a)){Ue?.(),Ue=void 0;return}N.images=e.length,N.source=[t,a],pt=!0,Re()},ji=()=>{if(!(Z||!K)){if(Lt=K.getContext("webgl2",{alpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!0,powerPreference:"high-performance"}),!Lt){ze().setAttribute("data-gallery-dead","");return}if(Z=vi(Lt,(Pe.length||1)+(et?1:0)),!Z.ok){Z.dispose(),Z=null,Lt=null,ze().setAttribute("data-gallery-dead","");return}N.film=Z.hasFilm,ee=new Vi((Pe.length||1)+(et?1:0),!!et),H.cards=ee.cardData,H.order=ee.order,dr=window.matchMedia("(prefers-reduced-motion: reduce)"),mr=window.matchMedia("(pointer: coarse)"),K.addEventListener("webglcontextlost",e=>{e.preventDefault(),Ut=!1,N.live=!1,ze().removeAttribute("data-gallery-live")}),K.addEventListener("webglcontextrestored",()=>{Z?.rebuild()&&(Da=!1,Ot(),$a=De?Z.setSlot(De,De.width,De.height):!1),Re()})}};function iu(e){if(!Z||!ee||!K)return!1;if(!Ct&&Ut)return ft=0,!1;if(!Z.hasImages)return En&&Ot(),!1;if(!Qi())return!1;const t=he.values,a=ft?Math.max(1/240,Math.min((e-ft)/1e3,.064)):1/60;ft=e;const n=_s(),o=!Number.isFinite(ma)||Math.abs(n-ma)>tt*.9,r=n!==ma;if(fa+=a,!r&&!pt&&!o&&Math.abs(ee.spin)<.002&&fa<1/Math.max(6,t.idleFps))return ee.motion===1;const c=fa;fa=0,ma=n;const i=Oa(),m=(n-pr)/tt,p=Math.min(i.from+m/i.step,i.to);ee.motion=dr?.matches?0:1,Z.setTaps(t.taps),Ma();const l=za();let d=0,f=1;if(l){const A=p-cr();d=He(-l.lead,l.tail,A),f=$n(A,l)}ee.lens=f,N.dolly=d,ee.update(p,e/1e3,c,o||pt,l?{along:l.along,x:l.x,tail:l.tail,lead:l.lead,zoom:l.zoom,kBase:l.kBase,page:l.page,bottom0:l.bottom0,r0:l.r0,rateFront:l.rateFront,hW:l.hW,ready:$a}:null),N.q=m,N.span=i.span,N.progress=p,H.viewProjection.set(ee.projection()),H.visible=ee.visible,H.time=e/1e3,H.dt=c,H.motion=ee.motion,H.film=ee.motion?W(t.film,0,1):0,H.shutter=ee.motion?Math.max(0,t.shutter):0,H.curve=ee.curveNow,H.cameraZ=oe.z;const x=ea(ee.aspect);return H.haze[0]=ya[0],H.haze[1]=ya[1],H.haze[2]=ya[2],H.blur=Math.max(0,t.blur),H.mist[0]=x.geo.near,H.mist[1]=x.geo.far,H.mist[2]=x.geo.fade,H.mist[3]=W(t.wash,0,1),H.material.sheen=Math.max(0,t.sheen),H.material.sharpness=Math.max(1,t.sharpness),H.material.fresnel=Math.max(0,t.fresnel),H.springs.centreFrequency=Math.max(.5,t.centreHz),H.springs.edgeFrequency=Math.max(.2,t.edgeHz),H.springs.centreDamping=W(t.centreZeta,.02,1),H.springs.edgeDamping=W(t.edgeZeta,.02,1),H.springs.maxOffset=Math.max(.005,t.give)*G.height*x.geo.size,H.reset=o||pt,pt=!1,Z.draw(H,K.width,K.height)&&!Ut&&(Ut=!0,N.live=!0,ze().setAttribute("data-gallery-live",""),Ue?.(),Ue=void 0),sn++,e-rn>=500&&(N.fps=Math.round(sn*1e3/(e-rn)),sn=0,rn=e),ee.motion===1}function Ji(e){if(K=e.querySelector("canvas"),Ft=e.querySelector("[data-gallery-poster]"),Fa=e.querySelector("[data-gallery-runway]"),It=e,Pa=e.querySelector("[data-lead-ink]"),La=document.querySelector("[data-coil-home]"),et=Ft?.querySelector("[data-gallery-slot]")??null,Pe=Ft?[...Ft.querySelectorAll("img[data-gallery-print]")]:[],Ca=ri(ae[ae.length-1],new Date,document.documentElement.lang),!K||!Pe.length||(N.cards=Pe.length,ji(),!Z))return null;Ue=Ln(),cn(),da=new IntersectionObserver(o=>{for(const r of o)r.target===e?(En=r.isIntersecting,En&&Ot()):(Ct=r.isIntersecting,Ct||(ft=0));Re()},{rootMargin:"200% 0px"}),da.observe(e);const t=new IntersectionObserver(o=>{for(const r of o)Ct=r.isIntersecting;Ct||(ft=0),Re()},{rootMargin:"0px"});t.observe(K);const a=new ResizeObserver(()=>{Bn(),Re()});a.observe(K),Pt=new ResizeObserver(()=>{cn(),pt=!0,Re()}),Pt.observe(document.body),Pt.observe(vs()),ui(getComputedStyle(ze()).getPropertyValue("--font-heading").trim()||"sans-serif",500).then(()=>{An=!0,cn(),Re()});const n=()=>Re();return ko().addEventListener("scroll",n,{passive:!0}),fr()?Ot():fs(()=>{Ot()},2500),()=>{ko().removeEventListener("scroll",n),da?.disconnect(),t.disconnect(),a.disconnect(),Pt?.disconnect(),da=null,Pt=null,Z?.dispose(),Z=null,Lt=null,ee=null,K=null,Ft=null,Fa=null,It=null,Pa=null,$e=null,Pe=[],Ut=!1,Da=!1,Ue?.(),Ue=void 0,N.live=!1,N.images=0,La=null,et=null,De=null,Rn="",$a=!1,Ca=null,An=!1,N.dolly=0,N.home=null,N.dragAuto=null,N.tailAuto=null,ze().removeAttribute("data-gallery-live"),ze().removeAttribute("data-gallery-dead")}}function lu(e){let t=null,a=!1;const n=Dn(()=>{a||(t=Ji(e))},1.5);return{destroy:()=>{a=!0,n(),t?.()}}}const el=window.matchMedia("(pointer: coarse)").matches,ae=[-2,1,4,7,10],ha=parseFloat(new URLSearchParams(location.search).get("rate")||""),tl=Number.isFinite(ha)&&ha>.3&&ha<3?ha:1,Xa=.86*(.8/tl),Na=3,xr=1,cu=e=>e>=1&&(e-xr)%Na===0,xe=Jt("sequence","Séquence",{dwell:.48,snapZone:.19,snapDelay:180,snapMs:260,touchPull:!0,introHold:-.1,roadScreens:2.4,introSpan:.48,introLine:.5,introEdge:.05,introSoft:.12,introSlide:.3,introTrigger:.16,cueFrom:.5,cueSpan:.3,textHold:.33,textIn:.28,textOut:.26,textShift:18,flyHold:.33,flyIn:.28,flyOut:.26,flyShift:18,plateGap:.66,runHold:.25,leadHold:.45,leadExtra:0,riseLen:14,riseStagger:.5,risePow:3,riseFrom:130,sweepAt:.6,sweepEnd:.1,sweepPace:40,sweepFade:10,bodyAt:.6,hiArrive:.5,hiAbove:1,hiOnAbove:!0,hiPace:7.5,hiEase:1.8,hiDelay:0,hiLead:.5,hiRush:.35,hiBlur:.12,hiBleed:.25,hiBlurW:2.4,hiFadeW:1.6,sweepBand:5,colourCount:3,sweep1:"",sweep2:"",sweep3:"",sweep4:"",sweepP1:.3,sweepP2:.5,sweepP3:.7,sweepP4:.85,slotHold:10,slotOut:3,slotQuick:.7,drumTurns:3,drumLen:10,drumLand:4.5,runCycle:.5,runAgain:.3},[{key:"roadScreens",label:"Longueur du parcours",group:"Défilement",kind:"range",min:1.5,max:4,step:.1,unit:" écrans"},{key:"dwell",label:"Cran",group:"Défilement",kind:"range",min:0,max:1,step:.01},{key:"snapZone",label:"Zone d’attraction",group:"Défilement",kind:"range",min:0,max:.45,step:.01},{key:"snapDelay",label:"Attente avant rappel",group:"Défilement",kind:"range",min:0,max:400,step:10,unit:" ms"},{key:"snapMs",label:"Durée du rappel",group:"Défilement",kind:"range",min:120,max:900,step:20,unit:" ms"},{key:"touchPull",label:"Rappel aussi au doigt",group:"Défilement",kind:"toggle"},{key:"introHold",label:"Pause avant le mouvement",group:"Ouverture",kind:"range",min:-.5,max:1,step:.01,unit:" écran après la couture en haut du cadre"},{key:"introSpan",label:"Mouvement · durée",group:"Ouverture",kind:"range",min:.2,max:1.2,step:.01,unit:" écran"},{key:"introLine",label:"Centré · ligne de lecture",group:"Ouverture",kind:"range",min:.2,max:.8,step:.01,unit:" du cadre (l’unité de la ligne de lecture est sur le milieu, en travers)"},{key:"introEdge",label:"Masque · souffle après l’unité",group:"Ouverture",kind:"range",min:0,max:.6,step:.01,unit:" × largeur de la colonne, après le bout des petites graduations"},{key:"introSoft",label:"Masque · douceur",group:"Ouverture",kind:"range",min:0,max:.5,step:.01,unit:" × largeur de la colonne"},{key:"introSlide",label:"Titre · glissé au moins",group:"Ouverture",kind:"range",min:0,max:1.5,step:.01,unit:" × sa propre étendue (résolu au-delà pour partir caché)"},{key:"introTrigger",label:"Titre · révélation dès",group:"Ouverture",kind:"range",min:0,max:1,step:.01,unit:" du mouvement"},{key:"introNote",label:"L’ouverture",group:"Ouverture",kind:"note",text:ll},{key:"cueFrom",label:"Curseur · dès",group:"Ouverture",kind:"range",min:0,max:1,step:.01,unit:" de la disparition du titre (0 : sa première image, 1 : sa dernière)"},{key:"cueSpan",label:"Curseur · ouverture",group:"Ouverture",kind:"range",min:.05,max:.8,step:.01,unit:" écran, d’une graduation à toute sa fenêtre"},{key:"cueNote",label:"Le curseur",group:"Ouverture",kind:"note",text:cl},{key:"textHold",label:"Pleine encre",group:"Textes · processus",kind:"range",min:0,max:1,step:.01,unit:" temps"},{key:"textIn",label:"Apparition",group:"Textes · processus",kind:"range",min:.03,max:1.2,step:.01,unit:" temps"},{key:"textOut",label:"Disparition",group:"Textes · processus",kind:"range",min:.03,max:1.2,step:.01,unit:" temps"},{key:"textShift",label:"Glissé vertical",group:"Textes · processus",kind:"range",min:0,max:80,step:1,unit:" px"},{key:"plateGap",label:"Écart entre deux étapes",group:"Textes · processus",kind:"range",min:0,max:3,step:.1,unit:" jours"},{key:"plateNote",label:"Les cinq blocs",group:"Textes · processus",kind:"note",text:ol},{key:"flyHold",label:"Pleine encre",group:"Textes · envol",kind:"range",min:0,max:1,step:.01,unit:" feuille"},{key:"flyIn",label:"Apparition",group:"Textes · envol",kind:"range",min:.03,max:1.2,step:.01,unit:" feuille"},{key:"flyOut",label:"Disparition",group:"Textes · envol",kind:"range",min:.03,max:1.2,step:.01,unit:" feuille"},{key:"flyShift",label:"Glissé vertical",group:"Textes · envol",kind:"range",min:0,max:80,step:1,unit:" px"},{key:"runHold",label:"Maintien d’une phrase",group:"Textes · envol",kind:"range",min:0,max:1.5,step:.05,unit:" × la feuille"},{key:"flyNote",label:"Les trois phrases",group:"Textes · envol",kind:"note",text:rl},{key:"leadHold",label:"Maintien de la conclusion",group:"Textes · envol",kind:"range",min:0,max:2,step:.05,unit:" × la feuille"},{key:"leadExtra",label:"Avance d’écriture",group:"Textes · envol",kind:"range",min:0,max:1.5,step:.05,unit:" temps"},{key:"leadNote",label:"Sur mesure. Sans limites.",group:"Textes · envol",kind:"note",text:vl},{key:"riseLen",label:"Montée d’une ligne",group:"Apparition",kind:"range",min:1,max:40,step:.5,unit:" em"},{key:"riseStagger",label:"Décalage entre deux lignes",group:"Apparition",kind:"range",min:0,max:1,step:.05,unit:" de la montée"},{key:"risePow",label:"Amorti de la montée",group:"Apparition",kind:"range",min:1,max:6,step:.1},{key:"riseFrom",label:"Départ sous le masque",group:"Apparition",kind:"range",min:100,max:200,step:5,unit:" %"},{key:"sweepFade",label:"Le corps · fondu",group:"Apparition",kind:"range",min:.5,max:16,step:.5,unit:" em"},{key:"bodyAt",label:"Le corps · dès",group:"Apparition",kind:"range",min:0,max:1.5,step:.05,unit:" de la dernière montée"},{key:"sweepAt",label:"Ouvert au plus tôt",group:"Apparition",kind:"range",min:0,max:1,step:.05,unit:" de l’apparition"},{key:"sweepEnd",label:"Complet",group:"Apparition",kind:"range",min:0,max:.5,step:.01,unit:" temps avant le moment"},{key:"sweepPace",label:"Cadence de la main",group:"Apparition",kind:"range",min:4,max:40,step:.5,unit:" px de page par em"},{key:"sweepNote",label:"La fenêtre",group:"Apparition",kind:"note",text:dl},{key:"hiArrive",label:"Départ · quand la ligne marquée est montée à",group:"Révélation",kind:"range",min:.3,max:1,step:.01,unit:" de sa hauteur, à l’écran (1 = à son arrivée ; en dessous, elle est lue en montant)"},{key:"hiAbove",label:"Départ · quand la ligne précédente est montée à",group:"Révélation",kind:"range",min:0,max:1,step:.01,unit:" de sa hauteur, à l’écran (le masque de la ligne du dessus)"},{key:"hiOnAbove",label:"Départ mesuré sur la ligne précédente",group:"Révélation",kind:"toggle"},{key:"hiWhen",label:"Le déclencheur",group:"Révélation",kind:"note",text:ml},{key:"hiPace",label:"Vitesse du front",group:"Révélation",kind:"range",min:2,max:16,step:.25,unit:" em / s"},{key:"hiEase",label:"Amorti du front",group:"Révélation",kind:"range",min:1,max:4,step:.1},{key:"hiDelay",label:"Pause après le départ",group:"Révélation",kind:"range",min:0,max:800,step:20,unit:" ms"},{key:"hiLead",label:"Entière avant que la plaque ne parte",group:"Révélation",kind:"range",min:0,max:2,step:.05,unit:" s d’avance, à la vitesse du lecteur"},{key:"hiRush",label:"Pressée, jamais plus vite que",group:"Révélation",kind:"range",min:.1,max:1.5,step:.05,unit:" s pour toute la ligne"},{key:"hiBlur",label:"Flou au repos",group:"Révélation",kind:"range",min:0,max:.4,step:.01,unit:" em"},{key:"hiBleed",label:"Marge de peinture autour de chaque lettre",group:"Révélation",kind:"range",min:0,max:.6,step:.01,unit:" em (contre les lettres rognées ; ne bouge pas l’interlettre)"},{key:"hiBlurW",label:"Retour du net",group:"Révélation",kind:"range",min:.5,max:8,step:.1,unit:" em derrière la pointe"},{key:"hiFadeW",label:"Apparition d’une lettre",group:"Révélation",kind:"range",min:.2,max:8,step:.1,unit:" em derrière la pointe"},{key:"hiNote",label:"Les quatre lignes",group:"Révélation",kind:"note",text:fl},{key:"sweepBand",label:"Largeur de la bande",group:"Bande",kind:"range",min:.4,max:8,step:.1,unit:" em"},{key:"colourCount",label:"Couleurs",group:"Bande",kind:"range",min:1,max:4,step:1},{key:"sweep1",label:"Couleur 1 · traîne",group:"Bande",kind:"colour",css:"--sweep-1",slot:1},{key:"sweepP1",label:"Couleur 1 · position",group:"Bande",kind:"range",min:0,max:1,step:.05,unit:" de la bande",slot:1},{key:"sweep2",label:"Couleur 2",group:"Bande",kind:"colour",css:"--sweep-2",slot:2},{key:"sweepP2",label:"Couleur 2 · position",group:"Bande",kind:"range",min:0,max:1,step:.05,unit:" de la bande",slot:2},{key:"sweep3",label:"Couleur 3",group:"Bande",kind:"colour",css:"--sweep-3",slot:3},{key:"sweepP3",label:"Couleur 3 · position",group:"Bande",kind:"range",min:0,max:1,step:.05,unit:" de la bande",slot:3},{key:"sweep4",label:"Couleur 4 · pointe",group:"Bande",kind:"colour",css:"--sweep-4",slot:4},{key:"sweepP4",label:"Couleur 4 · position",group:"Bande",kind:"range",min:0,max:1,step:.05,unit:" de la bande",slot:4},{key:"slotHold",label:"Cycle · tenue d’un mot",group:"Gestes",kind:"range",min:0,max:40,step:.5,unit:" em"},{key:"slotOut",label:"Cycle · sortie d’un mot",group:"Gestes",kind:"range",min:.5,max:16,step:.5,unit:" em"},{key:"slotQuick",label:"Cycle · plus vite à chaque fois",group:"Gestes",kind:"range",min:.3,max:1,step:.05},{key:"drumTurns",label:"Reprise · tours",group:"Gestes",kind:"range",min:1,max:4,step:1},{key:"drumLen",label:"Reprise · un tour",group:"Gestes",kind:"range",min:2,max:30,step:.5,unit:" em"},{key:"drumLand",label:"Reprise · la cadence avant l’arrêt",group:"Gestes",kind:"range",min:0,max:16,step:.5,unit:" em"},{key:"runCycle",label:"Page en plus · cycle",group:"Gestes",kind:"range",min:0,max:1,step:.05,unit:" pas"},{key:"runAgain",label:"Page en plus · reprise",group:"Gestes",kind:"range",min:0,max:1,step:.05,unit:" pas"},{key:"runNote",label:"Le run",group:"Gestes",kind:"note",text:_l}]),$=e=>e<0?0:e>1?1:e,q=e=>e*e*(3-2*e),al=(e,t)=>e-t*Math.sin(2*Math.PI*e)/(2*Math.PI);function Ie(e="plate"){const t=xe.values,a=e==="flight";return{hold:Math.max(0,a?t.flyHold:t.textHold),in:Math.max(.02,a?t.flyIn:t.textIn),out:Math.max(.02,a?t.flyOut:t.textOut),shift:Math.max(0,a?t.flyShift:t.textShift)}}function nl(e){const t=Ie(e),a=r=>1-q($((.5-t.hold)/r)),n=a(t.out),o=a(t.in);return{out:n,in:o,both:Math.min(n,o),best:Math.max(n,o)}}function vr(e,t){const a=nl(e),n=r=>`${Math.round(r*100)} %`,o=(()=>{const r=Ie(e);return(2*r.hold+r.in+r.out).toFixed(2)})();return`${t} · à mi-chemin ${n(a.out)} sortante / ${n(a.in)} entrante · vie d’un bloc ${o} temps`+(a.both>.35?" — DEUX PHRASES À LA FOIS":"")+(a.best<.5?" — UN TROU ENTRE LES DEUX":"")}function ol(){return vr("plate","l’ouverture, les trois étapes et la clôture, une seule courbe")}function rl(){return vr("flight","les trois phrases de l’envol, une seule courbe")}function uu(e,t="plate",a=0){const n=Ie(t),o=n.hold+Math.max(0,a),r=$((Math.abs(e)-o)/(e<0?n.in:n.out));return{alpha:1-q(r),y:(e<0?1:-1)*q(r)*n.shift}}const _r=(e="plate")=>{const t=Ie(e);return-(t.hold+t.in*(1-$(xe.values.sweepAt)))},sl=()=>-Math.max(0,xe.values.sweepEnd);function Hn(){const e=xe.values,t=Math.max(-.5,e.introHold);return{from:t,to:t+Math.max(.2,e.introSpan)}}const Ba=()=>Hn().to;function il(e){const{from:t,to:a}=Hn();return q($((e-t)/Math.max(.001,a-t)))}function ll(){const{from:e,to:t}=Hn(),a=o=>o.toFixed(2),n=Ie("plate").hold;return`couture en haut du cadre à 0 · mouvement ${a(e)} → ${a(t)} écran(s) après · le titre est posé à ${a(t)}, lu jusqu’à ${a(t+n)}, l’étape 1 à ${a(t+1)} · caméra fixe au milieu de la vue : le sélecteur est de face au centre, de biais dans sa colonne`+(e<0?" — le mouvement commence avant que la couture soit en haut":"")+(e<-.3?" — TROP TÔT : la mesure est encore sous les cartes":"")}function kr(e){const{from:t,to:a}=gr();return q($((e-t)/Math.max(.001,a-t)))}function gr(){const e=xe.values,t=Ie("plate"),a=t.hold+$(e.cueFrom)*t.out;return{from:a,to:a+Math.max(.05,e.cueSpan)}}function cl(){const e=Ie("plate"),{from:t,to:a}=gr(),n=s=>s.toFixed(2),o=1-(e.hold+e.in),r=1-e.hold;return`le titre s’efface ${n(e.hold)} → ${n(e.hold+e.out)} après son moment · le curseur s’ouvre ${n(t)} → ${n(a)} · l’étape 1 monte dès ${n(o)}, entière à ${n(r)}`+(a>r+.15?" — le curseur finit d’arriver sous les mots de l’étape 1":"")+(a-t<.15?" — COURT : un interrupteur":"")}function ul(){const e=xe.values,t=Math.max(1,e.risePow),a=$(e.riseStagger),n=s=>1-(1-$(s))**t,o=s=>1-(1-$(s))**(1/t),r=e.hiOnAbove?o(e.hiAbove):a+o(e.hiArrive);return{share:r,stagger:a,under:r<a,self:n(r-a),above:n(r)}}const Ia=xt({vh:0,reveals:[],played:null});function dl(){const e=(sl()-_r())*Ia.vh;return Ia.vh?`au plus ${Math.round(e)} px de page par bloc`:"—"}function ml(){const e=ul(),t=a=>`${Math.round(a*100)} %`;return`la ligne marquée à ${t(e.self)}, la précédente à ${t(e.above)} · réglé sur ${xe.values.hiOnAbove?"la précédente":"la marquée"}`+(e.under?" (sous le masque : elle monte déjà écrite)":"")+" · « Tous les mois. » garde le sien, sur le tambour"}function fl(){const e=Ia.reveals,t=Ia.played,a=t?` · dernière jouée : « ${t.text} » en ${(t.ms/1e3).toFixed(2)} s${t.peak>1.05?` (pressée ×${t.peak.toFixed(1)})`:""}`:"";return e.length?e.map(n=>`« ${n.text} » ${(n.ms/1e3).toFixed(2)} s`).join(" · ")+a:"—"}const pl=e=>{const t=xe.values,a=e==="cycle"?t.runCycle:e==="again"?t.runAgain:0;return Math.max(0,a)};function hl(){const e=xe.values,t=Ie("flight"),a=Math.max(.05,1+Math.max(0,e.runHold)),n=t.hold,o=[];let r=0;ks.forEach((c,i)=>{r+=(i===0?n:1)*a+pl(c.id)*a,o.push(r)});const s=(n+t.out)*a;return{step:a,lead:o[0]??n*a,moments:o,tail:s,span:r+s}}function xl(){const e=xe.values,t=Ie("flight"),a=Math.max(.05,1+Math.max(0,e.leadHold));return{step:a,at:t.hold*a,tail:(t.hold+t.out)*a,extra:Math.max(0,e.leadExtra)}}function vl(){const e=xl(),t=(Ie("flight").hold+_r("flight")-e.extra)*e.step,a=ir(),n=Number.isNaN(a.from)?"jamais couverte":`emportée par le dernier visuel de ${a.from.toFixed(2)} à ${Number.isNaN(a.to)?"…":a.to.toFixed(2)} écran(s)`;return`écrite dès ${t.toFixed(2)} · moment à ${e.at.toFixed(2)} · ${n}`+(t<-.35?" — TERMINÉE AVANT L’ÉPINGLE":"")+(!Number.isNaN(a.from)&&a.from<e.at+.12?" — EFFACÉE AVANT D’ÊTRE LUE":"")+(Number.isNaN(a.to)&&a.peak>0?" — ELLE NE PARTIRA PAS":"")}function _l(){const e=hl();return`moments à ${e.moments.map(t=>t.toFixed(2)).join(" · ")} écran(s) · ${e.span.toFixed(2)} + 2 écrans`}function du(){const e=xe.values,t=s=>typeof s=="string"&&/^#[0-9a-f]{6}$/i.test(s)?s:null,a=Math.min(4,Math.max(1,Math.round(e.colourCount))),n=[e.sweep1,e.sweep2,e.sweep3,e.sweep4].map(t),o=[e.sweepP1,e.sweepP2,e.sweepP3,e.sweepP4].map($);let r="";for(let s=0;s<4;s++){const c=Math.min(s,a-1),i=n[c];r+=i?`--sweep-${s+1}: ${i}; `:s>=a?`--sweep-${s+1}: var(--sweep-${a}); `:"",r+=`--sweep-p${s+1}: ${o[c].toFixed(3)}; `}return r+`--hi-blur: ${Math.max(0,e.hiBlur).toFixed(3)}em; --hi-bleed: ${Math.max(0,e.hiBleed).toFixed(3)}em; --rise-from: ${Math.max(0,e.riseFrom).toFixed(0)}%;`}function kl(e,t,a){const n=xe.values,o=(e-a.top)/t,r=(o-Ba())/Xa,s=$(r/(ae.length-1)),c=Math.max(0,Math.min(ae.length-1,r)),i=Math.max(0,Math.min(ae.length-2,Math.floor(c))),m=$(c-i),p=al(m,(el?0:Math.max(0,Math.min(1,n.dwell)))*$(c)),l=ae[1]-ae[0];return{u:s,beat:c,index:i,raw:m,f:p,reach:r,enter:o,day:r<0?ae[0]+l*r:ae[i]+(ae[i+1]-ae[i])*p}}const mu=(e,t,a)=>a.top+(Ba()+e*Xa)*t,fu=(e,t)=>e+(Ba()+(ae.length-1)*Xa)*t;function pu(e){const t={line:.5,dayPx:405,anchor:.5,align:0,lag:0,centred:!1,left:0,width:400,mountTop:0,vw:1440};if(!e)return t;const a=getComputedStyle(e),n=(o,r,s)=>{const c=parseFloat(a.getPropertyValue(o));return Number.isFinite(c)&&c>r?c:s};return{line:Math.min(.95,n("--rule-line",.02,t.line)),dayPx:n("--rule-day",1,t.dayPx),anchor:(()=>{const o=parseFloat(a.getPropertyValue("--rule-anchor"));return Number.isFinite(o)?Math.min(1,Math.max(0,o)):t.anchor})(),align:(()=>{const o=parseFloat(a.getPropertyValue("--rule-align"));return Number.isFinite(o)?Math.min(1,Math.max(0,o)):t.align})(),lag:(()=>{const o=parseFloat(a.getPropertyValue("--rule-lag"));return Number.isFinite(o)?Math.min(1,Math.max(0,o)):t.lag})(),centred:parseFloat(a.getPropertyValue("--rule-centred"))>.5,left:t.left,width:t.width,mountTop:t.mountTop,vw:t.vw}}const No=new Map;function gl(e){const t=No.get(e);if(t)return t;let a=ps(xt(window.matchMedia(e).matches));window.matchMedia(e).addEventListener("change",r=>{hs(a,r.matches,!0)});const n={get current(){return xs(a)}};return No.set(e,n),n}const qn=()=>gl("(prefers-reduced-motion: reduce)"),X=Jt("halftone","Halftone",{cell:.66,cellFloor:10,radiusMin:.1,radiusMax:.8,softness:.5,edge:.33,black:.1,white:1,gamma:.5,dither:0,gridDot:.8,gridInk:.5,gridInkPaper:.25,gridTravel:0,holeSoft:1,sphereScale:1.09,sphereX:-.06,sphereY:.05,sphereFps:20,sphereOpacity:1,sphereTilt:3.2,sphereFlip:!0,sphereFit:4,maskSoftTop:.005,maskSoftRight:.005,maskSoftBottom:.125,maskSoftLeft:.17,chartInkDot:.95,chartVoidDot:.42,chartReveal:1.1,chartStagger:.14,chartStep:.38,chartPad:.2,chartCursorWide:.5,chartShutter:1,loopCascade:1.5,loopRamp:1.6,loopSpan:2.4,loopCursor:.55,loopHold:2.4,loopOff:.5,loopRest:.7,arrowIdle:.5,arrowFreq:.9,arrowSpeed:1.5,arrowPush:2.4,arrowBoost:.3,arrowPress:.55,arrowOpacity:1,ruleSpan:1,ruleThick:2,ruleThickDay:2,ruleThickStep:2,ruleFill:.6,ruleMinor:.25,ruleMajor:.5,ruleGlow:.75,ruleFalloff:40,ruleDim:.5,ruleMark:.4,ruleDays:9,ruleOpacity:.5,ruleFade:.06,cursorInk:1,cursorSpan:9,cursorThick:20,cursorThickDay:5,cursorThickStep:5,trailSpan:1,trailThick:2,trailCap:.75,trailFrame:1,drumRadius:1,drumFov:70,drumUnroll:3,drumMaskFrom:.1,drumMaskTo:.5,drumFadeCurve:1,camFocal:.33,bendTurn:90,bendRadius:.75,bendDay:14,roadDays:2,bendRadius2:.6,camHeight:.45,camDive:1,camAxis:.98,camLine:.2,camSmooth:.2,camLead:0,camLand:1,roadOver:.1,roadRank:.35,roadStroke:3.5,roadInk:.85,fogNear:.7,fogFar:3.2,shutLead:5,shutSpan:7,shutTail:0,lightFrom:0,lightPart:3,blowout:0,paperGap:1,inlineFps:24,maxDpr:2,quality:1},[{key:"sharedNote",label:"Ce groupe règle",group:"Trame · toute la page",kind:"note",text:()=>Pl()},{key:"latticeNote",label:"Résolu à",group:"Trame · toute la page",kind:"note",text:()=>Oo()},{key:"surfaceNote",label:"Par surface",group:"Trame · toute la page",kind:"note",text:()=>Ll()},{key:"cell",label:"Pas de trame",group:"Trame · toute la page",kind:"range",min:.3,max:2.5,step:.05,unit:" ×"},{key:"cellFloor",label:"Cellules minimum",group:"Trame · toute la page",kind:"range",min:3,max:28,step:1},{key:"radiusMin",label:"Rayon · minimum",group:"Trame · toute la page",kind:"range",min:0,max:.4,step:.005},{key:"radiusMax",label:"Rayon · maximum",group:"Trame · toute la page",kind:"range",min:.2,max:1,step:.005},{key:"softness",label:"Fusion des points",group:"Trame · toute la page",kind:"range",min:0,max:1.2,step:.01},{key:"edge",label:"Adoucissement du bord",group:"Trame · toute la page",kind:"range",min:.05,max:4,step:.05,unit:" px"},{key:"black",label:"Point noir",group:"Trame · toute la page",kind:"range",min:0,max:.5,step:.005},{key:"white",label:"Point blanc",group:"Trame · toute la page",kind:"range",min:.1,max:1.5,step:.005},{key:"gamma",label:"Gamma",group:"Trame · toute la page",kind:"range",min:.3,max:3,step:.01},{key:"dither",label:"Tramage",group:"Trame · toute la page",kind:"range",min:0,max:.4,step:.005},{key:"gridNote",label:"Trame résolue",group:"Grille",kind:"note",text:()=>Oo()},{key:"gridDot",label:"Diamètre des points",group:"Grille",kind:"range",min:0,max:14,step:.05,unit:" px"},{key:"gridInk",label:"Intensité · fond sombre",group:"Grille",kind:"range",min:0,max:1,step:.01},{key:"gridInkPaper",label:"Intensité · fond clair",group:"Grille",kind:"range",min:0,max:1,step:.01},{key:"gridTravel",label:"Solidaire du défilement",group:"Grille",kind:"range",min:0,max:1.5,step:.01},{key:"holeSoft",label:"Sous les cartes · fondu",group:"Grille",kind:"range",min:0,max:3,step:.05,unit:" cell."},{key:"sphereScale",label:"Échelle",group:"Sphère",kind:"range",min:.4,max:2,step:.01},{key:"sphereX",label:"Décalage X",group:"Sphère",kind:"range",min:-.5,max:.5,step:.005},{key:"sphereY",label:"Décalage Y",group:"Sphère",kind:"range",min:-.5,max:.5,step:.005},{key:"sphereFps",label:"Images par seconde",group:"Sphère",kind:"range",min:4,max:60,step:1},{key:"sphereTilt",label:"Contraste · × le gamma",group:"Sphère",kind:"range",min:.5,max:6,step:.05,unit:" ×"},{key:"sphereFit",label:"Plafond en hauteurs d’écran",group:"Sphère",kind:"range",min:.6,max:4,step:.05},{key:"sphereFlip",label:"Miroir horizontal",group:"Sphère",kind:"toggle"},{key:"maskSoftTop",label:"Masque · dégradé haut",group:"Sphère",kind:"range",min:.005,max:.5,step:.005},{key:"maskSoftRight",label:"Masque · dégradé droite",group:"Sphère",kind:"range",min:.005,max:.5,step:.005},{key:"maskSoftBottom",label:"Masque · dégradé bas",group:"Sphère",kind:"range",min:.005,max:.5,step:.005},{key:"maskSoftLeft",label:"Masque · dégradé gauche",group:"Sphère",kind:"range",min:.005,max:.5,step:.005},{key:"sphereOpacity",label:"Opacité",group:"Sphère",kind:"range",min:0,max:1,step:.01},{key:"chartVoidDot",label:"Point · vide",group:"Charts",kind:"range",min:0,max:1.2,step:.005,unit:" cell."},{key:"chartInkDot",label:"Point · encré",group:"Charts",kind:"range",min:0,max:1.4,step:.005,unit:" cell."},{key:"loopNote",label:"Boucle résolue",group:"Charts",kind:"note",text:()=>Dl()},{key:"chartStep",label:"Balayage · durée d’une colonne",group:"Charts",kind:"range",min:.08,max:1.5,step:.01,unit:" s"},{key:"chartPad",label:"Marge de la figure",group:"Charts",kind:"range",min:0,max:.3,step:.005},{key:"chartCursorWide",label:"Curseur · surépaisseur allumé",group:"Charts",kind:"range",min:0,max:2,step:.05,unit:" cell."},{key:"chartShutter",label:"Balayage · obturateur",group:"Charts",kind:"range",min:0,max:1.5,step:.05,unit:" cell."},{key:"loopCascade",label:"04 · cascade des 12 mois",group:"Charts",kind:"range",min:.3,max:6,step:.05,unit:" s"},{key:"loopRamp",label:"04 · accélération de la cascade",group:"Charts",kind:"range",min:.5,max:3,step:.05},{key:"loopSpan",label:"04 · allumage d’un trait",group:"Charts",kind:"range",min:.2,max:6,step:.1,unit:" mois"},{key:"loopCursor",label:"04 · allumage du curseur",group:"Charts",kind:"range",min:.1,max:3,step:.05,unit:" s"},{key:"loopHold",label:"04 · pause, tout allumé",group:"Charts",kind:"range",min:0,max:8,step:.1,unit:" s"},{key:"loopOff",label:"04 · extinction",group:"Charts",kind:"range",min:.1,max:3,step:.05,unit:" s"},{key:"loopRest",label:"04 · repos, tout éteint",group:"Charts",kind:"range",min:0,max:4,step:.05,unit:" s"},{key:"chartReveal",label:"Entrée · durée",group:"Charts",kind:"range",min:.1,max:4,step:.05,unit:" s"},{key:"chartStagger",label:"Entrée · décalage",group:"Charts",kind:"range",min:0,max:1,step:.01,unit:" s"},{key:"arrowIdle",label:"Boucle · amplitude",group:"Flèches",kind:"range",min:0,max:2,step:.01},{key:"arrowFreq",label:"Boucle · fréquence",group:"Flèches",kind:"range",min:.1,max:3,step:.01},{key:"arrowSpeed",label:"Boucle · vitesse",group:"Flèches",kind:"range",min:0,max:8,step:.05},{key:"arrowPush",label:"Survol · avance",group:"Flèches",kind:"range",min:0,max:8,step:.1},{key:"arrowBoost",label:"Survol · intensité",group:"Flèches",kind:"range",min:0,max:1,step:.01},{key:"arrowPress",label:"Appui · intensité",group:"Flèches",kind:"range",min:0,max:1.5,step:.01},{key:"arrowOpacity",label:"Opacité",group:"Flèches",kind:"range",min:0,max:1,step:.01},{key:"ruleNote",label:"Résolue à",group:"Graduation",kind:"note",text:()=>Rl()},{key:"ruleSpan",label:"Étendue d’un jour",group:"Graduation",kind:"range",min:.3,max:2.5,step:.01,unit:" ×"},{key:"ruleThick",label:"Épaisseur · unité",group:"Graduation",kind:"range",min:.5,max:12,step:.25,unit:" px"},{key:"ruleThickDay",label:"Épaisseur · jour",group:"Graduation",kind:"range",min:.5,max:12,step:.25,unit:" px"},{key:"ruleThickStep",label:"Épaisseur · étape",group:"Graduation",kind:"range",min:.5,max:20,step:.25,unit:" px"},{key:"ruleMinor",label:"Longueur · unité",group:"Graduation",kind:"range",min:.02,max:1,step:.005},{key:"ruleMajor",label:"Longueur · étape",group:"Graduation",kind:"range",min:.02,max:1,step:.005},{key:"ruleGlow",label:"Encre au centre",group:"Graduation",kind:"range",min:.1,max:1,step:.01},{key:"ruleFalloff",label:"Dégressivité",group:"Graduation",kind:"range",min:1,max:40,step:.5},{key:"ruleDim",label:"Encre éteinte",group:"Graduation",kind:"range",min:0,max:.6,step:.005},{key:"ruleMark",label:"Encre des étiquettes",group:"Graduation",kind:"range",min:.1,max:1,step:.01},{key:"ruleDays",label:"Graduations par jour",group:"Graduation",kind:"range",min:4,max:40,step:1},{key:"ruleOpacity",label:"Opacité",group:"Graduation",kind:"range",min:0,max:1,step:.01},{key:"fadeNote",label:"Fondu résolu",group:"Graduation",kind:"note",text:()=>Sl()},{key:"ruleFade",label:"Fondu du haut",group:"Graduation",kind:"range",min:0,max:.4,step:.005,unit:" écran"},{key:"cursorInk",label:"Luminosité",group:"Curseur",kind:"range",min:.2,max:1,step:.01},{key:"cursorSpan",label:"Fenêtre",group:"Curseur",kind:"range",min:.3,max:6,step:.05,unit:" graduations"},{key:"cursorThick",label:"Épaisseur · unité",group:"Curseur",kind:"range",min:.5,max:40,step:.5,unit:" px"},{key:"cursorThickDay",label:"Épaisseur · jour",group:"Curseur",kind:"range",min:.5,max:40,step:.5,unit:" px"},{key:"cursorThickStep",label:"Épaisseur · étape",group:"Curseur",kind:"range",min:.5,max:40,step:.5,unit:" px"},{key:"trailSpan",label:"Fenêtre",group:"Traînée",kind:"range",min:.1,max:4,step:.05,unit:" × le curseur"},{key:"trailThick",label:"Épaisseur",group:"Traînée",kind:"range",min:.1,max:4,step:.05,unit:" × le curseur"},{key:"trailCap",label:"Plein maximum",group:"Traînée",kind:"range",min:.2,max:1,step:.01,unit:" × le pas"},{key:"trailFrame",label:"Fenêtre · au plus",group:"Traînée",kind:"range",min:.1,max:2,step:.05,unit:" × le cadre"},{key:"drumNote",label:"Résolu à",group:"Tambour",kind:"note",text:()=>Al()},{key:"drumRadius",label:"Rayon",group:"Tambour",kind:"range",min:.3,max:4,step:.05,unit:" écran, vu à la focale du run — résolu à nouveau pour l’objectif de l’ouverture, même face"},{key:"drumFov",label:"Objectif · champ sur le grand côté",group:"Tambour",kind:"range",min:30,max:140,step:1,unit:"° (la focale du run reprend sur le déroulé)"},{key:"drumUnroll",label:"Déroulé",group:"Tambour",kind:"range",min:.5,max:6,step:.1,unit:" jours après le jour 10"},{key:"drumMaskFrom",label:"Masque · entier jusqu’à",group:"Tambour",kind:"range",min:0,max:1,step:.01,unit:" × la profondeur du bord"},{key:"drumMaskTo",label:"Masque · éteint à",group:"Tambour",kind:"range",min:.05,max:1.5,step:.01,unit:" × la profondeur du bord"},{key:"drumFadeCurve",label:"Masque · courbe",group:"Tambour",kind:"range",min:.3,max:3,step:.05,unit:" (exposant)"},{key:"camFocal",label:"Focale",group:"Caméra",kind:"range",min:.2,max:3,step:.01,unit:" écran"},{key:"bendTurn",label:"Sol · angle",group:"Caméra",kind:"range",min:30,max:90,step:1,unit:"°"},{key:"bendRadius",label:"Coude · rayon",group:"Caméra",kind:"range",min:.3,max:3,step:.05,unit:" écran"},{key:"bendDay",label:"Coude · jour",group:"Caméra",kind:"range",min:10.5,max:18,step:.1,unit:" (plancher résolu)"},{key:"roadDays",label:"Sol · longueur",group:"Caméra",kind:"range",min:.5,max:16,step:.25,unit:" jours"},{key:"bendRadius2",label:"Second coude · rayon",group:"Caméra",kind:"range",min:.2,max:3,step:.05,unit:" écran"},{key:"camHeight",label:"Hauteur sur le sol",group:"Caméra",kind:"range",min:.15,max:1.5,step:.01,unit:" × sous l’horizon"},{key:"camDive",label:"Descente sur le sol",group:"Caméra",kind:"range",min:.15,max:1,step:.01,unit:" × la hauteur"},{key:"camAxis",label:"Point de fuite · dans l’unité",group:"Caméra",kind:"range",min:.02,max:.98,step:.01,unit:" × l’unité"},{key:"camLine",label:"Horizon",group:"Caméra",kind:"range",min:.05,max:.9,step:.01,unit:" écran"},{key:"camSmooth",label:"Lissage du rail",group:"Caméra",kind:"range",min:0,max:1.5,step:.05,unit:" écran"},{key:"camLead",label:"Avance de la route",group:"Caméra",kind:"range",min:0,max:3,step:.05,unit:" écrans avant la fin du beat"},{key:"camLand",label:"Avance à l’arrivée",group:"Caméra",kind:"range",min:-.9,max:1,step:.05},{key:"roadOver",label:"Débord au store",group:"Route",kind:"range",min:.05,max:1.5,step:.01,unit:" × le cadre"},{key:"roadRank",label:"Poids des rangs",group:"Route",kind:"range",min:0,max:1,step:.01},{key:"roadStroke",label:"Trait minimum",group:"Route",kind:"range",min:.5,max:10,step:.25,unit:" px"},{key:"roadInk",label:"Encre",group:"Route",kind:"range",min:.1,max:1,step:.01},{key:"fogNear",label:"Lumière · pleine jusqu’à",group:"Route",kind:"range",min:0,max:4,step:.05,unit:" × la lecture"},{key:"fogFar",label:"Lumière · éteinte à",group:"Route",kind:"range",min:.5,max:10,step:.05,unit:" × la lecture"},{key:"shutLead",label:"Épaississement · dès",group:"Store",kind:"range",min:0,max:16,step:.5,unit:" lames avant la crête"},{key:"shutSpan",label:"Épaississement · sur",group:"Store",kind:"range",min:1,max:24,step:.5,unit:" lames"},{key:"ruleFill",label:"Fermeture · épaisseur",group:"Store",kind:"range",min:.05,max:.9,step:.005,unit:" × le pas des lames"},{key:"shutTail",label:"Course après fermeture",group:"Store",kind:"range",min:0,max:5,step:.1,unit:" lames"},{key:"lightFrom",label:"Lumière · à",group:"Store",kind:"range",min:0,max:1,step:.01,unit:" de la rampe"},{key:"lightPart",label:"Lumière · montée",group:"Store",kind:"range",min:.02,max:3,step:.01,unit:" de la rampe"},{key:"paperGap",label:"Interstice · au papier",group:"Store",kind:"range",min:.3,max:3,step:.05,unit:" × le point"},{key:"blowout",label:"Sur-exposition",group:"Store",kind:"range",min:0,max:1,step:.01},{key:"inlineFps",label:"Cadence des vignettes",group:"Qualité",kind:"range",min:6,max:60,step:1},{key:"quality",label:"Résolution",group:"Qualité",kind:"range",min:.4,max:2,step:.05},{key:"maxDpr",label:"Densité max",group:"Qualité",kind:"range",min:1,max:3,step:.5}]),yr={live:!1,sheet:!1,fps:0,surfaces:0,stage:"—",cell:10.5,depth:0,travel:0,zoom:1,cover:1,near:1,pp:[0,0],axis:0,tick:0,column:0,day:0,beatDay:0,ranks:[.2,.42,.62],align:0,closing:0,closeSpan:0,wall:0,line:.5,ruleRect:0,eye:[0,0],phases:[0,0,0,0,0],runSpan:[0,0],trail:[0,0,0,0],ticks:[0,0,0],intro:[1,0,0],cue:1,gate:1,span:[0,0],frameTicks:0,frame:1,drum:[1,0,1,0],deep:[0,1e6,1,0],head:[-1e4,1],charts:{},holes:0,pitch:{grid:[0,0],sphere:[0,0],chart:[0,0],dart:[0,0],rule:[0,0]}},yl=(()=>{try{return new URLSearchParams(location.search).has("tune")||localStorage.getItem("sybiosme:tune")==="on"}catch{return!1}})(),bl=xt(yr),V=yl?bl:yr;let $t=10.5;function br(){const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--lattice"));return Number.isFinite(e)&&e>0&&($t=e),V.cell=Math.round($t*X.values.cell*100)/100,$t}let B={line:.5,dayPx:405,anchor:.5,align:0,lag:0,centred:!1,left:0,width:400,mountTop:0,vw:1440};const hu=e=>{B=e},xu=()=>B,vt=()=>B.dayPx*Math.max(.01,X.values.ruleSpan),Ga=()=>vt()/Math.max(1,X.values.ruleDays);let Ze=null;const Ml=(e,t,a,n,o)=>{const r=e*t/(e+t),s=o*r,c=n*r;if(s>=2*e-1)return{R:e,from:c,to:s};const i=[e,t,a,n,o].join(",");if(Ze&&Ze.key===i)return Ze;const m=Math.acos(1-s/e),p=e*Math.sin(m)*t/(t+s),l=Math.cos(m)*t/(t+s),d=Math.acos(1-Math.min(c,s)/e),f=e*Math.sin(d)*t/(t+c),x=u=>p*a/(a*Math.sin(u)-p*(1-Math.cos(u))),v=u=>{const _=x(u);return Math.cos(u)*a/(a+_*(1-Math.cos(u)))};let A=.02,F=Math.min(1.5,2*Math.atan(a/p)-.02);if(!(x(F)>0)||v(A)<l||v(F)>l)return Ze={key:i,R:e,from:c,to:s},Ze;for(let u=0;u<40;u++){const _=(A+F)/2;v(_)>l?A=_:F=_}const M=(A+F)/2,b=x(M),T=b*(1-Math.cos(M)),R=u=>b*Math.sin(u)*a/(a+b*(1-Math.cos(u)));let E=0,C=M;for(let u=0;u<40;u++){const _=(E+C)/2;R(_)<f?E=_:C=_}const w=Math.min(T,b*(1-Math.cos((E+C)/2)));return Ze={key:i,R:b,from:w,to:T},Ze},Ne=e=>{const t=X.values,a=Math.max(1,e*t.camFocal),n=Math.tan(le(t.drumFov,30,140)*Math.PI/360),o=B.vw>1?Math.max(1,Math.max(B.vw,e)/2/n):a,r=Math.max(.05,t.drumRadius)*e,{R:s,from:c,to:i}=Ml(r,a,o,Math.max(0,t.drumMaskFrom),Math.max(.01,t.drumMaskTo)),m=Math.acos(s/(s+o));return{R:s,kappa:1/s,rim:m,f:o,fRun:a,deep:[c,Math.max(c+.01,i)]}},Vn=(e,t)=>{const a=X.values,{R:n,rim:o}=Ne(e),r=ae[ae.length-1],s=Math.max(0,a.bendDay-r)*t,c=Math.max(0,a.drumUnroll)*t,i=(1-$(B.line))*e;return Math.max(s,n*o,.8*c+i+.05*e)},wl=(e,t,a)=>{const{kappa:n}=Ne(t),o=Math.max(1,X.values.drumUnroll*a);return n*(1-q($(e/o)))},Tl=(e,t,a,n)=>Math.pow(1-q($((e-t)/Math.max(1,a-t))),Math.max(.05,n)),Io=e=>{const{R:t,f:a}=Ne(e);return t*a/(t+a)},Mr=e=>{const t=X.values,[a,n]=Ne(e).deep;return[a,n,Math.max(.05,t.drumFadeCurve)]},wr=(e,t)=>{const a=xe.values,n=il(e),o=$(B.align),{axis:r}=Pr(B.left,B.width),s=B.vw/2,c=t/2,i=B.line*t,m=Math.max(1,X.values.ruleMinor*B.width),p=s-(r+(.5-o)*m),l=t*$(a.introLine)-i,d=B.centred?0:(1-n)*p,f=Math.max(0,-e)*t*.72,x=B.centred?0:(1-n)*l+f,v=s,A=c,F=Math.abs(p)>=Math.abs(l);return{p:n,dx:d,dy:x,ppx:v,ppy:A,eyeY:i+x-A,dir:F?"x":"y",edge:F?r+d+(1-o)*m+Math.max(0,a.introEdge)*B.width:B.mountTop+x,soft:Math.max(0,a.introSoft)*B.width,side:F?p>=0?1:-1:l>=0?1:-1,mountTop:B.mountTop+x}};let xa=null;const El=e=>{const t=X.values,a=vt(),n=[e,B.vw,a,B.line,t.drumRadius,t.drumFov,t.drumMaskFrom,t.drumMaskTo,t.drumUnroll,t.bendDay,t.camFocal,t.bendRadius,t.bendTurn,t.roadDays,t.bendRadius2,t.camLine,t.camHeight,t.camDive].join(",");if(xa&&xa.key===n)return xa.pro;const o=Fn(e,a,Ga(),le(t.camLine,.05,.95),le(t.camLine,.05,.95),t,.1,Vn(e,a),Ne(e).kappa,0,Ne(e).f);return xa={key:n,pro:o},o},vu=(e,t,a,n=1/0)=>{const o=X.values,r=Math.abs(e-t)*Math.max(1,o.ruleDays),s=Math.exp(-r/Math.max(.5,o.ruleFalloff)),c=kr((n-Ba())/Xa),i=q($(1-r/Math.max(.05,o.cursorSpan*c)))*c,m=Math.max(s*$(o.ruleGlow),i*$(o.cursorInk)),p=o.ruleMark+(1-o.ruleMark)*m,l=ae[ae.length-1],d=vt(),f=t>l+1e-6&&te!==null,x=f&&te?te.f:Ne(a).f,v=te?te.pro:El(a),A=f?null:wr(n,a),F=f&&te?te.eyeY:A?.eyeY??0,M=f&&te?te.eyeZ:x,b=f&&te?te.ppx:A?.ppx??B.vw/2,T=f&&te?te.ppy:A?.ppy??a/2,R=f?l:t,E=f&&te?te.leave:0,[C,w,u,_]=f&&te?te.deep:[...Mr(a),0],g=(e-R)*d,k=v.heading(g);if((g-v.sF)*v.kappa<-Math.PI)return{y:-1e6,ink:p,live:i,fade:0,tilt:k,Y:0,Z:0,f:x,ppx:b,ppy:T};const[y,P]=v.at(g),[h,D]=v.normal(g),S=y-F,L=P-M,I=-L,U=S;if(I<=1)return{y:-1e6,ink:p,live:i,fade:0,tilt:k,Y:0,Z:0,f:x,ppx:b,ppy:T};const z=T-x*U/I,ne=-(S*h+L*D)>0?1:0,Y=Tl(I-x,C,w,u),ce=1-q($((I/x-o.fogNear)/Math.max(.05,o.fogFar-o.fogNear)));return{y:z,ink:p,live:i,fade:(Y+(ce-Y)*_)*ne*(1-E),tilt:k,Y:-U,Z:x-I,f:x,ppx:b,ppy:T}},Rl=()=>{const e=r=>`${Math.round(r*100)} %`,[t,a,n,o]=V.phases;return`${Q(vt())} px par jour · graduation ${Q(Ga())} px · étape tous les ${Na} jours (${Math.round(X.values.ruleDays)*Na} traits) · ligne ${Math.round(B.line*100)} % · course : coude ${e(t)} · sol ${e(a)} · crête ${e(n)} · mur ${e(o)} · lames épaissies dès ${e(V.phases[4])} · couverture ×${Q(V.cover)} · au mur ×${Q(V.near)}`},Al=()=>{const e=X.values,t=Math.max(1,V.frame),{R:a,rim:n,f:o,fRun:r}=Ne(t),s=o*a*Math.sin(n)/(o+a*(1-Math.cos(n))),c=Math.max(1,vt()),i=Math.round(2*Math.atan(Math.max(1,B.vw,t)/2/o)*180/Math.PI),m=ae[ae.length-1],p=Vn(t,c),l=d=>{const f=1-Math.max(0,d)/a;return f<=-1?180:Math.round(Math.acos(Math.max(-1,Math.min(1,f)))*180/Math.PI)};return`objectif ${i}° sur le grand côté (focale ${Q(o/t)} écran ; le run à ${Q(r/t)}${Math.abs(o-r)>.5?` — rayon résolu à ${Q(a/t)} écran`:""}) · bord à ${Math.round(n*180/Math.PI)}° · ${Q(s/t)} écran de part et d’autre de la ligne · ${Q(a*n/c,1)} jours visibles de chaque côté · déroulé sur ${Q(e.drumUnroll,1)} jours · coude au jour ${Q(m+p/c,1)}${p>(e.bendDay-m)*c+.5?" (plancher)":""} · masque entier jusqu’à ${l(e.drumMaskFrom*Io(t))}°, éteint à ${l(e.drumMaskTo*Io(t))}° · ouverture ${Math.round(V.intro[0]*100)} % (tambour déplacé de ${Math.round(V.intro[1])} ; ${Math.round(V.intro[2])} px)`},Sl=()=>{const[e,t]=V.head,a=Math.max(1,V.frame);return`${Q(t/Math.max(1,Ga()))} graduations de fondu · bande à ${Math.round(e/a*100)} → ${Math.round((e+t)/a*100)} % du cadre`},Fl=e=>Math.min($t*X.values.cell,e/Math.max(3,X.values.cellFloor)),Sn=()=>Math.max(0,X.values.gridDot)/2,zt=[],Nt=new Float32Array(Fe*4),Tr=new Float32Array(Fe),Er=new Float32Array(Fe);function _u(e,t=0){const a=()=>{n.radius=parseFloat(getComputedStyle(e).borderTopLeftRadius)||0;const r=e.getBoundingClientRect();n.left=r.left,n.top=r.top+Cn(),n.width=r.width,n.height=r.height},n={el:e,radius:0,feather:t,canvas:t?document.querySelector("[data-ground-canvas]"):null,left:0,top:0,width:0,height:0,measure:a};a();const o=new ResizeObserver(a);return o.observe(e),zt.push(n),{destroy(){o.disconnect();const r=zt.indexOf(n);r>=0&&zt.splice(r,1)}}}function ku(){for(const e of zt)e.measure()}function gu(e,t,a){let n=0;for(const o of zt){if(n>=Fe)break;const r={left:o.left,top:o.top-a,width:o.width,height:o.height,bottom:o.top-a+o.height};if(r.bottom<=0||r.top>=t||r.width<=0||r.height<=0)continue;const s=o.feather&&document.documentElement.hasAttribute("data-landing-intro")?o.canvas?.getBoundingClientRect():null,c=s&&o.canvas?s.width/o.canvas.clientWidth:1,i=e/Math.max(.01,c),m=o.feather?o.feather+4:0,p=(r.width/2+m)*i,l=(r.height/2+m)*i;Nt[n*4]=(r.left+r.width/2-(s?.left??0))*i,Nt[n*4+1]=(r.top+r.height/2-(s?.top??0))*i,Nt[n*4+2]=p,Nt[n*4+3]=l,Tr[n]=Math.min((o.radius+m)*i,p,l),Er[n]=o.feather*i,n++}return V.holes=n,n}const yu=()=>Nt,bu=()=>Tr,Mu=()=>Er,Uo=e=>{const t=X.values,a=t.radiusMax-t.radiusMin;if(a<=0||e<=0)return 0;const n=Sn()/e;return Math.max(0,Math.min(1,(n-t.radiusMin)/a))},Q=(e,t=2)=>Math.round(e*10**t)/10**t,Oo=()=>{const e=V.cell,t=X.values.gridDot;if(!e)return"—";const a=t>0?` · ${Math.round(t/e*100)} % rempli`:" · pas d’écran";return`${Q(e)} px de pas · point ${Q(t)} px${a}`},Pl=()=>`${Object.values(V.pitch).filter(([t,a])=>t&&a).length} surface(s) · sphère, graduation, vignettes, flèches et l’écran de la page · seule dérogation : le contraste de la sphère, × ${Q(X.values.sphereTilt)} ce gamma`,Dl=()=>{const e=Math.max(.05,X.values.chartStep),t=V.charts.performance,a=t?.cols??12,n=t?.pitch??3,o=V.charts.evolution;return`${Q(e,2)} s par colonne de points — la même vitesse sur les trois · ${a} mois sur la vitre, ${Q(e*n,2)} s l'un · anneau de ${Le} mois = ${Q(e*n*Le,1)} s`+(t?` · trait 1 cellule, ${t.pitch-1} d'air`:"")+(o?` · mosaïque ${o.cols} × ${o.rows}`:"")+` · linéaire, sans easing · les 3 sur le même instant · obturateur ${Q(X.values.chartShutter,2)} cellule = ${Math.round(X.values.chartShutter*e*1e3)} ms · 04 sur ses secondes : tour de ${Q(Ul(),2)} s, dont ${Q(X.values.loopHold,1)} s de pause allumée`},Ll=()=>{const e=Math.max(3,X.values.cellFloor),t=[];for(const[a,[n,o]]of Object.entries(V.pitch)){if(!n||!o)continue;const r=o<$t*X.values.cell-.01;t.push(`${a} ${Q(o)}${r?"*":""}`)}return t.length?`${t.join(" · ")}  (* plancher ${e} cellules)`:"—"};X.readout=()=>V.live?`${V.fps?`${V.fps} fps`:"immobile"} · ${V.surfaces} surf · ${V.stage}`:"hors ligne";const wu={cols:8,rows:8,frames:63};async function Tu(){if(typeof createImageBitmap!="function")return null;for(const e of["/media/hero-sphere.avif","/media/hero-sphere.webp"])try{if(e.endsWith(".avif")&&window.__heroSheet){const a=await window.__heroSheet;if(a)return await createImageBitmap(a);continue}const t=await fetch(e);if(!t.ok)continue;return await createImageBitmap(await t.blob())}catch{}return null}const Ge=e=>{const t=new Float32Array(Aa);for(let a=0;a<e.length&&a<Aa;a++)t[a]=e[a];return t},Le=18,$o=Le*12,Rr=28;function dn(){const e=X.values,t=Math.max(1e-4,e.radiusMax-e.radiusMin),a=r=>Math.max(0,Math.min(1,(Math.max(0,r)/2-e.radiusMin)/t)),n=r=>e.black+(e.white-e.black)*Math.pow(Math.max(0,Math.min(1,r)),1/Math.max(.05,e.gamma)),o=a(e.chartInkDot);return{ink:o,dim:n(o>1e-4?a(e.chartVoidDot)/o:0)}}const Xe={performance:{kind:0,pitch:3,wide:1,cols:0,rows:1,geom:[.22,.52,.16,0],bars:Ge([.34,.52,.66,.28,.46,.62,.8,.92,.4,.58,.71,.86,.33,.5,.64,.77,.9,.44]),inks:Ge([])},budget:{kind:1,pitch:3,wide:1,cols:0,rows:1,geom:[.22,.2,.7,0],bars:Ge([.52,.68,.36,.58,.78,.24,.54,.7,.18,.62,.84,.44,.66,.28,.6,.4,.74,.32]),inks:Ge([])},month:{kind:2,pitch:2,wide:1,cols:16,rows:1,geom:[.4,1,12,0],bars:Ge([]),inks:Ge([])},evolution:{kind:3,pitch:4,wide:3,cols:0,rows:3,geom:[.45,3,3,0],bars:Ge([]),inks:Ge([])}},Cl=(e,t)=>{const a=Math.max(0,X.values.chartPad)*Math.min(e,t);return[Math.max(1,e-2*a),Math.max(1,t-2*a)]};function Ar(e,t,a,n){const o=Xe[e]??Xe.performance,r=Math.max(0,X.values.chartPad)*Math.min(t,a),s=Math.max(1,t-2*r),c=Math.max(1,a-2*r),i=(_,g)=>{const k=Math.ceil(_/n-1e-6),y=Math.floor((_+g)/n+1e-6)-1;return{lo:k,n:Math.max(1,y-k+1)}},m=(_,g,k,y)=>{const P=(_+(g-k*n)/2)/n;return(Math.max(y.lo,Math.min(y.lo+Math.max(0,y.n-k),Math.round(P)))+.5)*n},p=i(r,s),l=i(r,c),d=p.n,f=l.n,x=Math.max(1,Math.round(o.pitch)),v=Math.max(1,Math.min(x,Math.round(o.wide))),A=Math.max(2,Math.floor((d+x-v)/x)),F=o.cols>0?Math.max(2,Math.min(o.cols,A)):A,M=(F-1)*x,b=Math.max(1,o.rows),T=b>1?v:1,R=Math.floor((f-T)/Math.max(1,b-1)),E=b>1?Math.max(T+1,Math.min(T+2,R)):x,C=b>1?(b-1)*E+T:f,w=o.kind===2?m(r,s,M+v,p):(p.lo+.5)*n,u=m(r,c,C,l);return{x0:w,y0:u,pitch:x,cols:F,rows:b,rowPitch:E,wide:v,high:T,tail:M,down:C,cell:n}}function Nl(e){const t=X.values;if(qn().current)return Rr;const a=e/Math.max(.05,t.chartStep);return a-Math.floor(a/$o)*$o}function Sr(e,t){return(Xe[e]??Xe.performance).kind===2?0:Math.max(0,t)}function Il(e){const t=X.values,a=Xe.month.geom[2],n=Math.max(.2,t.loopSpan),o=Math.min(Le-1.2,a+n);if(qn().current)return o;const r=Math.max(.05,t.loopCascade),s=Math.max(.05,t.loopCursor),c=Math.max(0,t.loopHold),i=Math.max(.05,t.loopOff),m=Math.max(0,t.loopRest),p=r+s+c+i+m;let l=e-Math.floor(e/p)*p;return l<r?a*Math.pow(l/r,Math.max(.3,t.loopRamp)):(l-=r,l<s?a+(o-a)*(l/s):(l-=s,l<c?o:(l-=c,l<i?Le-1+.9*(l/i):Le-.05)))}const Ul=()=>{const e=X.values;return Math.max(.05,e.loopCascade)+Math.max(.05,e.loopCursor)+Math.max(0,e.loopHold)+Math.max(.05,e.loopOff)+Math.max(0,e.loopRest)};function Ol(e,t,a,n,o,r,s=0){const c=Xe[e]??Xe.performance,i=X.values,m=Ar(e,n,o,r),p=[...c.geom];c.kind===3&&(p[1]=m.wide,p[2]=m.rows,p[3]=m.rowPitch),c.kind===2&&(p[3]=Math.max(0,X.values.chartCursorWide));const l=c.kind!==2&&i.chartStep>0&&!qn().current;return{chart:[c.kind,a,c.kind===2?Il(s):Sr(e,t),Le],geom:p,rail:[m.x0,m.y0,m.pitch,m.cols],sweep:[l?Math.max(0,i.chartShutter):0,i.radiusMin,i.radiusMax,Math.max(.2,i.loopSpan)],bars:c.bars,inks:c.inks}}function Eu(e){const t=Xe[e]??Xe.performance,[a,n]=zl,[o,r]=Cl(a,n),s=(a-o)/2/a,c=(n-r)/2/n,i=o/a,m=r/n,p=t.geom,l=t.pitch,d=Math.max(1,Math.min(l,t.wide)),f=40,x=t.cols>0?t.cols:Math.max(2,Math.floor((f+l-d)/l)),v=t.rows,A=o/f,F=Math.max(1,Math.round(r/A)),M=v>1?d:1,b=v>1?Math.max(M+1,Math.min(M+2,Math.floor((F-M)/Math.max(1,v-1)))):l,T=v>1?Math.max(0,(F-((v-1)*b+M))/2):0,R=A/o,E=A/r,C=Math.max(0,(f-((x-1)*l+d))/2),w=h=>(C+h*l+.5)*R,u=.86,_=.34,g=[],k=(h,D,S,L,I,U)=>{const z=Math.max(0,Math.min(1,h)),ne=Math.max(0,Math.min(1,D)),Y=Math.max(0,Math.min(1,S)),ce=Math.max(0,Math.min(1,L));ne<=z||ce<=Y||g.push({x:s+z*i,y:c+Y*m,w:(ne-z)*i,h:(ce-Y)*m,r:I,o:U})},y=(h,D,S)=>k(w(h)-R/2,w(h)+R/2,1-D,1,R*i/2,S),P=Math.round(Rr/l);if(t.kind===0)for(let h=0;h<x;h++){const D=t.bars[(P+h)%Le],S=Math.max(1,x-1);y(h,1,_),y(h,Math.max(.06,Math.min(1,p[0]+p[1]*h/S+p[2]*(D*2-1))),u)}else if(t.kind===1)for(let h=0;h<x;h++){const D=t.bars[(P+h)%Le];y(h,Math.max(p[0]+.1,Math.min(1,p[2]+p[1]*(D*2-1))),_),y(h,p[0],u)}else if(t.kind===2){const h=Math.round(p[2]),D=(1+Math.max(0,X.values.chartCursorWide))/2;for(let S=0;S<x;S++){const L=S===h?p[1]:p[0],I=S===h?D:.5,U=Math.min(1,(S-h)/Math.max(1,x-1-h)),z=S<=h?u:_*(1-.45*U*U*(3-2*U));z<=.02||k(w(S)-I*R,w(S)+I*R,.5-L/2,.5+L/2,R*i/2,z)}}else for(let h=0;h<x;h++)for(let D=0;D<v;D++){const S=$l((P+h)%Le,D)<p[0]?u:_,L=(T+D*b)*E;k(w(h)-R/2,w(h)-R/2+d*R,L,L+M*E,R*i/2,S)}return g}function $l(e,t){const a=s=>s-Math.floor(s);let n=a((e*1.37+7.1)*123.34),o=a((t*2.11+3.7)*456.21);const r=n*(n+45.32)+o*(o+45.32);return n=a(n+r),o=a(o+r),a(n*o)}const Ru="0 0 300 200",zl=[300,200],Xl=3,Bl=.6,le=(e,t,a)=>e<t?t:e>a?a:e,Gl=(e,t,a)=>q($((a-e)/Math.max(1e-6,t-e))),Fn=(e,t,a,n,o,r,s,c,i,m,p)=>{const{fRun:l}=Ne(e),d=p??l,f=B.centred||!!Fr?.matches,x=Math.max(1,r.bendRadius*e*(f?.8:1)),v=Math.max(1,r.bendRadius2*e*(f?.5:1)),A=le(r.bendTurn,5,90)*Math.PI/180,F=Math.max(0,r.roadDays)*t*(f?.6:1),M=Math.sin(A),b=Math.cos(A),T=Math.max(m,c),R=i>1e-12?1/i:1/0,E=Math.max(0,(T-m)*i),C=Math.sin(E),w=Math.cos(E),u=x*A/(A+E),_=T+x*A,g=_+F,k=g+v*A,y=O=>{if(i<=1e-12)return[-m-O,0];const j=O*i,rt=Math.sin(j*.5);return[-m-Math.sin(j)/i,-(2*rt*rt)/i]},P=y(T-m),h=[P[0]-u*C,P[1]+u*w],D=[h[0]-u*M,h[1]-u*b],S=[D[0]-F*b,D[1]+F*M],L=[S[0]-v*M,S[1]-v*b],I=[L[0],L[1]+v],U=O=>{if(O<=T)return y(O-m);if(O<_){const j=-E+(O-T)/u;return[h[0]-u*Math.sin(j),h[1]-u*Math.cos(j)]}if(O<g){const j=O-_;return[D[0]-j*b,D[1]+j*M]}if(O<k){const j=A-(O-g)/v;return[L[0]+v*Math.sin(j),L[1]+v*Math.cos(j)]}return[I[0]-(O-k),I[1]]},z=O=>O<=T?-(O-m)*i:O<_?-E+(O-T)/u:O<g?A:O<k?A-(O-g)/v:0,ne=O=>{const j=z(O);return[Math.sin(j),Math.cos(j)]},Y=Math.max(1,le(r.camHeight,.1,2)*(1-n)*e),ce=Math.max(1,l*s),Te=Math.max(ce*1.25,Math.min(Y,Y*le(r.camDive,.15,1))),Ve=o*e*ce/l,Be=e*ce/l,ve=a*Math.max(1,Be/(Xl*Math.max(.001,a)))**Bl,kt=k-Math.max(0,r.shutLead)*ve,We=kt+Math.max(1,r.shutSpan)*ve,ot=Math.max(k+a,We+Ve+Math.max(0,r.shutTail)*ve),me=ot-k;return{f:d,kappa:i,R,sF:m,phx:E,Sx:T,R1:u,R2:v,th:A,Lr:F,S1:_,S2:g,S3:k,C1:h,P1:D,P2:S,C2:L,P3:I,at:U,normal:ne,heading:z,off:O=>{if(O<=T)return d;if(O<_)return d+(Y-d)*q((O-T)/Math.max(1,_-T));if(O<g){const j=$((O-_)/Math.max(1,g-_));return Y+(Te-Y)*j*(2-j)}return O<k?Te+(ce-Te)*Gl(0,1,(O-g)/Math.max(1,k-g)):ce},dF2:Te,dN:ce,tail:me,sEnd:ot,sShut:kt,sTouch:We,frameEnd:Be,headBack:Ve,shutUnit:ve}};let Dt=null;const Hl=(e,t,a,n,o)=>{const r=[e,t,a,n.f,n.kappa,n.sF,n.Sx,n.R1,n.R2,n.th,n.Lr,n.off(n.S1),n.off(n.S2-1),n.off(n.S3),n.dN,n.tail,o].join(",");if(Dt&&Dt.key===r)return Dt;const s=768,c=e*.5+o,i=t-c,p=(a+c-i)/(s-1),l=Math.round(o*.5/p),d=2*l+1,f=s+2*l,x=new Float64Array(f),v=new Float64Array(f);for(let u=0;u<f;u++){const _=i+(u-l)*p,[g,k]=n.at(_),[y,P]=n.normal(_),h=n.off(_);x[u]=g+h*y,v[u]=k+h*P}const A=new Float64Array(s),F=new Float64Array(s),M=new Float64Array(s),b=new Float64Array(s);let T=0,R=0;for(let u=0;u<d;u++)T+=x[u],R+=v[u];for(let u=0;u<s;u++){A[u]=i+u*p,F[u]=T/d,M[u]=R/d,u+d<f&&(T+=x[u+d]-x[u],R+=v[u+d]-v[u]);const[_,g]=n.at(A[u]),[k,y]=n.normal(A[u]),P=.8*n.off(A[u]),h=(F[u]-_)*k+(M[u]-g)*y;h<P&&(F[u]+=(P-h)*k,M[u]+=(P-h)*y)}for(let u=1;u<s;u++)b[u]=b[u-1]+Math.max(.001,Math.hypot(F[u]-F[u-1],M[u]-M[u-1]));const E=u=>{const _=le((u-i)/p,0,s-1),g=Math.min(s-2,Math.floor(_));return b[g]+(b[g+1]-b[g])*(_-g)},C=E(t),w=E(a)-C;for(let u=0;u<s;u++)b[u]-=C;return Dt={s:A,y:F,z:M,len:b,run:w,key:r},Dt},wa=(e,t,a)=>{const{len:n,s:o,y:r,z:s}=e,c=n.length;if(t<=n[0]){const l=o[0]+(t-n[0]);return[-l,a,l]}if(t>=n[c-1]){const l=o[c-1]+(t-n[c-1]);return[r[c-1]-(t-n[c-1]),s[c-1],l]}let i=0,m=c-1;for(;m-i>1;){const l=i+m>>1;n[l]<=t?i=l:m=l}const p=(t-n[i])/Math.max(1e-6,n[m]-n[i]);return[r[i]+(r[m]-r[i])*p,s[i]+(s[m]-s[i])*p,o[i]+(o[m]-o[i])*p]},Ta=(e,t)=>{const{s:a,len:n}=e,o=a.length;if(t<=a[0])return n[0]+(t-a[0]);if(t>=a[o-1])return n[o-1]+(t-a[o-1]);const r=a[1]-a[0],s=le((t-a[0])/r,0,o-1),c=Math.min(o-2,Math.floor(s));return n[c]+(n[c+1]-n[c])*(s-c)};let va=null;const Fr=window.matchMedia("(pointer: coarse)"),ue=256,ql=[.5,.6,.7,.8,.9,.96],Vl=[.58,.74,.9],Wl=(e,t,a,n,o)=>{const r=`${e.key}|${a}|${n(0)}|${n(t.sEnd)}|${o}`;if(va?.key===r)return va;const{f:s,sEnd:c}=t,i=new Float64Array(ue+1),m=Math.max(1,c/(ue*2));for(let d=0;d<=ue;d++){const f=c*d/ue,x=Math.max(0,f-m),v=Math.min(c,f+m),[A,F]=wa(e,Ta(e,f),s),[M,b]=wa(e,Ta(e,x),s),[T,R]=wa(e,Ta(e,v),s),E=[];for(const u of o?ql:Vl){const _=Wn(t,A,F,a*(n(f)-u));if(!_)continue;const[g,k]=t.at(_.s),y=(P,h,D)=>a*n(D)-s*(g-P)/Math.max(s*.02,h-k);E.push(Math.abs(y(T,R,v)-y(M,b,x))/Math.max(1,v-x))}E.sort((u,_)=>u-_);const C=Math.max(1,s/Math.max(1,t.off(f))),w=o?E[E.length-1]:E[Math.floor(E.length/2)];i[d]=le((w??1)/(o?1:C),.18,o?16:4)}const p=new Float64Array(i.length);for(let d=0;d<i.length;d++){let f=0,x=0;for(let v=-5;v<=5;v++){const A=6-Math.abs(v);f+=i[le(d+v,0,ue)]*A,x+=A}p[d]=f/x}const l=Zs(p);if(o){const d=l.slice();for(let f=0;f<=ue;f++){const x=Ks(f/ue)*ue,v=Math.min(ue-1,Math.floor(x));l[f]=d[v]+(d[v+1]-d[v])*(x-v)}}return va={key:r,q:l},va},Yl=(e,t)=>{const a=$(t)*ue,n=Math.min(ue-1,Math.floor(a));return e.q[n]+(e.q[n+1]-e.q[n])*(a-n)},Zl=(e,t)=>{const{q:a}=e;if(t<=0)return 0;if(t>=1){let r=0;for(;r<ue&&a[r]<1-1e-6;)r++;return r/ue}let n=0,o=ue;for(;o-n>1;){const r=n+o>>1;a[r]<=t?n=r:o=r}return(n+(t-a[n])/Math.max(1e-9,a[o]-a[n]))/ue};let te=null;const Au=e=>{if(!te)return null;const{pro:t,eyeY:a,eyeZ:n,ppy:o,vh:r}=te;return Wn(t,a,n,o-e*r)},Wn=(e,t,a,n)=>{const{f:o,kappa:r,sF:s,R1:c,R2:i,th:m,Lr:p,P1:l,C1:d,C2:f,P3:x,Sx:v,S1:A,S2:F,S3:M,phx:b}=e,T=Math.sin(m),R=Math.cos(m),E=n,C=-o,w=E*E+C*C;let u=1e6,_=0;const g=(k,y)=>{k>1e-4&&k<u&&(u=k,_=y)};{const k=t+s,y=a,P=r*w,h=2*(r*(k*E+y*C)+C),D=r*(k*k+y*y)+2*y,S=h*h-4*P*D;if(S>=0){const L=-h+Math.sqrt(S);if(L>1e-9){const I=2*D/L,U=k+I*E,z=y+I*C,ne=r>1e-12?Math.atan2(-U*r,1+z*r)/r:-U,Y=s+ne;Y<=v+1e-4&&g(I,Y)}}}{const k=t-d[0],y=a-d[1],P=2*(k*E+y*C),h=k*k+y*y-c*c,D=P*P-4*w*h;if(D>=0){const S=Math.sqrt(D);for(const L of[(-P-S)/(2*w),(-P+S)/(2*w)]){const I=k+L*E,U=y+L*C,z=Math.atan2(-I,-U);z>=-b-1e-4&&z<=m+1e-4&&g(L,v+c*(z+b))}}}{const k=E*T+C*R;if(Math.abs(k)>1e-6){const y=((l[0]-t)*T+(l[1]-a)*R)/k,P=t+y*E-l[0],h=a+y*C-l[1],D=-P*R+h*T;D>=0&&D<=p&&g(y,A+D)}}{const k=t-f[0],y=a-f[1],P=2*(k*E+y*C),h=k*k+y*y-i*i,D=P*P-4*w*h;if(D>=0){const S=Math.sqrt(D);for(const L of[(-P-S)/(2*w),(-P+S)/(2*w)]){const I=k+L*E,U=y+L*C;if(I>=0&&U>=0){const z=Math.atan2(I,U);z<=m+1e-4&&g(L,F+i*(m-z))}}}}{const k=(a-x[1])/Math.max(1e-6,-C),y=t+k*E;y<=x[0]&&g(k,M+(x[0]-y))}return u<1e5?{k:u,s:_}:null},Pr=(e,t)=>{const a=X.values,n=$(B.align),o=e+n*t,r=Math.max(1,a.ruleMinor*t);return{axis:o,ppx:o+(1-2*n)*le(a.camAxis,.02,.98)*r}};function Su(e,t,a,n,o,r){const s=X.values,c={top:o.top,height:o.bottom-o.top},i=kl(e,t,c),m=wr(i.enter,t),p=kr(i.reach),l=Math.max(1,Math.round(s.ruleDays)),d=l*Na,f=(xr*l%d+d)%d,x=vt(),v=Ga(),A=Math.max(le(s.camLine,.05,.95),(n.mountTop??0)/Math.max(1,t)+.08),F=le(s.camLine,.05,.95),M=$(B.align),{axis:b,ppx:T}=Pr(n.left,n.width),R=b+m.dx,E=Math.max(1,s.ruleMajor*n.width),C=R-M*E,w=R+(1-M)*E,u=le(s.roadOver,.02,2),_=C*a/Math.max(1,a+C-w),g=w-C>=a?le(T,.05*a,.95*a):le(_,.05*a,.95*a),k=Math.max(.001,Math.min((g-C)/Math.max(1,g),(w-g)/Math.max(1,a-g))),y=Math.max(k/((1+u)*1.04),9*v/t),P=1,h=P*v,D=0,S=Vn(t,x),L=Fn(t,x,h,A,F,s,y,S,0,0),I=_e=>A+(F-A)*q($((_e-L.S2)/Math.max(1,L.sTouch-L.S2))),{f:U,S1:z,S2:ne,S3:Y}=L,ce=ae[ae.length-1],Te=0,Ve=L.sEnd,Be=Hl(t,Te,Ve,L,Math.max(0,s.camSmooth)*t),ve=Math.max(1,Ve-Te),We=Wl(Be,L,t,_e=>B.line+(I(_e)-B.line)*q($((_e-S)/Math.max(1,z-S))),B.centred||!!Fr?.matches),ot=ve*Yl(We,r),[me,gt,O]=wa(Be,Ta(Be,ot),U),j=Math.max(1,s.drumUnroll*x),rt=wl(O,t,x),Jn=Math.min(Math.max(0,O),j),yt=q($(O/j)),ta=m.ppx+(T-m.ppx)*yt,Xr=m.ppy+(t*B.line-m.ppy)*yt,eo=Ne(t).f,bt=eo+(U-eo)*yt,aa=gt+(bt-U),fe=rt>0||yt<1?Fn(t,x,h,A,F,s,y,S,rt,Jn,bt):L,[Br,Gr]=fe.at(O),to=bt/Math.max(1,Math.hypot(me-Br,aa-Gr)),Ha=me+m.eyeY*(1-yt),qa=i.day+O/x,Hr=O/x,na=qa*l,Mt=$((O-S)/Math.max(1,z-S)),qr=q($(Mt*2.5)),Vr=q($((O-ne)/Math.max(1,Y-ne))),ao=ta+(g-ta)*Vr,Wr=t*B.line,oa=Xr+(t*I(O)-Wr)*q(Mt),Yr=oa/t,no=.8*j,Zr=q($((O-no)/Math.max(1,S-no))),oo=[...Mr(t),Zr],wt=_e=>Wn(fe,Ha,aa,oa-_e),Kr=wt(t),Qr=1/k,jr=1/y,Jr=O+(1-B.line)*t<=S,Tt=_e=>((_e?.s??O)-O)/v,Va=wt(0),Et=Tt(Kr),ro=Va===null||Va.s<=0,so=ro?Et-t/(v*Math.max(.001,to)):Tt(Va),es=ro?1e6:Math.max(.05,Et-so),io=Math.max(0,S-(1-B.line)*t),ts=S+.6*(z-S),ra=q($((O-io)/Math.max(1,ts-io))),sa=s.ruleMinor*1.5,Ye=[sa,sa*2,sa*3],Wa=t*(B.line+(1-B.line)*ra),lo=wt(Wa),as=lo?Tt(lo):Et,Ya=Math.max(0,Wa-6),Za=Math.min(t,Wa+6),co=wt(Ya),uo=wt(Za),ns=co&&uo&&Za>Ya?Math.abs(Tt(uo)-Tt(co))/(Za-Ya):1/Math.max(.5,v),Ka=Math.max(.05,s.cursorSpan*p),os=Math.max(.05,Math.min(Ka*Math.max(.05,s.trailSpan),Math.max(.05,s.trailFrame)*es)),st=_e=>Math.max(.004,_e/(2*Math.max(.5,v))),Qa=Math.max(...Ye),mo=na+(fe.sShut-O)/v,fo=Math.max(1,s.shutSpan)*(fe.shutUnit/v),ia=$((na+Et-mo)/(fo+fe.frameEnd/v)),po=q($((ia-s.lightFrom)/Math.max(.05,s.lightPart/6))),ja=Math.max(s.blowout*q(ia),q($((ia-.68)/.3))),ho=Math.max(.05,Ka*v*ns),rs=[na+as,ho+(os-ho)*ra,ra,0],ss=[mo,fo,0,P*Math.max(.05,s.ruleFill)],is=q($((O-(S+.35*(z-S)))/Math.max(1,.65*(z-S)))),ls=[P,D,is,sa*2],Ja=1+(Math.max(.05,s.trailThick)-1)*ra,en=p,it=_e=>Zl(We,(_e-Te)/ve),cs=q($((O-S)/Math.max(1,.5*(z-S))));te={pro:fe,f:bt,eyeY:Ha,eyeZ:aa,ppx:ao,ppy:oa,vh:t,sCam:O,roadDay:qa,deep:oo,leave:cs};const xo=fe.at(fe.Sx),us=Math.min(ta,R-M*n.width*Qa),ds=Math.max(ta,R+(1-M)*n.width*Qa);return{rule:[v,na,Ka,$(s.cursorInk)],thick:[st(s.ruleThick),st(s.ruleThickDay),st(s.ruleThickStep),Math.max(0,s.ruleFill)],hot:[st(s.ruleThick+(s.cursorThick-s.ruleThick)*en)*Ja,st(s.ruleThickDay+(s.cursorThickDay-s.ruleThickDay)*en)*Ja,st(s.ruleThickStep+(s.cursorThickStep-s.ruleThickStep)*en)*Ja,(1-qr)*(1-po)*p],rule2:[Ye[0],Ye[1],Ye[2],M],len2:[Ye[0],Ye[1],Ye[2],$(s.roadRank)],road2:[u,Math.max(.02,s.trailCap)/2,g*(1-y*(1+u)),g+(a-g)*y*(1+u)],trail:rs,shut:ss,slat:ls,drum:[rt,fe.phx,ce*l,Jn],set:[S,xo[0],xo[1],0],deep:oo,intro:m,cue:p,span:[us,ds],rank:[l,d,f,$(s.ruleGlow)],road:[Math.max(0,s.fogNear),Math.max(.1,s.fogFar),$(s.roadInk),q(Mt)],blind:[po,0,0,Math.max(0,s.ruleThick)+(Math.max(0,s.roadStroke)-Math.max(0,s.ruleThick))*q(Mt)],cam:[bt,Ha,aa,O],eye:[fe.R1,fe.th,fe.Lr,fe.R2],shade:[R,s.ruleFalloff,s.ruleDim,n.width],pp:[ao,oa],axis:R,align:M,reach:n.width*Qa,flat:Jr,zoom:to,cover:Qr,near:jr,line:Yr,day:qa,travel:Hr,blow:ja,closeSpan:1-it(Y),radius:s.radiusMax+(.78-s.radiusMax)*ja,white:s.white-(s.white-s.black-.02)*ja,depth:Mt,closing:ia,phases:[it(S),it(z),it(ne),it(Y),it(L.sShut)],every:P,ticks:[Et,so,(fe.sTouch-O)/v],beat:i}}const Dr=["hero","deep","paper","linen"],_a=(e,t)=>Array.from({length:re},(a,n)=>({key:`${e}${n+1}`,label:`Teinte ${n+1}`,group:`Teintes · ${t}`,kind:"colour",css:`--ground-${e}-${n+1}`,slot:n+1})),Ce=Jt("ground","Fond animé",{colourCount:2,distortion:.4,swirl:.6,grainMixer:.1,grainOverlay:.1,grainScale:1e3,phase:41.5,speed:1,scale:1,rotation:90,offsetX:0,offsetY:0,travel:.06,travelLock:!1,grainTravel:1,scrollDrift:0,tile:1.5,anchor:.5,span1:.9,lead1:.25,span2:.25,lead2:-.125,quality:1,maxDpr:2,stillness:12,wake:!0,wakeFlowRes:128,wakeDriftRes:256,wakeRadius:.05,wakeGrow:.6,wakeForce:.8,wakeGlide:1200,wakeCurl:6,wakePressure:12,wakeLinger:900,wakeFade:1400,wakeDisplace:.35,wakeCap:.12,wakeLight:0,wakeTintSlot:1,wakeTint:0,wakeGlint:0,wakeGlintRef:1.5,wakeSpeedRef:1500,hero1:"",hero2:"",hero3:"",hero4:"",deep1:"",deep2:"",deep3:"",deep4:"",paper1:"",paper2:"",paper3:"",paper4:"",linen1:"",linen2:"",linen3:"",linen4:""},[{key:"colourCount",label:"Nombre de teintes",group:"Rendu",kind:"range",min:1,max:re,step:1},{key:"distortion",label:"Distorsion",group:"Rendu",kind:"range",min:0,max:1,step:.01},{key:"swirl",label:"Tourbillon",group:"Rendu",kind:"range",min:0,max:1,step:.01},{key:"grainMixer",label:"Grain · mélange",group:"Rendu",kind:"range",min:0,max:1,step:.01},{key:"grainOverlay",label:"Grain · surimpression",group:"Rendu",kind:"range",min:0,max:1,step:.01},{key:"grainScale",label:"Grain · finesse",group:"Rendu",kind:"range",min:100,max:3e3,step:10},{key:"phase",label:"Image d’ouverture",group:"Rendu",kind:"range",min:0,max:120,step:.5},{key:"speed",label:"Vitesse",group:"Rendu",kind:"range",min:0,max:3,step:.01},{key:"scale",label:"Échelle",group:"Rendu",kind:"range",min:.2,max:4,step:.01},{key:"rotation",label:"Rotation",group:"Rendu",kind:"range",min:0,max:360,step:1,unit:"°"},{key:"offsetX",label:"Décalage X",group:"Rendu",kind:"range",min:-1,max:1,step:.01},{key:"offsetY",label:"Décalage Y",group:"Rendu",kind:"range",min:-1,max:1,step:.01},{key:"travelLock",label:"Composition solidaire",group:"Défilement",kind:"toggle"},{key:"travel",label:"Parallaxe · composition",group:"Défilement",kind:"range",min:0,max:1,step:.005},{key:"grainTravel",label:"Parallaxe · grain",group:"Défilement",kind:"range",min:0,max:1.5,step:.01},{key:"scrollDrift",label:"Évolution au scroll",group:"Défilement",kind:"range",min:0,max:6,step:.05},{key:"tile",label:"Période du champ",group:"Défilement",kind:"range",min:0,max:4,step:.05},..._a("hero","hero"),..._a("deep","sombre"),..._a("paper","blanc"),..._a("linen","lin"),{key:"anchor",label:"Ligne de lecture",group:"Progression",kind:"range",min:0,max:1,step:.01},{key:"span1",label:"Hero → sombre · durée",group:"Progression",kind:"range",min:.1,max:3,step:.05},{key:"lead1",label:"Hero → sombre · avance",group:"Progression",kind:"range",min:-1.5,max:1.5,step:.05},{key:"span2",label:"Sombre → blanc · durée",group:"Progression",kind:"range",min:.1,max:3,step:.05},{key:"lead2",label:"Sombre → blanc · avance",group:"Progression",kind:"range",min:-1.5,max:1.5,step:.05},{key:"quality",label:"Résolution",group:"Qualité",kind:"range",min:.4,max:2,step:.05},{key:"maxDpr",label:"Densité max",group:"Qualité",kind:"range",min:1,max:3,step:.5},{key:"stillness",label:"Seuil d’immobilité",group:"Qualité",kind:"range",min:0,max:64,step:1},{key:"wake",label:"Actif",group:"Sillage",kind:"toggle"},{key:"wakeNote",label:"Sillage résolu",group:"Sillage",kind:"note",text:()=>Kl()},{key:"wakeRadius",label:"Pinceau",group:"Sillage",kind:"range",min:.01,max:.25,step:.005,unit:" × hauteur"},{key:"wakeGrow",label:"Pinceau · à la vitesse",group:"Sillage",kind:"range",min:0,max:3,step:.05,unit:" ×"},{key:"wakeForce",label:"Force",group:"Sillage",kind:"range",min:0,max:3,step:.05,unit:" × main"},{key:"wakeSpeedRef",label:"Vitesse de référence",group:"Sillage",kind:"range",min:200,max:4e3,step:50,unit:" px/s"},{key:"wakeGlide",label:"Flux · inertie",group:"Sillage",kind:"range",min:100,max:4e3,step:50,unit:" ms"},{key:"wakeCurl",label:"Flux · tourbillon",group:"Sillage",kind:"range",min:0,max:40,step:.5},{key:"wakePressure",label:"Flux · pression",group:"Sillage",kind:"range",min:1,max:40,step:1,unit:" passes"},{key:"wakeDisplace",label:"Couleurs · entraînement",group:"Sillage",kind:"range",min:0,max:1,step:.005,unit:" × flux"},{key:"wakeLinger",label:"Couleurs · persistance",group:"Sillage",kind:"range",min:100,max:4e3,step:50,unit:" ms"},{key:"wakeCap",label:"Couleurs · plafond",group:"Sillage",kind:"range",min:.01,max:.4,step:.005,unit:" × hauteur"},{key:"wakeLight",label:"Lumière",group:"Sillage",kind:"range",min:-1,max:1,step:.01},{key:"wakeFade",label:"Lumière · persistance",group:"Sillage",kind:"range",min:100,max:4e3,step:50,unit:" ms"},{key:"wakeTintSlot",label:"Teinte",group:"Sillage",kind:"select",options:[{value:0,label:"Aucune"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"}]},{key:"wakeTint",label:"Teinte · quantité",group:"Sillage",kind:"range",min:0,max:1,step:.01},{key:"wakeGlint",label:"Éclat du flux",group:"Sillage",kind:"range",min:0,max:.3,step:.005},{key:"wakeGlintRef",label:"Éclat · vitesse pleine",group:"Sillage",kind:"range",min:.1,max:4,step:.05,unit:" haut./s"},{key:"wakeFlowRes",label:"Grille du flux",group:"Sillage",kind:"range",min:32,max:256,step:16,unit:" texels"},{key:"wakeDriftRes",label:"Grille des couleurs",group:"Sillage",kind:"range",min:64,max:512,step:32,unit:" texels"}]),ke=xt({ok:!1,alive:!1,flow:[0,0],drift:[0,0],speed:0,energy:[0,0,0],probe:[0,0,0],steps:0,splats:0,carry:0,off:""}),zo=(e,t=2)=>Math.round(e*10**t)/10**t,Kl=()=>ke.ok?ke.off?`arrêté — ${ke.off}`:`${ke.alive?"vivant":"endormi"} · flux ${ke.flow[0]} × ${ke.flow[1]} · couleurs ${ke.drift[0]} × ${ke.drift[1]} · main ${zo(ke.speed,0)} px/s · couleurs portées ${zo(ke.carry,0)} px au plus · ${ke.steps} image${ke.steps>1?"s":""} depuis le réveil`:"pas de sillage : ce contexte n’a pas d’attache flottante",ct=xt({live:!1,fps:0,width:0,height:0,scale:1,stage:"—"}),Fu={ms:0,frames:0,degrade:0,scale:1,y:0};Ce.readout=()=>ct.live?`${ct.fps?`${ct.fps} fps`:"immobile"} · ${ct.width}×${ct.height} · ${ct.stage}`:"hors ligne";const Lr=(e,t)=>{if(e.style.color="",e.style.color=t,!e.style.color)return null;const a=getComputedStyle(e).color.match(/-?[\d.]+/g);return!a||a.length<3?null:"#"+a.slice(0,3).map(n=>Math.max(0,Math.min(255,Math.round(Number(n)))).toString(16).padStart(2,"0")).join("")};function Pu(){const e=getComputedStyle(document.documentElement),t=document.createElement("span");t.style.display="none",document.body.appendChild(t);const a={};try{for(const n of Dr)for(let o=1;o<=re;o++){const r=Lr(t,e.getPropertyValue(`--ground-${n}-${o}`).trim());if(!r)return!1;a[`${n}${o}`]=r}}finally{t.remove()}return Ce.seed(a),!0}function Du(){const e=[],t=Cn();for(const a of document.querySelectorAll("[data-ground]")){const n=a.dataset.ground;if(!Dr.includes(n))continue;const o=a.getBoundingClientRect(),r=o.top+t,s=o.bottom+t,c=e[e.length-1];c&&c.stage===n?c.bottom=Math.max(c.bottom,s):e.push({stage:n,top:r,bottom:s})}return e}const Xo=new Map,Ql=e=>{let t=Xo.get(e);if(!t){const a=parseInt(e.slice(1),16);t=[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255],Xo.set(e,t)}return t},Ke=new Float32Array(re*4),Bo=new Float32Array(re*4),jl=(e,t)=>Pn(e,t),Pn=(e,t)=>{const a=Ce.values;for(let n=0;n<re;n++){const[o,r,s]=Ql(a[`${e}${n+1}`]||"#000000");t[n*4]=o,t[n*4+1]=r,t[n*4+2]=s,t[n*4+3]=1}},Jl=e=>e*e*(3-2*e);function ec(e,t,a){const n=Ce.values,o=a[e]?.stage==="deep",r=(o?n.span2:n.span1)*t,s=(o?n.lead2:n.lead1)*t;return{centre:a[e].bottom+s,half:Math.max(1,r)/2}}function Lu(e){for(let t=e.length-2;t>=0;t--)if(e[t].stage==="deep")return t;return e.length-2}const tc=(e,t)=>e+Ce.values.anchor*t;function ac(e,t,a){if(!a.length)return{index:0,t:0};const n=tc(e,t);for(let o=0;o<a.length-1;o++){const{centre:r,half:s}=ec(o,t,a);if(n<=r-s)return{index:o,t:0};if(!(n>=r+s))return{index:o,t:Jl((n-r+s)/(2*s))}}return{index:a.length-1,t:1}}function Cu(e,t,a,n){if(!a.length)return!1;const{index:o,t:r}=ac(e,t,a);if(Pn(a[o].stage,Ke),r>0&&o+1<a.length){Pn(a[o+1].stage,Bo);for(let c=0;c<Ke.length;c++)Ke[c]+=(Bo[c]-Ke[c])*r}let s=!1;for(let c=0;c<Ke.length;c++)n[c]!==Ke[c]&&(n[c]=Ke[c],s=!0);return s}function Nu(e,t,a){const n=Ce.values,o=t||1,r=(n.travelLock?n.grainTravel:n.travel)*e/o;let s=n.grainTravel*e/o;const c=gs*n.scale/Math.max(1,n.grainScale);c>0&&(s-=Math.floor(s/c)*c);const i=a[0]!==r||a[1]!==s;return a[0]=r,a[1]=s,i}function Iu(e,t){let a=0;for(let n=0;n<3;n++){let o=1,r=0;for(let s=0;s<t&&s<re;s++){const c=e[s*4+n];c<o&&(o=c),c>r&&(r=c)}a=Math.max(a,r-o)}return a*255}function Uu(e,t,a){const n=e+Ce.values.anchor*t;for(const o of a)if(n<o.bottom)return o.stage;return a[a.length-1]?.stage??"—"}const Se=256,Yn=9,Cr=(e,t=1)=>Math.min(Yn-1,Math.max(0,Math.ceil(Math.log2(Se*t/Math.max(1,e))))),Zn=8.64,nc=Zn/4,Nr=20,Ea=24,oc=Nr*Ea;function rc(e){const t=[],a=e.createProgram(),n=e.createTexture(),o=e.createFramebuffer(),r=e.createVertexArray(),s=()=>{t.forEach(p=>e.deleteShader(p)),e.deleteProgram(a),e.deleteTexture(n),e.deleteFramebuffer(o),e.deleteVertexArray(r)};if(!a||!n||!o||!r)return s(),null;for(const[p,l]of[[e.VERTEX_SHADER,`#version 300 es
precision highp float;
uniform float u_turn;
out float v_light;
out float v_size;
void main() {
float row = floor(float(gl_VertexID) / ${Ea.toFixed(1)});
float col = mod(float(gl_VertexID), ${Ea.toFixed(1)});
float latitude = (row + .5) / ${Nr.toFixed(1)} * 3.14159265359;
float y = cos(latitude), r = sin(latitude);
float a = (col + .5 * mod(row, 2.)) / ${Ea.toFixed(1)} * 6.28318530718;
vec3 p = vec3(r * cos(a), y, r * sin(a));
const float tilt = .36;
p.yz = mat2(cos(tilt), -sin(tilt), sin(tilt), cos(tilt)) * p.yz;
float material = .20 + .80 * pow(.5 + .5 * p.z, 2.);
float angle = -u_turn * 6.28318530718;
float c = cos(angle), s = sin(angle);
p.xz = mat2(c, -s, s, c) * p.xz;
p.yz = mat2(cos(tilt), sin(tilt), -sin(tilt), cos(tilt)) * p.yz;
const float camera = 2.4;
float perspective = sqrt(camera * camera - 1.) / (camera - p.z);
gl_Position = vec4(p.xy * .70 * perspective, 0., 1.);
v_size = ${Se.toFixed(1)} * .70 * .032 * perspective;
gl_PointSize = v_size + 2.;
v_light = material * (.65 + .35 * smoothstep(-1., 1., p.z));
}`],[e.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
in float v_light;
in float v_size;
out vec4 colour;
void main() {
float distance = length(gl_PointCoord - .5) * (v_size + 2.);
float coverage = 1. - smoothstep(v_size * .5 - .5, v_size * .5 + .5, distance);
colour = vec4(v_light * coverage, 0., 0., 1.);
}`]]){const d=e.createShader(p);if(!d||(t.push(d),e.shaderSource(d,l),e.compileShader(d),!e.getShaderParameter(d,e.COMPILE_STATUS)))return s(),null;e.attachShader(a,d)}if(e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))return s(),null;const c=e.getUniformLocation(a,"u_turn");if(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n),e.texStorage2D(e.TEXTURE_2D,Yn,e.R8,Se,Se),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)return s(),null;let i=-1,m=-1;return{texture:n,draw(p,l=48){const d=(p/Zn%1+1)%1,f=Cr(l);d===i&&f===m||(i=d,e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,o),e.viewport(0,0,Se,Se),e.disable(e.SCISSOR_TEST),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendEquation(e.MAX),e.blendFunc(e.ONE,e.ONE),e.useProgram(a),e.bindVertexArray(r),e.uniform1f(c,d),e.drawArrays(e.POINTS,0,oc),e.disable(e.BLEND),e.blendEquation(e.FUNC_ADD),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,n),f!==m&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAX_LEVEL,f),m=f,e.generateMipmap(e.TEXTURE_2D),e.activeTexture(e.TEXTURE0))},dispose:s}}const Go=[[[182,75],[-6,-34],[0,0]],[[178,75],[0,0],[-5,-28]],[[120,29],[34,0],[-34,0]],[[64,72],[0,-27],[0,27]],[[111,113],[-33,-7],[40,9]],[[189,164],[0,-37],[0,36]],[[123,216],[43,0],[-45,0]],[[54,157],[3,39],[0,0]],[[58,157],[0,0],[3,36]],[[123,212],[-43,0],[39,0]],[[184,165],[0,32],[0,-33]],[[110,118],[39,9],[-35,-8]],[[60,72],[0,30],[0,-29]],[[120,25],[-35,0],[36,0]]],Ho=[[[202,87],[-7,-42],[0,0]],[[140,87],[0,0],[-1,-14]],[[120,67],[13,0],[-11,0]],[[103,80],[0,-9],[0,9]],[[124,93],[-15,-3],[48,8]],[[206,151],[0,-36],[0,42]],[[123,216],[51,0],[-52,0]],[[35,152],[3,44],[0,0]],[[97,152],[0,0],[0,17]],[[123,175],[-18,0],[13,0]],[[143,161],[0,9],[0,-9]],[[98,141],[25,5],[-38,-8]],[[42,85],[0,34],[0,-36]],[[120,25],[-46,0],[49,0]]],Qe=2.16,Ir=.42,sc=-.16,ic=.1,lc=e=>(e%Qe+Qe)%Qe/Qe,cc=.4,uc=()=>cc/Qe,dc=Ir*Qe,mc=.86,qo=3.63,fc=41;function pc(e){const t=240/Math.max(1,e)*1.16;return Math.min(.5,Math.max(0,(t-qo)/(fc-qo)))}function Vo(e,t,a){const n=e[t],o=e[(t+1)%e.length],r=1-a;return[0,1].map(s=>r*r*r*n[0][s]+3*r*r*a*(n[0][s]+n[2][s])+3*r*a*a*(o[0][s]+o[1][s])+a*a*a*o[0][s])}function hc(){const e=[];for(let r=0;r<6;r++)for(let s=0;s<24;s++){const c=(p,l)=>[Vo(p,1+r,l/24),Vo(p,13-r,1-l/24)],i=[...c(Go,s),...c(Go,s+1)],m=[...c(Ho,s),...c(Ho,s+1)];for(const p of[0,1,2,2,1,3])e.push({thin:i[p],heavy:m[p]})}const t=({thin:r,heavy:s})=>(r[1]+s[1])*.5,a=Math.max(...e.map(t)),n=Math.min(...e.map(t)),o=[];for(const r of e)o.push(...r.thin,...r.heavy,(a-t(r))/(a-n));return new Float32Array(o)}function xc(e){const t=[];let a=null,n=null,o=null,r=null,s=null;const c=()=>{t.forEach(d=>e.deleteShader(d)),e.deleteProgram(a),e.deleteBuffer(n),e.deleteVertexArray(o),e.deleteTexture(r),e.deleteFramebuffer(s)};for(const[d,f]of[[e.VERTEX_SHADER,`#version 300 es
layout(location=0) in vec2 a_thin;
layout(location=1) in vec2 a_heavy;
layout(location=2) in float a_lead;
uniform vec4 u_carrier;
const float RISE = ${Ir.toFixed(6)};
const float EASE_UP = ${sc.toFixed(6)};
const float EASE_DOWN = ${ic.toFixed(6)};
float carrier(float turn){
float p = fract(turn);
bool rising = p < RISE;
float x = rising ? p / RISE : (1. - p) / (1. - RISE);
float q = rising ? EASE_UP : EASE_DOWN;
float s = x + q * sin(3.14159265359 * x);
return 0.5 - 0.5 * cos(3.14159265359 * s);
}
void main(){
float c = carrier(u_carrier.x - u_carrier.y * (a_lead - 0.5));
float w = u_carrier.z + (u_carrier.w - u_carrier.z) * c;
vec2 p = mix(a_thin, a_heavy, w) / 240.;
gl_Position = vec4(p * 2. - 1., 0., 1.);
}`],[e.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 colour;
void main(){colour=vec4(1.,0.,0.,1.);}`]]){const x=e.createShader(d);if(!x)return c(),null;if(t.push(x),e.shaderSource(x,f),e.compileShader(x),!e.getShaderParameter(x,e.COMPILE_STATUS))return console.error("[option-letter]",e.getShaderInfoLog(x)),c(),null}if(a=e.createProgram(),!a||(t.forEach(d=>e.attachShader(a,d)),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)))return c(),null;const i=e.getUniformLocation(a,"u_carrier"),m=hc();if(o=e.createVertexArray(),n=e.createBuffer(),e.bindVertexArray(o),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),[2,2,1].forEach((d,f)=>{e.enableVertexAttribArray(f),e.vertexAttribPointer(f,d,e.FLOAT,!1,20,f*8)}),r=e.createTexture(),s=e.createFramebuffer(),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,r),e.texStorage2D(e.TEXTURE_2D,Yn,e.R8,Se,Se),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)return c(),null;let p="",l=-1;return{texture:r,draw(d,f,x,v,A=48){const F=Cr(A,1.1371428571428572),M=`${d.toFixed(5)}|${f.toFixed(4)}|${x.toFixed(4)}|${v.toFixed(4)}|${F}`;M!==p&&(p=M,e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,s),e.viewport(0,0,Se,Se),e.disable(e.BLEND),e.disable(e.SCISSOR_TEST),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(a),e.bindVertexArray(o),e.uniform4f(i,d,v,f,x),e.drawArrays(e.TRIANGLES,0,m.length/5),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,r),F!==l&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAX_LEVEL,F),l=F,e.generateMipmap(e.TEXTURE_2D),e.activeTexture(e.TEXTURE0))},dispose:c}}const Wo={letter:Qe,globe:Zn,field:or},Me=new Set,Yo=new Float32Array(re*4),vc=[0,0];let at=!1,be=null,Vt=null,Wt=null,Yt=null,Zt=null,Zo=0,J=1,Ur=0,se=!1,Ua=null,mn=0,fn=0,ie=()=>{};function Ou(e){ie=e}const ka=e=>{for(const t of Me)if(t.host===e||t.canvas===e)return t;return null},_c=()=>{at||(at=!0,se=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ua=window.matchMedia("(prefers-reduced-motion: reduce)"),Ua.addEventListener("change",Or),Vt=new IntersectionObserver(e=>{for(const t of e){const a=ka(t.target);a&&(a.visible=t.isIntersecting,t.isIntersecting&&(a.dirty=!0))}ie()},{rootMargin:"50% 0px"}),Wt=new IntersectionObserver(e=>{for(const t of e){const a=ka(t.target);a&&(a.inFrame=t.isIntersecting)}ie()}),Yt=new IntersectionObserver(e=>{for(const t of e){const a=ka(t.target);a&&(a.inBand=t.isIntersecting)}ie()},{rootMargin:"-6% 0px -10% 0px"}),Zt=new ResizeObserver(e=>{const t=br();for(const a of e){const n=ka(a.target);n&&Kn(n)}if(t!==Zo){Zo=t;for(const a of Me)a.dirty=!0}ie()}))},Kn=e=>{const t=e.host.clientWidth,a=e.host.clientHeight;if(!t||!a)return!1;J=Math.max(.6,Math.min(window.devicePixelRatio||1,X.values.maxDpr)*X.values.quality);const n=Math.max(1,Math.round(t*J)),o=Math.max(1,Math.round(a*J));return n===e.w&&o===e.h&&t===e.cssW&&a===e.cssH||(e.w=n,e.h=o,e.cssW=t,e.cssH=a,e.canvas.width=n,e.canvas.height=o,e.dirty=!0),!0},kc=e=>{const t=e.canvas.getBoundingClientRect();e.vx=t.left*J,e.vy=t.top*J},gc={alpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!0,powerPreference:"low-power"},yc=e=>{e.globe=null,e.globeUnavailable=!1,e.letter=null,e.letterUnavailable=!1;for(const t of Me)t.rig===e&&(t.on=!1,t.dirty=!0,t.host.removeAttribute("data-halftone-on"),t.ctx?.clearRect(0,0,t.w,t.h))},bc=e=>{e.engine.rebuild();for(const t of Me)t.rig===e&&(t.dirty=!0);ie()},Ko=e=>{const t=e.getContext("webgl2",gc);if(!t)return null;const a={gl:t,engine:Ws(t,"inline",{parallel:!0,sources:["chart","dart","option"]}),mesh:null,letter:null,letterUnavailable:!1,globe:null,globeUnavailable:!1};return e.addEventListener("webglcontextlost",n=>{n.preventDefault(),yc(a)}),e.addEventListener("webglcontextrestored",()=>bc(a)),a},Mc=e=>{if(nr)e.rig=Ko(e.canvas);else{if(!be){const t=document.createElement("canvas");t.width=8,t.height=8;const a=Ko(t);be=a?Object.assign(a,{host:t}):null}if(!be)return;e.ctx=e.canvas.getContext("2d"),e.rig=e.ctx?be:null}},Qo=e=>{e.globe?.dispose(),e.letter?.dispose(),e.engine.dispose(),e.mesh?.dispose(),e.gl.getExtension("WEBGL_lose_context")?.loseContext(),e.letter=null,e.globe=null},wc=e=>{const t=e.rig;e.rig=null,e.ctx=null,t&&(t!==be?Qo(t):[...Me].some(a=>a!==e&&a.rig===be)||(Qo(be),be=null))},Tc=(e,t)=>{if(!be)return;const a=be.host;(e>a.width||t>a.height)&&(a.width=Math.max(a.width,e),a.height=Math.max(a.height,t))},jo=(e,t)=>(e%t+t)%t,Ec=e=>1-Math.pow(1-e,3),Jo=(e,t,a,n)=>e+(t-e)*(1-Math.exp(-a*n));function $u(e,t=0){if(!at||!Me.size||document.hidden)return!1;const a=X.values;jl("hero",Yo);const n=mn?Math.max(0,Math.min((e-mn)/1e3,.064)):.016;mn=e,fn+=n;const o=1/Math.max(1,a.inlineFps),r=fn>=o;r&&(fn=0);let s=!1,c=0,i=!1;const m=Nl(e/1e3),p=!se&&a.chartStep>0;for(const l of Me){const d=l.rig;if(!d)continue;const f=d.engine,x=d.gl;if(x.isContextLost())continue;if(!f.poll()){f.pending&&(s=!0);continue}if(!l.visible&&l.on)continue;if(!l.w&&!Kn(l)){l.owed?.(),l.owed=void 0;continue}if(l.kind==="option"&&l.art==="letter"&&d.letterUnavailable){l.owed?.(),l.owed=void 0;continue}if(l.kind==="option"&&l.art==="globe"&&d.globeUnavailable){l.owed?.(),l.owed=void 0;continue}l.kind==="arrow"&&kc(l);const v=l.inFrame;let A=!1;if(l.kind==="option"&&!v&&!l.dirty)continue;const F=l.kind==="option"&&se?0:Jo(l.hover,l.wantHover?1:0,n,12),M=l.kind==="option"&&se?0:Jo(l.press,l.wantPress?1:0,n,26);if((Math.abs(F-l.hover)>.001||Math.abs(M-l.press)>.001)&&(l.dirty=!0),l.hover=F,l.press=M,l.kind==="option")!se&&v&&Wo[l.art]>0&&(l.clock=(l.clock+n)%Wo[l.art],l.meshClock+=n*Ce.values.speed,_o(l.pointerX,n,9),_o(l.pointerY,n,9),l.dirty=!0,s=!0);else if(l.kind==="chart"){const k=l.inBand;if(l.reveal<1&&k){l.seen+=n;const y=l.order*a.chartStagger,P=Math.max(0,l.seen-y)/Math.max(.05,a.chartReveal);l.reveal=se?1:Ec(Math.min(1,P)),l.dirty=!0,s=!0,A=!0}p&&v&&(l.dirty=!0,s=!0)}else!se&&a.arrowIdle>0&&a.arrowSpeed>0&&(l.dirty=!0,s=!0);(F>.001||M>.001)&&(l.kind!=="option"||!se&&v)&&(s=!0);const b=Math.min(l.cssW,l.cssH),T=Math.max(1.5,Fl(b)*J),R=l.kind!=="arrow",E=R?0:jo(l.vx,T),C=R?0:jo(l.vy+t*J*a.gridTravel,T),w=Math.abs(E-l.drewX)>.05||Math.abs(C-l.drewY)>.05;w&&(l.dirty=!0,s=!0);const u=l.kind==="chart"&&p&&v||l.kind==="option"||!l.on||A;if(!l.dirty||!(r||w||u)){l.dirty&&l.visible&&(s=!0);continue}if(!l.on){if(i){s=!0;continue}i=!0}const _=d===be?be.host:null;_&&Tc(l.w,l.h),x.viewport(0,0,_?_.width:l.w,_?_.height:l.h),x.disable(x.SCISSOR_TEST),x.clearColor(0,0,0,0),x.clear(x.COLOR_BUFFER_BIT),l.kind!=="option"&&(V.pitch[l.kind==="chart"?"chart":"dart"]=[b,T/J]);const g={source:l.kind==="option"?Ae.option:l.kind==="chart"?Ae.chart:Ae.dart,rect:{x:0,y:0,w:l.w,h:l.h},cell:T,phaseX:E,phaseY:C,time:e/1e3*a.arrowSpeed,tone:[a.black,a.white,a.gamma,a.dither],disc:[a.radiusMin,a.radiusMax,a.softness,a.edge*J],paint:[1,1,1,1],grid:[0,0,l.kind==="chart"?dn().ink:a.arrowOpacity,0],ink:[0,1],shade:[0,0,0,a.chartPad]};if(l.kind==="option"){const k=se?l.art==="globe"?nc:l.art==="field"?Rs:dc:l.clock,y=se?0:l.hover,P=se?0:l.press;if(l.art==="letter"){d.letter??=xc(x);const h=d.letter;if(!h){d.letterUnavailable=!0;continue}const D=b*J/T,S=pc(D),L=Math.min(1,mc+y*.06+P*.05);h.draw(lc(k),S,L,se?0:uc(),D),g.letter=h.texture}if(l.art==="globe"){if(d.globe??=rc(x),!d.globe){d.globeUnavailable=!0;continue}d.globe.draw(k,b*J/T),g.letter=d.globe.texture}g.art=[Es[l.art],k,y,P],g.artPointer=se?[0,0]:[l.pointerX.value,l.pointerY.value],g.grid=[Uo(T/J),a.gridInk,dn().ink,1],g.screen=[1,1,1,Sn()*J],g.sweep=[0,a.radiusMin,a.radiusMax,1]}else if(l.kind==="chart"){const k=dn();g.grid=[Uo(T/J),a.gridInk,k.ink,1],g.shade=[k.dim,0,0,a.chartPad],g.screen=[1,1,1,Sn()*J];const y=Ol(l.chart,m,l.reveal,l.w,l.h,T,e/1e3);g.chart=y.chart,g.geom=y.geom,g.rail=y.rail,g.sweep=y.sweep,g.bars=y.bars,g.inks=y.inks;const P=Ar(l.chart,l.w,l.h,T);V.charts[l.chart]={cell:T/J,pitch:P.pitch,cols:P.cols,rows:P.rows,rowPitch:P.rowPitch,wide:P.wide,high:P.high,tail:P.tail,down:P.down,x0:P.x0/J,y0:P.y0/J,pad:a.chartPad*Math.min(l.w,l.h)/J,fw:(l.w-2*a.chartPad*Math.min(l.w,l.h))/J,fh:(l.h-2*a.chartPad*Math.min(l.w,l.h))/J,travel:Sr(l.chart,m),cursor:y.chart[0]===2?Math.round(y.geom[2]):0,drew:m,beat:y.chart[0]===2?y.chart[2]:0,span:y.sweep[3],smear:y.sweep[0]}}else g.dart=[se?0:a.arrowIdle*(1-l.press*.5),a.arrowFreq,a.arrowPush*l.hover-a.arrowPush*.55*l.press,a.arrowBoost*l.hover+a.arrowPress*l.press];if(l.kind==="option"){if(d.mesh??=yn(x.canvas,{parallel:!0}),d.mesh&&!d.mesh.poll()){s=!0;continue}d.mesh?(d.mesh.resize(_?_.width:l.w,_?_.height:l.h,1),f.field(g),x.bindFramebuffer(x.FRAMEBUFFER,null),x.disable(x.BLEND),x.disable(x.SCISSOR_TEST),d.mesh.render(se?0:l.meshClock,Yo,Ce.values.colourCount,Ce.values,vc,[l.w,l.h,_?_.height-l.h:0]),f.meta(g,_?_.height:l.h)):f.draw(g,_?_.height:l.h)}else f.draw(g,_?_.height:l.h);_&&l.ctx&&(l.ctx.clearRect(0,0,l.w,l.h),l.ctx.drawImage(_,0,0,l.w,l.h,0,0,l.w,l.h)),l.on||(l.on=!0,l.host.setAttribute("data-halftone-on",""),l.owed?.(),l.owed=void 0),l.dirty=!1,l.drewX=E,l.drewY=C,c++}return V.surfaces=c,s}function Rc(e,t,a="performance",n="letter"){if(_c(),!at)return null;const o=document.createElement("canvas");o.setAttribute("aria-hidden","true"),o.className="halftone-canvas",e.appendChild(o);const r={host:e,canvas:o,rig:null,ctx:null,kind:t,chart:a,art:n,clock:0,meshClock:0,pointerX:vo(0),pointerY:vo(0),order:t==="chart"?Ur++:0,visible:!1,inFrame:!1,inBand:!1,dirty:!0,w:0,h:0,cssW:0,cssH:0,vx:0,vy:0,drewX:-1,drewY:-1,seen:0,reveal:0,on:!1,hover:0,press:0,wantHover:!1,wantPress:!1,drop:[]};if(t==="arrow"||t==="option"){const i=e.closest(t==="option"?".option-card":"a, button");if(i){const m=(p,l)=>{i.addEventListener(p,l,{passive:!0}),r.drop.push(()=>i.removeEventListener(p,l))};if(m("pointerenter",()=>{r.wantHover=!0,ie()}),m("pointerleave",()=>{r.wantHover=!1,r.wantPress=!1,ie()}),m("focusin",()=>{r.wantHover=!0,ie()}),m("focusout",()=>{r.wantHover=!1,ie()}),m("pointerdown",()=>{r.wantPress=!0,ie()}),m("pointerup",()=>{r.wantPress=!1,ie()}),m("pointercancel",()=>{r.wantPress=!1,ie()}),t==="option"){const p=d=>{if(d.pointerType==="touch"||se)return;const f=i.getBoundingClientRect();r.pointerX.target=Math.max(-1,Math.min(1,(d.clientX-f.left)/f.width*2-1)),r.pointerY.target=Math.max(-1,Math.min(1,(d.clientY-f.top)/f.height*2-1)),ie()};i.addEventListener("pointermove",p,{passive:!0}),r.drop.push(()=>i.removeEventListener("pointermove",p)),m("pointerleave",()=>{r.pointerX.target=0,r.pointerY.target=0}),m("focusout",()=>{r.pointerX.target=0,r.pointerY.target=0});const l=()=>{r.wantPress=!1,ie()};window.addEventListener("pointerup",l,{passive:!0}),r.drop.push(()=>window.removeEventListener("pointerup",l))}}}Me.add(r),Vt?.observe(e),Wt?.observe(o),Yt?.observe(o),Zt?.observe(e);let s=!1;const c=Dn(()=>{if(!s){if(Mc(r),!r.rig){Me.delete(r),o.remove();return}r.owed=Ln(),ie()}},t==="chart"?1:2);return()=>{s=!0,c(),r.owed?.(),r.owed=void 0,Vt?.unobserve(e),Wt?.unobserve(o),Yt?.unobserve(o),Zt?.unobserve(e);for(const i of r.drop)i();Me.delete(r),wc(r),e.removeAttribute("data-halftone-on"),o.remove()}}function Or(){if(at){se=window.matchMedia("(prefers-reduced-motion: reduce)").matches,br();for(const e of Me)Kn(e),e.dirty=!0;ie()}}function Ac(){!Me.size&&at&&(Ua?.removeEventListener("change",Or),Ua=null,Vt?.disconnect(),Wt?.disconnect(),Yt?.disconnect(),Zt?.disconnect(),Vt=null,Wt=null,Yt=null,Zt=null,Ur=0,at=!1)}function zu(e,t){const a=Rc(e,t.kind,t.chart,t.art);return{destroy(){a?.(),Ac()}}}const Sc=5,Qn=e=>Math.max(0,Math.min(1,e)),er=e=>{const t=Qn(e);return t*t*t*(t*(t*6-15)+10)},pn=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,hn=e=>Qn(e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055);function xn(e,t){for(let a=0;a<e.length/4;a++){const n=pn(e[a*4]),o=pn(e[a*4+1]),r=pn(e[a*4+2]),s=Math.cbrt(.4122214708*n+.5363325363*o+.0514459929*r),c=Math.cbrt(.2119034982*n+.6806995451*o+.1073969566*r),i=Math.cbrt(.0883024619*n+.2817188376*o+.6299787005*r);t[a*3]=.2104542553*s+.793617785*c-.0040720468*i,t[a*3+1]=1.9779984951*s-2.428592205*c+.4505937099*i,t[a*3+2]=.0259040371*s+.7827717662*c-.808675766*i}}function Fc(e,t){for(let a=0;a<e.length/3;a++){const n=e[a*3],o=e[a*3+1],r=e[a*3+2],s=(n+.3963377774*o+.2158037573*r)**3,c=(n-.1055613458*o-.0638541728*r)**3,i=(n-.0894841775*o-1.291485548*r)**3;t[a*4]=hn(4.0767416621*s-3.3077115913*c+.2309699292*i),t[a*4+1]=hn(-1.2684380046*s+2.6097574011*c-.3413193965*i),t[a*4+2]=hn(-.0041960863*s-.7034186147*c+1.707614701*i),t[a*4+3]=1}}function tr(e,t,a,n,o,r,s){const c=Math.exp(-r*s);for(let i=n;i<n+o;i++){const m=e[i]-a[i],p=t[i]+r*m;e[i]=a[i]+(m+p*s)*c,t[i]=(t[i]-r*p*s)*c}}function Pc(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function Dc(e){const t=e.length/4,a=new Float32Array(e),n=new Float32Array(e),o=new Float64Array(t*3),r=new Float64Array(t*3),s=new Float64Array(t*3),c=new Float64Array(t*3),i=new Float64Array(t),m=new Float64Array(t),p=new Float64Array(t*2+Sc),l=new Float64Array(p.length),d=new Float64Array(p.length),f=new Float64Array(p.length),x=new Float64Array(p.length),v=new Float32Array(t*2),A=new Float32Array(2),F=t*2;let M=!1,b=0,T=2500,R=600,E=0,C=t;xn(e,o);const w=(u=n)=>{n.set(u),a.set(u),xn(u,o),r.fill(0),p.fill(0),l.fill(0),v.fill(0),A.fill(0),M=!1,E=1};return{colours:a,offsets:v,eddies:A,get active(){return M},get speed(){return p[F]},get swirl(){return p[F+1]},get distortion(){return p[F+2]},get readiness(){return E},get startedAt(){return b},settle:w,inject(u,_,g,k){const y=Pc(g);n.set(u),xn(u,s),c.set(o),b=_,C=Math.min(t,k),T=2400+y()*200,R=540+y()*140,E=0,M=!0;const P=y()*Math.PI*2,h=y()<.5?-1:1,D=h*(.85+y()*.35),S=Array.from({length:t},(L,I)=>I);for(let L=C-1;L>0;L--){const I=Math.floor(y()*(L+1));[S[L],S[I]]=[S[I],S[L]]}for(let L=0;L<t;L++){const I=S[L];i[I]=25+L*(90+y()*45),m[I]=8+y()*1.2;const U=P+L/C*Math.PI*2+y()*.4,z=.22+y()*.12;d[I*2]=Math.cos(U)*z,d[I*2+1]=Math.sin(U)*z,f[I*2]=Math.cos(U+D)*z*.55,f[I*2+1]=Math.sin(U+D)*z*.55}d[F]=1.8+y()*.8,d[F+1]=(y()-.5)*.3,d[F+2]=.22+y()*.12,d[F+3]=h*(1.05+y()*.4),d[F+4]=-h*(.8+y()*.35);for(let L=F;L<p.length;L++)f[L]=d[L]*.28},advance(u,_){if(!M)return;const g=Math.max(0,u-b);if(g>=T){w();return}const k=er((g-R*.55)/620),y=1-er((g-R-400)/450);for(let h=0;h<x.length;h++)x[h]=(d[h]+(f[h]-d[h])*k)*y;tr(p,l,x,0,p.length,9,_);for(let h=0;h<v.length;h++)v[h]=p[h];A[0]=p[F+3],A[1]=p[F+4];let P=1;for(let h=0;h<t;h++){const D=Math.min(_,Math.max(0,(g-i[h])/1e3)),S=Math.abs(r[h*3])+Math.abs(r[h*3+1])+Math.abs(r[h*3+2])>.001;if(tr(o,r,s,h*3,3,m[h],S?_:D),h<C){let L=0,I=0;for(let U=0;U<3;U++)L+=(c[h*3+U]-s[h*3+U])**2,I+=(o[h*3+U]-s[h*3+U])**2;P=Math.min(P,L<1e-8?1:Qn(1-Math.sqrt(I/L)))}}E=Math.max(E,P),Fc(o,a)}}}const ut=130,Lc={title:0,price:12,description:24};function vn(e,t,a,n){const o=e.value-t,r=e.velocity+a*o,s=Math.exp(-a*n);e.value=t+(o+r*n)*s,e.velocity=(e.velocity-a*r*n)*s}function Cc(e){const t=e.firstChild;if(!t||t.nodeType!==Node.TEXT_NODE)return[];const a=t.textContent??"",n=document.createRange(),o=[];let r="",s=NaN,c=0;for(const i of a){if(n.setStart(t,c),c+=i.length,n.setEnd(t,c),!/\s/u.test(i)){const m=n.getBoundingClientRect();!Number.isNaN(s)&&Math.abs(m.top-s)>2&&(o.push(r.trim()),r=""),s=m.top}r+=i}return r.trim()&&o.push(r.trim()),o}function Nc(e,t){let a=t,n=!1,o=0,r=null,s=!0;const c=[...e.querySelectorAll("[data-tile-copy]")].map(d=>({node:d,id:d.dataset.tileCopy,fade:{value:d.dataset.tileCopy===t?1:0,velocity:0},lift:{value:0,velocity:0},reveal:!1,parts:[...d.querySelectorAll("[data-copy-part]")].map(f=>{const x=f.querySelector("[data-copy-source]"),v=x?document.createElement("span"):null;return v&&(v.dataset.copyVisual="",v.setAttribute("aria-hidden","true"),f.append(v)),{node:f,kind:f.dataset.copyPart,source:x,visual:v,lines:x?[]:[...f.querySelectorAll("[data-copy-mover]")].map(A=>({mover:A,value:0,velocity:0,returning:!1,awake:!1}))}})}));if(!c.length)return{settle:d=>{},start:d=>{},render:(d,f)=>{},destroy:()=>{}};function i(){for(const d of c){d.node.style.opacity=Math.max(0,Math.min(1,d.fade.value)).toFixed(4),d.node.style.transform=n?`translate3d(0, ${d.lift.value.toFixed(4)}px, 0)`:"";const f=n?d.fade.value>.002&&(!d.reveal||d.parts.some(x=>x.lines.some(v=>v.value<ut-.01))):d.id===a;d.node.style.visibility=f?"visible":"hidden";for(const x of d.parts){x.node.toggleAttribute("data-copy-masked",n&&d.reveal&&x.lines.length>0);for(const v of x.lines)v.mover.style.transform=n&&d.reveal?`translate3d(0, ${v.value.toFixed(4)}%, 0)`:""}}}function m(){if(s){for(const d of c)for(const f of d.parts){if(!f.source||!f.visual||!f.node.clientWidth)continue;const x=Cc(f.source);if(x.length===f.lines.length&&x.every((A,F)=>f.lines[F].mover.textContent===A))continue;const v=f.lines;f.lines=x.map((A,F)=>{const M=document.createElement("span"),b=document.createElement("span");M.dataset.copyMask="",b.dataset.copyMover="",b.textContent=A,M.append(b);const T=v[F]??v.at(-1);return{mover:b,value:n&&T?T.value:d.id===a?0:ut,velocity:n&&T?T.velocity:0,returning:T?.returning??!1,awake:T?.awake??d.id===a}}),f.visual.replaceChildren(...f.lines.map(A=>A.mover.parentElement))}i()}}const p=d=>{a=d,n=!1;for(const f of c){f.fade.value=f.id===a?1:0,f.fade.velocity=0,f.lift.value=f.lift.velocity=0,f.reveal=!1;for(const x of f.parts)for(const v of x.lines)v.value=f.id===a?0:ut,v.velocity=0,v.awake=f.id===a,v.returning=!1}i()};m(),p(t);const l=new ResizeObserver(m);for(const d of c)for(const f of d.parts)f.source&&l.observe(f.node);return document.fonts.ready.then(m),document.fonts.addEventListener("loadingdone",m),{settle:p,start(d){m(),a=d,n=!0,o=0,r=null;for(const f of c){const x=f.fade.value>.002&&(!f.reveal||f.parts.some(A=>A.lines.some(F=>F.value<ut-.5))),v=f.id===a&&!x;v&&(f.fade.value=1,f.fade.velocity=0,f.lift.value=f.lift.velocity=0,f.reveal=!0);for(const A of f.parts)for(const F of A.lines){const M=x&&F.value<ut-.5;F.returning=f.id===a&&M,F.awake=f.id===a||M,v&&(F.value=ut,F.velocity=0)}}i()},render(d,f){const x=Math.max(0,Math.min(.064,(d-o)/1e3));o=d,r===null&&f>=.66&&(r=d);for(const v of c){const A=v.id===a;if(vn(v.fade,A?1:0,A?22:28,x),vn(v.lift,A?0:-4,22,x),!!v.reveal)for(const F of v.parts)for(const[M,b]of F.lines.entries()){if(!b.awake)continue;const T=Lc[F.kind]+Math.min(M,3)*12;A&&!b.returning&&(r===null||d<r+T)||vn(b,0,21,x)}}i()},destroy(){s=!1,l.disconnect(),document.fonts.removeEventListener("loadingdone",m);for(const d of c){d.node.style.removeProperty("transform"),d.node.style.removeProperty("opacity"),d.node.style.removeProperty("visibility");for(const f of d.parts){f.visual?.remove(),f.node.removeAttribute("data-copy-masked");for(const x of f.lines)x.mover.style.transform=""}}}}}const Ic=["presence","croissance","partenaire"],_n=(e,t)=>Array.from({length:re},(a,n)=>({key:`${e}${n+1}`,label:`Teinte ${n+1}`,group:`Teintes · ${t}`,kind:"colour",css:`--tile-${e}-${n+1}`,slot:n+1})),_t=Jt("tile","Tuiles animées",{colourCount:3,distortion:.55,swirl:.35,grainMixer:.12,grainOverlay:.08,grainDensity:.9,phase:41.5,speed:.45,scale:1.35,rotation:90,offsetX:0,offsetY:0,fps:30,maxDpr:1.5,quality:1,presence1:"",presence2:"",presence3:"",presence4:"",croissance1:"",croissance2:"",croissance3:"",croissance4:"",partenaire1:"",partenaire2:"",partenaire3:"",partenaire4:""},[{key:"colourCount",label:"Nombre de teintes",group:"Rendu",kind:"range",min:1,max:re,step:1},{key:"distortion",label:"Distorsion",group:"Rendu",kind:"range",min:0,max:1,step:.01},{key:"swirl",label:"Tourbillon",group:"Rendu",kind:"range",min:0,max:1,step:.01},{key:"grainMixer",label:"Grain · mélange",group:"Rendu",kind:"range",min:0,max:1,step:.01},{key:"grainOverlay",label:"Grain · surimpression",group:"Rendu",kind:"range",min:0,max:1,step:.01},{key:"grainDensity",label:"Grain · densité",group:"Rendu",kind:"range",min:.2,max:3,step:.05},{key:"phase",label:"Image d’ouverture",group:"Rendu",kind:"range",min:0,max:120,step:.5},{key:"speed",label:"Vitesse",group:"Rendu",kind:"range",min:0,max:3,step:.01},{key:"scale",label:"Échelle",group:"Rendu",kind:"range",min:.2,max:4,step:.01},{key:"rotation",label:"Rotation",group:"Rendu",kind:"range",min:0,max:360,step:1,unit:"°"},{key:"offsetX",label:"Décalage X",group:"Rendu",kind:"range",min:-1,max:1,step:.01},{key:"offsetY",label:"Décalage Y",group:"Rendu",kind:"range",min:-1,max:1,step:.01},..._n("presence","présence"),..._n("croissance","croissance"),..._n("partenaire","partenaire"),{key:"fps",label:"Cadence",group:"Qualité",kind:"range",min:5,max:60,step:1},{key:"maxDpr",label:"Densité max",group:"Qualité",kind:"range",min:1,max:3,step:.5},{key:"quality",label:"Résolution",group:"Qualité",kind:"range",min:.4,max:2,step:.05}]),Uc=37;let Oc=0;const ye=new Set;let nt=!1,de=null,ge=null,Kt=null,Qt=null,jt=!1,kn=!1,Ra=0,gn=0,ht=null;function je(e){e.flow?.settle(Xt(e.palette)),e.copy.settle(e.palette),e.host.removeAttribute("data-tile-transition")}function $r(){jt=ht?.matches??!1;for(const e of ye)jt&&je(e),e.dirty=!0;Oe()}let Oe=()=>{};function Xu(e){Oe=e}let zr=()=>{};function Bu(e){zr=e,Gc()}function $c(){const e=getComputedStyle(document.documentElement),t=document.createElement("span");t.style.display="none",document.body.appendChild(t);const a={};try{for(const n of Ic)for(let o=1;o<=re;o++){const r=Lr(t,e.getPropertyValue(`--tile-${n}-${o}`).trim());if(!r)return!1;a[`${n}${o}`]=r}}finally{t.remove()}return _t.seed(a),!0}const zc=()=>{nt||(kn||(kn=$c()),kn&&(nt=!0,ht=window.matchMedia("(prefers-reduced-motion: reduce)"),jt=ht.matches,ht.addEventListener("change",$r),Kt=new IntersectionObserver(e=>{for(const t of e){const a=[...ye].find(n=>n.host===t.target);a&&(a.visible=t.isIntersecting,t.isIntersecting||je(a),t.isIntersecting&&(a.dirty=!0))}Oe()},{rootMargin:"25% 0px"}),Qt=new ResizeObserver(e=>{for(const t of e){const a=[...ye].find(n=>n.host===t.target);a&&(!a.mesh&&a.stand&&a.host.clientWidth>0&&a.stand(),jn(a)&&(a.dirty=!0))}Oe()})))},ar=new Map,Xc=e=>{let t=ar.get(e);if(!t){const a=parseInt(e.slice(1),16);t=[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255],ar.set(e,t)}return t},dt=new Float32Array(re*4),Xt=e=>{const t=_t.values;for(let a=0;a<re;a++){const[n,o,r]=Xc(t[`${e}${a+1}`]||"#000000");dt[a*4]=n,dt[a*4+1]=o,dt[a*4+2]=r,dt[a*4+3]=1}return dt},jn=e=>{const t=e.host.clientWidth,a=e.host.clientHeight;if(!t||!a||!e.mesh)return!1;const n=_t.values,o=Math.max(.6,Math.min(window.devicePixelRatio||1,n.maxDpr)*n.quality),r=Math.max(1,Math.round(t*o)),s=Math.max(1,Math.round(a*o));return r===e.w&&s===e.h&&t===e.cssW&&a===e.cssH||(e.w=r,e.h=s,e.cssW=t,e.cssH=a,e.ctx?(e.canvas.width=r,e.canvas.height=s,de&&ge&&(r>de.width||s>de.height)&&ge.resize(Math.max(de.width,r),Math.max(de.height,s),1)):e.mesh.resize(t,a,o),e.dirty=!0),!0};function Gu(e){if(!nt||!ye.size)return!1;const t=_t.values,a=Ra?Math.max(0,Math.min((e-Ra)/1e3,.064)):.016;Ra=e,gn+=a;const n=1/Math.max(1,t.fps),o=gn>=n;o&&(gn=0);const r=!jt&&t.speed>0;let s=!1,c=!1;for(const i of ye){const m=i.mesh;if(!m||m.gl.isContextLost())continue;if(!m.poll()){s=!0;continue}if(!i.visible&&i.painted)continue;if(!i.w&&!jn(i)){i.owed?.(),i.owed=void 0;continue}const p=i.flow?.active??!1;if(p&&i.flow&&(i.flow.advance(e,a),i.copy.render(e-i.flow.startedAt,i.flow.readiness),i.flow.active||je(i),i.dirty=!0,s=!0),(r||p)&&(i.time+=a*(t.speed+(i.flow?.speed??0)),i.dirty=!0,s=!0),!(!i.dirty||!(o||!r||p))){if(!i.painted){if(c){s=!0;continue}c=!0}Bc(i)}}return s}function Bc(e){const t=e.mesh;if(!t||!t.ok)return;const a=_t.values;Xt(e.palette);const n=Math.min(e.w,e.h),o=e.w/e.cssW;t.render(e.time,e.flow?.active?e.flow.colours:dt,Math.max(1,Math.min(re,Math.round(a.colourCount))),{distortion:a.distortion+(e.flow?.distortion??0),swirl:a.swirl+(e.flow?.swirl??0),grainMixer:a.grainMixer,grainOverlay:a.grainOverlay,grainScale:Math.max(16,n*a.grainDensity),phase:a.phase,tile:0,scale:a.scale,rotation:a.rotation,offsetX:a.offsetX,offsetY:a.offsetY,spotOffsets:e.flow?.offsets,eddies:e.flow?.eddies,screen:zr(Math.min(e.cssW,e.cssH),o)},[0,0],e.ctx?[e.w,e.h]:void 0),e.ctx&&de&&e.ctx.drawImage(de,0,de.height-e.h,e.w,e.h,0,0,e.w,e.h),e.dirty=!1,e.painted||(e.canvas.style.visibility=""),e.painted=!0,e.owed?.(),e.owed=void 0}function Gc(){if(nt){for(const e of ye)jn(e),e.dirty=!0;Oe()}}function Hc(){ye.size||!nt||(nt=!1,ht?.removeEventListener("change",$r),ht=null,Kt?.disconnect(),Qt?.disconnect(),Kt=null,Qt=null,Ra=0)}function Hu(e,t){zc();const a=Nc(e,t.palette);if(!nt)return{update:p=>a.settle(p.palette),destroy:a.destroy};const n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),n.className="tile-canvas",n.style.visibility="hidden",e.prepend(n);const o={host:e,canvas:n,mesh:null,ctx:null,stand:null,palette:t.palette,visible:!1,dirty:!0,w:0,h:0,cssW:0,cssH:0,time:(t.seed??Oc++)*Uc,painted:!1,copy:a,flow:t.fluid?Dc(Xt(t.palette)):null},r=()=>{je(o),n.style.visibility="hidden",o.painted=!1},s=()=>{o.dirty=!0,Oe()};n.addEventListener("webglcontextlost",r),n.addEventListener("webglcontextrestored",s),ye.add(o),Kt?.observe(e),Qt?.observe(e);let c=!1;const i=()=>{c||o.mesh||(o.stand=null,o.owed=Ln(),nr?o.mesh=yn(n,{parallel:!0}):(ge||(de=document.createElement("canvas"),de.width=8,de.height=8,ge=yn(de,{parallel:!0}),de.addEventListener("webglcontextlost",()=>{for(const p of ye)p.ctx&&(je(p),p.canvas.style.visibility="hidden",p.painted=!1)}),de.addEventListener("webglcontextrestored",()=>{for(const p of ye)p.dirty=!0;Oe()})),o.ctx=ge?n.getContext("2d"):null,o.mesh=o.ctx?ge:null),Oe())},m=Dn(()=>{c||(e.clientWidth>0?i():o.stand=i)},3);return{update(p){if(p.palette===o.palette)return;const l=p.fluid&&!jt&&o.mesh?.ok&&o.painted&&o.visible&&e.getBoundingClientRect().bottom>0&&e.getBoundingClientRect().top<window.innerHeight&&!document.hidden;if(o.flow&&!o.flow.active&&o.flow.settle(Xt(o.palette)),o.palette=p.palette,l&&o.flow){const d=crypto.getRandomValues(new Uint32Array(1))[0];o.flow.inject(Xt(p.palette),performance.now(),d,Math.round(_t.values.colourCount)),o.copy.start(p.palette),e.setAttribute("data-tile-transition","mesh")}else je(o),(!o.mesh?.ok||document.hidden)&&(n.style.visibility="hidden",o.painted=!1);o.dirty=!0,Oe()},destroy(){c=!0,m(),o.owed?.(),o.owed=void 0,je(o),a.destroy(),Kt?.unobserve(e),Qt?.unobserve(e),ye.delete(o),n.removeEventListener("webglcontextlost",r),n.removeEventListener("webglcontextrestored",s);const p=o.mesh&&o.mesh!==ge?o.mesh:null;if(o.mesh=null,o.ctx=null,p){const l=p.gl;p.dispose(),l.getExtension("WEBGL_lose_context")?.loseContext()}else if(ge&&![...ye].some(l=>l.mesh===ge)){const l=ge.gl;ge.dispose(),l.getExtension("WEBGL_lose_context")?.loseContext(),ge=null,de=null}n.remove(),Hc()}}}export{Ru as $,gu as A,Uu as B,ec as C,Lu as D,tc as E,jl as F,Sn as G,Fl as H,Su as I,q as J,ae as K,uu as L,re as M,Mu as N,bu as O,yu as P,Uo as Q,Au as R,wu as S,fu as T,Ae as U,Ou as V,Xu as W,_u as X,Eu as Y,zl as Z,zu as _,Ws as a,xe as a0,oi as a1,Ba as a2,Xa as a3,cu as a4,Oa as a5,wi as a6,du as a7,ri as a8,lu as a9,xu as aA,Rt as aa,ii as ab,Hu as ac,eu as ad,sr as ae,au as af,$ as ag,hl as ah,pl as ai,xl as aj,ru as ak,kl as al,Ia as am,vu as an,nu as ao,Jc as ap,tu as aq,wr as ar,mu as as,ou as at,ul as au,Hn as av,sl as aw,_r as ax,Ie as ay,Na as az,su as b,yn as c,nr as d,Bu as e,Or as f,Ce as g,X as h,Gc as i,V as j,ku as k,Tu as l,ct as m,pu as n,hu as o,Fu as p,br as q,Du as r,Pu as s,Cu as t,Nu as u,Iu as v,ke as w,$u as x,iu as y,Gu as z};
