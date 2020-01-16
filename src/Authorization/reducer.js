import * as types from './actionTypeList';

export function authorizationReducer(state = false, action) {
  if (action.type === types.UPDATE_AUTORIZATION_DATA) {
    let newState = Object.assign({}, state);
    let newData = Object.assign({}, newState.data, action.data);
    newState.data = newData;
    return newState;
  }

  if (action.type === types.AUTHORIZATION_IS_LOADING) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSucceed: action.isSucceed,
        message: action.message,
        response: action.response,
      }
    return newState;
  }

  if (action.type === types.AUTHORIZATION_SUCCESSED) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSucceed: action.isSucceed,
        message: action.message,
        response: action.response,
      }
    return newState;
  }

  if (action.type === types.AUTHORIZATION_FAILED) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSucceed: action.isSucceed,
        message: action.message,
        response: action.response,
      }
    return newState;
  }
  return state;
}