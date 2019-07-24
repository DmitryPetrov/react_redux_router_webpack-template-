import * as types from './../actions/actionTypes';

export function requestReducer(state = false, action) {
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