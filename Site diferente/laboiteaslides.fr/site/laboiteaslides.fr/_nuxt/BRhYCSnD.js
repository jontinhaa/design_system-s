import{t as e}from"./DK3Fl9T5.js";import{L as t,Q as n,Y as r,i}from"./B6Ie5k13.js";import{U as a,k as o}from"./Co2d9rFw.js";import{t as s}from"./BxfPubCv.js";import{t as c}from"./B1RHjsqj.js";var l=`varying vec2 vUv;

void main()
{
    vUv = uv;

    gl_Position = vec4(position.xy, .0, 1.0);
}`,u=`uniform float uTime;
uniform float uSpeed;
uniform float uCurveSharpness;
uniform float uNoiseStrength;
uniform float uWaveFrequency;
uniform float uWaveAmplitude;
uniform float uWaveSpeed;
uniform float uParallax;

uniform vec3 uColorTopInitial;
uniform vec3 uColorBottomInitial;
uniform vec3 uColorTopFinal;
uniform vec3 uColorBottomFinal;

uniform float uTransitionFinal;
uniform float uCurveAmountFinal;

#define UNIFORMS

varying vec2 vUv;

vec3 linearToSrgb(vec3 linear) {
    return mix(
        linear * 12.92,
        pow(linear, vec3(1.0 / 2.4)) * 1.055 - 0.055,
        step(0.0031308, linear)
    );
}

float computeCurvedLineMask(float transition, float curveSharpness, float curveAmount, float uvX, float uvY) {
    if (transition <= 0.0) {
        return 0.0;
    }

    
    
    float normalizedX = (uvX - 0.5) * 2.0;
    
    
    float curveOffset = normalizedX * normalizedX * curveAmount;
    
    
    
    
    float maxCurveOffset = abs(curveAmount);
    float baseHeight = mix(-maxCurveOffset, 1.0, transition);
    float curveHeight = baseHeight - curveOffset;
    
    
    curveHeight = clamp(curveHeight, 0.0, 1.0);
    
    
    
    float edgeSmooth = 0.015 * (10.0 - curveSharpness);
    return 1.0 - smoothstep(curveHeight - edgeSmooth, curveHeight + edgeSmooth, uvY);
}

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
    float wave1      = sin((vUv.x + uTime * uWaveSpeed) * uWaveFrequency) * uWaveAmplitude;
    float wave2      = sin((vUv.x * 1.7 - uTime * uWaveSpeed * 1.3) * (uWaveFrequency * 0.6) + vUv.y * 3.14159) * (uWaveAmplitude * 0.6);
    float waveOffset = wave1 + wave2;

    float scroll       = fract(vUv.y + waveOffset + uTime * uSpeed);
    float curvedScroll = pow(scroll, 1.2);

    vec3 baseGradient = mix(linearToSrgb(uColorBottomInitial), linearToSrgb(uColorTopInitial), curvedScroll);

    #define GRADIENT

    baseGradient = mix(baseGradient, mix(linearToSrgb(uColorBottomFinal), linearToSrgb(uColorTopFinal), curvedScroll), computeCurvedLineMask(uTransitionFinal, uCurveSharpness, uCurveAmountFinal, vUv.x, vUv.y));

    float grain = noise(vec2(vUv.x * 4.0 + waveOffset * 2.0, vUv.y * 4.0 + uTime * 0.25));
    baseGradient += (grain - 0.5) * uNoiseStrength;

    float vignette = smoothstep(1.1, 0.35, distance(vUv, vec2(0.5)));
    baseGradient *= mix(0.85, 1.05, vignette + uParallax * waveOffset);

    gl_FragColor = vec4(baseGradient, 1.0);
}`,d=e({default:()=>b}),f=Symbol(`__hydrate`),p=Symbol(`__update`),m=Symbol(`__destroy`),h=Symbol(`__taskUpdate`),g=Symbol(`__start`),_=Symbol(`__stop`),v=Symbol(`BACKGROUND`),y=class e{static#e=!1;static#t=0;static#n=[null,null];static#r=[null,null];static#i=[null,null];static#a=[null,null];static#o=[null,null];static#s=[null,null];static#c=[null,null];static#l={top:e.#r[0],bottom:e.#r[1],transition:1};static#u={top:e.#o[0],bottom:e.#o[1],transition:0};static#d=u.split(/#define\s*UNIFORMS|#define\s*GRADIENT/);static#f={uTime:{value:0},uSpeed:{value:.06},uCurveSharpness:{value:10},uNoiseStrength:{value:.12},uWaveFrequency:{value:2.3},uWaveAmplitude:{value:.59},uWaveSpeed:{value:.06},uParallax:{value:.15},uColorTopInitial:{value:e.#l.top},uColorBottomInitial:{value:e.#l.bottom},uColorTopFinal:{value:e.#u.top},uColorBottomFinal:{value:e.#u.bottom},uTransitionFinal:e.#S(e.#u),uCurveAmountFinal:{value:.3}};static#p;static#m;static#h;static#g;static#_=new Map;static#v=[];static#y=[e.#l];static#b=[];static#x=[];static get __COLOR_BLK(){return e.#n}static get __COLOR_LGH(){return e.#r}static get __COLOR_DRK(){return e.#i}static get __COLOR_GRY(){return e.#a}static get __COLOR_PRM(){return e.#o}static get __COLOR_SCD(){return e.#s}static get __COLOR_TRT(){return e.#c}static get __BASE_UNIFORMS(){return e.#f}static get __MESH(){return e.#g}static get __STATES(){return e.#y}static[f](t){e.#n[0]=e.#n[1]=new t.__SAND.color(c),e.#r[0]=e.#f.uColorTopInitial.value=e.#l.top=new t.__SAND.color(s.lgh1),e.#r[1]=e.#f.uColorBottomInitial.value=e.#l.bottom=new t.__SAND.color(15592941),e.#i[0]=new t.__SAND.color(s.drk1),e.#i[1]=new t.__SAND.color(1048637),e.#a[0]=new t.__SAND.color(s.gry1),e.#a[1]=new t.__SAND.color(13355979),e.#o[0]=e.#f.uColorTopFinal.value=e.#u.top=new t.__SAND.color(s.prm1),e.#o[1]=e.#f.uColorBottomFinal.value=e.#u.bottom=new t.__SAND.color(6369009),e.#s[0]=new t.__SAND.color(s.scd3),e.#s[1]=new t.__SAND.color(6417728),e.#c[0]=new t.__SAND.color(s.trt1),e.#c[1]=new t.__SAND.color(2608881),e.#p=t,e.#m=e.#C(),e.#h=e.#w(),e.#g=e.#T(),e[h]=o.__thread_sub.bind(null,[v,e.#O]),e.#A()}static#S(t){return new Proxy({value:t.transition},{set:(n,r,i)=>(r===`value`&&(t.transition=i,e.#A()),n[r]=i,!0)})}static#C(){return new e.#p.__SAND.planeGeo(2,2)}static#w(){let[t,n]=e.#E();return new e.#p.__SAND.shaderMat({uniforms:t,vertexShader:l,fragmentShader:n,depthWrite:!1,depthTest:!1})}static#T(){let t=new e.#p.__SAND.mesh(e.#m,e.#h);return t.frustumCulled=!1,t.renderOrder=-10,t}static#E(){let t={...e.#f},n=``,r=``;for(let i=0,a=e.#v.length;i<a;i++){let a=e.#v[i];Object.assign(t,a.sharedUniforms),n+=a.sUniforms,r+=a.sGradient}return[t,e.#d[0]+n+e.#d[1]+r+e.#d[2]]}static __getTransitionInitialFrom(e){return 1-Math.min(e.offsetHeight/a.__SCREEN_LVH_100,1)}static __getCurveAmountInitialFrom(e,t=.3){return Math.min(e.offsetHeight/a.__SCREEN_LVH_100,t)}static __add(t,n,r){let i=r.length,a=e.#_.get(t);if(a){if(e.#e){let n=e.#x.indexOf(t);~n&&e.#x.splice(n,1)}if(a.length===i&&a.order===n)return a.uniforms;this.#D(t)}let o={},s={},c=0;for(let t=e.#v.length;c<t&&!(e.#v[c].order>n);c++);let l={order:n,length:i,uniforms:o,sharedUniforms:s,sUniforms:``,sGradient:``,states:Array(i)};for(let t=0,n=1;t<i;t++,n++){let[i,a]=r[t],c=`uColorTop${n}`,u=`uColorBottom${n}`,d=`uTransition${n}`,f=`uCurveAmount${n}`,p=`uColorTop${e.#t}`,m=`uColorBottom${e.#t}`,h=`uTransition${e.#t}`,g=`uCurveAmount${e.#t++}`;o[c]=s[p]={value:i},o[u]=s[m]={value:a},o[d]=s[h]=e.#S(l.states[t]={top:i,bottom:a,transition:0}),o[f]=s[g]={value:.3},l.sUniforms+=`uniform vec3 ${p};uniform vec3 ${m};uniform float ${h};uniform float ${g};`,l.sGradient+=`baseGradient = mix(baseGradient, mix(linearToSrgb(${m}), linearToSrgb(${p}), curvedScroll), computeCurvedLineMask(${h}, uCurveSharpness, ${g}, vUv.x, vUv.y));`}return e.#v.splice(c,0,l),e.#_.set(t,l),e[h](),o}static#D(t){let n=e.#_.get(t);if(!n)return;let r=e.#v.indexOf(n);~r?e.#v.splice(r,1):console.warn(`[BACKGROUND]: UNABLE TO LOCATE THE DATA.`),e.#_.delete(t),e[h]()}static __remove(t){e.#e?e.#x.push(t):e.#D(t)}static#O(){e.#k(),e.#A()}static#k(){e.#h.dispose(),e.#g.material=e.#h=e.#w()}static#A(){e.#y.length!==1&&(e.#y.length=1);let t=e.#l;e.#y[0]=t;for(let t=0,n=e.#v.length;t<n;t++){let n=e.#v[t];for(let t=0;t<n.length;t++){let r=n.states[t];r.transition&&e.#M(r)}}e.#u.transition&&e.#M(e.#u);for(let t=0,n=e.#b.length;t<n;t++)e.#b[t](e.#y)}static[p](t){e.#f.uTime.value+=t}static#j(){e.#m?.dispose(),e.#h?.dispose(),e.#_.size&&e.#_.clear(),e.#v=[],e.#y=[e.#l],e.#b=[],e.#x=[]}static[m](){e.#j()}static[h](){}static#M(t){let n=e.#y.length,r=n-1;do if(e.#y[r].transition>t.transition)break;while(--r>-1);e.#y.splice(r+1,n,t)}static#N(){let t=e.#x.length;if(t){for(let n=0;n<t;n++)e.#D(e.#x[n]);e.#x.length=0}}static[g](){e.#e=!1,e.#N()}static[_](){e.#e=!0}static __sub(t){if(~e.#b.indexOf(t))return console.warn(`[BACKGROUND]: ALREADY SUBSCRIBED.`);e.#b.push(t),t(e.#y)}static __unsub(t){let n=e.#b.indexOf(t);if(n===-1)return console.warn(`[BACKGROUND]: NOT SUBSCRIBED.`);e.#b.splice(n,1)}},b=t({setup:()=>{let{$APP:e,$Events:t,$Synthra:a,$SYNTHRA:o}=i(),s=[`LOAD`,w],c=[[`LIFE`,S],[`DEATH`,C]];e.app_add(`BACKGROUND`,y),n(l),r(h);function l(){u(s),a.__SAND.__sub(y[f].bind(null,a))}function u(e){t.__events_sub(e)}function d(){o.sub(v)({plugin:`BASIC`,eTick:y[p]},y.__MESH)}function h(){b(s),b(c),x(),y[m]()}function b(e){t.__events_unsub(e)}function x(){o.unsub(v)}function S(){y[g]()}function C(){y[_]()}function w(){u(c),d()}return()=>null}});export{d as n,b as t};