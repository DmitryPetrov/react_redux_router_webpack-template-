import axios from 'axios';

import * as types from './actionTypeList';

const SOAP_MESSAGE_LIST_URL = "/soapMessage/list";

function soapMessageListIsLoading() {
	return {
		type: types.SOAP_MESSAGE_LIST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: SOAP_MESSAGE_LIST_URL + ' is loading',
		response: null,
	};
}
function soapMessageListSuccessed(response) {
	return {
		type: types.SOAP_MESSAGE_LIST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: SOAP_MESSAGE_LIST_URL + ' successed',
		response: response,
	};
}
function soapMessageListFailed(errorMessage) {
	return {
		type: types.SOAP_MESSAGE_LIST_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: SOAP_MESSAGE_LIST_URL + ' failed',
		response: errorMessage,
	};
}
export function soapMessageListRequest(requestParam) {

  return (dispatch) => {
    dispatch(soapMessageListIsLoading());
    axios
      .get(SOAP_MESSAGE_LIST_URL )
      .then(response => {
        dispatch(soapMessageListSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(soapMessageListFailed(error.message));
      });


// dispatch(soapMessageListSuccessed(
// {
//     "status": "OK",
//     "message": "Soap message list",
//     "requestChain": null,
//     "requestChainList": [],
//     "soapMessageList": [
//         "<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Header/><SOAP-ENV:Body><ns2:preLogin xmlns:ns2=\"http://upg.sbns.bssys.com/\"><ns2:userLogin>testui</ns2:userLogin></ns2:preLogin></SOAP-ENV:Body></SOAP-ENV:Envelope>",
//         "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><preLoginResponse xmlns=\"http://upg.sbns.bssys.com/\"><return>Ht+/KvXkqlyLag==</return><return>LSD6PflJ9B2XQ9UhfSppQR/VmrDIRL82EXxXwSRBnMXT9yQxUL8YzfMWKAysenyyyCMZYvdSEbH7apeBxZ33uAXB6k3SghivbpbREphlPuK7vqVIV3QCV12qzJVqeL3AJVIRHuwfYDnMaXWdlbMVs/GIUJlQW73RMXQLKm/0BMccrqVe2+DdUEQJ+G883yj3/8KDRfEBH5VbC/MK8R7PmvTWqfH54xNodbsWhiagfT0FlMAhj9Ieqoxq92A6Oh065EGHL8HQcuijYqeM6rH7n4NY3W6Lf4i5iTk9oY7yXZeIGrmXVTsRHnGeDFgUFFmMPfr88dBYghz6TVA+lucMKw==</return><return>pFx7GZ097R7CoQ==</return><return>YmI0ZjU1ZDQtNDNlYy00YjFkLTkzYWMtMzI2MmQwZDMxODQ4</return><return>ODgzNDMyMzY3</return></preLoginResponse></soap:Body></soap:Envelope>",
//         "<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Header/><SOAP-ENV:Body><ns2:login xmlns:ns2=\"http://upg.sbns.bssys.com/\"><ns2:userLogin>testui</ns2:userLogin><ns2:preloginId>bb4f55d4-43ec-4b1d-93ac-3262d0d31848</ns2:preloginId><ns2:clientAuthData>UxvP1zxZe0XTqlxS6OZRr6LV2H0=</ns2:clientAuthData><ns2:clientAuthData>qqLfBpG8TgefXfh48rfWR++Xal4M2PJewIEH9KdjajkgjfvdNrBQ/vIm21GbuVCpIx+uTd1LRYeuzoGBaJefNAF4mjhKXUlnUeu40e8a6Jasz3S3hLK++rQUqjOmmgCUKbDUXd2Zua/wqP8uRFi7aJmpru9nofuAcAhWeJTgHX5rHiJJvKwoMf4a9a3fDZ6ekAVIuumsA3w6anyd6SQcnK7Q1iuBKqus38owVhwP1lvABjnQm8RfKE+i5tVsNbsfGvJ74lkekm1vGNb1MkZ0HYY7VyKAg4vC2mz+2DCT8bI9X0ItKrmOSCFZ9ujffPHNC4TfJMyCOSb+smQjH/u/QQ==</ns2:clientAuthData></ns2:login></SOAP-ENV:Body></SOAP-ENV:Envelope>",
//         "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><loginResponse xmlns=\"http://upg.sbns.bssys.com/\"><return>42</return></loginResponse></soap:Body></soap:Envelope>",
//         "<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Header/><SOAP-ENV:Body><ns2:sendRequests xmlns:ns2=\"http://upg.sbns.bssys.com/\"><ns2:requests><![CDATA[<upg:Request xmlns:upg=\"http://bssys.com/upg/request\" xmlns:upgRaif=\"http://bssys.com/upg/request/raif\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" requestId=\"1852ccae-e9b2-48bf-adbd-6027653f194d\" version=\"1\"><upg:Models><upg:Model><StatementRequest xmlns=\"http://bssys.com/sbns/integration\"><bankMessage/><docDate>2018-05-15T17:08:00</docDate><docId>0b64c0df-1690-4c15-0000-000000000020</docId><docNumber>78</docNumber><fromDate>2018-05-07T00:00:00.715+03:00</fromDate><orgId>0ce353c5-9a53-497d-ad02-df1fb6c37feb</orgId><orgInn>7842170415</orgInn><orgName>АО РЗК</orgName><toDate>2018-05-14T00:00:00.715+03:00</toDate><accounts><Acc><account>40702810800000005897</account><bankBIC>044030861</bankBIC><bankName>АО \"АБ \"РОССИЯ\"</bankName><orgName>АО РЗК</orgName></Acc></accounts></StatementRequest></upg:Model></upg:Models></upg:Request>]]></ns2:requests><ns2:sessionId>42</ns2:sessionId></ns2:sendRequests></SOAP-ENV:Body></SOAP-ENV:Envelope>",
//         "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><sendRequestsResponse xmlns=\"http://upg.sbns.bssys.com/\"><return>84</return></sendRequestsResponse></soap:Body></soap:Envelope>",
//         "<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Header/><SOAP-ENV:Body><ns2:getRequestStatus xmlns:ns2=\"http://upg.sbns.bssys.com/\"><ns2:requests>84</ns2:requests><ns2:sessionId>42</ns2:sessionId></ns2:getRequestStatus></SOAP-ENV:Body></SOAP-ENV:Envelope>",
//         "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><getRequestStatusResponse xmlns=\"http://upg.sbns.bssys.com/\"><return><upg:Response xmlns:upg=\"http://bssys.com/upg/response\" xmlns:upgRussia=\"http://bssys.com/upg/response/Russia\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" createTime=\"2019-08-29T11:32:54\" requestId=\"1852ccae-e9b2-48bf-adbd-6027653f194d\" responseId=\"a671acae-bb4d-4763-a79c-796d56d9166f\" sender=\"DBO\" version=\"2.0\"><upg:Models><upg:Model><StateResponse xmlns=\"http://bssys.com/sbns/integration\"><bankMessage></bankMessage><docId>0b64c0df-1690-4c15-0000-000000000020</docId><docType>StatementRequest</docType><extId>b7b896cd-06a8-4588-b6dd-6f7de7ba012a</extId><state>DELIVERED</state></StateResponse></upg:Model></upg:Models></upg:Response></return></getRequestStatusResponse></soap:Body></soap:Envelope>",
//         "<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Header/><SOAP-ENV:Body><ns2:sendRequests xmlns:ns2=\"http://upg.sbns.bssys.com/\"><ns2:requests><![CDATA[<upg:Request xmlns:upg=\"http://bssys.com/upg/request\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" receiver=\"1\" requestId=\"84\" sender=\"1\" version=\"1\"><upg:Incoming incomingId=\"6d773fb4-0608-493e-acc3-000000000016\" stateRequest=\"true\" timestamp=\"2018-05-23T16:53:00\"><upg:docTypes><upg:docType>R020</upg:docType></upg:docTypes></upg:Incoming></upg:Request>]]></ns2:requests><ns2:sessionId>42</ns2:sessionId></ns2:sendRequests></SOAP-ENV:Body></SOAP-ENV:Envelope>",
//         "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><sendRequestsResponse xmlns=\"http://upg.sbns.bssys.com/\"><return>168</return></sendRequestsResponse></soap:Body></soap:Envelope>"
//     ]
// }
// ));


    };
}
