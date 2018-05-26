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
} from './constants/ActionTypes';
import { Redirect } from 'react-router-dom';

import {
    alertError,
    alertSuccess,
    alertClear,
    clearAlerts
} from './alertActions';


function fetchOrdersRequest(bool) {
    return { type: FETCH_ORDERS_REQUEST, bool };
}

function fetchOrdersSuccess(orders) {
    return { type: FETCH_ORDERS_SUCCESS, orders };
}

function fetchOrdersFailure(error) {
    return { type: FETCH_ORDERS_FAILURE, error };

}


function orderPageLoaded(message) {
    return {type: ORDER_PAGE_LOADED, message};
}

function orderPageLoading(bool) {
    return {type: ORDER_PAGE_LOADING, isLoading: bool};
}

function orderPageErrored(err) {
    return {type: ORDER_PAGE_ERRORED, hasErrored: err};

}

export function loadOrder() {
    return (dispatch) => {
        dispatch(orderPageLoading(true));

        fetch('/order').then((response) => {
            console.log('ORDERS RESPONSE', response)
            
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(orderPageLoading(false));

            return response;
        }).then((response) => response.json()).then((items) => dispatch(orderPageLoaded(items))).catch((err) => dispatch(orderPageErrored(err)));
    };
}


export function fetchOrders() {

    return dispatch => {
        dispatch(fetchOrdersRequest(true));

        fetch('/orders').then(response => {
            if (!response.ok) {
                // dispatch(alertError(response));
                return Promise.reject(response.statusText);
            }
            console.log('ORDERS RESPONSE', response)
            return response.json();
        }).then((response) => {
            dispatch(fetchOrdersRequest(false));
            dispatch(fetchOrdersSuccess(response.orders));
        }).catch((err) => {
            // dispatch(alertError(err));
            dispatch(fetchOrdersFailure(err));
        });
    };
}
