import * as types from './../actions/actionTypes';

export function sendRequest1RequestReducer(state = false, action) {
  if (action.type === types.SEND_REQUEST_1_IS_LOADING) {
    console.log("authorizationRequestIsLoadingReducer");
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    });
  }

  if (action.type === types.SEND_REQUEST_1_SUCCESSED) {
    console.log("authorizationRequestSuccessedReducer");
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    });
  }

  if (action.type === types.SEND_REQUEST_1_FAILED) {
    console.log("authorizationRequestFailedReducer");
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    });
  }
  return state;
}