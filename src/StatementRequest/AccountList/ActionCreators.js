import * as types from './../ActionTypes';

export function setAccount(data, index) {
	return {
		type: types.SET_ACCOUNT,
		account: data,
		index: index,
	};
}

export function setBankBIC(data, index) {
	return {
		type: types.SET_BANK_BIC,
		bankBIC: data,
		index: index,
	};
}

export function setBankName(data, index) {
	return {
		type: types.SET_BANK_NAME,
		bankName: data,
		index: index,
	};
}

export function addAccount() {
	return {
		type: types.ADD_ACC,
	};
}

export function removeAcc(index) {
	return {
		type: types.REMOVE_ACC,
		index: index,
	};
}
