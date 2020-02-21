import * as types from './../actionTypeList';

export function reducerRequest(state = false, action) {

  if ((action.type === types.ORGANISATIONS_GET_LOADING) ||
        (action.type === types.ORGANISATION_POST_LOADING) ||
        (action.type === types.ORGANISATION_PUT_LOADING) ||
        (action.type === types.ORGANISATION_DELETE_LOADING)) {
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

  if ((action.type === types.ORGANISATIONS_GET_SUCCEED) ||
        (action.type === types.ORGANISATION_POST_SUCCEED) ||
        (action.type === types.ORGANISATION_PUT_SUCCEED) ||
        (action.type === types.ORGANISATION_DELETE_SUCCEED)) {
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

  if ((action.type === types.ORGANISATIONS_GET_FAILED) ||
        (action.type === types.ORGANISATION_POST_FAILED) ||
        (action.type === types.ORGANISATION_PUT_FAILED) ||
        (action.type === types.ORGANISATION_DELETE_FAILED)) {
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