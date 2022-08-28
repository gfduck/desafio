import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { generateScene } from "./../functions/generateScene";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import TabsPanes from "./TabsPanes";
import { connect } from "react-redux";
import TabsRellenos from "./TabsRellenos";
import hamburgesa1 from "./../images/items/hamburgesa1.png";
import hamburgesa2 from "./../images/items/hamburgesa2.png";
import hamburgesa3 from "./../images/items/hamburgesa3.png";
import TabsColores from "./TabsColores";
import Header from "../layout/Header";
const Content = ({ sendSceneMain, bread, inside, color, mode, sendTab }) => {
  const [tab, setTab] = useState("pan");
  const [sliced, setSliced] = useState(null);
  const [buns, setBuns] = useState(null);
  const [baguette, setBaguette] = useState(null);
  const [beef, setBeef] = useState(null);
  const [salmon, setSalmon] = useState(null);
  const [hamburger, setHamburger] = useState(null);
  const [colorFlag, setColorFlag] = useState(null);
  const [div, setDiv] = useState(null);

  const refDiv = useRef(null);
  const refDivMobile = useRef(null);

  let enviado = false;
  // let sliced;
  // const sliced = null;
  useEffect(() => {
    (async () => {
      if (enviado) return;
      enviado = true;
      const [sceneMain, divSceneMain] = generateScene(mode);
      refDiv.current.appendChild(divSceneMain);
      refDiv.current.style.cursor = "grab";
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco/"); // use a full url path
      const gltf = new GLTFLoader();
      gltf.setDRACOLoader(dracoLoader);

      /**
       *
       * Bread Sliced
       *
       */
      const { scene: slicedObject } = await gltf.loadAsync(
        "./models/panes/sliced.glb"
      );

      slicedObject.scale.set(0.5, 0.5, 0.5);
      sceneMain.add(slicedObject);
      setSliced(slicedObject);
      /**
       *
       * Bread Buns
       *
       */
      const { scene: bunsObject } = await gltf.loadAsync(
        "./models/panes/buns.glb"
      );
      bunsObject.scale.set(0.5, 0.5, 0.5);
      bunsObject.visible = false;
      sceneMain.add(bunsObject);
      setBuns(bunsObject);
      /**
       *
       * Bread Baguette
       *
       */
      const { scene: baguetteObject } = await gltf.loadAsync(
        "./models/panes/baguette.glb"
      );
      baguetteObject.scale.set(0.5, 0.5, 0.5);
      baguetteObject.visible = false;
      sceneMain.add(baguetteObject);
      setBaguette(baguetteObject);

      /**
        * 
        * 
        * 
          Inside Hamburger
        * 
        */

      /**
       *
       * Beef inside
       *
       *
       */

      const { scene: beefObject } = await gltf.loadAsync(
        "./models/rellenos/beef.glb"
      );
      beefObject.scale.set(0.5, 0.5, 0.5);
      sceneMain.add(beefObject);
      setBeef(beefObject);

      /**
       * Salmon inside
       *
       */
      const { scene: salmonObject } = await gltf.loadAsync(
        "./models/rellenos/salmon.glb"
      );
      salmonObject.scale.set(0.5, 0.5, 0.5);
      salmonObject.visible = false;
      sceneMain.add(salmonObject);
      setSalmon(salmonObject);
      /**
       *
       * Hamburguer inside
       *
       */
      const { scene: hamburgerObject } = await gltf.loadAsync(
        "./models/rellenos/ham.glb"
      );
      hamburgerObject.scale.set(0.5, 0.5, 0.5);
      sceneMain.add(hamburgerObject);
      hamburgerObject.visible = false;
      setHamburger(hamburgerObject);

      /**
       *
       *
       * Flag
       *
       *
       */
      const { scene: flagObject } = await gltf.loadAsync("./models/flag.glb");
      flagObject.scale.set(0.5, 0.5, 0.5);
      sceneMain.add(flagObject);
      //
      // setHamburger(flagObject);
      const tempFlag = (element) => element.name === "colorFlag";
      const indexFlag = flagObject.children.findIndex(tempFlag);
      const objectFlag = flagObject.children[indexFlag];

      setColorFlag(objectFlag);
      /**
       *
       * Send Scene
       *
       */

      sendSceneMain(sceneMain);
    })();
  }, []);

  useEffect(() => {
    if (!sliced || !buns || !baguette) return;
    if (bread === "sliced") {
      sliced.visible = true;
      buns.visible = false;
      baguette.visible = false;
    } else if (bread === "buns") {
      buns.visible = true;
      sliced.visible = false;
      baguette.visible = false;
    } else if (bread === "baguette") {
      baguette.visible = true;
      sliced.visible = false;
      buns.visible = false;
    }
  }, [bread, sliced, buns, baguette]);

  useEffect(() => {
    if (!beef || !salmon || !hamburger) return;

    if (inside === "beef") {
      beef.visible = true;
      salmon.visible = false;
      hamburger.visible = false;
    } else if (inside === "salmon") {
      salmon.visible = true;
      beef.visible = false;
      hamburger.visible = false;
    } else if (inside === "hamburger") {
      hamburger.visible = true;
      salmon.visible = false;
      beef.visible = false;
    }
  }, [inside, beef, salmon, hamburger]);

  useEffect(() => {
    if (!colorFlag) return;
    colorFlag.material.color = new THREE.Color(color);
  }, [color, colorFlag]);

  useEffect(() => {
    sendTab(setTab, refDiv.current);
    setDiv(refDivMobile.current);
  }, []);
  return (
    <Container fluid style={{ zIndex: "1" }}>
      <Header div={div} />
      <Row>
        <div
          className="d-flex align-items-center"
          style={{ height: "90vh", width: "100%" }}
        >
          <Col
            md={6}
            lg={5}
            xl={4}
            xs={12}
            className="mx-auto d-block"
            style={{
              position: "relative",
              zIndex: "1",
              padding: "0px",
              borderRadius: "8px",
              border:
                mode === "light" ? "2px solid #C6C6C6" : "2px solid #848484",
            }}
          >
            <div
              ref={refDivMobile}
              style={{ position: "absolute", right: "0px" }}
            ></div>
            <div ref={refDiv}>
              <h2
                className={
                  mode === "light"
                    ? "personaliza-white text-center show-desktop"
                    : "personaliza-dark text-center show-desktop"
                }
              >
                Personaliza tu sandwich
              </h2>
            </div>
            <div
              className={
                mode === "light" ? "barra barra-white" : "barra barra-dark"
              }
            >
              <Row>
                <Col
                  xs={4}
                  className="d-flex align-items-center"
                  style={{ height: "73px" }}
                >
                  <div
                    className={
                      mode === "light"
                        ? "d-flex  justify-content-center mx-auto d-block contenedor-menu contenedor-white"
                        : "d-flex  justify-content-center mx-auto d-block contenedor-menu contenedor-dark"
                    }
                    onClick={() => setTab("pan")}
                    style={{
                      border:
                        tab === "pan"
                          ? "1px solid #F8832E"
                          : "1px solid #DFDFDF",
                    }}
                  >
                    <img src={hamburgesa1} className="img-fluid  img-items" />
                    <span
                      style={{
                        fontSize: "14px",
                        color:
                          mode === "light"
                            ? tab !== "pan"
                              ? "#DFDFDF"
                              : "#494949"
                            : tab !== "pan"
                            ? "#717171"
                            : "#FFFFFF",
                      }}
                      className="texto-menu"
                    >
                      Pan
                    </span>
                  </div>
                </Col>
                <Col
                  xs={4}
                  className="d-flex align-items-center"
                  style={{ height: "73px" }}
                >
                  <div
                    className={
                      mode === "light"
                        ? "d-flex  justify-content-center mx-auto d-block contenedor-menu contenedor-white"
                        : "d-flex  justify-content-center mx-auto d-block contenedor-menu contenedor-dark"
                    }
                    onClick={() => setTab("relleno")}
                    style={{
                      border:
                        tab === "relleno"
                          ? "1px solid #F8832E"
                          : "1px solid #DFDFDF",
                    }}
                  >
                    <img src={hamburgesa2} className="img-fluid img-items" />
                    <span
                      style={{
                        fontSize: "14px",
                        color:
                          mode === "light"
                            ? tab !== "relleno"
                              ? "#DFDFDF"
                              : "#494949"
                            : tab !== "relleno"
                            ? "#717171"
                            : "#FFFFFF",
                      }}
                      className="texto-menu"
                    >
                      Relleno
                    </span>
                  </div>
                </Col>
                <Col
                  xs={4}
                  className="d-flex align-items-center"
                  style={{ height: "73px" }}
                >
                  <div
                    className={
                      mode === "light"
                        ? "d-flex  justify-content-center mx-auto d-block contenedor-menu contenedor-white"
                        : "d-flex  justify-content-center mx-auto d-block contenedor-menu contenedor-dark"
                    }
                    onClick={() => setTab("color")}
                    style={{
                      border:
                        tab === "color"
                          ? "1px solid #F8832E"
                          : "1px solid #DFDFDF",
                    }}
                  >
                    <img src={hamburgesa3} className="img-fluid img-items" />
                    <span
                      style={{
                        fontSize: "14px",
                        color:
                          mode === "light"
                            ? tab !== "color"
                              ? "#DFDFDF"
                              : "#494949"
                            : tab !== "color"
                            ? "#717171"
                            : "#FFFFFF",
                      }}
                      className="texto-menu"
                    >
                      Color
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
            {tab === "pan" && <TabsPanes />}
            {tab === "relleno" && <TabsRellenos />}
            {tab === "color" && <TabsColores />}
          </Col>
        </div>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    bread: state.breadReducer.bread,
    inside: state.insideReducer.inside,
    color: state.flagReducer.color,
    mode: state.modeReducer.mode,
  };
};
export default connect(mapStateToProps)(Content);
