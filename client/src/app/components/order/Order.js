import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadOrder } from "../../actions/orderActions";
import { Grid, Header, Segment, Dimmer, Loader } from "semantic-ui-react";
import { Route, Switch} from "react-router-dom";
import ProductsTable from '../dashboard/products/ProductsTable';
class Order extends Component {
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
        } else if (this.props.message) {
            return (
                <Grid>
                    <Grid.Column width={4}>
                    <Header>WTH IS GOING ON</Header>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    {/* <ProductsTable></ProductsTable> */}
                    </Grid.Column>
                </Grid>
            );
        } else return null;
    }
}

const mapStateToProps = state => {

    return {
        products: state.productReducer.products,
        message: state.orderReducer.orderLoaded,
        isLoading: state.orderReducer.orderLoading,
        hasErrored: state.orderReducer.orderErrored
        // shopping_cart: state.orderReducer.cart
    }
}

const mapDispatchToProps = dispatch => {

    return {
        loadPage: () => {
            dispatch(loadOrder());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Order)