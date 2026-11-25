var S=Object.defineProperty;var P=(t,i,e)=>i in t?S(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var m=(t,i,e)=>(P(t,typeof i!="symbol"?i+"":i,e),e);import{a1 as C,aa as y}from"./entry.a59f3271.js";class B extends C{constructor(e=5,r=!0){super();m(this,"uniforms");this.uniforms={chromaticAberration:{value:.05},chromaticEdgeBoost:{value:1},directLightBoost:{value:1},transmission:{value:1},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new y("red")},anisotropy:{value:.1},time:{value:0},surfaceLensStrength:{value:.06},distortion:{value:0},distortionScale:{value:.5},refractionStrength:{value:1},distortionAmplitude:{value:.3},distortionEdgeBoost:{value:1},distortionEdgePower:{value:2},bodyTintStrength:{value:.1},edgeTintStrength:{value:.2},temporalDistortion:{value:0},coreRefractionDamping:{value:.4},edgeRefractionCeiling:{value:1},buffer:{value:null}},this.onBeforeCompile=o=>{o.uniforms={...o.uniforms,...this.uniforms},r?o.defines.USE_SAMPLER="":o.defines.USE_TRANSMISSION="",o.vertexShader=`
        varying vec3 vLocalPosition;
        `+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        vLocalPosition = position;
        `),o.fragmentShader=`
        uniform float chromaticAberration;         
        uniform float chromaticEdgeBoost;
        uniform float directLightBoost;
        uniform float anisotropy;
        uniform float time;
        uniform float surfaceLensStrength;
        uniform float distortion;
        uniform float distortionScale;
        uniform float refractionStrength;
        uniform float distortionAmplitude;
        uniform float distortionEdgeBoost;
        uniform float distortionEdgePower;
        uniform float bodyTintStrength;
        uniform float edgeTintStrength;
        uniform float temporalDistortion;
        uniform float coreRefractionDamping;
        uniform float edgeRefractionCeiling;
        uniform sampler2D buffer;
        varying vec3 vLocalPosition;
        vec3 random3(vec3 c) {
          float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
          vec3 r;
          r.z = fract(512.0*j);
          j *= .125;
          r.x = fract(512.0*j);
          j *= .125;
          r.y = fract(512.0*j);
          return r-0.5;
        }
        float seed = 0.0;
        uint hash( uint x ) {
          x += ( x << 10u );
          x ^= ( x >>  6u );
          x += ( x <<  3u );
          x ^= ( x >> 11u );
          x += ( x << 15u );
          return x;
        }
        uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
        uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
        uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }
        float floatConstruct( uint m ) {
          const uint ieeeMantissa = 0x007FFFFFu;
          const uint ieeeOne      = 0x3F800000u;
          m &= ieeeMantissa;
          m |= ieeeOne;
          float  f = uintBitsToFloat( m );
          return f - 1.0;
        }
        float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
        float random( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
        float random( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
        float random( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
        float rand() {
          float result = random(vec3(gl_FragCoord.xy, seed));
          seed += 1.0;
          return result;
        }
        const float F3 =  0.3333333;
        const float G3 =  0.1666667;
        float snoise(vec3 p) {
          vec3 s = floor(p + dot(p, vec3(F3)));
          vec3 x = p - s + dot(s, vec3(G3));
          vec3 e = step(vec3(0.0), x - x.yzx);
          vec3 i1 = e*(1.0 - e.zxy);
          vec3 i2 = 1.0 - e.zxy*(1.0 - e);
          vec3 x1 = x - i1 + G3;
          vec3 x2 = x - i2 + 2.0*G3;
          vec3 x3 = x - 1.0 + 3.0*G3;
          vec4 w, d;
          w.x = dot(x, x);
          w.y = dot(x1, x1);
          w.z = dot(x2, x2);
          w.w = dot(x3, x3);
          w = max(0.6 - w, 0.0);
          d.x = dot(random3(s), x);
          d.y = dot(random3(s + i1), x1);
          d.z = dot(random3(s + i2), x2);
          d.w = dot(random3(s + 1.0), x3);
          w *= w;
          w *= w;
          d *= w;
          return dot(d, vec4(52.0));
        }
        float snoiseFractal(vec3 m) {
          return 0.5333333* snoise(m)
                +0.2666667* snoise(2.0*m)
                +0.1333333* snoise(4.0*m)
                +0.0666667* snoise(8.0*m);
        }
        vec2 smoothLensVector(vec2 value) {
          float len = length(value);
          return value / max(len, 0.16) * smoothstep(0.0, 0.16, len);
        }
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <transmission_pars_fragment>",`
          #ifdef USE_TRANSMISSION
            uniform float _transmission;
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
            vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix, const in float refractionScale ) {
              vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
              vec3 modelScale;
              modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
              modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
              modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
              return normalize( refractionVector ) * thickness * modelScale * refractionScale;
            }
            float applyIorToRoughness( const in float roughness, const in float ior ) {
              return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
            }
            vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
              float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
              #ifdef USE_SAMPLER
                #ifdef texture2DLodEXT
                  return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
                #else
                  return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
                #endif
              #else
                return texture2D(buffer, fragCoord.xy);
              #endif
            }
            vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
              if ( isinf( attenuationDistance ) ) {
                return radiance;
              } else {
                vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
                vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );
                return transmittance * radiance;
              }
            }
            float refractionChannel( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 position,
              const in mat4 modelMatrix, const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior,
              const in float thickness, const in vec2 lensOffset, const in vec3 attenuationColor,
              const in float attenuationDistance, const in float refractionScale, const in int channel ) {
              vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix, refractionScale );
              vec3 refractedRayExit = position + transmissionRay;
              vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
              vec2 refractionCoords = ndcPos.xy / ndcPos.w;
              refractionCoords += 1.0;
              refractionCoords /= 2.0;
              float uvEdgeDistance = min(
                min( refractionCoords.x, 1.0 - refractionCoords.x ),
                min( refractionCoords.y, 1.0 - refractionCoords.y )
              );
              float lensOffsetFade = smoothstep( 0.015, 0.12, uvEdgeDistance );
              refractionCoords = clamp( refractionCoords + lensOffset * lensOffsetFade, vec2( 0.001 ), vec2( 0.999 ) );
              vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
              vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
              if ( channel == 0 ) return attenuatedColor.r;
              if ( channel == 1 ) return attenuatedColor.g;
              return attenuatedColor.b;
            }

            vec3 getIBLVolumeRefractionRGB( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
              const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
              const in mat4 viewMatrix, const in mat4 projMatrix, const in vec3 iorRGB, const in float thickness,
              const in vec2 lensOffset, const in vec3 attenuationColor, const in float attenuationDistance, const in float refractionScale ) {
              vec3 oneMinusF = 1.0 - EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
              vec3 raw = vec3(
                refractionChannel( n, v, roughness, position, modelMatrix, viewMatrix, projMatrix, iorRGB.r, thickness, lensOffset, attenuationColor, attenuationDistance, refractionScale, 0 ),
                refractionChannel( n, v, roughness, position, modelMatrix, viewMatrix, projMatrix, iorRGB.g, thickness, lensOffset, attenuationColor, attenuationDistance, refractionScale, 1 ),
                refractionChannel( n, v, roughness, position, modelMatrix, viewMatrix, projMatrix, iorRGB.b, thickness, lensOffset, attenuationColor, attenuationDistance, refractionScale, 2 )
              );
              return oneMinusF * raw * diffuseColor;
            }
          #endif
