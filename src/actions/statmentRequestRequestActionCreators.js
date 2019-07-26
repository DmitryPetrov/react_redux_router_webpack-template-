import axios from 'axios';

import * as types from './actionTypes';

function statmentRequestIsLoading() {
	return {
		type: types.STATMENT_REQUEST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: 'statmentRequest is loading',
	};
}

function statmentRequestSuccessed(response) {
	return {
		type: types.STATMENT_REQUEST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: response,
	};
}

function statmentRequestFailed(errorMessage) {
	return {
		type: types.STATMENT_REQUEST_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: errorMessage,
	};
}

export function statmentRequestRequest(requestBody) {
    return (dispatch) => {
        dispatch(statmentRequestIsLoading());
        axios
            .post('/sendRequests/statementRequest', requestBody)
            .then(response => {
                dispatch(statmentRequestSuccessed(response.data));
            })
            .catch(function (error) {
                dispatch(statmentRequestFailed(error.message));
            });
    };
}