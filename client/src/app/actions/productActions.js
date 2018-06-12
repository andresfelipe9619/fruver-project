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
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
} from './constants/ActionTypes';

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
function deleteProductRequest(id) {
    return { type: DELETE_PRODUCT_REQUEST, id };
}

function deleteProductSuccess(product) {
    return { type: DELETE_PRODUCT_SUCCESS, product };
}

function deleteProductFailure(error) {
    return { type: DELETE_PRODUCT_FAILURE, error };

}
function createProductRequest(product) {
    return { type: CREATE_PRODUCT_REQUEST, product };
}

function createProductSuccess(product) {
    return { type: CREATE_PRODUCT_SUCCESS, product };
}

function createProductFailure(error) {
    return { type: CREATE_PRODUCT_FAILURE, error };

}
function editProductRequest(id) {
    return { type: EDIT_PRODUCT_REQUEST, id };
}

function editProductSuccess(product) {
    return { type: EDIT_PRODUCT_SUCCESS, product };
}

function editProductFailure(error) {
    return { type: EDIT_PRODUCT_FAILURE, error };

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
            dispatch(fetchProductSuccess(response));
        }).catch((err) => {
            // dispatch(alertError(err));
            dispatch(fetchProductFailure(err));
        });
    };
}

export function deleteProduct(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    };


    return dispatch => {
        dispatch(deleteProductRequest(id))
        fetch('/products', requestOptions).then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            dispatch(deleteProductRequest(null));
            return response.json()
        }).then(product => {
            if (product.err) {
                dispatch(alertError(product.err));
            } else {
                dispatch(deleteProductSuccess(product))
                dispatch(alertSuccess(product));
            }
        }).catch(err => {
            dispatch(deleteProductFailure(err))
            dispatch(alertError(err));

        })
    }
}

export function createProduct(product) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    };
    return dispatch => {
        dispatch(createProductRequest(product));

        fetch('/products', requestOptions).then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            dispatch(createProductRequest(null));
            return response.json()
        }).then(product => {
            if (product.err) {
                dispatch(alertError(product.err));
            } else {
                dispatch(createProductSuccess(product))
                dispatch(alertSuccess(product));
            }
        }).catch(err => {
            dispatch(createProductFailure(err))
            dispatch(alertError(err));

        })
    }
}

export function editProduct(id) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    };

    return dispatch => {
        dispatch(editProductRequest(id));

        fetch('/products', requestOptions).then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            dispatch(editProductRequest(null));
            return response.json()
        }).then(product => {
            if (product.err) {
                dispatch(alertError(product.err));
            } else {
                dispatch(editProductSuccess(product))
                dispatch(alertSuccess(product));
            }
        }).catch(err => {
            dispatch(editProductFailure(err))
            dispatch(alertError(err));
        })
    }
}
