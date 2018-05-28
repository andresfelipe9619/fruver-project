import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Checkbox, Form, Grid} from "semantic-ui-react";
import {Header, Message, Segment, Loader, Dimmer} from "semantic-ui-react";
import $ from 'jquery';
import Redirect from "react-router-dom/Redirect";
import {register, loadRegister} from "../../actions/registerActions";
import AlertMsg from "./AlertMsg";

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Nit: ''
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

    handleSubmit(e) {
        e.preventDefault();
        const {Name, Email, Nit} = this.state;

        let registerDocument = {
            nombre: Name,
            email: Email,
            nit: Nit
        }

        $.ajax({
            url: "https://api.mlab.com/api/1/databases/fruver/collections/cliente?apiKey=3ogwDefjJ" +
                    "M8EZJUQr_uur8ZAHVFPBF0G",
            data: JSON.stringify([registerDocument]),
            type: "POST",
            contentType: "application/json"
        });

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
            )
        } else {
            return (
                <Grid
                    textAlign="center"
                    style={{
                    height: "100%"
                }}
                    verticalAlign="middle">
                    <Grid.Column
                        style={{
                        maxWidth: 600
                    }}>
                        <Form id="reg-form" name="register-form" onSubmit={this.handleSubmit} onSubmitLabel='Registrarse'>
                            <Form.Field id="nombre">
                                <label>Nombre</label>
                                <input placeholder="ej: Subway"/>
                                <Form.Field id="email"></Form.Field>
                                <label>Correo Electrónico</label>
                                <input placeholder="ej: abc@mycorp.com"/>
                                <Form.Field id="nit"></Form.Field>
                                <label>NIT</label>
                                <input placeholder="NIT"/>
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    label="Estoy de acuerdo con los terminos y condiciones de servicio"
                                    checked/>
                            </Form.Field>
                            <Button
                                id="submitRegForm"
                                type="submit"
                                style={{
                                backgroundColor: "#2eb050"
                            }}>
                                Submit
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        //page
        isLoading: state.registerReducer.registerLoading,
        hasErrored: state.registerReducer.registerErrored,
        alertError: state.alertReducer.alertError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestRegister: user => {
            dispatch(register(user));
        },
        loadPage: () => {
            dispatch(loadRegister());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);