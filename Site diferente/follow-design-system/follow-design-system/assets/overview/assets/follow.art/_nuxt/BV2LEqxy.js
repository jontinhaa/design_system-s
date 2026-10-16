var q=Object.defineProperty;var Y=(n,t,e)=>t in n?q(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var F=(n,t,e)=>Y(n,typeof t!="symbol"?t+"":t,e);import{M,I as Z,b as J,R as K,H as Q,c as C,L as k,d as y,e as ee,C as te,V as ae,u as E,f as O,D,g as ne,h as oe,P as B}from"./DWFUgupW.js";import{i as re,aE as se,v as ie,aC as ce,an as le,aD as fe,I as ue,w as z,E as me,k as de,A as N,V as pe,z as ge}from"./eTEf9KTV.js";import{u as ve}from"./BGEDHXjf.js";import"./BlS71BOR.js";const g=4,v=1024,u=4;function he(n=1){const t=new Uint16Array(v*u*n*g),e=new J(t,v,u*n,K,Q);return e.wrapS=C,e.wrapY=C,e.magFilter=k,e.minFilter=k,e.needsUpdate=!0,e}function we(n,t,e=0){const o=Math.floor(v*(u/4));t.arcLengthDivisions=o/2,t.updateArcLengths();const l=t.getSpacedPoints(o),s=t.computeFrenetFrames(o,!0);for(let a=0;a<o;a++){const i=Math.floor(a/v),c=a%v;let r=l[a];b(n,c,r.x,r.y,r.z,0+i+u*e),r=s.tangents[a],b(n,c,r.x,r.y,r.z,1+i+u*e),r=s.normals[a],b(n,c,r.x,r.y,r.z,2+i+u*e),r=s.binormals[a],b(n,c,r.x,r.y,r.z,3+i+u*e)}n.needsUpdate=!0}function b(n,t,e,o,l,s){const a=n.image,{data:i}=a,c=g*v*s;i[t*g+c+0]=y.toHalfFloat(e),i[t*g+c+1]=y.toHalfFloat(o),i[t*g+c+2]=y.toHalfFloat(l),i[t*g+c+3]=y.toHalfFloat(1)}function xe(n){return{spineTexture:{value:n},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:161},spineLength:{type:"f",value:400},flow:{type:"i",value:1}}}function G(n,t,e=1){n.__ok||(n.__ok=!0,n.onBeforeCompile=o=>{if(o.__modified)return;o.__modified=!0,Object.assign(o.uniforms,t);const l=`
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;

		float textureLayers = ${u*e}.;
		float textureStacks = ${u/4}.;

		${o.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
void main() {
#include <beginnormal_vertex>

vec4 worldPos = modelMatrix * vec4(position, 1.);

bool bend = flow > 0;
float xWeight = bend ? 0. : 1.;

#ifdef USE_INSTANCING
float pathOffsetFromInstanceMatrix = instanceMatrix[3][2];
float spineLengthFromInstanceMatrix = instanceMatrix[3][0];
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
float mt = (spinePortion * pathSegment + pathOffset + pathOffsetFromInstanceMatrix)*textureStacks;
#else
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
float mt = (spinePortion * pathSegment + pathOffset)*textureStacks;
#endif

mt = mod(mt, textureStacks);
float rowOffset = floor(mt);

#ifdef USE_INSTANCING
rowOffset += instanceMatrix[3][1] * ${u}.;
#endif

vec3 spinePos = texture2D(spineTexture, vec2(mt, (0. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 a =        texture2D(spineTexture, vec2(mt, (1. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 b =        texture2D(spineTexture, vec2(mt, (2. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 c =        texture2D(spineTexture, vec2(mt, (3. + rowOffset + 0.5) / textureLayers)).xyz;
mat3 basis = mat3(a, b, c);

vec3 transformed = basis
	* vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
	+ spinePos;

vec3 transformedNormal = normalMatrix * (basis * objectNormal);
			`).replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`);o.vertexShader=l})}class H{constructor(t,e=1){const o=t.clone(),l=he(e),s=xe(l);o.traverse(function(a){if(a instanceof M||a instanceof Z)if(Array.isArray(a.material)){const i=[];for(const c of a.material){const r=c.clone();G(r,s,e),i.push(r)}a.material=i}else a.material=a.material.clone(),G(a.material,s,e)}),this.curveArray=new Array(e),this.curveLengthArray=new Array(e),this.object3D=o,this.splineTexture=l,this.uniforms=s}updateCurve(t,e){if(t>=this.curveArray.length)throw Error("Flow: Index out of range.");const o=e.getLength();this.uniforms.spineLength.value=o,this.curveLengthArray[t]=o,this.curveArray[t]=e,we(this.splineTexture,e,t)}moveAlongCurve(t){this.uniforms.pathOffset.value+=t}}new ee;class ye extends te{constructor(){super();F(this,"options");this.options={scale:15}}getPoint(e,o=new ae){const l=this.options.scale;return o.set(Math.cos(e*Math.PI*2)*l,0,Math.sin(e*Math.PI*2)*l)}}const be={class:"landing-1-intro-webgl"},Me=["data-preload-event"],_e=re({__name:"Landing1IntroWebGl",setup(n){const t=se(),e=ie("container"),o=ce(),l=le(o.x,{inviewElement:e}),{matches:s}=ve({query:"sm-down"}),a=fe(),i=[a("/images/landing/1.intro/webgl/Card-1.png",{width:1050,format:"avif"}),a("/images/landing/1.intro/webgl/Card-2.png",{width:1050,format:"avif"}),a("/images/landing/1.intro/webgl/Card-3.png",{width:1050,format:"avif"}),a("/images/landing/1.intro/webgl/Card-4.png",{width:1050,format:"avif"}),a("/images/landing/1.intro/webgl/Card-5.png",{width:1050,format:"avif"}),a("/images/landing/1.intro/webgl/Card-6.png",{width:1050,format:"avif"}),a("/images/landing/1.intro/webgl/Card-7.png",{width:1050,format:"avif"}),a("/images/landing/1.intro/webgl/Card-8.png",{width:1050,format:"avif"}),a("/images/landing/1.intro/webgl/Card-9.png",{width:1050,format:"avif"})];return ue(()=>{var c,r;if(e.value){const m=E({container:e.value,camera:{fov:28,near:69,far:200,position:[0,-14,-70],rotation:[Math.PI/180*-192,0,Math.PI/180*-25]},renderer:{transparent:!0,autoRender:!1}}),f=E({container:e.value,camera:{fov:28,far:69,position:[0,-14,-70],rotation:[Math.PI/180*-192,0,Math.PI/180*-25]},renderer:{transparent:!0}}),_=()=>{if(m.camera&&f.camera){const p=s.value?-38:-25,d=s.value?-200:-192;m.camera.rotation.z=f.camera.rotation.z=Math.PI/180*p+(l.value.value-.5)*.2,m.camera.rotation.x=f.camera.rotation.x=Math.PI/180*d}},P=()=>{f.camera&&m.camera&&(m.camera.position.x=f.camera.position.x=s.value?4:0,m.camera.position.y=f.camera.position.y=s.value?-17:-14)};z([l.value,s],_),z(s,P),P(),_();const I=new ye,A=[],L=[],R=new O({color:new ne("#B05A2E"),side:D});i.forEach((p,d)=>{var S,T;const h=f.loadTexture(p,X=>{X.colorSpace=oe}),j=new O({map:h,side:D}),U=new B(9,12.6,10,1),W=new M(U,j),V=new B(9,12.6,10,1),$=new M(V,R),w=new H(W),x=new H($);w.updateCurve(0,I),x.updateCurve(0,I),w.moveAlongCurve(d/i.length),x.moveAlongCurve(d/i.length),(S=f.scene)==null||S.add(w.object3D),(T=m.scene)==null||T.add(x.object3D),A[d]=w,L[d]=x}),(c=f.events)==null||c.on("beforeRender",p=>{const d=p.deltaTime*-5e-5;A.forEach(h=>{h.moveAlongCurve(d)}),L.forEach(h=>{h.moveAlongCurve(d)})}),(r=f.events)==null||r.on("render",()=>{var p;(p=m.renderer)==null||p.render()}),f.start(),m.start()}}),(c,r)=>(de(),me("div",be,[N("div",null,[pe(c.$slots,"default")]),N("div",{ref_key:"container",ref:e,class:"landing-1-intro-webgl__canvas-wrapper","data-preload-event":ge(t)},null,8,Me)]))}}),Te=Object.assign(_e,{__name:"Landing1IntroWebGl"});export{Te as default};
