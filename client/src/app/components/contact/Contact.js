// JavaScript Document

import React, { Component } from "react";
import { MapWithAMarker } from "./../map/Map.js";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  GridColumn,
  GridRow
} from "semantic-ui-react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <Container>
          <section>
            <style>marginTop: auto</style>
            <h1 textAlign="left">CONTACTO</h1>
            <h2 textAlign="left">Dirección</h2>
            <aside>Nos encontramos ubicados en la Calle #29-26 B/Santa Elena, de la ciudad de Cali</aside>
            <h3 textAlign="left">MAPA</h3>
            <p>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </p>
          </section>
          <section>
            <article>
              <style>marginTop: 25px</style>
              <h2 textAlign="center">NUMERO CELULAR</h2>
              <aside>313 7544661</aside>
              <h2 textAlign="center">E-MAIL</h2>
              <aside>fruveralejandro@hotmail.com</aside>
            </article>
          </section>
        </Container>
      </div>
    );
  }
}
