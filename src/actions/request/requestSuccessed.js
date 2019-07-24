import * as types from '../actionTypes';

export function requestSuccessed(response) {
	return {
		type: types.REQUEST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: response,
	};
}