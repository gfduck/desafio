import { Row, Col, Container } from "react-bootstrap";
import beef from "./../images/rellenos/beef.png";
import salmon from "./../images/rellenos/salmon.png";
import ham from "./../images/rellenos/ham.png";
import { connect } from "react-redux";
import { change_inside } from "../redux/actions/insideAction";
import { ANCHO_BORDE_ITEM, NARANJA } from "../utils/constants";

const TabsRellenos = ({ dispatch, inside, mode }) => {
  return (
    <Container fluid>
      <Row
        style={{
          padding: "10px",
          //  height: "160px"
        }}
        className={
          mode === "light"
            ? "d-flex  align-items-center row-items row-white"
            : "d-flex  align-items-center row-items  row-dark"
        }
      >
        <Col xs={4}>
          <img
            src={beef}
            className="mx-auto d-block img-fluid pointer radius-8  padding-20"
            onClick={() => change_inside(dispatch, "beef")}
            style={{
              border:
                mode === "light"
                  ? inside === "beef"
                    ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                    : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
                  : inside === "beef"
                  ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                  : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
            }}
          />
        </Col>
        <Col xs={4}>
          <img
            src={salmon}
            className="mx-auto d-block img-fluid pointer radius-8  padding-20"
            onClick={() => change_inside(dispatch, "salmon")}
            style={{
              border:
                mode === "light"
                  ? inside === "salmon"
                    ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                    : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
                  : inside === "salmon"
                  ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                  : `${ANCHO_BORDE_ITEM} solid #6B6B6B`,
            }}
          />
        </Col>
        <Col xs={4}>
          <img
            src={ham}
            className="mx-auto d-block img-fluid pointer radius-8  padding-20"
            onClick={() => change_inside(dispatch, "hamburger")}
            style={{
              border:
                mode === "light"
                  ? inside === "hamburger"
                    ? `${ANCHO_BORDE_ITEM} solid ${NARANJA}`
                    : `${ANCHO_BORDE_ITEM} solid #DFDFDF`
                  : inside === "hamburger"
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
    inside: state.insideReducer.inside,
    mode: state.modeReducer.mode,
  };
};
export default connect(mapStateToProps)(TabsRellenos);
