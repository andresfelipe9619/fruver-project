import React, { Component } from "react";
import { MenuDashboard } from "./Menu.js";
import UsersTable   from "./users/UsersTable";
import ProductsTable   from "./products/ProductsTable";
import { connect } from "react-redux";
import { loadDashboard } from "../../actions/dashboardActions";
// import  OrdersTable  from "./orders/OrdersTable";
// import  InvoicesTable  from "./invoices/InvoicesTable";
// import  DevolutionsTable  from "./devolutions/DevolutionsTable";
import { Grid, Header, Segment, Dimmer, Loader } from "semantic-ui-react";
import { Route, Switch} from "react-router-dom";
class Dashboard extends Component {
  componentDidMount() {
    this.props.loadPage();
  }

  render() {
    const { match, path } = this.props;
    if (this.props.hasErrored) {
      return <h1>Error</h1>;
    } else if (this.props.isLoading) {
      return (
        <Segment
          style={{
            marginTop: "7em",
            height: "20em"
          }}
        >
          <Dimmer inverted active>
            <Loader size="big">Loading</Loader>
          </Dimmer>
        </Segment>
      );
    } else if (this.props.message){
      return (
        <Grid>
          <Grid.Column width={4}>
            <MenuDashboard />
          </Grid.Column>
          <Grid.Column width={12}>
          <Switch>
            <Route exact path={match.url + "/usuarios"} component={UsersTable} key={'usersTable'}/>
            <Route exact path={match.url + "/productos"} component={ProductsTable} key={'productsTable'}/>
            {/* <Route path={match.url + "/facturas"} component={InvoicesTable} /> */}
            {/* <Route
              path={match.url + "/devoluciones"}
              component={DevolutionsTable}
            /> */}
            {/* <UsersTable /> */}
            </Switch>
          </Grid.Column>
        </Grid>
      );
    }else return null;
  }
}
const mapStateToProps = state => {
  return {
    message: state.dashboardReducer.dashboardLoaded,
    isLoading: state.dashboardReducer.dashboardLoading,
    hasErrored: state.dashboardReducer.dashboardErrored
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadPage: () => {
      dispatch(loadDashboard());
    },
    errorMessage: () => {
      dispatch();
    },
    successMessage: () => {
      dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
