import React, {Component} from 'react';
import Home from './components/home/Home.js';
import Login from './components/auth/Login.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Navbar from './components/header/Navbar.js';
import {Footer} from './components/footer/Footer.js';
import {Register} from './components/auth/Register.js';
import Contact from './components/contact/Contact.js';
import {Route, withRouter, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Container style={{marginTop: '7em'}}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contacto" component={Contact}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route exact path="/registro" component={Register}/>
            <Route exact path="/ingreso" component={Login}/>
          </Switch>
        </Container>
        <Footer></Footer>
      </div>
    )
  }
}

export default withRouter(App);
