import * as types from './actionTypeList';

export function incomingReducer(state = false, action) {
  if (action.type === types.INCOMING_IS_LOADING) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.INCOMING_SUCCESSED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.INCOMING_FAILED) {
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