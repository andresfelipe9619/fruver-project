import React, {Component} from 'react';
import {connect} from "react-redux";
import {loadHome} from './actions/homeActions';
import {Home} from './components/home/Home.js';
import {Navbar} from './components/header/Navbar.js';
import {Footer} from './components/footer/Footer.js';
import {Login} from './components/auth/Login.js';
// import About from './components/contact/Contact'; import Login from
// './components/auth/Login'; import Register from './components/auth/Register';
import {Route} from 'react-router';

class App extends Component {

  componentDidMount() {
    this
      .props
      .getStrains();
  }

  render() {
    console.log(this.props);
    if (this.props.hasErrored) {
      return (
        <h1>Error</h1>
      )
    } else {
      return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
            <Home></Home>
            {/* <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/> */}
            {/* </Switch> */}

            {/* <StrainList strains={this.props.strains}/> */}
            <Footer></Footer>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {message: state.homeLoaded, isLoading: state.homeLoading, hasErrored: state.homeErrored};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getStrains: () => {
      dispatch(loadHome());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
