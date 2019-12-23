import axios from 'axios';

import * as types from './actionTypeList';

const NEXT_STEP_URL = "/request/nextStep";
const REQUEST_LIST_URL = "/request/list";

function incomingIsLoading() {
    return {
        type: types.NEXT_STEP_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSuccessed: false,
        message: 'Loading',
        response: null,
    };
}
function incomingSuccessed(response) {
    return {
        type: types.NEXT_STEP_SUCCESSED,
        isFail: false,
        isLoading: false,
        isSuccessed: true,
        message: 'Successed',
        response: response,
    };
}
function incomingFailed(errorMessage) {
    return {
        type: types.NEXT_STEP_FAILED,
        isFail: true,
        isLoading: false,
        isSuccessed: false,
        message: 'Failed',
        response: errorMessage,
    };
}
export function incomingRequest(requestBody) {
  return (dispatch) => {
    dispatch(incomingIsLoading());
    axios
      .post(NEXT_STEP_URL, requestBody)
      .then(response => {
        dispatch(incomingSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(incomingFailed(error.message));
      });
  };
}



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



function requestListIsLoading() {
	return {
		type: types.REQUEST_LIST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: 'Loading',
		response: null,
	};
}
function requestListSuccessed(response) {
	return {
		type: types.REQUEST_LIST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: 'Successed',
		response: response,
	};
}
function requestListFailed(errorMessage) {
	return {
		type: types.REQUEST_LIST_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: 'Failed',
		response: errorMessage,
	};
}
export function requestListRequest() {
  return (dispatch) => {
    dispatch(requestListIsLoading());
    axios
      .get(REQUEST_LIST_URL)
      .then(response => {
        dispatch(requestListSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(requestListFailed(error.message));
      });
    };
}



function nextStepIsLoading() {
    return {
        type: types.NEXT_STEP_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSuccessed: false,
        message: 'Loading',
        response: undefined,
    };
}
function nextStepSuccessed(response) {
    return {
        type: types.NEXT_STEP_SUCCESSED,
        isFail: false,
        isLoading: false,
        isSuccessed: true,
        message: 'Successed',
        response: response,
    };
}
function nextStepFailed(errorMessage) {
    return {
        type: types.NEXT_STEP_FAILED,
        isFail: true,
        isLoading: false,
        isSuccessed: false,
        message: 'Failed',
        response: errorMessage,
    };
}
export function nextStepRequest(requestParam) {
  return (dispatch) => {
    dispatch(nextStepIsLoading());
    axios
      .get(NEXT_STEP_URL, {params: {responseId: requestParam}})
      .then(response => {
        dispatch(nextStepSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(nextStepFailed(error.message));
      });
    };
}