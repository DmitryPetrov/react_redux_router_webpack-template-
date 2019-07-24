import { combineReducers } from 'redux';

import { requestReducer } from "./requestReducer";
import { userDataReducer } from "./userDataReducer";

const rootReducer = combineReducers({
	request: requestReducer,
	userData: userDataReducer,
})

export default rootReducer;