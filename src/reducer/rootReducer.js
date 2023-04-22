import { combineReducers } from "redux";

import counterReducer from "./counterReducer.js";
import userReducer from "./userReducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
