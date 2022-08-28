import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers"; // hace referencia al file index.js
import thunk from "redux-thunk";

const store = configureStore({
  reducer,
});
export default store;
