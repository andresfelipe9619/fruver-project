import { combineReducers } from "redux";

import homeReducer from "./home";
import dashboardReducer from "./dashboard";
import authReducer from "./auth";
import contactReducer from "./contact"
import loginReducer from "./login"

export default combineReducers({
  homeReducer,
  dashboardReducer,
  authReducer,
  contactReducer,
  loginReducer
});
