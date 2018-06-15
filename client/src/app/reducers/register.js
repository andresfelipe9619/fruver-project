import {
    REGISTER_PAGE_LOADED,
    REGISTER_PAGE_ERRORED,
    REGISTER_PAGE_LOADING,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/constants/ActionTypes';

function registerErrored(state = false, action) {
    switch (action.type) {
        case REGISTER_PAGE_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

function registerLoading(state = false, action) {
    switch (action.type) {
        case REGISTER_PAGE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function registerLoaded(state = "Esperando para cargar registro...", action) {
    switch (action.type) {
        case REGISTER_PAGE_LOADED:
            return action.message;
        default:
            return state;
    }
}

function registerFailure(state = false, action) {
    switch (action.type) {
        case REGISTER_FAILURE:
            return action.error;
        default:
            return state;
    }
}

function registerRequest(state = {}, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return action.user;
        default:
            return state;
    }
}


function registerSuccess(state = false , action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return action.user;
        default:
            return state;
    }
}


export default function registerReducer(state = {}, action) {
    return {
        registerErrored: registerErrored(state.registerErrored, action),
        registerLoading: registerLoading(state.registerLoading, action),
        registerLoaded: registerLoaded(state.registerLoaded, action),
        registerFailure: registerFailure(state.registerFailure, action),
        registerRequest: registerRequest(state.registerRequest, action),
        registerSuccess: registerSuccess(state.registerSuccess, action),
    }
}