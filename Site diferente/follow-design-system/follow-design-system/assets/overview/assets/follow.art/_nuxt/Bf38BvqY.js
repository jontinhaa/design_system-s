import{a as P,u as U,T as _,S as b,D as y,P as B,M as O}from"./DWFUgupW.js";import{e as w,a as h}from"./xAAeZd5K.js";import{i as L,v as j,d as A,aC as z,an as p,w as g,aj as C,ap as I,I as T,E as D,k as G,ar as i}from"./eTEf9KTV.js";import{u as k}from"./BGEDHXjf.js";import"./BlS71BOR.js";const V=`#ifndef PI
#define PI 3.141592653589
#endif

#define BUBBLE_AMOUNT 0.2
#define BUBBLE_RADIUS 0.9

uniform vec2 mousePos;
uniform float progressStart;
uniform float progressEnd;
uniform float radius;
varying vec2 vUv;


float scaleValue(float value, float valueMin, float valueMax, float targetMin, float targetMax) {
    return clamp(targetMin + (value - valueMin) / (valueMax - valueMin) * (targetMax - targetMin), min(targetMin, targetMax), max(targetMin, targetMax));
}

vec4 bend(vec4 coords, float progressStart, float progressEnd) {
    vec4 bentCoords = coords;
    float yAnimationOffset = 0.25;

    // Include Y into the progress
    float adjustedProgress = progressStart + (1.0 - coords.y) * yAnimationOffset;

    if (progressStart > 0.5) {
        float endProgressStart = scaleValue(progressStart, 0.5, 1.0, 0.0, 1.0);
        adjustedProgress = progressStart * endProgressStart + adjustedProgress * (1.0 - endProgressStart);
    }

    float angle = (1.0 - adjustedProgress) * PI;
    float zOffset = (2.0 - cos(angle) * 2.0);

    #if USE_MOUSE
        float yOffset = (1.0 - progressStart) * 0.25 + progressEnd * 2.25;
    #else
        float yOffset = (1.0 - progressStart) * 0.55 + progressEnd * 2.25;
    #endif

    bentCoords.y = bentCoords.y * cos(angle) + yOffset;
    bentCoords.z = bentCoords.z * sin(angle) - zOffset;

    return bentCoords;
}

void main() {
    vUv = uv;

    // Progress effect
    vec4 bentPosition = bend(vec4(position, 1.0), progressStart, progressEnd);

    // Mouse effect
    vec4 pos = modelViewMatrix * bentPosition;
    vec4 posScreen = projectionMatrix * pos;
    vec3 posScreenNormalized = posScreen.xyz / posScreen.w;

    #if USE_MOUSE
        float mouseDistance = length(mousePos.xy - posScreenNormalized.xy);
        float displacementStrength = 1.0 - smoothstep(0.0, BUBBLE_RADIUS, mouseDistance);
        float displacement = displacementStrength * BUBBLE_AMOUNT;

        pos.z += displacement;
    #endif

    gl_Position = projectionMatrix * pos;
}
`,N=`varying vec2 vUv;
uniform sampler2D imageTexture;

void main() {
    gl_FragColor = texture2D(imageTexture, vUv);
}
`,R=1/460*540,W=L({__name:"Landing2GetSeenWebGl",setup(Y){const t=j("container"),m=A(()=>t.value&&t.value.closest(".js-get-seen-section")||".js-get-seen-section"),{matches:l}=k({query:"sm-down"}),c=z(t),v=p(c.x,{lerp:.2}),S=p(c.y,{lerp:.2}),d={value:new P(.5,.5)};l.value||g([v.value,S.value],([e,n])=>{const o=e*2-1,s=n*2-1;d.value.set(o,s*-1)});const{svh:M}=C(),x=I(m),u={value:0},f={value:0};return g([x.position.top,M],([e,n])=>{const o=i(e/(n*100),.75,0,0,1,!0),s=i(e/(n*100),0,-2,0,1,!0),a=w(s),r=h(o-s);u.value=i(r,0,1,-.25,1),f.value=a}),T(()=>{var e;if(t.value){const n=U({container:t.value,camera:{fov:28,near:0,far:200,position:[0,-.048,2.04],rotation:[0,0,0]},renderer:{transparent:!0}}),s=new _().load("/images/landing/2.get-seen/video-preview.png"),a=new b({side:y,fragmentShader:N,vertexShader:V,uniforms:{imageTexture:{value:s},mousePos:d,progressStart:u,progressEnd:f},defines:{USE_MOUSE:l.value?0:1}}),r=new B(1,R,20,20),E=new O(r,a);(e=n.scene)==null||e.add(E),n.start()}}),(e,n)=>(G(),D("div",{ref_key:"container",ref:t,class:"landing-2-get-seen-webgl"},null,512))}}),K=Object.assign(W,{__name:"Landing2GetSeenWebGl"});export{K as default};
