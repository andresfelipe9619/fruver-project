import React, {Component} from 'react';
import {MenuDashboard} from './Menu.js';
import {UsersTable} from './users/UsersTable';
import {Grid} from 'semantic-ui-react'
export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Grid style={{
                    marginTop: '7em',
                    marginRight: '4em'
                }}>
                    <Grid.Column width={4}>
                        <MenuDashboard/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <UsersTable/>
                    </Grid.Column>

                </Grid>
            </div>
        );
    }
}