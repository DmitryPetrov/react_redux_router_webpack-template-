import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './RootReducer.js';
import { authorizationData, authorizationRequest } from './Authorization/InitialState'
import { statementRequestData, statementRequestRequest, accounts } from './StatementRequest/InitialState'

const initialState = {
  authorizationData: Object.assign({}, authorizationData),
  authorizationRequest: Object.assign({}, authorizationRequest),
  statementRequestData: Object.assign({}, statementRequestData),
  statementRequestRequest: Object.assign({}, statementRequestRequest),  
  statementRequestDataAccounts: Object.assign({}, accounts),
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;