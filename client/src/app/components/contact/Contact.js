// JavaScript Document

import React, { Component } from "react";
import { MapWithAMarker } from "./../map/Map.js";

import {
  Container,
  Button
} from "semantic-ui-react";

export class Contact extends Component {
  render() {
    return (
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
              <h2 textalign="left">NÚMERO CELULAR</h2>
              <aside>313 7544661</aside>
              <h2 textalign="left">E-MAIL</h2>
              <aside>fruveralejandro@hotmail.com</aside>
            </article>
          </section>
          <section>
            <style>marginTop: 35px</style>
            <h1 textalign="left">Escribenos</h1>
            <article>
              <div role="form" lang="en-US" dir="ltr">
                <p>
                  <label>
                    {" "}
                    Nombre*<br />
                    <span>
                      <input
                        type="text"
                        name="your-name"
                        size="40"
                        aria-required="true"
                      />
                    </span>{" "}
                  </label>
                </p>
                <p>
                  <label>
                    {" "}
                    Email*<br />
                    <span>
                      <input
                        type="email"
                        name="your-email"
                        size="40"
                        aria-required="true"
                      />
                    </span>{" "}
                  </label>
                </p>
                <p>
                  <label>
                    {" "}
                    Asunto<br />
                    <span>
                      <input type="text" name="your-subject" size="40" />
                    </span>{" "}
                  </label>
                </p>
                <p>
                  <label>
                    {" "}
                    Mensaje<br />
                    <span>
                      <textarea name="your-message" cols="40" rows="10" />
                    </span>{" "}
                  </label>
                </p>
                <p>
                  <Button>Enviar</Button>
                </p>
              </div>
            </article>
          </section>
        </Container>
    );
  }
}
