import React, {Component} from 'react';
import {Label, Menu, Input} from 'semantic-ui-react'

export class MenuDashboard extends Component {
    render() {
        return (
            <div>
                <Menu size='large' vertical style={{marginTop: '7em'}}>
                    <Menu.Item name='inbox' onClick={this.handleItemClick}>
                        <Label color='teal'>1</Label>
                        Inbox
                    </Menu.Item>

                    <Menu.Item name='spam' onClick={this.handleItemClick}>
                        <Label>51</Label>
                        Spam
                    </Menu.Item>

                    <Menu.Item name='updates' onClick={this.handleItemClick}>
                        <Label>1</Label>
                        Updates
                    </Menu.Item>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search mail...'/>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

