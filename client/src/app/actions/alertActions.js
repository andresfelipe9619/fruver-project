import {SUCCESS, ERROR, CLEAR} from './constants/ActionTypes';


function success(message) {
    return {type: SUCCESS, message};
}

function error(message) {
    return {type: ERROR, message};
}

function clear() {
    return {type: CLEAR};
}

export function displayMessage(message){
    return (dispatch) => {
        dispatch(success(message));

        fetch('https://api.otreeba.com/v1/strains').then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(homePageLoading(false));

            return response;
        }).then((response) => response.json()).then((items) => dispatch(homePageLoaded("Well done"))).catch(() => dispatch(homePageErrored(true)));
    };
}