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
            <h1 textAlign="left">CONTACTO</h1>
            <p>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </p>
          </section>
        </Container>
      </div>
    );
  }
}
