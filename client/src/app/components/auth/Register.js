import React from "react";
import { Button, Checkbox, Form, Grid } from "semantic-ui-react";

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
        <Form.Field>
          <label>Nombre</label>
          <input placeholder="ej: Subway" />
        </Form.Field>
        <Form.Field>
          <label> Correo Electrónico </label>
          <input placeholder="ej: abc@mycorp.com" />
        </Form.Field>
        <Form.Field>
          <label>NIT</label>
          <input placeholder="NIT" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Estoy de acuerdo con los terminos y condiciones de servicio" checked/>
        </Form.Field>
        <Button type="submit" style={{ backgroundColor: "#2eb050" }} >
          Submit
        </Button>
      </Form>
    </Grid.Column>
  </Grid>
);
