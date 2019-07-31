import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './RootReducer.js';
import { authorizationData, authorizationRequest } from './Authorization/InitialState'
import { statmentRequestData, statmentRequestRequest } from './StatmentRequest/InitialState'

const initialState = {
  authorizationData: Object.assign({}, authorizationData),
  authorizationRequest: Object.assign({}, authorizationRequest),
  statmentRequestData: Object.assign({}, statmentRequestData),
  statmentRequestRequest: Object.assign({}, statmentRequestRequest),  
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;