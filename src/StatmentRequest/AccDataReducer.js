import * as types from './ActionTypes';

export function statmentRequestAccDataReducer(state = false, action) {
      console.log("statmentRequestAccDataReducer");

  if (action.type === types.SET_ACCOUNT) {
    console.log("SET_ACCOUNT");
    return Object.assign({}, state, {accounts[action.index].account: action.account});
  }
  if (action.type === types.SET_BANK_BIC) {
    console.log("SET_BANK_BIC");
    return Object.assign({}, state, {accounts[action.index].bankBIC: action.bankBIC});
  }
  if (action.type === types.SET_BANK_NAME) {
    console.log("SET_BANK_NAME");
    return Object.assign({}, state, {accounts[action.index].bankName: action.bankName});
  }
  if (action.type === types.REMOVE_ACC) {
    console.log("REMOVE_ACC");
    let newState = Object.assign({}, state);
    delete newState.accounts[action.index];
    return newState;
  }

  return state;
}