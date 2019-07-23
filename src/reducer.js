import axios from 'axios';
import { combineReducers } from 'redux';

import * as types from './action/actionType';

// function requestFailedReducer(state = false, action) {
//   if (action.type === types.REQUEST_FAILED) {
//     console.log("requestFailedReducer");
//     return {
//       isFail: action.isFail,
//       isLoading: action.isLoading,
//       isSuccessed: action.isSuccessed,
//       message: action.message,
//     };
//   }
//   return state;
// }


// function requestIsLoadingReducer(state = false, action) {
//   if (action.type === types.REQUEST_IS_LOADING) {
//     console.log("requestIsLoadingReducer");
//     return {
//       isFail: action.isFail,
//       isLoading: action.isLoading,
//       isSuccessed: action.isSuccessed,
//       message: action.message,
//     };
//   }
//   return state;
// }


// function requestSuccessedReducer(state = [], action) {
//   if (action.type === types.REQUEST_SUCCESSED) {
//     console.log("requestSuccessedReducer");
//     return {
//       isFail: action.isFail,
//       isLoading: action.isLoading,
//       isSuccessed: action.isSuccessed,
//       message: action.message,
//     };
//   }
//   return state;
// }


// export default combineReducers({
//   requestFailedReducer,
//   requestIsLoadingReducer,
//   requestSuccessedReducer,
// });


export default function reducer(state = false, action) {
  if (action.type === types.REQUEST_FAILED) {
    console.log("requestFailedReducer");
    return {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    };
  }

  if (action.type === types.REQUEST_IS_LOADING) {
    console.log("requestIsLoadingReducer");
    return {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    };
  }

  if (action.type === types.REQUEST_SUCCESSED) {
    console.log("requestSuccessedReducer");
    return {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
    };
  }
  return state;
}

