import * as types from './actionTypeList';

export function soapMessageListReducer(state = false, action) {
  if (action.type === types.SOAP_MESSAGE_LIST_IS_LOADING) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.SOAP_MESSAGE_LIST_SUCCESSED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.SOAP_MESSAGE_LIST_FAILED) {
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