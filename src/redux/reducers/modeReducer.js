import { MODE } from "./../actions/modeAction";
const detectLocal = () => {
  let retorno;
  if (localStorage.getItem("mode")) {
    const json = JSON.parse(localStorage.getItem("mode"));

    if (json.value) {
      retorno = json.value;
    } else {
      retorno = "light";
    }
  } else {
    retorno = "light";
  }
  return retorno;
};
const initialState = {
  mode: detectLocal(),
};
const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODE:
      return {
        mode: action.payload.mode,
      };

    default:
      return state;
  }
};

export default modeReducer;
