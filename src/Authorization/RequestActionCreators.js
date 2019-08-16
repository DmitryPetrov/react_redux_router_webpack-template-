import axios from 'axios';

import * as types from './ActionTypes';

function authorizationIsLoading() {
	return {
		type: types.AUTHORIZATION_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: '"/authorization" is loading',
		response: null,
	};
}

function authorizationSuccessed(response) {
	return {
		type: types.AUTHORIZATION_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: '"/authorization" successed',
		response: response,
	};
}

function authorizationFailed(errorMessage) {
	return {
		type: types.AUTHORIZATION_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: '"/authorization" failed',
		response: errorMessage,
	};
}

export function authorizationRequest(requestBody) {
  return (dispatch) => {
    dispatch(authorizationIsLoading());
    axios
      .post('/login', requestBody)
      .then(response => {
        dispatch(authorizationSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(authorizationFailed(error.message));
      });
  };
}