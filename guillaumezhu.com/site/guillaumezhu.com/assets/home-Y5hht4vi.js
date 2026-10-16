const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/createImageDistortionScene-C3VU7ZZE.js","assets/createImageDistortionScene-DryuzL4t.js","assets/matter-D640oHn0.js","assets/chunk-Deb1DmFP.js"])))=>i.map(i=>d[i]);
import{n as e}from"./chunk-Deb1DmFP.js";import{a as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./setupCrossPageTransitions-CltNm_Hf.js";import{t as c}from"./ScrollTrigger-Or8JzwiZ.js";import{n as l,t as u}from"./setupHeaderVisibility-D-FHk4jp.js";import{$ as d,A as f,B as p,C as m,Ct as h,D as g,E as _,F as v,G as y,H as b,I as x,J as S,K as C,L as w,M as T,N as E,O as D,P as O,Q as k,R as A,S as ee,T as j,U as M,V as N,W as P,X as F,Y as I,Z as L,_ as R,_t as z,a as B,at as te,b as ne,bt as re,c as ie,ct as V,d as H,dt as ae,et as oe,f as U,ft as se,g as ce,gt as le,h as ue,ht as de,i as fe,it as pe,j as me,k as he,l as ge,lt as _e,m as W,nt as ve,o as ye,ot as be,p as xe,pt as Se,q as Ce,rt as we,s as Te,st as Ee,t as De,tt as Oe,u as ke,ut as Ae,vt as je,w as Me,wt as Ne,x as Pe,xt as G,y as Fe,z as K}from"./three.module-fBMLdKIM.js";var Ie=`varying vec2 vUv;

void main() {
    vUv = uv;

    gl_Position = vec4(
        position.xy,
        0.0,
        1.0
    );
}`,Le=`uniform sampler2D uLogoTexture;
uniform float uTime;

uniform vec3 uCreamColor;
uniform vec3 uDarkColor;

varying vec2 vUv;

uniform vec2 uResolution;
uniform vec2 uLogoSize;

uniform float uLoadProgress;
uniform float uLogoCutoutProgress;

uniform float uNoiseScale;
uniform float uNoiseStrength;
uniform float uNoiseSpeedX;
uniform float uNoiseSpeedY;

uniform float uHeroRevealProgress;

uniform float uHeroNoiseScale;
uniform float uHeroNoiseStrength;
uniform float uHeroNoiseSpeedX;
uniform float uHeroNoiseSpeedY;

float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);

    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash(i + vec3(1.0, 1.0, 1.0));

    float nx00 = mix(n000, n100, f.x);
    float nx10 = mix(n010, n110, f.x);
    float nx01 = mix(n001, n101, f.x);
    float nx11 = mix(n011, n111, f.x);

    float nxy0 = mix(nx00, nx10, f.y);
    float nxy1 = mix(nx01, nx11, f.y);

    return mix(nxy0, nxy1, f.z);
}

float getNoisyReveal(
    vec2 uv,
    float progress,
    float noiseScale,
    float noiseStrength,
    float noiseSpeedX,
    float noiseSpeedY
) {
    
    
    
    float frontPadding =
        noiseStrength * 0.5 + 0.02;

    float frontStart = -frontPadding;
    float frontEnd = 1.0 + frontPadding;

    float frontPosition = mix(
        frontStart,
        frontEnd,
        progress
    );

    
    
    
    float noiseValue = noise(
        vec3(
            uv.x * noiseScale - uTime * noiseSpeedX,
            uTime * noiseSpeedY,
            0.0
        )
    );

    float centeredNoise = noiseValue - 0.5;

    float noisyFront =
        frontPosition
        + centeredNoise
        * noiseStrength;

    
    
    
    float signedDistance =
        uv.y - noisyFront;

    float antiAliasWidth = fwidth(signedDistance);

    return 1.0 - smoothstep(
        -antiAliasWidth,
        antiAliasWidth,
        signedDistance
    );
}

void main() {
    
    
    
    vec2 centeredPosition =
        (vUv - 0.5) * uResolution;

    vec2 logoUv =
        centeredPosition / uLogoSize + 0.5;

    float insideLogoBounds =
        step(0.0, logoUv.x)
        * step(logoUv.x, 1.0)
        * step(0.0, logoUv.y)
        * step(logoUv.y, 1.0);

    float logoMask =
        texture2D(uLogoTexture, logoUv).a
        * insideLogoBounds;

    
    
    
    float logoFill =
        getNoisyReveal(
            logoUv,
            uLoadProgress,
            uNoiseScale,
            uNoiseStrength,
            uNoiseSpeedX,
            uNoiseSpeedY
        );

    float filledLogoMask =
        logoMask * logoFill;

    vec3 finalColor = mix(
        uCreamColor,
        uDarkColor,
        filledLogoMask
    );

    
    
    
    float logoCutoutAlpha =
        1.0
        - logoMask
        * uLogoCutoutProgress;

    
    
    
    vec2 heroRevealUv = vec2(
        vUv.x,
        1.0 - vUv.y
    );

    float heroRevealMask =
        getNoisyReveal(
            heroRevealUv,
            uHeroRevealProgress,
            uHeroNoiseScale,
            uHeroNoiseStrength,
            uHeroNoiseSpeedX,
            uHeroNoiseSpeedY
        );

    
    
    
    float finalAlpha =
        logoCutoutAlpha
        * (1.0 - heroRevealMask);

    gl_FragColor = vec4(
        finalColor,
        finalAlpha
    );

    #include <colorspace_fragment>

    
    gl_FragColor.rgb *= gl_FragColor.a;
}`,Re=({enabled:e=!0,minimumDuration:t=1.2}={})=>{let n=document.querySelector(`.home-loader__canvas`),r=document.querySelector(`.home-loader`);if(!e||!n||!r)return{setProgress:()=>{},complete:()=>Promise.resolve(),revealLogo:()=>Promise.resolve(),revealHero:()=>Promise.resolve(),dispose:()=>{}};let i=null,a=null,s=null,c=null,l=null,u=null,f=null,p=null,m=0,h=!1,g=performance.now(),_=new _e,v=new U,y=()=>{!i||!s||h||(s.uniforms.uTime.value=performance.now()*.001,i.render(_,v))},b=()=>{if(!i||!s)return;let e=r.clientWidth,t=r.clientHeight,n=Math.min(window.devicePixelRatio,2);i.setSize(e,t,!1),i.setPixelRatio(n),s.uniforms.uResolution.value.set(e,t);let a=Math.min(180,e*.28,t*.28);s.uniforms.uLogoSize.value.set(96.19/100*a,a),y()},x=(e,t=.3)=>!s||h?null:(l?.kill(),l=o.to(s.uniforms.uLoadProgress,{value:e,duration:t,ease:`power2.out`,overwrite:!0,onUpdate:y}),l),S=(async()=>{try{if(c=await new z().loadAsync(`/brand/logo-guillaume-zhu.svg`),h){c.dispose();return}i=new fe({canvas:n,antialias:!0,alpha:!0,premultipliedAlpha:!0}),i.outputColorSpace=V,a=new d(2,2);let e=getComputedStyle(document.documentElement),t=e.getPropertyValue(`--color-cream`).trim()||`#f5e7df`,o=e.getPropertyValue(`--color-dark`).trim()||`#1f1d1d`;s=new Ae({vertexShader:Ie,fragmentShader:Le,uniforms:{uLogoTexture:{value:c},uResolution:{value:new re},uLogoSize:{value:new re},uLoadProgress:{value:0},uLogoCutoutProgress:{value:0},uHeroRevealProgress:{value:0},uTime:{value:0},uCreamColor:{value:new W(t)},uDarkColor:{value:new W(o)},uNoiseScale:{value:10},uNoiseStrength:{value:.3},uNoiseSpeedX:{value:.08},uNoiseSpeedY:{value:.12},uHeroNoiseScale:{value:2},uHeroNoiseStrength:{value:.15},uHeroNoiseSpeedX:{value:.45},uHeroNoiseSpeedY:{value:.35}}});let l=new N(a,s);_.add(l),b(),p=new ResizeObserver(b),p.observe(r),window.addEventListener(`resize`,b),await i.compileAsync(_,v),y(),r.classList.add(`home-loader--canvas-ready`),x(m)}catch(e){console.error(`Unable to prepare the home loader.`,e)}})();return{setProgress:e=>{m=Math.min(o.utils.clamp(0,1,e),.9),x(m)},complete:async()=>{if(await S,!s||h)return;let e=(performance.now()-g)/1e3,n=Math.max(0,t-e),r=Math.max(.35,n);await new Promise(e=>{l?.kill(),l=o.to(s.uniforms.uLoadProgress,{value:1,duration:r,ease:`power2.out`,overwrite:!0,onUpdate:y,onComplete:e})})},revealLogo:async()=>{await S,!(!s||h)&&await new Promise(e=>{u=o.to(s.uniforms.uLogoCutoutProgress,{value:1,duration:.6,ease:`power2.inOut`,onUpdate:y,onComplete:e})})},revealHero:async()=>{await S,!(!s||h)&&await new Promise(e=>{f=o.to(s.uniforms.uHeroRevealProgress,{value:1,duration:1,ease:`power2.inOut`,onUpdate:y,onComplete:e})})},dispose:()=>{h||(h=!0,p?.disconnect(),window.removeEventListener(`resize`,b),l?.kill(),u?.kill(),f?.kill(),c?.dispose(),a?.dispose(),s?.dispose(),i?.dispose())}}};function ze(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Be(e){let t=new Map,n=new Map,r=e.clone();return Ve(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Ve(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Ve(e.children[r],t.children[r],n)}var He=class extends x{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new qe(e)}),this.register(function(e){return new Je(e)}),this.register(function(e){return new rt(e)}),this.register(function(e){return new it(e)}),this.register(function(e){return new at(e)}),this.register(function(e){return new Xe(e)}),this.register(function(e){return new Ze(e)}),this.register(function(e){return new Qe(e)}),this.register(function(e){return new $e(e)}),this.register(function(e){return new Ke(e)}),this.register(function(e){return new et(e)}),this.register(function(e){return new Ye(e)}),this.register(function(e){return new nt(e)}),this.register(function(e){return new tt(e)}),this.register(function(e){return new We(e)}),this.register(function(e){return new ot(e,J.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new ot(e,J.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new st(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=w.extractUrlBase(e);a=w.resolveURL(t,this.path)}else a=w.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new R(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(s.decode(new Uint8Array(e,0,4))===ct){try{a[J.KHR_BINARY_GLTF]=new dt(e)}catch(e){r&&r(e);return}i=JSON.parse(a[J.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Ft(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case J.KHR_MATERIALS_UNLIT:a[t]=new Ge;break;case J.KHR_DRACO_MESH_COMPRESSION:a[t]=new ft(i,this.dracoLoader);break;case J.KHR_TEXTURE_TRANSFORM:a[t]=new pt;break;case J.KHR_MESH_QUANTIZATION:a[t]=new mt;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Ue(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function q(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var J={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},We=class{constructor(e){this.parser=e,this.name=J.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new W(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],v);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new ce(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new oe(s),o.distance=c;break;case`spot`:o=new de(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),X(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Ge=class{constructor(){this.name=J.KHR_MATERIALS_UNLIT}getMaterialType(){return b}extendParams(e,t,n){let r=[];e.color=new W(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],v),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,V))}return Promise.all(r)}},Ke=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},qe=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(e,e)}return Promise.all(r)}},Je=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_DISPERSION}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Ye=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Xe=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SHEEN}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new W(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],v)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,V)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Ze=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Qe=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_VOLUME}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new W().setRGB(i[0],i[1],i[2],v),Promise.all(r)}},$e=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IOR}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},et=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SPECULAR}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new W().setRGB(i[0],i[1],i[2],v),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,V)),Promise.all(r)}},tt=class{constructor(e){this.parser=e,this.name=J.EXT_MATERIALS_BUMP}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},nt=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return q(this.parser,e,this.name)===null?null:M}extendMaterialParams(e,t){let n=q(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},rt=class{constructor(e){this.parser=e,this.name=J.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},it=class{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},at=class{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},ot=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}else return null}},st=class{constructor(e){this.name=J.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Y.TRIANGLES&&e.mode!==Y.TRIANGLE_STRIP&&e.mode!==Y.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new p,n=new G,a=new pe,s=new G(1,1,1),c=new ee(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new Pe(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);F.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},ct=`glTF`,lt=12,ut={JSON:1313821514,BIN:5130562},dt=class{constructor(e){this.name=J.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,lt),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ct)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-lt,i=new DataView(e,lt),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===ut.JSON){let r=new Uint8Array(e,lt+a,t);this.content=n.decode(r)}else if(r===ut.BIN){let n=lt+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},ft=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=J.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=St[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=St[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=vt[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,v,n)})})}},pt=class{constructor(){this.name=J.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},mt=class{constructor(){this.name=J.KHR_MESH_QUANTIZATION}},ht=class extends j{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},gt=new pe,_t=class extends ht{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return gt.fromArray(i).normalize().toArray(i),i}},Y={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yt={9728:C,9729:T,9984:S,9985:O,9986:Ce,9987:E},bt={33071:xe,33648:y,10497:Ee},xt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},St={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Ct={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},wt={CUBICSPLINE:void 0,LINEAR:g,STEP:_},Tt={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Et(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new P({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Dt(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function X(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Ot(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function kt(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function At(e){let t,n=e.extensions&&e.extensions[J.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+jt(n.attributes):e.indices+`:`+jt(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+jt(e.targets[n]);return t}function jt(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Mt(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Nt(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Pt=new p,Ft=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ue,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>`u`||n&&r<17||i&&a<98?this.textureLoader=new z(this.options.manager):this.textureLoader=new ne(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new R(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Dt(i,a,r),X(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+ e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[J.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(w.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=xt[r.type],t=vt[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new ke(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=xt[r.type],o=vt[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new m(f,u/s),t.cache.add(n,c)),p=new Me(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new ke(f,a,d);if(r.sparse!==void 0){let t=xt.SCALAR,n=vt[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new ke(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=yt[n.magFilter]||1006,t.minFilter=yt[n.minFilter]||1008,t.wrapS=bt[n.wrapS]||1e3,t.wrapT=bt[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new le(e);t.needsUpdate=!0,n(t)}),t.load(w.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),X(e,a),e.userData.mimeType=a.mimeType||Nt(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[J.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[J.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[J.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ve,A.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new he,A.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return P}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[J.KHR_MATERIALS_UNLIT]){let e=r[J.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new W(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],v),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,V)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Tt.OPAQUE;if(l===Tt.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Tt.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==b&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new re(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==b&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==b){let e=i.emissiveFactor;o.emissive=new W().setRGB(e[0],e[1],e[2],v)}return i.emissiveTexture!==void 0&&a!==b&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,V)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),X(n,i),t.associations.set(n,{materials:e}),i.extensions&&Dt(r,n,i),n})}createUniqueName(e){let t=we.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[J.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Lt(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=At(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[J.KHR_DRACO_MESH_COMPRESSION]?i(o):Lt(new H,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Et(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,p=o[n];if(u.mode===Y.TRIANGLES||u.mode===Y.TRIANGLE_STRIP||u.mode===Y.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new se(l,p):new N(l,p),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===Y.TRIANGLE_STRIP?d.geometry=ze(d.geometry,1):u.mode===Y.TRIANGLE_FAN&&(d.geometry=ze(d.geometry,2));else if(u.mode===Y.LINES)d=new me(l,p);else if(u.mode===Y.LINE_STRIP)d=new D(l,p);else if(u.mode===Y.LINE_LOOP)d=new f(l,p);else if(u.mode===Y.POINTS)d=new Oe(l,p);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&kt(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),X(d,i),u.extensions&&Dt(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Dt(r,c[0],i),c[0];let l=new Fe;i.extensions&&Dt(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new k(K.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new L(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),X(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new p;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new ae(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new ye(i,void 0,l);return X(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Pt)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new G().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Te:t.length>1?new Fe:t.length===1?t[0]:new F,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),X(o,i),i.extensions&&Dt(n,o,i),i.matrix!==void 0){let e=new p;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new Fe;n.name&&(i.name=r.createUniqueName(n.name)),X(i,n),n.extensions&&Dt(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Be(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof A||e instanceof le)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Ct[i.path]===Ct.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Ct[i.path]){case Ct.weights:l=I;break;case Ct.rotation:l=te;break;case Ct.translation:case Ct.scale:l=h;break;default:switch(n.itemSize){case 1:l=I;break;default:l=h;break}break}let u=r.interpolation===void 0?g:wt[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Ct[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Mt(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof te?_t:ht)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function It(e,t,n){let r=t.attributes,i=new ie;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new G(t[0],t[1],t[2]),new G(a[0],a[1],a[2])),e.normalized){let t=Mt(vt[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new G,t=new G;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Mt(vt[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Se;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Lt(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=St[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return ue.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ue.workingColorSpace}" not supported.`),X(e,t),It(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Ot(e,t.targets,n)})}var Rt=`uniform float uSurfaceOffset;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec4 vScreenPosition;

