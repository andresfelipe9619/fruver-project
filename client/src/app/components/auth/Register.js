import React from "react";
import {connect} from "react-redux";
import { Button, Checkbox, Form, Grid } from "semantic-ui-react";
import {loadRegister} from '../../actions/registerActions';


export const Register = () => (
  <Grid
    textAlign="center"
    style={{
      height: "100%"
    }}
    verticalAlign="middle"
  >
    <Grid.Column
      style={{
        maxWidth: 600
      }}
    >
      <Form>
        <Form.Field id="nombre">
          <label>Nombre</label>
          <input placeholder="ej: Subway" />
        </Form.Field>
        <Form.Field id="email">
          <label> Correo Electrónico </label>
          <input placeholder="ej: abc@mycorp.com" />
        </Form.Field>
        <Form.Field id="nit">
          <label>NIT</label>
          <input placeholder="NIT" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Estoy de acuerdo con los terminos y condiciones de servicio" checked/>
        </Form.Field>
        <Button class="button" id="submitRegForm" type="submit" style={{ backgroundColor: "#2eb050" }} >
          Submit
        </Button>
      </Form>
    </Grid.Column>
  </Grid>
);


const mapStateToProps = (state) => {
  return {message: state.registerReducer.registerLoaded, isLoading: state.registerReducer.registerLoading, hasErrored: state.registerReducer.registerErrored};
};

const mapDispatchToProps = (dispatch) => {
  return {
      loadPage: () => {
          dispatch(loadRegister());
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