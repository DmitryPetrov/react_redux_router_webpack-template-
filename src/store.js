import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer.js';

const initialState = {
  userData: {
    userName: '(initialState)',
    password: '(initialState)',
  },
  authorizationRequest: {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
  },
  statmentRequestData: {
    orgId: '(initialState)',
    orgInn: '(initialState)',
    orgName: '(initialState)',
    account: '(initialState)',
    bankBIC: '(initialState)',
    docDate: '(initialState)',
    docId: '(initialState)',
    docNumber: '(initialState)',
    fromDate: '(initialState)',
    toDate: '(initialState)',
    bankName: '(initialState)',
  },
  statmentRequestRequest: {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
  },  
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;