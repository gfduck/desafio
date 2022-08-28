import { connect } from "react-redux";
import { change_flag } from "../redux/actions/flagAction";
import { ANCHO_BORDE_ITEM, NARANJA } from "../utils/constants";
const TabsColores = ({ dispatch, color, mode }) => {
  return (
    <div
      className={
        mode === "light"
          ? "d-flex  justify-content-between  align-items-center row-items row-white"
          : "d-flex  justify-content-between  align-items-center row-items  row-dark"
      }
    >
      <div
        className="div-color pointer "
        style={{
          background: "#e36666",

          border:
            mode === "light"
              ? color === "#e36666"
                ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
              : color === `#e36666`
              ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
              : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
        }}
        onClick={() => change_flag(dispatch, "#e36666")}
      ></div>
      <div
        className="div-color pointer"
        style={{
          background: "#f1c76d",

          border:
            mode === "light"
              ? color === "#f1c76d"
                ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
              : color === `#f1c76d`
              ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
              : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
        }}
        onClick={() => change_flag(dispatch, "#f1c76d")}
      ></div>
      <div
        className="div-color pointer"
        style={{
          background: "#9bbb79",

          border:
            mode === "light"
              ? color === "#9bbb79"
                ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
              : color === `#9bbb79`
              ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
              : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
        }}
        onClick={() => change_flag(dispatch, "#9bbb79")}
      ></div>
      <div
        className="div-color pointer"
        style={{
          background: "#5f8e8d",
          // border:
          //   color === "#5f8e8d" ? "3px solid ${NARANJA}" : "3px solid #DFDFDF",
          border:
            mode === "light"
              ? color === "#5f8e8d"
                ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
              : color === `#5f8e8d`
              ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
              : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
        }}
        onClick={() => change_flag(dispatch, "#5f8e8d")}
      ></div>
      <div
        className="div-color pointer"
        style={{
          background: "#427d9d",
          border:
            mode === "light"
              ? color === "#427d9d"
                ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
              : color === `#427d9d`
              ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
              : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
        }}
        onClick={() => change_flag(dispatch, "#427d9d")}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    color: state.flagReducer.color,
    mode: state.modeReducer.mode,
  };
};

export default connect(mapStateToProps)(TabsColores);
