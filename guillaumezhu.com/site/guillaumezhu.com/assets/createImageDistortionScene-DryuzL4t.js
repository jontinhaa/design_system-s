var e=`precision highp float;

uniform sampler2D u_image;
uniform vec2 u_imageResolution;
uniform vec2 u_resolution;
uniform float u_time;

uniform float u_idleSpeed;
uniform float u_idleStrength;
uniform vec2 u_idleFrequency;

uniform vec2 u_mouse;
uniform vec2 u_velocity;
uniform float u_strength;
uniform float u_radius;
uniform float u_zoom;

#ifdef TRAJECTORY_MAPPING
uniform float u_interactionStrength;
uniform vec2 u_cssScale;
uniform float u_split;
#endif

varying vec2 v_uv;

vec2 coverUv(vec2 uv, vec2 viewportResolution, vec2 imageResolution) {
  float viewportRatio = viewportResolution.x / viewportResolution.y;
  float imageRatio = imageResolution.x / imageResolution.y;
  vec2 scale = vec2(1.0);

  if (viewportRatio > imageRatio) {
    scale.y = imageRatio / viewportRatio;
  } else {
    scale.x = viewportRatio / imageRatio;
  }

  return (uv - 0.5) * scale + 0.5;
}

#ifdef TRAJECTORY_MAPPING
vec2 stretchUv(vec2 uv) {
  vec2 imageUv = vec2(
    uv.x * u_cssScale.x,
    (uv.y - 0.5) * u_cssScale.y + 0.5
  );
  
  if (v_uv.x >= u_split) {
    imageUv.x += 1.0 - u_cssScale.x;
  }
  return imageUv;
}
#endif

void main() {
  vec2 uv = v_uv;
  float time = u_time * u_idleSpeed;

  vec2 idleFlow = vec2(
    sin(uv.y * u_idleFrequency.x + time) +
      sin(uv.x * 1.7 - time * 0.63) * 0.5,
    cos(uv.x * u_idleFrequency.y - time * 0.7) +
      cos(uv.y * 1.5 + time * 0.47) * 0.5
  ) / 1.5;
  vec2 idleOffset = idleFlow * u_idleStrength;

  vec2 mouseDelta = uv - u_mouse;
  mouseDelta.x *= u_resolution.x / u_resolution.y;

  float mouseInfluence = smoothstep(u_radius, 0.0, length(mouseDelta));
  vec2 mouseOffset = u_velocity * mouseInfluence * u_strength;

#ifdef TRAJECTORY_MAPPING
  vec2 imageUv = uv;
  if (u_idleStrength != 0.0) {
    imageUv += idleOffset;
  }
  if (u_interactionStrength != 0.0) {
    imageUv -= mouseOffset * u_interactionStrength;
  }
  imageUv = stretchUv(imageUv);
  imageUv = (imageUv - 0.5) / u_zoom + 0.5;
#else
  vec2 imageUv = coverUv(uv + idleOffset - mouseOffset, u_resolution, u_imageResolution);
  imageUv = (imageUv - 0.5) / u_zoom + 0.5;
#endif
  gl_FragColor = texture2D(u_image, imageUv);
}`,t=`attribute vec2 a_position;

varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`,n=Object.freeze({radius:.35,velocityGain:.25,positionDamping:.1,velocityDamping:.15,strengthRise:.15,strengthDecay:.03,idleStrength:.01,interactionStrength:1,idleSpeed:1,idleFrequency:[5,20],zoom:1.05,maxPixelRatio:1.5});function r(e,t){return 1-(1-e)**(t*60)}function i(e,t,n){let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;let i=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(i||`Unable to compile the image shader.`)}function a(n,r){let a=r===`stretch`?`#define TRAJECTORY_MAPPING\n${e}`:e,o=n.createProgram(),s=i(n,n.VERTEX_SHADER,t),c=i(n,n.FRAGMENT_SHADER,a);if(n.attachShader(o,s),n.attachShader(o,c),n.linkProgram(o),n.deleteShader(s),n.deleteShader(c),n.getProgramParameter(o,n.LINK_STATUS))return o;let l=n.getProgramInfoLog(o);throw n.deleteProgram(o),Error(l||`Unable to link the image shader program.`)}function o(e,t){return new Promise((n,r)=>{let i=new Image;i.decoding=`async`,i.addEventListener(`load`,()=>{let t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),n({texture:t,width:i.naturalWidth||1,height:i.naturalHeight||1})},{once:!0}),i.addEventListener(`error`,()=>{r(Error(`Unable to load the image texture: ${t}`))},{once:!0}),i.src=t})}function s({canvas:e,scene:t,imageUrl:i,reducedMotion:s=!1,autoStart:c=!0,interactive:l=!0,primePointer:u=!1,mapping:d=`cover`,measureSize:f,beforeRender:p,onRender:m=()=>{},onUnavailable:h=()=>{},...g}={}){if(!e||!t||!i)return null;let _={...n,...g},v=e.getContext(`webgl`,{alpha:!1,antialias:!1,depth:!1,powerPreference:`low-power`,stencil:!1});if(!v)return null;let y;try{y=a(v,d)}catch(e){return console.error(`Unable to initialize the image WebGL scene.`,e),null}let b=v.createBuffer(),x=v.getAttribLocation(y,`a_position`),S={image:v.getUniformLocation(y,`u_image`),imageResolution:v.getUniformLocation(y,`u_imageResolution`),resolution:v.getUniformLocation(y,`u_resolution`),time:v.getUniformLocation(y,`u_time`),idleSpeed:v.getUniformLocation(y,`u_idleSpeed`),idleStrength:v.getUniformLocation(y,`u_idleStrength`),interactionStrength:v.getUniformLocation(y,`u_interactionStrength`),idleFrequency:v.getUniformLocation(y,`u_idleFrequency`),mouse:v.getUniformLocation(y,`u_mouse`),velocity:v.getUniformLocation(y,`u_velocity`),strength:v.getUniformLocation(y,`u_strength`),radius:v.getUniformLocation(y,`u_radius`),zoom:v.getUniformLocation(y,`u_zoom`)},C=0,w=0,T=0,E={x:.5,y:.5},D={x:.5,y:.5},O={x:.5,y:.5},k={x:0,y:0},A={x:0,y:0},j=0,M=!1,N=!1,P=u,F=null,I=!1,L=!1,R=!1,z=window.matchMedia(`(hover: hover) and (pointer: fine)`).matches;v.bindBuffer(v.ARRAY_BUFFER,b),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),v.STATIC_DRAW),v.useProgram(y),v.enableVertexAttribArray(x),v.vertexAttribPointer(x,2,v.FLOAT,!1,0,0),v.uniform1i(S.image,0),v.uniform1f(S.idleSpeed,_.idleSpeed),v.uniform1f(S.idleStrength,s?0:_.idleStrength),v.uniform1f(S.interactionStrength,s?0:_.interactionStrength),v.uniform2fv(S.idleFrequency,_.idleFrequency),v.uniform1f(S.radius,_.radius),v.uniform1f(S.zoom,_.zoom);function B(){let t=Math.min(window.devicePixelRatio||1,_.maxPixelRatio),n=f?.()||{width:e.clientWidth,height:e.clientHeight},r=Math.max(1,Math.round(n.width*t)),i=Math.max(1,Math.round(n.height*t));e.width===r&&e.height===i||(e.width=r,e.height=i,v.viewport(0,0,r,i))}function V(e){let t=T?Math.min(Math.max((e-T)/1e3,1/240),1/30):1/60;T=e,w+=t;let n=r(_.positionDamping,t);D.x+=(E.x-D.x)*n,D.y+=(E.y-D.y)*n,k.x=(D.x-O.x)/t*_.velocityGain,k.y=(D.y-O.y)/t*_.velocityGain,O.x=D.x,O.y=D.y;let i=r(_.velocityDamping,t);A.x+=(k.x-A.x)*i,A.y+=(k.y-A.y)*i;let a=Math.hypot(A.x,A.y),o=M?Math.min(a*6,1):0,s=r(j<o?_.strengthRise:_.strengthDecay,t);j+=(o-j)*s}function H(t=0,n=c){return I||R||!F||v.isContextLost()||(B(),p?.(v,y)===!1)?!1:(n&&V(t),v.activeTexture(v.TEXTURE0),v.bindTexture(v.TEXTURE_2D,F),v.uniform2f(S.mouse,D.x,D.y),v.uniform2f(S.velocity,A.x,A.y),v.uniform1f(S.strength,j),v.uniform2f(S.resolution,e.width,e.height),v.uniform1f(S.time,w),v.drawArrays(v.TRIANGLES,0,3),!c&&(v.isContextLost()||v.getError()!==v.NO_ERROR)?(h(),!1):(m(),L&&c&&(C=requestAnimationFrame(H)),!0))}function U(e){if(C=0,L){try{if(!H(e,!0)){K(),h();return}}catch(e){K(),h(),console.error(`Unable to animate the image WebGL scene.`,e);return}L&&(C=requestAnimationFrame(U))}}function W({idleStrength:e=_.idleStrength,interactionStrength:t=_.interactionStrength,zoom:n=_.zoom}={}){I||R||(_.idleStrength=Math.max(0,e),_.interactionStrength=Math.min(1,Math.max(0,t)),_.zoom=Math.max(1,n),v.uniform1f(S.idleStrength,s?0:_.idleStrength),v.uniform1f(S.interactionStrength,s?0:_.interactionStrength),v.uniform1f(S.zoom,_.zoom))}function G(){I||R||!F||L||s||document.hidden||(L=!0,T=0,C=requestAnimationFrame(c?H:U))}function K(){L=!1,cancelAnimationFrame(C),C=0}function q(e){if(u&&e.pointerType===`touch`)return;let n=t.getBoundingClientRect();E.x=(e.clientX-n.left)/n.width,E.y=1-(e.clientY-n.top)/n.height,P&&=(Object.assign(D,E),Object.assign(O,E),k.x=k.y=0,A.x=A.y=0,j=0,!1),M=!0}function J(){M=!1,u&&(P=!0)}function Y(e){let n=!!(e&&z&&!s&&!I&&!R);n!==N&&(N=n,M=!1,P=u,k.x=k.y=0,A.x=A.y=0,j=0,n?(t.addEventListener(`pointerenter`,q,{passive:!0}),t.addEventListener(`pointermove`,q,{passive:!0}),t.addEventListener(`pointerleave`,J)):(t.removeEventListener(`pointerenter`,q),t.removeEventListener(`pointermove`,q),t.removeEventListener(`pointerleave`,J)))}function X(){if(c){if(document.hidden){K();return}G()}}function Z(){!c||!s||!F||H()}function Q(e){e.preventDefault(),R=!0,K(),h()}Y(l),document.addEventListener(`visibilitychange`,X),window.addEventListener(`resize`,Z,{passive:!0}),e.addEventListener(`webglcontextlost`,Q);let $=o(v,i).then(e=>I?(v.deleteTexture(e.texture),!1):(F=e.texture,v.uniform2f(S.imageResolution,e.width,e.height),s||!c?H():(G(),!0))).catch(e=>(console.error(`Unable to prepare the WebGL texture.`,e),h(),!1));function ee(){I||(I=!0,K(),t.removeEventListener(`pointerenter`,q),t.removeEventListener(`pointermove`,q),t.removeEventListener(`pointerleave`,J),document.removeEventListener(`visibilitychange`,X),window.removeEventListener(`resize`,Z),e.removeEventListener(`webglcontextlost`,Q),F&&v.deleteTexture(F),v.deleteBuffer(b),v.deleteProgram(y))}return{ready:$,render:H,setState:W,setInteractive:Y,start:G,stop:K,destroy:ee}}export{s as t};