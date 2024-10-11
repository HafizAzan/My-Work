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
mesh.rotation.y = Math.PI / 4;
mesh.rotation.x = Math.PI / 4;
scene.add(mesh);

camera.position.z = 5;
const canvas = document.querySelector("canvas");
let renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
