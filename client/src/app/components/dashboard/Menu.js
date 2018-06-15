import React, {Component} from 'react';
import {Label, Menu, Header, Input, Icon} from 'semantic-ui-react'
import {Route, Link} from 'react-router-dom';

export class MenuDashboard extends Component {
    state = {};
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Menu
                    size='large'
                    vertical>
                    <Menu.Item
                        name='dashboard'
                        style={{
                        background: 'grey'
                    }}
                        onClick={this.handleItemClick}>

                        <Header as='h4'>
                            <Icon name='setting' size='mini'/>
                            <Header.Content>
                                Dashboard
                            </Header.Content>
                        </Header>
                    </Menu.Item>

                    <Menu.Item
                        name='usuarios'
                        active={activeItem === 'usuarios'}
                        onClick={this.handleItemClick}
                        to="/dashboard/usuarios" as={Link}>
                        <Header as='h4'>
                            <Icon name='user' size='mini'/>
                            <Header.Content>
                                Usuarios
                            </Header.Content>
                        </Header>
                        {/* <Label color='teal'>1</Label> */}
                    </Menu.Item>

                    <Menu.Item
                        name='productos'
                        active={activeItem === 'productos'}
                        onClick={this.handleItemClick}
                        to="/dashboard/productos" as={Link}>
                        <Header as='h4'>
                            <Icon name='cubes' size='mini'/>
                            <Header.Content>
                                Productos
                            </Header.Content>
                        </Header>
                    </Menu.Item>

                    <Menu.Item
                        name='pedidos'
                        active={activeItem === 'pedidos'}
                        onClick={this.handleItemClick}
                        to="/dashboard/pedidos" as={Link}>
                        <Header as='h4'>
                            <Icon name='shopping bag' size='mini'/>
                            <Header.Content>
                                Pedidos
                            </Header.Content>
                        </Header>

                    </Menu.Item>

                    <Menu.Item
                        name='facturas'
                        active={activeItem === 'facturas'}
                        onClick={this.handleItemClick}
                        to="/dashboard/facturas" as={Link}>

                        <Header as='h4'>
                            <Icon name='file text outline' size='mini'/>
                            <Header.Content>
                                Facturas
                            </Header.Content>
                        </Header>
                    </Menu.Item>

                </Menu>
            </div>
        );
    }
}