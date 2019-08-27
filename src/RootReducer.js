import { combineReducers } from 'redux';

import { authorizationDataReducer } from "./Authorization/DataReducer";
import { authorizationRequestReducer } from "./Authorization/RequestReducer";

import { statementRequestReducer } from "./StatementRequest/reducer";

import { requestListReducer } from "./RequestList/reducer";

import { getRequestStatusReducer } from "./RequestList/Request/reducer";

import { docTypeReducer } from "./Incoming/DocTypeList/reducer";
import { incomingReducer } from "./Incoming/reducer";



const rootReducer = combineReducers({
	authorizationData: authorizationDataReducer,
	authorizationRequest: authorizationRequestReducer,
	
	statementRequest: statementRequestReducer,
	
	requestListRequest: requestListReducer,

	getRequestStatusRequest: getRequestStatusReducer,

	incomingDocTypes: docTypeReducer,
	incomingRequest: incomingReducer,

})

export default rootReducer;