`),o.fragmentShader=o.fragmentShader.replace("#include <transmission_fragment>",`  
          material.transmission = _transmission;
          material.transmissionAlpha = 1.0;
          material.thickness = thickness;
          material.attenuationDistance = attenuationDistance;
          material.attenuationColor = attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            material.transmission *= texture2D( transmissionMap, vUv ).r;
          #endif
          #ifdef USE_THICKNESSMAP
            material.thickness *= texture2D( thicknessMap, vUv ).g;
          #endif
          
          vec3 pos = vWorldPosition;
          vec3 v = normalize( cameraPosition - pos );
          float transmissionFaceDirection = gl_FrontFacing ? 1.0 : -1.0;
          vec3 n = inverseTransformDirection( normal * transmissionFaceDirection, viewMatrix );
          vec3 transmission = vec3(0.0);
          float randomCoords = rand();
          float thickness_smear = thickness * max(pow(roughness, 0.33), anisotropy);
          vec3 distortionNormal = vec3(0.0);
          vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
          float fresnelFactor = clamp(1.0 - abs(dot(normalize(n), normalize(v))), 0.0, 1.0);
          float edgeFactor = pow(fresnelFactor, max(distortionEdgePower, 0.0001));
          float edgeSpread = mix(edgeFactor, sqrt(edgeFactor), 0.55);
          float coreRefractionGate = mix(clamp(coreRefractionDamping, 0.0, 1.0), clamp(edgeRefractionCeiling, 0.0, 1.0), edgeSpread);
          float effRefractionStrength = refractionStrength * coreRefractionGate;
          float chromaStrength = chromaticAberration * coreRefractionGate * (1.0 + chromaticEdgeBoost * (0.2 + edgeSpread * 0.8));
          float distortionStrength = distortion * coreRefractionGate * (1.0 + distortionEdgeBoost * (0.15 + edgeSpread * 0.85));
          vec3 absSurfaceNormal = abs(normalize(normal));
          vec3 projectionWeights = pow(absSurfaceNormal, vec3(6.0));
          projectionWeights /= max(projectionWeights.x + projectionWeights.y + projectionWeights.z, 0.0001);
          vec2 rawSurfaceCoords =
            vLocalPosition.yz * projectionWeights.x +
            vLocalPosition.xz * projectionWeights.y +
            vLocalPosition.xy * projectionWeights.z;
          float surfaceExtent = max(max(abs(vLocalPosition.x), abs(vLocalPosition.y)), abs(vLocalPosition.z));
          vec2 surfaceCoords = clamp(rawSurfaceCoords / max(surfaceExtent, 0.0001), vec2(-1.0), vec2(1.0));
          float surfaceRadius = clamp(length(surfaceCoords), 0.0, 1.0);
          float surfaceBox = clamp(max(abs(surfaceCoords.x), abs(surfaceCoords.y)), 0.0, 1.0);
          float lensProfile = mix(surfaceRadius, surfaceBox, 0.72);
          float lensWeight = 0.2 + smoothstep(0.0, 1.0, lensProfile) * 0.8;
          vec2 lensDirection = surfaceCoords * (0.35 + lensProfile * 0.65);
          vec2 lensOffset =
            lensDirection * (0.006 + lensProfile * 0.026) * lensWeight * surfaceLensStrength * effRefractionStrength +
            smoothLensVector(surfaceCoords) * surfaceBox * 0.004 * surfaceLensStrength * coreRefractionGate +
            smoothLensVector(n.xy) * (0.003 + edgeSpread * 0.015) * effRefractionStrength;
          if (distortion > 0.0) {
            vec3 distortionNoise = vec3(
              snoiseFractal(vec3(pos * distortionScale + temporalOffset)),
              snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)),
              snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset))
            );
            distortionNormal = distortionNoise * (distortionStrength * distortionAmplitude);
          }
          for (float i = 0.0; i < ${e}.0; i ++) {
            vec3 sampleNorm = normalize(n + roughness * roughness * 2.0 * normalize(vec3(rand() - 0.5, rand() - 0.5, rand() - 0.5)) * pow(rand(), 0.33) + distortionNormal);
            float chromaK = chromaStrength * (i + randomCoords) / float(${e});
            float sampleThickness = material.thickness + thickness_smear * (i + randomCoords) / float(${e});
            vec3 iorRGB = material.ior * vec3(1.0, 1.0 + chromaK, 1.0 + 2.0 * chromaK);
            transmission += getIBLVolumeRefractionRGB(
              sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
              pos, modelMatrix, viewMatrix, projectionMatrix, iorRGB, sampleThickness, lensOffset,
              material.attenuationColor, material.attenuationDistance, effRefractionStrength
            );
          }
          transmission /= ${e}.0;
          vec3 glassBodyTint = material.attenuationColor * bodyTintStrength * (0.08 + (1.0 - edgeSpread) * 0.12);
          vec3 glassEdgeRim = mix(material.attenuationColor, vec3(1.0), 0.55) * edgeTintStrength * (0.08 + edgeSpread * 0.28);
          vec3 glassDirectLighting = vec3(0.0);
          #if NUM_DIR_LIGHTS > 0
            vec3 surfaceNormal = normalize(normal * transmissionFaceDirection);
            for (int lightIndex = 0; lightIndex < NUM_DIR_LIGHTS; lightIndex++) {
              vec3 lightDirection = normalize(directionalLights[lightIndex].direction);
              float diffuseResponse = max(dot(surfaceNormal, lightDirection), 0.0);
              float highlightResponse = pow(max(dot(surfaceNormal, normalize(lightDirection + geometryViewDir)), 0.0), 12.0);
              glassDirectLighting += directionalLights[lightIndex].color * (diffuseResponse * 0.1 + highlightResponse * 0.16);
            }
          #endif
          vec3 glassAmbientLighting = ambientLightColor * 0.05;
          vec3 glassPresence = transmission + glassBodyTint + glassEdgeRim
            + (glassDirectLighting * directLightBoost + glassAmbientLighting) * (0.3 + edgeSpread * 0.7);
          totalDiffuse = mix( totalDiffuse, glassPresence, material.transmission );
