import { CHANGE_BREAD } from "./../actions/breadAction";
const detectLocal = () => {
  let retorno;
  if (localStorage.getItem("sandwich")) {
    const json = JSON.parse(localStorage.getItem("sandwich"));
    if (json.bread) {
      retorno = json.bread;
    } else {
      retorno = "sliced";
    }
  } else {
    retorno = "sliced";
  }
  return retorno;
};
const initialState = {
  bread: detectLocal(),
};
const breadReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BREAD:
      return {
        bread: action.payload.bread,
      };

    default:
      return state;
  }
};

export default breadReducer;
