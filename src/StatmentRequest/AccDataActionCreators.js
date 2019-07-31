import * as types from './ActionTypes';

export function setAccount(data) {
	return {
		type: types.SET_ACCOUNT,
		account: data,
	};
}

export function setBankBIC(data) {
	return {
		type: types.SET_BANK_BIC,
		bankBIC: data,
	};
}

export function setBankName(data) {
	return {
		type: types.SET_BANK_NAME,
		bankName: data,
	};
}

export function removeAcc(data) {
	return {
		type: types.REMOVE_ACC,
		index: data,
	};
}
