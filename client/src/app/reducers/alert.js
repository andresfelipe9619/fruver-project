import {SUCCESS_ALERT, ERROR_ALERT, CLEAR_ALERT} from '../actions/constants/ActionTypes';


export function alertSuccess(state = '', action) {
    switch (action.type) {
        case SUCCESS_ALERT:
            return action.message;
        default:
            return state;
    }
}

export function alertError(state = '', action) {
    switch (action.type) {
        case ERROR_ALERT:
            return action.message;
        default:
            return state;
    }
}

export function alertClear(state = '', action) {
    switch (action.type) {
        case CLEAR_ALERT:
            return action.bool;
        default:
            return state;
    }
}


export default function alertReducer(state = {}, action){
    return {
        alertError: alertError(state.alertError, action),
        alertSuccess: alertSuccess(state.alertSuccess, action),
        alertClear: alertClear(state.alertClear, action)
    }
}