import axios from 'axios';

import * as types from './actionTypeList';

function getRequestStatusIsLoading() {
	return {
		type: types.GET_REQUEST_STATUS_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: '"/sendRequests/getRequestStatus" is loading',
		response: undefined,
	};
}

function getRequestStatusSuccessed(response) {
	return {
		type: types.GET_REQUEST_STATUS_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: '"/sendRequests/getRequestStatus" successed',
		response: response,
	};
}

function getRequestStatusFailed(errorMessage) {
	return {
		type: types.GET_REQUEST_STATUS_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: '"/sendRequests/getRequestStatus" failed',
		response: errorMessage,
	};
}

export function getRequestStatusRequest(requestParam) {
  return (dispatch) => {
    dispatch(getRequestStatusIsLoading());
    axios
      .get('/sendRequests/getRequestStatus', {
          params: {
            responseId: requestParam,
          }
        })
      .then(response => {
        dispatch(getRequestStatusSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(getRequestStatusFailed(error.message));
      });
    };
}