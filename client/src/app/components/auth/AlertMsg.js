import React, { Component } from "react";
import { Message } from 'semantic-ui-react';
const AlertMsg = (props) => {
    return (props.type == 'success'
        ? <Message positive>
            <Message.Header>You are eligible for a reward</Message.Header>
            <p>Go to your
                    <b>special offers</b>
                page to see now.</p>
        </Message>
        : props.type == 'error' && props.msg instanceof Array
            ? <Message
                error
                header='Hubo problemas iniciando sesión'
                list={props.msg} />
            : props.type == 'error' ? 
                <Message
                    error
                    header='Hubo problemas iniciando sesión'
                    content={props.msg} />
                :null);
}

export default AlertMsg;