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

export function setDocDate(data) {
	return {
		type: types.SET_DOC_DATE,
		docDate: data,
	};
}

export function setDocId(data) {
	return {
		type: types.SET_DOC_ID,
		docId: data,
	};
}

export function setDocNumber(data) {
	return {
		type: types.SET_DOC_NUNBER,
		docNumber: data,
	};
}

export function setFromDate(data) {
	return {
		type: types.SET_FROM_DATE,
		fromDate: data,
	};
}

export function setToDate(data) {
	return {
		type: types.SET_TO_DATE,
		toDate: data,
	};
}

export function setBankName(data) {
	return {
		type: types.SET_BANK_NAME,
		bankName: data,
	};
}