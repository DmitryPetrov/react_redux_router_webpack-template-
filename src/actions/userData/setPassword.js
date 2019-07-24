import * as types from '../actionTypes';

export function setPassword(password) {
	return {
		type: types.SET_PASSWORD,
		password: password,
	};
}