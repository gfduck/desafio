import { Row, Col, Container } from "react-bootstrap";

import sliced from "./../images/panes/sliced.png";
import buns from "./../images/panes/buns.png";
import baguette from "./../images/panes/baguette.png";
import { connect } from "react-redux";
import { change_bread } from "../redux/actions/breadAction";
import { ANCHO_BORDE_ITEM, NARANJA } from "../utils/constants";
const TabsPanes = ({ dispatch, bread, mode }) => {
  return (
    <Container fluid>
      <Row
        style={{
          padding: "10px",
        }}
        className={
          mode === "light"
            ? "d-flex justify-content-between  align-items-center row-items row-white"
            : "d-flex justify-content-between  align-items-center row-items  row-dark"
        }
      >
        <Col xs={4} className="col-item-bread">
          <img
            src={sliced}
            className="mx-auto d-block img-fluid pointer item radius-8 padding-20"
            onClick={() => dispatch(change_bread("sliced"))}
            style={{
              border:
                mode === "light"
                  ? bread === "sliced"
                    ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                    : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
                  : bread === "sliced"
                  ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                  : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
            }}
          />
        </Col>
        <Col xs={4} className="col-item-bread">
          <img
            src={buns}
            className="mx-auto d-block img-fluid pointer radius-8  padding-20"
            onClick={() => dispatch(change_bread("buns"))}
            style={{
              border:
                mode === "light"
                  ? bread === "buns"
                    ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                    : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
                  : bread === "buns"
                  ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                  : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
            }}
          />
        </Col>
        <Col xs={4} className="col-item-bread">
          <img
            src={baguette}
            className="mx-auto d-block img-fluid pointer radius-8  padding-20"
            onClick={() => dispatch(change_bread("baguette"))}
            style={{
              border:
                mode === "light"
                  ? bread === "baguette"
                    ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                    : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
                  : bread === "baguette"
                  ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                  : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    bread: state.breadReducer.bread,
    mode: state.modeReducer.mode,
  };
};
export default connect(mapStateToProps)(TabsPanes);
