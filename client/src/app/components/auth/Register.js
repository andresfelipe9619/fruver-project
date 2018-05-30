import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Checkbox, Form, Grid } from "semantic-ui-react";
import { loadRegister, register } from '../../actions/registerActions';

import {
  Header,
  Message,
  Segment,
  Loader,
  Dimmer
} from "semantic-ui-react";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      nit: ""
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
    const { name, email, nit } = this.state;
    const user = {
      name,
      email,
      nit
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
      )
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
            <Form onSubmit={this.handleSubmit}>
              <label>Nombre</label>
              <Form.Input
                required
                fluid
                icon="user"
                iconPosition="left"
                name="name"
                placeholder="ej: Subwayej: Subway"
                onChange={this.handleChange}
                value={this.state.name} />
                <label>Correo Electrónico</label>
              <Form.Input
                required
                fluid
                icon="user"
                iconPosition="left"
                name="email"
                placeholder="ej: abc@mycorp.com"
                onChange={this.handleChange}
                value={this.state.email} />
                <label>NIT</label>
              <Form.Input
                required
                fluid
                icon="user"
                iconPosition="left"
                name="nit"
                placeholder="NIT"
                onChange={this.handleChange}
                value={this.state.nit} />
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
  return { message: state.registerReducer.registerLoaded, isLoading: state.registerReducer.registerLoading, hasErrored: state.registerReducer.registerErrored };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: () => {
      dispatch(loadRegister());
    },
    requestRegister: ()=> {
      dispatch(register(user));
    },
    errorMessage: () => {
      dispatch()
    },
    successMessage: () => {
      dispatch()
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);