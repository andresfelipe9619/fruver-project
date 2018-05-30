import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Checkbox, Button, Icon, Header, Segment, Dimmer, Loader } from 'semantic-ui-react';
import ReactCollapsingTable from 'react-collapsing-table'
import { fetchProducts } from '../../../actions/productActions';

class ProductsTable extends Component {

    componentDidMount() {
        this.props.getProducts();
        console.log('Table mounted');
    }
    componentDidUpdate(prevProps) {
        // if(prevProps.myProps !== this.props.myProp) {

        // }

        console.log('prev', prevProps)
    }



    render() {
        const products = this.props.products;
        // const rows = [
        //     { id: 1, firstName: 'Paul', lastName: 'Darragh', }
        // ]
        const columns = [
            { accessor: 'nombre', label: 'nombre', priorityLevel: 1, position: 1, minWidth: 150, }
        ]

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
                    <ReactCollapsingTable rows={products} columns={columns} showSearch showPagination rowSize={5} />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);   