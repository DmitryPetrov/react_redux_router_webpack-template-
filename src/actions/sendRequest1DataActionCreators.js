import * as types from './actionTypes';

export function setOrgId(data) {
	return {
		type: types.SET_ORG_ID,
		orgId: data,
	};
}

export function setOrgInn(data) {
	return {
		type: types.SET_ORG_INN,
		orgInn: data,
	};
}

export function setOrgName(data) {
	return {
		type: types.SET_ORG_NAME,
		orgName: data,
	};
}

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