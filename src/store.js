import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer.js';
import { authorizationData, authorizationRequest } from './Authorization/InitialState'

import { statementRequest } from './StatementRequest/initialState'

import { requestListRequest } from './RequestList/initialState'
import { getRequestStatusRequest } from './RequestList/initialState'
import { incomingDocTypes, incomingRequest } from './RequestList/initialState'

import { soapMessageList } from './SoapMessageList/initialState'

const initialState = {
  authorizationData: Object.assign({}, authorizationData),
  authorizationRequest: Object.assign({}, authorizationRequest),
  
  statementRequest: Object.assign({}, statementRequest),
  
  requestList: Object.assign({}, requestListRequest),
  getRequestStatusRequest: Object.assign({}, getRequestStatusRequest),
  incomingDocTypes:  Object.assign({}, incomingDocTypes),
  incomingRequest:  Object.assign({}, incomingRequest),

  soapMessageList: Object.assign({}, statementRequest),
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;