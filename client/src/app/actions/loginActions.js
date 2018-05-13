import {LOGIN_PAGE_LOADED, LOGIN_PAGE_ERRORED, LOGIN_PAGE_LOADING} from './constants/ActionTypes';

function loginPageLoaded(message) {
    return {type: LOGIN_PAGE_LOADED, message};
}

function loginPageLoading(bool) {
    return {type: LOGIN_PAGE_LOADING, isLoading: bool};
}

function loginPageErrored(bool) {
    return {type: LOGIN_PAGE_ERRORED, hasErrored: bool};

}

export function loadLogin() {
    return (dispatch) => {
        dispatch(loginPageLoading(true));

        fetch('/login').then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(loginPageLoading(false));

            return response;
        }).then((response) => response.json()).then((items) => dispatch(loginPageLoaded(items))).catch(() => dispatch(loginPageErrored(true)));
    };
}

