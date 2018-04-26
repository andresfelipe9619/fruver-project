import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Image, Menu, Button, Segment} from 'semantic-ui-react'
import mBanner from './banner.png';

export class Navbar extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Segment 
                inverted
                style={{marginBottom: '50px'}}>
                <Menu fixed='top' inverted >
                    <Container>
                        <Menu.Item
                            name='inicio'
                            style={{fontFamily: 'Berkshire Swash',fontStyle: 'cursive',fontSize: 'medium'}}
                            active={activeItem === 'inicio'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/"
                            header>
                            <Image
                                size='small'
                                src={mBanner}
                                style={{
                                marginRight: '1.5em'
                            }}/>
                            Inicio
                        </Menu.Item>
                        <Menu.Item
                            name='contacto'
                            style={{fontFamily: 'Berkshire Swash',fontStyle: 'cursive',fontSize: 'medium'}}
                            active={activeItem === 'contacto'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/contacto">Contacto</Menu.Item>
                        <Menu.Item
                            name='pedido'
                            style={{fontFamily: 'Berkshire Swash',fontStyle: 'cursive',fontSize: 'medium'}}
                            active={activeItem === 'pedido'}
                            onClick={this.handleItemClick}
                            to="/pedido" as={Link} >Realizar Pedido</Menu.Item>
                        <Menu.Item position='right'>
                            <Button as={Link} to="/ingreso">Ingreso</Button>
                            <Button
                                as={Link}
                                to="/registro"
                                style={{
                                marginLeft: '0.5em'
                            }}>Registrarse</Button>
                        </Menu.Item>
                    </Container>
                </Menu>
                </Segment>
            </div>
        );
    }
}