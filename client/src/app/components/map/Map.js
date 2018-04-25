
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

import React, {Component} from 'react';
  
  
  export const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 3.429062, lng: -76.522385 }}
    >
      <Marker
        position={{ lat: 3.429062, lng: -76.522385 }}
      />
    </GoogleMap>
  ));
  
