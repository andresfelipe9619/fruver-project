import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGOUT
} from './constants/ActionTypes';


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
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return dispatch => {
        dispatch(loginRequest(user));
        
        fetch('/authenticate', requestOptions)
            .then(response => {
                if (!response.ok) { 
                    return Promise.reject(response.statusText);
                }
                dispatch(loginRequest({}));
                return response;  
            }).then((response) => response.json()).then((user) => dispatch(loginSuccess(user))).catch((err) => dispatch(loginFailure(err)));
    };
}
