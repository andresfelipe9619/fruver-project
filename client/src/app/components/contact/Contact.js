// JavaScript Document

import React, { Component } from "react";
import { Form, Text } from "react-form";
import { MapWithAMarker } from "./../map/Map.js";

import {
  Container,
  Grid,
  Header,
  Button
} from "semantic-ui-react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <Container>
          <section>
            <div>
              <style>marginTop: auto</style>
              <h1 textalign="left">CONTACTO</h1>
            </div>
            <h2 textalign="left">Dirección</h2>
            <aside>
              Nos encontramos ubicados en la Calle #29-26 B/Santa Elena, de la
              ciudad de Cali
            </aside>
            <h3 textalign="left">MAPA</h3>
            <section>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </section>
          </section>
          <section>
            <article>
              <style>marginTop: 25px</style>
              <h2 textalign="left">NÚMERO CELULAR</h2>
              <aside>313 7544661</aside>
              <h2 textalign="left">E-MAIL</h2>
              <aside>fruveralejandro@hotmail.com</aside>
            </article>
          </section>
        </Container>
        <Container>
          <Grid style={{ marginTop: "2em" }}>
            <Grid.Row>
              <Grid.Column>
                <Header textalign="center">ESCRIBENOS</Header>
                <form>
                  <label>
                    Nombre:
                    <br />
                    <input type="text" name="nombre" />
                    <br />
                  </label>
                  <label>
                    E-Mail:
                    <br />
                    <input type="text" name="email" />
                    <br />
                  </label>
                  <label>
                    Asunto:
                    <br />
                    <input type="text" name="asunto" />
                    <br />
                  </label>
                  <label>
                    Mensaje:
                    <br />
                    <textarea id="form-text-area" name="textarea" />
                  </label>
                </form>
                <p>
                  <Button>Enviar</Button>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
