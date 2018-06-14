import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./app/store";
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./app/App.js";
import './index.css';

ReactDOM.render( 
    <Provider store={store}>
    <Router>
        <div>
            <App/>
        </div>
    </Router> 
</Provider>, window.document.getElementById('root'));

