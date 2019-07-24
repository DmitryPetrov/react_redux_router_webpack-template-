import * as types from './../actions/actionTypes';

export function userDataReducer(state = false, action) {
  console.log("userDataReducer");
  console.log(action);
  if (action.type === types.SET_USERNAME) {
    console.log("setUserNameReducer");
    return Object.assign({}, state, {userName: action.userName});
  }
  if (action.type === types.SET_PASSWORD) {
    console.log("setPasswordReducer");
    return Object.assign({}, state, {password: action.password});
  }
  return state;
}