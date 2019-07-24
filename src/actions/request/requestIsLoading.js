import * as types from '../actionTypes';

export function requestIsLoading() {
	return {
		type: types.REQUEST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: 'request is loading',
	};
}