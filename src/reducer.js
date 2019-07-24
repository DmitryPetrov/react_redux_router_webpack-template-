import axios from 'axios';
import { combineReducers } from 'redux';

import * as types from './actions/actionTypes';

function requestReducer(state = false, action) {
  console.log("requestReducer");
  console.log(action);
  if (action.type === types.REQUEST_FAILED) {
    console.log("requestFailedReducer");
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    });
  }

  if (action.type === types.REQUEST_IS_LOADING) {
    console.log("requestIsLoadingReducer");
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    });
  }

  if (action.type === types.REQUEST_SUCCESSED) {
    console.log("requestSuccessedReducer");
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    });
  }
  return state;
}

function userDataReducer(state = false, action) {
  console.log("userDataReducer");
  console.log(action);
  if (action.type === types.SET_USERNAME) {
    console.log("setUserNameReducer");
    return Object.assign({}, state, {userName: action.userName});
  }
  if (action.type === types.SET_PASSWORD) {
    console.log("setPasswordReducer");
    return Object.assign({}, state, {password: action.password});
  }
  return state;
}

const rootReducer = combineReducers({
  request: requestReducer,
  userData: userDataReducer,
})

export default rootReducer;