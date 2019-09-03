import { combineReducers } from 'redux';

import { authorizationDataReducer } from "./Authorization/DataReducer";
import { authorizationRequestReducer } from "./Authorization/RequestReducer";

import { statementRequestReducer } from "./StatementRequest/reducer";

import { requestListReducer, nextStepReducer, docTypeReducer } from "./RequestList/reducer";

import { soapMessageListReducer } from "./SoapMessageList/reducer";

const rootReducer = combineReducers({
	authorizationData: authorizationDataReducer,
	authorizationRequest: authorizationRequestReducer,
	
	statementRequest: statementRequestReducer,

	requestList: requestListReducer,
	nextStep: nextStepReducer,
	incomingDocTypes: docTypeReducer,

	soapMessageList: soapMessageListReducer,
})

export default rootReducer;