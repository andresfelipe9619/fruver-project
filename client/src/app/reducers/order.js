import {
    ORDER_PAGE_LOADED,
    ORDER_PAGE_LOADING,
    ORDER_PAGE_ERRORED,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    CANCEL_ORDER_REQUEST,
    CANCEL_ORDER_SUCCESS,
    CANCEL_ORDER_FAILURE,
    ADD_PRODUCT_TO_ORDER_REQUEST,
    ADD_PRODUCT_TO_ORDER_SUCCESS,
    ADD_PRODUCT_TO_ORDER_FAILURE,
    DELETE_PRODUCT_FROM_ORDER_REQUEST,
    DELETE_PRODUCT_FROM_ORDER_SUCCESS,
    DELETE_PRODUCT_FROM_ORDER_FAILURE,

} from '../actions/constants/ActionTypes';

function orderErrored(state = false, action) {
    switch (action.type) {
        case ORDER_PAGE_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

function orderLoading(state = false, action) {
    switch (action.type) {
        case ORDER_PAGE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function orderLoaded(state = null, action) {
    switch (action.type) {
        case ORDER_PAGE_LOADED:
            return action.message;
        default:
            return state;
    }
}

function fetchOrdersFailure(state = false, action) {
    switch (action.type) {
        case FETCH_ORDERS_FAILURE:
            return action.error;
        default:
            return state;
    }
}


function fetchOrdersRequest(state = false, action) {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
            return action.bool;
        default:
            return state;
    }
}


function fetchOrdersSuccess(state = null, action) {
    switch (action.type) {
        case FETCH_ORDERS_SUCCESS:
            return action.orders;
        default:
            return state;
    }
}

export default function ordersReducer(state = {}, action) {
    return {
        orderErrored: orderErrored(state.dashboardErrored, action),
        orderLoading: orderLoading(state.dashboardLoading, action),
        orderLoaded: orderLoaded(state.dashboardLoaded, action),
        fetchOrdersFailure: fetchOrdersFailure(state.fetchOrdersFailure, action),
        fetchOrdersRequest: fetchOrdersRequest(state.fetchOrdersRequest, action),
        fetchOrdersSuccess: fetchOrdersSuccess(state.fetchOrdersSuccess, action),
    }
}