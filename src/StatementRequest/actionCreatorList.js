import axios from 'axios';

import * as types from './actionTypeList';
import { REST_API } from './../globalInitialState';

export function updateData(data) {
	return {
		type: types.STATMENT_REQUEST_UPDATE_DATA,
		data: data,
	}
}

export function updateAccountData(data, index) {
	return {
		type: types.UPDATE_ACCOUNT_DATA,
		index: index,
		data: data,
	}
}

export function addAccount() {
	return {
		type: types.ADD_ACCOUNT,
	};
}

export function removeAccount(index) {
	return {
		type: types.REMOVE_ACCOUNT,
		index: index,
	};
}

export function statementRequestIsLoading() {
	return {
		type: types.STATMENT_REQUEST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: 'Loading',
		response: null,
	};
}

export function statementRequestSuccessed(response) {
	return {
		type: types.STATMENT_REQUEST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: 'Successed',
		response: response,
	};
}

export function statementRequestFailed(errorMessage) {
	return {
		type: types.STATMENT_REQUEST_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: 'Failed',
		response: errorMessage,
	};
}

export function statementRequestRequest(requestBody) {
  return (dispatch) => {
    dispatch(statementRequestIsLoading());
    axios
      .post(REST_API.statementRequest, requestBody)
      .then(
      		response => dispatch(statementRequestSuccessed(response.data)),
      		error => dispatch(statementRequestFailed(error.message))
      );
  };
}