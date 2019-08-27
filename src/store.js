import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './RootReducer.js';
import { authorizationData, authorizationRequest } from './Authorization/InitialState'
import { statementRequest } from './StatementRequest/initialState'

import { requestListRequest } from './RequestList/initialState'
import { getRequestStatusRequest } from './RequestList/Request/initialState'
import { incomingDocTypes, incomingRequest } from './Incoming/initialState'



const initialState = {
  authorizationData: Object.assign({}, authorizationData),
  authorizationRequest: Object.assign({}, authorizationRequest),
  
  statementRequest: Object.assign({}, statementRequest),
  
  requestListRequest: Object.assign({}, requestListRequest),

  getRequestStatusRequest: Object.assign({}, getRequestStatusRequest),

  incomingDocTypes:  Object.assign({}, incomingDocTypes),
  incomingRequest:  Object.assign({}, incomingRequest),
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;