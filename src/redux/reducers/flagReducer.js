import { CHANGE_FLAG } from "./../actions/flagAction";
const detectLocal = () => {
  let retorno;
  if (localStorage.getItem("sandwich")) {
    const json = JSON.parse(localStorage.getItem("sandwich"));
    if (json.color) {
      retorno = json.color;
    } else {
      retorno = "#e36666";
    }

    return json.color;
  } else {
    retorno = "#e36666";
  }
  return retorno;
};
const initialState = {
  color: detectLocal(),
};
const flagReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FLAG:
      return {
        color: action.payload.color,
      };

    default:
      return state;
  }
};

export default flagReducer;
