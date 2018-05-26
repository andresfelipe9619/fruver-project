import {REGISTER_PAGE_LOADED, REGISTER_PAGE_ERRORED, REGISTER_PAGE_LOADING} from './constants/ActionTypes';


function registerPageLoaded(message) {
    return {type: REGISTER_PAGE_LOADED, message};
}

function registerPageLoading(bool) {
    return {type: REGISTER_PAGE_LOADING, isLoading: bool};
}

function registerPageErrored(bool) {
    return {type: REGISTER_PAGE_ERRORED, hasErrored: bool};

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