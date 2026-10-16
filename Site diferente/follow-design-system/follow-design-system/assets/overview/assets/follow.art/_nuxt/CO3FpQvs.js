import{i as H,v as U,aC as V,an as Y,r as x,aD as j,I as q,w as R,E as F,k as K,A as Z,q as C,G as $,K as J,aq as O,ar as Q}from"./eTEf9KTV.js";import{T as ee,S as ne,a as N,D as ae,P as te,M as oe,u as ie,V as G}from"./DWFUgupW.js";import{u as se}from"./2BLGngj8.js";import{u as re}from"./BGEDHXjf.js";import"./BlS71BOR.js";const le=`#ifndef PI
#define PI 3.141592653589
#endif

uniform vec2 progress;
uniform float progressScale;
uniform float offset;
uniform float radius;
uniform float effect;
varying vec2 vUv;

#define WIDTH 1.0
#define HEIGHT 1.0

vec3 getPoint(float radius, float anglePointX, float anglePointY) {
    return vec3(
        cos(anglePointX) * radius,
        sin(anglePointY) * radius,
        cos(anglePointY) * sin(anglePointX) * radius
    );
}

vec3 rotatePointAroundAnchorZ(vec3 point, vec3 anchor, float angle) {
    // Rotate a point around anchor
    vec3 relativePoint = point - anchor;
    vec3 rotatedPoint = vec3(
        cos(angle) * relativePoint.x - sin(angle) * relativePoint.y,
        sin(angle) * relativePoint.x + cos(angle) * relativePoint.y,
        relativePoint.z
    );
    return rotatedPoint + anchor;
}

vec3 rotatePointAroundAnchorY(vec3 point, vec3 anchor, float angle) {
    // Rotate a point around anchor
    vec3 relativePoint = point - anchor;
    vec3 rotatedPoint = vec3(
        cos(angle) * relativePoint.x - sin(angle) * relativePoint.z,
        relativePoint.y,
        sin(angle) * relativePoint.x + cos(angle) * relativePoint.z
    );
    return rotatedPoint + anchor;
}

void main() {
    vUv = uv;

    float angleX = WIDTH / radius;
    float angleY = HEIGHT / radius;
    float angleBaseX = offset + progress.x * progressScale;
    float angleBaseY = 0.0; //progress.y * progressScale;

    float anglePointX = angleX * (uv.x - 0.5) * 2.0 + angleBaseX;
    float anglePointY = angleY * (uv.y - 0.5) * 2.0 + angleBaseY;

    // Rotate point when effect > 0.0
    vec3 point = getPoint(radius, anglePointX, anglePointY);
    vec3 anchor = getPoint(radius, anglePointX, 0.0);

    // Base point when effect < 1.0
    // Calculate how much we need to move and scale base so that it would match position and size of image with full effect
    // Since we are calculating relative to projection which is "radius" amount away from anchor (0,0,0), we can just use
    // sin and cos to calculate correct scale and position
    float baseDistanceScale = radius * cos(1.0 / radius);
    float baseSizeScale = radius * sin(1.0 / radius);

    // Rotate by 90 degress to match correct orientation
    vec3 pointBase = rotatePointAroundAnchorY(position * baseSizeScale * 2.0, vec3(0.0, 0.0, 0.0), PI / 2.0);

    // Rotate around
    pointBase = rotatePointAroundAnchorY(pointBase + vec3(baseDistanceScale, 0.0, 0.0), vec3(0.0, 0.0, 0.0), angleBaseX);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(mix(pointBase, point, effect), 1.0);
}
`,ce=`varying vec2 vUv;
uniform sampler2D imageTexture;

void main() {
    gl_FragColor = texture2D(imageTexture, vUv);
}
`;function ue(I,y,{rotation:i,position:v,scale:g,radius:S,offset:w,progress:b,progressScale:f,effect:P}={}){return new ee().loadAsync(y).then(_=>{var a;const T=new ne({side:ae,fragmentShader:ce,vertexShader:le,uniforms:{imageTexture:{value:_},radius:S||{value:1},offset:{value:w||0},progressScale:{value:f||1},progress:{value:b||new N(0,0)},effect:P||{value:1}}}),A=new te(1,1,20,20),t=new oe(A,T);return t.frustumCulled=!1,v&&t.position.set(v.x,v.y,v.z),i&&t.rotation.set(i.x,i.y,i.z),g&&t.scale.set(g,g,g),(a=I.scene)==null||a.add(t),t})}const ve={class:"landing-9-testimonials-webgl__navigation"},L=4.24,fe=2.07,de=H({__name:"Landing9TestimonialsWebGl",props:{count:{}},setup(I,{expose:y}){const i=I,v=U("container"),g=V(),S=Y(g.x),w=x(!0),b=x(!1),f=x(0),P=Y(f,{precision:.002,time:1e3}),{matches:_}=re({query:"sm-down"}),T=j(),A=new Array(i.count).fill(null).map((o,l)=>T(`/images/landing/9.testimonials/Review-${l+1}.png`,{width:2920,format:"avif"})),t=x(!1),a=x(0);let D=0;se(v,{inertia:!0,dragstart:[({detail:o})=>{var l;(l=o.currentTarget)!=null&&l.closest("a, .btn")||(a.value=D=P.value.value,t.value=!0)}],dragend:[({detail:o})=>{if(t.value){t.value=!1,P.reset(a.value);const l=Math.abs(o.xy[0]-o.start[0])>=10?o.inertia.x:0;let e=0;l?e=l>0?Math.floor(a.value):Math.ceil(a.value):e=a.value%1>.5?Math.ceil(a.value):Math.floor(a.value),f.value=O(e,0,i.count-1)}}],dragmove:[k],keymove:[k]});function k({detail:o}){if(t.value){const l=_.value?window.innerWidth:window.innerWidth/1460*460,e=(o.start[0]-o.xy[0])/l/2+D;e<0?a.value=e/5:e>i.count-1?a.value=(e-i.count+1)/5+i.count-1:a.value=e}}const W=[[-22,-4.1,-29],[-10.6,-2.3,-23],[-3.9,2.5,-17],[0,0,0],[3.9,2.5,-17],[9.2,-1.4,-23],[22,-4.1,-29]],E=[[-.8,0,0],[.4,0,0],[-.6,0,0],[0,0,0],[-.6,0,0],[.4,0,0],[-.8,0,0]];function z(){f.value<i.count-1&&f.value++}function X(){f.value>0&&f.value--}return q(()=>{if(v.value){const o=ie({container:v.value,camera:{fov:_.value?18.5:28,far:69,position:[0,0,4],rotation:[0,0,0]},renderer:{transparent:!0},debug:!1});Promise.all(A.map(async(e,M)=>{const m=new N(0,0),n={value:M===0?0:1},s={value:L};return{card:await ue(o,e,{offset:Math.PI*-.5,progressScale:.87,radius:s,position:new G(0,0,0),rotation:new G(0,0,0),scale:3.2,progress:m,effect:n}),progress:m,effect:n,radius:s}})).then(e=>{function M(n,s){const r=Math.floor(n)+3,u=Math.ceil(n)+3,c=s[r],p=s[u];if(c){if(!p)return s[s.length-1]}else return s[0];const h=n>0?Math.abs(n)%1:1-Math.abs(n)%1,d=Math.sin(h*Math.PI*.5);return[c[0]+(p[0]-c[0])*d,c[1]+(p[1]-c[1])*d,c[2]+(p[2]-c[2])*d]}function m(n,s){e.forEach((r,u)=>{const c=O(n>u?n-u:u-n,0,1),p=s*.2*c,h=u-n-p;if(h<-3||h>3)r.card.visible=!1;else{r.card.visible=!0,r.progress.x=(n-u)*-1;const d=M(h,W);r.card.position.set(d[0],d[1],d[2]);const B=M(h,E);r.card.rotation.set(B[0],B[1],B[2]),r.effect.value=c,r.radius.value=Q(c,0,1,L,fe)}})}m(0,.5),o.start(),R([P.value,t,a,S.value],([n,s,r,u])=>{m(s?r:n,u)})}),R(f,e=>{w.value=e===0,b.value=e===i.count-1})}}),y({next:z,previous:X}),(o,l)=>{const e=$;return K(),F("div",{ref_key:"container",ref:v,class:J(["landing-9-testimonials-webgl",{"is-dragging":t.value}])},[Z("div",ve,[C(e,{variant:"block link accent",icon:"step-back","icon-position":"left",title:"Prev","text-size":"smaller",disabled:w.value,onClick:X},null,8,["disabled"]),C(e,{variant:"block link accent",icon:"step-next","icon-position":"right",title:"Next","text-size":"smaller",disabled:b.value,onClick:z},null,8,["disabled"])])],2)}}}),xe=Object.assign(de,{__name:"Landing9TestimonialsWebGl"});export{xe as default};
