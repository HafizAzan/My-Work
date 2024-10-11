import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as lil from "lil-gui";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
});
renderer.setSize(window.innerWidth, window.innerHeight);

let ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

let directionLight = new THREE.DirectionalLight(0xffffff, 2);
directionLight.position.set(2, 2, 2);
scene.add(directionLight);
const helper = new THREE.DirectionalLightHelper(directionLight, 2);
scene.add(helper);

let point = new THREE.PointLight(0xffffff, 1, 10, 2);
point.position.set(0.3, -1.4, 0.9);
scene.add(point);
const pointLightHelper = new THREE.PointLightHelper(point, 0.3);
scene.add(pointLightHelper);

let loader = new THREE.TextureLoader();
let color = loader.load("./text/color.jpg");
let roghness = loader.load("./text/roghness.jpg");
let normal = loader.load("./text/normal.png");
let height = loader.load("./text/height.png");

const geometry = new THREE.BoxGeometry(3, 1.8, 2);
const material = new THREE.MeshStandardMaterial({
  map: color,
  roughnessMap: roghness,
  normalMap: normal,
  displacementMap: height,
  displacementScale: 0.002,
});
const cube = new THREE.Mesh(geometry, material);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

scene.add(cube);
window.addEventListener("resize", onWindowResize, false);

const gui = new lil.GUI();

// GUI panel for lights
const lightFolder = gui.addFolder("Lights");

// Ambient Light controls
const ambientLightFolder = lightFolder.addFolder("Ambient Light");
ambientLightFolder.add(ambientLight, "intensity", 0, 5, 0.1).name("Intensity");
ambientLightFolder.addColor(ambientLight, "color").name("Color");

// Directional Light controls
const directionalLightFolder = lightFolder.addFolder("Directional Light");
directionalLightFolder
  .add(directionLight, "intensity", 0, 5, 0.1)
  .name("Intensity");
directionalLightFolder.addColor(directionLight, "color").name("Color");
directionalLightFolder
  .add(directionLight.position, "x", -5, 5, 0.1)
  .name("Position X");
directionalLightFolder
  .add(directionLight.position, "y", -5, 5, 0.1)
  .name("Position Y");
directionalLightFolder
  .add(directionLight.position, "z", -5, 5, 0.1)
  .name("Position Z");

// Point Light controls
const pointLightFolder = lightFolder.addFolder("Point Light");
pointLightFolder.add(point, "intensity", 0, 5, 0.1).name("Intensity");
pointLightFolder.addColor(point, "color").name("Color");
pointLightFolder.add(point.position, "x", -5, 5, 0.1).name("Position X");
pointLightFolder.add(point.position, "y", -5, 5, 0.1).name("Position Y");
pointLightFolder.add(point.position, "z", -5, 5, 0.1).name("Position Z");
pointLightFolder.add(point, "distance", 0, 20, 0.1).name("Distance");
pointLightFolder.add(point, "decay", 0, 5, 0.1).name("Decay");

// Update functions for helpers
function updateDirectionalLightHelper() {
  helper.update();
}

function updatePointLightHelper() {
  pointLightHelper.update();
}

// Add listeners to update helpers when light properties change
directionalLightFolder.onChange(updateDirectionalLightHelper);
pointLightFolder.onChange(updatePointLightHelper);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

animate();
