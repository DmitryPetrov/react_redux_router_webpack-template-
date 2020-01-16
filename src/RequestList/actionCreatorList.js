import axios from 'axios';

import * as types from './actionTypeList';
import { REST_API } from './../globalInitialState';

function incomingIsLoading() {
    return {
        type: types.NEXT_STEP_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSucceed: false,
        message: 'Loading',
        response: null,
    };
}
function incomingSucceed(response) {
    return {
        type: types.NEXT_STEP_SUCCESSED,
        isFail: false,
        isLoading: false,
        isSucceed: true,
        message: 'Succeed',
        response: response,
    };
}
function incomingFailed(errorMessage) {
    return {
        type: types.NEXT_STEP_FAILED,
        isFail: true,
        isLoading: false,
        isSucceed: false,
        message: 'Failed',
        response: errorMessage,
    };
}
export function incomingRequest(requestBody) {
  return (dispatch) => {
    dispatch(incomingIsLoading());
    axios
      .post(REST_API.incoming, requestBody)
      .then(
        response => dispatch(incomingSucceed(response.data)),
        error => dispatch(incomingFailed(error.message))
      );
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
		isSucceed: false,
		message: 'Loading',
		response: null,
	};
}
function requestListSucceed(response) {
	return {
		type: types.REQUEST_LIST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSucceed: true,
		message: 'Succeed',
		response: response,
	};
}
function requestListFailed(errorMessage) {
	return {
		type: types.REQUEST_LIST_FAILED,
		isFail: true,
		isLoading: false,
		isSucceed: false,
		message: 'Failed',
		response: errorMessage,
	};
}
export function requestListRequest() {
  return (dispatch) => {
    dispatch(requestListIsLoading());
    axios
      .get(REST_API.requestChains)
      .then(
        response => dispatch(requestListSucceed(response.data)),
        error => dispatch(requestListFailed(error.message))
      );
    };
}



function getRequestStatusIsLoading() {
    return {
        type: types.NEXT_STEP_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSucceed: false,
        message: 'Loading',
        response: undefined,
    };
}
function getRequestStatusSucceed(response) {
    return {
        type: types.NEXT_STEP_SUCCESSED,
        isFail: false,
        isLoading: false,
        isSucceed: true,
        message: 'Succeed',
        response: response,
    };
}
function getRequestStatusFailed(errorMessage) {
    return {
        type: types.NEXT_STEP_FAILED,
        isFail: true,
        isLoading: false,
        isSucceed: false,
        message: 'Failed',
        response: errorMessage,
    };
}
export function getRequestStatusRequest(requestParam) {
  return (dispatch) => {
    dispatch(getRequestStatusIsLoading());
    axios
      .post(REST_API.getRequestStatus, {responseId: requestParam})
      .then(
        response => dispatch(getRequestStatusSucceed(response.data)),
        error => dispatch(getRequestStatusFailed(error.message))
      );
    };
}