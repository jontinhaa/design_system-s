const a=`varying vec2 vUv;
uniform sampler2D imageTexture;
uniform float alpha;

void main() {
    gl_FragColor = texture2D(imageTexture, vUv);
    gl_FragColor.a = alpha;
}
`;export{a as f};
