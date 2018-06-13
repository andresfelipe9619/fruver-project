import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Checkbox, Button, Icon, Header, Segment, Dimmer, Loader, Modal } from 'semantic-ui-react';
import { fetchProducts, deleteProduct, createProduct, editProduct } from '../../../actions/productActions';
import DataTable from './../DataTable';

class ProductsTable extends Component {
    constructor(props) {
        super(props)

        this.clickedDelete = this.clickedDelete.bind(this);

    }


    componentDidMount() {
        this.props.getProducts();
        console.log('Table mounted');
    }
    componentDidUpdate(prevProps) {
        console.log('prev', prevProps)
    }

    clickedDelete = ({ id }) => {
        this.props.deleteProduct({ id });
    }

    render() {
        const products = this.props.products;
        const callbacks = { acciones: this.clickedDelete }


        const ActionsComponent = ({ row, CustomFunction }) => {
            // const clickedEdit = () => editProduct({ imageURL: row[accessor] });
            const handleclickedDelete = () => CustomFunction({ id: row['_id'] });
            return (
                <Button.Group icon>
                    <Button>
                        <Icon name='eye' />
                    </Button>
                    <Button>
                        <Icon name='edit' />
                    </Button>
                    <Button  >
                        <Icon name='trash' />
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
                    }}>
                    <Dimmer inverted active>
                        <Loader size="big">Loading</Loader>
                    </Dimmer>
                </Segment>
            );
        } else if (products) {

            return (
                <div>
                    <DataTable data={products} component={ActionsComponent} callbacks={callbacks}></DataTable>

                </div>
            );
        } else { return <div>So... You pass too much in here?</div> }
    }
}
const mapStateToProps = state => {
    return {
        products: state.productReducer.fetchProductsSuccess,
        hasErrored: state.productReducer.fetchProductsFailure,
        isLoading: state.productReducer.fetchProductsRequest,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => {
            dispatch(fetchProducts())
        },
        deleteProduct: (id) => {
            dispatch(deleteProduct(id))
        }
        // editProduct: (id) => {
        //     dispatch(editProductRequest(id))
        // },
        // createProduct: (product) => {
        //     dispatch(createProductRequest())
        // }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);   