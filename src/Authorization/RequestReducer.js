import * as types from './ActionTypes';

export function authorizationRequestReducer(state = false, action) {
  if (action.type === types.AUTHORIZATION_IS_LOADING) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.AUTHORIZATION_SUCCESSED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.AUTHORIZATION_FAILED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }
  return state;
}