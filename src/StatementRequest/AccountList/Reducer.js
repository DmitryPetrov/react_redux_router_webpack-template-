import * as types from './../ActionTypes';
import { accData } from './../InitialState'

export function accountReducer(state = false, action) {
  if (action.type === types.SET_ACCOUNT) {
    let index = action.index;
    let newState = Object.assign({}, state);
    newState.acc[index].account = action.account
    return newState;
  }
  if (action.type === types.SET_BANK_BIC) {
    let index = action.index;
    let newState = Object.assign({}, state);
    newState.acc[index].bankBIC = action.bankBIC
    return newState;
  }
  if (action.type === types.SET_BANK_NAME) {
    let index = action.index;
    let newState = Object.assign({}, state);
    newState.acc[index].bankName = action.bankName
    return newState;
  }

  if (action.type === types.ADD_ACC) {
    let newAcc = Object.assign({}, accData);
    let newState =  Object.assign({}, state);
    newState.acc.push(newAcc);
    return newState;
  }

  if (action.type === types.REMOVE_ACC) {
    let newState = Object.assign({}, state);

    let accountCount = 0;
    newState.acc.filter((item) => {
      if(item !== undefined){
        accountCount++;
      }
      return 1;
    });

    if (accountCount === 1) {
      return state;
    }

    delete newState.acc[action.index];
    return newState; 
  }

  return state;
}