import { combineReducers } from "redux";
import { reducer as sematable } from 'sematable';
import homeReducer from "./home";
import orderReducer from "./order";
import dashboardReducer from "./dashboard";
import registerReducer from "./register"
import authReducer from "./auth";
import contactReducer from "./contact"
import loginReducer from "./login"
import alertReducer from "./alert"
import userReducer from "./user"
import productReducer from "./product"

export default combineReducers({
  homeReducer,
  dashboardReducer,
  authReducer,
  contactReducer,
  loginReducer,
  alertReducer,
  userReducer,
  productReducer,
  registerReducer,
  orderReducer
});
