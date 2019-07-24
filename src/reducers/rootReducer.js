import { combineReducers } from 'redux';

import { authorizationReducer } from "./authorizationReducer";
import { sendRequest1DataReducer } from "./sendRequest1DataReducer";
import { userDataReducer } from "./userDataReducer";

const rootReducer = combineReducers({
	authorizationRequest: authorizationReducer,
	sendRequest1Data: sendRequest1DataReducer,
	userData: userDataReducer,
})

export default rootReducer;