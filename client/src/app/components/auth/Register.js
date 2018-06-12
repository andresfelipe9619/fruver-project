import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Checkbox, Form, Grid } from "semantic-ui-react";
import { loadRegister, register } from '../../actions/registerActions';
import { Redirect, Link } from 'react-router-dom';
import AlertMsg from "./AlertMsg";
import {
  Header,
  Message,
  Segment,
  Loader,
  Dimmer
} from "semantic-ui-react";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      nit: "",
      nombre: "",
      email: "",
      cc: ""
    };

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { nombre, email, nit, cc } = this.state;
    const user = {
      nit,
      nombre,
      email,
      cc
    };

    this
      .props
      .requestRegister(user);
  }

  render() {
    if (this.props.hasErrored) {
      return <h1>Error</h1>;
    } else if (this.props.isLoading) {
      return (
        <Segment
          style={{
            marginTop: "7em",
            height: "20em"
          }}>
          <Dimmer inverted active>
            <Loader size="big">Loading</Loader>
          </Dimmer>
        </Segment>
      );
    } else if (this.props.registerSuccess) {
      return (<Redirect to="/ingreso" />)
    } else {
      return (
        <Grid
          textAlign="center"
          style={{
            height: "100%"
          }}
          verticalAlign="middle">
          <Grid.Column style={{
            maxWidth: 600
          }}>
            {this.props.alertError ? <AlertMsg type='error' msg={this.props.alertError} /> : null}

            <Form onSubmit={this.handleSubmit}>
              <label>Nombre</label>
              <Form.Input
                required
                fluid
                icon="user"
                iconPosition="left"
                name="nombre"
                placeholder="ej: Subway"
                onChange={this.handleChange}
                // error={this.state.nombre.length < 1 ? true : false}
                value={this.state.nombre} />
              <label>Correo Electrónico</label>
              <Form.Input
                required
                fluid
                icon="user"
                type='email'
                name="email"
                iconPosition="left"
                placeholder="ej: micorreo@micorp.com"
                onChange={this.handleChange}
                value={this.state.email}
                // error={this.state.email.length < 1 ? true : false} 
                />
              <label>NIT</label>
              <Form.Input
                required
                fluid
                icon="user"
                iconPosition="left"
                name="nit"
                placeholder="ej: 1234343311"
                onChange={this.handleChange}
                value={this.state.nit} />
              <label>Ubicacion</label>
              <Form.Input
                required
                fluid
                icon="map"
                iconPosition="left"
                name="cc"
                placeholder="ej: Kr 49b #44-67"
                onChange={this.handleChange}
                value={this.state.cc} />


              <Form.Field>
                <Checkbox
                  label="Estoy de acuerdo con los terminos y condiciones de servicio"
                  checked />
              </Form.Field>
              <Button
                id="submitRegForm"
                type="submit"
                style={{
                  backgroundColor: "#2eb050"
                }}>
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.registerReducer.registerLoaded,
    isLoading: state.registerReducer.registerLoading,
    hasErrored: state.registerReducer.registerErrored,

    alertError: state.alertReducer.alertError,
    registerSuccess: state.registerReducer.registerSuccess
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: () => {
      dispatch(loadRegister())
    },
    requestRegister: (user) => {
      dispatch(register(user))
    },

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);