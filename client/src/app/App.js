import React, {Component} from 'react';
import {connect} from "react-redux";
import {loadHome} from './actions/homeActions';
import {Home} from './components/home/Home.js';
import {Navbar} from './components/header/Navbar.js';
import {Footer} from './components/footer/Footer.js';
import {Login} from './components/auth/Login.js';
import {Register} from './components/auth/Register.js';
import {Dashboard} from './components/dashboard/Dashboard.js';
import {Contact} from './components/contact/Contact.js';
import './App.css'
// import About from './components/contact/Contact'; import Login from
// './components/auth/Login'; import Register from './components/auth/Register';
import {Route, withRouter, Switch} from 'react-router-dom';
// import SmartDataTable from 'react-smart-data-table'
import {Dimmer, Loader,  Container} from 'semantic-ui-react';

class App extends Component {

  componentDidMount() {
    this
      .props
      .loadPage();
  }

  render() {
    console.log(this.props);
    if (this.props.hasErrored) {
      return (
        <h1>Error</h1>
      )
    } else {
      if (this.props.isLoading) {
        console.log("DRIVE ME CRAZY ");
        return (
          <div>
            <Dimmer active inverted>
              <Loader size='large'>Cargando...</Loader>
            </Dimmer>
          </div>
        );
      } else {
        console.log(this.props);

        return (
          <div>
            <Navbar></Navbar>
            <Container className="main">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/contacto" component={Contact}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/registro" component={Register}/>
                <Route exact path="/ingreso" component={Login}/> {/* <Route exact path="/register" component={Register}/> */}
              </Switch>
            </Container>
            <Footer></Footer>

          </div>
        )
      }
    }
  }
}
const mapStateToProps = (state) => {
  return {message: state.homeLoaded, isLoading: state.homeLoading, hasErrored: state.homeErrored};
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: () => {
      dispatch(loadHome());
    },
    errorMessage: () => {
      dispatch()
    },
    successMessage: () => {
      dispatch()
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
