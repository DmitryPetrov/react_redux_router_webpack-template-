import * as types from './actionTypeList';
import axios from 'axios';

import { REST_API } from './../globalInitialState';

export function updateAutorizationData(data) {
	return {
		type: types.UPDATE_AUTORIZATION_DATA,
		data: data,
	}
}

function requestIsLoading() {
	return {
		type: types.AUTHORIZATION_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSucceed: false,
		message: 'Loading',
		response: null,
	};
}

function requestSucceed(response) {
	return {
		type: types.AUTHORIZATION_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSucceed: true,
		message: 'Succeed',
		response: response,
	};
}

function requestFailed(errorMessage) {
	return {
		type: types.AUTHORIZATION_FAILED,
		isFail: true,
		isLoading: false,
		isSucceed: false,
		message: 'Failed',
		response: errorMessage,
	};
}

export function authorizationRequest(requestBody) {
  return (dispatch) => {
    dispatch(requestIsLoading());
    axios
      .post(REST_API.authorization, requestBody)
      .then(response => {
        dispatch(requestSucceed(response.data));
      })
      .catch(function (error) {
        dispatch(requestFailed(error.message));
      });
  };
}