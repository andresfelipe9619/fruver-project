import {SUCCESS, ERROR, CLEAR} from './constants/ActionTypes';

export function alertSuccess(state = {}, action) {
    switch (action.type) {
        case SUCCESS:
            return action.message;
        default:
            return state;
    }
}

export function alertError(state = {}, action) {
    switch (action.type) {
        case ERROR:
            return action.message;
        default:
            return state;
    }
}