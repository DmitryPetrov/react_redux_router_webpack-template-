import { combineReducers } from 'redux';

import { authorizationReducer } from "./authorizationReducer";
import { userDataReducer } from "./userDataReducer";

const rootReducer = combineReducers({
	authorizationRequest: authorizationReducer,
	userData: userDataReducer,
})

export default rootReducer;