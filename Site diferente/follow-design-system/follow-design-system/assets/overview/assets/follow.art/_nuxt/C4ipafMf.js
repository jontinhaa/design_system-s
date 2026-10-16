const n=`#ifndef PI
#define PI 3.141592653589
#endif

uniform vec2 progress;
uniform float progressScale;
uniform float offset;
uniform float radius;
varying vec2 vUv;

#define WIDTH 1.0
#define HEIGHT 0.5342465753

vec3 getPoint(float radius, float anglePointX, float anglePointY) {
    return vec3(
        cos(anglePointX) * radius,
        sin(anglePointY) * radius,
        cos(anglePointY) * sin(anglePointX) * radius
    );
}

void main() {
    vUv = uv;

    float angleX = WIDTH / radius;
    float angleY = HEIGHT / radius;
    float anglePointX = angleX * (uv.x - 0.5) * 2.0 + offset + progress.x * progressScale;
    float anglePointY = angleY * (uv.y - 0.5) * 2.0 + progress.y * progressScale;

    vec3 point = getPoint(radius, anglePointX, anglePointY);
    vec3 anchor = getPoint(radius, anglePointX, 0.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(point, 1.0);
}
`;export{n as v};
