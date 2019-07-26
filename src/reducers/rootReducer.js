import { combineReducers } from 'redux';

import { authorizationReducer } from "./authorizationReducer";
import { statmentRequestDataReducer } from "./statmentRequestDataReducer";
import { userDataReducer } from "./userDataReducer";
import { statmentRequestRequestReducer } from "./statmentRequestRequestReducer";


const rootReducer = combineReducers({
	userData: userDataReducer,
	authorizationRequest: authorizationReducer,
	statmentRequestData: statmentRequestDataReducer,
	statmentRequestRequest: statmentRequestRequestReducer,
})

export default rootReducer;