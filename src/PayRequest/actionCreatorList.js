import axios from 'axios';

import * as t from './actionTypeList';

export const PAY_REQUEST_URL = '/request/new/payRequest';

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
		isSuccessed: false,
		message: 'Loading',
		response: null,
	};
}

export function payRequestSuccessed(response) {
	return {
		type: t.PAY_REQUEST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: 'Successed',
		response: response,
	};
}

export function payRequestFailed(errorMessage) {
	return {
		type: t.PAY_REQUEST_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: 'Failed',
		response: errorMessage,
	};
}

export function payRequestRequest(requestBody) {
  return (dispatch) => {
    dispatch(payRequestIsLoading());
    axios
      .post(PAY_REQUEST_URL, requestBody)
      .then(
      		response => dispatch(payRequestSuccessed(response.data)),
      		error => dispatch(payRequestFailed(error.message))
      );
  };
}