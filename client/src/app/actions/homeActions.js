import {HOME_PAGE_LOADED, HOME_PAGE_ERRORED, HOME_PAGE_LOADING} from './constants/ActionTypes';

function homePageLoaded(message) {
    return {type: HOME_PAGE_LOADED, message};
}

function homePageLoading(bool) {
    return {type: HOME_PAGE_LOADING, isLoading: bool};
}

function homePageErrored(bool) {
    return {type: HOME_PAGE_ERRORED, hasErrored: bool};

}


<<<<<<< HEAD
=======
        fetch('/home').then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
>>>>>>> develop


<<<<<<< HEAD

export function loadHome() {
    return (dispatch) => {
        dispatch(homePageLoading(true));

        fetch('/productos').then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(homePageLoading(false));

=======
>>>>>>> develop
            return response;
        }).then((response) => response.json()).then((items) => dispatch(homePageLoaded(items))).catch(() => dispatch(homePageErrored(true)));
    };
}
<<<<<<< HEAD
=======
 
>>>>>>> develop
