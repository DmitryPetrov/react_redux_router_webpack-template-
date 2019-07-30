import * as types from './ActionTypes';

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
		type: types.SET_DOC_NUMBER,
		docNumber: data,
	};
}

export function setFromDate(data) {
	return {
		type: types.SET_FROM_DATE,
		fromDate: data,
	};
}

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

export function setToDate(data) {
	return {
		type: types.SET_TO_DATE,
		toDate: data,
	};
}

export function setAccAccount(data) {
	return {
		type: types.SET_ACC_ACCOUNT,
		accAccount: data,
	};
}

export function setAccBankBIC(data) {
	return {
		type: types.SET_ACC_BANK_BIC,
		accBankBIC: data,
	};
}

export function setAccBankName(data) {
	return {
		type: types.SET_ACC_BANK_NAME,
		accBankName: data,
	};
}

export function setAccOrgName(data) {
	return {
		type: types.SET_ACC_ORG_NAME,
		accOrgName: data,
	};
}