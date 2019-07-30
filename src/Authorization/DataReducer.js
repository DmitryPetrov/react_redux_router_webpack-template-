import * as types from './ActionTypes';

export function authorizationDataReducer(state = false, action) {
  if (action.type === types.SET_USERNAME) {
    return Object.assign({}, state, {userName: action.userName});
  }
  if (action.type === types.SET_PASSWORD) {
    return Object.assign({}, state, {password: action.password});
  }
  return state;
}