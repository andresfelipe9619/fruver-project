import {LOGIN_PAGE_LOADED, LOGIN_PAGE_ERRORED, LOGIN_PAGE_LOADING} from '../actions/constants/ActionTypes';

function loginErrored(state = false, action) {
    switch (action.type) {
        case LOGIN_PAGE_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

function loginLoading(state = false, action) {
    switch (action.type) {
        case LOGIN_PAGE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function loginLoaded(state = "Waiting to load contact..." , action) {
    switch (action.type) {
        case LOGIN_PAGE_LOADED:
            return action.message;
        default:
            return state;
    }
}

export default function loginReducer(state = {}, action){
    return {
        loginErrored: loginErrored(state.loginErrored, action),
        loginLoading: loginLoading(state.loginLoading, action),
        loginLoaded: loginLoaded(state.loginLoaded, action)
    }
}