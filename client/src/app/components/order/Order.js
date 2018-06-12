import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadOrder } from "../../actions/orderActions";
import { Grid, Header, Segment, Dimmer, Loader, Button, Icon } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import DataTable from './../dashboard/DataTable';
import { fetchProducts, deleteProduct, createProduct, editProduct } from '../../actions/productActions';
class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],

        }
    }

    clickedAddProduct = (product) => {
        // this.props.addProductToOrder( product );
        this.setState({
            order: [...this.state.order, product]
        })
    }

    componentDidMount() {
        this.props.loadPage();
        this.props.getProducts();
    }

    render() {
        const { match, path, products } = this.props;
        const callbacks = { acciones: this.clickedAddProduct }

        const ActionsComponent = ({ CustomFunction, row }) => {
            // const clickedEdit = () => editProduct({ imageURL: row[accessor] });
            const handleclickAddProduct = () => CustomFunction(row);

            return (
                <Button.Group icon>
                    {/* <Button>
                        <Icon name='play' />
                    </Button>
                    <Button>
                        <Icon name='edit' />
                    </Button> */}
                    <Button onClick={handleclickAddProduct} >
                        <Icon name='add to cart' />
                    </Button>
                </Button.Group>
            )
        }

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
        } else if (products) {
            return (
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as='h1'>Realiza Tu Pedido</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3'>Productos</Header>
                            <DataTable data={products} component={ActionsComponent} callbacks={callbacks}></DataTable>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Header as='h3'>Mi Pedido</Header>
                        {(this.state.order.length > 0 ? <DataTable data={this.state.order}></DataTable> : null)}
                    </Grid.Column>
                    </Grid.Row>

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
        hasErrored: state.orderReducer.orderErrored,
        // shopping_cart: state.orderReducer.cart
        products: state.productReducer.fetchProductsSuccess,
        hasErrored: state.productReducer.fetchProductsFailure,
        isLoading: state.productReducer.fetchProductsRequest,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        loadPage: () => {
            dispatch(loadOrder());
        },

        getProducts: () => {
            dispatch(fetchProducts())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Order)