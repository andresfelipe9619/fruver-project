import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store, {history} from "./app/store";
import {Router} from 'react-router-dom';
import App from "./app/App.js";

ReactDOM.render( 
    <Provider store={store}>
    <Router history={history}>
        <div>
            <App/>
        </div>
    </Router> 
</Provider>, window.document.getElementById('root'));
