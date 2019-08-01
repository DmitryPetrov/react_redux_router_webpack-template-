import axios from 'axios';

import * as types from './ActionTypes';

function statementRequestIsLoading() {
	return {
		type: types.STATMENT_REQUEST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: 'statementRequest is loading',
	};
}

function statementRequestSuccessed(response) {
	return {
		type: types.STATMENT_REQUEST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: response,
	};
}

function statementRequestFailed(errorMessage) {
	return {
		type: types.STATMENT_REQUEST_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: errorMessage,
	};
}

export function statementRequestRequest(requestBody) {
    return (dispatch) => {
        dispatch(statementRequestIsLoading());
        axios
            .post('/sendRequests/statementRequest', requestBody)
            .then(response => {
                dispatch(statementRequestSuccessed(response.data));
            })
            .catch(function (error) {
                dispatch(statementRequestFailed(error.message));
            });
    };
}