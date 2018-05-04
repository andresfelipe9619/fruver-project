import {CONTACT_PAGE_LOADED, CONTACT_PAGE_ERRORED, CONTACT_PAGE_LOADING} from './constants/ActionTypes';

function contactPageLoaded(message) {
    return {type: CONTACT_PAGE_LOADED, message};
}

function contactPageLoading(bool) {
    return {type: CONTACT_PAGE_LOADING, isLoading: bool};
}

function contactPageErrored(bool) {
    return {type: CONTACT_PAGE_ERRORED, hasErrored: bool};

}

export function loadContact() {
    return (dispatch) => {
        dispatch(contactPageLoading(true));

        fetch('https://api.otreeba.com/v1/strains').then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(contactPageLoading(false));

            return response;
        }).then((response) => response.json()).then((items) => dispatch(contactPageLoaded(items))).catch(() => dispatch(contactPageErrored(true)));
    };
}

