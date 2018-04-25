import React, {Component} from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from 'semantic-ui-react'
export class Login extends Component {
    render() {
        return (
            <div >
                <Grid
                    textAlign='center'
                    style={{
                    height: '100%',
                    marginTop: '7em'
                }}
                    verticalAlign='middle'>
                    <Grid.Column
                        style={{
                        maxWidth: 450
                    }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {' '}Inicia Sesión con tu cuenta
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Correo electrónico'/>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Contraseña'
                                    type='password'/>

                                <Button color='teal' fluid size='large'>Iniciar Sesión</Button>
                            </Segment>
                        </Form>
                        <Message>
                            No tienes cuenta?
                            <a href='#'> Crear Cuenta</a>
                        </Message>
						<Message>
							*Es necesario tener una cuenta con los datos completos de la empresa para poder realizar su pedido.
						</Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
