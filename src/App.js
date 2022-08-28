import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import Canvas from "./components/Canvas";
import Content from "./components/Content";
import { connect } from "react-redux";
import { PickHelper } from "./Click/pickHelper";
import { generateMouse } from "./functions/generateMouse";
import * as THREE from "three";
function App({ mode }) {
  const refBack = useRef("");
  const refSceneMain = useRef(null);
  const refDivScene = useRef(null);
  let renderer = null;
  let canvas = null;
  const scenes = [];
  let pickHelperSliced = null;
  let mouse = null;
  let changeTab = null;
  useEffect(() => {
    (() => {
      const updateSize = () => {
        if (!canvas) return;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
          renderer.setSize(width, height, false);
        }
      };

      const tick = () => {
        if (!renderer) return;
        updateSize();

        if (canvas) canvas.style.transform = `translateY(${window.scrollY}px)`;
        renderer.setClearColor(refBack.current);
        renderer.setScissorTest(false);
        renderer.clear();

        renderer.setClearColor(refBack.current);
        renderer.setScissorTest(true);
        scenes.forEach(function (scene, index) {
          const element = scene.userData.element;
          const camera = scene.userData.camera;

          const rect = element.getBoundingClientRect();

          if (
            rect.bottom < 0 ||
            rect.top > renderer.domElement.clientHeight ||
            rect.right < 0 ||
            rect.left > renderer.domElement.clientWidth
          ) {
            return; // it's off screen
          }

          const width = rect.right - rect.left;
          const height = rect.bottom - rect.top;
          const left = rect.left;
          const bottom = renderer.domElement.clientHeight - rect.bottom;

          renderer.setViewport(left, bottom, width, height);
          renderer.setScissor(left, bottom, width, height);

          scene.userData.camera.aspect = rect.width / rect.height;
          scene.userData.camera.updateProjectionMatrix();

          if (pickHelperSliced) {
            pickHelperSliced.pick(mouse, scene, scene.userData.camera);
          }
          renderer.render(scene, camera);
        });

        window.requestAnimationFrame(tick);
      };
      tick();
    })();

    const funcionResize = (e) => {
      if (window.matchMedia("(pointer: coarse)").matches) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", funcionResize);
    if (window.matchMedia("(pointer: coarse)").matches) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (mode === "light") {
      refBack.current = "#FFF7F5";
      document.body.style.background = "#FFF7F5";
      if (refSceneMain.current) {
        refSceneMain.current.background = new THREE.Color("#F3F4F6");
      }
    } else {
      refBack.current = "#101010";
      document.body.style.background = "#101010";
      if (refSceneMain.current) {
        refSceneMain.current.background = new THREE.Color("#292929");
      }
    }
  }, [mode]);
  const sendRenderer = (value, cv) => {
    renderer = value;
    canvas = cv;
  };

  const sendTab = (value, valueDiv) => {
    changeTab = value;
    refDivScene.current = valueDiv;
  };
  const change = (value) => {
    changeTab(value);
  };
  const sendSceneMain = (value) => {
    scenes.push(value);
    refSceneMain.current = value;
    mouse = generateMouse(value);
    pickHelperSliced = new PickHelper(change, refDivScene.current);
    pickHelperSliced.click();
  };

  return (
    <>
      <Canvas sendRenderer={sendRenderer} />
      <Content sendSceneMain={sendSceneMain} sendTab={sendTab}></Content>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.modeReducer.mode,
  };
};

export default connect(mapStateToProps)(App);
