import React, {Component} from "react";
import {Message} from 'semantic-ui-react';
const AlertMsg = (props) => {
    return (props.type == 'success'
        ? <Message positive>
                <Message.Header>You are eligible for a reward</Message.Header>
                <p>Go to your
                    <b>special offers</b>
                    page to see now.</p>
            </Message>
        : props.type == 'error'
            ? <Message
                    error
                    header='Hubo problemas iniciando sesión'
                    list={['Nombre de usuario o contraseña incorrectos', 'Revisa los datos ingresados', 'Verifica que no esté activa la tecla MAYUS']}/>
            : null);
}

export default AlertMsg;