void main() {
    vec3 displacedPosition = position + normal * uSurfaceOffset;
    
    vec4 modelPosition = modelMatrix * vec4(displacedPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vNormal = normalize(normal);
    vPosition = modelPosition.xyz;
    vScreenPosition = projectedPosition;
}`,zt=`uniform float uOpacity;
uniform float uTime;

uniform sampler2D uSceneTexture;

uniform float uHoverProgress;

uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uRevealEdge;
uniform float uFresnelPower;

uniform float uClickProgress;
uniform vec3 uClickPosition;
uniform float uClickTime;

uniform float uClickRadius;
uniform float uClickWaveFrequency;
uniform float uClickWaveSpeed;
uniform float uClickRippleStrength;
uniform float uClickGlowStrength;
uniform float uClickRippleNoise;

uniform float uDistortionStrength;
uniform float uChromaticAberration;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec4 vScreenPosition;

float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);

    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash(i + vec3(1.0, 1.0, 1.0));

    float nx00 = mix(n000, n100, f.x);
    float nx10 = mix(n010, n110, f.x);
    float nx01 = mix(n001, n101, f.x);
    float nx11 = mix(n011, n111, f.x);

    float nxy0 = mix(nx00, nx10, f.y);
    float nxy1 = mix(nx01, nx11, f.y);

    return mix(nxy0, nxy1, f.z);
}

