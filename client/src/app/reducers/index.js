import { combineReducers } from "redux";

import homeReducer from "./home";
import dashboardReducer from "./dashboard";
import registerReducer from "./register"
import authReducer from "./auth";
import contactReducer from "./contact"
import loginReducer from "./login"
import alertReducer from "./alert"

export default combineReducers({
  homeReducer,
  dashboardReducer,
  authReducer,
  contactReducer,
  loginReducer,
  alertReducer,
  registerReducer
});
