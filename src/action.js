import axios from 'axios';

import * as types from './action/actionType';

export function setUserNameAction(userName) {
    console.log("setUserNameAction");
    console.log(userName);
    return {
        type: types.SET_USERNAME,
        userName: userName,
    };
}

export function setPasswordAction(password) {
    console.log("setPasswordAction");
    console.log(password);
    return {
        type: types.SET_PASSWORD,
        password: password,
    };
}

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

export function requestToServer(userData) {
    console.log("requestToServer");

    return (dispatch) => {
        dispatch(requestIsLoadingAction());

        axios
        .get('/login?userName=' + userData.userName + '&password=' + userData.password)
        .then(response => {
            console.log("response.data");
            console.log(response.data);

            dispatch(requestSuccessedAction(response.data));
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);

            dispatch(requestFailedAction(error.message));
        });
    };
}