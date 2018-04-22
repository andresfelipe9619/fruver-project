import {HOME_PAGE_LOADED, HOME_PAGE_ERRORED, HOME_PAGE_LOADING} from '../actions/constants/ActionTypes';

export function homeErrored(state = false, action) {
    switch (action.type) {
        case HOME_PAGE_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function homeLoading(state = false, action) {
    switch (action.type) {
        case HOME_PAGE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function homeLoaded(state = "you're close" , action) {
    switch (action.type) {
        case HOME_PAGE_LOADED:
            return action.message;
        default:
            return state;
    }
}