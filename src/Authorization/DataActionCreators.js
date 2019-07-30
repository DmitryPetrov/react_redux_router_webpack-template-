import * as types from './ActionTypes';

export function setUserName(userName) {
	return {
		type: types.SET_USERNAME,
		userName: userName,
	};
}

export function setPassword(password) {
	return {
		type: types.SET_PASSWORD,
		password: password,
	};
}