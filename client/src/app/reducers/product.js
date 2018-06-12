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


function fetchProductsSuccess(state = null, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return action.products;
        default:
            return state;
    }
}

function deleteProductFailure(state = false, action) {
    switch (action.type) {
        case DELETE_PRODUCT_FAILURE:
            return action.error;
        default:
            return state;
    }
}


function deleteProductRequest(state = false, action) {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return action.id;
        default:
            return state;
    }
}


function deleteProductSuccess(state = null, action) {
    switch (action.type) {
        case DELETE_PRODUCT_SUCCESS:
            return action.product;
        default:
            return state;
    }
}


function createProductFailure(state = false, action) {
    switch (action.type) {
        case CREATE_PRODUCT_FAILURE:
            return action.error;
        default:
            return state;
    }
}


function createProductRequest(state = false, action) {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
            return action.product;
        default:
            return state;
    }
}


function createProductSuccess(state = null, action) {
    switch (action.type) {
        case CREATE_PRODUCT_SUCCESS:
            return action.product;
        default:
            return state;
    }
}

function editProductFailure(state = false, action) {
    switch (action.type) {
        case EDIT_PRODUCT_FAILURE:
            return action.error;
        default:
            return state;
    }
}

function editProductRequest(state = false, action) {
    switch (action.type) {
        case EDIT_PRODUCT_REQUEST:
            return action.id;
        default:
            return state;
    }
}


function editProductSuccess(state = null, action) {
    switch (action.type) {
        case EDIT_PRODUCT_SUCCESS:
            return action.product;
        default:
            return state;
    }
}



export default function productsReducer(state = {}, action) {
    return {
        fetchProductsFailure: fetchProductsFailure(state.fetchProductsFailure, action),
        fetchProductsRequest: fetchProductsRequest(state.fetchProductsRequest, action),
        fetchProductsSuccess: fetchProductsSuccess(state.fetchProductsSuccess, action),

        deleteProductRequest: deleteProductRequest(state.deleteProductRequest, action),
        deleteProductSuccess: deleteProductSuccess(state.deleteProductSuccess, action),
        deleteProductFailure: deleteProductFailure(state.deleteProductFailure, action),

        createProductRequest: createProductRequest(state.createProductRequest, action),
        createProductSuccess: createProductSuccess(state.createProductSuccess, action),
        createProductFailure: createProductFailure(state.createProductFailure, action),

        editProductRequest: editProductRequest(state.editProductRequest, action),
        editProductSuccess: editProductSuccess(state.editProductSuccess, action),
        editProductFailure: editProductFailure(state.editProductFailure, action),
    }
}