import * as types from './../actions/actionTypes';

export function authorizationReducer(state = false, action) {
  if (action.type === types.AUTHORIZATION_IS_LOADING) {
    console.log("authorizationRequestIsLoadingReducer");
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    });
  }

  if (action.type === types.AUTHORIZATION_SUCCESSED) {
    console.log("authorizationRequestSuccessedReducer");
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    });
  }

  if (action.type === types.AUTHORIZATION_FAILED) {
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