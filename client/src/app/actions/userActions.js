import {
    FETCH_USERS_REQUEST,
    DELETE_USER_REQUEST,
    CREATE_USER_REQUEST,
    SEARCH_USER_REQUEST,
    FETCH_USERS_SUCCESS,
    DELETE_USER_SUCCESS,
    CREATE_USER_SUCCESS,
    SEARCH_USER_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_FAILURE,
    CREATE_USER_FAILURE,
    SEARCH_USER_FAILURE
} from './constants/ActionTypes';
import { Redirect } from 'react-router-dom';

import {
    alertError,
    alertSuccess,
    alertClear,
    clearAlerts
} from './alertActions';


function fetchUsersRequest(bool) {
    return { type: FETCH_USERS_REQUEST, bool };
}

function fetchUsersSuccess(users) {
    return { type: FETCH_USERS_SUCCESS, users };
}

function fetchUsersFailure(error) {
    return { type: FETCH_USERS_FAILURE, error };

}


export function fetchUsers() {

    return dispatch => {
        dispatch(fetchUsersRequest(true));

        fetch('/users').then(response => {
            if (!response.ok) {
                // dispatch(alertError(response));
                return Promise.reject(response.statusText);
            }
            console.log('USERS RESPONSE', response)
            return response.json();
        }).then((response) => {
            dispatch(fetchUsersRequest(false));
            dispatch(fetchUsersSuccess(response));
        }).catch((err) => {
            // dispatch(alertError(err));
            dispatch(fetchUsersFailure(err));
        });
    };
}
