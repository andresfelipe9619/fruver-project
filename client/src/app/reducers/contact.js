import {CONTACT_PAGE_LOADED, CONTACT_PAGE_ERRORED, CONTACT_PAGE_LOADING} from '../actions/constants/ActionTypes';

function contactErrored(state = false, action) {
    switch (action.type) {
        case CONTACT_PAGE_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

function contactLoading(state = false, action) {
    switch (action.type) {
        case CONTACT_PAGE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function contactLoaded(state = "Not loaded" , action) {
    switch (action.type) {
        case CONTACT_PAGE_LOADED:
            return action.message;
        default:
            return state;
    }
}

export default function contactReducer(state = {}, action){
    return {
        contactErrored: contactErrored(state.contactErrored, action),
        contactLoading: contactLoading(state.contactLoading, action),
        contactLoaded: contactLoaded(state.contactLoaded, action)
    }
}