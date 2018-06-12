import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Loader,
  Dimmer
} from "semantic-ui-react";
import { login } from "../../actions/authActions";
import { loadLogin } from "../../actions/loginActions";
import { Redirect, Link } from 'react-router-dom';
import AlertMsg from "./AlertMsg";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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


  validation(field) {
    let msg = '';
    if (field.username) {

    }
    if (field.password) {

    }

  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };

    this
      .props
      .requestLogin(user);
  }
  componentDidMount() {
    this
      .props
      .loadPage();
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
    } else if (this.props.hasSuccessed) {
      return (<Redirect to="/dashboard" />)
    } else {
      return (
        <div>

          <Grid
            textAlign="center"
            style={{
              height: "100%"
            }}
            verticalAlign="middle">
            <Grid.Column style={{
              maxWidth: 450
            }}>
              {this.props.alertError ? <AlertMsg type='error' msg={this.props.alertError} /> : null}
              <Header as="h2" color="teal" textAlign="center">
                Inicia Sesión con tu cuenta
              </Header>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    required
                    fluid
                    icon="user"
                    iconPosition="left"
                    name="username"
                    placeholder="Nombre de usuario"
                    onChange={this.handleChange}
                    value={this.state.username}
                    autoFocus
                    // error={this.state.username.length < 1 ? 1 : 0} 
                    />
                  <Form.Input
                    required
                    fluid
                    icon="lock"
                    name="password"
                    iconPosition="left"
                    placeholder="Contraseña"
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    // error={this.state.password.length < 1 ? 1 : 0}
                     />

                  <Button color="teal" type="submit" fluid size="large">
                    Iniciar Sesión
                  </Button>
                </Segment>
              </Form>
              <Message>
                No tienes cuenta?
                <Link to="/registro"> Crear Cuenta </Link>
              </Message>
              <Message>
                *Es necesario tener una cuenta con los datos completos de la empresa para poder
                realizar su pedido.
              </Message>

            </Grid.Column>
          </Grid>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    //auth
    hasRequested: state.authReducer.loginRequest,
    hasSuccessed: state.authReducer.loginSuccess,
    hasFailed: state.authReducer.loginFailure,
    //page
    isLoading: state.loginReducer.loginLoading,
    hasErrored: state.loginReducer.loginErrored,
    alertError: state.alertReducer.alertError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    requestLogin: user => {
      dispatch(login(user));
    },
    loadPage: () => {
      dispatch(loadLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
