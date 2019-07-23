import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer  from './reducer.js';

const initialState = {
	hasErrored: '(initialState)',
	messageIsLoading: '(initialState)',
	errorMessage: '(initialState)',
  message: '(initialState)'
};

const store = createStore(rootReducer, initialState , applyMiddleware(thunk));

export default store;