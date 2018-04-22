import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {createLogger} from "redux-logger";
import {homeErrored, homeLoaded, homeLaoding} from "./reducers/home";
import promise from "redux-promise-middleware";
import {routerMiddleware, routerReducer} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
// Create a history of your choosing (we're using a browser history in this
// case)
export const history = createHistory();
// const enhancers = [];
// const middleware = [thunk, routerMiddleware(history), createLogger(), promise()];

// const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

// const store = createStore(combineReducers({homeErrored, homeLoaded, homeLaoding, routerReducer}), {}, composedEnhancers);
const store = createStore(
    combineReducers(
        {homeErrored, homeLoaded, homeLaoding}), {}, applyMiddleware(createLogger(), thunk, promise()));
export default store;