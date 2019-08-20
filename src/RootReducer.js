import { combineReducers } from 'redux';

import { authorizationDataReducer } from "./Authorization/DataReducer";
import { authorizationRequestReducer } from "./Authorization/RequestReducer";

import { statementRequestDataReducer } from "./StatementRequest/DataReducer";
import { statementRequestRequestReducer } from "./StatementRequest/RequestReducer";

import { accountReducer } from "./StatementRequest/AccountList/Reducer";

import { requestListReducer } from "./RequestList/reducer";

import { getRequestStatusReducer } from "./RequestList/Request/reducer";

import { docTypeReducer } from "./Incoming/DocTypeList/reducer";
import { incomingReducer } from "./Incoming/reducer";



const rootReducer = combineReducers({
	authorizationData: authorizationDataReducer,
	authorizationRequest: authorizationRequestReducer,
	
	statementRequestData: statementRequestDataReducer,
	statementRequestRequest: statementRequestRequestReducer,
	statementRequestDataAccounts: accountReducer,
	
	requestListRequest: requestListReducer,

	getRequestStatusRequest: getRequestStatusReducer,

	incomingDocTypes: docTypeReducer,
	incomingRequest: incomingReducer,

})

export default rootReducer;