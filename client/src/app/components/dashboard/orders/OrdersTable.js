import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Checkbox, Button, Icon, Header, Segment, Dimmer, Loader, Modal } from 'semantic-ui-react';
import { fetchOrders, deleteProduct, createProduct, editProduct } from '../../../actions/orderActions';
import DataTable from './../DataTable';

class OrdersTable extends Component {
    constructor(props) {
        super(props)

        this.clickedDelete = this.clickedDelete.bind(this);

    }


    componentDidMount() {
        this.props.getorders();
        console.log('Table mounted');
    }
    componentDidUpdate(prevProps) {
        console.log('prev', prevProps)
    }

    clickedDelete = ({ id }) => {
        this.props.deleteProduct({ id });
    }

    render() {
        const orders = this.props.orders;
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
        } else if (orders) {

            return (
                <div>
                    <DataTable data={orders} component={ActionsComponent} callbacks={callbacks}></DataTable>

                </div>
            );
        } else { return <div>So... You pass too much in here?</div> }
    }
}
const mapStateToProps = state => {
    return {
        orders: state.orderReducer.fetchOrdersSuccess,
        hasErrored: state.orderReducer.fetchOrdersFailure,
        isLoading: state.orderReducer.fetchOrdersRequest,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getorders: () => {
            dispatch(fetchOrders())
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

export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable);   