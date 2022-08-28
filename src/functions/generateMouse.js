import * as THREE from "three";

export const generateMouse = (scene) => {
  const mouse = new THREE.Vector2();
  let canvasRect = document.getElementById("canvas");
  const elem = scene.userData.element;
  function getCanvasRelativePosition(event) {
    const rect = elem.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) * canvasRect.width) / rect.width,
      y: ((event.clientY - rect.top) * canvasRect.height) / rect.height,
    };
  }
  function setPickPosition(event) {
    const pos = getCanvasRelativePosition(event);
    mouse.x = (pos.x / canvasRect.width) * 2 - 1;
    mouse.y = (pos.y / canvasRect.height) * -2 + 1; // note we flip Y
  }

  function clearPickPosition() {
    mouse.x = -100000;
    mouse.y = -100000;
  }
  const elementScene1 = scene.userData.element;
  elementScene1.addEventListener("mousemove", setPickPosition);
  elementScene1.addEventListener("mouseout", clearPickPosition);
  elementScene1.addEventListener("mouseleave", clearPickPosition);

  return mouse;
};
