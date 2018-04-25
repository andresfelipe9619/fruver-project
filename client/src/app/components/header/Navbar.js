import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Button
} from 'semantic-ui-react'

import mBanner from './banner.png';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image
                                size='small'
                                src={mBanner}
                                style={{
                                marginRight: '1.5em'
                            }}/>
                            <Link to="/">Inicio</Link>
                        </Menu.Item>
                        <Menu.Item as='a'> <Link to="/contacto">Contacto</Link></Menu.Item>
                        <Menu.Item as='a'>Realizar Pedido</Menu.Item>
                        <Menu.Item position='right'>
                            <Button as='a' > <Link to="/ingreso">Ingreso</Link></Button>
                            <Button
                                as='a'
                                style={{
                                marginLeft: '0.5em'
                            }}> <Link to="/">Registrarse</Link></Button>
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        );
    }
}
