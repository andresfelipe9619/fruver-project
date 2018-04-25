import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store, {history} from "./app/store";
import {BrowserRouter} from 'react-router-dom';
import App from "./app/App.js";

ReactDOM.render( 
    <Provider store={store}>
    <BrowserRouter history={history}>
        <div>
            <App/>
        </div>
    </BrowserRouter> 
</Provider>, window.document.getElementById('root'));
