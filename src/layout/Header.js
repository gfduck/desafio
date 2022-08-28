import { useEffect, useRef, useState } from "react";
import Switch from "react-switch";
import logo from "./../images/logo.png";
import fondoOscuro from "./../images/switch/Vector.png";
import buttonLight from "./../images/switch/buttonLight.png";
import light from "./../images/switch/light.png";
import dark from "./../images/switch/dark.png";
import buttonDark from "./../images/switch/buttonDark.png";
import { change_mode } from "../redux/actions/modeAction";
import { connect } from "react-redux";
import logoDark from "./../images/logoDark.png";
const Header = ({ dispatch, mode, div }) => {
  const [state, setState] = useState(mode === "light" ? true : false);
  const refDivButton = useRef(null);
  const refDivDesktop = useRef(null);
  const refDivMobile = useRef(null);
  useEffect(() => {
    if (state) {
      dispatch(change_mode("light"));
    } else {
      dispatch(change_mode("dark"));
    }
  }, [state]);

  useEffect(() => {
    if (!div) return;
    const funcion = () => {
      if (window.innerWidth < 768) {
        if (div) {
          div.appendChild(refDivButton.current);
        }
      } else {
        refDivDesktop.current.appendChild(refDivButton.current);
      }
    };
    window.addEventListener("resize", funcion);
    funcion();
  }, [div]);

  return (
    <>
      <div
        ref={refDivMobile}
        style={{ margin: "0px", padding: "0px" }}
        className="d-flex justify-content-end"
      ></div>
      <div className="show-header justify-content-between  ">
        <img
          src={mode === "light" ? logo : logoDark}
          className="img-fluid mt-2 ml-2"
          alt="logo"
          style={{
            position: "relative",
            alignSelf: " center",
          }}
        />

        <div ref={refDivDesktop}>
          <div
            style={{
              backgroundImage: state ? `url(${light})` : `url(${dark})`,
              backgroundRepeat: "no-repeat",
              width: "60px",
              height: "40px",
              position: "relative",
            }}
            className="button-mode"
            ref={refDivButton}
          >
            <Switch
              checked={state}
              onChange={() => setState(!state)}
              handleDiameter={0.1}
              height={40}
              width={60}
              uncheckedIcon={null}
              checkedIcon={null}
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={buttonDark} />
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={buttonLight} />
                </div>
              }
              className="react-switch"
              id="small-radius-switch"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.modeReducer.mode,
  };
};

export default connect(mapStateToProps)(Header);
