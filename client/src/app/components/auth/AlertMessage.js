import React, {Component} from "react";
import {Message} from 'semantic-ui-react';
const AlertMessage = (props) => {
    return (props.type === 'success'
        ? <Message positive>
                <Message.Header>You are eligible for a reward</Message.Header>
                <p>Go to your
                    <b>special offers</b>
                    page to see now.</p>
            </Message>
        : props.type === 'error'
            ? <Message
                    error
                    header='There was some errors with your submission'
                    list={['You must include both a upper and lower case letters in your password.', 'You need to select your home country.']}/>
            : null);
}

export default AlertMessage;