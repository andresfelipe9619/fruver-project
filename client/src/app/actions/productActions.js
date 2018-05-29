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
} from './constants/ActionTypes';
import { Redirect } from 'react-router-dom';

import {
    alertError,
    alertSuccess,
    alertClear,
    clearAlerts
} from './alertActions';


function fetchProductRequest(bool) {
    return { type: FETCH_PRODUCTS_REQUEST, bool };
}

function fetchProductSuccess(products) {
    return { type: FETCH_PRODUCTS_SUCCESS, products };
}

function fetchProductFailure(error) {
    return { type: FETCH_PRODUCTS_FAILURE, error };

}


export function fetchProducts() {

    return dispatch => {
        dispatch(fetchProductRequest(true));

        fetch('/products').then(response => {
            if (!response.ok) {
                // dispatch(alertError(response));
                return Promise.reject(response.statusText);
            }
            console.log('PRODUCT RESPONSE', response)
            return response.json();
        }).then((response) => {
            dispatch(fetchProductRequest(false));
            dispatch(fetchProductSuccess(response.products));
        }).catch((err) => {
            // dispatch(alertError(err));
            dispatch(fetchProductFailure(err));
        });
    };
}
