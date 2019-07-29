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
    docDate: '(initialState)',
    docId: '(initialState)',
    docNumber: '(initialState)',

    fromDate: '(initialState)',
    orgId: '(initialState)',
    orgInn: '(initialState)',
    orgName: '(initialState)',
    toDate: '(initialState)',
    
    accAccount: '(initialState)',
    accBankBIC: '(initialState)',
    accBankName: '(initialState)',
    accOrgName: '(initialState)',
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