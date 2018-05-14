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
<<<<<<< HEAD
    console.log('Wth its going on!!!')
    return dispatch => {

=======
    return dispatch => {
        dispatch(alertSuccess(false));
        dispatch(alertError(false));
        dispatch(alertClear(false));
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    }
}
