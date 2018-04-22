import React, {Component} from 'react';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment
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
                                size='tiny'
                                src={mBanner}
                                style={{
                                marginRight: '1.5em'
                            }}/>
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>Contacto</Menu.Item>
                        <Menu.Item as='a'>Realziar Pedido</Menu.Item>
                    </Container>
                </Menu>
            </div>
        );
    }
}
