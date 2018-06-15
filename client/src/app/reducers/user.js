import {
    FETCH_USERS_REQUEST,
    DELETE_USER_REQUEST,
    CREATE_USER_REQUEST,
    FETCH_USERS_SUCCESS,
    DELETE_USER_SUCCESS,
    CREATE_USER_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_FAILURE,
    CREATE_USER_FAILURE,
} from '../actions/constants/ActionTypes';


function fetchUsersFailure(state = false, action) {
    switch (action.type) {
        case FETCH_USERS_FAILURE:
            return action.error;
        default:
            return state;
    }
}


function fetchUsersRequest(state = false, action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return action.bool;
        default:
            return state;
    }
}


function fetchUsersSuccess(state = null , action) {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return action.users; 
        default:
            return state;
    }
}

export default function userReducer(state = {}, action){
    return {
        fetchUsersFailure: fetchUsersFailure(state.fetchUsersFailure, action),
        fetchUsersRequest: fetchUsersRequest(state.fetchUsersRequest, action),
        fetchUsersSuccess: fetchUsersSuccess(state.fetchUsersSuccess, action)
    }
}