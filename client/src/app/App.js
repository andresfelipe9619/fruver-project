import React, {Component} from 'react';
import {connect} from "react-redux";
import {loadHome} from './actions/homeActions';
import {Home} from './components/home/Home.js';
import {Navbar} from './components/header/Navbar.js';
import {Footer} from './components/footer/Footer.js';
import {Login} from './components/auth/Login.js';
import {Dashboard} from './components/dashboard/Dashboard.js';
// import About from './components/contact/Contact'; import Login from
// './components/auth/Login'; import Register from './components/auth/Register';
import {Route, withRouter, Switch} from 'react-router-dom';
// import SmartDataTable from 'react-smart-data-table'
import {Dimmer, Loader} from 'semantic-ui-react';

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
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/ingreso" component={Login}/>
                    {/* <Route exact path="/register" component={Register}/> */}
                  </Switch>
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