void main() {
    
    
    
    vec3 normal = normalize(vNormal);
    vec3 viewDirection = normalize(cameraPosition - vPosition);

    float facing = abs(dot(normal, viewDirection));

    float fresnel = pow(
    1.0 - clamp(facing, 0.0, 1.0),
    uFresnelPower
    );

    
    
    
    
    float organicNoise = noise(vPosition * uNoiseScale + vec3(0.0, uTime * uNoiseSpeed, 0.0));

    
    float reveal = smoothstep(
        1.0 - uHoverProgress,
        1.0 - uHoverProgress + uRevealEdge,
        organicNoise
    );
    
    
    
    
    float distanceToClick = distance(vPosition, uClickPosition);

    float clickMask = 1.0 - smoothstep(0.0, uClickRadius, distanceToClick);

    float clickElapsedTime = uTime - uClickTime;

    float rippleNoise = noise(
    vPosition * uNoiseScale * 8.0
    + vec3(0.0, uTime * 0.35, 4.2)
    );

    rippleNoise = (rippleNoise - 0.5) * uClickRippleNoise;

    float warpedDistance = distanceToClick + rippleNoise;

    float clickRipple = sin(
        (warpedDistance * uClickWaveFrequency)
        -
        (clickElapsedTime * uClickWaveSpeed)
    );

    float clickWave = 
    clickRipple 
    * clickMask 
    * uClickProgress 
    * uHoverProgress;

    
    float rippleShape = abs(clickRipple);
    float rippleLine = smoothstep(0.99, 1.0, rippleShape);
    float rippleHalo = smoothstep(0.90, 1.0, rippleShape);

    
    
    
    vec2 screenUv = vScreenPosition.xy / vScreenPosition.w;
    screenUv = screenUv * 0.5 + 0.5;

    
    
    
    float distortionNoiseX = noise(
        vPosition * uNoiseScale + vec3(uTime * uNoiseSpeed, 0.0, 0.0)
    );
    float distortionNoiseY = noise(
        vPosition * uNoiseScale + vec3(12.4,uTime * uNoiseSpeed, 7.8)
    );

    vec2 baseDistortionDirection = vec2(
        distortionNoiseX - 0.5,
        distortionNoiseY - 0.5
    );

    
    vec2 clickWaveDirection = normalize(
        baseDistortionDirection + vec2(0.0001)
    );

    vec2 clickDistortion = clickWaveDirection * clickWave * uClickRippleStrength;

    vec2 baseDistortion =
        baseDistortionDirection
        * uDistortionStrength
        * reveal
        * uHoverProgress;

    vec2 distortion = baseDistortion + clickDistortion;

    vec2 distortedScreenUv = screenUv + distortion;

    
    
    
    vec2 chromaticDirection = normalize(distortion + vec2(0.0001));

    float clickChromaticBoost = 1.0 + rippleHalo * clickMask * uClickProgress * 2.0;

    vec2 chromaticOffset = chromaticDirection * uChromaticAberration * clickChromaticBoost * reveal * uHoverProgress;

    float red = texture2D(uSceneTexture, distortedScreenUv + chromaticOffset).r;
    float green = texture2D(uSceneTexture, distortedScreenUv).g;
    float blue = texture2D(uSceneTexture, distortedScreenUv - chromaticOffset).b;

    vec3 sceneColor = vec3(red, green, blue);
    
    
    
    
    vec3 rippleGlowColor = vec3(0.80, 0.95, 1.0);

    float rippleGlow = (rippleLine * 0.80 + rippleHalo * 0.15)
    * clickMask
    * uClickProgress
    * uHoverProgress
    * uClickGlowStrength;

    
    
    
    vec3 glassTint = vec3(0.90, 0.95, 1);

    float tintStrength = mix(0.12, 0.28, fresnel);
    
    vec3 finalColor = mix(sceneColor, glassTint, tintStrength);
    finalColor += rippleGlowColor * rippleGlow;

    
    float alpha = reveal * uHoverProgress * uOpacity;

    gl_FragColor = vec4(finalColor, alpha);
    
}`,Bt=async({autoStart:e=!0,onProgress:t=()=>{},reducedMotion:n=!1}={})=>{let r=0,i=()=>{r+=1,t(r/6)};t(0);let a=new z,o=new He,s=document.querySelector(`.webgl`),c=s.closest(`.hero-three__frame`),l=new _e,u=window.matchMedia(`(hover: none) and (pointer: coarse)`).matches,f={maxPixelRatio:u?1.5:2,renderTargetSamples:u?0:4,textureRoot:u?`/home/hero/textures/mobile`:`/home/hero/textures/desktop`},p={width:c.clientWidth,height:c.clientHeight,pixelRatio:Math.min(window.devicePixelRatio,f.maxPixelRatio)},m=new k(35,p.width/p.height,.1,100);m.position.set(0,0,6),l.add(m);let h=new fe({canvas:s,antialias:!0});h.setSize(p.width,p.height,!1),h.setPixelRatio(p.pixelRatio),h.setClearColor(`#6b6baf`),h.outputColorSpace=V,h.toneMapping=4,h.toneMappingExposure=1;let g=new Ne(p.width*p.pixelRatio,p.height*p.pixelRatio,{samples:f.renderTargetSamples}),_=new be,v=new re,y=!1,x=0,S=0,C=0,w=0,T=new G,E=!0,D=await a.loadAsync(`${f.textureRoot}/scene-gradient.webp`);D.mapping=303,D.colorSpace=V;let O=new De(h);O.compileEquirectangularShader();let A=O.fromEquirectangular(D).texture;l.background=D,l.environment=A,O.dispose(),i();let ee=new B(16777215,1.2);l.add(ee);let j=new ce(16777215,.05);j.position.set(3,4,5),l.add(j);let P=await o.loadAsync(`/home/hero/logo.glb`);i();let F=new Fe;l.add(F);let I=P.scene;F.add(I);let L=I.clone(!0);F.add(L);let R=new G(.2,1,.1).normalize(),te=n?0:.2,ne=new ie().setFromObject(I),H=ne.getSize(new G),ae=ne.getCenter(new G),oe=H.length(),U=new N(new ge(H.x,H.y,H.z),new b({visible:!1}));U.position.copy(ae),F.add(U);let se=()=>{let e=m.position.distanceTo(F.position),t=K.degToRad(m.fov),n=2*e*Math.tan(t*.5),r=n*m.aspect,i=Math.min(r,n)*.9,a=Math.min(1,i/oe);F.scale.setScalar(a)};se();let le=new M({color:16777215,metalness:1,roughness:.4,envMapIntensity:1.2});I.traverse(e=>{e.isMesh&&(e.material=le,e.renderOrder=1)});let ue=new Ae({vertexShader:Rt,fragmentShader:zt,transparent:!0,depthWrite:!1,side:2,uniforms:{uSurfaceOffset:{value:5e-4},uTime:{value:0},uOpacity:{value:1},uSceneTexture:{value:g.texture},uHoverProgress:{value:0},uNoiseScale:{value:2},uNoiseSpeed:{value:.1},uRevealEdge:{value:.1},uFresnelPower:{value:1.2},uDistortionStrength:{value:.025},uChromaticAberration:{value:.0045},uClickProgress:{value:0},uClickPosition:{value:new G},uClickTime:{value:0},uClickRadius:{value:1.2},uClickWaveFrequency:{value:20},uClickWaveSpeed:{value:7},uClickRippleStrength:{value:.02},uClickGlowStrength:{value:.5},uClickRippleNoise:{value:.05}}});L.traverse(e=>{e.isMesh&&(e.material=ue,e.renderOrder=2)});let de=async({path:e,width:t,height:n,position:r,rotation:i})=>{let o=await a.loadAsync(e);o.colorSpace=V;let s=new N(new d(t,n),new b({map:o,transparent:!0,depthWrite:!1}));return s.position.set(r.x,r.y,r.z),s.rotation.set(i.x,i.y,i.z),l.add(s),s},pe=.85,me=.6,he=await de({path:`${f.textureRoot}/texts/text-name.webp`,width:5.5*2,height:1.4*2,position:{x:0,y:0,z:-2.5},rotation:{x:0,y:0,z:0}});i();let W={width:4488/8192,height:1659/2048},ve={width:he.geometry.parameters.width*W.width,height:he.geometry.parameters.height*W.height},ye=m.position.distanceTo(he.position),xe=.8,Se=()=>{let e=K.degToRad(m.fov),t=2*ye*Math.tan(e*.5),n=t*m.aspect*xe/ve.width,r=t*xe/ve.height,i=Math.min(1,n,r);he.scale.setScalar(i)};Se();let Ce=await de({path:`${f.textureRoot}/texts/text-art-director-justified.webp`,width:5.5*pe,height:1.4*pe,position:{x:1,y:5.25,z:-1.75},rotation:{x:0,y:-Math.PI*.5,z:0}});i();let we=await de({path:`${f.textureRoot}/texts/text-creative-developer-justified.webp`,width:5.5*me,height:1.4*me,position:{x:-1,y:6.5,z:1.25},rotation:{x:0,y:-Math.PI*.5,z:0}});i();let Te=Ce.position.z,Ee=we.position.z,Oe=()=>{let e=Math.min(1,m.aspect/1.6);Ce.scale.setScalar(e),we.scale.setScalar(e),Ce.position.z=Te*e,we.position.z=Ee*e};Oe(),he.material.opacity=1,Ce.material.opacity=0,we.material.opacity=0;let ke=0,je=0,Me=Math.PI*.5,Pe=(e,t=0)=>{ke=e;let r=K.clamp(Math.abs(t)/2e3,0,1),i=n?0:r*2.5;je=Math.max(je,i)},Ie=()=>{let e=ke*6,t=-ke*Me;F.position.y=e,m.position.x=Math.sin(t)*6,m.position.y=e,m.position.z=Math.cos(t)*6,m.lookAt(0,e,0);let n=1-K.smoothstep(ke,.2,.4),r=K.smoothstep(ke,.72,.9);he.material.opacity=n,Ce.material.opacity=r,we.material.opacity=r},Le=e=>{E=e,E||(x=0,document.body.style.cursor=`default`)},Re=()=>{p.width=c.clientWidth,p.height=c.clientHeight,p.pixelRatio=Math.min(window.devicePixelRatio,f.maxPixelRatio),m.aspect=p.width/p.height,m.updateProjectionMatrix(),se(),Se(),Oe(),h.setSize(p.width,p.height,!1),h.setPixelRatio(p.pixelRatio),g.setSize(p.width*p.pixelRatio,p.height*p.pixelRatio)};new ResizeObserver(Re).observe(c),window.addEventListener(`resize`,Re),window.addEventListener(`mousemove`,e=>{y=!0,v.x=e.clientX/p.width*2-1,v.y=-(e.clientY/p.height)*2+1}),window.addEventListener(`click`,()=>{if(!E||!y||!x||S<.75)return;_.setFromCamera(v,m);let e=_.intersectObject(U);e.length!==0&&(T.copy(e[0].point),w=performance.now()*.001,C=1)});let ze=0,Be=!1,Ve=!1,Ue=e,q=null,J=()=>{I.visible=!1,L.visible=!1,h.setRenderTarget(g),h.render(l,m),I.visible=!0,L.visible=!0,h.setRenderTarget(null),h.render(l,m)},We=e=>{if(!Ve)return;let t=(e-ze)/1e3;ze=e,ue.uniforms.uTime.value=e*.001,Ie(),E&&y?(_.setFromCamera(v,m),x=+(_.intersectObject(U).length>0),document.body.style.cursor=x?`pointer`:`default`):(x=0,document.body.style.cursor=`default`),S=K.damp(S,x,4.5,t),ue.uniforms.uHoverProgress.value=S,C=K.damp(C,0,3.5,t),ue.uniforms.uClickProgress.value=C,ue.uniforms.uClickPosition.value.copy(T),ue.uniforms.uClickTime.value=w,je=K.damp(je,0,1.5,t);let n=te+je;F.rotateOnAxis(R,t*n),J(),q=window.requestAnimationFrame(We)},Ge=()=>{Ue=!0,!(!Be||Ve)&&(Ve=!0,ze=performance.now(),q=window.requestAnimationFrame(We))};return{scene:l,camera:m,renderer:h,logoGroup:F,ready:(async()=>{await h.compileAsync(l,m),await new Promise(e=>{window.requestAnimationFrame(t=>{ue.uniforms.uTime.value=t*.001,Ie(),J(),window.requestAnimationFrame(e)})}),i(),Be=!0,Ue&&Ge()})(),start:Ge,pause:()=>{Ue=!1,Ve=!1,q!==null&&(window.cancelAnimationFrame(q),q=null)},setScrollProgress:Pe,setInteractive:Le}},Vt=`varying vec2 vUv;

