import {REGISTER_PAGE_LOADED, REGISTER_PAGE_LOADING, REGISTER_PAGE_ERRORED} from '../actions/constants/ActionTypes';

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

function registerLoaded(state = "Esperando para cargar registro..." , action) {
    switch (action.type) {
        case REGISTER_PAGE_LOADED:
            return action.message;
        default:
            return state;
    }
}

export default function registerReducer(state = {}, action){
    return {
        registerErrored: registerErrored(state.registerErrored, action),
        registerLoading: registerLoading(state.registerLoading, action),
        registerLoaded: registerLoaded(state.registerLoaded, action)
    }
}