import {HOME_PAGE_LOADED, HOME_PAGE_ERRORED, HOME_PAGE_LOADING} from '../actions/constants/ActionTypes';

function homeErrored(state = false, action) {
    switch (action.type) {
        case HOME_PAGE_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

function homeLoading(state = false, action) {
    switch (action.type) {
        case HOME_PAGE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function homeLoaded(state = "Waiting to load home..." , action) {
    switch (action.type) {
        case HOME_PAGE_LOADED:
            return action.message;
        default:
            return state;
    }
}

export default function homeReducer(state = {}, action){
    return {
        homeErrored: homeErrored(state.homeErrored, action),
        homeLoading: homeLoading(state.homeLoading, action),
        homeLoaded: homeLoaded(state.homeLoaded, action)
    }
}