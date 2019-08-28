import { combineReducers } from 'redux';

import { authorizationDataReducer } from "./Authorization/DataReducer";
import { authorizationRequestReducer } from "./Authorization/RequestReducer";

import { statementRequestReducer } from "./StatementRequest/reducer";
import { requestListReducer } from "./RequestList/reducer";
import { nextStepReducer } from "./RequestList/reducer";

import { docTypeReducer } from "./RequestList/reducer";



const rootReducer = combineReducers({
	authorizationData: authorizationDataReducer,
	authorizationRequest: authorizationRequestReducer,
	
	statementRequest: statementRequestReducer,
	requestList: requestListReducer,
	nextStep: nextStepReducer,

	incomingDocTypes: docTypeReducer,

})

export default rootReducer;