import {DASHBOARD_PAGE_LOADED, DASHBOARD_PAGE_ERRORED, DASHBOARD_PAGE_LOADING} from '../actions/constants/ActionTypes';

function dashboardErrored(state = false, action) {
    switch (action.type) {
        case DASHBOARD_PAGE_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

function dashboardLoading(state = false, action) {
    switch (action.type) {
        case DASHBOARD_PAGE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function dashboardLoaded(state = "Not loaded" , action) {
    switch (action.type) {
        case DASHBOARD_PAGE_LOADED:
            return action.message;
        default:
            return state;
    }
}

export function dashboardReducer(state = {}, action){
    return {
        dashboardErrored: dashboardErrored(state.dashboardErrored, action),
        dashboardLoading: dashboardLoading(state.dashboardLoading, action),
        dashboardLoaded: dashboardLoaded(state.dashboardLoaded, action)
    }
}