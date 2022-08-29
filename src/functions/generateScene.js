import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const generateScene = (mode) => {
  const scene = new THREE.Scene();
  const element2 = document.createElement("div");
  const element = document.createElement("div");
  element.className = "list-item";
  element2.appendChild(element);
  const sceneElement = document.createElement("div");

  element.style.zIndex = "3";
  element.appendChild(sceneElement);

  scene.userData.element = sceneElement;

  if (mode === "light") {
    scene.background = new THREE.Color("#F3F4F6");
  } else {
    scene.background = new THREE.Color("#292929");
  }
  const camera = new THREE.PerspectiveCamera(50, 1, 1, 10);
  camera.position.z = 2;
  scene.userData.camera = camera;

  const controls = new OrbitControls(
    scene.userData.camera,
    scene.userData.element
  );
  controls.enablePan = false;
  controls.maxDistance = 4;
  controls.minDistance = 1.7;
  scene.userData.controls = controls;

  /**
   * Lights
   */
  const directionalLight = new THREE.DirectionalLight("#ffffff", 2);
  directionalLight.position.set(0, 0, 1);
  scene.add(directionalLight);
  const directionalLight2 = new THREE.DirectionalLight("#ffffff", 2);
  directionalLight2.position.set(0, 0, -4);
  scene.add(directionalLight2);
  const directionalLight3 = new THREE.DirectionalLight("#ffffff", 2);
  directionalLight3.position.set(2, 0, -0.5);
  scene.add(directionalLight3);
  const directionalLight4 = new THREE.DirectionalLight("#ffffff", 2);
  directionalLight4.position.set(-2, 2, -0.5);
  scene.add(directionalLight4);

  const ambientLight = new THREE.AmbientLight(0xffffff, 4);
  scene.add(ambientLight);

  return [scene, element2];
};
