import * as types from './actionTypeList';
import axios from 'axios';



export function updateAutorizationData(data) {
	return {
		type: types.UPDATE_AUTORIZATION_DATA,
		data: data,
	}
}

function requestIsLoading() {
	return {
		type: types.AUTHORIZATION_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: '"/authorization" is loading',
		response: null,
	};
}

function requestSuccessed(response) {
	return {
		type: types.AUTHORIZATION_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: '"/authorization" successed',
		response: response,
	};
}

function requestFailed(errorMessage) {
	return {
		type: types.AUTHORIZATION_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: '"/authorization" failed',
		response: errorMessage,
	};
}

export function authorizationRequest(requestBody) {
  return (dispatch) => {
    dispatch(requestIsLoading());
    axios
      .post('/login', requestBody)
      .then(response => {
        dispatch(requestSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(requestFailed(error.message));
      });


// dispatch(requestSuccessed(
//     {"status":"OK","message":"LogIn to Soap server is success. sessionID=42","requestChain":null,"requestChainList":[],"soapMessageList":["<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Header/><SOAP-ENV:Body><ns2:login xmlns:ns2=\"http://upg.sbns.bssys.com/\"><ns2:userLogin>testui</ns2:userLogin><ns2:preloginId>bb4f55d4-43ec-4b1d-93ac-3262d0d31848</ns2:preloginId><ns2:clientAuthData>ANZcfDSMXyP2gsPcKXXIK6Jzzvk=</ns2:clientAuthData><ns2:clientAuthData>gRMKl8q6gu5eQkN2MNovhOt8PONXw/7huUhFtVfMAbfPqH+SlwpGm9RJw9mhNBZRY2JoRsFmmbDUX3AJSvjs8u0PTBxjmucArGYJJntd98wPWn2kPtr8ka8N9i9Q/Ef5Qzt7Uyf9PEyeykdLuZK17IpMslsTmtFDreW8pSXaXtn6/CJu68/uwPDwt24oqdM2wgvcw8b0jwZv1xfvdkcmxdaGdMQfzVXQwdpZElnbGtjYEA1+YhT5fPT2YRl8Q/cmxD0CATCa81wjHUniEBE2mibA5Fc1cuigeAmPN6VCvmW+r7fbv9e0pM7T2FN02c5HM6gqG/NiA9XlrWpQXEv2LA==</ns2:clientAuthData></ns2:login></SOAP-ENV:Body></SOAP-ENV:Envelope>","<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><loginResponse xmlns=\"http://upg.sbns.bssys.com/\"><return>42</return></loginResponse></soap:Body></soap:Envelope>"],"logInfo":"ResponseBodyData{status='OK', message='LogIn to Soap server is success. sessionID=42'}"}
//  ));


  };
}