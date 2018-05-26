import {
    FETCH_PRODUCTS_REQUEST,
    DELETE_PRODUCT_REQUEST,
    CREATE_PRODUCT_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    DELETE_PRODUCT_FAILURE,
    CREATE_PRODUCT_FAILURE,
} from '../actions/constants/ActionTypes';


function fetchProductsFailure(state = false, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_FAILURE:
            return action.error;
        default:
            return state;
    }
}


function fetchProductsRequest(state = false, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return action.bool;
        default:
            return state;
    }
}


function fetchProductsSuccess(state = null , action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return action.products; 
        default:
            return state;
    }
}

export default function productsReducer(state = {}, action){
    return {
        fetchProductsFailure: fetchProductsFailure(state.fetchProductsFailure, action),
        fetchProductsRequest: fetchProductsRequest(state.fetchProductsRequest, action),
        fetchProductsSuccess: fetchProductsSuccess(state.fetchProductsSuccess, action)
    }
}