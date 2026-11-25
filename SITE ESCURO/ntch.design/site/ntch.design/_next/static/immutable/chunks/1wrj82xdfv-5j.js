(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59840,e=>{"use strict";let t;var r,a=e.i(43476),i=e.i(71645),n=e.i(59270),o=e.i(77994),l=e.i(89903),u=e.i(96480),s=e.i(89480),c=e.i(79856),f=e.i(71729),h=e.i(67987),d=e.i(95875),m=e.i(67052),p=e.i(67458),E=e.i(66065);let T={work:"/ui/sticker-open-to-work.svg",help:"/ui/sticker-help.svg"},v={work:{rest:{title:["OPEN","TO WORK"],desc:"Let’s Talk"},hover:{title:["SAY","HELLO"],desc:"On LinkedIn"},href:E.LINKEDIN_URL},help:{rest:{title:["?"],desc:""},hover:{title:["?"],desc:""}}},x=["X"],w={work:`${v.work.rest.title.join(" ")}. Say hello on LinkedIn`,help:"Help: keys and gestures"};function R(e){let t=n.STICKER[e],{w:r,h:a}=t.texture;return{x:(t.w-r)/2,y:(t.h-a)/2,w:r,h:a}}function g(e){let{w:t,h:r}=n.STICKER[e];return[{x:0,y:0},{x:t,y:0},{x:t,y:r},{x:0,y:r}]}function y(e,t){let r=-1/0;for(let a of e)r=Math.max(r,a.x*t.x+a.y*t.y);return r}function b(e,t,r,a,i={face:"rest",scale:1}){let o=n.STICKER[a],l=Math.max(1,Math.round(o.w*r)),u=Math.max(1,Math.round(o.h*r));e.width!==l&&(e.width=l),e.height!==u&&(e.height=u);let s=e.getContext("2d");if(!s)return;s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,l,u),s.imageSmoothingQuality="high";let c=l/o.w,f=u/o.h,h=R(a);if(s.drawImage(t,h.x*c,h.y*f,h.w*c,h.h*f),i.scale<=.01)return;let{fonts:d}=(0,p.basics)();s.fillStyle="help"===a?n.STICKER.help.ink:n.STICKER.ink,s.textAlign="center",s.textBaseline="alphabetic";let m=v[a][i.face],E=(e,t)=>{let r=i.scale;s.setTransform(c*r,0,0,f*r,c*e*(1-r),f*t*(1-r))},T=o.title,x=o.w/2+T.dx;s.font=`900 ${T.size}px ${d.condensed}`;let w=m.title,g=o.h/2+T.bottom-w.length*T.line;E(x,g+w.length*T.line/2);let y=S(s,g+(w.length-1)*T.line,T.line);if(i.turn&&"help"===a){let e=y-n.STICKER.help.tilt.pivotUp;s.translate(x,e),s.rotate(i.turn),s.translate(-x,-e)}w.forEach((e,t)=>s.fillText(e,x,S(s,g+t*T.line,T.line)));let M=o.desc;if(!M||!m.desc)return;let C=o.w/2+M.dx;s.font=`500 ${M.size}px ${d.walsheim}`;let A=o.h-M.bottom-M.line;E(C,A+M.line/2),s.fillText(m.desc,C,S(s,A,M.line))}function S(e,t,r){let a=e.measureText("Hg"),i=a.fontBoundingBoxAscent;return t+(r-(i+a.fontBoundingBoxDescent))/2+i}async function M(e){let{fonts:t}=(0,p.basics)(),r=e=>e.split(",")[0].trim(),a=(e,t)=>document.fonts.load(e,t).catch(()=>{}),i=n.STICKER[e],{rest:o,hover:l}=v[e],u=[a(`900 ${i.title.size}px ${r(t.condensed)}`,[...o.title,...l.title,..."help"===e?x:[]].join(" "))];i.desc&&u.push(a(`500 ${i.desc.size}px ${r(t.walsheim)}`,`${o.desc} ${l.desc}`)),await Promise.all(u)}let C=(t=Math.hypot((r=[n.STICKER.light.x,n.STICKER.light.y,n.STICKER.light.z])[0],r[1],r[2]),[r[0]/t,r[1]/t,r[2]/t]),A=`
uniform vec2 uCenter;
uniform vec2 uSlide;
uniform mat2 uTurn;
uniform vec2 uCanvasHalf;
uniform vec2 uHalf;
uniform vec2 uAspect;
uniform float uCurve;
uniform float uBarrelFit;
uniform float uScale;
uniform vec2 uOffset;
uniform vec2 uBendCenter;
uniform vec2 uWarped;
uniform mat2 uJacobian;
vec2 place(vec2 p) {
  return uTurn * (p + uSlide - uCenter);
}
float barrel(vec2 s) {
  vec2 c = s / uHalf * uAspect;
  return (1.0 + uCurve * dot(c, c)) * uBarrelFit;
}
vec4 bend(vec2 q, float depth) {
  vec2 u = (q + uOffset) / uScale;
  vec2 f = uWarped + uJacobian * (u - uBendCenter);
  // Where the glass shows picture point f: solve s \xb7 barrel(s) = f.
  vec2 s = f / barrel(f);
  for (int i = 0; i < 8; i++) s = f / barrel(s);
  vec2 w = s * uScale - uOffset;
  return vec4(w.x / uCanvasHalf.x, -w.y / uCanvasHalf.y, depth, 1.0);
}
`,N=`
uniform sampler2D uMask;
uniform vec2 uViewport;
uniform float uLod;
float shadow() {
  return textureLod(uMask, gl_FragCoord.xy / uViewport, uLod).r;
}
`,_=`#version 300 es
precision highp float;
precision highp int;
in vec2 aPos;
${A}
out vec2 vP;
void main() {
  gl_Position = bend(place(aPos), 0.5);
  vP = aPos;
}`,L=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uTex;
uniform vec2 uSize;
uniform vec2 uDir;
uniform float uFold;
uniform float uLifted;
uniform float uSeam;
uniform float uCast;
${N}
in vec2 vP;
out vec4 outColor;
void main() {
  // Past the fold the sheet has lifted away: the flap pass draws it. The
  // sheet runs on under the flap for uSeam: cut exactly at the fold, the
  // two edges each covered only part of the pixels on the line, and the
  // screen showed through as a dark seam.
  if (uLifted > 0.5 && dot(vP, uDir) >= uFold + uSeam) discard;
  vec4 c = texture(uTex, vP / uSize);
  // (Premultiplied: darkening the color keeps the alpha.)
  outColor = vec4(c.rgb * (1.0 - uCast * shadow()), c.a);
}`,k=`#version 300 es
precision highp float;
precision highp int;
void main() {
  vec2 p = vec2((gl_VertexID & 1) == 1 ? 3.0 : -1.0, (gl_VertexID & 2) == 2 ? 3.0 : -1.0);
  gl_Position = vec4(p, 0.9, 1.0);
}`,I=`#version 300 es
precision highp float;
precision highp int;
uniform float uCast;
${N}
out vec4 outColor;
void main() {
  float a = uCast * shadow();
  if (a < 0.002) discard;
  outColor = vec4(0.0, 0.0, 0.0, a);
}`,D=`#version 300 es
precision highp float;
precision highp int;
in vec2 aSV;
${A}
uniform vec2 uDir;
uniform float uFold;
uniform float uR;
uniform float uCurl;
uniform float uArcLen;
uniform float uArcShare;
uniform float uSpan;
uniform vec2 uAcross;
uniform int uShadow;
uniform float uFallBack;
uniform float uFallDown;
out vec2 vP;
out float vTheta;
out float vRise;
void main() {
  // The grid's first share runs along the arc, the rest along the straight
  // sheet folded back after it (none, while the flap is only a curl).
  float u = aSV.x;
  float s = u <= uArcShare ? u / uArcShare * uArcLen : uArcLen + (u - uArcShare) / (1.0 - uArcShare) * (uSpan - uArcLen);
  float v = mix(uAcross.x, uAcross.y, aSV.y);
  vec2 n = vec2(-uDir.y, uDir.x);
  vec2 origin = uDir * uFold;
  vP = origin + s * uDir + v * n;
  float theta = min(s / uR, uCurl);
  float rest = max(s - uArcLen, 0.0);
  vec2 p = origin + (uR * sin(theta) + rest * cos(uCurl)) * uDir + v * n;
  float rise = uR * (1.0 - cos(theta)) + rest * sin(uCurl);
  float depth = 0.4 - rise / 4000.0;
  if (uShadow == 1) {
    // The shadow falls back over the sheet, and a little down the window.
    p -= uDir * uFallBack * rise;
    depth = 0.5;
  }
  vec2 q = place(p);
  if (uShadow == 1) q.y += uFallDown * rise;
  gl_Position = bend(q, depth);
  vTheta = theta;
  vRise = rise;
}`,F=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uTex;
uniform vec2 uSize;
uniform float uFade;
in vec2 vP;
in float vRise;
out vec4 outColor;
void main() {
  vec2 uv = vP / uSize;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) discard;
  float a = texture(uTex, uv).a * clamp(vRise / uFade, 0.0, 1.0);
  outColor = vec4(a, 0.0, 0.0, 1.0);
}`,P=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uTex;
uniform sampler2D uBackTex;
uniform float uHasBack;
uniform vec2 uSize;
uniform vec2 uDir;
uniform float uCast;
uniform float uFade;
uniform float uFront;
uniform vec3 uBack;
uniform vec2 uBackShade;
uniform vec3 uLight;
${N}
in vec2 vP;
in float vTheta;
in float vRise;
out vec4 outColor;
void main() {
  vec2 uv = vP / uSize;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) discard;
  vec4 c = texture(uTex, uv);
  if (c.a < 0.02) discard;
  vec3 normal = vec3(-sin(vTheta) * uDir, cos(vTheta));
  if (normal.z >= 0.0) {
    // The front: exactly the flat sheet's color where it's still flat —
    // under the same shadow as the sheet while it lies on it (it leaves
    // the shadow as it rises, over uFade), so the fold shows no line.
    float shade = 1.0 + uFront * (dot(normal, uLight) - uLight.z);
    shade *= 1.0 - uCast * shadow() * (1.0 - clamp(vRise / uFade, 0.0, 1.0));
    outColor = vec4(min(c.rgb * shade, vec3(c.a)), c.a);
  } else {
    // The back: the sticker's paper, in the silhouette of the front — the
    // back sheet (its glue side, and the X) where there is one.
    float light = max(dot(-normal, uLight), 0.0);
    float shade = uBackShade.x + uBackShade.y * light;
    if (uHasBack > 0.5) {
      vec4 b = texture(uBackTex, uv);
      outColor = vec4(b.rgb * shade, b.a);
    } else {
      outColor = vec4(uBack * shade * c.a, c.a);
    }
  }
}`;function B(e,t,r){let a=[];for(let i=0;i<=t;i++)for(let n=0;n<=e;n++)a.push(n/e*r.x,i/t*r.y);let i=[];for(let r=0;r<t;r++)for(let t=0;t<e;t++){let a=r*(e+1)+t,n=a+e+1;i.push(a,a+1,n,a+1,n+1,n)}return{vertices:new Float32Array(a),indices:new Uint16Array(i)}}function U(e,t,r){let a,i,l,u,s=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"default"});if(!s)return null;try{a=(0,d.createProgram)(s,_,L,["aPos"]),i=(0,d.createProgram)(s,k,I,[]),l=(0,d.createProgram)(s,D,F,["aSV"]),u=(0,d.createProgram)(s,D,P,["aSV"])}catch{return null}let c=["uCenter","uSlide","uTurn","uCanvasHalf","uHalf","uAspect","uCurve","uBarrelFit","uScale","uOffset","uBendCenter","uWarped","uJacobian"],f=["uMask","uViewport","uLod","uCast"],h=[...c,"uDir","uFold","uR","uCurl","uArcLen","uArcShare","uSpan","uAcross","uShadow","uFallBack","uFallDown","uTex","uSize","uFade"],E=(e,t)=>Object.fromEntries(t.map(t=>[t,s.getUniformLocation(e,t)])),T=E(a,[...c,...f,"uTex","uSize","uDir","uFold","uLifted","uSeam"]),v=E(i,f),x=E(l,h),w=E(u,[...h,...f,"uFront","uBack","uBackShade","uLight","uBackTex","uHasBack"]),R=e=>{let t=s.createVertexArray();s.bindVertexArray(t);let r=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,r),s.bufferData(s.ARRAY_BUFFER,e.vertices,s.STATIC_DRAW),s.enableVertexAttribArray(0),s.vertexAttribPointer(0,2,s.FLOAT,!1,0,0);let a=s.createBuffer();return s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,a),s.bufferData(s.ELEMENT_ARRAY_BUFFER,e.indices,s.STATIC_DRAW),s.bindVertexArray(null),{vao:t,vbo:r,ibo:a,count:e.indices.length}},g=R(B(32,16,{x:r.w,y:r.h})),b=R(B(48,16,{x:1,y:1})),S=s.createVertexArray(),M=s.createTexture();s.bindTexture(s.TEXTURE_2D,M),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR);let A=!1,N=s.createTexture();s.bindTexture(s.TEXTURE_2D,N),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR);let U=!1,X=s.createTexture();s.bindTexture(s.TEXTURE_2D,X),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR);let K=s.createFramebuffer(),O={width:0,height:0},$=[{x:0,y:0},{x:r.w,y:0},{x:0,y:r.h},{x:r.w,y:r.h}],H=NaN,G={x:1,y:0},V=0,W=0,z=0,j=[0,0],q=(0,m.cssToRgba)((0,p.basics)().colors.fg),Y=(e,t,a)=>{let i=Math.cos(t.angle),n=Math.sin(t.angle),o=t.bend;s.uniform2f(e.uCenter,r.w/2,r.h/2),s.uniform2f(e.uSlide,G.x*a,G.y*a),s.uniformMatrix2fv(e.uTurn,!1,[i*t.k,n*t.k,-n*t.k,i*t.k]),s.uniform2f(e.uCanvasHalf,t.width/2,t.height/2),s.uniform2f(e.uHalf,o.half.x,o.half.y),s.uniform2f(e.uAspect,o.aspect.x,o.aspect.y),s.uniform1f(e.uCurve,o.curve),s.uniform1f(e.uBarrelFit,o.fit),s.uniform1f(e.uScale,o.scale),s.uniform2f(e.uOffset,o.offset.x,o.offset.y),s.uniform2f(e.uBendCenter,o.center.x,o.center.y),s.uniform2f(e.uWarped,o.warped.x,o.warped.y),s.uniformMatrix2fv(e.uJacobian,!1,o.jacobian)},J=(t,r,a)=>{s.uniform1i(t.uMask,1),s.uniform2f(t.uViewport,e.width,e.height);let i=e.width/r.width*r.k;s.uniform1f(t.uLod,Math.log2(Math.max(1,n.STICKER.shadow.soft*i))),s.uniform1f(t.uCast,a?n.STICKER.shadow.cast:0)},Q=(e,t,a)=>{Y(e,t,a.slide),s.uniform2f(e.uDir,G.x,G.y),s.uniform1f(e.uFold,a.fold),s.uniform1f(e.uR,a.r),s.uniform1f(e.uCurl,a.curl),s.uniform1f(e.uArcLen,a.arc),s.uniform1f(e.uArcShare,Math.min(1,Math.max(.5,a.arc/Math.max(a.span,.001)))),s.uniform1f(e.uSpan,a.span),s.uniform2f(e.uAcross,j[0],j[1]);let i=n.STICKER.shadow.offset;s.uniform1f(e.uFallBack,i.back),s.uniform1f(e.uFallDown,i.down*t.k),s.uniform1i(e.uTex,0),s.uniform2f(e.uSize,r.w,r.h),s.uniform1f(e.uFade,n.STICKER.shadow.fade)};return{setSheet(e){s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,M),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,e),s.generateMipmap(s.TEXTURE_2D),A=!0},setBack(e){s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,N),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,e),s.generateMipmap(s.TEXTURE_2D),s.activeTexture(s.TEXTURE0),U=!0},draw(c,f){(e=>{if(e===H)return;H=e,W=(V=y(t,G={x:Math.cos(e),y:Math.sin(e)}))+y(t,{x:-G.x,y:-G.y}),z=Math.max(...$.map(e=>e.x*G.x+e.y*G.y));let r=$.map(e=>-e.x*G.y+e.y*G.x);j=[Math.min(...r),Math.max(...r)]})(c.peel);let h=Math.min(1,Math.max(0,f.roll)),d=Math.max(0,(0,o.lerp)(f.length,W,h)),m=(0,o.lerp)(f.curl,Math.PI,h),p=d>.25&&m>.01,E=V-d,R=f.curl>.01?Math.max(0,f.length)/f.curl:0,_=n.STICKER.help.flip.crease,L=p?Math.min(_+(R-_)*(1-h)**2,d/m):1,k=Math.min(d,Math.max(0,z-E)),I={fold:E,r:L,curl:m,arc:Math.min(L*m,k),span:k,slide:h*W};s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,M),s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,X),s.viewport(0,0,e.width,e.height),A&&(O.width!==e.width||O.height!==e.height)&&(O={width:e.width,height:e.height},s.bindTexture(s.TEXTURE_2D,X),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,e.width,e.height,0,s.RGBA,s.UNSIGNED_BYTE,null),s.generateMipmap(s.TEXTURE_2D),s.bindFramebuffer(s.FRAMEBUFFER,K),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,X,0),s.bindFramebuffer(s.FRAMEBUFFER,null)),A&&p&&(s.bindFramebuffer(s.FRAMEBUFFER,K),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.disable(s.DEPTH_TEST),s.enable(s.BLEND),s.blendEquation(s.MAX),s.useProgram(l),Q(x,c,I),s.uniform1i(x.uShadow,1),s.bindVertexArray(b.vao),s.drawElements(s.TRIANGLES,b.count,s.UNSIGNED_SHORT,0),s.bindVertexArray(null),s.blendEquation(s.FUNC_ADD),s.bindFramebuffer(s.FRAMEBUFFER,null),s.generateMipmap(s.TEXTURE_2D)),s.clearColor(0,0,0,0),s.clearDepth(1),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),!A||(s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.disable(s.DEPTH_TEST),p&&(s.useProgram(i),J(v,c,p),s.bindVertexArray(S),s.drawArrays(s.TRIANGLES,0,3),s.bindVertexArray(null)),s.useProgram(a),Y(T,c,I.slide),J(T,c,p),s.uniform1i(T.uTex,0),s.uniform2f(T.uSize,r.w,r.h),s.uniform2f(T.uDir,G.x,G.y),s.uniform1f(T.uFold,E),s.uniform1f(T.uLifted,+!!p),s.uniform1f(T.uSeam,n.STICKER.seam*c.width/(e.width*c.k)),(!p||d<W-.05)&&(s.bindVertexArray(g.vao),s.drawElements(s.TRIANGLES,g.count,s.UNSIGNED_SHORT,0),s.bindVertexArray(null)),p&&(s.enable(s.DEPTH_TEST),s.depthFunc(s.LESS),s.useProgram(u),Q(w,c,I),J(w,c,p),s.uniform1i(w.uShadow,0),s.uniform1f(w.uFront,n.STICKER.front),s.uniform3f(w.uBack,q[0],q[1],q[2]),s.uniform2f(w.uBackShade,n.STICKER.back.base,n.STICKER.back.lit),s.uniform3f(w.uLight,C[0],C[1],C[2]),s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,N),s.uniform1i(w.uBackTex,2),s.uniform1f(w.uHasBack,+!!U),s.activeTexture(s.TEXTURE0),s.bindVertexArray(b.vao),s.drawElements(s.TRIANGLES,b.count,s.UNSIGNED_SHORT,0),s.bindVertexArray(null)))},dispose(){for(let e of(s.deleteTexture(M),s.deleteTexture(X),s.deleteTexture(N),s.deleteFramebuffer(K),[g,b]))s.deleteBuffer(e.vbo),s.deleteBuffer(e.ibo),s.deleteVertexArray(e.vao);for(let e of(s.deleteVertexArray(S),[a,i,l,u]))s.deleteProgram(e);s.getExtension("WEBGL_lose_context")?.loseContext()}}}var X=e.i(14791),K=e.i(80069);let O=X.BURST.inMs*n.STICKER.words.popShare;var $=e.i(58249);function H(e,t,r){let a=1/t,i=e.v-e.to,n=e.s+a*i,o=Math.exp(-a*r);e.v=e.to+(i+n*r)*o,e.s=(n-a*(i+n*r))*o,.001>Math.abs(e.v-e.to)&&1e-5>Math.abs(e.s)&&(e.v=e.to,e.s=0),e.v=Math.min(1,Math.max(0,e.v))}e.s(["default",0,function({kind:e="work",onPress:t}){let r=n.STICKER[e],d=(0,i.useRef)(null),m=(0,i.useRef)(null),E=(0,i.useRef)(null),y=(0,i.useRef)(t);(0,i.useEffect)(()=>{y.current=t});let C=(0,i.useRef)(!1),A=(0,i.useSyncExternalStore)(f.subscribeTeletext,f.teletextOpen,()=>!1)&&"help"===e;(0,i.useEffect)(()=>{let t,a,i,v,w,A,N,_,L=d.current,k=m.current,I=E.current;if(!L||!k||!I||(0,u.ogMode)())return;let D=!0,F=null,P=null,B=null,$=null,G={width:1,height:1},V=null,W=null,z=document.createElement("canvas"),j=document.createElement("canvas"),q=0,Y=(t="rest",a="rest",i=-1/0,v=1,w=0,A=!1,N={face:"rest",scale:1},_=e=>{let r=Math.floor((e-i)/K.COMIC_FRAME_MS)*K.COMIC_FRAME_MS;if(!A&&r<X.BURST.outMs){let e=1-r/X.BURST.outMs;return{face:t,scale:v*e*e,done:!1}}let n=(0,o.clamp01)((r-(A?0:X.BURST.outMs))/O);return{face:a,scale:w+(1-w)*(0,K.pop)(n),done:n>=1}},{aim(e,r){if(e===a)return;if(t===a||_(r).done){t=a,a=e,i=r,v=1,w=0,A=!1;return}let n=_(r);if(!A&&r-i<X.BURST.outMs&&e===t){t=a,a=e,i=r,w=n.scale,A=!0;return}t=n.face,a=e,i=r,v=n.scale,w=0,A=!1},swapping:()=>t!==a,frame(e,r){if(r||t===a)return t=a,N.face=a,N.scale=1,N;let i=_(e);return i.done&&(t=a),N.face=i.face,N.scale=i.scale,N}}),J={face:"rest",scale:1,turn:0},Q=0,Z=NaN,ee="help"===e?{...n.STICKER.peel,...n.STICKER.help.peel}:n.STICKER.peel,et={v:0,s:0,to:0},er={v:0,s:0,to:0},ea=NaN,ei=0,en=0,eo=0,el=0,eu=NaN,es=0,ec=0,ef=0,eh=NaN,ed=!1,em=!1,ep=!1,eE="peel"===(0,s.urlParam)("sticker")?"peel":"fade"===(0,s.urlParam)("sticker")?"fade":"slap",eT=!1,ev=NaN,ex=0,ew=0,eR=()=>{},eg=!1,ey=0,eb=0,eS=0,eM=-1/0,eC=1e3/ee.fps,eA=1e3/ee.restFps,eN={length:0,curl:0,roll:0},e_=null,eL=()=>"work"===e?n.STICKER.peel.workHover:ee,ek=()=>{var t;let a,i,l,c,f,d,m,E,T,v,w;if(!F||!P)return;t=B=function(e,t){let r,a=n.STICKER[t],i=(0,u.fitScale)()*n.STICKER.scale["og"===(r=(0,u.frameDevice)())?"desktop":"upright"!==r?r:"phone"===(0,u.deviceClass)()?"uprightPhone":"uprightTablet"],l=a.spot,c=(0,o.rad)(l.angle),f=Math.cos(c),h=Math.sin(c),d=0,m=0;for(let t of e){let e=t.x-a.w/2,r=t.y-a.h/2;d=Math.max(d,Math.abs(e*f-r*h)),m=Math.max(m,Math.abs(e*h+r*f))}let p=l.corner.endsWith("r"),E=l.corner.startsWith("b"),T=function(e,t){let r=(0,u.frameBox)(),a=(0,u.frameRadius)()*(1-Math.SQRT1_2),i={x:e?r.right-a:r.left+a,y:t?r.bottom-a:r.top+a},o=i;for(let e=0;e<8;e++){let e=(0,u.warp)(o.x,o.y);o={x:o.x+i.x-e.x,y:o.y+i.y-e.y}}let l=(0,u.fitScale)();return{x:(o.x-n.SCREEN.w/2)*l+window.innerWidth/2,y:(o.y-n.SCREEN.h/2)*l+window.innerHeight/2}}(p,E),v=(0,s.safeInsets)(),x=T.x+(p?-1:1)*l.at.x*i,w=T.y+(E?-1:1)*l.at.y*i,R=d*i,g=m*i;return{x:p?Math.min(x,window.innerWidth-v.right-R):Math.max(x,v.left+R),y:E?Math.min(w,window.innerHeight-v.bottom-g):Math.max(w,v.top+g),k:i,angle:c,peel:(0,o.rad)(l.peel),half:{x:d*i,y:m*i}}}(F,e),a=(0,u.fitScale)(),l={x:(i={x:t.x-window.innerWidth/2,y:t.y-window.innerHeight/2}).x/a,y:i.y/a},f=(c=(e,t)=>(0,h.crtWarp)(e,t,n.SCREEN.w,n.SCREEN.h))(l.x,l.y),d=c(l.x+1,l.y),m=c(l.x-1,l.y),E=c(l.x,l.y+1),T=c(l.x,l.y-1),v=(0,h.crtBarrel)(n.SCREEN.w,n.SCREEN.h),w=Math.sqrt(Math.abs(((d.x-m.x)*(E.y-T.y)-(d.y-m.y)*(E.x-T.x))/4)),$={half:{x:n.SCREEN.w/2,y:n.SCREEN.h/2},aspect:v.aspect,curve:v.curve,fit:v.fit,scale:a,offset:i,center:l,warped:f,jacobian:[w,0,0,w]},e_=null;let g=Math.min(window.devicePixelRatio||1,3),y=(()=>{let{hover:t,maxCurl:a}=eL(),i=Math.max(2*t/(0,o.rad)(a),2*ee.rest.max/(0,o.rad)(ee.restCurl.min));return"help"===e&&(i=Math.max(i,Math.max(r.w,r.h))),i*Math.max(n.STICKER.shadow.offset.back,n.STICKER.shadow.offset.down)+n.STICKER.pad})()*B.k,M=Math.ceil(2*(B.half.x+y)),C=Math.ceil(2*(B.half.y+y));I.style.left=`${B.x-M/2}px`,I.style.top=`${B.y-C/2}px`,I.style.width=`${M}px`,G={width:M,height:C},I.style.height=`${C}px`,I.width=Math.round(M*g),I.height=Math.round(C*g);let A=r.w*B.k,N=r.h*B.k;if(L.style.left=`${B.x-A/2}px`,L.style.top=`${B.y-N/2}px`,L.style.width=`${A}px`,L.style.height=`${N}px`,L.style.transform=`rotate(${B.angle}rad)`,"help"===e){let e=n.STICKER.tabCaption.gap*B.k;document.documentElement.style.setProperty(n.STICKER.tabCaption.cssVar,`${Math.ceil(L.getBoundingClientRect().bottom+e)}px`)}let _=Math.max(1,B.k*g);Math.abs(_-q)>.01&&(q=_,b(z,P,_,e,J),V?.setSheet(z),"help"===e&&(!function(e,t,r,a){let i=n.STICKER[a],o=Math.max(1,Math.round(i.w*r)),l=Math.max(1,Math.round(i.h*r));e.width!==o&&(e.width=o),e.height!==l&&(e.height=l);let u=e.getContext("2d");if(!u)return;u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,o,l),u.imageSmoothingQuality="high";let s=o/i.w,c=l/i.h,f=R(a);u.drawImage(t,f.x*s,f.y*c,f.w*s,f.h*c),u.globalCompositeOperation="source-atop",u.fillStyle=(0,p.basics)().colors.fg,u.fillRect(0,0,o,l),u.globalCompositeOperation="source-over";let{fonts:h}=(0,p.basics)(),d=i.title;u.setTransform(s,0,0,c,0,0),u.fillStyle=n.STICKER.help.ink,u.textAlign="center",u.textBaseline="alphabetic",u.font=`900 ${d.size}px ${h.condensed}`;let m=i.h/2+d.bottom-x.length*d.line;x.forEach((e,t)=>u.fillText(e,i.w/2+d.dx,S(u,m+t*d.line,d.line))),u.setTransform(1,0,0,1,0,0)}(j,P,_,e),V?.setBack(j))),eT&&(L.style.visibility="visible",I.style.visibility="visible")},eI={lift:NaN,push:NaN,turn:NaN,flip:NaN,length:NaN,curl:NaN},eD=(e,t)=>{let r=Math.round(100*t)/100;eI[e]!==r&&(eI[e]=r,I.dataset[e]=String(r))},eF=()=>{if(B){if(V){if($){let t,r,a,i,l;e_??={width:G.width,height:G.height,k:B.k,angle:B.angle,peel:B.peel,bend:$};let u=(t=(0,s.prefersReducedMotion)()?.5:.5-.5*Math.cos(2*Math.PI*(Q/ee.breathMs+ee.phase)),r=(0,o.lerp)(ee.rest.min,ee.rest.max,t),a=(0,o.lerp)(ee.restCurl.min,ee.restCurl.max,t),i=Math.max(et.v,ex),l=eL(),eN.length=(0,o.lerp)((0,o.lerp)(r,l.hover,i),ee.press.length,er.v),eN.curl=(0,o.rad)((0,o.lerp)(a,l.maxCurl,i)),eN.roll="help"===e?es:0,eN);V.draw(e_,u),eD("lift",et.v),eD("push",er.v),eD("turn",en*n.STICKER.help.tilt.deg),eD("flip",es),eD("length",u.length),eD("curl",180*u.curl/Math.PI)}}else if(W){let e=I.width/G.width;W.setTransform(1,0,0,1,0,0),W.clearRect(0,0,I.width,I.height),W.setTransform(e,0,0,e,I.width/2,I.height/2),W.rotate(B.angle),W.drawImage(es>=.5?j:z,-r.w/2*B.k,-r.h/2*B.k,r.w*B.k,r.h*B.k)}}},eP=()=>D&&!ep&&null!==B&&!document.hidden&&!(0,l.idleFading)(),eB=()=>{eg=!1,window.clearTimeout(ey),cancelAnimationFrame(eb),ey=0,eb=0,Z=NaN},eU=t=>{let r,a;if(eb=0,!eg||!eP())return eB();let i=(0,s.prefersReducedMotion)(),l=Number.isNaN(Z)?0:Math.min(t-Z,4*eC);if(Z=t,i||(Q+=l),i?(et.v=et.to,et.s=0,er.v=er.to,er.s=0,en=0,eo=0,el=0,eu=NaN,es=ef,eh=NaN):(H(et,ee.hoverMs,l),H(er,ee.press.ms,l),"help"===e&&(eX(t),eK(t))),!Number.isNaN(ev)){let e=Math.min(1,(t-ev)/n.STICKER.enter.peelMs);ex=(1-e)**3,e>=1&&(ev=NaN)}if(r=Y.frame(t,(0,s.prefersReducedMotion)()),a=en*(0,o.rad)(n.STICKER.help.tilt.deg),P&&q&&(r.face!==J.face||r.scale!==J.scale||a!==J.turn)&&(J={face:r.face,scale:r.scale,turn:a},b(z,P,q,e,J),V?.setSheet(z)),eF(),eM=t,i)return eB();eO()},eX=e=>{var t;let r,a=n.STICKER.help.tilt,i=(ed||em)&&et.v>=a.after&&0===ef?1:0;if(i!==el&&(eo=en,el=i,eu=e),Number.isNaN(eu))return;let o=a.ms*Math.max(.25,Math.abs(el-eo)),l=Math.min(1,(e-eu)/o);en=l>=1?el:eo+(el-eo)*(t=a.overshoot,1+(t+1)*(r=l-1)*r*r+t*r*r),l>=1&&(eu=NaN)},eK=e=>{if(Number.isNaN(eh))return;let t=n.STICKER.help.flip.ms*Math.max(.25,Math.abs(ef-ec)),r=Math.min(1,(e-eh)/t);es=r>=1?ef:ec+(ef-ec)*(r<.5?4*r*r*r:1-(-2*r+2)**3/2),r>=1&&(eh=NaN)},eO=()=>{let t=Math.max(0,eM+(et.v!==et.to||0!==et.s||er.v!==er.to||0!==er.s||!Number.isNaN(eu)||!Number.isNaN(eh)||"help"===e&&(ed||em)!==(1===el)||0!==ex||!Number.isNaN(ev)||Y.swapping()?eC:eA)-4-performance.now());ey=window.setTimeout(()=>{ey=0,eb=requestAnimationFrame(eU)},t)},e$=()=>{eP()&&!eg&&(eg=!0,eb=requestAnimationFrame(eU))},eH=()=>{if(window.clearTimeout(eS),eS=0,D){if(!(0,l.idleFading)())return e$();(0,l.idleAsleep)()||(eS=window.setTimeout(eH,250))}},eG=(0,l.onIdleFade)(()=>{eB(),eH()}),eV=(0,l.onIdleWake)(e$),eW=()=>document.hidden?eB():e$();document.addEventListener("visibilitychange",eW);let ez=()=>{ek(),eF()};window.addEventListener("resize",ez);let ej=null,eq=()=>{ez(),eY()},eY=()=>{ej?.removeEventListener("change",eq),(ej=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)).addEventListener("change",eq)};eY();let eJ=e=>{e.preventDefault(),ep=!0,eB(),V=null},eQ=()=>{ep=!1,!F||(V=U(I,F,r))&&(q&&(V.setSheet(z),"help"===e&&V.setBack(j)),ek(),eF(),e$())};I.addEventListener("webglcontextlost",eJ),I.addEventListener("webglcontextrestored",eQ);let eZ=()=>{let t=ed||em;et.to=+!!t,"work"===e&&Y.aim(t?"hover":"rest",performance.now()),e$(),eg&&ey&&(window.clearTimeout(ey),eO())},e0="help"===e?(0,f.subscribeTeletext)(()=>{let t="help"===e&&(0,f.teletextOpen)()?1:0;t!==ef&&(ec=es,ef=t,eh=performance.now(),(0,s.prefersReducedMotion)()&&(es=t,eh=NaN),eZ())}):()=>{},e2=e=>{"touch"!==e.pointerType&&(ed=!0,eZ())},e1=()=>{ed=!1,e9(),eZ()},e4=()=>{em=L.matches(":focus-visible"),eZ()},e5=()=>{em=!1,e9(),eZ()},e3=()=>{window.clearTimeout(ei),ei=0,Number.isNaN(ea)&&(ea=performance.now()),er.to=1,eZ()};function e9(){if(Number.isNaN(ea)&&0===er.to)return;let e=ee.press.holdMs-(performance.now()-ea);window.clearTimeout(ei),ei=0;let t=()=>{ei=0,ea=NaN,er.to=0,eZ()};e>0?ei=window.setTimeout(t,e):t()}let e8=e=>{"Enter"!==e.key&&" "!==e.key||e.repeat||e3()},e6=e=>{("Enter"===e.key||" "===e.key)&&e9()},e7=e=>e.preventDefault();"help"===e&&k.addEventListener("mousedown",e7),k.addEventListener("pointerdown",e3);let te=t=>{"help"===e&&(0,f.teletextOpen)()&&0===t.button&&(C.current=!0,window.setTimeout(()=>C.current=!1,600),y.current?.())};k.addEventListener("pointerdown",te),k.addEventListener("pointerup",e9),k.addEventListener("pointercancel",e9),L.addEventListener("keydown",e8),L.addEventListener("keyup",e6),k.addEventListener("pointerenter",e2),k.addEventListener("pointerleave",e1),L.addEventListener("focus",e4),L.addEventListener("blur",e5);let tt=t=>{let r,a;if(!D||eT)return;eT=!0,"help"===e&&(0,f.setTeletextSticker)(!0);let i=n.STICKER.enter;(0,s.prefersReducedMotion)()?(a=i.reducedMs,r=[{opacity:0},{opacity:1}]):"peel"===eE?(a=i.peelFadeMs,r=[{opacity:0},{opacity:1}],ex=1,ev=performance.now()):"fade"===eE?(a=Math.min(i.fadeMs.max,Math.max(i.fadeMs.min,t)),r=[{opacity:0},{opacity:1}]):(a=i.slapMs,r=[{opacity:0,transform:`scale(${i.from}) rotate(${-i.turn}deg)`},{opacity:1,offset:.25},{opacity:1,transform:`scale(0.99) rotate(${i.turn/4}deg)`,offset:.65},{opacity:1,transform:"none"}]),ek(),eF(),I.animate(r,{duration:a,easing:i.ease,fill:"backwards"}),e$()};return(0,s.loadImage)(T[e]).then(async t=>{await M(e),D&&(P=t,F=function(e,t){let r,a,i,o=n.STICKER[t],l=Math.ceil(o.w/2),u=Math.ceil(o.h/2),s=document.createElement("canvas");s.width=l,s.height=u;let c=s.getContext("2d",{willReadFrequently:!0});if(!c)return g(t);let f=R(t);c.drawImage(e,f.x/2,f.y/2,f.w/2,f.h/2);let{data:h}=c.getImageData(0,0,l,u),d=[];for(let e=0;e<u;e++){let t=-1,r=-1;for(let a=0;a<l;a++)h[(e*l+a)*4+3]<128||(t<0&&(t=a),r=a);t<0||(d.push({x:2*t,y:2*e},{x:2*t,y:(e+1)*2}),d.push({x:(r+1)*2,y:2*e},{x:(r+1)*2,y:(e+1)*2}))}return d.length>=3?(r=[...d].sort((e,t)=>e.x-t.x||e.y-t.y),a=(e,t,r)=>(t.x-e.x)*(r.y-e.y)-(t.y-e.y)*(r.x-e.x),[...(i=e=>{let t=[];for(let r of e){for(;t.length>=2&&0>=a(t[t.length-2],t[t.length-1],r);)t.pop();t.push(r)}return t.pop(),t})(r),...i(r.reverse())]):g(t)}(t,e),k.style.clipPath=`polygon(${F.map(e=>`${(e.x/r.w*100).toFixed(2)}% ${(e.y/r.h*100).toFixed(2)}%`).join(", ")})`,(V=U(I,F,r))||(W=I.getContext("2d")),ek(),eF(),eR=(0,c.whenPicture)(e=>{if("fade"===eE||(0,s.prefersReducedMotion)()||e<=0)return tt(e);ew=window.setTimeout(()=>tt(0),e)}))}).catch(()=>{}),()=>{D=!1,"help"===e&&document.documentElement.style.removeProperty(n.STICKER.tabCaption.cssVar),eB(),eR(),window.clearTimeout(ew),window.clearTimeout(eS),eG(),eV(),e0(),"help"===e&&(0,f.setTeletextSticker)(!1),document.removeEventListener("visibilitychange",eW),window.removeEventListener("resize",ez),ej?.removeEventListener("change",eq),I.removeEventListener("webglcontextlost",eJ),I.removeEventListener("webglcontextrestored",eQ),window.clearTimeout(ei),k.removeEventListener("mousedown",e7),k.removeEventListener("pointerdown",e3),k.removeEventListener("pointerdown",te),k.removeEventListener("pointerup",e9),k.removeEventListener("pointercancel",e9),L.removeEventListener("keydown",e8),L.removeEventListener("keyup",e6),k.removeEventListener("pointerenter",e2),k.removeEventListener("pointerleave",e1),L.removeEventListener("focus",e4),L.removeEventListener("blur",e5),V?.dispose()}},[e,r]);let N="work"===e?"a":"button";return(0,a.jsxs)("div",{className:"pointer-events-none fixed inset-0 overflow-hidden",children:[(0,a.jsx)("canvas",{ref:E,"aria-hidden":"true","data-sticker":e,className:"absolute block",style:{visibility:"hidden"}}),(0,a.jsx)(N,{ref:d,..."work"===e?{href:v.work.href,target:"_blank",rel:"noopener noreferrer","data-sticker-link":!0,onClick:()=>(0,$.trackContact)(v.work.href)}:{type:"button",tabIndex:-1,"data-help-sticker":!0,onClick:e=>{if(e.detail>0&&e.currentTarget.blur(),C.current){C.current=!1;return}t?.()}},"aria-label":A?"Close":"help"===e&&(0,s.touchOnly)()?"Channel list":w[e],className:"pointer-events-none absolute block focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-4 focus-visible:outline-fg",style:{visibility:"hidden"},children:(0,a.jsx)("span",{ref:m,className:"pointer-events-auto absolute inset-0 block cursor-pointer touch-manipulation"})})]})}],59840)},89740,function(e){e.n(e.i(59840))}]);