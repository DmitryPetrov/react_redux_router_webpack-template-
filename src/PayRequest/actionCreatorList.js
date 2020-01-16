import axios from 'axios';

import * as t from './actionTypeList';

import { REST_API } from './../globalInitialState';

export function updateData(data) {
	return {
		type: t.PAY_REQUEST_UPDATE_DATA,
		data: data,
	}
}

export function updatePayRequestPartData(data, index) {
	return {
		type: t.UPDATE_PAY_REQUEST_PART_DATA,
		index: index,
		data: data,
	}
}

export function addPayRequestPart() {
	return {
		type: t.ADD_PAY_REQUEST_PART,
	};
}

export function removePayRequestPart(index) {
	return {
		type: t.REMOVE_PAY_REQUEST_PART,
		index: index,
	};
}

export function payRequestIsLoading() {
	return {
		type: t.PAY_REQUEST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSucceed: false,
		message: 'Loading',
		response: null,
	};
}

export function payRequestSucceed(response) {
	return {
		type: t.PAY_REQUEST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSucceed: true,
		message: 'Succeed',
		response: response,
	};
}

export function payRequestFailed(errorMessage) {
	return {
		type: t.PAY_REQUEST_FAILED,
		isFail: true,
		isLoading: false,
		isSucceed: false,
		message: 'Failed',
		response: errorMessage,
	};
}

export function payRequestRequest(requestBody) {
  return (dispatch) => {
    dispatch(payRequestIsLoading());
    axios
      .post(REST_API.payRequest, requestBody)
      .then(
      		response => dispatch(payRequestSucceed(response.data)),
      		error => dispatch(payRequestFailed(error.message))
      );
  };
}