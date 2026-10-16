const n=`#ifndef PI
#define PI 3.141592653589
#endif

uniform float progress;
uniform float progressScale;
uniform float offset;
uniform float radius;
varying vec2 vUv;

#define HEIGHT 1.0

void main() {
    vUv = uv;

    float angle = HEIGHT / radius;
    float anglePoint = angle * (uv.y - 0.5) * 2.0 + offset + progress * progressScale;
    float z = cos(anglePoint) * radius;
    float y = sin(anglePoint) * radius;

    vec4 bentPosition = vec4(position.x, y, z, 1.0);

    gl_Position = projectionMatrix * modelViewMatrix * bentPosition;
}
`,o=`varying vec2 vUv;
uniform sampler2D imageTexture;
uniform float alpha;

void main() {
    gl_FragColor = texture2D(imageTexture, vec2(1.0 - vUv.x, vUv.y));
    gl_FragColor.a = alpha;
}
`;export{o as f,n as v};
