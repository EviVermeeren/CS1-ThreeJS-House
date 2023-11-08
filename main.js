import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader";
import { MTLLoader } from "three/addons/loaders/MTLLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import gsap from "gsap";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x131862); // Set background color here

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

//add floor
const floorgeometry = new THREE.PlaneGeometry(25, 25);
const floormaterial = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
});
const floor = new THREE.Mesh(floorgeometry, floormaterial);
floor.rotation.x = -0.5 * Math.PI;
scene.add(floor);

//add floor
const floor2geometry = new THREE.PlaneGeometry(8, 4);
const floor2material = new THREE.MeshBasicMaterial({
  //add color
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const floor2 = new THREE.Mesh(floor2geometry, floor2material);
floor2.rotation.x = -0.5 * Math.PI;
floor2.position.x = 6;
floor2.position.y = 0.01;
scene.add(floor2);

//add grass texture to floor
const textureLoadergrass = new TextureLoader();
const grassTexture = textureLoadergrass.load("/grass.jpg");
floor.material.map = grassTexture;
grassTexture.wrapS = THREE.RepeatWrapping;
grassTexture.wrapT = THREE.RepeatWrapping;
grassTexture.repeat.set(8, 8);

const textureLoaderparket = new TextureLoader();
const parketTexture = textureLoaderparket.load("/parket.jpg");
floor2.material.map = parketTexture;
parketTexture.wrapS = THREE.RepeatWrapping;
parketTexture.wrapT = THREE.RepeatWrapping;
parketTexture.repeat.set(4, 4);

const loader = new OBJLoader();

//add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(3, 1, 7);
scene.add(directionalLight);

//add directional light
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 10);
directionalLight2.position.set(8.5, 1, 9);
scene.add(directionalLight2);

//add mist
const fog = new THREE.Fog(0x000000, 1, 11);
scene.fog = fog;

const mtlLoader = new MTLLoader();

mtlLoader.load("/toothless.mtl", (mtl) => {
  mtl.preload();

  const objLoader = new OBJLoader();
  objLoader.setMaterials(mtl);

  objLoader.load("/toothless.obj", (obj) => {
    const model = obj;
    scene.add(model);

    // Adjust position and scale if needed
    model.position.set(8.5, 0, 5);
    model.scale.set(0.005, 0.005, 0.005);
    model.rotation.y = 0.8 * Math.PI;

    // Define the jump animation using GSAP with "easeInOut" easing
    const jumpHeight = 2; // Height of the jump
    const jumpDuration = 1; // Duration of the jump (in seconds)

    gsap.to(model.position, {
      y: jumpHeight,
      duration: jumpDuration,
      yoyo: true,
      repeat: -1,
      ease: "easeInOut", // Use "easeInOut" easing function
    });
  });
});

const mtlLoader2 = new MTLLoader();

mtlLoader2.load("/Avent_sport.mtl", (mtl2) => {
  mtl2.preload();

  const objLoader2 = new OBJLoader();
  objLoader2.setMaterials(mtl2);

  objLoader2.load("/Avent_sport.obj", (obj2) => {
    const model2 = obj2;
    scene.add(model2);

    // Adjust position and scale if needed
    model2.position.set(3, 0.25, 6);
    model2.scale.set(0.5, 0.5, 0.5);
    model2.rotation.y = 0.7 * Math.PI;
  });
});

const cubegeometry = new THREE.BoxGeometry(0.2, 2, 4);
const cubematerial = new THREE.MeshBasicMaterial({});
const cube = new THREE.Mesh(cubegeometry, cubematerial);
cube.position.x = 2;
cube.position.y = 1.01;
scene.add(cube);

const cube2geometry = new THREE.BoxGeometry(0.2, 2, 4);
const cube2material = new THREE.MeshBasicMaterial({});
const cube2 = new THREE.Mesh(cube2geometry, cube2material);
cube2.position.x = 10;
cube2.position.y = 1.01;
scene.add(cube2);

const cube3geometry = new THREE.BoxGeometry(8, 2, 0.2);
const cube3material = new THREE.MeshBasicMaterial({});
const cube3 = new THREE.Mesh(cube3geometry, cube3material);
cube3.position.x = 6;
cube3.position.y = 1.01;
cube3.position.z = -2;
scene.add(cube3);

const cube4geometry = new THREE.BoxGeometry(3, 2, 0.2);
const cube4material = new THREE.MeshBasicMaterial({});
const cube4 = new THREE.Mesh(cube4geometry, cube4material);
cube4.position.x = 3.5;
cube4.position.y = 1.01;
cube4.position.z = 2;
scene.add(cube4);

const cube5geometry = new THREE.BoxGeometry(3, 2, 0.2);
const cube5material = new THREE.MeshBasicMaterial({});
const cube5 = new THREE.Mesh(cube5geometry, cube5material);
cube5.position.x = 8.5;
cube5.position.y = 1.01;
cube5.position.z = 2;
scene.add(cube5);

const cube6geometry = new THREE.BoxGeometry(2, 2, 0.2);
cube6geometry.translate(1, 0, 0);
const cube6material = new THREE.MeshBasicMaterial({});
const cube6 = new THREE.Mesh(cube6geometry, cube6material);
cube6.position.x = 5;
cube6.position.y = 1.01;
cube6.position.z = 2;
scene.add(cube6);

//add grass texture to floor
const textureLoaderbrick = new TextureLoader();
const brickTexture = textureLoaderbrick.load("/brick.jpg");
cube.material.map = brickTexture;
cube2.material.map = brickTexture;
cube3.material.map = brickTexture;
cube4.material.map = brickTexture;
cube5.material.map = brickTexture;

const textureLoaderdoor = new TextureLoader();
const doorTexture = textureLoaderdoor.load("/door.jpg");
cube6.material.map = doorTexture;

//animate cube 6 to open like a door
gsap.to(cube6.rotation, {
  y: 1.5,
  duration: 4,
  yoyo: true,
  repeat: -1,
  ease: "easeInOut", // Use "easeInOut" easing function
});

//add pyramid as a roof on my cubes
const pyramidgeometry = new THREE.ConeGeometry(3, 3, 4);
const pyramidmaterial = new THREE.MeshBasicMaterial({});
const pyramid = new THREE.Mesh(pyramidgeometry, pyramidmaterial);
pyramid.position.x = 4;
pyramid.position.y = 3.5;
pyramid.position.z = 0;
scene.add(pyramid);

//add pyramid as a roof on my cubes
const pyramid2geometry = new THREE.ConeGeometry(3, 3, 4);
const pyramid2material = new THREE.MeshBasicMaterial({});
const pyramid2 = new THREE.Mesh(pyramid2geometry, pyramid2material);
pyramid2.position.x = 8;
pyramid2.position.y = 3.5;
pyramid2.position.z = 0;
scene.add(pyramid2);

//turn pyramid 90 degrees
pyramid.rotation.y = Math.PI / 4;
pyramid2.rotation.y = Math.PI / 4;

const textureLoaderroof = new TextureLoader();
const roofTexture = textureLoaderroof.load("/roof.avif");
pyramid.material.map = roofTexture;
pyramid2.material.map = roofTexture;
roofTexture.repeat.set(4, 1);

const picgeometry = new THREE.BoxGeometry(1, 1.2, 0.2);
const picmaterial = new THREE.MeshBasicMaterial({});
const pic = new THREE.Mesh(picgeometry, picmaterial);
pic.position.x = 6;
pic.position.y = 1.01;
pic.position.z = -1.95;
scene.add(pic);

const textureLoaderpic = new TextureLoader();
const picTexture = textureLoaderpic.load("/pic.jpg");
pic.material.map = picTexture;

//add directional light
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 10);
directionalLight3.position.set(6, 1, -1);
scene.add(directionalLight3);

camera.position.x = 6;
camera.position.y = 1;
camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
