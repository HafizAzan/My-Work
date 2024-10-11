import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1, 6);

const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

const rgbeLoader = new RGBELoader();
rgbeLoader.load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/zwartkops_pit_1k.hdr",
  (environmentMap) => {
    environmentMap.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = environmentMap;
  }
);

const loader = new GLTFLoader();
loader.load("./wooden_box.glb", (gltf) => {
  gltf.scene.position.y = -1;
  scene.add(gltf.scene);
});
// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
