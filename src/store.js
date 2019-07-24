import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer.js';

const initialState = {
  userData: {
    userName: '(initialState)',
    password: '(initialState)',
  },
  request: {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
  }
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;