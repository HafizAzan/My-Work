let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 6;
scene.add(camera);
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "red" });
let mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

camera.position.z = 5;
const canvas = document.querySelector("canvas");
let renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

let clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh.rotation.y = clock.getElapsedTime() * 2;
}
animate();