`)},Object.keys(this.uniforms).filter(o=>o!=="transmission").forEach(o=>Object.defineProperty(this,o,{get:()=>this.uniforms[o].value,set:a=>this.uniforms[o].value=a})),Object.defineProperty(this,"transmission",{get:()=>this.uniforms._transmission.value,set:o=>{this.uniforms.transmission.value=o,this.uniforms._transmission.value=o}})}}const u=50,h=25,T=300,g=300,n=`
float glitchHash(vec2 p){p=fract(p*vec2(127.1,311.7));p+=dot(p,p.yx+19.19);return fract(p.x*p.y);}
`,G=`
attribute float instanceProgress;
attribute float instanceDespawnStyle;
varying float vProgress;
varying float vDespawnStyle;
varying vec3 vGlitchLocalPosition;
uniform float uGlitchTime;
uniform float uGlitchAmount;
`,c=`
vProgress = instanceProgress;
vDespawnStyle = instanceDespawnStyle;
float glitchPhase = 1.0 - vProgress;
if(uGlitchAmount > 0.001 && glitchPhase > 0.0001){
  float glitchTime = uGlitchTime * (0.65 + glitchPhase * 1.5);
  if(vDespawnStyle > 0.5){
    float impactCell = floor((position.x * 7.0 + position.y * 11.0 + position.z * 5.0) * mix(1.8, 3.8, glitchPhase) + glitchTime * 6.0);
    float impactNoise = glitchHash(vec2(impactCell, floor(vProgress * 41.0) + floor(glitchTime * 13.0))) - 0.5;
    float impactBurst = step(0.56, glitchHash(vec2(impactCell * 0.37, floor(glitchTime * 5.0))));
    vec3 shatterDir = normalize(vec3(position.xy + vec2(0.0001, 0.24), position.z + impactNoise * 0.65));
    float impactSpread = glitchPhase * glitchPhase * uGlitchAmount;
    float impactScatter = 0.58 + impactBurst * 0.86;
    transformed += shatterDir * (impactScatter * impactSpread);
    transformed.xy = floor(transformed.xy * mix(16.0, 6.0, glitchPhase)) / mix(16.0, 6.0, glitchPhase);
    transformed.z += impactNoise * (1.35 * impactSpread);
    transformed.x += sign(impactNoise) * impactBurst * (0.52 * impactSpread);
    transformed.y += (impactNoise * 0.5 + 0.5) * (0.44 * impactSpread);
  } else {
    float glitchBand = floor((position.y + position.z * 0.35) * mix(9.0, 18.0, glitchPhase) + glitchTime * 5.0);
    float glitchNoise = glitchHash(vec2(glitchBand, floor(vProgress * 37.0) + floor(glitchTime * 11.0))) - 0.5;
    vec3 glitchDir = normalize(position + vec3(0.0001, 0.35, -0.2));
    float glitchSpread = glitchPhase * glitchPhase * uGlitchAmount;
    transformed += glitchDir * (0.42 * glitchSpread);
    transformed.x += glitchNoise * (1.25 * glitchSpread);
    transformed.z += sin(glitchBand * 1.7 + glitchNoise * 6.2831 + glitchTime * 14.0) * (0.34 * glitchSpread);
    transformed.y += (glitchNoise * 0.5 + 0.5) * 0.14 * glitchSpread;
    transformed.x += step(0.78, glitchHash(vec2(glitchBand * 0.13, floor(glitchTime * 7.0)))) * (0.5 * glitchSpread);
  }
}
vGlitchLocalPosition = transformed;
`,v=`
if(uGlitchAmount > 0.001 && vProgress<0.9999){
  float prog=vProgress;
  float glitchPhase = (1.0 - prog) * uGlitchAmount;
  if(vDespawnStyle > 0.5){
    float time = uGlitchTime * (1.15 + glitchPhase * 3.1);
    vec2 localCell = floor(vGlitchLocalPosition.xy * mix(13.0, 7.0, glitchPhase) + vec2(floor(time * 5.0), floor(time * 7.0)));
    float localNoise = glitchHash(localCell + floor(prog * 19.0));
    float localBurst = step(0.58, glitchHash(localCell.yx + floor(time * 3.0)));
    float shardBand = glitchHash(vec2(floor(vGlitchLocalPosition.z * 14.0 + time * 4.0), localCell.x));
    float shardMask = step(0.52, glitchHash(vec2(localCell.x * 0.37, localCell.y * 0.23) + floor(time * 6.0)));
    float screenCell = floor(min(gl_FragCoord.x, gl_FragCoord.y) / mix(44.0, 20.0, glitchPhase));
    float screenNoise = glitchHash(vec2(screenCell, floor(time * 11.0)));
    float thr = 0.12 + glitchPhase * 1.18 + localBurst * 0.18 + shardBand * 0.16 + shardMask * 0.22 + screenNoise * 0.08;
    if(localNoise < thr) discard;
  } else {
    float time = uGlitchTime * (0.8 + glitchPhase * 2.0);
    float bs=mix(float(${u}),float(${h}),prog*prog);
    vec2 blk=floor(gl_FragCoord.xy/bs);
    float bandH=mix(float(${T}),float(${g}),prog);
    float band=floor((gl_FragCoord.y + sin(time * 13.0) * 6.0)/bandH);
    float tearMask=step(0.66, glitchHash(vec2(band * 0.73, floor(time * 9.0))));
    float gAmp=glitchPhase*glitchPhase*18.0;
    float gx=(glitchHash(vec2(band,floor(prog*31.0)+floor(time*7.0)))-0.5)*gAmp;
    float gy=(glitchHash(vec2(band+17.0,floor(prog*19.0)+floor(time*5.0)))-0.5)*gAmp*0.35;
    gx += tearMask * (glitchHash(vec2(band + 91.0, floor(time * 17.0))) - 0.5) * 34.0 * glitchPhase;
    vec2 warped = vec2(blk.x + gx, blk.y + gy);
    float noise=glitchHash(warped + floor(prog*13.0) + floor(time * 3.0));
    float streak=glitchHash(vec2(band * 0.31, floor(gl_FragCoord.x * 0.06) + floor(time * 19.0)));
    float bandNoise=glitchHash(vec2(band, blk.x * 0.5) + floor(prog * 23.0) + floor(time * 5.0));
    float thr=glitchPhase*glitchPhase*mix(0.55, 1.35, bandNoise) + tearMask * 0.18 + streak * 0.08;
    if(noise<thr) discard;
  }
}
`,d=`
if(uGlitchAmount > 0.001 && vProgress < 0.9999){
  float glitchPhase = (1.0 - vProgress) * uGlitchAmount;
  if(vDespawnStyle > 0.5){
    vec2 impactCell = floor(vGlitchLocalPosition.xy * 12.0 + vec2(floor(uGlitchTime * 8.0), floor(uGlitchTime * 5.0)));
    float impactNoise = glitchHash(impactCell + floor(vProgress * 17.0));
    float impactFlash = step(0.64, glitchHash(vec2(impactCell.y, impactCell.x) + floor(uGlitchTime * 11.0)));
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.bgr * vec3(0.74, 1.02, 1.32), glitchPhase * (0.22 + impactNoise * 0.28));
    diffuseColor.rgb += vec3(0.08, 0.18, 0.32) * glitchPhase * (0.45 + impactNoise * 0.4);
    diffuseColor.rgb += vec3(0.24, 0.24, 0.26) * impactFlash * glitchPhase * 0.26;
  } else {
    float line = floor(gl_FragCoord.y * 0.075 + uGlitchTime * 22.0);
    float tear = step(0.72, glitchHash(vec2(line, floor(uGlitchTime * 9.0))));
    float scan = sin(gl_FragCoord.y * 0.18 + uGlitchTime * 28.0) * 0.5 + 0.5;
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.bgr * vec3(1.06, 0.9, 1.12), glitchPhase * tear * 0.28);
    diffuseColor.rgb += vec3(0.06, 0.01, 0.08) * glitchPhase * scan * 0.35;
  }
}
`,w=`
vProgress = instanceProgress;
vDespawnStyle = instanceDespawnStyle;
float glitchPhase = 1.0 - vProgress;
if(uGlitchAmount > 0.001 && glitchPhase > 0.0001){
  float glitchTime = uGlitchTime * (0.65 + glitchPhase * 1.5);
  float glitchBand = floor((position.y + position.z * 0.35) * mix(9.0, 18.0, glitchPhase) + glitchTime * 5.0);
  float glitchNoise = glitchHash(vec2(glitchBand, floor(vProgress * 37.0) + floor(glitchTime * 11.0))) - 0.5;
  float glitchSpread = glitchPhase * glitchPhase * uGlitchAmount;
  transformed += normalize(position + vec3(0.0001, 0.35, -0.2)) * (0.42 * glitchSpread);
  transformed.x += glitchNoise * (1.25 * glitchSpread);
  transformed.z += sin(glitchBand * 1.7 + glitchNoise * 6.2831 + glitchTime * 14.0) * (0.34 * glitchSpread);
  transformed.x += step(0.35, abs(glitchNoise)) * sign(glitchNoise) * (0.5 * glitchSpread);
  if(vDespawnStyle > 0.5){
    float quant = mix(16.0, 6.0, glitchPhase);
    transformed.xy = floor(transformed.xy * quant) / quant;
  }
}
vGlitchLocalPosition = transformed;
`,D=`
if(uGlitchAmount > 0.001 && vProgress<0.9999){
  float prog = vProgress;
  float glitchPhase = (1.0 - prog) * uGlitchAmount;
  float time = uGlitchTime * (0.8 + glitchPhase * 2.0);
  float blockSize = mix(float(${u}), float(${h}), prog * prog);
  vec2 blk = floor(gl_FragCoord.xy / blockSize);
  float band = floor((gl_FragCoord.y + sin(time * 13.0) * 6.0) / float(${g}));
  float tear = step(0.66, glitchHash(vec2(band * 0.73, floor(time * 9.0))));
  float shiftX = (glitchHash(vec2(band, floor(prog * 31.0) + floor(time * 7.0))) - 0.5) * glitchPhase * glitchPhase * 18.0
    + tear * (glitchHash(vec2(band + 91.0, floor(time * 17.0))) - 0.5) * 34.0 * glitchPhase;
  float noise = glitchHash(vec2(blk.x + shiftX, blk.y) + floor(prog * 13.0) + floor(time * 3.0));
  if(noise < glitchPhase * glitchPhase * 0.95 + tear * 0.18) discard;
  diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.bgr * vec3(1.06, 0.9, 1.12), glitchPhase * tear * 0.28);
}
`;function b(t,i=!1){let e=t.replace("#include <common>",`#include <common>
${G}
${n}`);return e=e.replace("#include <begin_vertex>",`#include <begin_vertex>
${i?w:c}`),e}function _(t){let i=t.replace("#include <common>",`#include <common>
uniform float uModelProgress;
uniform float uModelDespawnStyle;
varying float vProgress;
varying float vDespawnStyle;
varying vec3 vGlitchLocalPosition;
uniform float uGlitchTime;
uniform float uGlitchAmount;
${n}`);return i=i.replace("#include <begin_vertex>",`#include <begin_vertex>
${c.replaceAll("instanceProgress","uModelProgress").replaceAll("instanceDespawnStyle","uModelDespawnStyle")}`),i}function p(t,i=!1){let e=t.replace("#include <common>",`#include <common>
varying float vProgress;
varying float vDespawnStyle;
varying vec3 vGlitchLocalPosition;
uniform float uGlitchTime;
uniform float uGlitchAmount;
${n}`);const r=i?D:v;return i||(e=e.replace("#include <map_fragment>",`#include <map_fragment>
${d}`)),e=e.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
${r}`),e===t&&(e=e.replace("void main() {",`varying float vProgress;
varying float vDespawnStyle;
varying vec3 vGlitchLocalPosition;
uniform float uGlitchTime;
uniform float uGlitchAmount;
${n}
void main() {
${r}`)),e}function l(t,i,e){return t.replaceAll("uGlitchTime",i).replaceAll("uGlitchAmount",e)}function M(t){let i=t.replace("#include <common>",`#include <common>
varying float vProgress;
varying float vDespawnStyle;
varying vec3 vGlitchLocalPosition;
uniform float uPreviewTime;
uniform float uPreviewProgress;
uniform float uPreviewGlitchAmount;
${n}`);return i=i.replace("#include <begin_vertex>",`#include <begin_vertex>
${l(c.replaceAll("instanceProgress","uPreviewProgress").replaceAll("instanceDespawnStyle","0.0"),"uPreviewTime","uPreviewGlitchAmount")}`),i}function A(t){let i=t.replace("#include <common>",`#include <common>
varying float vProgress;
varying float vDespawnStyle;
varying vec3 vGlitchLocalPosition;
uniform float uPreviewTime;
uniform float uPreviewProgress;
uniform float uPreviewGlitchAmount;
${n}`);return i=i.replace("#include <map_fragment>",`#include <map_fragment>
    float previewBlock = mix(10.0, 22.0, glitchHash(vec2(floor(uPreviewTime * 3.0), 7.0)));
    vec2 previewCell = floor(gl_FragCoord.xy / previewBlock);
    float previewNoise = glitchHash(previewCell + floor(uPreviewTime * 12.0));
    float previewBand = glitchHash(vec2(floor(gl_FragCoord.y / 18.0), floor(uPreviewTime * 8.0)));
    if (previewNoise < 0.08 + previewBand * 0.08) discard;
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.bgr * vec3(0.78, 1.18, 1.28), 0.16 + previewNoise * 0.14);
    diffuseColor.rgb += vec3(0.03, 0.06, 0.14) * (0.2 + previewBand * 0.25);
    ${l(d,"uPreviewTime","uPreviewGlitchAmount")}
    `),i=i.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
${l(v,"uPreviewTime","uPreviewGlitchAmount")}`),i}let x=!1;function N(t){x=t}function F(t,i,e=x){const r=t.onBeforeCompile;t.onBeforeCompile=(o,a)=>{var f;r==null||r(o,a),o.uniforms.uGlitchTime={value:0},o.uniforms.uGlitchAmount={value:0};const s=(f=t.userData).glitchUniforms??(f.glitchUniforms={});s.uGlitchTime=o.uniforms.uGlitchTime,s.uGlitchAmount=o.uniforms.uGlitchAmount,o.vertexShader=b(o.vertexShader,e),o.fragmentShader=p(o.fragmentShader,e)},t.customProgramCacheKey=()=>e?`${i}-lite`:i,t.needsUpdate=!0}function H(t,i){const e=t.onBeforeCompile;t.onBeforeCompile=(r,o)=>{var s;e==null||e(r,o),r.uniforms.uGlitchTime={value:0},r.uniforms.uGlitchAmount={value:0},r.uniforms.uModelProgress={value:1},r.uniforms.uModelDespawnStyle={value:0};const a=(s=t.userData).glitchUniforms??(s.glitchUniforms={});a.uGlitchTime=r.uniforms.uGlitchTime,a.uGlitchAmount=r.uniforms.uGlitchAmount,a.uModelProgress=r.uniforms.uModelProgress,a.uModelDespawnStyle=r.uniforms.uModelDespawnStyle,r.vertexShader=_(r.vertexShader),r.fragmentShader=p(r.fragmentShader)},t.customProgramCacheKey=()=>i,t.needsUpdate=!0}function E(t,i){t.onBeforeCompile=e=>{var o;e.uniforms.uPreviewTime={value:0},e.uniforms.uPreviewProgress={value:0},e.uniforms.uPreviewGlitchAmount={value:1};const r=(o=t.userData).previewUniforms??(o.previewUniforms=[]);r.uPreviewTime=e.uniforms.uPreviewTime,r.uPreviewProgress=e.uniforms.uPreviewProgress,r.uPreviewGlitchAmount=e.uniforms.uPreviewGlitchAmount,e.vertexShader=M(e.vertexShader),e.fragmentShader=A(e.fragmentShader)},t.customProgramCacheKey=()=>i,t.needsUpdate=!0}export{B as M,F as a,E as b,H as c,N as s};
