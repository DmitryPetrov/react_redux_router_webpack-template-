import axios from 'axios';

import * as types from './actionTypeList';

function requestListIsLoading() {
	return {
		type: types.REQUEST_LIST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: '"/requestList" is loading',
		response: null,
	};
}

function requestListSuccessed(response) {
	return {
		type: types.REQUEST_LIST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: '"/requestList" successed',
		response: response,
	};
}

function requestListFailed(errorMessage) {
	return {
		type: types.REQUEST_LIST_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: '"/requestList" failed',
		response: errorMessage,
	};
}

export function requestListRequest() {
  return (dispatch) => {
    dispatch(requestListIsLoading());
    axios
      .get('/requestList')
      .then(response => {
        dispatch(requestListSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(requestListFailed(error.message));
      });

    dispatch(requestListSuccessed({
    status: "OK",
    message: "Request list",
    object: null,
    soapMessageList: null,
    requestList: [
{
    requestId: "84",
    acceptDate: "",
    bankMessage: "",
    bankMessageAuthor: "",
    docDate: "2018-05-15T17:08:00",
    docId: "40702810800000005897",
    docNumber: "78",
    docTypeVersion: "",
    externalId: "",
    externalUPGId: "",
    fromDate: "2018-05-07T00:00:00.715+03:00",
    lastModifyDate: "",
    messageOnlyForBank: "",
    orgId: "0ce353c5-9a53-497d-ad02-df1fb6c37feb",
    orgInn: "7842170415",
    orgName: "ПАО МРСК Северного Кавказа",
    template: "",
    toDate: "2018-05-14T00:00:00.715+03:00",
    signCollectionBankMessage: "",
    signCollectionDigestName: "",
    sign: "",
    accounts: [{ requestId: "", account: "40702810800000005897", bankBIC: "044030861", bankName: "АО \"АБ \"РОССИЯ\"" }],
    requestAttrRequestId: "1852ccae-e9b2-48bf-adbd-6027653f194d",
    requestAttrVersion: "1",
    requestNameSpaceUpgValue: "http://bssys.com/upg/request",
    requestNameSpaceUpgRaifValue: "http://bssys.com/upg/request/raif",
    requestNameSpaceXsiValue: "http://www.w3.org/2001/XMLSchema-instance",
    statementRequestAttrXmlns: "http://bssys.com/sbns/integration"
}
]
}));
  };
}