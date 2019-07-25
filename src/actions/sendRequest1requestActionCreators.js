import axios from 'axios';

import * as types from './actionTypes';

function sendRequest1IsLoading() {
	return {
		type: types.SEND_REQUEST_1_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: 'sendRequest1 is loading',
	};
}

function sendRequest1Successed(response) {
	return {
		type: types.SEND_REQUEST_1_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: response,
	};
}

function sendRequest1Failed(errorMessage) {
	return {
		type: types.SEND_REQUEST_1_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: errorMessage,
	};
}

export function sendRequest1Request(requestBody) {
    return (dispatch) => {
        dispatch(sendRequest1IsLoading());
        axios
            .post('/sendRequests/requests1', requestBody)
            .then(response => {
                dispatch(sendRequest1Successed(response.data));
            })
            .catch(function (error) {
                dispatch(sendRequest1Failed(error.message));
            });
    };
}