// JavaScript Document

import React, { Component } from "react";
import { MapWithAMarker } from "./../map/Map.js";
import { connect } from "react-redux";
import { loadContact } from "../../actions/contactActions";
import {
  Container,
  Grid,
  Header,
  Button,
  Form,
  Segment,
  Dimmer,
  Loader
} from "semantic-ui-react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      asunto: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };

    this.props.requestLogin(user);
  }

  componentDidMount() {
    this.props.loadPage();
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
          }}
        >
          <Dimmer inverted active>
            <Loader size="big">Loading</Loader>
          </Dimmer>
        </Segment>
      );
    } else {
      return (
        <Container>
          <section>
            <div>
              <style>marginTop: auto</style>
              <h1 textalign="left">CONTACTO</h1>
            </div>
            <h3>
              Nos encontramos ubicados en la Calle #29-26 B/Santa Elena, de la
              ciudad de Cali
            </h3>
            <h2 textalign="left">MAPA</h2>
            <section>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </section>
          </section>

          <Container>
            <Grid style={{ marginTop: "2em" }}>
            <Grid.Row>
              <Grid.Column width={4}>
              <h2 textalign="left">NÚMERO CELULAR</h2>
              <h3>313 7544661</h3>
              </Grid.Column>
              <Grid.Column width={4}>
              <h2 textalign="left">E-MAIL</h2>
              <h3>fruveralejandro@hotmail.com</h3>
              </Grid.Column>
              <Grid.Column width={6}>
              <h2 textalign="left">DIRECCION</h2>
              <h3>Calle #29-26 B/Santa Elena</h3>
              </Grid.Column>
            </Grid.Row>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h1' textalign="center">ESCRIBENOS</Header>
                  <Form>
                    <Form.Field>
                      <label>Nombre</label>
                      <input placeholder="Nombre" />
                    </Form.Field>
                    <Form.Field>
                      <label>E-mail:</label>
                      <input type="text" name="email" placeholder="Correo Electrónico" />
                    </Form.Field>
                    <Form.Field>
                      <label>Asunto:</label>
                      <input type="text" name="asunto" placeholder="Asunto"/>
                      <label>Mensaje:</label>
                      <textarea id="form-text-area" name="textarea" placeholder="Escriba aquí su mensaje..."/>
                    </Form.Field>
                    <Button id="submitContactForm" floated='rigth' type="submit" style={{backgroundColor:"#2eb050"}}>Enviar</Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Container>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    message: state.contactReducer.contactLoaded,
    isLoading: state.contactReducer.contactLoading,
    hasErrored: state.contactReducer.contactErrored
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadPage: () => {
      dispatch(loadContact());
    },
    errorMessage: () => {
      dispatch();
    },
    successMessage: () => {
      dispatch();
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