void main() {
    vUv = uv;

    gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Ht=`uniform float uProgress;
uniform float uTime;
uniform vec3 uCreamColor;

uniform float uNoiseScale;
uniform float uNoiseStrength;
uniform float uNoiseSpeedX;
uniform float uNoiseSpeedY;

varying vec2 vUv;

float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);

    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash(i + vec3(1.0, 1.0, 1.0));

    float nx00 = mix(n000, n100, f.x);
    float nx10 = mix(n010, n110, f.x);
    float nx01 = mix(n001, n101, f.x);
    float nx11 = mix(n011, n111, f.x);

    float nxy0 = mix(nx00, nx10, f.y);
    float nxy1 = mix(nx01, nx11, f.y);

    return mix(nxy0, nxy1, f.z);
}

void main() {
    
    
    
    float pi = 3.14159265;

    float frontStart = -0.08;
    float frontEnd = 1.08;

    
    
    
    float frontPosition = mix(
        frontStart,
        frontEnd,
        uProgress
    );

    
    
    
    float horizontalOffset =
        uTime * uNoiseSpeedX;

    float verticalVariation =
        uTime * uNoiseSpeedY;

    float noiseValue = noise(
        vec3(
            vUv.x * uNoiseScale - horizontalOffset,
            verticalVariation,
            0.0
        )
    );

    float centeredNoise =
        noiseValue - 0.5;

    float noiseEnvelope = sin(
        uProgress * pi
    );

    float noisyFront =
        frontPosition
        + centeredNoise
        * uNoiseStrength
        * noiseEnvelope;

    
    
    
    float signedDistance =
        vUv.y - noisyFront;

    float antiAliasWidth =
        fwidth(signedDistance);

    float reveal = 1.0 - smoothstep(
        -antiAliasWidth,
        antiAliasWidth,
        signedDistance
    );

    
    
    
    gl_FragColor = vec4(
        uCreamColor,
        reveal
    );

    #include <colorspace_fragment>
}`;function Ut(e,{reducedMotion:t=!1}={}){if(!(e instanceof HTMLCanvasElement))return null;let n=new _e,r=new U,i={uProgress:{value:0},uTime:{value:0},uCreamColor:{value:new W(getComputedStyle(document.documentElement).getPropertyValue(`--color-cream`).trim())},uNoiseScale:{value:2},uNoiseStrength:{value:.15},uNoiseSpeedX:{value:.45},uNoiseSpeedY:{value:.35}},a=new N(new d(2,2),new Ae({vertexShader:Vt,fragmentShader:Ht,uniforms:i,transparent:!0,depthTest:!1,depthWrite:!1}));n.add(a);let o=new fe({canvas:e,alpha:!0,antialias:!1,powerPreference:`high-performance`});o.outputColorSpace=V,o.setClearColor(0,0);let s=new je,c=!1,l=null;function u(){o.render(n,r)}function f(e){c&&(s.update(e),i.uTime.value=s.getElapsed(),u(),l=requestAnimationFrame(f))}function p(){c||(c=!0,l=requestAnimationFrame(f))}function m(){c=!1,l!==null&&(cancelAnimationFrame(l),l=null)}function h(){let t=Math.max(e.clientWidth,1),n=Math.max(e.clientHeight,1);o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(t,n,!1),u()}window.addEventListener(`resize`,h),h();function g(e){let n=K.clamp(e,0,1);if(i.uProgress.value!==n){if(i.uProgress.value=n,!t&&n>0&&n<1){p();return}m(),u()}}return{setProgress:g}}var Wt=`modulepreload`,Gt=function(e){return`/`+e},Kt={},qt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Gt(t,n),t in Kt)return;Kt[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Wt,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Jt(e,{reducedMotion:t=!1}={}){let n=e.querySelector(`.trajectory-sentences__canvas`),r=n?.closest(`.trajectory-sentences__container`),i=e.querySelector(`.trajectory-sentences__visual--left`),a=e.querySelector(`.trajectory-sentences__visual--right`);if(t||!n||!r||!i||!a)return{prepare:async()=>!1,setActive(){}};let o=null,s=null,c=null,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,_=!0,v=null,y={idleStrength:0,interactionStrength:0,zoom:1};function b(){o?.stop(),o?.setInteractive(!1),n.style.opacity=`0`,f=!1}function x(){h=!0,l=!1,b()}function S(){if(!v||_){let e=getComputedStyle(n);v={width:parseFloat(e.width),height:parseFloat(e.height)}}return v}function C(e,t){if(!_)return;let{width:n,height:r}=S(),o=getComputedStyle(i).backgroundSize.split(/\s+/),s=parseFloat(getComputedStyle(a).width);if(o.length!==2||!o.every(e=>e.endsWith(`px`)))return!1;let[l,u]=o.map(Number.parseFloat);if(![n,r,s,l,u].every(e=>Number.isFinite(e)&&e>0))return!1;c||={scale:e.getUniformLocation(t,`u_cssScale`),split:e.getUniformLocation(t,`u_split`)},e.uniform2f(c.scale,n/l,r/u),e.uniform1f(c.split,(n-s)/n),_=!1}function w(){let e=r.getBoundingClientRect(),t=i.getBoundingClientRect(),n=a.getBoundingClientRect(),o=(e,t)=>Math.abs(e-t)<=.5;return o(t.left,e.left)&&o(n.right,e.right)&&o(t.top,e.top)&&o(n.top,e.top)&&o(t.bottom,e.bottom)&&o(n.bottom,e.bottom)&&t.right>=n.left}function T(e=!1){if(g||h||m||document.hidden||!u||!d||!l||!w()){b();return}let t=y.idleStrength>0||y.interactionStrength>0;try{if(o.setState(p?y:{idleStrength:0,interactionStrength:0,zoom:1}),t||o.stop(),!f||e||!t){if(f||(_=!0),!o.render()){b();return}n.style.opacity=`1`,f=!0,p=!0}o.setState(y),o.setInteractive(y.interactionStrength>0),t&&o.start()}catch(e){console.error(`Unable to render the trajectory background.`,e),x()}}function E(){return s||g||h?s||Promise.resolve(!1):(e.classList.add(`is-background-ready`),s=(async()=>{let{createImageDistortionScene:e}=await qt(async()=>{let{createImageDistortionScene:e}=await import(`./createImageDistortionScene-C3VU7ZZE.js`);return{createImageDistortionScene:e}},__vite__mapDeps([0,1]));return g?!1:(o=e({canvas:n,scene:r,imageUrl:`/home/trajectory/background.webp`,mapping:`stretch`,autoStart:!1,interactive:!1,primePointer:!0,idleStrength:0,interactionStrength:0,zoom:1,maxPixelRatio:1/0,measureSize:S,beforeRender:C,onUnavailable:x}),o?(l=await o.ready,g?!1:(T(!0),l)):(x(),!1))})().catch(e=>(console.error(`Unable to prepare the trajectory background.`,e),x(),!1)),s)}function D(e,t=y){u=e,u||(p=!1),Object.assign(y,t),u&&E(),T()}let O=new IntersectionObserver(([e])=>{d=e.isIntersecting,T()}),k=()=>{_=!0,T(!0)},A=new ResizeObserver(k);function ee(e){if(!e.persisted){M();return}m=!0,b()}function j(){m=!1;let e=r.getBoundingClientRect();d=e.bottom>0&&e.top<window.innerHeight,k()}function M(){g||(g=!0,b(),O.disconnect(),A.disconnect(),window.removeEventListener(`resize`,k),document.removeEventListener(`visibilitychange`,k),window.removeEventListener(`pagehide`,ee),window.removeEventListener(`pageshow`,j),o?.destroy())}return O.observe(r),A.observe(r),window.addEventListener(`resize`,k,{passive:!0}),document.addEventListener(`visibilitychange`,k),window.addEventListener(`pagehide`,ee),window.addEventListener(`pageshow`,j),{prepare:E,setActive:D,destroy:M}}var Yt=null;function Xt(){return Yt??=qt(async()=>{let{default:t}=await import(`./matter-D640oHn0.js`).then(t=>e(t.default,1));return{default:t}},__vite__mapDeps([2,3])).then(({default:e})=>e),Yt}function Zt(e,{neutralizeLinks:t=!1}={}){let n=t?[...e].map(e=>e.style.transform):null;t&&e.forEach(e=>{e.style.transform=`none`});try{let t=window.scrollY;return[...e].map(e=>{let n=[...e.querySelectorAll(`.project-letter`)],r=(n.length-1)/2;return n.flatMap((e,n)=>{let i=e.getBoundingClientRect();return i.width===0||i.height===0?[]:{element:e,centerX:i.left+i.width/2,centerY:i.top+t+i.height/2,width:i.width,height:i.height,weight:r===0?0:Math.abs(n-r)/r}})})}finally{t&&e.forEach((e,t)=>{e.style.transform=n[t]})}}function Qt(e,{monitorPerformance:t=!1,disabled:n=!1}={}){if(n)return{ensure:()=>Promise.resolve(null),start:()=>{},settleAndStop:()=>{},setScrollVelocity:()=>{}};let r=Zt(e),i=window.innerWidth,a=window.innerHeight,o=null,s=null,c=!1,l=0;function u(){return o??=Xt().then(n=>((window.innerWidth!==i||window.innerHeight!==a)&&(r=Zt(e,{neutralizeLinks:!0}),i=window.innerWidth,a=window.innerHeight),s=$t(n,e,{monitorPerformance:t},r),c&&(s.start(),s.setScrollVelocity(l)),s)).catch(e=>(console.error(`Unable to initialize Projects physics.`,e),null)),o}return{ensure:u,start(){if(c=!0,s){s.start();return}u()},settleAndStop(){c=!1,s?.settleAndStop()},setScrollVelocity(e){l=e,s?.setScrollVelocity(e)}}}function $t(e,t,{monitorPerformance:n=!1}={},r){let{Engine:i,Composite:a,Bodies:s,Body:l,Constraint:u}=e,d=i.create();d.world.gravity.y=.5;let f=l.nextGroup(!0),p=[],m=!1,h=!1,g,_=!n,v=0,y=0,b=!1;function x(e){_||!Number.isFinite(e)||(v+=1,e>24&&(y+=1),!(v<30)&&(b=y/v>=.7,_=!0,b&&w()))}function S(e=null){t.forEach(e=>{e.querySelectorAll(`.project-letter`).forEach(e=>{e.style.transform=``})}),a.clear(d.world,!1),i.clear(d),p.length=0,(e??Zt(t,{neutralizeLinks:!0})).forEach(e=>{let t=[];e.forEach(e=>{let{element:n,centerX:r,centerY:i,width:o,height:c,weight:l}=e,m=s.rectangle(r,i,o,c,{frictionAir:.05,density:.001,collisionFilter:{group:f}}),h=u.create({pointA:{x:r,y:i},bodyB:m,stiffness:.005,damping:.004,length:0}),g={element:n,body:m,anchor:h,initialX:r,initialY:i,width:o,weight:l};t.push(g),p.push(g),a.add(d.world,[m,h])});for(let e=0;e<t.length-1;e++){let n=t[e],r=t[e+1],i=u.create({bodyA:n.body,bodyB:r.body,pointA:{x:n.width/2,y:0},pointB:{x:-r.width/2,y:0},stiffness:.6,length:0});a.add(d.world,i)}})}function C(){p.forEach(e=>{l.setPosition(e.body,{x:e.initialX,y:e.initialY}),l.setVelocity(e.body,{x:0,y:0}),l.setAngle(e.body,0),l.setAngularVelocity(e.body,0),e.anchor.pointA.y=e.initialY,e.element.style.transform=``})}function w(){D(),h=!0,clearTimeout(g),window.removeEventListener(`resize`,k)}function T(e,t){x(t),i.update(d,1e3/60),p.forEach(e=>{l.setAngle(e.body,e.body.angle*.97),l.setAngularVelocity(e.body,e.body.angularVelocity*.95);let t=e.body.position.x-e.initialX,n=e.body.position.y-e.initialY;e.element.style.transform=`
        translate3d(${t}px, ${n}px, 0)
        rotate(${e.body.angle}rad)
      `}),m&&p.every(e=>{let t=Math.abs(e.body.position.x-e.initialX),n=Math.abs(e.body.position.y-e.initialY),r=Math.hypot(e.body.velocity.x,e.body.velocity.y),i=Math.abs(e.body.angularVelocity),a=Math.abs(e.anchor.pointA.y-e.initialY);return t<.25&&n<.25&&r<.02&&i<.002&&a<.1})&&(C(),m=!1,o.ticker.remove(T))}function E(){h||(m=!1,d.world.gravity.y=.5,p.forEach(e=>{o.killTweensOf(e.anchor.pointA)}),o.ticker.remove(T),o.ticker.add(T))}function D(){h||(m=!0,d.world.gravity.y=0,p.forEach(e=>{o.to(e.anchor.pointA,{y:e.initialY,duration:.35,ease:`power3.out`,overwrite:!0})}))}function O(e){if(h||m)return;let t=o.utils.clamp(.5,1,window.innerWidth/1200);p.forEach(n=>{n.anchor.pointA.y=n.initialY+e*.08*t*n.weight})}function k(){clearTimeout(g),g=setTimeout(()=>{c.refresh(),S()},200)}return window.addEventListener(`resize`,k),S(r),{start:E,settleAndStop:D,setScrollVelocity:O}}var en={ghibli:[`/projects/memories-of-ghibli/previews/ghibli-01-square.webp`,`/projects/memories-of-ghibli/previews/ghibli-02-square.webp`,`/projects/memories-of-ghibli/previews/ghibli-03-portrait.webp`,`/projects/memories-of-ghibli/previews/ghibli-04-carre.webp`,`/projects/memories-of-ghibli/previews/ghibli-05-portrait.webp`,`/projects/memories-of-ghibli/previews/ghibli-06-carre.webp`,`/projects/memories-of-ghibli/previews/ghibli-07-carre.webp`,`/projects/memories-of-ghibli/previews/ghibli-08-portrait.webp`],pulse:[`/projects/pulse-festival/previews/pulse-01-portrait.webp`,`/projects/pulse-festival/previews/pulse-02-square.webp`,`/projects/pulse-festival/previews/pulse-03-portrait.webp`,`/projects/pulse-festival/previews/pulse-04-square.webp`,`/projects/pulse-festival/previews/pulse-05-square.webp`,`/projects/pulse-festival/previews/pulse-06-portrait.webp`,`/projects/pulse-festival/previews/pulse-07-portrait.webp`,`/projects/pulse-festival/previews/pulse-08-square.webp`],webflow:[`/projects/mae-webflow/previews/webflow-01-square.webp`,`/projects/mae-webflow/previews/webflow-02-square.webp`,`/projects/mae-webflow/previews/webflow-03-portrait.webp`,`/projects/mae-webflow/previews/webflow-04-portrait.webp`,`/projects/mae-webflow/previews/webflow-05-square.webp`,`/projects/mae-webflow/previews/webflow-06-portrait.webp`],ornate:[`/projects/ornate/previews/ornate-01-portrait.webp`,`/projects/ornate/previews/ornate-02-square.webp`,`/projects/ornate/previews/ornate-03-square.webp`,`/projects/ornate/previews/ornate-04-square.webp`,`/projects/ornate/previews/ornate-05-portrait.webp`,`/projects/ornate/previews/ornate-06-square.webp`],mirage:[`/projects/mirage/previews/mirage-01-square.webp`,`/projects/mirage/previews/mirage-02-square.webp`,`/projects/mirage/previews/mirage-03-portrait.webp`,`/projects/mirage/previews/mirage-04-square.webp`,`/projects/mirage/previews/mirage-05-portrait.webp`,`/projects/mirage/previews/mirage-06-portrait.webp`]},tn=!1;function nn(){window.matchMedia(`(hover: hover) and (pointer: fine)`).matches&&(tn||(tn=!0,Object.values(en).forEach(e=>{e.forEach(e=>{let t=new Image;t.src=e})})))}function rn(e){e.forEach(e=>{let t=en[e.dataset.project];if(!t)return;let n=[...e.querySelectorAll(`.project-letter__content`)],r=Array(n.length).fill(0),i=0;function a(){if(n.length===0)return;let e=0,t=[];for(let n=0;n<r.length;n++){let i=r[n],a=r.slice(n+1).reduce((e,t)=>e+t,0),o=e-a;e+=i,t.push(o)}o.to(n,{x:e=>t[e],duration:.3,ease:`back.out(3)`,overwrite:`auto`})}n.forEach((e,n)=>{e.textContent.trim()!==``&&e.addEventListener(`mouseenter`,()=>{if(e.querySelector(`.project-letter__image`))return;let s=t[i%t.length];i++;let c=document.createElement(`img`);c.src=s,c.alt=``,c.classList.add(`project-letter__image`),s.includes(`portrait`)?c.classList.add(`is-portrait`):c.classList.add(`is-square`),e.append(c),o.set(c,{xPercent:-50,yPercent:-50}),o.from(c,{rotation:(Math.random()-.5)*20,scale:1.05,duration:.3,ease:`back.out(2)`});let l=e.getBoundingClientRect().width,u=.085*window.innerWidth-l;r[n]=Math.max(0,u/2),a(),o.delayedCall(1.2,()=>{let e=c.parentElement;e&&(r[n]=0,c.remove(),a(),o.from(e,{rotation:(Math.random()-.5)*20,scale:1.05,duration:.3,ease:`back.out(2)`}))})})})})}var an=null,on=i();on.applyTranslations(),document.querySelectorAll(`.trajectory-sentences__sentence > [data-i18n]`).forEach(e=>{e.replaceWith(e.textContent)}),o.registerPlugin(c),a(on),n(),$(`soft-white`);var sn=document.documentElement.dataset.homeLoaderState===`pending`,cn=window.__homeScrollIntent??{hash:null,offset:0},ln=document.documentElement.dataset.homeLoaderState===`restoring`,un=Re({enabled:sn,minimumDuration:2}),Z=new l({anchors:!0});Z.on(`scroll`,c.update),u(Z),o.ticker.add(e=>{Z.raf(e*1e3)}),o.ticker.lagSmoothing(0);var dn=sn,fn=()=>{if(dn){Z.stop();return}Z.start()};fn();var{pageTransition:pn,shouldRevealTransition:mn}=r(),hn=mn&&!sn;sn&&mn&&pn.reset();var gn=wn();s({pageTransition:pn,onNavigateStart:()=>{Z.stop()},onNavigateCancelled:()=>{fn()}}),window.addEventListener(`pagehide`,()=>{Z.start();try{sessionStorage.setItem(`homeScrollOffset`,String(Math.round(window.scrollY))),sessionStorage.setItem(`homeScrollTheme`,document.body.dataset.interfaceColor??`cream`)}catch{}}),window.addEventListener(`pageshow`,()=>{fn()});var _n=await(async()=>{try{let e=await Bt({autoStart:!1,reducedMotion:t,onProgress:e=>{un.setProgress(e)}});return e.setInteractive(!1),await e.ready,Nn(Mn(e)),e.setInteractive(!1),e}catch(e){return console.error(`Unable to prepare the Three.js hero.`,e),document.querySelector(`.webgl`)?.remove(),null}})();await un.complete(),An(_n),await un.revealLogo(),await un.revealHero(),sn&&(document.documentElement.dataset.homeLoaderState=`ready`),un.dispose(),dn=!1,fn(),_n?.setInteractive(!0),document.fonts.ready.then(()=>{Pn(),Fn(),In(),Ln(),Rn();let{projectsTimeline:e,ensureProjectPhysics:t}=zn(),n=Vn();Bn(),kn(),On(),c.refresh(),Z.resize(),Dn(),gn.init({projectsTimeline:e,ensureProjectPhysics:t,nextSectionTrigger:n})});function vn(e){!e||e.dataset.splitted===`true`||(e.innerHTML=e.innerHTML.trim().split(/<br\s*\/?>/i).map(e=>e.trim().split(``).map(e=>e===` `?`<span>&nbsp;</span>`:`<span class="letter">${e}</span>`).join(``)).join(`<br />`),e.dataset.splitted=`true`)}function yn(e){let t=e.textContent.trim();e.setAttribute(`aria-label`,t),e.innerHTML=t.split(``).map(e=>`
    <span class="project-letter" aria-hidden="true">
      <span class="project-letter__content">
        ${e===` `?`&nbsp;`:e}
      </span>
    </span>
    `).join(``)}function bn(e,t,n){return o.utils.clamp(0,1,(e-t)/(n-t))}function xn(){return 1-o.utils.clamp(8,40,window.innerWidth*.025-8)*2/window.innerWidth}function Sn(){return o.utils.clamp(8,16,window.innerWidth*.025-8)}function Cn(){let e=window.innerWidth,t=e-Sn()*2;return(e*xn()-o.utils.clamp(8,24,e*.0125)*2)/t}function Q(e){document.body.dataset.interfaceColor!==e&&(document.body.dataset.interfaceColor=e)}function $(e=null){if(e){document.body.dataset.headerCapsuleVariant=e;return}delete document.body.dataset.headerCapsuleVariant}function wn(){let e=new Set([`#hero`,`#manifesto`,`#parcours`,`#toolkit`,`#projects`,`#contact`]),n={"#hero":`cream`,"#manifesto":`dark`,"#parcours":`cream`,"#toolkit":`cream`,"#projects":`dark`,"#contact":`cream`},r=()=>window.innerHeight*3.5,i=e.has(cn.hash)?cn.hash:null;i===`#projects`&&!t&&Xt().catch(()=>{});function a(e){e===`#parcours`?Tn():e===`#contact`&&En()}function o(e,t){let{projectsTimeline:n,nextSectionTrigger:r}=t;if(e===`#hero`)return 0;if(e===`#projects`){let e=n?.scrollTrigger?.labelToScroll(`projects-visible`);return e==null?null:e-1}if(e===`#contact`)return r?r.end-1:null;let i=document.querySelector(e);return i?i.getBoundingClientRect().top+window.scrollY:null}function s(e,t){let n=`${window.location.pathname}${window.location.search}${e}`;if(t===`replace`){history.replaceState(null,``,n);return}window.location.hash!==e&&history.pushState(null,``,n)}function l(e,t,{immediate:r=!1,historyMode:i=`push`}={}){let a=o(e,t);return a==null?!1:(Z.scrollTo(a,{immediate:r,force:!0,userData:{keepHeaderVisible:!0}}),r&&(c.update(),Q(n[e]),$(e===`#hero`?`soft-white`:null)),s(e,i),!0)}function u(e){let t=document.querySelector(e)?.closest(`.next-section__container`);t&&(t.scrollTop=0,t.scrollLeft=0)}function d(){let e=document.querySelectorAll(`.site-header__logo, .scroll-indicator__item[href="#hero"]`);if(!e.length)return;async function t(e){if(!(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)&&(e.preventDefault(),e.stopPropagation(),!(window.scrollY<=1))){pn.setColor(`cream`),Z.stop();try{await pn.run(()=>{Z.scrollTo(0,{immediate:!0,force:!0,userData:{keepHeaderVisible:!0}}),c.update(),Q(`cream`),$(`soft-white`),history.pushState(null,``,window.location.pathname+window.location.search)},{mode:`circle`})}finally{Z.start()}}}e.forEach(e=>{e.addEventListener(`click`,t)})}function f(t){document.querySelectorAll(`a[href]`).forEach(i=>{let s=new URL(i.href,window.location.href).hash;!e.has(s)||s===`#hero`||i.addEventListener(`click`,async e=>{if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let i=o(s,t);if(i!=null){if(a(s),s===`#projects`&&(nn(),t.ensureProjectPhysics()),e.preventDefault(),e.stopPropagation(),!(Math.abs(i-window.scrollY)>r())){l(s,t);return}pn.setColor(n[s]),Z.stop();try{await pn.run(()=>{l(s,t,{immediate:!0})})}finally{Z.start()}}})})}function p(t){d(),f(t),window.addEventListener(`hashchange`,()=>{let n=window.location.hash;e.has(n)&&(a(n),n===`#projects`&&(nn(),t.ensureProjectPhysics()),u(n),requestAnimationFrame(()=>{l(n,t,{immediate:!0,historyMode:`replace`})}))});let n=i?0:cn.offset;function r(){c.clearScrollMemory(`auto`),ln&&(document.documentElement.dataset.homeLoaderState=`skipped`)}if(!i&&n<=0){r(),hn&&pn.reveal({mode:`circle`});return}function o(){c.refresh(),Z.resize(),i&&(a(i),i===`#projects`&&(nn(),t.ensureProjectPhysics())),requestAnimationFrame(async()=>{try{i?l(i,t,{immediate:!0,historyMode:`replace`}):(Z.scrollTo(n,{immediate:!0,force:!0}),c.update())}finally{r()}hn&&await pn.reveal(i?void 0:{mode:`circle`})})}document.readyState===`complete`?o():window.addEventListener(`load`,o,{once:!0})}return{init:p}}function Tn(){document.querySelector(`.trajectory-sentences`)?.classList.add(`is-background-ready`),an?.prepare()}function En(){document.querySelector(`.next-section`)?.classList.add(`is-background-ready`)}function Dn(){let e=[{element:document.querySelector(`.trajectory-sentences`),load:Tn},{element:document.querySelector(`.next-section`),load:En}].filter(({element:e})=>e);if(!e.length)return;let t=new Map(e.map(({element:e,load:t})=>[e,t])),n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t.get(e.target)?.(),n.unobserve(e.target))})},{rootMargin:`2000px 0px`});e.forEach(({element:e})=>{n.observe(e)})}function On(){let e=document.querySelector(`.scroll-indicator`);if(!e)return;let t=[...e.querySelectorAll(`.scroll-indicator__item`)],n=[`.hero-three`,`.manifesto`,`.trajectory`,`.toolkit`,`.projects`,`.next-section`].map(e=>document.querySelector(e));if(!t.length||n.some(e=>!e))return;let r=0,i=null,a=!1;function o(e){t.forEach((t,n)=>{let r=Math.abs(n-e),i=r===0;t.classList.toggle(`is-active`,i),t.classList.toggle(`is-neighbor`,r===1)})}function s(t){a!==t&&(a=t,e.classList.toggle(`is-hidden`,t),e.toggleAttribute(`inert`,t),t&&(i=null,o(r)))}function l(e){r=e,t.forEach((t,n)=>{n===e?t.setAttribute(`aria-current`,`location`):t.removeAttribute(`aria-current`)}),o(i??r)}n.forEach((e,r)=>{let i=n[r+1];c.create({trigger:e,start:`top center`,endTrigger:i,end:i?`top center`:`max`,invalidateOnRefresh:!0,onUpdate:e=>{t[r].style.setProperty(`--scroll-indicator-progress`,e.progress),r===n.length-1&&s(c.maxScroll(window)-window.scrollY<=48)},onEnter:()=>{l(r)},onEnterBack:()=>{l(r)}})}),t.forEach((e,t)=>{e.addEventListener(`pointerenter`,e=>{e.pointerType!==`touch`&&(i=t,o(i))})}),e.addEventListener(`pointerleave`,()=>{i=null,o(r)}),l(0)}function kn(){let e=document.querySelector(`.manifesto`);c.create({trigger:e,start:`top -425px`,onEnter:()=>{Q(`dark`)},onEnterBack:()=>{Q(`dark`)},onLeaveBack:()=>{Q(`cream`)},markers:!1});let t=document.querySelector(`.trajectory`);c.create({trigger:t,start:`top 80px`,onEnter:()=>{Q(`cream`)},onEnterBack:()=>{Q(`cream`)},onLeaveBack:()=>{Q(`dark`)},markers:!1});let n=document.querySelector(`.next-section`);c.create({trigger:n,start:`top 80px`,onEnter:()=>{Q(`cream`)},onEnterBack:()=>{Q(`cream`)},onLeaveBack:()=>{Q(`dark`)}})}function An(e){if(!e)return;let t=document.querySelector(`.hero-three__frame`);if(!t){e.start();return}let n=t=>{if(t){e.start();return}e.pause()};new IntersectionObserver(([e])=>{n(e.isIntersecting)}).observe(t);let r=t.getBoundingClientRect();n(r.bottom>0&&r.top<window.innerHeight)}function jn(){return window.matchMedia(`(hover: none) and (pointer: coarse)`).matches?2800:3500}function Mn(e){return c.create({trigger:`.hero-three`,start:`top top`,end:()=>`+=${jn()}`,scrub:!0,pin:!0,invalidateOnRefresh:!0,markers:!1,onEnter:()=>{$(`soft-white`),e.setInteractive(!0)},onEnterBack:()=>{$(`soft-white`),e.setInteractive(!0)},onLeave:()=>{$(),e.setInteractive(!1)},onLeaveBack:()=>{$(`soft-white`),e.setInteractive(!1)},onUpdate:t=>{e.setScrollProgress(t.progress,t.getVelocity())}})}function Nn(e){if(!e)return;let t=()=>o.utils.clamp(500,850,window.innerHeight*.85);o.to(`.hero-three__frame`,{scaleX:Cn,scaleY:.9,ease:`power2.in`,scrollTrigger:{trigger:`.hero-three`,start:()=>e.end,end:()=>e.end+t(),scrub:!0,invalidateOnRefresh:!0,markers:!1}})}function Pn(){let e=document.querySelector(`.manifesto .text`);if(!e)return;vn(e);let t=document.querySelectorAll(`.manifesto .letter`),n=()=>e.clientWidth-document.body.clientWidth,r=.65,i=()=>n()*r,a=()=>{let e=i(),t=Math.min(1175*r,e*.2);return Math.max(e-t,1)};c.create({trigger:`.manifesto .container`,start:`top top`,end:()=>`+=${a()}`,pin:!0,invalidateOnRefresh:!0,markers:!1});let s=o.to(e,{x:()=>-n(),ease:`none`,scrollTrigger:{trigger:`.manifesto .container`,start:`top top`,end:()=>`+=${i()}`,scrub:!0,invalidateOnRefresh:!0,markers:!1}});t.forEach(e=>{o.from(e,{yPercent:(Math.random()-.5)*400,rotation:(Math.random()-.5)*60,ease:`elastic.out(1.2, 1)`,scrollTrigger:{trigger:e,containerAnimation:s,start:`left 100%`,end:`left 0%`,scrub:.5}})});let l=document.querySelector(`.manifesto`);o.to(`.manifesto .container`,{scaleX:xn,scaleY:.98,borderRadius:`0px 0px 32px 32px`,ease:`none`,scrollTrigger:{trigger:`.trajectory`,start:`top bottom`,end:`top 30%`,scrub:!0,invalidateOnRefresh:!0,markers:!1,onUpdate:e=>{l.classList.toggle(`is-exiting`,e.progress>0)},onLeaveBack:()=>{l.classList.remove(`is-exiting`)}}})}function Fn(){let e=document.querySelector(`.trajectory`);e.querySelectorAll(`.container`).forEach(t=>{let n=t.querySelector(`.title`);vn(n);let r=document.createElement(`span`);r.className=`trajectory-title__motion`,r.append(...n.childNodes),n.append(r);let i=()=>Math.max(t.clientHeight-n.clientHeight,1);c.create({trigger:t,pin:n,start:`top top`,end:()=>`+=${i()*1.2}`,invalidateOnRefresh:!0}),o.fromTo(r,{y:()=>-i()*.5},{y:0,ease:`none`,scrollTrigger:{trigger:e,start:`top bottom`,end:`top 30%`,scrub:!0,invalidateOnRefresh:!0,markers:!1}}),r.querySelectorAll(`.letter`).forEach(e=>{let n=Math.random(),r=()=>i()*n;o.from(e,{y:r,ease:`none`,scrollTrigger:{trigger:t,start:`top top`,end:()=>`+=${r()}`,scrub:!0,invalidateOnRefresh:!0}})}),o.to(n,{scale:.6,transformOrigin:`center center`,ease:`none`,scrollTrigger:{trigger:t,start:()=>`top+=${i()*.8} top`,end:()=>`top+=${i()*1.5} top`,scrub:!0,invalidateOnRefresh:!0}}),o.to(n,{fontWeight:400,ease:`none`,scrollTrigger:{trigger:t,start:()=>`top+=${i()} top`,end:()=>`top+=${i()+200} top`,scrub:!0,invalidateOnRefresh:!0,markers:!1}})})}function In(){let e=window.matchMedia(`(hover: hover) and (pointer: fine)`).matches,n={idlePeak:.01,idleStable:.012,interactionMax:+!!e,zoomActive:1.02,neutralHold:.08,wakeDuration:.4,wakePeakRatio:.5,playDuration:.42},r={idleStrength:0,interactionStrength:0,zoom:1},i=document.querySelector(`.trajectory-sentences`);if(!i)return;let a=i.querySelector(`.trajectory-sentences__pin-height`),s=i.querySelector(`.trajectory-sentences__container`),l=i.querySelectorAll(`.trajectory-sentences__sentence`),u=l[l.length-1],d=i.querySelector(`.trajectory-sentences__visual--left`),f=i.querySelector(`.trajectory-sentences__visual--right`);an=Jt(i,{reducedMotion:t}),o.set(d,{xPercent:-101,yPercent:-50}),o.set(f,{xPercent:101,yPercent:-50}),l.forEach(e=>{vn(e)});let p=u.querySelectorAll(`span`),m=l[0],h=m.querySelectorAll(`span`);o.set(m,{yPercent:50,y:`50vh`}),o.set(h,{yPercent:50,y:`50vh`}),c.create({trigger:a,start:`top top`,end:`bottom bottom`,pin:s,markers:!1});let g=o.timeline({scrollTrigger:{trigger:a,start:`top top`,end:`bottom bottom`,scrub:!0,markers:!1}});g.to({},{duration:.3}),g.to(m,{yPercent:0,y:0,ease:`power3.out`}),g.to(h,{yPercent:0,y:0,ease:`power3.out`,stagger:.02},`<`),l.forEach((a,o)=>{let s=l[o+1],c=s?.classList.contains(`is-dialogue`),m=s?.classList.contains(`is-both`);c&&(g.set([i],{backgroundColor:`var(--color-cream)`},`<+=0.2`),g.set(l,{color:`var(--color-dark)`},`<`),g.to({},{duration:1e-4,onStart:()=>{Q(`dark`)},onReverseComplete:()=>{Q(`cream`)}},`<`)),m&&(g.to(d,{xPercent:-30,opacity:1,ease:`power3.out`},`<+=0.15`),g.to(f,{xPercent:30,opacity:1,ease:`power3.out`},`<`)),s&&(g.to(a,{yPercent:-50,y:`-50vh`,ease:`power3.in`}),g.to(a.querySelectorAll(`span`),{yPercent:-50,y:`-50vh`,stagger:.02,ease:`power3.in`},`<+=0.1`),g.from(s,{yPercent:50,y:`50vh`,ease:`power3.out`},`<+=0.10`),g.from(s.querySelectorAll(`span`),{yPercent:50,y:`50vh`,ease:`power3.out`,stagger:.02},`<`),m&&(g.to(d,{xPercent:0,width:`calc(50vw + 1px)`,ease:`power3.inOut`},`<`),g.to(f,{xPercent:0,width:`calc(50vw + 1px)`,ease:`power3.inOut`},`<`),g.set(s,{color:`var(--color-cream)`},`>-=0.05`),g.to([d,f],{height:`100vh`,borderRadius:`0px`,ease:`power3.inOut`},`>+=0.2`),g.addLabel(`trajectoryStaticHandoff`,g.recent().endTime()),g.to({},{duration:.001,onStart:()=>{Q(`cream`),$(`soft-white`)},onReverseComplete:()=>{Q(`dark`),$()}},`>-35%`),t?g.to({},{duration:.4}):(g.to({},{duration:n.neutralHold}),g.addLabel(`trajectoryWakeUp`),g.to(r,{idleStrength:n.idlePeak,duration:n.wakeDuration*n.wakePeakRatio,ease:`sine.inOut`}),g.to(r,{idleStrength:n.idleStable,duration:n.wakeDuration*(1-n.wakePeakRatio),ease:`sine.inOut`}),g.to(r,{interactionStrength:n.interactionMax,zoom:n.zoomActive,duration:n.wakeDuration,ease:`sine.inOut`},`trajectoryWakeUp`),e&&(g.to(p,{color:`rgba(245, 231, 223, 0)`,duration:n.wakeDuration,ease:`sine.inOut`},`trajectoryWakeUp`),g.to(u,{"--trajectory-text-stroke-width":`1.5px`,duration:n.wakeDuration,ease:`sine.inOut`},`trajectoryWakeUp`)),g.addLabel(`trajectoryPlay`),g.to({},{duration:n.playDuration})),g.set(i,{backgroundColor:`var(--color-black)`},`>`)))});let _=()=>{let t=g.labels.trajectoryStaticHandoff,n=g.labels.trajectoryPlay;an.setActive(t!==void 0&&g.time()>=t,r),u.classList.toggle(`is-pointer-play`,e&&n!==void 0&&g.time()>=n&&g.time()<g.duration())};return g.eventCallback(`onUpdate`,_),c.addEventListener(`refresh`,_),_(),g}function Ln(){let e=document.querySelector(`.trajectory-sentences__container`),t=document.querySelector(`.trajectory-sentences__center`),n=document.querySelector(`.toolkit`),r=document.querySelector(`.toolkit__title`),i=o.timeline({scrollTrigger:{trigger:n,start:`top bottom`,end:`top 30%`,scrub:!0,invalidateOnRefresh:!0,markers:!1,onEnter:()=>$(),onLeaveBack:()=>$(`soft-white`)}});i.to(e,{scaleX:xn,scaleY:.98,borderRadius:`0px 0px 32px 32px`,transformOrigin:`center top`,ease:`none`},0),i.to(t,{scale:.9,transformOrigin:`center center`,ease:`none`},0),i.fromTo(r,{fontWeight:500},{fontWeight:700,ease:`none`},0)}function Rn(){let e=document.querySelector(`.toolkit`);if(!e)return;let n=e.querySelector(`.toolkit__pin-height`),r=e.querySelector(`.toolkit__container`),i=e.querySelector(`.toolkit__wheel--frontend`),a=e.querySelectorAll(`.toolkit__wheel--frontend .toolkit__slot`),s=e.querySelector(`.toolkit__wheel--art-direction`),l=e.querySelectorAll(`.toolkit__wheel--art-direction .toolkit__slot`),u=e.querySelector(`.toolkit__slot--transition`),d=u?.querySelector(`.toolkit-card__flipper`),f=e.querySelector(`.toolkit__subtitle--front`),p=e.querySelector(`.toolkit__subtitle--art`),m=s?.querySelector(`.toolkit-card--transition`),h=m?.closest(`.toolkit__slot`),g=m?.querySelector(`.toolkit-card__cream-reveal`),_=Ut(g,{reducedMotion:t}),v=3.5,y=.94,b=`elastic.out(0.6, 0.3)`,x=.5,S=.3,C=.35,w=.45,T=.75,E=.8,D=.95,O=a.length+10,k=o.parseEase(`power3.in`),A=0,ee=0,j=0,M=0,N=!1,P=8,F=``,I=null,L=null,R=0,z=(e,t,n)=>o.utils.clamp(0,1,(e-t)/(n-t)),B=e=>Math.max(.25,1-e*.18),te=()=>{let e=`${window.innerWidth}x${window.innerHeight}`;if(e===F)return P;let t=m.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=Math.max(n,window.innerWidth-n)*2,a=Math.max(r,window.innerHeight-r)*2,o=Math.max(m.offsetWidth,1),s=Math.max(m.offsetHeight,1);return P=Math.max(i/o,a/s)*1.1,F=e,P};function ne(){A=0,ee=0,j=0,M=0,N=!1}function re(){a.forEach((e,t)=>{e.classList.toggle(`is-visible`,t===0),o.set(e,{rotation:t*v,zIndex:t+1,scale:1})}),i.classList.add(`is-interactive`),o.set(i,{rotation:0,autoAlpha:1,pointerEvents:`auto`})}function ie(){l.forEach((e,t)=>{e.classList.toggle(`is-visible`,t===0),o.set(e,{rotation:t*v,zIndex:t+1,scale:1})}),o.set(m,{clearProps:`transform`}),o.set(g,{autoAlpha:1}),s.classList.remove(`is-interactive`),o.set(s,{rotation:0,autoAlpha:0,pointerEvents:`none`})}function V(){o.set(d,{rotationY:0}),o.set(f,{autoAlpha:1}),o.set(p,{autoAlpha:0})}function H(){ne(),re(),ie(),V(),_.setProgress(0)}function ae(e){e.forEach((e,t)=>{let n=e.querySelector(`.toolkit-card`);n&&(n.addEventListener(`pointerenter`,t=>{t.pointerType!==`touch`&&o.set(e,{zIndex:O})}),n.addEventListener(`pointerleave`,n=>{n.pointerType!==`touch`&&e!==L&&o.set(e,{zIndex:t+1})}))})}function oe(e,t){let n=1-.030000000000000027*t,r=1+.07000000000000006*t,i=o.timeline();return i.to(e,{y:6*t,scale:n,duration:.08,ease:`power2.in`}),i.to(e,{y:-24*t,scale:r,duration:.18,ease:`power3.out`}),i.to(e,{y:0,scale:1,duration:.42,ease:`elastic.out(0.8, 0.35)`}),i}function U(e,t){let n=[...e];if(!n[t]?.classList.contains(`is-visible`))return null;let r=o.timeline({paused:!0});return n.forEach((e,n)=>{if(!e.classList.contains(`is-visible`))return;let i=Math.abs(n-t),a=B(i),o=i*.045,s=oe(e.querySelectorAll(`.toolkit-card__motion`),a);r.add(s,o)}),r}function se(){if(!L)return;let e=window.matchMedia(`(any-hover: hover) and (any-pointer: fine)`).matches&&L.matches(`:hover`);o.set(L,{zIndex:e?O:R}),L=null,R=0}function ce(){I?.kill(),se();let t=e.querySelectorAll(`.toolkit-card__motion`);o.killTweensOf(t,`y,scale`),o.set(t,{y:0,scale:1}),I=null}function le(e){e.forEach((t,n)=>{let r=t.querySelector(`.toolkit-card`);r&&r.addEventListener(`click`,()=>{ce();let r=U(e,n);r&&(I=r,L=t,R=n+1,o.set(t,{zIndex:O}),r.eventCallback(`onComplete`,()=>{I===r&&(se(),I=null)}),r.play())})})}H(),ae(a),ae(l),le(a),le(l),c.create({trigger:n,start:`top top`,end:`bottom top`,pin:r,scrub:!0,markers:!1,onUpdate:e=>{I&&ce(),Q(e.progress>=.975?`dark`:`cream`);let t=e.progress>=w,n=t&&e.progress<E;o.set(s,{autoAlpha:+!!t,pointerEvents:n?`auto`:`none`}),o.set(i,{autoAlpha:+!t,pointerEvents:t?`none`:`auto`}),s.classList.toggle(`is-interactive`,n),i.classList.toggle(`is-interactive`,!t);let r=Math.min(e.progress/S,1),c=Math.min(Math.floor(r*a.length),a.length-1);if(c!==A){if(c>A)for(let e=A+1;e<=c;e++)a[e].classList.add(`is-visible`),o.fromTo(a[e],{scale:y},{scale:1,ease:b,duration:x});else for(let e=A;e>c;e--)a[e].classList.remove(`is-visible`);A=c}if(e.progress<S){c!==ee&&(o.to(i,{rotation:-(c*v)/2,ease:b,duration:x,overwrite:!0}),ee=c);return}let g=z(e.progress,S,C);a.forEach((e,t)=>{let n=t*v*(1-g);o.set(e,{rotation:n})});let O=-((a.length-1)*v)/2*(1-g);o.set(i,{rotation:O}),e.progress>=C&&!N&&(a.forEach(e=>{e!==u&&e.classList.remove(`is-visible`)}),u.classList.add(`is-visible`),N=!0),e.progress<C&&N&&(a.forEach((e,t)=>{e.classList.toggle(`is-visible`,t<=A)}),N=!1);let P=z(e.progress,C,w);o.set(d,{rotationY:180*P});let F=z(P,0,.5),L=z(P,.5,1);o.set(f,{autoAlpha:1-F}),o.set(p,{autoAlpha:L});let R=z(e.progress,w,T),B=Math.min(Math.floor(R*l.length),l.length-1);if(B!==j){if(B>j)for(let e=j+1;e<=B;e++)l[e].classList.add(`is-visible`),o.fromTo(l[e],{scale:y},{scale:1,ease:b,duration:x});else for(let e=j;e>B;e--)l[e].classList.remove(`is-visible`);j=B}if(B!==M&&o.to(s,{rotation:-(B*v)/2,ease:b,duration:x,overwrite:!0}),M=B,e.progress>=T){let t=z(e.progress,T,E);o.killTweensOf(s),l.forEach((e,n)=>{let r=n*v*(1-t);o.set(e,{rotation:r})});let n=-((l.length-1)*v)/2*(1-t);o.set(s,{rotation:n}),o.set(h,{zIndex:l.length+20})}let ne=z(e.progress,E,D);if(_.setProgress(ne),e.progress>=E&&e.progress<D&&o.set(m,{scale:1}),e.progress>=D){let t=k(z(e.progress,D,1)),n=o.utils.interpolate(1,te(),t);o.set(m,{scale:n})}},onLeave:()=>{o.set(r,{autoAlpha:0})},onEnterBack:()=>{o.set(r,{autoAlpha:1})},onLeaveBack:()=>{H()}})}function zn(){let e=document.querySelector(`.projects`),n=e.querySelector(`.projects__pin-height`),r=e.querySelector(`.projects__container`),i=e.querySelector(`.projects__title`),a=e.querySelector(`.projects__list`),s=e.querySelectorAll(`.projects__link`),l=window.matchMedia(`(hover: hover) and (pointer: fine)`).matches;s.forEach(e=>{yn(e)}),l&&(rn(s),c.create({trigger:e,start:()=>`top bottom+=${window.innerHeight*5}`,once:!0,invalidateOnRefresh:!0,onEnter:nn}));let u=Qt(s,{monitorPerformance:!l,disabled:t});c.create({trigger:e,start:()=>`top bottom+=${window.innerHeight*5}`,once:!0,invalidateOnRefresh:!0,onEnter:u.ensure}),o.set(i,{autoAlpha:0}),o.set(s,{autoAlpha:0,yPercent:35}),c.create({trigger:n,start:`top top`,end:`bottom bottom`,pin:r,markers:!1,onEnter:()=>{u.start()},onEnterBack:()=>{u.start()},onLeave:()=>{u.settleAndStop()},onLeaveBack:()=>{u.settleAndStop()},onUpdate:e=>{let t=e.getVelocity();if(Math.abs(t)>4e3){u.setScrollVelocity(0);return}u.setScrollVelocity(t)}});let d=o.timeline({scrollTrigger:{trigger:n,start:`top top`,end:`bottom bottom`,scrub:!0,invalidateOnRefresh:!0,markers:!1}});d.to(i,{autoAlpha:1,duration:.08,ease:`power1.out`}),d.to(s,{autoAlpha:1,yPercent:0,duration:.5,stagger:.18,ease:`power2.out`},`>`),d.addLabel(`projects-visible`);let f=o.timeline({scrollTrigger:{trigger:`.next-section`,start:`top bottom`,end:`top 30%`,scrub:!0,invalidateOnRefresh:!0,markers:!1}});return f.to(r,{scaleX:xn,scaleY:.98,borderRadius:`0px 0px 32px 32px`,transformOrigin:`center top`,ease:`none`},0),f.to([i,a],{scale:.9,transformOrigin:(e,t)=>`50% ${r.clientHeight/2-t.offsetTop}px`,ease:`none`},0),{projectsTimeline:d,ensureProjectPhysics:u.ensure}}function Bn(){if(t)return;let e=document.querySelector(`.next-section__playground-link`),n=e?.closest(`.next-section`),r=e?Array.from(e.querySelectorAll(`.playground-link__letter`)):[];if(!n||!r.length)return;let i=null;e.addEventListener(`playground-hover-start`,()=>{i&&(i.kill(),i=null,o.set(r,{yPercent:0}))}),c.create({trigger:n,start:`top 75%`,once:!0,onEnter:()=>{if(e.matches(`:hover`))return;let t=r.length>1?.22/(r.length-1):0;i=o.timeline({onComplete:()=>{i=null}}),r.forEach((e,n)=>{let r=n*t;i.to(e,{yPercent:-12,duration:.12,ease:`power2.out`},r).to(e,{yPercent:5,duration:.1,ease:`sine.inOut`},r+.12).to(e,{yPercent:0,duration:.14,ease:`power2.out`},r+.22)})}})}function Vn(){let e=document.querySelector(`.next-section`);if(!e)return;let t=e.querySelector(`.next-section__pin-height`),n=e.querySelector(`.next-section__container`),r=e.querySelector(`.next-section__intro`),i=e.querySelector(`.next-section__svg`),a=e.querySelector(`#nextPath`),s=e.querySelector(`.next-section__text`),l=e.querySelector(`#nextTextPath`),u=e.querySelector(`#nextTextCream`),d=e.querySelector(`#nextTextGradientPart`),f=e.querySelector(`#nextOrb`),p=e.querySelector(`.next-footer`),m=i.viewBox.baseVal,h=m.width,g=m.height;i.style.aspectRatio=h/g;let _=i.getBoundingClientRect().width,v=n.getBoundingClientRect().width/_,y={x:0,y:0},b={x:0,y:0},x={x:0,y:0};o.set(f,{autoAlpha:0}),o.set(p,{clipPath:`circle(0px at 50% 50%)`});let S=o.quickSetter(p,`clipPath`),C=o.quickSetter(p,`webkitClipPath`);function w(){i.setAttribute(`viewBox`,`${y.x} ${y.y} ${h} ${g}`)}let T={duration:.2,ease:`power1`},E=o.quickTo(y,`y`,T),D=o.quickTo(y,`x`,{...T,onUpdate:w});function O(e){let t=0,n=a.getTotalLength();for(let r=0;r<20;r++){let r=(t+n)/2;a.getPointAtLength(r).x<e?t=r:n=r}return(t+n)/2}let k=u.textContent.trim()+` `,A=d.textContent.trim().replace(/\.$/,``),ee=`${A}.`,j=k.split(``),M=A.split(``),N=j.length+M.length,P=-1;u.textContent=k,d.textContent=ee;let F=l.getComputedTextLength();d.textContent=A;let I=l.getComputedTextLength(),L=s.getNumberOfChars()-1,R=O(s.getEndPositionOfChar(L).x)+Math.max(0,(F-I)/2);u.textContent=``,d.textContent=``;let z=1e3,B=[];for(let e=0;e<z;e++){let t=e/(z-1)*R,n=a.getPointAtLength(t);B.push({x:n.x,y:n.y})}let te=a.getPointAtLength(R);o.set(f,{attr:{cx:te.x,cy:te.y},autoAlpha:0});function ne(){return x.x=y.x+b.x,x.y=y.y+b.y,x}function re(){let e=n.getBoundingClientRect(),t=(p.getBoundingClientRect().top-e.top)/2,r=e.height/2,a=i.getScreenCTM();return a?(t-r)/Math.abs(a.d):-200}o.to(r,{autoAlpha:0,ease:`power2.out`,scrollTrigger:{trigger:t,start:`top+=3% top`,end:`top+=7.5% top`,scrub:!0,markers:!1}});let ie=.82,V=h*v*.1,H=0,ae=0,oe=0,U=!1,se=0,ce=null;function le(){H=re(),ae=Math.hypot(p.offsetWidth/2,p.offsetHeight/2);let e=p.getBoundingClientRect(),t=i.getBoundingClientRect(),n=e.left+e.width/2,r=e.top+e.height/2;b.x=(n-t.left)*(h/t.width),b.y=(r-t.top)*(g/t.height)}return le(),c.create({trigger:t,start:`top top`,end:`bottom bottom`,pin:n,scrub:!0,markers:!1,onRefresh:le,onUpdate:e=>{let t=bn(e.progress,.1,ie),n=bn(e.progress,ie,1),r=bn(t,.8,1),i=o.utils.interpolate(V,0,r),a=B[Math.floor(t*(B.length-1))];E(a.y-g/2-30),D(a.x-b.x-i);let c=Math.floor(t*N);if(c!==P){let e=Math.min(c,j.length),t=Math.max(0,c-j.length);u.textContent=j.slice(0,e).join(``),d.textContent=M.slice(0,t).join(``),P=c}let l=n>.06,m=bn(n,.3,.6),h=H*m;h!==ce&&(o.set(s,{y:h}),ce=h);let _=bn(n,.3,.6),v=_>0?ne():te,y=o.utils.interpolate(te.x,v.x,_),x=o.utils.interpolate(te.y,v.y,_),w=o.utils.interpolate(14,14,_),T=o.utils.interpolate(`#ff6b4a`,`#9b7cff`,_),O=bn(n,.6,1),k=o.utils.interpolate(0,ae,O);if(O>0||oe>0){let e=`circle(${k}px at 50% 50%)`;S(e),C(e)}oe=O;let A=O>.4;A!==U&&(o.set(p,{pointerEvents:A?`auto`:`none`}),U=A);let ee=bn(k,11.9,18.900000000000002),F=l?1-ee:0;(F>0||se>0)&&o.set(f,{autoAlpha:F,attr:{cx:y,cy:x,r:w,fill:T}}),se=F}})}