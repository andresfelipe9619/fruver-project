import {SUCCESS_ALERT, ERROR_ALERT, CLEAR_ALERT} from '../actions/constants/ActionTypes';

<<<<<<< HEAD

export function alertSuccess(state = '', action) {
=======
const INITIAL_STATE = { alertSuccess: false, alertError: false, alertClear: false}

export function alertSuccess(state = INITIAL_STATE.alertSuccess, action) {
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    switch (action.type) {
        case SUCCESS_ALERT:
            return action.message;
        default:
            return state;
    }
}

<<<<<<< HEAD
export function alertError(state = '', action) {
=======
export function alertError(state = INITIAL_STATE.alertError, action) {
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    switch (action.type) {
        case ERROR_ALERT:
            return action.message;
        default:
            return state;
    }
}

<<<<<<< HEAD
export function alertClear(state = '', action) {
=======
export function alertClear(state = INITIAL_STATE, action) {
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    switch (action.type) {
        case CLEAR_ALERT:
            return action.bool;
        default:
            return state;
    }
}


<<<<<<< HEAD
export default function alertReducer(state = {}, action){
=======
export default function alertReducer(state = INITIAL_STATE, action){
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    return {
        alertError: alertError(state.alertError, action),
        alertSuccess: alertSuccess(state.alertSuccess, action),
        alertClear: alertClear(state.alertClear, action)
    }
}