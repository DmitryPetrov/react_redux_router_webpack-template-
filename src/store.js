import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './RootReducer.js';
import { authorizationData, authorizationRequest } from './Authorization/InitialState'
import { statmentRequestData, statmentRequestRequest } from './StatmentRequest/InitialState'

const initialState = {
  authorizationData: authorizationData,
  authorizationRequest: authorizationRequest,
  statmentRequestData: statmentRequestData,
  statmentRequestRequest: statmentRequestRequest,  
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;