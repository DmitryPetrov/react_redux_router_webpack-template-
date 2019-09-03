import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer.js';
import { REQUEST } from './globalInitialState';
import { authorizationData } from './Authorization/InitialState';
import { STATEMENT_REQUEST } from './StatementRequest/initialState';
import { INCOMING } from './RequestList/initialState';

const initialState = {
  authorizationData: Object.assign({}, authorizationData),
  authorizationRequest: REQUEST,
  statementRequest: STATEMENT_REQUEST,
  requestList: REQUEST,
  getRequestStatus: REQUEST,
  incoming:  INCOMING,
  soapMessageList: REQUEST,
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;