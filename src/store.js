import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { REQUEST } from './globalInitialState';
import { AUTORIZATION } from './Authorization/initialState';
import { STATEMENT_REQUEST } from './StatementRequest/initialState';
import { PAY_REQUEST } from './PayRequest/initialState';
import { INCOMING } from './RequestList/initialState';
import { ORGANISATION } from './Organisation/initialState';

const initialState = {
  authorization: AUTORIZATION,
  statementRequest: STATEMENT_REQUEST,
  payRequest: PAY_REQUEST,
  requestList: REQUEST,
  getRequestStatus: REQUEST,
  incoming:  INCOMING,
  soapMessageList: REQUEST,
  organisation: ORGANISATION,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;