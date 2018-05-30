import {
    REGISTER_PAGE_LOADED,
    REGISTER_PAGE_ERRORED,
    REGISTER_PAGE_LOADING,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './constants/ActionTypes';

import {
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
} from './constants/ActionTypes';
import {Redirect} from 'react-router-dom';

import {alertError, alertSuccess, alertClear, clearAlerts} from './alertActions';


function registerRequest(user) {
    return {type: REGISTER_REQUEST, user};
}

function registerSuccess(user) {
    return {type: REGISTER_SUCCESS, user};
}

function registerFailure(error) {
    return {type: REGISTER_FAILURE, error};

}


export function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    return dispatch => {
        dispatch(registerRequest(user));
        fetch("https://api.mlab.com/api/1/databases/fruver/collections/cliente?apiKey=3ogwDefjJM8EZJUQr_uur8ZAHVFPBF0G", requestOptions).then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            dispatch(registerRequest({}));
            return response.json();
        }).then((user) => {
            if (user.err) {
                dispatch(alertError(user.err));
            } else {
                dispatch(registerSuccess(user));
            }
        }).catch((err) => {
            dispatch(alertError(err));
            dispatch(registerFailure(err));
        });
    };
}





function registerPageLoaded(message) {
    return { type: REGISTER_PAGE_LOADED, message };
}

function registerPageLoading(bool) {
    return { type: REGISTER_PAGE_LOADING, isLoading: bool };
}

function registerPageErrored(bool) {
    return { type: REGISTER_PAGE_ERRORED, hasErrored: bool };
}

function registerRequest(user) {
    return { type: REGISTER_REQUEST, user };
}

function registerSuccess(user) {
    return { type: REGISTER_SUCCESS, user };
}

function registerFailure(error) {
    return { type: REGISTER_FAILURE, error };
}

export function loadRegister() {
    return (dispatch) => {
        dispatch(registerPageLoading(true));

        fetch('/registro').then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(registerPageLoading(false));

            return response;
        }).then((response) => response.json()).then((items) => dispatch(registerPageLoaded(items))).catch((err) => dispatch(registerPageErrored(err)));
    };
}


export function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    return dispatch => {
        dispatch(registerRequest(user));

        fetch('/users', requestOptions).then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            dispatch(registerRequest({}));
            return response.json();
        }).then((user) => {
            // if (user.err) {
            //     dispatch(alertError(user.err));
            // } else {
            dispatch(registerSuccess(user));
            // }
        }).catch((err) => {
            // dispatch(alertError(err));            
            dispatch(registerFailure(err));
        });
    };
}
