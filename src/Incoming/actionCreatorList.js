import axios from 'axios';

import * as types from './actionTypeList';

function incomingIsLoading() {
	return {
		type: types.INCOMING_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: '"sendRequests/incoming" is loading',
		response: null,
	};
}

function incomingSuccessed(response) {
	return {
		type: types.INCOMING_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: '"sendRequests/incoming" successed',
		response: response,
	};
}

function incomingFailed(errorMessage) {
	return {
		type: types.INCOMING_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: '"sendRequests/incoming" failed',
		response: errorMessage,
	};
}

export function incomingRequest(requestBody) {
  return (dispatch) => {
    dispatch(incomingIsLoading());
    axios
      .post('/sendRequests/incoming', requestBody)
      .then(response => {
        dispatch(incomingSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(incomingFailed(error.message));
      });
  };
}