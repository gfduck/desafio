import { useEffect } from "react";
import * as THREE from "three";
const Canvas = ({ sendRenderer }) => {
  let renderer;
  let canvas;
  let enviado = false;
  useEffect(() => {
    if (enviado) return;
    enviado = true;

    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });

    renderer.setScissorTest(false);
    renderer.clear();

    renderer.setScissorTest(true);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    sendRenderer(renderer, canvas);
  }, []);

  return <canvas id="canvas"></canvas>;
};

export default Canvas;
