import {SUCCESS_ALERT, ERROR_ALERT, CLEAR_ALERT} from '../actions/constants/ActionTypes';

const INITIAL_STATE = { alertSuccess: false, alertError: false, alertClear: false}

export function alertSuccess(state = INITIAL_STATE.alertSuccess, action) {
    switch (action.type) {
        case SUCCESS_ALERT:
            return action.message;
        default:
            return state;
    }
}

export function alertError(state = INITIAL_STATE.alertError, action) {
    switch (action.type) {
        case ERROR_ALERT:
            return action.message;
        default:
            return state;
    }
}

export function alertClear(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CLEAR_ALERT:
            return action.bool;
        default:
            return state;
    }
}


export default function alertReducer(state = INITIAL_STATE, action){
    return {
        alertError: alertError(state.alertError, action),
        alertSuccess: alertSuccess(state.alertSuccess, action),
        alertClear: alertClear(state.alertClear, action)
    }
}