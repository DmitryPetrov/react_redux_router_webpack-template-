import * as types from './../actionTypeList';

export function setDocType(data, index) {
	return {
		type: types.SET_DOC_TYPE,
		docType: data,
		index: index,
	};
}

export function addDocType() {
	return {
		type: types.ADD_DOC_TYPE,
	};
}

export function removeDocType(index) {
	return {
		type: types.REMOVE_DOC_TYPE,
		index: index,
	};
}
