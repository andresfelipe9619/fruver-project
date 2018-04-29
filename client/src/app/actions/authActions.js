import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGOUT
} from './constants/ActionTypes';

import {userService} from '../API';

function loginRequest(user) {
    return {type: LOGIN_REQUEST, user};
}

function loginSuccess(user) {
    return {type: LOGIN_SUCCESS, user};
}

function loginFailure(error) {
    return {type: LOGIN_FAILURE, error};

}

export function login(user) {
    return dispatch => {
        dispatch(loginRequest(user));
        userService
            .login(user)
            .then(user => {
                dispatch(loginSuccess(user));
                // history.push('/');
            }, error => {
                dispatch(loginFailure(error));
                // dispatch(alertActions.error(error));
            });
    };
}
