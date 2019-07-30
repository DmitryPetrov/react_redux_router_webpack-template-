import { combineReducers } from 'redux';

import { authorizationDataReducer } from "./Authorization/DataReducer";
import { authorizationRequestReducer } from "./Authorization/RequestReducer";

import { statmentRequestDataReducer } from "./StatmentRequest/DataReducer";
import { statmentRequestRequestReducer } from "./StatmentRequest/RequestReducer";


const rootReducer = combineReducers({
	authorizationData: authorizationDataReducer,
	authorizationRequest: authorizationRequestReducer,
	statmentRequestData: statmentRequestDataReducer,
	statmentRequestRequest: statmentRequestRequestReducer,
})

export default rootReducer;