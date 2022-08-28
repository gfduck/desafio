import { combineReducers } from "redux";
import breadReducer from "./breadReducer";
import insideReducer from "./insideReducer";
import flagReducer from "./flagReducer";
import modeReducer from "./modeReducer";
export default combineReducers({
  breadReducer,
  insideReducer,
  flagReducer,
  modeReducer,
});
