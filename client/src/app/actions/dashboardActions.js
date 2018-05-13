import {DASHBOARD_PAGE_LOADED, DASHBOARD_PAGE_ERRORED, DASHBOARD_PAGE_LOADING} from './constants/ActionTypes';

function dashboardPageLoaded(message) {
    return {type: DASHBOARD_PAGE_LOADED, message};
}

function dashboardPageLoading(bool) {
    return {type: DASHBOARD_PAGE_LOADING, isLoading: bool};
}

function dashboardPageErrored(bool) {
    return {type: DASHBOARD_PAGE_ERRORED, hasErrored: bool};

}

export function loadDashboard() {
    return (dispatch) => {
        dispatch(dashboardPageLoading(true));

<<<<<<< HEAD
        fetch('/productos').then((response) => {
=======
        fetch('/dashboard').then((response) => {
>>>>>>> develop
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(dashboardPageLoading(false));
            console.log('RESPONSE', response);

            return response;
<<<<<<< HEAD
        }).then((response) => response.json()).then((items) => dispatch(dashboardPageLoaded(items))).catch(() => dispatch(dashboardPageErrored(true)));
=======
        }).then((response) => response.json()).then((items) => dispatch(dashboardPageLoaded(items))).catch((err) => dispatch(dashboardPageErrored(err)));
>>>>>>> develop
    };
}

