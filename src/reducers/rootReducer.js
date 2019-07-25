import { combineReducers } from 'redux';

import { authorizationReducer } from "./authorizationReducer";
import { sendRequest1DataReducer } from "./sendRequest1DataReducer";
import { userDataReducer } from "./userDataReducer";
import { sendRequest1RequestReducer } from "./sendRequest1RequestReducer";


const rootReducer = combineReducers({
	userData: userDataReducer,
	authorizationRequest: authorizationReducer,
	sendRequest1Data: sendRequest1DataReducer,
	sendRequest1Request: sendRequest1RequestReducer,
})

export default rootReducer;