import React, {Component} from 'react';
import {MenuDashboard} from './Menu.js';
import {UserTable} from './users/UsersTable';
import {ProductsTable} from './products/DevolutionsTable';
import {OrdersTable} from './orders/DevolutionsTable';
import {InvoicesTable} from './invoices/DevolutionsTable';
import {DevolutionsTable} from './devolutions/DevolutionsTable';
import {Grid} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom';
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
                        <Switch>
                            <Route exact path="/usuarios" component={UserTable}/>
                            <Route exact path="/productos" component={ProductsTable}/>
                            <Route exact path="/pedidos" component={OrdersTable}/>
                            <Route exact path="/facturas" component={InvoicesTable}/>
                            <Route exact path="/devoluciones" component={DevolutionsTable}/>
                        </Switch>
                        <UsersTable/>
                    </Grid.Column>

                </Grid>
            </div>
        );
    }
}
