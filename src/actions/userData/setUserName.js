import * as types from '../actionTypes';

export function setUserName(userName) {
	return {
		type: types.SET_USERNAME,
		userName: userName,
	};
}