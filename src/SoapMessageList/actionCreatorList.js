import axios from 'axios';

import * as types from './actionTypeList';
import { REST_API } from './../globalInitialState';

function soapMessageListIsLoading() {
	return {
		type: types.SOAP_MESSAGE_LIST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSucceed: false,
		message: 'Loading',
		response: null,
	};
}
function soapMessageListSucceed(response) {
	return {
		type: types.SOAP_MESSAGE_LIST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSucceed: true,
		message: 'Succeed',
		response: response,
	};
}
function soapMessageListFailed(errorMessage) {
	return {
		type: types.SOAP_MESSAGE_LIST_FAILED,
		isFail: true,
		isLoading: false,
		isSucceed: false,
		message: 'Failed',
		response: errorMessage,
	};
}
export function soapMessagesRequest() {
  return (dispatch) => {
    dispatch(soapMessageListIsLoading());
    axios
      .get(REST_API.soapMessages)
      .then(
      	response => dispatch(soapMessageListSucceed(response.data)),
      	error => dispatch(soapMessageListFailed(error.message))
      )
    };
}
export function lastRequestSoapMessagesRequest() {
  return (dispatch) => {
    dispatch(soapMessageListIsLoading());
    axios
      .get(REST_API.lastRequestSoapMessages)
      .then(
      	response => dispatch(soapMessageListSucceed(response.data)),
      	error => dispatch(soapMessageListFailed(error.message))
      )
    };
}
export function deleteSoapMessagesRequest() {
  return (dispatch) => {
    dispatch(soapMessageListIsLoading());
    axios
      .delete(REST_API.soapMessages)
      .then(
      	response => dispatch(soapMessageListSucceed(response.data)),
      	error => dispatch(soapMessageListFailed(error.message))
      )
    };
}
