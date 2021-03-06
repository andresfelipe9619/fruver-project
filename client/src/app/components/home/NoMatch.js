import React, {Component} from 'react';
import {Image, Segment} from 'semantic-ui-react'
import fruit404 from './404-fruit.png';

const NoMatch = ({location}) => (
    <Segment textAlign='center'>
        <h1>404</h1>
        <h3>
           Esta pagina no existe
            <code>{'   ' + location.pathname}</code>
        </h3>
        <Image src={fruit404} size='medium' rounded verticalAlign='middle'
	/>
    </Segment>
);

export default NoMatch;