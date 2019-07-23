import axios from 'axios';

import * as types from './action/actionType';

export function requestFailedAction(errorMessage) {
    console.log("requestFailedAction");
    return {
        type: types.REQUEST_FAILED,
        isFail: true,
        isLoading: false,
        isSuccessed: false,
        message: errorMessage,
    };
}

export function requestIsLoadingAction() {
    console.log("requestIsLoadingAction");
    return {
        type: types.REQUEST_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSuccessed: false,
        message: 'request is loading',
    };
}

export function requestSuccessedAction(response) {
    console.log("requestSuccessedAction");
    return {
        type: types.REQUEST_SUCCESSED,
        isFail: false,
        isLoading: false,
        isSuccessed: true,
        message: response,
    };
}

export function requestToServer(action) {
    console.log("requestToServer");

    return (dispatch) => {
        dispatch(requestIsLoadingAction());

        axios
        .get('/login?userName=' + action.userName + '&password=' + action.password)
        .then(response => {
            console.log("action response.data");
            console.log(response.data);

            dispatch(requestSuccessedAction(response.data));
            //return response;
        })
        .catch(function (error) {
            console.log("action error");
            console.log(error);
            dispatch(requestFailedAction(error.message));
        });
    };
}