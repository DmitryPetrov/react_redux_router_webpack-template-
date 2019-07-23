import axios from 'axios';
import { combineReducers } from 'redux';

function messageHasErrored(state = false, action) {
  switch (action.type) {
    case 'MESSAGE_HAS_ERRORED':
      console.log("reducer messageHasErrored");
      return {
        hasErrored: action.hasErrored,
        errorMessage: action.errorMessage
      }

    default:
      return state;
  }
}

function messageIsLoading(state = false, action) {
  switch (action.type) {
    case 'MESSAGE_IS_LOADING':
      console.log("reducer messageIsLoading");
      return action.isLoading;

    default:
    return state;
  }
}

function message(state = [], action) {
  switch (action.type) {
    case 'MESSAGE_FETCH_DATA_SUCCESS':
      console.log("reducer message");
      console.log(">>>>action");
      console.log(action);
      return action.message;

    default:
    return state;
  }
}

export default combineReducers({
  message,
  error: messageHasErrored,
  messageIsLoading
});

//export default combineReducers;