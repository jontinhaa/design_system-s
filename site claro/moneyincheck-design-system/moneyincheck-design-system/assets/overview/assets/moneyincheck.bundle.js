/* Money in Check: the site's Vite ES-module graph (index-BYAKky6a -> index-Cyc007zT -> bills-B80SgPGk,
   language-WsAUZ4RO) repackaged as one classic script so the page runs from file://.
   Chunk code is unchanged apart from import/export wiring, relative asset paths, the WebGL bill
   textures read from data URIs (bill-textures.js) and the catalog copy map hook (window.__DS_COPY). */
(function(){
var __dsDefs={},__dsDone={},__dsExports={};
function __dsRequire(n){if(!__dsDone[n]){__dsDone[n]=1;__dsDefs[n]();}return __dsExports[n];}
function __dsImport(n){return Promise.resolve().then(function(){return __dsRequire(n);});}
function __dsTex(s){var f=/[^\/?#]+(?=[?#]|$)/.exec(s||""),m=window.__DS_TEX||{};return (f&&m[f[0]])||s;}

/* ---- bills-B80SgPGk.js ---- */
__dsDefs.bills=function(){"use strict";
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dt="srgb",Pi="srgb-linear",Di="linear",Ye="srgb";const Ur="300 es";function sa(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ei(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function aa(){const i=ei("canvas");return i.style.display="block",i}const Ir={};function Nr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Cs(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=Cs(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=Cs(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Bn(...i){const e=i.join(" ");e in Ir||(Ir[e]=!0,Re(...i))}function oa(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const la={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class Mn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Or=1234567;const Qn=Math.PI/180,ti=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function _r(i,e){return(i%e+e)%e}function ca(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ua(i,e,t){return i!==e?(t-i)/(e-i):0}function jn(i,e,t){return(1-t)*i+t*e}function fa(i,e,t,n){return jn(i,e,1-Math.exp(-t*n))}function da(i,e=1){return e-Math.abs(_r(i,e*2)-e)}function ha(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pa(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ma(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _a(i,e){return i+Math.random()*(e-i)}function ga(i){return i*(.5-Math.random())}function xa(i){i!==void 0&&(Or=i);let e=Or+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function va(i){return i*Qn}function Ma(i){return i*ti}function Sa(i){return(i&i-1)===0&&i!==0}function Ea(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ta(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ya(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),u=a((e-n)/2),m=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*f,c*p,c*u,o*l);break;case"YZY":i.set(c*u,o*f,c*p,o*l);break;case"ZXZ":i.set(c*p,c*u,o*f,o*l);break;case"XZX":i.set(o*f,c*v,c*m,o*l);break;case"YXY":i.set(c*m,o*f,c*v,o*l);break;case"ZYZ":i.set(c*v,c*m,o*f,o*l);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Aa={DEG2RAD:Qn,RAD2DEG:ti,generateUUID:Hn,clamp:Oe,euclideanModulo:_r,mapLinear:ca,inverseLerp:ua,lerp:jn,damp:fa,pingpong:da,smoothstep:ha,smootherstep:pa,randInt:ma,randFloat:_a,randFloatSpread:ga,seededRandom:xa,degToRad:va,radToDeg:Ma,isPowerOfTwo:Sa,ceilPowerOfTwo:Ea,floorPowerOfTwo:Ta,setQuaternionFromProperEuler:ya,normalize:Et,denormalize:On},Mr=class Mr{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mr.prototype.isVector2=!0;let ke=Mr;class kn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],f=n[r+2],p=n[r+3],u=s[a+0],m=s[a+1],v=s[a+2],E=s[a+3];if(p!==E||c!==u||l!==m||f!==v){let _=c*u+l*m+f*v+p*E;_<0&&(u=-u,m=-m,v=-v,E=-E,_=-_);let d=1-o;if(_<.9995){const b=Math.acos(_),R=Math.sin(b);d=Math.sin(d*b)/R,o=Math.sin(o*b)/R,c=c*d+u*o,l=l*d+m*o,f=f*d+v*o,p=p*d+E*o}else{c=c*d+u*o,l=l*d+m*o,f=f*d+v*o,p=p*d+E*o;const b=1/Math.sqrt(c*c+l*l+f*f+p*p);c*=b,l*=b,f*=b,p*=b}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],p=s[a],u=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+f*p+c*m-l*u,e[t+1]=c*v+f*u+l*p-o*m,e[t+2]=l*v+f*m+o*u-c*p,e[t+3]=f*v-o*p-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),p=o(s/2),u=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=u*f*p+l*m*v,this._y=l*m*p-u*f*v,this._z=l*f*v+u*m*p,this._w=l*f*p-u*m*v;break;case"YXZ":this._x=u*f*p+l*m*v,this._y=l*m*p-u*f*v,this._z=l*f*v-u*m*p,this._w=l*f*p+u*m*v;break;case"ZXY":this._x=u*f*p-l*m*v,this._y=l*m*p+u*f*v,this._z=l*f*v+u*m*p,this._w=l*f*p-u*m*v;break;case"ZYX":this._x=u*f*p-l*m*v,this._y=l*m*p+u*f*v,this._z=l*f*v-u*m*p,this._w=l*f*p+u*m*v;break;case"YZX":this._x=u*f*p+l*m*v,this._y=l*m*p+u*f*v,this._z=l*f*v-u*m*p,this._w=l*f*p-u*m*v;break;case"XZY":this._x=u*f*p-l*m*v,this._y=l*m*p-u*f*v,this._z=l*f*v+u*m*p,this._w=l*f*p+u*m*v;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],p=t[10],u=n+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(f-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-r*o,this._w=a*f-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sr=class Sr{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Br.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Br.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*l+a*p-o*f,this.y=n+c*f+o*l-s*p,this.z=r+c*p+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gi.copy(this).projectOnVector(e),this.sub(Gi)}reflect(e){return this.sub(Gi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sr.prototype.isVector3=!0;let z=Sr;const Gi=new z,Br=new kn,Er=class Er{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],p=n[7],u=n[2],m=n[5],v=n[8],E=r[0],_=r[3],d=r[6],b=r[1],R=r[4],M=r[7],A=r[2],T=r[5],C=r[8];return s[0]=a*E+o*b+c*A,s[3]=a*_+o*R+c*T,s[6]=a*d+o*M+c*C,s[1]=l*E+f*b+p*A,s[4]=l*_+f*R+p*T,s[7]=l*d+f*M+p*C,s[2]=u*E+m*b+v*A,s[5]=u*_+m*R+v*T,s[8]=u*d+m*M+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=f*a-o*l,u=o*c-f*s,m=l*s-a*c,v=t*p+n*u+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=p*E,e[1]=(r*l-f*n)*E,e[2]=(o*n-r*a)*E,e[3]=u*E,e[4]=(f*t-r*c)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(n*c-l*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Bn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zi.makeScale(e,t)),this}rotate(e){return Bn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zi.makeRotation(-e)),this}translate(e,t){return Bn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Er.prototype.isMatrix3=!0;let we=Er;const zi=new we,Gr=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zr=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ba(){const i={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ye&&(r.r=Qt(r.r),r.g=Qt(r.g),r.b=Qt(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Di:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pi]:{primaries:e,whitePoint:n,transfer:Di,toXYZ:Gr,fromXYZ:zr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:Gr,fromXYZ:zr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}const Be=ba();function Qt(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Tn;class Ra{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tn===void 0&&(Tn=ei("canvas")),Tn.width=e.width,Tn.height=e.height;const r=Tn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Tn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ei("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qt(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qt(t[n]/255)*255):t[n]=Qt(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ca=0;class gr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ca++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vi(r[a].image)):s.push(Vi(r[a]))}else s=Vi(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vi(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let wa=0;const Hi=new z;class St extends Mn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=St.DEFAULT_ANISOTROPY,f=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wa++}),this.uuid=Hn(),this.name="",this.source=new gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hi).x}get height(){return this.source.getSize(Hi).y}get depth(){return this.source.getSize(Hi).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=300;St.DEFAULT_ANISOTROPY=1;const Tr=class Tr{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],p=c[8],u=c[1],m=c[5],v=c[9],E=c[2],_=c[6],d=c[10];if(Math.abs(f-u)<.01&&Math.abs(p-E)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+E)<.1&&Math.abs(v+_)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,M=(m+1)/2,A=(d+1)/2,T=(f+u)/4,C=(p+E)/4,g=(v+_)/4;return R>M&&R>A?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=T/n,s=C/n):M>A?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=T/r,s=g/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=C/s,r=g/s),this.set(n,r,s,t),this}let b=Math.sqrt((_-v)*(_-v)+(p-E)*(p-E)+(u-f)*(u-f));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(p-E)/b,this.z=(u-f)/b,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tr.prototype.isVector4=!0;let rt=Tr;class Pa extends Mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new St(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new gr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wt extends Pa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ws extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Da extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fi=class Fi{constructor(e,t,n,r,s,a,o,c,l,f,p,u,m,v,E,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,f,p,u,m,v,E,_)}set(e,t,n,r,s,a,o,c,l,f,p,u,m,v,E,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=p,d[14]=u,d[3]=m,d[7]=v,d[11]=E,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fi().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/yn.setFromMatrixColumn(e,0).length(),s=1/yn.setFromMatrixColumn(e,1).length(),a=1/yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=a*f,m=a*p,v=o*f,E=o*p;t[0]=c*f,t[4]=-c*p,t[8]=l,t[1]=m+v*l,t[5]=u-E*l,t[9]=-o*c,t[2]=E-u*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*f,m=c*p,v=l*f,E=l*p;t[0]=u+E*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*f,t[9]=-o,t[2]=m*o-v,t[6]=E+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*f,m=c*p,v=l*f,E=l*p;t[0]=u-E*o,t[4]=-a*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*f,t[9]=E-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*f,m=a*p,v=o*f,E=o*p;t[0]=c*f,t[4]=v*l-m,t[8]=u*l+E,t[1]=c*p,t[5]=E*l+u,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,v=o*c,E=o*l;t[0]=c*f,t[4]=E-u*p,t[8]=v*p+m,t[1]=p,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=m*p+v,t[10]=u-E*p}else if(e.order==="XZY"){const u=a*c,m=a*l,v=o*c,E=o*l;t[0]=c*f,t[4]=-p,t[8]=l*f,t[1]=u*p+E,t[5]=a*f,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*f,t[10]=E*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(La,e,Fa)}lookAt(e,t,n){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),sn.crossVectors(n,bt),sn.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),sn.crossVectors(n,bt)),sn.normalize(),oi.crossVectors(bt,sn),r[0]=sn.x,r[4]=oi.x,r[8]=bt.x,r[1]=sn.y,r[5]=oi.y,r[9]=bt.y,r[2]=sn.z,r[6]=oi.z,r[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],p=n[5],u=n[9],m=n[13],v=n[2],E=n[6],_=n[10],d=n[14],b=n[3],R=n[7],M=n[11],A=n[15],T=r[0],C=r[4],g=r[8],y=r[12],F=r[1],P=r[5],I=r[9],Y=r[13],K=r[2],B=r[6],X=r[10],H=r[14],Q=r[3],k=r[7],ee=r[11],ne=r[15];return s[0]=a*T+o*F+c*K+l*Q,s[4]=a*C+o*P+c*B+l*k,s[8]=a*g+o*I+c*X+l*ee,s[12]=a*y+o*Y+c*H+l*ne,s[1]=f*T+p*F+u*K+m*Q,s[5]=f*C+p*P+u*B+m*k,s[9]=f*g+p*I+u*X+m*ee,s[13]=f*y+p*Y+u*H+m*ne,s[2]=v*T+E*F+_*K+d*Q,s[6]=v*C+E*P+_*B+d*k,s[10]=v*g+E*I+_*X+d*ee,s[14]=v*y+E*Y+_*H+d*ne,s[3]=b*T+R*F+M*K+A*Q,s[7]=b*C+R*P+M*B+A*k,s[11]=b*g+R*I+M*X+A*ee,s[15]=b*y+R*Y+M*H+A*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],p=e[6],u=e[10],m=e[14],v=e[3],E=e[7],_=e[11],d=e[15],b=c*m-l*u,R=o*m-l*p,M=o*u-c*p,A=a*m-l*f,T=a*u-c*f,C=a*p-o*f;return t*(E*b-_*R+d*M)-n*(v*b-_*A+d*T)+r*(v*R-E*A+d*C)-s*(v*M-E*T+_*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-n*(s*f-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=e[9],u=e[10],m=e[11],v=e[12],E=e[13],_=e[14],d=e[15],b=t*o-n*a,R=t*c-r*a,M=t*l-s*a,A=n*c-r*o,T=n*l-s*o,C=r*l-s*c,g=f*E-p*v,y=f*_-u*v,F=f*d-m*v,P=p*_-u*E,I=p*d-m*E,Y=u*d-m*_,K=b*Y-R*I+M*P+A*F-T*y+C*g;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/K;return e[0]=(o*Y-c*I+l*P)*B,e[1]=(r*I-n*Y-s*P)*B,e[2]=(E*C-_*T+d*A)*B,e[3]=(u*T-p*C-m*A)*B,e[4]=(c*F-a*Y-l*y)*B,e[5]=(t*Y-r*F+s*y)*B,e[6]=(_*M-v*C-d*R)*B,e[7]=(f*C-u*M+m*R)*B,e[8]=(a*I-o*F+l*g)*B,e[9]=(n*F-t*I-s*g)*B,e[10]=(v*T-E*M+d*b)*B,e[11]=(p*M-f*T-m*b)*B,e[12]=(o*y-a*P-c*g)*B,e[13]=(t*P-n*y+r*g)*B,e[14]=(E*R-v*A-_*b)*B,e[15]=(f*A-p*R+u*b)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,p=o+o,u=s*l,m=s*f,v=s*p,E=a*f,_=a*p,d=o*p,b=c*l,R=c*f,M=c*p,A=n.x,T=n.y,C=n.z;return r[0]=(1-(E+d))*A,r[1]=(m+M)*A,r[2]=(v-R)*A,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(u+d))*T,r[6]=(_+b)*T,r[7]=0,r[8]=(v+R)*C,r[9]=(_-b)*C,r[10]=(1-(u+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=yn.set(r[0],r[1],r[2]).length();const o=yn.set(r[4],r[5],r[6]).length(),c=yn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ft.copy(this);const l=1/a,f=1/o,p=1/c;return Ft.elements[0]*=l,Ft.elements[1]*=l,Ft.elements[2]*=l,Ft.elements[4]*=f,Ft.elements[5]*=f,Ft.elements[6]*=f,Ft.elements[8]*=p,Ft.elements[9]*=p,Ft.elements[10]*=p,t.setFromRotationMatrix(Ft),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){const l=this.elements,f=2*s/(t-e),p=2*s/(n-r),u=(t+e)/(t-e),m=(n+r)/(n-r);let v,E;if(c)v=s/(a-s),E=a*s/(a-s);else if(o===2e3)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===2001)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){const l=this.elements,f=2/(t-e),p=2/(n-r),u=-(t+e)/(t-e),m=-(n+r)/(n-r);let v,E;if(c)v=1/(a-s),E=a/(a-s);else if(o===2e3)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===2001)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fi.prototype.isMatrix4=!0;let ft=Fi;const yn=new z,Ft=new ft,La=new z(0,0,0),Fa=new z(1,1,1),sn=new z,oi=new z,bt=new z,Vr=new ft,Hr=new kn;class vn{constructor(e=0,t=0,n=0,r=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],p=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hr.setFromEuler(this),this.setFromQuaternion(Hr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Ps{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ua=0;const kr=new z,An=new kn,Yt=new ft,li=new z,Xn=new z,Ia=new z,Na=new kn,Wr=new z(1,0,0),Xr=new z(0,1,0),qr=new z(0,0,1),Yr={type:"added"},Oa={type:"removed"},bn={type:"childadded",child:null},ki={type:"childremoved",child:null};class Ct extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ua++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new z,t=new vn,n=new kn,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new we}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(Wr,e)}rotateY(e){return this.rotateOnAxis(Xr,e)}rotateZ(e){return this.rotateOnAxis(qr,e)}translateOnAxis(e,t){return kr.copy(e).applyQuaternion(this.quaternion),this.position.add(kr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wr,e)}translateY(e){return this.translateOnAxis(Xr,e)}translateZ(e){return this.translateOnAxis(qr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?li.copy(e):li.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(Xn,li,this.up):Yt.lookAt(li,Xn,this.up),this.quaternion.setFromRotationMatrix(Yt),r&&(Yt.extractRotation(r.matrixWorld),An.setFromRotationMatrix(Yt),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yr),bn.child=e,this.dispatchEvent(bn),bn.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oa),ki.child=e,this.dispatchEvent(ki),ki.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yr),bn.child=e,this.dispatchEvent(bn),bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,e,Ia),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,Na,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new z(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ci extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ba={type:"move"};class Wi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const E of e.hand.values()){const _=t.getJointPose(E,n),d=this._getHandJoint(l,E);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=f.position.distanceTo(p.position),m=.02,v=.005;l.inputState.pinching&&u>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ba)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ds={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},ui={h:0,s:0,l:0};function Xi(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Be.workingColorSpace){return this.r=e,this.g=t,this.b=n,Be.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Be.workingColorSpace){if(e=_r(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Xi(a,s,e+1/3),this.g=Xi(a,s,e),this.b=Xi(a,s,e-1/3)}return Be.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Ds[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qt(e.r),this.g=Qt(e.g),this.b=Qt(e.b),this}copyLinearToSRGB(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Be.workingToColorSpace(Mt.copy(this),e),Math.round(Oe(Mt.r*255,0,255))*65536+Math.round(Oe(Mt.g*255,0,255))*256+Math.round(Oe(Mt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.workingToColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=f<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=Be.workingColorSpace){return Be.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Dt){Be.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(ui);const n=jn(an.h,ui.h,t),r=jn(an.s,ui.s,t),s=jn(an.l,ui.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Xe;Xe.NAMES=Ds;class Ga extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ut=new z,Kt=new z,qi=new z,Zt=new z,Rn=new z,Cn=new z,Kr=new z,Yi=new z,Ki=new z,Zi=new z,$i=new rt,Ji=new rt,Qi=new rt;class Nt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ut.subVectors(e,t),r.cross(Ut);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ut.subVectors(r,t),Kt.subVectors(n,t),qi.subVectors(e,t);const a=Ut.dot(Ut),o=Ut.dot(Kt),c=Ut.dot(qi),l=Kt.dot(Kt),f=Kt.dot(qi),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,m=(l*c-o*f)*u,v=(a*f-o*c)*u;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zt)===null?!1:Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Zt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zt.x),c.addScaledVector(a,Zt.y),c.addScaledVector(o,Zt.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return $i.setScalar(0),Ji.setScalar(0),Qi.setScalar(0),$i.fromBufferAttribute(e,t),Ji.fromBufferAttribute(e,n),Qi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($i,s.x),a.addScaledVector(Ji,s.y),a.addScaledVector(Qi,s.z),a}static isFrontFacing(e,t,n,r){return Ut.subVectors(n,t),Kt.subVectors(e,t),Ut.cross(Kt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ut.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Nt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Rn.subVectors(r,n),Cn.subVectors(s,n),Yi.subVectors(e,n);const c=Rn.dot(Yi),l=Cn.dot(Yi);if(c<=0&&l<=0)return t.copy(n);Ki.subVectors(e,r);const f=Rn.dot(Ki),p=Cn.dot(Ki);if(f>=0&&p<=f)return t.copy(r);const u=c*p-f*l;if(u<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Rn,a);Zi.subVectors(e,s);const m=Rn.dot(Zi),v=Cn.dot(Zi);if(v>=0&&m<=v)return t.copy(s);const E=m*l-c*v;if(E<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Cn,o);const _=f*v-m*p;if(_<=0&&p-f>=0&&m-v>=0)return Kr.subVectors(s,r),o=(p-f)/(p-f+(m-v)),t.copy(r).addScaledVector(Kr,o);const d=1/(_+E+u);return a=E*d,o=u*d,t.copy(n).addScaledVector(Rn,a).addScaledVector(Cn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ni{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,It):It.fromBufferAttribute(s,a),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fi.copy(n.boundingBox)),fi.applyMatrix4(e.matrixWorld),this.union(fi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qn),di.subVectors(this.max,qn),wn.subVectors(e.a,qn),Pn.subVectors(e.b,qn),Dn.subVectors(e.c,qn),on.subVectors(Pn,wn),ln.subVectors(Dn,Pn),hn.subVectors(wn,Dn);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-hn.z,hn.y,on.z,0,-on.x,ln.z,0,-ln.x,hn.z,0,-hn.x,-on.y,on.x,0,-ln.y,ln.x,0,-hn.y,hn.x,0];return!ji(t,wn,Pn,Dn,di)||(t=[1,0,0,0,1,0,0,0,1],!ji(t,wn,Pn,Dn,di))?!1:(hi.crossVectors(on,ln),t=[hi.x,hi.y,hi.z],ji(t,wn,Pn,Dn,di))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $t=[new z,new z,new z,new z,new z,new z,new z,new z],It=new z,fi=new ni,wn=new z,Pn=new z,Dn=new z,on=new z,ln=new z,hn=new z,qn=new z,di=new z,hi=new z,pn=new z;function ji(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){pn.fromArray(i,s);const o=r.x*Math.abs(pn.x)+r.y*Math.abs(pn.y)+r.z*Math.abs(pn.z),c=e.dot(pn),l=t.dot(pn),f=n.dot(pn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const ut=new z,pi=new ke;let za=0;class Xt extends Mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:za++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix3(e),this.setXY(t,pi.x,pi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fs extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Va=new ni,Yn=new z,er=new z;class xr{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Va.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yn.subVectors(e,this.center);const t=Yn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Yn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yn.copy(e.center).add(er)),this.expandByPoint(Yn.copy(e.center).sub(er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ha=0;const Pt=new ft,tr=new Ct,Ln=new z,Rt=new ni,Kn=new ni,_t=new z;class en extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ha++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sa(e)?Fs:Ls)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new we().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return tr.lookAt(e),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Kn.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Rt.min,Kn.min),Rt.expandByPoint(_t),_t.addVectors(Rt.max,Kn.max),Rt.expandByPoint(_t)):(Rt.expandByPoint(Kn.min),Rt.expandByPoint(Kn.max))}Rt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)_t.fromBufferAttribute(o,l),c&&(Ln.fromBufferAttribute(e,l),_t.add(Ln)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let g=0;g<n.count;g++)o[g]=new z,c[g]=new z;const l=new z,f=new z,p=new z,u=new ke,m=new ke,v=new ke,E=new z,_=new z;function d(g,y,F){l.fromBufferAttribute(n,g),f.fromBufferAttribute(n,y),p.fromBufferAttribute(n,F),u.fromBufferAttribute(s,g),m.fromBufferAttribute(s,y),v.fromBufferAttribute(s,F),f.sub(l),p.sub(l),m.sub(u),v.sub(u);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(E.copy(f).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(P),_.copy(p).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(P),o[g].add(E),o[y].add(E),o[F].add(E),c[g].add(_),c[y].add(_),c[F].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let g=0,y=b.length;g<y;++g){const F=b[g],P=F.start,I=F.count;for(let Y=P,K=P+I;Y<K;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const R=new z,M=new z,A=new z,T=new z;function C(g){A.fromBufferAttribute(r,g),T.copy(A);const y=o[g];R.copy(y),R.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(T,y);const P=M.dot(c[g])<0?-1:1;a.setXYZW(g,R.x,R.y,R.z,P)}for(let g=0,y=b.length;g<y;++g){const F=b[g],P=F.start,I=F.count;for(let Y=P,K=P+I;Y<K;Y+=3)C(e.getX(Y+0)),C(e.getX(Y+1)),C(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,f=new z,p=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),E=e.getX(u+1),_=e.getX(u+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,_),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,_),o.add(f),c.add(f),l.add(f),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,p=o.normalized,u=new l.constructor(c.length*f);let m=0,v=0;for(let E=0,_=c.length;E<_;E++){o.isInterleavedBufferAttribute?m=c[E]*o.data.stride+o.offset:m=c[E]*f;for(let d=0;d<f;d++)u[v++]=l[m++]}return new Xt(u,f,p)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,p=l.length;f<p;f++){const u=l[f],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let p=0,u=l.length;p<u;p++){const m=l[p];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],p=s[l];for(let u=0,m=p.length;u<m;u++)f.push(p[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ka=0;class Ui extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ka++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jt=new z,nr=new z,mi=new z,cn=new z,ir=new z,_i=new z,rr=new z;class Wa{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){nr.copy(e).add(t).multiplyScalar(.5),mi.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(nr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(mi),o=cn.dot(this.direction),c=-cn.dot(mi),l=cn.lengthSq(),f=Math.abs(1-a*a);let p,u,m,v;if(f>0)if(p=a*c-o,u=a*o-c,v=s*f,p>=0)if(u>=-v)if(u<=v){const E=1/f;p*=E,u*=E,m=p*(p+a*u+2*o)+u*(a*p+u+2*c)+l}else u=s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;else u=-s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;else u<=-v?(p=Math.max(0,-(-a*s+o)),u=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+u*(u+2*c)+l):u<=v?(p=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(p=Math.max(0,-(a*s+o)),u=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+u*(u+2*c)+l);else u=a>0?-s:s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(nr).addScaledVector(mi,u),m}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),r=Jt.dot(Jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,r,s){ir.subVectors(t,e),_i.subVectors(n,e),rr.crossVectors(ir,_i);let a=this.direction.dot(rr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,e);const c=o*this.direction.dot(_i.crossVectors(cn,_i));if(c<0)return null;const l=o*this.direction.dot(ir.cross(cn));if(l<0||c+l>a)return null;const f=-o*cn.dot(rr);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Us extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zr=new ft,mn=new Wa,gi=new xr,$r=new z,xi=new z,vi=new z,Mi=new z,sr=new z,Si=new z,Jr=new z,Ei=new z;class qt extends Ct{constructor(e=new en,t=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Si.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],p=s[c];f!==0&&(sr.fromBufferAttribute(p,e),a?Si.addScaledVector(sr,f):Si.addScaledVector(sr.sub(t),f))}t.add(Si)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gi.copy(n.boundingSphere),gi.applyMatrix4(s),mn.copy(e.ray).recast(e.near),!(gi.containsPoint(mn.origin)===!1&&(mn.intersectSphere(gi,$r)===null||mn.origin.distanceToSquared($r)>(e.far-e.near)**2))&&(Zr.copy(s).invert(),mn.copy(e.ray).applyMatrix4(Zr),!(n.boundingBox!==null&&mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=u.length;v<E;v++){const _=u[v],d=a[_.materialIndex],b=Math.max(_.start,m.start),R=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let M=b,A=R;M<A;M+=3){const T=o.getX(M),C=o.getX(M+1),g=o.getX(M+2);r=Ti(this,d,e,n,l,f,p,T,C,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let _=v,d=E;_<d;_+=3){const b=o.getX(_),R=o.getX(_+1),M=o.getX(_+2);r=Ti(this,a,e,n,l,f,p,b,R,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=u.length;v<E;v++){const _=u[v],d=a[_.materialIndex],b=Math.max(_.start,m.start),R=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let M=b,A=R;M<A;M+=3){const T=M,C=M+1,g=M+2;r=Ti(this,d,e,n,l,f,p,T,C,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let _=v,d=E;_<d;_+=3){const b=_,R=_+1,M=_+2;r=Ti(this,a,e,n,l,f,p,b,R,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Xa(i,e,t,n,r,s,a,o){let c;if(e.side===1?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===0,o),c===null)return null;Ei.copy(o),Ei.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ei);return l<t.near||l>t.far?null:{distance:l,point:Ei.clone(),object:i}}function Ti(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,xi),i.getVertexPosition(c,vi),i.getVertexPosition(l,Mi);const f=Xa(i,e,t,n,xi,vi,Mi,Jr);if(f){const p=new z;Nt.getBarycoord(Jr,xi,vi,Mi,p),r&&(f.uv=Nt.getInterpolatedAttribute(r,o,c,l,p,new ke)),s&&(f.uv1=Nt.getInterpolatedAttribute(s,o,c,l,p,new ke)),a&&(f.normal=Nt.getInterpolatedAttribute(a,o,c,l,p,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new z,materialIndex:0};Nt.getNormal(xi,vi,Mi,u.normal),f.face=u,f.barycoord=p}return f}class qa extends St{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,f=1003,p,u){super(null,a,o,c,l,f,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ar=new z,Ya=new z,Ka=new we;class gn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ar.subVectors(n,t).cross(Ya.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ar),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ka.getNormalMatrix(e),r=this.coplanarPoint(ar).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new xr,Za=new ke(.5,.5),yi=new z;class Is{constructor(e=new gn,t=new gn,n=new gn,r=new gn,s=new gn,a=new gn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],p=s[5],u=s[6],m=s[7],v=s[8],E=s[9],_=s[10],d=s[11],b=s[12],R=s[13],M=s[14],A=s[15];if(r[0].setComponents(l-a,m-f,d-v,A-b).normalize(),r[1].setComponents(l+a,m+f,d+v,A+b).normalize(),r[2].setComponents(l+o,m+p,d+E,A+R).normalize(),r[3].setComponents(l-o,m-p,d-E,A-R).normalize(),n)r[4].setComponents(c,u,_,M).normalize(),r[5].setComponents(l-c,m-u,d-_,A-M).normalize();else if(r[4].setComponents(l-c,m-u,d-_,A-M).normalize(),t===2e3)r[5].setComponents(l+c,m+u,d+_,A+M).normalize();else if(t===2001)r[5].setComponents(c,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){_n.center.set(0,0,0);const t=Za.distanceTo(e.center);return _n.radius=.7071067811865476+t,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yi.x=r.normal.x>0?e.max.x:e.min.x,yi.y=r.normal.y>0?e.max.y:e.min.y,yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ns extends St{constructor(e=[],t=301,n,r,s,a,o,c,l,f){super(e,t,n,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zn extends St{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,f=1026,p=1){if(f!==1026&&f!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,r,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $a extends zn{constructor(e,t=1014,n=301,r,s,a=1003,o=1003,c,l=1026){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Os extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ii extends en{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],p=[];let u=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2));function v(E,_,d,b,R,M,A,T,C,g,y){const F=M/C,P=A/g,I=M/2,Y=A/2,K=T/2,B=C+1,X=g+1;let H=0,Q=0;const k=new z;for(let ee=0;ee<X;ee++){const ne=ee*P-Y;for(let re=0;re<B;re++){const Ue=re*F-I;k[E]=Ue*b,k[_]=ne*R,k[d]=K,l.push(k.x,k.y,k.z),k[E]=0,k[_]=0,k[d]=T>0?1:-1,f.push(k.x,k.y,k.z),p.push(re/C),p.push(1-ee/g),H+=1}}for(let ee=0;ee<g;ee++)for(let ne=0;ne<C;ne++){const re=u+ne+B*ee,Ue=u+ne+B*(ee+1),et=u+(ne+1)+B*(ee+1),Ge=u+(ne+1)+B*ee;c.push(re,Ue,Ge),c.push(Ue,et,Ge),Q+=6}o.addGroup(m,Q,y),m+=Q,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ri extends en{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,p=e/o,u=t/c,m=[],v=[],E=[],_=[];for(let d=0;d<f;d++){const b=d*u-a;for(let R=0;R<l;R++){const M=R*p-s;v.push(M,-b,0),E.push(0,0,1),_.push(R/o),_.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){const R=b+l*d,M=b+l*(d+1),A=b+1+l*(d+1),T=b+1+l*d;m.push(R,M,T),m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(E,3)),this.setAttribute("uv",new jt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.widthSegments,e.heightSegments)}}function Vn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Qr(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Qr(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Vn(i[t]);for(const r in n)e[r]=n[r]}return e}function Qr(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ja(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bs(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const Qa={clone:Vn,merge:Tt};var ja=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ja,this.fragmentShader=eo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vn(e.uniforms),this.uniformsGroups=Ja(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new we().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class to extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class no extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class io extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const or={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jr(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jr(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jr(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ro{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,p){return l.push(f,p),this},this.removeHandler=function(f){const p=l.indexOf(f);return p!==-1&&l.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=l.length;p<u;p+=2){const m=l[p],v=l[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const so=new ro;class vr{constructor(e){this.manager=e!==void 0?e:so,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn=new WeakMap;class ao extends vr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=or.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let p=Fn.get(a);p===void 0&&(p=[],Fn.set(a,p)),p.push({onLoad:t,onError:r})}return a}const o=ei("img");function c(){f(),t&&t(this);const p=Fn.get(this)||[];for(let u=0;u<p.length;u++){const m=p[u];m.onLoad&&m.onLoad(this)}Fn.delete(this),s.manager.itemEnd(e)}function l(p){f(),r&&r(p),or.remove(`image:${e}`);const u=Fn.get(this)||[];for(let m=0;m<u.length;m++){const v=u[m];v.onError&&v.onError(p)}Fn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),or.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class oo extends vr{constructor(e){super(e)}load(e,t,n,r){const s=new St,a=new ao(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}const Ai=new z,bi=new kn,Vt=new z;class Gs extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ai,bi,Vt),Vt.x===1&&Vt.y===1&&Vt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ai,bi,Vt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ai,bi,Vt),Vt.x===1&&Vt.y===1&&Vt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ai,bi,Vt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const un=new z,es=new ke,ts=new ke;class Lt extends Gs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ti*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ti*2*Math.atan(Math.tan(Qn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,es,ts),t.subVectors(ts,es)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zs extends Gs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Un=-90,In=1;class lo extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Lt(Un,In,e,t);r.layers=this.layers,this.add(r);const s=new Lt(Un,In,e,t);s.layers=this.layers,this.add(s);const a=new Lt(Un,In,e,t);a.layers=this.layers,this.add(a);const o=new Lt(Un,In,e,t);o.layers=this.layers,this.add(o);const c=new Lt(Un,In,e,t);c.layers=this.layers,this.add(c);const l=new Lt(Un,In,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,u,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class co extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yr=class yr{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};yr.prototype.isMatrix2=!0;let ns=yr;function is(i,e,t,n){const r=uo(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uo(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vs(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fo(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,f),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const f=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,f);else{p.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<p.length;m++){const v=p[u],E=p[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++u,p[u]=E)}p.length=u+1;for(let m=0,v=p.length;m<v;m++){const E=p[m];i.bufferSubData(l,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ho=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,po=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_o=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,go=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,So=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,To=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ao=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ro=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Co=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Po=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Do=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Io=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,No=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Go=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ho=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ko="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ko=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$o=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jo=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qo=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,el=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,il=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,al=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ol=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ll=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ul=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fl=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dl=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pl=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ml=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_l=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ml=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,El=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Al=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ll=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ul=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Il=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ol=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ql=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$l=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ql=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ec=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ic=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ac=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_c=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ec=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ac=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ic=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:ho,alphahash_pars_fragment:po,alphamap_fragment:mo,alphamap_pars_fragment:_o,alphatest_fragment:go,alphatest_pars_fragment:xo,aomap_fragment:vo,aomap_pars_fragment:Mo,batching_pars_vertex:So,batching_vertex:Eo,begin_vertex:To,beginnormal_vertex:yo,bsdfs:Ao,iridescence_fragment:bo,bumpmap_pars_fragment:Ro,clipping_planes_fragment:Co,clipping_planes_pars_fragment:wo,clipping_planes_pars_vertex:Po,clipping_planes_vertex:Do,color_fragment:Lo,color_pars_fragment:Fo,color_pars_vertex:Uo,color_vertex:Io,common:No,cube_uv_reflection_fragment:Oo,defaultnormal_vertex:Bo,displacementmap_pars_vertex:Go,displacementmap_vertex:zo,emissivemap_fragment:Vo,emissivemap_pars_fragment:Ho,colorspace_fragment:ko,colorspace_pars_fragment:Wo,envmap_fragment:Xo,envmap_common_pars_fragment:qo,envmap_pars_fragment:Yo,envmap_pars_vertex:Ko,envmap_physical_pars_fragment:sl,envmap_vertex:Zo,fog_vertex:$o,fog_pars_vertex:Jo,fog_fragment:Qo,fog_pars_fragment:jo,gradientmap_pars_fragment:el,lightmap_pars_fragment:tl,lights_lambert_fragment:nl,lights_lambert_pars_fragment:il,lights_pars_begin:rl,lights_toon_fragment:al,lights_toon_pars_fragment:ol,lights_phong_fragment:ll,lights_phong_pars_fragment:cl,lights_physical_fragment:ul,lights_physical_pars_fragment:fl,lights_fragment_begin:dl,lights_fragment_maps:hl,lights_fragment_end:pl,lightprobes_pars_fragment:ml,logdepthbuf_fragment:_l,logdepthbuf_pars_fragment:gl,logdepthbuf_pars_vertex:xl,logdepthbuf_vertex:vl,map_fragment:Ml,map_pars_fragment:Sl,map_particle_fragment:El,map_particle_pars_fragment:Tl,metalnessmap_fragment:yl,metalnessmap_pars_fragment:Al,morphinstance_vertex:bl,morphcolor_vertex:Rl,morphnormal_vertex:Cl,morphtarget_pars_vertex:wl,morphtarget_vertex:Pl,normal_fragment_begin:Dl,normal_fragment_maps:Ll,normal_pars_fragment:Fl,normal_pars_vertex:Ul,normal_vertex:Il,normalmap_pars_fragment:Nl,clearcoat_normal_fragment_begin:Ol,clearcoat_normal_fragment_maps:Bl,clearcoat_pars_fragment:Gl,iridescence_pars_fragment:zl,opaque_fragment:Vl,packing:Hl,premultiplied_alpha_fragment:kl,project_vertex:Wl,dithering_fragment:Xl,dithering_pars_fragment:ql,roughnessmap_fragment:Yl,roughnessmap_pars_fragment:Kl,shadowmap_pars_fragment:Zl,shadowmap_pars_vertex:$l,shadowmap_vertex:Jl,shadowmask_pars_fragment:Ql,skinbase_vertex:jl,skinning_pars_vertex:ec,skinning_vertex:tc,skinnormal_vertex:nc,specularmap_fragment:ic,specularmap_pars_fragment:rc,tonemapping_fragment:sc,tonemapping_pars_fragment:ac,transmission_fragment:oc,transmission_pars_fragment:lc,uv_pars_fragment:cc,uv_pars_vertex:uc,uv_vertex:fc,worldpos_vertex:dc,background_vert:hc,background_frag:pc,backgroundCube_vert:mc,backgroundCube_frag:_c,cube_vert:gc,cube_frag:xc,depth_vert:vc,depth_frag:Mc,distance_vert:Sc,distance_frag:Ec,equirect_vert:Tc,equirect_frag:yc,linedashed_vert:Ac,linedashed_frag:bc,meshbasic_vert:Rc,meshbasic_frag:Cc,meshlambert_vert:wc,meshlambert_frag:Pc,meshmatcap_vert:Dc,meshmatcap_frag:Lc,meshnormal_vert:Fc,meshnormal_frag:Uc,meshphong_vert:Ic,meshphong_frag:Nc,meshphysical_vert:Oc,meshphysical_frag:Bc,meshtoon_vert:Gc,meshtoon_frag:zc,points_vert:Vc,points_frag:Hc,shadow_vert:kc,shadow_frag:Wc,sprite_vert:Xc,sprite_frag:qc},de={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},kt={basic:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Tt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Tt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Tt([de.points,de.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Tt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Tt([de.common,de.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Tt([de.sprite,de.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Tt([de.common,de.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Tt([de.lights,de.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};kt.physical={uniforms:Tt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ri={r:0,b:0,g:0},Yc=new ft,Hs=new we;Hs.set(-1,0,0,0,1,0,0,0,1);function Kc(i,e,t,n,r,s){const a=new Xe(0);let o=r===!0?0:1,c,l,f=null,p=0,u=null;function m(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const M=b.backgroundBlurriness>0;R=e.get(R,M)}return R}function v(b){let R=!1;const M=m(b);M===null?_(a,o):M&&M.isColor&&(_(M,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(b,R){const M=m(R);M&&(M.isCubeTexture||M.mapping===306)?(l===void 0&&(l=new qt(new ii(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Vn(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yc.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hs),l.material.toneMapped=Be.getTransfer(M.colorSpace)!==Ye,(f!==M||p!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new qt(new ri(2,2),new Ot({name:"BackgroundMaterial",uniforms:Vn(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Be.getTransfer(M.colorSpace)!==Ye,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function _(b,R){b.getRGB(Ri,Bs(i)),t.buffers.color.setClear(Ri.r,Ri.g,Ri.b,R,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,_(a,o)},render:v,addToRenderList:E,dispose:d}}function Zc(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(P,I,Y,K,B){let X=!1;const H=p(P,K,Y,I);s!==H&&(s=H,l(s.object)),X=m(P,K,Y,B),X&&v(P,K,Y,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(P,I,Y,K),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function f(P){return i.deleteVertexArray(P)}function p(P,I,Y,K){const B=K.wireframe===!0;let X=n[I.id];X===void 0&&(X={},n[I.id]=X);const H=P.isInstancedMesh===!0?P.id:0;let Q=X[H];Q===void 0&&(Q={},X[H]=Q);let k=Q[Y.id];k===void 0&&(k={},Q[Y.id]=k);let ee=k[B];return ee===void 0&&(ee=u(c()),k[B]=ee),ee}function u(P){const I=[],Y=[],K=[];for(let B=0;B<t;B++)I[B]=0,Y[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:K,object:P,attributes:{},index:null}}function m(P,I,Y,K){const B=s.attributes,X=I.attributes;let H=0;const Q=Y.getAttributes();for(const k in Q)if(Q[k].location>=0){const ne=B[k];let re=X[k];if(re===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==K}function v(P,I,Y,K){const B={},X=I.attributes;let H=0;const Q=Y.getAttributes();for(const k in Q)if(Q[k].location>=0){let ne=X[k];ne===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),B[k]=re,H++}s.attributes=B,s.attributesNum=H,s.index=K}function E(){const P=s.newAttributes;for(let I=0,Y=P.length;I<Y;I++)P[I]=0}function _(P){d(P,0)}function d(P,I){const Y=s.newAttributes,K=s.enabledAttributes,B=s.attributeDivisors;Y[P]=1,K[P]===0&&(i.enableVertexAttribArray(P),K[P]=1),B[P]!==I&&(i.vertexAttribDivisor(P,I),B[P]=I)}function b(){const P=s.newAttributes,I=s.enabledAttributes;for(let Y=0,K=I.length;Y<K;Y++)I[Y]!==P[Y]&&(i.disableVertexAttribArray(Y),I[Y]=0)}function R(P,I,Y,K,B,X,H){H===!0?i.vertexAttribIPointer(P,I,Y,B,X):i.vertexAttribPointer(P,I,Y,K,B,X)}function M(P,I,Y,K){E();const B=K.attributes,X=Y.getAttributes(),H=I.defaultAttributeValues;for(const Q in X){const k=X[Q];if(k.location>=0){let ee=B[Q];if(ee===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const ne=ee.normalized,re=ee.itemSize,Ue=e.get(ee);if(Ue===void 0)continue;const et=Ue.buffer,Ge=Ue.type,J=Ue.bytesPerElement,ae=Ge===i.INT||Ge===i.UNSIGNED_INT||ee.gpuType===1013;if(ee.isInterleavedBufferAttribute){const te=ee.data,Ce=te.stride,Pe=ee.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<k.locationSize;Ae++)d(k.location+Ae,te.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)_(k.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Ae=0;Ae<k.locationSize;Ae++)R(k.location+Ae,re/k.locationSize,Ge,ne,Ce*J,(Pe+re/k.locationSize*Ae)*J,ae)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<k.locationSize;te++)d(k.location+te,ee.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<k.locationSize;te++)_(k.location+te);i.bindBuffer(i.ARRAY_BUFFER,et);for(let te=0;te<k.locationSize;te++)R(k.location+te,re/k.locationSize,Ge,ne,re*J,re/k.locationSize*te*J,ae)}}else if(H!==void 0){const ne=H[Q];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(k.location,ne);break;case 3:i.vertexAttrib3fv(k.location,ne);break;case 4:i.vertexAttrib4fv(k.location,ne);break;default:i.vertexAttrib1fv(k.location,ne)}}}}b()}function A(){y();for(const P in n){const I=n[P];for(const Y in I){const K=I[Y];for(const B in K){const X=K[B];for(const H in X)f(X[H].object),delete X[H];delete K[B]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const Y in I){const K=I[Y];for(const B in K){const X=K[B];for(const H in X)f(X[H].object),delete X[H];delete K[B]}}delete n[P.id]}function C(P){for(const I in n){const Y=n[I];for(const K in Y){const B=Y[K];if(B[P.id]===void 0)continue;const X=B[P.id];for(const H in X)f(X[H].object),delete X[H];delete B[P.id]}}}function g(P){for(const I in n){const Y=n[I],K=P.isInstancedMesh===!0?P.id:0,B=Y[K];if(B!==void 0){for(const X in B){const H=B[X];for(const Q in H)f(H[Q].object),delete H[Q];delete B[X]}delete Y[K],Object.keys(Y).length===0&&delete n[I]}}}function y(){F(),a=!0,s!==r&&(s=r,l(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:g,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:_,disableUnusedAttributes:b}}function $c(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let u=0;for(let m=0;m<f;m++)u+=l[m];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Jc(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==1023&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const g=C===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!g)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Re("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,maxSamples:A,samples:T}}function Qc(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new gn,o=new we,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||r;return r=u,n=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=f(p,u,0)},this.setState=function(p,u,m){const v=p.clippingPlanes,E=p.clipIntersection,_=p.clipShadows,d=i.get(p);if(!r||v===null||v.length===0||s&&!_)s?f(null):l();else{const b=s?0:n,R=b*4;let M=d.clippingState||null;c.value=M,M=f(v,u,R,m);for(let A=0;A!==R;++A)M[A]=t[A];d.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,u,m,v){const E=p!==null?p.length:0;let _=null;if(E!==0){if(_=c.value,v!==!0||_===null){const d=m+E*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(_===null||_.length<d)&&(_=new Float32Array(d));for(let R=0,M=m;R!==E;++R,M+=4)a.copy(p[R]).applyMatrix4(b,o),a.normal.toArray(_,M),_[M+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}const fn=4,rs=[.125,.215,.35,.446,.526,.582],xn=20,jc=256,Zn=new zs,ss=new Xe;let lr=null,cr=0,ur=0,fr=!1;const eu=new z;class as{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=eu}=s;lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ls(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lr,cr,ur),this._renderer.xr.enabled=fr,e.scissorTest=!1,Nn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Pi,depthBuffer:!1},r=os(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=os(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tu(s)),this._blurMaterial=iu(s,e,t),this._ggxMaterial=nu(s,e,t)}return r}_compileMaterial(e){const t=new qt(new en,e);this._renderer.compile(t,Zn)}_sceneToCubeUV(e,t,n,r,s){const c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(ss),p.toneMapping=0,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new ii,new Us({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,_=E.material;let d=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,d=!0):(_.color.copy(ss),d=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[R],s.y,s.z)):M===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[R]));const A=this._cubeSize;Nn(r,M*A,R>2?A:0,A,A),p.setRenderTarget(r),d&&p.render(E,c),p.render(e,c)}p.toneMapping=m,p.autoClear=u,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ls());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Nn(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Zn)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-f*f),u=0+l*1.25,m=p*u,{_lodMax:v}=this,E=this._sizeLods[n],_=3*E*(n>v-fn?n-v+fn:0),d=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-t,Nn(s,_,d,3*E,2*E),r.setRenderTarget(s),r.render(o,Zn),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,Nn(e,_,d,3*E,2*E),r.setRenderTarget(e),r.render(o,Zn)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[r];p.material=l;const u=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xn-1),E=s/v,_=isFinite(s)?1+Math.floor(f*E):xn;_>xn&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${xn}`);const d=[];let b=0;for(let C=0;C<xn;++C){const g=C/E,y=Math.exp(-g*g/2);d.push(y),C===0?b+=y:C<_&&(b+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/b;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:R}=this;u.dTheta.value=v,u.mipInt.value=R-n;const M=this._sizeLods[r],A=3*M*(r>R-fn?r-R+fn:0),T=4*(this._cubeSize-M);Nn(t,A,T,3*M,2*M),c.setRenderTarget(t),c.render(p,Zn)}}function tu(i){const e=[],t=[],n=[];let r=i;const s=i-fn+1+rs.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-fn?c=rs[a-i+fn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,p=1+l,u=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,v=6,E=3,_=2,d=1,b=new Float32Array(E*v*m),R=new Float32Array(_*v*m),M=new Float32Array(d*v*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,g=T>2?0:-1,y=[C,g,0,C+2/3,g,0,C+2/3,g+1,0,C,g,0,C+2/3,g+1,0,C,g+1,0];b.set(y,E*v*T),R.set(u,_*v*T);const F=[T,T,T,T,T,T];M.set(F,d*v*T)}const A=new en;A.setAttribute("position",new Xt(b,E)),A.setAttribute("uv",new Xt(R,_)),A.setAttribute("faceIndex",new Xt(M,d)),n.push(new qt(A,null)),r>fn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function os(i,e,t){const n=new Wt(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nn(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function nu(i,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jc,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ii(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function iu(i,e,t){const n=new Float32Array(xn),r=new z(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ls(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cs(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ii(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ks extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ns(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ii(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:Vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new qt(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function ru(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===303||m===304)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const E=new ks(v.height);return E.fromEquirectangularTexture(i,u),e.set(u,E),u.addEventListener("dispose",l),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,v=m===303||m===304,E=m===301||m===302;if(v||E){let _=t.get(u);const d=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new as(i)),_=v?n.fromEquirectangular(u,_):n.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const b=u.image;return v&&b&&b.height>0||E&&b&&c(b)?(n===null&&(n=new as(i)),_=v?n.fromEquirectangular(u):n.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",f),_.texture):null}}}return u}function o(u,m){return m===303?u.mapping=301:m===304&&(u.mapping=302),u}function c(u){let m=0;const v=6;for(let E=0;E<v;E++)u[E]!==void 0&&m++;return m===v}function l(u){const m=u.target;m.removeEventListener("dispose",l);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function su(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Bn("WebGLRenderer: "+n+" extension not supported."),r}}}function au(i,e,t,n){const r={},s=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(p){const u=p.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function l(p){const u=[],m=p.index,v=p.attributes.position;let E=0;if(v===void 0)return;if(m!==null){const b=m.array;E=m.version;for(let R=0,M=b.length;R<M;R+=3){const A=b[R+0],T=b[R+1],C=b[R+2];u.push(A,T,T,C,C,A)}}else{const b=v.array;E=v.version;for(let R=0,M=b.length/3-1;R<M;R+=3){const A=R+0,T=R+1,C=R+2;u.push(A,T,T,C,C,A)}}const _=new(v.count>=65535?Fs:Ls)(u,1);_.version=E;const d=s.get(p);d&&e.remove(d),s.set(p,_)}function f(p){const u=s.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:f}}function ou(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,u){i.drawElements(n,u,s,p*a),t.update(u,n,1)}function l(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,p*a,m),t.update(u,n,m))}function f(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,p,0,m);let E=0;for(let _=0;_<m;_++)E+=u[_];t.update(E,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function lu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function cu(i,e,t){const n=new WeakMap,r=new rt;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),v===!0&&(R=2),E===!0&&(R=3);let M=o.attributes.position.count*R,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*A*4*p),C=new ws(T,M,A,p);C.type=1015,C.needsUpdate=!0;const g=R*4;for(let F=0;F<p;F++){const P=_[F],I=d[F],Y=b[F],K=M*A*4*F;for(let B=0;B<P.count;B++){const X=B*g;m===!0&&(r.fromBufferAttribute(P,B),T[K+X+0]=r.x,T[K+X+1]=r.y,T[K+X+2]=r.z,T[K+X+3]=0),v===!0&&(r.fromBufferAttribute(I,B),T[K+X+4]=r.x,T[K+X+5]=r.y,T[K+X+6]=r.z,T[K+X+7]=0),E===!0&&(r.fromBufferAttribute(Y,B),T[K+X+8]=r.x,T[K+X+9]=r.y,T[K+X+10]=r.z,T[K+X+11]=Y.itemSize===4?r.w:1)}}u={count:p,texture:C,size:new ke(M,A)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let E=0;E<l.length;E++)m+=l[E];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function uu(i,e,t,n,r){let s=new WeakMap;function a(l){const f=r.render.frame,p=l.geometry,u=e.get(l,p);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const fu={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function du(i,e,t,n,r,s){const a=new Wt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new zn(e,t):void 0}),o=new Wt(e,t,{type:1016,depthBuffer:!1,stencilBuffer:!1}),c=new en;c.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new jt([0,2,0,0,2,0],2));const l=new to({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new qt(c,l),p=new zs(-1,1,1,-1,0,1);let u=null,m=null,v=!1,E,_=null,d=[],b=!1;this.setSize=function(R,M){a.setSize(R,M),o.setSize(R,M);for(let A=0;A<d.length;A++){const T=d[A];T.setSize&&T.setSize(R,M)}},this.setEffects=function(R){d=R,b=d.length>0&&d[0].isRenderPass===!0;const M=a.width,A=a.height;for(let T=0;T<d.length;T++){const C=d[T];C.setSize&&C.setSize(M,A)}},this.begin=function(R,M){if(v||R.toneMapping===0&&d.length===0)return!1;if(_=M,M!==null){const A=M.width,T=M.height;(a.width!==A||a.height!==T)&&this.setSize(A,T)}return b===!1&&R.setRenderTarget(a),E=R.toneMapping,R.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(R,M){R.toneMapping=E,v=!0;let A=a,T=o;for(let C=0;C<d.length;C++){const g=d[C];if(g.enabled!==!1&&(g.render(R,T,A,M),g.needsSwap!==!1)){const y=A;A=T,T=y}}if(u!==R.outputColorSpace||m!==R.toneMapping){u=R.outputColorSpace,m=R.toneMapping,l.defines={},Be.getTransfer(u)===Ye&&(l.defines.SRGB_TRANSFER="");const C=fu[m];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(_),R.render(f,p),_=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Ws=new St,pr=new zn(1,1),Xs=new ws,qs=new Da,Ys=new Ns,us=[],fs=[],ds=new Float32Array(16),hs=new Float32Array(9),ps=new Float32Array(4);function Wn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=us[r];if(s===void 0&&(s=new Float32Array(r),us[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ni(i,e){let t=fs[e];t===void 0&&(t=new Int32Array(e),fs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function mu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function _u(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function gu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;ps.set(n),i.uniformMatrix2fv(this.addr,!1,ps),pt(t,n)}}function xu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;hs.set(n),i.uniformMatrix3fv(this.addr,!1,hs),pt(t,n)}}function vu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;ds.set(n),i.uniformMatrix4fv(this.addr,!1,ds),pt(t,n)}}function Mu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Su(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Eu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Tu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function yu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Au(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function bu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Ru(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Cu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(pr.compareFunction=t.isReversedDepthBuffer()?518:515,s=pr):s=Ws,t.setTexture2D(e||s,r)}function wu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||qs,r)}function Pu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ys,r)}function Du(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xs,r)}function Lu(i){switch(i){case 5126:return hu;case 35664:return pu;case 35665:return mu;case 35666:return _u;case 35674:return gu;case 35675:return xu;case 35676:return vu;case 5124:case 35670:return Mu;case 35667:case 35671:return Su;case 35668:case 35672:return Eu;case 35669:case 35673:return Tu;case 5125:return yu;case 36294:return Au;case 36295:return bu;case 36296:return Ru;case 35678:case 36198:case 36298:case 36306:case 35682:return Cu;case 35679:case 36299:case 36307:return wu;case 35680:case 36300:case 36308:case 36293:return Pu;case 36289:case 36303:case 36311:case 36292:return Du}}function Fu(i,e){i.uniform1fv(this.addr,e)}function Uu(i,e){const t=Wn(e,this.size,2);i.uniform2fv(this.addr,t)}function Iu(i,e){const t=Wn(e,this.size,3);i.uniform3fv(this.addr,t)}function Nu(i,e){const t=Wn(e,this.size,4);i.uniform4fv(this.addr,t)}function Ou(i,e){const t=Wn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bu(i,e){const t=Wn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gu(i,e){const t=Wn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zu(i,e){i.uniform1iv(this.addr,e)}function Vu(i,e){i.uniform2iv(this.addr,e)}function Hu(i,e){i.uniform3iv(this.addr,e)}function ku(i,e){i.uniform4iv(this.addr,e)}function Wu(i,e){i.uniform1uiv(this.addr,e)}function Xu(i,e){i.uniform2uiv(this.addr,e)}function qu(i,e){i.uniform3uiv(this.addr,e)}function Yu(i,e){i.uniform4uiv(this.addr,e)}function Ku(i,e,t){const n=this.cache,r=e.length,s=Ni(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=pr:a=Ws;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Zu(i,e,t){const n=this.cache,r=e.length,s=Ni(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||qs,s[a])}function $u(i,e,t){const n=this.cache,r=e.length,s=Ni(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ys,s[a])}function Ju(i,e,t){const n=this.cache,r=e.length,s=Ni(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Xs,s[a])}function Qu(i){switch(i){case 5126:return Fu;case 35664:return Uu;case 35665:return Iu;case 35666:return Nu;case 35674:return Ou;case 35675:return Bu;case 35676:return Gu;case 5124:case 35670:return zu;case 35667:case 35671:return Vu;case 35668:case 35672:return Hu;case 35669:case 35673:return ku;case 5125:return Wu;case 36294:return Xu;case 36295:return qu;case 36296:return Yu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ku;case 35679:case 36299:case 36307:return Zu;case 35680:case 36300:case 36308:case 36293:return $u;case 36289:case 36303:case 36311:case 36292:return Ju}}class ju{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lu(t.type)}}class ef{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qu(t.type)}}class tf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function ms(i,e){i.seq.push(e),i.map[e.id]=e}function nf(i,e,t){const n=i.name,r=n.length;for(dr.lastIndex=0;;){const s=dr.exec(n),a=dr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ms(t,l===void 0?new ju(o,i,e):new ef(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new tf(o),ms(t,p)),t=p}}}class wi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);nf(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function _s(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rf=37297;let sf=0;function af(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gs=new we;function of(i){Be._getMatrix(gs,Be.workingColorSpace,i);const e=`mat3( ${gs.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(i)){case Di:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+af(i.getShaderSource(e),o)}else return s}function lf(i,e){const t=of(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cf={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function uf(i,e){const t=cf[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ci=new z;function ff(){Be.getLuminanceCoefficients(Ci);const i=Ci.x.toFixed(4),e=Ci.y.toFixed(4),t=Ci.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function df(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jn).join(`
`)}function hf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Jn(i){return i!==""}function vs(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ms(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function mr(i){return i.replace(mf,gf)}const _f=new Map;function gf(i,e){let t=Fe[e];if(t===void 0){const n=_f.get(e);if(n!==void 0)t=Fe[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mr(t)}const xf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ss(i){return i.replace(xf,vf)}function vf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Es(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Mf={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Sf(i){return Mf[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ef={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Tf(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ef[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const yf={302:"ENVMAP_MODE_REFRACTION"};function Af(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yf[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bf={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Rf(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bf[i.combine]||"ENVMAP_BLENDING_NONE"}function Cf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wf(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Sf(t),l=Tf(t),f=Af(t),p=Rf(t),u=Cf(t),m=df(t),v=hf(s),E=r.createProgram();let _,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Jn).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Jn).join(`
`),d.length>0&&(d+=`
`)):(_=[Es(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),d=[Es(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Fe.tonemapping_pars_fragment:"",t.toneMapping!==0?uf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,lf("linearToOutputTexel",t.outputColorSpace),ff(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jn).join(`
`)),a=mr(a),a=vs(a,t),a=Ms(a,t),o=mr(o),o=vs(o,t),o=Ms(o,t),a=Ss(a),o=Ss(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===Ur?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ur?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=b+_+a,M=b+d+o,A=_s(r,r.VERTEX_SHADER,R),T=_s(r,r.FRAGMENT_SHADER,M);r.attachShader(E,A),r.attachShader(E,T),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(P){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(E)||"",Y=r.getShaderInfoLog(A)||"",K=r.getShaderInfoLog(T)||"",B=I.trim(),X=Y.trim(),H=K.trim();let Q=!0,k=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,A,T);else{const ee=xs(r,A,"vertex"),ne=xs(r,T,"fragment");He("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+ee+`
`+ne)}else B!==""?Re("WebGLProgram: Program Info Log:",B):(X===""||H==="")&&(k=!1);k&&(P.diagnostics={runnable:Q,programLog:B,vertexShader:{log:X,prefix:_},fragmentShader:{log:H,prefix:d}})}r.deleteShader(A),r.deleteShader(T),g=new wi(r,E),y=pf(r,E)}let g;this.getUniforms=function(){return g===void 0&&C(this),g};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(E,rf)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sf++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=T,this}let Pf=0;class Df{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lf(e),t.set(e,n)),n}}class Lf{constructor(e){this.id=Pf++,this.code=e,this.usedTimes=0}}function Ff(i){return i===1030||i===37490||i===36285}function Uf(i,e,t,n,r,s){const a=new Ps,o=new Df,c=new Set,l=[],f=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return c.add(g),g===0?"uv":`uv${g}`}function E(g,y,F,P,I,Y){const K=P.fog,B=I.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Q=e.get(g.envMap||X,H),k=Q&&Q.mapping===306?Q.image.height:null,ee=m[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&Re("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=ne!==void 0?ne.length:0;let Ue=0;B.morphAttributes.position!==void 0&&(Ue=1),B.morphAttributes.normal!==void 0&&(Ue=2),B.morphAttributes.color!==void 0&&(Ue=3);let et,Ge,J,ae;if(ee){const xe=kt[ee];et=xe.vertexShader,Ge=xe.fragmentShader}else{et=g.vertexShader,Ge=g.fragmentShader;const xe=o.getVertexShaderStage(g),nt=o.getFragmentShaderStage(g);o.update(g,xe,nt),J=xe.id,ae=nt.id}const te=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Pe=I.isInstancedMesh===!0,Ae=I.isBatchedMesh===!0,st=!!g.map,Ne=!!g.matcap,Ze=!!Q,We=!!g.aoMap,ze=!!g.lightMap,lt=!!g.bumpMap&&g.wireframe===!1,dt=!!g.normalMap,mt=!!g.displacementMap,gt=!!g.emissiveMap,tt=!!g.metalnessMap,ct=!!g.roughnessMap,D=g.anisotropy>0,yt=g.clearcoat>0,qe=g.dispersion>0,S=g.iridescence>0,h=g.sheen>0,U=g.transmission>0,G=D&&!!g.anisotropyMap,W=yt&&!!g.clearcoatMap,ie=yt&&!!g.clearcoatNormalMap,oe=yt&&!!g.clearcoatRoughnessMap,q=S&&!!g.iridescenceMap,$=S&&!!g.iridescenceThicknessMap,le=h&&!!g.sheenColorMap,Se=h&&!!g.sheenRoughnessMap,fe=!!g.specularMap,ce=!!g.specularColorMap,ye=!!g.specularIntensityMap,be=U&&!!g.transmissionMap,De=U&&!!g.thicknessMap,w=!!g.gradientMap,se=!!g.alphaMap,Z=g.alphaTest>0,ue=!!g.alphaHash,me=!!g.extensions;let j=0;g.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(j=i.toneMapping);const Me={shaderID:ee,shaderType:g.type,shaderName:g.name,vertexShader:et,fragmentShader:Ge,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:ae,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&I._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,instancingMorph:Pe&&I.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:st,matcap:Ne,envMap:Ze,envMapMode:Ze&&Q.mapping,envMapCubeUVHeight:k,aoMap:We,lightMap:ze,bumpMap:lt,normalMap:dt,displacementMap:mt,emissiveMap:gt,normalMapObjectSpace:dt&&g.normalMapType===1,normalMapTangentSpace:dt&&g.normalMapType===0,packedNormalMap:dt&&g.normalMapType===0&&Ff(g.normalMap.format),metalnessMap:tt,roughnessMap:ct,anisotropy:D,anisotropyMap:G,clearcoat:yt,clearcoatMap:W,clearcoatNormalMap:ie,clearcoatRoughnessMap:oe,dispersion:qe,iridescence:S,iridescenceMap:q,iridescenceThicknessMap:$,sheen:h,sheenColorMap:le,sheenRoughnessMap:Se,specularMap:fe,specularColorMap:ce,specularIntensityMap:ye,transmission:U,transmissionMap:be,thicknessMap:De,gradientMap:w,opaque:g.transparent===!1&&g.blending===1&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:Z,alphaHash:ue,combine:g.combine,mapUv:st&&v(g.map.channel),aoMapUv:We&&v(g.aoMap.channel),lightMapUv:ze&&v(g.lightMap.channel),bumpMapUv:lt&&v(g.bumpMap.channel),normalMapUv:dt&&v(g.normalMap.channel),displacementMapUv:mt&&v(g.displacementMap.channel),emissiveMapUv:gt&&v(g.emissiveMap.channel),metalnessMapUv:tt&&v(g.metalnessMap.channel),roughnessMapUv:ct&&v(g.roughnessMap.channel),anisotropyMapUv:G&&v(g.anisotropyMap.channel),clearcoatMapUv:W&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:$&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(g.sheenRoughnessMap.channel),specularMapUv:fe&&v(g.specularMap.channel),specularColorMapUv:ce&&v(g.specularColorMap.channel),specularIntensityMapUv:ye&&v(g.specularIntensityMap.channel),transmissionMapUv:be&&v(g.transmissionMap.channel),thicknessMapUv:De&&v(g.thicknessMap.channel),alphaMapUv:se&&v(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||D),vertexNormals:!!B.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(st||se),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||B.attributes.normal===void 0&&dt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ce,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:st&&g.map.isVideoTexture===!0&&Be.getTransfer(g.map.colorSpace)===Ye,decodeVideoTextureEmissive:gt&&g.emissiveMap.isVideoTexture===!0&&Be.getTransfer(g.emissiveMap.colorSpace)===Ye,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:me&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&g.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function _(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const F in g.defines)y.push(F),y.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(d(y,g),b(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function d(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function b(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function R(g){const y=m[g.type];let F;if(y){const P=kt[y];F=Qa.clone(P.uniforms)}else F=g.uniforms;return F}function M(g,y){let F=f.get(y);return F!==void 0?++F.usedTimes:(F=new wf(i,y,g,r),l.push(F),f.set(y,F)),F}function A(g){if(--g.usedTimes===0){const y=l.indexOf(g);l[y]=l[l.length-1],l.pop(),f.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:R,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:C}}function If(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ts(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ys(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,v,E,_,d){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:m,material:v,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:_,group:d},i[e]=b):(b.id=u.id,b.object=u,b.geometry=m,b.material=v,b.materialVariant=a(u),b.groupOrder=E,b.renderOrder=u.renderOrder,b.z=_,b.group=d),e++,b}function c(u,m,v,E,_,d){const b=o(u,m,v,E,_,d);v.transmission>0?n.push(b):v.transparent===!0?r.push(b):t.push(b)}function l(u,m,v,E,_,d){const b=o(u,m,v,E,_,d);v.transmission>0?n.unshift(b):v.transparent===!0?r.unshift(b):t.unshift(b)}function f(u,m,v){t.length>1&&t.sort(u||Nf),n.length>1&&n.sort(m||Ts),r.length>1&&r.sort(m||Ts),v&&(t.reverse(),n.reverse(),r.reverse())}function p(){for(let u=e,m=i.length;u<m;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:p,sort:f}}function Of(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ys,i.set(n,[a])):r>=s.length?(a=new ys,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Xe};break;case"SpotLight":t={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Gf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zf=0;function Vf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hf(i){const e=new Bf,t=Gf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,s=new ft,a=new ft;function o(l){let f=0,p=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,E=0,_=0,d=0,b=0,R=0,M=0,A=0,T=0,C=0;l.sort(Vf);for(let y=0,F=l.length;y<F;y++){const P=l[y],I=P.color,Y=P.intensity,K=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===1030?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=I.r*Y,p+=I.g*Y,u+=I.b*Y;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],Y);C++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,Q=t.get(P);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=X,m++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(I).multiplyScalar(Y),X.distance=K,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[E]=X;const H=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,H.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[E]=H.matrix,P.castShadow){const Q=t.get(P);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.spotShadow[E]=Q,n.spotShadowMap[E]=B,M++}E++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(I).multiplyScalar(Y),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=X,_++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const H=P.shadow,Q=t.get(P);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,n.pointShadow[v]=Q,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=P.shadow.matrix,R++}n.point[v]=X,v++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Y),X.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[d]=X,d++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=u;const g=n.hash;(g.directionalLength!==m||g.pointLength!==v||g.spotLength!==E||g.rectAreaLength!==_||g.hemiLength!==d||g.numDirectionalShadows!==b||g.numPointShadows!==R||g.numSpotShadows!==M||g.numSpotMaps!==A||g.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=E,n.rectArea.length=_,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,g.directionalLength=m,g.pointLength=v,g.spotLength=E,g.rectAreaLength=_,g.hemiLength=d,g.numDirectionalShadows=b,g.numPointShadows=R,g.numSpotShadows=M,g.numSpotMaps=A,g.numLightProbes=C,n.version=zf++)}function c(l,f){let p=0,u=0,m=0,v=0,E=0;const _=f.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const R=l[d];if(R.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),p++}else if(R.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),m++}else if(R.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(_),a.identity(),s.copy(R.matrixWorld),s.premultiply(_),a.extractRotation(s),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(_),u++}else if(R.isHemisphereLight){const M=n.hemi[E];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(_),E++}}}return{setup:o,setupView:c,state:n}}function As(i){const e=new Hf(i),t=[],n=[],r=[];function s(u){p.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function f(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function kf(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new As(i),e.set(r,[o])):s>=a.length?(o=new As(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Wf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qf=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Yf=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],bs=new ft,$n=new z,hr=new z;function Kf(i,e,t){let n=new Is;const r=new ke,s=new ke,a=new rt,o=new no,c=new io,l={},f=t.maxTextureSize,p={0:1,1:0,2:2},u=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Wf,fragmentShader:Xf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new en;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new qt(v,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(T,C,g){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===2&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const y=i.getRenderTarget(),F=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(0),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const Y=d!==this.type;Y&&C.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(B=>B.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,B=T.length;K<B;K++){const X=T[K],H=X.shadow;if(H===void 0){Re("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Q=H.getFrameExtents();r.multiply(Q),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Q.x),r.x=s.x*Q.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Q.y),r.y=s.y*Q.y,H.mapSize.y=s.y));const k=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=k,H.map===null||Y===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===3){if(X.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wt(r.x,r.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new zn(r.x,r.y,1015),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=1026,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=1003,H.map.depthTexture.magFilter=1003}else X.isPointLight?(H.map=new ks(r.x),H.map.depthTexture=new $a(r.x,1014)):(H.map=new Wt(r.x,r.y),H.map.depthTexture=new zn(r.x,r.y,1014)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=1026,this.type===1?(H.map.depthTexture.compareFunction=k?518:515,H.map.depthTexture.minFilter=1006,H.map.depthTexture.magFilter=1006):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=1003,H.map.depthTexture.magFilter=1003);H.camera.updateProjectionMatrix()}const ee=H.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<ee;ne++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(H.map),i.clear());const re=H.getViewport(ne);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),I.viewport(a)}if(X.isPointLight){const re=H.camera,Ue=H.matrix,et=X.distance||re.far;et!==re.far&&(re.far=et,re.updateProjectionMatrix()),$n.setFromMatrixPosition(X.matrixWorld),re.position.copy($n),hr.copy(re.position),hr.add(qf[ne]),re.up.copy(Yf[ne]),re.lookAt(hr),re.updateMatrixWorld(),Ue.makeTranslation(-$n.x,-$n.y,-$n.z),bs.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),H._frustum.setFromProjectionMatrix(bs,re.coordinateSystem,re.reversedDepth)}else H.updateMatrices(X);n=H.getFrustum(),M(C,g,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===3&&b(H,g),H.needsUpdate=!1}d=this.type,_.needsUpdate=!1,i.setRenderTarget(y,F,P)};function b(T,C){const g=e.update(E);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wt(r.x,r.y,{format:1030,type:1016})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,g,u,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,g,m,E,null)}function R(T,C,g,y){let F=null;const P=g.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)F=P;else if(F=g.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=F.uuid,Y=C.uuid;let K=l[I];K===void 0&&(K={},l[I]=K);let B=K[Y];B===void 0&&(B=F.clone(),K[Y]=B,C.addEventListener("dispose",A)),F=B}if(F.visible=C.visible,F.wireframe=C.wireframe,y===3?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:p[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,g.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const I=i.properties.get(F);I.light=g}return F}function M(T,C,g,y,F){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),K=T.material;if(Array.isArray(K)){const B=Y.groups;for(let X=0,H=B.length;X<H;X++){const Q=B[X],k=K[Q.materialIndex];if(k&&k.visible){const ee=R(T,k,y,F);T.onBeforeShadow(i,T,C,g,Y,ee,Q),i.renderBufferDirect(g,null,Y,ee,T,Q),T.onAfterShadow(i,T,C,g,Y,ee,Q)}}}else if(K.visible){const B=R(T,K,y,F);T.onBeforeShadow(i,T,C,g,Y,B,null),i.renderBufferDirect(g,null,Y,B,T,null),T.onAfterShadow(i,T,C,g,Y,B,null)}}const I=T.children;for(let Y=0,K=I.length;Y<K;Y++)M(I[Y],C,g,y,F)}function A(T){T.target.removeEventListener("dispose",A);for(const g in l){const y=l[g],F=T.target.uuid;F in y&&(y[F].dispose(),delete y[F])}}}function Zf(i,e){function t(){let w=!1;const se=new rt;let Z=null;const ue=new rt(0,0,0,0);return{setMask:function(me){Z!==me&&!w&&(i.colorMask(me,me,me,me),Z=me)},setLocked:function(me){w=me},setClear:function(me,j,Me,xe,nt){nt===!0&&(me*=xe,j*=xe,Me*=xe),se.set(me,j,Me,xe),ue.equals(se)===!1&&(i.clearColor(me,j,Me,xe),ue.copy(se))},reset:function(){w=!1,Z=null,ue.set(-1,0,0,0)}}}function n(){let w=!1,se=!1,Z=null,ue=null,me=null;return{setReversed:function(j){if(se!==j){const Me=e.get("EXT_clip_control");j?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),se=j;const xe=me;me=null,this.setClear(xe)}},getReversed:function(){return se},setTest:function(j){j?te(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(j){Z!==j&&!w&&(i.depthMask(j),Z=j)},setFunc:function(j){if(se&&(j=la[j]),ue!==j){switch(j){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=j}},setLocked:function(j){w=j},setClear:function(j){me!==j&&(me=j,se&&(j=1-j),i.clearDepth(j))},reset:function(){w=!1,Z=null,ue=null,me=null,se=!1}}}function r(){let w=!1,se=null,Z=null,ue=null,me=null,j=null,Me=null,xe=null,nt=null;return{setTest:function(Qe){w||(Qe?te(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!w&&(i.stencilMask(Qe),se=Qe)},setFunc:function(Qe,Bt,Gt){(Z!==Qe||ue!==Bt||me!==Gt)&&(i.stencilFunc(Qe,Bt,Gt),Z=Qe,ue=Bt,me=Gt)},setOp:function(Qe,Bt,Gt){(j!==Qe||Me!==Bt||xe!==Gt)&&(i.stencilOp(Qe,Bt,Gt),j=Qe,Me=Bt,xe=Gt)},setLocked:function(Qe){w=Qe},setClear:function(Qe){nt!==Qe&&(i.clearStencil(Qe),nt=Qe)},reset:function(){w=!1,se=null,Z=null,ue=null,me=null,j=null,Me=null,xe=null,nt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let f={},p={},u={},m=new WeakMap,v=[],E=null,_=!1,d=null,b=null,R=null,M=null,A=null,T=null,C=null,g=new Xe(0,0,0),y=0,F=!1,P=null,I=null,Y=null,K=null,B=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Q>=2);let ee=null,ne={};const re=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),et=new rt().fromArray(re),Ge=new rt().fromArray(Ue);function J(w,se,Z,ue){const me=new Uint8Array(4),j=i.createTexture();i.bindTexture(w,j),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<Z;Me++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(se+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return j}const ae={};ae[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(3),lt(!1),dt(1),te(i.CULL_FACE),We(0);function te(w){f[w]!==!0&&(i.enable(w),f[w]=!0)}function Ce(w){f[w]!==!1&&(i.disable(w),f[w]=!1)}function Pe(w,se){return u[w]!==se?(i.bindFramebuffer(w,se),u[w]=se,w===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),w===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(w,se){let Z=v,ue=!1;if(w){Z=m.get(se),Z===void 0&&(Z=[],m.set(se,Z));const me=w.textures;if(Z.length!==me.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Me=me.length;j<Me;j++)Z[j]=i.COLOR_ATTACHMENT0+j;Z.length=me.length,ue=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ue=!0);ue&&i.drawBuffers(Z)}function st(w){return E!==w?(i.useProgram(w),E=w,!0):!1}const Ne={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Ne[103]=i.MIN,Ne[104]=i.MAX;const Ze={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function We(w,se,Z,ue,me,j,Me,xe,nt,Qe){if(w===0){_===!0&&(Ce(i.BLEND),_=!1);return}if(_===!1&&(te(i.BLEND),_=!0),w!==5){if(w!==d||Qe!==F){if((b!==100||A!==100)&&(i.blendEquation(i.FUNC_ADD),b=100,A=100),Qe)switch(w){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",w);break}else switch(w){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",w);break}R=null,M=null,T=null,C=null,g.set(0,0,0),y=0,d=w,F=Qe}return}me=me||se,j=j||Z,Me=Me||ue,(se!==b||me!==A)&&(i.blendEquationSeparate(Ne[se],Ne[me]),b=se,A=me),(Z!==R||ue!==M||j!==T||Me!==C)&&(i.blendFuncSeparate(Ze[Z],Ze[ue],Ze[j],Ze[Me]),R=Z,M=ue,T=j,C=Me),(xe.equals(g)===!1||nt!==y)&&(i.blendColor(xe.r,xe.g,xe.b,nt),g.copy(xe),y=nt),d=w,F=!1}function ze(w,se){w.side===2?Ce(i.CULL_FACE):te(i.CULL_FACE);let Z=w.side===1;se&&(Z=!Z),lt(Z),w.blending===1&&w.transparent===!1?We(0):We(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const ue=w.stencilWrite;o.setTest(ue),ue&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),gt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(w){P!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),P=w)}function dt(w){w!==0?(te(i.CULL_FACE),w!==I&&(w===1?i.cullFace(i.BACK):w===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),I=w}function mt(w){w!==Y&&(H&&i.lineWidth(w),Y=w)}function gt(w,se,Z){w?(te(i.POLYGON_OFFSET_FILL),(K!==se||B!==Z)&&(K=se,B=Z,a.getReversed()&&(se=-se),i.polygonOffset(se,Z))):Ce(i.POLYGON_OFFSET_FILL)}function tt(w){w?te(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function ct(w){w===void 0&&(w=i.TEXTURE0+X-1),ee!==w&&(i.activeTexture(w),ee=w)}function D(w,se,Z){Z===void 0&&(ee===null?Z=i.TEXTURE0+X-1:Z=ee);let ue=ne[Z];ue===void 0&&(ue={type:void 0,texture:void 0},ne[Z]=ue),(ue.type!==w||ue.texture!==se)&&(ee!==Z&&(i.activeTexture(Z),ee=Z),i.bindTexture(w,se||ae[w]),ue.type=w,ue.texture=se)}function yt(){const w=ne[ee];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function qe(){try{i.compressedTexImage2D(...arguments)}catch(w){He("WebGLState:",w)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(w){He("WebGLState:",w)}}function h(){try{i.texSubImage2D(...arguments)}catch(w){He("WebGLState:",w)}}function U(){try{i.texSubImage3D(...arguments)}catch(w){He("WebGLState:",w)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(w){He("WebGLState:",w)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(w){He("WebGLState:",w)}}function ie(){try{i.texStorage2D(...arguments)}catch(w){He("WebGLState:",w)}}function oe(){try{i.texStorage3D(...arguments)}catch(w){He("WebGLState:",w)}}function q(){try{i.texImage2D(...arguments)}catch(w){He("WebGLState:",w)}}function $(){try{i.texImage3D(...arguments)}catch(w){He("WebGLState:",w)}}function le(w){return p[w]!==void 0?p[w]:i.getParameter(w)}function Se(w,se){p[w]!==se&&(i.pixelStorei(w,se),p[w]=se)}function fe(w){et.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),et.copy(w))}function ce(w){Ge.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),Ge.copy(w))}function ye(w,se){let Z=l.get(se);Z===void 0&&(Z=new WeakMap,l.set(se,Z));let ue=Z.get(w);ue===void 0&&(ue=i.getUniformBlockIndex(se,w.name),Z.set(w,ue))}function be(w,se){const ue=l.get(se).get(w);c.get(se)!==ue&&(i.uniformBlockBinding(se,ue,w.__bindingPointIndex),c.set(se,ue))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},p={},ee=null,ne={},u={},m=new WeakMap,v=[],E=null,_=!1,d=null,b=null,R=null,M=null,A=null,T=null,C=null,g=new Xe(0,0,0),y=0,F=!1,P=null,I=null,Y=null,K=null,B=null,et.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Ce,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:st,setBlending:We,setMaterial:ze,setFlipSided:lt,setCullFace:dt,setLineWidth:mt,setPolygonOffset:gt,setScissorTest:tt,activeTexture:ct,bindTexture:D,unbindTexture:yt,compressedTexImage2D:qe,compressedTexImage3D:S,texImage2D:q,texImage3D:$,pixelStorei:Se,getParameter:le,updateUBOMapping:ye,uniformBlockBinding:be,texStorage2D:ie,texStorage3D:oe,texSubImage2D:h,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:fe,viewport:ce,reset:De}}function $f(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,f=new WeakMap,p=new Set;let u;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,h){return v?new OffscreenCanvas(S,h):ei("canvas")}function _(S,h,U){let G=1;const W=qe(S);if((W.width>U||W.height>U)&&(G=U/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const ie=Math.floor(G*W.width),oe=Math.floor(G*W.height);u===void 0&&(u=E(ie,oe));const q=h?E(ie,oe):u;return q.width=ie,q.height=oe,q.getContext("2d").drawImage(S,0,0,ie,oe),Re("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ie+"x"+oe+")."),q}else return"data"in S&&Re("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),S;return S}function d(S){return S.generateMipmaps}function b(S){i.generateMipmap(S)}function R(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(S,h,U,G,W,ie=!1){if(S!==null){if(i[S]!==void 0)return i[S];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let oe;G&&(oe=e.get("EXT_texture_norm16"),oe||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=h;if(h===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8),U===i.UNSIGNED_SHORT&&oe&&(q=oe.R16_EXT),U===i.SHORT&&oe&&(q=oe.R16_SNORM_EXT)),h===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),h===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8),U===i.UNSIGNED_SHORT&&oe&&(q=oe.RG16_EXT),U===i.SHORT&&oe&&(q=oe.RG16_SNORM_EXT)),h===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),h===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),h===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),h===i.RGB&&(U===i.UNSIGNED_SHORT&&oe&&(q=oe.RGB16_EXT),U===i.SHORT&&oe&&(q=oe.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),h===i.RGBA){const $=ie?Di:Be.getTransfer(W);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=$===Ye?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&oe&&(q=oe.RGBA16_EXT),U===i.SHORT&&oe&&(q=oe.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(S,h){let U;return S?h===null||h===1014||h===1020?U=i.DEPTH24_STENCIL8:h===1015?U=i.DEPTH32F_STENCIL8:h===1012&&(U=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===1014||h===1020?U=i.DEPTH_COMPONENT24:h===1015?U=i.DEPTH_COMPONENT32F:h===1012&&(U=i.DEPTH_COMPONENT16),U}function T(S,h){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==1003&&S.minFilter!==1006?Math.log2(Math.max(h.width,h.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?h.mipmaps.length:1}function C(S){const h=S.target;h.removeEventListener("dispose",C),y(h),h.isVideoTexture&&f.delete(h),h.isHTMLTexture&&p.delete(h)}function g(S){const h=S.target;h.removeEventListener("dispose",g),P(h)}function y(S){const h=n.get(S);if(h.__webglInit===void 0)return;const U=S.source,G=m.get(U);if(G){const W=G[h.__cacheKey];W.usedTimes--,W.usedTimes===0&&F(S),Object.keys(G).length===0&&m.delete(U)}n.remove(S)}function F(S){const h=n.get(S);i.deleteTexture(h.__webglTexture);const U=S.source,G=m.get(U);delete G[h.__cacheKey],a.memory.textures--}function P(S){const h=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(h.__webglFramebuffer[G]))for(let W=0;W<h.__webglFramebuffer[G].length;W++)i.deleteFramebuffer(h.__webglFramebuffer[G][W]);else i.deleteFramebuffer(h.__webglFramebuffer[G]);h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer[G])}else{if(Array.isArray(h.__webglFramebuffer))for(let G=0;G<h.__webglFramebuffer.length;G++)i.deleteFramebuffer(h.__webglFramebuffer[G]);else i.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&i.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let G=0;G<h.__webglColorRenderbuffer.length;G++)h.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(h.__webglColorRenderbuffer[G]);h.__webglDepthRenderbuffer&&i.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const U=S.textures;for(let G=0,W=U.length;G<W;G++){const ie=n.get(U[G]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(U[G])}n.remove(S)}let I=0;function Y(){I=0}function K(){return I}function B(S){I=S}function X(){const S=I;return S>=r.maxTextures&&Re("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),I+=1,S}function H(S){const h=[];return h.push(S.wrapS),h.push(S.wrapT),h.push(S.wrapR||0),h.push(S.magFilter),h.push(S.minFilter),h.push(S.anisotropy),h.push(S.internalFormat),h.push(S.format),h.push(S.type),h.push(S.generateMipmaps),h.push(S.premultiplyAlpha),h.push(S.flipY),h.push(S.unpackAlignment),h.push(S.colorSpace),h.join()}function Q(S,h){const U=n.get(S);if(S.isVideoTexture&&D(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){const G=S.image;if(G===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(U,S,h);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+h)}function k(S,h){const U=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Ce(U,S,h);return}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+h)}function ee(S,h){const U=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Ce(U,S,h);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+h)}function ne(S,h){const U=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&U.__version!==S.version){Pe(U,S,h);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+h)}const re={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Ue={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},et={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Ge(S,h){if(h.type===1015&&e.has("OES_texture_float_linear")===!1&&(h.magFilter===1006||h.magFilter===1007||h.magFilter===1005||h.magFilter===1008||h.minFilter===1006||h.minFilter===1007||h.minFilter===1005||h.minFilter===1008)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,re[h.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,re[h.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,re[h.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Ue[h.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Ue[h.minFilter]),h.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,et[h.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===1003||h.minFilter!==1005&&h.minFilter!==1008||h.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||n.get(h).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,r.getMaxAnisotropy())),n.get(h).__currentAnisotropy=h.anisotropy}}}function J(S,h){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,h.addEventListener("dispose",C));const G=h.source;let W=m.get(G);W===void 0&&(W={},m.set(G,W));const ie=H(h);if(ie!==S.__cacheKey){W[ie]===void 0&&(W[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[ie].usedTimes++;const oe=W[S.__cacheKey];oe!==void 0&&(W[S.__cacheKey].usedTimes--,oe.usedTimes===0&&F(h)),S.__cacheKey=ie,S.__webglTexture=W[ie].texture}return U}function ae(S,h,U){return Math.floor(Math.floor(S/U)/h)}function te(S,h,U,G){const ie=S.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,h.width,h.height,U,G,h.data);else{ie.sort((Se,fe)=>Se.start-fe.start);let oe=0;for(let Se=1;Se<ie.length;Se++){const fe=ie[oe],ce=ie[Se],ye=fe.start+fe.count,be=ae(ce.start,h.width,4),De=ae(fe.start,h.width,4);ce.start<=ye+1&&be===De&&ae(ce.start+ce.count-1,h.width,4)===be?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++oe,ie[oe]=ce)}ie.length=oe+1;const q=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,h.width);for(let Se=0,fe=ie.length;Se<fe;Se++){const ce=ie[Se],ye=Math.floor(ce.start/4),be=Math.ceil(ce.count/4),De=ye%h.width,w=Math.floor(ye/h.width),se=be,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,w),t.texSubImage2D(i.TEXTURE_2D,0,De,w,se,Z,U,G,h.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function Ce(S,h,U){let G=i.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),h.isData3DTexture&&(G=i.TEXTURE_3D);const W=J(S,h),ie=h.source;t.bindTexture(G,S.__webglTexture,i.TEXTURE0+U);const oe=n.get(ie);if(ie.version!==oe.__version||W===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&h.image instanceof ImageBitmap)===!1){const Z=Be.getPrimaries(Be.workingColorSpace),ue=h.colorSpace===""?null:Be.getPrimaries(h.colorSpace),me=h.colorSpace===""||Z===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment);let $=_(h.image,!1,r.maxTextureSize);$=yt(h,$);const le=s.convert(h.format,h.colorSpace),Se=s.convert(h.type);let fe=M(h.internalFormat,le,Se,h.normalized,h.colorSpace,h.isVideoTexture);Ge(G,h);let ce;const ye=h.mipmaps,be=h.isVideoTexture!==!0,De=oe.__version===void 0||W===!0,w=ie.dataReady,se=T(h,$);if(h.isDepthTexture)fe=A(h.format===1027,h.type),De&&(be?t.texStorage2D(i.TEXTURE_2D,1,fe,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,fe,$.width,$.height,0,le,Se,null));else if(h.isDataTexture)if(ye.length>0){be&&De&&t.texStorage2D(i.TEXTURE_2D,se,fe,ye[0].width,ye[0].height);for(let Z=0,ue=ye.length;Z<ue;Z++)ce=ye[Z],be?w&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Se,ce.data):t.texImage2D(i.TEXTURE_2D,Z,fe,ce.width,ce.height,0,le,Se,ce.data);h.generateMipmaps=!1}else be?(De&&t.texStorage2D(i.TEXTURE_2D,se,fe,$.width,$.height),w&&te(h,$,le,Se)):t.texImage2D(i.TEXTURE_2D,0,fe,$.width,$.height,0,le,Se,$.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){be&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,fe,ye[0].width,ye[0].height,$.depth);for(let Z=0,ue=ye.length;Z<ue;Z++)if(ce=ye[Z],h.format!==1023)if(le!==null)if(be){if(w)if(h.layerUpdates.size>0){const me=is(ce.width,ce.height,h.format,h.type);for(const j of h.layerUpdates){const Me=ce.data.subarray(j*me/ce.data.BYTES_PER_ELEMENT,(j+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,j,ce.width,ce.height,1,le,Me)}h.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,$.depth,le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,fe,ce.width,ce.height,$.depth,0,ce.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?w&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,$.depth,le,Se,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,fe,ce.width,ce.height,$.depth,0,le,Se,ce.data)}else{be&&De&&t.texStorage2D(i.TEXTURE_2D,se,fe,ye[0].width,ye[0].height);for(let Z=0,ue=ye.length;Z<ue;Z++)ce=ye[Z],h.format!==1023?le!==null?be?w&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,fe,ce.width,ce.height,0,ce.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?w&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Se,ce.data):t.texImage2D(i.TEXTURE_2D,Z,fe,ce.width,ce.height,0,le,Se,ce.data)}else if(h.isDataArrayTexture)if(be){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,fe,$.width,$.height,$.depth),w)if(h.layerUpdates.size>0){const Z=is($.width,$.height,h.format,h.type);for(const ue of h.layerUpdates){const me=$.data.subarray(ue*Z/$.data.BYTES_PER_ELEMENT,(ue+1)*Z/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,$.width,$.height,1,le,Se,me)}h.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,le,Se,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,$.width,$.height,$.depth,0,le,Se,$.data);else if(h.isData3DTexture)be?(De&&t.texStorage3D(i.TEXTURE_3D,se,fe,$.width,$.height,$.depth),w&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,le,Se,$.data)):t.texImage3D(i.TEXTURE_3D,0,fe,$.width,$.height,$.depth,0,le,Se,$.data);else if(h.isFramebufferTexture){if(De)if(be)t.texStorage2D(i.TEXTURE_2D,se,fe,$.width,$.height);else{let Z=$.width,ue=$.height;for(let me=0;me<se;me++)t.texImage2D(i.TEXTURE_2D,me,fe,Z,ue,0,le,Se,null),Z>>=1,ue>>=1}}else if(h.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),$.parentNode!==Z){Z.appendChild($),p.add(h),Z.onpaint=ue=>{const me=ue.changedElements;for(const j of p)me.includes(j.image)&&(j.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{const me=i.RGBA,j=i.RGBA,Me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,j,Me,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(be&&De){const Z=qe(ye[0]);t.texStorage2D(i.TEXTURE_2D,se,fe,Z.width,Z.height)}for(let Z=0,ue=ye.length;Z<ue;Z++)ce=ye[Z],be?w&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le,Se,ce):t.texImage2D(i.TEXTURE_2D,Z,fe,le,Se,ce);h.generateMipmaps=!1}else if(be){if(De){const Z=qe($);t.texStorage2D(i.TEXTURE_2D,se,fe,Z.width,Z.height)}w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Se,$)}else t.texImage2D(i.TEXTURE_2D,0,fe,le,Se,$);d(h)&&b(G),oe.__version=ie.version,h.onUpdate&&h.onUpdate(h)}S.__version=h.version}function Pe(S,h,U){if(h.image.length!==6)return;const G=J(S,h),W=h.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+U);const ie=n.get(W);if(W.version!==ie.__version||G===!0){t.activeTexture(i.TEXTURE0+U);const oe=Be.getPrimaries(Be.workingColorSpace),q=h.colorSpace===""?null:Be.getPrimaries(h.colorSpace),$=h.colorSpace===""||oe===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const le=h.isCompressedTexture||h.image[0].isCompressedTexture,Se=h.image[0]&&h.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!le&&!Se?fe[j]=_(h.image[j],!0,r.maxCubemapSize):fe[j]=Se?h.image[j].image:h.image[j],fe[j]=yt(h,fe[j]);const ce=fe[0],ye=s.convert(h.format,h.colorSpace),be=s.convert(h.type),De=M(h.internalFormat,ye,be,h.normalized,h.colorSpace),w=h.isVideoTexture!==!0,se=ie.__version===void 0||G===!0,Z=W.dataReady;let ue=T(h,ce);Ge(i.TEXTURE_CUBE_MAP,h);let me;if(le){w&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,De,ce.width,ce.height);for(let j=0;j<6;j++){me=fe[j].mipmaps;for(let Me=0;Me<me.length;Me++){const xe=me[Me];h.format!==1023?ye!==null?w?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,De,xe.width,xe.height,0,xe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,xe.width,xe.height,ye,be,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,De,xe.width,xe.height,0,ye,be,xe.data)}}}else{if(me=h.mipmaps,w&&se){me.length>0&&ue++;const j=qe(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,De,j.width,j.height)}for(let j=0;j<6;j++)if(Se){w?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,ye,be,fe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,fe[j].width,fe[j].height,0,ye,be,fe[j].data);for(let Me=0;Me<me.length;Me++){const nt=me[Me].image[j].image;w?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,nt.width,nt.height,ye,be,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,De,nt.width,nt.height,0,ye,be,nt.data)}}else{w?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye,be,fe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,ye,be,fe[j]);for(let Me=0;Me<me.length;Me++){const xe=me[Me];w?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,ye,be,xe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,De,ye,be,xe.image[j])}}}d(h)&&b(i.TEXTURE_CUBE_MAP),ie.__version=W.version,h.onUpdate&&h.onUpdate(h)}S.__version=h.version}function Ae(S,h,U,G,W,ie){const oe=s.convert(U.format,U.colorSpace),q=s.convert(U.type),$=M(U.internalFormat,oe,q,U.normalized,U.colorSpace),le=n.get(h),Se=n.get(U);if(Se.__renderTarget=h,!le.__hasExternalTextures){const fe=Math.max(1,h.width>>ie),ce=Math.max(1,h.height>>ie);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,ie,$,fe,ce,h.depth,0,oe,q,null):t.texImage2D(W,ie,$,fe,ce,0,oe,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ct(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,W,Se.__webglTexture,0,tt(h)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,W,Se.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(S,h,U){if(i.bindRenderbuffer(i.RENDERBUFFER,S),h.depthBuffer){const G=h.depthTexture,W=G&&G.isDepthTexture?G.type:null,ie=A(h.stencilBuffer,W),oe=h.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(h),ie,h.width,h.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(h),ie,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,ie,h.width,h.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,S)}else{const G=h.textures;for(let W=0;W<G.length;W++){const ie=G[W],oe=s.convert(ie.format,ie.colorSpace),q=s.convert(ie.type),$=M(ie.internalFormat,oe,q,ie.normalized,ie.colorSpace);ct(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(h),$,h.width,h.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(h),$,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,$,h.width,h.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(S,h,U){const G=h.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(h.depthTexture);if(W.__renderTarget=h,(!W.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,h.depthTexture.addEventListener("dispose",C)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,h.depthTexture);const le=s.convert(h.depthTexture.format),Se=s.convert(h.depthTexture.type);let fe;h.depthTexture.format===1026?fe=i.DEPTH_COMPONENT24:h.depthTexture.format===1027&&(fe=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,h.width,h.height,0,le,Se,null)}}else Q(h.depthTexture,0);const ie=W.__webglTexture,oe=tt(h),q=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,$=h.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(h.depthTexture.format===1026)ct(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,q,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,$,q,ie,0);else if(h.depthTexture.format===1027)ct(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,q,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,$,q,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(S){const h=n.get(S),U=S.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==S.depthTexture){const G=S.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),G){const W=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),h.__depthDisposeCallback=W}h.__boundDepthTexture=G}if(S.depthTexture&&!h.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)Ne(h.__webglFramebuffer[G],S,G);else{const G=S.texture.mipmaps;G&&G.length>0?Ne(h.__webglFramebuffer[0],S,0):Ne(h.__webglFramebuffer,S,0)}else if(U){h.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer[G]),h.__webglDepthbuffer[G]===void 0)h.__webglDepthbuffer[G]=i.createRenderbuffer(),st(h.__webglDepthbuffer[G],S,!1);else{const W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=h.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ie)}}else{const G=S.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=i.createRenderbuffer(),st(h.__webglDepthbuffer,S,!1);else{const W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=h.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(S,h,U){const G=n.get(S);h!==void 0&&Ae(G.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ze(S)}function ze(S){const h=S.texture,U=n.get(S),G=n.get(h);S.addEventListener("dispose",g);const W=S.textures,ie=S.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=h.version,a.memory.textures++),ie){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(h.mipmaps&&h.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let $=0;$<h.mipmaps.length;$++)U.__webglFramebuffer[q][$]=i.createFramebuffer()}else U.__webglFramebuffer[q]=i.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<h.mipmaps.length;q++)U.__webglFramebuffer[q]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(oe)for(let q=0,$=W.length;q<$;q++){const le=n.get(W[q]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&ct(S)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<W.length;q++){const $=W[q];U.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[q]);const le=s.convert($.format,$.colorSpace),Se=s.convert($.type),fe=M($.internalFormat,le,Se,$.normalized,$.colorSpace,S.isXRRenderTarget===!0),ce=tt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,fe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,U.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),st(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,h);for(let q=0;q<6;q++)if(h.mipmaps&&h.mipmaps.length>0)for(let $=0;$<h.mipmaps.length;$++)Ae(U.__webglFramebuffer[q][$],S,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,$);else Ae(U.__webglFramebuffer[q],S,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);d(h)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let q=0,$=W.length;q<$;q++){const le=W[q],Se=n.get(le);let fe=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Se.__webglTexture),Ge(fe,le),Ae(U.__webglFramebuffer,S,le,i.COLOR_ATTACHMENT0+q,fe,0),d(le)&&b(fe)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(q=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,G.__webglTexture),Ge(q,h),h.mipmaps&&h.mipmaps.length>0)for(let $=0;$<h.mipmaps.length;$++)Ae(U.__webglFramebuffer[$],S,h,i.COLOR_ATTACHMENT0,q,$);else Ae(U.__webglFramebuffer,S,h,i.COLOR_ATTACHMENT0,q,0);d(h)&&b(q),t.unbindTexture()}S.depthBuffer&&Ze(S)}function lt(S){const h=S.textures;for(let U=0,G=h.length;U<G;U++){const W=h[U];if(d(W)){const ie=R(S),oe=n.get(W).__webglTexture;t.bindTexture(ie,oe),b(ie),t.unbindTexture()}}}const dt=[],mt=[];function gt(S){if(S.samples>0){if(ct(S)===!1){const h=S.textures,U=S.width,G=S.height;let W=i.COLOR_BUFFER_BIT;const ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(S),q=h.length>1;if(q)for(let le=0;le<h.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const $=S.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<h.length;le++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Se=n.get(h[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,U,G,0,0,U,G,W,i.NEAREST),c===!0&&(dt.length=0,mt.length=0,dt.push(i.COLOR_ATTACHMENT0+le),S.depthBuffer&&S.resolveDepthBuffer===!1&&(dt.push(ie),mt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let le=0;le<h.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Se=n.get(h[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const h=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[h])}}}function tt(S){return Math.min(r.maxSamples,S.samples)}function ct(S){const h=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function D(S){const h=a.render.frame;f.get(S)!==h&&(f.set(S,h),S.update())}function yt(S,h){const U=S.colorSpace,G=S.format,W=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==Pi&&U!==""&&(Be.getTransfer(U)===Ye?(G!==1023||W!==1009)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",U)),h}function qe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.getTextureUnits=K,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=We,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jf(i,e){function t(n,r=""){let s;const a=Be.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ed{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Os(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ot({vertexShader:Qf,fragmentShader:jf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class td extends Mn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,p=null,u=null,m=null,v=null;const E=typeof XRWebGLBinding<"u",_=new ed,d={},b=t.getContextAttributes();let R=null,M=null;const A=[],T=[],C=new ke;let g=null;const y=new Lt;y.viewport=new rt;const F=new Lt;F.viewport=new rt;const P=[y,F],I=new co;let Y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=A[J];return ae===void 0&&(ae=new Wi,A[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=A[J];return ae===void 0&&(ae=new Wi,A[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=A[J];return ae===void 0&&(ae=new Wi,A[J]=ae),ae.getHandSpace()};function B(J){const ae=T.indexOf(J.inputSource);if(ae===-1)return;const te=A[ae];te!==void 0&&(te.update(J.inputSource,J.frame,l||a),te.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",H);for(let J=0;J<A.length;J++){const ae=T[J];ae!==null&&(T[J]=null,A[J].disconnect(ae))}Y=null,K=null,_.reset();for(const J in d)delete d[J];e.setRenderTarget(R),m=null,u=null,p=null,r=null,M=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ce=null,Pe=null;b.depth&&(Pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=b.stencil?1027:1026,Ce=b.stencil?1020:1014);const Ae={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Ae),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Wt(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new zn(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const te={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Wt(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(J){for(let ae=0;ae<J.removed.length;ae++){const te=J.removed[ae],Ce=T.indexOf(te);Ce>=0&&(T[Ce]=null,A[Ce].disconnect(te))}for(let ae=0;ae<J.added.length;ae++){const te=J.added[ae];let Ce=T.indexOf(te);if(Ce===-1){for(let Ae=0;Ae<A.length;Ae++)if(Ae>=T.length){T.push(te),Ce=Ae;break}else if(T[Ae]===null){T[Ae]=te,Ce=Ae;break}if(Ce===-1)break}const Pe=A[Ce];Pe&&Pe.connect(te)}}const Q=new z,k=new z;function ee(J,ae,te){Q.setFromMatrixPosition(ae.matrixWorld),k.setFromMatrixPosition(te.matrixWorld);const Ce=Q.distanceTo(k),Pe=ae.projectionMatrix.elements,Ae=te.projectionMatrix.elements,st=Pe[14]/(Pe[10]-1),Ne=Pe[14]/(Pe[10]+1),Ze=(Pe[9]+1)/Pe[5],We=(Pe[9]-1)/Pe[5],ze=(Pe[8]-1)/Pe[0],lt=(Ae[8]+1)/Ae[0],dt=st*ze,mt=st*lt,gt=Ce/(-ze+lt),tt=gt*-ze;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(tt),J.translateZ(gt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ct=st+gt,D=Ne+gt,yt=dt-tt,qe=mt+(Ce-tt),S=Ze*Ne/D*ct,h=We*Ne/D*ct;J.projectionMatrix.makePerspective(yt,qe,S,h,ct,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ne(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ae=J.near,te=J.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(te=_.depthFar)),I.near=F.near=y.near=ae,I.far=F.far=y.far=te,(Y!==I.near||K!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),Y=I.near,K=I.far),I.layers.mask=J.layers.mask|6,y.layers.mask=I.layers.mask&-5,F.layers.mask=I.layers.mask&-3;const Ce=J.parent,Pe=I.cameras;ne(I,Ce);for(let Ae=0;Ae<Pe.length;Ae++)ne(Pe[Ae],Ce);Pe.length===2?ee(I,y,F):I.projectionMatrix.copy(y.projectionMatrix),re(J,I,Ce)};function re(J,ae,te){te===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(te.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ti*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(J){return d[J]};let Ue=null;function et(J,ae){if(f=ae.getViewerPose(l||a),v=ae,f!==null){const te=f.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ce=!1;te.length!==I.cameras.length&&(I.cameras.length=0,Ce=!0);for(let Ne=0;Ne<te.length;Ne++){const Ze=te[Ne];let We=null;if(m!==null)We=m.getViewport(Ze);else{const lt=p.getViewSubImage(u,Ze);We=lt.viewport,Ne===0&&(e.setRenderTargetTextures(M,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(M))}let ze=P[Ne];ze===void 0&&(ze=new Lt,ze.layers.enable(Ne),ze.viewport=new rt,P[Ne]=ze),ze.matrix.fromArray(Ze.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ze.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(We.x,We.y,We.width,We.height),Ne===0&&(I.matrix.copy(ze.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ce===!0&&I.cameras.push(ze)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=n.getBinding();const Ne=p.getDepthInformation(te[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(Ne,r.renderState)}if(Pe&&Pe.includes("camera-access")&&E){e.state.unbindTexture(),p=n.getBinding();for(let Ne=0;Ne<te.length;Ne++){const Ze=te[Ne].camera;if(Ze){let We=d[Ze];We||(We=new Os,d[Ze]=We);const ze=p.getCameraImage(Ze);We.sourceTexture=ze}}}}for(let te=0;te<A.length;te++){const Ce=T[te],Pe=A[te];Ce!==null&&Pe!==void 0&&Pe.update(Ce,ae,l||a)}Ue&&Ue(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}const Ge=new Vs;Ge.setAnimationLoop(et),this.setAnimationLoop=function(J){Ue=J},this.dispose=function(){}}}const nd=new ft,Ks=new we;Ks.set(-1,0,0,0,1,0,0,0,1);function id(i,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,Bs(i)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,b,R,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(_,d):d.isMeshLambertMaterial?(s(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(_,d),p(_,d)):d.isMeshPhongMaterial?(s(_,d),f(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(_,d),u(_,d),d.isMeshPhysicalMaterial&&m(_,d,M)):d.isMeshMatcapMaterial?(s(_,d),v(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),E(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?c(_,d,b,R):d.isSpriteMaterial?l(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===1&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===1&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const b=e.get(d),R=b.envMap,M=b.envMapRotation;R&&(_.envMap.value=R,_.envMapRotation.value.setFromMatrix4(nd.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Ks),_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function c(_,d,b,R){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*b,_.scale.value=R*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function l(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function f(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function p(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function u(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function m(_,d,b){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,d){d.matcap&&(_.matcap.value=d.matcap)}function E(_,d){const b=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rd(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,A){const T=A.program;n.uniformBlockBinding(M,T)}function l(M,A){let T=r[M.id];T===void 0&&(_(M),T=f(M),r[M.id]=T,M.addEventListener("dispose",b));const C=A.program;n.updateUBOMapping(M,C);const g=e.render.frame;s[M.id]!==g&&(u(M),s[M.id]=g)}function f(M){const A=p();M.__bindingPointIndex=A;const T=i.createBuffer(),C=M.__size,g=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const A=r[M.id],T=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let g=0,y=T.length;g<y;g++){const F=T[g];if(Array.isArray(F))for(let P=0,I=F.length;P<I;P++)m(F[P],g,P,C);else m(F,g,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,A,T,C){if(E(M,A,T,C)===!0){const g=M.__offset,y=M.value;if(Array.isArray(y)){let F=0;for(let P=0;P<y.length;P++){const I=y[P],Y=d(I);v(I,M.__data,F),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(y,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,M.__data)}}function v(M,A,T){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,T)}function E(M,A,T,C){const g=M.value,y=A+"_"+T;if(C[y]===void 0)return typeof g=="number"||typeof g=="boolean"?C[y]=g:ArrayBuffer.isView(g)?C[y]=g.slice():C[y]=g.clone(),!0;{const F=C[y];if(typeof g=="number"||typeof g=="boolean"){if(F!==g)return C[y]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(F.equals(g)===!1)return F.copy(g),!0}}return!1}function _(M){const A=M.uniforms;let T=0;const C=16;for(let y=0,F=A.length;y<F;y++){const P=Array.isArray(A[y])?A[y]:[A[y]];for(let I=0,Y=P.length;I<Y;I++){const K=P[I],B=Array.isArray(K.value)?K.value:[K.value];for(let X=0,H=B.length;X<H;X++){const Q=B[X],k=d(Q),ee=T%C,ne=ee%k.boundary,re=ee+ne;T+=ne,re!==0&&C-re<k.storage&&(T+=C-re),K.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=k.storage}}}const g=T%C;return g>0&&(T+=C-g),M.__size=T,M.__cache={},this}function d(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",M),A}function b(M){const A=M.target;A.removeEventListener("dispose",b);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function R(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:R}}const sd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ht=null;function ad(){return Ht===null&&(Ht=new qa(sd,16,16,1030,1016),Ht.name="DFG_LUT",Ht.minFilter=1006,Ht.magFilter=1006,Ht.wrapS=1001,Ht.wrapT=1001,Ht.generateMipmaps=!1,Ht.needsUpdate=!0),Ht}class od{constructor(e={}){const{canvas:t=aa(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=1009}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const E=m,_=new Set([1033,1031,1029]),d=new Set([1009,1014,1012,1020,1017,1018]),b=new Uint32Array(4),R=new Int32Array(4),M=new z;let A=null,T=null;const C=[],g=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let P=!1,I=null,Y=null,K=null,B=null;this._outputColorSpace=Dt;let X=0,H=0,Q=null,k=-1,ee=null;const ne=new rt,re=new rt;let Ue=null;const et=new Xe(0);let Ge=0,J=t.width,ae=t.height,te=1,Ce=null,Pe=null;const Ae=new rt(0,0,J,ae),st=new rt(0,0,J,ae);let Ne=!1;const Ze=new Is;let We=!1,ze=!1;const lt=new ft,dt=new z,mt=new rt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ct(){return Q===null?te:1}let D=n;function yt(x,L){return t.getContext(x,L)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r185"),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Bt,!1),D===null){const L="webgl2";if(D=yt(L,x),D===null)throw yt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw He("WebGLRenderer: "+x.message),x}let qe,S,h,U,G,W,ie,oe,q,$,le,Se,fe,ce,ye,be,De,w,se,Z,ue,me,j;function Me(){qe=new su(D),qe.init(),ue=new Jf(D,qe),S=new Jc(D,qe,e,ue),h=new Zf(D,qe),S.reversedDepthBuffer&&u&&h.buffers.depth.setReversed(!0),Y=D.createFramebuffer(),K=D.createFramebuffer(),B=D.createFramebuffer(),U=new lu(D),G=new If,W=new $f(D,qe,h,G,S,ue,U),ie=new ru(F),oe=new fo(D),me=new Zc(D,oe),q=new au(D,oe,U,me),$=new uu(D,q,oe,me,U),w=new cu(D,S,W),ye=new Qc(G),le=new Uf(F,ie,qe,S,me,ye),Se=new id(F,G),fe=new Of,ce=new kf(qe),De=new Kc(F,ie,h,$,v,c),be=new Kf(F,$,S),j=new rd(D,U,S,h),se=new $c(D,qe,U),Z=new ou(D,qe,U),U.programs=le.programs,F.capabilities=S,F.extensions=qe,F.properties=G,F.renderLists=fe,F.shadowMap=be,F.state=h,F.info=U}Me(),E!==1009&&(y=new du(E,t.width,t.height,o,r,s));const xe=new td(F,D);this.xr=xe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=qe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=qe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(x){x!==void 0&&(te=x,this.setSize(J,ae,!1))},this.getSize=function(x){return x.set(J,ae)},this.setSize=function(x,L,V=!0){if(xe.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}J=x,ae=L,t.width=Math.floor(x*te),t.height=Math.floor(L*te),V===!0&&(t.style.width=x+"px",t.style.height=L+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(J*te,ae*te).floor()},this.setDrawingBufferSize=function(x,L,V){J=x,ae=L,te=V,t.width=Math.floor(x*V),t.height=Math.floor(L*V),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(E===1009){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(Ae)},this.setViewport=function(x,L,V,N){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,L,V,N),h.viewport(ne.copy(Ae).multiplyScalar(te).round())},this.getScissor=function(x){return x.copy(st)},this.setScissor=function(x,L,V,N){x.isVector4?st.set(x.x,x.y,x.z,x.w):st.set(x,L,V,N),h.scissor(re.copy(st).multiplyScalar(te).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(x){h.setScissorTest(Ne=x)},this.setOpaqueSort=function(x){Ce=x},this.setTransparentSort=function(x){Pe=x},this.getClearColor=function(x){return x.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,V=!0){let N=0;if(x){let O=!1;if(Q!==null){const pe=Q.texture.format;O=_.has(pe)}if(O){const pe=Q.texture.type,ge=d.has(pe),he=De.getClearColor(),ve=De.getClearAlpha(),Ee=he.r,Le=he.g,Ie=he.b;ge?(b[0]=Ee,b[1]=Le,b[2]=Ie,b[3]=ve,D.clearBufferuiv(D.COLOR,0,b)):(R[0]=Ee,R[1]=Le,R[2]=Ie,R[3]=ve,D.clearBufferiv(D.COLOR,0,R))}else N|=D.COLOR_BUFFER_BIT}L&&(N|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(N|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),I=x},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Bt,!1),De.dispose(),fe.dispose(),ce.dispose(),G.dispose(),ie.dispose(),$.dispose(),me.dispose(),j.dispose(),le.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",br),xe.removeEventListener("sessionend",Rr),dn.stop()};function nt(x){x.preventDefault(),Nr("WebGLRenderer: Context Lost."),P=!0}function Qe(){Nr("WebGLRenderer: Context Restored."),P=!1;const x=U.autoReset,L=be.enabled,V=be.autoUpdate,N=be.needsUpdate,O=be.type;Me(),U.autoReset=x,be.enabled=L,be.autoUpdate=V,be.needsUpdate=N,be.type=O}function Bt(x){He("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Gt(x){const L=x.target;L.removeEventListener("dispose",Gt),Qs(L)}function Qs(x){js(x),G.remove(x)}function js(x){const L=G.get(x).programs;L!==void 0&&(L.forEach(function(V){le.releaseProgram(V)}),x.isShaderMaterial&&le.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,V,N,O,pe){L===null&&(L=gt);const ge=O.isMesh&&O.matrixWorld.determinantAffine()<0,he=na(x,L,V,N,O);h.setMaterial(N,ge);let ve=V.index,Ee=1;if(N.wireframe===!0){if(ve=q.getWireframeAttribute(V),ve===void 0)return;Ee=2}const Le=V.drawRange,Ie=V.attributes.position;let Te=Le.start*Ee,Ke=(Le.start+Le.count)*Ee;pe!==null&&(Te=Math.max(Te,pe.start*Ee),Ke=Math.min(Ke,(pe.start+pe.count)*Ee)),ve!==null?(Te=Math.max(Te,0),Ke=Math.min(Ke,ve.count)):Ie!=null&&(Te=Math.max(Te,0),Ke=Math.min(Ke,Ie.count));const at=Ke-Te;if(at<0||at===1/0)return;me.setup(O,N,he,V,ve);let it,$e=se;if(ve!==null&&(it=oe.get(ve),$e=Z,$e.setIndex(it)),O.isMesh)N.wireframe===!0?(h.setLineWidth(N.wireframeLinewidth*ct()),$e.setMode(D.LINES)):$e.setMode(D.TRIANGLES);else if(O.isLine){let xt=N.linewidth;xt===void 0&&(xt=1),h.setLineWidth(xt*ct()),O.isLineSegments?$e.setMode(D.LINES):O.isLineLoop?$e.setMode(D.LINE_LOOP):$e.setMode(D.LINE_STRIP)}else O.isPoints?$e.setMode(D.POINTS):O.isSprite&&$e.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))$e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const xt=O._multiDrawStarts,_e=O._multiDrawCounts,At=O._multiDrawCount,Ve=ve?oe.get(ve).bytesPerElement:1,wt=G.get(N).currentProgram.getUniforms();for(let zt=0;zt<At;zt++)wt.setValue(D,"_gl_DrawID",zt),$e.render(xt[zt]/Ve,_e[zt])}else if(O.isInstancedMesh)$e.renderInstances(Te,at,O.count);else if(V.isInstancedBufferGeometry){const xt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_e=Math.min(V.instanceCount,xt);$e.renderInstances(Te,at,_e)}else $e.render(Te,at)};function Ar(x,L,V){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,ai(x,L,V),x.side=0,x.needsUpdate=!0,ai(x,L,V),x.side=2):ai(x,L,V)}this.compile=function(x,L,V=null){V===null&&(V=x),T=ce.get(V),T.init(L),g.push(T),V.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(T.pushLight(O),O.castShadow&&T.pushShadow(O))}),x!==V&&x.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(T.pushLight(O),O.castShadow&&T.pushShadow(O))}),T.setupLights();const N=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const pe=O.material;if(pe)if(Array.isArray(pe))for(let ge=0;ge<pe.length;ge++){const he=pe[ge];Ar(he,V,O),N.add(he)}else Ar(pe,V,O),N.add(pe)}),T=g.pop(),N},this.compileAsync=function(x,L,V=null){const N=this.compile(x,L,V);return new Promise(O=>{function pe(){if(N.forEach(function(ge){G.get(ge).currentProgram.isReady()&&N.delete(ge)}),N.size===0){O(x);return}setTimeout(pe,10)}qe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Oi=null;function ea(x){Oi&&Oi(x)}function br(){dn.stop()}function Rr(){dn.start()}const dn=new Vs;dn.setAnimationLoop(ea),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(x){Oi=x,xe.setAnimationLoop(x),x===null?dn.stop():dn.start()},xe.addEventListener("sessionstart",br),xe.addEventListener("sessionend",Rr),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(x,L);const V=xe.enabled===!0&&xe.isPresenting===!0,N=y!==null&&(Q===null||V)&&y.begin(F,Q);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(L),L=xe.getCamera()),x.isScene===!0&&x.onBeforeRender(F,x,L,Q),T=ce.get(x,g.length),T.init(L),T.state.textureUnits=W.getTextureUnits(),g.push(T),lt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ze.setFromProjectionMatrix(lt,2e3,L.reversedDepth),ze=this.localClippingEnabled,We=ye.init(this.clippingPlanes,ze),A=fe.get(x,C.length),A.init(),C.push(A),xe.enabled===!0&&xe.isPresenting===!0){const ge=F.xr.getDepthSensingMesh();ge!==null&&Bi(ge,L,-1/0,F.sortObjects)}Bi(x,L,0,F.sortObjects),A.finish(),F.sortObjects===!0&&A.sort(Ce,Pe,L.reversedDepth),tt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,tt&&De.addToRenderList(A,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&ye.beginShadows();const O=T.state.shadowsArray;if(be.render(O,x,L),We===!0&&ye.endShadows(),(N&&y.hasRenderPass())===!1){const ge=A.opaque,he=A.transmissive;if(T.setupLights(),L.isArrayCamera){const ve=L.cameras;if(he.length>0)for(let Ee=0,Le=ve.length;Ee<Le;Ee++){const Ie=ve[Ee];wr(ge,he,x,Ie)}tt&&De.render(x);for(let Ee=0,Le=ve.length;Ee<Le;Ee++){const Ie=ve[Ee];Cr(A,x,Ie,Ie.viewport)}}else he.length>0&&wr(ge,he,x,L),tt&&De.render(x),Cr(A,x,L)}Q!==null&&H===0&&(W.updateMultisampleRenderTarget(Q),W.updateRenderTargetMipmap(Q)),N&&y.end(F),x.isScene===!0&&x.onAfterRender(F,x,L),me.resetDefaultState(),k=-1,ee=null,g.pop(),g.length>0?(T=g[g.length-1],W.setTextureUnits(T.state.textureUnits),We===!0&&ye.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,I!==null&&I.renderEnd()};function Bi(x,L,V,N){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ze.intersectsSprite(x)){N&&mt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(lt);const ge=$.update(x),he=x.material;he.visible&&A.push(x,ge,he,V,mt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ze.intersectsObject(x))){const ge=$.update(x),he=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),mt.copy(x.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),mt.copy(ge.boundingSphere.center)),mt.applyMatrix4(x.matrixWorld).applyMatrix4(lt)),Array.isArray(he)){const ve=ge.groups;for(let Ee=0,Le=ve.length;Ee<Le;Ee++){const Ie=ve[Ee],Te=he[Ie.materialIndex];Te&&Te.visible&&A.push(x,ge,Te,V,mt.z,Ie)}}else he.visible&&A.push(x,ge,he,V,mt.z,null)}}const pe=x.children;for(let ge=0,he=pe.length;ge<he;ge++)Bi(pe[ge],L,V,N)}function Cr(x,L,V,N){const{opaque:O,transmissive:pe,transparent:ge}=x;T.setupLightsView(V),We===!0&&ye.setGlobalState(F.clippingPlanes,V),N&&h.viewport(ne.copy(N)),O.length>0&&si(O,L,V),pe.length>0&&si(pe,L,V),ge.length>0&&si(ge,L,V),h.buffers.depth.setTest(!0),h.buffers.depth.setMask(!0),h.buffers.color.setMask(!0),h.setPolygonOffset(!1)}function wr(x,L,V,N){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[N.id]===void 0){const Te=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[N.id]=new Wt(1,1,{generateMipmaps:!0,type:Te?1016:1009,minFilter:1008,samples:Math.max(4,S.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace})}const pe=T.state.transmissionRenderTarget[N.id],ge=N.viewport||ne;pe.setSize(ge.z*F.transmissionResolutionScale,ge.w*F.transmissionResolutionScale);const he=F.getRenderTarget(),ve=F.getActiveCubeFace(),Ee=F.getActiveMipmapLevel();F.setRenderTarget(pe),F.getClearColor(et),Ge=F.getClearAlpha(),Ge<1&&F.setClearColor(16777215,.5),F.clear(),tt&&De.render(V);const Le=F.toneMapping;F.toneMapping=0;const Ie=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),T.setupLightsView(N),We===!0&&ye.setGlobalState(F.clippingPlanes,N),si(x,V,N),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ke=0,at=L.length;Ke<at;Ke++){const it=L[Ke],{object:$e,geometry:xt,material:_e,group:At}=it;if(_e.side===2&&$e.layers.test(N.layers)){const Ve=_e.side;_e.side=1,_e.needsUpdate=!0,Pr($e,V,N,xt,_e,At),_e.side=Ve,_e.needsUpdate=!0,Te=!0}}Te===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}F.setRenderTarget(he,ve,Ee),F.setClearColor(et,Ge),Ie!==void 0&&(N.viewport=Ie),F.toneMapping=Le}function si(x,L,V){const N=L.isScene===!0?L.overrideMaterial:null;for(let O=0,pe=x.length;O<pe;O++){const ge=x[O],{object:he,geometry:ve,group:Ee}=ge;let Le=ge.material;Le.allowOverride===!0&&N!==null&&(Le=N),he.layers.test(V.layers)&&Pr(he,L,V,ve,Le,Ee)}}function Pr(x,L,V,N,O,pe){x.onBeforeRender(F,L,V,N,O,pe),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(F,L,V,N,x,pe),O.transparent===!0&&O.side===2&&O.forceSinglePass===!1?(O.side=1,O.needsUpdate=!0,F.renderBufferDirect(V,L,N,O,x,pe),O.side=0,O.needsUpdate=!0,F.renderBufferDirect(V,L,N,O,x,pe),O.side=2):F.renderBufferDirect(V,L,N,O,x,pe),x.onAfterRender(F,L,V,N,O,pe)}function ai(x,L,V){L.isScene!==!0&&(L=gt);const N=G.get(x),O=T.state.lights,pe=T.state.shadowsArray,ge=O.state.version,he=le.getParameters(x,O.state,pe,L,V,T.state.lightProbeGridArray),ve=le.getProgramCacheKey(he);let Ee=N.programs;N.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,N.fog=L.fog;const Le=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;N.envMap=ie.get(x.envMap||N.environment,Le),N.envMapRotation=N.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",Gt),Ee=new Map,N.programs=Ee);let Ie=Ee.get(ve);if(Ie!==void 0){if(N.currentProgram===Ie&&N.lightsStateVersion===ge)return Lr(x,he),Ie}else he.uniforms=le.getUniforms(x),I!==null&&x.isNodeMaterial&&I.build(x,V,he),x.onBeforeCompile(he,F),Ie=le.acquireProgram(he,ve),Ee.set(ve,Ie),N.uniforms=he.uniforms;const Te=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=ye.uniform),Lr(x,he),N.needsLights=ra(x),N.lightsStateVersion=ge,N.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),N.lightProbeGrid=T.state.lightProbeGridArray.length>0,N.currentProgram=Ie,N.uniformsList=null,Ie}function Dr(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=wi.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Lr(x,L){const V=G.get(x);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function ta(x,L){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let V=0,N=x.length;V<N;V++){const O=x[V];if(O.texture!==null&&O.boundingBox.containsPoint(M))return O}return null}function na(x,L,V,N,O){L.isScene!==!0&&(L=gt),W.resetTextureUnits();const pe=L.fog,ge=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?L.environment:null,he=Q===null?F.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Be.workingColorSpace,ve=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Ee=ie.get(N.envMap||ge,ve),Le=N.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!V.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Te=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,at=!!V.morphAttributes.color;let it=0;N.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(it=F.toneMapping);const $e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xt=$e!==void 0?$e.length:0,_e=G.get(N),At=T.state.lights;if(We===!0&&(ze===!0||x!==ee)){const je=x===ee&&N.id===k;ye.setState(N,x,je)}let Ve=!1;N.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==At.state.version||_e.outputColorSpace!==he||O.isBatchedMesh&&_e.batching===!1||!O.isBatchedMesh&&_e.batching===!0||O.isBatchedMesh&&_e.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&_e.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&_e.instancing===!1||!O.isInstancedMesh&&_e.instancing===!0||O.isSkinnedMesh&&_e.skinning===!1||!O.isSkinnedMesh&&_e.skinning===!0||O.isInstancedMesh&&_e.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&_e.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&_e.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&_e.instancingMorph===!1&&O.morphTexture!==null||_e.envMap!==Ee||N.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ye.numPlanes||_e.numIntersection!==ye.numIntersection)||_e.vertexAlphas!==Le||_e.vertexTangents!==Ie||_e.morphTargets!==Te||_e.morphNormals!==Ke||_e.morphColors!==at||_e.toneMapping!==it||_e.morphTargetsCount!==xt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ve=!0):(Ve=!0,_e.__version=N.version);let wt=_e.currentProgram;Ve===!0&&(wt=ai(N,L,O),I&&N.isNodeMaterial&&I.onUpdateProgram(N,wt,_e));let zt=!1,tn=!1,Sn=!1;const Je=wt.getUniforms(),ot=_e.uniforms;if(h.useProgram(wt.program)&&(zt=!0,tn=!0,Sn=!0),N.id!==k&&(k=N.id,tn=!0),_e.needsLights){const je=ta(T.state.lightProbeGridArray,O);_e.lightProbeGrid!==je&&(_e.lightProbeGrid=je,tn=!0)}if(zt||ee!==x){h.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Je.setValue(D,"projectionMatrix",x.projectionMatrix),Je.setValue(D,"viewMatrix",x.matrixWorldInverse);const rn=Je.map.cameraPosition;rn!==void 0&&rn.setValue(D,dt.setFromMatrixPosition(x.matrixWorld)),S.logarithmicDepthBuffer&&Je.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Je.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,tn=!0,Sn=!0)}if(_e.needsLights&&(At.state.directionalShadowMap.length>0&&Je.setValue(D,"directionalShadowMap",At.state.directionalShadowMap,W),At.state.spotShadowMap.length>0&&Je.setValue(D,"spotShadowMap",At.state.spotShadowMap,W),At.state.pointShadowMap.length>0&&Je.setValue(D,"pointShadowMap",At.state.pointShadowMap,W)),O.isSkinnedMesh){Je.setOptional(D,O,"bindMatrix"),Je.setOptional(D,O,"bindMatrixInverse");const je=O.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Je.setValue(D,"boneTexture",je.boneTexture,W))}O.isBatchedMesh&&(Je.setOptional(D,O,"batchingTexture"),Je.setValue(D,"batchingTexture",O._matricesTexture,W),Je.setOptional(D,O,"batchingIdTexture"),Je.setValue(D,"batchingIdTexture",O._indirectTexture,W),Je.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Je.setValue(D,"batchingColorTexture",O._colorsTexture,W));const nn=V.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&w.update(O,V,wt),(tn||_e.receiveShadow!==O.receiveShadow)&&(_e.receiveShadow=O.receiveShadow,Je.setValue(D,"receiveShadow",O.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&L.environment!==null&&(ot.envMapIntensity.value=L.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=ad()),tn){if(Je.setValue(D,"toneMappingExposure",F.toneMappingExposure),_e.needsLights&&ia(ot,Sn),pe&&N.fog===!0&&Se.refreshFogUniforms(ot,pe),Se.refreshMaterialUniforms(ot,N,te,ae,T.state.transmissionRenderTarget[x.id]),_e.needsLights&&_e.lightProbeGrid){const je=_e.lightProbeGrid;ot.probesSH.value=je.texture,ot.probesMin.value.copy(je.boundingBox.min),ot.probesMax.value.copy(je.boundingBox.max),ot.probesResolution.value.copy(je.resolution)}wi.upload(D,Dr(_e),ot,W)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(wi.upload(D,Dr(_e),ot,W),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Je.setValue(D,"center",O.center),Je.setValue(D,"modelViewMatrix",O.modelViewMatrix),Je.setValue(D,"normalMatrix",O.normalMatrix),Je.setValue(D,"modelMatrix",O.matrixWorld),N.uniformsGroups!==void 0){const je=N.uniformsGroups;for(let rn=0,En=je.length;rn<En;rn++){const Fr=je[rn];j.update(Fr,wt),j.bind(Fr,wt)}}return wt}function ia(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function ra(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(x,L,V){const N=G.get(x);N.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=L,G.get(x.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:V,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){const V=G.get(x);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,V=0){Q=x,X=L,H=V;let N=null,O=!1,pe=!1;if(x){const he=G.get(x);if(he.__useDefaultFramebuffer!==void 0){h.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),ne.copy(x.viewport),re.copy(x.scissor),Ue=x.scissorTest,h.viewport(ne),h.scissor(re),h.setScissorTest(Ue),k=-1;return}else if(he.__webglFramebuffer===void 0)W.setupRenderTarget(x);else if(he.__hasExternalTextures)W.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Le=x.depthTexture;if(he.__boundDepthTexture!==Le){if(Le!==null&&G.has(Le)&&(x.width!==Le.image.width||x.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(x)}}const ve=x.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(pe=!0);const Ee=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[L])?N=Ee[L][V]:N=Ee[L],O=!0):x.samples>0&&W.useMultisampledRTT(x)===!1?N=G.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?N=Ee[V]:N=Ee,ne.copy(x.viewport),re.copy(x.scissor),Ue=x.scissorTest}else ne.copy(Ae).multiplyScalar(te).floor(),re.copy(st).multiplyScalar(te).floor(),Ue=Ne;if(V!==0&&(N=Y),h.bindFramebuffer(D.FRAMEBUFFER,N)&&h.drawBuffers(x,N),h.viewport(ne),h.scissor(re),h.setScissorTest(Ue),O){const he=G.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,he.__webglTexture,V)}else if(pe){const he=L;for(let ve=0;ve<x.textures.length;ve++){const Ee=G.get(x.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,V,he)}}else if(x!==null&&V!==0){const he=G.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,V)}k=-1},this.readRenderTargetPixels=function(x,L,V,N,O,pe,ge,he=0){if(!(x&&x.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){h.bindFramebuffer(D.FRAMEBUFFER,ve);try{const Ee=x.textures[he],Le=Ee.format,Ie=Ee.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!S.textureFormatReadable(Le)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(Ie)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-N&&V>=0&&V<=x.height-O&&D.readPixels(L,V,N,O,ue.convert(Le),ue.convert(Ie),pe)}finally{const Ee=Q!==null?G.get(Q).__webglFramebuffer:null;h.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,L,V,N,O,pe,ge,he=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve)if(L>=0&&L<=x.width-N&&V>=0&&V<=x.height-O){h.bindFramebuffer(D.FRAMEBUFFER,ve);const Ee=x.textures[he],Le=Ee.format,Ie=Ee.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!S.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(L,V,N,O,ue.convert(Le),ue.convert(Ie),0);const Ke=Q!==null?G.get(Q).__webglFramebuffer:null;h.bindFramebuffer(D.FRAMEBUFFER,Ke);const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await oa(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(Te),D.deleteSync(at),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,V=0){const N=Math.pow(2,-V),O=Math.floor(x.image.width*N),pe=Math.floor(x.image.height*N),ge=L!==null?L.x:0,he=L!==null?L.y:0;W.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ge,he,O,pe),h.unbindTexture()},this.copyTextureToTexture=function(x,L,V=null,N=null,O=0,pe=0){let ge,he,ve,Ee,Le,Ie,Te,Ke,at;const it=x.isCompressedTexture?x.mipmaps[pe]:x.image;if(V!==null)ge=V.max.x-V.min.x,he=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Ee=V.min.x,Le=V.min.y,Ie=V.isBox3?V.min.z:0;else{const ot=Math.pow(2,-O);ge=Math.floor(it.width*ot),he=Math.floor(it.height*ot),x.isDataArrayTexture?ve=it.depth:x.isData3DTexture?ve=Math.floor(it.depth*ot):ve=1,Ee=0,Le=0,Ie=0}N!==null?(Te=N.x,Ke=N.y,at=N.z):(Te=0,Ke=0,at=0);const $e=ue.convert(L.format),xt=ue.convert(L.type);let _e;L.isData3DTexture?(W.setTexture3D(L,0),_e=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(W.setTexture2DArray(L,0),_e=D.TEXTURE_2D_ARRAY):(W.setTexture2D(L,0),_e=D.TEXTURE_2D),h.activeTexture(D.TEXTURE0),h.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),h.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),h.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const At=h.getParameter(D.UNPACK_ROW_LENGTH),Ve=h.getParameter(D.UNPACK_IMAGE_HEIGHT),wt=h.getParameter(D.UNPACK_SKIP_PIXELS),zt=h.getParameter(D.UNPACK_SKIP_ROWS),tn=h.getParameter(D.UNPACK_SKIP_IMAGES);h.pixelStorei(D.UNPACK_ROW_LENGTH,it.width),h.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it.height),h.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),h.pixelStorei(D.UNPACK_SKIP_ROWS,Le),h.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie);const Sn=x.isDataArrayTexture||x.isData3DTexture,Je=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const ot=G.get(x),nn=G.get(L),je=G.get(ot.__renderTarget),rn=G.get(nn.__renderTarget);h.bindFramebuffer(D.READ_FRAMEBUFFER,je.__webglFramebuffer),h.bindFramebuffer(D.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let En=0;En<ve;En++)Sn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(x).__webglTexture,O,Ie+En),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(L).__webglTexture,pe,at+En)),D.blitFramebuffer(Ee,Le,ge,he,Te,Ke,ge,he,D.DEPTH_BUFFER_BIT,D.NEAREST);h.bindFramebuffer(D.READ_FRAMEBUFFER,null),h.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||G.has(x)){const ot=G.get(x),nn=G.get(L);h.bindFramebuffer(D.READ_FRAMEBUFFER,K),h.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let je=0;je<ve;je++)Sn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ot.__webglTexture,O,Ie+je):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ot.__webglTexture,O),Je?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,pe,at+je):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,pe),O!==0?D.blitFramebuffer(Ee,Le,ge,he,Te,Ke,ge,he,D.COLOR_BUFFER_BIT,D.NEAREST):Je?D.copyTexSubImage3D(_e,pe,Te,Ke,at+je,Ee,Le,ge,he):D.copyTexSubImage2D(_e,pe,Te,Ke,Ee,Le,ge,he);h.bindFramebuffer(D.READ_FRAMEBUFFER,null),h.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Je?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(_e,pe,Te,Ke,at,ge,he,ve,$e,xt,it.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,pe,Te,Ke,at,ge,he,ve,$e,it.data):D.texSubImage3D(_e,pe,Te,Ke,at,ge,he,ve,$e,xt,it):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,Te,Ke,ge,he,$e,xt,it.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,Te,Ke,it.width,it.height,$e,it.data):D.texSubImage2D(D.TEXTURE_2D,pe,Te,Ke,ge,he,$e,xt,it);h.pixelStorei(D.UNPACK_ROW_LENGTH,At),h.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ve),h.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),h.pixelStorei(D.UNPACK_SKIP_ROWS,zt),h.pixelStorei(D.UNPACK_SKIP_IMAGES,tn),pe===0&&L.generateMipmaps&&D.generateMipmap(_e),h.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&W.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?W.setTextureCube(x,0):x.isData3DTexture?W.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?W.setTexture2DArray(x,0):W.setTexture2D(x,0),h.unbindTexture()},this.resetState=function(){X=0,H=0,Q=null,h.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}}const Rs=1e3,ld=["hero","intro","boundary","author","claim","footer"],Li=[2.5,3.5,3,4.5,4],Zs=`
  uniform float uTime;
  uniform float uAmp;
  uniform float uSeed;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  uniform float uMouseRadius;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    vUv = uv;
    vec3 pos = position;

    vec4 wp = modelMatrix * vec4(position, 1.0);
    float d = distance(wp.xy, uMouse);
    float boost = uMouseStrength * smoothstep(uMouseRadius, 0.0, d);

    float t = uTime + uSeed;
    float w = sin(uv.x * 4.5 + t * 0.9) * 0.55
            + sin(uv.y * 3.5 - t * 0.7) * 0.35
            + sin((uv.x + uv.y) * 6.0 + t * 1.3) * 0.25;
    // ripple ring radiating from the pointer
    w += boost * sin(d * 0.05 - uTime * 4.0) * 1.5;

    pos.z += w * uAmp * (1.0 + boost * 1.6);
    vWave = w;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
  }
`,$s=`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uOpacity;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    vec4 tex = texture2D(uTexture, vUv + vWave * 0.006);
    tex.rgb *= 1.0 + vWave * 0.05; // paper-fold shading
    tex.a *= uOpacity;
    gl_FragColor = tex;
  }
`;function cd(i){if(!i||!i.gsap)return;const e=ld.map(s=>document.querySelector(`.decor__bill--${s}`)).filter(Boolean),t={mode:"static",forceFallback(){},debug:()=>null};if(window.__bills=t,!e.length||i.reduced)return;const n=!window.__BILLS_FORCE_FALLBACK&&!window.matchMedia("(max-width: 1080px)").matches&&!window.matchMedia("(pointer: coarse)").matches;let r=!1;if(n)try{r=!!dd(i,e,t)}catch(s){console.debug("[bills] cloth init failed, static fallback active",s)}r||(Js(i,e),t.mode="fallback",i.gsap.set(e,{autoAlpha:0}),i.loaderDone.then(()=>{i.gsap.to(e,{autoAlpha:1,duration:.9,delay:1.45,ease:"power2.out"})}))}function Js(i,e){const t=()=>parseFloat(getComputedStyle(document.documentElement).fontSize)||10;e.forEach((n,r)=>{const s=Li[r%Li.length];i.gsap.fromTo(n,{y:()=>-s*t()},{y:()=>s*t(),ease:"none",scrollTrigger:{trigger:n,start:"top bottom",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}})})}function ud(i){let e=0,t=0;for(;i;)e+=i.offsetLeft,t+=i.offsetTop,i=i.offsetParent;return{x:e,y:t}}function fd(i){const e=getComputedStyle(i).transform;if(!e||e==="none")return 0;const t=e.slice(e.indexOf("(")+1).split(",");return Math.atan2(parseFloat(t[1]),parseFloat(t[0]))}function dd(i,e,t){var X,H,Q;const{gsap:n}=i,r=document.createElement("canvas");r.className="bills-gl",r.setAttribute("aria-hidden","true"),Object.assign(r.style,{position:"fixed",inset:"0",width:"100%",height:"100%",zIndex:"3",pointerEvents:"none"});const s=r.getContext("webgl2",{alpha:!0,antialias:!0});if(!s)return!1;const a=new od({canvas:r,context:s,alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(r);const o=new Ga,c=new Lt(45,1,100,2e3);c.position.z=Rs;const l=()=>{c.aspect=window.innerWidth/window.innerHeight,c.fov=Aa.radToDeg(2*Math.atan(window.innerHeight/2/Rs)),c.updateProjectionMatrix()};l();const f=()=>parseFloat(getComputedStyle(document.documentElement).fontSize)||10,p={value:0},u={value:f()*.8},m={value:new ke(1e6,1e6)},v={value:0},E={value:f()*32},_={value:0},d=new ri(1,1,28,28),b=e.map((k,ee)=>{const ne=new Ot({uniforms:{uTexture:{value:null},uSeed:{value:ee*7.31},uTime:p,uAmp:u,uMouse:m,uMouseStrength:v,uMouseRadius:E,uOpacity:_},vertexShader:Zs,fragmentShader:$s,transparent:!0,depthTest:!1,depthWrite:!1}),re=new qt(d,ne);return re.visible=!1,o.add(re),{img:k,src:k.getAttribute("src")||"",travel:Li[ee%Li.length],material:ne,mesh:re,cx:0,cy:0,start:0,end:1}}),R=new Map,M=new oo;[...new Set(b.map(k=>k.src))].forEach(k=>{M.load(__dsTex(k),ee=>{R.set(k,ee),b.forEach(ne=>{ne.src===k&&(ne.material.uniforms.uTexture.value=ee,ne.mesh.visible=!0,ne.img.style.visibility="hidden")})},void 0,()=>t.forceFallback())});const A=()=>{b.forEach(k=>{const ee=ud(k.img),ne=k.img.offsetWidth||1,re=k.img.offsetHeight||1;k.cx=ee.x+ne/2,k.cy=ee.y+re/2,k.mesh.scale.set(ne,re,1),k.mesh.rotation.z=-fd(k.img),k.start=ee.y-window.innerHeight,k.end=ee.y+re})};A();const T=()=>A();(H=(X=i.ScrollTrigger)==null?void 0:X.addEventListener)==null||H.call(X,"refresh",T);let C=0;const g=k=>{m.value.set(k.clientX-window.innerWidth/2,-(k.clientY-window.innerHeight/2)),C=1},y=()=>{a.setSize(window.innerWidth,window.innerHeight),l(),E.value=f()*32,A()};window.addEventListener("pointermove",g,{passive:!0}),window.addEventListener("resize",y);const F=window.matchMedia("(max-width: 1080px)"),P=()=>{F.matches&&t.forceFallback()};(Q=F.addEventListener)==null||Q.call(F,"change",P);let I=window.scrollY;const Y=k=>k<0?0:k>1?1:k,K=k=>{p.value=k,C*=.985,v.value+=(C-v.value)*.06,I=window.scrollY;const ee=f();u.value=ee*.8;const ne=window.innerWidth,re=window.innerHeight;b.forEach(Ue=>{const et=Y((I-Ue.start)/(Ue.end-Ue.start||1)),Ge=Ue.travel*ee*(2*et-1);Ue.mesh.position.set(Ue.cx-ne/2,-(Ue.cy+Ge-I-re/2),0)}),a.render(o,c)};n.ticker.add(K);const B=n.to(_,{value:1,duration:.9,delay:1.45,ease:"power2.out",paused:!0});return i.loaderDone.then(()=>B.play()),t.mode="cloth",t.debug=()=>({scroll:I,bills:b.map(k=>({name:k.img.className.replace(/^.*--/,""),x:k.mesh.position.x,y:k.mesh.position.y,w:k.mesh.scale.x,h:k.mesh.scale.y,rot:k.mesh.rotation.z,visible:k.mesh.visible})),mouseStrength:v.value}),t.forceFallback=()=>{var k,ee,ne;t.mode==="cloth"&&(t.mode="fallback",B.kill(),n.ticker.remove(K),window.removeEventListener("pointermove",g),window.removeEventListener("resize",y),(k=F.removeEventListener)==null||k.call(F,"change",P),(ne=(ee=i.ScrollTrigger)==null?void 0:ee.removeEventListener)==null||ne.call(ee,"refresh",T),e.forEach(re=>{re.style.visibility=""}),b.forEach(re=>re.material.dispose()),d.dispose(),R.forEach(re=>re.dispose()),a.dispose(),r.remove(),Js(i,e))},r.addEventListener("webglcontextlost",k=>{k.preventDefault(),t.forceFallback()}),!0}const hd=Object.freeze(Object.defineProperty({__proto__:null,BILL_FRAG:$s,BILL_VERT:Zs,init:cd},Symbol.toStringTag,{value:"Module"}));__dsExports.bills={F:$s,M:qt,P:Lt,S:Ga,T:oo,V:Zs,W:od,a:Ot,b:ke,c:ri,d:Aa,e:hd};

};

/* ---- language-WsAUZ4RO.js ---- */
__dsDefs.language=function(){"use strict";
const{W:J,S:Q,P:$,a:ee,F:te,V:ne,b:oe,c:ie,M:re,T:ae,d:se}=__dsRequire("bills");const V=1e3;function le(i){const t=getComputedStyle(i).transform;if(!t||t==="none")return 0;const r=t.slice(t.indexOf("(")+1).split(",");return Math.atan2(parseFloat(r[1]),parseFloat(r[0]))}function ce(i={}){const t=document.getElementById("language"),r=document.querySelector(".header__lang");if(!t||!r)return;const o=i.gsap,h=i.reduced??window.matchMedia("(prefers-reduced-motion: reduce)").matches,l=t.querySelector(".language__item--active"),a=t.querySelector(".language__bill"),y=t.querySelectorAll(".language__kicker, .language__row, .language__credit, .language__bill");let u=!1,s=null,S=0;window.__langBill={live:()=>S,mode:()=>s?"gl":"static"};const D=()=>{var e;typeof i.stopScroll=="function"?i.stopScroll():((e=i.lenis)==null||e.stop(),document.documentElement.style.overflow="hidden")},I=()=>{var e;typeof i.startScroll=="function"?i.startScroll():((e=i.lenis)==null||e.start(),document.documentElement.style.overflow="")},A=()=>{s==null||s.destroy(),s=null};function N(){u||(u=!0,t.hidden=!1,r.setAttribute("aria-expanded","true"),D(),A(),s=U(),!h&&o&&(o.killTweensOf([t,y]),o.fromTo(t,{opacity:0},{opacity:1,duration:.35,ease:"power2.out"}),o.fromTo(y,{opacity:0,y:24},{opacity:1,y:0,duration:.55,ease:"power3.out",stagger:.06,delay:.08,clearProps:"transform"})),l==null||l.focus({preventScroll:!0}))}function _(){if(!u)return;u=!1,r.setAttribute("aria-expanded","false");const e=()=>{t.hidden=!0,A(),I(),r.focus({preventScroll:!0})};!h&&o?(o.killTweensOf([t,y]),o.to(t,{opacity:0,duration:.25,ease:"power2.in",onComplete:()=>{o.set(t,{clearProps:"opacity"}),e()}})):e()}r.setAttribute("aria-haspopup","dialog"),r.setAttribute("aria-expanded","false"),r.addEventListener("click",()=>u?_():N()),l==null||l.addEventListener("click",_),document.addEventListener("keydown",e=>{e.key==="Escape"&&u&&_()});function U(){if(!a||!o||h||window.__LANGUAGE_BILL_FORCE_FALLBACK)return null;const e=document.createElement("canvas");e.className="language__gl",e.setAttribute("aria-hidden","true");const T=e.getContext("webgl2",{alpha:!0,antialias:!0});if(!T)return null;let c;try{c=new J({canvas:e,context:T,alpha:!0,antialias:!0})}catch{return null}c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.setSize(window.innerWidth,window.innerHeight),t.insertBefore(e,t.firstChild);const C=new Q,p=new $(45,1,100,2e3);p.position.z=V;const P=()=>{p.aspect=window.innerWidth/window.innerHeight,p.fov=se.radToDeg(2*Math.atan(window.innerHeight/2/V)),p.updateProjectionMatrix()};P();const f=()=>parseFloat(getComputedStyle(document.documentElement).fontSize)||10,R={value:0},x={value:f()*.8},W={value:new oe(1e6,1e6)},b={value:0},z={value:f()*32},G={value:0},L=new ee({uniforms:{uTexture:{value:null},uSeed:{value:4.2},uTime:R,uAmp:x,uMouse:W,uMouseStrength:b,uMouseRadius:z,uOpacity:G},vertexShader:ne,fragmentShader:te,transparent:!0,depthTest:!1,depthWrite:!1}),B=new ie(1,1,28,28),d=new re(B,L);d.visible=!1,C.add(d),a.style.visibility="hidden",S++;let E=!1,w=null,v=null;const m=()=>{E||(E=!0,S--,v==null||v.kill(),o.ticker.remove(q),window.removeEventListener("pointermove",F),window.removeEventListener("resize",H),e.removeEventListener("webglcontextlost",O),L.dispose(),B.dispose(),w==null||w.dispose(),c.dispose(),e.remove(),a.style.visibility="",s&&s.destroy===m&&(s=null))};new ae().load(__dsTex(a.currentSrc||a.src),n=>{if(E){n.dispose();return}w=n,L.uniforms.uTexture.value=n,d.visible=!0,v=o.to(G,{value:1,duration:.5,delay:.08,ease:"power2.out"})},void 0,()=>m());let M=0;const F=n=>{W.value.set(n.clientX-window.innerWidth/2,-(n.clientY-window.innerHeight/2)),M=1},H=()=>{c.setSize(window.innerWidth,window.innerHeight),P(),z.value=f()*32},O=n=>{n.preventDefault(),m()};window.addEventListener("pointermove",F,{passive:!0}),window.addEventListener("resize",H),e.addEventListener("webglcontextlost",O);const q=n=>{R.value=n,M*=.985,b.value+=(M-b.value)*.06;const k=f(),g=a.getBoundingClientRect(),X=g.left+g.width/2,Y=g.top+g.height/2,j=Math.sin(n*1.35)*k*1.1,K=Math.sin(n*.85+2)*k*.35,Z=Math.sin(n*.6+1.2)*.012;d.position.set(X+K-window.innerWidth/2,-(Y+j-window.innerHeight/2),0),d.scale.set(a.offsetWidth||1,a.offsetHeight||1,1),d.rotation.z=-le(a)+Z,x.value=k*.8,c.render(C,p)};return o.ticker.add(q),{destroy:m}}}__dsExports.language={init:ce};

};

/* ---- index-Cyc007zT.js ---- */
__dsDefs.cyc=function(){"use strict";
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/language-WsAUZ4RO.js","assets/bills-B80SgPGk.js"])))=>i.map(i=>d[i]);
var Au=Object.defineProperty;var Cu=(h,t,r)=>t in h?Au(h,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):h[t]=r;var kt=(h,t,r)=>Cu(h,typeof t!="symbol"?t+"":t,r);const{_:Xl}=__dsRequire("entry");function Or(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function Oh(h,t){h.prototype=Object.create(t.prototype),h.prototype.constructor=h,h.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hn={duration:.5,overwrite:!1,delay:0},ja,Ke,ue,ir=1e8,ee=1/ir,wa=Math.PI*2,Eu=wa/4,Mu=0,Rh=Math.sqrt,Fu=Math.cos,Lu=Math.sin,Ge=function(t){return typeof t=="string"},ye=function(t){return typeof t=="function"},Nr=function(t){return typeof t=="number"},Ha=function(t){return typeof t>"u"},Pr=function(t){return typeof t=="object"},Ci=function(t){return t!==!1},Ua=function(){return typeof window<"u"},co=function(t){return ye(t)||Ge(t)},Dh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},oi=Array.isArray,Iu=/random\([^)]+\)/g,Ou=/,\s*/g,Gl=/(?:-?\.?\d|\.)+/gi,Vh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,aa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zh=/[+-]=-?[.\d]+/,Ru=/[^,'"\[\]\s]+/gi,Du=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ge,br,Sa,Ka,ji={},Do={},Nh,Bh=function(t){return(Do=an(t,ji))&&Li},Za=function(t,r){return console.warn("Invalid property",t,"set to",r,"Missing plugin? gsap.registerPlugin()")},Un=function(t,r){return!r&&console.warn(t)},qh=function(t,r){return t&&(ji[t]=r)&&Do&&(Do[t]=r)||ji},Kn=function(){return 0},Vu={suppressEvents:!0,isStart:!0,kill:!1},Po={suppressEvents:!0,kill:!1},zu={suppressEvents:!0},Qa={},os=[],Ta={},Wh,Bi={},la={},jl=30,Ao=[],Ja="",tl=function(t){var r=t[0],i,n;if(Pr(r)||ye(r)||(t=[t]),!(i=(r._gsap||{}).harness)){for(n=Ao.length;n--&&!Ao[n].targetTest(r););i=Ao[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new uf(t[n],i)))||t.splice(n,1);return t},Ps=function(t){return t._gsap||tl(rr(t))[0]._gsap},Yh=function(t,r,i){return(i=t[r])&&ye(i)?t[r]():Ha(i)&&t.getAttribute&&t.getAttribute(r)||i},Ei=function(t,r){return(t=t.split(",")).forEach(r)||t},we=function(t){return Math.round(t*1e5)/1e5||0},me=function(t){return Math.round(t*1e7)/1e7||0},Js=function(t,r){var i=r.charAt(0),n=parseFloat(r.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},Nu=function(t,r){for(var i=r.length,n=0;t.indexOf(r[n])<0&&++n<i;);return n<i},Vo=function(){var t=os.length,r=os.slice(0),i,n;for(Ta={},os.length=0,i=0;i<t;i++)n=r[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},el=function(t){return!!(t._initted||t._startAt||t.add)},$h=function(t,r,i,n){os.length&&!Ke&&Vo(),t.render(r,i,!!(Ke&&r<0&&el(t))),os.length&&!Ke&&Vo()},Xh=function(t){var r=parseFloat(t);return(r||r===0)&&(t+"").match(Ru).length<2?r:Ge(t)?t.trim():t},Gh=function(t){return t},Hi=function(t,r){for(var i in r)i in t||(t[i]=r[i]);return t},Bu=function(t){return function(r,i){for(var n in i)n in r||n==="duration"&&t||n==="ease"||(r[n]=i[n])}},an=function(t,r){for(var i in r)t[i]=r[i];return t},Hl=function h(t,r){for(var i in r)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Pr(r[i])?h(t[i]||(t[i]={}),r[i]):r[i]);return t},zo=function(t,r){var i={},n;for(n in t)n in r||(i[n]=t[n]);return i},Rn=function(t){var r=t.parent||ge,i=t.keyframes?Bu(oi(t.keyframes)):Hi;if(Ci(t.inherit))for(;r;)i(t,r.vars.defaults),r=r.parent||r._dp;return t},qu=function(t,r){for(var i=t.length,n=i===r.length;n&&i--&&t[i]===r[i];);return i<0},jh=function(t,r,i,n,a){var f=t[n],u;if(a)for(u=r[a];f&&f[a]>u;)f=f._prev;return f?(r._next=f._next,f._next=r):(r._next=t[i],t[i]=r),r._next?r._next._prev=r:t[n]=r,r._prev=f,r.parent=r._dp=t,r},jo=function(t,r,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=r._prev,f=r._next;a?a._next=f:t[i]===r&&(t[i]=f),f?f._prev=a:t[n]===r&&(t[n]=a),r._next=r._prev=r.parent=null},hs=function(t,r){t.parent&&(!r||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},As=function(t,r){if(t&&(!r||r._end>t._dur||r._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Wu=function(t){for(var r=t.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return t},Pa=function(t,r,i,n){return t._startAt&&(Ke?t._startAt.revert(Po):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(r,!0,n))},Yu=function h(t){return!t||t._ts&&h(t.parent)},Ul=function(t){return t._repeat?ln(t._tTime,t=t.duration()+t._rDelay)*t:0},ln=function(t,r){var i=Math.floor(t=me(t/r));return t&&i===t?i-1:i},No=function(t,r){return(t-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Ho=function(t){return t._end=me(t._start+(t._tDur/Math.abs(t._ts||t._rts||ee)||0))},Uo=function(t,r){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=me(i._time-(t._ts>0?r/t._ts:((t._dirty?t.totalDuration():t._tDur)-r)/-t._ts)),Ho(t),i._dirty||As(i,t)),t},Hh=function(t,r){var i;if((r._time||!r._dur&&r._initted||r._start<t._time&&(r._dur||!r.add))&&(i=No(t.rawTime(),r),(!r._dur||so(0,r.totalDuration(),i)-r._tTime>ee)&&r.render(i,!0)),As(t,r)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ee}},kr=function(t,r,i,n){return r.parent&&hs(r),r._start=me((Nr(i)?i:i||t!==ge?Ji(t,i,r):t._time)+r._delay),r._end=me(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),jh(t,r,"_first","_last",t._sort?"_start":0),Aa(r)||(t._recent=r),n||Hh(t,r),t._ts<0&&Uo(t,t._tTime),t},Uh=function(t,r){return(ji.ScrollTrigger||Za("scrollTrigger",r))&&ji.ScrollTrigger.create(r,t)},Kh=function(t,r,i,n,a){if(rl(t,r,a),!t._initted)return 1;if(!i&&t._pt&&!Ke&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Wh!==Wi.frame)return os.push(t),t._lazy=[a,n],1},$u=function h(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||h(r))},Aa=function(t){var r=t.data;return r==="isFromStart"||r==="isStart"},Xu=function(t,r,i,n){var a=t.ratio,f=r<0||!r&&(!t._start&&$u(t)&&!(!t._initted&&Aa(t))||(t._ts<0||t._dp._ts<0)&&!Aa(t))?0:1,u=t._rDelay,d=0,m,y,w;if(u&&t._repeat&&(d=so(0,t._tDur,r),y=ln(d,u),t._yoyo&&y&1&&(f=1-f),y!==ln(t._tTime,u)&&(a=1-f,t.vars.repeatRefresh&&t._initted&&t.invalidate())),f!==a||Ke||n||t._zTime===ee||!r&&t._zTime){if(!t._initted&&Kh(t,r,n,i,d))return;for(w=t._zTime,t._zTime=r||(i?ee:0),i||(i=r&&!w),t.ratio=f,t._from&&(f=1-f),t._time=0,t._tTime=d,m=t._pt;m;)m.r(f,m.d),m=m._next;r<0&&Pa(t,r,i,!0),t._onUpdate&&!i&&$i(t,"onUpdate"),d&&t._repeat&&!i&&t.parent&&$i(t,"onRepeat"),(r>=t._tDur||r<0)&&t.ratio===f&&(f&&hs(t,1),!i&&!Ke&&($i(t,f?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=r)},Gu=function(t,r,i){var n;if(i>r)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>r)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<r)return n;n=n._prev}},hn=function(t,r,i,n){var a=t._repeat,f=me(r)||0,u=t._tTime/t._tDur;return u&&!n&&(t._time*=f/t._dur),t._dur=f,t._tDur=a?a<0?1e10:me(f*(a+1)+t._rDelay*a):f,u>0&&!n&&Uo(t,t._tTime=t._tDur*u),t.parent&&Ho(t),i||As(t.parent,t),t},Kl=function(t){return t instanceof Ai?As(t):hn(t,t._dur)},ju={_start:0,endTime:Kn,totalDuration:Kn},Ji=function h(t,r,i){var n=t.labels,a=t._recent||ju,f=t.duration()>=ir?a.endTime(!1):t._dur,u,d,m;return Ge(r)&&(isNaN(r)||r in n)?(d=r.charAt(0),m=r.substr(-1)==="%",u=r.indexOf("="),d==="<"||d===">"?(u>=0&&(r=r.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(r.substr(1))||0)*(m?(u<0?a:i).totalDuration()/100:1)):u<0?(r in n||(n[r]=f),n[r]):(d=parseFloat(r.charAt(u-1)+r.substr(u+1)),m&&i&&(d=d/100*(oi(i)?i[0]:i).totalDuration()),u>1?h(t,r.substr(0,u-1),i)+d:f+d)):r==null?f:+r},Dn=function(t,r,i){var n=Nr(r[1]),a=(n?2:1)+(t<2?0:1),f=r[a],u,d;if(n&&(f.duration=r[1]),f.parent=i,t){for(u=f,d=i;d&&!("immediateRender"in u);)u=d.vars.defaults||{},d=Ci(d.vars.inherit)&&d.parent;f.immediateRender=Ci(u.immediateRender),t<2?f.runBackwards=1:f.startAt=r[a-1]}return new Ce(r[0],f,r[a+1])},ps=function(t,r){return t||t===0?r(t):r},so=function(t,r,i){return i<t?t:i>r?r:i},si=function(t,r){return!Ge(t)||!(r=Du.exec(t))?"":r[1]},Hu=function(t,r,i){return ps(i,function(n){return so(t,r,n)})},Ca=[].slice,Zh=function(t,r){return t&&Pr(t)&&"length"in t&&(!r&&!t.length||t.length-1 in t&&Pr(t[0]))&&!t.nodeType&&t!==br},Uu=function(t,r,i){return i===void 0&&(i=[]),t.forEach(function(n){var a;return Ge(n)&&!r||Zh(n,1)?(a=i).push.apply(a,rr(n)):i.push(n)})||i},rr=function(t,r,i){return ue&&!r&&ue.selector?ue.selector(t):Ge(t)&&!i&&(Sa||!fn())?Ca.call((r||Ka).querySelectorAll(t),0):oi(t)?Uu(t,i):Zh(t)?Ca.call(t,0):t?[t]:[]},Ea=function(t){return t=rr(t)[0]||Un("Invalid scope")||{},function(r){var i=t.current||t.nativeElement||t;return rr(r,i.querySelectorAll?i:i===t?Un("Invalid scope")||Ka.createElement("div"):t)}},Qh=function(t){return t.sort(function(){return .5-Math.random()})},Jh=function(t){if(ye(t))return t;var r=Pr(t)?t:{each:t},i=Cs(r.ease),n=r.from||0,a=parseFloat(r.base)||0,f={},u=n>0&&n<1,d=isNaN(n)||u,m=r.axis,y=n,w=n;return Ge(n)?y=w={center:.5,edges:.5,end:1}[n]||0:!u&&d&&(y=n[0],w=n[1]),function(C,S,F){var A=(F||r).length,W=f[A],J,Q,U,K,Z,rt,tt,at,it;if(!W){if(it=r.grid==="auto"?0:(r.grid||[1,ir])[1],!it){for(tt=-ir;tt<(tt=F[it++].getBoundingClientRect().left)&&it<A;);it<A&&it--}for(W=f[A]=[],J=d?Math.min(it,A)*y-.5:n%it,Q=it===ir?0:d?A*w/it-.5:n/it|0,tt=0,at=ir,rt=0;rt<A;rt++)U=rt%it-J,K=Q-(rt/it|0),W[rt]=Z=m?Math.abs(m==="y"?K:U):Rh(U*U+K*K),Z>tt&&(tt=Z),Z<at&&(at=Z);n==="random"&&Qh(W),W.max=tt-at,W.min=at,W.v=A=(parseFloat(r.amount)||parseFloat(r.each)*(it>A?A-1:m?m==="y"?A/it:it:Math.max(it,A/it))||0)*(n==="edges"?-1:1),W.b=A<0?a-A:a,W.u=si(r.amount||r.each)||0,i=i&&A<0?lc(i):i}return A=(W[C]-W.min)/W.max||0,me(W.b+(i?i(A):A)*W.v)+W.u}},Ma=function(t){var r=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=me(Math.round(parseFloat(i)/t)*t*r);return(n-n%1)/r+(Nr(i)?0:si(i))}},tf=function(t,r){var i=oi(t),n,a;return!i&&Pr(t)&&(n=i=t.radius||ir,t.values?(t=rr(t.values),(a=!Nr(t[0]))&&(n*=n)):t=Ma(t.increment)),ps(r,i?ye(t)?function(f){return a=t(f),Math.abs(a-f)<=n?a:f}:function(f){for(var u=parseFloat(a?f.x:f),d=parseFloat(a?f.y:0),m=ir,y=0,w=t.length,C,S;w--;)a?(C=t[w].x-u,S=t[w].y-d,C=C*C+S*S):C=Math.abs(t[w]-u),C<m&&(m=C,y=w);return y=!n||m<=n?t[y]:f,a||y===f||Nr(f)?y:y+si(f)}:Ma(t))},ef=function(t,r,i,n){return ps(oi(t)?!r:i===!0?!!(i=0):!n,function(){return oi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(r-t+i*.99))/i)*i*n)/n})},Ku=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(n){return r.reduce(function(a,f){return f(a)},n)}},Zu=function(t,r){return function(i){return t(parseFloat(i))+(r||si(i))}},Qu=function(t,r,i){return sf(t,r,0,1,i)},rf=function(t,r,i){return ps(i,function(n){return t[~~r(n)]})},Ju=function h(t,r,i){var n=r-t;return oi(t)?rf(t,h(0,t.length),r):ps(i,function(a){return(n+(a-t)%n)%n+t})},tc=function h(t,r,i){var n=r-t,a=n*2;return oi(t)?rf(t,h(0,t.length-1),r):ps(i,function(f){return f=(a+(f-t)%a)%a||0,t+(f>n?a-f:f)})},Zn=function(t){return t.replace(Iu,function(r){var i=r.indexOf("[")+1,n=r.substring(i||7,i?r.indexOf("]"):r.length-1).split(Ou);return ef(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},sf=function(t,r,i,n,a){var f=r-t,u=n-i;return ps(a,function(d){return i+((d-t)/f*u||0)})},ec=function h(t,r,i,n){var a=isNaN(t+r)?0:function(S){return(1-S)*t+S*r};if(!a){var f=Ge(t),u={},d,m,y,w,C;if(i===!0&&(n=1)&&(i=null),f)t={p:t},r={p:r};else if(oi(t)&&!oi(r)){for(y=[],w=t.length,C=w-2,m=1;m<w;m++)y.push(h(t[m-1],t[m]));w--,a=function(F){F*=w;var A=Math.min(C,~~F);return y[A](F-A)},i=r}else n||(t=an(oi(t)?[]:{},t));if(!y){for(d in r)il.call(u,t,d,"get",r[d]);a=function(F){return ol(F,u)||(f?t.p:t)}}}return ps(i,a)},Zl=function(t,r,i){var n=t.labels,a=ir,f,u,d;for(f in n)u=n[f]-r,u<0==!!i&&u&&a>(u=Math.abs(u))&&(d=f,a=u);return d},$i=function(t,r,i){var n=t.vars,a=n[r],f=ue,u=t._ctx,d,m,y;if(a)return d=n[r+"Params"],m=n.callbackScope||t,i&&os.length&&Vo(),u&&(ue=u),y=d?a.apply(m,d):a.call(m),ue=f,y},An=function(t){return hs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ke),t.progress()<1&&$i(t,"onInterrupt"),t},Zs,nf=[],of=function(t){if(t)if(t=!t.name&&t.default||t,Ua()||t.headless){var r=t.name,i=ye(t),n=r&&!i&&t.init?function(){this._props=[]}:t,a={init:Kn,render:ol,add:il,kill:_c,modifier:vc,rawVars:0},f={targetTest:0,get:0,getSetter:nl,aliases:{},register:0};if(fn(),t!==n){if(Bi[r])return;Hi(n,Hi(zo(t,a),f)),an(n.prototype,an(a,zo(t,f))),Bi[n.prop=r]=n,t.targetTest&&(Ao.push(n),Qa[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}qh(r,n),t.register&&t.register(Li,n,Mi)}else nf.push(t)},te=255,Cn={aqua:[0,te,te],lime:[0,te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,te],navy:[0,0,128],white:[te,te,te],olive:[128,128,0],yellow:[te,te,0],orange:[te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[te,0,0],pink:[te,192,203],cyan:[0,te,te],transparent:[te,te,te,0]},ha=function(t,r,i){return t+=t<0?1:t>1?-1:0,(t*6<1?r+(i-r)*t*6:t<.5?i:t*3<2?r+(i-r)*(2/3-t)*6:r)*te+.5|0},af=function(t,r,i){var n=t?Nr(t)?[t>>16,t>>8&te,t&te]:0:Cn.black,a,f,u,d,m,y,w,C,S,F;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Cn[t])n=Cn[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),f=t.charAt(2),u=t.charAt(3),t="#"+a+a+f+f+u+u+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&te,n&te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&te,t&te]}else if(t.substr(0,3)==="hsl"){if(n=F=t.match(Gl),!r)d=+n[0]%360/360,m=+n[1]/100,y=+n[2]/100,f=y<=.5?y*(m+1):y+m-y*m,a=y*2-f,n.length>3&&(n[3]*=1),n[0]=ha(d+1/3,a,f),n[1]=ha(d,a,f),n[2]=ha(d-1/3,a,f);else if(~t.indexOf("="))return n=t.match(Vh),i&&n.length<4&&(n[3]=1),n}else n=t.match(Gl)||Cn.transparent;n=n.map(Number)}return r&&!F&&(a=n[0]/te,f=n[1]/te,u=n[2]/te,w=Math.max(a,f,u),C=Math.min(a,f,u),y=(w+C)/2,w===C?d=m=0:(S=w-C,m=y>.5?S/(2-w-C):S/(w+C),d=w===a?(f-u)/S+(f<u?6:0):w===f?(u-a)/S+2:(a-f)/S+4,d*=60),n[0]=~~(d+.5),n[1]=~~(m*100+.5),n[2]=~~(y*100+.5)),i&&n.length<4&&(n[3]=1),n},lf=function(t){var r=[],i=[],n=-1;return t.split(as).forEach(function(a){var f=a.match(Ks)||[];r.push.apply(r,f),i.push(n+=f.length+1)}),r.c=i,r},Ql=function(t,r,i){var n="",a=(t+n).match(as),f=r?"hsla(":"rgba(",u=0,d,m,y,w;if(!a)return t;if(a=a.map(function(C){return(C=af(C,r,1))&&f+(r?C[0]+","+C[1]+"%,"+C[2]+"%,"+C[3]:C.join(","))+")"}),i&&(y=lf(t),d=i.c,d.join(n)!==y.c.join(n)))for(m=t.replace(as,"1").split(Ks),w=m.length-1;u<w;u++)n+=m[u]+(~d.indexOf(u)?a.shift()||f+"0,0,0,0)":(y.length?y:a.length?a:i).shift());if(!m)for(m=t.split(as),w=m.length-1;u<w;u++)n+=m[u]+a[u];return n+m[w]},as=(function(){var h="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Cn)h+="|"+t+"\\b";return new RegExp(h+")","gi")})(),ic=/hsl[a]?\(/,hf=function(t){var r=t.join(" "),i;if(as.lastIndex=0,as.test(r))return i=ic.test(r),t[1]=Ql(t[1],i),t[0]=Ql(t[0],i,lf(t[1])),!0},Qn,Wi=(function(){var h=Date.now,t=500,r=33,i=h(),n=i,a=1e3/240,f=a,u=[],d,m,y,w,C,S,F=function A(W){var J=h()-n,Q=W===!0,U,K,Z,rt;if((J>t||J<0)&&(i+=J-r),n+=J,Z=n-i,U=Z-f,(U>0||Q)&&(rt=++w.frame,C=Z-w.time*1e3,w.time=Z=Z/1e3,f+=U+(U>=a?4:a-U),K=1),Q||(d=m(A)),K)for(S=0;S<u.length;S++)u[S](Z,C,rt,W)};return w={time:0,frame:0,tick:function(){F(!0)},deltaRatio:function(W){return C/(1e3/(W||60))},wake:function(){Nh&&(!Sa&&Ua()&&(br=Sa=window,Ka=br.document||{},ji.gsap=Li,(br.gsapVersions||(br.gsapVersions=[])).push(Li.version),Bh(Do||br.GreenSockGlobals||!br.gsap&&br||{}),nf.forEach(of)),y=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&w.sleep(),m=y||function(W){return setTimeout(W,f-w.time*1e3+1|0)},Qn=1,F(2))},sleep:function(){(y?cancelAnimationFrame:clearTimeout)(d),Qn=0,m=Kn},lagSmoothing:function(W,J){t=W||1/0,r=Math.min(J||33,t)},fps:function(W){a=1e3/(W||240),f=w.time*1e3+a},add:function(W,J,Q){var U=J?function(K,Z,rt,tt){W(K,Z,rt,tt),w.remove(U)}:W;return w.remove(W),u[Q?"unshift":"push"](U),fn(),U},remove:function(W,J){~(J=u.indexOf(W))&&u.splice(J,1)&&S>=J&&S--},_listeners:u},w})(),fn=function(){return!Qn&&Wi.wake()},$t={},rc=/^[\d.\-M][\d.\-,\s]/,sc=/["']/g,nc=function(t){for(var r={},i=t.substr(1,t.length-3).split(":"),n=i[0],a=1,f=i.length,u,d,m;a<f;a++)d=i[a],u=a!==f-1?d.lastIndexOf(","):d.length,m=d.substr(0,u),r[n]=isNaN(m)?m.replace(sc,"").trim():+m,n=d.substr(u+1).trim();return r},oc=function(t){var r=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",r);return t.substring(r,~n&&n<i?t.indexOf(")",i+1):i)},ac=function(t){var r=(t+"").split("("),i=$t[r[0]];return i&&r.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[nc(r[1])]:oc(t).split(",").map(Xh)):$t._CE&&rc.test(t)?$t._CE("",t):i},lc=function(t){return function(r){return 1-t(1-r)}},Cs=function(t,r){return t&&(ye(t)?t:$t[t]||ac(t))||r},Ds=function(t,r,i,n){i===void 0&&(i=function(d){return 1-r(1-d)}),n===void 0&&(n=function(d){return d<.5?r(d*2)/2:1-r((1-d)*2)/2});var a={easeIn:r,easeOut:i,easeInOut:n},f;return Ei(t,function(u){$t[u]=ji[u]=a,$t[f=u.toLowerCase()]=i;for(var d in a)$t[f+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=$t[u+"."+d]=a[d]}),a},ff=function(t){return function(r){return r<.5?(1-t(1-r*2))/2:.5+t((r-.5)*2)/2}},fa=function h(t,r,i){var n=r>=1?r:1,a=(i||(t?.3:.45))/(r<1?r:1),f=a/wa*(Math.asin(1/n)||0),u=function(y){return y===1?1:n*Math.pow(2,-10*y)*Lu((y-f)*a)+1},d=t==="out"?u:t==="in"?function(m){return 1-u(1-m)}:ff(u);return a=wa/a,d.config=function(m,y){return h(t,m,y)},d},ua=function h(t,r){r===void 0&&(r=1.70158);var i=function(f){return f?--f*f*((r+1)*f+r)+1:0},n=t==="out"?i:t==="in"?function(a){return 1-i(1-a)}:ff(i);return n.config=function(a){return h(t,a)},n};Ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(h,t){var r=t<5?t+1:t;Ds(h+",Power"+(r-1),t?function(i){return Math.pow(i,r)}:function(i){return i},function(i){return 1-Math.pow(1-i,r)},function(i){return i<.5?Math.pow(i*2,r)/2:1-Math.pow((1-i)*2,r)/2})});$t.Linear.easeNone=$t.none=$t.Linear.easeIn;Ds("Elastic",fa("in"),fa("out"),fa());(function(h,t){var r=1/t,i=2*r,n=2.5*r,a=function(u){return u<r?h*u*u:u<i?h*Math.pow(u-1.5/t,2)+.75:u<n?h*(u-=2.25/t)*u+.9375:h*Math.pow(u-2.625/t,2)+.984375};Ds("Bounce",function(f){return 1-a(1-f)},a)})(7.5625,2.75);Ds("Expo",function(h){return Math.pow(2,10*(h-1))*h+h*h*h*h*h*h*(1-h)});Ds("Circ",function(h){return-(Rh(1-h*h)-1)});Ds("Sine",function(h){return h===1?1:-Fu(h*Eu)+1});Ds("Back",ua("in"),ua("out"),ua());$t.SteppedEase=$t.steps=ji.SteppedEase={config:function(t,r){t===void 0&&(t=1);var i=1/t,n=t+(r?0:1),a=r?1:0,f=1-ee;return function(u){return((n*so(0,f,u)|0)+a)*i}}};Hn.ease=$t["quad.out"];Ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(h){return Ja+=h+","+h+"Params,"});var uf=function(t,r){this.id=Mu++,t._gsap=this,this.target=t,this.harness=r,this.get=r?r.get:Yh,this.set=r?r.getSetter:nl},Jn=(function(){function h(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,hn(this,+r.duration,1,1),this.data=r.data,ue&&(this._ctx=ue,ue.data.push(this)),Qn||Wi.wake()}var t=h.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,hn(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(fn(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Uo(this,i),!a._dp||a.parent||Hh(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&kr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ee||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),$h(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ul(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ul(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,n):this._repeat?ln(this._tTime,a)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-ee?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?No(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ee?0:this._rts,this.totalTime(so(-Math.abs(this._delay),this.totalDuration(),a),n!==!1),Ho(this),Wu(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ee&&(this._tTime-=ee)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=me(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&kr(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?No(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=zu);var n=Ke;return Ke=i,el(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ke=n,this},t.globalTime=function(i){for(var n=this,a=arguments.length?i:n.rawTime();n;)a=n._start+a/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Kl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Kl(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Ji(this,i),Ci(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Ci(n)),this._dur||(this._zTime=-ee),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ee,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=n&&a<this.endTime(!0)-ee)},t.eventCallback=function(i,n,a){var f=this.vars;return arguments.length>1?(n?(f[i]=n,a&&(f[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=n)):delete f[i],this):f[i]},t.then=function(i){var n=this,a=n._prom;return new Promise(function(f){var u=ye(i)?i:Gh,d=function(){var y=n.then;n.then=null,a&&a(),ye(u)&&(u=u(n))&&(u.then||u===n)&&(n.then=y),f(u),n.then=y};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?d():n._prom=d})},t.kill=function(){An(this)},h})();Hi(Jn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ee,_prom:0,_ps:!1,_rts:1});var Ai=(function(h){Oh(t,h);function t(i,n){var a;return i===void 0&&(i={}),a=h.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=Ci(i.sortChildren),ge&&kr(i.parent||ge,Or(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Uh(Or(a),i.scrollTrigger),a}var r=t.prototype;return r.to=function(n,a,f){return Dn(0,arguments,this),this},r.from=function(n,a,f){return Dn(1,arguments,this),this},r.fromTo=function(n,a,f,u){return Dn(2,arguments,this),this},r.set=function(n,a,f){return a.duration=0,a.parent=this,Rn(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Ce(n,a,Ji(this,f),1),this},r.call=function(n,a,f){return kr(this,Ce.delayedCall(0,n,a),f)},r.staggerTo=function(n,a,f,u,d,m,y){return f.duration=a,f.stagger=f.stagger||u,f.onComplete=m,f.onCompleteParams=y,f.parent=this,new Ce(n,f,Ji(this,d)),this},r.staggerFrom=function(n,a,f,u,d,m,y){return f.runBackwards=1,Rn(f).immediateRender=Ci(f.immediateRender),this.staggerTo(n,a,f,u,d,m,y)},r.staggerFromTo=function(n,a,f,u,d,m,y,w){return u.startAt=f,Rn(u).immediateRender=Ci(u.immediateRender),this.staggerTo(n,a,u,d,m,y,w)},r.render=function(n,a,f){var u=this._time,d=this._dirty?this.totalDuration():this._tDur,m=this._dur,y=n<=0?0:me(n),w=this._zTime<0!=n<0&&(this._initted||!m),C,S,F,A,W,J,Q,U,K,Z,rt,tt;if(this!==ge&&y>d&&n>=0&&(y=d),y!==this._tTime||f||w){if(u!==this._time&&m&&(y+=this._time-u,n+=this._time-u),C=y,K=this._start,U=this._ts,J=!U,w&&(m||(u=this._zTime),(n||!a)&&(this._zTime=n)),this._repeat){if(rt=this._yoyo,W=m+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(W*100+n,a,f);if(C=me(y%W),y===d?(A=this._repeat,C=m):(Z=me(y/W),A=~~Z,A&&A===Z&&(C=m,A--),C>m&&(C=m)),Z=ln(this._tTime,W),!u&&this._tTime&&Z!==A&&this._tTime-Z*W-this._dur<=0&&(Z=A),rt&&A&1&&(C=m-C,tt=1),A!==Z&&!this._lock){var at=rt&&Z&1,it=at===(rt&&A&1);if(A<Z&&(at=!at),u=at?0:y%m?m:y,this._lock=1,this.render(u||(tt?0:me(A*W)),a,!m)._lock=0,this._tTime=y,!a&&this.parent&&$i(this,"onRepeat"),this.vars.repeatRefresh&&!tt&&(this.invalidate()._lock=1,Z=A),u&&u!==this._time||J!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,d=this._tDur,it&&(this._lock=2,u=at?m:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!tt&&this.invalidate()),this._lock=0,!this._ts&&!J)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(Q=Gu(this,me(u),me(C)),Q&&(y-=C-(C=Q._start))),this._tTime=y,this._time=C,this._act=!!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,u=0),!u&&y&&m&&!a&&!Z&&($i(this,"onStart"),this._tTime!==y))return this;if(C>=u&&n>=0)for(S=this._first;S;){if(F=S._next,(S._act||C>=S._start)&&S._ts&&Q!==S){if(S.parent!==this)return this.render(n,a,f);if(S.render(S._ts>0?(C-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(C-S._start)*S._ts,a,f),C!==this._time||!this._ts&&!J){Q=0,F&&(y+=this._zTime=-ee);break}}S=F}else{S=this._last;for(var st=n<0?n:C;S;){if(F=S._prev,(S._act||st<=S._end)&&S._ts&&Q!==S){if(S.parent!==this)return this.render(n,a,f);if(S.render(S._ts>0?(st-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(st-S._start)*S._ts,a,f||Ke&&el(S)),C!==this._time||!this._ts&&!J){Q=0,F&&(y+=this._zTime=st?-ee:ee);break}}S=F}}if(Q&&!a&&(this.pause(),Q.render(C>=u?0:-ee)._zTime=C>=u?1:-1,this._ts))return this._start=K,Ho(this),this.render(n,a,f);this._onUpdate&&!a&&$i(this,"onUpdate",!0),(y===d&&this._tTime>=this.totalDuration()||!y&&u)&&(K===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((n||!m)&&(y===d&&this._ts>0||!y&&this._ts<0)&&hs(this,1),!a&&!(n<0&&!u)&&(y||u||!d)&&($i(this,y===d&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(y<d&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(n,a){var f=this;if(Nr(a)||(a=Ji(this,a,n)),!(n instanceof Jn)){if(oi(n))return n.forEach(function(u){return f.add(u,a)}),this;if(Ge(n))return this.addLabel(n,a);if(ye(n))n=Ce.delayedCall(0,n);else return this}return this!==n?kr(this,n,a):this},r.getChildren=function(n,a,f,u){n===void 0&&(n=!0),a===void 0&&(a=!0),f===void 0&&(f=!0),u===void 0&&(u=-ir);for(var d=[],m=this._first;m;)m._start>=u&&(m instanceof Ce?a&&d.push(m):(f&&d.push(m),n&&d.push.apply(d,m.getChildren(!0,a,f)))),m=m._next;return d},r.getById=function(n){for(var a=this.getChildren(1,1,1),f=a.length;f--;)if(a[f].vars.id===n)return a[f]},r.remove=function(n){return Ge(n)?this.removeLabel(n):ye(n)?this.killTweensOf(n):(n.parent===this&&jo(this,n),n===this._recent&&(this._recent=this._last),As(this))},r.totalTime=function(n,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=me(Wi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),h.prototype.totalTime.call(this,n,a),this._forcing=0,this):this._tTime},r.addLabel=function(n,a){return this.labels[n]=Ji(this,a),this},r.removeLabel=function(n){return delete this.labels[n],this},r.addPause=function(n,a,f){var u=Ce.delayedCall(0,a||Kn,f);return u.data="isPause",this._hasPause=1,kr(this,u,Ji(this,n))},r.removePause=function(n){var a=this._first;for(n=Ji(this,n);a;)a._start===n&&a.data==="isPause"&&hs(a),a=a._next},r.killTweensOf=function(n,a,f){for(var u=this.getTweensOf(n,f),d=u.length;d--;)es!==u[d]&&u[d].kill(n,a);return this},r.getTweensOf=function(n,a){for(var f=[],u=rr(n),d=this._first,m=Nr(a),y;d;)d instanceof Ce?Nu(d._targets,u)&&(m?(!es||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&f.push(d):(y=d.getTweensOf(u,a)).length&&f.push.apply(f,y),d=d._next;return f},r.tweenTo=function(n,a){a=a||{};var f=this,u=Ji(f,n),d=a,m=d.startAt,y=d.onStart,w=d.onStartParams,C=d.immediateRender,S,F=Ce.to(f,Hi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:a.duration||Math.abs((u-(m&&"time"in m?m.time:f._time))/f.timeScale())||ee,onStart:function(){if(f.pause(),!S){var W=a.duration||Math.abs((u-(m&&"time"in m?m.time:f._time))/f.timeScale());F._dur!==W&&hn(F,W,0,1).render(F._time,!0,!0),S=1}y&&y.apply(F,w||[])}},a));return C?F.render(0):F},r.tweenFromTo=function(n,a,f){return this.tweenTo(a,Hi({startAt:{time:Ji(this,n)}},f))},r.recent=function(){return this._recent},r.nextLabel=function(n){return n===void 0&&(n=this._time),Zl(this,Ji(this,n))},r.previousLabel=function(n){return n===void 0&&(n=this._time),Zl(this,Ji(this,n),1)},r.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ee)},r.shiftChildren=function(n,a,f){f===void 0&&(f=0);var u=this._first,d=this.labels,m;for(n=me(n);u;)u._start>=f&&(u._start+=n,u._end+=n),u=u._next;if(a)for(m in d)d[m]>=f&&(d[m]+=n);return As(this)},r.invalidate=function(n){var a=this._first;for(this._lock=0;a;)a.invalidate(n),a=a._next;return h.prototype.invalidate.call(this,n)},r.clear=function(n){n===void 0&&(n=!0);for(var a=this._first,f;a;)f=a._next,this.remove(a),a=f;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),As(this)},r.totalDuration=function(n){var a=0,f=this,u=f._last,d=ir,m,y,w;if(arguments.length)return f.timeScale((f._repeat<0?f.duration():f.totalDuration())/(f.reversed()?-n:n));if(f._dirty){for(w=f.parent;u;)m=u._prev,u._dirty&&u.totalDuration(),y=u._start,y>d&&f._sort&&u._ts&&!f._lock?(f._lock=1,kr(f,u,y-u._delay,1)._lock=0):d=y,y<0&&u._ts&&(a-=y,(!w&&!f._dp||w&&w.smoothChildTiming)&&(f._start+=me(y/f._ts),f._time-=y,f._tTime-=y),f.shiftChildren(-y,!1,-1/0),d=0),u._end>a&&u._ts&&(a=u._end),u=m;hn(f,f===ge&&f._time>a?f._time:a,1,1),f._dirty=0}return f._tDur},t.updateRoot=function(n){if(ge._ts&&($h(ge,No(n,ge)),Wh=Wi.frame),Wi.frame>=jl){jl+=Gi.autoSleep||120;var a=ge._first;if((!a||!a._ts)&&Gi.autoSleep&&Wi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Wi.sleep()}}},t})(Jn);Hi(Ai.prototype,{_lock:0,_hasPause:0,_forcing:0});var hc=function(t,r,i,n,a,f,u){var d=new Mi(this._pt,t,r,0,1,vf,null,a),m=0,y=0,w,C,S,F,A,W,J,Q;for(d.b=i,d.e=n,i+="",n+="",(J=~n.indexOf("random("))&&(n=Zn(n)),f&&(Q=[i,n],f(Q,t,r),i=Q[0],n=Q[1]),C=i.match(aa)||[];w=aa.exec(n);)F=w[0],A=n.substring(m,w.index),S?S=(S+1)%5:A.substr(-5)==="rgba("&&(S=1),F!==C[y++]&&(W=parseFloat(C[y-1])||0,d._pt={_next:d._pt,p:A||y===1?A:",",s:W,c:F.charAt(1)==="="?Js(W,F)-W:parseFloat(F)-W,m:S&&S<4?Math.round:0},m=aa.lastIndex);return d.c=m<n.length?n.substring(m,n.length):"",d.fp=u,(zh.test(n)||J)&&(d.e=0),this._pt=d,d},il=function(t,r,i,n,a,f,u,d,m,y){ye(n)&&(n=n(a||0,t,f));var w=t[r],C=i!=="get"?i:ye(w)?m?t[r.indexOf("set")||!ye(t["get"+r.substr(3)])?r:"get"+r.substr(3)](m):t[r]():w,S=ye(w)?m?dc:mf:sl,F;if(Ge(n)&&(~n.indexOf("random(")&&(n=Zn(n)),n.charAt(1)==="="&&(F=Js(C,n)+(si(C)||0),(F||F===0)&&(n=F))),!y||C!==n||Fa)return!isNaN(C*n)&&n!==""?(F=new Mi(this._pt,t,r,+C||0,n-(C||0),typeof w=="boolean"?gc:gf,0,S),m&&(F.fp=m),u&&F.modifier(u,this,t),this._pt=F):(!w&&!(r in t)&&Za(r,n),hc.call(this,t,r,C,n,S,d||Gi.stringFilter,m))},fc=function(t,r,i,n,a){if(ye(t)&&(t=Vn(t,a,r,i,n)),!Pr(t)||t.style&&t.nodeType||oi(t)||Dh(t))return Ge(t)?Vn(t,a,r,i,n):t;var f={},u;for(u in t)f[u]=Vn(t[u],a,r,i,n);return f},cf=function(t,r,i,n,a,f){var u,d,m,y;if(Bi[t]&&(u=new Bi[t]).init(a,u.rawVars?r[t]:fc(r[t],n,a,f,i),i,n,f)!==!1&&(i._pt=d=new Mi(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==Zs))for(m=i._ptLookup[i._targets.indexOf(a)],y=u._props.length;y--;)m[u._props[y]]=d;return u},es,Fa,rl=function h(t,r,i){var n=t.vars,a=n.ease,f=n.startAt,u=n.immediateRender,d=n.lazy,m=n.onUpdate,y=n.runBackwards,w=n.yoyoEase,C=n.keyframes,S=n.autoRevert,F=t._dur,A=t._startAt,W=t._targets,J=t.parent,Q=J&&J.data==="nested"?J.vars.targets:W,U=t._overwrite==="auto"&&!ja,K=t.timeline,Z=n.easeReverse||w,rt,tt,at,it,st,Ot,ut,qt,It,Wt,Yt,Tt,Mt;if(K&&(!C||!a)&&(a="none"),t._ease=Cs(a,Hn.ease),t._rEase=Z&&(Cs(Z)||t._ease),t._from=!K&&!!n.runBackwards,t._from&&(t.ratio=1),!K||C&&!n.stagger){if(qt=W[0]?Ps(W[0]).harness:0,Tt=qt&&n[qt.prop],rt=zo(n,Qa),A&&(A._zTime<0&&A.progress(1),r<0&&y&&u&&!S?A.render(-1,!0):A.revert(y&&F?Po:Vu),A._lazy=0),f){if(hs(t._startAt=Ce.set(W,Hi({data:"isStart",overwrite:!1,parent:J,immediateRender:!0,lazy:!A&&Ci(d),startAt:null,delay:0,onUpdate:m&&function(){return $i(t,"onUpdate")},stagger:0},f))),t._startAt._dp=0,t._startAt._sat=t,r<0&&(Ke||!u&&!S)&&t._startAt.revert(Po),u&&F&&r<=0&&i<=0){r&&(t._zTime=r);return}}else if(y&&F&&!A){if(r&&(u=!1),at=Hi({overwrite:!1,data:"isFromStart",lazy:u&&!A&&Ci(d),immediateRender:u,stagger:0,parent:J},rt),Tt&&(at[qt.prop]=Tt),hs(t._startAt=Ce.set(W,at)),t._startAt._dp=0,t._startAt._sat=t,r<0&&(Ke?t._startAt.revert(Po):t._startAt.render(-1,!0)),t._zTime=r,!u)h(t._startAt,ee,ee);else if(!r)return}for(t._pt=t._ptCache=0,d=F&&Ci(d)||d&&!F,tt=0;tt<W.length;tt++){if(st=W[tt],ut=st._gsap||tl(W)[tt]._gsap,t._ptLookup[tt]=Wt={},Ta[ut.id]&&os.length&&Vo(),Yt=Q===W?tt:Q.indexOf(st),qt&&(It=new qt).init(st,Tt||rt,t,Yt,Q)!==!1&&(t._pt=it=new Mi(t._pt,st,It.name,0,1,It.render,It,0,It.priority),It._props.forEach(function(jt){Wt[jt]=it}),It.priority&&(Ot=1)),!qt||Tt)for(at in rt)Bi[at]&&(It=cf(at,rt,t,Yt,st,Q))?It.priority&&(Ot=1):Wt[at]=it=il.call(t,st,at,"get",rt[at],Yt,Q,0,n.stringFilter);t._op&&t._op[tt]&&t.kill(st,t._op[tt]),U&&t._pt&&(es=t,ge.killTweensOf(st,Wt,t.globalTime(r)),Mt=!t.parent,es=0),t._pt&&d&&(Ta[ut.id]=1)}Ot&&_f(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!Mt,C&&r<=0&&K.render(ir,!0,!0)},uc=function(t,r,i,n,a,f,u,d){var m=(t._pt&&t._ptCache||(t._ptCache={}))[r],y,w,C,S;if(!m)for(m=t._ptCache[r]=[],C=t._ptLookup,S=t._targets.length;S--;){if(y=C[S][r],y&&y.d&&y.d._pt)for(y=y.d._pt;y&&y.p!==r&&y.fp!==r;)y=y._next;if(!y)return Fa=1,t.vars[r]="+=0",rl(t,u),Fa=0,d?Un(r+" not eligible for reset. Try splitting into individual properties"):1;m.push(y)}for(S=m.length;S--;)w=m[S],y=w._pt||w,y.s=(n||n===0)&&!a?n:y.s+(n||0)+f*y.c,y.c=i-y.s,w.e&&(w.e=we(i)+si(w.e)),w.b&&(w.b=y.s+si(w.b))},cc=function(t,r){var i=t[0]?Ps(t[0]).harness:0,n=i&&i.aliases,a,f,u,d;if(!n)return r;a=an({},r);for(f in n)if(f in a)for(d=n[f].split(","),u=d.length;u--;)a[d[u]]=a[f];return a},pc=function(t,r,i,n){var a=r.ease||n||"power1.inOut",f,u;if(oi(r))u=i[t]||(i[t]=[]),r.forEach(function(d,m){return u.push({t:m/(r.length-1)*100,v:d,e:a})});else for(f in r)u=i[f]||(i[f]=[]),f==="ease"||u.push({t:parseFloat(t),v:r[f],e:a})},Vn=function(t,r,i,n,a){return ye(t)?t.call(r,i,n,a):Ge(t)&&~t.indexOf("random(")?Zn(t):t},pf=Ja+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",df={};Ei(pf+",id,stagger,delay,duration,paused,scrollTrigger",function(h){return df[h]=1});var Ce=(function(h){Oh(t,h);function t(i,n,a,f){var u;typeof n=="number"&&(a.duration=n,n=a,a=null),u=h.call(this,f?n:Rn(n))||this;var d=u.vars,m=d.duration,y=d.delay,w=d.immediateRender,C=d.stagger,S=d.overwrite,F=d.keyframes,A=d.defaults,W=d.scrollTrigger,J=n.parent||ge,Q=(oi(i)||Dh(i)?Nr(i[0]):"length"in n)?[i]:rr(i),U,K,Z,rt,tt,at,it,st;if(u._targets=Q.length?tl(Q):Un("GSAP target "+i+" not found. https://gsap.com",!Gi.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=S,F||C||co(m)||co(y)){n=u.vars;var Ot=n.easeReverse||n.yoyoEase;if(U=u.timeline=new Ai({data:"nested",defaults:A||{},targets:J&&J.data==="nested"?J.vars.targets:Q}),U.kill(),U.parent=U._dp=Or(u),U._start=0,C||co(m)||co(y)){if(rt=Q.length,it=C&&Jh(C),Pr(C))for(tt in C)~pf.indexOf(tt)&&(st||(st={}),st[tt]=C[tt]);for(K=0;K<rt;K++)Z=zo(n,df),Z.stagger=0,Ot&&(Z.easeReverse=Ot),st&&an(Z,st),at=Q[K],Z.duration=+Vn(m,Or(u),K,at,Q),Z.delay=(+Vn(y,Or(u),K,at,Q)||0)-u._delay,!C&&rt===1&&Z.delay&&(u._delay=y=Z.delay,u._start+=y,Z.delay=0),U.to(at,Z,it?it(K,at,Q):0),U._ease=$t.none;U.duration()?m=y=0:u.timeline=0}else if(F){Rn(Hi(U.vars.defaults,{ease:"none"})),U._ease=Cs(F.ease||n.ease||"none");var ut=0,qt,It,Wt;if(oi(F))F.forEach(function(Yt){return U.to(Q,Yt,">")}),U.duration();else{Z={};for(tt in F)tt==="ease"||tt==="easeEach"||pc(tt,F[tt],Z,F.easeEach);for(tt in Z)for(qt=Z[tt].sort(function(Yt,Tt){return Yt.t-Tt.t}),ut=0,K=0;K<qt.length;K++)It=qt[K],Wt={ease:It.e,duration:(It.t-(K?qt[K-1].t:0))/100*m},Wt[tt]=It.v,U.to(Q,Wt,ut),ut+=Wt.duration;U.duration()<m&&U.to({},{duration:m-U.duration()})}}m||u.duration(m=U.duration())}else u.timeline=0;return S===!0&&!ja&&(es=Or(u),ge.killTweensOf(Q),es=0),kr(J,Or(u),a),n.reversed&&u.reverse(),n.paused&&u.paused(!0),(w||!m&&!F&&u._start===me(J._time)&&Ci(w)&&Yu(Or(u))&&J.data!=="nested")&&(u._tTime=-ee,u.render(Math.max(0,-y)||0)),W&&Uh(Or(u),W),u}var r=t.prototype;return r.render=function(n,a,f){var u=this._time,d=this._tDur,m=this._dur,y=n<0,w=n>d-ee&&!y?d:n<ee?0:n,C,S,F,A,W,J,Q,U;if(!m)Xu(this,n,a,f);else if(w!==this._tTime||!n||f||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==y||this._lazy){if(C=w,U=this.timeline,this._repeat){if(A=m+this._rDelay,this._repeat<-1&&y)return this.totalTime(A*100+n,a,f);if(C=me(w%A),w===d?(F=this._repeat,C=m):(W=me(w/A),F=~~W,F&&F===W?(C=m,F--):C>m&&(C=m)),J=this._yoyo&&F&1,J&&(C=m-C),W=ln(this._tTime,A),C===u&&!f&&this._initted&&F===W)return this._tTime=w,this;F!==W&&this.vars.repeatRefresh&&!J&&!this._lock&&C!==A&&this._initted&&(this._lock=f=1,this.render(me(A*F),!0).invalidate()._lock=0)}if(!this._initted){if(Kh(this,y?n:C,f,a,w))return this._tTime=0,this;if(u!==this._time&&!(f&&this.vars.repeatRefresh&&F!==W))return this;if(m!==this._dur)return this.render(n,a,f)}if(this._rEase){var K=C<u;if(K!==this._inv){var Z=K?u:m-u;this._inv=K,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=u,this._invRecip=Z?(K?-1:1)/Z:0,this._invScale=K?-this.ratio:1-this.ratio,this._invEase=K?this._rEase:this._ease}this.ratio=Q=this._invRatio+this._invScale*this._invEase((C-this._invTime)*this._invRecip)}else this.ratio=Q=this._ease(C/m);if(this._from&&(this.ratio=Q=1-Q),this._tTime=w,this._time=C,!this._act&&this._ts&&(this._act=1,this._lazy=0),!u&&w&&!a&&!W&&($i(this,"onStart"),this._tTime!==w))return this;for(S=this._pt;S;)S.r(Q,S.d),S=S._next;U&&U.render(n<0?n:U._dur*U._ease(C/this._dur),a,f)||this._startAt&&(this._zTime=n),this._onUpdate&&!a&&(y&&Pa(this,n,a,f),$i(this,"onUpdate")),this._repeat&&F!==W&&this.vars.onRepeat&&!a&&this.parent&&$i(this,"onRepeat"),(w===this._tDur||!w)&&this._tTime===w&&(y&&!this._onUpdate&&Pa(this,n,!0,!0),(n||!m)&&(w===this._tDur&&this._ts>0||!w&&this._ts<0)&&hs(this,1),!a&&!(y&&!u)&&(w||u||J)&&($i(this,w===d?"onComplete":"onReverseComplete",!0),this._prom&&!(w<d&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),h.prototype.invalidate.call(this,n)},r.resetTo=function(n,a,f,u,d){Qn||Wi.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),y;return this._initted||rl(this,m),y=this._ease(m/this._dur),uc(this,n,a,f,u,y,m,d)?this.resetTo(n,a,f,u,1):(Uo(this,0),this.parent||jh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(n,a){if(a===void 0&&(a="all"),!n&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?An(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ke),this;if(this.timeline){var f=this.timeline.totalDuration();return this.timeline.killTweensOf(n,a,es&&es.vars.overwrite!==!0)._first||An(this),this.parent&&f!==this.timeline.totalDuration()&&hn(this,this._dur*this.timeline._tDur/f,0,1),this}var u=this._targets,d=n?rr(n):u,m=this._ptLookup,y=this._pt,w,C,S,F,A,W,J;if((!a||a==="all")&&qu(u,d))return a==="all"&&(this._pt=0),An(this);for(w=this._op=this._op||[],a!=="all"&&(Ge(a)&&(A={},Ei(a,function(Q){return A[Q]=1}),a=A),a=cc(u,a)),J=u.length;J--;)if(~d.indexOf(u[J])){C=m[J],a==="all"?(w[J]=a,F=C,S={}):(S=w[J]=w[J]||{},F=a);for(A in F)W=C&&C[A],W&&((!("kill"in W.d)||W.d.kill(A)===!0)&&jo(this,W,"_pt"),delete C[A]),S!=="all"&&(S[A]=1)}return this._initted&&!this._pt&&y&&An(this),this},t.to=function(n,a){return new t(n,a,arguments[2])},t.from=function(n,a){return Dn(1,arguments)},t.delayedCall=function(n,a,f,u){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:a,onReverseComplete:a,onCompleteParams:f,onReverseCompleteParams:f,callbackScope:u})},t.fromTo=function(n,a,f){return Dn(2,arguments)},t.set=function(n,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(n,a)},t.killTweensOf=function(n,a,f){return ge.killTweensOf(n,a,f)},t})(Jn);Hi(Ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ei("staggerTo,staggerFrom,staggerFromTo",function(h){Ce[h]=function(){var t=new Ai,r=Ca.call(arguments,0);return r.splice(h==="staggerFromTo"?5:4,0,0),t[h].apply(t,r)}});var sl=function(t,r,i){return t[r]=i},mf=function(t,r,i){return t[r](i)},dc=function(t,r,i,n){return t[r](n.fp,i)},mc=function(t,r,i){return t.setAttribute(r,i)},nl=function(t,r){return ye(t[r])?mf:Ha(t[r])&&t.setAttribute?mc:sl},gf=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e6)/1e6,r)},gc=function(t,r){return r.set(r.t,r.p,!!(r.s+r.c*t),r)},vf=function(t,r){var i=r._pt,n="";if(!t&&r.b)n=r.b;else if(t===1&&r.e)n=r.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=r.c}r.set(r.t,r.p,n,r)},ol=function(t,r){for(var i=r._pt;i;)i.r(t,i.d),i=i._next},vc=function(t,r,i,n){for(var a=this._pt,f;a;)f=a._next,a.p===n&&a.modifier(t,r,i),a=f},_c=function(t){for(var r=this._pt,i,n;r;)n=r._next,r.p===t&&!r.op||r.op===t?jo(this,r,"_pt"):r.dep||(i=1),r=n;return!i},yc=function(t,r,i,n){n.mSet(t,r,n.m.call(n.tween,i,n.mt),n)},_f=function(t){for(var r=t._pt,i,n,a,f;r;){for(i=r._next,n=a;n&&n.pr>r.pr;)n=n._next;(r._prev=n?n._prev:f)?r._prev._next=r:a=r,(r._next=n)?n._prev=r:f=r,r=i}t._pt=a},Mi=(function(){function h(r,i,n,a,f,u,d,m,y){this.t=i,this.s=a,this.c=f,this.p=n,this.r=u||gf,this.d=d||this,this.set=m||sl,this.pr=y||0,this._next=r,r&&(r._prev=this)}var t=h.prototype;return t.modifier=function(i,n,a){this.mSet=this.mSet||this.set,this.set=yc,this.m=i,this.mt=a,this.tween=n},h})();Ei(Ja+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(h){return Qa[h]=1});ji.TweenMax=ji.TweenLite=Ce;ji.TimelineLite=ji.TimelineMax=Ai;ge=new Ai({sortChildren:!1,defaults:Hn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gi.stringFilter=hf;var Es=[],Co={},bc=[],Jl=0,xc=0,ca=function(t){return(Co[t]||bc).map(function(r){return r()})},La=function(){var t=Date.now(),r=[];t-Jl>2&&(ca("matchMediaInit"),Es.forEach(function(i){var n=i.queries,a=i.conditions,f,u,d,m;for(u in n)f=br.matchMedia(n[u]).matches,f&&(d=1),f!==a[u]&&(a[u]=f,m=1);m&&(i.revert(),d&&r.push(i))}),ca("matchMediaRevert"),r.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Jl=t,ca("matchMedia"))},yf=(function(){function h(r,i){this.selector=i&&Ea(i),this.data=[],this._r=[],this.isReverted=!1,this.id=xc++,r&&this.add(r)}var t=h.prototype;return t.add=function(i,n,a){ye(i)&&(a=n,n=i,i=ye);var f=this,u=function(){var m=ue,y=f.selector,w;return m&&m!==f&&m.data.push(f),a&&(f.selector=Ea(a)),ue=f,w=n.apply(f,arguments),ye(w)&&f._r.push(w),ue=m,f.selector=y,f.isReverted=!1,w};return f.last=u,i===ye?u(f,function(d){return f.add(null,d)}):i?f[i]=u:u},t.ignore=function(i){var n=ue;ue=null,i(this),ue=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof h?i.push.apply(i,n.getTweens()):n instanceof Ce&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var a=this;if(i?(function(){for(var u=a.getTweens(),d=a.data.length,m;d--;)m=a.data[d],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(y){return u.splice(u.indexOf(y),1)}));for(u.map(function(y){return{g:y._dur||y._delay||y._sat&&!y._sat.vars.immediateRender?y.globalTime(0):-1/0,t:y}}).sort(function(y,w){return w.g-y.g||-1/0}).forEach(function(y){return y.t.revert(i)}),d=a.data.length;d--;)m=a.data[d],m instanceof Ai?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof Ce)&&m.revert&&m.revert(i);a._r.forEach(function(y){return y(i,a)}),a.isReverted=!0})():this.data.forEach(function(u){return u.kill&&u.kill()}),this.clear(),n)for(var f=Es.length;f--;)Es[f].id===this.id&&Es.splice(f,1)},t.revert=function(i){this.kill(i||{})},h})(),kc=(function(){function h(r){this.contexts=[],this.scope=r,ue&&ue.data.push(this)}var t=h.prototype;return t.add=function(i,n,a){Pr(i)||(i={matches:i});var f=new yf(0,a||this.scope),u=f.conditions={},d,m,y;ue&&!f.selector&&(f.selector=ue.selector),this.contexts.push(f),n=f.add("onMatch",n),f.queries=i;for(m in i)m==="all"?y=1:(d=br.matchMedia(i[m]),d&&(Es.indexOf(f)<0&&Es.push(f),(u[m]=d.matches)&&(y=1),d.addListener?d.addListener(La):d.addEventListener("change",La)));return y&&n(f,function(w){return f.add(null,w)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},h})(),Bo={registerPlugin:function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];r.forEach(function(n){return of(n)})},timeline:function(t){return new Ai(t)},getTweensOf:function(t,r){return ge.getTweensOf(t,r)},getProperty:function(t,r,i,n){Ge(t)&&(t=rr(t)[0]);var a=Ps(t||{}).get,f=i?Gh:Xh;return i==="native"&&(i=""),t&&(r?f((Bi[r]&&Bi[r].get||a)(t,r,i,n)):function(u,d,m){return f((Bi[u]&&Bi[u].get||a)(t,u,d,m))})},quickSetter:function(t,r,i){if(t=rr(t),t.length>1){var n=t.map(function(y){return Li.quickSetter(y,r,i)}),a=n.length;return function(y){for(var w=a;w--;)n[w](y)}}t=t[0]||{};var f=Bi[r],u=Ps(t),d=u.harness&&(u.harness.aliases||{})[r]||r,m=f?function(y){var w=new f;Zs._pt=0,w.init(t,i?y+i:y,Zs,0,[t]),w.render(1,w),Zs._pt&&ol(1,Zs)}:u.set(t,d);return f?m:function(y){return m(t,d,i?y+i:y,u,1)}},quickTo:function(t,r,i){var n,a=Li.to(t,Hi((n={},n[r]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),f=function(d,m,y){return a.resetTo(r,d,m,y)};return f.tween=a,f},isTweening:function(t){return ge.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Cs(t.ease,Hn.ease)),Hl(Hn,t||{})},config:function(t){return Hl(Gi,t||{})},registerEffect:function(t){var r=t.name,i=t.effect,n=t.plugins,a=t.defaults,f=t.extendTimeline;(n||"").split(",").forEach(function(u){return u&&!Bi[u]&&!ji[u]&&Un(r+" effect requires "+u+" plugin.")}),la[r]=function(u,d,m){return i(rr(u),Hi(d||{},a),m)},f&&(Ai.prototype[r]=function(u,d,m){return this.add(la[r](u,Pr(d)?d:(m=d)&&{},this),m)})},registerEase:function(t,r){$t[t]=Cs(r)},parseEase:function(t,r){return arguments.length?Cs(t,r):$t},getById:function(t){return ge.getById(t)},exportRoot:function(t,r){t===void 0&&(t={});var i=new Ai(t),n,a;for(i.smoothChildTiming=Ci(t.smoothChildTiming),ge.remove(i),i._dp=0,i._time=i._tTime=ge._time,n=ge._first;n;)a=n._next,(r||!(!n._dur&&n instanceof Ce&&n.vars.onComplete===n._targets[0]))&&kr(i,n,n._start-n._delay),n=a;return kr(ge,i,0),i},context:function(t,r){return t?new yf(t,r):ue},matchMedia:function(t){return new kc(t)},matchMediaRefresh:function(){return Es.forEach(function(t){var r=t.conditions,i,n;for(n in r)r[n]&&(r[n]=!1,i=1);i&&t.revert()})||La()},addEventListener:function(t,r){var i=Co[t]||(Co[t]=[]);~i.indexOf(r)||i.push(r)},removeEventListener:function(t,r){var i=Co[t],n=i&&i.indexOf(r);n>=0&&i.splice(n,1)},utils:{wrap:Ju,wrapYoyo:tc,distribute:Jh,random:ef,snap:tf,normalize:Qu,getUnit:si,clamp:Hu,splitColor:af,toArray:rr,selector:Ea,mapRange:sf,pipe:Ku,unitize:Zu,interpolate:ec,shuffle:Qh},install:Bh,effects:la,ticker:Wi,updateRoot:Ai.updateRoot,plugins:Bi,globalTimeline:ge,core:{PropTween:Mi,globals:qh,Tween:Ce,Timeline:Ai,Animation:Jn,getCache:Ps,_removeLinkedListItem:jo,reverting:function(){return Ke},context:function(t){return t&&ue&&(ue.data.push(t),t._ctx=ue),ue},suppressOverwrites:function(t){return ja=t}}};Ei("to,from,fromTo,delayedCall,set,killTweensOf",function(h){return Bo[h]=Ce[h]});Wi.add(Ai.updateRoot);Zs=Bo.to({},{duration:0});var wc=function(t,r){for(var i=t._pt;i&&i.p!==r&&i.op!==r&&i.fp!==r;)i=i._next;return i},Sc=function(t,r){var i=t._targets,n,a,f;for(n in r)for(a=i.length;a--;)f=t._ptLookup[a][n],f&&(f=f.d)&&(f._pt&&(f=wc(f,n)),f&&f.modifier&&f.modifier(r[n],t,i[a],n))},pa=function(t,r){return{name:t,headless:1,rawVars:1,init:function(n,a,f){f._onInit=function(u){var d,m;if(Ge(a)&&(d={},Ei(a,function(y){return d[y]=1}),a=d),r){d={};for(m in a)d[m]=r(a[m]);a=d}Sc(u,a)}}}},Li=Bo.registerPlugin({name:"attr",init:function(t,r,i,n,a){var f,u,d;this.tween=i;for(f in r)d=t.getAttribute(f)||"",u=this.add(t,"setAttribute",(d||0)+"",r[f],n,a,0,0,f),u.op=f,u.b=d,this._props.push(f)},render:function(t,r){for(var i=r._pt;i;)Ke?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,r){for(var i=r.length;i--;)this.add(t,i,t[i]||0,r[i],0,0,0,0,0,1)}},pa("roundProps",Ma),pa("modifiers"),pa("snap",tf))||Bo;Ce.version=Ai.version=Li.version="3.15.0";Nh=1;Ua()&&fn();$t.Power0;$t.Power1;$t.Power2;$t.Power3;$t.Power4;$t.Linear;$t.Quad;$t.Cubic;$t.Quart;$t.Quint;$t.Strong;$t.Elastic;$t.Back;$t.SteppedEase;$t.Bounce;$t.Sine;$t.Expo;$t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var th,is,tn,al,Ss,eh,ll,Tc=function(){return typeof window<"u"},Br={},xs=180/Math.PI,en=Math.PI/180,$s=Math.atan2,ih=1e8,hl=/([A-Z])/g,Pc=/(left|right|width|margin|padding|x)/i,Ac=/[\s,\(]\S/,wr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ia=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},Cc=function(t,r){return r.set(r.t,r.p,t===1?r.e:Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},Ec=function(t,r){return r.set(r.t,r.p,t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},Mc=function(t,r){return r.set(r.t,r.p,t===1?r.e:t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},Fc=function(t,r){var i=r.s+r.c*t;r.set(r.t,r.p,~~(i+(i<0?-.5:.5))+r.u,r)},bf=function(t,r){return r.set(r.t,r.p,t?r.e:r.b,r)},xf=function(t,r){return r.set(r.t,r.p,t!==1?r.b:r.e,r)},Lc=function(t,r,i){return t.style[r]=i},Ic=function(t,r,i){return t.style.setProperty(r,i)},Oc=function(t,r,i){return t._gsap[r]=i},Rc=function(t,r,i){return t._gsap.scaleX=t._gsap.scaleY=i},Dc=function(t,r,i,n,a){var f=t._gsap;f.scaleX=f.scaleY=i,f.renderTransform(a,f)},Vc=function(t,r,i,n,a){var f=t._gsap;f[r]=i,f.renderTransform(a,f)},ve="transform",Fi=ve+"Origin",zc=function h(t,r){var i=this,n=this.target,a=n.style,f=n._gsap;if(t in Br&&a){if(this.tfm=this.tfm||{},t!=="transform")t=wr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(u){return i.tfm[u]=Rr(n,u)}):this.tfm[t]=f.x?f[t]:Rr(n,t),t===Fi&&(this.tfm.zOrigin=f.zOrigin);else return wr.transform.split(",").forEach(function(u){return h.call(i,u,r)});if(this.props.indexOf(ve)>=0)return;f.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Fi,r,"")),t=ve}(a||r)&&this.props.push(t,r,a[t])},kf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Nc=function(){var t=this.props,r=this.target,i=r.style,n=r._gsap,a,f;for(a=0;a<t.length;a+=3)t[a+1]?t[a+1]===2?r[t[a]](t[a+2]):r[t[a]]=t[a+2]:t[a+2]?i[t[a]]=t[a+2]:i.removeProperty(t[a].substr(0,2)==="--"?t[a]:t[a].replace(hl,"-$1").toLowerCase());if(this.tfm){for(f in this.tfm)n[f]=this.tfm[f];n.svg&&(n.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),a=ll(),(!a||!a.isStart)&&!i[ve]&&(kf(i),n.zOrigin&&i[Fi]&&(i[Fi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},wf=function(t,r){var i={target:t,props:[],revert:Nc,save:zc};return t._gsap||Li.core.getCache(t),r&&t.style&&t.nodeType&&r.split(",").forEach(function(n){return i.save(n)}),i},Sf,Oa=function(t,r){var i=is.createElementNS?is.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):is.createElement(t);return i&&i.style?i:is.createElement(t)},Xi=function h(t,r,i){var n=getComputedStyle(t);return n[r]||n.getPropertyValue(r.replace(hl,"-$1").toLowerCase())||n.getPropertyValue(r)||!i&&h(t,un(r)||r,1)||""},rh="O,Moz,ms,Ms,Webkit".split(","),un=function(t,r,i){var n=r||Ss,a=n.style,f=5;if(t in a&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);f--&&!(rh[f]+t in a););return f<0?null:(f===3?"ms":f>=0?rh[f]:"")+t},Ra=function(){Tc()&&window.document&&(th=window,is=th.document,tn=is.documentElement,Ss=Oa("div")||{style:{}},Oa("div"),ve=un(ve),Fi=ve+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sf=!!un("perspective"),ll=Li.core.reverting,al=1)},sh=function(t){var r=t.ownerSVGElement,i=Oa("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),a;n.style.display="block",i.appendChild(n),tn.appendChild(i);try{a=n.getBBox()}catch{}return i.removeChild(n),tn.removeChild(i),a},nh=function(t,r){for(var i=r.length;i--;)if(t.hasAttribute(r[i]))return t.getAttribute(r[i])},Tf=function(t){var r,i;try{r=t.getBBox()}catch{r=sh(t),i=1}return r&&(r.width||r.height)||i||(r=sh(t)),r&&!r.width&&!r.x&&!r.y?{x:+nh(t,["x","cx","x1"])||0,y:+nh(t,["y","cy","y1"])||0,width:0,height:0}:r},Pf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tf(t))},fs=function(t,r){if(r){var i=t.style,n;r in Br&&r!==Fi&&(r=ve),i.removeProperty?(n=r.substr(0,2),(n==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),i.removeProperty(n==="--"?r:r.replace(hl,"-$1").toLowerCase())):i.removeAttribute(r)}},rs=function(t,r,i,n,a,f){var u=new Mi(t._pt,r,i,0,1,f?xf:bf);return t._pt=u,u.b=n,u.e=a,t._props.push(i),u},oh={deg:1,rad:1,turn:1},Bc={grid:1,flex:1},us=function h(t,r,i,n){var a=parseFloat(i)||0,f=(i+"").trim().substr((a+"").length)||"px",u=Ss.style,d=Pc.test(r),m=t.tagName.toLowerCase()==="svg",y=(m?"client":"offset")+(d?"Width":"Height"),w=100,C=n==="px",S=n==="%",F,A,W,J;if(n===f||!a||oh[n]||oh[f])return a;if(f!=="px"&&!C&&(a=h(t,r,i,"px")),J=t.getCTM&&Pf(t),(S||f==="%")&&(Br[r]||~r.indexOf("adius")))return F=J?t.getBBox()[d?"width":"height"]:t[y],we(S?a/F*w:a/100*F);if(u[d?"width":"height"]=w+(C?f:n),A=n!=="rem"&&~r.indexOf("adius")||n==="em"&&t.appendChild&&!m?t:t.parentNode,J&&(A=(t.ownerSVGElement||{}).parentNode),(!A||A===is||!A.appendChild)&&(A=is.body),W=A._gsap,W&&S&&W.width&&d&&W.time===Wi.time&&!W.uncache)return we(a/W.width*w);if(S&&(r==="height"||r==="width")){var Q=t.style[r];t.style[r]=w+n,F=t[y],Q?t.style[r]=Q:fs(t,r)}else(S||f==="%")&&!Bc[Xi(A,"display")]&&(u.position=Xi(t,"position")),A===t&&(u.position="static"),A.appendChild(Ss),F=Ss[y],A.removeChild(Ss),u.position="absolute";return d&&S&&(W=Ps(A),W.time=Wi.time,W.width=A[y]),we(C?F*a/w:F&&a?w/F*a:0)},Rr=function(t,r,i,n){var a;return al||Ra(),r in wr&&r!=="transform"&&(r=wr[r],~r.indexOf(",")&&(r=r.split(",")[0])),Br[r]&&r!=="transform"?(a=eo(t,n),a=r!=="transformOrigin"?a[r]:a.svg?a.origin:Wo(Xi(t,Fi))+" "+a.zOrigin+"px"):(a=t.style[r],(!a||a==="auto"||n||~(a+"").indexOf("calc("))&&(a=qo[r]&&qo[r](t,r,i)||Xi(t,r)||Yh(t,r)||(r==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?us(t,r,a,i)+i:a},qc=function(t,r,i,n){if(!i||i==="none"){var a=un(r,t,1),f=a&&Xi(t,a,1);f&&f!==i?(r=a,i=f):r==="borderColor"&&(i=Xi(t,"borderTopColor"))}var u=new Mi(this._pt,t.style,r,0,1,vf),d=0,m=0,y,w,C,S,F,A,W,J,Q,U,K,Z;if(u.b=i,u.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Xi(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(A=t.style[r],t.style[r]=n,n=Xi(t,r)||n,A?t.style[r]=A:fs(t,r)),y=[i,n],hf(y),i=y[0],n=y[1],C=i.match(Ks)||[],Z=n.match(Ks)||[],Z.length){for(;w=Ks.exec(n);)W=w[0],Q=n.substring(d,w.index),F?F=(F+1)%5:(Q.substr(-5)==="rgba("||Q.substr(-5)==="hsla(")&&(F=1),W!==(A=C[m++]||"")&&(S=parseFloat(A)||0,K=A.substr((S+"").length),W.charAt(1)==="="&&(W=Js(S,W)+K),J=parseFloat(W),U=W.substr((J+"").length),d=Ks.lastIndex-U.length,U||(U=U||Gi.units[r]||K,d===n.length&&(n+=U,u.e+=U)),K!==U&&(S=us(t,r,A,U)||0),u._pt={_next:u._pt,p:Q||m===1?Q:",",s:S,c:J-S,m:F&&F<4||r==="zIndex"?Math.round:0});u.c=d<n.length?n.substring(d,n.length):""}else u.r=r==="display"&&n==="none"?xf:bf;return zh.test(n)&&(u.e=0),this._pt=u,u},ah={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wc=function(t){var r=t.split(" "),i=r[0],n=r[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),r[0]=ah[i]||i,r[1]=ah[n]||n,r.join(" ")},Yc=function(t,r){if(r.tween&&r.tween._time===r.tween._dur){var i=r.t,n=i.style,a=r.u,f=i._gsap,u,d,m;if(a==="all"||a===!0)n.cssText="",d=1;else for(a=a.split(","),m=a.length;--m>-1;)u=a[m],Br[u]&&(d=1,u=u==="transformOrigin"?Fi:ve),fs(i,u);d&&(fs(i,ve),f&&(f.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",eo(i,1),f.uncache=1,kf(n)))}},qo={clearProps:function(t,r,i,n,a){if(a.data!=="isFromStart"){var f=t._pt=new Mi(t._pt,r,i,0,0,Yc);return f.u=n,f.pr=-10,f.tween=a,t._props.push(i),1}}},to=[1,0,0,1,0,0],Af={},Cf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},lh=function(t){var r=Xi(t,ve);return Cf(r)?to:r.substr(7).match(Vh).map(we)},fl=function(t,r){var i=t._gsap||Ps(t),n=t.style,a=lh(t),f,u,d,m;return i.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?to:a):(a===to&&!t.offsetParent&&t!==tn&&!i.svg&&(d=n.display,n.display="block",f=t.parentNode,(!f||!t.offsetParent&&!t.getBoundingClientRect().width)&&(m=1,u=t.nextElementSibling,tn.appendChild(t)),a=lh(t),d?n.display=d:fs(t,"display"),m&&(u?f.insertBefore(t,u):f?f.appendChild(t):tn.removeChild(t))),r&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Da=function(t,r,i,n,a,f){var u=t._gsap,d=a||fl(t,!0),m=u.xOrigin||0,y=u.yOrigin||0,w=u.xOffset||0,C=u.yOffset||0,S=d[0],F=d[1],A=d[2],W=d[3],J=d[4],Q=d[5],U=r.split(" "),K=parseFloat(U[0])||0,Z=parseFloat(U[1])||0,rt,tt,at,it;i?d!==to&&(tt=S*W-F*A)&&(at=K*(W/tt)+Z*(-A/tt)+(A*Q-W*J)/tt,it=K*(-F/tt)+Z*(S/tt)-(S*Q-F*J)/tt,K=at,Z=it):(rt=Tf(t),K=rt.x+(~U[0].indexOf("%")?K/100*rt.width:K),Z=rt.y+(~(U[1]||U[0]).indexOf("%")?Z/100*rt.height:Z)),n||n!==!1&&u.smooth?(J=K-m,Q=Z-y,u.xOffset=w+(J*S+Q*A)-J,u.yOffset=C+(J*F+Q*W)-Q):u.xOffset=u.yOffset=0,u.xOrigin=K,u.yOrigin=Z,u.smooth=!!n,u.origin=r,u.originIsAbsolute=!!i,t.style[Fi]="0px 0px",f&&(rs(f,u,"xOrigin",m,K),rs(f,u,"yOrigin",y,Z),rs(f,u,"xOffset",w,u.xOffset),rs(f,u,"yOffset",C,u.yOffset)),t.setAttribute("data-svg-origin",K+" "+Z)},eo=function(t,r){var i=t._gsap||new uf(t);if("x"in i&&!r&&!i.uncache)return i;var n=t.style,a=i.scaleX<0,f="px",u="deg",d=getComputedStyle(t),m=Xi(t,Fi)||"0",y,w,C,S,F,A,W,J,Q,U,K,Z,rt,tt,at,it,st,Ot,ut,qt,It,Wt,Yt,Tt,Mt,jt,X,Zt,qe,vi,ae,Ee;return y=w=C=A=W=J=Q=U=K=0,S=F=1,i.svg=!!(t.getCTM&&Pf(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(n[ve]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[ve]!=="none"?d[ve]:"")),n.scale=n.rotate=n.translate="none"),tt=fl(t,i.svg),i.svg&&(i.uncache?(Mt=t.getBBox(),m=i.xOrigin-Mt.x+"px "+(i.yOrigin-Mt.y)+"px",Tt=""):Tt=!r&&t.getAttribute("data-svg-origin"),Da(t,Tt||m,!!Tt||i.originIsAbsolute,i.smooth!==!1,tt)),Z=i.xOrigin||0,rt=i.yOrigin||0,tt!==to&&(Ot=tt[0],ut=tt[1],qt=tt[2],It=tt[3],y=Wt=tt[4],w=Yt=tt[5],tt.length===6?(S=Math.sqrt(Ot*Ot+ut*ut),F=Math.sqrt(It*It+qt*qt),A=Ot||ut?$s(ut,Ot)*xs:0,Q=qt||It?$s(qt,It)*xs+A:0,Q&&(F*=Math.abs(Math.cos(Q*en))),i.svg&&(y-=Z-(Z*Ot+rt*qt),w-=rt-(Z*ut+rt*It))):(Ee=tt[6],vi=tt[7],X=tt[8],Zt=tt[9],qe=tt[10],ae=tt[11],y=tt[12],w=tt[13],C=tt[14],at=$s(Ee,qe),W=at*xs,at&&(it=Math.cos(-at),st=Math.sin(-at),Tt=Wt*it+X*st,Mt=Yt*it+Zt*st,jt=Ee*it+qe*st,X=Wt*-st+X*it,Zt=Yt*-st+Zt*it,qe=Ee*-st+qe*it,ae=vi*-st+ae*it,Wt=Tt,Yt=Mt,Ee=jt),at=$s(-qt,qe),J=at*xs,at&&(it=Math.cos(-at),st=Math.sin(-at),Tt=Ot*it-X*st,Mt=ut*it-Zt*st,jt=qt*it-qe*st,ae=It*st+ae*it,Ot=Tt,ut=Mt,qt=jt),at=$s(ut,Ot),A=at*xs,at&&(it=Math.cos(at),st=Math.sin(at),Tt=Ot*it+ut*st,Mt=Wt*it+Yt*st,ut=ut*it-Ot*st,Yt=Yt*it-Wt*st,Ot=Tt,Wt=Mt),W&&Math.abs(W)+Math.abs(A)>359.9&&(W=A=0,J=180-J),S=we(Math.sqrt(Ot*Ot+ut*ut+qt*qt)),F=we(Math.sqrt(Yt*Yt+Ee*Ee)),at=$s(Wt,Yt),Q=Math.abs(at)>2e-4?at*xs:0,K=ae?1/(ae<0?-ae:ae):0),i.svg&&(Tt=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Cf(Xi(t,ve)),Tt&&t.setAttribute("transform",Tt))),Math.abs(Q)>90&&Math.abs(Q)<270&&(a?(S*=-1,Q+=A<=0?180:-180,A+=A<=0?180:-180):(F*=-1,Q+=Q<=0?180:-180)),r=r||i.uncache,i.x=y-((i.xPercent=y&&(!r&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-y)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+f,i.y=w-((i.yPercent=w&&(!r&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-w)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+f,i.z=C+f,i.scaleX=we(S),i.scaleY=we(F),i.rotation=we(A)+u,i.rotationX=we(W)+u,i.rotationY=we(J)+u,i.skewX=Q+u,i.skewY=U+u,i.transformPerspective=K+f,(i.zOrigin=parseFloat(m.split(" ")[2])||!r&&i.zOrigin||0)&&(n[Fi]=Wo(m)),i.xOffset=i.yOffset=0,i.force3D=Gi.force3D,i.renderTransform=i.svg?Xc:Sf?Ef:$c,i.uncache=0,i},Wo=function(t){return(t=t.split(" "))[0]+" "+t[1]},da=function(t,r,i){var n=si(r);return we(parseFloat(r)+parseFloat(us(t,"x",i+"px",n)))+n},$c=function(t,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,Ef(t,r)},ys="0deg",wn="0px",bs=") ",Ef=function(t,r){var i=r||this,n=i.xPercent,a=i.yPercent,f=i.x,u=i.y,d=i.z,m=i.rotation,y=i.rotationY,w=i.rotationX,C=i.skewX,S=i.skewY,F=i.scaleX,A=i.scaleY,W=i.transformPerspective,J=i.force3D,Q=i.target,U=i.zOrigin,K="",Z=J==="auto"&&t&&t!==1||J===!0;if(U&&(w!==ys||y!==ys)){var rt=parseFloat(y)*en,tt=Math.sin(rt),at=Math.cos(rt),it;rt=parseFloat(w)*en,it=Math.cos(rt),f=da(Q,f,tt*it*-U),u=da(Q,u,-Math.sin(rt)*-U),d=da(Q,d,at*it*-U+U)}W!==wn&&(K+="perspective("+W+bs),(n||a)&&(K+="translate("+n+"%, "+a+"%) "),(Z||f!==wn||u!==wn||d!==wn)&&(K+=d!==wn||Z?"translate3d("+f+", "+u+", "+d+") ":"translate("+f+", "+u+bs),m!==ys&&(K+="rotate("+m+bs),y!==ys&&(K+="rotateY("+y+bs),w!==ys&&(K+="rotateX("+w+bs),(C!==ys||S!==ys)&&(K+="skew("+C+", "+S+bs),(F!==1||A!==1)&&(K+="scale("+F+", "+A+bs),Q.style[ve]=K||"translate(0, 0)"},Xc=function(t,r){var i=r||this,n=i.xPercent,a=i.yPercent,f=i.x,u=i.y,d=i.rotation,m=i.skewX,y=i.skewY,w=i.scaleX,C=i.scaleY,S=i.target,F=i.xOrigin,A=i.yOrigin,W=i.xOffset,J=i.yOffset,Q=i.forceCSS,U=parseFloat(f),K=parseFloat(u),Z,rt,tt,at,it;d=parseFloat(d),m=parseFloat(m),y=parseFloat(y),y&&(y=parseFloat(y),m+=y,d+=y),d||m?(d*=en,m*=en,Z=Math.cos(d)*w,rt=Math.sin(d)*w,tt=Math.sin(d-m)*-C,at=Math.cos(d-m)*C,m&&(y*=en,it=Math.tan(m-y),it=Math.sqrt(1+it*it),tt*=it,at*=it,y&&(it=Math.tan(y),it=Math.sqrt(1+it*it),Z*=it,rt*=it)),Z=we(Z),rt=we(rt),tt=we(tt),at=we(at)):(Z=w,at=C,rt=tt=0),(U&&!~(f+"").indexOf("px")||K&&!~(u+"").indexOf("px"))&&(U=us(S,"x",f,"px"),K=us(S,"y",u,"px")),(F||A||W||J)&&(U=we(U+F-(F*Z+A*tt)+W),K=we(K+A-(F*rt+A*at)+J)),(n||a)&&(it=S.getBBox(),U=we(U+n/100*it.width),K=we(K+a/100*it.height)),it="matrix("+Z+","+rt+","+tt+","+at+","+U+","+K+")",S.setAttribute("transform",it),Q&&(S.style[ve]=it)},Gc=function(t,r,i,n,a){var f=360,u=Ge(a),d=parseFloat(a)*(u&&~a.indexOf("rad")?xs:1),m=d-n,y=n+m+"deg",w,C;return u&&(w=a.split("_")[1],w==="short"&&(m%=f,m!==m%(f/2)&&(m+=m<0?f:-f)),w==="cw"&&m<0?m=(m+f*ih)%f-~~(m/f)*f:w==="ccw"&&m>0&&(m=(m-f*ih)%f-~~(m/f)*f)),t._pt=C=new Mi(t._pt,r,i,n,m,Cc),C.e=y,C.u="deg",t._props.push(i),C},hh=function(t,r){for(var i in r)t[i]=r[i];return t},jc=function(t,r,i){var n=hh({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",f=i.style,u,d,m,y,w,C,S,F;n.svg?(m=i.getAttribute("transform"),i.setAttribute("transform",""),f[ve]=r,u=eo(i,1),fs(i,ve),i.setAttribute("transform",m)):(m=getComputedStyle(i)[ve],f[ve]=r,u=eo(i,1),f[ve]=m);for(d in Br)m=n[d],y=u[d],m!==y&&a.indexOf(d)<0&&(S=si(m),F=si(y),w=S!==F?us(i,d,m,F):parseFloat(m),C=parseFloat(y),t._pt=new Mi(t._pt,u,d,w,C-w,Ia),t._pt.u=F||0,t._props.push(d));hh(u,n)};Ei("padding,margin,Width,Radius",function(h,t){var r="Top",i="Right",n="Bottom",a="Left",f=(t<3?[r,i,n,a]:[r+a,r+i,n+i,n+a]).map(function(u){return t<2?h+u:"border"+u+h});qo[t>1?"border"+h:h]=function(u,d,m,y,w){var C,S;if(arguments.length<4)return C=f.map(function(F){return Rr(u,F,m)}),S=C.join(" "),S.split(C[0]).length===5?C[0]:S;C=(y+"").split(" "),S={},f.forEach(function(F,A){return S[F]=C[A]=C[A]||C[(A-1)/2|0]}),u.init(d,S,w)}});var Mf={name:"css",register:Ra,targetTest:function(t){return t.style&&t.nodeType},init:function(t,r,i,n,a){var f=this._props,u=t.style,d=i.vars.startAt,m,y,w,C,S,F,A,W,J,Q,U,K,Z,rt,tt,at,it;al||Ra(),this.styles=this.styles||wf(t),at=this.styles.props,this.tween=i;for(A in r)if(A!=="autoRound"&&(y=r[A],!(Bi[A]&&cf(A,r,i,n,t,a)))){if(S=typeof y,F=qo[A],S==="function"&&(y=y.call(i,n,t,a),S=typeof y),S==="string"&&~y.indexOf("random(")&&(y=Zn(y)),F)F(this,t,A,y,i)&&(tt=1);else if(A.substr(0,2)==="--")m=(getComputedStyle(t).getPropertyValue(A)+"").trim(),y+="",as.lastIndex=0,as.test(m)||(W=si(m),J=si(y),J?W!==J&&(m=us(t,A,m,J)+J):W&&(y+=W)),this.add(u,"setProperty",m,y,n,a,0,0,A),f.push(A),at.push(A,0,u[A]);else if(S!=="undefined"){if(d&&A in d?(m=typeof d[A]=="function"?d[A].call(i,n,t,a):d[A],Ge(m)&&~m.indexOf("random(")&&(m=Zn(m)),si(m+"")||m==="auto"||(m+=Gi.units[A]||si(Rr(t,A))||""),(m+"").charAt(1)==="="&&(m=Rr(t,A))):m=Rr(t,A),C=parseFloat(m),Q=S==="string"&&y.charAt(1)==="="&&y.substr(0,2),Q&&(y=y.substr(2)),w=parseFloat(y),A in wr&&(A==="autoAlpha"&&(C===1&&Rr(t,"visibility")==="hidden"&&w&&(C=0),at.push("visibility",0,u.visibility),rs(this,u,"visibility",C?"inherit":"hidden",w?"inherit":"hidden",!w)),A!=="scale"&&A!=="transform"&&(A=wr[A],~A.indexOf(",")&&(A=A.split(",")[0]))),U=A in Br,U){if(this.styles.save(A),it=y,S==="string"&&y.substring(0,6)==="var(--"){if(y=Xi(t,y.substring(4,y.indexOf(")"))),y.substring(0,5)==="calc("){var st=t.style.perspective;t.style.perspective=y,y=Xi(t,"perspective"),st?t.style.perspective=st:fs(t,"perspective")}w=parseFloat(y)}if(K||(Z=t._gsap,Z.renderTransform&&!r.parseTransform||eo(t,r.parseTransform),rt=r.smoothOrigin!==!1&&Z.smooth,K=this._pt=new Mi(this._pt,u,ve,0,1,Z.renderTransform,Z,0,-1),K.dep=1),A==="scale")this._pt=new Mi(this._pt,Z,"scaleY",Z.scaleY,(Q?Js(Z.scaleY,Q+w):w)-Z.scaleY||0,Ia),this._pt.u=0,f.push("scaleY",A),A+="X";else if(A==="transformOrigin"){at.push(Fi,0,u[Fi]),y=Wc(y),Z.svg?Da(t,y,0,rt,0,this):(J=parseFloat(y.split(" ")[2])||0,J!==Z.zOrigin&&rs(this,Z,"zOrigin",Z.zOrigin,J),rs(this,u,A,Wo(m),Wo(y)));continue}else if(A==="svgOrigin"){Da(t,y,1,rt,0,this);continue}else if(A in Af){Gc(this,Z,A,C,Q?Js(C,Q+y):y);continue}else if(A==="smoothOrigin"){rs(this,Z,"smooth",Z.smooth,y);continue}else if(A==="force3D"){Z[A]=y;continue}else if(A==="transform"){jc(this,y,t);continue}}else A in u||(A=un(A)||A);if(U||(w||w===0)&&(C||C===0)&&!Ac.test(y)&&A in u)W=(m+"").substr((C+"").length),w||(w=0),J=si(y)||(A in Gi.units?Gi.units[A]:W),W!==J&&(C=us(t,A,m,J)),this._pt=new Mi(this._pt,U?Z:u,A,C,(Q?Js(C,Q+w):w)-C,!U&&(J==="px"||A==="zIndex")&&r.autoRound!==!1?Fc:Ia),this._pt.u=J||0,U&&it!==y?(this._pt.b=m,this._pt.e=it,this._pt.r=Mc):W!==J&&J!=="%"&&(this._pt.b=m,this._pt.r=Ec);else if(A in u)qc.call(this,t,A,m,Q?Q+y:y);else if(A in t)this.add(t,A,m||t[A],Q?Q+y:y,n,a);else if(A!=="parseTransform"){Za(A,y);continue}U||(A in u?at.push(A,0,u[A]):typeof t[A]=="function"?at.push(A,2,t[A]()):at.push(A,1,m||t[A])),f.push(A)}}tt&&_f(this)},render:function(t,r){if(r.tween._time||!ll())for(var i=r._pt;i;)i.r(t,i.d),i=i._next;else r.styles.revert()},get:Rr,aliases:wr,getSetter:function(t,r,i){var n=wr[r];return n&&n.indexOf(",")<0&&(r=n),r in Br&&r!==Fi&&(t._gsap.x||Rr(t,"x"))?i&&eh===i?r==="scale"?Rc:Oc:(eh=i||{})&&(r==="scale"?Dc:Vc):t.style&&!Ha(t.style[r])?Lc:~r.indexOf("-")?Ic:nl(t,r)},core:{_removeProperty:fs,_getMatrix:fl}};Li.utils.checkPrefix=un;Li.core.getStyleSaver=wf;(function(h,t,r,i){var n=Ei(h+","+t+","+r,function(a){Br[a]=1});Ei(t,function(a){Gi.units[a]="deg",Af[a]=1}),wr[n[13]]=h+","+t,Ei(i,function(a){var f=a.split(":");wr[f[1]]=n[f[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(h){Gi.units[h]="px"});Li.registerPlugin(Mf);var zn=Li.registerPlugin(Mf)||Li;zn.core.Tween;function Hc(h,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(h,i.key,i)}}function Uc(h,t,r){return t&&Hc(h.prototype,t),h}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ue,Eo,Yi,ss,ns,rn,Ff,ks,sn,Lf,Vr,cr,If,Of=function(){return Ue||typeof window<"u"&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},Rf=1,Qs=[],Bt=[],Tr=[],Nn=Date.now,Va=function(t,r){return r},Kc=function(){var t=sn.core,r=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,Bt),n.push.apply(n,Tr),Bt=i,Tr=n,Va=function(f,u){return r[f](u)}},ls=function(t,r){return~Tr.indexOf(t)&&Tr[Tr.indexOf(t)+1][r]},Bn=function(t){return!!~Lf.indexOf(t)},ci=function(t,r,i,n,a){return t.addEventListener(r,i,{passive:n!==!1,capture:!!a})},ui=function(t,r,i,n){return t.removeEventListener(r,i,!!n)},po="scrollLeft",mo="scrollTop",za=function(){return Vr&&Vr.isPressed||Bt.cache++},Yo=function(t,r){var i=function n(a){if(a||a===0){Rf&&(Yi.history.scrollRestoration="manual");var f=Vr&&Vr.isPressed;a=n.v=Math.round(a)||(Vr&&Vr.iOS?1:0),t(a),n.cacheID=Bt.cache,f&&Va("ss",a)}else(r||Bt.cache!==n.cacheID||Va("ref"))&&(n.cacheID=Bt.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},gi={s:po,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yo(function(h){return arguments.length?Yi.scrollTo(h,Be.sc()):Yi.pageXOffset||ss[po]||ns[po]||rn[po]||0})},Be={s:mo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gi,sc:Yo(function(h){return arguments.length?Yi.scrollTo(gi.sc(),h):Yi.pageYOffset||ss[mo]||ns[mo]||rn[mo]||0})},Pi=function(t,r){return(r&&r._ctx&&r._ctx.selector||Ue.utils.toArray)(t)[0]||(typeof t=="string"&&Ue.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Zc=function(t,r){for(var i=r.length;i--;)if(r[i]===t||r[i].contains(t))return!0;return!1},cs=function(t,r){var i=r.s,n=r.sc;Bn(t)&&(t=ss.scrollingElement||ns);var a=Bt.indexOf(t),f=n===Be.sc?1:2;!~a&&(a=Bt.push(t)-1),Bt[a+f]||ci(t,"scroll",za);var u=Bt[a+f],d=u||(Bt[a+f]=Yo(ls(t,i),!0)||(Bn(t)?n:Yo(function(m){return arguments.length?t[i]=m:t[i]})));return d.target=t,u||(d.smooth=Ue.getProperty(t,"scrollBehavior")==="smooth"),d},Na=function(t,r,i){var n=t,a=t,f=Nn(),u=f,d=r||50,m=Math.max(500,d*3),y=function(F,A){var W=Nn();A||W-f>d?(a=n,n=F,u=f,f=W):i?n+=F:n=a+(F-a)/(W-u)*(f-u)},w=function(){a=n=i?0:n,u=f=0},C=function(F){var A=u,W=a,J=Nn();return(F||F===0)&&F!==n&&y(F),f===u||J-u>m?0:(n+(i?W:-W))/((i?J:f)-A)*1e3};return{update:y,reset:w,getVelocity:C}},Sn=function(t,r){return r&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},fh=function(t){var r=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(r)>=Math.abs(i)?r:i},Df=function(){sn=Ue.core.globals().ScrollTrigger,sn&&sn.core&&Kc()},Vf=function(t){return Ue=t||Of(),!Eo&&Ue&&typeof document<"u"&&document.body&&(Yi=window,ss=document,ns=ss.documentElement,rn=ss.body,Lf=[Yi,ss,ns,rn],Ue.utils.clamp,If=Ue.core.context||function(){},ks="onpointerenter"in rn?"pointer":"mouse",Ff=Se.isTouch=Yi.matchMedia&&Yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,cr=Se.eventTypes=("ontouchstart"in ns?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ns?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Rf=0},500),Eo=1),sn||Df(),Eo};gi.op=Be;Bt.cache=0;var Se=(function(){function h(r){this.init(r)}var t=h.prototype;return t.init=function(i){Eo||Vf(Ue)||console.warn("Please gsap.registerPlugin(Observer)"),sn||Df();var n=i.tolerance,a=i.dragMinimum,f=i.type,u=i.target,d=i.lineHeight,m=i.debounce,y=i.preventDefault,w=i.onStop,C=i.onStopDelay,S=i.ignore,F=i.wheelSpeed,A=i.event,W=i.onDragStart,J=i.onDragEnd,Q=i.onDrag,U=i.onPress,K=i.onRelease,Z=i.onRight,rt=i.onLeft,tt=i.onUp,at=i.onDown,it=i.onChangeX,st=i.onChangeY,Ot=i.onChange,ut=i.onToggleX,qt=i.onToggleY,It=i.onHover,Wt=i.onHoverEnd,Yt=i.onMove,Tt=i.ignoreCheck,Mt=i.isNormalizer,jt=i.onGestureStart,X=i.onGestureEnd,Zt=i.onWheel,qe=i.onEnable,vi=i.onDisable,ae=i.onClick,Ee=i.scrollSpeed,We=i.capture,ne=i.allowClicks,Te=i.lockAxis,be=i.onLockAxis;this.target=u=Pi(u)||ns,this.vars=i,S&&(S=Ue.utils.toArray(S)),n=n||1e-9,a=a||0,F=F||1,Ee=Ee||1,f=f||"wheel,touch,pointer",m=m!==!1,d||(d=parseFloat(Yi.getComputedStyle(rn).lineHeight)||22);var pr,mt,Me,Dt,ce,je,ai,et=this,Fe=0,nr=0,dr=i.passive||!y&&i.passive!==!1,le=cs(u,gi),_i=cs(u,Be),gt=le(),ie=_i(),he=~f.indexOf("touch")&&!~f.indexOf("pointer")&&cr[0]==="pointerdown",or=Bn(u),re=u.ownerDocument||ss,yi=[0,0,0],li=[0,0,0],ar=0,Ze=function(){return ar=Nn()},Qt=function(bt,Ft){return(et.event=bt)&&S&&Zc(bt.target,S)||Ft&&he&&bt.pointerType!=="touch"||Tt&&Tt(bt,Ft)},ds=function(){et._vx.reset(),et._vy.reset(),mt.pause(),w&&w(et)},Ui=function(){var bt=et.deltaX=fh(yi),Ft=et.deltaY=fh(li),ft=Math.abs(bt)>=n,At=Math.abs(Ft)>=n;Ot&&(ft||At)&&Ot(et,bt,Ft,yi,li),ft&&(Z&&et.deltaX>0&&Z(et),rt&&et.deltaX<0&&rt(et),it&&it(et),ut&&et.deltaX<0!=Fe<0&&ut(et),Fe=et.deltaX,yi[0]=yi[1]=yi[2]=0),At&&(at&&et.deltaY>0&&at(et),tt&&et.deltaY<0&&tt(et),st&&st(et),qt&&et.deltaY<0!=nr<0&&qt(et),nr=et.deltaY,li[0]=li[1]=li[2]=0),(Dt||Me)&&(Yt&&Yt(et),Me&&(W&&Me===1&&W(et),Q&&Q(et),Me=0),Dt=!1),je&&!(je=!1)&&be&&be(et),ce&&(Zt(et),ce=!1),pr=0},qr=function(bt,Ft,ft){yi[ft]+=bt,li[ft]+=Ft,et._vx.update(bt),et._vy.update(Ft),m?pr||(pr=requestAnimationFrame(Ui)):Ui()},Wr=function(bt,Ft){Te&&!ai&&(et.axis=ai=Math.abs(bt)>Math.abs(Ft)?"x":"y",je=!0),ai!=="y"&&(yi[2]+=bt,et._vx.update(bt,!0)),ai!=="x"&&(li[2]+=Ft,et._vy.update(Ft,!0)),m?pr||(pr=requestAnimationFrame(Ui)):Ui()},lr=function(bt){if(!Qt(bt,1)){bt=Sn(bt,y);var Ft=bt.clientX,ft=bt.clientY,At=Ft-et.x,wt=ft-et.y,yt=et.isDragging;et.x=Ft,et.y=ft,(yt||(At||wt)&&(Math.abs(et.startX-Ft)>=a||Math.abs(et.startY-ft)>=a))&&(Me||(Me=yt?2:1),yt||(et.isDragging=!0),Wr(At,wt))}},mr=et.onPress=function(Pt){Qt(Pt,1)||Pt&&Pt.button||(et.axis=ai=null,mt.pause(),et.isPressed=!0,Pt=Sn(Pt),Fe=nr=0,et.startX=et.x=Pt.clientX,et.startY=et.y=Pt.clientY,et._vx.reset(),et._vy.reset(),ci(Mt?u:re,cr[1],lr,dr,!0),et.deltaX=et.deltaY=0,U&&U(et))},Rt=et.onRelease=function(Pt){if(!Qt(Pt,1)){ui(Mt?u:re,cr[1],lr,!0);var bt=!isNaN(et.y-et.startY),Ft=et.isDragging,ft=Ft&&(Math.abs(et.x-et.startX)>3||Math.abs(et.y-et.startY)>3),At=Sn(Pt);!ft&&bt&&(et._vx.reset(),et._vy.reset(),y&&ne&&Ue.delayedCall(.08,function(){if(Nn()-ar>300&&!Pt.defaultPrevented){if(Pt.target.click)Pt.target.click();else if(re.createEvent){var wt=re.createEvent("MouseEvents");wt.initMouseEvent("click",!0,!0,Yi,1,At.screenX,At.screenY,At.clientX,At.clientY,!1,!1,!1,!1,0,null),Pt.target.dispatchEvent(wt)}}})),et.isDragging=et.isGesturing=et.isPressed=!1,w&&Ft&&!Mt&&mt.restart(!0),Me&&Ui(),J&&Ft&&J(et),K&&K(et,ft)}},Ki=function(bt){return bt.touches&&bt.touches.length>1&&(et.isGesturing=!0)&&jt(bt,et.isDragging)},Qe=function(){return(et.isGesturing=!1)||X(et)},Ii=function(bt){if(!Qt(bt)){var Ft=le(),ft=_i();qr((Ft-gt)*Ee,(ft-ie)*Ee,1),gt=Ft,ie=ft,w&&mt.restart(!0)}},Oi=function(bt){if(!Qt(bt)){bt=Sn(bt,y),Zt&&(ce=!0);var Ft=(bt.deltaMode===1?d:bt.deltaMode===2?Yi.innerHeight:1)*F;qr(bt.deltaX*Ft,bt.deltaY*Ft,0),w&&!Mt&&mt.restart(!0)}},Ar=function(bt){if(!Qt(bt)){var Ft=bt.clientX,ft=bt.clientY,At=Ft-et.x,wt=ft-et.y;et.x=Ft,et.y=ft,Dt=!0,w&&mt.restart(!0),(At||wt)&&Wr(At,wt)}},Yr=function(bt){et.event=bt,It(et)},lt=function(bt){et.event=bt,Wt(et)},pe=function(bt){return Qt(bt)||Sn(bt,y)&&ae(et)};mt=et._dc=Ue.delayedCall(C||.25,ds).pause(),et.deltaX=et.deltaY=0,et._vx=Na(0,50,!0),et._vy=Na(0,50,!0),et.scrollX=le,et.scrollY=_i,et.isDragging=et.isGesturing=et.isPressed=!1,If(this),et.enable=function(Pt){return et.isEnabled||(ci(or?re:u,"scroll",za),f.indexOf("scroll")>=0&&ci(or?re:u,"scroll",Ii,dr,We),f.indexOf("wheel")>=0&&ci(u,"wheel",Oi,dr,We),(f.indexOf("touch")>=0&&Ff||f.indexOf("pointer")>=0)&&(ci(u,cr[0],mr,dr,We),ci(re,cr[2],Rt),ci(re,cr[3],Rt),ne&&ci(u,"click",Ze,!0,!0),ae&&ci(u,"click",pe),jt&&ci(re,"gesturestart",Ki),X&&ci(re,"gestureend",Qe),It&&ci(u,ks+"enter",Yr),Wt&&ci(u,ks+"leave",lt),Yt&&ci(u,ks+"move",Ar)),et.isEnabled=!0,et.isDragging=et.isGesturing=et.isPressed=Dt=Me=!1,et._vx.reset(),et._vy.reset(),gt=le(),ie=_i(),Pt&&Pt.type&&mr(Pt),qe&&qe(et)),et},et.disable=function(){et.isEnabled&&(Qs.filter(function(Pt){return Pt!==et&&Bn(Pt.target)}).length||ui(or?re:u,"scroll",za),et.isPressed&&(et._vx.reset(),et._vy.reset(),ui(Mt?u:re,cr[1],lr,!0)),ui(or?re:u,"scroll",Ii,We),ui(u,"wheel",Oi,We),ui(u,cr[0],mr,We),ui(re,cr[2],Rt),ui(re,cr[3],Rt),ui(u,"click",Ze,!0),ui(u,"click",pe),ui(re,"gesturestart",Ki),ui(re,"gestureend",Qe),ui(u,ks+"enter",Yr),ui(u,ks+"leave",lt),ui(u,ks+"move",Ar),et.isEnabled=et.isPressed=et.isDragging=!1,vi&&vi(et))},et.kill=et.revert=function(){et.disable();var Pt=Qs.indexOf(et);Pt>=0&&Qs.splice(Pt,1),Vr===et&&(Vr=0)},Qs.push(et),Mt&&Bn(u)&&(Vr=et),et.enable(A)},Uc(h,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),h})();Se.version="3.15.0";Se.create=function(h){return new Se(h)};Se.register=Vf;Se.getAll=function(){return Qs.slice()};Se.getById=function(h){return Qs.filter(function(t){return t.vars.id===h})[0]};Of()&&Ue.registerPlugin(Se);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dt,Hs,Nt,Kt,qi,Ht,ul,$o,io,qn,En,go,ii,Ko,Ba,di,uh,ch,Us,zf,ma,Nf,pi,qa,Bf,qf,ts,Wa,cl,nn,pl,Wn,Ya,ga,vo=1,ri=Date.now,va=ri(),sr=0,Mn=0,ph=function(t,r,i){var n=Ni(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+r+"Clamp"]=n,n?t.substr(6,t.length-7):t},dh=function(t,r){return r&&(!Ni(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Qc=function h(){return Mn&&requestAnimationFrame(h)},mh=function(){return Ko=1},gh=function(){return Ko=0},xr=function(t){return t},Fn=function(t){return Math.round(t*1e5)/1e5||0},Wf=function(){return typeof window<"u"},Yf=function(){return dt||Wf()&&(dt=window.gsap)&&dt.registerPlugin&&dt},Is=function(t){return!!~ul.indexOf(t)},$f=function(t){return(t==="Height"?pl:Nt["inner"+t])||qi["client"+t]||Ht["client"+t]},Xf=function(t){return ls(t,"getBoundingClientRect")||(Is(t)?function(){return Oo.width=Nt.innerWidth,Oo.height=pl,Oo}:function(){return Dr(t)})},Jc=function(t,r,i){var n=i.d,a=i.d2,f=i.a;return(f=ls(t,"getBoundingClientRect"))?function(){return f()[n]}:function(){return(r?$f(a):t["client"+a])||0}},t0=function(t,r){return!r||~Tr.indexOf(t)?Xf(t):function(){return Oo}},Sr=function(t,r){var i=r.s,n=r.d2,a=r.d,f=r.a;return Math.max(0,(i="scroll"+n)&&(f=ls(t,i))?f()-Xf(t)()[a]:Is(t)?(qi[i]||Ht[i])-$f(n):t[i]-t["offset"+n])},_o=function(t,r){for(var i=0;i<Us.length;i+=3)(!r||~r.indexOf(Us[i+1]))&&t(Us[i],Us[i+1],Us[i+2])},Ni=function(t){return typeof t=="string"},ni=function(t){return typeof t=="function"},Ln=function(t){return typeof t=="number"},ws=function(t){return typeof t=="object"},Tn=function(t,r,i){return t&&t.progress(r?0:1)&&i&&t.pause()},Xs=function(t,r,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return r(t,i)}):r(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},Gs=Math.abs,Gf="left",jf="top",dl="right",ml="bottom",Ms="width",Fs="height",Yn="Right",$n="Left",Xn="Top",Gn="Bottom",Ae="padding",tr="margin",cn="Width",gl="Height",Ne="px",er=function(t){return Nt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},e0=function(t){var r=er(t).position;t.style.position=r==="absolute"||r==="fixed"?r:"relative"},vh=function(t,r){for(var i in r)i in t||(t[i]=r[i]);return t},Dr=function(t,r){var i=r&&er(t)[Ba]!=="matrix(1, 0, 0, 1, 0, 0)"&&dt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Xo=function(t,r){var i=r.d2;return t["offset"+i]||t["client"+i]||0},Hf=function(t){var r=[],i=t.labels,n=t.duration(),a;for(a in i)r.push(i[a]/n);return r},i0=function(t){return function(r){return dt.utils.snap(Hf(t),r)}},vl=function(t){var r=dt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,a){return n-a});return i?function(n,a,f){f===void 0&&(f=.001);var u;if(!a)return r(n);if(a>0){for(n-=f,u=0;u<i.length;u++)if(i[u]>=n)return i[u];return i[u-1]}else for(u=i.length,n+=f;u--;)if(i[u]<=n)return i[u];return i[0]}:function(n,a,f){f===void 0&&(f=.001);var u=r(n);return!a||Math.abs(u-n)<f||u-n<0==a<0?u:r(a<0?n-t:n+t)}},r0=function(t){return function(r,i){return vl(Hf(t))(r,i.direction)}},yo=function(t,r,i,n){return i.split(",").forEach(function(a){return t(r,a,n)})},Xe=function(t,r,i,n,a){return t.addEventListener(r,i,{passive:!n,capture:!!a})},$e=function(t,r,i,n){return t.removeEventListener(r,i,!!n)},bo=function(t,r,i){i=i&&i.wheelHandler,i&&(t(r,"wheel",i),t(r,"touchmove",i))},_h={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},xo={toggleActions:"play",anticipatePin:0},Go={top:0,left:0,center:.5,bottom:1,right:1},Mo=function(t,r){if(Ni(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=r/100),t=t.substr(0,i-1)),t=n+(t in Go?Go[t]*r:~t.indexOf("%")?parseFloat(t)*r/100:parseFloat(t)||0)}return t},ko=function(t,r,i,n,a,f,u,d){var m=a.startColor,y=a.endColor,w=a.fontSize,C=a.indent,S=a.fontWeight,F=Kt.createElement("div"),A=Is(i)||ls(i,"pinType")==="fixed",W=t.indexOf("scroller")!==-1,J=A?Ht:i.tagName==="IFRAME"?i.contentDocument.body:i,Q=t.indexOf("start")!==-1,U=Q?m:y,K="border-color:"+U+";font-size:"+w+";color:"+U+";font-weight:"+S+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return K+="position:"+((W||d)&&A?"fixed;":"absolute;"),(W||d||!A)&&(K+=(n===Be?dl:ml)+":"+(f+parseFloat(C))+"px;"),u&&(K+="box-sizing:border-box;text-align:left;width:"+u.offsetWidth+"px;"),F._isStart=Q,F.setAttribute("class","gsap-marker-"+t+(r?" marker-"+r:"")),F.style.cssText=K,F.innerText=r||r===0?t+"-"+r:t,J.children[0]?J.insertBefore(F,J.children[0]):J.appendChild(F),F._offset=F["offset"+n.op.d2],Fo(F,0,n,Q),F},Fo=function(t,r,i,n){var a={display:"block"},f=i[n?"os2":"p2"],u=i[n?"p2":"os2"];t._isFlipped=n,a[i.a+"Percent"]=n?-100:0,a[i.a]=n?"1px":0,a["border"+f+cn]=1,a["border"+u+cn]=0,a[i.p]=r+"px",dt.set(t,a)},Vt=[],$a={},ro,yh=function(){return ri()-sr>34&&(ro||(ro=requestAnimationFrame(zr)))},js=function(){(!pi||!pi.isPressed||pi.startX>Ht.clientWidth)&&(Bt.cache++,pi?ro||(ro=requestAnimationFrame(zr)):zr(),sr||Rs("scrollStart"),sr=ri())},_a=function(){qf=Nt.innerWidth,Bf=Nt.innerHeight},In=function(t){Bt.cache++,(t===!0||!ii&&!Nf&&!Kt.fullscreenElement&&!Kt.webkitFullscreenElement&&(!qa||qf!==Nt.innerWidth||Math.abs(Nt.innerHeight-Bf)>Nt.innerHeight*.25))&&$o.restart(!0)},Os={},s0=[],Uf=function h(){return $e(zt,"scrollEnd",h)||Ts(!0)},Rs=function(t){return Os[t]&&Os[t].map(function(r){return r()})||s0},zi=[],Kf=function(t){for(var r=0;r<zi.length;r+=5)(!t||zi[r+4]&&zi[r+4].query===t)&&(zi[r].style.cssText=zi[r+1],zi[r].getBBox&&zi[r].setAttribute("transform",zi[r+2]||""),zi[r+3].uncache=1)},Zf=function(){return Bt.forEach(function(t){return ni(t)&&++t.cacheID&&(t.rec=t())})},_l=function(t,r){var i;for(di=0;di<Vt.length;di++)i=Vt[di],i&&(!r||i._ctx===r)&&(t?i.kill(1):i.revert(!0,!0));Wn=!0,r&&Kf(r),r||Rs("revert")},Qf=function(t,r){Bt.cache++,(r||!mi)&&Bt.forEach(function(i){return ni(i)&&i.cacheID++&&(i.rec=0)}),Ni(t)&&(Nt.history.scrollRestoration=cl=t)},mi,Ls=0,bh,n0=function(){if(bh!==Ls){var t=bh=Ls;requestAnimationFrame(function(){return t===Ls&&Ts(!0)})}},Jf=function(){Ht.appendChild(nn),pl=!pi&&nn.offsetHeight||Nt.innerHeight,Ht.removeChild(nn)},xh=function(t){return io(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=t?"none":"block"})},Ts=function(t,r){if(qi=Kt.documentElement,Ht=Kt.body,ul=[Nt,Kt,qi,Ht],sr&&!t&&!Wn){Xe(zt,"scrollEnd",Uf);return}Jf(),mi=zt.isRefreshing=!0,Wn||Zf();var i=Rs("refreshInit");zf&&zt.sort(),r||_l(),Bt.forEach(function(n){ni(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Vt.slice(0).forEach(function(n){return n.refresh()}),Wn=!1,Vt.forEach(function(n){if(n._subPinOffset&&n.pin){var a=n.vars.horizontal?"offsetWidth":"offsetHeight",f=n.pin[a];n.revert(!0,1),n.adjustPinSpacing(n.pin[a]-f),n.refresh()}}),Ya=1,xh(!0),Vt.forEach(function(n){var a=Sr(n.scroller,n._dir),f=n.vars.end==="max"||n._endClamp&&n.end>a,u=n._startClamp&&n.start>=a;(f||u)&&n.setPositions(u?a-1:n.start,f?Math.max(u?a:n.start+1,a):n.end,!0)}),xh(!1),Ya=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),Bt.forEach(function(n){ni(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Qf(cl,1),$o.pause(),Ls++,mi=2,zr(2),Vt.forEach(function(n){return ni(n.vars.onRefresh)&&n.vars.onRefresh(n)}),mi=zt.isRefreshing=!1,Rs("refresh")},Xa=0,Lo=1,jn,zr=function(t){if(t===2||!mi&&!Wn){zt.isUpdating=!0,jn&&jn.update(0);var r=Vt.length,i=ri(),n=i-va>=50,a=r&&Vt[0].scroll();if(Lo=Xa>a?-1:1,mi||(Xa=a),n&&(sr&&!Ko&&i-sr>200&&(sr=0,Rs("scrollEnd")),En=va,va=i),Lo<0){for(di=r;di-- >0;)Vt[di]&&Vt[di].update(0,n);Lo=1}else for(di=0;di<r;di++)Vt[di]&&Vt[di].update(0,n);zt.isUpdating=!1}ro=0},Ga=[Gf,jf,ml,dl,tr+Gn,tr+Yn,tr+Xn,tr+$n,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Io=Ga.concat([Ms,Fs,"boxSizing","max"+cn,"max"+gl,"position",tr,Ae,Ae+Xn,Ae+Yn,Ae+Gn,Ae+$n]),o0=function(t,r,i){on(i);var n=t._gsap;if(n.spacerIsNative)on(n.spacerState);else if(t._gsap.swappedIn){var a=r.parentNode;a&&(a.insertBefore(t,r),a.removeChild(r))}t._gsap.swappedIn=!1},ya=function(t,r,i,n){if(!t._gsap.swappedIn){for(var a=Ga.length,f=r.style,u=t.style,d;a--;)d=Ga[a],f[d]=i[d];f.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(f.display="inline-block"),u[ml]=u[dl]="auto",f.flexBasis=i.flexBasis||"auto",f.overflow="visible",f.boxSizing="border-box",f[Ms]=Xo(t,gi)+Ne,f[Fs]=Xo(t,Be)+Ne,f[Ae]=u[tr]=u[jf]=u[Gf]="0",on(n),u[Ms]=u["max"+cn]=i[Ms],u[Fs]=u["max"+gl]=i[Fs],u[Ae]=i[Ae],t.parentNode!==r&&(t.parentNode.insertBefore(r,t),r.appendChild(t)),t._gsap.swappedIn=!0}},a0=/([A-Z])/g,on=function(t){if(t){var r=t.t.style,i=t.length,n=0,a,f;for((t.t._gsap||dt.core.getCache(t.t)).uncache=1;n<i;n+=2)f=t[n+1],a=t[n],f?r[a]=f:r[a]&&r.removeProperty(a.replace(a0,"-$1").toLowerCase())}},wo=function(t){for(var r=Io.length,i=t.style,n=[],a=0;a<r;a++)n.push(Io[a],i[Io[a]]);return n.t=t,n},l0=function(t,r,i){for(var n=[],a=t.length,f=i?8:0,u;f<a;f+=2)u=t[f],n.push(u,u in r?r[u]:t[f+1]);return n.t=t.t,n},Oo={left:0,top:0},kh=function(t,r,i,n,a,f,u,d,m,y,w,C,S,F){ni(t)&&(t=t(d)),Ni(t)&&t.substr(0,3)==="max"&&(t=C+(t.charAt(4)==="="?Mo("0"+t.substr(3),i):0));var A=S?S.time():0,W,J,Q;if(S&&S.seek(0),isNaN(t)||(t=+t),Ln(t))S&&(t=dt.utils.mapRange(S.scrollTrigger.start,S.scrollTrigger.end,0,C,t)),u&&Fo(u,i,n,!0);else{ni(r)&&(r=r(d));var U=(t||"0").split(" "),K,Z,rt,tt;Q=Pi(r,d)||Ht,K=Dr(Q)||{},(!K||!K.left&&!K.top)&&er(Q).display==="none"&&(tt=Q.style.display,Q.style.display="block",K=Dr(Q),tt?Q.style.display=tt:Q.style.removeProperty("display")),Z=Mo(U[0],K[n.d]),rt=Mo(U[1]||"0",i),t=K[n.p]-m[n.p]-y+Z+a-rt,u&&Fo(u,rt,n,i-rt<20||u._isStart&&rt>20),i-=i-rt}if(F&&(d[F]=t||-.001,t<0&&(t=0)),f){var at=t+i,it=f._isStart;W="scroll"+n.d2,Fo(f,at,n,it&&at>20||!it&&(w?Math.max(Ht[W],qi[W]):f.parentNode[W])<=at+1),w&&(m=Dr(u),w&&(f.style[n.op.p]=m[n.op.p]-n.op.m-f._offset+Ne))}return S&&Q&&(W=Dr(Q),S.seek(C),J=Dr(Q),S._caScrollDist=W[n.p]-J[n.p],t=t/S._caScrollDist*C),S&&S.seek(A),S?t:Math.round(t)},h0=/(webkit|moz|length|cssText|inset)/i,wh=function(t,r,i,n){if(t.parentNode!==r){var a=t.style,f,u;if(r===Ht){t._stOrig=a.cssText,u=er(t);for(f in u)!+f&&!h0.test(f)&&u[f]&&typeof a[f]=="string"&&f!=="0"&&(a[f]=u[f]);a.top=i,a.left=n}else a.cssText=t._stOrig;dt.core.getCache(t).uncache=1,r.appendChild(t)}},tu=function(t,r,i){var n=r,a=n;return function(f){var u=Math.round(t());return u!==n&&u!==a&&Math.abs(u-n)>3&&Math.abs(u-a)>3&&(f=u,i&&i()),a=n,n=Math.round(f),n}},So=function(t,r,i){var n={};n[r.p]="+="+i,dt.set(t,n)},Sh=function(t,r){var i=cs(t,r),n="_scroll"+r.p2,a=function f(u,d,m,y,w){var C=f.tween,S=d.onComplete,F={};m=m||i();var A=tu(i,m,function(){C.kill(),f.tween=0});return w=y&&w||0,y=y||u-m,C&&C.kill(),d[n]=u,d.inherit=!1,d.modifiers=F,F[n]=function(){return A(m+y*C.ratio+w*C.ratio*C.ratio)},d.onUpdate=function(){Bt.cache++,f.tween&&zr()},d.onComplete=function(){f.tween=0,S&&S.call(C)},C=f.tween=dt.to(t,d),C};return t[n]=i,i.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Xe(t,"wheel",i.wheelHandler),zt.isTouch&&Xe(t,"touchmove",i.wheelHandler),a},zt=(function(){function h(r,i){Hs||h.register(dt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wa(this),this.init(r,i)}var t=h.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Mn){this.update=this.refresh=this.kill=xr;return}i=vh(Ni(i)||Ln(i)||i.nodeType?{trigger:i}:i,xo);var a=i,f=a.onUpdate,u=a.toggleClass,d=a.id,m=a.onToggle,y=a.onRefresh,w=a.scrub,C=a.trigger,S=a.pin,F=a.pinSpacing,A=a.invalidateOnRefresh,W=a.anticipatePin,J=a.onScrubComplete,Q=a.onSnapComplete,U=a.once,K=a.snap,Z=a.pinReparent,rt=a.pinSpacer,tt=a.containerAnimation,at=a.fastScrollEnd,it=a.preventOverlaps,st=i.horizontal||i.containerAnimation&&i.horizontal!==!1?gi:Be,Ot=!w&&w!==0,ut=Pi(i.scroller||Nt),qt=dt.core.getCache(ut),It=Is(ut),Wt=("pinType"in i?i.pinType:ls(ut,"pinType")||It&&"fixed")==="fixed",Yt=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Tt=Ot&&i.toggleActions.split(" "),Mt="markers"in i?i.markers:xo.markers,jt=It?0:parseFloat(er(ut)["border"+st.p2+cn])||0,X=this,Zt=i.onRefreshInit&&function(){return i.onRefreshInit(X)},qe=Jc(ut,It,st),vi=t0(ut,It),ae=0,Ee=0,We=0,ne=cs(ut,st),Te,be,pr,mt,Me,Dt,ce,je,ai,et,Fe,nr,dr,le,_i,gt,ie,he,or,re,yi,li,ar,Ze,Qt,ds,Ui,qr,Wr,lr,mr,Rt,Ki,Qe,Ii,Oi,Ar,Yr,lt;if(X._startClamp=X._endClamp=!1,X._dir=st,W*=45,X.scroller=ut,X.scroll=tt?tt.time.bind(tt):ne,mt=ne(),X.vars=i,n=n||i.animation,"refreshPriority"in i&&(zf=1,i.refreshPriority===-9999&&(jn=X)),qt.tweenScroll=qt.tweenScroll||{top:Sh(ut,Be),left:Sh(ut,gi)},X.tweenTo=Te=qt.tweenScroll[st.p],X.scrubDuration=function(ft){Ki=Ln(ft)&&ft,Ki?Rt?Rt.duration(ft):Rt=dt.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ki,paused:!0,onComplete:function(){return J&&J(X)}}):(Rt&&Rt.progress(1).kill(),Rt=0)},n&&(n.vars.lazy=!1,n._initted&&!X.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),X.animation=n.pause(),n.scrollTrigger=X,X.scrubDuration(w),lr=0,d||(d=n.vars.id)),K&&((!ws(K)||K.push)&&(K={snapTo:K}),"scrollBehavior"in Ht.style&&dt.set(It?[Ht,qi]:ut,{scrollBehavior:"auto"}),Bt.forEach(function(ft){return ni(ft)&&ft.target===(It?Kt.scrollingElement||qi:ut)&&(ft.smooth=!1)}),pr=ni(K.snapTo)?K.snapTo:K.snapTo==="labels"?i0(n):K.snapTo==="labelsDirectional"?r0(n):K.directional!==!1?function(ft,At){return vl(K.snapTo)(ft,ri()-Ee<500?0:At.direction)}:dt.utils.snap(K.snapTo),Qe=K.duration||{min:.1,max:2},Qe=ws(Qe)?qn(Qe.min,Qe.max):qn(Qe,Qe),Ii=dt.delayedCall(K.delay||Ki/2||.1,function(){var ft=ne(),At=ri()-Ee<500,wt=Te.tween;if((At||Math.abs(X.getVelocity())<10)&&!wt&&!Ko&&ae!==ft){var yt=(ft-Dt)/le,_e=n&&!Ot?n.totalProgress():yt,pt=At?0:(_e-mr)/(ri()-En)*1e3||0,de=dt.utils.clamp(-yt,1-yt,Gs(pt/2)*pt/.185),Le=yt+(K.inertia===!1?0:de),fe,se,Ut=K,Ri=Ut.onStart,oe=Ut.onInterrupt,hi=Ut.onComplete;if(fe=pr(Le,X),Ln(fe)||(fe=Le),se=Math.max(0,Math.round(Dt+fe*le)),ft<=ce&&ft>=Dt&&se!==ft){if(wt&&!wt._initted&&wt.data<=Gs(se-ft))return;K.inertia===!1&&(de=fe-yt),Te(se,{duration:Qe(Gs(Math.max(Gs(Le-_e),Gs(fe-_e))*.185/pt/.05||0)),ease:K.ease||"power3",data:Gs(se-ft),onInterrupt:function(){return Ii.restart(!0)&&oe&&Xs(X,oe)},onComplete:function(){X.update(),ae=ne(),n&&!Ot&&(Rt?Rt.resetTo("totalProgress",fe,n._tTime/n._tDur):n.progress(fe)),lr=mr=n&&!Ot?n.totalProgress():X.progress,Q&&Q(X),hi&&Xs(X,hi)}},ft,de*le,se-ft-de*le),Ri&&Xs(X,Ri,Te.tween)}}else X.isActive&&ae!==ft&&Ii.restart(!0)}).pause()),d&&($a[d]=X),C=X.trigger=Pi(C||S!==!0&&S),lt=C&&C._gsap&&C._gsap.stRevert,lt&&(lt=lt(X)),S=S===!0?C:Pi(S),Ni(u)&&(u={targets:C,className:u}),S&&(F===!1||F===tr||(F=!F&&S.parentNode&&S.parentNode.style&&er(S.parentNode).display==="flex"?!1:Ae),X.pin=S,be=dt.core.getCache(S),be.spacer?_i=be.pinState:(rt&&(rt=Pi(rt),rt&&!rt.nodeType&&(rt=rt.current||rt.nativeElement),be.spacerIsNative=!!rt,rt&&(be.spacerState=wo(rt))),be.spacer=he=rt||Kt.createElement("div"),he.classList.add("pin-spacer"),d&&he.classList.add("pin-spacer-"+d),be.pinState=_i=wo(S)),i.force3D!==!1&&dt.set(S,{force3D:!0}),X.spacer=he=be.spacer,Wr=er(S),Ze=Wr[F+st.os2],re=dt.getProperty(S),yi=dt.quickSetter(S,st.a,Ne),ya(S,he,Wr),ie=wo(S)),Mt){nr=ws(Mt)?vh(Mt,_h):_h,et=ko("scroller-start",d,ut,st,nr,0),Fe=ko("scroller-end",d,ut,st,nr,0,et),or=et["offset"+st.op.d2];var pe=Pi(ls(ut,"content")||ut);je=this.markerStart=ko("start",d,pe,st,nr,or,0,tt),ai=this.markerEnd=ko("end",d,pe,st,nr,or,0,tt),tt&&(Yr=dt.quickSetter([je,ai],st.a,Ne)),!Wt&&!(Tr.length&&ls(ut,"fixedMarkers")===!0)&&(e0(It?Ht:ut),dt.set([et,Fe],{force3D:!0}),ds=dt.quickSetter(et,st.a,Ne),qr=dt.quickSetter(Fe,st.a,Ne))}if(tt){var Pt=tt.vars.onUpdate,bt=tt.vars.onUpdateParams;tt.eventCallback("onUpdate",function(){X.update(0,0,1),Pt&&Pt.apply(tt,bt||[])})}if(X.previous=function(){return Vt[Vt.indexOf(X)-1]},X.next=function(){return Vt[Vt.indexOf(X)+1]},X.revert=function(ft,At){if(!At)return X.kill(!0);var wt=ft!==!1||!X.enabled,yt=ii;wt!==X.isReverted&&(wt&&(Oi=Math.max(ne(),X.scroll.rec||0),We=X.progress,Ar=n&&n.progress()),je&&[je,ai,et,Fe].forEach(function(_e){return _e.style.display=wt?"none":"block"}),wt&&(ii=X,X.update(wt)),S&&(!Z||!X.isActive)&&(wt?o0(S,he,_i):ya(S,he,er(S),Qt)),wt||X.update(wt),ii=yt,X.isReverted=wt)},X.refresh=function(ft,At,wt,yt){if(!((ii||!X.enabled)&&!At)){if(S&&ft&&sr){Xe(h,"scrollEnd",Uf);return}!mi&&Zt&&Zt(X),ii=X,Te.tween&&!wt&&(Te.tween.kill(),Te.tween=0),Rt&&Rt.pause(),A&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Di){return Di.vars.immediateRender&&Di.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),X.isReverted||X.revert(!0,!0),X._subPinOffset=!1;var _e=qe(),pt=vi(),de=tt?tt.duration():Sr(ut,st),Le=le<=.01||!le,fe=0,se=yt||0,Ut=ws(wt)?wt.end:i.end,Ri=i.endTrigger||C,oe=ws(wt)?wt.start:i.start||(i.start===0||!C?0:S?"0 0":"0 100%"),hi=X.pinnedContainer=i.pinnedContainer&&Pi(i.pinnedContainer,X),Zi=C&&Math.max(0,Vt.indexOf(X))||0,Ie=Zi,Oe,Re,gr,Vs,De,xe,Ve,Je,bi,hr,xi,ti,vr;for(Mt&&ws(wt)&&(ti=dt.getProperty(et,st.p),vr=dt.getProperty(Fe,st.p));Ie-- >0;)xe=Vt[Ie],xe.end||xe.refresh(0,1)||(ii=X),Ve=xe.pin,Ve&&(Ve===C||Ve===S||Ve===hi)&&!xe.isReverted&&(hr||(hr=[]),hr.unshift(xe),xe.revert(!0,!0)),xe!==Vt[Ie]&&(Zi--,Ie--);for(ni(oe)&&(oe=oe(X)),oe=ph(oe,"start",X),Dt=kh(oe,C,_e,st,ne(),je,et,X,pt,jt,Wt,de,tt,X._startClamp&&"_startClamp")||(S?-.001:0),ni(Ut)&&(Ut=Ut(X)),Ni(Ut)&&!Ut.indexOf("+=")&&(~Ut.indexOf(" ")?Ut=(Ni(oe)?oe.split(" ")[0]:"")+Ut:(fe=Mo(Ut.substr(2),_e),Ut=Ni(oe)?oe:(tt?dt.utils.mapRange(0,tt.duration(),tt.scrollTrigger.start,tt.scrollTrigger.end,Dt):Dt)+fe,Ri=C)),Ut=ph(Ut,"end",X),ce=Math.max(Dt,kh(Ut||(Ri?"100% 0":de),Ri,_e,st,ne()+fe,ai,Fe,X,pt,jt,Wt,de,tt,X._endClamp&&"_endClamp"))||-.001,fe=0,Ie=Zi;Ie--;)xe=Vt[Ie]||{},Ve=xe.pin,Ve&&xe.start-xe._pinPush<=Dt&&!tt&&xe.end>0&&(Oe=xe.end-(X._startClamp?Math.max(0,xe.start):xe.start),(Ve===C&&xe.start-xe._pinPush<Dt||Ve===hi)&&isNaN(oe)&&(fe+=Oe*(1-xe.progress)),Ve===S&&(se+=Oe));if(Dt+=fe,ce+=fe,X._startClamp&&(X._startClamp+=fe),X._endClamp&&!mi&&(X._endClamp=ce||-.001,ce=Math.min(ce,Sr(ut,st))),le=ce-Dt||(Dt-=.01)&&.001,Le&&(We=dt.utils.clamp(0,1,dt.utils.normalize(Dt,ce,Oi))),X._pinPush=se,je&&fe&&(Oe={},Oe[st.a]="+="+fe,hi&&(Oe[st.p]="-="+ne()),dt.set([je,ai],Oe)),S&&!(Ya&&X.end>=Sr(ut,st)))Oe=er(S),Vs=st===Be,gr=ne(),li=parseFloat(re(st.a))+se,!de&&ce>1&&(xi=(It?Kt.scrollingElement||qi:ut).style,xi={style:xi,value:xi["overflow"+st.a.toUpperCase()]},It&&er(Ht)["overflow"+st.a.toUpperCase()]!=="scroll"&&(xi.style["overflow"+st.a.toUpperCase()]="scroll")),ya(S,he,Oe),ie=wo(S),Re=Dr(S,!0),Je=Wt&&cs(ut,Vs?gi:Be)(),F?(Qt=[F+st.os2,le+se+Ne],Qt.t=he,Ie=F===Ae?Xo(S,st)+le+se:0,Ie&&(Qt.push(st.d,Ie+Ne),he.style.flexBasis!=="auto"&&(he.style.flexBasis=Ie+Ne)),on(Qt),hi&&Vt.forEach(function(Di){Di.pin===hi&&Di.vars.pinSpacing!==!1&&(Di._subPinOffset=!0)}),Wt&&ne(Oi)):(Ie=Xo(S,st),Ie&&he.style.flexBasis!=="auto"&&(he.style.flexBasis=Ie+Ne)),Wt&&(De={top:Re.top+(Vs?gr-Dt:Je)+Ne,left:Re.left+(Vs?Je:gr-Dt)+Ne,boxSizing:"border-box",position:"fixed"},De[Ms]=De["max"+cn]=Math.ceil(Re.width)+Ne,De[Fs]=De["max"+gl]=Math.ceil(Re.height)+Ne,De[tr]=De[tr+Xn]=De[tr+Yn]=De[tr+Gn]=De[tr+$n]="0",De[Ae]=Oe[Ae],De[Ae+Xn]=Oe[Ae+Xn],De[Ae+Yn]=Oe[Ae+Yn],De[Ae+Gn]=Oe[Ae+Gn],De[Ae+$n]=Oe[Ae+$n],gt=l0(_i,De,Z),mi&&ne(0)),n?(bi=n._initted,ma(1),n.render(n.duration(),!0,!0),ar=re(st.a)-li+le+se,Ui=Math.abs(le-ar)>1,Wt&&Ui&&gt.splice(gt.length-2,2),n.render(0,!0,!0),bi||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),ma(0)):ar=le,xi&&(xi.value?xi.style["overflow"+st.a.toUpperCase()]=xi.value:xi.style.removeProperty("overflow-"+st.a));else if(C&&ne()&&!tt)for(Re=C.parentNode;Re&&Re!==Ht;)Re._pinOffset&&(Dt-=Re._pinOffset,ce-=Re._pinOffset),Re=Re.parentNode;hr&&hr.forEach(function(Di){return Di.revert(!1,!0)}),X.start=Dt,X.end=ce,mt=Me=mi?Oi:ne(),!tt&&!mi&&(mt<Oi&&ne(Oi),X.scroll.rec=0),X.revert(!1,!0),Ee=ri(),Ii&&(ae=-1,Ii.restart(!0)),ii=0,n&&Ot&&(n._initted||Ar)&&n.progress()!==Ar&&n.progress(Ar||0,!0).render(n.time(),!0,!0),(Le||We!==X.progress||tt||A||n&&!n._initted)&&(n&&!Ot&&(n._initted||We||n.vars.immediateRender!==!1)&&n.totalProgress(tt&&Dt<-.001&&!We?dt.utils.normalize(Dt,ce,0):We,!0),X.progress=Le||(mt-Dt)/le===We?0:We),S&&F&&(he._pinOffset=Math.round(X.progress*ar)),Rt&&Rt.invalidate(),isNaN(ti)||(ti-=dt.getProperty(et,st.p),vr-=dt.getProperty(Fe,st.p),So(et,st,ti),So(je,st,ti-(yt||0)),So(Fe,st,vr),So(ai,st,vr-(yt||0))),Le&&!mi&&X.update(),y&&!mi&&!dr&&(dr=!0,y(X),dr=!1)}},X.getVelocity=function(){return(ne()-Me)/(ri()-En)*1e3||0},X.endAnimation=function(){Tn(X.callbackAnimation),n&&(Rt?Rt.progress(1):n.paused()?Ot||Tn(n,X.direction<0,1):Tn(n,n.reversed()))},X.labelToScroll=function(ft){return n&&n.labels&&(Dt||X.refresh()||Dt)+n.labels[ft]/n.duration()*le||0},X.getTrailing=function(ft){var At=Vt.indexOf(X),wt=X.direction>0?Vt.slice(0,At).reverse():Vt.slice(At+1);return(Ni(ft)?wt.filter(function(yt){return yt.vars.preventOverlaps===ft}):wt).filter(function(yt){return X.direction>0?yt.end<=Dt:yt.start>=ce})},X.update=function(ft,At,wt){if(!(tt&&!wt&&!ft)){var yt=mi===!0?Oi:X.scroll(),_e=ft?0:(yt-Dt)/le,pt=_e<0?0:_e>1?1:_e||0,de=X.progress,Le,fe,se,Ut,Ri,oe,hi,Zi;if(At&&(Me=mt,mt=tt?ne():yt,K&&(mr=lr,lr=n&&!Ot?n.totalProgress():pt)),W&&S&&!ii&&!vo&&sr&&(!pt&&Dt<yt+(yt-Me)/(ri()-En)*W?pt=1e-4:pt===1&&ce>yt+(yt-Me)/(ri()-En)*W&&(pt=.9999)),pt!==de&&X.enabled){if(Le=X.isActive=!!pt&&pt<1,fe=!!de&&de<1,oe=Le!==fe,Ri=oe||!!pt!=!!de,X.direction=pt>de?1:-1,X.progress=pt,Ri&&!ii&&(se=pt&&!de?0:pt===1?1:de===1?2:3,Ot&&(Ut=!oe&&Tt[se+1]!=="none"&&Tt[se+1]||Tt[se],Zi=n&&(Ut==="complete"||Ut==="reset"||Ut in n))),it&&(oe||Zi)&&(Zi||w||!n)&&(ni(it)?it(X):X.getTrailing(it).forEach(function(gr){return gr.endAnimation()})),Ot||(Rt&&!ii&&!vo?(Rt._dp._time-Rt._start!==Rt._time&&Rt.render(Rt._dp._time-Rt._start),Rt.resetTo?Rt.resetTo("totalProgress",pt,n._tTime/n._tDur):(Rt.vars.totalProgress=pt,Rt.invalidate().restart())):n&&n.totalProgress(pt,!!(ii&&(Ee||ft)))),S){if(ft&&F&&(he.style[F+st.os2]=Ze),!Wt)yi(Fn(li+ar*pt));else if(Ri){if(hi=!ft&&pt>de&&ce+1>yt&&yt+1>=Sr(ut,st),Z)if(!ft&&(Le||hi)){var Ie=Dr(S,!0),Oe=yt-Dt;wh(S,Ht,Ie.top+(st===Be?Oe:0)+Ne,Ie.left+(st===Be?0:Oe)+Ne)}else wh(S,he);on(Le||hi?gt:ie),Ui&&pt<1&&Le||yi(li+(pt===1&&!hi?ar:0))}}K&&!Te.tween&&!ii&&!vo&&Ii.restart(!0),u&&(oe||U&&pt&&(pt<1||!ga))&&io(u.targets).forEach(function(gr){return gr.classList[Le||U?"add":"remove"](u.className)}),f&&!Ot&&!ft&&f(X),Ri&&!ii?(Ot&&(Zi&&(Ut==="complete"?n.pause().totalProgress(1):Ut==="reset"?n.restart(!0).pause():Ut==="restart"?n.restart(!0):n[Ut]()),f&&f(X)),(oe||!ga)&&(m&&oe&&Xs(X,m),Yt[se]&&Xs(X,Yt[se]),U&&(pt===1?X.kill(!1,1):Yt[se]=0),oe||(se=pt===1?1:3,Yt[se]&&Xs(X,Yt[se]))),at&&!Le&&Math.abs(X.getVelocity())>(Ln(at)?at:2500)&&(Tn(X.callbackAnimation),Rt?Rt.progress(1):Tn(n,Ut==="reverse"?1:!pt,1))):Ot&&f&&!ii&&f(X)}if(qr){var Re=tt?yt/tt.duration()*(tt._caScrollDist||0):yt;ds(Re+(et._isFlipped?1:0)),qr(Re)}Yr&&Yr(-yt/tt.duration()*(tt._caScrollDist||0))}},X.enable=function(ft,At){X.enabled||(X.enabled=!0,Xe(ut,"resize",In),It||Xe(ut,"scroll",js),Zt&&Xe(h,"refreshInit",Zt),ft!==!1&&(X.progress=We=0,mt=Me=ae=ne()),At!==!1&&X.refresh())},X.getTween=function(ft){return ft&&Te?Te.tween:Rt},X.setPositions=function(ft,At,wt,yt){if(tt){var _e=tt.scrollTrigger,pt=tt.duration(),de=_e.end-_e.start;ft=_e.start+de*ft/pt,At=_e.start+de*At/pt}X.refresh(!1,!1,{start:dh(ft,wt&&!!X._startClamp),end:dh(At,wt&&!!X._endClamp)},yt),X.update()},X.adjustPinSpacing=function(ft){if(Qt&&ft){var At=Qt.indexOf(st.d)+1;Qt[At]=parseFloat(Qt[At])+ft+Ne,Qt[1]=parseFloat(Qt[1])+ft+Ne,on(Qt)}},X.disable=function(ft,At){if(ft!==!1&&X.revert(!0,!0),X.enabled&&(X.enabled=X.isActive=!1,At||Rt&&Rt.pause(),Oi=0,be&&(be.uncache=1),Zt&&$e(h,"refreshInit",Zt),Ii&&(Ii.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!It)){for(var wt=Vt.length;wt--;)if(Vt[wt].scroller===ut&&Vt[wt]!==X)return;$e(ut,"resize",In),It||$e(ut,"scroll",js)}},X.kill=function(ft,At){X.disable(ft,At),Rt&&!At&&Rt.kill(),d&&delete $a[d];var wt=Vt.indexOf(X);wt>=0&&Vt.splice(wt,1),wt===di&&Lo>0&&di--,wt=0,Vt.forEach(function(yt){return yt.scroller===X.scroller&&(wt=1)}),wt||mi||(X.scroll.rec=0),n&&(n.scrollTrigger=null,ft&&n.revert({kill:!1}),At||n.kill()),je&&[je,ai,et,Fe].forEach(function(yt){return yt.parentNode&&yt.parentNode.removeChild(yt)}),jn===X&&(jn=0),S&&(be&&(be.uncache=1),wt=0,Vt.forEach(function(yt){return yt.pin===S&&wt++}),wt||(be.spacer=0)),i.onKill&&i.onKill(X)},Vt.push(X),X.enable(!1,!1),lt&&lt(X),n&&n.add&&!le){var Ft=X.update;X.update=function(){X.update=Ft,Bt.cache++,Dt||ce||X.refresh()},dt.delayedCall(.01,X.update),le=.01,Dt=ce=0}else X.refresh();S&&n0()},h.register=function(i){return Hs||(dt=i||Yf(),Wf()&&window.document&&h.enable(),Hs=Mn),Hs},h.defaults=function(i){if(i)for(var n in i)xo[n]=i[n];return xo},h.disable=function(i,n){Mn=0,Vt.forEach(function(f){return f[n?"kill":"disable"](i)}),$e(Nt,"wheel",js),$e(Kt,"scroll",js),clearInterval(go),$e(Kt,"touchcancel",xr),$e(Ht,"touchstart",xr),yo($e,Kt,"pointerdown,touchstart,mousedown",mh),yo($e,Kt,"pointerup,touchend,mouseup",gh),$o.kill(),_o($e);for(var a=0;a<Bt.length;a+=3)bo($e,Bt[a],Bt[a+1]),bo($e,Bt[a],Bt[a+2])},h.enable=function(){if(Nt=window,Kt=document,qi=Kt.documentElement,Ht=Kt.body,dt){if(io=dt.utils.toArray,qn=dt.utils.clamp,Wa=dt.core.context||xr,ma=dt.core.suppressOverwrites||xr,cl=Nt.history.scrollRestoration||"auto",Xa=Nt.pageYOffset||0,dt.core.globals("ScrollTrigger",h),Ht){Mn=1,nn=document.createElement("div"),nn.style.height="100vh",nn.style.position="absolute",Jf(),Qc(),Se.register(dt),h.isTouch=Se.isTouch,ts=Se.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qa=Se.isTouch===1,Xe(Nt,"wheel",js),ul=[Nt,Kt,qi,Ht],dt.matchMedia?(h.matchMedia=function(y){var w=dt.matchMedia(),C;for(C in y)w.add(C,y[C]);return w},dt.addEventListener("matchMediaInit",function(){Zf(),_l()}),dt.addEventListener("matchMediaRevert",function(){return Kf()}),dt.addEventListener("matchMedia",function(){Ts(0,1),Rs("matchMedia")}),dt.matchMedia().add("(orientation: portrait)",function(){return _a(),_a})):console.warn("Requires GSAP 3.11.0 or later"),_a(),Xe(Kt,"scroll",js);var i=Ht.hasAttribute("style"),n=Ht.style,a=n.borderTopStyle,f=dt.core.Animation.prototype,u,d;for(f.revert||Object.defineProperty(f,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",u=Dr(Ht),Be.m=Math.round(u.top+Be.sc())||0,gi.m=Math.round(u.left+gi.sc())||0,a?n.borderTopStyle=a:n.removeProperty("border-top-style"),i||(Ht.setAttribute("style",""),Ht.removeAttribute("style")),go=setInterval(yh,250),dt.delayedCall(.5,function(){return vo=0}),Xe(Kt,"touchcancel",xr),Xe(Ht,"touchstart",xr),yo(Xe,Kt,"pointerdown,touchstart,mousedown",mh),yo(Xe,Kt,"pointerup,touchend,mouseup",gh),Ba=dt.utils.checkPrefix("transform"),Io.push(Ba),Hs=ri(),$o=dt.delayedCall(.2,Ts).pause(),Us=[Kt,"visibilitychange",function(){var y=Nt.innerWidth,w=Nt.innerHeight;Kt.hidden?(uh=y,ch=w):(uh!==y||ch!==w)&&In()},Kt,"DOMContentLoaded",Ts,Nt,"load",Ts,Nt,"resize",In],_o(Xe),Vt.forEach(function(y){return y.enable(0,1)}),d=0;d<Bt.length;d+=3)bo($e,Bt[d],Bt[d+1]),bo($e,Bt[d],Bt[d+2])}else if(Kt){var m=function y(){h.enable(),Kt.removeEventListener("DOMContentLoaded",y)};Kt.addEventListener("DOMContentLoaded",m)}}},h.config=function(i){"limitCallbacks"in i&&(ga=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(go)||(go=n)&&setInterval(yh,n),"ignoreMobileResize"in i&&(qa=h.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(_o($e)||_o(Xe,i.autoRefreshEvents||"none"),Nf=(i.autoRefreshEvents+"").indexOf("resize")===-1)},h.scrollerProxy=function(i,n){var a=Pi(i),f=Bt.indexOf(a),u=Is(a);~f&&Bt.splice(f,u?6:2),n&&(u?Tr.unshift(Nt,n,Ht,n,qi,n):Tr.unshift(a,n))},h.clearMatchMedia=function(i){Vt.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},h.isInViewport=function(i,n,a){var f=(Ni(i)?Pi(i):i).getBoundingClientRect(),u=f[a?Ms:Fs]*n||0;return a?f.right-u>0&&f.left+u<Nt.innerWidth:f.bottom-u>0&&f.top+u<Nt.innerHeight},h.positionInViewport=function(i,n,a){Ni(i)&&(i=Pi(i));var f=i.getBoundingClientRect(),u=f[a?Ms:Fs],d=n==null?u/2:n in Go?Go[n]*u:~n.indexOf("%")?parseFloat(n)*u/100:parseFloat(n)||0;return a?(f.left+d)/Nt.innerWidth:(f.top+d)/Nt.innerHeight},h.killAll=function(i){if(Vt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),i!==!0){var n=Os.killAll||[];Os={},n.forEach(function(a){return a()})}},h})();zt.version="3.15.0";zt.saveStyles=function(h){return h?io(h).forEach(function(t){if(t&&t.style){var r=zi.indexOf(t);r>=0&&zi.splice(r,5),zi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),dt.core.getCache(t),Wa())}}):zi};zt.revert=function(h,t){return _l(!h,t)};zt.create=function(h,t){return new zt(h,t)};zt.refresh=function(h){return h?In(!0):(Hs||zt.register())&&Ts(!0)};zt.update=function(h){return++Bt.cache&&zr(h===!0?2:0)};zt.clearScrollMemory=Qf;zt.maxScroll=function(h,t){return Sr(h,t?gi:Be)};zt.getScrollFunc=function(h,t){return cs(Pi(h),t?gi:Be)};zt.getById=function(h){return $a[h]};zt.getAll=function(){return Vt.filter(function(h){return h.vars.id!=="ScrollSmoother"})};zt.isScrolling=function(){return!!sr};zt.snapDirectional=vl;zt.addEventListener=function(h,t){var r=Os[h]||(Os[h]=[]);~r.indexOf(t)||r.push(t)};zt.removeEventListener=function(h,t){var r=Os[h],i=r&&r.indexOf(t);i>=0&&r.splice(i,1)};zt.batch=function(h,t){var r=[],i={},n=t.interval||.016,a=t.batchMax||1e9,f=function(m,y){var w=[],C=[],S=dt.delayedCall(n,function(){y(w,C),w=[],C=[]}).pause();return function(F){w.length||S.restart(!0),w.push(F.trigger),C.push(F),a<=w.length&&S.progress(1)}},u;for(u in t)i[u]=u.substr(0,2)==="on"&&ni(t[u])&&u!=="onRefreshInit"?f(u,t[u]):t[u];return ni(a)&&(a=a(),Xe(zt,"refresh",function(){return a=t.batchMax()})),io(h).forEach(function(d){var m={};for(u in i)m[u]=i[u];m.trigger=d,r.push(zt.create(m))}),r};var Th=function(t,r,i,n){return r>n?t(n):r<0&&t(0),i>n?(n-r)/(i-r):i<0?r/(r-i):1},ba=function h(t,r){r===!0?t.style.removeProperty("touch-action"):t.style.touchAction=r===!0?"auto":r?"pan-"+r+(Se.isTouch?" pinch-zoom":""):"none",t===qi&&h(Ht,r)},To={auto:1,scroll:1},f0=function(t){var r=t.event,i=t.target,n=t.axis,a=(r.changedTouches?r.changedTouches[0]:r).target,f=a._gsap||dt.core.getCache(a),u=ri(),d;if(!f._isScrollT||u-f._isScrollT>2e3){for(;a&&a!==Ht&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(To[(d=er(a)).overflowY]||To[d.overflowX]));)a=a.parentNode;f._isScroll=a&&a!==i&&!Is(a)&&(To[(d=er(a)).overflowY]||To[d.overflowX]),f._isScrollT=u}(f._isScroll||n==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},eu=function(t,r,i,n){return Se.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:n=n&&f0,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Xe(Kt,Se.eventTypes[0],Ah,!1,!0)},onDisable:function(){return $e(Kt,Se.eventTypes[0],Ah,!0)}})},u0=/(input|label|select|textarea)/i,Ph,Ah=function(t){var r=u0.test(t.target.tagName);(r||Ph)&&(t._gsapAllow=!0,Ph=r)},c0=function(t){ws(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var r=t,i=r.normalizeScrollX,n=r.momentum,a=r.allowNestedScroll,f=r.onRelease,u,d,m=Pi(t.target)||qi,y=dt.core.globals().ScrollSmoother,w=y&&y.get(),C=ts&&(t.content&&Pi(t.content)||w&&t.content!==!1&&!w.smooth()&&w.content()),S=cs(m,Be),F=cs(m,gi),A=1,W=(Se.isTouch&&Nt.visualViewport?Nt.visualViewport.scale*Nt.visualViewport.width:Nt.outerWidth)/Nt.innerWidth,J=0,Q=ni(n)?function(){return n(u)}:function(){return n||2.8},U,K,Z=eu(m,t.type,!0,a),rt=function(){return K=!1},tt=xr,at=xr,it=function(){d=Sr(m,Be),at=qn(ts?1:0,d),i&&(tt=qn(0,Sr(m,gi))),U=Ls},st=function(){C._gsap.y=Fn(parseFloat(C._gsap.y)+S.offset)+"px",C.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(C._gsap.y)+", 0, 1)",S.offset=S.cacheID=0},Ot=function(){if(K){requestAnimationFrame(rt);var Mt=Fn(u.deltaY/2),jt=at(S.v-Mt);if(C&&jt!==S.v+S.offset){S.offset=jt-S.v;var X=Fn((parseFloat(C&&C._gsap.y)||0)-S.offset);C.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+X+", 0, 1)",C._gsap.y=X+"px",S.cacheID=Bt.cache,zr()}return!0}S.offset&&st(),K=!0},ut,qt,It,Wt,Yt=function(){it(),ut.isActive()&&ut.vars.scrollY>d&&(S()>d?ut.progress(1)&&S(d):ut.resetTo("scrollY",d))};return C&&dt.set(C,{y:"+=0"}),t.ignoreCheck=function(Tt){return ts&&Tt.type==="touchmove"&&Ot()||A>1.05&&Tt.type!=="touchstart"||u.isGesturing||Tt.touches&&Tt.touches.length>1},t.onPress=function(){K=!1;var Tt=A;A=Fn((Nt.visualViewport&&Nt.visualViewport.scale||1)/W),ut.pause(),Tt!==A&&ba(m,A>1.01?!0:i?!1:"x"),qt=F(),It=S(),it(),U=Ls},t.onRelease=t.onGestureStart=function(Tt,Mt){if(S.offset&&st(),!Mt)Wt.restart(!0);else{Bt.cache++;var jt=Q(),X,Zt;i&&(X=F(),Zt=X+jt*.05*-Tt.velocityX/.227,jt*=Th(F,X,Zt,Sr(m,gi)),ut.vars.scrollX=tt(Zt)),X=S(),Zt=X+jt*.05*-Tt.velocityY/.227,jt*=Th(S,X,Zt,Sr(m,Be)),ut.vars.scrollY=at(Zt),ut.invalidate().duration(jt).play(.01),(ts&&ut.vars.scrollY>=d||X>=d-1)&&dt.to({},{onUpdate:Yt,duration:jt})}f&&f(Tt)},t.onWheel=function(){ut._ts&&ut.pause(),ri()-J>1e3&&(U=0,J=ri())},t.onChange=function(Tt,Mt,jt,X,Zt){if(Ls!==U&&it(),Mt&&i&&F(tt(X[2]===Mt?qt+(Tt.startX-Tt.x):F()+Mt-X[1])),jt){S.offset&&st();var qe=Zt[2]===jt,vi=qe?It+Tt.startY-Tt.y:S()+jt-Zt[1],ae=at(vi);qe&&vi!==ae&&(It+=ae-vi),S(ae)}(jt||Mt)&&zr()},t.onEnable=function(){ba(m,i?!1:"x"),zt.addEventListener("refresh",Yt),Xe(Nt,"resize",Yt),S.smooth&&(S.target.style.scrollBehavior="auto",S.smooth=F.smooth=!1),Z.enable()},t.onDisable=function(){ba(m,!0),$e(Nt,"resize",Yt),zt.removeEventListener("refresh",Yt),Z.kill()},t.lockAxis=t.lockAxis!==!1,u=new Se(t),u.iOS=ts,ts&&!S()&&S(1),ts&&dt.ticker.add(xr),Wt=u._dc,ut=dt.to(u,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:tu(S,S(),function(){return ut.pause()})},onUpdate:zr,onComplete:Wt.vars.onComplete}),u};zt.sort=function(h){if(ni(h))return Vt.sort(h);var t=Nt.pageYOffset||0;return zt.getAll().forEach(function(r){return r._sortY=r.trigger?t+r.trigger.getBoundingClientRect().top:r.start+Nt.innerHeight}),Vt.sort(h||function(r,i){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};zt.observe=function(h){return new Se(h)};zt.normalizeScroll=function(h){if(typeof h>"u")return pi;if(h===!0&&pi)return pi.enable();if(h===!1){pi&&pi.kill(),pi=h;return}var t=h instanceof Se?h:c0(h);return pi&&pi.target===t.target&&pi.kill(),Is(t.target)&&(pi=t),t};zt.core={_getVelocityProp:Na,_inputObserver:eu,_scrollers:Bt,_proxies:Tr,bridge:{ss:function(){sr||Rs("scrollStart"),sr=ri()},ref:function(){return ii}}};Yf()&&dt.registerPlugin(zt);var Ch="1.3.25";function iu(h,t,r){return Math.max(h,Math.min(t,r))}function p0(h,t,r){return(1-r)*h+r*t}function d0(h,t,r,i){return p0(h,t,1-Math.exp(-r*i))}function m0(h,t){return(h%t+t)%t}var g0=class{constructor(){kt(this,"isRunning",!1);kt(this,"value",0);kt(this,"from",0);kt(this,"to",0);kt(this,"currentTime",0);kt(this,"lerp");kt(this,"duration");kt(this,"easing");kt(this,"onUpdate")}advance(h){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=h;const i=iu(0,this.currentTime/this.duration,1);t=i>=1;const n=t?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=d0(this.value,this.to,this.lerp*60,h),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(h,t,{lerp:r,duration:i,easing:n,onStart:a,onUpdate:f}){this.from=this.value=h,this.to=t,this.lerp=r,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=f}};function v0(h,t){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{r=void 0,h.apply(this,i)},t)}}var _0=class{constructor(h,t,{autoResize:r=!0,debounce:i=250}={}){kt(this,"width",0);kt(this,"height",0);kt(this,"scrollHeight",0);kt(this,"scrollWidth",0);kt(this,"debouncedResize");kt(this,"wrapperResizeObserver");kt(this,"contentResizeObserver");kt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});kt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});kt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=h,this.content=t,r&&(this.debouncedResize=v0(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var h,t;(h=this.wrapperResizeObserver)==null||h.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ru=class{constructor(){kt(this,"events",{})}emit(h,...t){var i;const r=this.events[h]||[];for(let n=0,a=r.length;n<a;n++)(i=r[n])==null||i.call(r,...t)}on(h,t){return this.events[h]?this.events[h].push(t):this.events[h]=[t],()=>{var r;this.events[h]=(r=this.events[h])==null?void 0:r.filter(i=>t!==i)}}off(h,t){var r;this.events[h]=(r=this.events[h])==null?void 0:r.filter(i=>t!==i)}destroy(){this.events={}}};const y0=100/6,Jr={passive:!1};function Eh(h,t){return h===1?y0:h===2?t:1}var b0=class{constructor(h,t={wheelMultiplier:1,touchMultiplier:1}){kt(this,"touchStart",{x:0,y:0});kt(this,"lastDelta",{x:0,y:0});kt(this,"window",{width:0,height:0});kt(this,"emitter",new ru);kt(this,"onTouchStart",h=>{const{clientX:t,clientY:r}=h.targetTouches?h.targetTouches[0]:h;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:h})});kt(this,"onTouchMove",h=>{const{clientX:t,clientY:r}=h.targetTouches?h.targetTouches[0]:h,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:h})});kt(this,"onTouchEnd",h=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:h})});kt(this,"onWheel",h=>{let{deltaX:t,deltaY:r,deltaMode:i}=h;const n=Eh(i,this.window.width),a=Eh(i,this.window.height);t*=n,r*=a,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:h})});kt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=h,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Jr),this.element.addEventListener("touchstart",this.onTouchStart,Jr),this.element.addEventListener("touchmove",this.onTouchMove,Jr),this.element.addEventListener("touchend",this.onTouchEnd,Jr)}on(h,t){return this.emitter.on(h,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Jr),this.element.removeEventListener("touchstart",this.onTouchStart,Jr),this.element.removeEventListener("touchmove",this.onTouchMove,Jr),this.element.removeEventListener("touchend",this.onTouchEnd,Jr)}};const Mh=h=>Math.min(1,1.001-2**(-10*h));var x0=class{constructor({wrapper:h=window,content:t=document.documentElement,eventsTarget:r=h,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:a=.075,touchInertiaExponent:f=1.7,duration:u,easing:d,lerp:m=.1,infinite:y=!1,orientation:w="vertical",gestureOrientation:C=w==="horizontal"?"both":"vertical",touchMultiplier:S=1,wheelMultiplier:F=1,autoResize:A=!0,prevent:W,virtualScroll:J,overscroll:Q=!0,autoRaf:U=!1,anchors:K=!1,autoToggle:Z=!1,allowNestedScroll:rt=!1,__experimental__naiveDimensions:tt=!1,naiveDimensions:at=tt,stopInertiaOnNavigate:it=!1}={}){kt(this,"_isScrolling",!1);kt(this,"_isStopped",!1);kt(this,"_isLocked",!1);kt(this,"_preventNextNativeScrollEvent",!1);kt(this,"_resetVelocityTimeout",null);kt(this,"_rafId",null);kt(this,"_isDraggingSelection",!1);kt(this,"isTouching");kt(this,"isIos");kt(this,"time",0);kt(this,"userData",{});kt(this,"lastVelocity",0);kt(this,"velocity",0);kt(this,"direction",0);kt(this,"options");kt(this,"targetScroll");kt(this,"animatedScroll");kt(this,"animate",new g0);kt(this,"emitter",new ru);kt(this,"dimensions");kt(this,"virtualScroll");kt(this,"onScrollEnd",h=>{h instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&h.stopPropagation()});kt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});kt(this,"onTransitionEnd",h=>{var t;(t=h.propertyName)!=null&&t.includes("overflow")&&h.target===this.rootElement&&this.checkOverflow()});kt(this,"onClick",h=>{const t=h.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),r=new URL(window.location.href);if(this.options.anchors){const i=t.find(n=>r.host===n.host&&r.pathname===n.pathname&&n.hash);if(i){const n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(i.hash);this.scrollTo(a,n);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>r.host===i.host&&r.pathname!==i.pathname)){this.reset();return}});kt(this,"onPointerDown",h=>{h.button===1&&this.reset()});kt(this,"onVirtualScroll",h=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(h)===!1)return;const{deltaX:t,deltaY:r,event:i}=h;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const n=i.type.includes("touch"),a=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const f=t===0&&r===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&f&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(f||u)return;let d=i.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const m=this.options.prevent,y=Math.abs(t)>=Math.abs(r)?"horizontal":"vertical";if(d.find(F=>{var A,W,J,Q,U;return F instanceof HTMLElement&&(typeof m=="function"&&(m==null?void 0:m(F))||((A=F.hasAttribute)==null?void 0:A.call(F,"data-lenis-prevent"))||y==="vertical"&&((W=F.hasAttribute)==null?void 0:W.call(F,"data-lenis-prevent-vertical"))||y==="horizontal"&&((J=F.hasAttribute)==null?void 0:J.call(F,"data-lenis-prevent-horizontal"))||n&&((Q=F.hasAttribute)==null?void 0:Q.call(F,"data-lenis-prevent-touch"))||a&&((U=F.hasAttribute)==null?void 0:U.call(F,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(F,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let w=r;this.options.gestureOrientation==="both"?w=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(w=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const C=n&&this.options.syncTouch,S=n&&i.type==="touchend";S&&(w=Math.sign(w)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+w,{programmatic:!1,...C?{lerp:S?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});kt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const h=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-h,this.direction=Math.sign(this.animatedScroll-h),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});kt(this,"raf",h=>{const t=h-(this.time||h);this.time=h,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Ch,window.lenis||(window.lenis={}),window.lenis.version=Ch,w==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!h||h===document.documentElement)&&(h=window),typeof u=="number"&&typeof d!="function"?d=Mh:typeof d=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:h,content:t,eventsTarget:r,smoothWheel:i,syncTouch:n,syncTouchLerp:a,touchInertiaExponent:f,duration:u,easing:d,lerp:m,infinite:y,gestureOrientation:C,orientation:w,touchMultiplier:S,wheelMultiplier:F,autoResize:A,prevent:W,virtualScroll:J,overscroll:Q,autoRaf:U,anchors:K,autoToggle:Z,allowNestedScroll:rt,naiveDimensions:at,stopInertiaOnNavigate:it},this.dimensions=new _0(h,t,{autoResize:A}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new b0(r,{touchMultiplier:S,wheelMultiplier:F}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(h,t){return this.emitter.on(h,t)}off(h,t){return this.emitter.off(h,t)}get overflow(){const h=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[h]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(h){this.isHorizontal?this.options.wrapper.scrollTo({left:h,behavior:"instant"}):this.options.wrapper.scrollTo({top:h,behavior:"instant"})}isTouchOnSelectionHandle(h){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const r=h.targetTouches[0]??h.changedTouches[0];if(!r)return!1;const i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;const n=i[0],a=i[i.length-1],f=40,u=Math.hypot(r.clientX-n.left,r.clientY-n.top)<=f,d=Math.hypot(r.clientX-a.right,r.clientY-a.bottom)<=f;return u||d}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(h,{offset:t=0,immediate:r=!1,lock:i=!1,programmatic:n=!0,lerp:a=n?this.options.lerp:void 0,duration:f=n?this.options.duration:void 0,easing:u=n?this.options.easing:void 0,onStart:d,onComplete:m,force:y=!1,userData:w}={}){if((this.isStopped||this.isLocked)&&!y)return;let C=h,S=t;if(typeof C=="string"&&["top","left","start","#"].includes(C))C=0;else if(typeof C=="string"&&["bottom","right","end"].includes(C))C=this.limit;else{let F=null;if(typeof C=="string"?(F=C.startsWith("#")?document.getElementById(C.slice(1)):document.querySelector(C),F||(C==="#top"?C=0:console.warn("Lenis: Target not found",C))):C instanceof HTMLElement&&(C!=null&&C.nodeType)&&(F=C),F){if(this.options.wrapper!==window){const K=this.rootElement.getBoundingClientRect();S-=this.isHorizontal?K.left:K.top}const A=F.getBoundingClientRect(),W=getComputedStyle(F),J=this.isHorizontal?Number.parseFloat(W.scrollMarginLeft):Number.parseFloat(W.scrollMarginTop),Q=getComputedStyle(this.rootElement),U=this.isHorizontal?Number.parseFloat(Q.scrollPaddingLeft):Number.parseFloat(Q.scrollPaddingTop);C=(this.isHorizontal?A.left:A.top)+this.animatedScroll-(Number.isNaN(J)?0:J)-(Number.isNaN(U)?0:U)}}if(typeof C=="number"){if(C+=S,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const F=C-this.animatedScroll;F>this.limit/2?C-=this.limit:F<-this.limit/2&&(C+=this.limit)}}else C=iu(0,C,this.limit);if(C===this.targetScroll){d==null||d(this),m==null||m(this);return}if(this.userData=w??{},r){this.animatedScroll=this.targetScroll=C,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=C),typeof f=="number"&&typeof u!="function"?u=Mh:typeof u=="function"&&typeof f!="number"&&(f=1),this.animate.fromTo(this.animatedScroll,C,{duration:f,easing:u,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(F,A)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=F-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=F,this.setScroll(this.scroll),n&&(this.targetScroll=F),A||this.emit(),A&&(this.reset(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(h,{deltaX:t,deltaY:r}){const i=Date.now();h._lenis||(h._lenis={});const n=h._lenis;let a,f,u,d,m,y,w,C,S,F;if(i-(n.time??0)>2e3){n.time=Date.now();const rt=window.getComputedStyle(h);if(n.computedStyle=rt,a=["auto","overlay","scroll"].includes(rt.overflowX),f=["auto","overlay","scroll"].includes(rt.overflowY),m=["auto"].includes(rt.overscrollBehaviorX),y=["auto"].includes(rt.overscrollBehaviorY),n.hasOverflowX=a,n.hasOverflowY=f,!(a||f))return!1;w=h.scrollWidth,C=h.scrollHeight,S=h.clientWidth,F=h.clientHeight,u=w>S,d=C>F,n.isScrollableX=u,n.isScrollableY=d,n.scrollWidth=w,n.scrollHeight=C,n.clientWidth=S,n.clientHeight=F,n.hasOverscrollBehaviorX=m,n.hasOverscrollBehaviorY=y}else u=n.isScrollableX,d=n.isScrollableY,a=n.hasOverflowX,f=n.hasOverflowY,w=n.scrollWidth,C=n.scrollHeight,S=n.clientWidth,F=n.clientHeight,m=n.hasOverscrollBehaviorX,y=n.hasOverscrollBehaviorY;if(!(a&&u||f&&d))return!1;const A=Math.abs(t)>=Math.abs(r)?"horizontal":"vertical";let W,J,Q,U,K,Z;if(A==="horizontal")W=Math.round(h.scrollLeft),J=w-S,Q=t,U=a,K=u,Z=m;else if(A==="vertical")W=Math.round(h.scrollTop),J=C-F,Q=r,U=f,K=d,Z=y;else return!1;return!Z&&(W>=J||W<=0)?!0:(Q>0?W<J:W>0)&&U&&K}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const h=this.options.wrapper;return this.isHorizontal?h.scrollX??h.scrollLeft:h.scrollY??h.scrollTop}get scroll(){return this.options.infinite?m0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(h){this._isScrolling!==h&&(this._isScrolling=h,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(h){this._isStopped!==h&&(this._isStopped=h,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(h){this._isLocked!==h&&(this._isLocked=h,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let h="lenis";return this.options.autoToggle&&(h+=" lenis-autoToggle"),this.isStopped&&(h+=" lenis-stopped"),this.isLocked&&(h+=" lenis-locked"),this.isScrolling&&(h+=" lenis-scrolling"),this.isScrolling==="smooth"&&(h+=" lenis-smooth"),h}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(h=>{this.rootElement.classList.add(h)})}cleanUpClassName(){for(const h of Array.from(this.rootElement.classList))(h==="lenis"||h.startsWith("lenis-"))&&this.rootElement.classList.remove(h)}};zn.registerPlugin(zt);function k0(){const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let t=null;return h||(t=new x0({duration:1.1,smoothWheel:!0}),t.on("scroll",zt.update),zn.ticker.add(i=>{t.raf(i*1e3)}),zn.ticker.lagSmoothing(0),window.__lenis=t),{gsap:zn,ScrollTrigger:zt,lenis:t,reduced:h,loaderDone:window.__loaderDone||Promise.resolve(),stopScroll(){t==null||t.stop(),document.documentElement.style.overflow="hidden"},startScroll(){t==null||t.start(),document.documentElement.style.overflow=""}}}function w0(h){document.documentElement.classList.add("is-ready"),h.reduced&&document.documentElement.classList.add("is-reduced"),document.addEventListener("click",t=>{if(t.defaultPrevented)return;const r=t.target.closest('a[href^="#"]');if(!r)return;const i=r.getAttribute("href");if(!i||i.length<2)return;const n=document.querySelector(i);if(n)if(t.preventDefault(),h.lenis){const a=Math.abs(n.getBoundingClientRect().top),f=Math.min(3.6,Math.max(1.8,a/2200));h.lenis.scrollTo(n,{duration:f})}else n.scrollIntoView({behavior:h.reduced?"auto":"smooth"})})}function S0(h){const{gsap:t,ScrollTrigger:r,lenis:i,reduced:n}=h,a=t.utils.toArray(".coord");if(!a.length||n)return;const f="#00846a",u="#000000",d=.14,m=a.filter(U=>U.hasAttribute("data-atf")),y=a.filter(U=>!U.hasAttribute("data-atf"));t.set(a,{opacity:0,"--pop":.85,color:f});function w(U){t.killTweensOf(U),t.timeline().set(U,{color:f}).to(U,{opacity:.9,"--pop":1,duration:.45,ease:"power2.out"}).to(U,{opacity:.47,color:u,duration:.9,ease:"power1.inOut",clearProps:"opacity,color"})}function C(U){t.killTweensOf(U),t.to(U,{opacity:0,"--pop":.85,color:f,duration:.3,ease:"power2.in",overwrite:!0})}h.loaderDone.then(()=>{m.forEach((U,K)=>{t.delayedCall(1.3+K*.22,()=>w(U))})});const S=[];let F=!1;function A(){const U=S.shift();if(!U){F=!1;return}F=!0,w(U),t.delayedCall(d,A)}function W(U){S.includes(U)||(S.push(U),F||A())}function J(U){const K=S.indexOf(U);K!==-1?S.splice(K,1):C(U)}y.forEach(U=>{r.create({trigger:U,start:"top bottom",onEnter:()=>W(U),onLeaveBack:()=>J(U)})});const Q=document.querySelector(".decor__coords");if(Q&&i){let Z=0,rt=0,tt=0,at=-1;t.ticker.add(()=>{Z+=(i.velocity-Z)*.12;const st=Math.min(Math.max(Z,0)/22,1)*7;tt+=(st-rt)*.045,tt*=.88,rt+=tt,Math.abs(rt)<.005&&Math.abs(tt)<.005&&(rt=0,tt=0),!(Math.abs(rt-at)<.004)&&(at=rt,Q.style.setProperty("--coord-drift-y",`${(-rt).toFixed(3)}px`),Q.style.setProperty("--coord-drift-s",(1-rt/7*.07).toFixed(4)))})}}const T0=Object.freeze(Object.defineProperty({__proto__:null,init:S0},Symbol.toStringTag,{value:"Module"})),xa=19.2;function P0(h){var f;const t=document.querySelector(".section--claim"),r=t==null?void 0:t.querySelector(".claim__line--a"),i=t==null?void 0:t.querySelector(".claim__line--b");if(!t||!r||!i)return;const n=()=>{if(window.matchMedia("(max-width: 1080px)").matches){i.style.top="",t.style.height="";return}const u=parseFloat(getComputedStyle(document.documentElement).fontSize)||10,d=y=>Math.max(1,Math.round(y.getBoundingClientRect().height/(xa*u))),m=d(r)*xa-1.5;i.style.top=`${m}rem`,t.style.height=`${Math.max(95.5,m+d(i)*xa+1)}rem`},a=()=>{var u;n(),(u=h==null?void 0:h.ScrollTrigger)==null||u.refresh()};n(),(f=document.fonts)!=null&&f.ready&&document.fonts.ready.then(a),window.addEventListener("resize",n)}const A0=Object.freeze(Object.defineProperty({__proto__:null,init:P0},Symbol.toStringTag,{value:"Module"})),Fh=175.8,C0=26.7,E0=894.3,M0=725.5,F0=3;function L0(h){var d;const t=document.querySelector(".section--author"),r=t==null?void 0:t.querySelector(".author__role"),i=document.querySelector(".section--decor");if(!t||!r||!i)return;const n=Array.from(t.querySelectorAll(".author__polaroid")),a=m=>Array.from(i.querySelectorAll("*")).filter(y=>{const w=getComputedStyle(y);if(w.position!=="absolute")return!1;const C=parseFloat(w.top);return Number.isFinite(C)&&C>=M0*m-.5}),f=()=>{const m=parseFloat(getComputedStyle(document.documentElement).fontSize)||10,y=a(m);if(window.matchMedia("(max-width: 1080px)").matches){t.style.height="",i.style.height="",y.forEach(F=>F.style.marginTop="");return}const w=t.getBoundingClientRect().top,C=Math.max(r.getBoundingClientRect().bottom-w+C0*m,...n.map(F=>F.getBoundingClientRect().bottom-w+F0*m)),S=Math.max(0,Fh*m-C);t.style.height=`${Fh*m-S}px`,i.style.height=`${E0*m-S}px`,y.forEach(F=>F.style.marginTop=S?`${-S}px`:"")},u=()=>{var m;f(),(m=h==null?void 0:h.ScrollTrigger)==null||m.refresh()};f(),(d=document.fonts)!=null&&d.ready&&document.fonts.ready.then(u),window.addEventListener("resize",f)}const I0=Object.freeze(Object.defineProperty({__proto__:null,init:L0},Symbol.toStringTag,{value:"Module"})),O0="#acacac",Ro="#000000",R0=.32,Lh=3;function D0(h){const{gsap:t,ScrollTrigger:r,reduced:i}=h,n=document.querySelector("#intro .intro__manifesto"),a=n?Array.from(n.querySelectorAll(".word, img.intro__doodle, video.intro__doodle")):[],f=document.querySelector("#claim .claim__line--a");let u=[];f&&(u=Array.from(f.querySelectorAll(".word")),u.length&&f.classList.add("is-reveal"));const d=document.querySelector("#claim .claim__line--b");let m=[];if(d&&(m=Array.from(d.querySelectorAll(".word")),d.classList.add("is-reveal")),i){const y=a.filter(C=>C.tagName!=="IMG");y.length&&t.set(y,{color:Ro}),m.length&&t.set(m,{color:Ro});const w=document.querySelectorAll("#claim .claim__line--a .word");w.length&&t.set(w,{color:Ro});return}a.length&&ka(t,n,a,{start:"top 75%",end:"bottom 55%"}),u.length&&ka(t,f,u,{start:"top 80%",end:"bottom 50%",setDim:!1}),m.length&&ka(t,d,m,{start:()=>{const y=window.innerHeight,w=r.maxScroll(window),C=d.getBoundingClientRect().top+window.scrollY;let S=Math.min(C-.313*y,w-.35*y);return S=Math.max(S,C-.95*y,0),S},end:"max",setDim:!1})}function ka(h,t,r,{start:i,end:n,setDim:a=!0}){a&&r.forEach(u=>{u.tagName==="IMG"||u.tagName==="VIDEO"?h.set(u,{opacity:R0}):h.set(u,{color:O0})});const f=h.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:t,start:i,end:n,scrub:!0}});return r.forEach((u,d)=>{u.tagName==="IMG"||u.tagName==="VIDEO"?f.to(u,{opacity:1,duration:Lh},d):f.to(u,{color:Ro,duration:Lh},d)}),f}const V0=Object.freeze(Object.defineProperty({__proto__:null,init:D0},Symbol.toStringTag,{value:"Module"})),z0="img/coin.webp",N0=2500,B0=4e3,q0=8e3,W0=16e3,Y0=5,$0=8,Pn=(h,t)=>h+Math.random()*(t-h);function X0(h){const{gsap:t,reduced:r}=h,i=Array.from(document.querySelectorAll(".decor__coin")),n={mode:"static",spawn(){}};if(window.__coins=n,r)return;i.forEach(C=>{C.style.display="none"});const a=()=>parseFloat(getComputedStyle(document.documentElement).fontSize)||10;let f=null,u=null,d=null;function m(){if(document.hidden||u)return;const C=a(),S=window.matchMedia("(max-width: 1080px)").matches?8:11.1,F=C*S,A=document.createElement("img");A.src=z0,A.alt="",A.setAttribute("aria-hidden","true"),A.className="falling-coin",A.style.cssText=["position: fixed","top: 0","left: 0",`width: ${S}rem`,"height: auto","pointer-events: none","user-select: none","z-index: 80","will-change: transform"].join(";");const W=F,J=Pn(W,Math.max(W,window.innerWidth-F-W)),Q=Pn(Y0,$0),U=Pn(150,340)*(Math.random()<.5?1:-1);t.set(A,{x:J,y:-F*1.4,rotation:Pn(-160,160),xPercent:0}),document.body.appendChild(A),u=A,d=t.timeline({onComplete(){A.remove(),u===A&&(u=null,d=null)}}),d.to(A,{y:window.innerHeight+F*1.4,duration:Q,ease:"sine.in"},0),d.to(A,{rotation:`+=${U}`,duration:Q,ease:"none"},0)}function y(C=q0,S=W0){clearTimeout(f),f=setTimeout(()=>{m(),y()},Pn(C,S))}const w=()=>{document.hidden?(clearTimeout(f),f=null,d==null||d.pause()):(d==null||d.resume(),y())};document.addEventListener("visibilitychange",w),n.mode="rich",n.spawn=m,y(N0,B0)}const G0=Object.freeze(Object.defineProperty({__proto__:null,init:X0},Symbol.toStringTag,{value:"Module"}));function j0(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var On={exports:{}},H0=On.exports,Ih;function U0(){return Ih||(Ih=1,(function(h,t){typeof document<"u"&&typeof navigator<"u"&&(function(r,i){h.exports=i()})(H0,(function(){var r="http://www.w3.org/2000/svg",i="",n=!1,a=-999999,f=function(s){n=!!s},u=function(){return n},d=function(s){i=s},m=function(){return i};function y(e){return document.createElement(e)}function w(e,s){var o,l=e.length,p;for(o=0;o<l;o+=1){p=e[o].prototype;for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&(s.prototype[c]=p[c])}}function C(e){function s(){}return s.prototype=e,s}var S=(function(){function e(s){this.audios=[],this.audioFactory=s,this._volume=1,this._isMuted=!1}return e.prototype={addAudio:function(o){this.audios.push(o)},pause:function(){var o,l=this.audios.length;for(o=0;o<l;o+=1)this.audios[o].pause()},resume:function(){var o,l=this.audios.length;for(o=0;o<l;o+=1)this.audios[o].resume()},setRate:function(o){var l,p=this.audios.length;for(l=0;l<p;l+=1)this.audios[l].setRate(o)},createAudio:function(o){return this.audioFactory?this.audioFactory(o):window.Howl?new window.Howl({src:[o]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(o){this.audioFactory=o},setVolume:function(o){this._volume=o,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var o,l=this.audios.length;for(o=0;o<l;o+=1)this.audios[o].volume(this._volume*(this._isMuted?0:1))}},function(){return new e}})(),F=(function(){function e(o,l){var p=0,c=[],v;switch(o){case"int16":case"uint8c":v=1;break;default:v=1.1;break}for(p=0;p<l;p+=1)c.push(v);return c}function s(o,l){return o==="float32"?new Float32Array(l):o==="int16"?new Int16Array(l):o==="uint8c"?new Uint8ClampedArray(l):e(o,l)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?s:e})();function A(e){return Array.apply(null,{length:e})}var W=!0,J=null,Q="",U=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),K=Math.pow,Z=Math.sqrt,rt=Math.floor,tt=Math.min,at=150,it=Math.PI/180,st=.5519;function Ot(e,s,o,l){this.type=e,this.currentTime=s,this.totalTime=o,this.direction=l<0?-1:1}function ut(e,s){this.type=e,this.direction=s<0?-1:1}function qt(e,s,o,l){this.type=e,this.currentLoop=o,this.totalLoops=s,this.direction=l<0?-1:1}function It(e,s,o){this.type=e,this.firstFrame=s,this.totalFrames=o}function Wt(e,s){this.type=e,this.target=s}function Yt(e,s){this.type="renderFrameError",this.nativeError=e,this.currentTime=s}function Tt(e){this.type="configError",this.nativeError=e}var Mt=(function(){var e=0;return function(){return e+=1,Q+"__lottie_element_"+e}})();function jt(e,s,o){var l,p,c,v,P,_,L,R;switch(v=Math.floor(e*6),P=e*6-v,_=o*(1-s),L=o*(1-P*s),R=o*(1-(1-P)*s),v%6){case 0:l=o,p=R,c=_;break;case 1:l=L,p=o,c=_;break;case 2:l=_,p=o,c=R;break;case 3:l=_,p=L,c=o;break;case 4:l=R,p=_,c=o;break;case 5:l=o,p=_,c=L;break}return[l,p,c]}function X(e,s,o){var l=Math.max(e,s,o),p=Math.min(e,s,o),c=l-p,v,P=l===0?0:c/l,_=l/255;switch(l){case p:v=0;break;case e:v=s-o+c*(s<o?6:0),v/=6*c;break;case s:v=o-e+c*2,v/=6*c;break;case o:v=e-s+c*4,v/=6*c;break}return[v,P,_]}function Zt(e,s){var o=X(e[0]*255,e[1]*255,e[2]*255);return o[1]+=s,o[1]>1?o[1]=1:o[1]<=0&&(o[1]=0),jt(o[0],o[1],o[2])}function qe(e,s){var o=X(e[0]*255,e[1]*255,e[2]*255);return o[2]+=s,o[2]>1?o[2]=1:o[2]<0&&(o[2]=0),jt(o[0],o[1],o[2])}function vi(e,s){var o=X(e[0]*255,e[1]*255,e[2]*255);return o[0]+=s/360,o[0]>1?o[0]-=1:o[0]<0&&(o[0]+=1),jt(o[0],o[1],o[2])}(function(){var e=[],s,o;for(s=0;s<256;s+=1)o=s.toString(16),e[s]=o.length===1?"0"+o:o;return function(l,p,c){return l<0&&(l=0),p<0&&(p=0),c<0&&(c=0),"#"+e[l]+e[p]+e[c]}})();var ae=function(s){W=!!s},Ee=function(){return W},We=function(s){J=s},ne=function(){return J},Te=function(s){at=s},be=function(){return at},pr=function(s){Q=s};function mt(e){return document.createElementNS(r,e)}function Me(e){"@babel/helpers - typeof";return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Me(e)}var Dt=(function(){var e=1,s=[],o,l,p={onmessage:function(){},postMessage:function(D){o({data:D})}},c={postMessage:function(D){p.onmessage({data:D})}};function v(k){if(window.Worker&&window.Blob&&u()){var D=new Blob(["var _workerSelf = self; self.onmessage = ",k.toString()],{type:"text/javascript"}),N=URL.createObjectURL(D);return new Worker(N)}return o=k,p}function P(){l||(l=v(function(D){function N(){function Y(nt,E){var z,g,b=nt.length,j,q,ct,St;for(g=0;g<b;g+=1)if(z=nt[g],"ks"in z&&!z.completed){if(z.completed=!0,z.hasMask){var Et=z.masksProperties;for(q=Et.length,j=0;j<q;j+=1)if(Et[j].pt.k.i)I(Et[j].pt.k);else for(St=Et[j].pt.k.length,ct=0;ct<St;ct+=1)Et[j].pt.k[ct].s&&I(Et[j].pt.k[ct].s[0]),Et[j].pt.k[ct].e&&I(Et[j].pt.k[ct].e[0])}z.ty===0?(z.layers=x(z.refId,E),Y(z.layers,E)):z.ty===4?T(z.shapes):z.ty===5&&Lt(z)}}function O(nt,E){if(nt){var z=0,g=nt.length;for(z=0;z<g;z+=1)nt[z].t===1&&(nt[z].data.layers=x(nt[z].data.refId,E),Y(nt[z].data.layers,E))}}function M(nt,E){for(var z=0,g=E.length;z<g;){if(E[z].id===nt)return E[z];z+=1}return null}function x(nt,E){var z=M(nt,E);return z?z.layers.__used?JSON.parse(JSON.stringify(z.layers)):(z.layers.__used=!0,z.layers):null}function T(nt){var E,z=nt.length,g,b;for(E=z-1;E>=0;E-=1)if(nt[E].ty==="sh")if(nt[E].ks.k.i)I(nt[E].ks.k);else for(b=nt[E].ks.k.length,g=0;g<b;g+=1)nt[E].ks.k[g].s&&I(nt[E].ks.k[g].s[0]),nt[E].ks.k[g].e&&I(nt[E].ks.k[g].e[0]);else nt[E].ty==="gr"&&T(nt[E].it)}function I(nt){var E,z=nt.i.length;for(E=0;E<z;E+=1)nt.i[E][0]+=nt.v[E][0],nt.i[E][1]+=nt.v[E][1],nt.o[E][0]+=nt.v[E][0],nt.o[E][1]+=nt.v[E][1]}function B(nt,E){var z=E?E.split("."):[100,100,100];return nt[0]>z[0]?!0:z[0]>nt[0]?!1:nt[1]>z[1]?!0:z[1]>nt[1]?!1:nt[2]>z[2]?!0:z[2]>nt[2]?!1:null}var $=(function(){var nt=[4,4,14];function E(g){var b=g.t.d;g.t.d={k:[{s:b,t:0}]}}function z(g){var b,j=g.length;for(b=0;b<j;b+=1)g[b].ty===5&&E(g[b])}return function(g){if(B(nt,g.v)&&(z(g.layers),g.assets)){var b,j=g.assets.length;for(b=0;b<j;b+=1)g.assets[b].layers&&z(g.assets[b].layers)}}})(),H=(function(){var nt=[4,7,99];return function(E){if(E.chars&&!B(nt,E.v)){var z,g=E.chars.length;for(z=0;z<g;z+=1){var b=E.chars[z];b.data&&b.data.shapes&&(T(b.data.shapes),b.data.ip=0,b.data.op=99999,b.data.st=0,b.data.sr=1,b.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},E.chars[z].t||(b.data.shapes.push({ty:"no"}),b.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}})(),ot=(function(){var nt=[5,7,15];function E(g){var b=g.t.p;typeof b.a=="number"&&(b.a={a:0,k:b.a}),typeof b.p=="number"&&(b.p={a:0,k:b.p}),typeof b.r=="number"&&(b.r={a:0,k:b.r})}function z(g){var b,j=g.length;for(b=0;b<j;b+=1)g[b].ty===5&&E(g[b])}return function(g){if(B(nt,g.v)&&(z(g.layers),g.assets)){var b,j=g.assets.length;for(b=0;b<j;b+=1)g.assets[b].layers&&z(g.assets[b].layers)}}})(),Ct=(function(){var nt=[4,1,9];function E(g){var b,j=g.length,q,ct;for(b=0;b<j;b+=1)if(g[b].ty==="gr")E(g[b].it);else if(g[b].ty==="fl"||g[b].ty==="st")if(g[b].c.k&&g[b].c.k[0].i)for(ct=g[b].c.k.length,q=0;q<ct;q+=1)g[b].c.k[q].s&&(g[b].c.k[q].s[0]/=255,g[b].c.k[q].s[1]/=255,g[b].c.k[q].s[2]/=255,g[b].c.k[q].s[3]/=255),g[b].c.k[q].e&&(g[b].c.k[q].e[0]/=255,g[b].c.k[q].e[1]/=255,g[b].c.k[q].e[2]/=255,g[b].c.k[q].e[3]/=255);else g[b].c.k[0]/=255,g[b].c.k[1]/=255,g[b].c.k[2]/=255,g[b].c.k[3]/=255}function z(g){var b,j=g.length;for(b=0;b<j;b+=1)g[b].ty===4&&E(g[b].shapes)}return function(g){if(B(nt,g.v)&&(z(g.layers),g.assets)){var b,j=g.assets.length;for(b=0;b<j;b+=1)g.assets[b].layers&&z(g.assets[b].layers)}}})(),xt=(function(){var nt=[4,4,18];function E(g){var b,j=g.length,q,ct;for(b=j-1;b>=0;b-=1)if(g[b].ty==="sh")if(g[b].ks.k.i)g[b].ks.k.c=g[b].closed;else for(ct=g[b].ks.k.length,q=0;q<ct;q+=1)g[b].ks.k[q].s&&(g[b].ks.k[q].s[0].c=g[b].closed),g[b].ks.k[q].e&&(g[b].ks.k[q].e[0].c=g[b].closed);else g[b].ty==="gr"&&E(g[b].it)}function z(g){var b,j,q=g.length,ct,St,Et,Xt;for(j=0;j<q;j+=1){if(b=g[j],b.hasMask){var Gt=b.masksProperties;for(St=Gt.length,ct=0;ct<St;ct+=1)if(Gt[ct].pt.k.i)Gt[ct].pt.k.c=Gt[ct].cl;else for(Xt=Gt[ct].pt.k.length,Et=0;Et<Xt;Et+=1)Gt[ct].pt.k[Et].s&&(Gt[ct].pt.k[Et].s[0].c=Gt[ct].cl),Gt[ct].pt.k[Et].e&&(Gt[ct].pt.k[Et].e[0].c=Gt[ct].cl)}b.ty===4&&E(b.shapes)}}return function(g){if(B(nt,g.v)&&(z(g.layers),g.assets)){var b,j=g.assets.length;for(b=0;b<j;b+=1)g.assets[b].layers&&z(g.assets[b].layers)}}})();function ht(nt){nt.__complete||(Ct(nt),$(nt),H(nt),ot(nt),xt(nt),Y(nt.layers,nt.assets),O(nt.chars,nt.assets),nt.__complete=!0)}function Lt(nt){nt.t.a.length===0&&"m"in nt.t.p}var vt={};return vt.completeData=ht,vt.checkColors=Ct,vt.checkChars=H,vt.checkPathProperties=ot,vt.checkShapes=xt,vt.completeLayers=Y,vt}if(c.dataManager||(c.dataManager=N()),c.assetLoader||(c.assetLoader=(function(){function Y(M){var x=M.getResponseHeader("content-type");return x&&M.responseType==="json"&&x.indexOf("json")!==-1||M.response&&Me(M.response)==="object"?M.response:M.response&&typeof M.response=="string"?JSON.parse(M.response):M.responseText?JSON.parse(M.responseText):null}function O(M,x,T,I){var B,$=new XMLHttpRequest;try{$.responseType="json"}catch{}$.onreadystatechange=function(){if($.readyState===4)if($.status===200)B=Y($),T(B);else try{B=Y($),T(B)}catch(H){I&&I(H)}};try{$.open(["G","E","T"].join(""),M,!0)}catch{$.open(["G","E","T"].join(""),x+"/"+M,!0)}$.send()}return{load:O}})()),D.data.type==="loadAnimation")c.assetLoader.load(D.data.path,D.data.fullPath,function(Y){c.dataManager.completeData(Y),c.postMessage({id:D.data.id,payload:Y,status:"success"})},function(){c.postMessage({id:D.data.id,status:"error"})});else if(D.data.type==="complete"){var V=D.data.animation;c.dataManager.completeData(V),c.postMessage({id:D.data.id,payload:V,status:"success"})}else D.data.type==="loadData"&&c.assetLoader.load(D.data.path,D.data.fullPath,function(Y){c.postMessage({id:D.data.id,payload:Y,status:"success"})},function(){c.postMessage({id:D.data.id,status:"error"})})}),l.onmessage=function(k){var D=k.data,N=D.id,V=s[N];s[N]=null,D.status==="success"?V.onComplete(D.payload):V.onError&&V.onError()})}function _(k,D){e+=1;var N="processId_"+e;return s[N]={onComplete:k,onError:D},N}function L(k,D,N){P();var V=_(D,N);l.postMessage({type:"loadAnimation",path:k,fullPath:window.location.origin+window.location.pathname,id:V})}function R(k,D,N){P();var V=_(D,N);l.postMessage({type:"loadData",path:k,fullPath:window.location.origin+window.location.pathname,id:V})}function G(k,D,N){P();var V=_(D,N);l.postMessage({type:"complete",animation:k,id:V})}return{loadAnimation:L,loadData:R,completeAnimation:G}})(),ce=(function(){var e=(function(){var O=y("canvas");O.width=1,O.height=1;var M=O.getContext("2d");return M.fillStyle="rgba(0,0,0,0)",M.fillRect(0,0,1,1),O})();function s(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function o(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function l(O,M,x){var T="";if(O.e)T=O.p;else if(M){var I=O.p;I.indexOf("images/")!==-1&&(I=I.split("/")[1]),T=M+I}else T=x,T+=O.u?O.u:"",T+=O.p;return T}function p(O){var M=0,x=setInterval((function(){var T=O.getBBox();(T.width||M>500)&&(this._imageLoaded(),clearInterval(x)),M+=1}).bind(this),50)}function c(O){var M=l(O,this.assetsPath,this.path),x=mt("image");U?this.testImageLoaded(x):x.addEventListener("load",this._imageLoaded,!1),x.addEventListener("error",(function(){T.img=e,this._imageLoaded()}).bind(this),!1),x.setAttributeNS("http://www.w3.org/1999/xlink","href",M),this._elementHelper.append?this._elementHelper.append(x):this._elementHelper.appendChild(x);var T={img:x,assetData:O};return T}function v(O){var M=l(O,this.assetsPath,this.path),x=y("img");x.crossOrigin="anonymous",x.addEventListener("load",this._imageLoaded,!1),x.addEventListener("error",(function(){T.img=e,this._imageLoaded()}).bind(this),!1),x.src=M;var T={img:x,assetData:O};return T}function P(O){var M={assetData:O},x=l(O,this.assetsPath,this.path);return Dt.loadData(x,(function(T){M.img=T,this._footageLoaded()}).bind(this),(function(){M.img={},this._footageLoaded()}).bind(this)),M}function _(O,M){this.imagesLoadedCb=M;var x,T=O.length;for(x=0;x<T;x+=1)O[x].layers||(!O[x].t||O[x].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(O[x]))):O[x].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(O[x]))))}function L(O){this.path=O||""}function R(O){this.assetsPath=O||""}function G(O){for(var M=0,x=this.images.length;M<x;){if(this.images[M].assetData===O)return this.images[M].img;M+=1}return null}function k(){this.imagesLoadedCb=null,this.images.length=0}function D(){return this.totalImages===this.loadedAssets}function N(){return this.totalFootages===this.loadedFootagesCount}function V(O,M){O==="svg"?(this._elementHelper=M,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function Y(){this._imageLoaded=s.bind(this),this._footageLoaded=o.bind(this),this.testImageLoaded=p.bind(this),this.createFootageData=P.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return Y.prototype={loadAssets:_,setAssetsPath:R,setPath:L,loadedImages:D,loadedFootages:N,destroy:k,getAsset:G,createImgData:v,createImageData:c,imageLoaded:s,footageLoaded:o,setCacheType:V},Y})();function je(){}je.prototype={triggerEvent:function(s,o){if(this._cbs[s])for(var l=this._cbs[s],p=0;p<l.length;p+=1)l[p](o)},addEventListener:function(s,o){return this._cbs[s]||(this._cbs[s]=[]),this._cbs[s].push(o),(function(){this.removeEventListener(s,o)}).bind(this)},removeEventListener:function(s,o){if(!o)this._cbs[s]=null;else if(this._cbs[s]){for(var l=0,p=this._cbs[s].length;l<p;)this._cbs[s][l]===o&&(this._cbs[s].splice(l,1),l-=1,p-=1),l+=1;this._cbs[s].length||(this._cbs[s]=null)}}};var ai=(function(){function e(s){for(var o=s.split(`\r
`),l={},p,c=0,v=0;v<o.length;v+=1)p=o[v].split(":"),p.length===2&&(l[p[0]]=p[1].trim(),c+=1);if(c===0)throw new Error;return l}return function(s){for(var o=[],l=0;l<s.length;l+=1){var p=s[l],c={time:p.tm,duration:p.dr};try{c.payload=JSON.parse(s[l].cm)}catch{try{c.payload=e(s[l].cm)}catch{c.payload={name:s[l].cm}}}o.push(c)}return o}})(),et=(function(){function e(s){this.compositions.push(s)}return function(){function s(o){for(var l=0,p=this.compositions.length;l<p;){if(this.compositions[l].data&&this.compositions[l].data.nm===o)return this.compositions[l].prepareFrame&&this.compositions[l].data.xt&&this.compositions[l].prepareFrame(this.currentFrame),this.compositions[l].compInterface;l+=1}return null}return s.compositions=[],s.currentFrame=0,s.registerComposition=e,s}})(),Fe={},nr=function(s,o){Fe[s]=o};function dr(e){return Fe[e]}function le(){if(Fe.canvas)return"canvas";for(var e in Fe)if(Fe[e])return e;return""}function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},_i(e)}var gt=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Mt(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=Ee(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=et(),this.imagePreloader=new ce,this.audioController=S(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new Ot("drawnFrame",0,0,0),this.expressionsPlugin=ne()};w([je],gt),gt.prototype.setParams=function(e){(e.wrapper||e.container)&&(this.wrapper=e.wrapper||e.container);var s="svg";e.animType?s=e.animType:e.renderer&&(s=e.renderer);var o=dr(s);this.renderer=new o(this,e.rendererSettings),this.imagePreloader.setCacheType(s,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=s,e.loop===""||e.loop===null||e.loop===void 0||e.loop===!0?this.loop=!0:e.loop===!1?this.loop=!1:this.loop=parseInt(e.loop,10),this.autoplay="autoplay"in e?e.autoplay:!0,this.name=e.name?e.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(e,"autoloadSegments")?e.autoloadSegments:!0,this.assetsPath=e.assetsPath,this.initialSegment=e.initialSegment,e.audioFactory&&this.audioController.setAudioFactory(e.audioFactory),e.animationData?this.setupAnimation(e.animationData):e.path&&(e.path.lastIndexOf("\\")!==-1?this.path=e.path.substr(0,e.path.lastIndexOf("\\")+1):this.path=e.path.substr(0,e.path.lastIndexOf("/")+1),this.fileName=e.path.substr(e.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),Dt.loadAnimation(e.path,this.configAnimation,this.onSetupError))},gt.prototype.onSetupError=function(){this.trigger("data_failed")},gt.prototype.setupAnimation=function(e){Dt.completeAnimation(e,this.configAnimation)},gt.prototype.setData=function(e,s){s&&_i(s)!=="object"&&(s=JSON.parse(s));var o={wrapper:e,animationData:s},l=e.attributes;o.path=l.getNamedItem("data-animation-path")?l.getNamedItem("data-animation-path").value:l.getNamedItem("data-bm-path")?l.getNamedItem("data-bm-path").value:l.getNamedItem("bm-path")?l.getNamedItem("bm-path").value:"",o.animType=l.getNamedItem("data-anim-type")?l.getNamedItem("data-anim-type").value:l.getNamedItem("data-bm-type")?l.getNamedItem("data-bm-type").value:l.getNamedItem("bm-type")?l.getNamedItem("bm-type").value:l.getNamedItem("data-bm-renderer")?l.getNamedItem("data-bm-renderer").value:l.getNamedItem("bm-renderer")?l.getNamedItem("bm-renderer").value:le()||"canvas";var p=l.getNamedItem("data-anim-loop")?l.getNamedItem("data-anim-loop").value:l.getNamedItem("data-bm-loop")?l.getNamedItem("data-bm-loop").value:l.getNamedItem("bm-loop")?l.getNamedItem("bm-loop").value:"";p==="false"?o.loop=!1:p==="true"?o.loop=!0:p!==""&&(o.loop=parseInt(p,10));var c=l.getNamedItem("data-anim-autoplay")?l.getNamedItem("data-anim-autoplay").value:l.getNamedItem("data-bm-autoplay")?l.getNamedItem("data-bm-autoplay").value:l.getNamedItem("bm-autoplay")?l.getNamedItem("bm-autoplay").value:!0;o.autoplay=c!=="false",o.name=l.getNamedItem("data-name")?l.getNamedItem("data-name").value:l.getNamedItem("data-bm-name")?l.getNamedItem("data-bm-name").value:l.getNamedItem("bm-name")?l.getNamedItem("bm-name").value:"";var v=l.getNamedItem("data-anim-prerender")?l.getNamedItem("data-anim-prerender").value:l.getNamedItem("data-bm-prerender")?l.getNamedItem("data-bm-prerender").value:l.getNamedItem("bm-prerender")?l.getNamedItem("bm-prerender").value:"";v==="false"&&(o.prerender=!1),o.path?this.setParams(o):this.trigger("destroy")},gt.prototype.includeLayers=function(e){e.op>this.animationData.op&&(this.animationData.op=e.op,this.totalFrames=Math.floor(e.op-this.animationData.ip));var s=this.animationData.layers,o,l=s.length,p=e.layers,c,v=p.length;for(c=0;c<v;c+=1)for(o=0;o<l;){if(s[o].id===p[c].id){s[o]=p[c];break}o+=1}if((e.chars||e.fonts)&&(this.renderer.globalData.fontManager.addChars(e.chars),this.renderer.globalData.fontManager.addFonts(e.fonts,this.renderer.globalData.defs)),e.assets)for(l=e.assets.length,o=0;o<l;o+=1)this.animationData.assets.push(e.assets[o]);this.animationData.__complete=!1,Dt.completeAnimation(this.animationData,this.onSegmentComplete)},gt.prototype.onSegmentComplete=function(e){this.animationData=e;var s=ne();s&&s.initExpressions(this),this.loadNextSegment()},gt.prototype.loadNextSegment=function(){var e=this.animationData.segments;if(!e||e.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var s=e.shift();this.timeCompleted=s.time*this.frameRate;var o=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,Dt.loadData(o,this.includeLayers.bind(this),(function(){this.trigger("data_failed")}).bind(this))},gt.prototype.loadSegments=function(){var e=this.animationData.segments;e||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},gt.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},gt.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},gt.prototype.configAnimation=function(e){if(this.renderer)try{this.animationData=e,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(e),e.assets||(e.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(e.assets),this.markers=ai(e.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(s){this.triggerConfigError(s)}},gt.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},gt.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var e=ne();e&&e.initExpressions(this),this.renderer.initItems(),setTimeout((function(){this.trigger("DOMLoaded")}).bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},gt.prototype.resize=function(e,s){var o=typeof e=="number"?e:void 0,l=typeof s=="number"?s:void 0;this.renderer.updateContainerSize(o,l)},gt.prototype.setSubframe=function(e){this.isSubframeEnabled=!!e},gt.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},gt.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(e){this.triggerRenderFrameError(e)}},gt.prototype.play=function(e){e&&this.name!==e||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},gt.prototype.pause=function(e){e&&this.name!==e||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},gt.prototype.togglePause=function(e){e&&this.name!==e||(this.isPaused===!0?this.play():this.pause())},gt.prototype.stop=function(e){e&&this.name!==e||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},gt.prototype.getMarkerData=function(e){for(var s,o=0;o<this.markers.length;o+=1)if(s=this.markers[o],s.payload&&s.payload.name===e)return s;return null},gt.prototype.goToAndStop=function(e,s,o){if(!(o&&this.name!==o)){var l=Number(e);if(isNaN(l)){var p=this.getMarkerData(e);p&&this.goToAndStop(p.time,!0)}else s?this.setCurrentRawFrameValue(e):this.setCurrentRawFrameValue(e*this.frameModifier);this.pause()}},gt.prototype.goToAndPlay=function(e,s,o){if(!(o&&this.name!==o)){var l=Number(e);if(isNaN(l)){var p=this.getMarkerData(e);p&&(p.duration?this.playSegments([p.time,p.time+p.duration],!0):this.goToAndStop(p.time,!0))}else this.goToAndStop(l,s,o);this.play()}},gt.prototype.advanceTime=function(e){if(!(this.isPaused===!0||this.isLoaded===!1)){var s=this.currentRawFrame+e*this.frameModifier,o=!1;s>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(s>this.totalFrames?s%this.totalFrames:0)||(o=!0,s=this.totalFrames-1):s>=this.totalFrames?(this.playCount+=1,this.checkSegments(s%this.totalFrames)||(this.setCurrentRawFrameValue(s%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(s):s<0?this.checkSegments(s%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+s%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(o=!0,s=0)):this.setCurrentRawFrameValue(s),o&&(this.setCurrentRawFrameValue(s),this.pause(),this.trigger("complete"))}},gt.prototype.adjustSegment=function(e,s){this.playCount=0,e[1]<e[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=e[0]-e[1],this.timeCompleted=this.totalFrames,this.firstFrame=e[1],this.setCurrentRawFrameValue(this.totalFrames-.001-s)):e[1]>e[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=e[1]-e[0],this.timeCompleted=this.totalFrames,this.firstFrame=e[0],this.setCurrentRawFrameValue(.001+s)),this.trigger("segmentStart")},gt.prototype.setSegment=function(e,s){var o=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<e?o=e:this.currentRawFrame+this.firstFrame>s&&(o=s-e)),this.firstFrame=e,this.totalFrames=s-e,this.timeCompleted=this.totalFrames,o!==-1&&this.goToAndStop(o,!0)},gt.prototype.playSegments=function(e,s){if(s&&(this.segments.length=0),_i(e[0])==="object"){var o,l=e.length;for(o=0;o<l;o+=1)this.segments.push(e[o])}else this.segments.push(e);this.segments.length&&s&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},gt.prototype.resetSegments=function(e){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),e&&this.checkSegments(0)},gt.prototype.checkSegments=function(e){return this.segments.length?(this.adjustSegment(this.segments.shift(),e),!0):!1},gt.prototype.destroy=function(e){e&&this.name!==e||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},gt.prototype.setCurrentRawFrameValue=function(e){this.currentRawFrame=e,this.gotoFrame()},gt.prototype.setSpeed=function(e){this.playSpeed=e,this.updaFrameModifier()},gt.prototype.setDirection=function(e){this.playDirection=e<0?-1:1,this.updaFrameModifier()},gt.prototype.setLoop=function(e){this.loop=e},gt.prototype.setVolume=function(e,s){s&&this.name!==s||this.audioController.setVolume(e)},gt.prototype.getVolume=function(){return this.audioController.getVolume()},gt.prototype.mute=function(e){e&&this.name!==e||this.audioController.mute()},gt.prototype.unmute=function(e){e&&this.name!==e||this.audioController.unmute()},gt.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},gt.prototype.getPath=function(){return this.path},gt.prototype.getAssetsPath=function(e){var s="";if(e.e)s=e.p;else if(this.assetsPath){var o=e.p;o.indexOf("images/")!==-1&&(o=o.split("/")[1]),s=this.assetsPath+o}else s=this.path,s+=e.u?e.u:"",s+=e.p;return s},gt.prototype.getAssetData=function(e){for(var s=0,o=this.assets.length;s<o;){if(e===this.assets[s].id)return this.assets[s];s+=1}return null},gt.prototype.hide=function(){this.renderer.hide()},gt.prototype.show=function(){this.renderer.show()},gt.prototype.getDuration=function(e){return e?this.totalFrames:this.totalFrames/this.frameRate},gt.prototype.updateDocumentData=function(e,s,o){try{var l=this.renderer.getElementByPath(e);l.updateDocumentData(s,o)}catch{}},gt.prototype.trigger=function(e){if(this._cbs&&this._cbs[e])switch(e){case"enterFrame":this.triggerEvent(e,new Ot(e,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(e,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(e,new qt(e,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(e,new ut(e,this.frameMult));break;case"segmentStart":this.triggerEvent(e,new It(e,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(e,new Wt(e,this));break;default:this.triggerEvent(e)}e==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new Ot(e,this.currentFrame,this.totalFrames,this.frameMult)),e==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new qt(e,this.loop,this.playCount,this.frameMult)),e==="complete"&&this.onComplete&&this.onComplete.call(this,new ut(e,this.frameMult)),e==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new It(e,this.firstFrame,this.totalFrames)),e==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new Wt(e,this))},gt.prototype.triggerRenderFrameError=function(e){var s=new Yt(e,this.currentFrame);this.triggerEvent("error",s),this.onError&&this.onError.call(this,s)},gt.prototype.triggerConfigError=function(e){var s=new Tt(e,this.currentFrame);this.triggerEvent("error",s),this.onError&&this.onError.call(this,s)};var ie=(function(){var e={},s=[],o=0,l=0,p=0,c=!0,v=!1;function P(E){for(var z=0,g=E.target;z<l;)s[z].animation===g&&(s.splice(z,1),z-=1,l-=1,g.isPaused||G()),z+=1}function _(E,z){if(!E)return null;for(var g=0;g<l;){if(s[g].elem===E&&s[g].elem!==null)return s[g].animation;g+=1}var b=new gt;return k(b,E),b.setData(E,z),b}function L(){var E,z=s.length,g=[];for(E=0;E<z;E+=1)g.push(s[E].animation);return g}function R(){p+=1,Ct()}function G(){p-=1}function k(E,z){E.addEventListener("destroy",P),E.addEventListener("_active",R),E.addEventListener("_idle",G),s.push({elem:z,animation:E}),l+=1}function D(E){var z=new gt;return k(z,null),z.setParams(E),z}function N(E,z){var g;for(g=0;g<l;g+=1)s[g].animation.setSpeed(E,z)}function V(E,z){var g;for(g=0;g<l;g+=1)s[g].animation.setDirection(E,z)}function Y(E){var z;for(z=0;z<l;z+=1)s[z].animation.play(E)}function O(E){var z=E-o,g;for(g=0;g<l;g+=1)s[g].animation.advanceTime(z);o=E,p&&!v?window.requestAnimationFrame(O):c=!0}function M(E){o=E,window.requestAnimationFrame(O)}function x(E){var z;for(z=0;z<l;z+=1)s[z].animation.pause(E)}function T(E,z,g){var b;for(b=0;b<l;b+=1)s[b].animation.goToAndStop(E,z,g)}function I(E){var z;for(z=0;z<l;z+=1)s[z].animation.stop(E)}function B(E){var z;for(z=0;z<l;z+=1)s[z].animation.togglePause(E)}function $(E){var z;for(z=l-1;z>=0;z-=1)s[z].animation.destroy(E)}function H(E,z,g){var b=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),j,q=b.length;for(j=0;j<q;j+=1)g&&b[j].setAttribute("data-bm-type",g),_(b[j],E);if(z&&q===0){g||(g="svg");var ct=document.getElementsByTagName("body")[0];ct.innerText="";var St=y("div");St.style.width="100%",St.style.height="100%",St.setAttribute("data-bm-type",g),ct.appendChild(St),_(St,E)}}function ot(){var E;for(E=0;E<l;E+=1)s[E].animation.resize()}function Ct(){!v&&p&&c&&(window.requestAnimationFrame(M),c=!1)}function xt(){v=!0}function ht(){v=!1,Ct()}function Lt(E,z){var g;for(g=0;g<l;g+=1)s[g].animation.setVolume(E,z)}function vt(E){var z;for(z=0;z<l;z+=1)s[z].animation.mute(E)}function nt(E){var z;for(z=0;z<l;z+=1)s[z].animation.unmute(E)}return e.registerAnimation=_,e.loadAnimation=D,e.setSpeed=N,e.setDirection=V,e.play=Y,e.pause=x,e.stop=I,e.togglePause=B,e.searchAnimations=H,e.resize=ot,e.goToAndStop=T,e.destroy=$,e.freeze=xt,e.unfreeze=ht,e.setVolume=Lt,e.mute=vt,e.unmute=nt,e.getRegisteredAnimations=L,e})(),he=(function(){var e={};e.getBezierEasing=o;var s={};function o(M,x,T,I,B){var $=B||("bez_"+M+"_"+x+"_"+T+"_"+I).replace(/\./g,"p");if(s[$])return s[$];var H=new O([M,x,T,I]);return s[$]=H,H}var l=4,p=.001,c=1e-7,v=10,P=11,_=1/(P-1),L=typeof Float32Array=="function";function R(M,x){return 1-3*x+3*M}function G(M,x){return 3*x-6*M}function k(M){return 3*M}function D(M,x,T){return((R(x,T)*M+G(x,T))*M+k(x))*M}function N(M,x,T){return 3*R(x,T)*M*M+2*G(x,T)*M+k(x)}function V(M,x,T,I,B){var $,H,ot=0;do H=x+(T-x)/2,$=D(H,I,B)-M,$>0?T=H:x=H;while(Math.abs($)>c&&++ot<v);return H}function Y(M,x,T,I){for(var B=0;B<l;++B){var $=N(x,T,I);if($===0)return x;var H=D(x,T,I)-M;x-=H/$}return x}function O(M){this._p=M,this._mSampleValues=L?new Float32Array(P):new Array(P),this._precomputed=!1,this.get=this.get.bind(this)}return O.prototype={get:function(x){var T=this._p[0],I=this._p[1],B=this._p[2],$=this._p[3];return this._precomputed||this._precompute(),T===I&&B===$?x:x===0?0:x===1?1:D(this._getTForX(x),I,$)},_precompute:function(){var x=this._p[0],T=this._p[1],I=this._p[2],B=this._p[3];this._precomputed=!0,(x!==T||I!==B)&&this._calcSampleValues()},_calcSampleValues:function(){for(var x=this._p[0],T=this._p[2],I=0;I<P;++I)this._mSampleValues[I]=D(I*_,x,T)},_getTForX:function(x){for(var T=this._p[0],I=this._p[2],B=this._mSampleValues,$=0,H=1,ot=P-1;H!==ot&&B[H]<=x;++H)$+=_;--H;var Ct=(x-B[H])/(B[H+1]-B[H]),xt=$+Ct*_,ht=N(xt,T,I);return ht>=p?Y(x,xt,T,I):ht===0?xt:V(x,$,$+_,T,I)}},e})(),or=(function(){function e(s){return s.concat(A(s.length))}return{double:e}})(),re=(function(){return function(e,s,o){var l=0,p=e,c=A(p),v={newElement:P,release:_};function P(){var L;return l?(l-=1,L=c[l]):L=s(),L}function _(L){l===p&&(c=or.double(c),p*=2),o&&o(L),c[l]=L,l+=1}return v}})(),yi=(function(){function e(){return{addedLength:0,percents:F("float32",be()),lengths:F("float32",be())}}return re(8,e)})(),li=(function(){function e(){return{lengths:[],totalLength:0}}function s(o){var l,p=o.lengths.length;for(l=0;l<p;l+=1)yi.release(o.lengths[l]);o.lengths.length=0}return re(8,e,s)})();function ar(){var e=Math;function s(k,D,N,V,Y,O){var M=k*V+D*Y+N*O-Y*V-O*k-N*D;return M>-.001&&M<.001}function o(k,D,N,V,Y,O,M,x,T){if(N===0&&O===0&&T===0)return s(k,D,V,Y,M,x);var I=e.sqrt(e.pow(V-k,2)+e.pow(Y-D,2)+e.pow(O-N,2)),B=e.sqrt(e.pow(M-k,2)+e.pow(x-D,2)+e.pow(T-N,2)),$=e.sqrt(e.pow(M-V,2)+e.pow(x-Y,2)+e.pow(T-O,2)),H;return I>B?I>$?H=I-B-$:H=$-B-I:$>B?H=$-B-I:H=B-I-$,H>-1e-4&&H<1e-4}var l=(function(){return function(k,D,N,V){var Y=be(),O,M,x,T,I,B=0,$,H=[],ot=[],Ct=yi.newElement();for(x=N.length,O=0;O<Y;O+=1){for(I=O/(Y-1),$=0,M=0;M<x;M+=1)T=K(1-I,3)*k[M]+3*K(1-I,2)*I*N[M]+3*(1-I)*K(I,2)*V[M]+K(I,3)*D[M],H[M]=T,ot[M]!==null&&($+=K(H[M]-ot[M],2)),ot[M]=H[M];$&&($=Z($),B+=$),Ct.percents[O]=I,Ct.lengths[O]=B}return Ct.addedLength=B,Ct}})();function p(k){var D=li.newElement(),N=k.c,V=k.v,Y=k.o,O=k.i,M,x=k._length,T=D.lengths,I=0;for(M=0;M<x-1;M+=1)T[M]=l(V[M],V[M+1],Y[M],O[M+1]),I+=T[M].addedLength;return N&&x&&(T[M]=l(V[M],V[0],Y[M],O[0]),I+=T[M].addedLength),D.totalLength=I,D}function c(k){this.segmentLength=0,this.points=new Array(k)}function v(k,D){this.partialLength=k,this.point=D}var P=(function(){var k={};return function(D,N,V,Y){var O=(D[0]+"_"+D[1]+"_"+N[0]+"_"+N[1]+"_"+V[0]+"_"+V[1]+"_"+Y[0]+"_"+Y[1]).replace(/\./g,"p");if(!k[O]){var M=be(),x,T,I,B,$,H=0,ot,Ct,xt=null;D.length===2&&(D[0]!==N[0]||D[1]!==N[1])&&s(D[0],D[1],N[0],N[1],D[0]+V[0],D[1]+V[1])&&s(D[0],D[1],N[0],N[1],N[0]+Y[0],N[1]+Y[1])&&(M=2);var ht=new c(M);for(I=V.length,x=0;x<M;x+=1){for(Ct=A(I),$=x/(M-1),ot=0,T=0;T<I;T+=1)B=K(1-$,3)*D[T]+3*K(1-$,2)*$*(D[T]+V[T])+3*(1-$)*K($,2)*(N[T]+Y[T])+K($,3)*N[T],Ct[T]=B,xt!==null&&(ot+=K(Ct[T]-xt[T],2));ot=Z(ot),H+=ot,ht.points[x]=new v(ot,Ct),xt=Ct}ht.segmentLength=H,k[O]=ht}return k[O]}})();function _(k,D){var N=D.percents,V=D.lengths,Y=N.length,O=rt((Y-1)*k),M=k*D.addedLength,x=0;if(O===Y-1||O===0||M===V[O])return N[O];for(var T=V[O]>M?-1:1,I=!0;I;)if(V[O]<=M&&V[O+1]>M?(x=(M-V[O])/(V[O+1]-V[O]),I=!1):O+=T,O<0||O>=Y-1){if(O===Y-1)return N[O];I=!1}return N[O]+(N[O+1]-N[O])*x}function L(k,D,N,V,Y,O){var M=_(Y,O),x=1-M,T=e.round((x*x*x*k[0]+(M*x*x+x*M*x+x*x*M)*N[0]+(M*M*x+x*M*M+M*x*M)*V[0]+M*M*M*D[0])*1e3)/1e3,I=e.round((x*x*x*k[1]+(M*x*x+x*M*x+x*x*M)*N[1]+(M*M*x+x*M*M+M*x*M)*V[1]+M*M*M*D[1])*1e3)/1e3;return[T,I]}var R=F("float32",8);function G(k,D,N,V,Y,O,M){Y<0?Y=0:Y>1&&(Y=1);var x=_(Y,M);O=O>1?1:O;var T=_(O,M),I,B=k.length,$=1-x,H=1-T,ot=$*$*$,Ct=x*$*$*3,xt=x*x*$*3,ht=x*x*x,Lt=$*$*H,vt=x*$*H+$*x*H+$*$*T,nt=x*x*H+$*x*T+x*$*T,E=x*x*T,z=$*H*H,g=x*H*H+$*T*H+$*H*T,b=x*T*H+$*T*T+x*H*T,j=x*T*T,q=H*H*H,ct=T*H*H+H*T*H+H*H*T,St=T*T*H+H*T*T+T*H*T,Et=T*T*T;for(I=0;I<B;I+=1)R[I*4]=e.round((ot*k[I]+Ct*N[I]+xt*V[I]+ht*D[I])*1e3)/1e3,R[I*4+1]=e.round((Lt*k[I]+vt*N[I]+nt*V[I]+E*D[I])*1e3)/1e3,R[I*4+2]=e.round((z*k[I]+g*N[I]+b*V[I]+j*D[I])*1e3)/1e3,R[I*4+3]=e.round((q*k[I]+ct*N[I]+St*V[I]+Et*D[I])*1e3)/1e3;return R}return{getSegmentsLength:p,getNewSegment:G,getPointInSegment:L,buildBezierData:P,pointOnLine2D:s,pointOnLine3D:o}}var Ze=ar(),Qt=a,ds=Math.abs;function Ui(e,s){var o=this.offsetTime,l;this.propType==="multidimensional"&&(l=F("float32",this.pv.length));for(var p=s.lastIndex,c=p,v=this.keyframes.length-1,P=!0,_,L,R;P;){if(_=this.keyframes[c],L=this.keyframes[c+1],c===v-1&&e>=L.t-o){_.h&&(_=L),p=0;break}if(L.t-o>e){p=c;break}c<v-1?c+=1:(p=0,P=!1)}R=this.keyframesMetadata[c]||{};var G,k,D,N,V,Y,O=L.t-o,M=_.t-o,x;if(_.to){R.bezierData||(R.bezierData=Ze.buildBezierData(_.s,L.s||_.e,_.to,_.ti));var T=R.bezierData;if(e>=O||e<M){var I=e>=O?T.points.length-1:0;for(k=T.points[I].point.length,G=0;G<k;G+=1)l[G]=T.points[I].point[G]}else{R.__fnct?Y=R.__fnct:(Y=he.getBezierEasing(_.o.x,_.o.y,_.i.x,_.i.y,_.n).get,R.__fnct=Y),D=Y((e-M)/(O-M));var B=T.segmentLength*D,$,H=s.lastFrame<e&&s._lastKeyframeIndex===c?s._lastAddedLength:0;for(V=s.lastFrame<e&&s._lastKeyframeIndex===c?s._lastPoint:0,P=!0,N=T.points.length;P;){if(H+=T.points[V].partialLength,B===0||D===0||V===T.points.length-1){for(k=T.points[V].point.length,G=0;G<k;G+=1)l[G]=T.points[V].point[G];break}else if(B>=H&&B<H+T.points[V+1].partialLength){for($=(B-H)/T.points[V+1].partialLength,k=T.points[V].point.length,G=0;G<k;G+=1)l[G]=T.points[V].point[G]+(T.points[V+1].point[G]-T.points[V].point[G])*$;break}V<N-1?V+=1:P=!1}s._lastPoint=V,s._lastAddedLength=H-T.points[V].partialLength,s._lastKeyframeIndex=c}}else{var ot,Ct,xt,ht,Lt;if(v=_.s.length,x=L.s||_.e,this.sh&&_.h!==1)if(e>=O)l[0]=x[0],l[1]=x[1],l[2]=x[2];else if(e<=M)l[0]=_.s[0],l[1]=_.s[1],l[2]=_.s[2];else{var vt=lr(_.s),nt=lr(x),E=(e-M)/(O-M);Wr(l,qr(vt,nt,E))}else for(c=0;c<v;c+=1)_.h!==1&&(e>=O?D=1:e<M?D=0:(_.o.x.constructor===Array?(R.__fnct||(R.__fnct=[]),R.__fnct[c]?Y=R.__fnct[c]:(ot=_.o.x[c]===void 0?_.o.x[0]:_.o.x[c],Ct=_.o.y[c]===void 0?_.o.y[0]:_.o.y[c],xt=_.i.x[c]===void 0?_.i.x[0]:_.i.x[c],ht=_.i.y[c]===void 0?_.i.y[0]:_.i.y[c],Y=he.getBezierEasing(ot,Ct,xt,ht).get,R.__fnct[c]=Y)):R.__fnct?Y=R.__fnct:(ot=_.o.x,Ct=_.o.y,xt=_.i.x,ht=_.i.y,Y=he.getBezierEasing(ot,Ct,xt,ht).get,_.keyframeMetadata=Y),D=Y((e-M)/(O-M)))),x=L.s||_.e,Lt=_.h===1?_.s[c]:_.s[c]+(x[c]-_.s[c])*D,this.propType==="multidimensional"?l[c]=Lt:l=Lt}return s.lastIndex=p,l}function qr(e,s,o){var l=[],p=e[0],c=e[1],v=e[2],P=e[3],_=s[0],L=s[1],R=s[2],G=s[3],k,D,N,V,Y;return D=p*_+c*L+v*R+P*G,D<0&&(D=-D,_=-_,L=-L,R=-R,G=-G),1-D>1e-6?(k=Math.acos(D),N=Math.sin(k),V=Math.sin((1-o)*k)/N,Y=Math.sin(o*k)/N):(V=1-o,Y=o),l[0]=V*p+Y*_,l[1]=V*c+Y*L,l[2]=V*v+Y*R,l[3]=V*P+Y*G,l}function Wr(e,s){var o=s[0],l=s[1],p=s[2],c=s[3],v=Math.atan2(2*l*c-2*o*p,1-2*l*l-2*p*p),P=Math.asin(2*o*l+2*p*c),_=Math.atan2(2*o*c-2*l*p,1-2*o*o-2*p*p);e[0]=v/it,e[1]=P/it,e[2]=_/it}function lr(e){var s=e[0]*it,o=e[1]*it,l=e[2]*it,p=Math.cos(s/2),c=Math.cos(o/2),v=Math.cos(l/2),P=Math.sin(s/2),_=Math.sin(o/2),L=Math.sin(l/2),R=p*c*v-P*_*L,G=P*_*v+p*c*L,k=P*c*v+p*_*L,D=p*_*v-P*c*L;return[G,k,D,R]}function mr(){var e=this.comp.renderedFrame-this.offsetTime,s=this.keyframes[0].t-this.offsetTime,o=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(e===this._caching.lastFrame||this._caching.lastFrame!==Qt&&(this._caching.lastFrame>=o&&e>=o||this._caching.lastFrame<s&&e<s))){this._caching.lastFrame>=e&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var l=this.interpolateValue(e,this._caching);this.pv=l}return this._caching.lastFrame=e,this.pv}function Rt(e){var s;if(this.propType==="unidimensional")s=e*this.mult,ds(this.v-s)>1e-5&&(this.v=s,this._mdf=!0);else for(var o=0,l=this.v.length;o<l;)s=e[o]*this.mult,ds(this.v[o]-s)>1e-5&&(this.v[o]=s,this._mdf=!0),o+=1}function Ki(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var e,s=this.effectsSequence.length,o=this.kf?this.pv:this.data.k;for(e=0;e<s;e+=1)o=this.effectsSequence[e](o);this.setVValue(o),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function Qe(e){this.effectsSequence.push(e),this.container.addDynamicProperty(this)}function Ii(e,s,o,l){this.propType="unidimensional",this.mult=o||1,this.data=s,this.v=o?s.k*o:s.k,this.pv=s.k,this._mdf=!1,this.elem=e,this.container=l,this.comp=e.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=Ki,this.setVValue=Rt,this.addEffect=Qe}function Oi(e,s,o,l){this.propType="multidimensional",this.mult=o||1,this.data=s,this._mdf=!1,this.elem=e,this.container=l,this.comp=e.comp,this.k=!1,this.kf=!1,this.frameId=-1;var p,c=s.k.length;for(this.v=F("float32",c),this.pv=F("float32",c),this.vel=F("float32",c),p=0;p<c;p+=1)this.v[p]=s.k[p]*this.mult,this.pv[p]=s.k[p];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=Ki,this.setVValue=Rt,this.addEffect=Qe}function Ar(e,s,o,l){this.propType="unidimensional",this.keyframes=s.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:Qt,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=s,this.mult=o||1,this.elem=e,this.container=l,this.comp=e.comp,this.v=Qt,this.pv=Qt,this._isFirstFrame=!0,this.getValue=Ki,this.setVValue=Rt,this.interpolateValue=Ui,this.effectsSequence=[mr.bind(this)],this.addEffect=Qe}function Yr(e,s,o,l){this.propType="multidimensional";var p,c=s.k.length,v,P,_,L;for(p=0;p<c-1;p+=1)s.k[p].to&&s.k[p].s&&s.k[p+1]&&s.k[p+1].s&&(v=s.k[p].s,P=s.k[p+1].s,_=s.k[p].to,L=s.k[p].ti,(v.length===2&&!(v[0]===P[0]&&v[1]===P[1])&&Ze.pointOnLine2D(v[0],v[1],P[0],P[1],v[0]+_[0],v[1]+_[1])&&Ze.pointOnLine2D(v[0],v[1],P[0],P[1],P[0]+L[0],P[1]+L[1])||v.length===3&&!(v[0]===P[0]&&v[1]===P[1]&&v[2]===P[2])&&Ze.pointOnLine3D(v[0],v[1],v[2],P[0],P[1],P[2],v[0]+_[0],v[1]+_[1],v[2]+_[2])&&Ze.pointOnLine3D(v[0],v[1],v[2],P[0],P[1],P[2],P[0]+L[0],P[1]+L[1],P[2]+L[2]))&&(s.k[p].to=null,s.k[p].ti=null),v[0]===P[0]&&v[1]===P[1]&&_[0]===0&&_[1]===0&&L[0]===0&&L[1]===0&&(v.length===2||v[2]===P[2]&&_[2]===0&&L[2]===0)&&(s.k[p].to=null,s.k[p].ti=null));this.effectsSequence=[mr.bind(this)],this.data=s,this.keyframes=s.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=o||1,this.elem=e,this.container=l,this.comp=e.comp,this.getValue=Ki,this.setVValue=Rt,this.interpolateValue=Ui,this.frameId=-1;var R=s.k[0].s.length;for(this.v=F("float32",R),this.pv=F("float32",R),p=0;p<R;p+=1)this.v[p]=Qt,this.pv[p]=Qt;this._caching={lastFrame:Qt,lastIndex:0,value:F("float32",R)},this.addEffect=Qe}var lt=(function(){function e(o,l,p,c,v){l.sid&&(l=o.globalData.slotManager.getProp(l));var P;if(!l.k.length)P=new Ii(o,l,c,v);else if(typeof l.k[0]=="number")P=new Oi(o,l,c,v);else switch(p){case 0:P=new Ar(o,l,c,v);break;case 1:P=new Yr(o,l,c,v);break}return P.effectsSequence.length&&v.addDynamicProperty(P),P}var s={getProp:e};return s})();function pe(){}pe.prototype={addDynamicProperty:function(s){this.dynamicProperties.indexOf(s)===-1&&(this.dynamicProperties.push(s),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var s,o=this.dynamicProperties.length;for(s=0;s<o;s+=1)this.dynamicProperties[s].getValue(),this.dynamicProperties[s]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(s){this.container=s,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var Pt=(function(){function e(){return F("float32",2)}return re(8,e)})();function bt(){this.c=!1,this._length=0,this._maxLength=8,this.v=A(this._maxLength),this.o=A(this._maxLength),this.i=A(this._maxLength)}bt.prototype.setPathData=function(e,s){this.c=e,this.setLength(s);for(var o=0;o<s;)this.v[o]=Pt.newElement(),this.o[o]=Pt.newElement(),this.i[o]=Pt.newElement(),o+=1},bt.prototype.setLength=function(e){for(;this._maxLength<e;)this.doubleArrayLength();this._length=e},bt.prototype.doubleArrayLength=function(){this.v=this.v.concat(A(this._maxLength)),this.i=this.i.concat(A(this._maxLength)),this.o=this.o.concat(A(this._maxLength)),this._maxLength*=2},bt.prototype.setXYAt=function(e,s,o,l,p){var c;switch(this._length=Math.max(this._length,l+1),this._length>=this._maxLength&&this.doubleArrayLength(),o){case"v":c=this.v;break;case"i":c=this.i;break;case"o":c=this.o;break;default:c=[];break}(!c[l]||c[l]&&!p)&&(c[l]=Pt.newElement()),c[l][0]=e,c[l][1]=s},bt.prototype.setTripleAt=function(e,s,o,l,p,c,v,P){this.setXYAt(e,s,"v",v,P),this.setXYAt(o,l,"o",v,P),this.setXYAt(p,c,"i",v,P)},bt.prototype.reverse=function(){var e=new bt;e.setPathData(this.c,this._length);var s=this.v,o=this.o,l=this.i,p=0;this.c&&(e.setTripleAt(s[0][0],s[0][1],l[0][0],l[0][1],o[0][0],o[0][1],0,!1),p=1);var c=this._length-1,v=this._length,P;for(P=p;P<v;P+=1)e.setTripleAt(s[c][0],s[c][1],l[c][0],l[c][1],o[c][0],o[c][1],P,!1),c-=1;return e},bt.prototype.length=function(){return this._length};var Ft=(function(){function e(){return new bt}function s(p){var c=p._length,v;for(v=0;v<c;v+=1)Pt.release(p.v[v]),Pt.release(p.i[v]),Pt.release(p.o[v]),p.v[v]=null,p.i[v]=null,p.o[v]=null;p._length=0,p.c=!1}function o(p){var c=l.newElement(),v,P=p._length===void 0?p.v.length:p._length;for(c.setLength(P),c.c=p.c,v=0;v<P;v+=1)c.setTripleAt(p.v[v][0],p.v[v][1],p.o[v][0],p.o[v][1],p.i[v][0],p.i[v][1],v);return c}var l=re(4,e,s);return l.clone=o,l})();function ft(){this._length=0,this._maxLength=4,this.shapes=A(this._maxLength)}ft.prototype.addShape=function(e){this._length===this._maxLength&&(this.shapes=this.shapes.concat(A(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=e,this._length+=1},ft.prototype.releaseShapes=function(){var e;for(e=0;e<this._length;e+=1)Ft.release(this.shapes[e]);this._length=0};var At=(function(){var e={newShapeCollection:p,release:c},s=0,o=4,l=A(o);function p(){var v;return s?(s-=1,v=l[s]):v=new ft,v}function c(v){var P,_=v._length;for(P=0;P<_;P+=1)Ft.release(v.shapes[P]);v._length=0,s===o&&(l=or.double(l),o*=2),l[s]=v,s+=1}return e})(),wt=(function(){var e=-999999;function s(O,M,x){var T=x.lastIndex,I,B,$,H,ot,Ct,xt,ht,Lt,vt=this.keyframes;if(O<vt[0].t-this.offsetTime)I=vt[0].s[0],$=!0,T=0;else if(O>=vt[vt.length-1].t-this.offsetTime)I=vt[vt.length-1].s?vt[vt.length-1].s[0]:vt[vt.length-2].e[0],$=!0;else{for(var nt=T,E=vt.length-1,z=!0,g,b,j;z&&(g=vt[nt],b=vt[nt+1],!(b.t-this.offsetTime>O));)nt<E-1?nt+=1:z=!1;if(j=this.keyframesMetadata[nt]||{},$=g.h===1,T=nt,!$){if(O>=b.t-this.offsetTime)ht=1;else if(O<g.t-this.offsetTime)ht=0;else{var q;j.__fnct?q=j.__fnct:(q=he.getBezierEasing(g.o.x,g.o.y,g.i.x,g.i.y).get,j.__fnct=q),ht=q((O-(g.t-this.offsetTime))/(b.t-this.offsetTime-(g.t-this.offsetTime)))}B=b.s?b.s[0]:g.e[0]}I=g.s[0]}for(Ct=M._length,xt=I.i[0].length,x.lastIndex=T,H=0;H<Ct;H+=1)for(ot=0;ot<xt;ot+=1)Lt=$?I.i[H][ot]:I.i[H][ot]+(B.i[H][ot]-I.i[H][ot])*ht,M.i[H][ot]=Lt,Lt=$?I.o[H][ot]:I.o[H][ot]+(B.o[H][ot]-I.o[H][ot])*ht,M.o[H][ot]=Lt,Lt=$?I.v[H][ot]:I.v[H][ot]+(B.v[H][ot]-I.v[H][ot])*ht,M.v[H][ot]=Lt}function o(){var O=this.comp.renderedFrame-this.offsetTime,M=this.keyframes[0].t-this.offsetTime,x=this.keyframes[this.keyframes.length-1].t-this.offsetTime,T=this._caching.lastFrame;return T!==e&&(T<M&&O<M||T>x&&O>x)||(this._caching.lastIndex=T<O?this._caching.lastIndex:0,this.interpolateShape(O,this.pv,this._caching)),this._caching.lastFrame=O,this.pv}function l(){this.paths=this.localShapeCollection}function p(O,M){if(O._length!==M._length||O.c!==M.c)return!1;var x,T=O._length;for(x=0;x<T;x+=1)if(O.v[x][0]!==M.v[x][0]||O.v[x][1]!==M.v[x][1]||O.o[x][0]!==M.o[x][0]||O.o[x][1]!==M.o[x][1]||O.i[x][0]!==M.i[x][0]||O.i[x][1]!==M.i[x][1])return!1;return!0}function c(O){p(this.v,O)||(this.v=Ft.clone(O),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function v(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var O;this.kf?O=this.pv:this.data.ks?O=this.data.ks.k:O=this.data.pt.k;var M,x=this.effectsSequence.length;for(M=0;M<x;M+=1)O=this.effectsSequence[M](O);this.setVValue(O),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function P(O,M,x){this.propType="shape",this.comp=O.comp,this.container=O,this.elem=O,this.data=M,this.k=!1,this.kf=!1,this._mdf=!1;var T=x===3?M.pt.k:M.ks.k;this.v=Ft.clone(T),this.pv=Ft.clone(this.v),this.localShapeCollection=At.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=l,this.effectsSequence=[]}function _(O){this.effectsSequence.push(O),this.container.addDynamicProperty(this)}P.prototype.interpolateShape=s,P.prototype.getValue=v,P.prototype.setVValue=c,P.prototype.addEffect=_;function L(O,M,x){this.propType="shape",this.comp=O.comp,this.elem=O,this.container=O,this.offsetTime=O.data.st,this.keyframes=x===3?M.pt.k:M.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var T=this.keyframes[0].s[0].i.length;this.v=Ft.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,T),this.pv=Ft.clone(this.v),this.localShapeCollection=At.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=e,this.reset=l,this._caching={lastFrame:e,lastIndex:0},this.effectsSequence=[o.bind(this)]}L.prototype.getValue=v,L.prototype.interpolateShape=s,L.prototype.setVValue=c,L.prototype.addEffect=_;var R=(function(){var O=st;function M(x,T){this.v=Ft.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=At.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=T.d,this.elem=x,this.comp=x.comp,this.frameId=-1,this.initDynamicPropertyContainer(x),this.p=lt.getProp(x,T.p,1,0,this),this.s=lt.getProp(x,T.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return M.prototype={reset:l,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var T=this.p.v[0],I=this.p.v[1],B=this.s.v[0]/2,$=this.s.v[1]/2,H=this.d!==3,ot=this.v;ot.v[0][0]=T,ot.v[0][1]=I-$,ot.v[1][0]=H?T+B:T-B,ot.v[1][1]=I,ot.v[2][0]=T,ot.v[2][1]=I+$,ot.v[3][0]=H?T-B:T+B,ot.v[3][1]=I,ot.i[0][0]=H?T-B*O:T+B*O,ot.i[0][1]=I-$,ot.i[1][0]=H?T+B:T-B,ot.i[1][1]=I-$*O,ot.i[2][0]=H?T+B*O:T-B*O,ot.i[2][1]=I+$,ot.i[3][0]=H?T-B:T+B,ot.i[3][1]=I+$*O,ot.o[0][0]=H?T+B*O:T-B*O,ot.o[0][1]=I-$,ot.o[1][0]=H?T+B:T-B,ot.o[1][1]=I+$*O,ot.o[2][0]=H?T-B*O:T+B*O,ot.o[2][1]=I+$,ot.o[3][0]=H?T-B:T+B,ot.o[3][1]=I-$*O}},w([pe],M),M})(),G=(function(){function O(M,x){this.v=Ft.newElement(),this.v.setPathData(!0,0),this.elem=M,this.comp=M.comp,this.data=x,this.frameId=-1,this.d=x.d,this.initDynamicPropertyContainer(M),x.sy===1?(this.ir=lt.getProp(M,x.ir,0,0,this),this.is=lt.getProp(M,x.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=lt.getProp(M,x.pt,0,0,this),this.p=lt.getProp(M,x.p,1,0,this),this.r=lt.getProp(M,x.r,0,it,this),this.or=lt.getProp(M,x.or,0,0,this),this.os=lt.getProp(M,x.os,0,.01,this),this.localShapeCollection=At.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return O.prototype={reset:l,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var x=Math.floor(this.pt.v)*2,T=Math.PI*2/x,I=!0,B=this.or.v,$=this.ir.v,H=this.os.v,ot=this.is.v,Ct=2*Math.PI*B/(x*2),xt=2*Math.PI*$/(x*2),ht,Lt,vt,nt,E=-Math.PI/2;E+=this.r.v;var z=this.data.d===3?-1:1;for(this.v._length=0,ht=0;ht<x;ht+=1){Lt=I?B:$,vt=I?H:ot,nt=I?Ct:xt;var g=Lt*Math.cos(E),b=Lt*Math.sin(E),j=g===0&&b===0?0:b/Math.sqrt(g*g+b*b),q=g===0&&b===0?0:-g/Math.sqrt(g*g+b*b);g+=+this.p.v[0],b+=+this.p.v[1],this.v.setTripleAt(g,b,g-j*nt*vt*z,b-q*nt*vt*z,g+j*nt*vt*z,b+q*nt*vt*z,ht,!0),I=!I,E+=T*z}},convertPolygonToPath:function(){var x=Math.floor(this.pt.v),T=Math.PI*2/x,I=this.or.v,B=this.os.v,$=2*Math.PI*I/(x*4),H,ot=-Math.PI*.5,Ct=this.data.d===3?-1:1;for(ot+=this.r.v,this.v._length=0,H=0;H<x;H+=1){var xt=I*Math.cos(ot),ht=I*Math.sin(ot),Lt=xt===0&&ht===0?0:ht/Math.sqrt(xt*xt+ht*ht),vt=xt===0&&ht===0?0:-xt/Math.sqrt(xt*xt+ht*ht);xt+=+this.p.v[0],ht+=+this.p.v[1],this.v.setTripleAt(xt,ht,xt-Lt*$*B*Ct,ht-vt*$*B*Ct,xt+Lt*$*B*Ct,ht+vt*$*B*Ct,H,!0),ot+=T*Ct}this.paths.length=0,this.paths[0]=this.v}},w([pe],O),O})(),k=(function(){function O(M,x){this.v=Ft.newElement(),this.v.c=!0,this.localShapeCollection=At.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=M,this.comp=M.comp,this.frameId=-1,this.d=x.d,this.initDynamicPropertyContainer(M),this.p=lt.getProp(M,x.p,1,0,this),this.s=lt.getProp(M,x.s,1,0,this),this.r=lt.getProp(M,x.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return O.prototype={convertRectToPath:function(){var x=this.p.v[0],T=this.p.v[1],I=this.s.v[0]/2,B=this.s.v[1]/2,$=tt(I,B,this.r.v),H=$*(1-st);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(x+I,T-B+$,x+I,T-B+$,x+I,T-B+H,0,!0),this.v.setTripleAt(x+I,T+B-$,x+I,T+B-H,x+I,T+B-$,1,!0),$!==0?(this.v.setTripleAt(x+I-$,T+B,x+I-$,T+B,x+I-H,T+B,2,!0),this.v.setTripleAt(x-I+$,T+B,x-I+H,T+B,x-I+$,T+B,3,!0),this.v.setTripleAt(x-I,T+B-$,x-I,T+B-$,x-I,T+B-H,4,!0),this.v.setTripleAt(x-I,T-B+$,x-I,T-B+H,x-I,T-B+$,5,!0),this.v.setTripleAt(x-I+$,T-B,x-I+$,T-B,x-I+H,T-B,6,!0),this.v.setTripleAt(x+I-$,T-B,x+I-H,T-B,x+I-$,T-B,7,!0)):(this.v.setTripleAt(x-I,T+B,x-I+H,T+B,x-I,T+B,2),this.v.setTripleAt(x-I,T-B,x-I,T-B+H,x-I,T-B,3))):(this.v.setTripleAt(x+I,T-B+$,x+I,T-B+H,x+I,T-B+$,0,!0),$!==0?(this.v.setTripleAt(x+I-$,T-B,x+I-$,T-B,x+I-H,T-B,1,!0),this.v.setTripleAt(x-I+$,T-B,x-I+H,T-B,x-I+$,T-B,2,!0),this.v.setTripleAt(x-I,T-B+$,x-I,T-B+$,x-I,T-B+H,3,!0),this.v.setTripleAt(x-I,T+B-$,x-I,T+B-H,x-I,T+B-$,4,!0),this.v.setTripleAt(x-I+$,T+B,x-I+$,T+B,x-I+H,T+B,5,!0),this.v.setTripleAt(x+I-$,T+B,x+I-H,T+B,x+I-$,T+B,6,!0),this.v.setTripleAt(x+I,T+B-$,x+I,T+B-$,x+I,T+B-H,7,!0)):(this.v.setTripleAt(x-I,T-B,x-I+H,T-B,x-I,T-B,1,!0),this.v.setTripleAt(x-I,T+B,x-I,T+B-H,x-I,T+B,2,!0),this.v.setTripleAt(x+I,T+B,x+I-H,T+B,x+I,T+B,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:l},w([pe],O),O})();function D(O,M,x){var T;if(x===3||x===4){var I=x===3?M.pt:M.ks,B=I.k;B.length?T=new L(O,M,x):T=new P(O,M,x)}else x===5?T=new k(O,M):x===6?T=new R(O,M):x===7&&(T=new G(O,M));return T.k&&O.addDynamicProperty(T),T}function N(){return P}function V(){return L}var Y={};return Y.getShapeProp=D,Y.getConstructorFunction=N,Y.getKeyframedConstructorFunction=V,Y})();/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */var yt=(function(){var e=Math.cos,s=Math.sin,o=Math.tan,l=Math.round;function p(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function c(g){if(g===0)return this;var b=e(g),j=s(g);return this._t(b,-j,0,0,j,b,0,0,0,0,1,0,0,0,0,1)}function v(g){if(g===0)return this;var b=e(g),j=s(g);return this._t(1,0,0,0,0,b,-j,0,0,j,b,0,0,0,0,1)}function P(g){if(g===0)return this;var b=e(g),j=s(g);return this._t(b,0,j,0,0,1,0,0,-j,0,b,0,0,0,0,1)}function _(g){if(g===0)return this;var b=e(g),j=s(g);return this._t(b,-j,0,0,j,b,0,0,0,0,1,0,0,0,0,1)}function L(g,b){return this._t(1,b,g,1,0,0)}function R(g,b){return this.shear(o(g),o(b))}function G(g,b){var j=e(b),q=s(b);return this._t(j,q,0,0,-q,j,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,o(g),1,0,0,0,0,1,0,0,0,0,1)._t(j,-q,0,0,q,j,0,0,0,0,1,0,0,0,0,1)}function k(g,b,j){return!j&&j!==0&&(j=1),g===1&&b===1&&j===1?this:this._t(g,0,0,0,0,b,0,0,0,0,j,0,0,0,0,1)}function D(g,b,j,q,ct,St,Et,Xt,Gt,ze,wi,_r,Si,He,Vi,Jt){return this.props[0]=g,this.props[1]=b,this.props[2]=j,this.props[3]=q,this.props[4]=ct,this.props[5]=St,this.props[6]=Et,this.props[7]=Xt,this.props[8]=Gt,this.props[9]=ze,this.props[10]=wi,this.props[11]=_r,this.props[12]=Si,this.props[13]=He,this.props[14]=Vi,this.props[15]=Jt,this}function N(g,b,j){return j=j||0,g!==0||b!==0||j!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,g,b,j,1):this}function V(g,b,j,q,ct,St,Et,Xt,Gt,ze,wi,_r,Si,He,Vi,Jt){var _t=this.props;if(g===1&&b===0&&j===0&&q===0&&ct===0&&St===1&&Et===0&&Xt===0&&Gt===0&&ze===0&&wi===1&&_r===0)return _t[12]=_t[12]*g+_t[15]*Si,_t[13]=_t[13]*St+_t[15]*He,_t[14]=_t[14]*wi+_t[15]*Vi,_t[15]*=Jt,this._identityCalculated=!1,this;var Mr=_t[0],Ur=_t[1],Fr=_t[2],yr=_t[3],Lr=_t[4],Ir=_t[5],Ti=_t[6],Kr=_t[7],Zr=_t[8],fr=_t[9],Qr=_t[10],ur=_t[11],_s=_t[12],ho=_t[13],fo=_t[14],uo=_t[15];return _t[0]=Mr*g+Ur*ct+Fr*Gt+yr*Si,_t[1]=Mr*b+Ur*St+Fr*ze+yr*He,_t[2]=Mr*j+Ur*Et+Fr*wi+yr*Vi,_t[3]=Mr*q+Ur*Xt+Fr*_r+yr*Jt,_t[4]=Lr*g+Ir*ct+Ti*Gt+Kr*Si,_t[5]=Lr*b+Ir*St+Ti*ze+Kr*He,_t[6]=Lr*j+Ir*Et+Ti*wi+Kr*Vi,_t[7]=Lr*q+Ir*Xt+Ti*_r+Kr*Jt,_t[8]=Zr*g+fr*ct+Qr*Gt+ur*Si,_t[9]=Zr*b+fr*St+Qr*ze+ur*He,_t[10]=Zr*j+fr*Et+Qr*wi+ur*Vi,_t[11]=Zr*q+fr*Xt+Qr*_r+ur*Jt,_t[12]=_s*g+ho*ct+fo*Gt+uo*Si,_t[13]=_s*b+ho*St+fo*ze+uo*He,_t[14]=_s*j+ho*Et+fo*wi+uo*Vi,_t[15]=_s*q+ho*Xt+fo*_r+uo*Jt,this._identityCalculated=!1,this}function Y(g){var b=g.props;return this.transform(b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12],b[13],b[14],b[15])}function O(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function M(g){for(var b=0;b<16;){if(g.props[b]!==this.props[b])return!1;b+=1}return!0}function x(g){var b;for(b=0;b<16;b+=1)g.props[b]=this.props[b];return g}function T(g){var b;for(b=0;b<16;b+=1)this.props[b]=g[b]}function I(g,b,j){return{x:g*this.props[0]+b*this.props[4]+j*this.props[8]+this.props[12],y:g*this.props[1]+b*this.props[5]+j*this.props[9]+this.props[13],z:g*this.props[2]+b*this.props[6]+j*this.props[10]+this.props[14]}}function B(g,b,j){return g*this.props[0]+b*this.props[4]+j*this.props[8]+this.props[12]}function $(g,b,j){return g*this.props[1]+b*this.props[5]+j*this.props[9]+this.props[13]}function H(g,b,j){return g*this.props[2]+b*this.props[6]+j*this.props[10]+this.props[14]}function ot(){var g=this.props[0]*this.props[5]-this.props[1]*this.props[4],b=this.props[5]/g,j=-this.props[1]/g,q=-this.props[4]/g,ct=this.props[0]/g,St=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/g,Et=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/g,Xt=new yt;return Xt.props[0]=b,Xt.props[1]=j,Xt.props[4]=q,Xt.props[5]=ct,Xt.props[12]=St,Xt.props[13]=Et,Xt}function Ct(g){var b=this.getInverseMatrix();return b.applyToPointArray(g[0],g[1],g[2]||0)}function xt(g){var b,j=g.length,q=[];for(b=0;b<j;b+=1)q[b]=Ct(g[b]);return q}function ht(g,b,j){var q=F("float32",6);if(this.isIdentity())q[0]=g[0],q[1]=g[1],q[2]=b[0],q[3]=b[1],q[4]=j[0],q[5]=j[1];else{var ct=this.props[0],St=this.props[1],Et=this.props[4],Xt=this.props[5],Gt=this.props[12],ze=this.props[13];q[0]=g[0]*ct+g[1]*Et+Gt,q[1]=g[0]*St+g[1]*Xt+ze,q[2]=b[0]*ct+b[1]*Et+Gt,q[3]=b[0]*St+b[1]*Xt+ze,q[4]=j[0]*ct+j[1]*Et+Gt,q[5]=j[0]*St+j[1]*Xt+ze}return q}function Lt(g,b,j){var q;return this.isIdentity()?q=[g,b,j]:q=[g*this.props[0]+b*this.props[4]+j*this.props[8]+this.props[12],g*this.props[1]+b*this.props[5]+j*this.props[9]+this.props[13],g*this.props[2]+b*this.props[6]+j*this.props[10]+this.props[14]],q}function vt(g,b){if(this.isIdentity())return g+","+b;var j=this.props;return Math.round((g*j[0]+b*j[4]+j[12])*100)/100+","+Math.round((g*j[1]+b*j[5]+j[13])*100)/100}function nt(){for(var g=0,b=this.props,j="matrix3d(",q=1e4;g<16;)j+=l(b[g]*q)/q,j+=g===15?")":",",g+=1;return j}function E(g){var b=1e4;return g<1e-6&&g>0||g>-1e-6&&g<0?l(g*b)/b:g}function z(){var g=this.props,b=E(g[0]),j=E(g[1]),q=E(g[4]),ct=E(g[5]),St=E(g[12]),Et=E(g[13]);return"matrix("+b+","+j+","+q+","+ct+","+St+","+Et+")"}return function(){this.reset=p,this.rotate=c,this.rotateX=v,this.rotateY=P,this.rotateZ=_,this.skew=R,this.skewFromAxis=G,this.shear=L,this.scale=k,this.setTransform=D,this.translate=N,this.transform=V,this.multiply=Y,this.applyToPoint=I,this.applyToX=B,this.applyToY=$,this.applyToZ=H,this.applyToPointArray=Lt,this.applyToTriplePoints=ht,this.applyToPointStringified=vt,this.toCSS=nt,this.to2dCSS=z,this.clone=x,this.cloneFromProps=T,this.equals=M,this.inversePoints=xt,this.inversePoint=Ct,this.getInverseMatrix=ot,this._t=this.transform,this.isIdentity=O,this._identity=!0,this._identityCalculated=!1,this.props=F("float32",16),this.reset()}})();function _e(e){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},_e(e)}var pt={};function de(e){d(e)}function Le(){ie.searchAnimations()}function fe(e){ae(e)}function se(e){pr(e)}function Ut(e){return ie.loadAnimation(e)}function Ri(e){if(typeof e=="string")switch(e){case"high":Te(200);break;default:case"medium":Te(50);break;case"low":Te(10);break}else!isNaN(e)&&e>1&&Te(e)}function oe(){return typeof navigator<"u"}function hi(e,s){e==="expressions"&&We(s)}function Zi(e){switch(e){case"propertyFactory":return lt;case"shapePropertyFactory":return wt;case"matrix":return yt;default:return null}}pt.play=ie.play,pt.pause=ie.pause,pt.setLocationHref=de,pt.togglePause=ie.togglePause,pt.setSpeed=ie.setSpeed,pt.setDirection=ie.setDirection,pt.stop=ie.stop,pt.searchAnimations=Le,pt.registerAnimation=ie.registerAnimation,pt.loadAnimation=Ut,pt.setSubframeRendering=fe,pt.resize=ie.resize,pt.goToAndStop=ie.goToAndStop,pt.destroy=ie.destroy,pt.setQuality=Ri,pt.inBrowser=oe,pt.installPlugin=hi,pt.freeze=ie.freeze,pt.unfreeze=ie.unfreeze,pt.setVolume=ie.setVolume,pt.mute=ie.mute,pt.unmute=ie.unmute,pt.getRegisteredAnimations=ie.getRegisteredAnimations,pt.useWebWorker=f,pt.setIDPrefix=se,pt.__getFactory=Zi,pt.version="5.13.0";function Ie(){document.readyState==="complete"&&(clearInterval(xe),Le())}function Oe(e){for(var s=Re.split("&"),o=0;o<s.length;o+=1){var l=s[o].split("=");if(decodeURIComponent(l[0])==e)return decodeURIComponent(l[1])}return null}var Re="";{var gr=document.getElementsByTagName("script"),Vs=gr.length-1,De=gr[Vs]||{src:""};Re=De.src?De.src.replace(/^[^\?]+\??/,""):"",Oe("renderer")}var xe=setInterval(Ie,100);try{_e(t)!=="object"&&(window.bodymovin=pt)}catch{}var Ve=(function(){var e={},s={};e.registerModifier=o,e.getModifier=l;function o(p,c){s[p]||(s[p]=c)}function l(p,c,v){return new s[p](c,v)}return e})();function Je(){}Je.prototype.initModifierProperties=function(){},Je.prototype.addShapeToModifier=function(){},Je.prototype.addShape=function(e){if(!this.closed){e.sh.container.addDynamicProperty(e.sh);var s={shape:e.sh,data:e,localShapeCollection:At.newShapeCollection()};this.shapes.push(s),this.addShapeToModifier(s),this._isAnimated&&e.setAsAnimated()}},Je.prototype.init=function(e,s){this.shapes=[],this.elem=e,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,s),this.frameId=a,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},Je.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},w([pe],Je);function bi(){}w([Je],bi),bi.prototype.initModifierProperties=function(e,s){this.s=lt.getProp(e,s.s,0,.01,this),this.e=lt.getProp(e,s.e,0,.01,this),this.o=lt.getProp(e,s.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=s.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},bi.prototype.addShapeToModifier=function(e){e.pathsData=[]},bi.prototype.calculateShapeEdges=function(e,s,o,l,p){var c=[];s<=1?c.push({s:e,e:s}):e>=1?c.push({s:e-1,e:s-1}):(c.push({s:e,e:1}),c.push({s:0,e:s-1}));var v=[],P,_=c.length,L;for(P=0;P<_;P+=1)if(L=c[P],!(L.e*p<l||L.s*p>l+o)){var R,G;L.s*p<=l?R=0:R=(L.s*p-l)/o,L.e*p>=l+o?G=1:G=(L.e*p-l)/o,v.push([R,G])}return v.length||v.push([0,0]),v},bi.prototype.releasePathsData=function(e){var s,o=e.length;for(s=0;s<o;s+=1)li.release(e[s]);return e.length=0,e},bi.prototype.processShapes=function(e){var s,o;if(this._mdf||e){var l=this.o.v%360/360;if(l<0&&(l+=1),this.s.v>1?s=1+l:this.s.v<0?s=0+l:s=this.s.v+l,this.e.v>1?o=1+l:this.e.v<0?o=0+l:o=this.e.v+l,s>o){var p=s;s=o,o=p}s=Math.round(s*1e4)*1e-4,o=Math.round(o*1e4)*1e-4,this.sValue=s,this.eValue=o}else s=this.sValue,o=this.eValue;var c,v,P=this.shapes.length,_,L,R,G,k,D=0;if(o===s)for(v=0;v<P;v+=1)this.shapes[v].localShapeCollection.releaseShapes(),this.shapes[v].shape._mdf=!0,this.shapes[v].shape.paths=this.shapes[v].localShapeCollection,this._mdf&&(this.shapes[v].pathsData.length=0);else if(o===1&&s===0||o===0&&s===1){if(this._mdf)for(v=0;v<P;v+=1)this.shapes[v].pathsData.length=0,this.shapes[v].shape._mdf=!0}else{var N=[],V,Y;for(v=0;v<P;v+=1)if(V=this.shapes[v],!V.shape._mdf&&!this._mdf&&!e&&this.m!==2)V.shape.paths=V.localShapeCollection;else{if(c=V.shape.paths,L=c._length,k=0,!V.shape._mdf&&V.pathsData.length)k=V.totalShapeLength;else{for(R=this.releasePathsData(V.pathsData),_=0;_<L;_+=1)G=Ze.getSegmentsLength(c.shapes[_]),R.push(G),k+=G.totalLength;V.totalShapeLength=k,V.pathsData=R}D+=k,V.shape._mdf=!0}var O=s,M=o,x=0,T;for(v=P-1;v>=0;v-=1)if(V=this.shapes[v],V.shape._mdf){for(Y=V.localShapeCollection,Y.releaseShapes(),this.m===2&&P>1?(T=this.calculateShapeEdges(s,o,V.totalShapeLength,x,D),x+=V.totalShapeLength):T=[[O,M]],L=T.length,_=0;_<L;_+=1){O=T[_][0],M=T[_][1],N.length=0,M<=1?N.push({s:V.totalShapeLength*O,e:V.totalShapeLength*M}):O>=1?N.push({s:V.totalShapeLength*(O-1),e:V.totalShapeLength*(M-1)}):(N.push({s:V.totalShapeLength*O,e:V.totalShapeLength}),N.push({s:0,e:V.totalShapeLength*(M-1)}));var I=this.addShapes(V,N[0]);if(N[0].s!==N[0].e){if(N.length>1){var B=V.shape.paths.shapes[V.shape.paths._length-1];if(B.c){var $=I.pop();this.addPaths(I,Y),I=this.addShapes(V,N[1],$)}else this.addPaths(I,Y),I=this.addShapes(V,N[1])}this.addPaths(I,Y)}}V.shape.paths=Y}}},bi.prototype.addPaths=function(e,s){var o,l=e.length;for(o=0;o<l;o+=1)s.addShape(e[o])},bi.prototype.addSegment=function(e,s,o,l,p,c,v){p.setXYAt(s[0],s[1],"o",c),p.setXYAt(o[0],o[1],"i",c+1),v&&p.setXYAt(e[0],e[1],"v",c),p.setXYAt(l[0],l[1],"v",c+1)},bi.prototype.addSegmentFromArray=function(e,s,o,l){s.setXYAt(e[1],e[5],"o",o),s.setXYAt(e[2],e[6],"i",o+1),l&&s.setXYAt(e[0],e[4],"v",o),s.setXYAt(e[3],e[7],"v",o+1)},bi.prototype.addShapes=function(e,s,o){var l=e.pathsData,p=e.shape.paths.shapes,c,v=e.shape.paths._length,P,_,L=0,R,G,k,D,N=[],V,Y=!0;for(o?(G=o._length,V=o._length):(o=Ft.newElement(),G=0,V=0),N.push(o),c=0;c<v;c+=1){for(k=l[c].lengths,o.c=p[c].c,_=p[c].c?k.length:k.length+1,P=1;P<_;P+=1)if(R=k[P-1],L+R.addedLength<s.s)L+=R.addedLength,o.c=!1;else if(L>s.e){o.c=!1;break}else s.s<=L&&s.e>=L+R.addedLength?(this.addSegment(p[c].v[P-1],p[c].o[P-1],p[c].i[P],p[c].v[P],o,G,Y),Y=!1):(D=Ze.getNewSegment(p[c].v[P-1],p[c].v[P],p[c].o[P-1],p[c].i[P],(s.s-L)/R.addedLength,(s.e-L)/R.addedLength,k[P-1]),this.addSegmentFromArray(D,o,G,Y),Y=!1,o.c=!1),L+=R.addedLength,G+=1;if(p[c].c&&k.length){if(R=k[P-1],L<=s.e){var O=k[P-1].addedLength;s.s<=L&&s.e>=L+O?(this.addSegment(p[c].v[P-1],p[c].o[P-1],p[c].i[0],p[c].v[0],o,G,Y),Y=!1):(D=Ze.getNewSegment(p[c].v[P-1],p[c].v[0],p[c].o[P-1],p[c].i[0],(s.s-L)/O,(s.e-L)/O,k[P-1]),this.addSegmentFromArray(D,o,G,Y),Y=!1,o.c=!1)}else o.c=!1;L+=R.addedLength,G+=1}if(o._length&&(o.setXYAt(o.v[V][0],o.v[V][1],"i",V),o.setXYAt(o.v[o._length-1][0],o.v[o._length-1][1],"o",o._length-1)),L>s.e)break;c<v-1&&(o=Ft.newElement(),Y=!0,N.push(o),G=0)}return N};function hr(){}w([Je],hr),hr.prototype.initModifierProperties=function(e,s){this.getValue=this.processKeys,this.amount=lt.getProp(e,s.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},hr.prototype.processPath=function(e,s){var o=s/100,l=[0,0],p=e._length,c=0;for(c=0;c<p;c+=1)l[0]+=e.v[c][0],l[1]+=e.v[c][1];l[0]/=p,l[1]/=p;var v=Ft.newElement();v.c=e.c;var P,_,L,R,G,k;for(c=0;c<p;c+=1)P=e.v[c][0]+(l[0]-e.v[c][0])*o,_=e.v[c][1]+(l[1]-e.v[c][1])*o,L=e.o[c][0]+(l[0]-e.o[c][0])*-o,R=e.o[c][1]+(l[1]-e.o[c][1])*-o,G=e.i[c][0]+(l[0]-e.i[c][0])*-o,k=e.i[c][1]+(l[1]-e.i[c][1])*-o,v.setTripleAt(P,_,L,R,G,k,c);return v},hr.prototype.processShapes=function(e){var s,o,l=this.shapes.length,p,c,v=this.amount.v;if(v!==0){var P,_;for(o=0;o<l;o+=1){if(P=this.shapes[o],_=P.localShapeCollection,!(!P.shape._mdf&&!this._mdf&&!e))for(_.releaseShapes(),P.shape._mdf=!0,s=P.shape.paths.shapes,c=P.shape.paths._length,p=0;p<c;p+=1)_.addShape(this.processPath(s[p],v));P.shape.paths=P.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var xi=(function(){var e=[0,0];function s(_){var L=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||L,this.a&&_.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&_.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&_.skewFromAxis(-this.sk.v,this.sa.v),this.r?_.rotate(-this.r.v):_.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?_.translate(this.px.v,this.py.v,-this.pz.v):_.translate(this.px.v,this.py.v,0):_.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function o(_){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||_){var L;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var R,G;if(L=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(R=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/L,0),G=this.p.getValueAtTime(this.p.keyframes[0].t/L,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(R=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/L,0),G=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/L,0)):(R=this.p.pv,G=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/L,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){R=[],G=[];var k=this.px,D=this.py;k._caching.lastFrame+k.offsetTime<=k.keyframes[0].t?(R[0]=k.getValueAtTime((k.keyframes[0].t+.01)/L,0),R[1]=D.getValueAtTime((D.keyframes[0].t+.01)/L,0),G[0]=k.getValueAtTime(k.keyframes[0].t/L,0),G[1]=D.getValueAtTime(D.keyframes[0].t/L,0)):k._caching.lastFrame+k.offsetTime>=k.keyframes[k.keyframes.length-1].t?(R[0]=k.getValueAtTime(k.keyframes[k.keyframes.length-1].t/L,0),R[1]=D.getValueAtTime(D.keyframes[D.keyframes.length-1].t/L,0),G[0]=k.getValueAtTime((k.keyframes[k.keyframes.length-1].t-.01)/L,0),G[1]=D.getValueAtTime((D.keyframes[D.keyframes.length-1].t-.01)/L,0)):(R=[k.pv,D.pv],G[0]=k.getValueAtTime((k._caching.lastFrame+k.offsetTime-.01)/L,k.offsetTime),G[1]=D.getValueAtTime((D._caching.lastFrame+D.offsetTime-.01)/L,D.offsetTime))}else G=e,R=G;this.v.rotate(-Math.atan2(R[1]-G[1],R[0]-G[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function l(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function p(){}function c(_){this._addDynamicProperty(_),this.elem.addDynamicProperty(_),this._isDirty=!0}function v(_,L,R){if(this.elem=_,this.frameId=-1,this.propType="transform",this.data=L,this.v=new yt,this.pre=new yt,this.appliedTransformations=0,this.initDynamicPropertyContainer(R||_),L.p&&L.p.s?(this.px=lt.getProp(_,L.p.x,0,0,this),this.py=lt.getProp(_,L.p.y,0,0,this),L.p.z&&(this.pz=lt.getProp(_,L.p.z,0,0,this))):this.p=lt.getProp(_,L.p||{k:[0,0,0]},1,0,this),L.rx){if(this.rx=lt.getProp(_,L.rx,0,it,this),this.ry=lt.getProp(_,L.ry,0,it,this),this.rz=lt.getProp(_,L.rz,0,it,this),L.or.k[0].ti){var G,k=L.or.k.length;for(G=0;G<k;G+=1)L.or.k[G].to=null,L.or.k[G].ti=null}this.or=lt.getProp(_,L.or,1,it,this),this.or.sh=!0}else this.r=lt.getProp(_,L.r||{k:0},0,it,this);L.sk&&(this.sk=lt.getProp(_,L.sk,0,it,this),this.sa=lt.getProp(_,L.sa,0,it,this)),this.a=lt.getProp(_,L.a||{k:[0,0,0]},1,0,this),this.s=lt.getProp(_,L.s||{k:[100,100,100]},1,.01,this),L.o?this.o=lt.getProp(_,L.o,0,.01,_):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}v.prototype={applyToMatrix:s,getValue:o,precalculateMatrix:l,autoOrient:p},w([pe],v),v.prototype.addDynamicProperty=c,v.prototype._addDynamicProperty=pe.prototype.addDynamicProperty;function P(_,L,R){return new v(_,L,R)}return{getTransformProperty:P}})();function ti(){}w([Je],ti),ti.prototype.initModifierProperties=function(e,s){this.getValue=this.processKeys,this.c=lt.getProp(e,s.c,0,null,this),this.o=lt.getProp(e,s.o,0,null,this),this.tr=xi.getTransformProperty(e,s.tr,this),this.so=lt.getProp(e,s.tr.so,0,.01,this),this.eo=lt.getProp(e,s.tr.eo,0,.01,this),this.data=s,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new yt,this.rMatrix=new yt,this.sMatrix=new yt,this.tMatrix=new yt,this.matrix=new yt},ti.prototype.applyTransforms=function(e,s,o,l,p,c){var v=c?-1:1,P=l.s.v[0]+(1-l.s.v[0])*(1-p),_=l.s.v[1]+(1-l.s.v[1])*(1-p);e.translate(l.p.v[0]*v*p,l.p.v[1]*v*p,l.p.v[2]),s.translate(-l.a.v[0],-l.a.v[1],l.a.v[2]),s.rotate(-l.r.v*v*p),s.translate(l.a.v[0],l.a.v[1],l.a.v[2]),o.translate(-l.a.v[0],-l.a.v[1],l.a.v[2]),o.scale(c?1/P:P,c?1/_:_),o.translate(l.a.v[0],l.a.v[1],l.a.v[2])},ti.prototype.init=function(e,s,o,l){for(this.elem=e,this.arr=s,this.pos=o,this.elemsData=l,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,s[o]);o>0;)o-=1,this._elements.unshift(s[o]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ti.prototype.resetElements=function(e){var s,o=e.length;for(s=0;s<o;s+=1)e[s]._processed=!1,e[s].ty==="gr"&&this.resetElements(e[s].it)},ti.prototype.cloneElements=function(e){var s=JSON.parse(JSON.stringify(e));return this.resetElements(s),s},ti.prototype.changeGroupRender=function(e,s){var o,l=e.length;for(o=0;o<l;o+=1)e[o]._render=s,e[o].ty==="gr"&&this.changeGroupRender(e[o].it,s)},ti.prototype.processShapes=function(e){var s,o,l,p,c,v=!1;if(this._mdf||e){var P=Math.ceil(this.c.v);if(this._groups.length<P){for(;this._groups.length<P;){var _={it:this.cloneElements(this._elements),ty:"gr"};_.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,_),this._groups.splice(0,0,_),this._currentCopies+=1}this.elem.reloadShapes(),v=!0}c=0;var L;for(l=0;l<=this._groups.length-1;l+=1){if(L=c<P,this._groups[l]._render=L,this.changeGroupRender(this._groups[l].it,L),!L){var R=this.elemsData[l].it,G=R[R.length-1];G.transform.op.v!==0?(G.transform.op._mdf=!0,G.transform.op.v=0):G.transform.op._mdf=!1}c+=1}this._currentCopies=P;var k=this.o.v,D=k%1,N=k>0?Math.floor(k):Math.ceil(k),V=this.pMatrix.props,Y=this.rMatrix.props,O=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var M=0;if(k>0){for(;M<N;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),M+=1;D&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,D,!1),M+=D)}else if(k<0){for(;M>N;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),M-=1;D&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-D,!0),M-=D)}l=this.data.m===1?0:this._currentCopies-1,p=this.data.m===1?1:-1,c=this._currentCopies;for(var x,T;c;){if(s=this.elemsData[l].it,o=s[s.length-1].transform.mProps.v.props,T=o.length,s[s.length-1].transform.mProps._mdf=!0,s[s.length-1].transform.op._mdf=!0,s[s.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(l/(this._currentCopies-1)),M!==0){for((l!==0&&p===1||l!==this._currentCopies-1&&p===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(Y[0],Y[1],Y[2],Y[3],Y[4],Y[5],Y[6],Y[7],Y[8],Y[9],Y[10],Y[11],Y[12],Y[13],Y[14],Y[15]),this.matrix.transform(O[0],O[1],O[2],O[3],O[4],O[5],O[6],O[7],O[8],O[9],O[10],O[11],O[12],O[13],O[14],O[15]),this.matrix.transform(V[0],V[1],V[2],V[3],V[4],V[5],V[6],V[7],V[8],V[9],V[10],V[11],V[12],V[13],V[14],V[15]),x=0;x<T;x+=1)o[x]=this.matrix.props[x];this.matrix.reset()}else for(this.matrix.reset(),x=0;x<T;x+=1)o[x]=this.matrix.props[x];M+=1,c-=1,l+=p}}else for(c=this._currentCopies,l=0,p=1;c;)s=this.elemsData[l].it,o=s[s.length-1].transform.mProps.v.props,s[s.length-1].transform.mProps._mdf=!1,s[s.length-1].transform.op._mdf=!1,c-=1,l+=p;return v},ti.prototype.addShape=function(){};function vr(){}w([Je],vr),vr.prototype.initModifierProperties=function(e,s){this.getValue=this.processKeys,this.rd=lt.getProp(e,s.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},vr.prototype.processPath=function(e,s){var o=Ft.newElement();o.c=e.c;var l,p=e._length,c,v,P,_,L,R,G=0,k,D,N,V,Y,O;for(l=0;l<p;l+=1)c=e.v[l],P=e.o[l],v=e.i[l],c[0]===P[0]&&c[1]===P[1]&&c[0]===v[0]&&c[1]===v[1]?(l===0||l===p-1)&&!e.c?(o.setTripleAt(c[0],c[1],P[0],P[1],v[0],v[1],G),G+=1):(l===0?_=e.v[p-1]:_=e.v[l-1],L=Math.sqrt(Math.pow(c[0]-_[0],2)+Math.pow(c[1]-_[1],2)),R=L?Math.min(L/2,s)/L:0,Y=c[0]+(_[0]-c[0])*R,k=Y,O=c[1]-(c[1]-_[1])*R,D=O,N=k-(k-c[0])*st,V=D-(D-c[1])*st,o.setTripleAt(k,D,N,V,Y,O,G),G+=1,l===p-1?_=e.v[0]:_=e.v[l+1],L=Math.sqrt(Math.pow(c[0]-_[0],2)+Math.pow(c[1]-_[1],2)),R=L?Math.min(L/2,s)/L:0,N=c[0]+(_[0]-c[0])*R,k=N,V=c[1]+(_[1]-c[1])*R,D=V,Y=k-(k-c[0])*st,O=D-(D-c[1])*st,o.setTripleAt(k,D,N,V,Y,O,G),G+=1):(o.setTripleAt(e.v[l][0],e.v[l][1],e.o[l][0],e.o[l][1],e.i[l][0],e.i[l][1],G),G+=1);return o},vr.prototype.processShapes=function(e){var s,o,l=this.shapes.length,p,c,v=this.rd.v;if(v!==0){var P,_;for(o=0;o<l;o+=1){if(P=this.shapes[o],_=P.localShapeCollection,!(!P.shape._mdf&&!this._mdf&&!e))for(_.releaseShapes(),P.shape._mdf=!0,s=P.shape.paths.shapes,c=P.shape.paths._length,p=0;p<c;p+=1)_.addShape(this.processPath(s[p],v));P.shape.paths=P.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Di(e,s){return Math.abs(e-s)*1e5<=Math.min(Math.abs(e),Math.abs(s))}function Zo(e){return Math.abs(e)<=1e-5}function yl(e,s,o){return e*(1-o)+s*o}function $r(e,s,o){return[yl(e[0],s[0],o),yl(e[1],s[1],o)]}function su(e,s,o){if(e===0)return[];var l=s*s-4*e*o;if(l<0)return[];var p=-s/(2*e);if(l===0)return[p];var c=Math.sqrt(l)/(2*e);return[p-c,p+c]}function bl(e,s,o,l){return[-e+3*s-3*o+l,3*e-6*s+3*o,-3*e+3*s,e]}function xl(e){return new ke(e,e,e,e,!1)}function ke(e,s,o,l,p){p&&Ns(e,s)&&(s=$r(e,l,1/3)),p&&Ns(o,l)&&(o=$r(e,l,2/3));var c=bl(e[0],s[0],o[0],l[0]),v=bl(e[1],s[1],o[1],l[1]);this.a=[c[0],v[0]],this.b=[c[1],v[1]],this.c=[c[2],v[2]],this.d=[c[3],v[3]],this.points=[e,s,o,l]}ke.prototype.point=function(e){return[((this.a[0]*e+this.b[0])*e+this.c[0])*e+this.d[0],((this.a[1]*e+this.b[1])*e+this.c[1])*e+this.d[1]]},ke.prototype.derivative=function(e){return[(3*e*this.a[0]+2*this.b[0])*e+this.c[0],(3*e*this.a[1]+2*this.b[1])*e+this.c[1]]},ke.prototype.tangentAngle=function(e){var s=this.derivative(e);return Math.atan2(s[1],s[0])},ke.prototype.normalAngle=function(e){var s=this.derivative(e);return Math.atan2(s[0],s[1])},ke.prototype.inflectionPoints=function(){var e=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(Zo(e))return[];var s=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/e,o=s*s-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/e;if(o<0)return[];var l=Math.sqrt(o);return Zo(l)?l>0&&l<1?[s]:[]:[s-l,s+l].filter(function(p){return p>0&&p<1})},ke.prototype.split=function(e){if(e<=0)return[xl(this.points[0]),this];if(e>=1)return[this,xl(this.points[this.points.length-1])];var s=$r(this.points[0],this.points[1],e),o=$r(this.points[1],this.points[2],e),l=$r(this.points[2],this.points[3],e),p=$r(s,o,e),c=$r(o,l,e),v=$r(p,c,e);return[new ke(this.points[0],s,p,v,!0),new ke(v,c,l,this.points[3],!0)]};function kl(e,s){var o=e.points[0][s],l=e.points[e.points.length-1][s];if(o>l){var p=l;l=o,o=p}for(var c=su(3*e.a[s],2*e.b[s],e.c[s]),v=0;v<c.length;v+=1)if(c[v]>0&&c[v]<1){var P=e.point(c[v])[s];P<o?o=P:P>l&&(l=P)}return{min:o,max:l}}ke.prototype.bounds=function(){return{x:kl(this,0),y:kl(this,1)}},ke.prototype.boundingBox=function(){var e=this.bounds();return{left:e.x.min,right:e.x.max,top:e.y.min,bottom:e.y.max,width:e.x.max-e.x.min,height:e.y.max-e.y.min,cx:(e.x.max+e.x.min)/2,cy:(e.y.max+e.y.min)/2}};function no(e,s,o){var l=e.boundingBox();return{cx:l.cx,cy:l.cy,width:l.width,height:l.height,bez:e,t:(s+o)/2,t1:s,t2:o}}function wl(e){var s=e.bez.split(.5);return[no(s[0],e.t1,e.t),no(s[1],e.t,e.t2)]}function nu(e,s){return Math.abs(e.cx-s.cx)*2<e.width+s.width&&Math.abs(e.cy-s.cy)*2<e.height+s.height}function pn(e,s,o,l,p,c){if(nu(e,s)){if(o>=c||e.width<=l&&e.height<=l&&s.width<=l&&s.height<=l){p.push([e.t,s.t]);return}var v=wl(e),P=wl(s);pn(v[0],P[0],o+1,l,p,c),pn(v[0],P[1],o+1,l,p,c),pn(v[1],P[0],o+1,l,p,c),pn(v[1],P[1],o+1,l,p,c)}}ke.prototype.intersections=function(e,s,o){s===void 0&&(s=2),o===void 0&&(o=7);var l=[];return pn(no(this,0,1),no(e,0,1),0,s,l,o),l},ke.shapeSegment=function(e,s){var o=(s+1)%e.length();return new ke(e.v[s],e.o[s],e.i[o],e.v[o],!0)},ke.shapeSegmentInverted=function(e,s){var o=(s+1)%e.length();return new ke(e.v[o],e.i[o],e.o[s],e.v[s],!0)};function Qo(e,s){return[e[1]*s[2]-e[2]*s[1],e[2]*s[0]-e[0]*s[2],e[0]*s[1]-e[1]*s[0]]}function oo(e,s,o,l){var p=[e[0],e[1],1],c=[s[0],s[1],1],v=[o[0],o[1],1],P=[l[0],l[1],1],_=Qo(Qo(p,c),Qo(v,P));return Zo(_[2])?null:[_[0]/_[2],_[1]/_[2]]}function zs(e,s,o){return[e[0]+Math.cos(s)*o,e[1]-Math.sin(s)*o]}function Jo(e,s){return Math.hypot(e[0]-s[0],e[1]-s[1])}function Ns(e,s){return Di(e[0],s[0])&&Di(e[1],s[1])}function dn(){}w([Je],dn),dn.prototype.initModifierProperties=function(e,s){this.getValue=this.processKeys,this.amplitude=lt.getProp(e,s.s,0,null,this),this.frequency=lt.getProp(e,s.r,0,null,this),this.pointsType=lt.getProp(e,s.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function Sl(e,s,o,l,p,c,v){var P=o-Math.PI/2,_=o+Math.PI/2,L=s[0]+Math.cos(o)*l*p,R=s[1]-Math.sin(o)*l*p;e.setTripleAt(L,R,L+Math.cos(P)*c,R-Math.sin(P)*c,L+Math.cos(_)*v,R-Math.sin(_)*v,e.length())}function ou(e,s){var o=[s[0]-e[0],s[1]-e[1]],l=-Math.PI*.5,p=[Math.cos(l)*o[0]-Math.sin(l)*o[1],Math.sin(l)*o[0]+Math.cos(l)*o[1]];return p}function au(e,s){var o=s===0?e.length()-1:s-1,l=(s+1)%e.length(),p=e.v[o],c=e.v[l],v=ou(p,c);return Math.atan2(0,1)-Math.atan2(v[1],v[0])}function Tl(e,s,o,l,p,c,v){var P=au(s,o),_=s.v[o%s._length],L=s.v[o===0?s._length-1:o-1],R=s.v[(o+1)%s._length],G=c===2?Math.sqrt(Math.pow(_[0]-L[0],2)+Math.pow(_[1]-L[1],2)):0,k=c===2?Math.sqrt(Math.pow(_[0]-R[0],2)+Math.pow(_[1]-R[1],2)):0;Sl(e,s.v[o%s._length],P,v,l,k/((p+1)*2),G/((p+1)*2))}function lu(e,s,o,l,p,c){for(var v=0;v<l;v+=1){var P=(v+1)/(l+1),_=p===2?Math.sqrt(Math.pow(s.points[3][0]-s.points[0][0],2)+Math.pow(s.points[3][1]-s.points[0][1],2)):0,L=s.normalAngle(P),R=s.point(P);Sl(e,R,L,c,o,_/((l+1)*2),_/((l+1)*2)),c=-c}return c}dn.prototype.processPath=function(e,s,o,l){var p=e._length,c=Ft.newElement();if(c.c=e.c,e.c||(p-=1),p===0)return c;var v=-1,P=ke.shapeSegment(e,0);Tl(c,e,0,s,o,l,v);for(var _=0;_<p;_+=1)v=lu(c,P,s,o,l,-v),_===p-1&&!e.c?P=null:P=ke.shapeSegment(e,(_+1)%p),Tl(c,e,_+1,s,o,l,v);return c},dn.prototype.processShapes=function(e){var s,o,l=this.shapes.length,p,c,v=this.amplitude.v,P=Math.max(0,Math.round(this.frequency.v)),_=this.pointsType.v;if(v!==0){var L,R;for(o=0;o<l;o+=1){if(L=this.shapes[o],R=L.localShapeCollection,!(!L.shape._mdf&&!this._mdf&&!e))for(R.releaseShapes(),L.shape._mdf=!0,s=L.shape.paths.shapes,c=L.shape.paths._length,p=0;p<c;p+=1)R.addShape(this.processPath(s[p],v,P,_));L.shape.paths=L.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function ta(e,s,o){var l=Math.atan2(s[0]-e[0],s[1]-e[1]);return[zs(e,l,o),zs(s,l,o)]}function Bs(e,s){var o,l,p,c,v,P,_;_=ta(e.points[0],e.points[1],s),o=_[0],l=_[1],_=ta(e.points[1],e.points[2],s),p=_[0],c=_[1],_=ta(e.points[2],e.points[3],s),v=_[0],P=_[1];var L=oo(o,l,p,c);L===null&&(L=l);var R=oo(v,P,p,c);return R===null&&(R=v),new ke(o,L,R,P)}function Pl(e,s,o,l,p){var c=s.points[3],v=o.points[0];if(l===3||Ns(c,v))return c;if(l===2){var P=-s.tangentAngle(1),_=-o.tangentAngle(0)+Math.PI,L=oo(c,zs(c,P+Math.PI/2,100),v,zs(v,P+Math.PI/2,100)),R=L?Jo(L,c):Jo(c,v)/2,G=zs(c,P,2*R*st);return e.setXYAt(G[0],G[1],"o",e.length()-1),G=zs(v,_,2*R*st),e.setTripleAt(v[0],v[1],v[0],v[1],G[0],G[1],e.length()),v}var k=Ns(c,s.points[2])?s.points[0]:s.points[2],D=Ns(v,o.points[1])?o.points[3]:o.points[1],N=oo(k,c,v,D);return N&&Jo(N,c)<p?(e.setTripleAt(N[0],N[1],N[0],N[1],N[0],N[1],e.length()),N):c}function Al(e,s){var o=e.intersections(s);return o.length&&Di(o[0][0],1)&&o.shift(),o.length?o[0]:null}function Cl(e,s){var o=e.slice(),l=s.slice(),p=Al(e[e.length-1],s[0]);return p&&(o[e.length-1]=e[e.length-1].split(p[0])[0],l[0]=s[0].split(p[1])[1]),e.length>1&&s.length>1&&(p=Al(e[0],s[s.length-1]),p)?[[e[0].split(p[0])[0]],[s[s.length-1].split(p[1])[1]]]:[o,l]}function hu(e){for(var s,o=1;o<e.length;o+=1)s=Cl(e[o-1],e[o]),e[o-1]=s[0],e[o]=s[1];return e.length>1&&(s=Cl(e[e.length-1],e[0]),e[e.length-1]=s[0],e[0]=s[1]),e}function El(e,s){var o=e.inflectionPoints(),l,p,c,v;if(o.length===0)return[Bs(e,s)];if(o.length===1||Di(o[1],1))return c=e.split(o[0]),l=c[0],p=c[1],[Bs(l,s),Bs(p,s)];c=e.split(o[0]),l=c[0];var P=(o[1]-o[0])/(1-o[0]);return c=c[1].split(P),v=c[0],p=c[1],[Bs(l,s),Bs(v,s),Bs(p,s)]}function mn(){}w([Je],mn),mn.prototype.initModifierProperties=function(e,s){this.getValue=this.processKeys,this.amount=lt.getProp(e,s.a,0,null,this),this.miterLimit=lt.getProp(e,s.ml,0,null,this),this.lineJoin=s.lj,this._isAnimated=this.amount.effectsSequence.length!==0},mn.prototype.processPath=function(e,s,o,l){var p=Ft.newElement();p.c=e.c;var c=e.length();e.c||(c-=1);var v,P,_,L=[];for(v=0;v<c;v+=1)_=ke.shapeSegment(e,v),L.push(El(_,s));if(!e.c)for(v=c-1;v>=0;v-=1)_=ke.shapeSegmentInverted(e,v),L.push(El(_,s));L=hu(L);var R=null,G=null;for(v=0;v<L.length;v+=1){var k=L[v];for(G&&(R=Pl(p,G,k[0],o,l)),G=k[k.length-1],P=0;P<k.length;P+=1)_=k[P],R&&Ns(_.points[0],R)?p.setXYAt(_.points[1][0],_.points[1][1],"o",p.length()-1):p.setTripleAt(_.points[0][0],_.points[0][1],_.points[1][0],_.points[1][1],_.points[0][0],_.points[0][1],p.length()),p.setTripleAt(_.points[3][0],_.points[3][1],_.points[3][0],_.points[3][1],_.points[2][0],_.points[2][1],p.length()),R=_.points[3]}return L.length&&Pl(p,G,L[0][0],o,l),p},mn.prototype.processShapes=function(e){var s,o,l=this.shapes.length,p,c,v=this.amount.v,P=this.miterLimit.v,_=this.lineJoin;if(v!==0){var L,R;for(o=0;o<l;o+=1){if(L=this.shapes[o],R=L.localShapeCollection,!(!L.shape._mdf&&!this._mdf&&!e))for(R.releaseShapes(),L.shape._mdf=!0,s=L.shape.paths.shapes,c=L.shape.paths._length,p=0;p<c;p+=1)R.addShape(this.processPath(s[p],v,_,P));L.shape.paths=L.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Ml(e){for(var s=e.fStyle?e.fStyle.split(" "):[],o="normal",l="normal",p=s.length,c,v=0;v<p;v+=1)switch(c=s[v].toLowerCase(),c){case"italic":l="italic";break;case"bold":o="700";break;case"black":o="900";break;case"medium":o="500";break;case"regular":case"normal":o="400";break;case"light":case"thin":o="200";break}return{style:l,weight:e.fWeight||o}}var ms=(function(){var e=5e3,s={w:0,size:0,shapes:[],data:{shapes:[]}},o=[];o=o.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var l=127988,p=917631,c=917601,v=917626,P=65039,_=8205,L=127462,R=127487,G=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function k(E){var z=E.split(","),g,b=z.length,j=[];for(g=0;g<b;g+=1)z[g]!=="sans-serif"&&z[g]!=="monospace"&&j.push(z[g]);return j.join(",")}function D(E,z){var g=y("span");g.setAttribute("aria-hidden",!0),g.style.fontFamily=z;var b=y("span");b.innerText="giItT1WQy@!-/#",g.style.position="absolute",g.style.left="-10000px",g.style.top="-10000px",g.style.fontSize="300px",g.style.fontVariant="normal",g.style.fontStyle="normal",g.style.fontWeight="normal",g.style.letterSpacing="0",g.appendChild(b),document.body.appendChild(g);var j=b.offsetWidth;return b.style.fontFamily=k(E)+", "+z,{node:b,w:j,parent:g}}function N(){var E,z=this.fonts.length,g,b,j=z;for(E=0;E<z;E+=1)this.fonts[E].loaded?j-=1:this.fonts[E].fOrigin==="n"||this.fonts[E].origin===0?this.fonts[E].loaded=!0:(g=this.fonts[E].monoCase.node,b=this.fonts[E].monoCase.w,g.offsetWidth!==b?(j-=1,this.fonts[E].loaded=!0):(g=this.fonts[E].sansCase.node,b=this.fonts[E].sansCase.w,g.offsetWidth!==b&&(j-=1,this.fonts[E].loaded=!0)),this.fonts[E].loaded&&(this.fonts[E].sansCase.parent.parentNode.removeChild(this.fonts[E].sansCase.parent),this.fonts[E].monoCase.parent.parentNode.removeChild(this.fonts[E].monoCase.parent)));j!==0&&Date.now()-this.initTime<e?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function V(E,z){var g=document.body&&z?"svg":"canvas",b,j=Ml(E);if(g==="svg"){var q=mt("text");q.style.fontSize="100px",q.setAttribute("font-family",E.fFamily),q.setAttribute("font-style",j.style),q.setAttribute("font-weight",j.weight),q.textContent="1",E.fClass?(q.style.fontFamily="inherit",q.setAttribute("class",E.fClass)):q.style.fontFamily=E.fFamily,z.appendChild(q),b=q}else{var ct=new OffscreenCanvas(500,500).getContext("2d");ct.font=j.style+" "+j.weight+" 100px "+E.fFamily,b=ct}function St(Et){return g==="svg"?(b.textContent=Et,b.getComputedTextLength()):b.measureText(Et).width}return{measureText:St}}function Y(E,z){if(!E){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=E.list;return}if(!document.body){this.isLoaded=!0,E.list.forEach(function(wi){wi.helper=V(wi),wi.cache={}}),this.fonts=E.list;return}var g=E.list,b,j=g.length,q=j;for(b=0;b<j;b+=1){var ct=!0,St,Et;if(g[b].loaded=!1,g[b].monoCase=D(g[b].fFamily,"monospace"),g[b].sansCase=D(g[b].fFamily,"sans-serif"),!g[b].fPath)g[b].loaded=!0,q-=1;else if(g[b].fOrigin==="p"||g[b].origin===3){if(St=document.querySelectorAll('style[f-forigin="p"][f-family="'+g[b].fFamily+'"], style[f-origin="3"][f-family="'+g[b].fFamily+'"]'),St.length>0&&(ct=!1),ct){var Xt=y("style");Xt.setAttribute("f-forigin",g[b].fOrigin),Xt.setAttribute("f-origin",g[b].origin),Xt.setAttribute("f-family",g[b].fFamily),Xt.type="text/css",Xt.innerText="@font-face {font-family: "+g[b].fFamily+"; font-style: normal; src: url('"+g[b].fPath+"');}",z.appendChild(Xt)}}else if(g[b].fOrigin==="g"||g[b].origin===1){for(St=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),Et=0;Et<St.length;Et+=1)St[Et].href.indexOf(g[b].fPath)!==-1&&(ct=!1);if(ct){var Gt=y("link");Gt.setAttribute("f-forigin",g[b].fOrigin),Gt.setAttribute("f-origin",g[b].origin),Gt.type="text/css",Gt.rel="stylesheet",Gt.href=g[b].fPath,document.body.appendChild(Gt)}}else if(g[b].fOrigin==="t"||g[b].origin===2){for(St=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),Et=0;Et<St.length;Et+=1)g[b].fPath===St[Et].src&&(ct=!1);if(ct){var ze=y("link");ze.setAttribute("f-forigin",g[b].fOrigin),ze.setAttribute("f-origin",g[b].origin),ze.setAttribute("rel","stylesheet"),ze.setAttribute("href",g[b].fPath),z.appendChild(ze)}}g[b].helper=V(g[b],z),g[b].cache={},this.fonts.push(g[b])}q===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function O(E){if(E){this.chars||(this.chars=[]);var z,g=E.length,b,j=this.chars.length,q;for(z=0;z<g;z+=1){for(b=0,q=!1;b<j;)this.chars[b].style===E[z].style&&this.chars[b].fFamily===E[z].fFamily&&this.chars[b].ch===E[z].ch&&(q=!0),b+=1;q||(this.chars.push(E[z]),j+=1)}}}function M(E,z,g){for(var b=0,j=this.chars.length;b<j;){if(this.chars[b].ch===E&&this.chars[b].style===z&&this.chars[b].fFamily===g)return this.chars[b];b+=1}return(typeof E=="string"&&E.charCodeAt(0)!==13||!E)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",E,z,g)),s}function x(E,z,g){var b=this.getFontByName(z),j=E;if(!b.cache[j]){var q=b.helper;if(E===" "){var ct=q.measureText("|"+E+"|"),St=q.measureText("||");b.cache[j]=(ct-St)/100}else b.cache[j]=q.measureText(E)/100}return b.cache[j]*g}function T(E){for(var z=0,g=this.fonts.length;z<g;){if(this.fonts[z].fName===E)return this.fonts[z];z+=1}return this.fonts[0]}function I(E){var z=0,g=E.charCodeAt(0);if(g>=55296&&g<=56319){var b=E.charCodeAt(1);b>=56320&&b<=57343&&(z=(g-55296)*1024+b-56320+65536)}return z}function B(E,z){var g=E.toString(16)+z.toString(16);return G.indexOf(g)!==-1}function $(E){return E===_}function H(E){return E===P}function ot(E){var z=I(E);return z>=L&&z<=R}function Ct(E){return ot(E.substr(0,2))&&ot(E.substr(2,2))}function xt(E){return o.indexOf(E)!==-1}function ht(E,z){var g=I(E.substr(z,2));if(g!==l)return!1;var b=0;for(z+=2;b<5;){if(g=I(E.substr(z,2)),g<c||g>v)return!1;b+=1,z+=2}return I(E.substr(z,2))===p}function Lt(){this.isLoaded=!0}var vt=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};vt.isModifier=B,vt.isZeroWidthJoiner=$,vt.isFlagEmoji=Ct,vt.isRegionalCode=ot,vt.isCombinedCharacter=xt,vt.isRegionalFlag=ht,vt.isVariationSelector=H,vt.BLACK_FLAG_CODE_POINT=l;var nt={addChars:O,addFonts:Y,getCharData:M,getFontByName:T,measureText:x,checkLoadedFonts:N,setIsLoaded:Lt};return vt.prototype=nt,vt})();function Fl(e){this.animationData=e}Fl.prototype.getProp=function(e){return this.animationData.slots&&this.animationData.slots[e.sid]?Object.assign(e,this.animationData.slots[e.sid].p):e};function fu(e){return new Fl(e)}function ao(){}ao.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(s){this.renderableComponents.indexOf(s)===-1&&this.renderableComponents.push(s)},removeRenderableComponent:function(s){this.renderableComponents.indexOf(s)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(s),1)},prepareRenderableFrame:function(s){this.checkLayerLimits(s)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(s){this.data.ip-this.data.st<=s&&this.data.op-this.data.st>s?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var s,o=this.renderableComponents.length;for(s=0;s<o;s+=1)this.renderableComponents[s].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var ea=(function(){var e={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(s){return e[s]||""}})();function uu(e,s,o){this.p=lt.getProp(s,e.v,0,0,o)}function cu(e,s,o){this.p=lt.getProp(s,e.v,0,0,o)}function pu(e,s,o){this.p=lt.getProp(s,e.v,1,0,o)}function du(e,s,o){this.p=lt.getProp(s,e.v,1,0,o)}function mu(e,s,o){this.p=lt.getProp(s,e.v,0,0,o)}function gu(e,s,o){this.p=lt.getProp(s,e.v,0,0,o)}function vu(e,s,o){this.p=lt.getProp(s,e.v,0,0,o)}function _u(){this.p={}}function Ll(e,s){var o=e.ef||[];this.effectElements=[];var l,p=o.length,c;for(l=0;l<p;l+=1)c=new gn(o[l],s),this.effectElements.push(c)}function gn(e,s){this.init(e,s)}w([pe],gn),gn.prototype.getValue=gn.prototype.iterateDynamicProperties,gn.prototype.init=function(e,s){this.data=e,this.effectElements=[],this.initDynamicPropertyContainer(s);var o,l=this.data.ef.length,p,c=this.data.ef;for(o=0;o<l;o+=1){switch(p=null,c[o].ty){case 0:p=new uu(c[o],s,this);break;case 1:p=new cu(c[o],s,this);break;case 2:p=new pu(c[o],s,this);break;case 3:p=new du(c[o],s,this);break;case 4:case 7:p=new vu(c[o],s,this);break;case 10:p=new mu(c[o],s,this);break;case 11:p=new gu(c[o],s,this);break;case 5:p=new Ll(c[o],s);break;default:p=new _u(c[o]);break}p&&this.effectElements.push(p)}};function Xr(){}Xr.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var s=0,o=this.data.masksProperties.length;s<o;){if(this.data.masksProperties[s].mode!=="n"&&this.data.masksProperties[s].cl!==!1)return!0;s+=1}return!1},initExpressions:function(){},setBlendMode:function(){var s=ea(this.data.bm),o=this.baseElement||this.layerElement;o.style["mix-blend-mode"]=s},initBaseData:function(s,o,l){this.globalData=o,this.comp=l,this.data=s,this.layerId=Mt(),this.data.sr||(this.data.sr=1),this.effectsManager=new Ll(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function Gr(){}Gr.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(s,o){var l,p=this.dynamicProperties.length;for(l=0;l<p;l+=1)(o||this._isParent&&this.dynamicProperties[l].propType==="transform")&&(this.dynamicProperties[l].getValue(),this.dynamicProperties[l]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(s){this.dynamicProperties.indexOf(s)===-1&&this.dynamicProperties.push(s)}};function jr(e,s,o){this.initFrame(),this.initRenderable(),this.assetData=s.getAssetData(e.refId),this.footageData=s.imageLoader.getAsset(this.assetData),this.initBaseData(e,s,o)}jr.prototype.prepareFrame=function(){},w([ao,Xr,Gr],jr),jr.prototype.getBaseElement=function(){return null},jr.prototype.renderFrame=function(){},jr.prototype.destroy=function(){},jr.prototype.initExpressions=function(){},jr.prototype.getFootageData=function(){return this.footageData};function ki(e,s,o){this.initFrame(),this.initRenderable(),this.assetData=s.getAssetData(e.refId),this.initBaseData(e,s,o),this._isPlaying=!1,this._canPlay=!1;var l=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(l),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=e.tm?lt.getProp(this,e.tm,0,s.frameRate,this):{_placeholder:!0},this.lv=lt.getProp(this,e.au&&e.au.lv?e.au.lv:{k:[100]},1,.01,this)}ki.prototype.prepareFrame=function(e){if(this.prepareRenderableFrame(e,!0),this.prepareProperties(e,!0),this.tm._placeholder)this._currentTime=e/this.data.sr;else{var s=this.tm.v;this._currentTime=s}this._volume=this.lv.v[0];var o=this._volume*this._volumeMultiplier;this._previousVolume!==o&&(this._previousVolume=o,this.audio.volume(o))},w([ao,Xr,Gr],ki),ki.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},ki.prototype.show=function(){},ki.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},ki.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},ki.prototype.resume=function(){this._canPlay=!0},ki.prototype.setRate=function(e){this.audio.rate(e)},ki.prototype.volume=function(e){this._volumeMultiplier=e,this._previousVolume=e*this._volume,this.audio.volume(this._previousVolume)},ki.prototype.getBaseElement=function(){return null},ki.prototype.destroy=function(){},ki.prototype.sourceRectAtTime=function(){},ki.prototype.initExpressions=function(){};function ei(){}ei.prototype.checkLayers=function(e){var s,o=this.layers.length,l;for(this.completeLayers=!0,s=o-1;s>=0;s-=1)this.elements[s]||(l=this.layers[s],l.ip-l.st<=e-this.layers[s].st&&l.op-l.st>e-this.layers[s].st&&this.buildItem(s)),this.completeLayers=this.elements[s]?this.completeLayers:!1;this.checkPendingElements()},ei.prototype.createItem=function(e){switch(e.ty){case 2:return this.createImage(e);case 0:return this.createComp(e);case 1:return this.createSolid(e);case 3:return this.createNull(e);case 4:return this.createShape(e);case 5:return this.createText(e);case 6:return this.createAudio(e);case 13:return this.createCamera(e);case 15:return this.createFootage(e);default:return this.createNull(e)}},ei.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},ei.prototype.createAudio=function(e){return new ki(e,this.globalData,this)},ei.prototype.createFootage=function(e){return new jr(e,this.globalData,this)},ei.prototype.buildAllItems=function(){var e,s=this.layers.length;for(e=0;e<s;e+=1)this.buildItem(e);this.checkPendingElements()},ei.prototype.includeLayers=function(e){this.completeLayers=!1;var s,o=e.length,l,p=this.layers.length;for(s=0;s<o;s+=1)for(l=0;l<p;){if(this.layers[l].id===e[s].id){this.layers[l]=e[s];break}l+=1}},ei.prototype.setProjectInterface=function(e){this.globalData.projectInterface=e},ei.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},ei.prototype.buildElementParenting=function(e,s,o){for(var l=this.elements,p=this.layers,c=0,v=p.length;c<v;)p[c].ind==s&&(!l[c]||l[c]===!0?(this.buildItem(c),this.addPendingElement(e)):(o.push(l[c]),l[c].setAsParent(),p[c].parent!==void 0?this.buildElementParenting(e,p[c].parent,o):e.setHierarchy(o))),c+=1},ei.prototype.addPendingElement=function(e){this.pendingElements.push(e)},ei.prototype.searchExtraCompositions=function(e){var s,o=e.length;for(s=0;s<o;s+=1)if(e[s].xt){var l=this.createComp(e[s]);l.initExpressions(),this.globalData.projectInterface.registerComposition(l)}},ei.prototype.getElementById=function(e){var s,o=this.elements.length;for(s=0;s<o;s+=1)if(this.elements[s].data.ind===e)return this.elements[s];return null},ei.prototype.getElementByPath=function(e){var s=e.shift(),o;if(typeof s=="number")o=this.elements[s];else{var l,p=this.elements.length;for(l=0;l<p;l+=1)if(this.elements[l].data.nm===s){o=this.elements[l];break}}return e.length===0?o:o.getElementByPath(e)},ei.prototype.setupGlobalData=function(e,s){this.globalData.fontManager=new ms,this.globalData.slotManager=fu(e),this.globalData.fontManager.addChars(e.chars),this.globalData.fontManager.addFonts(e.fonts,s),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=e.fr,this.globalData.nm=e.nm,this.globalData.compSize={w:e.w,h:e.h}};var yu={TRANSFORM_EFFECT:"transformEFfect"};function qs(){}qs.prototype={initTransform:function(){var s=new yt;this.finalTransform={mProp:this.data.ks?xi.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:s,localMat:s,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var s,o=this.finalTransform.mat,l=0,p=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;l<p;){if(this.hierarchy[l].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}l+=1}if(this.finalTransform._matMdf)for(s=this.finalTransform.mProp.v.props,o.cloneFromProps(s),l=0;l<p;l+=1)o.multiply(this.hierarchy[l].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var s=0,o=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;s<o;)this.localTransforms[s]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[s]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),s+=1;if(this.finalTransform._localMatMdf){var l=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(l),s=1;s<o;s+=1){var p=this.localTransforms[s].matrix;l.multiply(p)}l.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var c=this.finalTransform.localOpacity;for(s=0;s<o;s+=1)c*=this.localTransforms[s].opacity*.01;this.finalTransform.localOpacity=c}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var s=this.renderableEffectsManager.getEffects(yu.TRANSFORM_EFFECT);if(s.length){this.localTransforms=[],this.finalTransform.localMat=new yt;var o=0,l=s.length;for(o=0;o<l;o+=1)this.localTransforms.push(s[o])}}},globalToLocal:function(s){var o=[];o.push(this.finalTransform);for(var l=!0,p=this.comp;l;)p.finalTransform?(p.data.hasMask&&o.splice(0,0,p.finalTransform),p=p.comp):l=!1;var c,v=o.length,P;for(c=0;c<v;c+=1)P=o[c].mat.applyToPointArray(0,0,0),s=[s[0]-P[0],s[1]-P[1],0];return s},mHelper:new yt};function gs(e,s,o){this.data=e,this.element=s,this.globalData=o,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var l=this.globalData.defs,p,c=this.masksProperties?this.masksProperties.length:0;this.viewData=A(c),this.solidPath="";var v,P=this.masksProperties,_=0,L=[],R,G,k=Mt(),D,N,V,Y,O="clipPath",M="clip-path";for(p=0;p<c;p+=1)if((P[p].mode!=="a"&&P[p].mode!=="n"||P[p].inv||P[p].o.k!==100||P[p].o.x)&&(O="mask",M="mask"),(P[p].mode==="s"||P[p].mode==="i")&&_===0?(D=mt("rect"),D.setAttribute("fill","#ffffff"),D.setAttribute("width",this.element.comp.data.w||0),D.setAttribute("height",this.element.comp.data.h||0),L.push(D)):D=null,v=mt("path"),P[p].mode==="n")this.viewData[p]={op:lt.getProp(this.element,P[p].o,0,.01,this.element),prop:wt.getShapeProp(this.element,P[p],3),elem:v,lastPath:""},l.appendChild(v);else{_+=1,v.setAttribute("fill",P[p].mode==="s"?"#000000":"#ffffff"),v.setAttribute("clip-rule","nonzero");var x;if(P[p].x.k!==0?(O="mask",M="mask",Y=lt.getProp(this.element,P[p].x,0,null,this.element),x=Mt(),N=mt("filter"),N.setAttribute("id",x),V=mt("feMorphology"),V.setAttribute("operator","erode"),V.setAttribute("in","SourceGraphic"),V.setAttribute("radius","0"),N.appendChild(V),l.appendChild(N),v.setAttribute("stroke",P[p].mode==="s"?"#000000":"#ffffff")):(V=null,Y=null),this.storedData[p]={elem:v,x:Y,expan:V,lastPath:"",lastOperator:"",filterId:x,lastRadius:0},P[p].mode==="i"){G=L.length;var T=mt("g");for(R=0;R<G;R+=1)T.appendChild(L[R]);var I=mt("mask");I.setAttribute("mask-type","alpha"),I.setAttribute("id",k+"_"+_),I.appendChild(v),l.appendChild(I),T.setAttribute("mask","url("+m()+"#"+k+"_"+_+")"),L.length=0,L.push(T)}else L.push(v);P[p].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[p]={elem:v,lastPath:"",op:lt.getProp(this.element,P[p].o,0,.01,this.element),prop:wt.getShapeProp(this.element,P[p],3),invRect:D},this.viewData[p].prop.k||this.drawPath(P[p],this.viewData[p].prop.v,this.viewData[p])}for(this.maskElement=mt(O),c=L.length,p=0;p<c;p+=1)this.maskElement.appendChild(L[p]);_>0&&(this.maskElement.setAttribute("id",k),this.element.maskedElement.setAttribute(M,"url("+m()+"#"+k+")"),l.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}gs.prototype.getMaskProperty=function(e){return this.viewData[e].prop},gs.prototype.renderFrame=function(e){var s=this.element.finalTransform.mat,o,l=this.masksProperties.length;for(o=0;o<l;o+=1)if((this.viewData[o].prop._mdf||e)&&this.drawPath(this.masksProperties[o],this.viewData[o].prop.v,this.viewData[o]),(this.viewData[o].op._mdf||e)&&this.viewData[o].elem.setAttribute("fill-opacity",this.viewData[o].op.v),this.masksProperties[o].mode!=="n"&&(this.viewData[o].invRect&&(this.element.finalTransform.mProp._mdf||e)&&this.viewData[o].invRect.setAttribute("transform",s.getInverseMatrix().to2dCSS()),this.storedData[o].x&&(this.storedData[o].x._mdf||e))){var p=this.storedData[o].expan;this.storedData[o].x.v<0?(this.storedData[o].lastOperator!=="erode"&&(this.storedData[o].lastOperator="erode",this.storedData[o].elem.setAttribute("filter","url("+m()+"#"+this.storedData[o].filterId+")")),p.setAttribute("radius",-this.storedData[o].x.v)):(this.storedData[o].lastOperator!=="dilate"&&(this.storedData[o].lastOperator="dilate",this.storedData[o].elem.setAttribute("filter",null)),this.storedData[o].elem.setAttribute("stroke-width",this.storedData[o].x.v*2))}},gs.prototype.getMaskelement=function(){return this.maskElement},gs.prototype.createLayerSolidPath=function(){var e="M0,0 ";return e+=" h"+this.globalData.compSize.w,e+=" v"+this.globalData.compSize.h,e+=" h-"+this.globalData.compSize.w,e+=" v-"+this.globalData.compSize.h+" ",e},gs.prototype.drawPath=function(e,s,o){var l=" M"+s.v[0][0]+","+s.v[0][1],p,c;for(c=s._length,p=1;p<c;p+=1)l+=" C"+s.o[p-1][0]+","+s.o[p-1][1]+" "+s.i[p][0]+","+s.i[p][1]+" "+s.v[p][0]+","+s.v[p][1];if(s.c&&c>1&&(l+=" C"+s.o[p-1][0]+","+s.o[p-1][1]+" "+s.i[0][0]+","+s.i[0][1]+" "+s.v[0][0]+","+s.v[0][1]),o.lastPath!==l){var v="";o.elem&&(s.c&&(v=e.inv?this.solidPath+l:l),o.elem.setAttribute("d",v)),o.lastPath=l}},gs.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var vn=(function(){var e={};e.createFilter=s,e.createAlphaToLuminanceFilter=o;function s(l,p){var c=mt("filter");return c.setAttribute("id",l),p!==!0&&(c.setAttribute("filterUnits","objectBoundingBox"),c.setAttribute("x","0%"),c.setAttribute("y","0%"),c.setAttribute("width","100%"),c.setAttribute("height","100%")),c}function o(){var l=mt("feColorMatrix");return l.setAttribute("type","matrix"),l.setAttribute("color-interpolation-filters","sRGB"),l.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),l}return e})(),Il=(function(){var e={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(e.maskType=!1),/firefox/i.test(navigator.userAgent)&&(e.svgLumaHidden=!1),e})(),ia={},Ol="filter_result_";function ra(e){var s,o="SourceGraphic",l=e.data.ef?e.data.ef.length:0,p=Mt(),c=vn.createFilter(p,!0),v=0;this.filters=[];var P;for(s=0;s<l;s+=1){P=null;var _=e.data.ef[s].ty;if(ia[_]){var L=ia[_].effect;P=new L(c,e.effectsManager.effectElements[s],e,Ol+v,o),o=Ol+v,ia[_].countsAsEffect&&(v+=1)}P&&this.filters.push(P)}v&&(e.globalData.defs.appendChild(c),e.layerElement.setAttribute("filter","url("+m()+"#"+p+")")),this.filters.length&&e.addRenderableComponent(this)}ra.prototype.renderFrame=function(e){var s,o=this.filters.length;for(s=0;s<o;s+=1)this.filters[s].renderFrame(e)},ra.prototype.getEffects=function(e){var s,o=this.filters.length,l=[];for(s=0;s<o;s+=1)this.filters[s].type===e&&l.push(this.filters[s]);return l};function _n(){}_n.prototype={initRendererElement:function(){this.layerElement=mt("g")},createContainerElements:function(){this.matteElement=mt("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var s=null;if(this.data.td){this.matteMasks={};var o=mt("g");o.setAttribute("id",this.layerId),o.appendChild(this.layerElement),s=o,this.globalData.defs.appendChild(o)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),s=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var l=mt("clipPath"),p=mt("path");p.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var c=Mt();if(l.setAttribute("id",c),l.appendChild(p),this.globalData.defs.appendChild(l),this.checkMasks()){var v=mt("g");v.setAttribute("clip-path","url("+m()+"#"+c+")"),v.appendChild(this.layerElement),this.transformedElement=v,s?s.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+m()+"#"+c+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new gs(this.data,this,this.globalData),this.renderableEffectsManager=new ra(this),this.searchEffectTransforms()},getMatte:function(s){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[s]){var o=this.layerId+"_"+s,l,p,c,v;if(s===1||s===3){var P=mt("mask");P.setAttribute("id",o),P.setAttribute("mask-type",s===3?"luminance":"alpha"),c=mt("use"),c.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),P.appendChild(c),this.globalData.defs.appendChild(P),!Il.maskType&&s===1&&(P.setAttribute("mask-type","luminance"),l=Mt(),p=vn.createFilter(l),this.globalData.defs.appendChild(p),p.appendChild(vn.createAlphaToLuminanceFilter()),v=mt("g"),v.appendChild(c),P.appendChild(v),v.setAttribute("filter","url("+m()+"#"+l+")"))}else if(s===2){var _=mt("mask");_.setAttribute("id",o),_.setAttribute("mask-type","alpha");var L=mt("g");_.appendChild(L),l=Mt(),p=vn.createFilter(l);var R=mt("feComponentTransfer");R.setAttribute("in","SourceGraphic"),p.appendChild(R);var G=mt("feFuncA");G.setAttribute("type","table"),G.setAttribute("tableValues","1.0 0.0"),R.appendChild(G),this.globalData.defs.appendChild(p);var k=mt("rect");k.setAttribute("width",this.comp.data.w),k.setAttribute("height",this.comp.data.h),k.setAttribute("x","0"),k.setAttribute("y","0"),k.setAttribute("fill","#ffffff"),k.setAttribute("opacity","0"),L.setAttribute("filter","url("+m()+"#"+l+")"),L.appendChild(k),c=mt("use"),c.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),L.appendChild(c),Il.maskType||(_.setAttribute("mask-type","luminance"),p.appendChild(vn.createAlphaToLuminanceFilter()),v=mt("g"),L.appendChild(k),v.appendChild(this.layerElement),L.appendChild(v)),this.globalData.defs.appendChild(_)}this.matteMasks[s]=o}return this.matteMasks[s]},setMatte:function(s){this.matteElement&&this.matteElement.setAttribute("mask","url("+m()+"#"+s+")")}};function Ws(){}Ws.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(s){this.hierarchy=s},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function yn(){}(function(){var e={initElement:function(o,l,p){this.initFrame(),this.initBaseData(o,l,p),this.initTransform(o,l,p),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var o=this.baseElement||this.layerElement;o.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var o=this.baseElement||this.layerElement;o.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(o){this._mdf=!1,this.prepareRenderableFrame(o),this.prepareProperties(o,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};w([ao,C(e)],yn)})();function bn(e,s,o){this.assetData=s.getAssetData(e.refId),this.assetData&&this.assetData.sid&&(this.assetData=s.slotManager.getProp(this.assetData)),this.initElement(e,s,o),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}w([Xr,qs,_n,Ws,Gr,yn],bn),bn.prototype.createContent=function(){var e=this.globalData.getAssetsPath(this.assetData);this.innerElem=mt("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",e),this.layerElement.appendChild(this.innerElem)},bn.prototype.sourceRectAtTime=function(){return this.sourceRect};function bu(e,s){this.elem=e,this.pos=s}function Rl(){}Rl.prototype={addShapeToModifiers:function(s){var o,l=this.shapeModifiers.length;for(o=0;o<l;o+=1)this.shapeModifiers[o].addShape(s)},isShapeInAnimatedModifiers:function(s){for(var o=0,l=this.shapeModifiers.length;o<l;)if(this.shapeModifiers[o].isAnimatedWithShape(s))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var s,o=this.shapes.length;for(s=0;s<o;s+=1)this.shapes[s].sh.reset();o=this.shapeModifiers.length;var l;for(s=o-1;s>=0&&(l=this.shapeModifiers[s].processShapes(this._isFirstFrame),!l);s-=1);}},searchProcessedElement:function(s){for(var o=this.processedElements,l=0,p=o.length;l<p;){if(o[l].elem===s)return o[l].pos;l+=1}return 0},addProcessedElement:function(s,o){for(var l=this.processedElements,p=l.length;p;)if(p-=1,l[p].elem===s){l[p].pos=o;return}l.push(new bu(s,o))},prepareFrame:function(s){this.prepareRenderableFrame(s),this.prepareProperties(s,this.isInRange)}};var Dl={1:"butt",2:"round",3:"square"},Vl={1:"miter",2:"round",3:"bevel"};function zl(e,s,o){this.caches=[],this.styles=[],this.transformers=e,this.lStr="",this.sh=o,this.lvl=s,this._isAnimated=!!o.k;for(var l=0,p=e.length;l<p;){if(e[l].mProps.dynamicProperties.length){this._isAnimated=!0;break}l+=1}}zl.prototype.setAsAnimated=function(){this._isAnimated=!0};function Nl(e,s){this.data=e,this.type=e.ty,this.d="",this.lvl=s,this._mdf=!1,this.closed=e.hd===!0,this.pElem=mt("path"),this.msElem=null}Nl.prototype.reset=function(){this.d="",this._mdf=!1};function lo(e,s,o,l){this.elem=e,this.frameId=-1,this.dataProps=A(s.length),this.renderer=o,this.k=!1,this.dashStr="",this.dashArray=F("float32",s.length?s.length-1:0),this.dashoffset=F("float32",1),this.initDynamicPropertyContainer(l);var p,c=s.length||0,v;for(p=0;p<c;p+=1)v=lt.getProp(e,s[p].v,0,0,this),this.k=v.k||this.k,this.dataProps[p]={n:s[p].n,p:v};this.k||this.getValue(!0),this._isAnimated=this.k}lo.prototype.getValue=function(e){if(!(this.elem.globalData.frameId===this.frameId&&!e)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||e,this._mdf)){var s=0,o=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),s=0;s<o;s+=1)this.dataProps[s].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[s].p.v:this.dashArray[s]=this.dataProps[s].p.v:this.dashoffset[0]=this.dataProps[s].p.v}},w([pe],lo);function Bl(e,s,o){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=lt.getProp(e,s.o,0,.01,this),this.w=lt.getProp(e,s.w,0,null,this),this.d=new lo(e,s.d||{},"svg",this),this.c=lt.getProp(e,s.c,1,255,this),this.style=o,this._isAnimated=!!this._isAnimated}w([pe],Bl);function ql(e,s,o){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=lt.getProp(e,s.o,0,.01,this),this.c=lt.getProp(e,s.c,1,255,this),this.style=o}w([pe],ql);function Wl(e,s,o){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.style=o}w([pe],Wl);function xn(e,s,o){this.data=s,this.c=F("uint8c",s.p*4);var l=s.k.k[0].s?s.k.k[0].s.length-s.p*4:s.k.k.length-s.p*4;this.o=F("float32",l),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=l,this.initDynamicPropertyContainer(o),this.prop=lt.getProp(e,s.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}xn.prototype.comparePoints=function(e,s){for(var o=0,l=this.o.length/2,p;o<l;){if(p=Math.abs(e[o*4]-e[s*4+o*2]),p>.01)return!1;o+=1}return!0},xn.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var e=0,s=this.data.k.k.length;e<s;){if(!this.comparePoints(this.data.k.k[e].s,this.data.p))return!1;e+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},xn.prototype.getValue=function(e){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||e){var s,o=this.data.p*4,l,p;for(s=0;s<o;s+=1)l=s%4===0?100:255,p=Math.round(this.prop.v[s]*l),this.c[s]!==p&&(this.c[s]=p,this._cmdf=!e);if(this.o.length)for(o=this.prop.v.length,s=this.data.p*4;s<o;s+=1)l=s%2===0?100:1,p=s%2===0?Math.round(this.prop.v[s]*100):this.prop.v[s],this.o[s-this.data.p*4]!==p&&(this.o[s-this.data.p*4]=p,this._omdf=!e);this._mdf=!e}},w([pe],xn);function Ys(e,s,o){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.initGradientData(e,s,o)}Ys.prototype.initGradientData=function(e,s,o){this.o=lt.getProp(e,s.o,0,.01,this),this.s=lt.getProp(e,s.s,1,null,this),this.e=lt.getProp(e,s.e,1,null,this),this.h=lt.getProp(e,s.h||{k:0},0,.01,this),this.a=lt.getProp(e,s.a||{k:0},0,it,this),this.g=new xn(e,s.g,this),this.style=o,this.stops=[],this.setGradientData(o.pElem,s),this.setGradientOpacity(s,o),this._isAnimated=!!this._isAnimated},Ys.prototype.setGradientData=function(e,s){var o=Mt(),l=mt(s.t===1?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse");var p=[],c,v,P;for(P=s.g.p*4,v=0;v<P;v+=4)c=mt("stop"),l.appendChild(c),p.push(c);e.setAttribute(s.ty==="gf"?"fill":"stroke","url("+m()+"#"+o+")"),this.gf=l,this.cst=p},Ys.prototype.setGradientOpacity=function(e,s){if(this.g._hasOpacity&&!this.g._collapsable){var o,l,p,c=mt("mask"),v=mt("path");c.appendChild(v);var P=Mt(),_=Mt();c.setAttribute("id",_);var L=mt(e.t===1?"linearGradient":"radialGradient");L.setAttribute("id",P),L.setAttribute("spreadMethod","pad"),L.setAttribute("gradientUnits","userSpaceOnUse"),p=e.g.k.k[0].s?e.g.k.k[0].s.length:e.g.k.k.length;var R=this.stops;for(l=e.g.p*4;l<p;l+=2)o=mt("stop"),o.setAttribute("stop-color","rgb(255,255,255)"),L.appendChild(o),R.push(o);v.setAttribute(e.ty==="gf"?"fill":"stroke","url("+m()+"#"+P+")"),e.ty==="gs"&&(v.setAttribute("stroke-linecap",Dl[e.lc||2]),v.setAttribute("stroke-linejoin",Vl[e.lj||2]),e.lj===1&&v.setAttribute("stroke-miterlimit",e.ml)),this.of=L,this.ms=c,this.ost=R,this.maskId=_,s.msElem=v}},w([pe],Ys);function Yl(e,s,o){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.w=lt.getProp(e,s.w,0,null,this),this.d=new lo(e,s.d||{},"svg",this),this.initGradientData(e,s,o),this._isAnimated=!!this._isAnimated}w([Ys,pe],Yl);function xu(){this.it=[],this.prevViewData=[],this.gr=mt("g")}function ku(e,s,o){this.transform={mProps:e,op:s,container:o},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var $l=function(s,o,l,p){if(o===0)return"";var c=s.o,v=s.i,P=s.v,_,L=" M"+p.applyToPointStringified(P[0][0],P[0][1]);for(_=1;_<o;_+=1)L+=" C"+p.applyToPointStringified(c[_-1][0],c[_-1][1])+" "+p.applyToPointStringified(v[_][0],v[_][1])+" "+p.applyToPointStringified(P[_][0],P[_][1]);return l&&o&&(L+=" C"+p.applyToPointStringified(c[_-1][0],c[_-1][1])+" "+p.applyToPointStringified(v[0][0],v[0][1])+" "+p.applyToPointStringified(P[0][0],P[0][1]),L+="z"),L},wu=(function(){var e=new yt,s=new yt,o={createRenderFunction:l};function l(G){switch(G.ty){case"fl":return P;case"gf":return L;case"gs":return _;case"st":return R;case"sh":case"el":case"rc":case"sr":return v;case"tr":return p;case"no":return c;default:return null}}function p(G,k,D){(D||k.transform.op._mdf)&&k.transform.container.setAttribute("opacity",k.transform.op.v),(D||k.transform.mProps._mdf)&&k.transform.container.setAttribute("transform",k.transform.mProps.v.to2dCSS())}function c(){}function v(G,k,D){var N,V,Y,O,M,x,T=k.styles.length,I=k.lvl,B,$,H,ot;for(x=0;x<T;x+=1){if(O=k.sh._mdf||D,k.styles[x].lvl<I){for($=s.reset(),H=I-k.styles[x].lvl,ot=k.transformers.length-1;!O&&H>0;)O=k.transformers[ot].mProps._mdf||O,H-=1,ot-=1;if(O)for(H=I-k.styles[x].lvl,ot=k.transformers.length-1;H>0;)$.multiply(k.transformers[ot].mProps.v),H-=1,ot-=1}else $=e;if(B=k.sh.paths,V=B._length,O){for(Y="",N=0;N<V;N+=1)M=B.shapes[N],M&&M._length&&(Y+=$l(M,M._length,M.c,$));k.caches[x]=Y}else Y=k.caches[x];k.styles[x].d+=G.hd===!0?"":Y,k.styles[x]._mdf=O||k.styles[x]._mdf}}function P(G,k,D){var N=k.style;(k.c._mdf||D)&&N.pElem.setAttribute("fill","rgb("+rt(k.c.v[0])+","+rt(k.c.v[1])+","+rt(k.c.v[2])+")"),(k.o._mdf||D)&&N.pElem.setAttribute("fill-opacity",k.o.v)}function _(G,k,D){L(G,k,D),R(G,k,D)}function L(G,k,D){var N=k.gf,V=k.g._hasOpacity,Y=k.s.v,O=k.e.v;if(k.o._mdf||D){var M=G.ty==="gf"?"fill-opacity":"stroke-opacity";k.style.pElem.setAttribute(M,k.o.v)}if(k.s._mdf||D){var x=G.t===1?"x1":"cx",T=x==="x1"?"y1":"cy";N.setAttribute(x,Y[0]),N.setAttribute(T,Y[1]),V&&!k.g._collapsable&&(k.of.setAttribute(x,Y[0]),k.of.setAttribute(T,Y[1]))}var I,B,$,H;if(k.g._cmdf||D){I=k.cst;var ot=k.g.c;for($=I.length,B=0;B<$;B+=1)H=I[B],H.setAttribute("offset",ot[B*4]+"%"),H.setAttribute("stop-color","rgb("+ot[B*4+1]+","+ot[B*4+2]+","+ot[B*4+3]+")")}if(V&&(k.g._omdf||D)){var Ct=k.g.o;for(k.g._collapsable?I=k.cst:I=k.ost,$=I.length,B=0;B<$;B+=1)H=I[B],k.g._collapsable||H.setAttribute("offset",Ct[B*2]+"%"),H.setAttribute("stop-opacity",Ct[B*2+1])}if(G.t===1)(k.e._mdf||D)&&(N.setAttribute("x2",O[0]),N.setAttribute("y2",O[1]),V&&!k.g._collapsable&&(k.of.setAttribute("x2",O[0]),k.of.setAttribute("y2",O[1])));else{var xt;if((k.s._mdf||k.e._mdf||D)&&(xt=Math.sqrt(Math.pow(Y[0]-O[0],2)+Math.pow(Y[1]-O[1],2)),N.setAttribute("r",xt),V&&!k.g._collapsable&&k.of.setAttribute("r",xt)),k.s._mdf||k.e._mdf||k.h._mdf||k.a._mdf||D){xt||(xt=Math.sqrt(Math.pow(Y[0]-O[0],2)+Math.pow(Y[1]-O[1],2)));var ht=Math.atan2(O[1]-Y[1],O[0]-Y[0]),Lt=k.h.v;Lt>=1?Lt=.99:Lt<=-1&&(Lt=-.99);var vt=xt*Lt,nt=Math.cos(ht+k.a.v)*vt+Y[0],E=Math.sin(ht+k.a.v)*vt+Y[1];N.setAttribute("fx",nt),N.setAttribute("fy",E),V&&!k.g._collapsable&&(k.of.setAttribute("fx",nt),k.of.setAttribute("fy",E))}}}function R(G,k,D){var N=k.style,V=k.d;V&&(V._mdf||D)&&V.dashStr&&(N.pElem.setAttribute("stroke-dasharray",V.dashStr),N.pElem.setAttribute("stroke-dashoffset",V.dashoffset[0])),k.c&&(k.c._mdf||D)&&N.pElem.setAttribute("stroke","rgb("+rt(k.c.v[0])+","+rt(k.c.v[1])+","+rt(k.c.v[2])+")"),(k.o._mdf||D)&&N.pElem.setAttribute("stroke-opacity",k.o.v),(k.w._mdf||D)&&(N.pElem.setAttribute("stroke-width",k.w.v),N.msElem&&N.msElem.setAttribute("stroke-width",k.w.v))}return o})();function Pe(e,s,o){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(e,s,o),this.prevViewData=[]}w([Xr,qs,_n,Rl,Ws,Gr,yn],Pe),Pe.prototype.initSecondaryElement=function(){},Pe.prototype.identityMatrix=new yt,Pe.prototype.buildExpressionInterface=function(){},Pe.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},Pe.prototype.filterUniqueShapes=function(){var e,s=this.shapes.length,o,l,p=this.stylesList.length,c,v=[],P=!1;for(l=0;l<p;l+=1){for(c=this.stylesList[l],P=!1,v.length=0,e=0;e<s;e+=1)o=this.shapes[e],o.styles.indexOf(c)!==-1&&(v.push(o),P=o._isAnimated||P);v.length>1&&P&&this.setShapesAsAnimated(v)}},Pe.prototype.setShapesAsAnimated=function(e){var s,o=e.length;for(s=0;s<o;s+=1)e[s].setAsAnimated()},Pe.prototype.createStyleElement=function(e,s){var o,l=new Nl(e,s),p=l.pElem;if(e.ty==="st")o=new Bl(this,e,l);else if(e.ty==="fl")o=new ql(this,e,l);else if(e.ty==="gf"||e.ty==="gs"){var c=e.ty==="gf"?Ys:Yl;o=new c(this,e,l),this.globalData.defs.appendChild(o.gf),o.maskId&&(this.globalData.defs.appendChild(o.ms),this.globalData.defs.appendChild(o.of),p.setAttribute("mask","url("+m()+"#"+o.maskId+")"))}else e.ty==="no"&&(o=new Wl(this,e,l));return(e.ty==="st"||e.ty==="gs")&&(p.setAttribute("stroke-linecap",Dl[e.lc||2]),p.setAttribute("stroke-linejoin",Vl[e.lj||2]),p.setAttribute("fill-opacity","0"),e.lj===1&&p.setAttribute("stroke-miterlimit",e.ml)),e.r===2&&p.setAttribute("fill-rule","evenodd"),e.ln&&p.setAttribute("id",e.ln),e.cl&&p.setAttribute("class",e.cl),e.bm&&(p.style["mix-blend-mode"]=ea(e.bm)),this.stylesList.push(l),this.addToAnimatedContents(e,o),o},Pe.prototype.createGroupElement=function(e){var s=new xu;return e.ln&&s.gr.setAttribute("id",e.ln),e.cl&&s.gr.setAttribute("class",e.cl),e.bm&&(s.gr.style["mix-blend-mode"]=ea(e.bm)),s},Pe.prototype.createTransformElement=function(e,s){var o=xi.getTransformProperty(this,e,this),l=new ku(o,o.o,s);return this.addToAnimatedContents(e,l),l},Pe.prototype.createShapeElement=function(e,s,o){var l=4;e.ty==="rc"?l=5:e.ty==="el"?l=6:e.ty==="sr"&&(l=7);var p=wt.getShapeProp(this,e,l,this),c=new zl(s,o,p);return this.shapes.push(c),this.addShapeToModifiers(c),this.addToAnimatedContents(e,c),c},Pe.prototype.addToAnimatedContents=function(e,s){for(var o=0,l=this.animatedContents.length;o<l;){if(this.animatedContents[o].element===s)return;o+=1}this.animatedContents.push({fn:wu.createRenderFunction(e),element:s,data:e})},Pe.prototype.setElementStyles=function(e){var s=e.styles,o,l=this.stylesList.length;for(o=0;o<l;o+=1)s.indexOf(this.stylesList[o])===-1&&!this.stylesList[o].closed&&s.push(this.stylesList[o])},Pe.prototype.reloadShapes=function(){this._isFirstFrame=!0;var e,s=this.itemsData.length;for(e=0;e<s;e+=1)this.prevViewData[e]=this.itemsData[e];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),s=this.dynamicProperties.length,e=0;e<s;e+=1)this.dynamicProperties[e].getValue();this.renderModifiers()},Pe.prototype.searchShapes=function(e,s,o,l,p,c,v){var P=[].concat(c),_,L=e.length-1,R,G,k=[],D=[],N,V,Y;for(_=L;_>=0;_-=1){if(Y=this.searchProcessedElement(e[_]),Y?s[_]=o[Y-1]:e[_]._render=v,e[_].ty==="fl"||e[_].ty==="st"||e[_].ty==="gf"||e[_].ty==="gs"||e[_].ty==="no")Y?s[_].style.closed=e[_].hd:s[_]=this.createStyleElement(e[_],p),e[_]._render&&s[_].style.pElem.parentNode!==l&&l.appendChild(s[_].style.pElem),k.push(s[_].style);else if(e[_].ty==="gr"){if(!Y)s[_]=this.createGroupElement(e[_]);else for(G=s[_].it.length,R=0;R<G;R+=1)s[_].prevViewData[R]=s[_].it[R];this.searchShapes(e[_].it,s[_].it,s[_].prevViewData,s[_].gr,p+1,P,v),e[_]._render&&s[_].gr.parentNode!==l&&l.appendChild(s[_].gr)}else e[_].ty==="tr"?(Y||(s[_]=this.createTransformElement(e[_],l)),N=s[_].transform,P.push(N)):e[_].ty==="sh"||e[_].ty==="rc"||e[_].ty==="el"||e[_].ty==="sr"?(Y||(s[_]=this.createShapeElement(e[_],P,p)),this.setElementStyles(s[_])):e[_].ty==="tm"||e[_].ty==="rd"||e[_].ty==="ms"||e[_].ty==="pb"||e[_].ty==="zz"||e[_].ty==="op"?(Y?(V=s[_],V.closed=!1):(V=Ve.getModifier(e[_].ty),V.init(this,e[_]),s[_]=V,this.shapeModifiers.push(V)),D.push(V)):e[_].ty==="rp"&&(Y?(V=s[_],V.closed=!0):(V=Ve.getModifier(e[_].ty),s[_]=V,V.init(this,e,_,s),this.shapeModifiers.push(V),v=!1),D.push(V));this.addProcessedElement(e[_],_+1)}for(L=k.length,_=0;_<L;_+=1)k[_].closed=!0;for(L=D.length,_=0;_<L;_+=1)D[_].closed=!0},Pe.prototype.renderInnerContent=function(){this.renderModifiers();var e,s=this.stylesList.length;for(e=0;e<s;e+=1)this.stylesList[e].reset();for(this.renderShape(),e=0;e<s;e+=1)(this.stylesList[e]._mdf||this._isFirstFrame)&&(this.stylesList[e].msElem&&(this.stylesList[e].msElem.setAttribute("d",this.stylesList[e].d),this.stylesList[e].d="M0 0"+this.stylesList[e].d),this.stylesList[e].pElem.setAttribute("d",this.stylesList[e].d||"M0 0"))},Pe.prototype.renderShape=function(){var e,s=this.animatedContents.length,o;for(e=0;e<s;e+=1)o=this.animatedContents[e],(this._isFirstFrame||o.element._isAnimated)&&o.data!==!0&&o.fn(o.data,o.element,this._isFirstFrame)},Pe.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function sa(e,s,o,l,p,c){this.o=e,this.sw=s,this.sc=o,this.fc=l,this.m=p,this.p=c,this._mdf={o:!0,sw:!!s,sc:!!o,fc:!!l,m:!0,p:!0}}sa.prototype.update=function(e,s,o,l,p,c){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var v=!1;return this.o!==e&&(this.o=e,this._mdf.o=!0,v=!0),this.sw!==s&&(this.sw=s,this._mdf.sw=!0,v=!0),this.sc!==o&&(this.sc=o,this._mdf.sc=!0,v=!0),this.fc!==l&&(this.fc=l,this._mdf.fc=!0,v=!0),this.m!==p&&(this.m=p,this._mdf.m=!0,v=!0),c.length&&(this.p[0]!==c[0]||this.p[1]!==c[1]||this.p[4]!==c[4]||this.p[5]!==c[5]||this.p[12]!==c[12]||this.p[13]!==c[13])&&(this.p=c,this._mdf.p=!0,v=!0),v};function fi(e,s){this._frameId=a,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,s.d&&s.d.sid&&(s.d=e.globalData.slotManager.getProp(s.d)),this.data=s,this.elem=e,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}fi.prototype.defaultBoxWidth=[0,0],fi.prototype.copyData=function(e,s){for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);return e},fi.prototype.setCurrentData=function(e){e.__complete||this.completeTextData(e),this.currentData=e,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},fi.prototype.searchProperty=function(){return this.searchKeyframes()},fi.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},fi.prototype.addEffect=function(e){this.effectsSequence.push(e),this.elem.addDynamicProperty(this)},fi.prototype.getValue=function(e){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!e)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var s=this.currentData,o=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var l,p=this.effectsSequence.length,c=e||this.data.d.k[this.keysIndex].s;for(l=0;l<p;l+=1)o!==this.keysIndex?c=this.effectsSequence[l](c,c.t):c=this.effectsSequence[l](this.currentData,c.t);s!==c&&this.setCurrentData(c),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},fi.prototype.getKeyframeValue=function(){for(var e=this.data.d.k,s=this.elem.comp.renderedFrame,o=0,l=e.length;o<=l-1&&!(o===l-1||e[o+1].t>s);)o+=1;return this.keysIndex!==o&&(this.keysIndex=o),this.data.d.k[this.keysIndex].s},fi.prototype.buildFinalText=function(e){for(var s=[],o=0,l=e.length,p,c,v=!1,P=!1,_="";o<l;)v=P,P=!1,p=e.charCodeAt(o),_=e.charAt(o),ms.isCombinedCharacter(p)?v=!0:p>=55296&&p<=56319?ms.isRegionalFlag(e,o)?_=e.substr(o,14):(c=e.charCodeAt(o+1),c>=56320&&c<=57343&&(ms.isModifier(p,c)?(_=e.substr(o,2),v=!0):ms.isFlagEmoji(e.substr(o,4))?_=e.substr(o,4):_=e.substr(o,2))):p>56319?(c=e.charCodeAt(o+1),ms.isVariationSelector(p)&&(v=!0)):ms.isZeroWidthJoiner(p)&&(v=!0,P=!0),v?(s[s.length-1]+=_,v=!1):s.push(_),o+=_.length;return s},fi.prototype.completeTextData=function(e){e.__complete=!0;var s=this.elem.globalData.fontManager,o=this.data,l=[],p,c,v,P=0,_,L=o.m.g,R=0,G=0,k=0,D=[],N=0,V=0,Y,O,M=s.getFontByName(e.f),x,T=0,I=Ml(M);e.fWeight=I.weight,e.fStyle=I.style,e.finalSize=e.s,e.finalText=this.buildFinalText(e.t),c=e.finalText.length,e.finalLineHeight=e.lh;var B=e.tr/1e3*e.finalSize,$;if(e.sz)for(var H=!0,ot=e.sz[0],Ct=e.sz[1],xt,ht;H;){ht=this.buildFinalText(e.t),xt=0,N=0,c=ht.length,B=e.tr/1e3*e.finalSize;var Lt=-1;for(p=0;p<c;p+=1)$=ht[p].charCodeAt(0),v=!1,ht[p]===" "?Lt=p:($===13||$===3)&&(N=0,v=!0,xt+=e.finalLineHeight||e.finalSize*1.2),s.chars?(x=s.getCharData(ht[p],M.fStyle,M.fFamily),T=v?0:x.w*e.finalSize/100):T=s.measureText(ht[p],e.f,e.finalSize),N+T>ot&&ht[p]!==" "?(Lt===-1?c+=1:p=Lt,xt+=e.finalLineHeight||e.finalSize*1.2,ht.splice(p,Lt===p?1:0,"\r"),Lt=-1,N=0):(N+=T,N+=B);xt+=M.ascent*e.finalSize/100,this.canResize&&e.finalSize>this.minimumFontSize&&Ct<xt?(e.finalSize-=1,e.finalLineHeight=e.finalSize*e.lh/e.s):(e.finalText=ht,c=e.finalText.length,H=!1)}N=-B,T=0;var vt=0,nt;for(p=0;p<c;p+=1)if(v=!1,nt=e.finalText[p],$=nt.charCodeAt(0),$===13||$===3?(vt=0,D.push(N),V=N>V?N:V,N=-2*B,_="",v=!0,k+=1):_=nt,s.chars?(x=s.getCharData(nt,M.fStyle,s.getFontByName(e.f).fFamily),T=v?0:x.w*e.finalSize/100):T=s.measureText(_,e.f,e.finalSize),nt===" "?vt+=T+B:(N+=T+B+vt,vt=0),l.push({l:T,an:T,add:R,n:v,anIndexes:[],val:_,line:k,animatorJustifyOffset:0}),L==2){if(R+=T,_===""||_===" "||p===c-1){for((_===""||_===" ")&&(R-=T);G<=p;)l[G].an=R,l[G].ind=P,l[G].extra=T,G+=1;P+=1,R=0}}else if(L==3){if(R+=T,_===""||p===c-1){for(_===""&&(R-=T);G<=p;)l[G].an=R,l[G].ind=P,l[G].extra=T,G+=1;R=0,P+=1}}else l[P].ind=P,l[P].extra=0,P+=1;if(e.l=l,V=N>V?N:V,D.push(N),e.sz)e.boxWidth=e.sz[0],e.justifyOffset=0;else switch(e.boxWidth=V,e.j){case 1:e.justifyOffset=-e.boxWidth;break;case 2:e.justifyOffset=-e.boxWidth/2;break;default:e.justifyOffset=0}e.lineWidths=D;var E=o.a,z,g;O=E.length;var b,j,q=[];for(Y=0;Y<O;Y+=1){for(z=E[Y],z.a.sc&&(e.strokeColorAnim=!0),z.a.sw&&(e.strokeWidthAnim=!0),(z.a.fc||z.a.fh||z.a.fs||z.a.fb)&&(e.fillColorAnim=!0),j=0,b=z.s.b,p=0;p<c;p+=1)g=l[p],g.anIndexes[Y]=j,(b==1&&g.val!==""||b==2&&g.val!==""&&g.val!==" "||b==3&&(g.n||g.val==" "||p==c-1)||b==4&&(g.n||p==c-1))&&(z.s.rn===1&&q.push(j),j+=1);o.a[Y].s.totalChars=j;var ct=-1,St;if(z.s.rn===1)for(p=0;p<c;p+=1)g=l[p],ct!=g.anIndexes[Y]&&(ct=g.anIndexes[Y],St=q.splice(Math.floor(Math.random()*q.length),1)[0]),g.anIndexes[Y]=St}e.yOffset=e.finalLineHeight||e.finalSize*1.2,e.ls=e.ls||0,e.ascent=M.ascent*e.finalSize/100},fi.prototype.updateDocumentData=function(e,s){s=s===void 0?this.keysIndex:s;var o=this.copyData({},this.data.d.k[s].s);o=this.copyData(o,e),this.data.d.k[s].s=o,this.recalculate(s),this.setCurrentData(o),this.elem.addDynamicProperty(this)},fi.prototype.recalculate=function(e){var s=this.data.d.k[e].s;s.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(s)},fi.prototype.canResizeFont=function(e){this.canResize=e,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},fi.prototype.setMinimumFontSize=function(e){this.minimumFontSize=Math.floor(e)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Su=(function(){var e=Math.max,s=Math.min,o=Math.floor;function l(c,v){this._currentTextLength=-1,this.k=!1,this.data=v,this.elem=c,this.comp=c.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(c),this.s=lt.getProp(c,v.s||{k:0},0,0,this),"e"in v?this.e=lt.getProp(c,v.e,0,0,this):this.e={v:100},this.o=lt.getProp(c,v.o||{k:0},0,0,this),this.xe=lt.getProp(c,v.xe||{k:0},0,0,this),this.ne=lt.getProp(c,v.ne||{k:0},0,0,this),this.sm=lt.getProp(c,v.sm||{k:100},0,0,this),this.a=lt.getProp(c,v.a,0,.01,this),this.dynamicProperties.length||this.getValue()}l.prototype={getMult:function(v){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var P=0,_=0,L=1,R=1;this.ne.v>0?P=this.ne.v/100:_=-this.ne.v/100,this.xe.v>0?L=1-this.xe.v/100:R=1+this.xe.v/100;var G=he.getBezierEasing(P,_,L,R).get,k=0,D=this.finalS,N=this.finalE,V=this.data.sh;if(V===2)N===D?k=v>=N?1:0:k=e(0,s(.5/(N-D)+(v-D)/(N-D),1)),k=G(k);else if(V===3)N===D?k=v>=N?0:1:k=1-e(0,s(.5/(N-D)+(v-D)/(N-D),1)),k=G(k);else if(V===4)N===D?k=0:(k=e(0,s(.5/(N-D)+(v-D)/(N-D),1)),k<.5?k*=2:k=1-2*(k-.5)),k=G(k);else if(V===5){if(N===D)k=0;else{var Y=N-D;v=s(e(0,v+.5-D),N-D);var O=-Y/2+v,M=Y/2;k=Math.sqrt(1-O*O/(M*M))}k=G(k)}else V===6?(N===D?k=0:(v=s(e(0,v+.5-D),N-D),k=(1+Math.cos(Math.PI+Math.PI*2*v/(N-D)))/2),k=G(k)):(v>=o(D)&&(v-D<0?k=e(0,s(s(N,1)-(D-v),1)):k=e(0,s(N-v,1))),k=G(k));if(this.sm.v!==100){var x=this.sm.v*.01;x===0&&(x=1e-8);var T=.5-x*.5;k<T?k=0:(k=(k-T)/x,k>1&&(k=1))}return k*this.a.v},getValue:function(v){this.iterateDynamicProperties(),this._mdf=v||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,v&&this.data.r===2&&(this.e.v=this._currentTextLength);var P=this.data.r===2?1:100/this.data.totalChars,_=this.o.v/P,L=this.s.v/P+_,R=this.e.v/P+_;if(L>R){var G=L;L=R,R=G}this.finalS=L,this.finalE=R}},w([pe],l);function p(c,v,P){return new l(c,v)}return{getTextSelectorProp:p}})();function Tu(e,s,o){var l={propType:!1},p=lt.getProp,c=s.a;this.a={r:c.r?p(e,c.r,0,it,o):l,rx:c.rx?p(e,c.rx,0,it,o):l,ry:c.ry?p(e,c.ry,0,it,o):l,sk:c.sk?p(e,c.sk,0,it,o):l,sa:c.sa?p(e,c.sa,0,it,o):l,s:c.s?p(e,c.s,1,.01,o):l,a:c.a?p(e,c.a,1,0,o):l,o:c.o?p(e,c.o,0,.01,o):l,p:c.p?p(e,c.p,1,0,o):l,sw:c.sw?p(e,c.sw,0,0,o):l,sc:c.sc?p(e,c.sc,1,0,o):l,fc:c.fc?p(e,c.fc,1,0,o):l,fh:c.fh?p(e,c.fh,0,0,o):l,fs:c.fs?p(e,c.fs,0,.01,o):l,fb:c.fb?p(e,c.fb,0,.01,o):l,t:c.t?p(e,c.t,0,0,o):l},this.s=Su.getTextSelectorProp(e,s.s,o),this.s.t=s.s.t}function vs(e,s,o){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=e,this._renderType=s,this._elem=o,this._animatorsData=A(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(o)}vs.prototype.searchProperties=function(){var e,s=this._textData.a.length,o,l=lt.getProp;for(e=0;e<s;e+=1)o=this._textData.a[e],this._animatorsData[e]=new Tu(this._elem,o,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:l(this._elem,this._textData.p.a,0,0,this),f:l(this._elem,this._textData.p.f,0,0,this),l:l(this._elem,this._textData.p.l,0,0,this),r:l(this._elem,this._textData.p.r,0,0,this),p:l(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=l(this._elem,this._textData.m.a,1,0,this)},vs.prototype.getMeasures=function(e,s){if(this.lettersChangedFlag=s,!(!this._mdf&&!this._isFirstFrame&&!s&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var o=this._moreOptions.alignment.v,l=this._animatorsData,p=this._textData,c=this.mHelper,v=this._renderType,P=this.renderedLetters.length,_,L,R,G,k=e.l,D,N,V,Y,O,M,x,T,I,B,$,H,ot,Ct,xt;if(this._hasMaskedPath){if(xt=this._pathData.m,!this._pathData.n||this._pathData._mdf){var ht=xt.v;this._pathData.r.v&&(ht=ht.reverse()),D={tLength:0,segments:[]},G=ht._length-1;var Lt;for(H=0,R=0;R<G;R+=1)Lt=Ze.buildBezierData(ht.v[R],ht.v[R+1],[ht.o[R][0]-ht.v[R][0],ht.o[R][1]-ht.v[R][1]],[ht.i[R+1][0]-ht.v[R+1][0],ht.i[R+1][1]-ht.v[R+1][1]]),D.tLength+=Lt.segmentLength,D.segments.push(Lt),H+=Lt.segmentLength;R=G,xt.v.c&&(Lt=Ze.buildBezierData(ht.v[R],ht.v[0],[ht.o[R][0]-ht.v[R][0],ht.o[R][1]-ht.v[R][1]],[ht.i[0][0]-ht.v[0][0],ht.i[0][1]-ht.v[0][1]]),D.tLength+=Lt.segmentLength,D.segments.push(Lt),H+=Lt.segmentLength),this._pathData.pi=D}if(D=this._pathData.pi,N=this._pathData.f.v,x=0,M=1,Y=0,O=!0,B=D.segments,N<0&&xt.v.c)for(D.tLength<Math.abs(N)&&(N=-Math.abs(N)%D.tLength),x=B.length-1,I=B[x].points,M=I.length-1;N<0;)N+=I[M].partialLength,M-=1,M<0&&(x-=1,I=B[x].points,M=I.length-1);I=B[x].points,T=I[M-1],V=I[M],$=V.partialLength}G=k.length,_=0,L=0;var vt=e.finalSize*1.2*.714,nt=!0,E,z,g,b,j;b=l.length;var q,ct=-1,St,Et,Xt,Gt=N,ze=x,wi=M,_r=-1,Si,He,Vi,Jt,_t,Mr,Ur,Fr,yr="",Lr=this.defaultPropsArray,Ir;if(e.j===2||e.j===1){var Ti=0,Kr=0,Zr=e.j===2?-.5:-1,fr=0,Qr=!0;for(R=0;R<G;R+=1)if(k[R].n){for(Ti&&(Ti+=Kr);fr<R;)k[fr].animatorJustifyOffset=Ti,fr+=1;Ti=0,Qr=!0}else{for(g=0;g<b;g+=1)E=l[g].a,E.t.propType&&(Qr&&e.j===2&&(Kr+=E.t.v*Zr),z=l[g].s,q=z.getMult(k[R].anIndexes[g],p.a[g].s.totalChars),q.length?Ti+=E.t.v*q[0]*Zr:Ti+=E.t.v*q*Zr);Qr=!1}for(Ti&&(Ti+=Kr);fr<R;)k[fr].animatorJustifyOffset=Ti,fr+=1}for(R=0;R<G;R+=1){if(c.reset(),Si=1,k[R].n)_=0,L+=e.yOffset,L+=nt?1:0,N=Gt,nt=!1,this._hasMaskedPath&&(x=ze,M=wi,I=B[x].points,T=I[M-1],V=I[M],$=V.partialLength,Y=0),yr="",Fr="",Mr="",Ir="",Lr=this.defaultPropsArray;else{if(this._hasMaskedPath){if(_r!==k[R].line){switch(e.j){case 1:N+=H-e.lineWidths[k[R].line];break;case 2:N+=(H-e.lineWidths[k[R].line])/2;break}_r=k[R].line}ct!==k[R].ind&&(k[ct]&&(N+=k[ct].extra),N+=k[R].an/2,ct=k[R].ind),N+=o[0]*k[R].an*.005;var ur=0;for(g=0;g<b;g+=1)E=l[g].a,E.p.propType&&(z=l[g].s,q=z.getMult(k[R].anIndexes[g],p.a[g].s.totalChars),q.length?ur+=E.p.v[0]*q[0]:ur+=E.p.v[0]*q),E.a.propType&&(z=l[g].s,q=z.getMult(k[R].anIndexes[g],p.a[g].s.totalChars),q.length?ur+=E.a.v[0]*q[0]:ur+=E.a.v[0]*q);for(O=!0,this._pathData.a.v&&(N=k[0].an*.5+(H-this._pathData.f.v-k[0].an*.5-k[k.length-1].an*.5)*ct/(G-1),N+=this._pathData.f.v);O;)Y+$>=N+ur||!I?(ot=(N+ur-Y)/V.partialLength,Et=T.point[0]+(V.point[0]-T.point[0])*ot,Xt=T.point[1]+(V.point[1]-T.point[1])*ot,c.translate(-o[0]*k[R].an*.005,-(o[1]*vt)*.01),O=!1):I&&(Y+=V.partialLength,M+=1,M>=I.length&&(M=0,x+=1,B[x]?I=B[x].points:xt.v.c?(M=0,x=0,I=B[x].points):(Y-=V.partialLength,I=null)),I&&(T=V,V=I[M],$=V.partialLength));St=k[R].an/2-k[R].add,c.translate(-St,0,0)}else St=k[R].an/2-k[R].add,c.translate(-St,0,0),c.translate(-o[0]*k[R].an*.005,-o[1]*vt*.01,0);for(g=0;g<b;g+=1)E=l[g].a,E.t.propType&&(z=l[g].s,q=z.getMult(k[R].anIndexes[g],p.a[g].s.totalChars),(_!==0||e.j!==0)&&(this._hasMaskedPath?q.length?N+=E.t.v*q[0]:N+=E.t.v*q:q.length?_+=E.t.v*q[0]:_+=E.t.v*q));for(e.strokeWidthAnim&&(Vi=e.sw||0),e.strokeColorAnim&&(e.sc?He=[e.sc[0],e.sc[1],e.sc[2]]:He=[0,0,0]),e.fillColorAnim&&e.fc&&(Jt=[e.fc[0],e.fc[1],e.fc[2]]),g=0;g<b;g+=1)E=l[g].a,E.a.propType&&(z=l[g].s,q=z.getMult(k[R].anIndexes[g],p.a[g].s.totalChars),q.length?c.translate(-E.a.v[0]*q[0],-E.a.v[1]*q[1],E.a.v[2]*q[2]):c.translate(-E.a.v[0]*q,-E.a.v[1]*q,E.a.v[2]*q));for(g=0;g<b;g+=1)E=l[g].a,E.s.propType&&(z=l[g].s,q=z.getMult(k[R].anIndexes[g],p.a[g].s.totalChars),q.length?c.scale(1+(E.s.v[0]-1)*q[0],1+(E.s.v[1]-1)*q[1],1):c.scale(1+(E.s.v[0]-1)*q,1+(E.s.v[1]-1)*q,1));for(g=0;g<b;g+=1){if(E=l[g].a,z=l[g].s,q=z.getMult(k[R].anIndexes[g],p.a[g].s.totalChars),E.sk.propType&&(q.length?c.skewFromAxis(-E.sk.v*q[0],E.sa.v*q[1]):c.skewFromAxis(-E.sk.v*q,E.sa.v*q)),E.r.propType&&(q.length?c.rotateZ(-E.r.v*q[2]):c.rotateZ(-E.r.v*q)),E.ry.propType&&(q.length?c.rotateY(E.ry.v*q[1]):c.rotateY(E.ry.v*q)),E.rx.propType&&(q.length?c.rotateX(E.rx.v*q[0]):c.rotateX(E.rx.v*q)),E.o.propType&&(q.length?Si+=(E.o.v*q[0]-Si)*q[0]:Si+=(E.o.v*q-Si)*q),e.strokeWidthAnim&&E.sw.propType&&(q.length?Vi+=E.sw.v*q[0]:Vi+=E.sw.v*q),e.strokeColorAnim&&E.sc.propType)for(_t=0;_t<3;_t+=1)q.length?He[_t]+=(E.sc.v[_t]-He[_t])*q[0]:He[_t]+=(E.sc.v[_t]-He[_t])*q;if(e.fillColorAnim&&e.fc){if(E.fc.propType)for(_t=0;_t<3;_t+=1)q.length?Jt[_t]+=(E.fc.v[_t]-Jt[_t])*q[0]:Jt[_t]+=(E.fc.v[_t]-Jt[_t])*q;E.fh.propType&&(q.length?Jt=vi(Jt,E.fh.v*q[0]):Jt=vi(Jt,E.fh.v*q)),E.fs.propType&&(q.length?Jt=Zt(Jt,E.fs.v*q[0]):Jt=Zt(Jt,E.fs.v*q)),E.fb.propType&&(q.length?Jt=qe(Jt,E.fb.v*q[0]):Jt=qe(Jt,E.fb.v*q))}}for(g=0;g<b;g+=1)E=l[g].a,E.p.propType&&(z=l[g].s,q=z.getMult(k[R].anIndexes[g],p.a[g].s.totalChars),this._hasMaskedPath?q.length?c.translate(0,E.p.v[1]*q[0],-E.p.v[2]*q[1]):c.translate(0,E.p.v[1]*q,-E.p.v[2]*q):q.length?c.translate(E.p.v[0]*q[0],E.p.v[1]*q[1],-E.p.v[2]*q[2]):c.translate(E.p.v[0]*q,E.p.v[1]*q,-E.p.v[2]*q));if(e.strokeWidthAnim&&(Mr=Vi<0?0:Vi),e.strokeColorAnim&&(Ur="rgb("+Math.round(He[0]*255)+","+Math.round(He[1]*255)+","+Math.round(He[2]*255)+")"),e.fillColorAnim&&e.fc&&(Fr="rgb("+Math.round(Jt[0]*255)+","+Math.round(Jt[1]*255)+","+Math.round(Jt[2]*255)+")"),this._hasMaskedPath){if(c.translate(0,-e.ls),c.translate(0,o[1]*vt*.01+L,0),this._pathData.p.v){Ct=(V.point[1]-T.point[1])/(V.point[0]-T.point[0]);var _s=Math.atan(Ct)*180/Math.PI;V.point[0]<T.point[0]&&(_s+=180),c.rotate(-_s*Math.PI/180)}c.translate(Et,Xt,0),N-=o[0]*k[R].an*.005,k[R+1]&&ct!==k[R+1].ind&&(N+=k[R].an/2,N+=e.tr*.001*e.finalSize)}else{switch(c.translate(_,L,0),e.ps&&c.translate(e.ps[0],e.ps[1]+e.ascent,0),e.j){case 1:c.translate(k[R].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[k[R].line]),0,0);break;case 2:c.translate(k[R].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[k[R].line])/2,0,0);break}c.translate(0,-e.ls),c.translate(St,0,0),c.translate(o[0]*k[R].an*.005,o[1]*vt*.01,0),_+=k[R].l+e.tr*.001*e.finalSize}v==="html"?yr=c.toCSS():v==="svg"?yr=c.to2dCSS():Lr=[c.props[0],c.props[1],c.props[2],c.props[3],c.props[4],c.props[5],c.props[6],c.props[7],c.props[8],c.props[9],c.props[10],c.props[11],c.props[12],c.props[13],c.props[14],c.props[15]],Ir=Si}P<=R?(j=new sa(Ir,Mr,Ur,Fr,yr,Lr),this.renderedLetters.push(j),P+=1,this.lettersChangedFlag=!0):(j=this.renderedLetters[R],this.lettersChangedFlag=j.update(Ir,Mr,Ur,Fr,yr,Lr)||this.lettersChangedFlag)}}},vs.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},vs.prototype.mHelper=new yt,vs.prototype.defaultPropsArray=[],w([pe],vs);function Qi(){}Qi.prototype.initElement=function(e,s,o){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(e,s,o),this.textProperty=new fi(this,e.t,this.dynamicProperties),this.textAnimator=new vs(e.t,this.renderType,this),this.initTransform(e,s,o),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Qi.prototype.prepareFrame=function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)},Qi.prototype.createPathShape=function(e,s){var o,l=s.length,p,c="";for(o=0;o<l;o+=1)s[o].ty==="sh"&&(p=s[o].ks.k,c+=$l(p,p.i.length,!0,e));return c},Qi.prototype.updateDocumentData=function(e,s){this.textProperty.updateDocumentData(e,s)},Qi.prototype.canResizeFont=function(e){this.textProperty.canResizeFont(e)},Qi.prototype.setMinimumFontSize=function(e){this.textProperty.setMinimumFontSize(e)},Qi.prototype.applyTextPropertiesToMatrix=function(e,s,o,l,p){switch(e.ps&&s.translate(e.ps[0],e.ps[1]+e.ascent,0),s.translate(0,-e.ls,0),e.j){case 1:s.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[o]),0,0);break;case 2:s.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[o])/2,0,0);break}s.translate(l,p,0)},Qi.prototype.buildColor=function(e){return"rgb("+Math.round(e[0]*255)+","+Math.round(e[1]*255)+","+Math.round(e[2]*255)+")"},Qi.prototype.emptyProp=new sa,Qi.prototype.destroy=function(){},Qi.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var Pu={shapes:[]};function Cr(e,s,o){this.textSpans=[],this.renderType="svg",this.initElement(e,s,o)}w([Xr,qs,_n,Ws,Gr,yn,Qi],Cr),Cr.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=mt("text"))},Cr.prototype.buildTextContents=function(e){for(var s=0,o=e.length,l=[],p="";s<o;)e[s]==="\r"||e[s]===""?(l.push(p),p=""):p+=e[s],s+=1;return l.push(p),l},Cr.prototype.buildShapeData=function(e,s){if(e.shapes&&e.shapes.length){var o=e.shapes[0];if(o.it){var l=o.it[o.it.length-1];l.s&&(l.s.k[0]=s,l.s.k[1]=s)}}return e},Cr.prototype.buildNewText=function(){this.addDynamicProperty(this);var e,s,o=this.textProperty.currentData;this.renderedLetters=A(o?o.l.length:0),o.fc?this.layerElement.setAttribute("fill",this.buildColor(o.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),o.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(o.sc)),this.layerElement.setAttribute("stroke-width",o.sw)),this.layerElement.setAttribute("font-size",o.finalSize);var l=this.globalData.fontManager.getFontByName(o.f);if(l.fClass)this.layerElement.setAttribute("class",l.fClass);else{this.layerElement.setAttribute("font-family",l.fFamily);var p=o.fWeight,c=o.fStyle;this.layerElement.setAttribute("font-style",c),this.layerElement.setAttribute("font-weight",p)}this.layerElement.setAttribute("aria-label",o.t);var v=o.l||[],P=!!this.globalData.fontManager.chars;s=v.length;var _,L=this.mHelper,R="",G=this.data.singleShape,k=0,D=0,N=!0,V=o.tr*.001*o.finalSize;if(G&&!P&&!o.sz){var Y=this.textContainer,O="start";switch(o.j){case 1:O="end";break;case 2:O="middle";break;default:O="start";break}Y.setAttribute("text-anchor",O),Y.setAttribute("letter-spacing",V);var M=this.buildTextContents(o.finalText);for(s=M.length,D=o.ps?o.ps[1]+o.ascent:0,e=0;e<s;e+=1)_=this.textSpans[e].span||mt("tspan"),_.textContent=M[e],_.setAttribute("x",0),_.setAttribute("y",D),_.style.display="inherit",Y.appendChild(_),this.textSpans[e]||(this.textSpans[e]={span:null,glyph:null}),this.textSpans[e].span=_,D+=o.finalLineHeight;this.layerElement.appendChild(Y)}else{var x=this.textSpans.length,T;for(e=0;e<s;e+=1){if(this.textSpans[e]||(this.textSpans[e]={span:null,childSpan:null,glyph:null}),!P||!G||e===0){if(_=x>e?this.textSpans[e].span:mt(P?"g":"text"),x<=e){if(_.setAttribute("stroke-linecap","butt"),_.setAttribute("stroke-linejoin","round"),_.setAttribute("stroke-miterlimit","4"),this.textSpans[e].span=_,P){var I=mt("g");_.appendChild(I),this.textSpans[e].childSpan=I}this.textSpans[e].span=_,this.layerElement.appendChild(_)}_.style.display="inherit"}if(L.reset(),G&&(v[e].n&&(k=-V,D+=o.yOffset,D+=N?1:0,N=!1),this.applyTextPropertiesToMatrix(o,L,v[e].line,k,D),k+=v[e].l||0,k+=V),P){T=this.globalData.fontManager.getCharData(o.finalText[e],l.fStyle,this.globalData.fontManager.getFontByName(o.f).fFamily);var B;if(T.t===1)B=new kn(T.data,this.globalData,this);else{var $=Pu;T.data&&T.data.shapes&&($=this.buildShapeData(T.data,o.finalSize)),B=new Pe($,this.globalData,this)}if(this.textSpans[e].glyph){var H=this.textSpans[e].glyph;this.textSpans[e].childSpan.removeChild(H.layerElement),H.destroy()}this.textSpans[e].glyph=B,B._debug=!0,B.prepareFrame(0),B.renderFrame(),this.textSpans[e].childSpan.appendChild(B.layerElement),T.t===1&&this.textSpans[e].childSpan.setAttribute("transform","scale("+o.finalSize/100+","+o.finalSize/100+")")}else G&&_.setAttribute("transform","translate("+L.props[12]+","+L.props[13]+")"),_.textContent=v[e].val,_.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}G&&_&&_.setAttribute("d",R)}for(;e<this.textSpans.length;)this.textSpans[e].span.style.display="none",e+=1;this._sizeChanged=!0},Cr.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},Cr.prototype.getValue=function(){var e,s=this.textSpans.length,o;for(this.renderedFrame=this.comp.renderedFrame,e=0;e<s;e+=1)o=this.textSpans[e].glyph,o&&(o.prepareFrame(this.comp.renderedFrame-this.data.st),o._mdf&&(this._mdf=!0))},Cr.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var e,s,o=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;s=l.length;var p,c,v;for(e=0;e<s;e+=1)l[e].n||(p=o[e],c=this.textSpans[e].span,v=this.textSpans[e].glyph,v&&v.renderFrame(),p._mdf.m&&c.setAttribute("transform",p.m),p._mdf.o&&c.setAttribute("opacity",p.o),p._mdf.sw&&c.setAttribute("stroke-width",p.sw),p._mdf.sc&&c.setAttribute("stroke",p.sc),p._mdf.fc&&c.setAttribute("fill",p.fc))}};function na(e,s,o){this.initElement(e,s,o)}w([bn],na),na.prototype.createContent=function(){var e=mt("rect");e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),e.setAttribute("fill",this.data.sc),this.layerElement.appendChild(e)};function Hr(e,s,o){this.initFrame(),this.initBaseData(e,s,o),this.initFrame(),this.initTransform(e,s,o),this.initHierarchy()}Hr.prototype.prepareFrame=function(e){this.prepareProperties(e,!0)},Hr.prototype.renderFrame=function(){},Hr.prototype.getBaseElement=function(){return null},Hr.prototype.destroy=function(){},Hr.prototype.sourceRectAtTime=function(){},Hr.prototype.hide=function(){},w([Xr,qs,Ws,Gr],Hr);function Ye(){}w([ei],Ye),Ye.prototype.createNull=function(e){return new Hr(e,this.globalData,this)},Ye.prototype.createShape=function(e){return new Pe(e,this.globalData,this)},Ye.prototype.createText=function(e){return new Cr(e,this.globalData,this)},Ye.prototype.createImage=function(e){return new bn(e,this.globalData,this)},Ye.prototype.createSolid=function(e){return new na(e,this.globalData,this)},Ye.prototype.configAnimation=function(e){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+e.w+" "+e.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",e.w),this.svgElement.setAttribute("height",e.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var s=this.globalData.defs;this.setupGlobalData(e,s),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=e;var o=mt("clipPath"),l=mt("rect");l.setAttribute("width",e.w),l.setAttribute("height",e.h),l.setAttribute("x",0),l.setAttribute("y",0);var p=Mt();o.setAttribute("id",p),o.appendChild(l),this.layerElement.setAttribute("clip-path","url("+m()+"#"+p+")"),s.appendChild(o),this.layers=e.layers,this.elements=A(e.layers.length)},Ye.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e,s=this.layers?this.layers.length:0;for(e=0;e<s;e+=1)this.elements[e]&&this.elements[e].destroy&&this.elements[e].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},Ye.prototype.updateContainerSize=function(){},Ye.prototype.findIndexByInd=function(e){var s=0,o=this.layers.length;for(s=0;s<o;s+=1)if(this.layers[s].ind===e)return s;return-1},Ye.prototype.buildItem=function(e){var s=this.elements;if(!(s[e]||this.layers[e].ty===99)){s[e]=!0;var o=this.createItem(this.layers[e]);if(s[e]=o,ne()&&(this.layers[e].ty===0&&this.globalData.projectInterface.registerComposition(o),o.initExpressions()),this.appendElementInPos(o,e),this.layers[e].tt){var l="tp"in this.layers[e]?this.findIndexByInd(this.layers[e].tp):e-1;if(l===-1)return;if(!this.elements[l]||this.elements[l]===!0)this.buildItem(l),this.addPendingElement(o);else{var p=s[l],c=p.getMatte(this.layers[e].tt);o.setMatte(c)}}}},Ye.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var e=this.pendingElements.pop();if(e.checkParenting(),e.data.tt)for(var s=0,o=this.elements.length;s<o;){if(this.elements[s]===e){var l="tp"in e.data?this.findIndexByInd(e.data.tp):s-1,p=this.elements[l],c=p.getMatte(this.layers[s].tt);e.setMatte(c);break}s+=1}}},Ye.prototype.renderFrame=function(e){if(!(this.renderedFrame===e||this.destroyed)){e===null?e=this.renderedFrame:this.renderedFrame=e,this.globalData.frameNum=e,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=e,this.globalData._mdf=!1;var s,o=this.layers.length;for(this.completeLayers||this.checkLayers(e),s=o-1;s>=0;s-=1)(this.completeLayers||this.elements[s])&&this.elements[s].prepareFrame(e-this.layers[s].st);if(this.globalData._mdf)for(s=0;s<o;s+=1)(this.completeLayers||this.elements[s])&&this.elements[s].renderFrame()}},Ye.prototype.appendElementInPos=function(e,s){var o=e.getBaseElement();if(o){for(var l=0,p;l<s;)this.elements[l]&&this.elements[l]!==!0&&this.elements[l].getBaseElement()&&(p=this.elements[l].getBaseElement()),l+=1;p?this.layerElement.insertBefore(o,p):this.layerElement.appendChild(o)}},Ye.prototype.hide=function(){this.layerElement.style.display="none"},Ye.prototype.show=function(){this.layerElement.style.display="block"};function Er(){}w([Xr,qs,Ws,Gr,yn],Er),Er.prototype.initElement=function(e,s,o){this.initFrame(),this.initBaseData(e,s,o),this.initTransform(e,s,o),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!s.progressiveLoad)&&this.buildAllItems(),this.hide()},Er.prototype.prepareFrame=function(e){if(this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=e/this.data.sr;else{var s=this.tm.v;s===this.data.op&&(s=this.data.op-1),this.renderedFrame=s}var o,l=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),o=l-1;o>=0;o-=1)(this.completeLayers||this.elements[o])&&(this.elements[o].prepareFrame(this.renderedFrame-this.layers[o].st),this.elements[o]._mdf&&(this._mdf=!0))}},Er.prototype.renderInnerContent=function(){var e,s=this.layers.length;for(e=0;e<s;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()},Er.prototype.setElements=function(e){this.elements=e},Er.prototype.getElements=function(){return this.elements},Er.prototype.destroyElements=function(){var e,s=this.layers.length;for(e=0;e<s;e+=1)this.elements[e]&&this.elements[e].destroy()},Er.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function kn(e,s,o){this.layers=e.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?A(this.layers.length):[],this.initElement(e,s,o),this.tm=e.tm?lt.getProp(this,e.tm,0,s.frameRate,this):{_placeholder:!0}}w([Ye,Er,_n],kn),kn.prototype.createComp=function(e){return new kn(e,this.globalData,this)};function oa(e,s){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.svgElement=mt("svg");var o="";if(s&&s.title){var l=mt("title"),p=Mt();l.setAttribute("id",p),l.textContent=s.title,this.svgElement.appendChild(l),o+=p}if(s&&s.description){var c=mt("desc"),v=Mt();c.setAttribute("id",v),c.textContent=s.description,this.svgElement.appendChild(c),o+=" "+v}o&&this.svgElement.setAttribute("aria-labelledby",o);var P=mt("defs");this.svgElement.appendChild(P);var _=mt("g");this.svgElement.appendChild(_),this.layerElement=_,this.renderConfig={preserveAspectRatio:s&&s.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:s&&s.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:s&&s.contentVisibility||"visible",progressiveLoad:s&&s.progressiveLoad||!1,hideOnTransparent:!(s&&s.hideOnTransparent===!1),viewBoxOnly:s&&s.viewBoxOnly||!1,viewBoxSize:s&&s.viewBoxSize||!1,className:s&&s.className||"",id:s&&s.id||"",focusable:s&&s.focusable,filterSize:{width:s&&s.filterSize&&s.filterSize.width||"100%",height:s&&s.filterSize&&s.filterSize.height||"100%",x:s&&s.filterSize&&s.filterSize.x||"0%",y:s&&s.filterSize&&s.filterSize.y||"0%"},width:s&&s.width,height:s&&s.height,runExpressions:!s||s.runExpressions===void 0||s.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:P,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}return w([Ye],oa),oa.prototype.createComp=function(e){return new kn(e,this.globalData,this)},nr("svg",oa),Ve.registerModifier("tm",bi),Ve.registerModifier("pb",hr),Ve.registerModifier("rp",ti),Ve.registerModifier("rd",vr),Ve.registerModifier("zz",dn),Ve.registerModifier("op",mn),pt}))})(On,On.exports)),On.exports}var K0=U0();const Z0=j0(K0),Q0="5.9.0",J0=60,tp=0,ep=183,ip=192,rp=192,sp="doodle-outline-82-computer-mouse-mouse-scrolling",np=0,op=JSON.parse(`[{"id":"comp_1","nm":"hover-pinch","fr":60,"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"POS","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.45,"y":1},"o":{"x":0.55,"y":0},"t":0,"s":[96,18.308,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.45,"y":1},"o":{"x":0.55,"y":0},"t":20,"s":[96,13.931,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.45,"y":1},"o":{"x":0.55,"y":0},"t":40,"s":[96,16.808,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.55,"y":0},"t":60,"s":[96,13.931,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":80,"s":[96,21.434,0],"to":[0,0,0],"ti":[0,0,0]},{"t":91,"s":[96,18.308,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[44.651,44.651,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":844,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Vector","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.273,-12.674,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[223.958,223.958,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.478,-0.028],[0.522,-1.286]],"o":[[-1.149,-3.179],[-1.602,0.031],[0,0]],"v":[[7.787,6.017],[-0.041,-6.017],[-7.787,5.897]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"POS","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-180,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.45,"y":1},"o":{"x":0.55,"y":0},"t":80,"s":[96,173.692,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.45,"y":1},"o":{"x":0.55,"y":0},"t":100,"s":[96,179.515,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.45,"y":1},"o":{"x":0.55,"y":0},"t":120,"s":[96,175.192,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.55,"y":0},"t":140,"s":[96,179.569,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":160,"s":[96,171.566,0],"to":[0,0,0],"ti":[0,0,0]},{"t":171,"s":[96,173.692,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[-44.651,44.651,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":844,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Vector","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-180,"ix":10},"p":{"a":0,"k":[0.216,-9.202,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[-223.958,-223.958,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.478,-0.028],[0.522,-1.28]],"o":[[-1.149,-3.163],[-1.602,0.031],[0,0]],"v":[[7.787,5.987],[-0.041,-5.987],[-7.787,5.868]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.003,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"decor line 5","parent":15,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[313.095,305.84,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[223.958,223.958,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[4.845,-6.646],[25.862,0]],"o":[[0,8.93],[-5.541,7.6],[0,0]],"v":[[0.035,-7.519],[-4.393,26.936],[-51.535,33.019]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.237],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":-47,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-10,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":21,"s":[0]},{"t":34,"s":[0],"h":1},{"i":{"x":[0.16],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":155,"s":[18]},{"t":183,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.237],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-47,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-10,"s":[18]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":21,"s":[18]},{"t":34,"s":[0],"h":1},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":155,"s":[18]},{"t":183,"s":[18]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-47,"op":306,"st":-47,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"decor line 4","parent":15,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[281.627,358.711,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[223.958,223.958,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[7.218,-3.939],[23.923,0.389]],"o":[[-0.082,5.906],[-6.838,3.732],[0,0]],"v":[[13.96,-9.697],[5.577,6.448],[-37.669,9.82]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.237],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":-35,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-5,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":7,"s":[0]},{"t":27,"s":[0],"h":1},{"i":{"x":[0.16],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":136,"s":[63]},{"t":176,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.237],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-35,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-5,"s":[63]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":7,"s":[63]},{"t":27,"s":[0],"h":1},{"t":136,"s":[63],"h":1}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-35,"op":318,"st":-35,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Vector 3","parent":15,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250.375,158.148,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[223.958,223.958,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.031,9.384]],"o":[[0,-14.594],[0,0]],"v":[[0.009,28.383],[0.003,-28.383]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[0.994]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[69]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[-0.006]},"t":20,"s":[97]},{"i":{"x":[0.567],"y":[0.431]},"o":{"x":[0.47],"y":[0]},"t":40,"s":[69]},{"i":{"x":[0.501],"y":[1]},"o":{"x":[0.205],"y":[0.352]},"t":49,"s":[83.489]},{"i":{"x":[0.78],"y":[0.575]},"o":{"x":[0.482],"y":[0]},"t":60,"s":[97]},{"i":{"x":[0.362],"y":[1]},"o":{"x":[0.314],"y":[0.413]},"t":75,"s":[85.992]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":100,"s":[59]},{"i":{"x":[0.215],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":120,"s":[69]},{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.48],"y":[0]},"t":140,"s":[59]},{"t":171,"s":[69]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.031,9.384]],"o":[[0,-14.594],[0,0]],"v":[[0.009,28.383],[0.003,-28.383]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[16]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[43]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":40,"s":[16]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[43]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":100,"s":[5]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":120,"s":[16]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":140,"s":[5]},{"t":171,"s":[16]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"scroll","parent":15,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250.822,166.692,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[223.958,223.958,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-7.467,0.076],[0.091,-0.299],[0.035,0.498]],"o":[[8.057,-0.083],[-0.041,0.128],[-0.048,-0.667]],"v":[[-0.044,-14.345],[5.366,14.213],[-5.575,14.008]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":20,"s":[{"i":[[-7.467,0.076],[0.091,-0.299],[0.035,0.498]],"o":[[8.057,-0.083],[-0.041,0.128],[-0.048,-0.667]],"v":[[-0.044,-29.845],[5.366,-1.287],[-5.575,-1.492]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":40,"s":[{"i":[[-7.467,0.076],[0.091,-0.299],[0.035,0.498]],"o":[[8.057,-0.083],[-0.041,0.128],[-0.048,-0.667]],"v":[[-0.044,-14.345],[5.366,14.213],[-5.575,14.008]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[{"i":[[-7.467,0.076],[0.091,-0.299],[0.035,0.498]],"o":[[8.057,-0.083],[-0.041,0.128],[-0.048,-0.667]],"v":[[-0.044,-29.845],[5.366,-1.287],[-5.575,-1.492]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":100,"s":[{"i":[[-7.467,0.076],[0.091,-0.299],[0.035,0.498]],"o":[[8.057,-0.083],[-0.041,0.128],[-0.048,-0.667]],"v":[[-0.044,-7.345],[5.366,21.213],[-5.575,21.008]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":120,"s":[{"i":[[-7.467,0.076],[0.091,-0.299],[0.035,0.498]],"o":[[8.057,-0.083],[-0.041,0.128],[-0.048,-0.667]],"v":[[-0.044,-14.345],[5.366,14.213],[-5.575,14.008]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":140,"s":[{"i":[[-7.467,0.076],[0.091,-0.299],[0.035,0.498]],"o":[[8.057,-0.083],[-0.041,0.128],[-0.048,-0.667]],"v":[[-0.044,-7.345],[5.366,21.213],[-5.575,21.008]],"c":true}]},{"t":171,"s":[{"i":[[-7.467,0.076],[0.091,-0.299],[0.035,0.498]],"o":[[8.057,-0.083],[-0.041,0.128],[-0.048,-0.667]],"v":[[-0.044,-14.345],[5.366,14.213],[-5.575,14.008]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Vector 2","parent":15,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[251.338,215.172,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[223.958,223.958,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[19.722,8.597]],"o":[[-21.187,7.361],[0,0]],"v":[[40.096,-2.467],[-40.096,-3.167]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"mouse","parent":15,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250.245,249.215,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[223.958,223.958,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.175,0.001],[0.13,-17.607],[0.042,-5.062],[0,-8.691],[40.06,0.552],[0.182,10.523],[-0.059,7.626],[-0.002,2.494],[-25.823,0.364]],"o":[[25.554,-0.158],[-0.026,3.445],[-0.072,8.803],[0,8.51],[-36.856,-0.507],[-0.24,-13.863],[0.06,-7.731],[0.008,-15.819],[0.174,-0.002]],"v":[[0.289,-69.29],[40.297,-37.475],[40.67,-2.896],[39.876,31.854],[0.209,69.283],[-40.322,32.363],[-40.66,-3.321],[-39.85,-37.69],[-0.234,-69.284]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"decor line 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[43.906,71.249,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.024,-2.483]],"o":[[0.005,2.664],[0,0]],"v":[[0.02,-7.577],[-0.135,84.077]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.237],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":-54,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-18,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[0]},{"t":28,"s":[0],"h":1},{"i":{"x":[0.16],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":157,"s":[17]},{"t":178,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.237],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-54,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-18,"s":[17]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[17]},{"t":28,"s":[0],"h":1},{"t":157,"s":[17],"h":1}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-54,"op":305,"st":-54,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"decor line 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[44.106,110.715,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.035,8.919]],"o":[[0.072,-9.352],[0,0]],"v":[[-0.063,44.544],[-0.061,-23.294]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.09,0.09,0.11,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('primary')('Color');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 2), comp('doodle-outline-82-computer-mouse-mouse-scrolling').layer('control').effect('stroke')('Menu'));"},"lc":2,"lj":2,"bm":0,"nm":".primary","mn":"ADBE Vector Graphic - Stroke","hd":false,"cl":"primary"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.237],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-41,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-15,"s":[31]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[31]},{"t":18,"s":[100],"h":1},{"i":{"x":[0.16],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":143,"s":[0]},{"t":172,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.237],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":-41,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-15,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"t":18,"s":[100],"h":1},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":143,"s":[0]},{"t":172,"s":[31]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-41,"op":318,"st":-41,"bm":0},{"ddd":0,"ind":15,"ty":3,"nm":"POS","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.28,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[96,95.93,0],"to":[0,-0.819,0],"ti":[0,0.819,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.72,"y":0.72},"t":28,"s":[96,91.018,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.28,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[96,91.018,0],"to":[0,1.6,0],"ti":[0,-1.6,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.72,"y":0.72},"t":100,"s":[96,100.618,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.28,"y":1},"o":{"x":0.333,"y":0},"t":140,"s":[96,100.618,0],"to":[0,-0.781,0],"ti":[0,0.781,0]},{"t":171,"s":[96,95.93,0]}],"ix":2,"l":2},"a":{"a":0,"k":[250,249.843,0],"ix":1,"l":2},"s":{"a":0,"k":[44.651,44.651,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":844,"st":0,"bm":0}]}]`),ap=[{ddd:0,ind:1,ty:3,nm:"control",sr:1,ks:{o:{a:0,k:0,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[0,0],ix:2,l:2},a:{a:0,k:[0,0,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,ef:[{ty:5,nm:"stroke",np:3,mn:"Pseudo/@@u4lopCK2QPKMM4WDNQqH8Q",ix:1,en:1,ef:[{ty:7,nm:"Menu",mn:"Pseudo/@@u4lopCK2QPKMM4WDNQqH8Q-0001",ix:1,v:{a:0,k:2,ix:1}}]},{ty:5,nm:"primary",np:3,mn:"ADBE Color Control",ix:2,en:1,ef:[{ty:2,nm:"Color",mn:"ADBE Color Control-0001",ix:1,v:{a:0,k:[.09,.09,.11],ix:1}}]}],ip:0,op:266,st:0,bm:0},{ddd:0,ind:3,ty:0,nm:"hover-pinch",refId:"comp_1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[96,96,0],ix:2,l:2},a:{a:0,k:[96,96,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,w:192,h:192,ip:0,op:193,st:0,bm:0}],lp=[{tm:0,cm:"default:hover-pinch",dr:183}],hp={v:Q0,fr:J0,ip:tp,op:ep,w:ip,h:rp,nm:sp,ddd:np,assets:op,layers:ap,markers:lp};function fp(h){const{gsap:t,ScrollTrigger:r,reduced:i}=h,n=document.querySelector("#hero");if(!n)return;const a=n.querySelector(".hero__scroll-mouse");if(a){const A=Z0.loadAnimation({container:a,renderer:"svg",loop:!0,autoplay:!i,animationData:hp});i&&A.goToAndStop(0,!0)}const f=n.querySelector(".hero__kicker"),u=n.querySelectorAll(".hero__title-line"),d=n.querySelector(".hero__horse"),m=n.querySelector(".hero__byline"),y=n.querySelector(".hero__scroll"),w=n.querySelectorAll(".hero__scroll-letter"),C=n.querySelector(".hero__smoker"),S=n.querySelector(".hero__compass");if(i)return;w.length&&t.set(w,{xPercent:-50,yPercent:-50});const F=[f,...u,d,m,y,C,S].filter(Boolean);t.set(F,{autoAlpha:0}),h.loaderDone.then(()=>{const A=t.timeline({defaults:{ease:"power3.out"}});d&&A.fromTo(d,{autoAlpha:0,y:26,scale:.985},{autoAlpha:1,y:0,scale:1,duration:.7},0),y&&A.fromTo(y,{autoAlpha:0},{autoAlpha:1,duration:.5,ease:"none"},.4),S&&A.fromTo(S,{autoAlpha:0},{autoAlpha:1,duration:.6,ease:"none"},.5),f&&A.fromTo(f,{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.5},.7),u.length&&A.fromTo(u,{autoAlpha:0,y:44},{autoAlpha:1,y:0,duration:.7,stagger:.12},.8),m&&A.fromTo(m,{autoAlpha:0,y:12},{autoAlpha:1,y:0,duration:.5},1.15),C&&A.fromTo(C,{autoAlpha:0,y:8},{autoAlpha:1,y:0,duration:.6},1.45)}),w.length&&t.to(w,{y:-5,duration:1.3,ease:"sine.inOut",repeat:-1,yoyo:!0,stagger:.16})}const up=Object.freeze(Object.defineProperty({__proto__:null,init:fp},Symbol.toStringTag,{value:"Module"}));function cp(h){var y;const t=document.querySelector("#lightbox");if(!t)return;const r=t.querySelector(".lightbox__card"),i=t.querySelector(".lightbox__backdrop"),n=t.querySelector(".lightbox__close"),a=document.querySelectorAll(".header__buy, .book__buy");if(!r||!n)return;const{gsap:f,reduced:u}=h;function d(){}const m=(y=document.querySelector(".header__buy"))==null?void 0:y.href;a.forEach(w=>{w.addEventListener("click",C=>{C.preventDefault(),m&&window.open(m,"_blank","noopener")})}),n.addEventListener("click",d),i==null||i.addEventListener("click",d)}const pp=Object.freeze(Object.defineProperty({__proto__:null,init:cp},Symbol.toStringTag,{value:"Module"}));function dp(h){const t=document.querySelector(".book__slider"),r=document.querySelector(".book__track"),i=Array.from(document.querySelectorAll(".book__slide")),n=document.querySelector(".book__arrow--prev"),a=document.querySelector(".book__arrow--next");if(!t||!r||i.length<2||!n||!a)return;const{gsap:f,reduced:u}=h;let d=0;function m(){const Z=i[i.length-1],rt=parseFloat(getComputedStyle(t).paddingLeft)||0;return Math.max(0,Z.offsetLeft+Z.offsetWidth-(t.clientWidth-rt))}function y(Z){return-Math.min(Math.max(0,i[Z].offsetLeft),m())}function w(){const Z=i.map((rt,tt)=>y(tt));return[...new Set(Z)].sort((rt,tt)=>tt-rt)}function C(){const Z=w();d=Math.min(d,Z.length-1);const rt=Z[d];u?f.set(r,{x:rt}):f.to(r,{x:rt,duration:.8,ease:"power3.inOut",overwrite:"auto"}),n.disabled=d===0,a.disabled=d===Z.length-1,n.classList.toggle("is-disabled",n.disabled),a.classList.toggle("is-disabled",a.disabled)}n.addEventListener("click",()=>{d>0&&(d-=1,C())}),a.addEventListener("click",()=>{d<w().length-1&&(d+=1,C())}),window.addEventListener("resize",()=>{d!==0&&f.set(r,{x:w()[d]})}),C();const S=document.createElement("div");S.className="book-zoom",S.hidden=!0,S.setAttribute("role","dialog"),S.setAttribute("aria-modal","true"),S.setAttribute("aria-label","Enlarged book page");const F=document.createElement("img");F.className="book-zoom__img",F.alt="",S.appendChild(F),document.body.appendChild(S);let A=!1;const W=()=>{var Z;return typeof h.stopScroll=="function"?h.stopScroll():(Z=h.lenis)==null?void 0:Z.stop()},J=()=>{var Z;return typeof h.startScroll=="function"?h.startScroll():(Z=h.lenis)==null?void 0:Z.start()};function Q(Z){Z.key==="Escape"&&(Z.preventDefault(),K())}function U(Z){A||(A=!0,F.src=Z.currentSrc||Z.src,F.alt=Z.alt||"",S.hidden=!1,W(),document.addEventListener("keydown",Q),u?(f.set(S,{opacity:1}),f.set(F,{scale:1})):(f.fromTo(S,{opacity:0},{opacity:1,duration:.3,ease:"power2.out"}),f.fromTo(F,{scale:.92},{scale:1,duration:.35,ease:"power3.out"})))}function K(){A&&(A=!1,document.removeEventListener("keydown",Q),J(),u?S.hidden=!0:f.to(S,{opacity:0,duration:.25,ease:"power2.in",onComplete:()=>{S.hidden=!0,f.set(S,{opacity:1})}}))}i.forEach(Z=>{Z.addEventListener("click",()=>U(Z))}),S.addEventListener("click",K)}const mp=Object.freeze(Object.defineProperty({__proto__:null,init:dp},Symbol.toStringTag,{value:"Module"}));function gp(h={}){vp(h),_p(h)}function vp(h){const{gsap:t,ScrollTrigger:r,reduced:i}=h,n=Array.from(document.querySelectorAll(".author__polaroid"));!n.length||!r||r.batch(n,{start:"top 65%",onEnter:a=>a.forEach((f,u)=>{i||!t?f.classList.add("is-colored"):t.delayedCall(u*.15,()=>f.classList.add("is-colored"))}),onLeaveBack:a=>a.forEach(f=>f.classList.remove("is-colored"))})}function _p(h){const{reduced:t}=h,r=document.querySelector(".book__form"),i=r==null?void 0:r.querySelector(".book__input"),n=r==null?void 0:r.querySelector(".book__send"),a=n==null?void 0:n.querySelector(".book__send-label"),f=r==null?void 0:r.querySelector(".book__status"),u=r==null?void 0:r.querySelectorAll(".book__email-copy");if(!r||!i||!n||!a||!f||!u)return;const d=a.textContent,m=t?0:2400,y=2e4;let w=null;const C=S=>new Promise(F=>setTimeout(F,S));r.addEventListener("submit",async S=>{var Q;if(S.preventDefault(),r.classList.contains("is-submitting")||r.classList.contains("is-sent"))return;if(!i.value.trim()||!i.checkValidity()){(Q=i.reportValidity)==null||Q.call(i);return}clearTimeout(w);const F=i.value.trim();u.forEach(U=>{U.textContent=F}),a.textContent=d,f.textContent=n.dataset.sending||"Sending…",r.classList.remove("is-error"),r.classList.add("is-submitting"),r.setAttribute("aria-busy","true"),i.readOnly=!0,n.disabled=!0,i.blur();const A=Object.fromEntries(new FormData(r));A.page=window.location.href;const W=new AbortController,J=setTimeout(()=>W.abort(),y);try{const[U]=await Promise.all([fetch(r.action,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(A),signal:W.signal}),C(m)]);clearTimeout(J);const K=U.headers.get("content-type")||"";if(!U.ok||!K.toLowerCase().includes("application/json"))throw new Error("Newsletter request failed");const Z=await U.json();if((Z==null?void 0:Z.success)!==!0)throw new Error("Newsletter request failed");f.textContent=n.dataset.thanks||"You’ll hear from us soon. Thanks!",r.classList.add("is-sent"),r.classList.remove("is-submitting"),r.removeAttribute("aria-busy"),r.reset()}catch{clearTimeout(J),r.classList.remove("is-submitting"),r.classList.add("is-error"),r.removeAttribute("aria-busy"),i.readOnly=!1,n.disabled=!1,a.textContent=n.dataset.error||"Try again",f.textContent=n.dataset.error||"Try again",i.focus(),w=setTimeout(()=>{r.classList.remove("is-error"),a.textContent=d,f.textContent=""},3200)}})}const yp=Object.freeze(Object.defineProperty({__proto__:null,init:gp},Symbol.toStringTag,{value:"Module"}));function bp(h){const{gsap:t,ScrollTrigger:r}=h,i=document.querySelector(".decor__compass"),n=i==null?void 0:i.querySelector(".decor__compass-fill");if(!i||!n)return;const a=t.quickSetter(n,"scaleY");r.create({start:0,end:"max",onUpdate:w=>a(w.progress),onRefresh:w=>a(w.progress)}),h.reduced||t.fromTo(i,{autoAlpha:0},{autoAlpha:1,duration:.6,ease:"none",delay:1.15});const f=i.querySelector(".decor__compass-line")||i;i.style.pointerEvents="auto",i.style.cursor="grab",i.setAttribute("role","scrollbar"),i.setAttribute("aria-orientation","vertical"),i.setAttribute("aria-label","Page scroll"),i.setAttribute("tabindex","0");const u=()=>(document.documentElement.scrollHeight||0)-window.innerHeight,d=(w,C)=>{const S=f.getBoundingClientRect(),F=Math.min(Math.max((w-S.top)/S.height,0),1),A=F*u();h.lenis?h.lenis.scrollTo(A,{immediate:C}):window.scrollTo(0,A),i.setAttribute("aria-valuenow",Math.round(F*100))};let m=!1;i.addEventListener("pointerdown",w=>{m=!0,i.setPointerCapture(w.pointerId),i.style.cursor="grabbing",d(w.clientY,!0),w.preventDefault()}),i.addEventListener("pointermove",w=>{m&&d(w.clientY,!0)});const y=w=>{if(m&&(m=!1,i.style.cursor="grab",w.pointerId!=null))try{i.releasePointerCapture(w.pointerId)}catch{}};i.addEventListener("pointerup",y),i.addEventListener("pointercancel",y),i.addEventListener("keydown",w=>{const C=window.innerHeight*(w.key==="PageDown"||w.key==="PageUp"?.9:.12);let S=0;if(w.key==="ArrowDown"||w.key==="PageDown")S=C;else if(w.key==="ArrowUp"||w.key==="PageUp")S=-C;else if(w.key==="Home")S=-u();else if(w.key==="End")S=u();else return;w.preventDefault();const F=Math.min(Math.max(window.scrollY+S,0),u());h.lenis?h.lenis.scrollTo(F):window.scrollTo(0,F)})}const xp=Object.freeze(Object.defineProperty({__proto__:null,init:bp},Symbol.toStringTag,{value:"Module"}));function kp(h){const t=Array.from(document.querySelectorAll(".hero__smoker, .intro__doodle")),r=document.querySelector(".strip__video");if(!t.length&&!r)return;const i=document.createElement("div");i.className="doodle-grid",i.setAttribute("aria-hidden","true"),i.style.visibility="hidden",document.body.appendChild(i);let n="";const a=()=>{const f=r&&window.matchMedia("(max-width: 1080px), (pointer: coarse)").matches?[...t,r]:t;let u="";for(const d of f){const m=d.getBoundingClientRect();m.bottom<0||m.top>window.innerHeight||!m.width||(u+=`M${m.left.toFixed(1)} ${m.top.toFixed(1)}h${m.width.toFixed(1)}v${m.height.toFixed(1)}h${(-m.width).toFixed(1)}Z`)}u!==n&&(n=u,i.style.clipPath=u?`path('${u}')`:"none",i.style.visibility=u?"":"hidden")};a(),h!=null&&h.gsap?h.gsap.ticker.add(a):window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a)}const wp=Object.freeze(Object.defineProperty({__proto__:null,init:kp},Symbol.toStringTag,{value:"Module"})),Sp=[["coords",T0],["claimfit",A0],["authorfit",I0],["reveal",V0],["coins",G0],["hero",up],["lightbox",pp],["slider",mp],["interactions",yp],["progress",xp],["doodlegrid",wp]],Tp=[["bills",()=>Xl(()=>__dsImport("bills").then(h=>h.e),[])],["language",()=>Xl(()=>__dsImport("language"),[])]];function Cp(){var t;const h=k0();try{w0(h)}catch(r){console.warn('[anim] module "core" failed to init:',r)}for(const[r,i]of Sp)try{(t=i.init)==null||t.call(i,h)}catch(n){console.warn(`[anim] module "${r}" failed to init:`,n)}h.ScrollTrigger.refresh(),Promise.all(Tp.map(([r,i])=>i().then(n=>{var a;return(a=n.init)==null?void 0:a.call(n,h)}).catch(n=>console.warn(`[anim] module "${r}" failed to init:`,n)))).then(()=>h.ScrollTrigger.refresh())}__dsExports.cyc={init:Cp};

};

/* ---- index-BYAKky6a.js ---- */
__dsDefs.entry=function(){"use strict";
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const W="modulepreload",J=function(o){return"/"+o},M={},V=function(e,n,t){let a=Promise.resolve();if(n&&n.length>0){let i=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),b=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=i(n.map(c=>{if(c=J(c),c in M)return;M[c]=!0;const m=c.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":W,m||(u.as="script"),u.crossOrigin="",u.href=c,b&&u.setAttribute("nonce",b),document.head.appendChild(u),m)return new Promise((y,w)=>{u.addEventListener("load",y),u.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return a.then(i=>{for(const s of i||[])s.status==="rejected"&&r(s.reason);return e().catch(r)})},Z="Money in Check",Y={"meta.title":"Money in Check — A novel by Óscar Pérez","meta.description":"Not a finance textbook. Not just a novel. A story that teaches you how money really works. Money in Check, a novel by Óscar Pérez.","meta.ogDescription":"Not a finance textbook. Not just a novel. A story that teaches you how money really works.",brand:Z,"header.edition":"2026 Edition","header.navIntro":"Intro","header.navBook":"The book","header.navAuthor":"About the Author","header.langLabel":"En","header.langAria":"Language: English","header.buy":"Buy it now!","header.price":"$9.99","hero.kicker":"The Invisible Rules of Wealth","hero.horseAlt":"Chess knight piece wrapped in a rolled dollar bill","hero.bylineLead":"A novel by","hero.bylineName":"Óscar Pérez","intro.metaTheme":"The Principles of Wealth.","intro.metaDate":"February 10, 2026, 11:31 PM","intro.metaPlace":"Boston, MA","intro.manifesto1":"{g}Most people enter {gif:2} adulthood as if they were sitting down at a chessboard for the first time, without knowing {gif:3} the rules, without recognizing which pieces truly matter, and believing that hard work alone will be enough to stay {gif:4} in the game.{/g}","intro.manifesto2":"{g}But money has its own logic, its own {gif:5} traps, its punishments, and its rewards. Money in Check is the story of a game learned the hard way, and an invitation to discover that true financial {gif:6} freedom is not about having more, but about living with margin and dignity, and being able to choose the life you truly want without fear.{/g}","book.metaPages":"Pages","book.metaCount":"(221)","book.metaLangs":"English, Spanish & France","book.metaTitle":"The Book","book.metaSubline":"5 Languages. 3 Formats. One Story.","book.coverAlt":"Money in Check book cover held in hand","book.slide1Alt":"Interior spread of the book, first chapter","book.slide2Alt":"Interior spread of the book with a chart","book.coverSrc":"img/book-cover-EN.webp","book.slide1Src":"img/book-1-EN.png","book.slide2Src":"img/book-2-EN.png","book.prevAria":"Previous spread","book.nextAria":"Next spread","book.optionsHeader":"Formats","book.priceHeader":"Price (USD)","book.rowPrint":"Paperback","book.pricePrint":"$15.99","book.rowKindle":"Hardcover","book.priceKindle":"$22.99","book.rowPrintAudio":"Kindle Edition","book.pricePrintAudio":"$9.99","book.rowAudio":"Audiobook","book.priceAudio":"Soon","book.buyLabel":"Buy on Amazon","book.buyUrl":"https://www.amazon.com/dp/B0H9ZSPHP8/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6lt49SVRIrSPNFTeMZ1wKv-dXqhmYL0tGJGo70ep1g2Yy0GZDrTDbDQOEDAVcK-XYd0PVU5jnWbPErcArdFXnAcWUKOyJJ11BMnacO_ZcfpRje7qreXy29pPBK35mChq_szwoGO7dM4UflCc3pFXxm-x1-W-Hs5FgVJ_YpWlzdwy-Hi3aHJsAwhx198abHo1IyUWUZbGfH9QeOOynV2I_tS5ueGmJw9a0x8REIzkvkU.r4d2SLNqyOuFKdpcZUaLZbg5fJGJYwCKBHwTN9h2mHI&qid=1784786580&sr=1-1","book.kindleNote":"(*) Free with a Kindle Unlimited membership","book.claim":"Not a finance textbook.{br}Not just a novel.{br}A story that teaches you how{br}money really works.","book.synopsis1":"{em.book__em.book__em--name}Oliver Harper{/em} arrives at Harvard on a scholarship, with an oversized suitcase and the feeling that he is entering a world that was not designed for him. He comes from a family where money was always tight, financial mistakes came at a high price, and hope weighed as heavily as the bills.","book.synopsis2":"Having learned to see the world through the logic of a chessboard, {em.book__em}Oliver soon discovers that money, like chess, has invisible rules: the winner is not the one who appears wealthiest or moves fastest, but the one who understands the position before making the next move.{/em}","book.synopsis3":"Money in Check is a story about wealth, ambition, family, and freedom. It is not a manual, but a game played over the course of a lifetime: the story of a young man who learns, move by move, to stop merely surviving and start building a life of his own.","book.cta":"Read and listen to Chapter 1 for free","book.formLabel":"Your email","book.formPlaceholder":"Your email","book.formConsent":"(*) By subscribing, you agree to receive occasional updates about the book.","book.send":"Send","book.sending":"Sending…","author.photoAlt":"Portrait of Óscar Pérez","author.heading":"The Author","author.origin":"VLC, SPAIN. 1973","author.bio":"{em}Óscar Pérez{/em} has spent years moving between boardrooms, stages, and airports around the world as an {em}entrepreneur and technology CEO{/em}. He has organized international conferences in cities including New York, Los Angeles, San Francisco, Tokyo, Toronto, Amsterdam, London, Berlin, and Paris, and worked with companies such as {em}Google, Microsoft, and Adobe{/em}.{br}{br}Along the way, he gained something far more valuable than prestige or connections: {em}a firsthand understanding of how those who truly grasp the rules of money, success, and personal freedom think and make decisions{/em}, and of what separates lasting wealth from its mere appearance.","author.signatureAlt":"Óscar Pérez's signature","author.name":"ÓSCAR PÉREZ","author.role":"Founder & Former CEO of Awwwards","author.polaroid1Alt":"Awwwards trophy","author.caption1":"Awwwards Founder","author.caption1Date":"2006-2025","author.polaroid2Alt":"United Artists theatre marquee announcing the Awwwards Digital Thinkers Conference in Los Angeles","author.caption2":"Digital Thinkers Conference.","author.caption2Date":"2006-2025","author.polaroid3Alt":"Case Studies book editions on a table","author.caption3":"Case Studies / Digital Design","author.caption3Date":"2013","author.polaroid4Alt":"Open design magazines spread on a table","author.caption4":"Brain Food Book","author.caption4Date":"2015","author.polaroid5Alt":"Hot Right Now book cover","author.caption5":"Hot Right Now, Coauthor.","author.caption5Date":"2017-2020","author.polaroid6Alt":"Speaker on stage at an Awwwards conference","author.caption6":"Awwwards Conference.","author.caption6Date":"2006-2025","claim.lineA":"{words}Chess, life, and finance share one truth:{/words}","claim.lineB":"{words}everything changes when you understand the rules.{/words}","footer.navBook":"The Book","footer.navAuthor":"About the Author","footer.navBuy":"Buy Now","footer.helloAria":"Say Hello","footer.copyright":"© 2026 Óscar Pérez. All rights reserved.","footer.creditPre":"Site developed by","footer.followTitle":"Follow the author","lightbox.closeAria":"Close","lightbox.title":"Get Your Copy Of Money In Check","lightbox.subtitle":"The book is available at the following stores:","lightbox.sectionEn":"English version","lightbox.sectionEs":"Versión en español","lightbox.countryUS":"United States","lightbox.countryCanada":"Canada","lightbox.countryAustralia":"Australia","lightbox.countryIndia":"India","lightbox.countryOther":"Other countries","lightbox.countrySpain":"España","lightbox.countryMexico":"Mexico","lightbox.countryOtherEs":"Otros Paises","lightbox.distrib":"Interested in distributing the book?","lightbox.contact":"Get in touch with us here.","language.kicker":"Select your language","language.en":"English","language.es":"Spanish","language.fr":"France","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"Site developed by","book.sendThanks":"You’ll hear from us soon. Thanks!","book.sendError":"Try again","hero.titleLine1":"Money","hero.titleLine2":"in Check"},Q=!0,X="Jaque al dinero",ee={_draft:Q,"meta.title":"Jaque al dinero — Una novela de Óscar Pérez","meta.description":"No es un manual de finanzas. Tampoco es solo una novela. Una historia que te enseña cómo funciona de verdad el dinero. Jaque al dinero, una novela de Óscar Pérez.","meta.ogDescription":"No es un manual de finanzas. Tampoco es solo una novela. Una historia que te enseña cómo funciona de verdad el dinero.",brand:X,"header.edition":"Edición 2026","header.navIntro":"Intro","header.navBook":"El libro","header.navAuthor":"Sobre el autor","header.langLabel":"Es","header.langAria":"Idioma: Español","header.buy":"Comprar","header.price":"$9.99","hero.kicker":"Las reglas invisibles de la riqueza","hero.horseAlt":"Pieza de caballo de ajedrez envuelta en un billete de dólar enrollado","hero.bylineLead":"Una novela de","hero.bylineName":"Óscar Pérez","intro.metaTheme":"Los principios de la riqueza.","intro.metaDate":"10 de febrero de 2026, 11:31 PM","intro.metaPlace":"Boston, MA","intro.manifesto1":"{g}La mayoría de las personas entra en la vida {gif:2} adulta como quien se sienta por primera vez frente a un tablero de ajedrez, sin conocer {gif:3} las reglas, sin reconocer qué piezas importan de verdad y creyendo que trabajar duro bastará para mantenerse {gif:4} en la partida.{/g}","intro.manifesto2":"{g}Pero el dinero tiene su propia lógica, sus propias {gif:5} trampas, sus castigos y sus recompensas. Jaque al Dinero es la historia de una partida aprendida por las malas y una invitación a descubrir que la verdadera libertad financiera no consiste en tener más, sino en vivir con margen y dignidad, y en poder elegir sin miedo la vida que realmente quieres {gif:6} vivir.{/g}","book.metaPages":"Páginas","book.metaCount":"(221)","book.metaLangs":"Inglés, Español y Francés","book.metaTitle":"El libro","book.metaSubline":"5 idiomas. 3 formatos. Una historia.","book.coverAlt":"Portada del libro Jaque al dinero sostenida en la mano","book.slide1Alt":"Doble página interior del libro, primer capítulo","book.slide2Alt":"Doble página interior del libro con un gráfico","book.coverSrc":"img/book-cover-ES.webp","book.slide1Src":"img/book-1-ES.png","book.slide2Src":"img/book-2-ES.png","book.prevAria":"Doble página anterior","book.nextAria":"Doble página siguiente","book.optionsHeader":"Formatos","book.priceHeader":"Precio (Euros)","book.rowPrint":"Tapa blanda","book.pricePrint":"15,29 €","book.rowKindle":"Tapa dura","book.priceKindle":"22,36 €","book.rowPrintAudio":"Edición Kindle","book.pricePrintAudio":"8,54 €","book.rowAudio":"Audiolibro","book.priceAudio":"Próximamente","book.buyLabel":"Comprar en Amazon","book.buyUrl":"https://www.amazon.es/dp/B0H8MN13Z5/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2N2SXWAN99D30&dib=eyJ2IjoiMSJ9.FnEVDIU76LeagM2lUPk6Bg.SBv2jJKoP4iSIZMnWBokWq1Of3x5Ct13vB1V3tfvV4Y&dib_tag=se&keywords=jaque+al+dinero&qid=1783932589&sprefix=jaque+al+dinero%2Caps%2C88&sr=8-1","book.kindleNote":"(*) Gratis con tu suscripción a Kindle Unlimited","book.claim":"No es un libro de finanzas al uso.{br}No es solo una novela.{br}Es una historia que enseña cómo{br}funciona realmente el dinero.","book.synopsis1":"{em.book__em.book__em--name}Oliver Harper{/em} llega a Harvard con una beca, una maleta demasiado grande y la sensación de estar entrando en un mundo que no fue diseñado para él. Viene de una familia donde el dinero siempre fue escaso, los errores financieros se pagaban caros y la esperanza pesaba tanto como las facturas.","book.synopsis2":"Después de aprender a ver el mundo a través de la lógica de un tablero de ajedrez, {em.book__em}Oliver descubre que el dinero, como el ajedrez, tiene reglas invisibles: no gana quien aparenta ser más rico ni quien mueve más rápido, sino quien entiende la posición antes de hacer la siguiente jugada.{/em}","book.synopsis3":"Jaque al Dinero es una historia sobre riqueza, ambición, familia y libertad. No es un manual, sino una partida jugada a lo largo de una vida: la historia de un joven que aprende, movimiento a movimiento, a dejar de sobrevivir y empezar a construir una vida propia.","book.cta":"Lee y escucha gratis el capítulo 1","book.formLabel":"Tu correo electrónico","book.formPlaceholder":"Tu correo electrónico","book.formConsent":"(*) Al suscribirte, aceptas recibir noticias ocasionales sobre el libro.","book.send":"Enviar","book.sending":"Enviando…","author.photoAlt":"Retrato de Óscar Pérez","author.heading":"El autor","author.origin":"VLC, ESPAÑA. 1973","author.bio":"{em}Óscar Pérez{/em} ha pasado años moviéndose entre salas de juntas, escenarios y aeropuertos de todo el mundo como {em}emprendedor y CEO tecnológico{/em}. Ha organizado conferencias internacionales en ciudades como Nueva York, Los Ángeles, San Francisco, Tokio, Toronto, Ámsterdam, Londres, Berlín y París, y ha trabajado con compañías como {em}Google, Microsoft y Adobe{/em}.{br}{br}En ese camino obtuvo algo mucho más valioso que el prestigio o los contactos: {em}una comprensión directa de cómo piensan y toman decisiones quienes entienden de verdad las reglas del dinero, el éxito y la libertad personal{/em}, y de qué separa la riqueza duradera de su simple apariencia.","author.signatureAlt":"Firma de Óscar Pérez","author.name":"ÓSCAR PÉREZ","author.role":"Fundador y ex-CEO de Awwwards","author.polaroid1Alt":"Trofeo Awwwards","author.caption1":"Fundador de Awwwards","author.caption1Date":"2006-2025","author.polaroid2Alt":"Marquesina del teatro United Artists anunciando la Awwwards Digital Thinkers Conference en Los Ángeles","author.caption2":"Digital Thinkers Conference.","author.caption2Date":"2006-2025","author.polaroid3Alt":"Ediciones del libro Case Studies sobre una mesa","author.caption3":"Case Studies / Diseño digital","author.caption3Date":"2013","author.polaroid4Alt":"Revistas de diseño abiertas sobre una mesa","author.caption4":"Brain Food Book","author.caption4Date":"2015","author.polaroid5Alt":"Portada del libro Hot Right Now","author.caption5":"Hot Right Now, coautor.","author.caption5Date":"2017-2020","author.polaroid6Alt":"Ponente en el escenario de una conferencia Awwwards","author.caption6":"Awwwards Conference.","author.caption6Date":"2006-2025","claim.lineA":"{words}El ajedrez, la vida y las finanzas comparten una verdad:{/words}","claim.lineB":"{words}todo cambia cuando entiendes las reglas.{/words}","footer.navBook":"El libro","footer.navAuthor":"Sobre el autor","footer.navBuy":"Comprar ahora","footer.helloAria":"Contacto","footer.copyright":"© 2026 Óscar Pérez. Todos los derechos reservados.","footer.creditPre":"Sitio desarrollado por","footer.followTitle":"Sigue al autor","lightbox.closeAria":"Cerrar","lightbox.title":"Consigue tu ejemplar de Jaque al dinero","lightbox.subtitle":"El libro está disponible en las siguientes tiendas:","lightbox.sectionEn":"Versión en inglés","lightbox.sectionEs":"Versión en español","lightbox.countryUS":"Estados Unidos","lightbox.countryCanada":"Canadá","lightbox.countryAustralia":"Australia","lightbox.countryIndia":"India","lightbox.countryOther":"Otros países","lightbox.countrySpain":"España","lightbox.countryMexico":"México","lightbox.countryOtherEs":"Otros países","lightbox.distrib":"¿Te interesa distribuir el libro?","lightbox.contact":"Ponte en contacto con nosotros aquí.","language.kicker":"Selecciona tu idioma","language.en":"English","language.es":"Spanish","language.fr":"France","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"Sitio desarrollado por","book.sendThanks":"Hasta pronto. ¡Gracias!","book.sendError":"Inténtalo de nuevo","hero.titleLine1":"Jaque","hero.titleLine2":"al dinero"},oe=!0,ne="Money in Check",ae={_draft:oe,"meta.title":"Money in Check — Un roman d’Óscar Pérez","meta.description":"Pas un manuel de finance. Pas seulement un roman. Une histoire qui vous apprend comment l’argent fonctionne vraiment. Money in Check, un roman d’Óscar Pérez.","meta.ogDescription":"Pas un manuel de finance. Pas seulement un roman. Une histoire qui vous apprend comment l’argent fonctionne vraiment.",brand:ne,"header.edition":"Édition 2026","header.navIntro":"Intro","header.navBook":"Le livre","header.navAuthor":"L’auteur","header.langLabel":"Fr","header.langAria":"Langue : Français","header.buy":"Achetez-le !","header.price":"$9.99","hero.kicker":"Les règles invisibles de la richesse","hero.horseAlt":"Pièce de cavalier d’échecs enveloppée dans un billet de dollar enroulé","hero.bylineLead":"Un roman signé","hero.bylineName":"Óscar Pérez","intro.metaTheme":"Les principes de la richesse.","intro.metaDate":"10 février 2026, 23 h 31","intro.metaPlace":"Boston, MA","intro.manifesto1":"{g}La plupart des gens entrent dans la vie {gif:2} adulte comme s’ils s’asseyaient pour la première fois devant un échiquier, sans connaître {gif:3} les règles, sans reconnaître quelles pièces comptent vraiment et en croyant que travailler dur suffira à rester {gif:4} dans la partie.{/g}","intro.manifesto2":"{g}Mais l’argent obéit à sa propre logique, avec ses {gif:5} pièges, ses sanctions et ses récompenses. Money in Check raconte l’histoire d’un jeu appris à la dure et invite à découvrir que la véritable liberté financière ne consiste pas à posséder davantage, mais à vivre avec une marge de manœuvre et de la dignité, tout en étant capable de choisir sans peur la vie que l’on souhaite réellement {gif:6} mener.{/g}","book.metaPages":"Pages","book.metaCount":"(221)","book.metaLangs":"Anglais, espagnol et français","book.metaTitle":"Le livre","book.metaSubline":"5 langues. 3 formats. Une histoire.","book.coverAlt":"Couverture du livre Money in Check tenue à la main","book.slide1Alt":"Double page intérieure du livre, premier chapitre","book.slide2Alt":"Double page intérieure du livre avec un graphique","book.coverSrc":"img/book-cover-FR.webp","book.slide1Src":"img/book-1-FR.png","book.slide2Src":"img/book-2-FR.png","book.prevAria":"Double page précédente","book.nextAria":"Double page suivante","book.optionsHeader":"Formats","book.priceHeader":"Prix (USD)","book.rowPrint":"Livre broché","book.pricePrint":"15,99 $","book.rowKindle":"Édition Kindle","book.priceKindle":"9,99 $","book.rowPrintAudio":"Livre broché + livre audio","book.pricePrintAudio":"19,99 $","book.rowAudio":"Livre audio","book.priceAudio":"9,99 $","book.buyLabel":"Acheter sur Amazon","book.buyUrl":"https://www.amazon.com/dp/B0H9ZSPHP8/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6lt49SVRIrSPNFTeMZ1wKv-dXqhmYL0tGJGo70ep1g2Yy0GZDrTDbDQOEDAVcK-XYd0PVU5jnWbPErcArdFXnAcWUKOyJJ11BMnacO_ZcfpRje7qreXy29pPBK35mChq_szwoGO7dM4UflCc3pFXxm-x1-W-Hs5FgVJ_YpWlzdwy-Hi3aHJsAwhx198abHo1IyUWUZbGfH9QeOOynV2I_tS5ueGmJw9a0x8REIzkvkU.r4d2SLNqyOuFKdpcZUaLZbg5fJGJYwCKBHwTN9h2mHI&qid=1784786580&sr=1-1","book.kindleNote":"(*) Gratuit avec un abonnement Kindle Unlimited","book.claim":"Pas un manuel de finance.{br}Pas seulement un roman.{br}Une histoire qui vous apprend{br}la vraie logique de l’argent.","book.synopsis1":"{em.book__em.book__em--name}Oliver Harper{/em} arrive à Harvard grâce à une bourse, avec une valise trop grande et le sentiment d’entrer dans un monde qui n’a pas été conçu pour lui. Il vient d’une famille où l’argent a toujours manqué, où les erreurs financières se payaient cher et où l’espoir pesait aussi lourd que les factures.","book.synopsis2":"Ayant appris à voir le monde à travers la logique d’un échiquier, {em.book__em}Oliver découvre bientôt que l’argent, comme les échecs, obéit à des règles invisibles : le gagnant n’est pas celui qui paraît le plus riche ni celui qui joue le plus vite, mais celui qui comprend la position avant de faire le prochain mouvement.{/em}","book.synopsis3":"Money in Check est une histoire de richesse, d’ambition, de famille et de liberté. Ce n’est pas un manuel, mais une partie jouée tout au long d’une vie : l’histoire d’un jeune homme qui apprend, coup après coup, à cesser de simplement survivre et à commencer à construire une vie qui lui appartient.","book.cta":"Lisez et écoutez gratuitement le chapitre 1","book.formLabel":"Votre e-mail","book.formPlaceholder":"Votre e-mail","book.formConsent":"(*) En vous abonnant, vous acceptez de recevoir occasionnellement des nouvelles du livre.","book.send":"Envoyer","book.sending":"Envoi…","author.photoAlt":"Portrait d’Óscar Pérez","author.heading":"L’auteur","author.origin":"VLC, ESPAGNE. 1973","author.bio":"{em}Óscar Pérez{/em} a passé des années entre salles de conseil, scènes et aéroports du monde entier en tant qu’{em}entrepreneur et dirigeant dans le secteur technologique{/em}. Il a organisé des conférences internationales dans des villes comme New York, Los Angeles, San Francisco, Tokyo, Toronto, Amsterdam, Londres, Berlin et Paris, et a travaillé aux côtés d’entreprises telles que {em}Google, Microsoft et Adobe{/em}.{br}{br}Au fil de ce parcours, il a acquis quelque chose de bien plus précieux que le prestige ou les relations : {em}une compréhension directe de la manière dont pensent et prennent leurs décisions ceux qui maîtrisent réellement les règles de l’argent, de la réussite et de la liberté personnelle{/em}, ainsi que de ce qui distingue une richesse durable de sa simple apparence.","author.signatureAlt":"Signature d’Óscar Pérez","author.name":"ÓSCAR PÉREZ","author.role":"Fondateur et ancien CEO d’Awwwards","author.polaroid1Alt":"Trophée Awwwards","author.caption1":"Fondateur d’Awwwards","author.caption1Date":"2006-2025","author.polaroid2Alt":"Marquise du théâtre United Artists annonçant la Awwwards Digital Thinkers Conference à Los Angeles","author.caption2":"Digital Thinkers Conference.","author.caption2Date":"2006-2025","author.polaroid3Alt":"Éditions du livre Case Studies sur une table","author.caption3":"Case Studies / Design numérique","author.caption3Date":"2013","author.polaroid4Alt":"Magazines de design ouverts sur une table","author.caption4":"Brain Food Book","author.caption4Date":"2015","author.polaroid5Alt":"Couverture du livre Hot Right Now","author.caption5":"Hot Right Now, coauteur.","author.caption5Date":"2017-2020","author.polaroid6Alt":"Intervenant sur la scène d’une conférence Awwwards","author.caption6":"Conférence Awwwards.","author.caption6Date":"2006-2025","claim.lineA":"{words}Les échecs, la vie et la finance partagent une vérité :{/words}","claim.lineB":"{words}tout change quand on comprend les règles.{/words}","footer.navBook":"Le livre","footer.navAuthor":"L’auteur","footer.navBuy":"Acheter maintenant","footer.helloAria":"Nous contacter","footer.copyright":"© 2026 Óscar Pérez. Tous droits réservés.","footer.creditPre":"Site développé par","footer.followTitle":"Suivre l’auteur","lightbox.closeAria":"Fermer","lightbox.title":"Procurez-vous votre exemplaire de Money in Check","lightbox.subtitle":"Le livre est disponible dans les boutiques suivantes :","lightbox.sectionEn":"Version anglaise","lightbox.sectionEs":"Version espagnole","lightbox.countryUS":"États-Unis","lightbox.countryCanada":"Canada","lightbox.countryAustralia":"Australie","lightbox.countryIndia":"Inde","lightbox.countryOther":"Autres pays","lightbox.countrySpain":"Espagne","lightbox.countryMexico":"Mexique","lightbox.countryOtherEs":"Autres pays","lightbox.distrib":"Vous souhaitez distribuer le livre ?","lightbox.contact":"Contactez-nous ici.","language.kicker":"Choisissez votre langue","language.en":"English","language.es":"Spanish","language.fr":"France","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"Site développé par","book.sendThanks":"À bientôt. Merci !","book.sendError":"Réessayez","hero.titleLine1":"Money","hero.titleLine2":"in Check"},te={"meta.title":"Schach dem Geld — ein Roman von Óscar Pérez","meta.description":"Kein klassisches Finanzbuch. Nicht nur ein Roman. Eine Geschichte, die zeigt, wie Geld wirklich funktioniert.","meta.ogDescription":"Eine Geschichte, die zeigt, wie Geld wirklich funktioniert.","header.edition":"Ausgabe 2026","header.navIntro":"Einleitung","header.navBook":"Das Buch","header.navAuthor":"Über den Autor","header.langLabel":"De","header.langAria":"Sprache: Deutsch","header.buy":"Jetzt kaufen","header.price":"$9.99","hero.kicker":"Die unsichtbaren Regeln des Wohlstands","hero.horseAlt":"Eine Schachfigur, die in einen aufgerollten Dollarschein gewickelt ist","hero.bylineLead":"Ein Roman von","hero.bylineName":"Óscar Pérez","hero.titleLine1":"Schach","hero.titleLine2":"dem Geld","intro.metaTheme":"Die Prinzipien des Wohlstands.","intro.metaDate":"10. Februar 2026, 23:31 Uhr","intro.metaPlace":"Boston, MA","intro.manifesto1":"{g}Die meisten Menschen treten ins Erwachsenenleben, als würden sie sich zum ersten Mal an ein Schachbrett setzen: ohne die Regeln zu kennen, ohne zu erkennen, welche Figuren wirklich zählen, und in dem Glauben, harte Arbeit allein reiche aus, um im Spiel zu bleiben.{/g}","intro.manifesto2":"{g}Doch Geld folgt seiner eigenen Logik, mit seinen eigenen Fallen, seinen Strafen und seinen Belohnungen. Schach dem Geld erzählt die Geschichte einer Partie, deren Regeln auf die harte Tour erlernt werden, und lädt dazu ein, zu entdecken, dass wahre finanzielle Freiheit nicht darin besteht, mehr zu besitzen, sondern mit Spielraum und Würde zu leben und ohne Angst das Leben wählen zu können, das man wirklich führen möchte.{/g}","book.metaTitle":"Das Buch","book.metaSubline":"5 Sprachen. 3 Formate. Eine Geschichte.","book.coverAlt":"Buchcover von Schach dem Geld","book.slide1Alt":"Erste Innenseite des Buchs","book.slide2Alt":"Zweite Innenseite des Buchs","book.coverSrc":"img/book-cover-DE.webp","book.slide1Src":"img/book-1-DE.png","book.slide2Src":"img/book-2-DE.png","book.prevAria":"Vorherige Doppelseite","book.nextAria":"Nächste Doppelseite","book.optionsHeader":"Formate","book.priceHeader":"Preis (USD)","book.rowPrint":"Taschenbuch","book.pricePrint":"15,99 $","book.rowKindle":"Kindle-Ausgabe","book.priceKindle":"9,99 $","book.rowPrintAudio":"Taschenbuch + Hörbuch","book.pricePrintAudio":"19,99 $","book.rowAudio":"Hörbuch","book.priceAudio":"9,99 $","book.buyLabel":"Bei Amazon kaufen","book.buyUrl":"https://www.amazon.com/dp/B0H9ZSPHP8/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6lt49SVRIrSPNFTeMZ1wKv-dXqhmYL0tGJGo70ep1g2Yy0GZDrTDbDQOEDAVcK-XYd0PVU5jnWbPErcArdFXnAcWUKOyJJ11BMnacO_ZcfpRje7qreXy29pPBK35mChq_szwoGO7dM4UflCc3pFXxm-x1-W-Hs5FgVJ_YpWlzdwy-Hi3aHJsAwhx198abHo1IyUWUZbGfH9QeOOynV2I_tS5ueGmJw9a0x8REIzkvkU.r4d2SLNqyOuFKdpcZUaLZbg5fJGJYwCKBHwTN9h2mHI&qid=1784786580&sr=1-1","book.kindleNote":"(*) Kostenlos mit Kindle Unlimited","book.claim":"Kein klassisches Finanzbuch.{br}Nicht nur ein Roman.{br}Eine Geschichte, die zeigt,{br}wie Geld wirklich funktioniert.","book.synopsis1":"{em.book__em.book__em--name}Oliver Harper{/em} kommt mit einem Stipendium nach Harvard, mit einem viel zu großen Koffer und dem Gefühl, eine Welt zu betreten, die nicht für ihn gemacht wurde. Er stammt aus einer Familie, in der Geld immer knapp war, finanzielle Fehler teuer bezahlt wurden und Hoffnung ebenso schwer wog wie die Rechnungen.","book.synopsis2":"Nachdem Oliver gelernt hat, die Welt durch die Logik eines Schachbretts zu betrachten, {em.book__em}erkennt er bald, dass Geld, genau wie Schach, unsichtbaren Regeln folgt: Es gewinnt nicht derjenige, der am reichsten wirkt oder am schnellsten zieht, sondern derjenige, der die Stellung versteht, bevor er den nächsten Zug macht.{/em}","book.synopsis3":"Schach dem Geld ist eine Geschichte über Reichtum, Ehrgeiz, Familie und Freiheit. Kein Handbuch, sondern eine Partie, die sich über ein ganzes Leben erstreckt: die Geschichte eines jungen Mannes, der Zug für Zug lernt, nicht länger nur zu überleben, sondern sich ein eigenes Leben aufzubauen.","book.cta":"Kapitel 1 kostenlos lesen und anhören","book.formLabel":"Ihre E-Mail-Adresse","book.formPlaceholder":"Ihre E-Mail-Adresse","book.send":"Senden","book.formConsent":"(*) Mit der Anmeldung erhalten Sie gelegentlich Neuigkeiten zum Buch.","book.sending":"Wird gesendet…","book.sendThanks":"Wir melden uns bald. Danke!","book.sendError":"Bitte erneut versuchen","author.photoAlt":"Porträt von Óscar Pérez","author.heading":"Der Autor","author.origin":"VALENCIA, SPANIEN · 1973","author.bio":"{em}Óscar Pérez{/em} hat viele Jahre zwischen Vorstandsräumen, Bühnen und Flughäfen auf der ganzen Welt verbracht – als {em}Unternehmer und CEO in der Technologiebranche{/em}. Er hat internationale Konferenzen in Städten wie New York, Los Angeles, San Francisco, Tokio, Toronto, Amsterdam, London, Berlin und Paris organisiert und mit Unternehmen wie {em}Google, Microsoft und Adobe{/em} zusammengearbeitet.{br}{br}Auf diesem Weg gewann er etwas weitaus Wertvolleres als Prestige oder Kontakte: {em}ein unmittelbares Verständnis dafür, wie jene denken und Entscheidungen treffen, die die Regeln von Geld, Erfolg und persönlicher Freiheit wirklich verstehen{/em}, und was nachhaltigen Reichtum von seinem bloßen Anschein unterscheidet.","author.signatureAlt":"Unterschrift von Óscar Pérez","author.name":"ÓSCAR PÉREZ","author.role":"Gründer und ehemaliger CEO von Awwwards","claim.lineA":"{words}Schach, Leben und Finanzen teilen eine Wahrheit:{/words}","claim.lineB":"{words}Alles verändert sich, wenn man die Regeln versteht.{/words}","footer.navBook":"Das Buch","footer.navAuthor":"Über den Autor","footer.navBuy":"Jetzt kaufen","footer.helloAria":"Kontakt","footer.copyright":"© 2026 Óscar Pérez. Alle Rechte vorbehalten.","footer.creditPre":"Website entwickelt von","footer.followTitle":"Dem Autor folgen","language.kicker":"Wählen Sie Ihre Sprache","language.en":"English","language.es":"Español","language.fr":"Français","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"Website entwickelt von"},re={"meta.title":"Money in Check — Óscar Pérez का उपन्यास","meta.description":"यह कोई पारंपरिक वित्तीय पुस्तक नहीं है। यह एक ऐसी कहानी है जो आपको दिखाती है कि धन वास्तव में कैसे काम करता है।","meta.ogDescription":"एक ऐसी कहानी जो आपको दिखाती है कि धन वास्तव में कैसे काम करता है।","header.edition":"2026 संस्करण","header.navIntro":"परिचय","header.navBook":"पुस्तक","header.navAuthor":"लेखक के बारे में","header.langLabel":"हि","header.langAria":"भाषा: हिन्दी","header.buy":"अभी खरीदें","header.price":"$9.99","hero.kicker":"समृद्धि के अदृश्य नियम","hero.horseAlt":"लिपटे हुए डॉलर नोट वाला शतरंज का घोड़ा","hero.bylineLead":"एक उपन्यास, लेखक","hero.bylineName":"Óscar Pérez","hero.titleLine1":"Money","hero.titleLine2":"in Check","intro.metaTheme":"समृद्धि के सिद्धांत।","intro.metaDate":"10 फ़रवरी 2026, 11:31 pm","intro.metaPlace":"बोस्टन, MA","intro.manifesto1":"{g}अधिकांश लोग वयस्क जीवन में ऐसे प्रवेश करते हैं, मानो वे पहली बार शतरंज की बिसात के सामने बैठे हों—नियमों को जाने बिना, यह पहचाने बिना कि कौन-सी गोटियाँ वास्तव में मायने रखती हैं, और यह मानते हुए कि केवल कड़ी मेहनत ही खेल में बने रहने के लिए पर्याप्त होगी।{/g}","intro.manifesto2":"{g}लेकिन धन की अपनी तर्क-व्यवस्था होती है, अपने जाल, अपनी सज़ाएँ और अपने पुरस्कार। Money in Check उस खेल की कहानी है जिसे कठिन अनुभवों से सीखा गया, और यह खोजने का निमंत्रण भी कि वास्तविक आर्थिक स्वतंत्रता का अर्थ अधिक धन होना नहीं, बल्कि गरिमा और पर्याप्त गुंजाइश के साथ जीना और बिना भय के वह जीवन चुन पाना है जिसे आप सचमुच जीना चाहते हैं।{/g}","book.metaTitle":"पुस्तक","book.metaSubline":"5 भाषाएँ। 3 प्रारूप। एक कहानी।","book.coverAlt":"Money in Check का कवर","book.slide1Alt":"पुस्तक का पहला आंतरिक पृष्ठ","book.slide2Alt":"पुस्तक का दूसरा आंतरिक पृष्ठ","book.coverSrc":"img/book-cover-IN.webp","book.slide1Src":"img/book-1-IN.png","book.slide2Src":"img/book-2-IN.png","book.prevAria":"पिछला स्प्रेड","book.nextAria":"अगला स्प्रेड","book.optionsHeader":"प्रारूप","book.priceHeader":"मूल्य (USD)","book.rowPrint":"पेपरबैक","book.pricePrint":"$15.99","book.rowKindle":"किंडल संस्करण","book.priceKindle":"$9.99","book.rowPrintAudio":"पेपरबैक + ऑडियोबुक","book.pricePrintAudio":"$19.99","book.rowAudio":"ऑडियोबुक","book.priceAudio":"$9.99","book.buyLabel":"Amazon पर खरीदें","book.buyUrl":"https://www.amazon.com/dp/B0H9ZSPHP8/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6lt49SVRIrSPNFTeMZ1wKv-dXqhmYL0tGJGo70ep1g2Yy0GZDrTDbDQOEDAVcK-XYd0PVU5jnWbPErcArdFXnAcWUKOyJJ11BMnacO_ZcfpRje7qreXy29pPBK35mChq_szwoGO7dM4UflCc3pFXxm-x1-W-Hs5FgVJ_YpWlzdwy-Hi3aHJsAwhx198abHo1IyUWUZbGfH9QeOOynV2I_tS5ueGmJw9a0x8REIzkvkU.r4d2SLNqyOuFKdpcZUaLZbg5fJGJYwCKBHwTN9h2mHI&qid=1784786580&sr=1-1","book.kindleNote":"(*) Kindle Unlimited सदस्यता के साथ निःशुल्क","book.claim":"यह कोई पारंपरिक वित्तीय पुस्तक नहीं है।{br}यह केवल एक उपन्यास भी नहीं है।{br}यह एक ऐसी कहानी है जो आपको दिखाती है{br}कि धन वास्तव में कैसे काम करता है।","book.synopsis1":"{em.book__em.book__em--name}ओलिवर हार्पर{/em} छात्रवृत्ति के सहारे हार्वर्ड पहुँचता है, साथ में एक जरूरत से ज़्यादा बड़ा सूटकेस और यह एहसास कि वह ऐसी दुनिया में प्रवेश कर रहा है जो उसके लिए नहीं बनाई गई थी। वह ऐसे परिवार से आता है जहाँ धन हमेशा कम रहा, आर्थिक गलतियों की बड़ी कीमत चुकानी पड़ी और आशा का बोझ बिलों जितना ही भारी था।","book.synopsis2":"शतरंज की बिसात के तर्क से दुनिया को देखना सीखने के बाद, {em.book__em}ओलिवर जल्द ही समझ जाता है कि धन भी शतरंज की तरह अदृश्य नियमों से चलता है: जीत उस व्यक्ति की नहीं होती जो सबसे अमीर दिखाई देता है या सबसे तेज़ चाल चलता है, बल्कि उसकी होती है जो अगली चाल चलने से पहले स्थिति को समझता है।{/em}","book.synopsis3":"Money in Check धन, महत्वाकांक्षा, परिवार और स्वतंत्रता की कहानी है। यह कोई मार्गदर्शिका नहीं, बल्कि जीवन भर खेली जाने वाली एक बाज़ी है: एक ऐसे युवा की कहानी जो चाल-दर-चाल केवल जीवित रहना छोड़कर अपना स्वयं का जीवन बनाना सीखता है।","book.cta":"अध्याय 1 निःशुल्क पढ़ें और सुनें","book.formLabel":"आपका ईमेल","book.formPlaceholder":"आपका ईमेल","book.send":"भेजें","book.formConsent":"(*) सदस्यता लेने पर आप पुस्तक से संबंधित कभी-कभार अपडेट प्राप्त करने के लिए सहमत होते हैं।","book.sending":"भेजा जा रहा है…","book.sendThanks":"जल्द मिलेंगे। धन्यवाद!","book.sendError":"फिर से प्रयास करें","author.photoAlt":"Óscar Pérez का चित्र","author.heading":"लेखक","author.origin":"वेलेंसिया, स्पेन · 1973","author.bio":"{em}Óscar Pérez{/em} ने {em}एक उद्यमी और प्रौद्योगिकी क्षेत्र के सीईओ{/em} के रूप में दुनिया भर के बोर्डरूम, मंचों और हवाई अड्डों के बीच कई वर्ष बिताए हैं। उन्होंने न्यूयॉर्क, लॉस एंजिलिस, सैन फ्रांसिस्को, टोक्यो, टोरंटो, एम्स्टर्डम, लंदन, बर्लिन और पेरिस जैसे शहरों में अंतरराष्ट्रीय सम्मेलनों का आयोजन किया है और {em}Google, Microsoft तथा Adobe{/em} जैसी कंपनियों के साथ काम किया है।{br}{br}इस यात्रा में उन्हें प्रतिष्ठा या संपर्कों से कहीं अधिक मूल्यवान चीज़ मिली: {em}यह प्रत्यक्ष समझ कि धन, सफलता और व्यक्तिगत स्वतंत्रता के नियमों को वास्तव में समझने वाले लोग कैसे सोचते हैं और निर्णय लेते हैं{/em}, तथा स्थायी संपत्ति को उसके केवल बाहरी दिखावे से क्या अलग करता है।","author.signatureAlt":"Óscar Pérez के हस्ताक्षर","author.name":"ÓSCAR PÉREZ","author.role":"Awwwards के संस्थापक और पूर्व सीईओ","claim.lineA":"{words}शतरंज, जीवन और धन एक सत्य साझा करते हैं:{/words}","claim.lineB":"{words}जब आप नियम समझते हैं, तो सब कुछ बदल जाता है।{/words}","footer.navBook":"पुस्तक","footer.navAuthor":"लेखक के बारे में","footer.navBuy":"अभी खरीदें","footer.helloAria":"संपर्क करें","footer.copyright":"मानव शर्मा द्वारा हिंदी में अनुवादित","footer.copyrightUrl":"https://www.fiverr.com/s/2KXWWWV","footer.creditPre":"वेबसाइट","footer.followTitle":"लेखक को फ़ॉलो करें","language.kicker":"अपनी भाषा चुनें","language.en":"English","language.es":"Español","language.fr":"Français","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"वेबसाइट cloudstudio द्वारा विकसित"},C={en:Object.assign(Y,window.__DS_COPY||{}),es:ee,fr:ae,de:te,hi:re},q=Object.keys(C);let z="en";const ie={2:"walk",3:"mountain",4:"boat",5:"hat",6:"bike"};function I(o){const e=ie[o];return`<video class="${e?`intro__doodle intro__doodle--${e}`:"intro__doodle"}" src="video/doodle-${o}.mp4" autoplay muted loop playsinline aria-hidden="true"></video>`}function se(o){return z!=="zh"?o.split(/\s+/):o.match(/[\u3400-\u4DBF\u4E00-\u9FFF\u3000-\u303F\uFF00-\uFFEF]|[^\s\u3400-\u4DBF\u4E00-\u9FFF\u3000-\u303F\uFF00-\uFFEF]+/g)||[]}function P(o,e){return`<span class="${e?`word ${e}`:"word"}">${o}</span>`}function L(o){const e=[];for(const n of o.split(/(\{gif:\d+\}|\{w\.[\w.\-]+\|[^}]*\})/g)){if(!n)continue;let t;if(t=/^\{gif:(\d+)\}$/.exec(n))e.push(I(Number(t[1])));else if(t=/^\{w\.([\w.\-]+)\|([^}]*)\}$/.exec(n))e.push(P(t[2],t[1].split(".").filter(Boolean).join(" ")));else for(const a of se(n.trim()))a&&e.push(P(a))}return e.join(" ")}function le(o){const e=["intro__group"];if(o){const n=o.split(",").map(t=>t.trim());n.includes("dim")&&e.push("is-dim"),n.includes("em")&&e.push("is-em")}return e.join(" ")}function ce(o,e){let n=o.replace(/\{\{\s*([\w.]+)\s*\}\}/g,(t,a)=>Object.prototype.hasOwnProperty.call(e,a)?e[a]:(console.warn(`[i18n] missing key: ${a}`),""));return n=n.replace(/\{g(?::([a-z,]+))?\}([\s\S]*?)\{\/g\}/g,(t,a,r)=>`<span class="${le(a)}">${L(r)}</span>`),n=n.replace(/\{words\}([\s\S]*?)\{\/words\}/g,(t,a)=>L(a)),n=n.replace(/\{gif:(\d+)\}/g,(t,a)=>I(Number(a))),n=n.replace(/\{w\.([\w.\-]+)\|([^}]*)\}/g,(t,a,r)=>P(r,a.split(".").filter(Boolean).join(" "))),n=n.replace(/\{em((?:\.[\w\-]+)+)\}/g,(t,a)=>`<em class="${a.split(".").filter(Boolean).join(" ")}">`),n=n.replace(/\{em\}/g,"<em>"),n=n.replace(/\{\/em\}/g,"</em>"),n=n.replace(/\{br\}/g,"<br>"),n}function de(){let e=window.location.pathname;e.startsWith("/")&&(e=e.slice(1)),e=e.replace(/^\/+/,"");const n=e.split("/")[0];return z=q.includes(n)?n:"en",z}const he={en:"en-US",es:"es-ES",fr:"fr-FR",de:"de-DE",hi:"hi-IN"};function ue(o){try{const e=he[o]||"en-US",n=new Date,t=new Intl.DateTimeFormat(e,{year:"numeric",month:"long",day:"numeric"}).format(n),a=new Intl.DateTimeFormat(e,{hour:"numeric",minute:"2-digit"}).format(n);return`${t}, ${a}`}catch{return null}}function pe(o){const n={...C.en,...C[o]||{}};for(const a of q)n[`lang.${a}Href`]=a==="en"?"/":"/".endsWith("/")?`/${a}/`:`//${a}/`,n[`lang.${a}Active`]=o===a?"language__item--active":"language__item--ghost";const t=ue(o);return t&&(n["intro.metaDate"]=t),n}function me(o,e){document.documentElement.lang=o,e["meta.title"]&&(document.title=e["meta.title"]);const n=e["meta.ogDescription"]??e["meta.description"],t=(a,r)=>{if(r==null)return;const i=document.querySelector(a);i&&i.setAttribute("content",r)};t('meta[name="description"]',e["meta.description"]),t('meta[property="og:title"]',e["meta.title"]),t('meta[property="og:description"]',n),t('meta[name="twitter:title"]',e["meta.title"]),t('meta[name="twitter:description"]',n)}const ge=[{text:"e4",x:210,y:150,atf:!0},{text:"e5",x:391,y:228,atf:!0},{text:"Nf3",x:648,y:334,atf:!0},{text:"Nc6",x:1022,y:289,atf:!0},{text:"Bb5",x:1215,y:481,atf:!0},{text:"Nf6",x:1484,y:441,atf:!0},{text:"O-O",x:495,y:556,atf:!0},{text:"d4",x:639,y:715,atf:!0},{text:"Nd6",x:1098,y:727,atf:!0},{text:"Bxc6",x:478,y:891,atf:!0},{text:"dxc6",x:1254,y:935,atf:!0},{text:"dxe5",x:235,y:1030,atf:!0},{text:"hNf5",x:667,y:1091,atf:!0},{text:"Qxd8",x:1628,y:1069,atf:!0},{text:"Kxd8",x:989,y:1231},{text:"Nc3",x:600,y:1439},{text:"Ke8",x:1001,y:1686},{text:"e4",x:126,y:1686},{text:"e5",x:283,y:1861},{text:"Nf3",x:992,y:1957},{text:"Nc6",x:732,y:2080},{text:"Bb5",x:1607,y:1643},{text:"Nf6",x:1505,y:2205},{text:"O-O",x:495,y:2151},{text:"d4",x:800,y:2349},{text:"Nd6",x:1094,y:2192},{text:"Bxc6",x:280,y:2349},{text:"dxc6",x:1105,y:2599},{text:"dxe5",x:119,y:2633},{text:"hNf5",x:802,y:2739},{text:"Qxd8",x:1628,y:2664},{text:"Kxd8",x:1017,y:2865},{text:"Nc3",x:628,y:3e3},{text:"Ke8",x:1233,y:3161},{text:"e4",x:83,y:3251},{text:"e5",x:283,y:3361},{text:"Nf6",x:1610,y:3527},{text:"dxc6",x:1022,y:3343},{text:"Qxd8",x:673,y:3448},{text:"Nc3",x:1112,y:3543},{text:"dxc6",x:237,y:5051},{text:"Bg3",x:1258,y:5174},{text:"Qxa2",x:672,y:5266},{text:"e4",x:83,y:5384},{text:"e5",x:283,y:5494},{text:"dxc6",x:1017,y:5476},{text:"Qxd8",x:673,y:5581},{text:"Nf6",x:1612,y:5589},{text:"Nc3",x:1461,y:5971},{text:"dxc6",x:376,y:6852},{text:"Bg3",x:1393,y:6975},{text:"Qxa2",x:806,y:7067},{text:"e4",x:222,y:7185},{text:"Qxd8",x:1215,y:7250},{text:"dxc6",x:1452,y:7523},{text:"Bg3",x:64,y:7715},{text:"Qxf2",x:1468,y:8067},{text:"Nxd3",x:130,y:8104},{text:"Qf4",x:1403,y:8566},{text:"e7",x:410,y:8611},{text:"Be2",x:932,y:8832}],be=["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d3","d6","O-O","a6","a4","h6","Re1","O-O","h3","a5","Nbd2","Be6","Bb5","Na7","d4","ed4","cd4","Bb4","Bd3","d5","e5","Nd7","Re2","c5","Nf1","cd4","Bc2","Nc5","Nd4","Nc6","Ng3","Nd4","Qd4","f5","ef6","Qf6","Be3","Qd4","Bd4","Bd7","Rd1","Rae8","Re8","Be8","b3","b5","ab5","Bb5","Be3","Bc6","Nf5","Ne4","Nd4"],fe=ge.map((o,e)=>({...o,text:be[e]??o.text})),D=["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d3","d6","O-O","a6","a4","h6","Re1","O-O","h3","a5","Nbd2","Be6","Bb5","Na7","d4","ed4","cd4","Bb4","Bd3","d5","e5"],_e=[[-9.3,-16.6],[-11.7,-2.2],[-8,15.7],[-15.5,-9],[-13,8.5],[-5.5,-20]],ke=[[6.4,-13.7],[15.2,1.2],[9,14.5],[14.5,-8.5],[5.5,18],[16.5,-15.5]],T=[12.41,-4.96,8.16,-6.5,5,-8.16,3.5],v=[1,.85,.58,.48,.23],ye=170,we=2600,ve=4e3,xe=800,x=.665,A=.7;function Ae(){var N;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return Promise.resolve();const o=document.createElement("div");o.id="loader",o.setAttribute("aria-hidden","true"),o.innerHTML=`
    <div class="loader__grid"></div>
    <div class="loader__stage">
      <video class="loader__video" src="video/loading.mp4" autoplay muted loop playsinline></video>
    </div>`,document.body.appendChild(o);const e=o.querySelector(".loader__video");e.muted=!0,e.playsInline=!0,(N=e.play)==null||N.call(e).catch(()=>{});const n=o.querySelector(".loader__stage");document.documentElement.style.overflow="hidden";const t=o.querySelector(".loader__grid");let a=x,r=A;function i(){const l=getComputedStyle(document.documentElement),f=parseFloat(l.getPropertyValue("--g-px"))||200,_=parseFloat(l.getPropertyValue("--g-py"))||f,p=parseFloat(l.getPropertyValue("--g-ox"))||0,d=parseFloat(l.getPropertyValue("--g-oy"))||0,g=window.innerWidth/2,k=window.innerHeight/2;t.style.backgroundSize=`${a*f}px ${r*_}px`,t.style.backgroundPosition=`${g+a*(p-g)}px ${k+r*(d-k)}px`}i();const s=()=>i();window.addEventListener("resize",s);let b=0,c=0,m=0;const h=[];function u(){const l=b%2===0,f=l?_e:ke,[_,p]=f[(l?c++:m++)%f.length],d=document.createElement("span");if(d.className="loader__move",d.textContent=D[b%D.length],d.style.setProperty("--mx",`${_}rem`),d.style.setProperty("--my",`${p}rem`),d.style.setProperty("--mr",`${T[b%T.length]}deg`),n.appendChild(d),b++,h.unshift(d),h.forEach((g,k)=>{k<v.length&&g.style.setProperty("--mo",v[k])}),h.length>v.length){const g=h.pop();g.classList.add("is-out"),setTimeout(()=>g.remove(),350)}requestAnimationFrame(()=>d.classList.add("is-in"))}let y=0,w=!1;const F=()=>{w||(w=!0,u(),y=setInterval(u,ye))};try{document.fonts.load('3.5rem "Liu Jian Mao Cao"').then(F)}catch{}setTimeout(F,400);let B;const G=new Promise(l=>B=l),R=new Promise(l=>setTimeout(l,we)),j=new Promise(l=>{e.readyState>=3?l():e.addEventListener("canplay",()=>l(),{once:!0})}),K=new Promise(l=>setTimeout(l,ve));Promise.race([Promise.all([R,j]),K]).then($);function $(){clearInterval(y),o.classList.add("is-leaving");const l=performance.now(),f=p=>p<.5?4*p*p*p:1-(-2*p+2)**3/2;function _(p){const d=Math.min(1,(p-l)/xe),g=f(d);if(a=x+(1-x)*g,r=A+(1-A)*g,i(),d<1){requestAnimationFrame(_);return}document.documentElement.style.overflow="",B(),o.classList.add("is-done"),setTimeout(()=>{window.removeEventListener("resize",s),o.remove()},450)}requestAnimationFrame(_)}return G}const Ce=`<!-- header — fixed top bar (excluded from flow slices) -->
<header id="header" class="section section--header">
  <a class="header__logo" href="#hero">{{brand}}</a>
  <span class="header__edition">{{header.edition}}</span>

  <div class="header__menu">
    <nav class="header__nav" aria-label="Main">
      <a class="header__link header__link--intro header__link--active" href="#intro">{{header.navIntro}}</a>
      <a class="header__link header__link--book" href="#book">{{header.navBook}}</a>
      <a class="header__link header__link--author" href="#author">{{header.navAuthor}}</a>
    </nav>

    <button class="header__lang" type="button" aria-label="{{header.langAria}}">
      <span class="header__lang-label">{{header.langLabel}}</span>
      <svg class="header__lang-caret" viewBox="0 0 8 7" aria-hidden="true" focusable="false">
        <path d="M1 1.5 4 5.5 7 1.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
      </svg>
    </button>
  </div>

  <div class="header__actions">
    <a class="header__buy" href="{{book.buyUrl}}" target="_blank" rel="noopener">{{header.buy}}</a>
    <span class="header__price">{{header.price}}</span>
  </div>
</header>
`,ze=`<!-- hero — Figma slice y 0–1150 -->
<section id="hero" class="section section--hero">
  <p class="hero__kicker">{{hero.kicker}}</p>

  <h1 class="hero__title">
    <span class="hero__title-line hero__title-line--1">{{hero.titleLine1}}</span>
    <span class="hero__title-line hero__title-line--2">{{hero.titleLine2}}</span>
  </h1>

  <img
    class="hero__horse"
    src="img/horse.webp"
    alt="{{hero.horseAlt}}"
    fetchpriority="high"
    decoding="async"
  />

  <video
    class="hero__smoker"
    src="video/doodle-1.mp4"
    autoplay
    muted
    loop
    playsinline
    aria-hidden="true"
  ></video>

  <p class="hero__byline">
    <em class="hero__byline-lead">{{hero.bylineLead}}</em>
    <span class="hero__byline-name">{{hero.bylineName}}</span>
  </p>

  <div class="hero__scroll" aria-hidden="true">
    <span class="hero__scroll-word">
      <span class="hero__scroll-letter">S</span>
      <span class="hero__scroll-letter">C</span>
      <span class="hero__scroll-letter">R</span>
      <span class="hero__scroll-letter">O</span>
      <span class="hero__scroll-letter">l</span>
      <span class="hero__scroll-letter">l</span>
    </span>
    <!-- lottie-web (light) mounts the animated mouse doodle here — anim/hero.js -->
    <div class="hero__scroll-mouse"></div>
  </div>

  <div class="hero__compass" aria-hidden="true">
    <span class="hero__compass-letter hero__compass-letter--n">N</span>
    <span class="hero__compass-line"></span>
    <span class="hero__compass-letter hero__compass-letter--s">S</span>
  </div>
</section>
`,Pe=`<!-- intro — magazine meta line + manifesto. Figma slice y1150–3593 (offset 1150, height 244.3rem) -->
<section id="intro" class="section section--intro">
  <p class="intro__meta">
    <span class="intro__meta-item intro__meta-item--brand">{{brand}}.</span>
    <span class="intro__meta-item intro__meta-item--theme">{{intro.metaTheme}}</span>
    <time class="intro__meta-item intro__meta-item--date" datetime="2026-02-10T23:31">{{intro.metaDate}}</time>
    <span class="intro__meta-item intro__meta-item--place">{{intro.metaPlace}}</span>
  </p>

  <!-- Manifesto copy + inline structure live in the locale files as the
       intro.manifesto1 / .manifesto2 token strings (groups, .word wrapping,
       {gif:N} doodles, the wide-after word). See src/js/i18n.js for the syntax.
       The reveal scrub still targets .word / img.intro__doodle in DOM order. -->
  <div class="intro__manifesto">
    <p class="intro__paragraph">{{intro.manifesto1}}</p>

    <p class="intro__paragraph">{{intro.manifesto2}}</p>
  </div>
</section>
`,Se=`<!-- book — cover, interior slider, pricing, claim, synopsis, email form -->
<section id="book" class="section section--book">
  <p class="book__meta">
    <span class="book__meta-title">{{book.metaTitle}}</span>
    <span class="book__meta-subline">{{book.metaSubline}}</span>
  </p>

  <!-- slider: ALL images are slides, cover included (client, 8 jul). At rest
       the track reproduces the design's static geometry — cover at its Figma
       spot, interior-1 in full, interior-3 peeking 9.8rem — and the arrows
       move the whole row so every slide can be brought fully into view.
       The wrapper clips overflow so the track never creates horizontal scroll. -->
  <div class="book__slider">
    <div class="book__track">
      <img
        class="book__slide book__slide--cover"
        src="{{book.coverSrc}}"
        alt="{{book.coverAlt}}"
        loading="lazy"
        decoding="async"
      />
      <img
        class="book__slide book__slide--1"
        src="{{book.slide1Src}}"
        alt="{{book.slide1Alt}}"
        loading="lazy"
        decoding="async"
      />
      <img
        class="book__slide book__slide--2"
        src="{{book.slide2Src}}"
        alt="{{book.slide2Alt}}"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>

  <div class="book__arrows">
    <button class="book__arrow book__arrow--prev" type="button" aria-label="{{book.prevAria}}">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M19 12H5m0 0l6-6m-6 6l6 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button class="book__arrow book__arrow--next" type="button" aria-label="{{book.nextAria}}">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12h14m0 0l-6-6m6 6l-6 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>

  <div class="book__pricing">
    <span class="book__pricing-header book__pricing-header--label">{{book.optionsHeader}}</span>
    <span class="book__pricing-header book__pricing-header--price">{{book.priceHeader}}</span>

    <div class="book__row book__row--1">
      <span class="book__row-label">{{book.rowPrint}}</span>
      <span class="book__row-price">{{book.pricePrint}}</span>
    </div>
    <div class="book__row book__row--2">
      <span class="book__row-label">{{book.rowKindle}}</span>
      <span class="book__row-price">{{book.priceKindle}}</span>
    </div>
    <div class="book__row book__row--3">
      <span class="book__row-label">{{book.rowPrintAudio}}</span>
      <span class="book__row-price">{{book.pricePrintAudio}}</span>
    </div>
    <div class="book__row book__row--4">
      <span class="book__row-label">{{book.rowAudio}}</span>
      <span class="book__row-price">{{book.priceAudio}}</span>
    </div>

    <span class="book__sep book__sep--1" aria-hidden="true"></span>
    <span class="book__sep book__sep--2" aria-hidden="true"></span>
    <span class="book__sep book__sep--3" aria-hidden="true"></span>

    <button class="book__buy" type="button">
      <span class="book__buy-label">{{book.buyLabel}}</span>
    </button>
  </div>

  <!-- Kindle note lives OUTSIDE the pricing box (client 14 jul: "va fuera de la
       caja, como en el diseño original"); the box's bottom margin is trimmed. -->
  <p class="book__kindle-note">{{book.kindleNote}}</p>

  <!-- This right-hand editorial column must stay in normal flow: translated
       claims can gain lines, and every following block needs to move with it. -->
  <div class="book__content">
    <!-- claim: line breaks are {br} tokens inside book.claim (locale files) -->
    <h2 class="book__claim">{{book.claim}}</h2>

    <!-- synopsis: fixed <p> slots; emphasis ({em.book__em…}) travels with the text -->
    <div class="book__synopsis">
      <p>{{book.synopsis1}}</p>
      <p>{{book.synopsis2}}</p>
      <p>{{book.synopsis3}}</p>
    </div>

    <!-- resolved vs hi-res ref: CTA is Regular (400) upright @2.3rem, underlined — no per-word italics
         (measured: ref text width 325px = Figma box, glyph band 25px; matches 400@23px exactly) -->
    <h3 class="book__cta">{{book.cta}}</h3>

    <form class="book__form" action="/api/newsletter.php" method="post">
      <input type="hidden" name="source" value="Money in Check newsletter" />
      <input class="book__honeypot" type="text" name="_honey" tabindex="-1" autocomplete="off" />
      <label class="book__form-label" for="book-email">{{book.formLabel}}</label>
      <input
        class="book__input"
        id="book-email"
        type="email"
        name="email"
        placeholder="{{book.formPlaceholder}}"
        autocomplete="email"
        aria-describedby="book-consent book-form-status"
        required
      />
      <span class="book__progress" aria-hidden="true"></span>
      <span class="book__email-copy book__email-copy--base" aria-hidden="true"></span>
      <span class="book__email-copy book__email-copy--filled" aria-hidden="true"></span>
      <button
        class="book__send"
        type="submit"
        data-sending="{{book.sending}}"
        data-thanks="{{book.sendThanks}}"
        data-error="{{book.sendError}}"
      >
        <span class="book__send-label">{{book.send}}</span>
      </button>
      <span class="book__spinner book__spinner--base" aria-hidden="true"></span>
      <span class="book__spinner-reveal" aria-hidden="true">
        <span class="book__spinner book__spinner--filled"></span>
      </span>
      <span class="book__status" id="book-form-status" role="status" aria-live="polite"></span>
    </form>
    <p class="book__consent" id="book-consent">{{book.formConsent}}</p>
  </div>
</section>
`,Ee=`<!-- author — About the Author section (Figma slice 5497–7255) -->
<section id="author" class="section section--author" aria-labelledby="author-heading">
  <img class="author__photo" src="img/Oscar-photo.webp" alt="{{author.photoAlt}}" loading="lazy" decoding="async" />
  <h2 id="author-heading" class="author__heading">{{author.heading}}</h2>
  <p class="author__origin">{{author.origin}}</p>

  <!-- Bio copy lives in the locale files (author.bio). Emphasis is {em}…{/em}
       and the Figma line wraps are {br} tokens — both travel with the text
       (the EN draft keeps the exact reference wraps; ES reflows naturally).

       Bio + signature cluster share ONE flow column (the Figma text box:
       X 343, W 1044, top 5726) so the signature hangs off the END of the
       bio instead of a fixed Y. The Figma draft ran 17 lines; every shipped
       locale is shorter (EN/ES 12, FR/DE 14, HI 10), and with a pinned Y
       those missing lines opened a hole above the signature. -->
  <div class="author__col">
    <p class="author__bio">{{author.bio}}</p>

    <img class="author__signature" src="img/signature.webp" alt="{{author.signatureAlt}}" loading="lazy" decoding="async" />
    <p class="author__name">{{author.name}}</p>
    <p class="author__role">{{author.role}}</p>
  </div>

  <!-- Polaroids: ghosted (grayscale + low opacity) per reference, except the
       marquee photo which is full color in the ref. Rotations are subtle.
       WAVE 3: wrapped in .author__polaroids (display:contents on desktop —
       layout-neutral; becomes a scroll-snap strip ≤1080px). tabindex makes
       each figure focusable so the wave-2 :focus-within color swap doubles
       as the touch/tap + keyboard equivalent of the hover. -->
  <div class="author__polaroids">
  <figure class="author__polaroid author__polaroid--1" tabindex="0">
    <img src="img/author-images-1.webp" alt="{{author.polaroid1Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption1}}<span class="author__caption-date">{{author.caption1Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--2" tabindex="0">
    <img src="img/author-images-2.webp" alt="{{author.polaroid2Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption2}}<span class="author__caption-date">{{author.caption2Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--3" tabindex="0">
    <img src="img/author-images-3.webp" alt="{{author.polaroid3Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption3}}<span class="author__caption-date">{{author.caption3Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--4" tabindex="0">
    <img src="img/author-images-4.webp" alt="{{author.polaroid4Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption4}}<span class="author__caption-date">{{author.caption4Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--5" tabindex="0">
    <img src="img/author-images-5.webp" alt="{{author.polaroid5Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption5}}<span class="author__caption-date">{{author.caption5Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--6" tabindex="0">
    <img src="img/author-images-6.webp" alt="{{author.polaroid6Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption6}}<span class="author__caption-date">{{author.caption6Date}}</span></figcaption>
  </figure>
  </div>
</section>
`,Fe=`<!-- claim: two giant serif statement lines (Figma 7255–8210) -->
<section id="claim" class="section section--claim" aria-labelledby="claim-title">
  <h2 id="claim-title" class="claim__line claim__line--a">{{claim.lineA}}</h2>
  <!-- Line B: outlined glyphs in the ref (scroll reveal fills them later).
       claim.lineB is a {words}…{/words} block → each word wrapped in .word
       for the animation wave. -->
  <p class="claim__line claim__line--b">{{claim.lineB}}</p>
</section>
`,Be=`<!-- strip: video band of hand-drawn queue, blends into page bg -->
<section id="strip" class="section section--strip" aria-hidden="true">
  <video
    class="strip__video"
    src="video/footer.mp4"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-hidden="true"
  ></video>
</section>
`,Ne=`<!-- footer: nav column, copyright, credit, follow us (Figma 8630–8943) -->
<section id="footer" class="section section--footer" role="contentinfo" aria-label="Site footer">
  <p class="footer__brand">{{brand}}.</p>

  <nav class="footer__nav" aria-label="Footer">
    <ul class="footer__nav-list">
      <li><a class="footer__link" href="#book">{{footer.navBook}}</a></li>
      <li><a class="footer__link" href="#author">{{footer.navAuthor}}</a></li>
      <li><a class="footer__link" href="#book">{{footer.navBuy}}</a></li>
      <!-- "say hello" is hand-lettered script in the design — inline SVG tracing.
           TODO: client asset (hand-lettering artwork) -->
      <li>
        <a class="footer__hello" href="mailto:hi@moneyincheck.org" aria-label="{{footer.helloAria}}">
          <svg class="footer__hello-script" viewBox="0 0 78 36" fill="none" aria-hidden="true">
            <!-- say -->
            <path
              d="M7 14.4C5.2 12.6 2.2 13.4 2 15.6C1.9 17.4 4.4 18 5.6 19.6C6.7 21.1 5.3 23.3 3 22.8C2.1 22.6 1.5 22 1.2 21.3M15.2 15.4C12.6 13.6 9.6 15.2 9.3 18.4C9 21.4 11.6 23.4 13.7 21.6C15 20.4 15.4 17.8 15.4 15.2C15.3 18.3 15.5 21.5 16.7 23.1C17.4 24 18.4 23.8 19 23M20.2 15.4C19.5 18 19.3 20.6 20.1 22.4C20.8 23.9 22.7 23.7 23.7 22C24.6 20.5 25.1 17.6 25.3 15.2C25.1 19 24.9 24.4 23.9 28.6C23.3 31.4 21.5 33.6 19.7 32.6C18.1 31.7 18.9 28.8 21.1 26.8C23.1 25 25.7 23.8 27.7 23.4"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            <!-- hello -->
            <path
              d="M39.6 4.6C38.2 9.8 37 17 36.2 23.6C36.9 19.8 38.1 16.4 39.9 15.4C41.5 14.6 42.5 15.8 42.3 18C42.1 20 41.7 22 41.6 23.7M44.7 20.4C46.5 19.8 48.5 18.6 48.5 17C48.5 15.5 46.5 15.2 45.5 16.6C44.4 18.2 44.1 20.8 45 22.4C45.9 23.9 47.9 23.7 49.3 22.6M52.5 22.9C53.3 16.4 54.5 8.8 55.9 4.6C56.5 2.9 57.5 3.4 57.3 5C56.9 9.4 55.5 17 54.5 23.3C54.3 24.6 55.5 24.4 56.3 23.6M58.3 22.9C59.1 16.4 60.3 8.8 61.7 4.6C62.3 2.9 63.3 3.4 63.1 5C62.7 9.4 61.3 17 60.3 23.3C60.1 24.6 61.3 24.4 62.1 23.6M66.9 15.6C64.7 15.4 63.5 17.6 63.9 19.9C64.3 22.3 66.5 23.7 68.3 22.5C70.1 21.3 70.3 18.3 68.9 16.5C68.3 15.7 67.5 15.4 66.9 15.6C68.5 15.9 70.3 16.4 71.6 16.2"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Waving-hand doodle right after "say hello" — Figma 124,8802 33×28 -->
  <!-- TODO: client asset (hand-drawn doodle) — inline SVG approximation of the ref -->
  <svg class="footer__mark" viewBox="0 0 33 28" fill="none" aria-hidden="true">
    <!-- fingers + palm outline -->
    <path
      d="M11.5 26C9.5 23.5 7 20 5.2 15.8C4.3 13.6 3.6 10.8 4.4 9.6C5.2 8.4 6.8 8.9 7.4 10.6C8.1 12.7 8.5 14.8 9.2 16.6C9.1 13.4 9.2 9.2 10.2 6C10.7 4.3 12.6 4.2 13.1 6C13.8 8.6 13.7 12 13.9 15C14.6 12 15.6 8.2 17.2 5.6C18.2 4 20 4.4 20 6.2C20 9 19 12.4 18.4 15.4C19.8 13.2 21.6 10.8 23.6 9.4C25.2 8.3 26.6 9.5 25.8 11.3C24.4 14.5 22.2 17.4 21.2 20.4C20.4 22.9 18.5 25.4 15.5 25.9C14 26.1 12.6 26.3 11.5 26Z"
      stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
    <!-- inner palm dashes -->
    <path d="M10.5 20.5C10.9 22 10.7 23.4 10 24.6M14 21C14.2 22.3 14 23.5 13.5 24.6"
      stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
    <!-- wave motion strokes -->
    <path d="M27.5 7C29 5.6 29.8 3.8 29.8 2M30.4 9.2C32 7.6 32.7 5.4 32.7 3.4"
      stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
  </svg>

  <p class="footer__copyright">{{footer.copyright}}</p>

  <p class="footer__credit">
    <span class="footer__credit-pre">{{footer.creditPre}}</span>
    <a class="footer__credit-name" href="https://cloudstudio.es" target="_blank" rel="noopener">
      cloudstudio
      <!-- hand-drawn subline — real client asset (320×30) -->
      <img class="footer__squiggle" src="img/subline.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
    </a>
  </p>

  <div class="footer__follow">
    <p class="footer__follow-title">{{footer.followTitle}}</p>
    <ul class="footer__social">
      <li><a class="footer__link" href="https://www.linkedin.com/in/oscartv/" target="_blank" rel="noopener">Linkedin</a></li>
      <li><a class="footer__link" href="https://www.instagram.com/oscartv/" target="_blank" rel="noopener">Instagram</a></li>
      <li><a class="footer__link" href="https://x.com/oscartv/" target="_blank" rel="noopener">Twitter</a></li>
    </ul>
  </div>
</section>
`,Me=`<!-- decor: fixed stripe grid + page-absolute overlay (chess coords, bills, coins, compass, footer square) -->
<section id="decor" class="section section--decor" aria-hidden="true">
  <!-- fixed viewport grid, z:0 (behind everything) -->
  <div class="grid-bg"></div>

  <!-- N–S compass — CLIENT FEEDBACK: ONE FIXED element, vertically centered on
       the RIGHT viewport edge, acting as a scroll-progress indicator. The green
       fill is scaled top→down by src/js/anim/progress.js as you travel the page.
       (Replaces the two in-page static compasses: the old decor compass #2 that
       lived here, and the hero one — retired via override in decor.css.)
       position:fixed escapes #decor's overflow:clip (no transformed ancestor,
       same as .grid-bg above). -->
  <div class="decor__compass">
    <span class="decor__compass-letter decor__compass-letter--n">N</span>
    <span class="decor__compass-line"><span class="decor__compass-fill"></span></span>
    <span class="decor__compass-letter decor__compass-letter--s">S</span>
  </div>
  <!-- horizontal grid lines come from the fixed .grid-bg layer (orchestrator-owned).
       NOTE: hi-res ref shows a 200px horizontal period below y≈4429.5 (211.5 above);
       the fixed layer uses 211.5 everywhere — flagged in report, not duplicated here. -->

  <!-- static coins, z:0 (above grid, UNDER section text — the ref shows body
       copy printing over all four coins; deviates from the SPEC z-order line,
       escalated in the build report; falling-coin anims stay on top in wave 2) -->
  <div class="decor__under">
    <img class="decor__coin decor__coin--1" src="img/coin.webp" alt="" width="222" height="222" loading="lazy" decoding="async" />
    <img class="decor__coin decor__coin--2" src="img/coin.webp" alt="" width="222" height="222" loading="lazy" decoding="async" />
    <img class="decor__coin decor__coin--3" src="img/coin.webp" alt="" width="222" height="222" loading="lazy" decoding="async" />
    <img class="decor__coin decor__coin--4" src="img/coin.webp" alt="" width="222" height="222" loading="lazy" decoding="async" />
  </div>

  <!-- chess coordinates: positions are static; main.js supplies the approved
       move order from src/js/data/coordinates.js without moving any marker. -->
  <div id="coords" class="decor__coords">
    <span class="coord" data-atf style="left:21rem;top:15rem">e4</span>
    <span class="coord" data-atf style="left:39.1rem;top:22.8rem">e5</span>
    <span class="coord" data-atf style="left:64.8rem;top:33.4rem">Nf3</span>
    <span class="coord" data-atf style="left:102.2rem;top:28.9rem">Nc6</span>
    <span class="coord" data-atf style="left:121.5rem;top:48.1rem">Bb5</span>
    <span class="coord" data-atf style="left:148.4rem;top:44.1rem">Nf6</span>
    <span class="coord" data-atf style="left:49.5rem;top:55.6rem">O-O</span>
    <span class="coord" data-atf style="left:63.9rem;top:71.5rem">d4</span>
    <span class="coord" data-atf style="left:109.8rem;top:72.7rem">Nd6</span>
    <span class="coord" data-atf style="left:47.8rem;top:89.1rem">Bxc6</span>
    <span class="coord" data-atf style="left:125.4rem;top:93.5rem">dxc6</span>
    <span class="coord" data-atf style="left:23.5rem;top:103rem">dxe5</span>
    <span class="coord" data-atf style="left:66.7rem;top:109.1rem">hNf5</span>
    <span class="coord" data-atf style="left:162.8rem;top:106.9rem">Qxd8</span>
    <span class="coord" style="left:98.9rem;top:123.1rem">Kxd8</span>
    <span class="coord" style="left:60rem;top:143.9rem">Nc3</span>
    <span class="coord" style="left:100.1rem;top:168.6rem">Ke8</span>
    <span class="coord" style="left:12.6rem;top:168.6rem">e4</span>
    <span class="coord" style="left:28.3rem;top:186.1rem">e5</span>
    <span class="coord" style="left:99.2rem;top:195.7rem">Nf3</span>
    <span class="coord" style="left:73.2rem;top:208rem">Nc6</span>
    <span class="coord" style="left:160.7rem;top:164.3rem">Bb5</span>
    <span class="coord" style="left:150.5rem;top:220.5rem">Nf6</span>
    <span class="coord" style="left:49.5rem;top:215.1rem">O-O</span>
    <span class="coord" style="left:80rem;top:234.9rem">d4</span>
    <span class="coord" style="left:109.4rem;top:219.2rem">Nd6</span>
    <span class="coord" style="left:28rem;top:234.9rem">Bxc6</span>
    <span class="coord" style="left:110.5rem;top:259.9rem">dxc6</span>
    <span class="coord" style="left:11.9rem;top:263.3rem">dxe5</span>
    <span class="coord" style="left:80.2rem;top:273.9rem">hNf5</span>
    <span class="coord" style="left:162.8rem;top:266.4rem">Qxd8</span>
    <span class="coord" style="left:101.7rem;top:286.5rem">Kxd8</span>
    <span class="coord" style="left:62.8rem;top:300rem">Nc3</span>
    <span class="coord" style="left:123.3rem;top:316.1rem">Ke8</span>
    <span class="coord" style="left:8.3rem;top:325.1rem">e4</span>
    <span class="coord" style="left:28.3rem;top:336.1rem">e5</span>
    <span class="coord" style="left:161rem;top:352.7rem">Nf6</span>
    <span class="coord" style="left:102.2rem;top:334.3rem">dxc6</span>
    <span class="coord" style="left:67.3rem;top:344.8rem">Qxd8</span>
    <span class="coord" style="left:111.2rem;top:354.3rem">Nc3</span>
    <span class="coord" style="left:23.7rem;top:505.1rem">dxc6</span>
    <span class="coord" style="left:125.8rem;top:517.4rem">Bg3</span>
    <span class="coord" style="left:67.2rem;top:526.6rem">Qxa2</span>
    <span class="coord" style="left:8.3rem;top:538.4rem">e4</span>
    <span class="coord" style="left:28.3rem;top:549.4rem">e5</span>
    <span class="coord" style="left:101.7rem;top:547.6rem">dxc6</span>
    <span class="coord" style="left:67.3rem;top:558.1rem">Qxd8</span>
    <span class="coord" style="left:161.2rem;top:558.9rem">Nf6</span>
    <span class="coord" style="left:146.1rem;top:597.1rem">Nc3</span>
    <span class="coord" style="left:37.6rem;top:685.2rem">dxc6</span>
    <span class="coord" style="left:139.3rem;top:697.5rem">Bg3</span>
    <span class="coord" style="left:80.6rem;top:706.7rem">Qxa2</span>
    <span class="coord" style="left:22.2rem;top:718.5rem">e4</span>
    <span class="coord" style="left:121.5rem;top:725rem">Qxd8</span>
    <span class="coord" style="left:145.2rem;top:752.3rem">dxc6</span>
    <span class="coord" style="left:6.4rem;top:771.5rem">Bg3</span>
    <span class="coord" style="left:146.8rem;top:806.7rem">Qxf2</span>
    <span class="coord" style="left:13rem;top:810.4rem">Nxd3</span>
    <span class="coord" style="left:140.3rem;top:856.6rem">Qf4</span>
    <span class="coord" style="left:41rem;top:861.1rem">e7</span>
    <span class="coord" style="left:93.2rem;top:883.2rem">Be2</span>
  </div>

  <!-- bills / coins, z:3 -->
  <div class="decor__props">
    <!-- hero S-fold bill (rotation baked into asset, bbox 22,939 562x522) -->
    <img class="decor__bill decor__bill--hero" src="img/bill-1.webp" alt="" width="1124" height="1044" loading="lazy" decoding="async" />
    <!-- wavy bill, intro (bbox 1164,2445 656x656) -->
    <img class="decor__bill decor__bill--intro" src="img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />
    <!-- wavy bill at the intro/book boundary (Figma "large rect" zone 402,3473;
         ref ink ~370,3390 460x355) -->
    <img class="decor__bill decor__bill--boundary" src="img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />
    <!-- wavy bill, author (bbox 288,5538 677x677) -->
    <img class="decor__bill decor__bill--author" src="img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />
    <!-- wavy bill, claim (bbox 1025,7609 756x744) -->
    <img class="decor__bill decor__bill--claim" src="img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />

    <!-- NOTE: the looping doodle GIFs live INLINE in hero.html / intro.html
         (they reveal with the text) — do not re-add them here. -->

    <!-- big cropped bill at footer (rect 130,8690 588x588, clipped by page end)
         — FINAL waypoint of the traveling bill's journey -->
    <div class="decor__square">
      <img class="decor__bill--footer" src="img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />
    </div>
  </div>
</section>
`,Le=`<!-- lightbox — purchase modal (design: spec/refs/lightbox.png, Figma node 0-268) -->
<!-- TODO: client — real store URLs (all links href="#" for now) -->
<div id="lightbox" class="lightbox" hidden>
  <div class="lightbox__backdrop"></div>
  <div class="lightbox__card" data-lenis-prevent role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
    <button class="lightbox__close" type="button" aria-label="{{lightbox.closeAria}}">
      <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
        <path d="M2.5 2.5l13 13M15.5 2.5l-13 13" stroke="#fff" stroke-width="2.6" stroke-linecap="round" />
      </svg>
    </button>

    <h2 class="lightbox__title" id="lightbox-title">{{lightbox.title}}</h2>
    <p class="lightbox__subtitle">{{lightbox.subtitle}}</p>

    <h3 class="lightbox__section">{{lightbox.sectionEn}}</h3>
    <ul class="lightbox__rows">
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryUS}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — United States">Amazon</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 814 1000" aria-hidden="true" focusable="false"><path fill="#000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
          <a href="#" aria-label="Apple Books — United States">Apple Books</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          <a href="#" aria-label="Google Books — United States">Google Books</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryCanada}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Canada">Amazon</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryAustralia}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Australia">Amazon</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryIndia}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — India">Amazon</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryOther}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Other countries">Amazon</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 814 1000" aria-hidden="true" focusable="false"><path fill="#000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
          <a href="#" aria-label="Apple Books — Other countries">Apple Books</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          <a href="#" aria-label="Google Books — Other countries">Google Books</a>
        </span>
      </li>
    </ul>

    <h3 class="lightbox__section">{{lightbox.sectionEs}}</h3>
    <ul class="lightbox__rows">
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countrySpain}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — España">Amazon</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 814 1000" aria-hidden="true" focusable="false"><path fill="#000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
          <a href="#" aria-label="Applebooks — España">Applebooks</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          <a href="#" aria-label="Google Books — España">Google Books</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryMexico}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Mexico">Amazon</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryOtherEs}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Otros Paises">Amazon</a>
        </span>
      </li>
    </ul>

    <p class="lightbox__distrib">{{lightbox.distrib}}</p>
    <a class="lightbox__contact" href="#">{{lightbox.contact}}</a>
  </div>
</div>
`,De=`<!-- language — full-screen language overlay (opens from the header "En ▾" pill) -->
<div id="language" class="language" data-lenis-prevent hidden role="dialog" aria-modal="true" aria-labelledby="language-kicker">
  <div class="language__canvas">
    <!-- decorative rotated bill, left of the list -->
    <img class="language__bill" src="img/bill-2.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />

    <p id="language-kicker" class="language__kicker">{{language.kicker}}</p>

    <!-- All five published language paths are functional locale links. -->
    <ul class="language__list">
      <li class="language__row">
        <a class="language__item {{lang.enActive}}" href="{{lang.enHref}}" lang="en" data-lang="en">{{language.en}}</a>
      </li>
      <li class="language__row">
        <a class="language__item {{lang.esActive}}" href="{{lang.esHref}}" lang="es" data-lang="es">{{language.es}}</a>
      </li>
      <li class="language__row">
        <a class="language__item {{lang.frActive}}" href="{{lang.frHref}}" lang="fr" data-lang="fr">{{language.fr}}</a>
      </li>
      <li class="language__row">
        <a class="language__item {{lang.deActive}}" href="{{lang.deHref}}" lang="de" data-lang="de">{{language.de}}</a>
      </li>
      <li class="language__row">
        <a class="language__item {{lang.hiActive}}" href="{{lang.hiHref}}" lang="hi" data-lang="hi">{{language.hi}}</a>
      </li>
    </ul>

    <p class="language__credit">
      <span class="language__credit-pre">{{language.creditPre}}</span>
      <a class="language__credit-name" href="https://cloudstudio.es" target="_blank" rel="noopener">
        cloudstudio
        <!-- hand-drawn subline — real client asset (320×30) -->
        <img class="language__squiggle" src="img/subline.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </a>
    </p>
  </div>
</div>
`,H=de(),S=pe(H);me(H,S);const U=o=>ce(o,S);document.querySelector("#app").innerHTML=[Me,Ce,ze,Pe,Se,Ee,Fe,Be,Ne].map(U).join(`
`);const O=S["footer.copyrightUrl"];if(O){const o=document.querySelector(".footer__copyright"),e=document.createElement("a");e.href=O,e.target="_blank",e.rel="noopener",e.textContent=o.textContent,o.replaceChildren(e)}document.querySelectorAll(".coord").forEach((o,e)=>{var t;const n=(t=fe[e])==null?void 0:t.text;n&&(o.textContent=n)});document.body.insertAdjacentHTML("beforeend",[Le,De].map(U).join(`
`));if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const o=Array.from(document.querySelectorAll("video")),e=new Set,n=new IntersectionObserver(t=>{t.forEach(a=>{const r=a.target;a.isIntersecting?(e.add(r),r.paused&&r.play().catch(()=>{})):(e.delete(r),r.paused||r.pause())})},{rootMargin:"20% 0px"});o.forEach(t=>{t.muted=!0,t.playsInline=!0,n.observe(t)}),window.addEventListener("touchstart",()=>e.forEach(t=>t.paused&&t.play().catch(()=>{})),{once:!0,passive:!0})}function E(){const o=document.documentElement,e=Math.round((window.devicePixelRatio||1)*100)/100||1,n=h=>Math.round(Math.round(h*e)/e*1e3)/1e3,t=parseFloat(getComputedStyle(document.documentElement).fontSize)||10,a=window.matchMedia("(max-width: 1080px)").matches,r=n(a?window.innerWidth*.25:20*t),i=r,s=Math.min(window.innerWidth,172.8*t),b=n(a?window.innerWidth*.125:(window.innerWidth-s)/2+16.4*t),c=n(r/2),m=n(Math.max(1,Math.round(e))/e);o.style.setProperty("--g-px",`${r}px`),o.style.setProperty("--g-py",`${i}px`),o.style.setProperty("--g-ox",`${b}px`),o.style.setProperty("--g-oy",`${c}px`),o.style.setProperty("--g-line",`${m}px`)}E();window.addEventListener("resize",E);(function o(){var e,n;(n=(e=matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`)).addEventListener)==null||n.call(e,"change",()=>{E(),o()},{once:!0})})();window.__loaderDone=Ae();V(()=>__dsImport("cyc"),[]).then(o=>{var e;return(e=o.init)==null?void 0:e.call(o)});__dsExports.entry={_:V};

};
__dsRequire("entry");
})();
