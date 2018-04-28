import React, {Component} from 'react';
import {MenuDashboard} from './Menu.js';
import {UsersTable} from './users/UsersTable';
// import {ProductsTable} from './products/DevolutionsTable'; import
// {OrdersTable} from './orders/DevolutionsTable'; import {InvoicesTable} from
// './invoices/DevolutionsTable'; import {DevolutionsTable} from
// './devolutions/DevolutionsTable';
import {Grid, Header} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom';
export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={4}>
                        <MenuDashboard/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header as="h2">Usuarios</Header>
                        {/* <Route exact path="/dashboard/usuarios" component={UsersTable}/> {/* <Route exact path="/productos" component={ProductsTable}/> */}
                            {/* <Route exact path="/pedidos" component={OrdersTable}/> */}
                            {/* <Route exact path="/facturas" component={InvoicesTable}/> */}
                            {/* <Route exact path="/devoluciones" component={DevolutionsTable}/> */} 
                        <UsersTable/>
                    </Grid.Column>

                </Grid>
            </div>
        );
    }
}