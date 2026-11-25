import{s as store,p}from"./hoisted.CXFjgb15.js";import{g as gsapWithCSS}from"./index.D0QGAbJ1.js";import{S as Split}from"./Split.N5vjdAvu.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="178",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",LinearTransfer="linear",SRGBTransfer="srgb",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(type,listener){this._listeners===void 0&&(this._listeners={});const listeners=this._listeners;listeners[type]===void 0&&(listeners[type]=[]),listeners[type].indexOf(listener)===-1&&listeners[type].push(listener)}hasEventListener(type,listener){const listeners=this._listeners;return listeners===void 0?!1:listeners[type]!==void 0&&listeners[type].indexOf(listener)!==-1}removeEventListener(type,listener){const listeners=this._listeners;if(listeners===void 0)return;const listenerArray=listeners[type];if(listenerArray!==void 0){const index=listenerArray.indexOf(listener);index!==-1&&listenerArray.splice(index,1)}}dispatchEvent(event){const listeners=this._listeners;if(listeners===void 0)return;const listenerArray=listeners[event.type];if(listenerArray!==void 0){event.target=this;const array=listenerArray.slice(0);for(let i=0,l=array.length;i<l;i++)array[i].call(this,event);event.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _seed=1234567;const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const d0=Math.random()*4294967295|0,d1=Math.random()*4294967295|0,d2=Math.random()*4294967295|0,d3=Math.random()*4294967295|0;return(_lut[d0&255]+_lut[d0>>8&255]+_lut[d0>>16&255]+_lut[d0>>24&255]+"-"+_lut[d1&255]+_lut[d1>>8&255]+"-"+_lut[d1>>16&15|64]+_lut[d1>>24&255]+"-"+_lut[d2&63|128]+_lut[d2>>8&255]+"-"+_lut[d2>>16&255]+_lut[d2>>24&255]+_lut[d3&255]+_lut[d3>>8&255]+_lut[d3>>16&255]+_lut[d3>>24&255]).toLowerCase()}function clamp(value,min,max){return Math.max(min,Math.min(max,value))}function euclideanModulo(n,m){return(n%m+m)%m}function mapLinear(x,a1,a2,b1,b2){return b1+(x-a1)*(b2-b1)/(a2-a1)}function inverseLerp(x,y,value){return x!==y?(value-x)/(y-x):0}function lerp(x,y,t){return(1-t)*x+t*y}function damp(x,y,lambda,dt){return lerp(x,y,1-Math.exp(-lambda*dt))}function pingpong(x,length=1){return length-Math.abs(euclideanModulo(x,length*2)-length)}function smoothstep(x,min,max){return x<=min?0:x>=max?1:(x=(x-min)/(max-min),x*x*(3-2*x))}function smootherstep(x,min,max){return x<=min?0:x>=max?1:(x=(x-min)/(max-min),x*x*x*(x*(x*6-15)+10))}function randInt(low,high){return low+Math.floor(Math.random()*(high-low+1))}function randFloat(low,high){return low+Math.random()*(high-low)}function randFloatSpread(range){return range*(.5-Math.random())}function seededRandom(s){s!==void 0&&(_seed=s);let t=_seed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function degToRad(degrees){return degrees*DEG2RAD}function radToDeg(radians){return radians*RAD2DEG}function isPowerOfTwo(value){return(value&value-1)===0&&value!==0}function ceilPowerOfTwo(value){return Math.pow(2,Math.ceil(Math.log(value)/Math.LN2))}function floorPowerOfTwo(value){return Math.pow(2,Math.floor(Math.log(value)/Math.LN2))}function setQuaternionFromProperEuler(q,a,b,c,order){const cos=Math.cos,sin=Math.sin,c2=cos(b/2),s2=sin(b/2),c13=cos((a+c)/2),s13=sin((a+c)/2),c1_3=cos((a-c)/2),s1_3=sin((a-c)/2),c3_1=cos((c-a)/2),s3_1=sin((c-a)/2);switch(order){case"XYX":q.set(c2*s13,s2*c1_3,s2*s1_3,c2*c13);break;case"YZY":q.set(s2*s1_3,c2*s13,s2*c1_3,c2*c13);break;case"ZXZ":q.set(s2*c1_3,s2*s1_3,c2*s13,c2*c13);break;case"XZX":q.set(c2*s13,s2*s3_1,s2*c3_1,c2*c13);break;case"YXY":q.set(s2*c3_1,c2*s13,s2*s3_1,c2*c13);break;case"ZYZ":q.set(s2*s3_1,s2*c3_1,c2*s13,c2*c13);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+order)}}function denormalize(value,array){switch(array.constructor){case Float32Array:return value;case Uint32Array:return value/4294967295;case Uint16Array:return value/65535;case Uint8Array:return value/255;case Int32Array:return Math.max(value/2147483647,-1);case Int16Array:return Math.max(value/32767,-1);case Int8Array:return Math.max(value/127,-1);default:throw new Error("Invalid component type.")}}function normalize(value,array){switch(array.constructor){case Float32Array:return value;case Uint32Array:return Math.round(value*4294967295);case Uint16Array:return Math.round(value*65535);case Uint8Array:return Math.round(value*255);case Int32Array:return Math.round(value*2147483647);case Int16Array:return Math.round(value*32767);case Int8Array:return Math.round(value*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD,RAD2DEG,generateUUID,clamp,euclideanModulo,mapLinear,inverseLerp,lerp,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize,denormalize};class Vector2{constructor(x=0,y=0){Vector2.prototype.isVector2=!0,this.x=x,this.y=y}get width(){return this.x}set width(value){this.x=value}get height(){return this.y}set height(value){this.y=value}set(x,y){return this.x=x,this.y=y,this}setScalar(scalar){return this.x=scalar,this.y=scalar,this}setX(x){return this.x=x,this}setY(y){return this.y=y,this}setComponent(index,value){switch(index){case 0:this.x=value;break;case 1:this.y=value;break;default:throw new Error("index is out of range: "+index)}return this}getComponent(index){switch(index){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+index)}}clone(){return new this.constructor(this.x,this.y)}copy(v){return this.x=v.x,this.y=v.y,this}add(v){return this.x+=v.x,this.y+=v.y,this}addScalar(s){return this.x+=s,this.y+=s,this}addVectors(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this}addScaledVector(v,s){return this.x+=v.x*s,this.y+=v.y*s,this}sub(v){return this.x-=v.x,this.y-=v.y,this}subScalar(s){return this.x-=s,this.y-=s,this}subVectors(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this}multiply(v){return this.x*=v.x,this.y*=v.y,this}multiplyScalar(scalar){return this.x*=scalar,this.y*=scalar,this}divide(v){return this.x/=v.x,this.y/=v.y,this}divideScalar(scalar){return this.multiplyScalar(1/scalar)}applyMatrix3(m){const x=this.x,y=this.y,e=m.elements;return this.x=e[0]*x+e[3]*y+e[6],this.y=e[1]*x+e[4]*y+e[7],this}min(v){return this.x=Math.min(this.x,v.x),this.y=Math.min(this.y,v.y),this}max(v){return this.x=Math.max(this.x,v.x),this.y=Math.max(this.y,v.y),this}clamp(min,max){return this.x=clamp(this.x,min.x,max.x),this.y=clamp(this.y,min.y,max.y),this}clampScalar(minVal,maxVal){return this.x=clamp(this.x,minVal,maxVal),this.y=clamp(this.y,minVal,maxVal),this}clampLength(min,max){const length=this.length();return this.divideScalar(length||1).multiplyScalar(clamp(length,min,max))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(v){return this.x*v.x+this.y*v.y}cross(v){return this.x*v.y-this.y*v.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(v){const denominator=Math.sqrt(this.lengthSq()*v.lengthSq());if(denominator===0)return Math.PI/2;const theta=this.dot(v)/denominator;return Math.acos(clamp(theta,-1,1))}distanceTo(v){return Math.sqrt(this.distanceToSquared(v))}distanceToSquared(v){const dx=this.x-v.x,dy=this.y-v.y;return dx*dx+dy*dy}manhattanDistanceTo(v){return Math.abs(this.x-v.x)+Math.abs(this.y-v.y)}setLength(length){return this.normalize().multiplyScalar(length)}lerp(v,alpha){return this.x+=(v.x-this.x)*alpha,this.y+=(v.y-this.y)*alpha,this}lerpVectors(v1,v2,alpha){return this.x=v1.x+(v2.x-v1.x)*alpha,this.y=v1.y+(v2.y-v1.y)*alpha,this}equals(v){return v.x===this.x&&v.y===this.y}fromArray(array,offset=0){return this.x=array[offset],this.y=array[offset+1],this}toArray(array=[],offset=0){return array[offset]=this.x,array[offset+1]=this.y,array}fromBufferAttribute(attribute,index){return this.x=attribute.getX(index),this.y=attribute.getY(index),this}rotateAround(center,angle){const c=Math.cos(angle),s=Math.sin(angle),x=this.x-center.x,y=this.y-center.y;return this.x=x*c-y*s+center.x,this.y=x*s+y*c+center.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Quaternion{constructor(x=0,y=0,z=0,w=1){this.isQuaternion=!0,this._x=x,this._y=y,this._z=z,this._w=w}static slerpFlat(dst,dstOffset,src0,srcOffset0,src1,srcOffset1,t){let x0=src0[srcOffset0+0],y0=src0[srcOffset0+1],z0=src0[srcOffset0+2],w0=src0[srcOffset0+3];const x1=src1[srcOffset1+0],y1=src1[srcOffset1+1],z1=src1[srcOffset1+2],w1=src1[srcOffset1+3];if(t===0){dst[dstOffset+0]=x0,dst[dstOffset+1]=y0,dst[dstOffset+2]=z0,dst[dstOffset+3]=w0;return}if(t===1){dst[dstOffset+0]=x1,dst[dstOffset+1]=y1,dst[dstOffset+2]=z1,dst[dstOffset+3]=w1;return}if(w0!==w1||x0!==x1||y0!==y1||z0!==z1){let s=1-t;const cos=x0*x1+y0*y1+z0*z1+w0*w1,dir=cos>=0?1:-1,sqrSin=1-cos*cos;if(sqrSin>Number.EPSILON){const sin=Math.sqrt(sqrSin),len=Math.atan2(sin,cos*dir);s=Math.sin(s*len)/sin,t=Math.sin(t*len)/sin}const tDir=t*dir;if(x0=x0*s+x1*tDir,y0=y0*s+y1*tDir,z0=z0*s+z1*tDir,w0=w0*s+w1*tDir,s===1-t){const f=1/Math.sqrt(x0*x0+y0*y0+z0*z0+w0*w0);x0*=f,y0*=f,z0*=f,w0*=f}}dst[dstOffset]=x0,dst[dstOffset+1]=y0,dst[dstOffset+2]=z0,dst[dstOffset+3]=w0}static multiplyQuaternionsFlat(dst,dstOffset,src0,srcOffset0,src1,srcOffset1){const x0=src0[srcOffset0],y0=src0[srcOffset0+1],z0=src0[srcOffset0+2],w0=src0[srcOffset0+3],x1=src1[srcOffset1],y1=src1[srcOffset1+1],z1=src1[srcOffset1+2],w1=src1[srcOffset1+3];return dst[dstOffset]=x0*w1+w0*x1+y0*z1-z0*y1,dst[dstOffset+1]=y0*w1+w0*y1+z0*x1-x0*z1,dst[dstOffset+2]=z0*w1+w0*z1+x0*y1-y0*x1,dst[dstOffset+3]=w0*w1-x0*x1-y0*y1-z0*z1,dst}get x(){return this._x}set x(value){this._x=value,this._onChangeCallback()}get y(){return this._y}set y(value){this._y=value,this._onChangeCallback()}get z(){return this._z}set z(value){this._z=value,this._onChangeCallback()}get w(){return this._w}set w(value){this._w=value,this._onChangeCallback()}set(x,y,z,w){return this._x=x,this._y=y,this._z=z,this._w=w,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(quaternion){return this._x=quaternion.x,this._y=quaternion.y,this._z=quaternion.z,this._w=quaternion.w,this._onChangeCallback(),this}setFromEuler(euler,update=!0){const x=euler._x,y=euler._y,z=euler._z,order=euler._order,cos=Math.cos,sin=Math.sin,c1=cos(x/2),c2=cos(y/2),c3=cos(z/2),s1=sin(x/2),s2=sin(y/2),s3=sin(z/2);switch(order){case"XYZ":this._x=s1*c2*c3+c1*s2*s3,this._y=c1*s2*c3-s1*c2*s3,this._z=c1*c2*s3+s1*s2*c3,this._w=c1*c2*c3-s1*s2*s3;break;case"YXZ":this._x=s1*c2*c3+c1*s2*s3,this._y=c1*s2*c3-s1*c2*s3,this._z=c1*c2*s3-s1*s2*c3,this._w=c1*c2*c3+s1*s2*s3;break;case"ZXY":this._x=s1*c2*c3-c1*s2*s3,this._y=c1*s2*c3+s1*c2*s3,this._z=c1*c2*s3+s1*s2*c3,this._w=c1*c2*c3-s1*s2*s3;break;case"ZYX":this._x=s1*c2*c3-c1*s2*s3,this._y=c1*s2*c3+s1*c2*s3,this._z=c1*c2*s3-s1*s2*c3,this._w=c1*c2*c3+s1*s2*s3;break;case"YZX":this._x=s1*c2*c3+c1*s2*s3,this._y=c1*s2*c3+s1*c2*s3,this._z=c1*c2*s3-s1*s2*c3,this._w=c1*c2*c3-s1*s2*s3;break;case"XZY":this._x=s1*c2*c3-c1*s2*s3,this._y=c1*s2*c3-s1*c2*s3,this._z=c1*c2*s3+s1*s2*c3,this._w=c1*c2*c3+s1*s2*s3;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+order)}return update===!0&&this._onChangeCallback(),this}setFromAxisAngle(axis,angle){const halfAngle=angle/2,s=Math.sin(halfAngle);return this._x=axis.x*s,this._y=axis.y*s,this._z=axis.z*s,this._w=Math.cos(halfAngle),this._onChangeCallback(),this}setFromRotationMatrix(m){const te=m.elements,m11=te[0],m12=te[4],m13=te[8],m21=te[1],m22=te[5],m23=te[9],m31=te[2],m32=te[6],m33=te[10],trace=m11+m22+m33;if(trace>0){const s=.5/Math.sqrt(trace+1);this._w=.25/s,this._x=(m32-m23)*s,this._y=(m13-m31)*s,this._z=(m21-m12)*s}else if(m11>m22&&m11>m33){const s=2*Math.sqrt(1+m11-m22-m33);this._w=(m32-m23)/s,this._x=.25*s,this._y=(m12+m21)/s,this._z=(m13+m31)/s}else if(m22>m33){const s=2*Math.sqrt(1+m22-m11-m33);this._w=(m13-m31)/s,this._x=(m12+m21)/s,this._y=.25*s,this._z=(m23+m32)/s}else{const s=2*Math.sqrt(1+m33-m11-m22);this._w=(m21-m12)/s,this._x=(m13+m31)/s,this._y=(m23+m32)/s,this._z=.25*s}return this._onChangeCallback(),this}setFromUnitVectors(vFrom,vTo){let r=vFrom.dot(vTo)+1;return r<1e-8?(r=0,Math.abs(vFrom.x)>Math.abs(vFrom.z)?(this._x=-vFrom.y,this._y=vFrom.x,this._z=0,this._w=r):(this._x=0,this._y=-vFrom.z,this._z=vFrom.y,this._w=r)):(this._x=vFrom.y*vTo.z-vFrom.z*vTo.y,this._y=vFrom.z*vTo.x-vFrom.x*vTo.z,this._z=vFrom.x*vTo.y-vFrom.y*vTo.x,this._w=r),this.normalize()}angleTo(q){return 2*Math.acos(Math.abs(clamp(this.dot(q),-1,1)))}rotateTowards(q,step){const angle=this.angleTo(q);if(angle===0)return this;const t=Math.min(1,step/angle);return this.slerp(q,t),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(v){return this._x*v._x+this._y*v._y+this._z*v._z+this._w*v._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let l=this.length();return l===0?(this._x=0,this._y=0,this._z=0,this._w=1):(l=1/l,this._x=this._x*l,this._y=this._y*l,this._z=this._z*l,this._w=this._w*l),this._onChangeCallback(),this}multiply(q){return this.multiplyQuaternions(this,q)}premultiply(q){return this.multiplyQuaternions(q,this)}multiplyQuaternions(a,b){const qax=a._x,qay=a._y,qaz=a._z,qaw=a._w,qbx=b._x,qby=b._y,qbz=b._z,qbw=b._w;return this._x=qax*qbw+qaw*qbx+qay*qbz-qaz*qby,this._y=qay*qbw+qaw*qby+qaz*qbx-qax*qbz,this._z=qaz*qbw+qaw*qbz+qax*qby-qay*qbx,this._w=qaw*qbw-qax*qbx-qay*qby-qaz*qbz,this._onChangeCallback(),this}slerp(qb,t){if(t===0)return this;if(t===1)return this.copy(qb);const x=this._x,y=this._y,z=this._z,w=this._w;let cosHalfTheta=w*qb._w+x*qb._x+y*qb._y+z*qb._z;if(cosHalfTheta<0?(this._w=-qb._w,this._x=-qb._x,this._y=-qb._y,this._z=-qb._z,cosHalfTheta=-cosHalfTheta):this.copy(qb),cosHalfTheta>=1)return this._w=w,this._x=x,this._y=y,this._z=z,this;const sqrSinHalfTheta=1-cosHalfTheta*cosHalfTheta;if(sqrSinHalfTheta<=Number.EPSILON){const s=1-t;return this._w=s*w+t*this._w,this._x=s*x+t*this._x,this._y=s*y+t*this._y,this._z=s*z+t*this._z,this.normalize(),this}const sinHalfTheta=Math.sqrt(sqrSinHalfTheta),halfTheta=Math.atan2(sinHalfTheta,cosHalfTheta),ratioA=Math.sin((1-t)*halfTheta)/sinHalfTheta,ratioB=Math.sin(t*halfTheta)/sinHalfTheta;return this._w=w*ratioA+this._w*ratioB,this._x=x*ratioA+this._x*ratioB,this._y=y*ratioA+this._y*ratioB,this._z=z*ratioA+this._z*ratioB,this._onChangeCallback(),this}slerpQuaternions(qa,qb,t){return this.copy(qa).slerp(qb,t)}random(){const theta1=2*Math.PI*Math.random(),theta2=2*Math.PI*Math.random(),x0=Math.random(),r1=Math.sqrt(1-x0),r2=Math.sqrt(x0);return this.set(r1*Math.sin(theta1),r1*Math.cos(theta1),r2*Math.sin(theta2),r2*Math.cos(theta2))}equals(quaternion){return quaternion._x===this._x&&quaternion._y===this._y&&quaternion._z===this._z&&quaternion._w===this._w}fromArray(array,offset=0){return this._x=array[offset],this._y=array[offset+1],this._z=array[offset+2],this._w=array[offset+3],this._onChangeCallback(),this}toArray(array=[],offset=0){return array[offset]=this._x,array[offset+1]=this._y,array[offset+2]=this._z,array[offset+3]=this._w,array}fromBufferAttribute(attribute,index){return this._x=attribute.getX(index),this._y=attribute.getY(index),this._z=attribute.getZ(index),this._w=attribute.getW(index),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(callback){return this._onChangeCallback=callback,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(x=0,y=0,z=0){Vector3.prototype.isVector3=!0,this.x=x,this.y=y,this.z=z}set(x,y,z){return z===void 0&&(z=this.z),this.x=x,this.y=y,this.z=z,this}setScalar(scalar){return this.x=scalar,this.y=scalar,this.z=scalar,this}setX(x){return this.x=x,this}setY(y){return this.y=y,this}setZ(z){return this.z=z,this}setComponent(index,value){switch(index){case 0:this.x=value;break;case 1:this.y=value;break;case 2:this.z=value;break;default:throw new Error("index is out of range: "+index)}return this}getComponent(index){switch(index){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+index)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(v){return this.x=v.x,this.y=v.y,this.z=v.z,this}add(v){return this.x+=v.x,this.y+=v.y,this.z+=v.z,this}addScalar(s){return this.x+=s,this.y+=s,this.z+=s,this}addVectors(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this}addScaledVector(v,s){return this.x+=v.x*s,this.y+=v.y*s,this.z+=v.z*s,this}sub(v){return this.x-=v.x,this.y-=v.y,this.z-=v.z,this}subScalar(s){return this.x-=s,this.y-=s,this.z-=s,this}subVectors(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this}multiply(v){return this.x*=v.x,this.y*=v.y,this.z*=v.z,this}multiplyScalar(scalar){return this.x*=scalar,this.y*=scalar,this.z*=scalar,this}multiplyVectors(a,b){return this.x=a.x*b.x,this.y=a.y*b.y,this.z=a.z*b.z,this}applyEuler(euler){return this.applyQuaternion(_quaternion$4.setFromEuler(euler))}applyAxisAngle(axis,angle){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis,angle))}applyMatrix3(m){const x=this.x,y=this.y,z=this.z,e=m.elements;return this.x=e[0]*x+e[3]*y+e[6]*z,this.y=e[1]*x+e[4]*y+e[7]*z,this.z=e[2]*x+e[5]*y+e[8]*z,this}applyNormalMatrix(m){return this.applyMatrix3(m).normalize()}applyMatrix4(m){const x=this.x,y=this.y,z=this.z,e=m.elements,w=1/(e[3]*x+e[7]*y+e[11]*z+e[15]);return this.x=(e[0]*x+e[4]*y+e[8]*z+e[12])*w,this.y=(e[1]*x+e[5]*y+e[9]*z+e[13])*w,this.z=(e[2]*x+e[6]*y+e[10]*z+e[14])*w,this}applyQuaternion(q){const vx=this.x,vy=this.y,vz=this.z,qx=q.x,qy=q.y,qz=q.z,qw=q.w,tx=2*(qy*vz-qz*vy),ty=2*(qz*vx-qx*vz),tz=2*(qx*vy-qy*vx);return this.x=vx+qw*tx+qy*tz-qz*ty,this.y=vy+qw*ty+qz*tx-qx*tz,this.z=vz+qw*tz+qx*ty-qy*tx,this}project(camera){return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix)}unproject(camera){return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld)}transformDirection(m){const x=this.x,y=this.y,z=this.z,e=m.elements;return this.x=e[0]*x+e[4]*y+e[8]*z,this.y=e[1]*x+e[5]*y+e[9]*z,this.z=e[2]*x+e[6]*y+e[10]*z,this.normalize()}divide(v){return this.x/=v.x,this.y/=v.y,this.z/=v.z,this}divideScalar(scalar){return this.multiplyScalar(1/scalar)}min(v){return this.x=Math.min(this.x,v.x),this.y=Math.min(this.y,v.y),this.z=Math.min(this.z,v.z),this}max(v){return this.x=Math.max(this.x,v.x),this.y=Math.max(this.y,v.y),this.z=Math.max(this.z,v.z),this}clamp(min,max){return this.x=clamp(this.x,min.x,max.x),this.y=clamp(this.y,min.y,max.y),this.z=clamp(this.z,min.z,max.z),this}clampScalar(minVal,maxVal){return this.x=clamp(this.x,minVal,maxVal),this.y=clamp(this.y,minVal,maxVal),this.z=clamp(this.z,minVal,maxVal),this}clampLength(min,max){const length=this.length();return this.divideScalar(length||1).multiplyScalar(clamp(length,min,max))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(v){return this.x*v.x+this.y*v.y+this.z*v.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(length){return this.normalize().multiplyScalar(length)}lerp(v,alpha){return this.x+=(v.x-this.x)*alpha,this.y+=(v.y-this.y)*alpha,this.z+=(v.z-this.z)*alpha,this}lerpVectors(v1,v2,alpha){return this.x=v1.x+(v2.x-v1.x)*alpha,this.y=v1.y+(v2.y-v1.y)*alpha,this.z=v1.z+(v2.z-v1.z)*alpha,this}cross(v){return this.crossVectors(this,v)}crossVectors(a,b){const ax=a.x,ay=a.y,az=a.z,bx=b.x,by=b.y,bz=b.z;return this.x=ay*bz-az*by,this.y=az*bx-ax*bz,this.z=ax*by-ay*bx,this}projectOnVector(v){const denominator=v.lengthSq();if(denominator===0)return this.set(0,0,0);const scalar=v.dot(this)/denominator;return this.copy(v).multiplyScalar(scalar)}projectOnPlane(planeNormal){return _vector$c.copy(this).projectOnVector(planeNormal),this.sub(_vector$c)}reflect(normal){return this.sub(_vector$c.copy(normal).multiplyScalar(2*this.dot(normal)))}angleTo(v){const denominator=Math.sqrt(this.lengthSq()*v.lengthSq());if(denominator===0)return Math.PI/2;const theta=this.dot(v)/denominator;return Math.acos(clamp(theta,-1,1))}distanceTo(v){return Math.sqrt(this.distanceToSquared(v))}distanceToSquared(v){const dx=this.x-v.x,dy=this.y-v.y,dz=this.z-v.z;return dx*dx+dy*dy+dz*dz}manhattanDistanceTo(v){return Math.abs(this.x-v.x)+Math.abs(this.y-v.y)+Math.abs(this.z-v.z)}setFromSpherical(s){return this.setFromSphericalCoords(s.radius,s.phi,s.theta)}setFromSphericalCoords(radius,phi,theta){const sinPhiRadius=Math.sin(phi)*radius;return this.x=sinPhiRadius*Math.sin(theta),this.y=Math.cos(phi)*radius,this.z=sinPhiRadius*Math.cos(theta),this}setFromCylindrical(c){return this.setFromCylindricalCoords(c.radius,c.theta,c.y)}setFromCylindricalCoords(radius,theta,y){return this.x=radius*Math.sin(theta),this.y=y,this.z=radius*Math.cos(theta),this}setFromMatrixPosition(m){const e=m.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(m){const sx=this.setFromMatrixColumn(m,0).length(),sy=this.setFromMatrixColumn(m,1).length(),sz=this.setFromMatrixColumn(m,2).length();return this.x=sx,this.y=sy,this.z=sz,this}setFromMatrixColumn(m,index){return this.fromArray(m.elements,index*4)}setFromMatrix3Column(m,index){return this.fromArray(m.elements,index*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(c){return this.x=c.r,this.y=c.g,this.z=c.b,this}equals(v){return v.x===this.x&&v.y===this.y&&v.z===this.z}fromArray(array,offset=0){return this.x=array[offset],this.y=array[offset+1],this.z=array[offset+2],this}toArray(array=[],offset=0){return array[offset]=this.x,array[offset+1]=this.y,array[offset+2]=this.z,array}fromBufferAttribute(attribute,index){return this.x=attribute.getX(index),this.y=attribute.getY(index),this.z=attribute.getZ(index),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const theta=Math.random()*Math.PI*2,u=Math.random()*2-1,c=Math.sqrt(1-u*u);return this.x=c*Math.cos(theta),this.y=u,this.z=c*Math.sin(theta),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Matrix3{constructor(n11,n12,n13,n21,n22,n23,n31,n32,n33){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n11!==void 0&&this.set(n11,n12,n13,n21,n22,n23,n31,n32,n33)}set(n11,n12,n13,n21,n22,n23,n31,n32,n33){const te=this.elements;return te[0]=n11,te[1]=n21,te[2]=n31,te[3]=n12,te[4]=n22,te[5]=n32,te[6]=n13,te[7]=n23,te[8]=n33,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(m){const te=this.elements,me=m.elements;return te[0]=me[0],te[1]=me[1],te[2]=me[2],te[3]=me[3],te[4]=me[4],te[5]=me[5],te[6]=me[6],te[7]=me[7],te[8]=me[8],this}extractBasis(xAxis,yAxis,zAxis){return xAxis.setFromMatrix3Column(this,0),yAxis.setFromMatrix3Column(this,1),zAxis.setFromMatrix3Column(this,2),this}setFromMatrix4(m){const me=m.elements;return this.set(me[0],me[4],me[8],me[1],me[5],me[9],me[2],me[6],me[10]),this}multiply(m){return this.multiplyMatrices(this,m)}premultiply(m){return this.multiplyMatrices(m,this)}multiplyMatrices(a,b){const ae=a.elements,be=b.elements,te=this.elements,a11=ae[0],a12=ae[3],a13=ae[6],a21=ae[1],a22=ae[4],a23=ae[7],a31=ae[2],a32=ae[5],a33=ae[8],b11=be[0],b12=be[3],b13=be[6],b21=be[1],b22=be[4],b23=be[7],b31=be[2],b32=be[5],b33=be[8];return te[0]=a11*b11+a12*b21+a13*b31,te[3]=a11*b12+a12*b22+a13*b32,te[6]=a11*b13+a12*b23+a13*b33,te[1]=a21*b11+a22*b21+a23*b31,te[4]=a21*b12+a22*b22+a23*b32,te[7]=a21*b13+a22*b23+a23*b33,te[2]=a31*b11+a32*b21+a33*b31,te[5]=a31*b12+a32*b22+a33*b32,te[8]=a31*b13+a32*b23+a33*b33,this}multiplyScalar(s){const te=this.elements;return te[0]*=s,te[3]*=s,te[6]*=s,te[1]*=s,te[4]*=s,te[7]*=s,te[2]*=s,te[5]*=s,te[8]*=s,this}determinant(){const te=this.elements,a=te[0],b=te[1],c=te[2],d=te[3],e=te[4],f=te[5],g=te[6],h=te[7],i=te[8];return a*e*i-a*f*h-b*d*i+b*f*g+c*d*h-c*e*g}invert(){const te=this.elements,n11=te[0],n21=te[1],n31=te[2],n12=te[3],n22=te[4],n32=te[5],n13=te[6],n23=te[7],n33=te[8],t11=n33*n22-n32*n23,t12=n32*n13-n33*n12,t13=n23*n12-n22*n13,det=n11*t11+n21*t12+n31*t13;if(det===0)return this.set(0,0,0,0,0,0,0,0,0);const detInv=1/det;return te[0]=t11*detInv,te[1]=(n31*n23-n33*n21)*detInv,te[2]=(n32*n21-n31*n22)*detInv,te[3]=t12*detInv,te[4]=(n33*n11-n31*n13)*detInv,te[5]=(n31*n12-n32*n11)*detInv,te[6]=t13*detInv,te[7]=(n21*n13-n23*n11)*detInv,te[8]=(n22*n11-n21*n12)*detInv,this}transpose(){let tmp;const m=this.elements;return tmp=m[1],m[1]=m[3],m[3]=tmp,tmp=m[2],m[2]=m[6],m[6]=tmp,tmp=m[5],m[5]=m[7],m[7]=tmp,this}getNormalMatrix(matrix4){return this.setFromMatrix4(matrix4).invert().transpose()}transposeIntoArray(r){const m=this.elements;return r[0]=m[0],r[1]=m[3],r[2]=m[6],r[3]=m[1],r[4]=m[4],r[5]=m[7],r[6]=m[2],r[7]=m[5],r[8]=m[8],this}setUvTransform(tx,ty,sx,sy,rotation,cx,cy){const c=Math.cos(rotation),s=Math.sin(rotation);return this.set(sx*c,sx*s,-sx*(c*cx+s*cy)+cx+tx,-sy*s,sy*c,-sy*(-s*cx+c*cy)+cy+ty,0,0,1),this}scale(sx,sy){return this.premultiply(_m3.makeScale(sx,sy)),this}rotate(theta){return this.premultiply(_m3.makeRotation(-theta)),this}translate(tx,ty){return this.premultiply(_m3.makeTranslation(tx,ty)),this}makeTranslation(x,y){return x.isVector2?this.set(1,0,x.x,0,1,x.y,0,0,1):this.set(1,0,x,0,1,y,0,0,1),this}makeRotation(theta){const c=Math.cos(theta),s=Math.sin(theta);return this.set(c,-s,0,s,c,0,0,0,1),this}makeScale(x,y){return this.set(x,0,0,0,y,0,0,0,1),this}equals(matrix){const te=this.elements,me=matrix.elements;for(let i=0;i<9;i++)if(te[i]!==me[i])return!1;return!0}fromArray(array,offset=0){for(let i=0;i<9;i++)this.elements[i]=array[i+offset];return this}toArray(array=[],offset=0){const te=this.elements;return array[offset]=te[0],array[offset+1]=te[1],array[offset+2]=te[2],array[offset+3]=te[3],array[offset+4]=te[4],array[offset+5]=te[5],array[offset+6]=te[6],array[offset+7]=te[7],array[offset+8]=te[8],array}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(array){for(let i=array.length-1;i>=0;--i)if(array[i]>=65535)return!0;return!1}function createElementNS(name){return document.createElementNS("http://www.w3.org/1999/xhtml",name)}function createCanvasElement(){const canvas=createElementNS("canvas");return canvas.style.display="block",canvas}const _cache={};function warnOnce(message){message in _cache||(_cache[message]=!0,console.warn(message))}function probeAsync(gl,sync,interval){return new Promise(function(resolve,reject){function probe(){switch(gl.clientWaitSync(sync,gl.SYNC_FLUSH_COMMANDS_BIT,0)){case gl.WAIT_FAILED:reject();break;case gl.TIMEOUT_EXPIRED:setTimeout(probe,interval);break;default:resolve()}}setTimeout(probe,interval)})}function toNormalizedProjectionMatrix(projectionMatrix){const m=projectionMatrix.elements;m[2]=.5*m[2]+.5*m[3],m[6]=.5*m[6]+.5*m[7],m[10]=.5*m[10]+.5*m[11],m[14]=.5*m[14]+.5*m[15]}function toReversedProjectionMatrix(projectionMatrix){const m=projectionMatrix.elements;m[11]===-1?(m[10]=-m[10]-1,m[14]=-m[14]):(m[10]=-m[10],m[14]=-m[14]+1)}const LINEAR_REC709_TO_XYZ=new Matrix3().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),XYZ_TO_LINEAR_REC709=new Matrix3().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function createColorManagement(){const ColorManagement2={enabled:!0,workingColorSpace:LinearSRGBColorSpace,spaces:{},convert:function(color,sourceColorSpace,targetColorSpace){return this.enabled===!1||sourceColorSpace===targetColorSpace||!sourceColorSpace||!targetColorSpace||(this.spaces[sourceColorSpace].transfer===SRGBTransfer&&(color.r=SRGBToLinear(color.r),color.g=SRGBToLinear(color.g),color.b=SRGBToLinear(color.b)),this.spaces[sourceColorSpace].primaries!==this.spaces[targetColorSpace].primaries&&(color.applyMatrix3(this.spaces[sourceColorSpace].toXYZ),color.applyMatrix3(this.spaces[targetColorSpace].fromXYZ)),this.spaces[targetColorSpace].transfer===SRGBTransfer&&(color.r=LinearToSRGB(color.r),color.g=LinearToSRGB(color.g),color.b=LinearToSRGB(color.b))),color},workingToColorSpace:function(color,targetColorSpace){return this.convert(color,this.workingColorSpace,targetColorSpace)},colorSpaceToWorking:function(color,sourceColorSpace){return this.convert(color,sourceColorSpace,this.workingColorSpace)},getPrimaries:function(colorSpace){return this.spaces[colorSpace].primaries},getTransfer:function(colorSpace){return colorSpace===NoColorSpace?LinearTransfer:this.spaces[colorSpace].transfer},getLuminanceCoefficients:function(target,colorSpace=this.workingColorSpace){return target.fromArray(this.spaces[colorSpace].luminanceCoefficients)},define:function(colorSpaces){Object.assign(this.spaces,colorSpaces)},_getMatrix:function(targetMatrix,sourceColorSpace,targetColorSpace){return targetMatrix.copy(this.spaces[sourceColorSpace].toXYZ).multiply(this.spaces[targetColorSpace].fromXYZ)},_getDrawingBufferColorSpace:function(colorSpace){return this.spaces[colorSpace].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(colorSpace=this.workingColorSpace){return this.spaces[colorSpace].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(color,targetColorSpace){return warnOnce("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),ColorManagement2.workingToColorSpace(color,targetColorSpace)},toWorkingColorSpace:function(color,sourceColorSpace){return warnOnce("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),ColorManagement2.colorSpaceToWorking(color,sourceColorSpace)}},REC709_PRIMARIES=[.64,.33,.3,.6,.15,.06],REC709_LUMINANCE_COEFFICIENTS=[.2126,.7152,.0722],D65=[.3127,.329];return ColorManagement2.define({[LinearSRGBColorSpace]:{primaries:REC709_PRIMARIES,whitePoint:D65,transfer:LinearTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:REC709_LUMINANCE_COEFFICIENTS,workingColorSpaceConfig:{unpackColorSpace:SRGBColorSpace},outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}},[SRGBColorSpace]:{primaries:REC709_PRIMARIES,whitePoint:D65,transfer:SRGBTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:REC709_LUMINANCE_COEFFICIENTS,outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}}}),ColorManagement2}const ColorManagement=createColorManagement();function SRGBToLinear(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function LinearToSRGB(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(image,type="image/png"){if(/^data:/i.test(image.src)||typeof HTMLCanvasElement>"u")return image.src;let canvas;if(image instanceof HTMLCanvasElement)canvas=image;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=image.width,_canvas.height=image.height;const context=_canvas.getContext("2d");image instanceof ImageData?context.putImageData(image,0,0):context.drawImage(image,0,0,image.width,image.height),canvas=_canvas}return canvas.toDataURL(type)}static sRGBToLinear(image){if(typeof HTMLImageElement<"u"&&image instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&image instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&image instanceof ImageBitmap){const canvas=createElementNS("canvas");canvas.width=image.width,canvas.height=image.height;const context=canvas.getContext("2d");context.drawImage(image,0,0,image.width,image.height);const imageData=context.getImageData(0,0,image.width,image.height),data=imageData.data;for(let i=0;i<data.length;i++)data[i]=SRGBToLinear(data[i]/255)*255;return context.putImageData(imageData,0,0),canvas}else if(image.data){const data=image.data.slice(0);for(let i=0;i<data.length;i++)data instanceof Uint8Array||data instanceof Uint8ClampedArray?data[i]=Math.floor(SRGBToLinear(data[i]/255)*255):data[i]=SRGBToLinear(data[i]);return{data,width:image.width,height:image.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),image}}let _sourceId=0;class Source{constructor(data=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=data,this.dataReady=!0,this.version=0}getSize(target){const data=this.data;return data instanceof HTMLVideoElement?target.set(data.videoWidth,data.videoHeight):data!==null?target.set(data.width,data.height,data.depth||0):target.set(0,0,0),target}set needsUpdate(value){value===!0&&this.version++}toJSON(meta){const isRootObject=meta===void 0||typeof meta=="string";if(!isRootObject&&meta.images[this.uuid]!==void 0)return meta.images[this.uuid];const output={uuid:this.uuid,url:""},data=this.data;if(data!==null){let url;if(Array.isArray(data)){url=[];for(let i=0,l=data.length;i<l;i++)data[i].isDataTexture?url.push(serializeImage(data[i].image)):url.push(serializeImage(data[i]))}else url=serializeImage(data);output.url=url}return isRootObject||(meta.images[this.uuid]=output),output}}function serializeImage(image){return typeof HTMLImageElement<"u"&&image instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&image instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&image instanceof ImageBitmap?ImageUtils.getDataURL(image):image.data?{data:Array.from(image.data),width:image.width,height:image.height,type:image.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;const _tempVec3=new Vector3;class Texture extends EventDispatcher{constructor(image=Texture.DEFAULT_IMAGE,mapping=Texture.DEFAULT_MAPPING,wrapS=ClampToEdgeWrapping,wrapT=ClampToEdgeWrapping,magFilter=LinearFilter,minFilter=LinearMipmapLinearFilter,format=RGBAFormat,type=UnsignedByteType,anisotropy=Texture.DEFAULT_ANISOTROPY,colorSpace=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(image),this.mipmaps=[],this.mapping=mapping,this.channel=0,this.wrapS=wrapS,this.wrapT=wrapT,this.magFilter=magFilter,this.minFilter=minFilter,this.anisotropy=anisotropy,this.format=format,this.internalFormat=null,this.type=type,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=colorSpace,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(image&&image.depth&&image.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_tempVec3).x}get height(){return this.source.getSize(_tempVec3).y}get depth(){return this.source.getSize(_tempVec3).z}get image(){return this.source.data}set image(value=null){this.source.data=value}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(start,count){this.updateRanges.push({start,count})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(source){return this.name=source.name,this.source=source.source,this.mipmaps=source.mipmaps.slice(0),this.mapping=source.mapping,this.channel=source.channel,this.wrapS=source.wrapS,this.wrapT=source.wrapT,this.magFilter=source.magFilter,this.minFilter=source.minFilter,this.anisotropy=source.anisotropy,this.format=source.format,this.internalFormat=source.internalFormat,this.type=source.type,this.offset.copy(source.offset),this.repeat.copy(source.repeat),this.center.copy(source.center),this.rotation=source.rotation,this.matrixAutoUpdate=source.matrixAutoUpdate,this.matrix.copy(source.matrix),this.generateMipmaps=source.generateMipmaps,this.premultiplyAlpha=source.premultiplyAlpha,this.flipY=source.flipY,this.unpackAlignment=source.unpackAlignment,this.colorSpace=source.colorSpace,this.renderTarget=source.renderTarget,this.isRenderTargetTexture=source.isRenderTargetTexture,this.isArrayTexture=source.isArrayTexture,this.userData=JSON.parse(JSON.stringify(source.userData)),this.needsUpdate=!0,this}setValues(values){for(const key in values){const newValue=values[key];if(newValue===void 0){console.warn(`THREE.Texture.setValues(): parameter '${key}' has value of undefined.`);continue}const currentValue=this[key];if(currentValue===void 0){console.warn(`THREE.Texture.setValues(): property '${key}' does not exist.`);continue}currentValue&&newValue&&currentValue.isVector2&&newValue.isVector2||currentValue&&newValue&&currentValue.isVector3&&newValue.isVector3||currentValue&&newValue&&currentValue.isMatrix3&&newValue.isMatrix3?currentValue.copy(newValue):this[key]=newValue}}toJSON(meta){const isRootObject=meta===void 0||typeof meta=="string";if(!isRootObject&&meta.textures[this.uuid]!==void 0)return meta.textures[this.uuid];const output={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(meta).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(output.userData=this.userData),isRootObject||(meta.textures[this.uuid]=output),output}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(uv){if(this.mapping!==UVMapping)return uv;if(uv.applyMatrix3(this.matrix),uv.x<0||uv.x>1)switch(this.wrapS){case RepeatWrapping:uv.x=uv.x-Math.floor(uv.x);break;case ClampToEdgeWrapping:uv.x=uv.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(uv.x)%2)===1?uv.x=Math.ceil(uv.x)-uv.x:uv.x=uv.x-Math.floor(uv.x);break}if(uv.y<0||uv.y>1)switch(this.wrapT){case RepeatWrapping:uv.y=uv.y-Math.floor(uv.y);break;case ClampToEdgeWrapping:uv.y=uv.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(uv.y)%2)===1?uv.y=Math.ceil(uv.y)-uv.y:uv.y=uv.y-Math.floor(uv.y);break}return this.flipY&&(uv.y=1-uv.y),uv}set needsUpdate(value){value===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(value){value===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(x=0,y=0,z=0,w=1){Vector4.prototype.isVector4=!0,this.x=x,this.y=y,this.z=z,this.w=w}get width(){return this.z}set width(value){this.z=value}get height(){return this.w}set height(value){this.w=value}set(x,y,z,w){return this.x=x,this.y=y,this.z=z,this.w=w,this}setScalar(scalar){return this.x=scalar,this.y=scalar,this.z=scalar,this.w=scalar,this}setX(x){return this.x=x,this}setY(y){return this.y=y,this}setZ(z){return this.z=z,this}setW(w){return this.w=w,this}setComponent(index,value){switch(index){case 0:this.x=value;break;case 1:this.y=value;break;case 2:this.z=value;break;case 3:this.w=value;break;default:throw new Error("index is out of range: "+index)}return this}getComponent(index){switch(index){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+index)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(v){return this.x=v.x,this.y=v.y,this.z=v.z,this.w=v.w!==void 0?v.w:1,this}add(v){return this.x+=v.x,this.y+=v.y,this.z+=v.z,this.w+=v.w,this}addScalar(s){return this.x+=s,this.y+=s,this.z+=s,this.w+=s,this}addVectors(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this.w=a.w+b.w,this}addScaledVector(v,s){return this.x+=v.x*s,this.y+=v.y*s,this.z+=v.z*s,this.w+=v.w*s,this}sub(v){return this.x-=v.x,this.y-=v.y,this.z-=v.z,this.w-=v.w,this}subScalar(s){return this.x-=s,this.y-=s,this.z-=s,this.w-=s,this}subVectors(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this.w=a.w-b.w,this}multiply(v){return this.x*=v.x,this.y*=v.y,this.z*=v.z,this.w*=v.w,this}multiplyScalar(scalar){return this.x*=scalar,this.y*=scalar,this.z*=scalar,this.w*=scalar,this}applyMatrix4(m){const x=this.x,y=this.y,z=this.z,w=this.w,e=m.elements;return this.x=e[0]*x+e[4]*y+e[8]*z+e[12]*w,this.y=e[1]*x+e[5]*y+e[9]*z+e[13]*w,this.z=e[2]*x+e[6]*y+e[10]*z+e[14]*w,this.w=e[3]*x+e[7]*y+e[11]*z+e[15]*w,this}divide(v){return this.x/=v.x,this.y/=v.y,this.z/=v.z,this.w/=v.w,this}divideScalar(scalar){return this.multiplyScalar(1/scalar)}setAxisAngleFromQuaternion(q){this.w=2*Math.acos(q.w);const s=Math.sqrt(1-q.w*q.w);return s<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=q.x/s,this.y=q.y/s,this.z=q.z/s),this}setAxisAngleFromRotationMatrix(m){let angle,x,y,z;const te=m.elements,m11=te[0],m12=te[4],m13=te[8],m21=te[1],m22=te[5],m23=te[9],m31=te[2],m32=te[6],m33=te[10];if(Math.abs(m12-m21)<.01&&Math.abs(m13-m31)<.01&&Math.abs(m23-m32)<.01){if(Math.abs(m12+m21)<.1&&Math.abs(m13+m31)<.1&&Math.abs(m23+m32)<.1&&Math.abs(m11+m22+m33-3)<.1)return this.set(1,0,0,0),this;angle=Math.PI;const xx=(m11+1)/2,yy=(m22+1)/2,zz=(m33+1)/2,xy=(m12+m21)/4,xz=(m13+m31)/4,yz=(m23+m32)/4;return xx>yy&&xx>zz?xx<.01?(x=0,y=.707106781,z=.707106781):(x=Math.sqrt(xx),y=xy/x,z=xz/x):yy>zz?yy<.01?(x=.707106781,y=0,z=.707106781):(y=Math.sqrt(yy),x=xy/y,z=yz/y):zz<.01?(x=.707106781,y=.707106781,z=0):(z=Math.sqrt(zz),x=xz/z,y=yz/z),this.set(x,y,z,angle),this}let s=Math.sqrt((m32-m23)*(m32-m23)+(m13-m31)*(m13-m31)+(m21-m12)*(m21-m12));return Math.abs(s)<.001&&(s=1),this.x=(m32-m23)/s,this.y=(m13-m31)/s,this.z=(m21-m12)/s,this.w=Math.acos((m11+m22+m33-1)/2),this}setFromMatrixPosition(m){const e=m.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(v){return this.x=Math.min(this.x,v.x),this.y=Math.min(this.y,v.y),this.z=Math.min(this.z,v.z),this.w=Math.min(this.w,v.w),this}max(v){return this.x=Math.max(this.x,v.x),this.y=Math.max(this.y,v.y),this.z=Math.max(this.z,v.z),this.w=Math.max(this.w,v.w),this}clamp(min,max){return this.x=clamp(this.x,min.x,max.x),this.y=clamp(this.y,min.y,max.y),this.z=clamp(this.z,min.z,max.z),this.w=clamp(this.w,min.w,max.w),this}clampScalar(minVal,maxVal){return this.x=clamp(this.x,minVal,maxVal),this.y=clamp(this.y,minVal,maxVal),this.z=clamp(this.z,minVal,maxVal),this.w=clamp(this.w,minVal,maxVal),this}clampLength(min,max){const length=this.length();return this.divideScalar(length||1).multiplyScalar(clamp(length,min,max))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(v){return this.x*v.x+this.y*v.y+this.z*v.z+this.w*v.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(length){return this.normalize().multiplyScalar(length)}lerp(v,alpha){return this.x+=(v.x-this.x)*alpha,this.y+=(v.y-this.y)*alpha,this.z+=(v.z-this.z)*alpha,this.w+=(v.w-this.w)*alpha,this}lerpVectors(v1,v2,alpha){return this.x=v1.x+(v2.x-v1.x)*alpha,this.y=v1.y+(v2.y-v1.y)*alpha,this.z=v1.z+(v2.z-v1.z)*alpha,this.w=v1.w+(v2.w-v1.w)*alpha,this}equals(v){return v.x===this.x&&v.y===this.y&&v.z===this.z&&v.w===this.w}fromArray(array,offset=0){return this.x=array[offset],this.y=array[offset+1],this.z=array[offset+2],this.w=array[offset+3],this}toArray(array=[],offset=0){return array[offset]=this.x,array[offset+1]=this.y,array[offset+2]=this.z,array[offset+3]=this.w,array}fromBufferAttribute(attribute,index){return this.x=attribute.getX(index),this.y=attribute.getY(index),this.z=attribute.getZ(index),this.w=attribute.getW(index),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(width=1,height=1,options={}){super(),options=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},options),this.isRenderTarget=!0,this.width=width,this.height=height,this.depth=options.depth,this.scissor=new Vector4(0,0,width,height),this.scissorTest=!1,this.viewport=new Vector4(0,0,width,height);const image={width,height,depth:options.depth},texture=new Texture(image);this.textures=[];const count=options.count;for(let i=0;i<count;i++)this.textures[i]=texture.clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(options),this.depthBuffer=options.depthBuffer,this.stencilBuffer=options.stencilBuffer,this.resolveDepthBuffer=options.resolveDepthBuffer,this.resolveStencilBuffer=options.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=options.depthTexture,this.samples=options.samples,this.multiview=options.multiview}_setTextureOptions(options={}){const values={minFilter:LinearFilter,generateMipmaps:!1,flipY:!1,internalFormat:null};options.mapping!==void 0&&(values.mapping=options.mapping),options.wrapS!==void 0&&(values.wrapS=options.wrapS),options.wrapT!==void 0&&(values.wrapT=options.wrapT),options.wrapR!==void 0&&(values.wrapR=options.wrapR),options.magFilter!==void 0&&(values.magFilter=options.magFilter),options.minFilter!==void 0&&(values.minFilter=options.minFilter),options.format!==void 0&&(values.format=options.format),options.type!==void 0&&(values.type=options.type),options.anisotropy!==void 0&&(values.anisotropy=options.anisotropy),options.colorSpace!==void 0&&(values.colorSpace=options.colorSpace),options.flipY!==void 0&&(values.flipY=options.flipY),options.generateMipmaps!==void 0&&(values.generateMipmaps=options.generateMipmaps),options.internalFormat!==void 0&&(values.internalFormat=options.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(values)}get texture(){return this.textures[0]}set texture(value){this.textures[0]=value}set depthTexture(current){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),current!==null&&(current.renderTarget=this),this._depthTexture=current}get depthTexture(){return this._depthTexture}setSize(width,height,depth=1){if(this.width!==width||this.height!==height||this.depth!==depth){this.width=width,this.height=height,this.depth=depth;for(let i=0,il=this.textures.length;i<il;i++)this.textures[i].image.width=width,this.textures[i].image.height=height,this.textures[i].image.depth=depth,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,width,height),this.scissor.set(0,0,width,height)}clone(){return new this.constructor().copy(this)}copy(source){this.width=source.width,this.height=source.height,this.depth=source.depth,this.scissor.copy(source.scissor),this.scissorTest=source.scissorTest,this.viewport.copy(source.viewport),this.textures.length=0;for(let i=0,il=source.textures.length;i<il;i++){this.textures[i]=source.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const image=Object.assign({},source.textures[i].image);this.textures[i].source=new Source(image)}return this.depthBuffer=source.depthBuffer,this.stencilBuffer=source.stencilBuffer,this.resolveDepthBuffer=source.resolveDepthBuffer,this.resolveStencilBuffer=source.resolveStencilBuffer,source.depthTexture!==null&&(this.depthTexture=source.depthTexture.clone()),this.samples=source.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(width=1,height=1,options={}){super(width,height,options),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(data=null,width=1,height=1,depth=1){super(null),this.isDataArrayTexture=!0,this.image={data,width,height,depth},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(layerIndex){this.layerUpdates.add(layerIndex)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(data=null,width=1,height=1,depth=1){super(null),this.isData3DTexture=!0,this.image={data,width,height,depth},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Box3{constructor(min=new Vector3(1/0,1/0,1/0),max=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=min,this.max=max}set(min,max){return this.min.copy(min),this.max.copy(max),this}setFromArray(array){this.makeEmpty();for(let i=0,il=array.length;i<il;i+=3)this.expandByPoint(_vector$b.fromArray(array,i));return this}setFromBufferAttribute(attribute){this.makeEmpty();for(let i=0,il=attribute.count;i<il;i++)this.expandByPoint(_vector$b.fromBufferAttribute(attribute,i));return this}setFromPoints(points){this.makeEmpty();for(let i=0,il=points.length;i<il;i++)this.expandByPoint(points[i]);return this}setFromCenterAndSize(center,size){const halfSize=_vector$b.copy(size).multiplyScalar(.5);return this.min.copy(center).sub(halfSize),this.max.copy(center).add(halfSize),this}setFromObject(object,precise=!1){return this.makeEmpty(),this.expandByObject(object,precise)}clone(){return new this.constructor().copy(this)}copy(box){return this.min.copy(box.min),this.max.copy(box.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(target){return this.isEmpty()?target.set(0,0,0):target.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(target){return this.isEmpty()?target.set(0,0,0):target.subVectors(this.max,this.min)}expandByPoint(point){return this.min.min(point),this.max.max(point),this}expandByVector(vector){return this.min.sub(vector),this.max.add(vector),this}expandByScalar(scalar){return this.min.addScalar(-scalar),this.max.addScalar(scalar),this}expandByObject(object,precise=!1){object.updateWorldMatrix(!1,!1);const geometry=object.geometry;if(geometry!==void 0){const positionAttribute=geometry.getAttribute("position");if(precise===!0&&positionAttribute!==void 0&&object.isInstancedMesh!==!0)for(let i=0,l=positionAttribute.count;i<l;i++)object.isMesh===!0?object.getVertexPosition(i,_vector$b):_vector$b.fromBufferAttribute(positionAttribute,i),_vector$b.applyMatrix4(object.matrixWorld),this.expandByPoint(_vector$b);else object.boundingBox!==void 0?(object.boundingBox===null&&object.computeBoundingBox(),_box$4.copy(object.boundingBox)):(geometry.boundingBox===null&&geometry.computeBoundingBox(),_box$4.copy(geometry.boundingBox)),_box$4.applyMatrix4(object.matrixWorld),this.union(_box$4)}const children=object.children;for(let i=0,l=children.length;i<l;i++)this.expandByObject(children[i],precise);return this}containsPoint(point){return point.x>=this.min.x&&point.x<=this.max.x&&point.y>=this.min.y&&point.y<=this.max.y&&point.z>=this.min.z&&point.z<=this.max.z}containsBox(box){return this.min.x<=box.min.x&&box.max.x<=this.max.x&&this.min.y<=box.min.y&&box.max.y<=this.max.y&&this.min.z<=box.min.z&&box.max.z<=this.max.z}getParameter(point,target){return target.set((point.x-this.min.x)/(this.max.x-this.min.x),(point.y-this.min.y)/(this.max.y-this.min.y),(point.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(box){return box.max.x>=this.min.x&&box.min.x<=this.max.x&&box.max.y>=this.min.y&&box.min.y<=this.max.y&&box.max.z>=this.min.z&&box.min.z<=this.max.z}intersectsSphere(sphere){return this.clampPoint(sphere.center,_vector$b),_vector$b.distanceToSquared(sphere.center)<=sphere.radius*sphere.radius}intersectsPlane(plane){let min,max;return plane.normal.x>0?(min=plane.normal.x*this.min.x,max=plane.normal.x*this.max.x):(min=plane.normal.x*this.max.x,max=plane.normal.x*this.min.x),plane.normal.y>0?(min+=plane.normal.y*this.min.y,max+=plane.normal.y*this.max.y):(min+=plane.normal.y*this.max.y,max+=plane.normal.y*this.min.y),plane.normal.z>0?(min+=plane.normal.z*this.min.z,max+=plane.normal.z*this.max.z):(min+=plane.normal.z*this.max.z,max+=plane.normal.z*this.min.z),min<=-plane.constant&&max>=-plane.constant}intersectsTriangle(triangle){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(triangle.a,_center),_v1$7.subVectors(triangle.b,_center),_v2$4.subVectors(triangle.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let axes=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(axes,_v0$2,_v1$7,_v2$4,_extents)||(axes=[1,0,0,0,1,0,0,0,1],!satForAxes(axes,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),axes=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(axes,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(point,target){return target.copy(point).clamp(this.min,this.max)}distanceToPoint(point){return this.clampPoint(point,_vector$b).distanceTo(point)}getBoundingSphere(target){return this.isEmpty()?target.makeEmpty():(this.getCenter(target.center),target.radius=this.getSize(_vector$b).length()*.5),target}intersect(box){return this.min.max(box.min),this.max.min(box.max),this.isEmpty()&&this.makeEmpty(),this}union(box){return this.min.min(box.min),this.max.max(box.max),this}applyMatrix4(matrix){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(matrix),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(matrix),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(matrix),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(matrix),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(matrix),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(matrix),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(matrix),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(matrix),this.setFromPoints(_points),this)}translate(offset){return this.min.add(offset),this.max.add(offset),this}equals(box){return box.min.equals(this.min)&&box.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(json){return this.min.fromArray(json.min),this.max.fromArray(json.max),this}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(axes,v0,v1,v2,extents){for(let i=0,j=axes.length-3;i<=j;i+=3){_testAxis.fromArray(axes,i);const r=extents.x*Math.abs(_testAxis.x)+extents.y*Math.abs(_testAxis.y)+extents.z*Math.abs(_testAxis.z),p0=v0.dot(_testAxis),p1=v1.dot(_testAxis),p2=v2.dot(_testAxis);if(Math.max(-Math.max(p0,p1,p2),Math.min(p0,p1,p2))>r)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(center=new Vector3,radius=-1){this.isSphere=!0,this.center=center,this.radius=radius}set(center,radius){return this.center.copy(center),this.radius=radius,this}setFromPoints(points,optionalCenter){const center=this.center;optionalCenter!==void 0?center.copy(optionalCenter):_box$3.setFromPoints(points).getCenter(center);let maxRadiusSq=0;for(let i=0,il=points.length;i<il;i++)maxRadiusSq=Math.max(maxRadiusSq,center.distanceToSquared(points[i]));return this.radius=Math.sqrt(maxRadiusSq),this}copy(sphere){return this.center.copy(sphere.center),this.radius=sphere.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(point){return point.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(point){return point.distanceTo(this.center)-this.radius}intersectsSphere(sphere){const radiusSum=this.radius+sphere.radius;return sphere.center.distanceToSquared(this.center)<=radiusSum*radiusSum}intersectsBox(box){return box.intersectsSphere(this)}intersectsPlane(plane){return Math.abs(plane.distanceToPoint(this.center))<=this.radius}clampPoint(point,target){const deltaLengthSq=this.center.distanceToSquared(point);return target.copy(point),deltaLengthSq>this.radius*this.radius&&(target.sub(this.center).normalize(),target.multiplyScalar(this.radius).add(this.center)),target}getBoundingBox(target){return this.isEmpty()?(target.makeEmpty(),target):(target.set(this.center,this.center),target.expandByScalar(this.radius),target)}applyMatrix4(matrix){return this.center.applyMatrix4(matrix),this.radius=this.radius*matrix.getMaxScaleOnAxis(),this}translate(offset){return this.center.add(offset),this}expandByPoint(point){if(this.isEmpty())return this.center.copy(point),this.radius=0,this;_v1$6.subVectors(point,this.center);const lengthSq=_v1$6.lengthSq();if(lengthSq>this.radius*this.radius){const length=Math.sqrt(lengthSq),delta=(length-this.radius)*.5;this.center.addScaledVector(_v1$6,delta/length),this.radius+=delta}return this}union(sphere){return sphere.isEmpty()?this:this.isEmpty()?(this.copy(sphere),this):(this.center.equals(sphere.center)===!0?this.radius=Math.max(this.radius,sphere.radius):(_v2$3.subVectors(sphere.center,this.center).setLength(sphere.radius),this.expandByPoint(_v1$6.copy(sphere.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(sphere.center).sub(_v2$3))),this)}equals(sphere){return sphere.center.equals(this.center)&&sphere.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(json){return this.radius=json.radius,this.center.fromArray(json.center),this}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(origin=new Vector3,direction=new Vector3(0,0,-1)){this.origin=origin,this.direction=direction}set(origin,direction){return this.origin.copy(origin),this.direction.copy(direction),this}copy(ray){return this.origin.copy(ray.origin),this.direction.copy(ray.direction),this}at(t,target){return target.copy(this.origin).addScaledVector(this.direction,t)}lookAt(v){return this.direction.copy(v).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_vector$a)),this}closestPointToPoint(point,target){target.subVectors(point,this.origin);const directionDistance=target.dot(this.direction);return directionDistance<0?target.copy(this.origin):target.copy(this.origin).addScaledVector(this.direction,directionDistance)}distanceToPoint(point){return Math.sqrt(this.distanceSqToPoint(point))}distanceSqToPoint(point){const directionDistance=_vector$a.subVectors(point,this.origin).dot(this.direction);return directionDistance<0?this.origin.distanceToSquared(point):(_vector$a.copy(this.origin).addScaledVector(this.direction,directionDistance),_vector$a.distanceToSquared(point))}distanceSqToSegment(v0,v1,optionalPointOnRay,optionalPointOnSegment){_segCenter.copy(v0).add(v1).multiplyScalar(.5),_segDir.copy(v1).sub(v0).normalize(),_diff.copy(this.origin).sub(_segCenter);const segExtent=v0.distanceTo(v1)*.5,a01=-this.direction.dot(_segDir),b0=_diff.dot(this.direction),b1=-_diff.dot(_segDir),c=_diff.lengthSq(),det=Math.abs(1-a01*a01);let s0,s1,sqrDist,extDet;if(det>0)if(s0=a01*b1-b0,s1=a01*b0-b1,extDet=segExtent*det,s0>=0)if(s1>=-extDet)if(s1<=extDet){const invDet=1/det;s0*=invDet,s1*=invDet,sqrDist=s0*(s0+a01*s1+2*b0)+s1*(a01*s0+s1+2*b1)+c}else s1=segExtent,s0=Math.max(0,-(a01*s1+b0)),sqrDist=-s0*s0+s1*(s1+2*b1)+c;else s1=-segExtent,s0=Math.max(0,-(a01*s1+b0)),sqrDist=-s0*s0+s1*(s1+2*b1)+c;else s1<=-extDet?(s0=Math.max(0,-(-a01*segExtent+b0)),s1=s0>0?-segExtent:Math.min(Math.max(-segExtent,-b1),segExtent),sqrDist=-s0*s0+s1*(s1+2*b1)+c):s1<=extDet?(s0=0,s1=Math.min(Math.max(-segExtent,-b1),segExtent),sqrDist=s1*(s1+2*b1)+c):(s0=Math.max(0,-(a01*segExtent+b0)),s1=s0>0?segExtent:Math.min(Math.max(-segExtent,-b1),segExtent),sqrDist=-s0*s0+s1*(s1+2*b1)+c);else s1=a01>0?-segExtent:segExtent,s0=Math.max(0,-(a01*s1+b0)),sqrDist=-s0*s0+s1*(s1+2*b1)+c;return optionalPointOnRay&&optionalPointOnRay.copy(this.origin).addScaledVector(this.direction,s0),optionalPointOnSegment&&optionalPointOnSegment.copy(_segCenter).addScaledVector(_segDir,s1),sqrDist}intersectSphere(sphere,target){_vector$a.subVectors(sphere.center,this.origin);const tca=_vector$a.dot(this.direction),d2=_vector$a.dot(_vector$a)-tca*tca,radius2=sphere.radius*sphere.radius;if(d2>radius2)return null;const thc=Math.sqrt(radius2-d2),t0=tca-thc,t1=tca+thc;return t1<0?null:t0<0?this.at(t1,target):this.at(t0,target)}intersectsSphere(sphere){return sphere.radius<0?!1:this.distanceSqToPoint(sphere.center)<=sphere.radius*sphere.radius}distanceToPlane(plane){const denominator=plane.normal.dot(this.direction);if(denominator===0)return plane.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(plane.normal)+plane.constant)/denominator;return t>=0?t:null}intersectPlane(plane,target){const t=this.distanceToPlane(plane);return t===null?null:this.at(t,target)}intersectsPlane(plane){const distToPoint=plane.distanceToPoint(this.origin);return distToPoint===0||plane.normal.dot(this.direction)*distToPoint<0}intersectBox(box,target){let tmin,tmax,tymin,tymax,tzmin,tzmax;const invdirx=1/this.direction.x,invdiry=1/this.direction.y,invdirz=1/this.direction.z,origin=this.origin;return invdirx>=0?(tmin=(box.min.x-origin.x)*invdirx,tmax=(box.max.x-origin.x)*invdirx):(tmin=(box.max.x-origin.x)*invdirx,tmax=(box.min.x-origin.x)*invdirx),invdiry>=0?(tymin=(box.min.y-origin.y)*invdiry,tymax=(box.max.y-origin.y)*invdiry):(tymin=(box.max.y-origin.y)*invdiry,tymax=(box.min.y-origin.y)*invdiry),tmin>tymax||tymin>tmax||((tymin>tmin||isNaN(tmin))&&(tmin=tymin),(tymax<tmax||isNaN(tmax))&&(tmax=tymax),invdirz>=0?(tzmin=(box.min.z-origin.z)*invdirz,tzmax=(box.max.z-origin.z)*invdirz):(tzmin=(box.max.z-origin.z)*invdirz,tzmax=(box.min.z-origin.z)*invdirz),tmin>tzmax||tzmin>tmax)||((tzmin>tmin||tmin!==tmin)&&(tmin=tzmin),(tzmax<tmax||tmax!==tmax)&&(tmax=tzmax),tmax<0)?null:this.at(tmin>=0?tmin:tmax,target)}intersectsBox(box){return this.intersectBox(box,_vector$a)!==null}intersectTriangle(a,b,c,backfaceCulling,target){_edge1.subVectors(b,a),_edge2.subVectors(c,a),_normal$1.crossVectors(_edge1,_edge2);let DdN=this.direction.dot(_normal$1),sign;if(DdN>0){if(backfaceCulling)return null;sign=1}else if(DdN<0)sign=-1,DdN=-DdN;else return null;_diff.subVectors(this.origin,a);const DdQxE2=sign*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(DdQxE2<0)return null;const DdE1xQ=sign*this.direction.dot(_edge1.cross(_diff));if(DdE1xQ<0||DdQxE2+DdE1xQ>DdN)return null;const QdN=-sign*_diff.dot(_normal$1);return QdN<0?null:this.at(QdN/DdN,target)}applyMatrix4(matrix4){return this.origin.applyMatrix4(matrix4),this.direction.transformDirection(matrix4),this}equals(ray){return ray.origin.equals(this.origin)&&ray.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(n11,n12,n13,n14,n21,n22,n23,n24,n31,n32,n33,n34,n41,n42,n43,n44){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n11!==void 0&&this.set(n11,n12,n13,n14,n21,n22,n23,n24,n31,n32,n33,n34,n41,n42,n43,n44)}set(n11,n12,n13,n14,n21,n22,n23,n24,n31,n32,n33,n34,n41,n42,n43,n44){const te=this.elements;return te[0]=n11,te[4]=n12,te[8]=n13,te[12]=n14,te[1]=n21,te[5]=n22,te[9]=n23,te[13]=n24,te[2]=n31,te[6]=n32,te[10]=n33,te[14]=n34,te[3]=n41,te[7]=n42,te[11]=n43,te[15]=n44,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(m){const te=this.elements,me=m.elements;return te[0]=me[0],te[1]=me[1],te[2]=me[2],te[3]=me[3],te[4]=me[4],te[5]=me[5],te[6]=me[6],te[7]=me[7],te[8]=me[8],te[9]=me[9],te[10]=me[10],te[11]=me[11],te[12]=me[12],te[13]=me[13],te[14]=me[14],te[15]=me[15],this}copyPosition(m){const te=this.elements,me=m.elements;return te[12]=me[12],te[13]=me[13],te[14]=me[14],this}setFromMatrix3(m){const me=m.elements;return this.set(me[0],me[3],me[6],0,me[1],me[4],me[7],0,me[2],me[5],me[8],0,0,0,0,1),this}extractBasis(xAxis,yAxis,zAxis){return xAxis.setFromMatrixColumn(this,0),yAxis.setFromMatrixColumn(this,1),zAxis.setFromMatrixColumn(this,2),this}makeBasis(xAxis,yAxis,zAxis){return this.set(xAxis.x,yAxis.x,zAxis.x,0,xAxis.y,yAxis.y,zAxis.y,0,xAxis.z,yAxis.z,zAxis.z,0,0,0,0,1),this}extractRotation(m){const te=this.elements,me=m.elements,scaleX=1/_v1$5.setFromMatrixColumn(m,0).length(),scaleY=1/_v1$5.setFromMatrixColumn(m,1).length(),scaleZ=1/_v1$5.setFromMatrixColumn(m,2).length();return te[0]=me[0]*scaleX,te[1]=me[1]*scaleX,te[2]=me[2]*scaleX,te[3]=0,te[4]=me[4]*scaleY,te[5]=me[5]*scaleY,te[6]=me[6]*scaleY,te[7]=0,te[8]=me[8]*scaleZ,te[9]=me[9]*scaleZ,te[10]=me[10]*scaleZ,te[11]=0,te[12]=0,te[13]=0,te[14]=0,te[15]=1,this}makeRotationFromEuler(euler){const te=this.elements,x=euler.x,y=euler.y,z=euler.z,a=Math.cos(x),b=Math.sin(x),c=Math.cos(y),d=Math.sin(y),e=Math.cos(z),f=Math.sin(z);if(euler.order==="XYZ"){const ae=a*e,af=a*f,be=b*e,bf=b*f;te[0]=c*e,te[4]=-c*f,te[8]=d,te[1]=af+be*d,te[5]=ae-bf*d,te[9]=-b*c,te[2]=bf-ae*d,te[6]=be+af*d,te[10]=a*c}else if(euler.order==="YXZ"){const ce=c*e,cf=c*f,de=d*e,df=d*f;te[0]=ce+df*b,te[4]=de*b-cf,te[8]=a*d,te[1]=a*f,te[5]=a*e,te[9]=-b,te[2]=cf*b-de,te[6]=df+ce*b,te[10]=a*c}else if(euler.order==="ZXY"){const ce=c*e,cf=c*f,de=d*e,df=d*f;te[0]=ce-df*b,te[4]=-a*f,te[8]=de+cf*b,te[1]=cf+de*b,te[5]=a*e,te[9]=df-ce*b,te[2]=-a*d,te[6]=b,te[10]=a*c}else if(euler.order==="ZYX"){const ae=a*e,af=a*f,be=b*e,bf=b*f;te[0]=c*e,te[4]=be*d-af,te[8]=ae*d+bf,te[1]=c*f,te[5]=bf*d+ae,te[9]=af*d-be,te[2]=-d,te[6]=b*c,te[10]=a*c}else if(euler.order==="YZX"){const ac=a*c,ad=a*d,bc=b*c,bd=b*d;te[0]=c*e,te[4]=bd-ac*f,te[8]=bc*f+ad,te[1]=f,te[5]=a*e,te[9]=-b*e,te[2]=-d*e,te[6]=ad*f+bc,te[10]=ac-bd*f}else if(euler.order==="XZY"){const ac=a*c,ad=a*d,bc=b*c,bd=b*d;te[0]=c*e,te[4]=-f,te[8]=d*e,te[1]=ac*f+bd,te[5]=a*e,te[9]=ad*f-bc,te[2]=bc*f-ad,te[6]=b*e,te[10]=bd*f+ac}return te[3]=0,te[7]=0,te[11]=0,te[12]=0,te[13]=0,te[14]=0,te[15]=1,this}makeRotationFromQuaternion(q){return this.compose(_zero,q,_one)}lookAt(eye,target,up){const te=this.elements;return _z.subVectors(eye,target),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(up,_z),_x.lengthSq()===0&&(Math.abs(up.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(up,_z)),_x.normalize(),_y.crossVectors(_z,_x),te[0]=_x.x,te[4]=_y.x,te[8]=_z.x,te[1]=_x.y,te[5]=_y.y,te[9]=_z.y,te[2]=_x.z,te[6]=_y.z,te[10]=_z.z,this}multiply(m){return this.multiplyMatrices(this,m)}premultiply(m){return this.multiplyMatrices(m,this)}multiplyMatrices(a,b){const ae=a.elements,be=b.elements,te=this.elements,a11=ae[0],a12=ae[4],a13=ae[8],a14=ae[12],a21=ae[1],a22=ae[5],a23=ae[9],a24=ae[13],a31=ae[2],a32=ae[6],a33=ae[10],a34=ae[14],a41=ae[3],a42=ae[7],a43=ae[11],a44=ae[15],b11=be[0],b12=be[4],b13=be[8],b14=be[12],b21=be[1],b22=be[5],b23=be[9],b24=be[13],b31=be[2],b32=be[6],b33=be[10],b34=be[14],b41=be[3],b42=be[7],b43=be[11],b44=be[15];return te[0]=a11*b11+a12*b21+a13*b31+a14*b41,te[4]=a11*b12+a12*b22+a13*b32+a14*b42,te[8]=a11*b13+a12*b23+a13*b33+a14*b43,te[12]=a11*b14+a12*b24+a13*b34+a14*b44,te[1]=a21*b11+a22*b21+a23*b31+a24*b41,te[5]=a21*b12+a22*b22+a23*b32+a24*b42,te[9]=a21*b13+a22*b23+a23*b33+a24*b43,te[13]=a21*b14+a22*b24+a23*b34+a24*b44,te[2]=a31*b11+a32*b21+a33*b31+a34*b41,te[6]=a31*b12+a32*b22+a33*b32+a34*b42,te[10]=a31*b13+a32*b23+a33*b33+a34*b43,te[14]=a31*b14+a32*b24+a33*b34+a34*b44,te[3]=a41*b11+a42*b21+a43*b31+a44*b41,te[7]=a41*b12+a42*b22+a43*b32+a44*b42,te[11]=a41*b13+a42*b23+a43*b33+a44*b43,te[15]=a41*b14+a42*b24+a43*b34+a44*b44,this}multiplyScalar(s){const te=this.elements;return te[0]*=s,te[4]*=s,te[8]*=s,te[12]*=s,te[1]*=s,te[5]*=s,te[9]*=s,te[13]*=s,te[2]*=s,te[6]*=s,te[10]*=s,te[14]*=s,te[3]*=s,te[7]*=s,te[11]*=s,te[15]*=s,this}determinant(){const te=this.elements,n11=te[0],n12=te[4],n13=te[8],n14=te[12],n21=te[1],n22=te[5],n23=te[9],n24=te[13],n31=te[2],n32=te[6],n33=te[10],n34=te[14],n41=te[3],n42=te[7],n43=te[11],n44=te[15];return n41*(+n14*n23*n32-n13*n24*n32-n14*n22*n33+n12*n24*n33+n13*n22*n34-n12*n23*n34)+n42*(+n11*n23*n34-n11*n24*n33+n14*n21*n33-n13*n21*n34+n13*n24*n31-n14*n23*n31)+n43*(+n11*n24*n32-n11*n22*n34-n14*n21*n32+n12*n21*n34+n14*n22*n31-n12*n24*n31)+n44*(-n13*n22*n31-n11*n23*n32+n11*n22*n33+n13*n21*n32-n12*n21*n33+n12*n23*n31)}transpose(){const te=this.elements;let tmp;return tmp=te[1],te[1]=te[4],te[4]=tmp,tmp=te[2],te[2]=te[8],te[8]=tmp,tmp=te[6],te[6]=te[9],te[9]=tmp,tmp=te[3],te[3]=te[12],te[12]=tmp,tmp=te[7],te[7]=te[13],te[13]=tmp,tmp=te[11],te[11]=te[14],te[14]=tmp,this}setPosition(x,y,z){const te=this.elements;return x.isVector3?(te[12]=x.x,te[13]=x.y,te[14]=x.z):(te[12]=x,te[13]=y,te[14]=z),this}invert(){const te=this.elements,n11=te[0],n21=te[1],n31=te[2],n41=te[3],n12=te[4],n22=te[5],n32=te[6],n42=te[7],n13=te[8],n23=te[9],n33=te[10],n43=te[11],n14=te[12],n24=te[13],n34=te[14],n44=te[15],t11=n23*n34*n42-n24*n33*n42+n24*n32*n43-n22*n34*n43-n23*n32*n44+n22*n33*n44,t12=n14*n33*n42-n13*n34*n42-n14*n32*n43+n12*n34*n43+n13*n32*n44-n12*n33*n44,t13=n13*n24*n42-n14*n23*n42+n14*n22*n43-n12*n24*n43-n13*n22*n44+n12*n23*n44,t14=n14*n23*n32-n13*n24*n32-n14*n22*n33+n12*n24*n33+n13*n22*n34-n12*n23*n34,det=n11*t11+n21*t12+n31*t13+n41*t14;if(det===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const detInv=1/det;return te[0]=t11*detInv,te[1]=(n24*n33*n41-n23*n34*n41-n24*n31*n43+n21*n34*n43+n23*n31*n44-n21*n33*n44)*detInv,te[2]=(n22*n34*n41-n24*n32*n41+n24*n31*n42-n21*n34*n42-n22*n31*n44+n21*n32*n44)*detInv,te[3]=(n23*n32*n41-n22*n33*n41-n23*n31*n42+n21*n33*n42+n22*n31*n43-n21*n32*n43)*detInv,te[4]=t12*detInv,te[5]=(n13*n34*n41-n14*n33*n41+n14*n31*n43-n11*n34*n43-n13*n31*n44+n11*n33*n44)*detInv,te[6]=(n14*n32*n41-n12*n34*n41-n14*n31*n42+n11*n34*n42+n12*n31*n44-n11*n32*n44)*detInv,te[7]=(n12*n33*n41-n13*n32*n41+n13*n31*n42-n11*n33*n42-n12*n31*n43+n11*n32*n43)*detInv,te[8]=t13*detInv,te[9]=(n14*n23*n41-n13*n24*n41-n14*n21*n43+n11*n24*n43+n13*n21*n44-n11*n23*n44)*detInv,te[10]=(n12*n24*n41-n14*n22*n41+n14*n21*n42-n11*n24*n42-n12*n21*n44+n11*n22*n44)*detInv,te[11]=(n13*n22*n41-n12*n23*n41-n13*n21*n42+n11*n23*n42+n12*n21*n43-n11*n22*n43)*detInv,te[12]=t14*detInv,te[13]=(n13*n24*n31-n14*n23*n31+n14*n21*n33-n11*n24*n33-n13*n21*n34+n11*n23*n34)*detInv,te[14]=(n14*n22*n31-n12*n24*n31-n14*n21*n32+n11*n24*n32+n12*n21*n34-n11*n22*n34)*detInv,te[15]=(n12*n23*n31-n13*n22*n31+n13*n21*n32-n11*n23*n32-n12*n21*n33+n11*n22*n33)*detInv,this}scale(v){const te=this.elements,x=v.x,y=v.y,z=v.z;return te[0]*=x,te[4]*=y,te[8]*=z,te[1]*=x,te[5]*=y,te[9]*=z,te[2]*=x,te[6]*=y,te[10]*=z,te[3]*=x,te[7]*=y,te[11]*=z,this}getMaxScaleOnAxis(){const te=this.elements,scaleXSq=te[0]*te[0]+te[1]*te[1]+te[2]*te[2],scaleYSq=te[4]*te[4]+te[5]*te[5]+te[6]*te[6],scaleZSq=te[8]*te[8]+te[9]*te[9]+te[10]*te[10];return Math.sqrt(Math.max(scaleXSq,scaleYSq,scaleZSq))}makeTranslation(x,y,z){return x.isVector3?this.set(1,0,0,x.x,0,1,0,x.y,0,0,1,x.z,0,0,0,1):this.set(1,0,0,x,0,1,0,y,0,0,1,z,0,0,0,1),this}makeRotationX(theta){const c=Math.cos(theta),s=Math.sin(theta);return this.set(1,0,0,0,0,c,-s,0,0,s,c,0,0,0,0,1),this}makeRotationY(theta){const c=Math.cos(theta),s=Math.sin(theta);return this.set(c,0,s,0,0,1,0,0,-s,0,c,0,0,0,0,1),this}makeRotationZ(theta){const c=Math.cos(theta),s=Math.sin(theta);return this.set(c,-s,0,0,s,c,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(axis,angle){const c=Math.cos(angle),s=Math.sin(angle),t=1-c,x=axis.x,y=axis.y,z=axis.z,tx=t*x,ty=t*y;return this.set(tx*x+c,tx*y-s*z,tx*z+s*y,0,tx*y+s*z,ty*y+c,ty*z-s*x,0,tx*z-s*y,ty*z+s*x,t*z*z+c,0,0,0,0,1),this}makeScale(x,y,z){return this.set(x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1),this}makeShear(xy,xz,yx,yz,zx,zy){return this.set(1,yx,zx,0,xy,1,zy,0,xz,yz,1,0,0,0,0,1),this}compose(position,quaternion,scale){const te=this.elements,x=quaternion._x,y=quaternion._y,z=quaternion._z,w=quaternion._w,x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2,sx=scale.x,sy=scale.y,sz=scale.z;return te[0]=(1-(yy+zz))*sx,te[1]=(xy+wz)*sx,te[2]=(xz-wy)*sx,te[3]=0,te[4]=(xy-wz)*sy,te[5]=(1-(xx+zz))*sy,te[6]=(yz+wx)*sy,te[7]=0,te[8]=(xz+wy)*sz,te[9]=(yz-wx)*sz,te[10]=(1-(xx+yy))*sz,te[11]=0,te[12]=position.x,te[13]=position.y,te[14]=position.z,te[15]=1,this}decompose(position,quaternion,scale){const te=this.elements;let sx=_v1$5.set(te[0],te[1],te[2]).length();const sy=_v1$5.set(te[4],te[5],te[6]).length(),sz=_v1$5.set(te[8],te[9],te[10]).length();this.determinant()<0&&(sx=-sx),position.x=te[12],position.y=te[13],position.z=te[14],_m1$2.copy(this);const invSX=1/sx,invSY=1/sy,invSZ=1/sz;return _m1$2.elements[0]*=invSX,_m1$2.elements[1]*=invSX,_m1$2.elements[2]*=invSX,_m1$2.elements[4]*=invSY,_m1$2.elements[5]*=invSY,_m1$2.elements[6]*=invSY,_m1$2.elements[8]*=invSZ,_m1$2.elements[9]*=invSZ,_m1$2.elements[10]*=invSZ,quaternion.setFromRotationMatrix(_m1$2),scale.x=sx,scale.y=sy,scale.z=sz,this}makePerspective(left,right,top,bottom,near,far,coordinateSystem=WebGLCoordinateSystem){const te=this.elements,x=2*near/(right-left),y=2*near/(top-bottom),a=(right+left)/(right-left),b=(top+bottom)/(top-bottom);let c,d;if(coordinateSystem===WebGLCoordinateSystem)c=-(far+near)/(far-near),d=-2*far*near/(far-near);else if(coordinateSystem===WebGPUCoordinateSystem)c=-far/(far-near),d=-far*near/(far-near);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+coordinateSystem);return te[0]=x,te[4]=0,te[8]=a,te[12]=0,te[1]=0,te[5]=y,te[9]=b,te[13]=0,te[2]=0,te[6]=0,te[10]=c,te[14]=d,te[3]=0,te[7]=0,te[11]=-1,te[15]=0,this}makeOrthographic(left,right,top,bottom,near,far,coordinateSystem=WebGLCoordinateSystem){const te=this.elements,w=1/(right-left),h=1/(top-bottom),p2=1/(far-near),x=(right+left)*w,y=(top+bottom)*h;let z,zInv;if(coordinateSystem===WebGLCoordinateSystem)z=(far+near)*p2,zInv=-2*p2;else if(coordinateSystem===WebGPUCoordinateSystem)z=near*p2,zInv=-1*p2;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+coordinateSystem);return te[0]=2*w,te[4]=0,te[8]=0,te[12]=-x,te[1]=0,te[5]=2*h,te[9]=0,te[13]=-y,te[2]=0,te[6]=0,te[10]=zInv,te[14]=-z,te[3]=0,te[7]=0,te[11]=0,te[15]=1,this}equals(matrix){const te=this.elements,me=matrix.elements;for(let i=0;i<16;i++)if(te[i]!==me[i])return!1;return!0}fromArray(array,offset=0){for(let i=0;i<16;i++)this.elements[i]=array[i+offset];return this}toArray(array=[],offset=0){const te=this.elements;return array[offset]=te[0],array[offset+1]=te[1],array[offset+2]=te[2],array[offset+3]=te[3],array[offset+4]=te[4],array[offset+5]=te[5],array[offset+6]=te[6],array[offset+7]=te[7],array[offset+8]=te[8],array[offset+9]=te[9],array[offset+10]=te[10],array[offset+11]=te[11],array[offset+12]=te[12],array[offset+13]=te[13],array[offset+14]=te[14],array[offset+15]=te[15],array}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(x=0,y=0,z=0,order=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=x,this._y=y,this._z=z,this._order=order}get x(){return this._x}set x(value){this._x=value,this._onChangeCallback()}get y(){return this._y}set y(value){this._y=value,this._onChangeCallback()}get z(){return this._z}set z(value){this._z=value,this._onChangeCallback()}get order(){return this._order}set order(value){this._order=value,this._onChangeCallback()}set(x,y,z,order=this._order){return this._x=x,this._y=y,this._z=z,this._order=order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(euler){return this._x=euler._x,this._y=euler._y,this._z=euler._z,this._order=euler._order,this._onChangeCallback(),this}setFromRotationMatrix(m,order=this._order,update=!0){const te=m.elements,m11=te[0],m12=te[4],m13=te[8],m21=te[1],m22=te[5],m23=te[9],m31=te[2],m32=te[6],m33=te[10];switch(order){case"XYZ":this._y=Math.asin(clamp(m13,-1,1)),Math.abs(m13)<.9999999?(this._x=Math.atan2(-m23,m33),this._z=Math.atan2(-m12,m11)):(this._x=Math.atan2(m32,m22),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(m23,-1,1)),Math.abs(m23)<.9999999?(this._y=Math.atan2(m13,m33),this._z=Math.atan2(m21,m22)):(this._y=Math.atan2(-m31,m11),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(m32,-1,1)),Math.abs(m32)<.9999999?(this._y=Math.atan2(-m31,m33),this._z=Math.atan2(-m12,m22)):(this._y=0,this._z=Math.atan2(m21,m11));break;case"ZYX":this._y=Math.asin(-clamp(m31,-1,1)),Math.abs(m31)<.9999999?(this._x=Math.atan2(m32,m33),this._z=Math.atan2(m21,m11)):(this._x=0,this._z=Math.atan2(-m12,m22));break;case"YZX":this._z=Math.asin(clamp(m21,-1,1)),Math.abs(m21)<.9999999?(this._x=Math.atan2(-m23,m22),this._y=Math.atan2(-m31,m11)):(this._x=0,this._y=Math.atan2(m13,m33));break;case"XZY":this._z=Math.asin(-clamp(m12,-1,1)),Math.abs(m12)<.9999999?(this._x=Math.atan2(m32,m22),this._y=Math.atan2(m13,m11)):(this._x=Math.atan2(-m23,m33),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+order)}return this._order=order,update===!0&&this._onChangeCallback(),this}setFromQuaternion(q,order,update){return _matrix$2.makeRotationFromQuaternion(q),this.setFromRotationMatrix(_matrix$2,order,update)}setFromVector3(v,order=this._order){return this.set(v.x,v.y,v.z,order)}reorder(newOrder){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,newOrder)}equals(euler){return euler._x===this._x&&euler._y===this._y&&euler._z===this._z&&euler._order===this._order}fromArray(array){return this._x=array[0],this._y=array[1],this._z=array[2],array[3]!==void 0&&(this._order=array[3]),this._onChangeCallback(),this}toArray(array=[],offset=0){return array[offset]=this._x,array[offset+1]=this._y,array[offset+2]=this._z,array[offset+3]=this._order,array}_onChange(callback){return this._onChangeCallback=callback,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(layer){this.mask=(1<<layer|0)>>>0}enable(layer){this.mask|=1<<layer|0}enableAll(){this.mask=-1}toggle(layer){this.mask^=1<<layer|0}disable(layer){this.mask&=~(1<<layer|0)}disableAll(){this.mask=0}test(layers){return(this.mask&layers.mask)!==0}isEnabled(layer){return(this.mask&(1<<layer|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const position=new Vector3,rotation=new Euler,quaternion=new Quaternion,scale=new Vector3(1,1,1);function onRotationChange(){quaternion.setFromEuler(rotation,!1)}function onQuaternionChange(){rotation.setFromQuaternion(quaternion,void 0,!1)}rotation._onChange(onRotationChange),quaternion._onChange(onQuaternionChange),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:position},rotation:{configurable:!0,enumerable:!0,value:rotation},quaternion:{configurable:!0,enumerable:!0,value:quaternion},scale:{configurable:!0,enumerable:!0,value:scale},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(matrix){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(q){return this.quaternion.premultiply(q),this}setRotationFromAxisAngle(axis,angle){this.quaternion.setFromAxisAngle(axis,angle)}setRotationFromEuler(euler){this.quaternion.setFromEuler(euler,!0)}setRotationFromMatrix(m){this.quaternion.setFromRotationMatrix(m)}setRotationFromQuaternion(q){this.quaternion.copy(q)}rotateOnAxis(axis,angle){return _q1.setFromAxisAngle(axis,angle),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(axis,angle){return _q1.setFromAxisAngle(axis,angle),this.quaternion.premultiply(_q1),this}rotateX(angle){return this.rotateOnAxis(_xAxis,angle)}rotateY(angle){return this.rotateOnAxis(_yAxis,angle)}rotateZ(angle){return this.rotateOnAxis(_zAxis,angle)}translateOnAxis(axis,distance){return _v1$4.copy(axis).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(distance)),this}translateX(distance){return this.translateOnAxis(_xAxis,distance)}translateY(distance){return this.translateOnAxis(_yAxis,distance)}translateZ(distance){return this.translateOnAxis(_zAxis,distance)}localToWorld(vector){return this.updateWorldMatrix(!0,!1),vector.applyMatrix4(this.matrixWorld)}worldToLocal(vector){return this.updateWorldMatrix(!0,!1),vector.applyMatrix4(_m1$1$1.copy(this.matrixWorld).invert())}lookAt(x,y,z){x.isVector3?_target.copy(x):_target.set(x,y,z);const parent=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1$1.lookAt(_position$3,_target,this.up):_m1$1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1$1),parent&&(_m1$1$1.extractRotation(parent.matrixWorld),_q1.setFromRotationMatrix(_m1$1$1),this.quaternion.premultiply(_q1.invert()))}add(object){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return object===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",object),this):(object&&object.isObject3D?(object.removeFromParent(),object.parent=this,this.children.push(object),object.dispatchEvent(_addedEvent),_childaddedEvent.child=object,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",object),this)}remove(object){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const index=this.children.indexOf(object);return index!==-1&&(object.parent=null,this.children.splice(index,1),object.dispatchEvent(_removedEvent),_childremovedEvent.child=object,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const parent=this.parent;return parent!==null&&parent.remove(this),this}clear(){return this.remove(...this.children)}attach(object){return this.updateWorldMatrix(!0,!1),_m1$1$1.copy(this.matrixWorld).invert(),object.parent!==null&&(object.parent.updateWorldMatrix(!0,!1),_m1$1$1.multiply(object.parent.matrixWorld)),object.applyMatrix4(_m1$1$1),object.removeFromParent(),object.parent=this,this.children.push(object),object.updateWorldMatrix(!1,!0),object.dispatchEvent(_addedEvent),_childaddedEvent.child=object,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(id){return this.getObjectByProperty("id",id)}getObjectByName(name){return this.getObjectByProperty("name",name)}getObjectByProperty(name,value){if(this[name]===value)return this;for(let i=0,l=this.children.length;i<l;i++){const object=this.children[i].getObjectByProperty(name,value);if(object!==void 0)return object}}getObjectsByProperty(name,value,result=[]){this[name]===value&&result.push(this);const children=this.children;for(let i=0,l=children.length;i<l;i++)children[i].getObjectsByProperty(name,value,result);return result}getWorldPosition(target){return this.updateWorldMatrix(!0,!1),target.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(target){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,target,_scale$2),target}getWorldScale(target){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,target),target}getWorldDirection(target){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return target.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(callback){callback(this);const children=this.children;for(let i=0,l=children.length;i<l;i++)children[i].traverse(callback)}traverseVisible(callback){if(this.visible===!1)return;callback(this);const children=this.children;for(let i=0,l=children.length;i<l;i++)children[i].traverseVisible(callback)}traverseAncestors(callback){const parent=this.parent;parent!==null&&(callback(parent),parent.traverseAncestors(callback))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(force){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||force)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,force=!0);const children=this.children;for(let i=0,l=children.length;i<l;i++)children[i].updateMatrixWorld(force)}updateWorldMatrix(updateParents,updateChildren){const parent=this.parent;if(updateParents===!0&&parent!==null&&parent.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),updateChildren===!0){const children=this.children;for(let i=0,l=children.length;i<l;i++)children[i].updateWorldMatrix(!1,!0)}}toJSON(meta){const isRootObject=meta===void 0||typeof meta=="string",output={};isRootObject&&(meta={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},output.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const object={};object.uuid=this.uuid,object.type=this.type,this.name!==""&&(object.name=this.name),this.castShadow===!0&&(object.castShadow=!0),this.receiveShadow===!0&&(object.receiveShadow=!0),this.visible===!1&&(object.visible=!1),this.frustumCulled===!1&&(object.frustumCulled=!1),this.renderOrder!==0&&(object.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(object.userData=this.userData),object.layers=this.layers.mask,object.matrix=this.matrix.toArray(),object.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(object.matrixAutoUpdate=!1),this.isInstancedMesh&&(object.type="InstancedMesh",object.count=this.count,object.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(object.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(object.type="BatchedMesh",object.perObjectFrustumCulled=this.perObjectFrustumCulled,object.sortObjects=this.sortObjects,object.drawRanges=this._drawRanges,object.reservedRanges=this._reservedRanges,object.geometryInfo=this._geometryInfo.map(info=>({...info,boundingBox:info.boundingBox?info.boundingBox.toJSON():void 0,boundingSphere:info.boundingSphere?info.boundingSphere.toJSON():void 0})),object.instanceInfo=this._instanceInfo.map(info=>({...info})),object.availableInstanceIds=this._availableInstanceIds.slice(),object.availableGeometryIds=this._availableGeometryIds.slice(),object.nextIndexStart=this._nextIndexStart,object.nextVertexStart=this._nextVertexStart,object.geometryCount=this._geometryCount,object.maxInstanceCount=this._maxInstanceCount,object.maxVertexCount=this._maxVertexCount,object.maxIndexCount=this._maxIndexCount,object.geometryInitialized=this._geometryInitialized,object.matricesTexture=this._matricesTexture.toJSON(meta),object.indirectTexture=this._indirectTexture.toJSON(meta),this._colorsTexture!==null&&(object.colorsTexture=this._colorsTexture.toJSON(meta)),this.boundingSphere!==null&&(object.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(object.boundingBox=this.boundingBox.toJSON()));function serialize(library,element){return library[element.uuid]===void 0&&(library[element.uuid]=element.toJSON(meta)),element.uuid}if(this.isScene)this.background&&(this.background.isColor?object.background=this.background.toJSON():this.background.isTexture&&(object.background=this.background.toJSON(meta).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(object.environment=this.environment.toJSON(meta).uuid);else if(this.isMesh||this.isLine||this.isPoints){object.geometry=serialize(meta.geometries,this.geometry);const parameters=this.geometry.parameters;if(parameters!==void 0&&parameters.shapes!==void 0){const shapes=parameters.shapes;if(Array.isArray(shapes))for(let i=0,l=shapes.length;i<l;i++){const shape=shapes[i];serialize(meta.shapes,shape)}else serialize(meta.shapes,shapes)}}if(this.isSkinnedMesh&&(object.bindMode=this.bindMode,object.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(serialize(meta.skeletons,this.skeleton),object.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const uuids=[];for(let i=0,l=this.material.length;i<l;i++)uuids.push(serialize(meta.materials,this.material[i]));object.material=uuids}else object.material=serialize(meta.materials,this.material);if(this.children.length>0){object.children=[];for(let i=0;i<this.children.length;i++)object.children.push(this.children[i].toJSON(meta).object)}if(this.animations.length>0){object.animations=[];for(let i=0;i<this.animations.length;i++){const animation=this.animations[i];object.animations.push(serialize(meta.animations,animation))}}if(isRootObject){const geometries=extractFromCache(meta.geometries),materials=extractFromCache(meta.materials),textures=extractFromCache(meta.textures),images=extractFromCache(meta.images),shapes=extractFromCache(meta.shapes),skeletons=extractFromCache(meta.skeletons),animations=extractFromCache(meta.animations),nodes=extractFromCache(meta.nodes);geometries.length>0&&(output.geometries=geometries),materials.length>0&&(output.materials=materials),textures.length>0&&(output.textures=textures),images.length>0&&(output.images=images),shapes.length>0&&(output.shapes=shapes),skeletons.length>0&&(output.skeletons=skeletons),animations.length>0&&(output.animations=animations),nodes.length>0&&(output.nodes=nodes)}return output.object=object,output;function extractFromCache(cache){const values=[];for(const key in cache){const data=cache[key];delete data.metadata,values.push(data)}return values}}clone(recursive){return new this.constructor().copy(this,recursive)}copy(source,recursive=!0){if(this.name=source.name,this.up.copy(source.up),this.position.copy(source.position),this.rotation.order=source.rotation.order,this.quaternion.copy(source.quaternion),this.scale.copy(source.scale),this.matrix.copy(source.matrix),this.matrixWorld.copy(source.matrixWorld),this.matrixAutoUpdate=source.matrixAutoUpdate,this.matrixWorldAutoUpdate=source.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=source.matrixWorldNeedsUpdate,this.layers.mask=source.layers.mask,this.visible=source.visible,this.castShadow=source.castShadow,this.receiveShadow=source.receiveShadow,this.frustumCulled=source.frustumCulled,this.renderOrder=source.renderOrder,this.animations=source.animations.slice(),this.userData=JSON.parse(JSON.stringify(source.userData)),recursive===!0)for(let i=0;i<source.children.length;i++){const child=source.children[i];this.add(child.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3,_v40=new Vector4,_v41=new Vector4,_v42=new Vector4;class Triangle{constructor(a=new Vector3,b=new Vector3,c=new Vector3){this.a=a,this.b=b,this.c=c}static getNormal(a,b,c,target){target.subVectors(c,b),_v0$1.subVectors(a,b),target.cross(_v0$1);const targetLengthSq=target.lengthSq();return targetLengthSq>0?target.multiplyScalar(1/Math.sqrt(targetLengthSq)):target.set(0,0,0)}static getBarycoord(point,a,b,c,target){_v0$1.subVectors(c,a),_v1$3.subVectors(b,a),_v2$2.subVectors(point,a);const dot00=_v0$1.dot(_v0$1),dot01=_v0$1.dot(_v1$3),dot02=_v0$1.dot(_v2$2),dot11=_v1$3.dot(_v1$3),dot12=_v1$3.dot(_v2$2),denom=dot00*dot11-dot01*dot01;if(denom===0)return target.set(0,0,0),null;const invDenom=1/denom,u=(dot11*dot02-dot01*dot12)*invDenom,v=(dot00*dot12-dot01*dot02)*invDenom;return target.set(1-u-v,v,u)}static containsPoint(point,a,b,c){return this.getBarycoord(point,a,b,c,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(point,p1,p2,p3,v1,v2,v3,target){return this.getBarycoord(point,p1,p2,p3,_v3$2)===null?(target.x=0,target.y=0,"z"in target&&(target.z=0),"w"in target&&(target.w=0),null):(target.setScalar(0),target.addScaledVector(v1,_v3$2.x),target.addScaledVector(v2,_v3$2.y),target.addScaledVector(v3,_v3$2.z),target)}static getInterpolatedAttribute(attr,i1,i2,i3,barycoord,target){return _v40.setScalar(0),_v41.setScalar(0),_v42.setScalar(0),_v40.fromBufferAttribute(attr,i1),_v41.fromBufferAttribute(attr,i2),_v42.fromBufferAttribute(attr,i3),target.setScalar(0),target.addScaledVector(_v40,barycoord.x),target.addScaledVector(_v41,barycoord.y),target.addScaledVector(_v42,barycoord.z),target}static isFrontFacing(a,b,c,direction){return _v0$1.subVectors(c,b),_v1$3.subVectors(a,b),_v0$1.cross(_v1$3).dot(direction)<0}set(a,b,c){return this.a.copy(a),this.b.copy(b),this.c.copy(c),this}setFromPointsAndIndices(points,i0,i1,i2){return this.a.copy(points[i0]),this.b.copy(points[i1]),this.c.copy(points[i2]),this}setFromAttributeAndIndices(attribute,i0,i1,i2){return this.a.fromBufferAttribute(attribute,i0),this.b.fromBufferAttribute(attribute,i1),this.c.fromBufferAttribute(attribute,i2),this}clone(){return new this.constructor().copy(this)}copy(triangle){return this.a.copy(triangle.a),this.b.copy(triangle.b),this.c.copy(triangle.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(target){return target.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(target){return Triangle.getNormal(this.a,this.b,this.c,target)}getPlane(target){return target.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(point,target){return Triangle.getBarycoord(point,this.a,this.b,this.c,target)}getInterpolation(point,v1,v2,v3,target){return Triangle.getInterpolation(point,this.a,this.b,this.c,v1,v2,v3,target)}containsPoint(point){return Triangle.containsPoint(point,this.a,this.b,this.c)}isFrontFacing(direction){return Triangle.isFrontFacing(this.a,this.b,this.c,direction)}intersectsBox(box){return box.intersectsTriangle(this)}closestPointToPoint(p2,target){const a=this.a,b=this.b,c=this.c;let v,w;_vab.subVectors(b,a),_vac.subVectors(c,a),_vap.subVectors(p2,a);const d1=_vab.dot(_vap),d2=_vac.dot(_vap);if(d1<=0&&d2<=0)return target.copy(a);_vbp.subVectors(p2,b);const d3=_vab.dot(_vbp),d4=_vac.dot(_vbp);if(d3>=0&&d4<=d3)return target.copy(b);const vc=d1*d4-d3*d2;if(vc<=0&&d1>=0&&d3<=0)return v=d1/(d1-d3),target.copy(a).addScaledVector(_vab,v);_vcp.subVectors(p2,c);const d5=_vab.dot(_vcp),d6=_vac.dot(_vcp);if(d6>=0&&d5<=d6)return target.copy(c);const vb=d5*d2-d1*d6;if(vb<=0&&d2>=0&&d6<=0)return w=d2/(d2-d6),target.copy(a).addScaledVector(_vac,w);const va=d3*d6-d5*d4;if(va<=0&&d4-d3>=0&&d5-d6>=0)return _vbc.subVectors(c,b),w=(d4-d3)/(d4-d3+(d5-d6)),target.copy(b).addScaledVector(_vbc,w);const denom=1/(va+vb+vc);return v=vb*denom,w=vc*denom,target.copy(a).addScaledVector(_vab,v).addScaledVector(_vac,w)}equals(triangle){return triangle.a.equals(this.a)&&triangle.b.equals(this.b)&&triangle.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(p2,q,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?p2+(q-p2)*6*t:t<1/2?q:t<2/3?p2+(q-p2)*6*(2/3-t):p2}class Color{constructor(r,g,b){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(r,g,b)}set(r,g,b){if(g===void 0&&b===void 0){const value=r;value&&value.isColor?this.copy(value):typeof value=="number"?this.setHex(value):typeof value=="string"&&this.setStyle(value)}else this.setRGB(r,g,b);return this}setScalar(scalar){return this.r=scalar,this.g=scalar,this.b=scalar,this}setHex(hex,colorSpace=SRGBColorSpace){return hex=Math.floor(hex),this.r=(hex>>16&255)/255,this.g=(hex>>8&255)/255,this.b=(hex&255)/255,ColorManagement.colorSpaceToWorking(this,colorSpace),this}setRGB(r,g,b,colorSpace=ColorManagement.workingColorSpace){return this.r=r,this.g=g,this.b=b,ColorManagement.colorSpaceToWorking(this,colorSpace),this}setHSL(h,s,l,colorSpace=ColorManagement.workingColorSpace){if(h=euclideanModulo(h,1),s=clamp(s,0,1),l=clamp(l,0,1),s===0)this.r=this.g=this.b=l;else{const p2=l<=.5?l*(1+s):l+s-l*s,q=2*l-p2;this.r=hue2rgb(q,p2,h+1/3),this.g=hue2rgb(q,p2,h),this.b=hue2rgb(q,p2,h-1/3)}return ColorManagement.colorSpaceToWorking(this,colorSpace),this}setStyle(style,colorSpace=SRGBColorSpace){function handleAlpha(string){string!==void 0&&parseFloat(string)<1&&console.warn("THREE.Color: Alpha component of "+style+" will be ignored.")}let m;if(m=/^(\w+)\(([^\)]*)\)/.exec(style)){let color;const name=m[1],components=m[2];switch(name){case"rgb":case"rgba":if(color=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components))return handleAlpha(color[4]),this.setRGB(Math.min(255,parseInt(color[1],10))/255,Math.min(255,parseInt(color[2],10))/255,Math.min(255,parseInt(color[3],10))/255,colorSpace);if(color=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components))return handleAlpha(color[4]),this.setRGB(Math.min(100,parseInt(color[1],10))/100,Math.min(100,parseInt(color[2],10))/100,Math.min(100,parseInt(color[3],10))/100,colorSpace);break;case"hsl":case"hsla":if(color=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components))return handleAlpha(color[4]),this.setHSL(parseFloat(color[1])/360,parseFloat(color[2])/100,parseFloat(color[3])/100,colorSpace);break;default:console.warn("THREE.Color: Unknown color model "+style)}}else if(m=/^\#([A-Fa-f\d]+)$/.exec(style)){const hex=m[1],size=hex.length;if(size===3)return this.setRGB(parseInt(hex.charAt(0),16)/15,parseInt(hex.charAt(1),16)/15,parseInt(hex.charAt(2),16)/15,colorSpace);if(size===6)return this.setHex(parseInt(hex,16),colorSpace);console.warn("THREE.Color: Invalid hex color "+style)}else if(style&&style.length>0)return this.setColorName(style,colorSpace);return this}setColorName(style,colorSpace=SRGBColorSpace){const hex=_colorKeywords[style.toLowerCase()];return hex!==void 0?this.setHex(hex,colorSpace):console.warn("THREE.Color: Unknown color "+style),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(color){return this.r=color.r,this.g=color.g,this.b=color.b,this}copySRGBToLinear(color){return this.r=SRGBToLinear(color.r),this.g=SRGBToLinear(color.g),this.b=SRGBToLinear(color.b),this}copyLinearToSRGB(color){return this.r=LinearToSRGB(color.r),this.g=LinearToSRGB(color.g),this.b=LinearToSRGB(color.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(colorSpace=SRGBColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),colorSpace),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(colorSpace=SRGBColorSpace){return("000000"+this.getHex(colorSpace).toString(16)).slice(-6)}getHSL(target,colorSpace=ColorManagement.workingColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),colorSpace);const r=_color.r,g=_color.g,b=_color.b,max=Math.max(r,g,b),min=Math.min(r,g,b);let hue,saturation;const lightness=(min+max)/2;if(min===max)hue=0,saturation=0;else{const delta=max-min;switch(saturation=lightness<=.5?delta/(max+min):delta/(2-max-min),max){case r:hue=(g-b)/delta+(g<b?6:0);break;case g:hue=(b-r)/delta+2;break;case b:hue=(r-g)/delta+4;break}hue/=6}return target.h=hue,target.s=saturation,target.l=lightness,target}getRGB(target,colorSpace=ColorManagement.workingColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),colorSpace),target.r=_color.r,target.g=_color.g,target.b=_color.b,target}getStyle(colorSpace=SRGBColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),colorSpace);const r=_color.r,g=_color.g,b=_color.b;return colorSpace!==SRGBColorSpace?`color(${colorSpace} ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)})`}offsetHSL(h,s,l){return this.getHSL(_hslA),this.setHSL(_hslA.h+h,_hslA.s+s,_hslA.l+l)}add(color){return this.r+=color.r,this.g+=color.g,this.b+=color.b,this}addColors(color1,color2){return this.r=color1.r+color2.r,this.g=color1.g+color2.g,this.b=color1.b+color2.b,this}addScalar(s){return this.r+=s,this.g+=s,this.b+=s,this}sub(color){return this.r=Math.max(0,this.r-color.r),this.g=Math.max(0,this.g-color.g),this.b=Math.max(0,this.b-color.b),this}multiply(color){return this.r*=color.r,this.g*=color.g,this.b*=color.b,this}multiplyScalar(s){return this.r*=s,this.g*=s,this.b*=s,this}lerp(color,alpha){return this.r+=(color.r-this.r)*alpha,this.g+=(color.g-this.g)*alpha,this.b+=(color.b-this.b)*alpha,this}lerpColors(color1,color2,alpha){return this.r=color1.r+(color2.r-color1.r)*alpha,this.g=color1.g+(color2.g-color1.g)*alpha,this.b=color1.b+(color2.b-color1.b)*alpha,this}lerpHSL(color,alpha){this.getHSL(_hslA),color.getHSL(_hslB);const h=lerp(_hslA.h,_hslB.h,alpha),s=lerp(_hslA.s,_hslB.s,alpha),l=lerp(_hslA.l,_hslB.l,alpha);return this.setHSL(h,s,l),this}setFromVector3(v){return this.r=v.x,this.g=v.y,this.b=v.z,this}applyMatrix3(m){const r=this.r,g=this.g,b=this.b,e=m.elements;return this.r=e[0]*r+e[3]*g+e[6]*b,this.g=e[1]*r+e[4]*g+e[7]*b,this.b=e[2]*r+e[5]*g+e[8]*b,this}equals(c){return c.r===this.r&&c.g===this.g&&c.b===this.b}fromArray(array,offset=0){return this.r=array[offset],this.g=array[offset+1],this.b=array[offset+2],this}toArray(array=[],offset=0){return array[offset]=this.r,array[offset+1]=this.g,array[offset+2]=this.b,array}fromBufferAttribute(attribute,index){return this.r=attribute.getX(index),this.g=attribute.getY(index),this.b=attribute.getZ(index),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(value){this._alphaTest>0!=value>0&&this.version++,this._alphaTest=value}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(values){if(values!==void 0)for(const key in values){const newValue=values[key];if(newValue===void 0){console.warn(`THREE.Material: parameter '${key}' has value of undefined.`);continue}const currentValue=this[key];if(currentValue===void 0){console.warn(`THREE.Material: '${key}' is not a property of THREE.${this.type}.`);continue}currentValue&&currentValue.isColor?currentValue.set(newValue):currentValue&&currentValue.isVector3&&newValue&&newValue.isVector3?currentValue.copy(newValue):this[key]=newValue}}toJSON(meta){const isRootObject=meta===void 0||typeof meta=="string";isRootObject&&(meta={textures:{},images:{}});const data={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};data.uuid=this.uuid,data.type=this.type,this.name!==""&&(data.name=this.name),this.color&&this.color.isColor&&(data.color=this.color.getHex()),this.roughness!==void 0&&(data.roughness=this.roughness),this.metalness!==void 0&&(data.metalness=this.metalness),this.sheen!==void 0&&(data.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(data.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(data.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(data.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(data.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(data.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(data.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(data.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(data.shininess=this.shininess),this.clearcoat!==void 0&&(data.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(data.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(data.clearcoatMap=this.clearcoatMap.toJSON(meta).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(data.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(meta).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(data.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(meta).uuid,data.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(data.dispersion=this.dispersion),this.iridescence!==void 0&&(data.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(data.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(data.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(data.iridescenceMap=this.iridescenceMap.toJSON(meta).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(data.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(meta).uuid),this.anisotropy!==void 0&&(data.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(data.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(data.anisotropyMap=this.anisotropyMap.toJSON(meta).uuid),this.map&&this.map.isTexture&&(data.map=this.map.toJSON(meta).uuid),this.matcap&&this.matcap.isTexture&&(data.matcap=this.matcap.toJSON(meta).uuid),this.alphaMap&&this.alphaMap.isTexture&&(data.alphaMap=this.alphaMap.toJSON(meta).uuid),this.lightMap&&this.lightMap.isTexture&&(data.lightMap=this.lightMap.toJSON(meta).uuid,data.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(data.aoMap=this.aoMap.toJSON(meta).uuid,data.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(data.bumpMap=this.bumpMap.toJSON(meta).uuid,data.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(data.normalMap=this.normalMap.toJSON(meta).uuid,data.normalMapType=this.normalMapType,data.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(data.displacementMap=this.displacementMap.toJSON(meta).uuid,data.displacementScale=this.displacementScale,data.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(data.roughnessMap=this.roughnessMap.toJSON(meta).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(data.metalnessMap=this.metalnessMap.toJSON(meta).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(data.emissiveMap=this.emissiveMap.toJSON(meta).uuid),this.specularMap&&this.specularMap.isTexture&&(data.specularMap=this.specularMap.toJSON(meta).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(data.specularIntensityMap=this.specularIntensityMap.toJSON(meta).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(data.specularColorMap=this.specularColorMap.toJSON(meta).uuid),this.envMap&&this.envMap.isTexture&&(data.envMap=this.envMap.toJSON(meta).uuid,this.combine!==void 0&&(data.combine=this.combine)),this.envMapRotation!==void 0&&(data.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(data.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(data.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(data.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(data.gradientMap=this.gradientMap.toJSON(meta).uuid),this.transmission!==void 0&&(data.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(data.transmissionMap=this.transmissionMap.toJSON(meta).uuid),this.thickness!==void 0&&(data.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(data.thicknessMap=this.thicknessMap.toJSON(meta).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(data.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(data.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(data.size=this.size),this.shadowSide!==null&&(data.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(data.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(data.blending=this.blending),this.side!==FrontSide&&(data.side=this.side),this.vertexColors===!0&&(data.vertexColors=!0),this.opacity<1&&(data.opacity=this.opacity),this.transparent===!0&&(data.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(data.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(data.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(data.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(data.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(data.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(data.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(data.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(data.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(data.depthFunc=this.depthFunc),this.depthTest===!1&&(data.depthTest=this.depthTest),this.depthWrite===!1&&(data.depthWrite=this.depthWrite),this.colorWrite===!1&&(data.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(data.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(data.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(data.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(data.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(data.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(data.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(data.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(data.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(data.rotation=this.rotation),this.polygonOffset===!0&&(data.polygonOffset=!0),this.polygonOffsetFactor!==0&&(data.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(data.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(data.linewidth=this.linewidth),this.dashSize!==void 0&&(data.dashSize=this.dashSize),this.gapSize!==void 0&&(data.gapSize=this.gapSize),this.scale!==void 0&&(data.scale=this.scale),this.dithering===!0&&(data.dithering=!0),this.alphaTest>0&&(data.alphaTest=this.alphaTest),this.alphaHash===!0&&(data.alphaHash=!0),this.alphaToCoverage===!0&&(data.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(data.premultipliedAlpha=!0),this.forceSinglePass===!0&&(data.forceSinglePass=!0),this.wireframe===!0&&(data.wireframe=!0),this.wireframeLinewidth>1&&(data.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(data.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(data.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(data.flatShading=!0),this.visible===!1&&(data.visible=!1),this.toneMapped===!1&&(data.toneMapped=!1),this.fog===!1&&(data.fog=!1),Object.keys(this.userData).length>0&&(data.userData=this.userData);function extractFromCache(cache){const values=[];for(const key in cache){const data2=cache[key];delete data2.metadata,values.push(data2)}return values}if(isRootObject){const textures=extractFromCache(meta.textures),images=extractFromCache(meta.images);textures.length>0&&(data.textures=textures),images.length>0&&(data.images=images)}return data}clone(){return new this.constructor().copy(this)}copy(source){this.name=source.name,this.blending=source.blending,this.side=source.side,this.vertexColors=source.vertexColors,this.opacity=source.opacity,this.transparent=source.transparent,this.blendSrc=source.blendSrc,this.blendDst=source.blendDst,this.blendEquation=source.blendEquation,this.blendSrcAlpha=source.blendSrcAlpha,this.blendDstAlpha=source.blendDstAlpha,this.blendEquationAlpha=source.blendEquationAlpha,this.blendColor.copy(source.blendColor),this.blendAlpha=source.blendAlpha,this.depthFunc=source.depthFunc,this.depthTest=source.depthTest,this.depthWrite=source.depthWrite,this.stencilWriteMask=source.stencilWriteMask,this.stencilFunc=source.stencilFunc,this.stencilRef=source.stencilRef,this.stencilFuncMask=source.stencilFuncMask,this.stencilFail=source.stencilFail,this.stencilZFail=source.stencilZFail,this.stencilZPass=source.stencilZPass,this.stencilWrite=source.stencilWrite;const srcPlanes=source.clippingPlanes;let dstPlanes=null;if(srcPlanes!==null){const n=srcPlanes.length;dstPlanes=new Array(n);for(let i=0;i!==n;++i)dstPlanes[i]=srcPlanes[i].clone()}return this.clippingPlanes=dstPlanes,this.clipIntersection=source.clipIntersection,this.clipShadows=source.clipShadows,this.shadowSide=source.shadowSide,this.colorWrite=source.colorWrite,this.precision=source.precision,this.polygonOffset=source.polygonOffset,this.polygonOffsetFactor=source.polygonOffsetFactor,this.polygonOffsetUnits=source.polygonOffsetUnits,this.dithering=source.dithering,this.alphaTest=source.alphaTest,this.alphaHash=source.alphaHash,this.alphaToCoverage=source.alphaToCoverage,this.premultipliedAlpha=source.premultipliedAlpha,this.forceSinglePass=source.forceSinglePass,this.visible=source.visible,this.toneMapped=source.toneMapped,this.userData=JSON.parse(JSON.stringify(source.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(value){value===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(parameters){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(parameters)}copy(source){return super.copy(source),this.color.copy(source.color),this.map=source.map,this.lightMap=source.lightMap,this.lightMapIntensity=source.lightMapIntensity,this.aoMap=source.aoMap,this.aoMapIntensity=source.aoMapIntensity,this.specularMap=source.specularMap,this.alphaMap=source.alphaMap,this.envMap=source.envMap,this.envMapRotation.copy(source.envMapRotation),this.combine=source.combine,this.reflectivity=source.reflectivity,this.refractionRatio=source.refractionRatio,this.wireframe=source.wireframe,this.wireframeLinewidth=source.wireframeLinewidth,this.wireframeLinecap=source.wireframeLinecap,this.wireframeLinejoin=source.wireframeLinejoin,this.fog=source.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;let _id$2=0;class BufferAttribute{constructor(array,itemSize,normalized=!1){if(Array.isArray(array))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.name="",this.array=array,this.itemSize=itemSize,this.count=array!==void 0?array.length/itemSize:0,this.normalized=normalized,this.usage=StaticDrawUsage,this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(value){value===!0&&this.version++}setUsage(value){return this.usage=value,this}addUpdateRange(start,count){this.updateRanges.push({start,count})}clearUpdateRanges(){this.updateRanges.length=0}copy(source){return this.name=source.name,this.array=new source.array.constructor(source.array),this.itemSize=source.itemSize,this.count=source.count,this.normalized=source.normalized,this.usage=source.usage,this.gpuType=source.gpuType,this}copyAt(index1,attribute,index2){index1*=this.itemSize,index2*=attribute.itemSize;for(let i=0,l=this.itemSize;i<l;i++)this.array[index1+i]=attribute.array[index2+i];return this}copyArray(array){return this.array.set(array),this}applyMatrix3(m){if(this.itemSize===2)for(let i=0,l=this.count;i<l;i++)_vector2$1.fromBufferAttribute(this,i),_vector2$1.applyMatrix3(m),this.setXY(i,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let i=0,l=this.count;i<l;i++)_vector$9.fromBufferAttribute(this,i),_vector$9.applyMatrix3(m),this.setXYZ(i,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(m){for(let i=0,l=this.count;i<l;i++)_vector$9.fromBufferAttribute(this,i),_vector$9.applyMatrix4(m),this.setXYZ(i,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(m){for(let i=0,l=this.count;i<l;i++)_vector$9.fromBufferAttribute(this,i),_vector$9.applyNormalMatrix(m),this.setXYZ(i,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(m){for(let i=0,l=this.count;i<l;i++)_vector$9.fromBufferAttribute(this,i),_vector$9.transformDirection(m),this.setXYZ(i,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(value,offset=0){return this.array.set(value,offset),this}getComponent(index,component){let value=this.array[index*this.itemSize+component];return this.normalized&&(value=denormalize(value,this.array)),value}setComponent(index,component,value){return this.normalized&&(value=normalize(value,this.array)),this.array[index*this.itemSize+component]=value,this}getX(index){let x=this.array[index*this.itemSize];return this.normalized&&(x=denormalize(x,this.array)),x}setX(index,x){return this.normalized&&(x=normalize(x,this.array)),this.array[index*this.itemSize]=x,this}getY(index){let y=this.array[index*this.itemSize+1];return this.normalized&&(y=denormalize(y,this.array)),y}setY(index,y){return this.normalized&&(y=normalize(y,this.array)),this.array[index*this.itemSize+1]=y,this}getZ(index){let z=this.array[index*this.itemSize+2];return this.normalized&&(z=denormalize(z,this.array)),z}setZ(index,z){return this.normalized&&(z=normalize(z,this.array)),this.array[index*this.itemSize+2]=z,this}getW(index){let w=this.array[index*this.itemSize+3];return this.normalized&&(w=denormalize(w,this.array)),w}setW(index,w){return this.normalized&&(w=normalize(w,this.array)),this.array[index*this.itemSize+3]=w,this}setXY(index,x,y){return index*=this.itemSize,this.normalized&&(x=normalize(x,this.array),y=normalize(y,this.array)),this.array[index+0]=x,this.array[index+1]=y,this}setXYZ(index,x,y,z){return index*=this.itemSize,this.normalized&&(x=normalize(x,this.array),y=normalize(y,this.array),z=normalize(z,this.array)),this.array[index+0]=x,this.array[index+1]=y,this.array[index+2]=z,this}setXYZW(index,x,y,z,w){return index*=this.itemSize,this.normalized&&(x=normalize(x,this.array),y=normalize(y,this.array),z=normalize(z,this.array),w=normalize(w,this.array)),this.array[index+0]=x,this.array[index+1]=y,this.array[index+2]=z,this.array[index+3]=w,this}onUpload(callback){return this.onUploadCallback=callback,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const data={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(data.name=this.name),this.usage!==StaticDrawUsage&&(data.usage=this.usage),data}}class Uint16BufferAttribute extends BufferAttribute{constructor(array,itemSize,normalized){super(new Uint16Array(array),itemSize,normalized)}}class Uint32BufferAttribute extends BufferAttribute{constructor(array,itemSize,normalized){super(new Uint32Array(array),itemSize,normalized)}}class Float32BufferAttribute extends BufferAttribute{constructor(array,itemSize,normalized){super(new Float32Array(array),itemSize,normalized)}}let _id$1=0;const _m1$3=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(index){return Array.isArray(index)?this.index=new(arrayNeedsUint32(index)?Uint32BufferAttribute:Uint16BufferAttribute)(index,1):this.index=index,this}setIndirect(indirect){return this.indirect=indirect,this}getIndirect(){return this.indirect}getAttribute(name){return this.attributes[name]}setAttribute(name,attribute){return this.attributes[name]=attribute,this}deleteAttribute(name){return delete this.attributes[name],this}hasAttribute(name){return this.attributes[name]!==void 0}addGroup(start,count,materialIndex=0){this.groups.push({start,count,materialIndex})}clearGroups(){this.groups=[]}setDrawRange(start,count){this.drawRange.start=start,this.drawRange.count=count}applyMatrix4(matrix){const position=this.attributes.position;position!==void 0&&(position.applyMatrix4(matrix),position.needsUpdate=!0);const normal=this.attributes.normal;if(normal!==void 0){const normalMatrix=new Matrix3().getNormalMatrix(matrix);normal.applyNormalMatrix(normalMatrix),normal.needsUpdate=!0}const tangent=this.attributes.tangent;return tangent!==void 0&&(tangent.transformDirection(matrix),tangent.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(q){return _m1$3.makeRotationFromQuaternion(q),this.applyMatrix4(_m1$3),this}rotateX(angle){return _m1$3.makeRotationX(angle),this.applyMatrix4(_m1$3),this}rotateY(angle){return _m1$3.makeRotationY(angle),this.applyMatrix4(_m1$3),this}rotateZ(angle){return _m1$3.makeRotationZ(angle),this.applyMatrix4(_m1$3),this}translate(x,y,z){return _m1$3.makeTranslation(x,y,z),this.applyMatrix4(_m1$3),this}scale(x,y,z){return _m1$3.makeScale(x,y,z),this.applyMatrix4(_m1$3),this}lookAt(vector){return _obj.lookAt(vector),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(points){const positionAttribute=this.getAttribute("position");if(positionAttribute===void 0){const position=[];for(let i=0,l=points.length;i<l;i++){const point=points[i];position.push(point.x,point.y,point.z||0)}this.setAttribute("position",new Float32BufferAttribute(position,3))}else{const l=Math.min(points.length,positionAttribute.count);for(let i=0;i<l;i++){const point=points[i];positionAttribute.setXYZ(i,point.x,point.y,point.z||0)}points.length>positionAttribute.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),positionAttribute.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const position=this.attributes.position,morphAttributesPosition=this.morphAttributes.position;if(position&&position.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(position!==void 0){if(this.boundingBox.setFromBufferAttribute(position),morphAttributesPosition)for(let i=0,il=morphAttributesPosition.length;i<il;i++){const morphAttribute=morphAttributesPosition[i];_box$2.setFromBufferAttribute(morphAttribute),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const position=this.attributes.position,morphAttributesPosition=this.morphAttributes.position;if(position&&position.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(position){const center=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(position),morphAttributesPosition)for(let i=0,il=morphAttributesPosition.length;i<il;i++){const morphAttribute=morphAttributesPosition[i];_boxMorphTargets.setFromBufferAttribute(morphAttribute),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(center);let maxRadiusSq=0;for(let i=0,il=position.count;i<il;i++)_vector$8.fromBufferAttribute(position,i),maxRadiusSq=Math.max(maxRadiusSq,center.distanceToSquared(_vector$8));if(morphAttributesPosition)for(let i=0,il=morphAttributesPosition.length;i<il;i++){const morphAttribute=morphAttributesPosition[i],morphTargetsRelative=this.morphTargetsRelative;for(let j=0,jl=morphAttribute.count;j<jl;j++)_vector$8.fromBufferAttribute(morphAttribute,j),morphTargetsRelative&&(_offset.fromBufferAttribute(position,j),_vector$8.add(_offset)),maxRadiusSq=Math.max(maxRadiusSq,center.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(maxRadiusSq),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const index=this.index,attributes=this.attributes;if(index===null||attributes.position===void 0||attributes.normal===void 0||attributes.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const positionAttribute=attributes.position,normalAttribute=attributes.normal,uvAttribute=attributes.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*positionAttribute.count),4));const tangentAttribute=this.getAttribute("tangent"),tan1=[],tan2=[];for(let i=0;i<positionAttribute.count;i++)tan1[i]=new Vector3,tan2[i]=new Vector3;const vA=new Vector3,vB=new Vector3,vC=new Vector3,uvA=new Vector2,uvB=new Vector2,uvC=new Vector2,sdir=new Vector3,tdir=new Vector3;function handleTriangle(a,b,c){vA.fromBufferAttribute(positionAttribute,a),vB.fromBufferAttribute(positionAttribute,b),vC.fromBufferAttribute(positionAttribute,c),uvA.fromBufferAttribute(uvAttribute,a),uvB.fromBufferAttribute(uvAttribute,b),uvC.fromBufferAttribute(uvAttribute,c),vB.sub(vA),vC.sub(vA),uvB.sub(uvA),uvC.sub(uvA);const r=1/(uvB.x*uvC.y-uvC.x*uvB.y);isFinite(r)&&(sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC,-uvB.y).multiplyScalar(r),tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB,-uvC.x).multiplyScalar(r),tan1[a].add(sdir),tan1[b].add(sdir),tan1[c].add(sdir),tan2[a].add(tdir),tan2[b].add(tdir),tan2[c].add(tdir))}let groups=this.groups;groups.length===0&&(groups=[{start:0,count:index.count}]);for(let i=0,il=groups.length;i<il;++i){const group=groups[i],start=group.start,count=group.count;for(let j=start,jl=start+count;j<jl;j+=3)handleTriangle(index.getX(j+0),index.getX(j+1),index.getX(j+2))}const tmp=new Vector3,tmp2=new Vector3,n=new Vector3,n2=new Vector3;function handleVertex(v){n.fromBufferAttribute(normalAttribute,v),n2.copy(n);const t=tan1[v];tmp.copy(t),tmp.sub(n.multiplyScalar(n.dot(t))).normalize(),tmp2.crossVectors(n2,t);const w=tmp2.dot(tan2[v])<0?-1:1;tangentAttribute.setXYZW(v,tmp.x,tmp.y,tmp.z,w)}for(let i=0,il=groups.length;i<il;++i){const group=groups[i],start=group.start,count=group.count;for(let j=start,jl=start+count;j<jl;j+=3)handleVertex(index.getX(j+0)),handleVertex(index.getX(j+1)),handleVertex(index.getX(j+2))}}computeVertexNormals(){const index=this.index,positionAttribute=this.getAttribute("position");if(positionAttribute!==void 0){let normalAttribute=this.getAttribute("normal");if(normalAttribute===void 0)normalAttribute=new BufferAttribute(new Float32Array(positionAttribute.count*3),3),this.setAttribute("normal",normalAttribute);else for(let i=0,il=normalAttribute.count;i<il;i++)normalAttribute.setXYZ(i,0,0,0);const pA=new Vector3,pB=new Vector3,pC=new Vector3,nA=new Vector3,nB=new Vector3,nC=new Vector3,cb=new Vector3,ab=new Vector3;if(index)for(let i=0,il=index.count;i<il;i+=3){const vA=index.getX(i+0),vB=index.getX(i+1),vC=index.getX(i+2);pA.fromBufferAttribute(positionAttribute,vA),pB.fromBufferAttribute(positionAttribute,vB),pC.fromBufferAttribute(positionAttribute,vC),cb.subVectors(pC,pB),ab.subVectors(pA,pB),cb.cross(ab),nA.fromBufferAttribute(normalAttribute,vA),nB.fromBufferAttribute(normalAttribute,vB),nC.fromBufferAttribute(normalAttribute,vC),nA.add(cb),nB.add(cb),nC.add(cb),normalAttribute.setXYZ(vA,nA.x,nA.y,nA.z),normalAttribute.setXYZ(vB,nB.x,nB.y,nB.z),normalAttribute.setXYZ(vC,nC.x,nC.y,nC.z)}else for(let i=0,il=positionAttribute.count;i<il;i+=3)pA.fromBufferAttribute(positionAttribute,i+0),pB.fromBufferAttribute(positionAttribute,i+1),pC.fromBufferAttribute(positionAttribute,i+2),cb.subVectors(pC,pB),ab.subVectors(pA,pB),cb.cross(ab),normalAttribute.setXYZ(i+0,cb.x,cb.y,cb.z),normalAttribute.setXYZ(i+1,cb.x,cb.y,cb.z),normalAttribute.setXYZ(i+2,cb.x,cb.y,cb.z);this.normalizeNormals(),normalAttribute.needsUpdate=!0}}normalizeNormals(){const normals=this.attributes.normal;for(let i=0,il=normals.count;i<il;i++)_vector$8.fromBufferAttribute(normals,i),_vector$8.normalize(),normals.setXYZ(i,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function convertBufferAttribute(attribute,indices2){const array=attribute.array,itemSize=attribute.itemSize,normalized=attribute.normalized,array2=new array.constructor(indices2.length*itemSize);let index=0,index2=0;for(let i=0,l=indices2.length;i<l;i++){attribute.isInterleavedBufferAttribute?index=indices2[i]*attribute.data.stride+attribute.offset:index=indices2[i]*itemSize;for(let j=0;j<itemSize;j++)array2[index2++]=array[index++]}return new BufferAttribute(array2,itemSize,normalized)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const geometry2=new BufferGeometry,indices=this.index.array,attributes=this.attributes;for(const name in attributes){const attribute=attributes[name],newAttribute=convertBufferAttribute(attribute,indices);geometry2.setAttribute(name,newAttribute)}const morphAttributes=this.morphAttributes;for(const name in morphAttributes){const morphArray=[],morphAttribute=morphAttributes[name];for(let i=0,il=morphAttribute.length;i<il;i++){const attribute=morphAttribute[i],newAttribute=convertBufferAttribute(attribute,indices);morphArray.push(newAttribute)}geometry2.morphAttributes[name]=morphArray}geometry2.morphTargetsRelative=this.morphTargetsRelative;const groups=this.groups;for(let i=0,l=groups.length;i<l;i++){const group=groups[i];geometry2.addGroup(group.start,group.count,group.materialIndex)}return geometry2}toJSON(){const data={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(data.uuid=this.uuid,data.type=this.type,this.name!==""&&(data.name=this.name),Object.keys(this.userData).length>0&&(data.userData=this.userData),this.parameters!==void 0){const parameters=this.parameters;for(const key in parameters)parameters[key]!==void 0&&(data[key]=parameters[key]);return data}data.data={attributes:{}};const index=this.index;index!==null&&(data.data.index={type:index.array.constructor.name,array:Array.prototype.slice.call(index.array)});const attributes=this.attributes;for(const key in attributes){const attribute=attributes[key];data.data.attributes[key]=attribute.toJSON(data.data)}const morphAttributes={};let hasMorphAttributes=!1;for(const key in this.morphAttributes){const attributeArray=this.morphAttributes[key],array=[];for(let i=0,il=attributeArray.length;i<il;i++){const attribute=attributeArray[i];array.push(attribute.toJSON(data.data))}array.length>0&&(morphAttributes[key]=array,hasMorphAttributes=!0)}hasMorphAttributes&&(data.data.morphAttributes=morphAttributes,data.data.morphTargetsRelative=this.morphTargetsRelative);const groups=this.groups;groups.length>0&&(data.data.groups=JSON.parse(JSON.stringify(groups)));const boundingSphere=this.boundingSphere;return boundingSphere!==null&&(data.data.boundingSphere=boundingSphere.toJSON()),data}clone(){return new this.constructor().copy(this)}copy(source){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const data={};this.name=source.name;const index=source.index;index!==null&&this.setIndex(index.clone());const attributes=source.attributes;for(const name in attributes){const attribute=attributes[name];this.setAttribute(name,attribute.clone(data))}const morphAttributes=source.morphAttributes;for(const name in morphAttributes){const array=[],morphAttribute=morphAttributes[name];for(let i=0,l=morphAttribute.length;i<l;i++)array.push(morphAttribute[i].clone(data));this.morphAttributes[name]=array}this.morphTargetsRelative=source.morphTargetsRelative;const groups=source.groups;for(let i=0,l=groups.length;i<l;i++){const group=groups[i];this.addGroup(group.start,group.count,group.materialIndex)}const boundingBox=source.boundingBox;boundingBox!==null&&(this.boundingBox=boundingBox.clone());const boundingSphere=source.boundingSphere;return boundingSphere!==null&&(this.boundingSphere=boundingSphere.clone()),this.drawRange.start=source.drawRange.start,this.drawRange.count=source.drawRange.count,this.userData=source.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(geometry=new BufferGeometry,material=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=geometry,this.material=material,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(source,recursive){return super.copy(source,recursive),source.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=source.morphTargetInfluences.slice()),source.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},source.morphTargetDictionary)),this.material=Array.isArray(source.material)?source.material.slice():source.material,this.geometry=source.geometry,this}updateMorphTargets(){const morphAttributes=this.geometry.morphAttributes,keys=Object.keys(morphAttributes);if(keys.length>0){const morphAttribute=morphAttributes[keys[0]];if(morphAttribute!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let m=0,ml=morphAttribute.length;m<ml;m++){const name=morphAttribute[m].name||String(m);this.morphTargetInfluences.push(0),this.morphTargetDictionary[name]=m}}}}getVertexPosition(index,target){const geometry=this.geometry,position=geometry.attributes.position,morphPosition=geometry.morphAttributes.position,morphTargetsRelative=geometry.morphTargetsRelative;target.fromBufferAttribute(position,index);const morphInfluences=this.morphTargetInfluences;if(morphPosition&&morphInfluences){_morphA.set(0,0,0);for(let i=0,il=morphPosition.length;i<il;i++){const influence=morphInfluences[i],morphAttribute=morphPosition[i];influence!==0&&(_tempA.fromBufferAttribute(morphAttribute,index),morphTargetsRelative?_morphA.addScaledVector(_tempA,influence):_morphA.addScaledVector(_tempA.sub(target),influence))}target.add(_morphA)}return target}raycast(raycaster,intersects){const geometry=this.geometry,material=this.material,matrixWorld=this.matrixWorld;material!==void 0&&(geometry.boundingSphere===null&&geometry.computeBoundingSphere(),_sphere$6.copy(geometry.boundingSphere),_sphere$6.applyMatrix4(matrixWorld),_ray$3.copy(raycaster.ray).recast(raycaster.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(raycaster.far-raycaster.near)**2))&&(_inverseMatrix$3.copy(matrixWorld).invert(),_ray$3.copy(raycaster.ray).applyMatrix4(_inverseMatrix$3),!(geometry.boundingBox!==null&&_ray$3.intersectsBox(geometry.boundingBox)===!1)&&this._computeIntersections(raycaster,intersects,_ray$3)))}_computeIntersections(raycaster,intersects,rayLocalSpace){let intersection;const geometry=this.geometry,material=this.material,index=geometry.index,position=geometry.attributes.position,uv=geometry.attributes.uv,uv1=geometry.attributes.uv1,normal=geometry.attributes.normal,groups=geometry.groups,drawRange=geometry.drawRange;if(index!==null)if(Array.isArray(material))for(let i=0,il=groups.length;i<il;i++){const group=groups[i],groupMaterial=material[group.materialIndex],start=Math.max(group.start,drawRange.start),end=Math.min(index.count,Math.min(group.start+group.count,drawRange.start+drawRange.count));for(let j=start,jl=end;j<jl;j+=3){const a=index.getX(j),b=index.getX(j+1),c=index.getX(j+2);intersection=checkGeometryIntersection(this,groupMaterial,raycaster,rayLocalSpace,uv,uv1,normal,a,b,c),intersection&&(intersection.faceIndex=Math.floor(j/3),intersection.face.materialIndex=group.materialIndex,intersects.push(intersection))}}else{const start=Math.max(0,drawRange.start),end=Math.min(index.count,drawRange.start+drawRange.count);for(let i=start,il=end;i<il;i+=3){const a=index.getX(i),b=index.getX(i+1),c=index.getX(i+2);intersection=checkGeometryIntersection(this,material,raycaster,rayLocalSpace,uv,uv1,normal,a,b,c),intersection&&(intersection.faceIndex=Math.floor(i/3),intersects.push(intersection))}}else if(position!==void 0)if(Array.isArray(material))for(let i=0,il=groups.length;i<il;i++){const group=groups[i],groupMaterial=material[group.materialIndex],start=Math.max(group.start,drawRange.start),end=Math.min(position.count,Math.min(group.start+group.count,drawRange.start+drawRange.count));for(let j=start,jl=end;j<jl;j+=3){const a=j,b=j+1,c=j+2;intersection=checkGeometryIntersection(this,groupMaterial,raycaster,rayLocalSpace,uv,uv1,normal,a,b,c),intersection&&(intersection.faceIndex=Math.floor(j/3),intersection.face.materialIndex=group.materialIndex,intersects.push(intersection))}}else{const start=Math.max(0,drawRange.start),end=Math.min(position.count,drawRange.start+drawRange.count);for(let i=start,il=end;i<il;i+=3){const a=i,b=i+1,c=i+2;intersection=checkGeometryIntersection(this,material,raycaster,rayLocalSpace,uv,uv1,normal,a,b,c),intersection&&(intersection.faceIndex=Math.floor(i/3),intersects.push(intersection))}}}}function checkIntersection$1(object,material,raycaster,ray,pA,pB,pC,point){let intersect;if(material.side===BackSide?intersect=ray.intersectTriangle(pC,pB,pA,!0,point):intersect=ray.intersectTriangle(pA,pB,pC,material.side===FrontSide,point),intersect===null)return null;_intersectionPointWorld.copy(point),_intersectionPointWorld.applyMatrix4(object.matrixWorld);const distance=raycaster.ray.origin.distanceTo(_intersectionPointWorld);return distance<raycaster.near||distance>raycaster.far?null:{distance,point:_intersectionPointWorld.clone(),object}}function checkGeometryIntersection(object,material,raycaster,ray,uv,uv1,normal,a,b,c){object.getVertexPosition(a,_vA$1),object.getVertexPosition(b,_vB$1),object.getVertexPosition(c,_vC$1);const intersection=checkIntersection$1(object,material,raycaster,ray,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(intersection){const barycoord=new Vector3;Triangle.getBarycoord(_intersectionPoint,_vA$1,_vB$1,_vC$1,barycoord),uv&&(intersection.uv=Triangle.getInterpolatedAttribute(uv,a,b,c,barycoord,new Vector2)),uv1&&(intersection.uv1=Triangle.getInterpolatedAttribute(uv1,a,b,c,barycoord,new Vector2)),normal&&(intersection.normal=Triangle.getInterpolatedAttribute(normal,a,b,c,barycoord,new Vector3),intersection.normal.dot(ray.direction)>0&&intersection.normal.multiplyScalar(-1));const face={a,b,c,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,face.normal),intersection.face=face,intersection.barycoord=barycoord}return intersection}class BoxGeometry extends BufferGeometry{constructor(width=1,height=1,depth=1,widthSegments=1,heightSegments=1,depthSegments=1){super(),this.type="BoxGeometry",this.parameters={width,height,depth,widthSegments,heightSegments,depthSegments};const scope=this;widthSegments=Math.floor(widthSegments),heightSegments=Math.floor(heightSegments),depthSegments=Math.floor(depthSegments);const indices=[],vertices=[],normals=[],uvs=[];let numberOfVertices=0,groupStart=0;buildPlane("z","y","x",-1,-1,depth,height,width,depthSegments,heightSegments,0),buildPlane("z","y","x",1,-1,depth,height,-width,depthSegments,heightSegments,1),buildPlane("x","z","y",1,1,width,depth,height,widthSegments,depthSegments,2),buildPlane("x","z","y",1,-1,width,depth,-height,widthSegments,depthSegments,3),buildPlane("x","y","z",1,-1,width,height,depth,widthSegments,heightSegments,4),buildPlane("x","y","z",-1,-1,width,height,-depth,widthSegments,heightSegments,5),this.setIndex(indices),this.setAttribute("position",new Float32BufferAttribute(vertices,3)),this.setAttribute("normal",new Float32BufferAttribute(normals,3)),this.setAttribute("uv",new Float32BufferAttribute(uvs,2));function buildPlane(u,v,w,udir,vdir,width2,height2,depth2,gridX,gridY,materialIndex){const segmentWidth=width2/gridX,segmentHeight=height2/gridY,widthHalf=width2/2,heightHalf=height2/2,depthHalf=depth2/2,gridX1=gridX+1,gridY1=gridY+1;let vertexCounter=0,groupCount=0;const vector=new Vector3;for(let iy=0;iy<gridY1;iy++){const y=iy*segmentHeight-heightHalf;for(let ix=0;ix<gridX1;ix++){const x=ix*segmentWidth-widthHalf;vector[u]=x*udir,vector[v]=y*vdir,vector[w]=depthHalf,vertices.push(vector.x,vector.y,vector.z),vector[u]=0,vector[v]=0,vector[w]=depth2>0?1:-1,normals.push(vector.x,vector.y,vector.z),uvs.push(ix/gridX),uvs.push(1-iy/gridY),vertexCounter+=1}}for(let iy=0;iy<gridY;iy++)for(let ix=0;ix<gridX;ix++){const a=numberOfVertices+ix+gridX1*iy,b=numberOfVertices+ix+gridX1*(iy+1),c=numberOfVertices+(ix+1)+gridX1*(iy+1),d=numberOfVertices+(ix+1)+gridX1*iy;indices.push(a,b,d),indices.push(b,c,d),groupCount+=6}scope.addGroup(groupStart,groupCount,materialIndex),groupStart+=groupCount,numberOfVertices+=vertexCounter}}copy(source){return super.copy(source),this.parameters=Object.assign({},source.parameters),this}static fromJSON(data){return new BoxGeometry(data.width,data.height,data.depth,data.widthSegments,data.heightSegments,data.depthSegments)}}function cloneUniforms(src){const dst={};for(const u in src){dst[u]={};for(const p2 in src[u]){const property=src[u][p2];property&&(property.isColor||property.isMatrix3||property.isMatrix4||property.isVector2||property.isVector3||property.isVector4||property.isTexture||property.isQuaternion)?property.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),dst[u][p2]=null):dst[u][p2]=property.clone():Array.isArray(property)?dst[u][p2]=property.slice():dst[u][p2]=property}}return dst}function mergeUniforms(uniforms){const merged={};for(let u=0;u<uniforms.length;u++){const tmp=cloneUniforms(uniforms[u]);for(const p2 in tmp)merged[p2]=tmp[p2]}return merged}function cloneUniformsGroups(src){const dst=[];for(let u=0;u<src.length;u++)dst.push(src[u].clone());return dst}function getUnlitUniformColorSpace(renderer){const currentRenderTarget=renderer.getRenderTarget();return currentRenderTarget===null?renderer.outputColorSpace:currentRenderTarget.isXRRenderTarget===!0?currentRenderTarget.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(parameters){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,parameters!==void 0&&this.setValues(parameters)}copy(source){return super.copy(source),this.fragmentShader=source.fragmentShader,this.vertexShader=source.vertexShader,this.uniforms=cloneUniforms(source.uniforms),this.uniformsGroups=cloneUniformsGroups(source.uniformsGroups),this.defines=Object.assign({},source.defines),this.wireframe=source.wireframe,this.wireframeLinewidth=source.wireframeLinewidth,this.fog=source.fog,this.lights=source.lights,this.clipping=source.clipping,this.extensions=Object.assign({},source.extensions),this.glslVersion=source.glslVersion,this}toJSON(meta){const data=super.toJSON(meta);data.glslVersion=this.glslVersion,data.uniforms={};for(const name in this.uniforms){const value=this.uniforms[name].value;value&&value.isTexture?data.uniforms[name]={type:"t",value:value.toJSON(meta).uuid}:value&&value.isColor?data.uniforms[name]={type:"c",value:value.getHex()}:value&&value.isVector2?data.uniforms[name]={type:"v2",value:value.toArray()}:value&&value.isVector3?data.uniforms[name]={type:"v3",value:value.toArray()}:value&&value.isVector4?data.uniforms[name]={type:"v4",value:value.toArray()}:value&&value.isMatrix3?data.uniforms[name]={type:"m3",value:value.toArray()}:value&&value.isMatrix4?data.uniforms[name]={type:"m4",value:value.toArray()}:data.uniforms[name]={value}}Object.keys(this.defines).length>0&&(data.defines=this.defines),data.vertexShader=this.vertexShader,data.fragmentShader=this.fragmentShader,data.lights=this.lights,data.clipping=this.clipping;const extensions={};for(const key in this.extensions)this.extensions[key]===!0&&(extensions[key]=!0);return Object.keys(extensions).length>0&&(data.extensions=extensions),data}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(source,recursive){return super.copy(source,recursive),this.matrixWorldInverse.copy(source.matrixWorldInverse),this.projectionMatrix.copy(source.projectionMatrix),this.projectionMatrixInverse.copy(source.projectionMatrixInverse),this.coordinateSystem=source.coordinateSystem,this}getWorldDirection(target){return super.getWorldDirection(target).negate()}updateMatrixWorld(force){super.updateMatrixWorld(force),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(updateParents,updateChildren){super.updateWorldMatrix(updateParents,updateChildren),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(fov2=50,aspect2=1,near=.1,far=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=fov2,this.zoom=1,this.near=near,this.far=far,this.focus=10,this.aspect=aspect2,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(source,recursive){return super.copy(source,recursive),this.fov=source.fov,this.zoom=source.zoom,this.near=source.near,this.far=source.far,this.focus=source.focus,this.aspect=source.aspect,this.view=source.view===null?null:Object.assign({},source.view),this.filmGauge=source.filmGauge,this.filmOffset=source.filmOffset,this}setFocalLength(focalLength){const vExtentSlope=.5*this.getFilmHeight()/focalLength;this.fov=RAD2DEG*2*Math.atan(vExtentSlope),this.updateProjectionMatrix()}getFocalLength(){const vExtentSlope=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/vExtentSlope}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(distance,minTarget,maxTarget){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),minTarget.set(_v3$1.x,_v3$1.y).multiplyScalar(-distance/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),maxTarget.set(_v3$1.x,_v3$1.y).multiplyScalar(-distance/_v3$1.z)}getViewSize(distance,target){return this.getViewBounds(distance,_minTarget,_maxTarget),target.subVectors(_maxTarget,_minTarget)}setViewOffset(fullWidth,fullHeight,x,y,width,height){this.aspect=fullWidth/fullHeight,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=fullWidth,this.view.fullHeight=fullHeight,this.view.offsetX=x,this.view.offsetY=y,this.view.width=width,this.view.height=height,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const near=this.near;let top=near*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,height=2*top,width=this.aspect*height,left=-.5*width;const view=this.view;if(this.view!==null&&this.view.enabled){const fullWidth=view.fullWidth,fullHeight=view.fullHeight;left+=view.offsetX*width/fullWidth,top-=view.offsetY*height/fullHeight,width*=view.width/fullWidth,height*=view.height/fullHeight}const skew=this.filmOffset;skew!==0&&(left+=near*skew/this.getFilmWidth()),this.projectionMatrix.makePerspective(left,left+width,top,top-height,near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(meta){const data=super.toJSON(meta);return data.object.fov=this.fov,data.object.zoom=this.zoom,data.object.near=this.near,data.object.far=this.far,data.object.focus=this.focus,data.object.aspect=this.aspect,this.view!==null&&(data.object.view=Object.assign({},this.view)),data.object.filmGauge=this.filmGauge,data.object.filmOffset=this.filmOffset,data}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(near,far,renderTarget){super(),this.type="CubeCamera",this.renderTarget=renderTarget,this.coordinateSystem=null,this.activeMipmapLevel=0;const cameraPX=new PerspectiveCamera(fov,aspect,near,far);cameraPX.layers=this.layers,this.add(cameraPX);const cameraNX=new PerspectiveCamera(fov,aspect,near,far);cameraNX.layers=this.layers,this.add(cameraNX);const cameraPY=new PerspectiveCamera(fov,aspect,near,far);cameraPY.layers=this.layers,this.add(cameraPY);const cameraNY=new PerspectiveCamera(fov,aspect,near,far);cameraNY.layers=this.layers,this.add(cameraNY);const cameraPZ=new PerspectiveCamera(fov,aspect,near,far);cameraPZ.layers=this.layers,this.add(cameraPZ);const cameraNZ=new PerspectiveCamera(fov,aspect,near,far);cameraNZ.layers=this.layers,this.add(cameraNZ)}updateCoordinateSystem(){const coordinateSystem=this.coordinateSystem,cameras=this.children.concat(),[cameraPX,cameraNX,cameraPY,cameraNY,cameraPZ,cameraNZ]=cameras;for(const camera of cameras)this.remove(camera);if(coordinateSystem===WebGLCoordinateSystem)cameraPX.up.set(0,1,0),cameraPX.lookAt(1,0,0),cameraNX.up.set(0,1,0),cameraNX.lookAt(-1,0,0),cameraPY.up.set(0,0,-1),cameraPY.lookAt(0,1,0),cameraNY.up.set(0,0,1),cameraNY.lookAt(0,-1,0),cameraPZ.up.set(0,1,0),cameraPZ.lookAt(0,0,1),cameraNZ.up.set(0,1,0),cameraNZ.lookAt(0,0,-1);else if(coordinateSystem===WebGPUCoordinateSystem)cameraPX.up.set(0,-1,0),cameraPX.lookAt(-1,0,0),cameraNX.up.set(0,-1,0),cameraNX.lookAt(1,0,0),cameraPY.up.set(0,0,1),cameraPY.lookAt(0,1,0),cameraNY.up.set(0,0,-1),cameraNY.lookAt(0,-1,0),cameraPZ.up.set(0,-1,0),cameraPZ.lookAt(0,0,1),cameraNZ.up.set(0,-1,0),cameraNZ.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+coordinateSystem);for(const camera of cameras)this.add(camera),camera.updateMatrixWorld()}update(renderer,scene){this.parent===null&&this.updateMatrixWorld();const{renderTarget,activeMipmapLevel}=this;this.coordinateSystem!==renderer.coordinateSystem&&(this.coordinateSystem=renderer.coordinateSystem,this.updateCoordinateSystem());const[cameraPX,cameraNX,cameraPY,cameraNY,cameraPZ,cameraNZ]=this.children,currentRenderTarget=renderer.getRenderTarget(),currentActiveCubeFace=renderer.getActiveCubeFace(),currentActiveMipmapLevel=renderer.getActiveMipmapLevel(),currentXrEnabled=renderer.xr.enabled;renderer.xr.enabled=!1;const generateMipmaps=renderTarget.texture.generateMipmaps;renderTarget.texture.generateMipmaps=!1,renderer.setRenderTarget(renderTarget,0,activeMipmapLevel),renderer.render(scene,cameraPX),renderer.setRenderTarget(renderTarget,1,activeMipmapLevel),renderer.render(scene,cameraNX),renderer.setRenderTarget(renderTarget,2,activeMipmapLevel),renderer.render(scene,cameraPY),renderer.setRenderTarget(renderTarget,3,activeMipmapLevel),renderer.render(scene,cameraNY),renderer.setRenderTarget(renderTarget,4,activeMipmapLevel),renderer.render(scene,cameraPZ),renderTarget.texture.generateMipmaps=generateMipmaps,renderer.setRenderTarget(renderTarget,5,activeMipmapLevel),renderer.render(scene,cameraNZ),renderer.setRenderTarget(currentRenderTarget,currentActiveCubeFace,currentActiveMipmapLevel),renderer.xr.enabled=currentXrEnabled,renderTarget.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(images=[],mapping=CubeReflectionMapping,wrapS,wrapT,magFilter,minFilter,format,type,anisotropy,colorSpace){super(images,mapping,wrapS,wrapT,magFilter,minFilter,format,type,anisotropy,colorSpace),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(value){this.image=value}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(size=1,options={}){super(size,size,options),this.isWebGLCubeRenderTarget=!0;const image={width:size,height:size,depth:1},images=[image,image,image,image,image,image];this.texture=new CubeTexture(images),this._setTextureOptions(options),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(renderer,texture){this.texture.type=texture.type,this.texture.colorSpace=texture.colorSpace,this.texture.generateMipmaps=texture.generateMipmaps,this.texture.minFilter=texture.minFilter,this.texture.magFilter=texture.magFilter;const shader={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},geometry=new BoxGeometry(5,5,5),material=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(shader.uniforms),vertexShader:shader.vertexShader,fragmentShader:shader.fragmentShader,side:BackSide,blending:NoBlending});material.uniforms.tEquirect.value=texture;const mesh=new Mesh(geometry,material),currentMinFilter=texture.minFilter;return texture.minFilter===LinearMipmapLinearFilter&&(texture.minFilter=LinearFilter),new CubeCamera(1,10,this).update(renderer,mesh),texture.minFilter=currentMinFilter,mesh.geometry.dispose(),mesh.material.dispose(),this}clear(renderer,color=!0,depth=!0,stencil=!0){const currentRenderTarget=renderer.getRenderTarget();for(let i=0;i<6;i++)renderer.setRenderTarget(this,i),renderer.clear(color,depth,stencil);renderer.setRenderTarget(currentRenderTarget)}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(event){return this._targetRay!==null&&this._targetRay.dispatchEvent(event),this._grip!==null&&this._grip.dispatchEvent(event),this._hand!==null&&this._hand.dispatchEvent(event),this}connect(inputSource){if(inputSource&&inputSource.hand){const hand=this._hand;if(hand)for(const inputjoint of inputSource.hand.values())this._getHandJoint(hand,inputjoint)}return this.dispatchEvent({type:"connected",data:inputSource}),this}disconnect(inputSource){return this.dispatchEvent({type:"disconnected",data:inputSource}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(inputSource,frame,referenceSpace){let inputPose=null,gripPose=null,handPose=null;const targetRay=this._targetRay,grip=this._grip,hand=this._hand;if(inputSource&&frame.session.visibilityState!=="visible-blurred"){if(hand&&inputSource.hand){handPose=!0;for(const inputjoint of inputSource.hand.values()){const jointPose=frame.getJointPose(inputjoint,referenceSpace),joint=this._getHandJoint(hand,inputjoint);jointPose!==null&&(joint.matrix.fromArray(jointPose.transform.matrix),joint.matrix.decompose(joint.position,joint.rotation,joint.scale),joint.matrixWorldNeedsUpdate=!0,joint.jointRadius=jointPose.radius),joint.visible=jointPose!==null}const indexTip=hand.joints["index-finger-tip"],thumbTip=hand.joints["thumb-tip"],distance=indexTip.position.distanceTo(thumbTip.position),distanceToPinch=.02,threshold=.005;hand.inputState.pinching&&distance>distanceToPinch+threshold?(hand.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:inputSource.handedness,target:this})):!hand.inputState.pinching&&distance<=distanceToPinch-threshold&&(hand.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:inputSource.handedness,target:this}))}else grip!==null&&inputSource.gripSpace&&(gripPose=frame.getPose(inputSource.gripSpace,referenceSpace),gripPose!==null&&(grip.matrix.fromArray(gripPose.transform.matrix),grip.matrix.decompose(grip.position,grip.rotation,grip.scale),grip.matrixWorldNeedsUpdate=!0,gripPose.linearVelocity?(grip.hasLinearVelocity=!0,grip.linearVelocity.copy(gripPose.linearVelocity)):grip.hasLinearVelocity=!1,gripPose.angularVelocity?(grip.hasAngularVelocity=!0,grip.angularVelocity.copy(gripPose.angularVelocity)):grip.hasAngularVelocity=!1));targetRay!==null&&(inputPose=frame.getPose(inputSource.targetRaySpace,referenceSpace),inputPose===null&&gripPose!==null&&(inputPose=gripPose),inputPose!==null&&(targetRay.matrix.fromArray(inputPose.transform.matrix),targetRay.matrix.decompose(targetRay.position,targetRay.rotation,targetRay.scale),targetRay.matrixWorldNeedsUpdate=!0,inputPose.linearVelocity?(targetRay.hasLinearVelocity=!0,targetRay.linearVelocity.copy(inputPose.linearVelocity)):targetRay.hasLinearVelocity=!1,inputPose.angularVelocity?(targetRay.hasAngularVelocity=!0,targetRay.angularVelocity.copy(inputPose.angularVelocity)):targetRay.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return targetRay!==null&&(targetRay.visible=inputPose!==null),grip!==null&&(grip.visible=gripPose!==null),hand!==null&&(hand.visible=handPose!==null),this}_getHandJoint(hand,inputjoint){if(hand.joints[inputjoint.jointName]===void 0){const joint=new Group;joint.matrixAutoUpdate=!1,joint.visible=!1,hand.joints[inputjoint.jointName]=joint,hand.add(joint)}return hand.joints[inputjoint.jointName]}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(source,recursive){return super.copy(source,recursive),source.background!==null&&(this.background=source.background.clone()),source.environment!==null&&(this.environment=source.environment.clone()),source.fog!==null&&(this.fog=source.fog.clone()),this.backgroundBlurriness=source.backgroundBlurriness,this.backgroundIntensity=source.backgroundIntensity,this.backgroundRotation.copy(source.backgroundRotation),this.environmentIntensity=source.environmentIntensity,this.environmentRotation.copy(source.environmentRotation),source.overrideMaterial!==null&&(this.overrideMaterial=source.overrideMaterial.clone()),this.matrixAutoUpdate=source.matrixAutoUpdate,this}toJSON(meta){const data=super.toJSON(meta);return this.fog!==null&&(data.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(data.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(data.object.backgroundIntensity=this.backgroundIntensity),data.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(data.object.environmentIntensity=this.environmentIntensity),data.object.environmentRotation=this.environmentRotation.toArray(),data}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(normal=new Vector3(1,0,0),constant=0){this.isPlane=!0,this.normal=normal,this.constant=constant}set(normal,constant){return this.normal.copy(normal),this.constant=constant,this}setComponents(x,y,z,w){return this.normal.set(x,y,z),this.constant=w,this}setFromNormalAndCoplanarPoint(normal,point){return this.normal.copy(normal),this.constant=-point.dot(this.normal),this}setFromCoplanarPoints(a,b,c){const normal=_vector1.subVectors(c,b).cross(_vector2.subVectors(a,b)).normalize();return this.setFromNormalAndCoplanarPoint(normal,a),this}copy(plane){return this.normal.copy(plane.normal),this.constant=plane.constant,this}normalize(){const inverseNormalLength=1/this.normal.length();return this.normal.multiplyScalar(inverseNormalLength),this.constant*=inverseNormalLength,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(point){return this.normal.dot(point)+this.constant}distanceToSphere(sphere){return this.distanceToPoint(sphere.center)-sphere.radius}projectPoint(point,target){return target.copy(point).addScaledVector(this.normal,-this.distanceToPoint(point))}intersectLine(line,target){const direction=line.delta(_vector1),denominator=this.normal.dot(direction);if(denominator===0)return this.distanceToPoint(line.start)===0?target.copy(line.start):null;const t=-(line.start.dot(this.normal)+this.constant)/denominator;return t<0||t>1?null:target.copy(line.start).addScaledVector(direction,t)}intersectsLine(line){const startSign=this.distanceToPoint(line.start),endSign=this.distanceToPoint(line.end);return startSign<0&&endSign>0||endSign<0&&startSign>0}intersectsBox(box){return box.intersectsPlane(this)}intersectsSphere(sphere){return sphere.intersectsPlane(this)}coplanarPoint(target){return target.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(matrix,optionalNormalMatrix){const normalMatrix=optionalNormalMatrix||_normalMatrix.getNormalMatrix(matrix),referencePoint=this.coplanarPoint(_vector1).applyMatrix4(matrix),normal=this.normal.applyMatrix3(normalMatrix).normalize();return this.constant=-referencePoint.dot(normal),this}translate(offset){return this.constant-=offset.dot(this.normal),this}equals(plane){return plane.normal.equals(this.normal)&&plane.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$3=new Sphere,_defaultSpriteCenter=new Vector2(.5,.5),_vector$6=new Vector3;class Frustum{constructor(p0=new Plane,p1=new Plane,p2=new Plane,p3=new Plane,p4=new Plane,p5=new Plane){this.planes=[p0,p1,p2,p3,p4,p5]}set(p0,p1,p2,p3,p4,p5){const planes=this.planes;return planes[0].copy(p0),planes[1].copy(p1),planes[2].copy(p2),planes[3].copy(p3),planes[4].copy(p4),planes[5].copy(p5),this}copy(frustum){const planes=this.planes;for(let i=0;i<6;i++)planes[i].copy(frustum.planes[i]);return this}setFromProjectionMatrix(m,coordinateSystem=WebGLCoordinateSystem){const planes=this.planes,me=m.elements,me0=me[0],me1=me[1],me2=me[2],me3=me[3],me4=me[4],me5=me[5],me6=me[6],me7=me[7],me8=me[8],me9=me[9],me10=me[10],me11=me[11],me12=me[12],me13=me[13],me14=me[14],me15=me[15];if(planes[0].setComponents(me3-me0,me7-me4,me11-me8,me15-me12).normalize(),planes[1].setComponents(me3+me0,me7+me4,me11+me8,me15+me12).normalize(),planes[2].setComponents(me3+me1,me7+me5,me11+me9,me15+me13).normalize(),planes[3].setComponents(me3-me1,me7-me5,me11-me9,me15-me13).normalize(),planes[4].setComponents(me3-me2,me7-me6,me11-me10,me15-me14).normalize(),coordinateSystem===WebGLCoordinateSystem)planes[5].setComponents(me3+me2,me7+me6,me11+me10,me15+me14).normalize();else if(coordinateSystem===WebGPUCoordinateSystem)planes[5].setComponents(me2,me6,me10,me14).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+coordinateSystem);return this}intersectsObject(object){if(object.boundingSphere!==void 0)object.boundingSphere===null&&object.computeBoundingSphere(),_sphere$3.copy(object.boundingSphere).applyMatrix4(object.matrixWorld);else{const geometry=object.geometry;geometry.boundingSphere===null&&geometry.computeBoundingSphere(),_sphere$3.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld)}return this.intersectsSphere(_sphere$3)}intersectsSprite(sprite){_sphere$3.center.set(0,0,0);const offset=_defaultSpriteCenter.distanceTo(sprite.center);return _sphere$3.radius=.7071067811865476+offset,_sphere$3.applyMatrix4(sprite.matrixWorld),this.intersectsSphere(_sphere$3)}intersectsSphere(sphere){const planes=this.planes,center=sphere.center,negRadius=-sphere.radius;for(let i=0;i<6;i++)if(planes[i].distanceToPoint(center)<negRadius)return!1;return!0}intersectsBox(box){const planes=this.planes;for(let i=0;i<6;i++){const plane=planes[i];if(_vector$6.x=plane.normal.x>0?box.max.x:box.min.x,_vector$6.y=plane.normal.y>0?box.max.y:box.min.y,_vector$6.z=plane.normal.z>0?box.max.z:box.min.z,plane.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(point){const planes=this.planes;for(let i=0;i<6;i++)if(planes[i].distanceToPoint(point)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class DepthTexture extends Texture{constructor(width,height,type=UnsignedIntType,mapping,wrapS,wrapT,magFilter=NearestFilter,minFilter=NearestFilter,anisotropy,format=DepthFormat,depth=1){if(format!==DepthFormat&&format!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const image={width,height,depth};super(image,mapping,wrapS,wrapT,magFilter,minFilter,format,type,anisotropy),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(source){return super.copy(source),this.source=new Source(Object.assign({},source.image)),this.compareFunction=source.compareFunction,this}toJSON(meta){const data=super.toJSON(meta);return this.compareFunction!==null&&(data.compareFunction=this.compareFunction),data}}class PlaneGeometry extends BufferGeometry{constructor(width=1,height=1,widthSegments=1,heightSegments=1){super(),this.type="PlaneGeometry",this.parameters={width,height,widthSegments,heightSegments};const width_half=width/2,height_half=height/2,gridX=Math.floor(widthSegments),gridY=Math.floor(heightSegments),gridX1=gridX+1,gridY1=gridY+1,segment_width=width/gridX,segment_height=height/gridY,indices=[],vertices=[],normals=[],uvs=[];for(let iy=0;iy<gridY1;iy++){const y=iy*segment_height-height_half;for(let ix=0;ix<gridX1;ix++){const x=ix*segment_width-width_half;vertices.push(x,-y,0),normals.push(0,0,1),uvs.push(ix/gridX),uvs.push(1-iy/gridY)}}for(let iy=0;iy<gridY;iy++)for(let ix=0;ix<gridX;ix++){const a=ix+gridX1*iy,b=ix+gridX1*(iy+1),c=ix+1+gridX1*(iy+1),d=ix+1+gridX1*iy;indices.push(a,b,d),indices.push(b,c,d)}this.setIndex(indices),this.setAttribute("position",new Float32BufferAttribute(vertices,3)),this.setAttribute("normal",new Float32BufferAttribute(normals,3)),this.setAttribute("uv",new Float32BufferAttribute(uvs,2))}copy(source){return super.copy(source),this.parameters=Object.assign({},source.parameters),this}static fromJSON(data){return new PlaneGeometry(data.width,data.height,data.widthSegments,data.heightSegments)}}class SphereGeometry extends BufferGeometry{constructor(radius=1,widthSegments=32,heightSegments=16,phiStart=0,phiLength=Math.PI*2,thetaStart=0,thetaLength=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius,widthSegments,heightSegments,phiStart,phiLength,thetaStart,thetaLength},widthSegments=Math.max(3,Math.floor(widthSegments)),heightSegments=Math.max(2,Math.floor(heightSegments));const thetaEnd=Math.min(thetaStart+thetaLength,Math.PI);let index=0;const grid=[],vertex2=new Vector3,normal=new Vector3,indices=[],vertices=[],normals=[],uvs=[];for(let iy=0;iy<=heightSegments;iy++){const verticesRow=[],v=iy/heightSegments;let uOffset=0;iy===0&&thetaStart===0?uOffset=.5/widthSegments:iy===heightSegments&&thetaEnd===Math.PI&&(uOffset=-.5/widthSegments);for(let ix=0;ix<=widthSegments;ix++){const u=ix/widthSegments;vertex2.x=-radius*Math.cos(phiStart+u*phiLength)*Math.sin(thetaStart+v*thetaLength),vertex2.y=radius*Math.cos(thetaStart+v*thetaLength),vertex2.z=radius*Math.sin(phiStart+u*phiLength)*Math.sin(thetaStart+v*thetaLength),vertices.push(vertex2.x,vertex2.y,vertex2.z),normal.copy(vertex2).normalize(),normals.push(normal.x,normal.y,normal.z),uvs.push(u+uOffset,1-v),verticesRow.push(index++)}grid.push(verticesRow)}for(let iy=0;iy<heightSegments;iy++)for(let ix=0;ix<widthSegments;ix++){const a=grid[iy][ix+1],b=grid[iy][ix],c=grid[iy+1][ix],d=grid[iy+1][ix+1];(iy!==0||thetaStart>0)&&indices.push(a,b,d),(iy!==heightSegments-1||thetaEnd<Math.PI)&&indices.push(b,c,d)}this.setIndex(indices),this.setAttribute("position",new Float32BufferAttribute(vertices,3)),this.setAttribute("normal",new Float32BufferAttribute(normals,3)),this.setAttribute("uv",new Float32BufferAttribute(uvs,2))}copy(source){return super.copy(source),this.parameters=Object.assign({},source.parameters),this}static fromJSON(data){return new SphereGeometry(data.radius,data.widthSegments,data.heightSegments,data.phiStart,data.phiLength,data.thetaStart,data.thetaLength)}}class MeshStandardMaterial extends Material{constructor(parameters){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(parameters)}copy(source){return super.copy(source),this.defines={STANDARD:""},this.color.copy(source.color),this.roughness=source.roughness,this.metalness=source.metalness,this.map=source.map,this.lightMap=source.lightMap,this.lightMapIntensity=source.lightMapIntensity,this.aoMap=source.aoMap,this.aoMapIntensity=source.aoMapIntensity,this.emissive.copy(source.emissive),this.emissiveMap=source.emissiveMap,this.emissiveIntensity=source.emissiveIntensity,this.bumpMap=source.bumpMap,this.bumpScale=source.bumpScale,this.normalMap=source.normalMap,this.normalMapType=source.normalMapType,this.normalScale.copy(source.normalScale),this.displacementMap=source.displacementMap,this.displacementScale=source.displacementScale,this.displacementBias=source.displacementBias,this.roughnessMap=source.roughnessMap,this.metalnessMap=source.metalnessMap,this.alphaMap=source.alphaMap,this.envMap=source.envMap,this.envMapRotation.copy(source.envMapRotation),this.envMapIntensity=source.envMapIntensity,this.wireframe=source.wireframe,this.wireframeLinewidth=source.wireframeLinewidth,this.wireframeLinecap=source.wireframeLinecap,this.wireframeLinejoin=source.wireframeLinejoin,this.flatShading=source.flatShading,this.fog=source.fog,this}}class MeshDepthMaterial extends Material{constructor(parameters){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(parameters)}copy(source){return super.copy(source),this.depthPacking=source.depthPacking,this.map=source.map,this.alphaMap=source.alphaMap,this.displacementMap=source.displacementMap,this.displacementScale=source.displacementScale,this.displacementBias=source.displacementBias,this.wireframe=source.wireframe,this.wireframeLinewidth=source.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(parameters){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(parameters)}copy(source){return super.copy(source),this.map=source.map,this.alphaMap=source.alphaMap,this.displacementMap=source.displacementMap,this.displacementScale=source.displacementScale,this.displacementBias=source.displacementBias,this}}const Cache={enabled:!1,files:{},add:function(key,file){this.enabled!==!1&&(this.files[key]=file)},get:function(key){if(this.enabled!==!1)return this.files[key]},remove:function(key){delete this.files[key]},clear:function(){this.files={}}};class LoadingManager{constructor(onLoad,onProgress,onError){const scope=this;let isLoading=!1,itemsLoaded=0,itemsTotal=0,urlModifier;const handlers=[];this.onStart=void 0,this.onLoad=onLoad,this.onProgress=onProgress,this.onError=onError,this.itemStart=function(url){itemsTotal++,isLoading===!1&&scope.onStart!==void 0&&scope.onStart(url,itemsLoaded,itemsTotal),isLoading=!0},this.itemEnd=function(url){itemsLoaded++,scope.onProgress!==void 0&&scope.onProgress(url,itemsLoaded,itemsTotal),itemsLoaded===itemsTotal&&(isLoading=!1,scope.onLoad!==void 0&&scope.onLoad())},this.itemError=function(url){scope.onError!==void 0&&scope.onError(url)},this.resolveURL=function(url){return urlModifier?urlModifier(url):url},this.setURLModifier=function(transform){return urlModifier=transform,this},this.addHandler=function(regex,loader){return handlers.push(regex,loader),this},this.removeHandler=function(regex){const index=handlers.indexOf(regex);return index!==-1&&handlers.splice(index,2),this},this.getHandler=function(file){for(let i=0,l=handlers.length;i<l;i+=2){const regex=handlers[i],loader=handlers[i+1];if(regex.global&&(regex.lastIndex=0),regex.test(file))return loader}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(manager){this.manager=manager!==void 0?manager:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(url,onProgress){const scope=this;return new Promise(function(resolve,reject){scope.load(url,resolve,onProgress,reject)})}parse(){}setCrossOrigin(crossOrigin){return this.crossOrigin=crossOrigin,this}setWithCredentials(value){return this.withCredentials=value,this}setPath(path){return this.path=path,this}setResourcePath(resourcePath){return this.resourcePath=resourcePath,this}setRequestHeader(requestHeader){return this.requestHeader=requestHeader,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";const _loading=new WeakMap;class ImageLoader extends Loader{constructor(manager){super(manager)}load(url,onLoad,onProgress,onError){this.path!==void 0&&(url=this.path+url),url=this.manager.resolveURL(url);const scope=this,cached=Cache.get(`image:${url}`);if(cached!==void 0){if(cached.complete===!0)scope.manager.itemStart(url),setTimeout(function(){onLoad&&onLoad(cached),scope.manager.itemEnd(url)},0);else{let arr=_loading.get(cached);arr===void 0&&(arr=[],_loading.set(cached,arr)),arr.push({onLoad,onError})}return cached}const image=createElementNS("img");function onImageLoad(){removeEventListeners(),onLoad&&onLoad(this);const callbacks=_loading.get(this)||[];for(let i=0;i<callbacks.length;i++){const callback=callbacks[i];callback.onLoad&&callback.onLoad(this)}_loading.delete(this),scope.manager.itemEnd(url)}function onImageError(event){removeEventListeners(),onError&&onError(event),Cache.remove(`image:${url}`);const callbacks=_loading.get(this)||[];for(let i=0;i<callbacks.length;i++){const callback=callbacks[i];callback.onError&&callback.onError(event)}_loading.delete(this),scope.manager.itemError(url),scope.manager.itemEnd(url)}function removeEventListeners(){image.removeEventListener("load",onImageLoad,!1),image.removeEventListener("error",onImageError,!1)}return image.addEventListener("load",onImageLoad,!1),image.addEventListener("error",onImageError,!1),url.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(image.crossOrigin=this.crossOrigin),Cache.add(`image:${url}`,image),scope.manager.itemStart(url),image.src=url,image}}class TextureLoader extends Loader{constructor(manager){super(manager)}load(url,onLoad,onProgress,onError){const texture=new Texture,loader=new ImageLoader(this.manager);return loader.setCrossOrigin(this.crossOrigin),loader.setPath(this.path),loader.load(url,function(image){texture.image=image,texture.needsUpdate=!0,onLoad!==void 0&&onLoad(texture)},onProgress,onError),texture}}class Light extends Object3D{constructor(color,intensity=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(color),this.intensity=intensity}dispose(){}copy(source,recursive){return super.copy(source,recursive),this.color.copy(source.color),this.intensity=source.intensity,this}toJSON(meta){const data=super.toJSON(meta);return data.object.color=this.color.getHex(),data.object.intensity=this.intensity,this.groundColor!==void 0&&(data.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(data.object.distance=this.distance),this.angle!==void 0&&(data.object.angle=this.angle),this.decay!==void 0&&(data.object.decay=this.decay),this.penumbra!==void 0&&(data.object.penumbra=this.penumbra),this.shadow!==void 0&&(data.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(data.object.target=this.target.uuid),data}}class OrthographicCamera extends Camera{constructor(left=-1,right=1,top=1,bottom=-1,near=.1,far=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=left,this.right=right,this.top=top,this.bottom=bottom,this.near=near,this.far=far,this.updateProjectionMatrix()}copy(source,recursive){return super.copy(source,recursive),this.left=source.left,this.right=source.right,this.top=source.top,this.bottom=source.bottom,this.near=source.near,this.far=source.far,this.zoom=source.zoom,this.view=source.view===null?null:Object.assign({},source.view),this}setViewOffset(fullWidth,fullHeight,x,y,width,height){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=fullWidth,this.view.fullHeight=fullHeight,this.view.offsetX=x,this.view.offsetY=y,this.view.width=width,this.view.height=height,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const dx=(this.right-this.left)/(2*this.zoom),dy=(this.top-this.bottom)/(2*this.zoom),cx=(this.right+this.left)/2,cy=(this.top+this.bottom)/2;let left=cx-dx,right=cx+dx,top=cy+dy,bottom=cy-dy;if(this.view!==null&&this.view.enabled){const scaleW=(this.right-this.left)/this.view.fullWidth/this.zoom,scaleH=(this.top-this.bottom)/this.view.fullHeight/this.zoom;left+=scaleW*this.view.offsetX,right=left+scaleW*this.view.width,top-=scaleH*this.view.offsetY,bottom=top-scaleH*this.view.height}this.projectionMatrix.makeOrthographic(left,right,top,bottom,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(meta){const data=super.toJSON(meta);return data.object.zoom=this.zoom,data.object.left=this.left,data.object.right=this.right,data.object.top=this.top,data.object.bottom=this.bottom,data.object.near=this.near,data.object.far=this.far,this.view!==null&&(data.object.view=Object.assign({},this.view)),data}}class AmbientLight extends Light{constructor(color,intensity){super(color,intensity),this.isAmbientLight=!0,this.type="AmbientLight"}}class ArrayCamera extends PerspectiveCamera{constructor(array=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=array}}class Spherical{constructor(radius=1,phi=0,theta=0){this.radius=radius,this.phi=phi,this.theta=theta}set(radius,phi,theta){return this.radius=radius,this.phi=phi,this.theta=theta,this}copy(other){return this.radius=other.radius,this.phi=other.phi,this.theta=other.theta,this}makeSafe(){return this.phi=clamp(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(v){return this.setFromCartesianCoords(v.x,v.y,v.z)}setFromCartesianCoords(x,y,z){return this.radius=Math.sqrt(x*x+y*y+z*z),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(x,z),this.phi=Math.acos(clamp(y/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function getByteLength(width,height,format,type){const typeByteLength=getTextureTypeByteLength(type);switch(format){case AlphaFormat:return width*height;case RedFormat:return width*height/typeByteLength.components*typeByteLength.byteLength;case RedIntegerFormat:return width*height/typeByteLength.components*typeByteLength.byteLength;case RGFormat:return width*height*2/typeByteLength.components*typeByteLength.byteLength;case RGIntegerFormat:return width*height*2/typeByteLength.components*typeByteLength.byteLength;case RGBFormat:return width*height*3/typeByteLength.components*typeByteLength.byteLength;case RGBAFormat:return width*height*4/typeByteLength.components*typeByteLength.byteLength;case RGBAIntegerFormat:return width*height*4/typeByteLength.components*typeByteLength.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((width+3)/4)*Math.floor((height+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((width+3)/4)*Math.floor((height+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(width,16)*Math.max(height,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(width,8)*Math.max(height,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:return Math.floor((width+3)/4)*Math.floor((height+3)/4)*8;case RGBA_ETC2_EAC_Format:return Math.floor((width+3)/4)*Math.floor((height+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((width+3)/4)*Math.floor((height+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((width+4)/5)*Math.floor((height+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((width+4)/5)*Math.floor((height+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((width+5)/6)*Math.floor((height+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((width+5)/6)*Math.floor((height+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((width+7)/8)*Math.floor((height+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((width+7)/8)*Math.floor((height+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((width+7)/8)*Math.floor((height+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((width+9)/10)*Math.floor((height+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((width+9)/10)*Math.floor((height+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((width+9)/10)*Math.floor((height+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((width+9)/10)*Math.floor((height+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((width+11)/12)*Math.floor((height+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((width+11)/12)*Math.floor((height+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(width/4)*Math.ceil(height/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(width/4)*Math.ceil(height/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(width/4)*Math.ceil(height/4)*16}throw new Error(`Unable to determine texture byte length for ${format} format.`)}function getTextureTypeByteLength(type){switch(type){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${type}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function WebGLAnimation(){let context=null,isAnimating=!1,animationLoop=null,requestId=null;function onAnimationFrame(time,frame){animationLoop(time,frame),requestId=context.requestAnimationFrame(onAnimationFrame)}return{start:function(){isAnimating!==!0&&animationLoop!==null&&(requestId=context.requestAnimationFrame(onAnimationFrame),isAnimating=!0)},stop:function(){context.cancelAnimationFrame(requestId),isAnimating=!1},setAnimationLoop:function(callback){animationLoop=callback},setContext:function(value){context=value}}}function WebGLAttributes(gl){const buffers=new WeakMap;function createBuffer(attribute,bufferType){const array=attribute.array,usage=attribute.usage,size=array.byteLength,buffer=gl.createBuffer();gl.bindBuffer(bufferType,buffer),gl.bufferData(bufferType,array,usage),attribute.onUploadCallback();let type;if(array instanceof Float32Array)type=gl.FLOAT;else if(typeof Float16Array<"u"&&array instanceof Float16Array)type=gl.HALF_FLOAT;else if(array instanceof Uint16Array)attribute.isFloat16BufferAttribute?type=gl.HALF_FLOAT:type=gl.UNSIGNED_SHORT;else if(array instanceof Int16Array)type=gl.SHORT;else if(array instanceof Uint32Array)type=gl.UNSIGNED_INT;else if(array instanceof Int32Array)type=gl.INT;else if(array instanceof Int8Array)type=gl.BYTE;else if(array instanceof Uint8Array)type=gl.UNSIGNED_BYTE;else if(array instanceof Uint8ClampedArray)type=gl.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+array);return{buffer,type,bytesPerElement:array.BYTES_PER_ELEMENT,version:attribute.version,size}}function updateBuffer(buffer,attribute,bufferType){const array=attribute.array,updateRanges=attribute.updateRanges;if(gl.bindBuffer(bufferType,buffer),updateRanges.length===0)gl.bufferSubData(bufferType,0,array);else{updateRanges.sort((a,b)=>a.start-b.start);let mergeIndex=0;for(let i=1;i<updateRanges.length;i++){const previousRange=updateRanges[mergeIndex],range=updateRanges[i];range.start<=previousRange.start+previousRange.count+1?previousRange.count=Math.max(previousRange.count,range.start+range.count-previousRange.start):(++mergeIndex,updateRanges[mergeIndex]=range)}updateRanges.length=mergeIndex+1;for(let i=0,l=updateRanges.length;i<l;i++){const range=updateRanges[i];gl.bufferSubData(bufferType,range.start*array.BYTES_PER_ELEMENT,array,range.start,range.count)}attribute.clearUpdateRanges()}attribute.onUploadCallback()}function get(attribute){return attribute.isInterleavedBufferAttribute&&(attribute=attribute.data),buffers.get(attribute)}function remove(attribute){attribute.isInterleavedBufferAttribute&&(attribute=attribute.data);const data=buffers.get(attribute);data&&(gl.deleteBuffer(data.buffer),buffers.delete(attribute))}function update(attribute,bufferType){if(attribute.isInterleavedBufferAttribute&&(attribute=attribute.data),attribute.isGLBufferAttribute){const cached=buffers.get(attribute);(!cached||cached.version<attribute.version)&&buffers.set(attribute,{buffer:attribute.buffer,type:attribute.type,bytesPerElement:attribute.elementSize,version:attribute.version});return}const data=buffers.get(attribute);if(data===void 0)buffers.set(attribute,createBuffer(attribute,bufferType));else if(data.version<attribute.version){if(data.size!==attribute.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");updateBuffer(data.buffer,attribute,bufferType),data.version=attribute.version}}return{get,remove,update}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vertex$d=`#define DISTANCE
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
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
}`,fragment$b=`uniform vec3 diffuse;
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
}`,vertex$a=`#include <common>
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
}`,fragment$a=`uniform vec3 diffuse;
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
}`,vertex$9=`#define LAMBERT
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
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vertex$8=`#define MATCAP
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
}`,fragment$8=`#define MATCAP
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
}`,vertex$7=`#define NORMAL
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
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
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
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vertex$5=`#define STANDARD
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
}`,fragment$5=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vertex$4=`#define TOON
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
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
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
}`,vertex$2=`#include <common>
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
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vertex$1=`uniform float rotation;
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
}`,fragment$1=`uniform vec3 diffuse;
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(renderer,cubemaps,cubeuvmaps,state,objects,alpha,premultipliedAlpha){const clearColor=new Color(0);let clearAlpha=alpha===!0?0:1,planeMesh,boxMesh,currentBackground=null,currentBackgroundVersion=0,currentTonemapping=null;function getBackground(scene){let background=scene.isScene===!0?scene.background:null;return background&&background.isTexture&&(background=(scene.backgroundBlurriness>0?cubeuvmaps:cubemaps).get(background)),background}function render(scene){let forceClear=!1;const background=getBackground(scene);background===null?setClear(clearColor,clearAlpha):background&&background.isColor&&(setClear(background,1),forceClear=!0);const environmentBlendMode=renderer.xr.getEnvironmentBlendMode();environmentBlendMode==="additive"?state.buffers.color.setClear(0,0,0,1,premultipliedAlpha):environmentBlendMode==="alpha-blend"&&state.buffers.color.setClear(0,0,0,0,premultipliedAlpha),(renderer.autoClear||forceClear)&&(state.buffers.depth.setTest(!0),state.buffers.depth.setMask(!0),state.buffers.color.setMask(!0),renderer.clear(renderer.autoClearColor,renderer.autoClearDepth,renderer.autoClearStencil))}function addToRenderList(renderList,scene){const background=getBackground(scene);background&&(background.isCubeTexture||background.mapping===CubeUVReflectionMapping)?(boxMesh===void 0&&(boxMesh=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),boxMesh.geometry.deleteAttribute("normal"),boxMesh.geometry.deleteAttribute("uv"),boxMesh.onBeforeRender=function(renderer2,scene2,camera){this.matrixWorld.copyPosition(camera.matrixWorld)},Object.defineProperty(boxMesh.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),objects.update(boxMesh)),_e1$1.copy(scene.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,background.isCubeTexture&&background.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),boxMesh.material.uniforms.envMap.value=background,boxMesh.material.uniforms.flipEnvMap.value=background.isCubeTexture&&background.isRenderTargetTexture===!1?-1:1,boxMesh.material.uniforms.backgroundBlurriness.value=scene.backgroundBlurriness,boxMesh.material.uniforms.backgroundIntensity.value=scene.backgroundIntensity,boxMesh.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),boxMesh.material.toneMapped=ColorManagement.getTransfer(background.colorSpace)!==SRGBTransfer,(currentBackground!==background||currentBackgroundVersion!==background.version||currentTonemapping!==renderer.toneMapping)&&(boxMesh.material.needsUpdate=!0,currentBackground=background,currentBackgroundVersion=background.version,currentTonemapping=renderer.toneMapping),boxMesh.layers.enableAll(),renderList.unshift(boxMesh,boxMesh.geometry,boxMesh.material,0,0,null)):background&&background.isTexture&&(planeMesh===void 0&&(planeMesh=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),planeMesh.geometry.deleteAttribute("normal"),Object.defineProperty(planeMesh.material,"map",{get:function(){return this.uniforms.t2D.value}}),objects.update(planeMesh)),planeMesh.material.uniforms.t2D.value=background,planeMesh.material.uniforms.backgroundIntensity.value=scene.backgroundIntensity,planeMesh.material.toneMapped=ColorManagement.getTransfer(background.colorSpace)!==SRGBTransfer,background.matrixAutoUpdate===!0&&background.updateMatrix(),planeMesh.material.uniforms.uvTransform.value.copy(background.matrix),(currentBackground!==background||currentBackgroundVersion!==background.version||currentTonemapping!==renderer.toneMapping)&&(planeMesh.material.needsUpdate=!0,currentBackground=background,currentBackgroundVersion=background.version,currentTonemapping=renderer.toneMapping),planeMesh.layers.enableAll(),renderList.unshift(planeMesh,planeMesh.geometry,planeMesh.material,0,0,null))}function setClear(color,alpha2){color.getRGB(_rgb,getUnlitUniformColorSpace(renderer)),state.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,alpha2,premultipliedAlpha)}function dispose(){boxMesh!==void 0&&(boxMesh.geometry.dispose(),boxMesh.material.dispose(),boxMesh=void 0),planeMesh!==void 0&&(planeMesh.geometry.dispose(),planeMesh.material.dispose(),planeMesh=void 0)}return{getClearColor:function(){return clearColor},setClearColor:function(color,alpha2=1){clearColor.set(color),clearAlpha=alpha2,setClear(clearColor,clearAlpha)},getClearAlpha:function(){return clearAlpha},setClearAlpha:function(alpha2){clearAlpha=alpha2,setClear(clearColor,clearAlpha)},render,addToRenderList,dispose}}function WebGLBindingStates(gl,attributes){const maxVertexAttributes=gl.getParameter(gl.MAX_VERTEX_ATTRIBS),bindingStates={},defaultState=createBindingState(null);let currentState=defaultState,forceUpdate=!1;function setup(object,material,program,geometry,index){let updateBuffers=!1;const state=getBindingState(geometry,program,material);currentState!==state&&(currentState=state,bindVertexArrayObject(currentState.object)),updateBuffers=needsUpdate(object,geometry,program,index),updateBuffers&&saveCache(object,geometry,program,index),index!==null&&attributes.update(index,gl.ELEMENT_ARRAY_BUFFER),(updateBuffers||forceUpdate)&&(forceUpdate=!1,setupVertexAttributes(object,material,program,geometry),index!==null&&gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,attributes.get(index).buffer))}function createVertexArrayObject(){return gl.createVertexArray()}function bindVertexArrayObject(vao){return gl.bindVertexArray(vao)}function deleteVertexArrayObject(vao){return gl.deleteVertexArray(vao)}function getBindingState(geometry,program,material){const wireframe=material.wireframe===!0;let programMap=bindingStates[geometry.id];programMap===void 0&&(programMap={},bindingStates[geometry.id]=programMap);let stateMap=programMap[program.id];stateMap===void 0&&(stateMap={},programMap[program.id]=stateMap);let state=stateMap[wireframe];return state===void 0&&(state=createBindingState(createVertexArrayObject()),stateMap[wireframe]=state),state}function createBindingState(vao){const newAttributes=[],enabledAttributes=[],attributeDivisors=[];for(let i=0;i<maxVertexAttributes;i++)newAttributes[i]=0,enabledAttributes[i]=0,attributeDivisors[i]=0;return{geometry:null,program:null,wireframe:!1,newAttributes,enabledAttributes,attributeDivisors,object:vao,attributes:{},index:null}}function needsUpdate(object,geometry,program,index){const cachedAttributes=currentState.attributes,geometryAttributes=geometry.attributes;let attributesNum=0;const programAttributes=program.getAttributes();for(const name in programAttributes)if(programAttributes[name].location>=0){const cachedAttribute=cachedAttributes[name];let geometryAttribute=geometryAttributes[name];if(geometryAttribute===void 0&&(name==="instanceMatrix"&&object.instanceMatrix&&(geometryAttribute=object.instanceMatrix),name==="instanceColor"&&object.instanceColor&&(geometryAttribute=object.instanceColor)),cachedAttribute===void 0||cachedAttribute.attribute!==geometryAttribute||geometryAttribute&&cachedAttribute.data!==geometryAttribute.data)return!0;attributesNum++}return currentState.attributesNum!==attributesNum||currentState.index!==index}function saveCache(object,geometry,program,index){const cache={},attributes2=geometry.attributes;let attributesNum=0;const programAttributes=program.getAttributes();for(const name in programAttributes)if(programAttributes[name].location>=0){let attribute=attributes2[name];attribute===void 0&&(name==="instanceMatrix"&&object.instanceMatrix&&(attribute=object.instanceMatrix),name==="instanceColor"&&object.instanceColor&&(attribute=object.instanceColor));const data={};data.attribute=attribute,attribute&&attribute.data&&(data.data=attribute.data),cache[name]=data,attributesNum++}currentState.attributes=cache,currentState.attributesNum=attributesNum,currentState.index=index}function initAttributes(){const newAttributes=currentState.newAttributes;for(let i=0,il=newAttributes.length;i<il;i++)newAttributes[i]=0}function enableAttribute(attribute){enableAttributeAndDivisor(attribute,0)}function enableAttributeAndDivisor(attribute,meshPerAttribute){const newAttributes=currentState.newAttributes,enabledAttributes=currentState.enabledAttributes,attributeDivisors=currentState.attributeDivisors;newAttributes[attribute]=1,enabledAttributes[attribute]===0&&(gl.enableVertexAttribArray(attribute),enabledAttributes[attribute]=1),attributeDivisors[attribute]!==meshPerAttribute&&(gl.vertexAttribDivisor(attribute,meshPerAttribute),attributeDivisors[attribute]=meshPerAttribute)}function disableUnusedAttributes(){const newAttributes=currentState.newAttributes,enabledAttributes=currentState.enabledAttributes;for(let i=0,il=enabledAttributes.length;i<il;i++)enabledAttributes[i]!==newAttributes[i]&&(gl.disableVertexAttribArray(i),enabledAttributes[i]=0)}function vertexAttribPointer(index,size,type,normalized,stride,offset,integer){integer===!0?gl.vertexAttribIPointer(index,size,type,stride,offset):gl.vertexAttribPointer(index,size,type,normalized,stride,offset)}function setupVertexAttributes(object,material,program,geometry){initAttributes();const geometryAttributes=geometry.attributes,programAttributes=program.getAttributes(),materialDefaultAttributeValues=material.defaultAttributeValues;for(const name in programAttributes){const programAttribute=programAttributes[name];if(programAttribute.location>=0){let geometryAttribute=geometryAttributes[name];if(geometryAttribute===void 0&&(name==="instanceMatrix"&&object.instanceMatrix&&(geometryAttribute=object.instanceMatrix),name==="instanceColor"&&object.instanceColor&&(geometryAttribute=object.instanceColor)),geometryAttribute!==void 0){const normalized=geometryAttribute.normalized,size=geometryAttribute.itemSize,attribute=attributes.get(geometryAttribute);if(attribute===void 0)continue;const buffer=attribute.buffer,type=attribute.type,bytesPerElement=attribute.bytesPerElement,integer=type===gl.INT||type===gl.UNSIGNED_INT||geometryAttribute.gpuType===IntType;if(geometryAttribute.isInterleavedBufferAttribute){const data=geometryAttribute.data,stride=data.stride,offset=geometryAttribute.offset;if(data.isInstancedInterleavedBuffer){for(let i=0;i<programAttribute.locationSize;i++)enableAttributeAndDivisor(programAttribute.location+i,data.meshPerAttribute);object.isInstancedMesh!==!0&&geometry._maxInstanceCount===void 0&&(geometry._maxInstanceCount=data.meshPerAttribute*data.count)}else for(let i=0;i<programAttribute.locationSize;i++)enableAttribute(programAttribute.location+i);gl.bindBuffer(gl.ARRAY_BUFFER,buffer);for(let i=0;i<programAttribute.locationSize;i++)vertexAttribPointer(programAttribute.location+i,size/programAttribute.locationSize,type,normalized,stride*bytesPerElement,(offset+size/programAttribute.locationSize*i)*bytesPerElement,integer)}else{if(geometryAttribute.isInstancedBufferAttribute){for(let i=0;i<programAttribute.locationSize;i++)enableAttributeAndDivisor(programAttribute.location+i,geometryAttribute.meshPerAttribute);object.isInstancedMesh!==!0&&geometry._maxInstanceCount===void 0&&(geometry._maxInstanceCount=geometryAttribute.meshPerAttribute*geometryAttribute.count)}else for(let i=0;i<programAttribute.locationSize;i++)enableAttribute(programAttribute.location+i);gl.bindBuffer(gl.ARRAY_BUFFER,buffer);for(let i=0;i<programAttribute.locationSize;i++)vertexAttribPointer(programAttribute.location+i,size/programAttribute.locationSize,type,normalized,size*bytesPerElement,size/programAttribute.locationSize*i*bytesPerElement,integer)}}else if(materialDefaultAttributeValues!==void 0){const value=materialDefaultAttributeValues[name];if(value!==void 0)switch(value.length){case 2:gl.vertexAttrib2fv(programAttribute.location,value);break;case 3:gl.vertexAttrib3fv(programAttribute.location,value);break;case 4:gl.vertexAttrib4fv(programAttribute.location,value);break;default:gl.vertexAttrib1fv(programAttribute.location,value)}}}}disableUnusedAttributes()}function dispose(){reset();for(const geometryId in bindingStates){const programMap=bindingStates[geometryId];for(const programId in programMap){const stateMap=programMap[programId];for(const wireframe in stateMap)deleteVertexArrayObject(stateMap[wireframe].object),delete stateMap[wireframe];delete programMap[programId]}delete bindingStates[geometryId]}}function releaseStatesOfGeometry(geometry){if(bindingStates[geometry.id]===void 0)return;const programMap=bindingStates[geometry.id];for(const programId in programMap){const stateMap=programMap[programId];for(const wireframe in stateMap)deleteVertexArrayObject(stateMap[wireframe].object),delete stateMap[wireframe];delete programMap[programId]}delete bindingStates[geometry.id]}function releaseStatesOfProgram(program){for(const geometryId in bindingStates){const programMap=bindingStates[geometryId];if(programMap[program.id]===void 0)continue;const stateMap=programMap[program.id];for(const wireframe in stateMap)deleteVertexArrayObject(stateMap[wireframe].object),delete stateMap[wireframe];delete programMap[program.id]}}function reset(){resetDefaultState(),forceUpdate=!0,currentState!==defaultState&&(currentState=defaultState,bindVertexArrayObject(currentState.object))}function resetDefaultState(){defaultState.geometry=null,defaultState.program=null,defaultState.wireframe=!1}return{setup,reset,resetDefaultState,dispose,releaseStatesOfGeometry,releaseStatesOfProgram,initAttributes,enableAttribute,disableUnusedAttributes}}function WebGLBufferRenderer(gl,extensions,info){let mode;function setMode(value){mode=value}function render(start,count){gl.drawArrays(mode,start,count),info.update(count,mode,1)}function renderInstances(start,count,primcount){primcount!==0&&(gl.drawArraysInstanced(mode,start,count,primcount),info.update(count,mode,primcount))}function renderMultiDraw(starts,counts,drawCount){if(drawCount===0)return;extensions.get("WEBGL_multi_draw").multiDrawArraysWEBGL(mode,starts,0,counts,0,drawCount);let elementCount=0;for(let i=0;i<drawCount;i++)elementCount+=counts[i];info.update(elementCount,mode,1)}function renderMultiDrawInstances(starts,counts,drawCount,primcount){if(drawCount===0)return;const extension=extensions.get("WEBGL_multi_draw");if(extension===null)for(let i=0;i<starts.length;i++)renderInstances(starts[i],counts[i],primcount[i]);else{extension.multiDrawArraysInstancedWEBGL(mode,starts,0,counts,0,primcount,0,drawCount);let elementCount=0;for(let i=0;i<drawCount;i++)elementCount+=counts[i]*primcount[i];info.update(elementCount,mode,1)}}this.setMode=setMode,this.render=render,this.renderInstances=renderInstances,this.renderMultiDraw=renderMultiDraw,this.renderMultiDrawInstances=renderMultiDrawInstances}function WebGLCapabilities(gl,extensions,parameters,utils){let maxAnisotropy;function getMaxAnisotropy(){if(maxAnisotropy!==void 0)return maxAnisotropy;if(extensions.has("EXT_texture_filter_anisotropic")===!0){const extension=extensions.get("EXT_texture_filter_anisotropic");maxAnisotropy=gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else maxAnisotropy=0;return maxAnisotropy}function textureFormatReadable(textureFormat){return!(textureFormat!==RGBAFormat&&utils.convert(textureFormat)!==gl.getParameter(gl.IMPLEMENTATION_COLOR_READ_FORMAT))}function textureTypeReadable(textureType){const halfFloatSupportedByExt=textureType===HalfFloatType&&(extensions.has("EXT_color_buffer_half_float")||extensions.has("EXT_color_buffer_float"));return!(textureType!==UnsignedByteType&&utils.convert(textureType)!==gl.getParameter(gl.IMPLEMENTATION_COLOR_READ_TYPE)&&textureType!==FloatType&&!halfFloatSupportedByExt)}function getMaxPrecision(precision2){if(precision2==="highp"){if(gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_FLOAT).precision>0&&gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).precision>0)return"highp";precision2="mediump"}return precision2==="mediump"&&gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_FLOAT).precision>0&&gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let precision=parameters.precision!==void 0?parameters.precision:"highp";const maxPrecision=getMaxPrecision(precision);maxPrecision!==precision&&(console.warn("THREE.WebGLRenderer:",precision,"not supported, using",maxPrecision,"instead."),precision=maxPrecision);const logarithmicDepthBuffer=parameters.logarithmicDepthBuffer===!0,reverseDepthBuffer=parameters.reverseDepthBuffer===!0&&extensions.has("EXT_clip_control"),maxTextures=gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures=gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize=gl.getParameter(gl.MAX_TEXTURE_SIZE),maxCubemapSize=gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes=gl.getParameter(gl.MAX_VERTEX_ATTRIBS),maxVertexUniforms=gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings=gl.getParameter(gl.MAX_VARYING_VECTORS),maxFragmentUniforms=gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures=maxVertexTextures>0,maxSamples=gl.getParameter(gl.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy,getMaxPrecision,textureFormatReadable,textureTypeReadable,precision,logarithmicDepthBuffer,reverseDepthBuffer,maxTextures,maxVertexTextures,maxTextureSize,maxCubemapSize,maxAttributes,maxVertexUniforms,maxVaryings,maxFragmentUniforms,vertexTextures,maxSamples}}function WebGLClipping(properties){const scope=this;let globalState=null,numGlobalPlanes=0,localClippingEnabled=!1,renderingShadows=!1;const plane=new Plane,viewNormalMatrix=new Matrix3,uniform={value:null,needsUpdate:!1};this.uniform=uniform,this.numPlanes=0,this.numIntersection=0,this.init=function(planes,enableLocalClipping){const enabled=planes.length!==0||enableLocalClipping||numGlobalPlanes!==0||localClippingEnabled;return localClippingEnabled=enableLocalClipping,numGlobalPlanes=planes.length,enabled},this.beginShadows=function(){renderingShadows=!0,projectPlanes(null)},this.endShadows=function(){renderingShadows=!1},this.setGlobalState=function(planes,camera){globalState=projectPlanes(planes,camera,0)},this.setState=function(material,camera,useCache){const planes=material.clippingPlanes,clipIntersection=material.clipIntersection,clipShadows=material.clipShadows,materialProperties=properties.get(material);if(!localClippingEnabled||planes===null||planes.length===0||renderingShadows&&!clipShadows)renderingShadows?projectPlanes(null):resetGlobalState();else{const nGlobal=renderingShadows?0:numGlobalPlanes,lGlobal=nGlobal*4;let dstArray=materialProperties.clippingState||null;uniform.value=dstArray,dstArray=projectPlanes(planes,camera,lGlobal,useCache);for(let i=0;i!==lGlobal;++i)dstArray[i]=globalState[i];materialProperties.clippingState=dstArray,this.numIntersection=clipIntersection?this.numPlanes:0,this.numPlanes+=nGlobal}};function resetGlobalState(){uniform.value!==globalState&&(uniform.value=globalState,uniform.needsUpdate=numGlobalPlanes>0),scope.numPlanes=numGlobalPlanes,scope.numIntersection=0}function projectPlanes(planes,camera,dstOffset,skipTransform){const nPlanes=planes!==null?planes.length:0;let dstArray=null;if(nPlanes!==0){if(dstArray=uniform.value,skipTransform!==!0||dstArray===null){const flatSize=dstOffset+nPlanes*4,viewMatrix=camera.matrixWorldInverse;viewNormalMatrix.getNormalMatrix(viewMatrix),(dstArray===null||dstArray.length<flatSize)&&(dstArray=new Float32Array(flatSize));for(let i=0,i4=dstOffset;i!==nPlanes;++i,i4+=4)plane.copy(planes[i]).applyMatrix4(viewMatrix,viewNormalMatrix),plane.normal.toArray(dstArray,i4),dstArray[i4+3]=plane.constant}uniform.value=dstArray,uniform.needsUpdate=!0}return scope.numPlanes=nPlanes,scope.numIntersection=0,dstArray}}function WebGLCubeMaps(renderer){let cubemaps=new WeakMap;function mapTextureMapping(texture,mapping){return mapping===EquirectangularReflectionMapping?texture.mapping=CubeReflectionMapping:mapping===EquirectangularRefractionMapping&&(texture.mapping=CubeRefractionMapping),texture}function get(texture){if(texture&&texture.isTexture){const mapping=texture.mapping;if(mapping===EquirectangularReflectionMapping||mapping===EquirectangularRefractionMapping)if(cubemaps.has(texture)){const cubemap=cubemaps.get(texture).texture;return mapTextureMapping(cubemap,texture.mapping)}else{const image=texture.image;if(image&&image.height>0){const renderTarget=new WebGLCubeRenderTarget(image.height);return renderTarget.fromEquirectangularTexture(renderer,texture),cubemaps.set(texture,renderTarget),texture.addEventListener("dispose",onTextureDispose),mapTextureMapping(renderTarget.texture,texture.mapping)}else return null}}return texture}function onTextureDispose(event){const texture=event.target;texture.removeEventListener("dispose",onTextureDispose);const cubemap=cubemaps.get(texture);cubemap!==void 0&&(cubemaps.delete(texture),cubemap.dispose())}function dispose(){cubemaps=new WeakMap}return{get,dispose}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(-PHI,INV_PHI,0),new Vector3(PHI,INV_PHI,0),new Vector3(-INV_PHI,0,PHI),new Vector3(INV_PHI,0,PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(0,PHI,INV_PHI),new Vector3(-1,1,-1),new Vector3(1,1,-1),new Vector3(-1,1,1),new Vector3(1,1,1)],_origin=new Vector3;class PMREMGenerator{constructor(renderer){this._renderer=renderer,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(scene,sigma=0,near=.1,far=100,options={}){const{size=256,position=_origin}=options;_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(size);const cubeUVRenderTarget=this._allocateTargets();return cubeUVRenderTarget.depthBuffer=!0,this._sceneToCubeUV(scene,near,far,cubeUVRenderTarget,position),sigma>0&&this._blur(cubeUVRenderTarget,0,0,sigma),this._applyPMREM(cubeUVRenderTarget),this._cleanup(cubeUVRenderTarget),cubeUVRenderTarget}fromEquirectangular(equirectangular,renderTarget=null){return this._fromTexture(equirectangular,renderTarget)}fromCubemap(cubemap,renderTarget=null){return this._fromTexture(cubemap,renderTarget)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(cubeSize){this._lodMax=Math.floor(Math.log2(cubeSize)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let i=0;i<this._lodPlanes.length;i++)this._lodPlanes[i].dispose()}_cleanup(outputTarget){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,outputTarget.scissorTest=!1,_setViewport(outputTarget,0,0,outputTarget.width,outputTarget.height)}_fromTexture(texture,renderTarget){texture.mapping===CubeReflectionMapping||texture.mapping===CubeRefractionMapping?this._setSize(texture.image.length===0?16:texture.image[0].width||texture.image[0].image.width):this._setSize(texture.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const cubeUVRenderTarget=renderTarget||this._allocateTargets();return this._textureToCubeUV(texture,cubeUVRenderTarget),this._applyPMREM(cubeUVRenderTarget),this._cleanup(cubeUVRenderTarget),cubeUVRenderTarget}_allocateTargets(){const width=3*Math.max(this._cubeSize,112),height=4*this._cubeSize,params={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},cubeUVRenderTarget=_createRenderTarget(width,height,params);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==width||this._pingPongRenderTarget.height!==height){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(width,height,params);const{_lodMax}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(_lodMax)),this._blurMaterial=_getBlurShader(_lodMax,width,height)}return cubeUVRenderTarget}_compileMaterial(material){const tmpMesh=new Mesh(this._lodPlanes[0],material);this._renderer.compile(tmpMesh,_flatCamera)}_sceneToCubeUV(scene,near,far,cubeUVRenderTarget,position){const cubeCamera=new PerspectiveCamera(90,1,near,far),upSign=[1,-1,1,1,1,1],forwardSign=[1,1,1,-1,-1,-1],renderer=this._renderer,originalAutoClear=renderer.autoClear,toneMapping=renderer.toneMapping;renderer.getClearColor(_clearColor),renderer.toneMapping=NoToneMapping,renderer.autoClear=!1;const backgroundMaterial=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),backgroundBox=new Mesh(new BoxGeometry,backgroundMaterial);let useSolidColor=!1;const background=scene.background;background?background.isColor&&(backgroundMaterial.color.copy(background),scene.background=null,useSolidColor=!0):(backgroundMaterial.color.copy(_clearColor),useSolidColor=!0);for(let i=0;i<6;i++){const col=i%3;col===0?(cubeCamera.up.set(0,upSign[i],0),cubeCamera.position.set(position.x,position.y,position.z),cubeCamera.lookAt(position.x+forwardSign[i],position.y,position.z)):col===1?(cubeCamera.up.set(0,0,upSign[i]),cubeCamera.position.set(position.x,position.y,position.z),cubeCamera.lookAt(position.x,position.y+forwardSign[i],position.z)):(cubeCamera.up.set(0,upSign[i],0),cubeCamera.position.set(position.x,position.y,position.z),cubeCamera.lookAt(position.x,position.y,position.z+forwardSign[i]));const size=this._cubeSize;_setViewport(cubeUVRenderTarget,col*size,i>2?size:0,size,size),renderer.setRenderTarget(cubeUVRenderTarget),useSolidColor&&renderer.render(backgroundBox,cubeCamera),renderer.render(scene,cubeCamera)}backgroundBox.geometry.dispose(),backgroundBox.material.dispose(),renderer.toneMapping=toneMapping,renderer.autoClear=originalAutoClear,scene.background=background}_textureToCubeUV(texture,cubeUVRenderTarget){const renderer=this._renderer,isCubeTexture=texture.mapping===CubeReflectionMapping||texture.mapping===CubeRefractionMapping;isCubeTexture?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=texture.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const material=isCubeTexture?this._cubemapMaterial:this._equirectMaterial,mesh=new Mesh(this._lodPlanes[0],material),uniforms=material.uniforms;uniforms.envMap.value=texture;const size=this._cubeSize;_setViewport(cubeUVRenderTarget,0,0,3*size,2*size),renderer.setRenderTarget(cubeUVRenderTarget),renderer.render(mesh,_flatCamera)}_applyPMREM(cubeUVRenderTarget){const renderer=this._renderer,autoClear=renderer.autoClear;renderer.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const sigma=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),poleAxis=_axisDirections[(n-i-1)%_axisDirections.length];this._blur(cubeUVRenderTarget,i-1,i,sigma,poleAxis)}renderer.autoClear=autoClear}_blur(cubeUVRenderTarget,lodIn,lodOut,sigma,poleAxis){const pingPongRenderTarget=this._pingPongRenderTarget;this._halfBlur(cubeUVRenderTarget,pingPongRenderTarget,lodIn,lodOut,sigma,"latitudinal",poleAxis),this._halfBlur(pingPongRenderTarget,cubeUVRenderTarget,lodOut,lodOut,sigma,"longitudinal",poleAxis)}_halfBlur(targetIn,targetOut,lodIn,lodOut,sigmaRadians,direction,poleAxis){const renderer=this._renderer,blurMaterial=this._blurMaterial;direction!=="latitudinal"&&direction!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const STANDARD_DEVIATIONS=3,blurMesh=new Mesh(this._lodPlanes[lodOut],blurMaterial),blurUniforms=blurMaterial.uniforms,pixels=this._sizeLods[lodIn]-1,radiansPerPixel=isFinite(sigmaRadians)?Math.PI/(2*pixels):2*Math.PI/(2*MAX_SAMPLES-1),sigmaPixels=sigmaRadians/radiansPerPixel,samples=isFinite(sigmaRadians)?1+Math.floor(STANDARD_DEVIATIONS*sigmaPixels):MAX_SAMPLES;samples>MAX_SAMPLES&&console.warn(`sigmaRadians, ${sigmaRadians}, is too large and will clip, as it requested ${samples} samples when the maximum is set to ${MAX_SAMPLES}`);const weights=[];let sum=0;for(let i=0;i<MAX_SAMPLES;++i){const x2=i/sigmaPixels,weight=Math.exp(-x2*x2/2);weights.push(weight),i===0?sum+=weight:i<samples&&(sum+=2*weight)}for(let i=0;i<weights.length;i++)weights[i]=weights[i]/sum;blurUniforms.envMap.value=targetIn.texture,blurUniforms.samples.value=samples,blurUniforms.weights.value=weights,blurUniforms.latitudinal.value=direction==="latitudinal",poleAxis&&(blurUniforms.poleAxis.value=poleAxis);const{_lodMax}=this;blurUniforms.dTheta.value=radiansPerPixel,blurUniforms.mipInt.value=_lodMax-lodIn;const outputSize=this._sizeLods[lodOut],x=3*outputSize*(lodOut>_lodMax-LOD_MIN?lodOut-_lodMax+LOD_MIN:0),y=4*(this._cubeSize-outputSize);_setViewport(targetOut,x,y,3*outputSize,2*outputSize),renderer.setRenderTarget(targetOut),renderer.render(blurMesh,_flatCamera)}}function _createPlanes(lodMax){const lodPlanes=[],sizeLods=[],sigmas=[];let lod=lodMax;const totalLods=lodMax-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let i=0;i<totalLods;i++){const sizeLod=Math.pow(2,lod);sizeLods.push(sizeLod);let sigma=1/sizeLod;i>lodMax-LOD_MIN?sigma=EXTRA_LOD_SIGMA[i-lodMax+LOD_MIN-1]:i===0&&(sigma=0),sigmas.push(sigma);const texelSize=1/(sizeLod-2),min=-texelSize,max=1+texelSize,uv1=[min,min,max,min,max,max,min,min,max,max,min,max],cubeFaces=6,vertices=6,positionSize=3,uvSize=2,faceIndexSize=1,position=new Float32Array(positionSize*vertices*cubeFaces),uv=new Float32Array(uvSize*vertices*cubeFaces),faceIndex=new Float32Array(faceIndexSize*vertices*cubeFaces);for(let face=0;face<cubeFaces;face++){const x=face%3*2/3-1,y=face>2?0:-1,coordinates=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];position.set(coordinates,positionSize*vertices*face),uv.set(uv1,uvSize*vertices*face);const fill=[face,face,face,face,face,face];faceIndex.set(fill,faceIndexSize*vertices*face)}const planes=new BufferGeometry;planes.setAttribute("position",new BufferAttribute(position,positionSize)),planes.setAttribute("uv",new BufferAttribute(uv,uvSize)),planes.setAttribute("faceIndex",new BufferAttribute(faceIndex,faceIndexSize)),lodPlanes.push(planes),lod>LOD_MIN&&lod--}return{lodPlanes,sizeLods,sigmas}}function _createRenderTarget(width,height,params){const cubeUVRenderTarget=new WebGLRenderTarget(width,height,params);return cubeUVRenderTarget.texture.mapping=CubeUVReflectionMapping,cubeUVRenderTarget.texture.name="PMREM.cubeUv",cubeUVRenderTarget.scissorTest=!0,cubeUVRenderTarget}function _setViewport(target,x,y,width,height){target.viewport.set(x,y,width,height),target.scissor.set(x,y,width,height)}function _getBlurShader(lodMax,width,height){const weights=new Float32Array(MAX_SAMPLES),poleAxis=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/width,CUBEUV_TEXEL_HEIGHT:1/height,CUBEUV_MAX_MIP:`${lodMax}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:weights},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:poleAxis}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(renderer){let cubeUVmaps=new WeakMap,pmremGenerator=null;function get(texture){if(texture&&texture.isTexture){const mapping=texture.mapping,isEquirectMap=mapping===EquirectangularReflectionMapping||mapping===EquirectangularRefractionMapping,isCubeMap=mapping===CubeReflectionMapping||mapping===CubeRefractionMapping;if(isEquirectMap||isCubeMap){let renderTarget=cubeUVmaps.get(texture);const currentPMREMVersion=renderTarget!==void 0?renderTarget.texture.pmremVersion:0;if(texture.isRenderTargetTexture&&texture.pmremVersion!==currentPMREMVersion)return pmremGenerator===null&&(pmremGenerator=new PMREMGenerator(renderer)),renderTarget=isEquirectMap?pmremGenerator.fromEquirectangular(texture,renderTarget):pmremGenerator.fromCubemap(texture,renderTarget),renderTarget.texture.pmremVersion=texture.pmremVersion,cubeUVmaps.set(texture,renderTarget),renderTarget.texture;if(renderTarget!==void 0)return renderTarget.texture;{const image=texture.image;return isEquirectMap&&image&&image.height>0||isCubeMap&&image&&isCubeTextureComplete(image)?(pmremGenerator===null&&(pmremGenerator=new PMREMGenerator(renderer)),renderTarget=isEquirectMap?pmremGenerator.fromEquirectangular(texture):pmremGenerator.fromCubemap(texture),renderTarget.texture.pmremVersion=texture.pmremVersion,cubeUVmaps.set(texture,renderTarget),texture.addEventListener("dispose",onTextureDispose),renderTarget.texture):null}}}return texture}function isCubeTextureComplete(image){let count=0;const length=6;for(let i=0;i<length;i++)image[i]!==void 0&&count++;return count===length}function onTextureDispose(event){const texture=event.target;texture.removeEventListener("dispose",onTextureDispose);const cubemapUV=cubeUVmaps.get(texture);cubemapUV!==void 0&&(cubeUVmaps.delete(texture),cubemapUV.dispose())}function dispose(){cubeUVmaps=new WeakMap,pmremGenerator!==null&&(pmremGenerator.dispose(),pmremGenerator=null)}return{get,dispose}}function WebGLExtensions(gl){const extensions={};function getExtension(name){if(extensions[name]!==void 0)return extensions[name];let extension;switch(name){case"WEBGL_depth_texture":extension=gl.getExtension("WEBGL_depth_texture")||gl.getExtension("MOZ_WEBGL_depth_texture")||gl.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":extension=gl.getExtension("EXT_texture_filter_anisotropic")||gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":extension=gl.getExtension("WEBGL_compressed_texture_s3tc")||gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":extension=gl.getExtension("WEBGL_compressed_texture_pvrtc")||gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:extension=gl.getExtension(name)}return extensions[name]=extension,extension}return{has:function(name){return getExtension(name)!==null},init:function(){getExtension("EXT_color_buffer_float"),getExtension("WEBGL_clip_cull_distance"),getExtension("OES_texture_float_linear"),getExtension("EXT_color_buffer_half_float"),getExtension("WEBGL_multisampled_render_to_texture"),getExtension("WEBGL_render_shared_exponent")},get:function(name){const extension=getExtension(name);return extension===null&&warnOnce("THREE.WebGLRenderer: "+name+" extension not supported."),extension}}}function WebGLGeometries(gl,attributes,info,bindingStates){const geometries={},wireframeAttributes=new WeakMap;function onGeometryDispose(event){const geometry=event.target;geometry.index!==null&&attributes.remove(geometry.index);for(const name in geometry.attributes)attributes.remove(geometry.attributes[name]);geometry.removeEventListener("dispose",onGeometryDispose),delete geometries[geometry.id];const attribute=wireframeAttributes.get(geometry);attribute&&(attributes.remove(attribute),wireframeAttributes.delete(geometry)),bindingStates.releaseStatesOfGeometry(geometry),geometry.isInstancedBufferGeometry===!0&&delete geometry._maxInstanceCount,info.memory.geometries--}function get(object,geometry){return geometries[geometry.id]===!0||(geometry.addEventListener("dispose",onGeometryDispose),geometries[geometry.id]=!0,info.memory.geometries++),geometry}function update(geometry){const geometryAttributes=geometry.attributes;for(const name in geometryAttributes)attributes.update(geometryAttributes[name],gl.ARRAY_BUFFER)}function updateWireframeAttribute(geometry){const indices=[],geometryIndex=geometry.index,geometryPosition=geometry.attributes.position;let version=0;if(geometryIndex!==null){const array=geometryIndex.array;version=geometryIndex.version;for(let i=0,l=array.length;i<l;i+=3){const a=array[i+0],b=array[i+1],c=array[i+2];indices.push(a,b,b,c,c,a)}}else if(geometryPosition!==void 0){const array=geometryPosition.array;version=geometryPosition.version;for(let i=0,l=array.length/3-1;i<l;i+=3){const a=i+0,b=i+1,c=i+2;indices.push(a,b,b,c,c,a)}}else return;const attribute=new(arrayNeedsUint32(indices)?Uint32BufferAttribute:Uint16BufferAttribute)(indices,1);attribute.version=version;const previousAttribute=wireframeAttributes.get(geometry);previousAttribute&&attributes.remove(previousAttribute),wireframeAttributes.set(geometry,attribute)}function getWireframeAttribute(geometry){const currentAttribute=wireframeAttributes.get(geometry);if(currentAttribute){const geometryIndex=geometry.index;geometryIndex!==null&&currentAttribute.version<geometryIndex.version&&updateWireframeAttribute(geometry)}else updateWireframeAttribute(geometry);return wireframeAttributes.get(geometry)}return{get,update,getWireframeAttribute}}function WebGLIndexedBufferRenderer(gl,extensions,info){let mode;function setMode(value){mode=value}let type,bytesPerElement;function setIndex(value){type=value.type,bytesPerElement=value.bytesPerElement}function render(start,count){gl.drawElements(mode,count,type,start*bytesPerElement),info.update(count,mode,1)}function renderInstances(start,count,primcount){primcount!==0&&(gl.drawElementsInstanced(mode,count,type,start*bytesPerElement,primcount),info.update(count,mode,primcount))}function renderMultiDraw(starts,counts,drawCount){if(drawCount===0)return;extensions.get("WEBGL_multi_draw").multiDrawElementsWEBGL(mode,counts,0,type,starts,0,drawCount);let elementCount=0;for(let i=0;i<drawCount;i++)elementCount+=counts[i];info.update(elementCount,mode,1)}function renderMultiDrawInstances(starts,counts,drawCount,primcount){if(drawCount===0)return;const extension=extensions.get("WEBGL_multi_draw");if(extension===null)for(let i=0;i<starts.length;i++)renderInstances(starts[i]/bytesPerElement,counts[i],primcount[i]);else{extension.multiDrawElementsInstancedWEBGL(mode,counts,0,type,starts,0,primcount,0,drawCount);let elementCount=0;for(let i=0;i<drawCount;i++)elementCount+=counts[i]*primcount[i];info.update(elementCount,mode,1)}}this.setMode=setMode,this.setIndex=setIndex,this.render=render,this.renderInstances=renderInstances,this.renderMultiDraw=renderMultiDraw,this.renderMultiDrawInstances=renderMultiDrawInstances}function WebGLInfo(gl){const memory={geometries:0,textures:0},render={frame:0,calls:0,triangles:0,points:0,lines:0};function update(count,mode,instanceCount){switch(render.calls++,mode){case gl.TRIANGLES:render.triangles+=instanceCount*(count/3);break;case gl.LINES:render.lines+=instanceCount*(count/2);break;case gl.LINE_STRIP:render.lines+=instanceCount*(count-1);break;case gl.LINE_LOOP:render.lines+=instanceCount*count;break;case gl.POINTS:render.points+=instanceCount*count;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",mode);break}}function reset(){render.calls=0,render.triangles=0,render.points=0,render.lines=0}return{memory,render,programs:null,autoReset:!0,reset,update}}function WebGLMorphtargets(gl,capabilities,textures){const morphTextures=new WeakMap,morph=new Vector4;function update(object,geometry,program){const objectInfluences=object.morphTargetInfluences,morphAttribute=geometry.morphAttributes.position||geometry.morphAttributes.normal||geometry.morphAttributes.color,morphTargetsCount=morphAttribute!==void 0?morphAttribute.length:0;let entry=morphTextures.get(geometry);if(entry===void 0||entry.count!==morphTargetsCount){let disposeTexture=function(){texture.dispose(),morphTextures.delete(geometry),geometry.removeEventListener("dispose",disposeTexture)};entry!==void 0&&entry.texture.dispose();const hasMorphPosition=geometry.morphAttributes.position!==void 0,hasMorphNormals=geometry.morphAttributes.normal!==void 0,hasMorphColors=geometry.morphAttributes.color!==void 0,morphTargets=geometry.morphAttributes.position||[],morphNormals=geometry.morphAttributes.normal||[],morphColors=geometry.morphAttributes.color||[];let vertexDataCount=0;hasMorphPosition===!0&&(vertexDataCount=1),hasMorphNormals===!0&&(vertexDataCount=2),hasMorphColors===!0&&(vertexDataCount=3);let width=geometry.attributes.position.count*vertexDataCount,height=1;width>capabilities.maxTextureSize&&(height=Math.ceil(width/capabilities.maxTextureSize),width=capabilities.maxTextureSize);const buffer=new Float32Array(width*height*4*morphTargetsCount),texture=new DataArrayTexture(buffer,width,height,morphTargetsCount);texture.type=FloatType,texture.needsUpdate=!0;const vertexDataStride=vertexDataCount*4;for(let i=0;i<morphTargetsCount;i++){const morphTarget=morphTargets[i],morphNormal=morphNormals[i],morphColor=morphColors[i],offset=width*height*4*i;for(let j=0;j<morphTarget.count;j++){const stride=j*vertexDataStride;hasMorphPosition===!0&&(morph.fromBufferAttribute(morphTarget,j),buffer[offset+stride+0]=morph.x,buffer[offset+stride+1]=morph.y,buffer[offset+stride+2]=morph.z,buffer[offset+stride+3]=0),hasMorphNormals===!0&&(morph.fromBufferAttribute(morphNormal,j),buffer[offset+stride+4]=morph.x,buffer[offset+stride+5]=morph.y,buffer[offset+stride+6]=morph.z,buffer[offset+stride+7]=0),hasMorphColors===!0&&(morph.fromBufferAttribute(morphColor,j),buffer[offset+stride+8]=morph.x,buffer[offset+stride+9]=morph.y,buffer[offset+stride+10]=morph.z,buffer[offset+stride+11]=morphColor.itemSize===4?morph.w:1)}}entry={count:morphTargetsCount,texture,size:new Vector2(width,height)},morphTextures.set(geometry,entry),geometry.addEventListener("dispose",disposeTexture)}if(object.isInstancedMesh===!0&&object.morphTexture!==null)program.getUniforms().setValue(gl,"morphTexture",object.morphTexture,textures);else{let morphInfluencesSum=0;for(let i=0;i<objectInfluences.length;i++)morphInfluencesSum+=objectInfluences[i];const morphBaseInfluence=geometry.morphTargetsRelative?1:1-morphInfluencesSum;program.getUniforms().setValue(gl,"morphTargetBaseInfluence",morphBaseInfluence),program.getUniforms().setValue(gl,"morphTargetInfluences",objectInfluences)}program.getUniforms().setValue(gl,"morphTargetsTexture",entry.texture,textures),program.getUniforms().setValue(gl,"morphTargetsTextureSize",entry.size)}return{update}}function WebGLObjects(gl,geometries,attributes,info){let updateMap=new WeakMap;function update(object){const frame=info.render.frame,geometry=object.geometry,buffergeometry=geometries.get(object,geometry);if(updateMap.get(buffergeometry)!==frame&&(geometries.update(buffergeometry),updateMap.set(buffergeometry,frame)),object.isInstancedMesh&&(object.hasEventListener("dispose",onInstancedMeshDispose)===!1&&object.addEventListener("dispose",onInstancedMeshDispose),updateMap.get(object)!==frame&&(attributes.update(object.instanceMatrix,gl.ARRAY_BUFFER),object.instanceColor!==null&&attributes.update(object.instanceColor,gl.ARRAY_BUFFER),updateMap.set(object,frame))),object.isSkinnedMesh){const skeleton=object.skeleton;updateMap.get(skeleton)!==frame&&(skeleton.update(),updateMap.set(skeleton,frame))}return buffergeometry}function dispose(){updateMap=new WeakMap}function onInstancedMeshDispose(event){const instancedMesh=event.target;instancedMesh.removeEventListener("dispose",onInstancedMeshDispose),attributes.remove(instancedMesh.instanceMatrix),instancedMesh.instanceColor!==null&&attributes.remove(instancedMesh.instanceColor)}return{update,dispose}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(array,nBlocks,blockSize){const firstElem=array[0];if(firstElem<=0||firstElem>0)return array;const n=nBlocks*blockSize;let r=arrayCacheF32[n];if(r===void 0&&(r=new Float32Array(n),arrayCacheF32[n]=r),nBlocks!==0){firstElem.toArray(r,0);for(let i=1,offset=0;i!==nBlocks;++i)offset+=blockSize,array[i].toArray(r,offset)}return r}function arraysEqual(a,b){if(a.length!==b.length)return!1;for(let i=0,l=a.length;i<l;i++)if(a[i]!==b[i])return!1;return!0}function copyArray(a,b){for(let i=0,l=b.length;i<l;i++)a[i]=b[i]}function allocTexUnits(textures,n){let r=arrayCacheI32[n];r===void 0&&(r=new Int32Array(n),arrayCacheI32[n]=r);for(let i=0;i!==n;++i)r[i]=textures.allocateTextureUnit();return r}function setValueV1f(gl,v){const cache=this.cache;cache[0]!==v&&(gl.uniform1f(this.addr,v),cache[0]=v)}function setValueV2f(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y)&&(gl.uniform2f(this.addr,v.x,v.y),cache[0]=v.x,cache[1]=v.y);else{if(arraysEqual(cache,v))return;gl.uniform2fv(this.addr,v),copyArray(cache,v)}}function setValueV3f(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y||cache[2]!==v.z)&&(gl.uniform3f(this.addr,v.x,v.y,v.z),cache[0]=v.x,cache[1]=v.y,cache[2]=v.z);else if(v.r!==void 0)(cache[0]!==v.r||cache[1]!==v.g||cache[2]!==v.b)&&(gl.uniform3f(this.addr,v.r,v.g,v.b),cache[0]=v.r,cache[1]=v.g,cache[2]=v.b);else{if(arraysEqual(cache,v))return;gl.uniform3fv(this.addr,v),copyArray(cache,v)}}function setValueV4f(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y||cache[2]!==v.z||cache[3]!==v.w)&&(gl.uniform4f(this.addr,v.x,v.y,v.z,v.w),cache[0]=v.x,cache[1]=v.y,cache[2]=v.z,cache[3]=v.w);else{if(arraysEqual(cache,v))return;gl.uniform4fv(this.addr,v),copyArray(cache,v)}}function setValueM2(gl,v){const cache=this.cache,elements=v.elements;if(elements===void 0){if(arraysEqual(cache,v))return;gl.uniformMatrix2fv(this.addr,!1,v),copyArray(cache,v)}else{if(arraysEqual(cache,elements))return;mat2array.set(elements),gl.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(cache,elements)}}function setValueM3(gl,v){const cache=this.cache,elements=v.elements;if(elements===void 0){if(arraysEqual(cache,v))return;gl.uniformMatrix3fv(this.addr,!1,v),copyArray(cache,v)}else{if(arraysEqual(cache,elements))return;mat3array.set(elements),gl.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(cache,elements)}}function setValueM4(gl,v){const cache=this.cache,elements=v.elements;if(elements===void 0){if(arraysEqual(cache,v))return;gl.uniformMatrix4fv(this.addr,!1,v),copyArray(cache,v)}else{if(arraysEqual(cache,elements))return;mat4array.set(elements),gl.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(cache,elements)}}function setValueV1i(gl,v){const cache=this.cache;cache[0]!==v&&(gl.uniform1i(this.addr,v),cache[0]=v)}function setValueV2i(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y)&&(gl.uniform2i(this.addr,v.x,v.y),cache[0]=v.x,cache[1]=v.y);else{if(arraysEqual(cache,v))return;gl.uniform2iv(this.addr,v),copyArray(cache,v)}}function setValueV3i(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y||cache[2]!==v.z)&&(gl.uniform3i(this.addr,v.x,v.y,v.z),cache[0]=v.x,cache[1]=v.y,cache[2]=v.z);else{if(arraysEqual(cache,v))return;gl.uniform3iv(this.addr,v),copyArray(cache,v)}}function setValueV4i(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y||cache[2]!==v.z||cache[3]!==v.w)&&(gl.uniform4i(this.addr,v.x,v.y,v.z,v.w),cache[0]=v.x,cache[1]=v.y,cache[2]=v.z,cache[3]=v.w);else{if(arraysEqual(cache,v))return;gl.uniform4iv(this.addr,v),copyArray(cache,v)}}function setValueV1ui(gl,v){const cache=this.cache;cache[0]!==v&&(gl.uniform1ui(this.addr,v),cache[0]=v)}function setValueV2ui(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y)&&(gl.uniform2ui(this.addr,v.x,v.y),cache[0]=v.x,cache[1]=v.y);else{if(arraysEqual(cache,v))return;gl.uniform2uiv(this.addr,v),copyArray(cache,v)}}function setValueV3ui(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y||cache[2]!==v.z)&&(gl.uniform3ui(this.addr,v.x,v.y,v.z),cache[0]=v.x,cache[1]=v.y,cache[2]=v.z);else{if(arraysEqual(cache,v))return;gl.uniform3uiv(this.addr,v),copyArray(cache,v)}}function setValueV4ui(gl,v){const cache=this.cache;if(v.x!==void 0)(cache[0]!==v.x||cache[1]!==v.y||cache[2]!==v.z||cache[3]!==v.w)&&(gl.uniform4ui(this.addr,v.x,v.y,v.z,v.w),cache[0]=v.x,cache[1]=v.y,cache[2]=v.z,cache[3]=v.w);else{if(arraysEqual(cache,v))return;gl.uniform4uiv(this.addr,v),copyArray(cache,v)}}function setValueT1(gl,v,textures){const cache=this.cache,unit=textures.allocateTextureUnit();cache[0]!==unit&&(gl.uniform1i(this.addr,unit),cache[0]=unit);let emptyTexture2D;this.type===gl.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=LessEqualCompare,emptyTexture2D=emptyShadowTexture):emptyTexture2D=emptyTexture,textures.setTexture2D(v||emptyTexture2D,unit)}function setValueT3D1(gl,v,textures){const cache=this.cache,unit=textures.allocateTextureUnit();cache[0]!==unit&&(gl.uniform1i(this.addr,unit),cache[0]=unit),textures.setTexture3D(v||empty3dTexture,unit)}function setValueT6(gl,v,textures){const cache=this.cache,unit=textures.allocateTextureUnit();cache[0]!==unit&&(gl.uniform1i(this.addr,unit),cache[0]=unit),textures.setTextureCube(v||emptyCubeTexture,unit)}function setValueT2DArray1(gl,v,textures){const cache=this.cache,unit=textures.allocateTextureUnit();cache[0]!==unit&&(gl.uniform1i(this.addr,unit),cache[0]=unit),textures.setTexture2DArray(v||emptyArrayTexture,unit)}function getSingularSetter(type){switch(type){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(gl,v){gl.uniform1fv(this.addr,v)}function setValueV2fArray(gl,v){const data=flatten(v,this.size,2);gl.uniform2fv(this.addr,data)}function setValueV3fArray(gl,v){const data=flatten(v,this.size,3);gl.uniform3fv(this.addr,data)}function setValueV4fArray(gl,v){const data=flatten(v,this.size,4);gl.uniform4fv(this.addr,data)}function setValueM2Array(gl,v){const data=flatten(v,this.size,4);gl.uniformMatrix2fv(this.addr,!1,data)}function setValueM3Array(gl,v){const data=flatten(v,this.size,9);gl.uniformMatrix3fv(this.addr,!1,data)}function setValueM4Array(gl,v){const data=flatten(v,this.size,16);gl.uniformMatrix4fv(this.addr,!1,data)}function setValueV1iArray(gl,v){gl.uniform1iv(this.addr,v)}function setValueV2iArray(gl,v){gl.uniform2iv(this.addr,v)}function setValueV3iArray(gl,v){gl.uniform3iv(this.addr,v)}function setValueV4iArray(gl,v){gl.uniform4iv(this.addr,v)}function setValueV1uiArray(gl,v){gl.uniform1uiv(this.addr,v)}function setValueV2uiArray(gl,v){gl.uniform2uiv(this.addr,v)}function setValueV3uiArray(gl,v){gl.uniform3uiv(this.addr,v)}function setValueV4uiArray(gl,v){gl.uniform4uiv(this.addr,v)}function setValueT1Array(gl,v,textures){const cache=this.cache,n=v.length,units=allocTexUnits(textures,n);arraysEqual(cache,units)||(gl.uniform1iv(this.addr,units),copyArray(cache,units));for(let i=0;i!==n;++i)textures.setTexture2D(v[i]||emptyTexture,units[i])}function setValueT3DArray(gl,v,textures){const cache=this.cache,n=v.length,units=allocTexUnits(textures,n);arraysEqual(cache,units)||(gl.uniform1iv(this.addr,units),copyArray(cache,units));for(let i=0;i!==n;++i)textures.setTexture3D(v[i]||empty3dTexture,units[i])}function setValueT6Array(gl,v,textures){const cache=this.cache,n=v.length,units=allocTexUnits(textures,n);arraysEqual(cache,units)||(gl.uniform1iv(this.addr,units),copyArray(cache,units));for(let i=0;i!==n;++i)textures.setTextureCube(v[i]||emptyCubeTexture,units[i])}function setValueT2DArrayArray(gl,v,textures){const cache=this.cache,n=v.length,units=allocTexUnits(textures,n);arraysEqual(cache,units)||(gl.uniform1iv(this.addr,units),copyArray(cache,units));for(let i=0;i!==n;++i)textures.setTexture2DArray(v[i]||emptyArrayTexture,units[i])}function getPureArraySetter(type){switch(type){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(id,activeInfo,addr){this.id=id,this.addr=addr,this.cache=[],this.type=activeInfo.type,this.setValue=getSingularSetter(activeInfo.type)}}class PureArrayUniform{constructor(id,activeInfo,addr){this.id=id,this.addr=addr,this.cache=[],this.type=activeInfo.type,this.size=activeInfo.size,this.setValue=getPureArraySetter(activeInfo.type)}}class StructuredUniform{constructor(id){this.id=id,this.seq=[],this.map={}}setValue(gl,value,textures){const seq=this.seq;for(let i=0,n=seq.length;i!==n;++i){const u=seq[i];u.setValue(gl,value[u.id],textures)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(container,uniformObject){container.seq.push(uniformObject),container.map[uniformObject.id]=uniformObject}function parseUniform(activeInfo,addr,container){const path=activeInfo.name,pathLength=path.length;for(RePathPart.lastIndex=0;;){const match=RePathPart.exec(path),matchEnd=RePathPart.lastIndex;let id=match[1];const idIsIndex=match[2]==="]",subscript=match[3];if(idIsIndex&&(id=id|0),subscript===void 0||subscript==="["&&matchEnd+2===pathLength){addUniform(container,subscript===void 0?new SingleUniform(id,activeInfo,addr):new PureArrayUniform(id,activeInfo,addr));break}else{let next=container.map[id];next===void 0&&(next=new StructuredUniform(id),addUniform(container,next)),container=next}}}class WebGLUniforms{constructor(gl,program){this.seq=[],this.map={};const n=gl.getProgramParameter(program,gl.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const info=gl.getActiveUniform(program,i),addr=gl.getUniformLocation(program,info.name);parseUniform(info,addr,this)}}setValue(gl,name,value,textures){const u=this.map[name];u!==void 0&&u.setValue(gl,value,textures)}setOptional(gl,object,name){const v=object[name];v!==void 0&&this.setValue(gl,name,v)}static upload(gl,seq,values,textures){for(let i=0,n=seq.length;i!==n;++i){const u=seq[i],v=values[u.id];v.needsUpdate!==!1&&u.setValue(gl,v.value,textures)}}static seqWithValue(seq,values){const r=[];for(let i=0,n=seq.length;i!==n;++i){const u=seq[i];u.id in values&&r.push(u)}return r}}function WebGLShader(gl,type,string){const shader=gl.createShader(type);return gl.shaderSource(shader,string),gl.compileShader(shader),shader}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(string,errorLine){const lines=string.split(`
`),lines2=[],from=Math.max(errorLine-6,0),to=Math.min(errorLine+6,lines.length);for(let i=from;i<to;i++){const line=i+1;lines2.push(`${line===errorLine?">":" "} ${line}: ${lines[i]}`)}return lines2.join(`
`)}const _m0=new Matrix3;function getEncodingComponents(colorSpace){ColorManagement._getMatrix(_m0,ColorManagement.workingColorSpace,colorSpace);const encodingMatrix=`mat3( ${_m0.elements.map(v=>v.toFixed(4))} )`;switch(ColorManagement.getTransfer(colorSpace)){case LinearTransfer:return[encodingMatrix,"LinearTransferOETF"];case SRGBTransfer:return[encodingMatrix,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",colorSpace),[encodingMatrix,"LinearTransferOETF"]}}function getShaderErrors(gl,shader,type){const status=gl.getShaderParameter(shader,gl.COMPILE_STATUS),errors=gl.getShaderInfoLog(shader).trim();if(status&&errors==="")return"";const errorMatches=/ERROR: 0:(\d+)/.exec(errors);if(errorMatches){const errorLine=parseInt(errorMatches[1]);return type.toUpperCase()+`

`+errors+`

`+handleSource(gl.getShaderSource(shader),errorLine)}else return errors}function getTexelEncodingFunction(functionName,colorSpace){const components=getEncodingComponents(colorSpace);return[`vec4 ${functionName}( vec4 value ) {`,`	return ${components[1]}( vec4( value.rgb * ${components[0]}, value.a ) );`,"}"].join(`
`)}function getToneMappingFunction(functionName,toneMapping){let toneMappingName;switch(toneMapping){case LinearToneMapping:toneMappingName="Linear";break;case ReinhardToneMapping:toneMappingName="Reinhard";break;case CineonToneMapping:toneMappingName="Cineon";break;case ACESFilmicToneMapping:toneMappingName="ACESFilmic";break;case AgXToneMapping:toneMappingName="AgX";break;case NeutralToneMapping:toneMappingName="Neutral";break;case CustomToneMapping:toneMappingName="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",toneMapping),toneMappingName="Linear"}return"vec3 "+functionName+"( vec3 color ) { return "+toneMappingName+"ToneMapping( color ); }"}const _v0=new Vector3;function getLuminanceFunction(){ColorManagement.getLuminanceCoefficients(_v0);const r=_v0.x.toFixed(4),g=_v0.y.toFixed(4),b=_v0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${g}, ${b} );`,"	return dot( weights, rgb );","}"].join(`
`)}function generateVertexExtensions(parameters){return[parameters.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",parameters.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(defines){const chunks=[];for(const name in defines){const value=defines[name];value!==!1&&chunks.push("#define "+name+" "+value)}return chunks.join(`
`)}function fetchAttributeLocations(gl,program){const attributes={},n=gl.getProgramParameter(program,gl.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const info=gl.getActiveAttrib(program,i),name=info.name;let locationSize=1;info.type===gl.FLOAT_MAT2&&(locationSize=2),info.type===gl.FLOAT_MAT3&&(locationSize=3),info.type===gl.FLOAT_MAT4&&(locationSize=4),attributes[name]={type:info.type,location:gl.getAttribLocation(program,name),locationSize}}return attributes}function filterEmptyLine(string){return string!==""}function replaceLightNums(string,parameters){const numSpotLightCoords=parameters.numSpotLightShadows+parameters.numSpotLightMaps-parameters.numSpotLightShadowsWithMaps;return string.replace(/NUM_DIR_LIGHTS/g,parameters.numDirLights).replace(/NUM_SPOT_LIGHTS/g,parameters.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,parameters.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,numSpotLightCoords).replace(/NUM_RECT_AREA_LIGHTS/g,parameters.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,parameters.numPointLights).replace(/NUM_HEMI_LIGHTS/g,parameters.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,parameters.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,parameters.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,parameters.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,parameters.numPointLightShadows)}function replaceClippingPlaneNums(string,parameters){return string.replace(/NUM_CLIPPING_PLANES/g,parameters.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,parameters.numClippingPlanes-parameters.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(string){return string.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(match,include){let string=ShaderChunk[include];if(string===void 0){const newInclude=shaderChunkMap.get(include);if(newInclude!==void 0)string=ShaderChunk[newInclude],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',include,newInclude);else throw new Error("Can not resolve #include <"+include+">")}return resolveIncludes(string)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(string){return string.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(match,start,end,snippet){let string="";for(let i=parseInt(start);i<parseInt(end);i++)string+=snippet.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return string}function generatePrecision(parameters){let precisionstring=`precision ${parameters.precision} float;
	precision ${parameters.precision} int;
	precision ${parameters.precision} sampler2D;
	precision ${parameters.precision} samplerCube;
	precision ${parameters.precision} sampler3D;
	precision ${parameters.precision} sampler2DArray;
	precision ${parameters.precision} sampler2DShadow;
	precision ${parameters.precision} samplerCubeShadow;
	precision ${parameters.precision} sampler2DArrayShadow;
	precision ${parameters.precision} isampler2D;
	precision ${parameters.precision} isampler3D;
	precision ${parameters.precision} isamplerCube;
	precision ${parameters.precision} isampler2DArray;
	precision ${parameters.precision} usampler2D;
	precision ${parameters.precision} usampler3D;
	precision ${parameters.precision} usamplerCube;
	precision ${parameters.precision} usampler2DArray;
	`;return parameters.precision==="highp"?precisionstring+=`
#define HIGH_PRECISION`:parameters.precision==="mediump"?precisionstring+=`
#define MEDIUM_PRECISION`:parameters.precision==="lowp"&&(precisionstring+=`
#define LOW_PRECISION`),precisionstring}function generateShadowMapTypeDefine(parameters){let shadowMapTypeDefine="SHADOWMAP_TYPE_BASIC";return parameters.shadowMapType===PCFShadowMap?shadowMapTypeDefine="SHADOWMAP_TYPE_PCF":parameters.shadowMapType===PCFSoftShadowMap?shadowMapTypeDefine="SHADOWMAP_TYPE_PCF_SOFT":parameters.shadowMapType===VSMShadowMap&&(shadowMapTypeDefine="SHADOWMAP_TYPE_VSM"),shadowMapTypeDefine}function generateEnvMapTypeDefine(parameters){let envMapTypeDefine="ENVMAP_TYPE_CUBE";if(parameters.envMap)switch(parameters.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:envMapTypeDefine="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:envMapTypeDefine="ENVMAP_TYPE_CUBE_UV";break}return envMapTypeDefine}function generateEnvMapModeDefine(parameters){let envMapModeDefine="ENVMAP_MODE_REFLECTION";if(parameters.envMap)switch(parameters.envMapMode){case CubeRefractionMapping:envMapModeDefine="ENVMAP_MODE_REFRACTION";break}return envMapModeDefine}function generateEnvMapBlendingDefine(parameters){let envMapBlendingDefine="ENVMAP_BLENDING_NONE";if(parameters.envMap)switch(parameters.combine){case MultiplyOperation:envMapBlendingDefine="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:envMapBlendingDefine="ENVMAP_BLENDING_MIX";break;case AddOperation:envMapBlendingDefine="ENVMAP_BLENDING_ADD";break}return envMapBlendingDefine}function generateCubeUVSize(parameters){const imageHeight=parameters.envMapCubeUVHeight;if(imageHeight===null)return null;const maxMip=Math.log2(imageHeight)-2,texelHeight=1/imageHeight;return{texelWidth:1/(3*Math.max(Math.pow(2,maxMip),7*16)),texelHeight,maxMip}}function WebGLProgram(renderer,cacheKey,parameters,bindingStates){const gl=renderer.getContext(),defines=parameters.defines;let vertexShader=parameters.vertexShader,fragmentShader=parameters.fragmentShader;const shadowMapTypeDefine=generateShadowMapTypeDefine(parameters),envMapTypeDefine=generateEnvMapTypeDefine(parameters),envMapModeDefine=generateEnvMapModeDefine(parameters),envMapBlendingDefine=generateEnvMapBlendingDefine(parameters),envMapCubeUVSize=generateCubeUVSize(parameters),customVertexExtensions=generateVertexExtensions(parameters),customDefines=generateDefines(defines),program=gl.createProgram();let prefixVertex,prefixFragment,versionString=parameters.glslVersion?"#version "+parameters.glslVersion+`
`:"";parameters.isRawShaderMaterial?(prefixVertex=["#define SHADER_TYPE "+parameters.shaderType,"#define SHADER_NAME "+parameters.shaderName,customDefines].filter(filterEmptyLine).join(`
`),prefixVertex.length>0&&(prefixVertex+=`
`),prefixFragment=["#define SHADER_TYPE "+parameters.shaderType,"#define SHADER_NAME "+parameters.shaderName,customDefines].filter(filterEmptyLine).join(`
`),prefixFragment.length>0&&(prefixFragment+=`
`)):(prefixVertex=[generatePrecision(parameters),"#define SHADER_TYPE "+parameters.shaderType,"#define SHADER_NAME "+parameters.shaderName,customDefines,parameters.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",parameters.batching?"#define USE_BATCHING":"",parameters.batchingColor?"#define USE_BATCHING_COLOR":"",parameters.instancing?"#define USE_INSTANCING":"",parameters.instancingColor?"#define USE_INSTANCING_COLOR":"",parameters.instancingMorph?"#define USE_INSTANCING_MORPH":"",parameters.useFog&&parameters.fog?"#define USE_FOG":"",parameters.useFog&&parameters.fogExp2?"#define FOG_EXP2":"",parameters.map?"#define USE_MAP":"",parameters.envMap?"#define USE_ENVMAP":"",parameters.envMap?"#define "+envMapModeDefine:"",parameters.lightMap?"#define USE_LIGHTMAP":"",parameters.aoMap?"#define USE_AOMAP":"",parameters.bumpMap?"#define USE_BUMPMAP":"",parameters.normalMap?"#define USE_NORMALMAP":"",parameters.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",parameters.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",parameters.displacementMap?"#define USE_DISPLACEMENTMAP":"",parameters.emissiveMap?"#define USE_EMISSIVEMAP":"",parameters.anisotropy?"#define USE_ANISOTROPY":"",parameters.anisotropyMap?"#define USE_ANISOTROPYMAP":"",parameters.clearcoatMap?"#define USE_CLEARCOATMAP":"",parameters.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",parameters.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",parameters.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",parameters.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",parameters.specularMap?"#define USE_SPECULARMAP":"",parameters.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",parameters.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",parameters.roughnessMap?"#define USE_ROUGHNESSMAP":"",parameters.metalnessMap?"#define USE_METALNESSMAP":"",parameters.alphaMap?"#define USE_ALPHAMAP":"",parameters.alphaHash?"#define USE_ALPHAHASH":"",parameters.transmission?"#define USE_TRANSMISSION":"",parameters.transmissionMap?"#define USE_TRANSMISSIONMAP":"",parameters.thicknessMap?"#define USE_THICKNESSMAP":"",parameters.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",parameters.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",parameters.mapUv?"#define MAP_UV "+parameters.mapUv:"",parameters.alphaMapUv?"#define ALPHAMAP_UV "+parameters.alphaMapUv:"",parameters.lightMapUv?"#define LIGHTMAP_UV "+parameters.lightMapUv:"",parameters.aoMapUv?"#define AOMAP_UV "+parameters.aoMapUv:"",parameters.emissiveMapUv?"#define EMISSIVEMAP_UV "+parameters.emissiveMapUv:"",parameters.bumpMapUv?"#define BUMPMAP_UV "+parameters.bumpMapUv:"",parameters.normalMapUv?"#define NORMALMAP_UV "+parameters.normalMapUv:"",parameters.displacementMapUv?"#define DISPLACEMENTMAP_UV "+parameters.displacementMapUv:"",parameters.metalnessMapUv?"#define METALNESSMAP_UV "+parameters.metalnessMapUv:"",parameters.roughnessMapUv?"#define ROUGHNESSMAP_UV "+parameters.roughnessMapUv:"",parameters.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+parameters.anisotropyMapUv:"",parameters.clearcoatMapUv?"#define CLEARCOATMAP_UV "+parameters.clearcoatMapUv:"",parameters.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+parameters.clearcoatNormalMapUv:"",parameters.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+parameters.clearcoatRoughnessMapUv:"",parameters.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+parameters.iridescenceMapUv:"",parameters.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+parameters.iridescenceThicknessMapUv:"",parameters.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+parameters.sheenColorMapUv:"",parameters.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+parameters.sheenRoughnessMapUv:"",parameters.specularMapUv?"#define SPECULARMAP_UV "+parameters.specularMapUv:"",parameters.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+parameters.specularColorMapUv:"",parameters.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+parameters.specularIntensityMapUv:"",parameters.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+parameters.transmissionMapUv:"",parameters.thicknessMapUv?"#define THICKNESSMAP_UV "+parameters.thicknessMapUv:"",parameters.vertexTangents&&parameters.flatShading===!1?"#define USE_TANGENT":"",parameters.vertexColors?"#define USE_COLOR":"",parameters.vertexAlphas?"#define USE_COLOR_ALPHA":"",parameters.vertexUv1s?"#define USE_UV1":"",parameters.vertexUv2s?"#define USE_UV2":"",parameters.vertexUv3s?"#define USE_UV3":"",parameters.pointsUvs?"#define USE_POINTS_UV":"",parameters.flatShading?"#define FLAT_SHADED":"",parameters.skinning?"#define USE_SKINNING":"",parameters.morphTargets?"#define USE_MORPHTARGETS":"",parameters.morphNormals&&parameters.flatShading===!1?"#define USE_MORPHNORMALS":"",parameters.morphColors?"#define USE_MORPHCOLORS":"",parameters.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+parameters.morphTextureStride:"",parameters.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+parameters.morphTargetsCount:"",parameters.doubleSided?"#define DOUBLE_SIDED":"",parameters.flipSided?"#define FLIP_SIDED":"",parameters.shadowMapEnabled?"#define USE_SHADOWMAP":"",parameters.shadowMapEnabled?"#define "+shadowMapTypeDefine:"",parameters.sizeAttenuation?"#define USE_SIZEATTENUATION":"",parameters.numLightProbes>0?"#define USE_LIGHT_PROBES":"",parameters.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",parameters.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),prefixFragment=[generatePrecision(parameters),"#define SHADER_TYPE "+parameters.shaderType,"#define SHADER_NAME "+parameters.shaderName,customDefines,parameters.useFog&&parameters.fog?"#define USE_FOG":"",parameters.useFog&&parameters.fogExp2?"#define FOG_EXP2":"",parameters.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",parameters.map?"#define USE_MAP":"",parameters.matcap?"#define USE_MATCAP":"",parameters.envMap?"#define USE_ENVMAP":"",parameters.envMap?"#define "+envMapTypeDefine:"",parameters.envMap?"#define "+envMapModeDefine:"",parameters.envMap?"#define "+envMapBlendingDefine:"",envMapCubeUVSize?"#define CUBEUV_TEXEL_WIDTH "+envMapCubeUVSize.texelWidth:"",envMapCubeUVSize?"#define CUBEUV_TEXEL_HEIGHT "+envMapCubeUVSize.texelHeight:"",envMapCubeUVSize?"#define CUBEUV_MAX_MIP "+envMapCubeUVSize.maxMip+".0":"",parameters.lightMap?"#define USE_LIGHTMAP":"",parameters.aoMap?"#define USE_AOMAP":"",parameters.bumpMap?"#define USE_BUMPMAP":"",parameters.normalMap?"#define USE_NORMALMAP":"",parameters.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",parameters.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",parameters.emissiveMap?"#define USE_EMISSIVEMAP":"",parameters.anisotropy?"#define USE_ANISOTROPY":"",parameters.anisotropyMap?"#define USE_ANISOTROPYMAP":"",parameters.clearcoat?"#define USE_CLEARCOAT":"",parameters.clearcoatMap?"#define USE_CLEARCOATMAP":"",parameters.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",parameters.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",parameters.dispersion?"#define USE_DISPERSION":"",parameters.iridescence?"#define USE_IRIDESCENCE":"",parameters.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",parameters.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",parameters.specularMap?"#define USE_SPECULARMAP":"",parameters.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",parameters.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",parameters.roughnessMap?"#define USE_ROUGHNESSMAP":"",parameters.metalnessMap?"#define USE_METALNESSMAP":"",parameters.alphaMap?"#define USE_ALPHAMAP":"",parameters.alphaTest?"#define USE_ALPHATEST":"",parameters.alphaHash?"#define USE_ALPHAHASH":"",parameters.sheen?"#define USE_SHEEN":"",parameters.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",parameters.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",parameters.transmission?"#define USE_TRANSMISSION":"",parameters.transmissionMap?"#define USE_TRANSMISSIONMAP":"",parameters.thicknessMap?"#define USE_THICKNESSMAP":"",parameters.vertexTangents&&parameters.flatShading===!1?"#define USE_TANGENT":"",parameters.vertexColors||parameters.instancingColor||parameters.batchingColor?"#define USE_COLOR":"",parameters.vertexAlphas?"#define USE_COLOR_ALPHA":"",parameters.vertexUv1s?"#define USE_UV1":"",parameters.vertexUv2s?"#define USE_UV2":"",parameters.vertexUv3s?"#define USE_UV3":"",parameters.pointsUvs?"#define USE_POINTS_UV":"",parameters.gradientMap?"#define USE_GRADIENTMAP":"",parameters.flatShading?"#define FLAT_SHADED":"",parameters.doubleSided?"#define DOUBLE_SIDED":"",parameters.flipSided?"#define FLIP_SIDED":"",parameters.shadowMapEnabled?"#define USE_SHADOWMAP":"",parameters.shadowMapEnabled?"#define "+shadowMapTypeDefine:"",parameters.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",parameters.numLightProbes>0?"#define USE_LIGHT_PROBES":"",parameters.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",parameters.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",parameters.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",parameters.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",parameters.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",parameters.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",parameters.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",parameters.toneMapping):"",parameters.dithering?"#define DITHERING":"",parameters.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",parameters.outputColorSpace),getLuminanceFunction(),parameters.useDepthPacking?"#define DEPTH_PACKING "+parameters.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),vertexShader=resolveIncludes(vertexShader),vertexShader=replaceLightNums(vertexShader,parameters),vertexShader=replaceClippingPlaneNums(vertexShader,parameters),fragmentShader=resolveIncludes(fragmentShader),fragmentShader=replaceLightNums(fragmentShader,parameters),fragmentShader=replaceClippingPlaneNums(fragmentShader,parameters),vertexShader=unrollLoops(vertexShader),fragmentShader=unrollLoops(fragmentShader),parameters.isRawShaderMaterial!==!0&&(versionString=`#version 300 es
`,prefixVertex=[customVertexExtensions,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+prefixVertex,prefixFragment=["#define varying in",parameters.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",parameters.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+prefixFragment);const vertexGlsl=versionString+prefixVertex+vertexShader,fragmentGlsl=versionString+prefixFragment+fragmentShader,glVertexShader=WebGLShader(gl,gl.VERTEX_SHADER,vertexGlsl),glFragmentShader=WebGLShader(gl,gl.FRAGMENT_SHADER,fragmentGlsl);gl.attachShader(program,glVertexShader),gl.attachShader(program,glFragmentShader),parameters.index0AttributeName!==void 0?gl.bindAttribLocation(program,0,parameters.index0AttributeName):parameters.morphTargets===!0&&gl.bindAttribLocation(program,0,"position"),gl.linkProgram(program);function onFirstUse(self2){if(renderer.debug.checkShaderErrors){const programLog=gl.getProgramInfoLog(program).trim(),vertexLog=gl.getShaderInfoLog(glVertexShader).trim(),fragmentLog=gl.getShaderInfoLog(glFragmentShader).trim();let runnable=!0,haveDiagnostics=!0;if(gl.getProgramParameter(program,gl.LINK_STATUS)===!1)if(runnable=!1,typeof renderer.debug.onShaderError=="function")renderer.debug.onShaderError(gl,program,glVertexShader,glFragmentShader);else{const vertexErrors=getShaderErrors(gl,glVertexShader,"vertex"),fragmentErrors=getShaderErrors(gl,glFragmentShader,"fragment");console.error("THREE.WebGLProgram: Shader Error "+gl.getError()+" - VALIDATE_STATUS "+gl.getProgramParameter(program,gl.VALIDATE_STATUS)+`

Material Name: `+self2.name+`
Material Type: `+self2.type+`

Program Info Log: `+programLog+`
`+vertexErrors+`
`+fragmentErrors)}else programLog!==""?console.warn("THREE.WebGLProgram: Program Info Log:",programLog):(vertexLog===""||fragmentLog==="")&&(haveDiagnostics=!1);haveDiagnostics&&(self2.diagnostics={runnable,programLog,vertexShader:{log:vertexLog,prefix:prefixVertex},fragmentShader:{log:fragmentLog,prefix:prefixFragment}})}gl.deleteShader(glVertexShader),gl.deleteShader(glFragmentShader),cachedUniforms=new WebGLUniforms(gl,program),cachedAttributes=fetchAttributeLocations(gl,program)}let cachedUniforms;this.getUniforms=function(){return cachedUniforms===void 0&&onFirstUse(this),cachedUniforms};let cachedAttributes;this.getAttributes=function(){return cachedAttributes===void 0&&onFirstUse(this),cachedAttributes};let programReady=parameters.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return programReady===!1&&(programReady=gl.getProgramParameter(program,COMPLETION_STATUS_KHR)),programReady},this.destroy=function(){bindingStates.releaseStatesOfProgram(this),gl.deleteProgram(program),this.program=void 0},this.type=parameters.shaderType,this.name=parameters.shaderName,this.id=programIdCount++,this.cacheKey=cacheKey,this.usedTimes=1,this.program=program,this.vertexShader=glVertexShader,this.fragmentShader=glFragmentShader,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(material){const vertexShader=material.vertexShader,fragmentShader=material.fragmentShader,vertexShaderStage=this._getShaderStage(vertexShader),fragmentShaderStage=this._getShaderStage(fragmentShader),materialShaders=this._getShaderCacheForMaterial(material);return materialShaders.has(vertexShaderStage)===!1&&(materialShaders.add(vertexShaderStage),vertexShaderStage.usedTimes++),materialShaders.has(fragmentShaderStage)===!1&&(materialShaders.add(fragmentShaderStage),fragmentShaderStage.usedTimes++),this}remove(material){const materialShaders=this.materialCache.get(material);for(const shaderStage of materialShaders)shaderStage.usedTimes--,shaderStage.usedTimes===0&&this.shaderCache.delete(shaderStage.code);return this.materialCache.delete(material),this}getVertexShaderID(material){return this._getShaderStage(material.vertexShader).id}getFragmentShaderID(material){return this._getShaderStage(material.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(material){const cache=this.materialCache;let set=cache.get(material);return set===void 0&&(set=new Set,cache.set(material,set)),set}_getShaderStage(code){const cache=this.shaderCache;let stage=cache.get(code);return stage===void 0&&(stage=new WebGLShaderStage(code),cache.set(code,stage)),stage}}class WebGLShaderStage{constructor(code){this.id=_id++,this.code=code,this.usedTimes=0}}function WebGLPrograms(renderer,cubemaps,cubeuvmaps,extensions,capabilities,bindingStates,clipping){const _programLayers=new Layers,_customShaders=new WebGLShaderCache,_activeChannels=new Set,programs=[],logarithmicDepthBuffer=capabilities.logarithmicDepthBuffer,SUPPORTS_VERTEX_TEXTURES=capabilities.vertexTextures;let precision=capabilities.precision;const shaderIDs={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function getChannel(value){return _activeChannels.add(value),value===0?"uv":`uv${value}`}function getParameters(material,lights,shadows,scene,object){const fog=scene.fog,geometry=object.geometry,environment=material.isMeshStandardMaterial?scene.environment:null,envMap=(material.isMeshStandardMaterial?cubeuvmaps:cubemaps).get(material.envMap||environment),envMapCubeUVHeight=envMap&&envMap.mapping===CubeUVReflectionMapping?envMap.image.height:null,shaderID=shaderIDs[material.type];material.precision!==null&&(precision=capabilities.getMaxPrecision(material.precision),precision!==material.precision&&console.warn("THREE.WebGLProgram.getParameters:",material.precision,"not supported, using",precision,"instead."));const morphAttribute=geometry.morphAttributes.position||geometry.morphAttributes.normal||geometry.morphAttributes.color,morphTargetsCount=morphAttribute!==void 0?morphAttribute.length:0;let morphTextureStride=0;geometry.morphAttributes.position!==void 0&&(morphTextureStride=1),geometry.morphAttributes.normal!==void 0&&(morphTextureStride=2),geometry.morphAttributes.color!==void 0&&(morphTextureStride=3);let vertexShader,fragmentShader,customVertexShaderID,customFragmentShaderID;if(shaderID){const shader=ShaderLib[shaderID];vertexShader=shader.vertexShader,fragmentShader=shader.fragmentShader}else vertexShader=material.vertexShader,fragmentShader=material.fragmentShader,_customShaders.update(material),customVertexShaderID=_customShaders.getVertexShaderID(material),customFragmentShaderID=_customShaders.getFragmentShaderID(material);const currentRenderTarget=renderer.getRenderTarget(),reverseDepthBuffer=renderer.state.buffers.depth.getReversed(),IS_INSTANCEDMESH=object.isInstancedMesh===!0,IS_BATCHEDMESH=object.isBatchedMesh===!0,HAS_MAP=!!material.map,HAS_MATCAP=!!material.matcap,HAS_ENVMAP=!!envMap,HAS_AOMAP=!!material.aoMap,HAS_LIGHTMAP=!!material.lightMap,HAS_BUMPMAP=!!material.bumpMap,HAS_NORMALMAP=!!material.normalMap,HAS_DISPLACEMENTMAP=!!material.displacementMap,HAS_EMISSIVEMAP=!!material.emissiveMap,HAS_METALNESSMAP=!!material.metalnessMap,HAS_ROUGHNESSMAP=!!material.roughnessMap,HAS_ANISOTROPY=material.anisotropy>0,HAS_CLEARCOAT=material.clearcoat>0,HAS_DISPERSION=material.dispersion>0,HAS_IRIDESCENCE=material.iridescence>0,HAS_SHEEN=material.sheen>0,HAS_TRANSMISSION=material.transmission>0,HAS_ANISOTROPYMAP=HAS_ANISOTROPY&&!!material.anisotropyMap,HAS_CLEARCOATMAP=HAS_CLEARCOAT&&!!material.clearcoatMap,HAS_CLEARCOAT_NORMALMAP=HAS_CLEARCOAT&&!!material.clearcoatNormalMap,HAS_CLEARCOAT_ROUGHNESSMAP=HAS_CLEARCOAT&&!!material.clearcoatRoughnessMap,HAS_IRIDESCENCEMAP=HAS_IRIDESCENCE&&!!material.iridescenceMap,HAS_IRIDESCENCE_THICKNESSMAP=HAS_IRIDESCENCE&&!!material.iridescenceThicknessMap,HAS_SHEEN_COLORMAP=HAS_SHEEN&&!!material.sheenColorMap,HAS_SHEEN_ROUGHNESSMAP=HAS_SHEEN&&!!material.sheenRoughnessMap,HAS_SPECULARMAP=!!material.specularMap,HAS_SPECULAR_COLORMAP=!!material.specularColorMap,HAS_SPECULAR_INTENSITYMAP=!!material.specularIntensityMap,HAS_TRANSMISSIONMAP=HAS_TRANSMISSION&&!!material.transmissionMap,HAS_THICKNESSMAP=HAS_TRANSMISSION&&!!material.thicknessMap,HAS_GRADIENTMAP=!!material.gradientMap,HAS_ALPHAMAP=!!material.alphaMap,HAS_ALPHATEST=material.alphaTest>0,HAS_ALPHAHASH=!!material.alphaHash,HAS_EXTENSIONS=!!material.extensions;let toneMapping=NoToneMapping;material.toneMapped&&(currentRenderTarget===null||currentRenderTarget.isXRRenderTarget===!0)&&(toneMapping=renderer.toneMapping);const parameters={shaderID,shaderType:material.type,shaderName:material.name,vertexShader,fragmentShader,defines:material.defines,customVertexShaderID,customFragmentShaderID,isRawShaderMaterial:material.isRawShaderMaterial===!0,glslVersion:material.glslVersion,precision,batching:IS_BATCHEDMESH,batchingColor:IS_BATCHEDMESH&&object._colorsTexture!==null,instancing:IS_INSTANCEDMESH,instancingColor:IS_INSTANCEDMESH&&object.instanceColor!==null,instancingMorph:IS_INSTANCEDMESH&&object.morphTexture!==null,supportsVertexTextures:SUPPORTS_VERTEX_TEXTURES,outputColorSpace:currentRenderTarget===null?renderer.outputColorSpace:currentRenderTarget.isXRRenderTarget===!0?currentRenderTarget.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!material.alphaToCoverage,map:HAS_MAP,matcap:HAS_MATCAP,envMap:HAS_ENVMAP,envMapMode:HAS_ENVMAP&&envMap.mapping,envMapCubeUVHeight,aoMap:HAS_AOMAP,lightMap:HAS_LIGHTMAP,bumpMap:HAS_BUMPMAP,normalMap:HAS_NORMALMAP,displacementMap:SUPPORTS_VERTEX_TEXTURES&&HAS_DISPLACEMENTMAP,emissiveMap:HAS_EMISSIVEMAP,normalMapObjectSpace:HAS_NORMALMAP&&material.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:HAS_NORMALMAP&&material.normalMapType===TangentSpaceNormalMap,metalnessMap:HAS_METALNESSMAP,roughnessMap:HAS_ROUGHNESSMAP,anisotropy:HAS_ANISOTROPY,anisotropyMap:HAS_ANISOTROPYMAP,clearcoat:HAS_CLEARCOAT,clearcoatMap:HAS_CLEARCOATMAP,clearcoatNormalMap:HAS_CLEARCOAT_NORMALMAP,clearcoatRoughnessMap:HAS_CLEARCOAT_ROUGHNESSMAP,dispersion:HAS_DISPERSION,iridescence:HAS_IRIDESCENCE,iridescenceMap:HAS_IRIDESCENCEMAP,iridescenceThicknessMap:HAS_IRIDESCENCE_THICKNESSMAP,sheen:HAS_SHEEN,sheenColorMap:HAS_SHEEN_COLORMAP,sheenRoughnessMap:HAS_SHEEN_ROUGHNESSMAP,specularMap:HAS_SPECULARMAP,specularColorMap:HAS_SPECULAR_COLORMAP,specularIntensityMap:HAS_SPECULAR_INTENSITYMAP,transmission:HAS_TRANSMISSION,transmissionMap:HAS_TRANSMISSIONMAP,thicknessMap:HAS_THICKNESSMAP,gradientMap:HAS_GRADIENTMAP,opaque:material.transparent===!1&&material.blending===NormalBlending&&material.alphaToCoverage===!1,alphaMap:HAS_ALPHAMAP,alphaTest:HAS_ALPHATEST,alphaHash:HAS_ALPHAHASH,combine:material.combine,mapUv:HAS_MAP&&getChannel(material.map.channel),aoMapUv:HAS_AOMAP&&getChannel(material.aoMap.channel),lightMapUv:HAS_LIGHTMAP&&getChannel(material.lightMap.channel),bumpMapUv:HAS_BUMPMAP&&getChannel(material.bumpMap.channel),normalMapUv:HAS_NORMALMAP&&getChannel(material.normalMap.channel),displacementMapUv:HAS_DISPLACEMENTMAP&&getChannel(material.displacementMap.channel),emissiveMapUv:HAS_EMISSIVEMAP&&getChannel(material.emissiveMap.channel),metalnessMapUv:HAS_METALNESSMAP&&getChannel(material.metalnessMap.channel),roughnessMapUv:HAS_ROUGHNESSMAP&&getChannel(material.roughnessMap.channel),anisotropyMapUv:HAS_ANISOTROPYMAP&&getChannel(material.anisotropyMap.channel),clearcoatMapUv:HAS_CLEARCOATMAP&&getChannel(material.clearcoatMap.channel),clearcoatNormalMapUv:HAS_CLEARCOAT_NORMALMAP&&getChannel(material.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:HAS_CLEARCOAT_ROUGHNESSMAP&&getChannel(material.clearcoatRoughnessMap.channel),iridescenceMapUv:HAS_IRIDESCENCEMAP&&getChannel(material.iridescenceMap.channel),iridescenceThicknessMapUv:HAS_IRIDESCENCE_THICKNESSMAP&&getChannel(material.iridescenceThicknessMap.channel),sheenColorMapUv:HAS_SHEEN_COLORMAP&&getChannel(material.sheenColorMap.channel),sheenRoughnessMapUv:HAS_SHEEN_ROUGHNESSMAP&&getChannel(material.sheenRoughnessMap.channel),specularMapUv:HAS_SPECULARMAP&&getChannel(material.specularMap.channel),specularColorMapUv:HAS_SPECULAR_COLORMAP&&getChannel(material.specularColorMap.channel),specularIntensityMapUv:HAS_SPECULAR_INTENSITYMAP&&getChannel(material.specularIntensityMap.channel),transmissionMapUv:HAS_TRANSMISSIONMAP&&getChannel(material.transmissionMap.channel),thicknessMapUv:HAS_THICKNESSMAP&&getChannel(material.thicknessMap.channel),alphaMapUv:HAS_ALPHAMAP&&getChannel(material.alphaMap.channel),vertexTangents:!!geometry.attributes.tangent&&(HAS_NORMALMAP||HAS_ANISOTROPY),vertexColors:material.vertexColors,vertexAlphas:material.vertexColors===!0&&!!geometry.attributes.color&&geometry.attributes.color.itemSize===4,pointsUvs:object.isPoints===!0&&!!geometry.attributes.uv&&(HAS_MAP||HAS_ALPHAMAP),fog:!!fog,useFog:material.fog===!0,fogExp2:!!fog&&fog.isFogExp2,flatShading:material.flatShading===!0&&material.wireframe===!1,sizeAttenuation:material.sizeAttenuation===!0,logarithmicDepthBuffer,reverseDepthBuffer,skinning:object.isSkinnedMesh===!0,morphTargets:geometry.morphAttributes.position!==void 0,morphNormals:geometry.morphAttributes.normal!==void 0,morphColors:geometry.morphAttributes.color!==void 0,morphTargetsCount,morphTextureStride,numDirLights:lights.directional.length,numPointLights:lights.point.length,numSpotLights:lights.spot.length,numSpotLightMaps:lights.spotLightMap.length,numRectAreaLights:lights.rectArea.length,numHemiLights:lights.hemi.length,numDirLightShadows:lights.directionalShadowMap.length,numPointLightShadows:lights.pointShadowMap.length,numSpotLightShadows:lights.spotShadowMap.length,numSpotLightShadowsWithMaps:lights.numSpotLightShadowsWithMaps,numLightProbes:lights.numLightProbes,numClippingPlanes:clipping.numPlanes,numClipIntersection:clipping.numIntersection,dithering:material.dithering,shadowMapEnabled:renderer.shadowMap.enabled&&shadows.length>0,shadowMapType:renderer.shadowMap.type,toneMapping,decodeVideoTexture:HAS_MAP&&material.map.isVideoTexture===!0&&ColorManagement.getTransfer(material.map.colorSpace)===SRGBTransfer,decodeVideoTextureEmissive:HAS_EMISSIVEMAP&&material.emissiveMap.isVideoTexture===!0&&ColorManagement.getTransfer(material.emissiveMap.colorSpace)===SRGBTransfer,premultipliedAlpha:material.premultipliedAlpha,doubleSided:material.side===DoubleSide,flipSided:material.side===BackSide,useDepthPacking:material.depthPacking>=0,depthPacking:material.depthPacking||0,index0AttributeName:material.index0AttributeName,extensionClipCullDistance:HAS_EXTENSIONS&&material.extensions.clipCullDistance===!0&&extensions.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(HAS_EXTENSIONS&&material.extensions.multiDraw===!0||IS_BATCHEDMESH)&&extensions.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:extensions.has("KHR_parallel_shader_compile"),customProgramCacheKey:material.customProgramCacheKey()};return parameters.vertexUv1s=_activeChannels.has(1),parameters.vertexUv2s=_activeChannels.has(2),parameters.vertexUv3s=_activeChannels.has(3),_activeChannels.clear(),parameters}function getProgramCacheKey(parameters){const array=[];if(parameters.shaderID?array.push(parameters.shaderID):(array.push(parameters.customVertexShaderID),array.push(parameters.customFragmentShaderID)),parameters.defines!==void 0)for(const name in parameters.defines)array.push(name),array.push(parameters.defines[name]);return parameters.isRawShaderMaterial===!1&&(getProgramCacheKeyParameters(array,parameters),getProgramCacheKeyBooleans(array,parameters),array.push(renderer.outputColorSpace)),array.push(parameters.customProgramCacheKey),array.join()}function getProgramCacheKeyParameters(array,parameters){array.push(parameters.precision),array.push(parameters.outputColorSpace),array.push(parameters.envMapMode),array.push(parameters.envMapCubeUVHeight),array.push(parameters.mapUv),array.push(parameters.alphaMapUv),array.push(parameters.lightMapUv),array.push(parameters.aoMapUv),array.push(parameters.bumpMapUv),array.push(parameters.normalMapUv),array.push(parameters.displacementMapUv),array.push(parameters.emissiveMapUv),array.push(parameters.metalnessMapUv),array.push(parameters.roughnessMapUv),array.push(parameters.anisotropyMapUv),array.push(parameters.clearcoatMapUv),array.push(parameters.clearcoatNormalMapUv),array.push(parameters.clearcoatRoughnessMapUv),array.push(parameters.iridescenceMapUv),array.push(parameters.iridescenceThicknessMapUv),array.push(parameters.sheenColorMapUv),array.push(parameters.sheenRoughnessMapUv),array.push(parameters.specularMapUv),array.push(parameters.specularColorMapUv),array.push(parameters.specularIntensityMapUv),array.push(parameters.transmissionMapUv),array.push(parameters.thicknessMapUv),array.push(parameters.combine),array.push(parameters.fogExp2),array.push(parameters.sizeAttenuation),array.push(parameters.morphTargetsCount),array.push(parameters.morphAttributeCount),array.push(parameters.numDirLights),array.push(parameters.numPointLights),array.push(parameters.numSpotLights),array.push(parameters.numSpotLightMaps),array.push(parameters.numHemiLights),array.push(parameters.numRectAreaLights),array.push(parameters.numDirLightShadows),array.push(parameters.numPointLightShadows),array.push(parameters.numSpotLightShadows),array.push(parameters.numSpotLightShadowsWithMaps),array.push(parameters.numLightProbes),array.push(parameters.shadowMapType),array.push(parameters.toneMapping),array.push(parameters.numClippingPlanes),array.push(parameters.numClipIntersection),array.push(parameters.depthPacking)}function getProgramCacheKeyBooleans(array,parameters){_programLayers.disableAll(),parameters.supportsVertexTextures&&_programLayers.enable(0),parameters.instancing&&_programLayers.enable(1),parameters.instancingColor&&_programLayers.enable(2),parameters.instancingMorph&&_programLayers.enable(3),parameters.matcap&&_programLayers.enable(4),parameters.envMap&&_programLayers.enable(5),parameters.normalMapObjectSpace&&_programLayers.enable(6),parameters.normalMapTangentSpace&&_programLayers.enable(7),parameters.clearcoat&&_programLayers.enable(8),parameters.iridescence&&_programLayers.enable(9),parameters.alphaTest&&_programLayers.enable(10),parameters.vertexColors&&_programLayers.enable(11),parameters.vertexAlphas&&_programLayers.enable(12),parameters.vertexUv1s&&_programLayers.enable(13),parameters.vertexUv2s&&_programLayers.enable(14),parameters.vertexUv3s&&_programLayers.enable(15),parameters.vertexTangents&&_programLayers.enable(16),parameters.anisotropy&&_programLayers.enable(17),parameters.alphaHash&&_programLayers.enable(18),parameters.batching&&_programLayers.enable(19),parameters.dispersion&&_programLayers.enable(20),parameters.batchingColor&&_programLayers.enable(21),parameters.gradientMap&&_programLayers.enable(22),array.push(_programLayers.mask),_programLayers.disableAll(),parameters.fog&&_programLayers.enable(0),parameters.useFog&&_programLayers.enable(1),parameters.flatShading&&_programLayers.enable(2),parameters.logarithmicDepthBuffer&&_programLayers.enable(3),parameters.reverseDepthBuffer&&_programLayers.enable(4),parameters.skinning&&_programLayers.enable(5),parameters.morphTargets&&_programLayers.enable(6),parameters.morphNormals&&_programLayers.enable(7),parameters.morphColors&&_programLayers.enable(8),parameters.premultipliedAlpha&&_programLayers.enable(9),parameters.shadowMapEnabled&&_programLayers.enable(10),parameters.doubleSided&&_programLayers.enable(11),parameters.flipSided&&_programLayers.enable(12),parameters.useDepthPacking&&_programLayers.enable(13),parameters.dithering&&_programLayers.enable(14),parameters.transmission&&_programLayers.enable(15),parameters.sheen&&_programLayers.enable(16),parameters.opaque&&_programLayers.enable(17),parameters.pointsUvs&&_programLayers.enable(18),parameters.decodeVideoTexture&&_programLayers.enable(19),parameters.decodeVideoTextureEmissive&&_programLayers.enable(20),parameters.alphaToCoverage&&_programLayers.enable(21),array.push(_programLayers.mask)}function getUniforms(material){const shaderID=shaderIDs[material.type];let uniforms;if(shaderID){const shader=ShaderLib[shaderID];uniforms=UniformsUtils.clone(shader.uniforms)}else uniforms=material.uniforms;return uniforms}function acquireProgram(parameters,cacheKey){let program;for(let p2=0,pl=programs.length;p2<pl;p2++){const preexistingProgram=programs[p2];if(preexistingProgram.cacheKey===cacheKey){program=preexistingProgram,++program.usedTimes;break}}return program===void 0&&(program=new WebGLProgram(renderer,cacheKey,parameters,bindingStates),programs.push(program)),program}function releaseProgram(program){if(--program.usedTimes===0){const i=programs.indexOf(program);programs[i]=programs[programs.length-1],programs.pop(),program.destroy()}}function releaseShaderCache(material){_customShaders.remove(material)}function dispose(){_customShaders.dispose()}return{getParameters,getProgramCacheKey,getUniforms,acquireProgram,releaseProgram,releaseShaderCache,programs,dispose}}function WebGLProperties(){let properties=new WeakMap;function has(object){return properties.has(object)}function get(object){let map=properties.get(object);return map===void 0&&(map={},properties.set(object,map)),map}function remove(object){properties.delete(object)}function update(object,key,value){properties.get(object)[key]=value}function dispose(){properties=new WeakMap}return{has,get,remove,update,dispose}}function painterSortStable(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function reversePainterSortStable(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function WebGLRenderList(){const renderItems=[];let renderItemsIndex=0;const opaque=[],transmissive=[],transparent=[];function init(){renderItemsIndex=0,opaque.length=0,transmissive.length=0,transparent.length=0}function getNextRenderItem(object,geometry,material,groupOrder,z,group){let renderItem=renderItems[renderItemsIndex];return renderItem===void 0?(renderItem={id:object.id,object,geometry,material,groupOrder,renderOrder:object.renderOrder,z,group},renderItems[renderItemsIndex]=renderItem):(renderItem.id=object.id,renderItem.object=object,renderItem.geometry=geometry,renderItem.material=material,renderItem.groupOrder=groupOrder,renderItem.renderOrder=object.renderOrder,renderItem.z=z,renderItem.group=group),renderItemsIndex++,renderItem}function push(object,geometry,material,groupOrder,z,group){const renderItem=getNextRenderItem(object,geometry,material,groupOrder,z,group);material.transmission>0?transmissive.push(renderItem):material.transparent===!0?transparent.push(renderItem):opaque.push(renderItem)}function unshift(object,geometry,material,groupOrder,z,group){const renderItem=getNextRenderItem(object,geometry,material,groupOrder,z,group);material.transmission>0?transmissive.unshift(renderItem):material.transparent===!0?transparent.unshift(renderItem):opaque.unshift(renderItem)}function sort(customOpaqueSort,customTransparentSort){opaque.length>1&&opaque.sort(customOpaqueSort||painterSortStable),transmissive.length>1&&transmissive.sort(customTransparentSort||reversePainterSortStable),transparent.length>1&&transparent.sort(customTransparentSort||reversePainterSortStable)}function finish(){for(let i=renderItemsIndex,il=renderItems.length;i<il;i++){const renderItem=renderItems[i];if(renderItem.id===null)break;renderItem.id=null,renderItem.object=null,renderItem.geometry=null,renderItem.material=null,renderItem.group=null}}return{opaque,transmissive,transparent,init,push,unshift,finish,sort}}function WebGLRenderLists(){let lists=new WeakMap;function get(scene,renderCallDepth){const listArray=lists.get(scene);let list;return listArray===void 0?(list=new WebGLRenderList,lists.set(scene,[list])):renderCallDepth>=listArray.length?(list=new WebGLRenderList,listArray.push(list)):list=listArray[renderCallDepth],list}function dispose(){lists=new WeakMap}return{get,dispose}}function UniformsCache(){const lights={};return{get:function(light){if(lights[light.id]!==void 0)return lights[light.id];let uniforms;switch(light.type){case"DirectionalLight":uniforms={direction:new Vector3,color:new Color};break;case"SpotLight":uniforms={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":uniforms={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":uniforms={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":uniforms={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return lights[light.id]=uniforms,uniforms}}}function ShadowUniformsCache(){const lights={};return{get:function(light){if(lights[light.id]!==void 0)return lights[light.id];let uniforms;switch(light.type){case"DirectionalLight":uniforms={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":uniforms={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":uniforms={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return lights[light.id]=uniforms,uniforms}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(lightA,lightB){return(lightB.castShadow?2:0)-(lightA.castShadow?2:0)+(lightB.map?1:0)-(lightA.map?1:0)}function WebGLLights(extensions){const cache=new UniformsCache,shadowCache=ShadowUniformsCache(),state={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let i=0;i<9;i++)state.probe.push(new Vector3);const vector3=new Vector3,matrix4=new Matrix4,matrix42=new Matrix4;function setup(lights){let r=0,g=0,b=0;for(let i=0;i<9;i++)state.probe[i].set(0,0,0);let directionalLength=0,pointLength=0,spotLength=0,rectAreaLength=0,hemiLength=0,numDirectionalShadows=0,numPointShadows=0,numSpotShadows=0,numSpotMaps=0,numSpotShadowsWithMaps=0,numLightProbes=0;lights.sort(shadowCastingAndTexturingLightsFirst);for(let i=0,l=lights.length;i<l;i++){const light=lights[i],color=light.color,intensity=light.intensity,distance=light.distance,shadowMap=light.shadow&&light.shadow.map?light.shadow.map.texture:null;if(light.isAmbientLight)r+=color.r*intensity,g+=color.g*intensity,b+=color.b*intensity;else if(light.isLightProbe){for(let j=0;j<9;j++)state.probe[j].addScaledVector(light.sh.coefficients[j],intensity);numLightProbes++}else if(light.isDirectionalLight){const uniforms=cache.get(light);if(uniforms.color.copy(light.color).multiplyScalar(light.intensity),light.castShadow){const shadow=light.shadow,shadowUniforms=shadowCache.get(light);shadowUniforms.shadowIntensity=shadow.intensity,shadowUniforms.shadowBias=shadow.bias,shadowUniforms.shadowNormalBias=shadow.normalBias,shadowUniforms.shadowRadius=shadow.radius,shadowUniforms.shadowMapSize=shadow.mapSize,state.directionalShadow[directionalLength]=shadowUniforms,state.directionalShadowMap[directionalLength]=shadowMap,state.directionalShadowMatrix[directionalLength]=light.shadow.matrix,numDirectionalShadows++}state.directional[directionalLength]=uniforms,directionalLength++}else if(light.isSpotLight){const uniforms=cache.get(light);uniforms.position.setFromMatrixPosition(light.matrixWorld),uniforms.color.copy(color).multiplyScalar(intensity),uniforms.distance=distance,uniforms.coneCos=Math.cos(light.angle),uniforms.penumbraCos=Math.cos(light.angle*(1-light.penumbra)),uniforms.decay=light.decay,state.spot[spotLength]=uniforms;const shadow=light.shadow;if(light.map&&(state.spotLightMap[numSpotMaps]=light.map,numSpotMaps++,shadow.updateMatrices(light),light.castShadow&&numSpotShadowsWithMaps++),state.spotLightMatrix[spotLength]=shadow.matrix,light.castShadow){const shadowUniforms=shadowCache.get(light);shadowUniforms.shadowIntensity=shadow.intensity,shadowUniforms.shadowBias=shadow.bias,shadowUniforms.shadowNormalBias=shadow.normalBias,shadowUniforms.shadowRadius=shadow.radius,shadowUniforms.shadowMapSize=shadow.mapSize,state.spotShadow[spotLength]=shadowUniforms,state.spotShadowMap[spotLength]=shadowMap,numSpotShadows++}spotLength++}else if(light.isRectAreaLight){const uniforms=cache.get(light);uniforms.color.copy(color).multiplyScalar(intensity),uniforms.halfWidth.set(light.width*.5,0,0),uniforms.halfHeight.set(0,light.height*.5,0),state.rectArea[rectAreaLength]=uniforms,rectAreaLength++}else if(light.isPointLight){const uniforms=cache.get(light);if(uniforms.color.copy(light.color).multiplyScalar(light.intensity),uniforms.distance=light.distance,uniforms.decay=light.decay,light.castShadow){const shadow=light.shadow,shadowUniforms=shadowCache.get(light);shadowUniforms.shadowIntensity=shadow.intensity,shadowUniforms.shadowBias=shadow.bias,shadowUniforms.shadowNormalBias=shadow.normalBias,shadowUniforms.shadowRadius=shadow.radius,shadowUniforms.shadowMapSize=shadow.mapSize,shadowUniforms.shadowCameraNear=shadow.camera.near,shadowUniforms.shadowCameraFar=shadow.camera.far,state.pointShadow[pointLength]=shadowUniforms,state.pointShadowMap[pointLength]=shadowMap,state.pointShadowMatrix[pointLength]=light.shadow.matrix,numPointShadows++}state.point[pointLength]=uniforms,pointLength++}else if(light.isHemisphereLight){const uniforms=cache.get(light);uniforms.skyColor.copy(light.color).multiplyScalar(intensity),uniforms.groundColor.copy(light.groundColor).multiplyScalar(intensity),state.hemi[hemiLength]=uniforms,hemiLength++}}rectAreaLength>0&&(extensions.has("OES_texture_float_linear")===!0?(state.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,state.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(state.rectAreaLTC1=UniformsLib.LTC_HALF_1,state.rectAreaLTC2=UniformsLib.LTC_HALF_2)),state.ambient[0]=r,state.ambient[1]=g,state.ambient[2]=b;const hash=state.hash;(hash.directionalLength!==directionalLength||hash.pointLength!==pointLength||hash.spotLength!==spotLength||hash.rectAreaLength!==rectAreaLength||hash.hemiLength!==hemiLength||hash.numDirectionalShadows!==numDirectionalShadows||hash.numPointShadows!==numPointShadows||hash.numSpotShadows!==numSpotShadows||hash.numSpotMaps!==numSpotMaps||hash.numLightProbes!==numLightProbes)&&(state.directional.length=directionalLength,state.spot.length=spotLength,state.rectArea.length=rectAreaLength,state.point.length=pointLength,state.hemi.length=hemiLength,state.directionalShadow.length=numDirectionalShadows,state.directionalShadowMap.length=numDirectionalShadows,state.pointShadow.length=numPointShadows,state.pointShadowMap.length=numPointShadows,state.spotShadow.length=numSpotShadows,state.spotShadowMap.length=numSpotShadows,state.directionalShadowMatrix.length=numDirectionalShadows,state.pointShadowMatrix.length=numPointShadows,state.spotLightMatrix.length=numSpotShadows+numSpotMaps-numSpotShadowsWithMaps,state.spotLightMap.length=numSpotMaps,state.numSpotLightShadowsWithMaps=numSpotShadowsWithMaps,state.numLightProbes=numLightProbes,hash.directionalLength=directionalLength,hash.pointLength=pointLength,hash.spotLength=spotLength,hash.rectAreaLength=rectAreaLength,hash.hemiLength=hemiLength,hash.numDirectionalShadows=numDirectionalShadows,hash.numPointShadows=numPointShadows,hash.numSpotShadows=numSpotShadows,hash.numSpotMaps=numSpotMaps,hash.numLightProbes=numLightProbes,state.version=nextVersion++)}function setupView(lights,camera){let directionalLength=0,pointLength=0,spotLength=0,rectAreaLength=0,hemiLength=0;const viewMatrix=camera.matrixWorldInverse;for(let i=0,l=lights.length;i<l;i++){const light=lights[i];if(light.isDirectionalLight){const uniforms=state.directional[directionalLength];uniforms.direction.setFromMatrixPosition(light.matrixWorld),vector3.setFromMatrixPosition(light.target.matrixWorld),uniforms.direction.sub(vector3),uniforms.direction.transformDirection(viewMatrix),directionalLength++}else if(light.isSpotLight){const uniforms=state.spot[spotLength];uniforms.position.setFromMatrixPosition(light.matrixWorld),uniforms.position.applyMatrix4(viewMatrix),uniforms.direction.setFromMatrixPosition(light.matrixWorld),vector3.setFromMatrixPosition(light.target.matrixWorld),uniforms.direction.sub(vector3),uniforms.direction.transformDirection(viewMatrix),spotLength++}else if(light.isRectAreaLight){const uniforms=state.rectArea[rectAreaLength];uniforms.position.setFromMatrixPosition(light.matrixWorld),uniforms.position.applyMatrix4(viewMatrix),matrix42.identity(),matrix4.copy(light.matrixWorld),matrix4.premultiply(viewMatrix),matrix42.extractRotation(matrix4),uniforms.halfWidth.set(light.width*.5,0,0),uniforms.halfHeight.set(0,light.height*.5,0),uniforms.halfWidth.applyMatrix4(matrix42),uniforms.halfHeight.applyMatrix4(matrix42),rectAreaLength++}else if(light.isPointLight){const uniforms=state.point[pointLength];uniforms.position.setFromMatrixPosition(light.matrixWorld),uniforms.position.applyMatrix4(viewMatrix),pointLength++}else if(light.isHemisphereLight){const uniforms=state.hemi[hemiLength];uniforms.direction.setFromMatrixPosition(light.matrixWorld),uniforms.direction.transformDirection(viewMatrix),hemiLength++}}}return{setup,setupView,state}}function WebGLRenderState(extensions){const lights=new WebGLLights(extensions),lightsArray=[],shadowsArray=[];function init(camera){state.camera=camera,lightsArray.length=0,shadowsArray.length=0}function pushLight(light){lightsArray.push(light)}function pushShadow(shadowLight){shadowsArray.push(shadowLight)}function setupLights(){lights.setup(lightsArray)}function setupLightsView(camera){lights.setupView(lightsArray,camera)}const state={lightsArray,shadowsArray,camera:null,lights,transmissionRenderTarget:{}};return{init,state,setupLights,setupLightsView,pushLight,pushShadow}}function WebGLRenderStates(extensions){let renderStates=new WeakMap;function get(scene,renderCallDepth=0){const renderStateArray=renderStates.get(scene);let renderState;return renderStateArray===void 0?(renderState=new WebGLRenderState(extensions),renderStates.set(scene,[renderState])):renderCallDepth>=renderStateArray.length?(renderState=new WebGLRenderState(extensions),renderStateArray.push(renderState)):renderState=renderStateArray[renderCallDepth],renderState}function dispose(){renderStates=new WeakMap}return{get,dispose}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(renderer,objects,capabilities){let _frustum=new Frustum;const _shadowMapSize=new Vector2,_viewportSize=new Vector2,_viewport=new Vector4,_depthMaterial=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),_distanceMaterial=new MeshDistanceMaterial,_materialCache={},_maxTextureSize=capabilities.maxTextureSize,shadowSide={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},shadowMaterialVertical=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),shadowMaterialHorizontal=shadowMaterialVertical.clone();shadowMaterialHorizontal.defines.HORIZONTAL_PASS=1;const fullScreenTri=new BufferGeometry;fullScreenTri.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const fullScreenMesh=new Mesh(fullScreenTri,shadowMaterialVertical),scope=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let _previousType=this.type;this.render=function(lights,scene,camera){if(scope.enabled===!1||scope.autoUpdate===!1&&scope.needsUpdate===!1||lights.length===0)return;const currentRenderTarget=renderer.getRenderTarget(),activeCubeFace=renderer.getActiveCubeFace(),activeMipmapLevel=renderer.getActiveMipmapLevel(),_state=renderer.state;_state.setBlending(NoBlending),_state.buffers.color.setClear(1,1,1,1),_state.buffers.depth.setTest(!0),_state.setScissorTest(!1);const toVSM=_previousType!==VSMShadowMap&&this.type===VSMShadowMap,fromVSM=_previousType===VSMShadowMap&&this.type!==VSMShadowMap;for(let i=0,il=lights.length;i<il;i++){const light=lights[i],shadow=light.shadow;if(shadow===void 0){console.warn("THREE.WebGLShadowMap:",light,"has no shadow.");continue}if(shadow.autoUpdate===!1&&shadow.needsUpdate===!1)continue;_shadowMapSize.copy(shadow.mapSize);const shadowFrameExtents=shadow.getFrameExtents();if(_shadowMapSize.multiply(shadowFrameExtents),_viewportSize.copy(shadow.mapSize),(_shadowMapSize.x>_maxTextureSize||_shadowMapSize.y>_maxTextureSize)&&(_shadowMapSize.x>_maxTextureSize&&(_viewportSize.x=Math.floor(_maxTextureSize/shadowFrameExtents.x),_shadowMapSize.x=_viewportSize.x*shadowFrameExtents.x,shadow.mapSize.x=_viewportSize.x),_shadowMapSize.y>_maxTextureSize&&(_viewportSize.y=Math.floor(_maxTextureSize/shadowFrameExtents.y),_shadowMapSize.y=_viewportSize.y*shadowFrameExtents.y,shadow.mapSize.y=_viewportSize.y)),shadow.map===null||toVSM===!0||fromVSM===!0){const pars=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};shadow.map!==null&&shadow.map.dispose(),shadow.map=new WebGLRenderTarget(_shadowMapSize.x,_shadowMapSize.y,pars),shadow.map.texture.name=light.name+".shadowMap",shadow.camera.updateProjectionMatrix()}renderer.setRenderTarget(shadow.map),renderer.clear();const viewportCount=shadow.getViewportCount();for(let vp=0;vp<viewportCount;vp++){const viewport=shadow.getViewport(vp);_viewport.set(_viewportSize.x*viewport.x,_viewportSize.y*viewport.y,_viewportSize.x*viewport.z,_viewportSize.y*viewport.w),_state.viewport(_viewport),shadow.updateMatrices(light,vp),_frustum=shadow.getFrustum(),renderObject(scene,camera,shadow.camera,light,this.type)}shadow.isPointLightShadow!==!0&&this.type===VSMShadowMap&&VSMPass(shadow,camera),shadow.needsUpdate=!1}_previousType=this.type,scope.needsUpdate=!1,renderer.setRenderTarget(currentRenderTarget,activeCubeFace,activeMipmapLevel)};function VSMPass(shadow,camera){const geometry=objects.update(fullScreenMesh);shadowMaterialVertical.defines.VSM_SAMPLES!==shadow.blurSamples&&(shadowMaterialVertical.defines.VSM_SAMPLES=shadow.blurSamples,shadowMaterialHorizontal.defines.VSM_SAMPLES=shadow.blurSamples,shadowMaterialVertical.needsUpdate=!0,shadowMaterialHorizontal.needsUpdate=!0),shadow.mapPass===null&&(shadow.mapPass=new WebGLRenderTarget(_shadowMapSize.x,_shadowMapSize.y)),shadowMaterialVertical.uniforms.shadow_pass.value=shadow.map.texture,shadowMaterialVertical.uniforms.resolution.value=shadow.mapSize,shadowMaterialVertical.uniforms.radius.value=shadow.radius,renderer.setRenderTarget(shadow.mapPass),renderer.clear(),renderer.renderBufferDirect(camera,null,geometry,shadowMaterialVertical,fullScreenMesh,null),shadowMaterialHorizontal.uniforms.shadow_pass.value=shadow.mapPass.texture,shadowMaterialHorizontal.uniforms.resolution.value=shadow.mapSize,shadowMaterialHorizontal.uniforms.radius.value=shadow.radius,renderer.setRenderTarget(shadow.map),renderer.clear(),renderer.renderBufferDirect(camera,null,geometry,shadowMaterialHorizontal,fullScreenMesh,null)}function getDepthMaterial(object,material,light,type){let result=null;const customMaterial=light.isPointLight===!0?object.customDistanceMaterial:object.customDepthMaterial;if(customMaterial!==void 0)result=customMaterial;else if(result=light.isPointLight===!0?_distanceMaterial:_depthMaterial,renderer.localClippingEnabled&&material.clipShadows===!0&&Array.isArray(material.clippingPlanes)&&material.clippingPlanes.length!==0||material.displacementMap&&material.displacementScale!==0||material.alphaMap&&material.alphaTest>0||material.map&&material.alphaTest>0||material.alphaToCoverage===!0){const keyA=result.uuid,keyB=material.uuid;let materialsForVariant=_materialCache[keyA];materialsForVariant===void 0&&(materialsForVariant={},_materialCache[keyA]=materialsForVariant);let cachedMaterial=materialsForVariant[keyB];cachedMaterial===void 0&&(cachedMaterial=result.clone(),materialsForVariant[keyB]=cachedMaterial,material.addEventListener("dispose",onMaterialDispose)),result=cachedMaterial}if(result.visible=material.visible,result.wireframe=material.wireframe,type===VSMShadowMap?result.side=material.shadowSide!==null?material.shadowSide:material.side:result.side=material.shadowSide!==null?material.shadowSide:shadowSide[material.side],result.alphaMap=material.alphaMap,result.alphaTest=material.alphaToCoverage===!0?.5:material.alphaTest,result.map=material.map,result.clipShadows=material.clipShadows,result.clippingPlanes=material.clippingPlanes,result.clipIntersection=material.clipIntersection,result.displacementMap=material.displacementMap,result.displacementScale=material.displacementScale,result.displacementBias=material.displacementBias,result.wireframeLinewidth=material.wireframeLinewidth,result.linewidth=material.linewidth,light.isPointLight===!0&&result.isMeshDistanceMaterial===!0){const materialProperties=renderer.properties.get(result);materialProperties.light=light}return result}function renderObject(object,camera,shadowCamera,light,type){if(object.visible===!1)return;if(object.layers.test(camera.layers)&&(object.isMesh||object.isLine||object.isPoints)&&(object.castShadow||object.receiveShadow&&type===VSMShadowMap)&&(!object.frustumCulled||_frustum.intersectsObject(object))){object.modelViewMatrix.multiplyMatrices(shadowCamera.matrixWorldInverse,object.matrixWorld);const geometry=objects.update(object),material=object.material;if(Array.isArray(material)){const groups=geometry.groups;for(let k=0,kl=groups.length;k<kl;k++){const group=groups[k],groupMaterial=material[group.materialIndex];if(groupMaterial&&groupMaterial.visible){const depthMaterial=getDepthMaterial(object,groupMaterial,light,type);object.onBeforeShadow(renderer,object,camera,shadowCamera,geometry,depthMaterial,group),renderer.renderBufferDirect(shadowCamera,null,geometry,depthMaterial,object,group),object.onAfterShadow(renderer,object,camera,shadowCamera,geometry,depthMaterial,group)}}}else if(material.visible){const depthMaterial=getDepthMaterial(object,material,light,type);object.onBeforeShadow(renderer,object,camera,shadowCamera,geometry,depthMaterial,null),renderer.renderBufferDirect(shadowCamera,null,geometry,depthMaterial,object,null),object.onAfterShadow(renderer,object,camera,shadowCamera,geometry,depthMaterial,null)}}const children=object.children;for(let i=0,l=children.length;i<l;i++)renderObject(children[i],camera,shadowCamera,light,type)}function onMaterialDispose(event){event.target.removeEventListener("dispose",onMaterialDispose);for(const id in _materialCache){const cache=_materialCache[id],uuid=event.target.uuid;uuid in cache&&(cache[uuid].dispose(),delete cache[uuid])}}}const reversedFuncs={[NeverDepth]:AlwaysDepth,[LessDepth]:GreaterDepth,[EqualDepth]:NotEqualDepth,[LessEqualDepth]:GreaterEqualDepth,[AlwaysDepth]:NeverDepth,[GreaterDepth]:LessDepth,[NotEqualDepth]:EqualDepth,[GreaterEqualDepth]:LessEqualDepth};function WebGLState(gl,extensions){function ColorBuffer(){let locked=!1;const color=new Vector4;let currentColorMask=null;const currentColorClear=new Vector4(0,0,0,0);return{setMask:function(colorMask){currentColorMask!==colorMask&&!locked&&(gl.colorMask(colorMask,colorMask,colorMask,colorMask),currentColorMask=colorMask)},setLocked:function(lock){locked=lock},setClear:function(r,g,b,a,premultipliedAlpha){premultipliedAlpha===!0&&(r*=a,g*=a,b*=a),color.set(r,g,b,a),currentColorClear.equals(color)===!1&&(gl.clearColor(r,g,b,a),currentColorClear.copy(color))},reset:function(){locked=!1,currentColorMask=null,currentColorClear.set(-1,0,0,0)}}}function DepthBuffer(){let locked=!1,currentReversed=!1,currentDepthMask=null,currentDepthFunc=null,currentDepthClear=null;return{setReversed:function(reversed){if(currentReversed!==reversed){const ext=extensions.get("EXT_clip_control");reversed?ext.clipControlEXT(ext.LOWER_LEFT_EXT,ext.ZERO_TO_ONE_EXT):ext.clipControlEXT(ext.LOWER_LEFT_EXT,ext.NEGATIVE_ONE_TO_ONE_EXT),currentReversed=reversed;const oldDepth=currentDepthClear;currentDepthClear=null,this.setClear(oldDepth)}},getReversed:function(){return currentReversed},setTest:function(depthTest){depthTest?enable(gl.DEPTH_TEST):disable(gl.DEPTH_TEST)},setMask:function(depthMask){currentDepthMask!==depthMask&&!locked&&(gl.depthMask(depthMask),currentDepthMask=depthMask)},setFunc:function(depthFunc){if(currentReversed&&(depthFunc=reversedFuncs[depthFunc]),currentDepthFunc!==depthFunc){switch(depthFunc){case NeverDepth:gl.depthFunc(gl.NEVER);break;case AlwaysDepth:gl.depthFunc(gl.ALWAYS);break;case LessDepth:gl.depthFunc(gl.LESS);break;case LessEqualDepth:gl.depthFunc(gl.LEQUAL);break;case EqualDepth:gl.depthFunc(gl.EQUAL);break;case GreaterEqualDepth:gl.depthFunc(gl.GEQUAL);break;case GreaterDepth:gl.depthFunc(gl.GREATER);break;case NotEqualDepth:gl.depthFunc(gl.NOTEQUAL);break;default:gl.depthFunc(gl.LEQUAL)}currentDepthFunc=depthFunc}},setLocked:function(lock){locked=lock},setClear:function(depth){currentDepthClear!==depth&&(currentReversed&&(depth=1-depth),gl.clearDepth(depth),currentDepthClear=depth)},reset:function(){locked=!1,currentDepthMask=null,currentDepthFunc=null,currentDepthClear=null,currentReversed=!1}}}function StencilBuffer(){let locked=!1,currentStencilMask=null,currentStencilFunc=null,currentStencilRef=null,currentStencilFuncMask=null,currentStencilFail=null,currentStencilZFail=null,currentStencilZPass=null,currentStencilClear=null;return{setTest:function(stencilTest){locked||(stencilTest?enable(gl.STENCIL_TEST):disable(gl.STENCIL_TEST))},setMask:function(stencilMask){currentStencilMask!==stencilMask&&!locked&&(gl.stencilMask(stencilMask),currentStencilMask=stencilMask)},setFunc:function(stencilFunc,stencilRef,stencilMask){(currentStencilFunc!==stencilFunc||currentStencilRef!==stencilRef||currentStencilFuncMask!==stencilMask)&&(gl.stencilFunc(stencilFunc,stencilRef,stencilMask),currentStencilFunc=stencilFunc,currentStencilRef=stencilRef,currentStencilFuncMask=stencilMask)},setOp:function(stencilFail,stencilZFail,stencilZPass){(currentStencilFail!==stencilFail||currentStencilZFail!==stencilZFail||currentStencilZPass!==stencilZPass)&&(gl.stencilOp(stencilFail,stencilZFail,stencilZPass),currentStencilFail=stencilFail,currentStencilZFail=stencilZFail,currentStencilZPass=stencilZPass)},setLocked:function(lock){locked=lock},setClear:function(stencil){currentStencilClear!==stencil&&(gl.clearStencil(stencil),currentStencilClear=stencil)},reset:function(){locked=!1,currentStencilMask=null,currentStencilFunc=null,currentStencilRef=null,currentStencilFuncMask=null,currentStencilFail=null,currentStencilZFail=null,currentStencilZPass=null,currentStencilClear=null}}}const colorBuffer=new ColorBuffer,depthBuffer=new DepthBuffer,stencilBuffer=new StencilBuffer,uboBindings=new WeakMap,uboProgramMap=new WeakMap;let enabledCapabilities={},currentBoundFramebuffers={},currentDrawbuffers=new WeakMap,defaultDrawbuffers=[],currentProgram=null,currentBlendingEnabled=!1,currentBlending=null,currentBlendEquation=null,currentBlendSrc=null,currentBlendDst=null,currentBlendEquationAlpha=null,currentBlendSrcAlpha=null,currentBlendDstAlpha=null,currentBlendColor=new Color(0,0,0),currentBlendAlpha=0,currentPremultipledAlpha=!1,currentFlipSided=null,currentCullFace=null,currentLineWidth=null,currentPolygonOffsetFactor=null,currentPolygonOffsetUnits=null;const maxTextures=gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lineWidthAvailable=!1,version=0;const glVersion=gl.getParameter(gl.VERSION);glVersion.indexOf("WebGL")!==-1?(version=parseFloat(/^WebGL (\d)/.exec(glVersion)[1]),lineWidthAvailable=version>=1):glVersion.indexOf("OpenGL ES")!==-1&&(version=parseFloat(/^OpenGL ES (\d)/.exec(glVersion)[1]),lineWidthAvailable=version>=2);let currentTextureSlot=null,currentBoundTextures={};const scissorParam=gl.getParameter(gl.SCISSOR_BOX),viewportParam=gl.getParameter(gl.VIEWPORT),currentScissor=new Vector4().fromArray(scissorParam),currentViewport=new Vector4().fromArray(viewportParam);function createTexture(type,target,count,dimensions){const data=new Uint8Array(4),texture=gl.createTexture();gl.bindTexture(type,texture),gl.texParameteri(type,gl.TEXTURE_MIN_FILTER,gl.NEAREST),gl.texParameteri(type,gl.TEXTURE_MAG_FILTER,gl.NEAREST);for(let i=0;i<count;i++)type===gl.TEXTURE_3D||type===gl.TEXTURE_2D_ARRAY?gl.texImage3D(target,0,gl.RGBA,1,1,dimensions,0,gl.RGBA,gl.UNSIGNED_BYTE,data):gl.texImage2D(target+i,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,data);return texture}const emptyTextures={};emptyTextures[gl.TEXTURE_2D]=createTexture(gl.TEXTURE_2D,gl.TEXTURE_2D,1),emptyTextures[gl.TEXTURE_CUBE_MAP]=createTexture(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_CUBE_MAP_POSITIVE_X,6),emptyTextures[gl.TEXTURE_2D_ARRAY]=createTexture(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_2D_ARRAY,1,1),emptyTextures[gl.TEXTURE_3D]=createTexture(gl.TEXTURE_3D,gl.TEXTURE_3D,1,1),colorBuffer.setClear(0,0,0,1),depthBuffer.setClear(1),stencilBuffer.setClear(0),enable(gl.DEPTH_TEST),depthBuffer.setFunc(LessEqualDepth),setFlipSided(!1),setCullFace(CullFaceBack),enable(gl.CULL_FACE),setBlending(NoBlending);function enable(id){enabledCapabilities[id]!==!0&&(gl.enable(id),enabledCapabilities[id]=!0)}function disable(id){enabledCapabilities[id]!==!1&&(gl.disable(id),enabledCapabilities[id]=!1)}function bindFramebuffer(target,framebuffer){return currentBoundFramebuffers[target]!==framebuffer?(gl.bindFramebuffer(target,framebuffer),currentBoundFramebuffers[target]=framebuffer,target===gl.DRAW_FRAMEBUFFER&&(currentBoundFramebuffers[gl.FRAMEBUFFER]=framebuffer),target===gl.FRAMEBUFFER&&(currentBoundFramebuffers[gl.DRAW_FRAMEBUFFER]=framebuffer),!0):!1}function drawBuffers(renderTarget,framebuffer){let drawBuffers2=defaultDrawbuffers,needsUpdate=!1;if(renderTarget){drawBuffers2=currentDrawbuffers.get(framebuffer),drawBuffers2===void 0&&(drawBuffers2=[],currentDrawbuffers.set(framebuffer,drawBuffers2));const textures=renderTarget.textures;if(drawBuffers2.length!==textures.length||drawBuffers2[0]!==gl.COLOR_ATTACHMENT0){for(let i=0,il=textures.length;i<il;i++)drawBuffers2[i]=gl.COLOR_ATTACHMENT0+i;drawBuffers2.length=textures.length,needsUpdate=!0}}else drawBuffers2[0]!==gl.BACK&&(drawBuffers2[0]=gl.BACK,needsUpdate=!0);needsUpdate&&gl.drawBuffers(drawBuffers2)}function useProgram(program){return currentProgram!==program?(gl.useProgram(program),currentProgram=program,!0):!1}const equationToGL={[AddEquation]:gl.FUNC_ADD,[SubtractEquation]:gl.FUNC_SUBTRACT,[ReverseSubtractEquation]:gl.FUNC_REVERSE_SUBTRACT};equationToGL[MinEquation]=gl.MIN,equationToGL[MaxEquation]=gl.MAX;const factorToGL={[ZeroFactor]:gl.ZERO,[OneFactor]:gl.ONE,[SrcColorFactor]:gl.SRC_COLOR,[SrcAlphaFactor]:gl.SRC_ALPHA,[SrcAlphaSaturateFactor]:gl.SRC_ALPHA_SATURATE,[DstColorFactor]:gl.DST_COLOR,[DstAlphaFactor]:gl.DST_ALPHA,[OneMinusSrcColorFactor]:gl.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:gl.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:gl.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:gl.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:gl.CONSTANT_COLOR,[OneMinusConstantColorFactor]:gl.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:gl.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:gl.ONE_MINUS_CONSTANT_ALPHA};function setBlending(blending,blendEquation,blendSrc,blendDst,blendEquationAlpha,blendSrcAlpha,blendDstAlpha,blendColor,blendAlpha,premultipliedAlpha){if(blending===NoBlending){currentBlendingEnabled===!0&&(disable(gl.BLEND),currentBlendingEnabled=!1);return}if(currentBlendingEnabled===!1&&(enable(gl.BLEND),currentBlendingEnabled=!0),blending!==CustomBlending){if(blending!==currentBlending||premultipliedAlpha!==currentPremultipledAlpha){if((currentBlendEquation!==AddEquation||currentBlendEquationAlpha!==AddEquation)&&(gl.blendEquation(gl.FUNC_ADD),currentBlendEquation=AddEquation,currentBlendEquationAlpha=AddEquation),premultipliedAlpha)switch(blending){case NormalBlending:gl.blendFuncSeparate(gl.ONE,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:gl.blendFunc(gl.ONE,gl.ONE);break;case SubtractiveBlending:gl.blendFuncSeparate(gl.ZERO,gl.ONE_MINUS_SRC_COLOR,gl.ZERO,gl.ONE);break;case MultiplyBlending:gl.blendFuncSeparate(gl.DST_COLOR,gl.ONE_MINUS_SRC_ALPHA,gl.ZERO,gl.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",blending);break}else switch(blending){case NormalBlending:gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE,gl.ONE,gl.ONE);break;case SubtractiveBlending:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MultiplyBlending:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",blending);break}currentBlendSrc=null,currentBlendDst=null,currentBlendSrcAlpha=null,currentBlendDstAlpha=null,currentBlendColor.set(0,0,0),currentBlendAlpha=0,currentBlending=blending,currentPremultipledAlpha=premultipliedAlpha}return}blendEquationAlpha=blendEquationAlpha||blendEquation,blendSrcAlpha=blendSrcAlpha||blendSrc,blendDstAlpha=blendDstAlpha||blendDst,(blendEquation!==currentBlendEquation||blendEquationAlpha!==currentBlendEquationAlpha)&&(gl.blendEquationSeparate(equationToGL[blendEquation],equationToGL[blendEquationAlpha]),currentBlendEquation=blendEquation,currentBlendEquationAlpha=blendEquationAlpha),(blendSrc!==currentBlendSrc||blendDst!==currentBlendDst||blendSrcAlpha!==currentBlendSrcAlpha||blendDstAlpha!==currentBlendDstAlpha)&&(gl.blendFuncSeparate(factorToGL[blendSrc],factorToGL[blendDst],factorToGL[blendSrcAlpha],factorToGL[blendDstAlpha]),currentBlendSrc=blendSrc,currentBlendDst=blendDst,currentBlendSrcAlpha=blendSrcAlpha,currentBlendDstAlpha=blendDstAlpha),(blendColor.equals(currentBlendColor)===!1||blendAlpha!==currentBlendAlpha)&&(gl.blendColor(blendColor.r,blendColor.g,blendColor.b,blendAlpha),currentBlendColor.copy(blendColor),currentBlendAlpha=blendAlpha),currentBlending=blending,currentPremultipledAlpha=!1}function setMaterial(material,frontFaceCW){material.side===DoubleSide?disable(gl.CULL_FACE):enable(gl.CULL_FACE);let flipSided=material.side===BackSide;frontFaceCW&&(flipSided=!flipSided),setFlipSided(flipSided),material.blending===NormalBlending&&material.transparent===!1?setBlending(NoBlending):setBlending(material.blending,material.blendEquation,material.blendSrc,material.blendDst,material.blendEquationAlpha,material.blendSrcAlpha,material.blendDstAlpha,material.blendColor,material.blendAlpha,material.premultipliedAlpha),depthBuffer.setFunc(material.depthFunc),depthBuffer.setTest(material.depthTest),depthBuffer.setMask(material.depthWrite),colorBuffer.setMask(material.colorWrite);const stencilWrite=material.stencilWrite;stencilBuffer.setTest(stencilWrite),stencilWrite&&(stencilBuffer.setMask(material.stencilWriteMask),stencilBuffer.setFunc(material.stencilFunc,material.stencilRef,material.stencilFuncMask),stencilBuffer.setOp(material.stencilFail,material.stencilZFail,material.stencilZPass)),setPolygonOffset(material.polygonOffset,material.polygonOffsetFactor,material.polygonOffsetUnits),material.alphaToCoverage===!0?enable(gl.SAMPLE_ALPHA_TO_COVERAGE):disable(gl.SAMPLE_ALPHA_TO_COVERAGE)}function setFlipSided(flipSided){currentFlipSided!==flipSided&&(flipSided?gl.frontFace(gl.CW):gl.frontFace(gl.CCW),currentFlipSided=flipSided)}function setCullFace(cullFace){cullFace!==CullFaceNone?(enable(gl.CULL_FACE),cullFace!==currentCullFace&&(cullFace===CullFaceBack?gl.cullFace(gl.BACK):cullFace===CullFaceFront?gl.cullFace(gl.FRONT):gl.cullFace(gl.FRONT_AND_BACK))):disable(gl.CULL_FACE),currentCullFace=cullFace}function setLineWidth(width){width!==currentLineWidth&&(lineWidthAvailable&&gl.lineWidth(width),currentLineWidth=width)}function setPolygonOffset(polygonOffset,factor,units){polygonOffset?(enable(gl.POLYGON_OFFSET_FILL),(currentPolygonOffsetFactor!==factor||currentPolygonOffsetUnits!==units)&&(gl.polygonOffset(factor,units),currentPolygonOffsetFactor=factor,currentPolygonOffsetUnits=units)):disable(gl.POLYGON_OFFSET_FILL)}function setScissorTest(scissorTest){scissorTest?enable(gl.SCISSOR_TEST):disable(gl.SCISSOR_TEST)}function activeTexture(webglSlot){webglSlot===void 0&&(webglSlot=gl.TEXTURE0+maxTextures-1),currentTextureSlot!==webglSlot&&(gl.activeTexture(webglSlot),currentTextureSlot=webglSlot)}function bindTexture(webglType,webglTexture,webglSlot){webglSlot===void 0&&(currentTextureSlot===null?webglSlot=gl.TEXTURE0+maxTextures-1:webglSlot=currentTextureSlot);let boundTexture=currentBoundTextures[webglSlot];boundTexture===void 0&&(boundTexture={type:void 0,texture:void 0},currentBoundTextures[webglSlot]=boundTexture),(boundTexture.type!==webglType||boundTexture.texture!==webglTexture)&&(currentTextureSlot!==webglSlot&&(gl.activeTexture(webglSlot),currentTextureSlot=webglSlot),gl.bindTexture(webglType,webglTexture||emptyTextures[webglType]),boundTexture.type=webglType,boundTexture.texture=webglTexture)}function unbindTexture(){const boundTexture=currentBoundTextures[currentTextureSlot];boundTexture!==void 0&&boundTexture.type!==void 0&&(gl.bindTexture(boundTexture.type,null),boundTexture.type=void 0,boundTexture.texture=void 0)}function compressedTexImage2D(){try{gl.compressedTexImage2D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function compressedTexImage3D(){try{gl.compressedTexImage3D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function texSubImage2D(){try{gl.texSubImage2D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function texSubImage3D(){try{gl.texSubImage3D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function compressedTexSubImage2D(){try{gl.compressedTexSubImage2D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function compressedTexSubImage3D(){try{gl.compressedTexSubImage3D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function texStorage2D(){try{gl.texStorage2D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function texStorage3D(){try{gl.texStorage3D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function texImage2D(){try{gl.texImage2D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function texImage3D(){try{gl.texImage3D(...arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function scissor(scissor2){currentScissor.equals(scissor2)===!1&&(gl.scissor(scissor2.x,scissor2.y,scissor2.z,scissor2.w),currentScissor.copy(scissor2))}function viewport(viewport2){currentViewport.equals(viewport2)===!1&&(gl.viewport(viewport2.x,viewport2.y,viewport2.z,viewport2.w),currentViewport.copy(viewport2))}function updateUBOMapping(uniformsGroup,program){let mapping=uboProgramMap.get(program);mapping===void 0&&(mapping=new WeakMap,uboProgramMap.set(program,mapping));let blockIndex=mapping.get(uniformsGroup);blockIndex===void 0&&(blockIndex=gl.getUniformBlockIndex(program,uniformsGroup.name),mapping.set(uniformsGroup,blockIndex))}function uniformBlockBinding(uniformsGroup,program){const blockIndex=uboProgramMap.get(program).get(uniformsGroup);uboBindings.get(program)!==blockIndex&&(gl.uniformBlockBinding(program,blockIndex,uniformsGroup.__bindingPointIndex),uboBindings.set(program,blockIndex))}function reset(){gl.disable(gl.BLEND),gl.disable(gl.CULL_FACE),gl.disable(gl.DEPTH_TEST),gl.disable(gl.POLYGON_OFFSET_FILL),gl.disable(gl.SCISSOR_TEST),gl.disable(gl.STENCIL_TEST),gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE),gl.blendEquation(gl.FUNC_ADD),gl.blendFunc(gl.ONE,gl.ZERO),gl.blendFuncSeparate(gl.ONE,gl.ZERO,gl.ONE,gl.ZERO),gl.blendColor(0,0,0,0),gl.colorMask(!0,!0,!0,!0),gl.clearColor(0,0,0,0),gl.depthMask(!0),gl.depthFunc(gl.LESS),depthBuffer.setReversed(!1),gl.clearDepth(1),gl.stencilMask(4294967295),gl.stencilFunc(gl.ALWAYS,0,4294967295),gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP),gl.clearStencil(0),gl.cullFace(gl.BACK),gl.frontFace(gl.CCW),gl.polygonOffset(0,0),gl.activeTexture(gl.TEXTURE0),gl.bindFramebuffer(gl.FRAMEBUFFER,null),gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER,null),gl.bindFramebuffer(gl.READ_FRAMEBUFFER,null),gl.useProgram(null),gl.lineWidth(1),gl.scissor(0,0,gl.canvas.width,gl.canvas.height),gl.viewport(0,0,gl.canvas.width,gl.canvas.height),enabledCapabilities={},currentTextureSlot=null,currentBoundTextures={},currentBoundFramebuffers={},currentDrawbuffers=new WeakMap,defaultDrawbuffers=[],currentProgram=null,currentBlendingEnabled=!1,currentBlending=null,currentBlendEquation=null,currentBlendSrc=null,currentBlendDst=null,currentBlendEquationAlpha=null,currentBlendSrcAlpha=null,currentBlendDstAlpha=null,currentBlendColor=new Color(0,0,0),currentBlendAlpha=0,currentPremultipledAlpha=!1,currentFlipSided=null,currentCullFace=null,currentLineWidth=null,currentPolygonOffsetFactor=null,currentPolygonOffsetUnits=null,currentScissor.set(0,0,gl.canvas.width,gl.canvas.height),currentViewport.set(0,0,gl.canvas.width,gl.canvas.height),colorBuffer.reset(),depthBuffer.reset(),stencilBuffer.reset()}return{buffers:{color:colorBuffer,depth:depthBuffer,stencil:stencilBuffer},enable,disable,bindFramebuffer,drawBuffers,useProgram,setBlending,setMaterial,setFlipSided,setCullFace,setLineWidth,setPolygonOffset,setScissorTest,activeTexture,bindTexture,unbindTexture,compressedTexImage2D,compressedTexImage3D,texImage2D,texImage3D,updateUBOMapping,uniformBlockBinding,texStorage2D,texStorage3D,texSubImage2D,texSubImage3D,compressedTexSubImage2D,compressedTexSubImage3D,scissor,viewport,reset}}function WebGLTextures(_gl,extensions,state,properties,capabilities,utils,info){const multisampledRTTExt=extensions.has("WEBGL_multisampled_render_to_texture")?extensions.get("WEBGL_multisampled_render_to_texture"):null,supportsInvalidateFramebuffer=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_imageDimensions=new Vector2,_videoTextures=new WeakMap;let _canvas2;const _sources=new WeakMap;let useOffscreenCanvas=!1;try{useOffscreenCanvas=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function createCanvas(width,height){return useOffscreenCanvas?new OffscreenCanvas(width,height):createElementNS("canvas")}function resizeImage(image,needsNewCanvas,maxSize){let scale=1;const dimensions=getDimensions(image);if((dimensions.width>maxSize||dimensions.height>maxSize)&&(scale=maxSize/Math.max(dimensions.width,dimensions.height)),scale<1)if(typeof HTMLImageElement<"u"&&image instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&image instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&image instanceof ImageBitmap||typeof VideoFrame<"u"&&image instanceof VideoFrame){const width=Math.floor(scale*dimensions.width),height=Math.floor(scale*dimensions.height);_canvas2===void 0&&(_canvas2=createCanvas(width,height));const canvas=needsNewCanvas?createCanvas(width,height):_canvas2;return canvas.width=width,canvas.height=height,canvas.getContext("2d").drawImage(image,0,0,width,height),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dimensions.width+"x"+dimensions.height+") to ("+width+"x"+height+")."),canvas}else return"data"in image&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dimensions.width+"x"+dimensions.height+")."),image;return image}function textureNeedsGenerateMipmaps(texture){return texture.generateMipmaps}function generateMipmap(target){_gl.generateMipmap(target)}function getTargetType(texture){return texture.isWebGLCubeRenderTarget?_gl.TEXTURE_CUBE_MAP:texture.isWebGL3DRenderTarget?_gl.TEXTURE_3D:texture.isWebGLArrayRenderTarget||texture.isCompressedArrayTexture?_gl.TEXTURE_2D_ARRAY:_gl.TEXTURE_2D}function getInternalFormat(internalFormatName,glFormat,glType,colorSpace,forceLinearTransfer=!1){if(internalFormatName!==null){if(_gl[internalFormatName]!==void 0)return _gl[internalFormatName];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+internalFormatName+"'")}let internalFormat=glFormat;if(glFormat===_gl.RED&&(glType===_gl.FLOAT&&(internalFormat=_gl.R32F),glType===_gl.HALF_FLOAT&&(internalFormat=_gl.R16F),glType===_gl.UNSIGNED_BYTE&&(internalFormat=_gl.R8)),glFormat===_gl.RED_INTEGER&&(glType===_gl.UNSIGNED_BYTE&&(internalFormat=_gl.R8UI),glType===_gl.UNSIGNED_SHORT&&(internalFormat=_gl.R16UI),glType===_gl.UNSIGNED_INT&&(internalFormat=_gl.R32UI),glType===_gl.BYTE&&(internalFormat=_gl.R8I),glType===_gl.SHORT&&(internalFormat=_gl.R16I),glType===_gl.INT&&(internalFormat=_gl.R32I)),glFormat===_gl.RG&&(glType===_gl.FLOAT&&(internalFormat=_gl.RG32F),glType===_gl.HALF_FLOAT&&(internalFormat=_gl.RG16F),glType===_gl.UNSIGNED_BYTE&&(internalFormat=_gl.RG8)),glFormat===_gl.RG_INTEGER&&(glType===_gl.UNSIGNED_BYTE&&(internalFormat=_gl.RG8UI),glType===_gl.UNSIGNED_SHORT&&(internalFormat=_gl.RG16UI),glType===_gl.UNSIGNED_INT&&(internalFormat=_gl.RG32UI),glType===_gl.BYTE&&(internalFormat=_gl.RG8I),glType===_gl.SHORT&&(internalFormat=_gl.RG16I),glType===_gl.INT&&(internalFormat=_gl.RG32I)),glFormat===_gl.RGB_INTEGER&&(glType===_gl.UNSIGNED_BYTE&&(internalFormat=_gl.RGB8UI),glType===_gl.UNSIGNED_SHORT&&(internalFormat=_gl.RGB16UI),glType===_gl.UNSIGNED_INT&&(internalFormat=_gl.RGB32UI),glType===_gl.BYTE&&(internalFormat=_gl.RGB8I),glType===_gl.SHORT&&(internalFormat=_gl.RGB16I),glType===_gl.INT&&(internalFormat=_gl.RGB32I)),glFormat===_gl.RGBA_INTEGER&&(glType===_gl.UNSIGNED_BYTE&&(internalFormat=_gl.RGBA8UI),glType===_gl.UNSIGNED_SHORT&&(internalFormat=_gl.RGBA16UI),glType===_gl.UNSIGNED_INT&&(internalFormat=_gl.RGBA32UI),glType===_gl.BYTE&&(internalFormat=_gl.RGBA8I),glType===_gl.SHORT&&(internalFormat=_gl.RGBA16I),glType===_gl.INT&&(internalFormat=_gl.RGBA32I)),glFormat===_gl.RGB&&glType===_gl.UNSIGNED_INT_5_9_9_9_REV&&(internalFormat=_gl.RGB9_E5),glFormat===_gl.RGBA){const transfer=forceLinearTransfer?LinearTransfer:ColorManagement.getTransfer(colorSpace);glType===_gl.FLOAT&&(internalFormat=_gl.RGBA32F),glType===_gl.HALF_FLOAT&&(internalFormat=_gl.RGBA16F),glType===_gl.UNSIGNED_BYTE&&(internalFormat=transfer===SRGBTransfer?_gl.SRGB8_ALPHA8:_gl.RGBA8),glType===_gl.UNSIGNED_SHORT_4_4_4_4&&(internalFormat=_gl.RGBA4),glType===_gl.UNSIGNED_SHORT_5_5_5_1&&(internalFormat=_gl.RGB5_A1)}return(internalFormat===_gl.R16F||internalFormat===_gl.R32F||internalFormat===_gl.RG16F||internalFormat===_gl.RG32F||internalFormat===_gl.RGBA16F||internalFormat===_gl.RGBA32F)&&extensions.get("EXT_color_buffer_float"),internalFormat}function getInternalDepthFormat(useStencil,depthType){let glInternalFormat;return useStencil?depthType===null||depthType===UnsignedIntType||depthType===UnsignedInt248Type?glInternalFormat=_gl.DEPTH24_STENCIL8:depthType===FloatType?glInternalFormat=_gl.DEPTH32F_STENCIL8:depthType===UnsignedShortType&&(glInternalFormat=_gl.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):depthType===null||depthType===UnsignedIntType||depthType===UnsignedInt248Type?glInternalFormat=_gl.DEPTH_COMPONENT24:depthType===FloatType?glInternalFormat=_gl.DEPTH_COMPONENT32F:depthType===UnsignedShortType&&(glInternalFormat=_gl.DEPTH_COMPONENT16),glInternalFormat}function getMipLevels(texture,image){return textureNeedsGenerateMipmaps(texture)===!0||texture.isFramebufferTexture&&texture.minFilter!==NearestFilter&&texture.minFilter!==LinearFilter?Math.log2(Math.max(image.width,image.height))+1:texture.mipmaps!==void 0&&texture.mipmaps.length>0?texture.mipmaps.length:texture.isCompressedTexture&&Array.isArray(texture.image)?image.mipmaps.length:1}function onTextureDispose(event){const texture=event.target;texture.removeEventListener("dispose",onTextureDispose),deallocateTexture(texture),texture.isVideoTexture&&_videoTextures.delete(texture)}function onRenderTargetDispose(event){const renderTarget=event.target;renderTarget.removeEventListener("dispose",onRenderTargetDispose),deallocateRenderTarget(renderTarget)}function deallocateTexture(texture){const textureProperties=properties.get(texture);if(textureProperties.__webglInit===void 0)return;const source=texture.source,webglTextures=_sources.get(source);if(webglTextures){const webglTexture=webglTextures[textureProperties.__cacheKey];webglTexture.usedTimes--,webglTexture.usedTimes===0&&deleteTexture(texture),Object.keys(webglTextures).length===0&&_sources.delete(source)}properties.remove(texture)}function deleteTexture(texture){const textureProperties=properties.get(texture);_gl.deleteTexture(textureProperties.__webglTexture);const source=texture.source,webglTextures=_sources.get(source);delete webglTextures[textureProperties.__cacheKey],info.memory.textures--}function deallocateRenderTarget(renderTarget){const renderTargetProperties=properties.get(renderTarget);if(renderTarget.depthTexture&&(renderTarget.depthTexture.dispose(),properties.remove(renderTarget.depthTexture)),renderTarget.isWebGLCubeRenderTarget)for(let i=0;i<6;i++){if(Array.isArray(renderTargetProperties.__webglFramebuffer[i]))for(let level=0;level<renderTargetProperties.__webglFramebuffer[i].length;level++)_gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[i][level]);else _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[i]);renderTargetProperties.__webglDepthbuffer&&_gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer[i])}else{if(Array.isArray(renderTargetProperties.__webglFramebuffer))for(let level=0;level<renderTargetProperties.__webglFramebuffer.length;level++)_gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[level]);else _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer);if(renderTargetProperties.__webglDepthbuffer&&_gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer),renderTargetProperties.__webglMultisampledFramebuffer&&_gl.deleteFramebuffer(renderTargetProperties.__webglMultisampledFramebuffer),renderTargetProperties.__webglColorRenderbuffer)for(let i=0;i<renderTargetProperties.__webglColorRenderbuffer.length;i++)renderTargetProperties.__webglColorRenderbuffer[i]&&_gl.deleteRenderbuffer(renderTargetProperties.__webglColorRenderbuffer[i]);renderTargetProperties.__webglDepthRenderbuffer&&_gl.deleteRenderbuffer(renderTargetProperties.__webglDepthRenderbuffer)}const textures=renderTarget.textures;for(let i=0,il=textures.length;i<il;i++){const attachmentProperties=properties.get(textures[i]);attachmentProperties.__webglTexture&&(_gl.deleteTexture(attachmentProperties.__webglTexture),info.memory.textures--),properties.remove(textures[i])}properties.remove(renderTarget)}let textureUnits=0;function resetTextureUnits(){textureUnits=0}function allocateTextureUnit(){const textureUnit=textureUnits;return textureUnit>=capabilities.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+textureUnit+" texture units while this GPU supports only "+capabilities.maxTextures),textureUnits+=1,textureUnit}function getTextureCacheKey(texture){const array=[];return array.push(texture.wrapS),array.push(texture.wrapT),array.push(texture.wrapR||0),array.push(texture.magFilter),array.push(texture.minFilter),array.push(texture.anisotropy),array.push(texture.internalFormat),array.push(texture.format),array.push(texture.type),array.push(texture.generateMipmaps),array.push(texture.premultiplyAlpha),array.push(texture.flipY),array.push(texture.unpackAlignment),array.push(texture.colorSpace),array.join()}function setTexture2D(texture,slot){const textureProperties=properties.get(texture);if(texture.isVideoTexture&&updateVideoTexture(texture),texture.isRenderTargetTexture===!1&&texture.version>0&&textureProperties.__version!==texture.version){const image=texture.image;if(image===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(image.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{uploadTexture(textureProperties,texture,slot);return}}state.bindTexture(_gl.TEXTURE_2D,textureProperties.__webglTexture,_gl.TEXTURE0+slot)}function setTexture2DArray(texture,slot){const textureProperties=properties.get(texture);if(texture.version>0&&textureProperties.__version!==texture.version){uploadTexture(textureProperties,texture,slot);return}state.bindTexture(_gl.TEXTURE_2D_ARRAY,textureProperties.__webglTexture,_gl.TEXTURE0+slot)}function setTexture3D(texture,slot){const textureProperties=properties.get(texture);if(texture.version>0&&textureProperties.__version!==texture.version){uploadTexture(textureProperties,texture,slot);return}state.bindTexture(_gl.TEXTURE_3D,textureProperties.__webglTexture,_gl.TEXTURE0+slot)}function setTextureCube(texture,slot){const textureProperties=properties.get(texture);if(texture.version>0&&textureProperties.__version!==texture.version){uploadCubeTexture(textureProperties,texture,slot);return}state.bindTexture(_gl.TEXTURE_CUBE_MAP,textureProperties.__webglTexture,_gl.TEXTURE0+slot)}const wrappingToGL={[RepeatWrapping]:_gl.REPEAT,[ClampToEdgeWrapping]:_gl.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:_gl.MIRRORED_REPEAT},filterToGL={[NearestFilter]:_gl.NEAREST,[NearestMipmapNearestFilter]:_gl.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:_gl.NEAREST_MIPMAP_LINEAR,[LinearFilter]:_gl.LINEAR,[LinearMipmapNearestFilter]:_gl.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:_gl.LINEAR_MIPMAP_LINEAR},compareToGL={[NeverCompare]:_gl.NEVER,[AlwaysCompare]:_gl.ALWAYS,[LessCompare]:_gl.LESS,[LessEqualCompare]:_gl.LEQUAL,[EqualCompare]:_gl.EQUAL,[GreaterEqualCompare]:_gl.GEQUAL,[GreaterCompare]:_gl.GREATER,[NotEqualCompare]:_gl.NOTEQUAL};function setTextureParameters(textureType,texture){if(texture.type===FloatType&&extensions.has("OES_texture_float_linear")===!1&&(texture.magFilter===LinearFilter||texture.magFilter===LinearMipmapNearestFilter||texture.magFilter===NearestMipmapLinearFilter||texture.magFilter===LinearMipmapLinearFilter||texture.minFilter===LinearFilter||texture.minFilter===LinearMipmapNearestFilter||texture.minFilter===NearestMipmapLinearFilter||texture.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),_gl.texParameteri(textureType,_gl.TEXTURE_WRAP_S,wrappingToGL[texture.wrapS]),_gl.texParameteri(textureType,_gl.TEXTURE_WRAP_T,wrappingToGL[texture.wrapT]),(textureType===_gl.TEXTURE_3D||textureType===_gl.TEXTURE_2D_ARRAY)&&_gl.texParameteri(textureType,_gl.TEXTURE_WRAP_R,wrappingToGL[texture.wrapR]),_gl.texParameteri(textureType,_gl.TEXTURE_MAG_FILTER,filterToGL[texture.magFilter]),_gl.texParameteri(textureType,_gl.TEXTURE_MIN_FILTER,filterToGL[texture.minFilter]),texture.compareFunction&&(_gl.texParameteri(textureType,_gl.TEXTURE_COMPARE_MODE,_gl.COMPARE_REF_TO_TEXTURE),_gl.texParameteri(textureType,_gl.TEXTURE_COMPARE_FUNC,compareToGL[texture.compareFunction])),extensions.has("EXT_texture_filter_anisotropic")===!0){if(texture.magFilter===NearestFilter||texture.minFilter!==NearestMipmapLinearFilter&&texture.minFilter!==LinearMipmapLinearFilter||texture.type===FloatType&&extensions.has("OES_texture_float_linear")===!1)return;if(texture.anisotropy>1||properties.get(texture).__currentAnisotropy){const extension=extensions.get("EXT_texture_filter_anisotropic");_gl.texParameterf(textureType,extension.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(texture.anisotropy,capabilities.getMaxAnisotropy())),properties.get(texture).__currentAnisotropy=texture.anisotropy}}}function initTexture(textureProperties,texture){let forceUpload=!1;textureProperties.__webglInit===void 0&&(textureProperties.__webglInit=!0,texture.addEventListener("dispose",onTextureDispose));const source=texture.source;let webglTextures=_sources.get(source);webglTextures===void 0&&(webglTextures={},_sources.set(source,webglTextures));const textureCacheKey=getTextureCacheKey(texture);if(textureCacheKey!==textureProperties.__cacheKey){webglTextures[textureCacheKey]===void 0&&(webglTextures[textureCacheKey]={texture:_gl.createTexture(),usedTimes:0},info.memory.textures++,forceUpload=!0),webglTextures[textureCacheKey].usedTimes++;const webglTexture=webglTextures[textureProperties.__cacheKey];webglTexture!==void 0&&(webglTextures[textureProperties.__cacheKey].usedTimes--,webglTexture.usedTimes===0&&deleteTexture(texture)),textureProperties.__cacheKey=textureCacheKey,textureProperties.__webglTexture=webglTextures[textureCacheKey].texture}return forceUpload}function getRow(index,rowLength,componentStride){return Math.floor(Math.floor(index/componentStride)/rowLength)}function updateTexture(texture,image,glFormat,glType){const updateRanges=texture.updateRanges;if(updateRanges.length===0)state.texSubImage2D(_gl.TEXTURE_2D,0,0,0,image.width,image.height,glFormat,glType,image.data);else{updateRanges.sort((a,b)=>a.start-b.start);let mergeIndex=0;for(let i=1;i<updateRanges.length;i++){const previousRange=updateRanges[mergeIndex],range=updateRanges[i],previousEnd=previousRange.start+previousRange.count,currentRow=getRow(range.start,image.width,4),previousRow=getRow(previousRange.start,image.width,4);range.start<=previousEnd+1&&currentRow===previousRow&&getRow(range.start+range.count-1,image.width,4)===currentRow?previousRange.count=Math.max(previousRange.count,range.start+range.count-previousRange.start):(++mergeIndex,updateRanges[mergeIndex]=range)}updateRanges.length=mergeIndex+1;const currentUnpackRowLen=_gl.getParameter(_gl.UNPACK_ROW_LENGTH),currentUnpackSkipPixels=_gl.getParameter(_gl.UNPACK_SKIP_PIXELS),currentUnpackSkipRows=_gl.getParameter(_gl.UNPACK_SKIP_ROWS);_gl.pixelStorei(_gl.UNPACK_ROW_LENGTH,image.width);for(let i=0,l=updateRanges.length;i<l;i++){const range=updateRanges[i],pixelStart=Math.floor(range.start/4),pixelCount=Math.ceil(range.count/4),x=pixelStart%image.width,y=Math.floor(pixelStart/image.width),width=pixelCount,height=1;_gl.pixelStorei(_gl.UNPACK_SKIP_PIXELS,x),_gl.pixelStorei(_gl.UNPACK_SKIP_ROWS,y),state.texSubImage2D(_gl.TEXTURE_2D,0,x,y,width,height,glFormat,glType,image.data)}texture.clearUpdateRanges(),_gl.pixelStorei(_gl.UNPACK_ROW_LENGTH,currentUnpackRowLen),_gl.pixelStorei(_gl.UNPACK_SKIP_PIXELS,currentUnpackSkipPixels),_gl.pixelStorei(_gl.UNPACK_SKIP_ROWS,currentUnpackSkipRows)}}function uploadTexture(textureProperties,texture,slot){let textureType=_gl.TEXTURE_2D;(texture.isDataArrayTexture||texture.isCompressedArrayTexture)&&(textureType=_gl.TEXTURE_2D_ARRAY),texture.isData3DTexture&&(textureType=_gl.TEXTURE_3D);const forceUpload=initTexture(textureProperties,texture),source=texture.source;state.bindTexture(textureType,textureProperties.__webglTexture,_gl.TEXTURE0+slot);const sourceProperties=properties.get(source);if(source.version!==sourceProperties.__version||forceUpload===!0){state.activeTexture(_gl.TEXTURE0+slot);const workingPrimaries=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),texturePrimaries=texture.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(texture.colorSpace),unpackConversion=texture.colorSpace===NoColorSpace||workingPrimaries===texturePrimaries?_gl.NONE:_gl.BROWSER_DEFAULT_WEBGL;_gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL,texture.flipY),_gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,texture.premultiplyAlpha),_gl.pixelStorei(_gl.UNPACK_ALIGNMENT,texture.unpackAlignment),_gl.pixelStorei(_gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,unpackConversion);let image=resizeImage(texture.image,!1,capabilities.maxTextureSize);image=verifyColorSpace(texture,image);const glFormat=utils.convert(texture.format,texture.colorSpace),glType=utils.convert(texture.type);let glInternalFormat=getInternalFormat(texture.internalFormat,glFormat,glType,texture.colorSpace,texture.isVideoTexture);setTextureParameters(textureType,texture);let mipmap;const mipmaps=texture.mipmaps,useTexStorage=texture.isVideoTexture!==!0,allocateMemory=sourceProperties.__version===void 0||forceUpload===!0,dataReady=source.dataReady,levels=getMipLevels(texture,image);if(texture.isDepthTexture)glInternalFormat=getInternalDepthFormat(texture.format===DepthStencilFormat,texture.type),allocateMemory&&(useTexStorage?state.texStorage2D(_gl.TEXTURE_2D,1,glInternalFormat,image.width,image.height):state.texImage2D(_gl.TEXTURE_2D,0,glInternalFormat,image.width,image.height,0,glFormat,glType,null));else if(texture.isDataTexture)if(mipmaps.length>0){useTexStorage&&allocateMemory&&state.texStorage2D(_gl.TEXTURE_2D,levels,glInternalFormat,mipmaps[0].width,mipmaps[0].height);for(let i=0,il=mipmaps.length;i<il;i++)mipmap=mipmaps[i],useTexStorage?dataReady&&state.texSubImage2D(_gl.TEXTURE_2D,i,0,0,mipmap.width,mipmap.height,glFormat,glType,mipmap.data):state.texImage2D(_gl.TEXTURE_2D,i,glInternalFormat,mipmap.width,mipmap.height,0,glFormat,glType,mipmap.data);texture.generateMipmaps=!1}else useTexStorage?(allocateMemory&&state.texStorage2D(_gl.TEXTURE_2D,levels,glInternalFormat,image.width,image.height),dataReady&&updateTexture(texture,image,glFormat,glType)):state.texImage2D(_gl.TEXTURE_2D,0,glInternalFormat,image.width,image.height,0,glFormat,glType,image.data);else if(texture.isCompressedTexture)if(texture.isCompressedArrayTexture){useTexStorage&&allocateMemory&&state.texStorage3D(_gl.TEXTURE_2D_ARRAY,levels,glInternalFormat,mipmaps[0].width,mipmaps[0].height,image.depth);for(let i=0,il=mipmaps.length;i<il;i++)if(mipmap=mipmaps[i],texture.format!==RGBAFormat)if(glFormat!==null)if(useTexStorage){if(dataReady)if(texture.layerUpdates.size>0){const layerByteLength=getByteLength(mipmap.width,mipmap.height,texture.format,texture.type);for(const layerIndex of texture.layerUpdates){const layerData=mipmap.data.subarray(layerIndex*layerByteLength/mipmap.data.BYTES_PER_ELEMENT,(layerIndex+1)*layerByteLength/mipmap.data.BYTES_PER_ELEMENT);state.compressedTexSubImage3D(_gl.TEXTURE_2D_ARRAY,i,0,0,layerIndex,mipmap.width,mipmap.height,1,glFormat,layerData)}texture.clearLayerUpdates()}else state.compressedTexSubImage3D(_gl.TEXTURE_2D_ARRAY,i,0,0,0,mipmap.width,mipmap.height,image.depth,glFormat,mipmap.data)}else state.compressedTexImage3D(_gl.TEXTURE_2D_ARRAY,i,glInternalFormat,mipmap.width,mipmap.height,image.depth,0,mipmap.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else useTexStorage?dataReady&&state.texSubImage3D(_gl.TEXTURE_2D_ARRAY,i,0,0,0,mipmap.width,mipmap.height,image.depth,glFormat,glType,mipmap.data):state.texImage3D(_gl.TEXTURE_2D_ARRAY,i,glInternalFormat,mipmap.width,mipmap.height,image.depth,0,glFormat,glType,mipmap.data)}else{useTexStorage&&allocateMemory&&state.texStorage2D(_gl.TEXTURE_2D,levels,glInternalFormat,mipmaps[0].width,mipmaps[0].height);for(let i=0,il=mipmaps.length;i<il;i++)mipmap=mipmaps[i],texture.format!==RGBAFormat?glFormat!==null?useTexStorage?dataReady&&state.compressedTexSubImage2D(_gl.TEXTURE_2D,i,0,0,mipmap.width,mipmap.height,glFormat,mipmap.data):state.compressedTexImage2D(_gl.TEXTURE_2D,i,glInternalFormat,mipmap.width,mipmap.height,0,mipmap.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):useTexStorage?dataReady&&state.texSubImage2D(_gl.TEXTURE_2D,i,0,0,mipmap.width,mipmap.height,glFormat,glType,mipmap.data):state.texImage2D(_gl.TEXTURE_2D,i,glInternalFormat,mipmap.width,mipmap.height,0,glFormat,glType,mipmap.data)}else if(texture.isDataArrayTexture)if(useTexStorage){if(allocateMemory&&state.texStorage3D(_gl.TEXTURE_2D_ARRAY,levels,glInternalFormat,image.width,image.height,image.depth),dataReady)if(texture.layerUpdates.size>0){const layerByteLength=getByteLength(image.width,image.height,texture.format,texture.type);for(const layerIndex of texture.layerUpdates){const layerData=image.data.subarray(layerIndex*layerByteLength/image.data.BYTES_PER_ELEMENT,(layerIndex+1)*layerByteLength/image.data.BYTES_PER_ELEMENT);state.texSubImage3D(_gl.TEXTURE_2D_ARRAY,0,0,0,layerIndex,image.width,image.height,1,glFormat,glType,layerData)}texture.clearLayerUpdates()}else state.texSubImage3D(_gl.TEXTURE_2D_ARRAY,0,0,0,0,image.width,image.height,image.depth,glFormat,glType,image.data)}else state.texImage3D(_gl.TEXTURE_2D_ARRAY,0,glInternalFormat,image.width,image.height,image.depth,0,glFormat,glType,image.data);else if(texture.isData3DTexture)useTexStorage?(allocateMemory&&state.texStorage3D(_gl.TEXTURE_3D,levels,glInternalFormat,image.width,image.height,image.depth),dataReady&&state.texSubImage3D(_gl.TEXTURE_3D,0,0,0,0,image.width,image.height,image.depth,glFormat,glType,image.data)):state.texImage3D(_gl.TEXTURE_3D,0,glInternalFormat,image.width,image.height,image.depth,0,glFormat,glType,image.data);else if(texture.isFramebufferTexture){if(allocateMemory)if(useTexStorage)state.texStorage2D(_gl.TEXTURE_2D,levels,glInternalFormat,image.width,image.height);else{let width=image.width,height=image.height;for(let i=0;i<levels;i++)state.texImage2D(_gl.TEXTURE_2D,i,glInternalFormat,width,height,0,glFormat,glType,null),width>>=1,height>>=1}}else if(mipmaps.length>0){if(useTexStorage&&allocateMemory){const dimensions=getDimensions(mipmaps[0]);state.texStorage2D(_gl.TEXTURE_2D,levels,glInternalFormat,dimensions.width,dimensions.height)}for(let i=0,il=mipmaps.length;i<il;i++)mipmap=mipmaps[i],useTexStorage?dataReady&&state.texSubImage2D(_gl.TEXTURE_2D,i,0,0,glFormat,glType,mipmap):state.texImage2D(_gl.TEXTURE_2D,i,glInternalFormat,glFormat,glType,mipmap);texture.generateMipmaps=!1}else if(useTexStorage){if(allocateMemory){const dimensions=getDimensions(image);state.texStorage2D(_gl.TEXTURE_2D,levels,glInternalFormat,dimensions.width,dimensions.height)}dataReady&&state.texSubImage2D(_gl.TEXTURE_2D,0,0,0,glFormat,glType,image)}else state.texImage2D(_gl.TEXTURE_2D,0,glInternalFormat,glFormat,glType,image);textureNeedsGenerateMipmaps(texture)&&generateMipmap(textureType),sourceProperties.__version=source.version,texture.onUpdate&&texture.onUpdate(texture)}textureProperties.__version=texture.version}function uploadCubeTexture(textureProperties,texture,slot){if(texture.image.length!==6)return;const forceUpload=initTexture(textureProperties,texture),source=texture.source;state.bindTexture(_gl.TEXTURE_CUBE_MAP,textureProperties.__webglTexture,_gl.TEXTURE0+slot);const sourceProperties=properties.get(source);if(source.version!==sourceProperties.__version||forceUpload===!0){state.activeTexture(_gl.TEXTURE0+slot);const workingPrimaries=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),texturePrimaries=texture.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(texture.colorSpace),unpackConversion=texture.colorSpace===NoColorSpace||workingPrimaries===texturePrimaries?_gl.NONE:_gl.BROWSER_DEFAULT_WEBGL;_gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL,texture.flipY),_gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,texture.premultiplyAlpha),_gl.pixelStorei(_gl.UNPACK_ALIGNMENT,texture.unpackAlignment),_gl.pixelStorei(_gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,unpackConversion);const isCompressed=texture.isCompressedTexture||texture.image[0].isCompressedTexture,isDataTexture=texture.image[0]&&texture.image[0].isDataTexture,cubeImage=[];for(let i=0;i<6;i++)!isCompressed&&!isDataTexture?cubeImage[i]=resizeImage(texture.image[i],!0,capabilities.maxCubemapSize):cubeImage[i]=isDataTexture?texture.image[i].image:texture.image[i],cubeImage[i]=verifyColorSpace(texture,cubeImage[i]);const image=cubeImage[0],glFormat=utils.convert(texture.format,texture.colorSpace),glType=utils.convert(texture.type),glInternalFormat=getInternalFormat(texture.internalFormat,glFormat,glType,texture.colorSpace),useTexStorage=texture.isVideoTexture!==!0,allocateMemory=sourceProperties.__version===void 0||forceUpload===!0,dataReady=source.dataReady;let levels=getMipLevels(texture,image);setTextureParameters(_gl.TEXTURE_CUBE_MAP,texture);let mipmaps;if(isCompressed){useTexStorage&&allocateMemory&&state.texStorage2D(_gl.TEXTURE_CUBE_MAP,levels,glInternalFormat,image.width,image.height);for(let i=0;i<6;i++){mipmaps=cubeImage[i].mipmaps;for(let j=0;j<mipmaps.length;j++){const mipmap=mipmaps[j];texture.format!==RGBAFormat?glFormat!==null?useTexStorage?dataReady&&state.compressedTexSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j,0,0,mipmap.width,mipmap.height,glFormat,mipmap.data):state.compressedTexImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j,glInternalFormat,mipmap.width,mipmap.height,0,mipmap.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):useTexStorage?dataReady&&state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j,0,0,mipmap.width,mipmap.height,glFormat,glType,mipmap.data):state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j,glInternalFormat,mipmap.width,mipmap.height,0,glFormat,glType,mipmap.data)}}}else{if(mipmaps=texture.mipmaps,useTexStorage&&allocateMemory){mipmaps.length>0&&levels++;const dimensions=getDimensions(cubeImage[0]);state.texStorage2D(_gl.TEXTURE_CUBE_MAP,levels,glInternalFormat,dimensions.width,dimensions.height)}for(let i=0;i<6;i++)if(isDataTexture){useTexStorage?dataReady&&state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,cubeImage[i].width,cubeImage[i].height,glFormat,glType,cubeImage[i].data):state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,glInternalFormat,cubeImage[i].width,cubeImage[i].height,0,glFormat,glType,cubeImage[i].data);for(let j=0;j<mipmaps.length;j++){const mipmapImage=mipmaps[j].image[i].image;useTexStorage?dataReady&&state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j+1,0,0,mipmapImage.width,mipmapImage.height,glFormat,glType,mipmapImage.data):state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j+1,glInternalFormat,mipmapImage.width,mipmapImage.height,0,glFormat,glType,mipmapImage.data)}}else{useTexStorage?dataReady&&state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,glFormat,glType,cubeImage[i]):state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,glInternalFormat,glFormat,glType,cubeImage[i]);for(let j=0;j<mipmaps.length;j++){const mipmap=mipmaps[j];useTexStorage?dataReady&&state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j+1,0,0,glFormat,glType,mipmap.image[i]):state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j+1,glInternalFormat,glFormat,glType,mipmap.image[i])}}}textureNeedsGenerateMipmaps(texture)&&generateMipmap(_gl.TEXTURE_CUBE_MAP),sourceProperties.__version=source.version,texture.onUpdate&&texture.onUpdate(texture)}textureProperties.__version=texture.version}function setupFrameBufferTexture(framebuffer,renderTarget,texture,attachment,textureTarget,level){const glFormat=utils.convert(texture.format,texture.colorSpace),glType=utils.convert(texture.type),glInternalFormat=getInternalFormat(texture.internalFormat,glFormat,glType,texture.colorSpace),renderTargetProperties=properties.get(renderTarget),textureProperties=properties.get(texture);if(textureProperties.__renderTarget=renderTarget,!renderTargetProperties.__hasExternalTextures){const width=Math.max(1,renderTarget.width>>level),height=Math.max(1,renderTarget.height>>level);textureTarget===_gl.TEXTURE_3D||textureTarget===_gl.TEXTURE_2D_ARRAY?state.texImage3D(textureTarget,level,glInternalFormat,width,height,renderTarget.depth,0,glFormat,glType,null):state.texImage2D(textureTarget,level,glInternalFormat,width,height,0,glFormat,glType,null)}state.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer),useMultisampledRTT(renderTarget)?multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER,attachment,textureTarget,textureProperties.__webglTexture,0,getRenderTargetSamples(renderTarget)):(textureTarget===_gl.TEXTURE_2D||textureTarget>=_gl.TEXTURE_CUBE_MAP_POSITIVE_X&&textureTarget<=_gl.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&_gl.framebufferTexture2D(_gl.FRAMEBUFFER,attachment,textureTarget,textureProperties.__webglTexture,level),state.bindFramebuffer(_gl.FRAMEBUFFER,null)}function setupRenderBufferStorage(renderbuffer,renderTarget,isMultisample){if(_gl.bindRenderbuffer(_gl.RENDERBUFFER,renderbuffer),renderTarget.depthBuffer){const depthTexture=renderTarget.depthTexture,depthType=depthTexture&&depthTexture.isDepthTexture?depthTexture.type:null,glInternalFormat=getInternalDepthFormat(renderTarget.stencilBuffer,depthType),glAttachmentType=renderTarget.stencilBuffer?_gl.DEPTH_STENCIL_ATTACHMENT:_gl.DEPTH_ATTACHMENT,samples=getRenderTargetSamples(renderTarget);useMultisampledRTT(renderTarget)?multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER,samples,glInternalFormat,renderTarget.width,renderTarget.height):isMultisample?_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER,samples,glInternalFormat,renderTarget.width,renderTarget.height):_gl.renderbufferStorage(_gl.RENDERBUFFER,glInternalFormat,renderTarget.width,renderTarget.height),_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,glAttachmentType,_gl.RENDERBUFFER,renderbuffer)}else{const textures=renderTarget.textures;for(let i=0;i<textures.length;i++){const texture=textures[i],glFormat=utils.convert(texture.format,texture.colorSpace),glType=utils.convert(texture.type),glInternalFormat=getInternalFormat(texture.internalFormat,glFormat,glType,texture.colorSpace),samples=getRenderTargetSamples(renderTarget);isMultisample&&useMultisampledRTT(renderTarget)===!1?_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER,samples,glInternalFormat,renderTarget.width,renderTarget.height):useMultisampledRTT(renderTarget)?multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER,samples,glInternalFormat,renderTarget.width,renderTarget.height):_gl.renderbufferStorage(_gl.RENDERBUFFER,glInternalFormat,renderTarget.width,renderTarget.height)}}_gl.bindRenderbuffer(_gl.RENDERBUFFER,null)}function setupDepthTexture(framebuffer,renderTarget){if(renderTarget&&renderTarget.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(state.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer),!(renderTarget.depthTexture&&renderTarget.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const textureProperties=properties.get(renderTarget.depthTexture);textureProperties.__renderTarget=renderTarget,(!textureProperties.__webglTexture||renderTarget.depthTexture.image.width!==renderTarget.width||renderTarget.depthTexture.image.height!==renderTarget.height)&&(renderTarget.depthTexture.image.width=renderTarget.width,renderTarget.depthTexture.image.height=renderTarget.height,renderTarget.depthTexture.needsUpdate=!0),setTexture2D(renderTarget.depthTexture,0);const webglDepthTexture=textureProperties.__webglTexture,samples=getRenderTargetSamples(renderTarget);if(renderTarget.depthTexture.format===DepthFormat)useMultisampledRTT(renderTarget)?multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER,_gl.DEPTH_ATTACHMENT,_gl.TEXTURE_2D,webglDepthTexture,0,samples):_gl.framebufferTexture2D(_gl.FRAMEBUFFER,_gl.DEPTH_ATTACHMENT,_gl.TEXTURE_2D,webglDepthTexture,0);else if(renderTarget.depthTexture.format===DepthStencilFormat)useMultisampledRTT(renderTarget)?multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER,_gl.DEPTH_STENCIL_ATTACHMENT,_gl.TEXTURE_2D,webglDepthTexture,0,samples):_gl.framebufferTexture2D(_gl.FRAMEBUFFER,_gl.DEPTH_STENCIL_ATTACHMENT,_gl.TEXTURE_2D,webglDepthTexture,0);else throw new Error("Unknown depthTexture format")}function setupDepthRenderbuffer(renderTarget){const renderTargetProperties=properties.get(renderTarget),isCube=renderTarget.isWebGLCubeRenderTarget===!0;if(renderTargetProperties.__boundDepthTexture!==renderTarget.depthTexture){const depthTexture=renderTarget.depthTexture;if(renderTargetProperties.__depthDisposeCallback&&renderTargetProperties.__depthDisposeCallback(),depthTexture){const disposeEvent=()=>{delete renderTargetProperties.__boundDepthTexture,delete renderTargetProperties.__depthDisposeCallback,depthTexture.removeEventListener("dispose",disposeEvent)};depthTexture.addEventListener("dispose",disposeEvent),renderTargetProperties.__depthDisposeCallback=disposeEvent}renderTargetProperties.__boundDepthTexture=depthTexture}if(renderTarget.depthTexture&&!renderTargetProperties.__autoAllocateDepthBuffer){if(isCube)throw new Error("target.depthTexture not supported in Cube render targets");const mipmaps=renderTarget.texture.mipmaps;mipmaps&&mipmaps.length>0?setupDepthTexture(renderTargetProperties.__webglFramebuffer[0],renderTarget):setupDepthTexture(renderTargetProperties.__webglFramebuffer,renderTarget)}else if(isCube){renderTargetProperties.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(state.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglFramebuffer[i]),renderTargetProperties.__webglDepthbuffer[i]===void 0)renderTargetProperties.__webglDepthbuffer[i]=_gl.createRenderbuffer(),setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer[i],renderTarget,!1);else{const glAttachmentType=renderTarget.stencilBuffer?_gl.DEPTH_STENCIL_ATTACHMENT:_gl.DEPTH_ATTACHMENT,renderbuffer=renderTargetProperties.__webglDepthbuffer[i];_gl.bindRenderbuffer(_gl.RENDERBUFFER,renderbuffer),_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,glAttachmentType,_gl.RENDERBUFFER,renderbuffer)}}else{const mipmaps=renderTarget.texture.mipmaps;if(mipmaps&&mipmaps.length>0?state.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglFramebuffer[0]):state.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglFramebuffer),renderTargetProperties.__webglDepthbuffer===void 0)renderTargetProperties.__webglDepthbuffer=_gl.createRenderbuffer(),setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer,renderTarget,!1);else{const glAttachmentType=renderTarget.stencilBuffer?_gl.DEPTH_STENCIL_ATTACHMENT:_gl.DEPTH_ATTACHMENT,renderbuffer=renderTargetProperties.__webglDepthbuffer;_gl.bindRenderbuffer(_gl.RENDERBUFFER,renderbuffer),_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,glAttachmentType,_gl.RENDERBUFFER,renderbuffer)}}state.bindFramebuffer(_gl.FRAMEBUFFER,null)}function rebindTextures(renderTarget,colorTexture,depthTexture){const renderTargetProperties=properties.get(renderTarget);colorTexture!==void 0&&setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer,renderTarget,renderTarget.texture,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_2D,0),depthTexture!==void 0&&setupDepthRenderbuffer(renderTarget)}function setupRenderTarget(renderTarget){const texture=renderTarget.texture,renderTargetProperties=properties.get(renderTarget),textureProperties=properties.get(texture);renderTarget.addEventListener("dispose",onRenderTargetDispose);const textures=renderTarget.textures,isCube=renderTarget.isWebGLCubeRenderTarget===!0,isMultipleRenderTargets=textures.length>1;if(isMultipleRenderTargets||(textureProperties.__webglTexture===void 0&&(textureProperties.__webglTexture=_gl.createTexture()),textureProperties.__version=texture.version,info.memory.textures++),isCube){renderTargetProperties.__webglFramebuffer=[];for(let i=0;i<6;i++)if(texture.mipmaps&&texture.mipmaps.length>0){renderTargetProperties.__webglFramebuffer[i]=[];for(let level=0;level<texture.mipmaps.length;level++)renderTargetProperties.__webglFramebuffer[i][level]=_gl.createFramebuffer()}else renderTargetProperties.__webglFramebuffer[i]=_gl.createFramebuffer()}else{if(texture.mipmaps&&texture.mipmaps.length>0){renderTargetProperties.__webglFramebuffer=[];for(let level=0;level<texture.mipmaps.length;level++)renderTargetProperties.__webglFramebuffer[level]=_gl.createFramebuffer()}else renderTargetProperties.__webglFramebuffer=_gl.createFramebuffer();if(isMultipleRenderTargets)for(let i=0,il=textures.length;i<il;i++){const attachmentProperties=properties.get(textures[i]);attachmentProperties.__webglTexture===void 0&&(attachmentProperties.__webglTexture=_gl.createTexture(),info.memory.textures++)}if(renderTarget.samples>0&&useMultisampledRTT(renderTarget)===!1){renderTargetProperties.__webglMultisampledFramebuffer=_gl.createFramebuffer(),renderTargetProperties.__webglColorRenderbuffer=[],state.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglMultisampledFramebuffer);for(let i=0;i<textures.length;i++){const texture2=textures[i];renderTargetProperties.__webglColorRenderbuffer[i]=_gl.createRenderbuffer(),_gl.bindRenderbuffer(_gl.RENDERBUFFER,renderTargetProperties.__webglColorRenderbuffer[i]);const glFormat=utils.convert(texture2.format,texture2.colorSpace),glType=utils.convert(texture2.type),glInternalFormat=getInternalFormat(texture2.internalFormat,glFormat,glType,texture2.colorSpace,renderTarget.isXRRenderTarget===!0),samples=getRenderTargetSamples(renderTarget);_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER,samples,glInternalFormat,renderTarget.width,renderTarget.height),_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,_gl.COLOR_ATTACHMENT0+i,_gl.RENDERBUFFER,renderTargetProperties.__webglColorRenderbuffer[i])}_gl.bindRenderbuffer(_gl.RENDERBUFFER,null),renderTarget.depthBuffer&&(renderTargetProperties.__webglDepthRenderbuffer=_gl.createRenderbuffer(),setupRenderBufferStorage(renderTargetProperties.__webglDepthRenderbuffer,renderTarget,!0)),state.bindFramebuffer(_gl.FRAMEBUFFER,null)}}if(isCube){state.bindTexture(_gl.TEXTURE_CUBE_MAP,textureProperties.__webglTexture),setTextureParameters(_gl.TEXTURE_CUBE_MAP,texture);for(let i=0;i<6;i++)if(texture.mipmaps&&texture.mipmaps.length>0)for(let level=0;level<texture.mipmaps.length;level++)setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer[i][level],renderTarget,texture,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,level);else setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer[i],renderTarget,texture,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);textureNeedsGenerateMipmaps(texture)&&generateMipmap(_gl.TEXTURE_CUBE_MAP),state.unbindTexture()}else if(isMultipleRenderTargets){for(let i=0,il=textures.length;i<il;i++){const attachment=textures[i],attachmentProperties=properties.get(attachment);state.bindTexture(_gl.TEXTURE_2D,attachmentProperties.__webglTexture),setTextureParameters(_gl.TEXTURE_2D,attachment),setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer,renderTarget,attachment,_gl.COLOR_ATTACHMENT0+i,_gl.TEXTURE_2D,0),textureNeedsGenerateMipmaps(attachment)&&generateMipmap(_gl.TEXTURE_2D)}state.unbindTexture()}else{let glTextureType=_gl.TEXTURE_2D;if((renderTarget.isWebGL3DRenderTarget||renderTarget.isWebGLArrayRenderTarget)&&(glTextureType=renderTarget.isWebGL3DRenderTarget?_gl.TEXTURE_3D:_gl.TEXTURE_2D_ARRAY),state.bindTexture(glTextureType,textureProperties.__webglTexture),setTextureParameters(glTextureType,texture),texture.mipmaps&&texture.mipmaps.length>0)for(let level=0;level<texture.mipmaps.length;level++)setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer[level],renderTarget,texture,_gl.COLOR_ATTACHMENT0,glTextureType,level);else setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer,renderTarget,texture,_gl.COLOR_ATTACHMENT0,glTextureType,0);textureNeedsGenerateMipmaps(texture)&&generateMipmap(glTextureType),state.unbindTexture()}renderTarget.depthBuffer&&setupDepthRenderbuffer(renderTarget)}function updateRenderTargetMipmap(renderTarget){const textures=renderTarget.textures;for(let i=0,il=textures.length;i<il;i++){const texture=textures[i];if(textureNeedsGenerateMipmaps(texture)){const targetType=getTargetType(renderTarget),webglTexture=properties.get(texture).__webglTexture;state.bindTexture(targetType,webglTexture),generateMipmap(targetType),state.unbindTexture()}}}const invalidationArrayRead=[],invalidationArrayDraw=[];function updateMultisampleRenderTarget(renderTarget){if(renderTarget.samples>0){if(useMultisampledRTT(renderTarget)===!1){const textures=renderTarget.textures,width=renderTarget.width,height=renderTarget.height;let mask=_gl.COLOR_BUFFER_BIT;const depthStyle=renderTarget.stencilBuffer?_gl.DEPTH_STENCIL_ATTACHMENT:_gl.DEPTH_ATTACHMENT,renderTargetProperties=properties.get(renderTarget),isMultipleRenderTargets=textures.length>1;if(isMultipleRenderTargets)for(let i=0;i<textures.length;i++)state.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglMultisampledFramebuffer),_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,_gl.COLOR_ATTACHMENT0+i,_gl.RENDERBUFFER,null),state.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglFramebuffer),_gl.framebufferTexture2D(_gl.DRAW_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0+i,_gl.TEXTURE_2D,null,0);state.bindFramebuffer(_gl.READ_FRAMEBUFFER,renderTargetProperties.__webglMultisampledFramebuffer);const mipmaps=renderTarget.texture.mipmaps;mipmaps&&mipmaps.length>0?state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,renderTargetProperties.__webglFramebuffer[0]):state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,renderTargetProperties.__webglFramebuffer);for(let i=0;i<textures.length;i++){if(renderTarget.resolveDepthBuffer&&(renderTarget.depthBuffer&&(mask|=_gl.DEPTH_BUFFER_BIT),renderTarget.stencilBuffer&&renderTarget.resolveStencilBuffer&&(mask|=_gl.STENCIL_BUFFER_BIT)),isMultipleRenderTargets){_gl.framebufferRenderbuffer(_gl.READ_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,_gl.RENDERBUFFER,renderTargetProperties.__webglColorRenderbuffer[i]);const webglTexture=properties.get(textures[i]).__webglTexture;_gl.framebufferTexture2D(_gl.DRAW_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_2D,webglTexture,0)}_gl.blitFramebuffer(0,0,width,height,0,0,width,height,mask,_gl.NEAREST),supportsInvalidateFramebuffer===!0&&(invalidationArrayRead.length=0,invalidationArrayDraw.length=0,invalidationArrayRead.push(_gl.COLOR_ATTACHMENT0+i),renderTarget.depthBuffer&&renderTarget.resolveDepthBuffer===!1&&(invalidationArrayRead.push(depthStyle),invalidationArrayDraw.push(depthStyle),_gl.invalidateFramebuffer(_gl.DRAW_FRAMEBUFFER,invalidationArrayDraw)),_gl.invalidateFramebuffer(_gl.READ_FRAMEBUFFER,invalidationArrayRead))}if(state.bindFramebuffer(_gl.READ_FRAMEBUFFER,null),state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,null),isMultipleRenderTargets)for(let i=0;i<textures.length;i++){state.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglMultisampledFramebuffer),_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,_gl.COLOR_ATTACHMENT0+i,_gl.RENDERBUFFER,renderTargetProperties.__webglColorRenderbuffer[i]);const webglTexture=properties.get(textures[i]).__webglTexture;state.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglFramebuffer),_gl.framebufferTexture2D(_gl.DRAW_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0+i,_gl.TEXTURE_2D,webglTexture,0)}state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,renderTargetProperties.__webglMultisampledFramebuffer)}else if(renderTarget.depthBuffer&&renderTarget.resolveDepthBuffer===!1&&supportsInvalidateFramebuffer){const depthStyle=renderTarget.stencilBuffer?_gl.DEPTH_STENCIL_ATTACHMENT:_gl.DEPTH_ATTACHMENT;_gl.invalidateFramebuffer(_gl.DRAW_FRAMEBUFFER,[depthStyle])}}}function getRenderTargetSamples(renderTarget){return Math.min(capabilities.maxSamples,renderTarget.samples)}function useMultisampledRTT(renderTarget){const renderTargetProperties=properties.get(renderTarget);return renderTarget.samples>0&&extensions.has("WEBGL_multisampled_render_to_texture")===!0&&renderTargetProperties.__useRenderToTexture!==!1}function updateVideoTexture(texture){const frame=info.render.frame;_videoTextures.get(texture)!==frame&&(_videoTextures.set(texture,frame),texture.update())}function verifyColorSpace(texture,image){const colorSpace=texture.colorSpace,format=texture.format,type=texture.type;return texture.isCompressedTexture===!0||texture.isVideoTexture===!0||colorSpace!==LinearSRGBColorSpace&&colorSpace!==NoColorSpace&&(ColorManagement.getTransfer(colorSpace)===SRGBTransfer?(format!==RGBAFormat||type!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",colorSpace)),image}function getDimensions(image){return typeof HTMLImageElement<"u"&&image instanceof HTMLImageElement?(_imageDimensions.width=image.naturalWidth||image.width,_imageDimensions.height=image.naturalHeight||image.height):typeof VideoFrame<"u"&&image instanceof VideoFrame?(_imageDimensions.width=image.displayWidth,_imageDimensions.height=image.displayHeight):(_imageDimensions.width=image.width,_imageDimensions.height=image.height),_imageDimensions}this.allocateTextureUnit=allocateTextureUnit,this.resetTextureUnits=resetTextureUnits,this.setTexture2D=setTexture2D,this.setTexture2DArray=setTexture2DArray,this.setTexture3D=setTexture3D,this.setTextureCube=setTextureCube,this.rebindTextures=rebindTextures,this.setupRenderTarget=setupRenderTarget,this.updateRenderTargetMipmap=updateRenderTargetMipmap,this.updateMultisampleRenderTarget=updateMultisampleRenderTarget,this.setupDepthRenderbuffer=setupDepthRenderbuffer,this.setupFrameBufferTexture=setupFrameBufferTexture,this.useMultisampledRTT=useMultisampledRTT}function WebGLUtils(gl,extensions){function convert(p2,colorSpace=NoColorSpace){let extension;const transfer=ColorManagement.getTransfer(colorSpace);if(p2===UnsignedByteType)return gl.UNSIGNED_BYTE;if(p2===UnsignedShort4444Type)return gl.UNSIGNED_SHORT_4_4_4_4;if(p2===UnsignedShort5551Type)return gl.UNSIGNED_SHORT_5_5_5_1;if(p2===UnsignedInt5999Type)return gl.UNSIGNED_INT_5_9_9_9_REV;if(p2===ByteType)return gl.BYTE;if(p2===ShortType)return gl.SHORT;if(p2===UnsignedShortType)return gl.UNSIGNED_SHORT;if(p2===IntType)return gl.INT;if(p2===UnsignedIntType)return gl.UNSIGNED_INT;if(p2===FloatType)return gl.FLOAT;if(p2===HalfFloatType)return gl.HALF_FLOAT;if(p2===AlphaFormat)return gl.ALPHA;if(p2===RGBFormat)return gl.RGB;if(p2===RGBAFormat)return gl.RGBA;if(p2===DepthFormat)return gl.DEPTH_COMPONENT;if(p2===DepthStencilFormat)return gl.DEPTH_STENCIL;if(p2===RedFormat)return gl.RED;if(p2===RedIntegerFormat)return gl.RED_INTEGER;if(p2===RGFormat)return gl.RG;if(p2===RGIntegerFormat)return gl.RG_INTEGER;if(p2===RGBAIntegerFormat)return gl.RGBA_INTEGER;if(p2===RGB_S3TC_DXT1_Format||p2===RGBA_S3TC_DXT1_Format||p2===RGBA_S3TC_DXT3_Format||p2===RGBA_S3TC_DXT5_Format)if(transfer===SRGBTransfer)if(extension=extensions.get("WEBGL_compressed_texture_s3tc_srgb"),extension!==null){if(p2===RGB_S3TC_DXT1_Format)return extension.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(p2===RGBA_S3TC_DXT1_Format)return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(p2===RGBA_S3TC_DXT3_Format)return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(p2===RGBA_S3TC_DXT5_Format)return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(extension=extensions.get("WEBGL_compressed_texture_s3tc"),extension!==null){if(p2===RGB_S3TC_DXT1_Format)return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;if(p2===RGBA_S3TC_DXT1_Format)return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(p2===RGBA_S3TC_DXT3_Format)return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(p2===RGBA_S3TC_DXT5_Format)return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(p2===RGB_PVRTC_4BPPV1_Format||p2===RGB_PVRTC_2BPPV1_Format||p2===RGBA_PVRTC_4BPPV1_Format||p2===RGBA_PVRTC_2BPPV1_Format)if(extension=extensions.get("WEBGL_compressed_texture_pvrtc"),extension!==null){if(p2===RGB_PVRTC_4BPPV1_Format)return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(p2===RGB_PVRTC_2BPPV1_Format)return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(p2===RGBA_PVRTC_4BPPV1_Format)return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(p2===RGBA_PVRTC_2BPPV1_Format)return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(p2===RGB_ETC1_Format||p2===RGB_ETC2_Format||p2===RGBA_ETC2_EAC_Format)if(extension=extensions.get("WEBGL_compressed_texture_etc"),extension!==null){if(p2===RGB_ETC1_Format||p2===RGB_ETC2_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ETC2:extension.COMPRESSED_RGB8_ETC2;if(p2===RGBA_ETC2_EAC_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:extension.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(p2===RGBA_ASTC_4x4_Format||p2===RGBA_ASTC_5x4_Format||p2===RGBA_ASTC_5x5_Format||p2===RGBA_ASTC_6x5_Format||p2===RGBA_ASTC_6x6_Format||p2===RGBA_ASTC_8x5_Format||p2===RGBA_ASTC_8x6_Format||p2===RGBA_ASTC_8x8_Format||p2===RGBA_ASTC_10x5_Format||p2===RGBA_ASTC_10x6_Format||p2===RGBA_ASTC_10x8_Format||p2===RGBA_ASTC_10x10_Format||p2===RGBA_ASTC_12x10_Format||p2===RGBA_ASTC_12x12_Format)if(extension=extensions.get("WEBGL_compressed_texture_astc"),extension!==null){if(p2===RGBA_ASTC_4x4_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:extension.COMPRESSED_RGBA_ASTC_4x4_KHR;if(p2===RGBA_ASTC_5x4_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:extension.COMPRESSED_RGBA_ASTC_5x4_KHR;if(p2===RGBA_ASTC_5x5_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:extension.COMPRESSED_RGBA_ASTC_5x5_KHR;if(p2===RGBA_ASTC_6x5_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:extension.COMPRESSED_RGBA_ASTC_6x5_KHR;if(p2===RGBA_ASTC_6x6_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:extension.COMPRESSED_RGBA_ASTC_6x6_KHR;if(p2===RGBA_ASTC_8x5_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:extension.COMPRESSED_RGBA_ASTC_8x5_KHR;if(p2===RGBA_ASTC_8x6_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:extension.COMPRESSED_RGBA_ASTC_8x6_KHR;if(p2===RGBA_ASTC_8x8_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:extension.COMPRESSED_RGBA_ASTC_8x8_KHR;if(p2===RGBA_ASTC_10x5_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:extension.COMPRESSED_RGBA_ASTC_10x5_KHR;if(p2===RGBA_ASTC_10x6_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:extension.COMPRESSED_RGBA_ASTC_10x6_KHR;if(p2===RGBA_ASTC_10x8_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:extension.COMPRESSED_RGBA_ASTC_10x8_KHR;if(p2===RGBA_ASTC_10x10_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:extension.COMPRESSED_RGBA_ASTC_10x10_KHR;if(p2===RGBA_ASTC_12x10_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:extension.COMPRESSED_RGBA_ASTC_12x10_KHR;if(p2===RGBA_ASTC_12x12_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:extension.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(p2===RGBA_BPTC_Format||p2===RGB_BPTC_SIGNED_Format||p2===RGB_BPTC_UNSIGNED_Format)if(extension=extensions.get("EXT_texture_compression_bptc"),extension!==null){if(p2===RGBA_BPTC_Format)return transfer===SRGBTransfer?extension.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:extension.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(p2===RGB_BPTC_SIGNED_Format)return extension.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(p2===RGB_BPTC_UNSIGNED_Format)return extension.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(p2===RED_RGTC1_Format||p2===SIGNED_RED_RGTC1_Format||p2===RED_GREEN_RGTC2_Format||p2===SIGNED_RED_GREEN_RGTC2_Format)if(extension=extensions.get("EXT_texture_compression_rgtc"),extension!==null){if(p2===RGBA_BPTC_Format)return extension.COMPRESSED_RED_RGTC1_EXT;if(p2===SIGNED_RED_RGTC1_Format)return extension.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(p2===RED_GREEN_RGTC2_Format)return extension.COMPRESSED_RED_GREEN_RGTC2_EXT;if(p2===SIGNED_RED_GREEN_RGTC2_Format)return extension.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return p2===UnsignedInt248Type?gl.UNSIGNED_INT_24_8:gl[p2]!==void 0?gl[p2]:null}return{convert}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
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

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(renderer,depthData,renderState){if(this.texture===null){const texture=new Texture,texProps=renderer.properties.get(texture);texProps.__webglTexture=depthData.texture,(depthData.depthNear!==renderState.depthNear||depthData.depthFar!==renderState.depthFar)&&(this.depthNear=depthData.depthNear,this.depthFar=depthData.depthFar),this.texture=texture}}getMesh(cameraXR){if(this.texture!==null&&this.mesh===null){const viewport=cameraXR.cameras[0].viewport,material=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:viewport.z},depthHeight:{value:viewport.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),material)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(renderer,gl){super();const scope=this;let session=null,framebufferScaleFactor=1,referenceSpace=null,referenceSpaceType="local-floor",foveation=1,customReferenceSpace=null,pose=null,glBinding=null,glProjLayer=null,glBaseLayer=null,xrFrame=null;const depthSensing=new WebXRDepthSensing,attributes=gl.getContextAttributes();let initialRenderTarget=null,newRenderTarget=null;const controllers=[],controllerInputSources=[],currentSize=new Vector2;let currentPixelRatio=null;const cameraL=new PerspectiveCamera;cameraL.viewport=new Vector4;const cameraR=new PerspectiveCamera;cameraR.viewport=new Vector4;const cameras=[cameraL,cameraR],cameraXR=new ArrayCamera;let _currentDepthNear=null,_currentDepthFar=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(index){let controller=controllers[index];return controller===void 0&&(controller=new WebXRController,controllers[index]=controller),controller.getTargetRaySpace()},this.getControllerGrip=function(index){let controller=controllers[index];return controller===void 0&&(controller=new WebXRController,controllers[index]=controller),controller.getGripSpace()},this.getHand=function(index){let controller=controllers[index];return controller===void 0&&(controller=new WebXRController,controllers[index]=controller),controller.getHandSpace()};function onSessionEvent(event){const controllerIndex=controllerInputSources.indexOf(event.inputSource);if(controllerIndex===-1)return;const controller=controllers[controllerIndex];controller!==void 0&&(controller.update(event.inputSource,event.frame,customReferenceSpace||referenceSpace),controller.dispatchEvent({type:event.type,data:event.inputSource}))}function onSessionEnd(){session.removeEventListener("select",onSessionEvent),session.removeEventListener("selectstart",onSessionEvent),session.removeEventListener("selectend",onSessionEvent),session.removeEventListener("squeeze",onSessionEvent),session.removeEventListener("squeezestart",onSessionEvent),session.removeEventListener("squeezeend",onSessionEvent),session.removeEventListener("end",onSessionEnd),session.removeEventListener("inputsourceschange",onInputSourcesChange);for(let i=0;i<controllers.length;i++){const inputSource=controllerInputSources[i];inputSource!==null&&(controllerInputSources[i]=null,controllers[i].disconnect(inputSource))}_currentDepthNear=null,_currentDepthFar=null,depthSensing.reset(),renderer.setRenderTarget(initialRenderTarget),glBaseLayer=null,glProjLayer=null,glBinding=null,session=null,newRenderTarget=null,animation.stop(),scope.isPresenting=!1,renderer.setPixelRatio(currentPixelRatio),renderer.setSize(currentSize.width,currentSize.height,!1),scope.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(value){framebufferScaleFactor=value,scope.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(value){referenceSpaceType=value,scope.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return customReferenceSpace||referenceSpace},this.setReferenceSpace=function(space){customReferenceSpace=space},this.getBaseLayer=function(){return glProjLayer!==null?glProjLayer:glBaseLayer},this.getBinding=function(){return glBinding},this.getFrame=function(){return xrFrame},this.getSession=function(){return session},this.setSession=async function(value){if(session=value,session!==null){if(initialRenderTarget=renderer.getRenderTarget(),session.addEventListener("select",onSessionEvent),session.addEventListener("selectstart",onSessionEvent),session.addEventListener("selectend",onSessionEvent),session.addEventListener("squeeze",onSessionEvent),session.addEventListener("squeezestart",onSessionEvent),session.addEventListener("squeezeend",onSessionEvent),session.addEventListener("end",onSessionEnd),session.addEventListener("inputsourceschange",onInputSourcesChange),attributes.xrCompatible!==!0&&await gl.makeXRCompatible(),currentPixelRatio=renderer.getPixelRatio(),renderer.getSize(currentSize),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let depthFormat=null,depthType=null,glDepthFormat=null;attributes.depth&&(glDepthFormat=attributes.stencil?gl.DEPTH24_STENCIL8:gl.DEPTH_COMPONENT24,depthFormat=attributes.stencil?DepthStencilFormat:DepthFormat,depthType=attributes.stencil?UnsignedInt248Type:UnsignedIntType);const projectionlayerInit={colorFormat:gl.RGBA8,depthFormat:glDepthFormat,scaleFactor:framebufferScaleFactor};glBinding=new XRWebGLBinding(session,gl),glProjLayer=glBinding.createProjectionLayer(projectionlayerInit),session.updateRenderState({layers:[glProjLayer]}),renderer.setPixelRatio(1),renderer.setSize(glProjLayer.textureWidth,glProjLayer.textureHeight,!1),newRenderTarget=new WebGLRenderTarget(glProjLayer.textureWidth,glProjLayer.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(glProjLayer.textureWidth,glProjLayer.textureHeight,depthType,void 0,void 0,void 0,void 0,void 0,void 0,depthFormat),stencilBuffer:attributes.stencil,colorSpace:renderer.outputColorSpace,samples:attributes.antialias?4:0,resolveDepthBuffer:glProjLayer.ignoreDepthValues===!1,resolveStencilBuffer:glProjLayer.ignoreDepthValues===!1})}else{const layerInit={antialias:attributes.antialias,alpha:!0,depth:attributes.depth,stencil:attributes.stencil,framebufferScaleFactor};glBaseLayer=new XRWebGLLayer(session,gl,layerInit),session.updateRenderState({baseLayer:glBaseLayer}),renderer.setPixelRatio(1),renderer.setSize(glBaseLayer.framebufferWidth,glBaseLayer.framebufferHeight,!1),newRenderTarget=new WebGLRenderTarget(glBaseLayer.framebufferWidth,glBaseLayer.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:renderer.outputColorSpace,stencilBuffer:attributes.stencil,resolveDepthBuffer:glBaseLayer.ignoreDepthValues===!1,resolveStencilBuffer:glBaseLayer.ignoreDepthValues===!1})}newRenderTarget.isXRRenderTarget=!0,this.setFoveation(foveation),customReferenceSpace=null,referenceSpace=await session.requestReferenceSpace(referenceSpaceType),animation.setContext(session),animation.start(),scope.isPresenting=!0,scope.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(session!==null)return session.environmentBlendMode},this.getDepthTexture=function(){return depthSensing.getDepthTexture()};function onInputSourcesChange(event){for(let i=0;i<event.removed.length;i++){const inputSource=event.removed[i],index=controllerInputSources.indexOf(inputSource);index>=0&&(controllerInputSources[index]=null,controllers[index].disconnect(inputSource))}for(let i=0;i<event.added.length;i++){const inputSource=event.added[i];let controllerIndex=controllerInputSources.indexOf(inputSource);if(controllerIndex===-1){for(let i2=0;i2<controllers.length;i2++)if(i2>=controllerInputSources.length){controllerInputSources.push(inputSource),controllerIndex=i2;break}else if(controllerInputSources[i2]===null){controllerInputSources[i2]=inputSource,controllerIndex=i2;break}if(controllerIndex===-1)break}const controller=controllers[controllerIndex];controller&&controller.connect(inputSource)}}const cameraLPos=new Vector3,cameraRPos=new Vector3;function setProjectionFromUnion(camera,cameraL2,cameraR2){cameraLPos.setFromMatrixPosition(cameraL2.matrixWorld),cameraRPos.setFromMatrixPosition(cameraR2.matrixWorld);const ipd=cameraLPos.distanceTo(cameraRPos),projL=cameraL2.projectionMatrix.elements,projR=cameraR2.projectionMatrix.elements,near=projL[14]/(projL[10]-1),far=projL[14]/(projL[10]+1),topFov=(projL[9]+1)/projL[5],bottomFov=(projL[9]-1)/projL[5],leftFov=(projL[8]-1)/projL[0],rightFov=(projR[8]+1)/projR[0],left=near*leftFov,right=near*rightFov,zOffset=ipd/(-leftFov+rightFov),xOffset=zOffset*-leftFov;if(cameraL2.matrixWorld.decompose(camera.position,camera.quaternion,camera.scale),camera.translateX(xOffset),camera.translateZ(zOffset),camera.matrixWorld.compose(camera.position,camera.quaternion,camera.scale),camera.matrixWorldInverse.copy(camera.matrixWorld).invert(),projL[10]===-1)camera.projectionMatrix.copy(cameraL2.projectionMatrix),camera.projectionMatrixInverse.copy(cameraL2.projectionMatrixInverse);else{const near2=near+zOffset,far2=far+zOffset,left2=left-xOffset,right2=right+(ipd-xOffset),top2=topFov*far/far2*near2,bottom2=bottomFov*far/far2*near2;camera.projectionMatrix.makePerspective(left2,right2,top2,bottom2,near2,far2),camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert()}}function updateCamera(camera,parent){parent===null?camera.matrixWorld.copy(camera.matrix):camera.matrixWorld.multiplyMatrices(parent.matrixWorld,camera.matrix),camera.matrixWorldInverse.copy(camera.matrixWorld).invert()}this.updateCamera=function(camera){if(session===null)return;let depthNear=camera.near,depthFar=camera.far;depthSensing.texture!==null&&(depthSensing.depthNear>0&&(depthNear=depthSensing.depthNear),depthSensing.depthFar>0&&(depthFar=depthSensing.depthFar)),cameraXR.near=cameraR.near=cameraL.near=depthNear,cameraXR.far=cameraR.far=cameraL.far=depthFar,(_currentDepthNear!==cameraXR.near||_currentDepthFar!==cameraXR.far)&&(session.updateRenderState({depthNear:cameraXR.near,depthFar:cameraXR.far}),_currentDepthNear=cameraXR.near,_currentDepthFar=cameraXR.far),cameraL.layers.mask=camera.layers.mask|2,cameraR.layers.mask=camera.layers.mask|4,cameraXR.layers.mask=cameraL.layers.mask|cameraR.layers.mask;const parent=camera.parent,cameras2=cameraXR.cameras;updateCamera(cameraXR,parent);for(let i=0;i<cameras2.length;i++)updateCamera(cameras2[i],parent);cameras2.length===2?setProjectionFromUnion(cameraXR,cameraL,cameraR):cameraXR.projectionMatrix.copy(cameraL.projectionMatrix),updateUserCamera(camera,cameraXR,parent)};function updateUserCamera(camera,cameraXR2,parent){parent===null?camera.matrix.copy(cameraXR2.matrixWorld):(camera.matrix.copy(parent.matrixWorld),camera.matrix.invert(),camera.matrix.multiply(cameraXR2.matrixWorld)),camera.matrix.decompose(camera.position,camera.quaternion,camera.scale),camera.updateMatrixWorld(!0),camera.projectionMatrix.copy(cameraXR2.projectionMatrix),camera.projectionMatrixInverse.copy(cameraXR2.projectionMatrixInverse),camera.isPerspectiveCamera&&(camera.fov=RAD2DEG*2*Math.atan(1/camera.projectionMatrix.elements[5]),camera.zoom=1)}this.getCamera=function(){return cameraXR},this.getFoveation=function(){if(!(glProjLayer===null&&glBaseLayer===null))return foveation},this.setFoveation=function(value){foveation=value,glProjLayer!==null&&(glProjLayer.fixedFoveation=value),glBaseLayer!==null&&glBaseLayer.fixedFoveation!==void 0&&(glBaseLayer.fixedFoveation=value)},this.hasDepthSensing=function(){return depthSensing.texture!==null},this.getDepthSensingMesh=function(){return depthSensing.getMesh(cameraXR)};let onAnimationFrameCallback=null;function onAnimationFrame(time,frame){if(pose=frame.getViewerPose(customReferenceSpace||referenceSpace),xrFrame=frame,pose!==null){const views=pose.views;glBaseLayer!==null&&(renderer.setRenderTargetFramebuffer(newRenderTarget,glBaseLayer.framebuffer),renderer.setRenderTarget(newRenderTarget));let cameraXRNeedsUpdate=!1;views.length!==cameraXR.cameras.length&&(cameraXR.cameras.length=0,cameraXRNeedsUpdate=!0);for(let i=0;i<views.length;i++){const view=views[i];let viewport=null;if(glBaseLayer!==null)viewport=glBaseLayer.getViewport(view);else{const glSubImage=glBinding.getViewSubImage(glProjLayer,view);viewport=glSubImage.viewport,i===0&&(renderer.setRenderTargetTextures(newRenderTarget,glSubImage.colorTexture,glSubImage.depthStencilTexture),renderer.setRenderTarget(newRenderTarget))}let camera=cameras[i];camera===void 0&&(camera=new PerspectiveCamera,camera.layers.enable(i),camera.viewport=new Vector4,cameras[i]=camera),camera.matrix.fromArray(view.transform.matrix),camera.matrix.decompose(camera.position,camera.quaternion,camera.scale),camera.projectionMatrix.fromArray(view.projectionMatrix),camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert(),camera.viewport.set(viewport.x,viewport.y,viewport.width,viewport.height),i===0&&(cameraXR.matrix.copy(camera.matrix),cameraXR.matrix.decompose(cameraXR.position,cameraXR.quaternion,cameraXR.scale)),cameraXRNeedsUpdate===!0&&cameraXR.cameras.push(camera)}const enabledFeatures=session.enabledFeatures;if(enabledFeatures&&enabledFeatures.includes("depth-sensing")&&session.depthUsage=="gpu-optimized"&&glBinding){const depthData=glBinding.getDepthInformation(views[0]);depthData&&depthData.isValid&&depthData.texture&&depthSensing.init(renderer,depthData,session.renderState)}}for(let i=0;i<controllers.length;i++){const inputSource=controllerInputSources[i],controller=controllers[i];inputSource!==null&&controller!==void 0&&controller.update(inputSource,frame,customReferenceSpace||referenceSpace)}onAnimationFrameCallback&&onAnimationFrameCallback(time,frame),frame.detectedPlanes&&scope.dispatchEvent({type:"planesdetected",data:frame}),xrFrame=null}const animation=new WebGLAnimation;animation.setAnimationLoop(onAnimationFrame),this.setAnimationLoop=function(callback){onAnimationFrameCallback=callback},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(renderer,properties){function refreshTransformUniform(map,uniform){map.matrixAutoUpdate===!0&&map.updateMatrix(),uniform.value.copy(map.matrix)}function refreshFogUniforms(uniforms,fog){fog.color.getRGB(uniforms.fogColor.value,getUnlitUniformColorSpace(renderer)),fog.isFog?(uniforms.fogNear.value=fog.near,uniforms.fogFar.value=fog.far):fog.isFogExp2&&(uniforms.fogDensity.value=fog.density)}function refreshMaterialUniforms(uniforms,material,pixelRatio,height,transmissionRenderTarget){material.isMeshBasicMaterial||material.isMeshLambertMaterial?refreshUniformsCommon(uniforms,material):material.isMeshToonMaterial?(refreshUniformsCommon(uniforms,material),refreshUniformsToon(uniforms,material)):material.isMeshPhongMaterial?(refreshUniformsCommon(uniforms,material),refreshUniformsPhong(uniforms,material)):material.isMeshStandardMaterial?(refreshUniformsCommon(uniforms,material),refreshUniformsStandard(uniforms,material),material.isMeshPhysicalMaterial&&refreshUniformsPhysical(uniforms,material,transmissionRenderTarget)):material.isMeshMatcapMaterial?(refreshUniformsCommon(uniforms,material),refreshUniformsMatcap(uniforms,material)):material.isMeshDepthMaterial?refreshUniformsCommon(uniforms,material):material.isMeshDistanceMaterial?(refreshUniformsCommon(uniforms,material),refreshUniformsDistance(uniforms,material)):material.isMeshNormalMaterial?refreshUniformsCommon(uniforms,material):material.isLineBasicMaterial?(refreshUniformsLine(uniforms,material),material.isLineDashedMaterial&&refreshUniformsDash(uniforms,material)):material.isPointsMaterial?refreshUniformsPoints(uniforms,material,pixelRatio,height):material.isSpriteMaterial?refreshUniformsSprites(uniforms,material):material.isShadowMaterial?(uniforms.color.value.copy(material.color),uniforms.opacity.value=material.opacity):material.isShaderMaterial&&(material.uniformsNeedUpdate=!1)}function refreshUniformsCommon(uniforms,material){uniforms.opacity.value=material.opacity,material.color&&uniforms.diffuse.value.copy(material.color),material.emissive&&uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity),material.map&&(uniforms.map.value=material.map,refreshTransformUniform(material.map,uniforms.mapTransform)),material.alphaMap&&(uniforms.alphaMap.value=material.alphaMap,refreshTransformUniform(material.alphaMap,uniforms.alphaMapTransform)),material.bumpMap&&(uniforms.bumpMap.value=material.bumpMap,refreshTransformUniform(material.bumpMap,uniforms.bumpMapTransform),uniforms.bumpScale.value=material.bumpScale,material.side===BackSide&&(uniforms.bumpScale.value*=-1)),material.normalMap&&(uniforms.normalMap.value=material.normalMap,refreshTransformUniform(material.normalMap,uniforms.normalMapTransform),uniforms.normalScale.value.copy(material.normalScale),material.side===BackSide&&uniforms.normalScale.value.negate()),material.displacementMap&&(uniforms.displacementMap.value=material.displacementMap,refreshTransformUniform(material.displacementMap,uniforms.displacementMapTransform),uniforms.displacementScale.value=material.displacementScale,uniforms.displacementBias.value=material.displacementBias),material.emissiveMap&&(uniforms.emissiveMap.value=material.emissiveMap,refreshTransformUniform(material.emissiveMap,uniforms.emissiveMapTransform)),material.specularMap&&(uniforms.specularMap.value=material.specularMap,refreshTransformUniform(material.specularMap,uniforms.specularMapTransform)),material.alphaTest>0&&(uniforms.alphaTest.value=material.alphaTest);const materialProperties=properties.get(material),envMap=materialProperties.envMap,envMapRotation=materialProperties.envMapRotation;envMap&&(uniforms.envMap.value=envMap,_e1.copy(envMapRotation),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,envMap.isCubeTexture&&envMap.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),uniforms.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),uniforms.flipEnvMap.value=envMap.isCubeTexture&&envMap.isRenderTargetTexture===!1?-1:1,uniforms.reflectivity.value=material.reflectivity,uniforms.ior.value=material.ior,uniforms.refractionRatio.value=material.refractionRatio),material.lightMap&&(uniforms.lightMap.value=material.lightMap,uniforms.lightMapIntensity.value=material.lightMapIntensity,refreshTransformUniform(material.lightMap,uniforms.lightMapTransform)),material.aoMap&&(uniforms.aoMap.value=material.aoMap,uniforms.aoMapIntensity.value=material.aoMapIntensity,refreshTransformUniform(material.aoMap,uniforms.aoMapTransform))}function refreshUniformsLine(uniforms,material){uniforms.diffuse.value.copy(material.color),uniforms.opacity.value=material.opacity,material.map&&(uniforms.map.value=material.map,refreshTransformUniform(material.map,uniforms.mapTransform))}function refreshUniformsDash(uniforms,material){uniforms.dashSize.value=material.dashSize,uniforms.totalSize.value=material.dashSize+material.gapSize,uniforms.scale.value=material.scale}function refreshUniformsPoints(uniforms,material,pixelRatio,height){uniforms.diffuse.value.copy(material.color),uniforms.opacity.value=material.opacity,uniforms.size.value=material.size*pixelRatio,uniforms.scale.value=height*.5,material.map&&(uniforms.map.value=material.map,refreshTransformUniform(material.map,uniforms.uvTransform)),material.alphaMap&&(uniforms.alphaMap.value=material.alphaMap,refreshTransformUniform(material.alphaMap,uniforms.alphaMapTransform)),material.alphaTest>0&&(uniforms.alphaTest.value=material.alphaTest)}function refreshUniformsSprites(uniforms,material){uniforms.diffuse.value.copy(material.color),uniforms.opacity.value=material.opacity,uniforms.rotation.value=material.rotation,material.map&&(uniforms.map.value=material.map,refreshTransformUniform(material.map,uniforms.mapTransform)),material.alphaMap&&(uniforms.alphaMap.value=material.alphaMap,refreshTransformUniform(material.alphaMap,uniforms.alphaMapTransform)),material.alphaTest>0&&(uniforms.alphaTest.value=material.alphaTest)}function refreshUniformsPhong(uniforms,material){uniforms.specular.value.copy(material.specular),uniforms.shininess.value=Math.max(material.shininess,1e-4)}function refreshUniformsToon(uniforms,material){material.gradientMap&&(uniforms.gradientMap.value=material.gradientMap)}function refreshUniformsStandard(uniforms,material){uniforms.metalness.value=material.metalness,material.metalnessMap&&(uniforms.metalnessMap.value=material.metalnessMap,refreshTransformUniform(material.metalnessMap,uniforms.metalnessMapTransform)),uniforms.roughness.value=material.roughness,material.roughnessMap&&(uniforms.roughnessMap.value=material.roughnessMap,refreshTransformUniform(material.roughnessMap,uniforms.roughnessMapTransform)),material.envMap&&(uniforms.envMapIntensity.value=material.envMapIntensity)}function refreshUniformsPhysical(uniforms,material,transmissionRenderTarget){uniforms.ior.value=material.ior,material.sheen>0&&(uniforms.sheenColor.value.copy(material.sheenColor).multiplyScalar(material.sheen),uniforms.sheenRoughness.value=material.sheenRoughness,material.sheenColorMap&&(uniforms.sheenColorMap.value=material.sheenColorMap,refreshTransformUniform(material.sheenColorMap,uniforms.sheenColorMapTransform)),material.sheenRoughnessMap&&(uniforms.sheenRoughnessMap.value=material.sheenRoughnessMap,refreshTransformUniform(material.sheenRoughnessMap,uniforms.sheenRoughnessMapTransform))),material.clearcoat>0&&(uniforms.clearcoat.value=material.clearcoat,uniforms.clearcoatRoughness.value=material.clearcoatRoughness,material.clearcoatMap&&(uniforms.clearcoatMap.value=material.clearcoatMap,refreshTransformUniform(material.clearcoatMap,uniforms.clearcoatMapTransform)),material.clearcoatRoughnessMap&&(uniforms.clearcoatRoughnessMap.value=material.clearcoatRoughnessMap,refreshTransformUniform(material.clearcoatRoughnessMap,uniforms.clearcoatRoughnessMapTransform)),material.clearcoatNormalMap&&(uniforms.clearcoatNormalMap.value=material.clearcoatNormalMap,refreshTransformUniform(material.clearcoatNormalMap,uniforms.clearcoatNormalMapTransform),uniforms.clearcoatNormalScale.value.copy(material.clearcoatNormalScale),material.side===BackSide&&uniforms.clearcoatNormalScale.value.negate())),material.dispersion>0&&(uniforms.dispersion.value=material.dispersion),material.iridescence>0&&(uniforms.iridescence.value=material.iridescence,uniforms.iridescenceIOR.value=material.iridescenceIOR,uniforms.iridescenceThicknessMinimum.value=material.iridescenceThicknessRange[0],uniforms.iridescenceThicknessMaximum.value=material.iridescenceThicknessRange[1],material.iridescenceMap&&(uniforms.iridescenceMap.value=material.iridescenceMap,refreshTransformUniform(material.iridescenceMap,uniforms.iridescenceMapTransform)),material.iridescenceThicknessMap&&(uniforms.iridescenceThicknessMap.value=material.iridescenceThicknessMap,refreshTransformUniform(material.iridescenceThicknessMap,uniforms.iridescenceThicknessMapTransform))),material.transmission>0&&(uniforms.transmission.value=material.transmission,uniforms.transmissionSamplerMap.value=transmissionRenderTarget.texture,uniforms.transmissionSamplerSize.value.set(transmissionRenderTarget.width,transmissionRenderTarget.height),material.transmissionMap&&(uniforms.transmissionMap.value=material.transmissionMap,refreshTransformUniform(material.transmissionMap,uniforms.transmissionMapTransform)),uniforms.thickness.value=material.thickness,material.thicknessMap&&(uniforms.thicknessMap.value=material.thicknessMap,refreshTransformUniform(material.thicknessMap,uniforms.thicknessMapTransform)),uniforms.attenuationDistance.value=material.attenuationDistance,uniforms.attenuationColor.value.copy(material.attenuationColor)),material.anisotropy>0&&(uniforms.anisotropyVector.value.set(material.anisotropy*Math.cos(material.anisotropyRotation),material.anisotropy*Math.sin(material.anisotropyRotation)),material.anisotropyMap&&(uniforms.anisotropyMap.value=material.anisotropyMap,refreshTransformUniform(material.anisotropyMap,uniforms.anisotropyMapTransform))),uniforms.specularIntensity.value=material.specularIntensity,uniforms.specularColor.value.copy(material.specularColor),material.specularColorMap&&(uniforms.specularColorMap.value=material.specularColorMap,refreshTransformUniform(material.specularColorMap,uniforms.specularColorMapTransform)),material.specularIntensityMap&&(uniforms.specularIntensityMap.value=material.specularIntensityMap,refreshTransformUniform(material.specularIntensityMap,uniforms.specularIntensityMapTransform))}function refreshUniformsMatcap(uniforms,material){material.matcap&&(uniforms.matcap.value=material.matcap)}function refreshUniformsDistance(uniforms,material){const light=properties.get(material).light;uniforms.referencePosition.value.setFromMatrixPosition(light.matrixWorld),uniforms.nearDistance.value=light.shadow.camera.near,uniforms.farDistance.value=light.shadow.camera.far}return{refreshFogUniforms,refreshMaterialUniforms}}function WebGLUniformsGroups(gl,info,capabilities,state){let buffers={},updateList={},allocatedBindingPoints=[];const maxBindingPoints=gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS);function bind(uniformsGroup,program){const webglProgram=program.program;state.uniformBlockBinding(uniformsGroup,webglProgram)}function update(uniformsGroup,program){let buffer=buffers[uniformsGroup.id];buffer===void 0&&(prepareUniformsGroup(uniformsGroup),buffer=createBuffer(uniformsGroup),buffers[uniformsGroup.id]=buffer,uniformsGroup.addEventListener("dispose",onUniformsGroupsDispose));const webglProgram=program.program;state.updateUBOMapping(uniformsGroup,webglProgram);const frame=info.render.frame;updateList[uniformsGroup.id]!==frame&&(updateBufferData(uniformsGroup),updateList[uniformsGroup.id]=frame)}function createBuffer(uniformsGroup){const bindingPointIndex=allocateBindingPointIndex();uniformsGroup.__bindingPointIndex=bindingPointIndex;const buffer=gl.createBuffer(),size=uniformsGroup.__size,usage=uniformsGroup.usage;return gl.bindBuffer(gl.UNIFORM_BUFFER,buffer),gl.bufferData(gl.UNIFORM_BUFFER,size,usage),gl.bindBuffer(gl.UNIFORM_BUFFER,null),gl.bindBufferBase(gl.UNIFORM_BUFFER,bindingPointIndex,buffer),buffer}function allocateBindingPointIndex(){for(let i=0;i<maxBindingPoints;i++)if(allocatedBindingPoints.indexOf(i)===-1)return allocatedBindingPoints.push(i),i;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function updateBufferData(uniformsGroup){const buffer=buffers[uniformsGroup.id],uniforms=uniformsGroup.uniforms,cache=uniformsGroup.__cache;gl.bindBuffer(gl.UNIFORM_BUFFER,buffer);for(let i=0,il=uniforms.length;i<il;i++){const uniformArray=Array.isArray(uniforms[i])?uniforms[i]:[uniforms[i]];for(let j=0,jl=uniformArray.length;j<jl;j++){const uniform=uniformArray[j];if(hasUniformChanged(uniform,i,j,cache)===!0){const offset=uniform.__offset,values=Array.isArray(uniform.value)?uniform.value:[uniform.value];let arrayOffset=0;for(let k=0;k<values.length;k++){const value=values[k],info2=getUniformSize(value);typeof value=="number"||typeof value=="boolean"?(uniform.__data[0]=value,gl.bufferSubData(gl.UNIFORM_BUFFER,offset+arrayOffset,uniform.__data)):value.isMatrix3?(uniform.__data[0]=value.elements[0],uniform.__data[1]=value.elements[1],uniform.__data[2]=value.elements[2],uniform.__data[3]=0,uniform.__data[4]=value.elements[3],uniform.__data[5]=value.elements[4],uniform.__data[6]=value.elements[5],uniform.__data[7]=0,uniform.__data[8]=value.elements[6],uniform.__data[9]=value.elements[7],uniform.__data[10]=value.elements[8],uniform.__data[11]=0):(value.toArray(uniform.__data,arrayOffset),arrayOffset+=info2.storage/Float32Array.BYTES_PER_ELEMENT)}gl.bufferSubData(gl.UNIFORM_BUFFER,offset,uniform.__data)}}}gl.bindBuffer(gl.UNIFORM_BUFFER,null)}function hasUniformChanged(uniform,index,indexArray,cache){const value=uniform.value,indexString=index+"_"+indexArray;if(cache[indexString]===void 0)return typeof value=="number"||typeof value=="boolean"?cache[indexString]=value:cache[indexString]=value.clone(),!0;{const cachedObject=cache[indexString];if(typeof value=="number"||typeof value=="boolean"){if(cachedObject!==value)return cache[indexString]=value,!0}else if(cachedObject.equals(value)===!1)return cachedObject.copy(value),!0}return!1}function prepareUniformsGroup(uniformsGroup){const uniforms=uniformsGroup.uniforms;let offset=0;const chunkSize=16;for(let i=0,l=uniforms.length;i<l;i++){const uniformArray=Array.isArray(uniforms[i])?uniforms[i]:[uniforms[i]];for(let j=0,jl=uniformArray.length;j<jl;j++){const uniform=uniformArray[j],values=Array.isArray(uniform.value)?uniform.value:[uniform.value];for(let k=0,kl=values.length;k<kl;k++){const value=values[k],info2=getUniformSize(value),chunkOffset2=offset%chunkSize,chunkPadding=chunkOffset2%info2.boundary,chunkStart=chunkOffset2+chunkPadding;offset+=chunkPadding,chunkStart!==0&&chunkSize-chunkStart<info2.storage&&(offset+=chunkSize-chunkStart),uniform.__data=new Float32Array(info2.storage/Float32Array.BYTES_PER_ELEMENT),uniform.__offset=offset,offset+=info2.storage}}}const chunkOffset=offset%chunkSize;return chunkOffset>0&&(offset+=chunkSize-chunkOffset),uniformsGroup.__size=offset,uniformsGroup.__cache={},this}function getUniformSize(value){const info2={boundary:0,storage:0};return typeof value=="number"||typeof value=="boolean"?(info2.boundary=4,info2.storage=4):value.isVector2?(info2.boundary=8,info2.storage=8):value.isVector3||value.isColor?(info2.boundary=16,info2.storage=12):value.isVector4?(info2.boundary=16,info2.storage=16):value.isMatrix3?(info2.boundary=48,info2.storage=48):value.isMatrix4?(info2.boundary=64,info2.storage=64):value.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",value),info2}function onUniformsGroupsDispose(event){const uniformsGroup=event.target;uniformsGroup.removeEventListener("dispose",onUniformsGroupsDispose);const index=allocatedBindingPoints.indexOf(uniformsGroup.__bindingPointIndex);allocatedBindingPoints.splice(index,1),gl.deleteBuffer(buffers[uniformsGroup.id]),delete buffers[uniformsGroup.id],delete updateList[uniformsGroup.id]}function dispose(){for(const id in buffers)gl.deleteBuffer(buffers[id]);allocatedBindingPoints=[],buffers={},updateList={}}return{bind,update,dispose}}class WebGLRenderer{constructor(parameters={}){const{canvas=createCanvasElement(),context=null,depth=!0,stencil=!1,alpha=!1,antialias=!1,premultipliedAlpha=!0,preserveDrawingBuffer=!1,powerPreference="default",failIfMajorPerformanceCaveat=!1,reverseDepthBuffer=!1}=parameters;this.isWebGLRenderer=!0;let _alpha;if(context!==null){if(typeof WebGLRenderingContext<"u"&&context instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_alpha=context.getContextAttributes().alpha}else _alpha=alpha;const uintClearColor=new Uint32Array(4),intClearColor=new Int32Array(4);let currentRenderList=null,currentRenderState=null;const renderListStack=[],renderStateStack=[];this.domElement=canvas,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _this=this;let _isContextLost=!1;this._outputColorSpace=SRGBColorSpace;let _currentActiveCubeFace=0,_currentActiveMipmapLevel=0,_currentRenderTarget=null,_currentMaterialId=-1,_currentCamera=null;const _currentViewport=new Vector4,_currentScissor=new Vector4;let _currentScissorTest=null;const _currentClearColor=new Color(0);let _currentClearAlpha=0,_width=canvas.width,_height=canvas.height,_pixelRatio=1,_opaqueSort=null,_transparentSort=null;const _viewport=new Vector4(0,0,_width,_height),_scissor=new Vector4(0,0,_width,_height);let _scissorTest=!1;const _frustum=new Frustum;let _clippingEnabled=!1,_localClippingEnabled=!1;const _currentProjectionMatrix=new Matrix4,_projScreenMatrix=new Matrix4,_vector3=new Vector3,_vector4=new Vector4,_emptyScene={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _renderBackground=!1;function getTargetPixelRatio(){return _currentRenderTarget===null?_pixelRatio:1}let _gl=context;function getContext(contextName,contextAttributes){return canvas.getContext(contextName,contextAttributes)}try{const contextAttributes={alpha:!0,depth,stencil,antialias,premultipliedAlpha,preserveDrawingBuffer,powerPreference,failIfMajorPerformanceCaveat};if("setAttribute"in canvas&&canvas.setAttribute("data-engine",`three.js r${REVISION}`),canvas.addEventListener("webglcontextlost",onContextLost,!1),canvas.addEventListener("webglcontextrestored",onContextRestore,!1),canvas.addEventListener("webglcontextcreationerror",onContextCreationError,!1),_gl===null){const contextName="webgl2";if(_gl=getContext(contextName,contextAttributes),_gl===null)throw getContext(contextName)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(error){throw console.error("THREE.WebGLRenderer: "+error.message),error}let extensions,capabilities,state,info,properties,textures,cubemaps,cubeuvmaps,attributes,geometries,objects,programCache,materials,renderLists,renderStates,clipping,shadowMap,background,morphtargets,bufferRenderer,indexedBufferRenderer,utils,bindingStates,uniformsGroups;function initGLContext(){extensions=new WebGLExtensions(_gl),extensions.init(),utils=new WebGLUtils(_gl,extensions),capabilities=new WebGLCapabilities(_gl,extensions,parameters,utils),state=new WebGLState(_gl,extensions),capabilities.reverseDepthBuffer&&reverseDepthBuffer&&state.buffers.depth.setReversed(!0),info=new WebGLInfo(_gl),properties=new WebGLProperties,textures=new WebGLTextures(_gl,extensions,state,properties,capabilities,utils,info),cubemaps=new WebGLCubeMaps(_this),cubeuvmaps=new WebGLCubeUVMaps(_this),attributes=new WebGLAttributes(_gl),bindingStates=new WebGLBindingStates(_gl,attributes),geometries=new WebGLGeometries(_gl,attributes,info,bindingStates),objects=new WebGLObjects(_gl,geometries,attributes,info),morphtargets=new WebGLMorphtargets(_gl,capabilities,textures),clipping=new WebGLClipping(properties),programCache=new WebGLPrograms(_this,cubemaps,cubeuvmaps,extensions,capabilities,bindingStates,clipping),materials=new WebGLMaterials(_this,properties),renderLists=new WebGLRenderLists,renderStates=new WebGLRenderStates(extensions),background=new WebGLBackground(_this,cubemaps,cubeuvmaps,state,objects,_alpha,premultipliedAlpha),shadowMap=new WebGLShadowMap(_this,objects,capabilities),uniformsGroups=new WebGLUniformsGroups(_gl,info,capabilities,state),bufferRenderer=new WebGLBufferRenderer(_gl,extensions,info),indexedBufferRenderer=new WebGLIndexedBufferRenderer(_gl,extensions,info),info.programs=programCache.programs,_this.capabilities=capabilities,_this.extensions=extensions,_this.properties=properties,_this.renderLists=renderLists,_this.shadowMap=shadowMap,_this.state=state,_this.info=info}initGLContext();const xr=new WebXRManager(_this,_gl);this.xr=xr,this.getContext=function(){return _gl},this.getContextAttributes=function(){return _gl.getContextAttributes()},this.forceContextLoss=function(){const extension=extensions.get("WEBGL_lose_context");extension&&extension.loseContext()},this.forceContextRestore=function(){const extension=extensions.get("WEBGL_lose_context");extension&&extension.restoreContext()},this.getPixelRatio=function(){return _pixelRatio},this.setPixelRatio=function(value){value!==void 0&&(_pixelRatio=value,this.setSize(_width,_height,!1))},this.getSize=function(target){return target.set(_width,_height)},this.setSize=function(width,height,updateStyle=!0){if(xr.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}_width=width,_height=height,canvas.width=Math.floor(width*_pixelRatio),canvas.height=Math.floor(height*_pixelRatio),updateStyle===!0&&(canvas.style.width=width+"px",canvas.style.height=height+"px"),this.setViewport(0,0,width,height)},this.getDrawingBufferSize=function(target){return target.set(_width*_pixelRatio,_height*_pixelRatio).floor()},this.setDrawingBufferSize=function(width,height,pixelRatio){_width=width,_height=height,_pixelRatio=pixelRatio,canvas.width=Math.floor(width*pixelRatio),canvas.height=Math.floor(height*pixelRatio),this.setViewport(0,0,width,height)},this.getCurrentViewport=function(target){return target.copy(_currentViewport)},this.getViewport=function(target){return target.copy(_viewport)},this.setViewport=function(x,y,width,height){x.isVector4?_viewport.set(x.x,x.y,x.z,x.w):_viewport.set(x,y,width,height),state.viewport(_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).round())},this.getScissor=function(target){return target.copy(_scissor)},this.setScissor=function(x,y,width,height){x.isVector4?_scissor.set(x.x,x.y,x.z,x.w):_scissor.set(x,y,width,height),state.scissor(_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).round())},this.getScissorTest=function(){return _scissorTest},this.setScissorTest=function(boolean){state.setScissorTest(_scissorTest=boolean)},this.setOpaqueSort=function(method){_opaqueSort=method},this.setTransparentSort=function(method){_transparentSort=method},this.getClearColor=function(target){return target.copy(background.getClearColor())},this.setClearColor=function(){background.setClearColor(...arguments)},this.getClearAlpha=function(){return background.getClearAlpha()},this.setClearAlpha=function(){background.setClearAlpha(...arguments)},this.clear=function(color=!0,depth2=!0,stencil2=!0){let bits=0;if(color){let isIntegerFormat=!1;if(_currentRenderTarget!==null){const targetFormat=_currentRenderTarget.texture.format;isIntegerFormat=targetFormat===RGBAIntegerFormat||targetFormat===RGIntegerFormat||targetFormat===RedIntegerFormat}if(isIntegerFormat){const targetType=_currentRenderTarget.texture.type,isUnsignedType=targetType===UnsignedByteType||targetType===UnsignedIntType||targetType===UnsignedShortType||targetType===UnsignedInt248Type||targetType===UnsignedShort4444Type||targetType===UnsignedShort5551Type,clearColor=background.getClearColor(),a=background.getClearAlpha(),r=clearColor.r,g=clearColor.g,b=clearColor.b;isUnsignedType?(uintClearColor[0]=r,uintClearColor[1]=g,uintClearColor[2]=b,uintClearColor[3]=a,_gl.clearBufferuiv(_gl.COLOR,0,uintClearColor)):(intClearColor[0]=r,intClearColor[1]=g,intClearColor[2]=b,intClearColor[3]=a,_gl.clearBufferiv(_gl.COLOR,0,intClearColor))}else bits|=_gl.COLOR_BUFFER_BIT}depth2&&(bits|=_gl.DEPTH_BUFFER_BIT),stencil2&&(bits|=_gl.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_gl.clear(bits)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){canvas.removeEventListener("webglcontextlost",onContextLost,!1),canvas.removeEventListener("webglcontextrestored",onContextRestore,!1),canvas.removeEventListener("webglcontextcreationerror",onContextCreationError,!1),background.dispose(),renderLists.dispose(),renderStates.dispose(),properties.dispose(),cubemaps.dispose(),cubeuvmaps.dispose(),objects.dispose(),bindingStates.dispose(),uniformsGroups.dispose(),programCache.dispose(),xr.dispose(),xr.removeEventListener("sessionstart",onXRSessionStart),xr.removeEventListener("sessionend",onXRSessionEnd),animation.stop()};function onContextLost(event){event.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_isContextLost=!0}function onContextRestore(){console.log("THREE.WebGLRenderer: Context Restored."),_isContextLost=!1;const infoAutoReset=info.autoReset,shadowMapEnabled=shadowMap.enabled,shadowMapAutoUpdate=shadowMap.autoUpdate,shadowMapNeedsUpdate=shadowMap.needsUpdate,shadowMapType=shadowMap.type;initGLContext(),info.autoReset=infoAutoReset,shadowMap.enabled=shadowMapEnabled,shadowMap.autoUpdate=shadowMapAutoUpdate,shadowMap.needsUpdate=shadowMapNeedsUpdate,shadowMap.type=shadowMapType}function onContextCreationError(event){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",event.statusMessage)}function onMaterialDispose(event){const material=event.target;material.removeEventListener("dispose",onMaterialDispose),deallocateMaterial(material)}function deallocateMaterial(material){releaseMaterialProgramReferences(material),properties.remove(material)}function releaseMaterialProgramReferences(material){const programs=properties.get(material).programs;programs!==void 0&&(programs.forEach(function(program){programCache.releaseProgram(program)}),material.isShaderMaterial&&programCache.releaseShaderCache(material))}this.renderBufferDirect=function(camera,scene,geometry,material,object,group){scene===null&&(scene=_emptyScene);const frontFaceCW=object.isMesh&&object.matrixWorld.determinant()<0,program=setProgram(camera,scene,geometry,material,object);state.setMaterial(material,frontFaceCW);let index=geometry.index,rangeFactor=1;if(material.wireframe===!0){if(index=geometries.getWireframeAttribute(geometry),index===void 0)return;rangeFactor=2}const drawRange=geometry.drawRange,position=geometry.attributes.position;let drawStart=drawRange.start*rangeFactor,drawEnd=(drawRange.start+drawRange.count)*rangeFactor;group!==null&&(drawStart=Math.max(drawStart,group.start*rangeFactor),drawEnd=Math.min(drawEnd,(group.start+group.count)*rangeFactor)),index!==null?(drawStart=Math.max(drawStart,0),drawEnd=Math.min(drawEnd,index.count)):position!=null&&(drawStart=Math.max(drawStart,0),drawEnd=Math.min(drawEnd,position.count));const drawCount=drawEnd-drawStart;if(drawCount<0||drawCount===1/0)return;bindingStates.setup(object,material,program,geometry,index);let attribute,renderer=bufferRenderer;if(index!==null&&(attribute=attributes.get(index),renderer=indexedBufferRenderer,renderer.setIndex(attribute)),object.isMesh)material.wireframe===!0?(state.setLineWidth(material.wireframeLinewidth*getTargetPixelRatio()),renderer.setMode(_gl.LINES)):renderer.setMode(_gl.TRIANGLES);else if(object.isLine){let lineWidth=material.linewidth;lineWidth===void 0&&(lineWidth=1),state.setLineWidth(lineWidth*getTargetPixelRatio()),object.isLineSegments?renderer.setMode(_gl.LINES):object.isLineLoop?renderer.setMode(_gl.LINE_LOOP):renderer.setMode(_gl.LINE_STRIP)}else object.isPoints?renderer.setMode(_gl.POINTS):object.isSprite&&renderer.setMode(_gl.TRIANGLES);if(object.isBatchedMesh)if(object._multiDrawInstances!==null)warnOnce("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),renderer.renderMultiDrawInstances(object._multiDrawStarts,object._multiDrawCounts,object._multiDrawCount,object._multiDrawInstances);else if(extensions.get("WEBGL_multi_draw"))renderer.renderMultiDraw(object._multiDrawStarts,object._multiDrawCounts,object._multiDrawCount);else{const starts=object._multiDrawStarts,counts=object._multiDrawCounts,drawCount2=object._multiDrawCount,bytesPerElement=index?attributes.get(index).bytesPerElement:1,uniforms=properties.get(material).currentProgram.getUniforms();for(let i=0;i<drawCount2;i++)uniforms.setValue(_gl,"_gl_DrawID",i),renderer.render(starts[i]/bytesPerElement,counts[i])}else if(object.isInstancedMesh)renderer.renderInstances(drawStart,drawCount,object.count);else if(geometry.isInstancedBufferGeometry){const maxInstanceCount=geometry._maxInstanceCount!==void 0?geometry._maxInstanceCount:1/0,instanceCount=Math.min(geometry.instanceCount,maxInstanceCount);renderer.renderInstances(drawStart,drawCount,instanceCount)}else renderer.render(drawStart,drawCount)};function prepareMaterial(material,scene,object){material.transparent===!0&&material.side===DoubleSide&&material.forceSinglePass===!1?(material.side=BackSide,material.needsUpdate=!0,getProgram(material,scene,object),material.side=FrontSide,material.needsUpdate=!0,getProgram(material,scene,object),material.side=DoubleSide):getProgram(material,scene,object)}this.compile=function(scene,camera,targetScene=null){targetScene===null&&(targetScene=scene),currentRenderState=renderStates.get(targetScene),currentRenderState.init(camera),renderStateStack.push(currentRenderState),targetScene.traverseVisible(function(object){object.isLight&&object.layers.test(camera.layers)&&(currentRenderState.pushLight(object),object.castShadow&&currentRenderState.pushShadow(object))}),scene!==targetScene&&scene.traverseVisible(function(object){object.isLight&&object.layers.test(camera.layers)&&(currentRenderState.pushLight(object),object.castShadow&&currentRenderState.pushShadow(object))}),currentRenderState.setupLights();const materials2=new Set;return scene.traverse(function(object){if(!(object.isMesh||object.isPoints||object.isLine||object.isSprite))return;const material=object.material;if(material)if(Array.isArray(material))for(let i=0;i<material.length;i++){const material2=material[i];prepareMaterial(material2,targetScene,object),materials2.add(material2)}else prepareMaterial(material,targetScene,object),materials2.add(material)}),currentRenderState=renderStateStack.pop(),materials2},this.compileAsync=function(scene,camera,targetScene=null){const materials2=this.compile(scene,camera,targetScene);return new Promise(resolve=>{function checkMaterialsReady(){if(materials2.forEach(function(material){properties.get(material).currentProgram.isReady()&&materials2.delete(material)}),materials2.size===0){resolve(scene);return}setTimeout(checkMaterialsReady,10)}extensions.get("KHR_parallel_shader_compile")!==null?checkMaterialsReady():setTimeout(checkMaterialsReady,10)})};let onAnimationFrameCallback=null;function onAnimationFrame(time){onAnimationFrameCallback&&onAnimationFrameCallback(time)}function onXRSessionStart(){animation.stop()}function onXRSessionEnd(){animation.start()}const animation=new WebGLAnimation;animation.setAnimationLoop(onAnimationFrame),typeof self<"u"&&animation.setContext(self),this.setAnimationLoop=function(callback){onAnimationFrameCallback=callback,xr.setAnimationLoop(callback),callback===null?animation.stop():animation.start()},xr.addEventListener("sessionstart",onXRSessionStart),xr.addEventListener("sessionend",onXRSessionEnd),this.render=function(scene,camera){if(camera!==void 0&&camera.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_isContextLost===!0)return;if(scene.matrixWorldAutoUpdate===!0&&scene.updateMatrixWorld(),camera.parent===null&&camera.matrixWorldAutoUpdate===!0&&camera.updateMatrixWorld(),xr.enabled===!0&&xr.isPresenting===!0&&(xr.cameraAutoUpdate===!0&&xr.updateCamera(camera),camera=xr.getCamera()),scene.isScene===!0&&scene.onBeforeRender(_this,scene,camera,_currentRenderTarget),currentRenderState=renderStates.get(scene,renderStateStack.length),currentRenderState.init(camera),renderStateStack.push(currentRenderState),_projScreenMatrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse),_frustum.setFromProjectionMatrix(_projScreenMatrix),_localClippingEnabled=this.localClippingEnabled,_clippingEnabled=clipping.init(this.clippingPlanes,_localClippingEnabled),currentRenderList=renderLists.get(scene,renderListStack.length),currentRenderList.init(),renderListStack.push(currentRenderList),xr.enabled===!0&&xr.isPresenting===!0){const depthSensingMesh=_this.xr.getDepthSensingMesh();depthSensingMesh!==null&&projectObject(depthSensingMesh,camera,-1/0,_this.sortObjects)}projectObject(scene,camera,0,_this.sortObjects),currentRenderList.finish(),_this.sortObjects===!0&&currentRenderList.sort(_opaqueSort,_transparentSort),_renderBackground=xr.enabled===!1||xr.isPresenting===!1||xr.hasDepthSensing()===!1,_renderBackground&&background.addToRenderList(currentRenderList,scene),this.info.render.frame++,_clippingEnabled===!0&&clipping.beginShadows();const shadowsArray=currentRenderState.state.shadowsArray;shadowMap.render(shadowsArray,scene,camera),_clippingEnabled===!0&&clipping.endShadows(),this.info.autoReset===!0&&this.info.reset();const opaqueObjects=currentRenderList.opaque,transmissiveObjects=currentRenderList.transmissive;if(currentRenderState.setupLights(),camera.isArrayCamera){const cameras=camera.cameras;if(transmissiveObjects.length>0)for(let i=0,l=cameras.length;i<l;i++){const camera2=cameras[i];renderTransmissionPass(opaqueObjects,transmissiveObjects,scene,camera2)}_renderBackground&&background.render(scene);for(let i=0,l=cameras.length;i<l;i++){const camera2=cameras[i];renderScene(currentRenderList,scene,camera2,camera2.viewport)}}else transmissiveObjects.length>0&&renderTransmissionPass(opaqueObjects,transmissiveObjects,scene,camera),_renderBackground&&background.render(scene),renderScene(currentRenderList,scene,camera);_currentRenderTarget!==null&&_currentActiveMipmapLevel===0&&(textures.updateMultisampleRenderTarget(_currentRenderTarget),textures.updateRenderTargetMipmap(_currentRenderTarget)),scene.isScene===!0&&scene.onAfterRender(_this,scene,camera),bindingStates.resetDefaultState(),_currentMaterialId=-1,_currentCamera=null,renderStateStack.pop(),renderStateStack.length>0?(currentRenderState=renderStateStack[renderStateStack.length-1],_clippingEnabled===!0&&clipping.setGlobalState(_this.clippingPlanes,currentRenderState.state.camera)):currentRenderState=null,renderListStack.pop(),renderListStack.length>0?currentRenderList=renderListStack[renderListStack.length-1]:currentRenderList=null};function projectObject(object,camera,groupOrder,sortObjects){if(object.visible===!1)return;if(object.layers.test(camera.layers)){if(object.isGroup)groupOrder=object.renderOrder;else if(object.isLOD)object.autoUpdate===!0&&object.update(camera);else if(object.isLight)currentRenderState.pushLight(object),object.castShadow&&currentRenderState.pushShadow(object);else if(object.isSprite){if(!object.frustumCulled||_frustum.intersectsSprite(object)){sortObjects&&_vector4.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix);const geometry=objects.update(object),material=object.material;material.visible&&currentRenderList.push(object,geometry,material,groupOrder,_vector4.z,null)}}else if((object.isMesh||object.isLine||object.isPoints)&&(!object.frustumCulled||_frustum.intersectsObject(object))){const geometry=objects.update(object),material=object.material;if(sortObjects&&(object.boundingSphere!==void 0?(object.boundingSphere===null&&object.computeBoundingSphere(),_vector4.copy(object.boundingSphere.center)):(geometry.boundingSphere===null&&geometry.computeBoundingSphere(),_vector4.copy(geometry.boundingSphere.center)),_vector4.applyMatrix4(object.matrixWorld).applyMatrix4(_projScreenMatrix)),Array.isArray(material)){const groups=geometry.groups;for(let i=0,l=groups.length;i<l;i++){const group=groups[i],groupMaterial=material[group.materialIndex];groupMaterial&&groupMaterial.visible&&currentRenderList.push(object,geometry,groupMaterial,groupOrder,_vector4.z,group)}}else material.visible&&currentRenderList.push(object,geometry,material,groupOrder,_vector4.z,null)}}const children=object.children;for(let i=0,l=children.length;i<l;i++)projectObject(children[i],camera,groupOrder,sortObjects)}function renderScene(currentRenderList2,scene,camera,viewport){const opaqueObjects=currentRenderList2.opaque,transmissiveObjects=currentRenderList2.transmissive,transparentObjects=currentRenderList2.transparent;currentRenderState.setupLightsView(camera),_clippingEnabled===!0&&clipping.setGlobalState(_this.clippingPlanes,camera),viewport&&state.viewport(_currentViewport.copy(viewport)),opaqueObjects.length>0&&renderObjects(opaqueObjects,scene,camera),transmissiveObjects.length>0&&renderObjects(transmissiveObjects,scene,camera),transparentObjects.length>0&&renderObjects(transparentObjects,scene,camera),state.buffers.depth.setTest(!0),state.buffers.depth.setMask(!0),state.buffers.color.setMask(!0),state.setPolygonOffset(!1)}function renderTransmissionPass(opaqueObjects,transmissiveObjects,scene,camera){if((scene.isScene===!0?scene.overrideMaterial:null)!==null)return;currentRenderState.state.transmissionRenderTarget[camera.id]===void 0&&(currentRenderState.state.transmissionRenderTarget[camera.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:extensions.has("EXT_color_buffer_half_float")||extensions.has("EXT_color_buffer_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:4,stencilBuffer:stencil,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace}));const transmissionRenderTarget=currentRenderState.state.transmissionRenderTarget[camera.id],activeViewport=camera.viewport||_currentViewport;transmissionRenderTarget.setSize(activeViewport.z*_this.transmissionResolutionScale,activeViewport.w*_this.transmissionResolutionScale);const currentRenderTarget=_this.getRenderTarget(),currentActiveCubeFace=_this.getActiveCubeFace(),currentActiveMipmapLevel=_this.getActiveMipmapLevel();_this.setRenderTarget(transmissionRenderTarget),_this.getClearColor(_currentClearColor),_currentClearAlpha=_this.getClearAlpha(),_currentClearAlpha<1&&_this.setClearColor(16777215,.5),_this.clear(),_renderBackground&&background.render(scene);const currentToneMapping=_this.toneMapping;_this.toneMapping=NoToneMapping;const currentCameraViewport=camera.viewport;if(camera.viewport!==void 0&&(camera.viewport=void 0),currentRenderState.setupLightsView(camera),_clippingEnabled===!0&&clipping.setGlobalState(_this.clippingPlanes,camera),renderObjects(opaqueObjects,scene,camera),textures.updateMultisampleRenderTarget(transmissionRenderTarget),textures.updateRenderTargetMipmap(transmissionRenderTarget),extensions.has("WEBGL_multisampled_render_to_texture")===!1){let renderTargetNeedsUpdate=!1;for(let i=0,l=transmissiveObjects.length;i<l;i++){const renderItem=transmissiveObjects[i],object=renderItem.object,geometry=renderItem.geometry,material=renderItem.material,group=renderItem.group;if(material.side===DoubleSide&&object.layers.test(camera.layers)){const currentSide=material.side;material.side=BackSide,material.needsUpdate=!0,renderObject(object,scene,camera,geometry,material,group),material.side=currentSide,material.needsUpdate=!0,renderTargetNeedsUpdate=!0}}renderTargetNeedsUpdate===!0&&(textures.updateMultisampleRenderTarget(transmissionRenderTarget),textures.updateRenderTargetMipmap(transmissionRenderTarget))}_this.setRenderTarget(currentRenderTarget,currentActiveCubeFace,currentActiveMipmapLevel),_this.setClearColor(_currentClearColor,_currentClearAlpha),currentCameraViewport!==void 0&&(camera.viewport=currentCameraViewport),_this.toneMapping=currentToneMapping}function renderObjects(renderList,scene,camera){const overrideMaterial=scene.isScene===!0?scene.overrideMaterial:null;for(let i=0,l=renderList.length;i<l;i++){const renderItem=renderList[i],object=renderItem.object,geometry=renderItem.geometry,group=renderItem.group;let material=renderItem.material;material.allowOverride===!0&&overrideMaterial!==null&&(material=overrideMaterial),object.layers.test(camera.layers)&&renderObject(object,scene,camera,geometry,material,group)}}function renderObject(object,scene,camera,geometry,material,group){object.onBeforeRender(_this,scene,camera,geometry,material,group),object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse,object.matrixWorld),object.normalMatrix.getNormalMatrix(object.modelViewMatrix),material.onBeforeRender(_this,scene,camera,geometry,object,group),material.transparent===!0&&material.side===DoubleSide&&material.forceSinglePass===!1?(material.side=BackSide,material.needsUpdate=!0,_this.renderBufferDirect(camera,scene,geometry,material,object,group),material.side=FrontSide,material.needsUpdate=!0,_this.renderBufferDirect(camera,scene,geometry,material,object,group),material.side=DoubleSide):_this.renderBufferDirect(camera,scene,geometry,material,object,group),object.onAfterRender(_this,scene,camera,geometry,material,group)}function getProgram(material,scene,object){scene.isScene!==!0&&(scene=_emptyScene);const materialProperties=properties.get(material),lights=currentRenderState.state.lights,shadowsArray=currentRenderState.state.shadowsArray,lightsStateVersion=lights.state.version,parameters2=programCache.getParameters(material,lights.state,shadowsArray,scene,object),programCacheKey=programCache.getProgramCacheKey(parameters2);let programs=materialProperties.programs;materialProperties.environment=material.isMeshStandardMaterial?scene.environment:null,materialProperties.fog=scene.fog,materialProperties.envMap=(material.isMeshStandardMaterial?cubeuvmaps:cubemaps).get(material.envMap||materialProperties.environment),materialProperties.envMapRotation=materialProperties.environment!==null&&material.envMap===null?scene.environmentRotation:material.envMapRotation,programs===void 0&&(material.addEventListener("dispose",onMaterialDispose),programs=new Map,materialProperties.programs=programs);let program=programs.get(programCacheKey);if(program!==void 0){if(materialProperties.currentProgram===program&&materialProperties.lightsStateVersion===lightsStateVersion)return updateCommonMaterialProperties(material,parameters2),program}else parameters2.uniforms=programCache.getUniforms(material),material.onBeforeCompile(parameters2,_this),program=programCache.acquireProgram(parameters2,programCacheKey),programs.set(programCacheKey,program),materialProperties.uniforms=parameters2.uniforms;const uniforms=materialProperties.uniforms;return(!material.isShaderMaterial&&!material.isRawShaderMaterial||material.clipping===!0)&&(uniforms.clippingPlanes=clipping.uniform),updateCommonMaterialProperties(material,parameters2),materialProperties.needsLights=materialNeedsLights(material),materialProperties.lightsStateVersion=lightsStateVersion,materialProperties.needsLights&&(uniforms.ambientLightColor.value=lights.state.ambient,uniforms.lightProbe.value=lights.state.probe,uniforms.directionalLights.value=lights.state.directional,uniforms.directionalLightShadows.value=lights.state.directionalShadow,uniforms.spotLights.value=lights.state.spot,uniforms.spotLightShadows.value=lights.state.spotShadow,uniforms.rectAreaLights.value=lights.state.rectArea,uniforms.ltc_1.value=lights.state.rectAreaLTC1,uniforms.ltc_2.value=lights.state.rectAreaLTC2,uniforms.pointLights.value=lights.state.point,uniforms.pointLightShadows.value=lights.state.pointShadow,uniforms.hemisphereLights.value=lights.state.hemi,uniforms.directionalShadowMap.value=lights.state.directionalShadowMap,uniforms.directionalShadowMatrix.value=lights.state.directionalShadowMatrix,uniforms.spotShadowMap.value=lights.state.spotShadowMap,uniforms.spotLightMatrix.value=lights.state.spotLightMatrix,uniforms.spotLightMap.value=lights.state.spotLightMap,uniforms.pointShadowMap.value=lights.state.pointShadowMap,uniforms.pointShadowMatrix.value=lights.state.pointShadowMatrix),materialProperties.currentProgram=program,materialProperties.uniformsList=null,program}function getUniformList(materialProperties){if(materialProperties.uniformsList===null){const progUniforms=materialProperties.currentProgram.getUniforms();materialProperties.uniformsList=WebGLUniforms.seqWithValue(progUniforms.seq,materialProperties.uniforms)}return materialProperties.uniformsList}function updateCommonMaterialProperties(material,parameters2){const materialProperties=properties.get(material);materialProperties.outputColorSpace=parameters2.outputColorSpace,materialProperties.batching=parameters2.batching,materialProperties.batchingColor=parameters2.batchingColor,materialProperties.instancing=parameters2.instancing,materialProperties.instancingColor=parameters2.instancingColor,materialProperties.instancingMorph=parameters2.instancingMorph,materialProperties.skinning=parameters2.skinning,materialProperties.morphTargets=parameters2.morphTargets,materialProperties.morphNormals=parameters2.morphNormals,materialProperties.morphColors=parameters2.morphColors,materialProperties.morphTargetsCount=parameters2.morphTargetsCount,materialProperties.numClippingPlanes=parameters2.numClippingPlanes,materialProperties.numIntersection=parameters2.numClipIntersection,materialProperties.vertexAlphas=parameters2.vertexAlphas,materialProperties.vertexTangents=parameters2.vertexTangents,materialProperties.toneMapping=parameters2.toneMapping}function setProgram(camera,scene,geometry,material,object){scene.isScene!==!0&&(scene=_emptyScene),textures.resetTextureUnits();const fog=scene.fog,environment=material.isMeshStandardMaterial?scene.environment:null,colorSpace=_currentRenderTarget===null?_this.outputColorSpace:_currentRenderTarget.isXRRenderTarget===!0?_currentRenderTarget.texture.colorSpace:LinearSRGBColorSpace,envMap=(material.isMeshStandardMaterial?cubeuvmaps:cubemaps).get(material.envMap||environment),vertexAlphas=material.vertexColors===!0&&!!geometry.attributes.color&&geometry.attributes.color.itemSize===4,vertexTangents=!!geometry.attributes.tangent&&(!!material.normalMap||material.anisotropy>0),morphTargets=!!geometry.morphAttributes.position,morphNormals=!!geometry.morphAttributes.normal,morphColors=!!geometry.morphAttributes.color;let toneMapping=NoToneMapping;material.toneMapped&&(_currentRenderTarget===null||_currentRenderTarget.isXRRenderTarget===!0)&&(toneMapping=_this.toneMapping);const morphAttribute=geometry.morphAttributes.position||geometry.morphAttributes.normal||geometry.morphAttributes.color,morphTargetsCount=morphAttribute!==void 0?morphAttribute.length:0,materialProperties=properties.get(material),lights=currentRenderState.state.lights;if(_clippingEnabled===!0&&(_localClippingEnabled===!0||camera!==_currentCamera)){const useCache=camera===_currentCamera&&material.id===_currentMaterialId;clipping.setState(material,camera,useCache)}let needsProgramChange=!1;material.version===materialProperties.__version?(materialProperties.needsLights&&materialProperties.lightsStateVersion!==lights.state.version||materialProperties.outputColorSpace!==colorSpace||object.isBatchedMesh&&materialProperties.batching===!1||!object.isBatchedMesh&&materialProperties.batching===!0||object.isBatchedMesh&&materialProperties.batchingColor===!0&&object.colorTexture===null||object.isBatchedMesh&&materialProperties.batchingColor===!1&&object.colorTexture!==null||object.isInstancedMesh&&materialProperties.instancing===!1||!object.isInstancedMesh&&materialProperties.instancing===!0||object.isSkinnedMesh&&materialProperties.skinning===!1||!object.isSkinnedMesh&&materialProperties.skinning===!0||object.isInstancedMesh&&materialProperties.instancingColor===!0&&object.instanceColor===null||object.isInstancedMesh&&materialProperties.instancingColor===!1&&object.instanceColor!==null||object.isInstancedMesh&&materialProperties.instancingMorph===!0&&object.morphTexture===null||object.isInstancedMesh&&materialProperties.instancingMorph===!1&&object.morphTexture!==null||materialProperties.envMap!==envMap||material.fog===!0&&materialProperties.fog!==fog||materialProperties.numClippingPlanes!==void 0&&(materialProperties.numClippingPlanes!==clipping.numPlanes||materialProperties.numIntersection!==clipping.numIntersection)||materialProperties.vertexAlphas!==vertexAlphas||materialProperties.vertexTangents!==vertexTangents||materialProperties.morphTargets!==morphTargets||materialProperties.morphNormals!==morphNormals||materialProperties.morphColors!==morphColors||materialProperties.toneMapping!==toneMapping||materialProperties.morphTargetsCount!==morphTargetsCount)&&(needsProgramChange=!0):(needsProgramChange=!0,materialProperties.__version=material.version);let program=materialProperties.currentProgram;needsProgramChange===!0&&(program=getProgram(material,scene,object));let refreshProgram=!1,refreshMaterial=!1,refreshLights=!1;const p_uniforms=program.getUniforms(),m_uniforms=materialProperties.uniforms;if(state.useProgram(program.program)&&(refreshProgram=!0,refreshMaterial=!0,refreshLights=!0),material.id!==_currentMaterialId&&(_currentMaterialId=material.id,refreshMaterial=!0),refreshProgram||_currentCamera!==camera){state.buffers.depth.getReversed()?(_currentProjectionMatrix.copy(camera.projectionMatrix),toNormalizedProjectionMatrix(_currentProjectionMatrix),toReversedProjectionMatrix(_currentProjectionMatrix),p_uniforms.setValue(_gl,"projectionMatrix",_currentProjectionMatrix)):p_uniforms.setValue(_gl,"projectionMatrix",camera.projectionMatrix),p_uniforms.setValue(_gl,"viewMatrix",camera.matrixWorldInverse);const uCamPos=p_uniforms.map.cameraPosition;uCamPos!==void 0&&uCamPos.setValue(_gl,_vector3.setFromMatrixPosition(camera.matrixWorld)),capabilities.logarithmicDepthBuffer&&p_uniforms.setValue(_gl,"logDepthBufFC",2/(Math.log(camera.far+1)/Math.LN2)),(material.isMeshPhongMaterial||material.isMeshToonMaterial||material.isMeshLambertMaterial||material.isMeshBasicMaterial||material.isMeshStandardMaterial||material.isShaderMaterial)&&p_uniforms.setValue(_gl,"isOrthographic",camera.isOrthographicCamera===!0),_currentCamera!==camera&&(_currentCamera=camera,refreshMaterial=!0,refreshLights=!0)}if(object.isSkinnedMesh){p_uniforms.setOptional(_gl,object,"bindMatrix"),p_uniforms.setOptional(_gl,object,"bindMatrixInverse");const skeleton=object.skeleton;skeleton&&(skeleton.boneTexture===null&&skeleton.computeBoneTexture(),p_uniforms.setValue(_gl,"boneTexture",skeleton.boneTexture,textures))}object.isBatchedMesh&&(p_uniforms.setOptional(_gl,object,"batchingTexture"),p_uniforms.setValue(_gl,"batchingTexture",object._matricesTexture,textures),p_uniforms.setOptional(_gl,object,"batchingIdTexture"),p_uniforms.setValue(_gl,"batchingIdTexture",object._indirectTexture,textures),p_uniforms.setOptional(_gl,object,"batchingColorTexture"),object._colorsTexture!==null&&p_uniforms.setValue(_gl,"batchingColorTexture",object._colorsTexture,textures));const morphAttributes=geometry.morphAttributes;if((morphAttributes.position!==void 0||morphAttributes.normal!==void 0||morphAttributes.color!==void 0)&&morphtargets.update(object,geometry,program),(refreshMaterial||materialProperties.receiveShadow!==object.receiveShadow)&&(materialProperties.receiveShadow=object.receiveShadow,p_uniforms.setValue(_gl,"receiveShadow",object.receiveShadow)),material.isMeshGouraudMaterial&&material.envMap!==null&&(m_uniforms.envMap.value=envMap,m_uniforms.flipEnvMap.value=envMap.isCubeTexture&&envMap.isRenderTargetTexture===!1?-1:1),material.isMeshStandardMaterial&&material.envMap===null&&scene.environment!==null&&(m_uniforms.envMapIntensity.value=scene.environmentIntensity),refreshMaterial&&(p_uniforms.setValue(_gl,"toneMappingExposure",_this.toneMappingExposure),materialProperties.needsLights&&markUniformsLightsNeedsUpdate(m_uniforms,refreshLights),fog&&material.fog===!0&&materials.refreshFogUniforms(m_uniforms,fog),materials.refreshMaterialUniforms(m_uniforms,material,_pixelRatio,_height,currentRenderState.state.transmissionRenderTarget[camera.id]),WebGLUniforms.upload(_gl,getUniformList(materialProperties),m_uniforms,textures)),material.isShaderMaterial&&material.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(_gl,getUniformList(materialProperties),m_uniforms,textures),material.uniformsNeedUpdate=!1),material.isSpriteMaterial&&p_uniforms.setValue(_gl,"center",object.center),p_uniforms.setValue(_gl,"modelViewMatrix",object.modelViewMatrix),p_uniforms.setValue(_gl,"normalMatrix",object.normalMatrix),p_uniforms.setValue(_gl,"modelMatrix",object.matrixWorld),material.isShaderMaterial||material.isRawShaderMaterial){const groups=material.uniformsGroups;for(let i=0,l=groups.length;i<l;i++){const group=groups[i];uniformsGroups.update(group,program),uniformsGroups.bind(group,program)}}return program}function markUniformsLightsNeedsUpdate(uniforms,value){uniforms.ambientLightColor.needsUpdate=value,uniforms.lightProbe.needsUpdate=value,uniforms.directionalLights.needsUpdate=value,uniforms.directionalLightShadows.needsUpdate=value,uniforms.pointLights.needsUpdate=value,uniforms.pointLightShadows.needsUpdate=value,uniforms.spotLights.needsUpdate=value,uniforms.spotLightShadows.needsUpdate=value,uniforms.rectAreaLights.needsUpdate=value,uniforms.hemisphereLights.needsUpdate=value}function materialNeedsLights(material){return material.isMeshLambertMaterial||material.isMeshToonMaterial||material.isMeshPhongMaterial||material.isMeshStandardMaterial||material.isShadowMaterial||material.isShaderMaterial&&material.lights===!0}this.getActiveCubeFace=function(){return _currentActiveCubeFace},this.getActiveMipmapLevel=function(){return _currentActiveMipmapLevel},this.getRenderTarget=function(){return _currentRenderTarget},this.setRenderTargetTextures=function(renderTarget,colorTexture,depthTexture){const renderTargetProperties=properties.get(renderTarget);renderTargetProperties.__autoAllocateDepthBuffer=renderTarget.resolveDepthBuffer===!1,renderTargetProperties.__autoAllocateDepthBuffer===!1&&(renderTargetProperties.__useRenderToTexture=!1),properties.get(renderTarget.texture).__webglTexture=colorTexture,properties.get(renderTarget.depthTexture).__webglTexture=renderTargetProperties.__autoAllocateDepthBuffer?void 0:depthTexture,renderTargetProperties.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(renderTarget,defaultFramebuffer){const renderTargetProperties=properties.get(renderTarget);renderTargetProperties.__webglFramebuffer=defaultFramebuffer,renderTargetProperties.__useDefaultFramebuffer=defaultFramebuffer===void 0};const _scratchFrameBuffer=_gl.createFramebuffer();this.setRenderTarget=function(renderTarget,activeCubeFace=0,activeMipmapLevel=0){_currentRenderTarget=renderTarget,_currentActiveCubeFace=activeCubeFace,_currentActiveMipmapLevel=activeMipmapLevel;let useDefaultFramebuffer=!0,framebuffer=null,isCube=!1,isRenderTarget3D=!1;if(renderTarget){const renderTargetProperties=properties.get(renderTarget);if(renderTargetProperties.__useDefaultFramebuffer!==void 0)state.bindFramebuffer(_gl.FRAMEBUFFER,null),useDefaultFramebuffer=!1;else if(renderTargetProperties.__webglFramebuffer===void 0)textures.setupRenderTarget(renderTarget);else if(renderTargetProperties.__hasExternalTextures)textures.rebindTextures(renderTarget,properties.get(renderTarget.texture).__webglTexture,properties.get(renderTarget.depthTexture).__webglTexture);else if(renderTarget.depthBuffer){const depthTexture=renderTarget.depthTexture;if(renderTargetProperties.__boundDepthTexture!==depthTexture){if(depthTexture!==null&&properties.has(depthTexture)&&(renderTarget.width!==depthTexture.image.width||renderTarget.height!==depthTexture.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");textures.setupDepthRenderbuffer(renderTarget)}}const texture=renderTarget.texture;(texture.isData3DTexture||texture.isDataArrayTexture||texture.isCompressedArrayTexture)&&(isRenderTarget3D=!0);const __webglFramebuffer=properties.get(renderTarget).__webglFramebuffer;renderTarget.isWebGLCubeRenderTarget?(Array.isArray(__webglFramebuffer[activeCubeFace])?framebuffer=__webglFramebuffer[activeCubeFace][activeMipmapLevel]:framebuffer=__webglFramebuffer[activeCubeFace],isCube=!0):renderTarget.samples>0&&textures.useMultisampledRTT(renderTarget)===!1?framebuffer=properties.get(renderTarget).__webglMultisampledFramebuffer:Array.isArray(__webglFramebuffer)?framebuffer=__webglFramebuffer[activeMipmapLevel]:framebuffer=__webglFramebuffer,_currentViewport.copy(renderTarget.viewport),_currentScissor.copy(renderTarget.scissor),_currentScissorTest=renderTarget.scissorTest}else _currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor(),_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).floor(),_currentScissorTest=_scissorTest;if(activeMipmapLevel!==0&&(framebuffer=_scratchFrameBuffer),state.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer)&&useDefaultFramebuffer&&state.drawBuffers(renderTarget,framebuffer),state.viewport(_currentViewport),state.scissor(_currentScissor),state.setScissorTest(_currentScissorTest),isCube){const textureProperties=properties.get(renderTarget.texture);_gl.framebufferTexture2D(_gl.FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_CUBE_MAP_POSITIVE_X+activeCubeFace,textureProperties.__webglTexture,activeMipmapLevel)}else if(isRenderTarget3D){const textureProperties=properties.get(renderTarget.texture),layer=activeCubeFace;_gl.framebufferTextureLayer(_gl.FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,textureProperties.__webglTexture,activeMipmapLevel,layer)}else if(renderTarget!==null&&activeMipmapLevel!==0){const textureProperties=properties.get(renderTarget.texture);_gl.framebufferTexture2D(_gl.FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_2D,textureProperties.__webglTexture,activeMipmapLevel)}_currentMaterialId=-1},this.readRenderTargetPixels=function(renderTarget,x,y,width,height,buffer,activeCubeFaceIndex,textureIndex=0){if(!(renderTarget&&renderTarget.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let framebuffer=properties.get(renderTarget).__webglFramebuffer;if(renderTarget.isWebGLCubeRenderTarget&&activeCubeFaceIndex!==void 0&&(framebuffer=framebuffer[activeCubeFaceIndex]),framebuffer){state.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer);try{const texture=renderTarget.textures[textureIndex],textureFormat=texture.format,textureType=texture.type;if(!capabilities.textureFormatReadable(textureFormat)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!capabilities.textureTypeReadable(textureType)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=renderTarget.width-width&&y>=0&&y<=renderTarget.height-height&&(renderTarget.textures.length>1&&_gl.readBuffer(_gl.COLOR_ATTACHMENT0+textureIndex),_gl.readPixels(x,y,width,height,utils.convert(textureFormat),utils.convert(textureType),buffer))}finally{const framebuffer2=_currentRenderTarget!==null?properties.get(_currentRenderTarget).__webglFramebuffer:null;state.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer2)}}},this.readRenderTargetPixelsAsync=async function(renderTarget,x,y,width,height,buffer,activeCubeFaceIndex,textureIndex=0){if(!(renderTarget&&renderTarget.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let framebuffer=properties.get(renderTarget).__webglFramebuffer;if(renderTarget.isWebGLCubeRenderTarget&&activeCubeFaceIndex!==void 0&&(framebuffer=framebuffer[activeCubeFaceIndex]),framebuffer)if(x>=0&&x<=renderTarget.width-width&&y>=0&&y<=renderTarget.height-height){state.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer);const texture=renderTarget.textures[textureIndex],textureFormat=texture.format,textureType=texture.type;if(!capabilities.textureFormatReadable(textureFormat))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!capabilities.textureTypeReadable(textureType))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const glBuffer=_gl.createBuffer();_gl.bindBuffer(_gl.PIXEL_PACK_BUFFER,glBuffer),_gl.bufferData(_gl.PIXEL_PACK_BUFFER,buffer.byteLength,_gl.STREAM_READ),renderTarget.textures.length>1&&_gl.readBuffer(_gl.COLOR_ATTACHMENT0+textureIndex),_gl.readPixels(x,y,width,height,utils.convert(textureFormat),utils.convert(textureType),0);const currFramebuffer=_currentRenderTarget!==null?properties.get(_currentRenderTarget).__webglFramebuffer:null;state.bindFramebuffer(_gl.FRAMEBUFFER,currFramebuffer);const sync=_gl.fenceSync(_gl.SYNC_GPU_COMMANDS_COMPLETE,0);return _gl.flush(),await probeAsync(_gl,sync,4),_gl.bindBuffer(_gl.PIXEL_PACK_BUFFER,glBuffer),_gl.getBufferSubData(_gl.PIXEL_PACK_BUFFER,0,buffer),_gl.deleteBuffer(glBuffer),_gl.deleteSync(sync),buffer}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(texture,position=null,level=0){const levelScale=Math.pow(2,-level),width=Math.floor(texture.image.width*levelScale),height=Math.floor(texture.image.height*levelScale),x=position!==null?position.x:0,y=position!==null?position.y:0;textures.setTexture2D(texture,0),_gl.copyTexSubImage2D(_gl.TEXTURE_2D,level,0,0,x,y,width,height),state.unbindTexture()};const _srcFramebuffer=_gl.createFramebuffer(),_dstFramebuffer=_gl.createFramebuffer();this.copyTextureToTexture=function(srcTexture,dstTexture,srcRegion=null,dstPosition=null,srcLevel=0,dstLevel=null){dstLevel===null&&(srcLevel!==0?(warnOnce("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dstLevel=srcLevel,srcLevel=0):dstLevel=0);let width,height,depth2,minX,minY,minZ,dstX,dstY,dstZ;const image=srcTexture.isCompressedTexture?srcTexture.mipmaps[dstLevel]:srcTexture.image;if(srcRegion!==null)width=srcRegion.max.x-srcRegion.min.x,height=srcRegion.max.y-srcRegion.min.y,depth2=srcRegion.isBox3?srcRegion.max.z-srcRegion.min.z:1,minX=srcRegion.min.x,minY=srcRegion.min.y,minZ=srcRegion.isBox3?srcRegion.min.z:0;else{const levelScale=Math.pow(2,-srcLevel);width=Math.floor(image.width*levelScale),height=Math.floor(image.height*levelScale),srcTexture.isDataArrayTexture?depth2=image.depth:srcTexture.isData3DTexture?depth2=Math.floor(image.depth*levelScale):depth2=1,minX=0,minY=0,minZ=0}dstPosition!==null?(dstX=dstPosition.x,dstY=dstPosition.y,dstZ=dstPosition.z):(dstX=0,dstY=0,dstZ=0);const glFormat=utils.convert(dstTexture.format),glType=utils.convert(dstTexture.type);let glTarget;dstTexture.isData3DTexture?(textures.setTexture3D(dstTexture,0),glTarget=_gl.TEXTURE_3D):dstTexture.isDataArrayTexture||dstTexture.isCompressedArrayTexture?(textures.setTexture2DArray(dstTexture,0),glTarget=_gl.TEXTURE_2D_ARRAY):(textures.setTexture2D(dstTexture,0),glTarget=_gl.TEXTURE_2D),_gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL,dstTexture.flipY),_gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,dstTexture.premultiplyAlpha),_gl.pixelStorei(_gl.UNPACK_ALIGNMENT,dstTexture.unpackAlignment);const currentUnpackRowLen=_gl.getParameter(_gl.UNPACK_ROW_LENGTH),currentUnpackImageHeight=_gl.getParameter(_gl.UNPACK_IMAGE_HEIGHT),currentUnpackSkipPixels=_gl.getParameter(_gl.UNPACK_SKIP_PIXELS),currentUnpackSkipRows=_gl.getParameter(_gl.UNPACK_SKIP_ROWS),currentUnpackSkipImages=_gl.getParameter(_gl.UNPACK_SKIP_IMAGES);_gl.pixelStorei(_gl.UNPACK_ROW_LENGTH,image.width),_gl.pixelStorei(_gl.UNPACK_IMAGE_HEIGHT,image.height),_gl.pixelStorei(_gl.UNPACK_SKIP_PIXELS,minX),_gl.pixelStorei(_gl.UNPACK_SKIP_ROWS,minY),_gl.pixelStorei(_gl.UNPACK_SKIP_IMAGES,minZ);const isSrc3D=srcTexture.isDataArrayTexture||srcTexture.isData3DTexture,isDst3D=dstTexture.isDataArrayTexture||dstTexture.isData3DTexture;if(srcTexture.isDepthTexture){const srcTextureProperties=properties.get(srcTexture),dstTextureProperties=properties.get(dstTexture),srcRenderTargetProperties=properties.get(srcTextureProperties.__renderTarget),dstRenderTargetProperties=properties.get(dstTextureProperties.__renderTarget);state.bindFramebuffer(_gl.READ_FRAMEBUFFER,srcRenderTargetProperties.__webglFramebuffer),state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,dstRenderTargetProperties.__webglFramebuffer);for(let i=0;i<depth2;i++)isSrc3D&&(_gl.framebufferTextureLayer(_gl.READ_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,properties.get(srcTexture).__webglTexture,srcLevel,minZ+i),_gl.framebufferTextureLayer(_gl.DRAW_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,properties.get(dstTexture).__webglTexture,dstLevel,dstZ+i)),_gl.blitFramebuffer(minX,minY,width,height,dstX,dstY,width,height,_gl.DEPTH_BUFFER_BIT,_gl.NEAREST);state.bindFramebuffer(_gl.READ_FRAMEBUFFER,null),state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,null)}else if(srcLevel!==0||srcTexture.isRenderTargetTexture||properties.has(srcTexture)){const srcTextureProperties=properties.get(srcTexture),dstTextureProperties=properties.get(dstTexture);state.bindFramebuffer(_gl.READ_FRAMEBUFFER,_srcFramebuffer),state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,_dstFramebuffer);for(let i=0;i<depth2;i++)isSrc3D?_gl.framebufferTextureLayer(_gl.READ_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,srcTextureProperties.__webglTexture,srcLevel,minZ+i):_gl.framebufferTexture2D(_gl.READ_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_2D,srcTextureProperties.__webglTexture,srcLevel),isDst3D?_gl.framebufferTextureLayer(_gl.DRAW_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,dstTextureProperties.__webglTexture,dstLevel,dstZ+i):_gl.framebufferTexture2D(_gl.DRAW_FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_2D,dstTextureProperties.__webglTexture,dstLevel),srcLevel!==0?_gl.blitFramebuffer(minX,minY,width,height,dstX,dstY,width,height,_gl.COLOR_BUFFER_BIT,_gl.NEAREST):isDst3D?_gl.copyTexSubImage3D(glTarget,dstLevel,dstX,dstY,dstZ+i,minX,minY,width,height):_gl.copyTexSubImage2D(glTarget,dstLevel,dstX,dstY,minX,minY,width,height);state.bindFramebuffer(_gl.READ_FRAMEBUFFER,null),state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,null)}else isDst3D?srcTexture.isDataTexture||srcTexture.isData3DTexture?_gl.texSubImage3D(glTarget,dstLevel,dstX,dstY,dstZ,width,height,depth2,glFormat,glType,image.data):dstTexture.isCompressedArrayTexture?_gl.compressedTexSubImage3D(glTarget,dstLevel,dstX,dstY,dstZ,width,height,depth2,glFormat,image.data):_gl.texSubImage3D(glTarget,dstLevel,dstX,dstY,dstZ,width,height,depth2,glFormat,glType,image):srcTexture.isDataTexture?_gl.texSubImage2D(_gl.TEXTURE_2D,dstLevel,dstX,dstY,width,height,glFormat,glType,image.data):srcTexture.isCompressedTexture?_gl.compressedTexSubImage2D(_gl.TEXTURE_2D,dstLevel,dstX,dstY,image.width,image.height,glFormat,image.data):_gl.texSubImage2D(_gl.TEXTURE_2D,dstLevel,dstX,dstY,width,height,glFormat,glType,image);_gl.pixelStorei(_gl.UNPACK_ROW_LENGTH,currentUnpackRowLen),_gl.pixelStorei(_gl.UNPACK_IMAGE_HEIGHT,currentUnpackImageHeight),_gl.pixelStorei(_gl.UNPACK_SKIP_PIXELS,currentUnpackSkipPixels),_gl.pixelStorei(_gl.UNPACK_SKIP_ROWS,currentUnpackSkipRows),_gl.pixelStorei(_gl.UNPACK_SKIP_IMAGES,currentUnpackSkipImages),dstLevel===0&&dstTexture.generateMipmaps&&_gl.generateMipmap(glTarget),state.unbindTexture()},this.copyTextureToTexture3D=function(srcTexture,dstTexture,srcRegion=null,dstPosition=null,level=0){return warnOnce('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(srcTexture,dstTexture,srcRegion,dstPosition,level)},this.initRenderTarget=function(target){properties.get(target).__webglFramebuffer===void 0&&textures.setupRenderTarget(target)},this.initTexture=function(texture){texture.isCubeTexture?textures.setTextureCube(texture,0):texture.isData3DTexture?textures.setTexture3D(texture,0):texture.isDataArrayTexture||texture.isCompressedArrayTexture?textures.setTexture2DArray(texture,0):textures.setTexture2D(texture,0),state.unbindTexture()},this.resetState=function(){_currentActiveCubeFace=0,_currentActiveMipmapLevel=0,_currentRenderTarget=null,state.reset(),bindingStates.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(colorSpace){this._outputColorSpace=colorSpace;const gl=this.getContext();gl.drawingBufferColorSpace=ColorManagement._getDrawingBufferColorSpace(colorSpace),gl.unpackColorSpace=ColorManagement._getUnpackColorSpace()}}class GlobePopup{constructor(el,{onClose}){this.$el=el,this.onClose=onClose,this.isOpen=!1,this.bindMethods(),this.getElems(),this.events(),this.initAnimations()}bindMethods(){this.close=this.close.bind(this),this.onKey=this.onKey.bind(this)}getElems(){this.$panel=this.$el.querySelector(".globe-popup-panel"),this.$close=this.$el.querySelector(".globe-popup-close"),this.$content=this.$el.querySelector(".globe-popup-content")}events(){this.$close.addEventListener("click",this.close),window.addEventListener("keydown",this.onKey)}initAnimations(){gsapWithCSS.set(this.$panel,{xPercent:100})}onKey(e){e.key==="Escape"&&this.close()}open(page){this.isOpen=!0,this.closeTL&&this.closeTL.kill();const content=page.content.querySelector(".ambassador-popup").outerHTML;this.$content.innerHTML=content,window.dispatchEvent(new CustomEvent("update-nested-scroll")),store.smoothScroll.stop(),gsapWithCSS.killTweensOf(this.$panel);const tl=gsapWithCSS.timeline({defaults:{ease:"expo.inOut",duration:1.2}});return tl.to(this.$panel,{xPercent:0}),this.openTL=tl,tl}close(){this.isOpen=!1,this.openTL&&this.openTL.kill(),store.smoothScroll.start(),gsapWithCSS.killTweensOf(this.$panel);const tl=gsapWithCSS.timeline({defaults:{ease:"gl.fastInOut",duration:1.4},onComplete:()=>{this.$content.innerHTML=""}});return tl.to(this.$panel,{xPercent:100}),this.onClose&&tl.add(this.onClose(),0),this.closeTL=tl,tl}}function isNumber(subject){return typeof subject=="number"}function isString(subject){return typeof subject=="string"}function isBoolean(subject){return typeof subject=="boolean"}function isObject(subject){return Object.prototype.toString.call(subject)==="[object Object]"}function mathAbs(n){return Math.abs(n)}function mathSign(n){return Math.sign(n)}function deltaAbs(valueB,valueA){return mathAbs(valueB-valueA)}function factorAbs(valueB,valueA){if(valueB===0||valueA===0||mathAbs(valueB)<=mathAbs(valueA))return 0;const diff=deltaAbs(mathAbs(valueB),mathAbs(valueA));return mathAbs(diff/valueB)}function roundToTwoDecimals(num){return Math.round(num*100)/100}function arrayKeys(array){return objectKeys(array).map(Number)}function arrayLast(array){return array[arrayLastIndex(array)]}function arrayLastIndex(array){return Math.max(0,array.length-1)}function arrayIsLastIndex(array,index){return index===arrayLastIndex(array)}function arrayFromNumber(n,startAt=0){return Array.from(Array(n),(_,i)=>startAt+i)}function objectKeys(object){return Object.keys(object)}function objectsMergeDeep(objectA,objectB){return[objectA,objectB].reduce((mergedObjects,currentObject)=>(objectKeys(currentObject).forEach(key=>{const valueA=mergedObjects[key],valueB=currentObject[key],areObjects=isObject(valueA)&&isObject(valueB);mergedObjects[key]=areObjects?objectsMergeDeep(valueA,valueB):valueB}),mergedObjects),{})}function isMouseEvent(evt,ownerWindow){return typeof ownerWindow.MouseEvent<"u"&&evt instanceof ownerWindow.MouseEvent}function Alignment(align,viewSize){const predefined={start,center,end};function start(){return 0}function center(n){return end(n)/2}function end(n){return viewSize-n}function measure(n,index){return isString(align)?predefined[align](n):align(viewSize,n,index)}return{measure}}function EventStore(){let listeners=[];function add(node,type,handler,options={passive:!0}){let removeListener;if("addEventListener"in node)node.addEventListener(type,handler,options),removeListener=()=>node.removeEventListener(type,handler,options);else{const legacyMediaQueryList=node;legacyMediaQueryList.addListener(handler),removeListener=()=>legacyMediaQueryList.removeListener(handler)}return listeners.push(removeListener),self2}function clear(){listeners=listeners.filter(remove=>remove())}const self2={add,clear};return self2}function Animations(ownerDocument,ownerWindow,update,render){const documentVisibleHandler=EventStore(),fixedTimeStep=1e3/60;let lastTimeStamp=null,accumulatedTime=0,animationId=0;function init(){documentVisibleHandler.add(ownerDocument,"visibilitychange",()=>{ownerDocument.hidden&&reset()})}function destroy(){stop(),documentVisibleHandler.clear()}function animate(timeStamp){if(!animationId)return;lastTimeStamp||(lastTimeStamp=timeStamp,update(),update());const timeElapsed=timeStamp-lastTimeStamp;for(lastTimeStamp=timeStamp,accumulatedTime+=timeElapsed;accumulatedTime>=fixedTimeStep;)update(),accumulatedTime-=fixedTimeStep;const alpha=accumulatedTime/fixedTimeStep;render(alpha),animationId&&(animationId=ownerWindow.requestAnimationFrame(animate))}function start(){animationId||(animationId=ownerWindow.requestAnimationFrame(animate))}function stop(){ownerWindow.cancelAnimationFrame(animationId),lastTimeStamp=null,accumulatedTime=0,animationId=0}function reset(){lastTimeStamp=null,accumulatedTime=0}return{init,destroy,start,stop,update,render}}function Axis(axis,contentDirection){const isRightToLeft=contentDirection==="rtl",isVertical=axis==="y",scroll=isVertical?"y":"x",cross=isVertical?"x":"y",sign=!isVertical&&isRightToLeft?-1:1,startEdge=getStartEdge(),endEdge=getEndEdge();function measureSize(nodeRect){const{height,width}=nodeRect;return isVertical?height:width}function getStartEdge(){return isVertical?"top":isRightToLeft?"right":"left"}function getEndEdge(){return isVertical?"bottom":isRightToLeft?"left":"right"}function direction(n){return n*sign}return{scroll,cross,startEdge,endEdge,measureSize,direction}}function Limit(min=0,max=0){const length=mathAbs(min-max);function reachedMin(n){return n<min}function reachedMax(n){return n>max}function reachedAny(n){return reachedMin(n)||reachedMax(n)}function constrain(n){return reachedAny(n)?reachedMin(n)?min:max:n}function removeOffset(n){return length?n-length*Math.ceil((n-max)/length):n}return{length,max,min,constrain,reachedAny,reachedMax,reachedMin,removeOffset}}function Counter(max,start,loop){const{constrain}=Limit(0,max),loopEnd=max+1;let counter=withinLimit(start);function withinLimit(n){return loop?mathAbs((loopEnd+n)%loopEnd):constrain(n)}function get(){return counter}function set(n){return counter=withinLimit(n),self2}function add(n){return clone().set(get()+n)}function clone(){return Counter(max,get(),loop)}const self2={get,set,add,clone};return self2}function DragHandler(axis,rootNode,ownerDocument,ownerWindow,target,dragTracker,location,animation,scrollTo,scrollBody,scrollTarget,index,eventHandler,percentOfView,dragFree,dragThreshold,skipSnaps,baseFriction,watchDrag){const{cross:crossAxis,direction}=axis,focusNodes=["INPUT","SELECT","TEXTAREA"],nonPassiveEvent={passive:!1},initEvents=EventStore(),dragEvents=EventStore(),goToNextThreshold=Limit(50,225).constrain(percentOfView.measure(20)),snapForceBoost={mouse:300,touch:400},freeForceBoost={mouse:500,touch:600},baseSpeed=dragFree?43:25;let isMoving=!1,startScroll=0,startCross=0,pointerIsDown=!1,preventScroll=!1,preventClick=!1,isMouse=!1;function init(emblaApi){if(!watchDrag)return;function downIfAllowed(evt){(isBoolean(watchDrag)||watchDrag(emblaApi,evt))&&down(evt)}const node=rootNode;initEvents.add(node,"dragstart",evt=>evt.preventDefault(),nonPassiveEvent).add(node,"touchmove",()=>{},nonPassiveEvent).add(node,"touchend",()=>{}).add(node,"touchstart",downIfAllowed).add(node,"mousedown",downIfAllowed).add(node,"touchcancel",up).add(node,"contextmenu",up).add(node,"click",click,!0)}function destroy(){initEvents.clear(),dragEvents.clear()}function addDragEvents(){const node=isMouse?ownerDocument:rootNode;dragEvents.add(node,"touchmove",move,nonPassiveEvent).add(node,"touchend",up).add(node,"mousemove",move,nonPassiveEvent).add(node,"mouseup",up)}function isFocusNode(node){const nodeName=node.nodeName||"";return focusNodes.includes(nodeName)}function forceBoost(){return(dragFree?freeForceBoost:snapForceBoost)[isMouse?"mouse":"touch"]}function allowedForce(force,targetChanged){const next=index.add(mathSign(force)*-1),baseForce=scrollTarget.byDistance(force,!dragFree).distance;return dragFree||mathAbs(force)<goToNextThreshold?baseForce:skipSnaps&&targetChanged?baseForce*.5:scrollTarget.byIndex(next.get(),0).distance}function down(evt){const isMouseEvt=isMouseEvent(evt,ownerWindow);isMouse=isMouseEvt,preventClick=dragFree&&isMouseEvt&&!evt.buttons&&isMoving,isMoving=deltaAbs(target.get(),location.get())>=2,!(isMouseEvt&&evt.button!==0)&&(isFocusNode(evt.target)||(pointerIsDown=!0,dragTracker.pointerDown(evt),scrollBody.useFriction(0).useDuration(0),target.set(location),addDragEvents(),startScroll=dragTracker.readPoint(evt),startCross=dragTracker.readPoint(evt,crossAxis),eventHandler.emit("pointerDown")))}function move(evt){if(!isMouseEvent(evt,ownerWindow)&&evt.touches.length>=2)return up(evt);const lastScroll=dragTracker.readPoint(evt),lastCross=dragTracker.readPoint(evt,crossAxis),diffScroll=deltaAbs(lastScroll,startScroll),diffCross=deltaAbs(lastCross,startCross);if(!preventScroll&&!isMouse&&(!evt.cancelable||(preventScroll=diffScroll>diffCross,!preventScroll)))return up(evt);const diff=dragTracker.pointerMove(evt);diffScroll>dragThreshold&&(preventClick=!0),scrollBody.useFriction(.3).useDuration(.75),animation.start(),target.add(direction(diff)),evt.preventDefault()}function up(evt){const targetChanged=scrollTarget.byDistance(0,!1).index!==index.get(),rawForce=dragTracker.pointerUp(evt)*forceBoost(),force=allowedForce(direction(rawForce),targetChanged),forceFactor=factorAbs(rawForce,force),speed=baseSpeed-10*forceFactor,friction=baseFriction+forceFactor/50;preventScroll=!1,pointerIsDown=!1,dragEvents.clear(),scrollBody.useDuration(speed).useFriction(friction),scrollTo.distance(force,!dragFree),isMouse=!1,eventHandler.emit("pointerUp")}function click(evt){preventClick&&(evt.stopPropagation(),evt.preventDefault(),preventClick=!1)}function pointerDown(){return pointerIsDown}return{init,destroy,pointerDown}}function DragTracker(axis,ownerWindow){let startEvent,lastEvent;function readTime(evt){return evt.timeStamp}function readPoint(evt,evtAxis){const coord=`client${(evtAxis||axis.scroll)==="x"?"X":"Y"}`;return(isMouseEvent(evt,ownerWindow)?evt:evt.touches[0])[coord]}function pointerDown(evt){return startEvent=evt,lastEvent=evt,readPoint(evt)}function pointerMove(evt){const diff=readPoint(evt)-readPoint(lastEvent),expired=readTime(evt)-readTime(startEvent)>170;return lastEvent=evt,expired&&(startEvent=evt),diff}function pointerUp(evt){if(!startEvent||!lastEvent)return 0;const diffDrag=readPoint(lastEvent)-readPoint(startEvent),diffTime=readTime(evt)-readTime(startEvent),expired=readTime(evt)-readTime(lastEvent)>170,force=diffDrag/diffTime;return diffTime&&!expired&&mathAbs(force)>.1?force:0}return{pointerDown,pointerMove,pointerUp,readPoint}}function NodeRects(){function measure(node){const{offsetTop,offsetLeft,offsetWidth,offsetHeight}=node;return{top:offsetTop,right:offsetLeft+offsetWidth,bottom:offsetTop+offsetHeight,left:offsetLeft,width:offsetWidth,height:offsetHeight}}return{measure}}function PercentOfView(viewSize){function measure(n){return viewSize*(n/100)}return{measure}}function ResizeHandler(container,eventHandler,ownerWindow,slides,axis,watchResize,nodeRects){const observeNodes=[container].concat(slides);let resizeObserver,containerSize,slideSizes=[],destroyed=!1;function readSize(node){return axis.measureSize(nodeRects.measure(node))}function init(emblaApi){if(!watchResize)return;containerSize=readSize(container),slideSizes=slides.map(readSize);function defaultCallback(entries){for(const entry of entries){if(destroyed)return;const isContainer=entry.target===container,slideIndex=slides.indexOf(entry.target),lastSize=isContainer?containerSize:slideSizes[slideIndex],newSize=readSize(isContainer?container:slides[slideIndex]);if(mathAbs(newSize-lastSize)>=.5){emblaApi.reInit(),eventHandler.emit("resize");break}}}resizeObserver=new ResizeObserver(entries=>{(isBoolean(watchResize)||watchResize(emblaApi,entries))&&defaultCallback(entries)}),ownerWindow.requestAnimationFrame(()=>{observeNodes.forEach(node=>resizeObserver.observe(node))})}function destroy(){destroyed=!0,resizeObserver&&resizeObserver.disconnect()}return{init,destroy}}function ScrollBody(location,offsetLocation,previousLocation,target,baseDuration,baseFriction){let scrollVelocity=0,scrollDirection=0,scrollDuration=baseDuration,scrollFriction=baseFriction,rawLocation=location.get(),rawLocationPrevious=0;function seek(){const displacement=target.get()-location.get(),isInstant=!scrollDuration;let scrollDistance=0;return isInstant?(scrollVelocity=0,previousLocation.set(target),location.set(target),scrollDistance=displacement):(previousLocation.set(location),scrollVelocity+=displacement/scrollDuration,scrollVelocity*=scrollFriction,rawLocation+=scrollVelocity,location.add(scrollVelocity),scrollDistance=rawLocation-rawLocationPrevious),scrollDirection=mathSign(scrollDistance),rawLocationPrevious=rawLocation,self2}function settled(){const diff=target.get()-offsetLocation.get();return mathAbs(diff)<.001}function duration(){return scrollDuration}function direction(){return scrollDirection}function velocity(){return scrollVelocity}function useBaseDuration(){return useDuration(baseDuration)}function useBaseFriction(){return useFriction(baseFriction)}function useDuration(n){return scrollDuration=n,self2}function useFriction(n){return scrollFriction=n,self2}const self2={direction,duration,velocity,seek,settled,useBaseFriction,useBaseDuration,useFriction,useDuration};return self2}function ScrollBounds(limit,location,target,scrollBody,percentOfView){const pullBackThreshold=percentOfView.measure(10),edgeOffsetTolerance=percentOfView.measure(50),frictionLimit=Limit(.1,.99);let disabled=!1;function shouldConstrain(){return!(disabled||!limit.reachedAny(target.get())||!limit.reachedAny(location.get()))}function constrain(pointerDown){if(!shouldConstrain())return;const edge=limit.reachedMin(location.get())?"min":"max",diffToEdge=mathAbs(limit[edge]-location.get()),diffToTarget=target.get()-location.get(),friction=frictionLimit.constrain(diffToEdge/edgeOffsetTolerance);target.subtract(diffToTarget*friction),!pointerDown&&mathAbs(diffToTarget)<pullBackThreshold&&(target.set(limit.constrain(target.get())),scrollBody.useDuration(25).useBaseFriction())}function toggleActive(active){disabled=!active}return{shouldConstrain,constrain,toggleActive}}function ScrollContain(viewSize,contentSize,snapsAligned,containScroll,pixelTolerance){const scrollBounds=Limit(-contentSize+viewSize,0),snapsBounded=measureBounded(),scrollContainLimit=findScrollContainLimit(),snapsContained=measureContained();function usePixelTolerance(bound,snap){return deltaAbs(bound,snap)<=1}function findScrollContainLimit(){const startSnap=snapsBounded[0],endSnap=arrayLast(snapsBounded),min=snapsBounded.lastIndexOf(startSnap),max=snapsBounded.indexOf(endSnap)+1;return Limit(min,max)}function measureBounded(){return snapsAligned.map((snapAligned,index)=>{const{min,max}=scrollBounds,snap=scrollBounds.constrain(snapAligned),isFirst=!index,isLast=arrayIsLastIndex(snapsAligned,index);return isFirst?max:isLast||usePixelTolerance(min,snap)?min:usePixelTolerance(max,snap)?max:snap}).map(scrollBound=>parseFloat(scrollBound.toFixed(3)))}function measureContained(){if(contentSize<=viewSize+pixelTolerance)return[scrollBounds.max];if(containScroll==="keepSnaps")return snapsBounded;const{min,max}=scrollContainLimit;return snapsBounded.slice(min,max)}return{snapsContained,scrollContainLimit}}function ScrollLimit(contentSize,scrollSnaps,loop){const max=scrollSnaps[0],min=loop?max-contentSize:arrayLast(scrollSnaps);return{limit:Limit(min,max)}}function ScrollLooper(contentSize,limit,location,vectors){const min=limit.min+.1,max=limit.max+.1,{reachedMin,reachedMax}=Limit(min,max);function shouldLoop(direction){return direction===1?reachedMax(location.get()):direction===-1?reachedMin(location.get()):!1}function loop(direction){if(!shouldLoop(direction))return;const loopDistance=contentSize*(direction*-1);vectors.forEach(v=>v.add(loopDistance))}return{loop}}function ScrollProgress(limit){const{max,length}=limit;function get(n){const currentLocation=n-max;return length?currentLocation/-length:0}return{get}}function ScrollSnaps(axis,alignment,containerRect,slideRects,slidesToScroll){const{startEdge,endEdge}=axis,{groupSlides}=slidesToScroll,alignments=measureSizes().map(alignment.measure),snaps=measureUnaligned(),snapsAligned=measureAligned();function measureSizes(){return groupSlides(slideRects).map(rects=>arrayLast(rects)[endEdge]-rects[0][startEdge]).map(mathAbs)}function measureUnaligned(){return slideRects.map(rect=>containerRect[startEdge]-rect[startEdge]).map(snap=>-mathAbs(snap))}function measureAligned(){return groupSlides(snaps).map(g=>g[0]).map((snap,index)=>snap+alignments[index])}return{snaps,snapsAligned}}function SlideRegistry(containSnaps,containScroll,scrollSnaps,scrollContainLimit,slidesToScroll,slideIndexes){const{groupSlides}=slidesToScroll,{min,max}=scrollContainLimit,slideRegistry=createSlideRegistry();function createSlideRegistry(){const groupedSlideIndexes=groupSlides(slideIndexes),doNotContain=!containSnaps||containScroll==="keepSnaps";return scrollSnaps.length===1?[slideIndexes]:doNotContain?groupedSlideIndexes:groupedSlideIndexes.slice(min,max).map((group,index,groups)=>{const isFirst=!index,isLast=arrayIsLastIndex(groups,index);if(isFirst){const range=arrayLast(groups[0])+1;return arrayFromNumber(range)}if(isLast){const range=arrayLastIndex(slideIndexes)-arrayLast(groups)[0]+1;return arrayFromNumber(range,arrayLast(groups)[0])}return group})}return{slideRegistry}}function ScrollTarget(loop,scrollSnaps,contentSize,limit,targetVector){const{reachedAny,removeOffset,constrain}=limit;function minDistance(distances){return distances.concat().sort((a,b)=>mathAbs(a)-mathAbs(b))[0]}function findTargetSnap(target){const distance=loop?removeOffset(target):constrain(target),ascDiffsToSnaps=scrollSnaps.map((snap,index2)=>({diff:shortcut(snap-distance,0),index:index2})).sort((d1,d2)=>mathAbs(d1.diff)-mathAbs(d2.diff)),{index}=ascDiffsToSnaps[0];return{index,distance}}function shortcut(target,direction){const targets=[target,target+contentSize,target-contentSize];if(!loop)return target;if(!direction)return minDistance(targets);const matchingTargets=targets.filter(t=>mathSign(t)===direction);return matchingTargets.length?minDistance(matchingTargets):arrayLast(targets)-contentSize}function byIndex(index,direction){const diffToSnap=scrollSnaps[index]-targetVector.get(),distance=shortcut(diffToSnap,direction);return{index,distance}}function byDistance(distance,snap){const target=targetVector.get()+distance,{index,distance:targetSnapDistance}=findTargetSnap(target),reachedBound=!loop&&reachedAny(target);if(!snap||reachedBound)return{index,distance};const diffToSnap=scrollSnaps[index]-targetSnapDistance,snapDistance=distance+shortcut(diffToSnap,0);return{index,distance:snapDistance}}return{byDistance,byIndex,shortcut}}function ScrollTo(animation,indexCurrent,indexPrevious,scrollBody,scrollTarget,targetVector,eventHandler){function scrollTo(target){const distanceDiff=target.distance,indexDiff=target.index!==indexCurrent.get();targetVector.add(distanceDiff),distanceDiff&&(scrollBody.duration()?animation.start():(animation.update(),animation.render(1),animation.update())),indexDiff&&(indexPrevious.set(indexCurrent.get()),indexCurrent.set(target.index),eventHandler.emit("select"))}function distance(n,snap){const target=scrollTarget.byDistance(n,snap);scrollTo(target)}function index(n,direction){const targetIndex=indexCurrent.clone().set(n),target=scrollTarget.byIndex(targetIndex.get(),direction);scrollTo(target)}return{distance,index}}function SlideFocus(root,slides,slideRegistry,scrollTo,scrollBody,eventStore,eventHandler,watchFocus){const focusListenerOptions={passive:!0,capture:!0};let lastTabPressTime=0;function init(emblaApi){if(!watchFocus)return;function defaultCallback(index){if(new Date().getTime()-lastTabPressTime>10)return;eventHandler.emit("slideFocusStart"),root.scrollLeft=0;const group=slideRegistry.findIndex(group2=>group2.includes(index));isNumber(group)&&(scrollBody.useDuration(0),scrollTo.index(group,0),eventHandler.emit("slideFocus"))}eventStore.add(document,"keydown",registerTabPress,!1),slides.forEach((slide,slideIndex)=>{eventStore.add(slide,"focus",evt=>{(isBoolean(watchFocus)||watchFocus(emblaApi,evt))&&defaultCallback(slideIndex)},focusListenerOptions)})}function registerTabPress(event){event.code==="Tab"&&(lastTabPressTime=new Date().getTime())}return{init}}function Vector1D(initialValue){let value=initialValue;function get(){return value}function set(n){value=normalizeInput(n)}function add(n){value+=normalizeInput(n)}function subtract(n){value-=normalizeInput(n)}function normalizeInput(n){return isNumber(n)?n:n.get()}return{get,set,add,subtract}}function Translate(axis,container){const translate=axis.scroll==="x"?x:y,containerStyle=container.style;let previousTarget=null,disabled=!1;function x(n){return`translate3d(${n}px,0px,0px)`}function y(n){return`translate3d(0px,${n}px,0px)`}function to(target){if(disabled)return;const newTarget=roundToTwoDecimals(axis.direction(target));newTarget!==previousTarget&&(containerStyle.transform=translate(newTarget),previousTarget=newTarget)}function toggleActive(active){disabled=!active}function clear(){disabled||(containerStyle.transform="",container.getAttribute("style")||container.removeAttribute("style"))}return{clear,to,toggleActive}}function SlideLooper(axis,viewSize,contentSize,slideSizes,slideSizesWithGaps,snaps,scrollSnaps,location,slides){const ascItems=arrayKeys(slideSizesWithGaps),descItems=arrayKeys(slideSizesWithGaps).reverse(),loopPoints=startPoints().concat(endPoints());function removeSlideSizes(indexes,from){return indexes.reduce((a,i)=>a-slideSizesWithGaps[i],from)}function slidesInGap(indexes,gap){return indexes.reduce((a,i)=>removeSlideSizes(a,gap)>0?a.concat([i]):a,[])}function findSlideBounds(offset){return snaps.map((snap,index)=>({start:snap-slideSizes[index]+.5+offset,end:snap+viewSize-.5+offset}))}function findLoopPoints(indexes,offset,isEndEdge){const slideBounds=findSlideBounds(offset);return indexes.map(index=>{const initial=isEndEdge?0:-contentSize,altered=isEndEdge?contentSize:0,boundEdge=isEndEdge?"end":"start",loopPoint=slideBounds[index][boundEdge];return{index,loopPoint,slideLocation:Vector1D(-1),translate:Translate(axis,slides[index]),target:()=>location.get()>loopPoint?initial:altered}})}function startPoints(){const gap=scrollSnaps[0],indexes=slidesInGap(descItems,gap);return findLoopPoints(indexes,contentSize,!1)}function endPoints(){const gap=viewSize-scrollSnaps[0]-1,indexes=slidesInGap(ascItems,gap);return findLoopPoints(indexes,-contentSize,!0)}function canLoop(){return loopPoints.every(({index})=>{const otherIndexes=ascItems.filter(i=>i!==index);return removeSlideSizes(otherIndexes,viewSize)<=.1})}function loop(){loopPoints.forEach(loopPoint=>{const{target,translate,slideLocation}=loopPoint,shiftLocation=target();shiftLocation!==slideLocation.get()&&(translate.to(shiftLocation),slideLocation.set(shiftLocation))})}function clear(){loopPoints.forEach(loopPoint=>loopPoint.translate.clear())}return{canLoop,clear,loop,loopPoints}}function SlidesHandler(container,eventHandler,watchSlides){let mutationObserver,destroyed=!1;function init(emblaApi){if(!watchSlides)return;function defaultCallback(mutations){for(const mutation of mutations)if(mutation.type==="childList"){emblaApi.reInit(),eventHandler.emit("slidesChanged");break}}mutationObserver=new MutationObserver(mutations=>{destroyed||(isBoolean(watchSlides)||watchSlides(emblaApi,mutations))&&defaultCallback(mutations)}),mutationObserver.observe(container,{childList:!0})}function destroy(){mutationObserver&&mutationObserver.disconnect(),destroyed=!0}return{init,destroy}}function SlidesInView(container,slides,eventHandler,threshold){const intersectionEntryMap={};let inViewCache=null,notInViewCache=null,intersectionObserver,destroyed=!1;function init(){intersectionObserver=new IntersectionObserver(entries=>{destroyed||(entries.forEach(entry=>{const index=slides.indexOf(entry.target);intersectionEntryMap[index]=entry}),inViewCache=null,notInViewCache=null,eventHandler.emit("slidesInView"))},{root:container.parentElement,threshold}),slides.forEach(slide=>intersectionObserver.observe(slide))}function destroy(){intersectionObserver&&intersectionObserver.disconnect(),destroyed=!0}function createInViewList(inView){return objectKeys(intersectionEntryMap).reduce((list,slideIndex)=>{const index=parseInt(slideIndex),{isIntersecting}=intersectionEntryMap[index];return(inView&&isIntersecting||!inView&&!isIntersecting)&&list.push(index),list},[])}function get(inView=!0){if(inView&&inViewCache)return inViewCache;if(!inView&&notInViewCache)return notInViewCache;const slideIndexes=createInViewList(inView);return inView&&(inViewCache=slideIndexes),inView||(notInViewCache=slideIndexes),slideIndexes}return{init,destroy,get}}function SlideSizes(axis,containerRect,slideRects,slides,readEdgeGap,ownerWindow){const{measureSize,startEdge,endEdge}=axis,withEdgeGap=slideRects[0]&&readEdgeGap,startGap=measureStartGap(),endGap=measureEndGap(),slideSizes=slideRects.map(measureSize),slideSizesWithGaps=measureWithGaps();function measureStartGap(){if(!withEdgeGap)return 0;const slideRect=slideRects[0];return mathAbs(containerRect[startEdge]-slideRect[startEdge])}function measureEndGap(){if(!withEdgeGap)return 0;const style=ownerWindow.getComputedStyle(arrayLast(slides));return parseFloat(style.getPropertyValue(`margin-${endEdge}`))}function measureWithGaps(){return slideRects.map((rect,index,rects)=>{const isFirst=!index,isLast=arrayIsLastIndex(rects,index);return isFirst?slideSizes[index]+startGap:isLast?slideSizes[index]+endGap:rects[index+1][startEdge]-rect[startEdge]}).map(mathAbs)}return{slideSizes,slideSizesWithGaps,startGap,endGap}}function SlidesToScroll(axis,viewSize,slidesToScroll,loop,containerRect,slideRects,startGap,endGap,pixelTolerance){const{startEdge,endEdge,direction}=axis,groupByNumber=isNumber(slidesToScroll);function byNumber(array,groupSize){return arrayKeys(array).filter(i=>i%groupSize===0).map(i=>array.slice(i,i+groupSize))}function bySize(array){return array.length?arrayKeys(array).reduce((groups,rectB,index)=>{const rectA=arrayLast(groups)||0,isFirst=rectA===0,isLast=rectB===arrayLastIndex(array),edgeA=containerRect[startEdge]-slideRects[rectA][startEdge],edgeB=containerRect[startEdge]-slideRects[rectB][endEdge],gapA=!loop&&isFirst?direction(startGap):0,gapB=!loop&&isLast?direction(endGap):0,chunkSize=mathAbs(edgeB-gapB-(edgeA+gapA));return index&&chunkSize>viewSize+pixelTolerance&&groups.push(rectB),isLast&&groups.push(array.length),groups},[]).map((currentSize,index,groups)=>{const previousSize=Math.max(groups[index-1]||0);return array.slice(previousSize,currentSize)}):[]}function groupSlides(array){return groupByNumber?byNumber(array,slidesToScroll):bySize(array)}return{groupSlides}}function Engine(root,container,slides,ownerDocument,ownerWindow,options,eventHandler){const{align,axis:scrollAxis,direction,startIndex,loop,duration,dragFree,dragThreshold,inViewThreshold,slidesToScroll:groupSlides,skipSnaps,containScroll,watchResize,watchSlides,watchDrag,watchFocus}=options,pixelTolerance=2,nodeRects=NodeRects(),containerRect=nodeRects.measure(container),slideRects=slides.map(nodeRects.measure),axis=Axis(scrollAxis,direction),viewSize=axis.measureSize(containerRect),percentOfView=PercentOfView(viewSize),alignment=Alignment(align,viewSize),containSnaps=!loop&&!!containScroll,readEdgeGap=loop||!!containScroll,{slideSizes,slideSizesWithGaps,startGap,endGap}=SlideSizes(axis,containerRect,slideRects,slides,readEdgeGap,ownerWindow),slidesToScroll=SlidesToScroll(axis,viewSize,groupSlides,loop,containerRect,slideRects,startGap,endGap,pixelTolerance),{snaps,snapsAligned}=ScrollSnaps(axis,alignment,containerRect,slideRects,slidesToScroll),contentSize=-arrayLast(snaps)+arrayLast(slideSizesWithGaps),{snapsContained,scrollContainLimit}=ScrollContain(viewSize,contentSize,snapsAligned,containScroll,pixelTolerance),scrollSnaps=containSnaps?snapsContained:snapsAligned,{limit}=ScrollLimit(contentSize,scrollSnaps,loop),index=Counter(arrayLastIndex(scrollSnaps),startIndex,loop),indexPrevious=index.clone(),slideIndexes=arrayKeys(slides),update=({dragHandler,scrollBody:scrollBody2,scrollBounds,options:{loop:loop2}})=>{loop2||scrollBounds.constrain(dragHandler.pointerDown()),scrollBody2.seek()},render=({scrollBody:scrollBody2,translate,location:location2,offsetLocation:offsetLocation2,previousLocation:previousLocation2,scrollLooper,slideLooper,dragHandler,animation:animation2,eventHandler:eventHandler2,scrollBounds,options:{loop:loop2}},alpha)=>{const shouldSettle=scrollBody2.settled(),withinBounds=!scrollBounds.shouldConstrain(),hasSettled=loop2?shouldSettle:shouldSettle&&withinBounds,hasSettledAndIdle=hasSettled&&!dragHandler.pointerDown();hasSettledAndIdle&&animation2.stop();const interpolatedLocation=location2.get()*alpha+previousLocation2.get()*(1-alpha);offsetLocation2.set(interpolatedLocation),loop2&&(scrollLooper.loop(scrollBody2.direction()),slideLooper.loop()),translate.to(offsetLocation2.get()),hasSettledAndIdle&&eventHandler2.emit("settle"),hasSettled||eventHandler2.emit("scroll")},animation=Animations(ownerDocument,ownerWindow,()=>update(engine),alpha=>render(engine,alpha)),friction=.68,startLocation=scrollSnaps[index.get()],location=Vector1D(startLocation),previousLocation=Vector1D(startLocation),offsetLocation=Vector1D(startLocation),target=Vector1D(startLocation),scrollBody=ScrollBody(location,offsetLocation,previousLocation,target,duration,friction),scrollTarget=ScrollTarget(loop,scrollSnaps,contentSize,limit,target),scrollTo=ScrollTo(animation,index,indexPrevious,scrollBody,scrollTarget,target,eventHandler),scrollProgress=ScrollProgress(limit),eventStore=EventStore(),slidesInView=SlidesInView(container,slides,eventHandler,inViewThreshold),{slideRegistry}=SlideRegistry(containSnaps,containScroll,scrollSnaps,scrollContainLimit,slidesToScroll,slideIndexes),slideFocus=SlideFocus(root,slides,slideRegistry,scrollTo,scrollBody,eventStore,eventHandler,watchFocus),engine={ownerDocument,ownerWindow,eventHandler,containerRect,slideRects,animation,axis,dragHandler:DragHandler(axis,root,ownerDocument,ownerWindow,target,DragTracker(axis,ownerWindow),location,animation,scrollTo,scrollBody,scrollTarget,index,eventHandler,percentOfView,dragFree,dragThreshold,skipSnaps,friction,watchDrag),eventStore,percentOfView,index,indexPrevious,limit,location,offsetLocation,previousLocation,options,resizeHandler:ResizeHandler(container,eventHandler,ownerWindow,slides,axis,watchResize,nodeRects),scrollBody,scrollBounds:ScrollBounds(limit,offsetLocation,target,scrollBody,percentOfView),scrollLooper:ScrollLooper(contentSize,limit,offsetLocation,[location,offsetLocation,previousLocation,target]),scrollProgress,scrollSnapList:scrollSnaps.map(scrollProgress.get),scrollSnaps,scrollTarget,scrollTo,slideLooper:SlideLooper(axis,viewSize,contentSize,slideSizes,slideSizesWithGaps,snaps,scrollSnaps,offsetLocation,slides),slideFocus,slidesHandler:SlidesHandler(container,eventHandler,watchSlides),slidesInView,slideIndexes,slideRegistry,slidesToScroll,target,translate:Translate(axis,container)};return engine}function EventHandler(){let listeners={},api;function init(emblaApi){api=emblaApi}function getListeners(evt){return listeners[evt]||[]}function emit(evt){return getListeners(evt).forEach(e=>e(api,evt)),self2}function on(evt,cb){return listeners[evt]=getListeners(evt).concat([cb]),self2}function off(evt,cb){return listeners[evt]=getListeners(evt).filter(e=>e!==cb),self2}function clear(){listeners={}}const self2={init,emit,off,on,clear};return self2}const defaultOptions={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function OptionsHandler(ownerWindow){function mergeOptions(optionsA,optionsB){return objectsMergeDeep(optionsA,optionsB||{})}function optionsAtMedia(options){const optionsAtMedia2=options.breakpoints||{},matchedMediaOptions=objectKeys(optionsAtMedia2).filter(media=>ownerWindow.matchMedia(media).matches).map(media=>optionsAtMedia2[media]).reduce((a,mediaOption)=>mergeOptions(a,mediaOption),{});return mergeOptions(options,matchedMediaOptions)}function optionsMediaQueries(optionsList){return optionsList.map(options=>objectKeys(options.breakpoints||{})).reduce((acc,mediaQueries)=>acc.concat(mediaQueries),[]).map(ownerWindow.matchMedia)}return{mergeOptions,optionsAtMedia,optionsMediaQueries}}function PluginsHandler(optionsHandler){let activePlugins=[];function init(emblaApi,plugins){return activePlugins=plugins.filter(({options})=>optionsHandler.optionsAtMedia(options).active!==!1),activePlugins.forEach(plugin=>plugin.init(emblaApi,optionsHandler)),plugins.reduce((map,plugin)=>Object.assign(map,{[plugin.name]:plugin}),{})}function destroy(){activePlugins=activePlugins.filter(plugin=>plugin.destroy())}return{init,destroy}}function EmblaCarousel(root,userOptions,userPlugins){const ownerDocument=root.ownerDocument,ownerWindow=ownerDocument.defaultView,optionsHandler=OptionsHandler(ownerWindow),pluginsHandler=PluginsHandler(optionsHandler),mediaHandlers=EventStore(),eventHandler=EventHandler(),{mergeOptions,optionsAtMedia,optionsMediaQueries}=optionsHandler,{on,off,emit}=eventHandler,reInit=reActivate;let destroyed=!1,engine,optionsBase=mergeOptions(defaultOptions,EmblaCarousel.globalOptions),options=mergeOptions(optionsBase),pluginList=[],pluginApis,container,slides;function storeElements(){const{container:userContainer,slides:userSlides}=options;container=(isString(userContainer)?root.querySelector(userContainer):userContainer)||root.children[0];const customSlides=isString(userSlides)?container.querySelectorAll(userSlides):userSlides;slides=[].slice.call(customSlides||container.children)}function createEngine(options2){const engine2=Engine(root,container,slides,ownerDocument,ownerWindow,options2,eventHandler);if(options2.loop&&!engine2.slideLooper.canLoop()){const optionsWithoutLoop=Object.assign({},options2,{loop:!1});return createEngine(optionsWithoutLoop)}return engine2}function activate(withOptions,withPlugins){destroyed||(optionsBase=mergeOptions(optionsBase,withOptions),options=optionsAtMedia(optionsBase),pluginList=withPlugins||pluginList,storeElements(),engine=createEngine(options),optionsMediaQueries([optionsBase,...pluginList.map(({options:options2})=>options2)]).forEach(query=>mediaHandlers.add(query,"change",reActivate)),options.active&&(engine.translate.to(engine.location.get()),engine.animation.init(),engine.slidesInView.init(),engine.slideFocus.init(self2),engine.eventHandler.init(self2),engine.resizeHandler.init(self2),engine.slidesHandler.init(self2),engine.options.loop&&engine.slideLooper.loop(),container.offsetParent&&slides.length&&engine.dragHandler.init(self2),pluginApis=pluginsHandler.init(self2,pluginList)))}function reActivate(withOptions,withPlugins){const startIndex=selectedScrollSnap();deActivate(),activate(mergeOptions({startIndex},withOptions),withPlugins),eventHandler.emit("reInit")}function deActivate(){engine.dragHandler.destroy(),engine.eventStore.clear(),engine.translate.clear(),engine.slideLooper.clear(),engine.resizeHandler.destroy(),engine.slidesHandler.destroy(),engine.slidesInView.destroy(),engine.animation.destroy(),pluginsHandler.destroy(),mediaHandlers.clear()}function destroy(){destroyed||(destroyed=!0,mediaHandlers.clear(),deActivate(),eventHandler.emit("destroy"),eventHandler.clear())}function scrollTo(index,jump,direction){!options.active||destroyed||(engine.scrollBody.useBaseFriction().useDuration(jump===!0?0:options.duration),engine.scrollTo.index(index,direction||0))}function scrollNext(jump){const next=engine.index.add(1).get();scrollTo(next,jump,-1)}function scrollPrev(jump){const prev=engine.index.add(-1).get();scrollTo(prev,jump,1)}function canScrollNext(){return engine.index.add(1).get()!==selectedScrollSnap()}function canScrollPrev(){return engine.index.add(-1).get()!==selectedScrollSnap()}function scrollSnapList(){return engine.scrollSnapList}function scrollProgress(){return engine.scrollProgress.get(engine.offsetLocation.get())}function selectedScrollSnap(){return engine.index.get()}function previousScrollSnap(){return engine.indexPrevious.get()}function slidesInView(){return engine.slidesInView.get()}function slidesNotInView(){return engine.slidesInView.get(!1)}function plugins(){return pluginApis}function internalEngine(){return engine}function rootNode(){return root}function containerNode(){return container}function slideNodes(){return slides}const self2={canScrollNext,canScrollPrev,containerNode,internalEngine,destroy,off,on,emit,plugins,previousScrollSnap,reInit,rootNode,scrollNext,scrollPrev,scrollProgress,scrollSnapList,scrollTo,selectedScrollSnap,slideNodes,slidesInView,slidesNotInView};return activate(userOptions,userPlugins),setTimeout(()=>eventHandler.emit("init"),0),self2}EmblaCarousel.globalOptions=void 0;class Globe extends p{mount(){this.isLoaded=!1,this.isAppeared=!1,this.isDragging=!1,this.isSliding=!1,this.isFixed=!1,this.isCurrentlyFixed=!1,this.isClusterCentered=!1,this.isAnimating=!1,this.dragSpeed=store.isMobile?.45:.1,this.previousMouse=new Vector2,this.activeMarkerIndex=-1,this.targetQuat=new Quaternion,this.globeRotation={lon:0,lat:0},this.defaultUrl=this.dataset.defaultUrl,this.slug=this.dataset.slug,delete this.dataset.defaultUrl,this.clusterThresholdPx=100,this._lastClusterSignature="",this.clusters=new Map,this.markers=[],this.width=this.offsetWidth,this.zoom={current:0,min:0,max:4,step:.09},this.bindMethods(),this.getElems(),this.events(),this.$popup&&(this.popup=new GlobePopup(this.$popup,{onClose:this.onPopupClose}),this.isFixed=!0,this.isCurrentlyFixed=!store.isMobile,this.initSlider()),this.scene=new Scene,this.createCamera(),this.createRenderer(),this.createLights(),this.globeParent=new Group,this.globeGroup=new Group,this.globeParent.add(this.globeGroup),this.scene.add(this.globeParent),new TextureLoader().load("/map.jpg",map=>{map.colorSpace=SRGBColorSpace,this.createGlobe(map),this.createMarkers();const europeLat=35.6,europeLon=111.19;this.globeRotation.lat=europeLat,this.globeRotation.lon=europeLon,this.updateGlobeRotation(this.globeRotation.lat,this.globeRotation.lon),this.isLoaded=!0,this.popup&&(gsapWithCSS.set(this.globeMesh.scale,{x:1.5,y:1.5,z:1.5}),gsapWithCSS.set(this.globeMesh.position,{y:-1})),this.isAppeared||this.appear()})}unmount(){this.slider&&this.slider.off(),this.off("mousedown",this,this.onMouseDown),this.off("mouseup",this,this.onMouseUp),this.off("mouseleave",document.documentElement,this.onMouseUp),this.off("mouseleave",this,this.onMouseUp),this.off("mousemove",this,this.onMouseMove),this.off("touchstart",this,this.onMouseDown),this.off("touchend",this,this.onMouseUp),this.off("touchmove",this,this.onMouseMove),this.trigger&&this.trigger.kill(),this.scene.traverse(object=>{object.geometry&&object.geometry.dispose(),object.material&&(Array.isArray(object.material)?object.material.forEach(mat=>mat.dispose()):object.material.dispose())}),this.renderer.dispose(),this.scene=null,this.renderer=null}bindMethods(){this.onPopupClose=this.onPopupClose.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.zoomIn=this.zoomIn.bind(this),this.zoomOut=this.zoomOut.bind(this)}getElems(){this.$popup=this.$(".globe-popup"),this.$dom=this.$(".globe-dom"),this.$markers=this.$All(".marker"),this.$cards=this.$All(".globe-popup-card"),this.$canvasWrapper=this.$(".globe-canvas"),this.$zoomIn=this.$(".globe-zoom-in"),this.$zoomOut=this.$(".globe-zoom-out"),this.$cluster=this.$(".cluster"),this.$embla=this.$(".embla")}events(){this.on("mousedown",this,this.onMouseDown),this.on("mouseup",this,this.onMouseUp),this.on("mouseleave",document.documentElement,this.onMouseUp),this.on("mouseleave",this,this.onMouseUp),this.on("mousemove",this,this.onMouseMove),this.on("touchstart",this,this.onMouseDown),this.on("touchend",this,this.onMouseUp),this.on("touchmove",this,this.onMouseMove),this.on("click",this.$zoomIn,this.zoomIn),this.on("click",this.$zoomOut,this.zoomOut)}appear(){if(!this.popup){gsapWithCSS.set(this.markers.map(marker=>marker.el),{opacity:1});return}this.isLoaded&&(this.isAppeared=!0,gsapWithCSS.timeline({delay:.2}).to(this.globeMesh.position,{y:0,duration:1.2,ease:"carnilove.inOut"}).to(this.globeMesh.scale,{x:1,y:1,z:1,duration:1.2,ease:"carnilove.inOut"},0).to(this.markers.map(marker=>marker.el),{opacity:1,ease:"power2.out",duration:.3},"<95%"))}ready(){if(!this.popup)this.initTrigger();else if(this.slug&&window.location.pathname.includes(this.slug)){const index=this.markers.findIndex(item=>item.slug===this.slug);index!==void 0&&this.onMarkerClick(index)}}initTrigger(){if(this.trigger&&this.trigger.kill(),store.isMobile)return;const animation=gsapWithCSS.timeline({defaults:{ease:"none"}});animation.fromTo(this.globeGroup.scale,{x:this.scale*1.2,y:this.scale*1.2,z:this.scale*1.2},{x:this.scale,y:this.scale,z:this.scale},0).fromTo(this.globeParent.rotation,{y:Math.PI*.25},{y:0},0),this.trigger=store.scrollTrigger.create({trigger:this,end:"top center",scrub:.6,animation})}initSlider(){this.slider=EmblaCarousel(this.$embla),this.slider.on("select",slider=>{const index=slider.selectedScrollSnap(),marker=this.markers[index];this.moveToMarker(marker.lat,marker.lon)}),this.slider.on("pointerDown",()=>{this.isSliding=!0}),this.slider.on("pointerUp",()=>{this.isSliding=!1})}createCamera(){this.camera=new OrthographicCamera(-store.w.w/2,store.w.w/2,store.w.h/2,-store.w.h/2,-1e3,1e3),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}createRenderer(){this.renderer=new WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setSize(this.offsetWidth,window.innerHeight),this.renderer.setPixelRatio(store.w.pR),this.renderer.domElement.classList.toggle("gl-scroll",!this.isCurrentlyFixed),this.renderer.domElement.classList.toggle("gl-fixed",this.isCurrentlyFixed),this.$canvasWrapper.appendChild(this.renderer.domElement)}createLights(){this.scene.add(new AmbientLight(16777215,3.05))}createGlobe(map){const globeGeometry=new SphereGeometry(1,64,64),globeMaterial=new MeshStandardMaterial({map});this.globeMesh=new Mesh(globeGeometry,globeMaterial),this.setBounds(),this.globeGroup.add(this.globeMesh)}createMarkers(){this.$markers.forEach((marker,index)=>{const card=this.$cards[index],lat=Number(marker.dataset.lat),lon=Number(marker.dataset.lon),position=this.latLonToVector3(lat,lon),$icon=marker.querySelector(".marker-icon");gsapWithCSS.set($icon,{opacity:0}),this.popup&&(marker&&marker.addEventListener("click",this.onMarkerClick.bind(this,index)),card&&card.addEventListener("click",this.onMarkerClick.bind(this,index))),marker.addEventListener("mouseenter",()=>{this.onMarkerEnter(index)}),marker.addEventListener("mouseleave",()=>{this.onMarkerLeave(index)}),this.markers.push({el:marker,slug:marker.dataset.slug,inner:marker.querySelector(".marker-inner"),modal:marker.querySelector(".marker-modal"),modalBg:marker.querySelector(".marker-modal-bg"),modalText:new Split({target:marker.querySelector(".marker-text"),by:"words"}),dot:marker.querySelector(".marker-dot"),icon:$icon,dashes:marker.querySelector(".marker-dashes .scaled-circle"),isVisible:!0,url:marker.dataset.url,screen:new Vector2,world:new Vector3,position,lat,lon})})}openPopup(page){const tl=gsapWithCSS.timeline({defaults:{ease:"expo.inOut",duration:.7}});tl.add(this.popup.open(page),0),!store.isMobile&&tl.add(this.moveLeft(),"<"),tl.call(()=>{store.isHeaderDisabled=!0,!store.header.isHidden&&store.header.hide(),store.smoothScroll.scrollTo(this.$dom,{offset:-store.w.h/2+this.bounds.dom.height/2,force:!0,onComplete:()=>{store.isHeaderDisabled=!1}}),store.lazyLoad.update()},[],"<0.1")}onPopupClose(){return window.history.replaceState({},"",this.defaultUrl),this.activeMarkerIndex!==-1&&(this.setMarkerInactive(this.activeMarkerIndex),this.activeMarkerIndex=-1),this.moveCenter()}zoomIn(){this.zoom.current===this.zoom.max||this.isAnimating||(this.zoom.current=gsapWithCSS.utils.clamp(this.zoom.min,this.zoom.max,this.zoom.current+1),this.updateZoom())}zoomOut(){if(!(this.zoom.current===this.zoom.min||this.isAnimating)){if(this.zoom.current=gsapWithCSS.utils.clamp(this.zoom.min,this.zoom.max,this.zoom.current-1),this.isClusterCentered){this.resetZoom(this.zoom.current);return}this.updateZoom()}}getMaxScale(){const radius=this.globeMesh.geometry.boundingSphere.radius,halfH=(this.camera.top-this.camera.bottom)*.5,halfW=(this.camera.right-this.camera.left)*.5;return Math.min(halfH/radius,halfW/radius)}updateZoom(onComplete){gsapWithCSS.killTweensOf(this.globeGroup.scale);let scale=this.scale+this.scale*this.zoom.step*this.zoom.current;scale=Math.min(this.getMaxScale(),scale),gsapWithCSS.to(this.globeGroup.scale,{x:scale,y:scale,z:scale,duration:1,ease:"gl.fastInOut",onComplete:()=>{this._lastClusterSignature="",onComplete&&onComplete()}})}moveLeft(){let scale=store.remToPixel(120)/2;scale=Math.min(this.getMaxScale(),scale),gsapWithCSS.timeline({defaults:{ease:"expo.inOut",duration:1.2}}).to(this.globeGroup.position,{x:-store.w.w/2+scale*.1}).to(this.globeGroup.scale,{x:scale,y:scale,z:scale},0).to([this.$zoomIn,this.$zoomOut],{autoAlpha:0,ease:"alpha",duration:.25},"<25%")}moveCenter(){const tl=gsapWithCSS.timeline({defaults:{ease:"gl.fastInOut",duration:1.4}}),scale=this.scale+this.scale*.85*(this.zoom.current/this.zoom.max);return tl.to(this.globeGroup.position,{x:0},0).call(()=>{this.updateGlobeRotation(this.globeRotation.lat,this.globeRotation.lon)},[],"<7%").to(this.globeGroup.scale,{x:scale,y:scale,z:scale},0).to([this.$zoomIn,this.$zoomOut],{autoAlpha:1,ease:"power2.out",stagger:.035,duration:.5},"<40%"),tl}onMouseDown(e){if(this.popup&&this.popup.isOpen)return;const x=e.changedTouches?e.changedTouches[0].clientX:e.clientX,y=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.isDragging=!0,this.previousMouse.set(x,y)}onMouseUp(){this.isDragging=!1}onMouseMove(e){if(!this.isDragging||this.popup&&this.popup.isOpen||this.isAnimating||this.isSliding)return;if(this.isClusterCentered){this.resetZoom();return}const x=e.changedTouches?e.changedTouches[0].clientX:e.clientX,y=e.changedTouches?e.changedTouches[0].clientY:e.clientY,deltaX=x-this.previousMouse.x,deltaY=y-this.previousMouse.y;this.previousMouse.set(x,y),this.globeRotation.lon-=deltaX*this.dragSpeed,this.globeRotation.lat+=deltaY*this.dragSpeed,this.globeRotation.lat=Math.max(-85,Math.min(85,this.globeRotation.lat)),this.updateGlobeRotation(this.globeRotation.lat,this.globeRotation.lon)}resetZoom(zoom){this.isAnimating=!0,this.updateGlobeRotation(this.globeRotation.lat,this.globeRotation.lon),this.zoom.current=zoom||this.zoom.min,this.updateZoom(()=>{this.isAnimating=!1,this.isClusterCentered=!1})}onMarkerClick(index,e){const marker=this.markers[index];if(e&&(e.preventDefault(),e.stopPropagation()),this.popup&&this.popup.isOpen)return;this.activeMarkerIndex!==-1&&this.setMarkerInactive(this.activeMarkerIndex);const url=window.location.origin+marker.url;if(this.popup){let page=store.router.cache.get(url);page?(!this.popup.isOpen&&this.openPopup(page),window.history.replaceState({},"",url),this.moveToMarker(marker.lat,marker.lon),this.activeMarkerIndex=index):store.router.preload(url).then(()=>{page=store.router.cache.get(url),window.history.replaceState({},"",url),page&&(this.activeMarkerIndex=index,!this.popup.isOpen&&this.openPopup(page),this.moveToMarker(marker.lat,marker.lon))}).catch(err=>console.warn(err))}}onMarkerEnter(index){this.popup&&this.popup.isOpen||this.setMarkerActive(index)}onMarkerLeave(index){this.activeMarkerIndex!==index&&this.setMarkerInactive(index)}setMarkerActive(index){const marker=this.markers[index];gsapWithCSS.killTweensOf([marker.dot,marker.dashes,marker.icon,marker.modalText.instance.words]);const tl=gsapWithCSS.timeline({defaults:{ease:"expo.out",duration:.7}});tl.to(marker.dot,{scale:3}).to(marker.dashes,{transformOrigin:"center",scale:2.6},0).to(marker.icon,{opacity:1,ease:"power2.out",duration:.25},"<"),this.popup||tl.addLabel("animate-modal","<20%").fromTo(marker.modal,{scale:.7,yPercent:40},{scale:1,yPercent:0,duration:1},"animate-modal").fromTo(marker.modalBg,{scaleX:.8,scaleY:.9},{scaleX:1,scaleY:1,transformOrigin:"bottom",duration:1},"<").set(marker.modal,{autoAlpha:1},"<1%").fromTo(marker.modalText.instance.words,{opacity:0,yPercent:100},{yPercent:0,stagger:.03333,duration:.8},"animate-modal").set(marker.modalText.instance.words,{opacity:1,stagger:.03333},"<8%")}setMarkerInactive(index){const marker=this.markers[index];gsapWithCSS.killTweensOf([marker.dot,marker.dashes,marker.icon]);const tl=gsapWithCSS.timeline({defaults:{ease:"gl.fastInOut",duration:.85}});tl.to([marker.dot,marker.dashes],{scale:1}).to(marker.icon,{opacity:0,ease:"power2.out",duration:.25},"<"),this.popup||tl.to(marker.modal,{scale:.7,yPercent:70},"<").to(marker.modalBg,{scaleX:.7,scaleY:.9},"<").set(marker.modal,{autoAlpha:0},"<13%")}showMarker(index){const marker=this.markers[index];if(!marker.isVisible)return;gsapWithCSS.killTweensOf(marker.inner),gsapWithCSS.set(marker.el,{pointerEvents:"all"});const tl=gsapWithCSS.timeline();return tl.fromTo(marker.inner,{scale:0},{scale:1,duration:.7,ease:"expo.out"}).to(marker.inner,{autoAlpha:1,ease:"power2.out",duration:.3},0),tl}hideMarker(index){const marker=this.markers[index];return gsapWithCSS.killTweensOf(marker.inner),gsapWithCSS.set(marker.el,{pointerEvents:"none"}),gsapWithCSS.to(marker.inner,{autoAlpha:0,ease:"power2.out",duration:.25})}latLonToVector3(lat,lon){const radius=this.globeMesh.scale.x,phi=(90-lat)*(Math.PI/180),theta=(lon+180)*(Math.PI/180);return new Vector3(-radius*Math.sin(phi)*Math.cos(theta),radius*Math.cos(phi),radius*Math.sin(phi)*Math.sin(theta))}pxToWorldUnit(px){return px/window.innerWidth*(this.frustumSize*this.aspect)}getCurrentGlobeRotation(){const euler=new Euler().setFromQuaternion(this.globeGroup.quaternion,"YXZ");return{lat:-MathUtils.radToDeg(euler.x),lon:-MathUtils.radToDeg(euler.y)}}moveToMarker(targetLat,targetLon){const phi=targetLat*Math.PI/180,theta=(270-targetLon)*Math.PI/180,euler=new Euler(phi,theta,0,"XYZ");var qend=new Quaternion().setFromEuler(euler);this.targetQuat=qend}updateGlobeRotation(lat,lon){const phi=MathUtils.degToRad(90-lat),theta=MathUtils.degToRad(lon),spherical=new Spherical(1,phi,theta),position=new Vector3().setFromSpherical(spherical),m=new Matrix4().lookAt(position,new Vector3(0,0,0),new Vector3(0,1,0)).invert(),q=new Quaternion().setFromRotationMatrix(m);this.targetQuat=q}updateMarkers(){this.markers.forEach(({el,position,screen},index)=>{const worldPos=position.clone();this.globeGroup.localToWorld(worldPos);const globeCenterToMarker=worldPos.clone().normalize(),cameraDirection=this.camera.position.clone().normalize();globeCenterToMarker.dot(cameraDirection)<.4?this.markers[index].isVisible&&(this.hideMarker(index),this.markers[index].isVisible=!1):this.markers[index].isVisible||(this.markers[index].isVisible=!0,this.showMarker(index));let offset=0;store.isMobile&&(offset=store.w.h/2-this.bounds.dom.width/2);const projected=worldPos.clone().project(this.camera),x=projected.x*(this.width/2)+this.width/2,y=this.isCurrentlyFixed?-projected.y*(store.w.h/2)+store.w.h/2-this.bounds.gl.top-store.w.h+store.smoothScroll.animatedScroll:-projected.y*(store.w.h/2)+store.w.h/2-offset;screen.set(x,y),this.markers[index].world.copy(worldPos),el.style.transform=`translate(-50%, -50%) translate(${x}px, ${y}px)`});const groups=this.detectClusters();this.reconcileClusters(groups),this.updateClusters()}getClusterThresholdPx(){if(this.zoom.current===this.zoom.max)return 0;const range=this.zoom.max-1-this.zoom.min||1,factor=1-.75*((this.zoom.current-this.zoom.min)/range);return this.clusterThresholdPx*factor}detectClusters(){const n=this.markers.length,visited=new Array(n).fill(!1),clusters=[],threshold=this.getClusterThresholdPx(),threshold2=threshold*threshold;for(let i=0;i<n;i++){if(visited[i]||!this.markers[i].isVisible)continue;const group=[i],queue=[i];for(visited[i]=!0;queue.length;){const k=queue.pop(),mk=this.markers[k];for(let j=0;j<n;j++){if(visited[j]||!this.markers[j].isVisible)continue;const mj=this.markers[j],dx=mk.screen.x-mj.screen.x,dy=mk.screen.y-mj.screen.y;threshold>0&&dx*dx+dy*dy<=threshold2&&(visited[j]=!0,group.push(j),queue.push(j))}}group.length>1&&clusters.push(group)}const signature=JSON.stringify(clusters);return signature!==this._lastClusterSignature&&(this._lastClusterSignature=signature),clusters}reconcileClusters(groups){const newIds=new Set(groups.map(g=>g.join("-")));for(const[id,cluster]of this.clusters.entries())!newIds.has(id)&&!cluster.isAnimating&&this.removeClusterMarker(id,cluster.members);for(const group of groups){const id=group.join("-");this.clusters.has(id)?this.clusters.get(id).members=group:this.createClusterMarker(id,group)}}onClusterClick(id){this.isClusterCentered=!0;const cluster=this.clusters.get(id),marker=this.markers[cluster.members[0]];store.smoothScroll.scrollTo(this.$dom,{offset:-store.w.h/2+this.bounds.dom.height/2,force:!0,lock:!0,onComplete:()=>{this.detectClusterScroll=!0}}),this.zoom.current=this.zoom.max,this.updateZoom(),this.moveToMarker(marker.lat,marker.lon)}createClusterMarker(id,members){this.clusters.has(id)&&this.clusters.delete(id);const el=this.$cluster.cloneNode(!0),$count=el.querySelector(".cluster-count"),$inner=el.querySelector(".cluster-inner");el.dataset.id=id,$count.innerText=members.length,this.appendChild(el),this.popup&&el.addEventListener("click",()=>{this.onClusterClick(id)});const tl=gsapWithCSS.timeline();members.forEach(member=>{tl.add(this.hideMarker(member),0)}),tl.fromTo($inner,{scale:0},{scale:1,duration:.7,ease:"expo.out"},"<80%").to(el,{autoAlpha:1,ease:"power2.out",duration:.3},"<"),this.clusters.set(id,{el,members,screen:new Vector2,world:new Vector3,showTL:tl})}removeClusterMarker(id,members){const cluster=this.clusters.get(id);if(!cluster)return;cluster.isAnimating=!0,cluster.showTL.kill();const tl=gsapWithCSS.timeline();tl.to(cluster.el,{autoAlpha:0,ease:"power2.out",duration:.25,onComplete:()=>{cluster.el.remove(),this.clusters.delete(id)}}),members.forEach((member,index)=>{tl.add(this.showMarker(member),.25+.05*index)})}updateClusters(){this.clusters.forEach(cluster=>{const markerIndex=cluster.members[0],marker=this.markers[markerIndex];cluster.el.style.transform=`translate(-50%, -50%) translate(${marker.screen.x}px, ${marker.screen.y}px)`})}setBounds(){this.bounds=store.getWorldBounds(this.$dom),this.scale=this.bounds.gl.w/2,this.globeGroup.scale.set(this.scale,this.scale,this.scale),this.isCurrentlyFixed?this.globeGroup.position.y=this.bounds.gl.y:this.globeGroup.position.y=0}scroll(){this.popup&&this.isClusterCentered&&this.detectClusterScroll&&!this.popup.isOpen&&(this.detectClusterScroll=!1,this.resetZoom())}resize(){this.dragSpeed=store.isMobile?.45:.1,this.width=this.offsetWidth;const w=store.w.w,h=store.w.h;this.camera.left=-w/2,this.camera.right=w/2,this.camera.top=h/2,this.camera.bottom=-h/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,h),this.setBounds()}screenChange(){this.isFixed&&(this.isCurrentlyFixed=!store.isMobile,this.renderer.domElement.classList.toggle("gl-scroll",!this.isCurrentlyFixed),this.renderer.domElement.classList.toggle("gl-fixed",this.isCurrentlyFixed)),setTimeout(()=>{!this.popup&&this.initTrigger()},10)}update(){this.globeGroup.quaternion.slerp(this.targetQuat,.1),this.isCurrentlyFixed&&this.globeMesh&&(this.globeGroup.position.y=this.bounds.gl.y+store.smoothScroll.animatedScroll),this.updateMarkers(),this.renderer.render(this.scene,this.camera)}}customElements.define("c-globe",Globe);
