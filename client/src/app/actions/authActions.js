import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGOUT_REQUEST
} from './constants/ActionTypes';
import {Redirect} from 'react-router-dom';

import {
    alertError,
    alertSuccess,
    alertClear,
    clearAlerts
} from './alertActions';


function logoutRequest(user) {
    return {type: LOGOUT_REQUEST, user};
}

function loginRequest(user) {
    return {type: LOGIN_REQUEST, user};
}

function loginSuccess(user) {
    return {type: LOGIN_SUCCESS, user};
}

function loginFailure(error) {
    return {type: LOGIN_FAILURE, error};

}

export function logout() {
    return dispatch => {
<<<<<<< HEAD
        dispatch(loginSuccess(false));
=======
        dispatch(loginSuccess({}));
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    }
}

export function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    return dispatch => {
        dispatch(loginRequest(user));

        fetch('/authenticate', requestOptions).then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            dispatch(loginRequest({}));
<<<<<<< HEAD
            return response.json();
        }).then((user) => {
            if (user.err) {
                dispatch(alertError(user.err));
            } else {
                dispatch(loginSuccess(user));
            }
        }).catch((err) => {
            dispatch(alertError(err));            
            dispatch(loginFailure(err));
=======
            return response;
        }).then((response) => response.json()).then((user) => {
            if (user.msg) {
                dispatch(alertError(user.msg));
            } else {
                dispatch(alertSuccess('You are login'));
                dispatch(loginSuccess(user));
                dispatch(alertClear(true));
                dispatch(clearAlerts())
            }
        }).catch((err) => {
            dispatch(alertError(err));            
            dispatch(loginFailure(err))
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
        });
    };
}
