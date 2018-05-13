import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRouteComponent = ({ component: Compo, isAdmin, ...rest }) => 
 (
    <Route
      {...rest}
      render={(props) => (isAdmin
      ? (
       <Compo {...props}/>
      )
      : (<Redirect
        to={{
        pathname: '/ingreso',
        state: {
          from: props.location
        }
      }}/>))}/>
  );

const mapEstateToProps = (state, ownProps) => {
  return {isAdmin: state.authReducer.loginSuccess.admin}
}
const PrivateRoute = connect(mapEstateToProps, null)(PrivateRouteComponent);
export default PrivateRoute;