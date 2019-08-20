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
  };
}

// dispatch(requestListSuccessed(
// {
//     status: "OK",
//     message: "Request list",
//     object: {
//     requestId: "",
//     responseId: "",
//     requestName: ""
// },
//     requestList: [
// {
//     requestId: "b6ac0c04-b6f6-4af9-aa1a-1c2a568104be",
//     responseId: "8b645a39-d950-4f52-af7e-0abaab515d72",
//     requestName: "Incoming",
//     attrRequestId: "b6ac0c04-b6f6-4af9-aa1a-1c2a568104be",
//     attrVersion: "1",
//     attrSender: "1",
//     attrReceiver: "1",
//     attrStateRequest: "true",
//     attrIncomingId: "6d773fb4-0608-493e-acc3-000000000016",
//     attrTimestamp: "2018-05-23T16:53:00",
//     docTypes: ["R020"]
// },
// {
//     requestId: "1852ccae-e9b2-48bf-adbd-6027653f194d",
//     responseId: "4dceccdf-97ff-4a23-b6dc-f55d4bba3240",
//     requestName: "Statement Request",
//     attrRequestId: "1852ccae-e9b2-48bf-adbd-6027653f194d",
//     attrVersion: "1",
//     acceptDate: "",
//     bankMessage: "",
//     bankMessageAuthor: "",
//     docDate: "2018-05-15T17:08:00",
//     docId: "40702810800000005897",
//     docNumber: "78",
//     docTypeVersion: "",
//     externalId: "",
//     externalUPGId: "",
//     fromDate: "2018-05-07T00:00:00.715+03:00",
//     lastModifyDate: "",
//     messageOnlyForBank: "",
//     orgId: "0ce353c5-9a53-497d-ad02-df1fb6c37feb",
//     orgInn: "7842170415",
//     orgName: "ПАО МРСК Северного Кавказа",
//     template: "",
//     toDate: "2018-05-14T00:00:00.715+03:00",
//     accounts: [
// 			{ account: "40702810800000005897", bankBIC: "044030861", bankName: "АО \"АБ \"РОССИЯ\"" }
// 		],
//     signCollection: { bankMessage: "", digestName: "", signs: [] }
// }
// ],
//     soapMessageList: []
// }
// ));
// };
// }