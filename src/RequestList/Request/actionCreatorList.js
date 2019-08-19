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

    // axios
    //   .get('/sendRequests/getRequestStatus', {
    //       params: {
    //         requestId: requestParam,
    //       }
    //     })
    //   .then(response => {
    //     dispatch(getRequestStatusSuccessed(response.data));
    //   })
    //   .catch(function (error) {
    //     dispatch(getRequestStatusFailed(error.message));
    //   });

// dispatch(getRequestStatusSuccessed(
{
    status: "OK",
    message: "GetRequestStatus to Soap server is success.",
    object: {
        requestId: "",
        responseId: "",
        requestName: "",
        attrCreateTime: "2019-08-19T17:56:10",
        attrRequestId: "1852ccae-e9b2-48bf-adbd-6027653f194d",
        attrResponseId: "88236c36-de32-404a-a4fc-4ca0e0e53e24",
        attrSender: "DBO",
        attrVersion: "2.0",
        notProcessedYet: false,
        stateResponse: {
    attrXmlns: "http:\//bssys.com/sbns/integration",
    bankMessage: "",
    docId: "40702810800000005897",
    docType: "StatementRequest",
    extId: "10135eed-76d3-4865-a0fd-c165971e94a7",
    state: "DELIVERED"
}
},
requestList: [],
soapMessageList: []
}
// ));




};
}