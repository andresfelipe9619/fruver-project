import {SUCCESS_ALERT, ERROR_ALERT, CLEAR_ALERT} from './constants/ActionTypes';

export function alertSuccess(message) {
    return {type: SUCCESS_ALERT, message};
}

export function alertError(message) {
    return {type: ERROR_ALERT, message};
}

export function alertClear(bool) {
    return {type: CLEAR_ALERT, bool};
}

export function clearAlerts() {
    console.log('Wth is going on!!!')
    return dispatch => {

    }
}
