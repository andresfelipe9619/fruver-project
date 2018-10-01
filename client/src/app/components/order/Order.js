import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadOrder } from "../../actions/orderActions";
import { Grid, Header, Segment, Dimmer, Loader, Button, Icon, Select, Input, Dropdown } from "semantic-ui-react";
import DataTable from './../dashboard/DataTable';
import { fetchProducts, deleteProduct, createProduct, editProduct } from '../../actions/productActions';
class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],

        }
    }

    clickedDeleteProduct = (product) => {
        // this.props.addProductToOrder( product );
        let arr = [...this.state.order]
        var index = arr.indexOf(product)
        arr.splice(index, 1);
        this.setState({
            order: arr
        })
    }

    clickedAddOrder = (order) => {

    }



    clickedAddProduct = (product) => {
        // this.props.addProductToOrder( product );
        product.cantidad = (product > 1 ? product.cantidad : 1);
        if (this.state.order.indexOf(product) < 0) {
            this.setState({
                order: [...this.state.order, product]
            })
        } else {
            let arr = [...this.state.order]
            var index = arr.indexOf(product)
            arr[index].cantidad += 1
            this.setState({
                order: arr
            })
        }
    }

    componentDidMount() {
        this.props.loadPage();
        this.props.getProducts();
    }

    render() {
        const { match, path, products } = this.props;
        const callbacks = { acciones: this.clickedAddProduct }
        const callbacks2 = { acciones: this.clickedDeleteProduct }

        const DeleteComponent = ({ CustomFunction, row }) => {
            // const clickedEdit = () => editProduct({ imageURL: row[accessor] });
            const handleclickDeleteProduct = () => CustomFunction(row);

            return (
                <Button.Group icon>
                    <Button onClick={handleclickDeleteProduct} style={{backgroundColor: "#f45f5f"}} >
                        <Icon name='delete' />
                    </Button>
                </Button.Group>
            )
        }
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
                    <Button onClick={handleclickAddProduct} style={{backgroundColor: "#30b6f4"}} >
                        <Icon name='add to cart' />
                    </Button>
                </Button.Group>
            )
        }

        const CantidadComponent = ({ CustomFunction, row }) => {
            const options = [
                { key: 'kg', value: 'kg', text: 'Kg' },
                { key: 'lb', value: 'lb', text: 'Lb' },
                { key: 'Un', value: 'un', text: 'Unidad' }
            ]
            return (
                <div>
                    <span>
                        <input style={{ width: '60px' }} type='number' /> Lb
                    </span>
                </div>
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
                            <Header as='h2'>Productos</Header>
                            <DataTable data={products} component={ActionsComponent} cantidad={CantidadComponent} callbacks={callbacks} ></DataTable>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as='h2'>Mi Pedido</Header>
                            {(this.state.order.length > 0 ? (
                                <div>
                                    <DataTable component={DeleteComponent} callbacks={callbacks2} data={this.state.order}></DataTable>
                                    <Button primary style={{backgroundColor:"#2eb050", marginTop: "2em"}}>Realizar Pedido</Button>
                                </div>
                            ) : null)}
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