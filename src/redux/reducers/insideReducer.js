import { CHANGE_INSIDE } from "./../actions/insideAction";
const detectLocal = () => {
  let retorno;
  if (localStorage.getItem("sandwich")) {
    const json = JSON.parse(localStorage.getItem("sandwich"));

    if (json.inside) {
      retorno = json.inside;
    } else {
      retorno = "beef";
    }
  } else {
    retorno = "beef";
  }
  return retorno;
};
const initialState = {
  inside: detectLocal(),
};
const insideReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INSIDE:
      return {
        inside: action.payload.inside,
      };

    default:
      return state;
  }
};

export default insideReducer;
