import React, { Component } from "react";
import { Message } from 'semantic-ui-react';
const AlertMsg = (props) => {
    return (props.type === 'success'
        ? <Message 
        positive
        header={props.header}
        content={props.msg}/>
        : props.type === 'error' && props.msg instanceof Array
            ? <Message
                error
                header={props.header}
                list={props.msg} />
            : props.type === 'error' ?
                <Message
                    error
                    header={props.header}
                    content={props.msg} />
                : props.type === 'warning' ?
                    <Message
                        warning
                        header={props.header}
                        content={props.msg} /> : null);
}

export default AlertMsg;