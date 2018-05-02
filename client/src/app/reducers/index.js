import { combineReducers } from "redux";

import homeReducer from "./home";
import dashboardReducer from "./dashboard";
import authReducer from "./auth";

export default combineReducers({
  homeReducer,
  dashboardReducer,
  authReducer
});
