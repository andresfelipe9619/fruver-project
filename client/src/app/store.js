// eslint-disable-next-line
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
// import {createLogger} from "redux-logger";
import rootReducer from "./reducers"
import promise from "redux-promise-middleware";
// eslint-disable-next-line
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
// Create a history of your choosing (we're using a browser history in this
// case)


<<<<<<< HEAD
const enhancers = [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];   
=======
//const enhancers = [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e

const middleware = [thunk, promise()];

const composedEnhancers = compose(applyMiddleware(...middleware) /*...enhancers*/);

const store = createStore(rootReducer, {}, composedEnhancers);

export default store;