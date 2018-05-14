import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGOUT_REQUEST
} from '../actions/constants/ActionTypes';

function loginFailure(state = false, action) {
    switch (action.type) {
        case LOGIN_FAILURE:
            return action.error;
        default:
            return state;
    }
}

function logoutRequest(state = {}, action) {
    switch (action.type) {
        case LOGOUT_REQUEST:
            return action.user;
        default:
            return state;
    }
}

function loginRequest(state = {}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return action.user;
        default:
            return state;
    }
}


<<<<<<< HEAD
function loginSuccess(state = false , action) {
=======
function loginSuccess(state = {} , action) {
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.user;
        default:
            return state;
    }
}

export default function authenticationReducer(state = {}, action){
    return {
        loginFailure: loginFailure(state.loginFailure, action),
        loginRequest: loginRequest(state.loginRequest, action),
        loginSuccess: loginSuccess(state.loginSuccess, action),
        logoutRequest: logoutRequest(state.logoutRequest, action)
    }
}