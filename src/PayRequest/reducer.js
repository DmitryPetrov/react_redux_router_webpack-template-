import * as t from './actionTypeList';
import { PAY_REQUEST_PART_DATA } from './initialState'

export function payRequestReducer(state = false, action) {
  if (action.type === t.PAY_REQUEST_UPDATE_DATA) {
    let newState = Object.assign({}, state);
    let newData = Object.assign({}, newState.data, action.data);
    newState.data = newData;
    return newState;
  }



  if (action.type === t.UPDATE_PAY_REQUEST_PART_DATA) {
    let index = action.index;
    let newState = Object.assign({}, state);
    let newPartPayments = Object.assign({}, newState.data.partPayments[index], action.data);
    newState.data.partPayments[index] = newPartPayments;
    return newState;
  }
  if (action.type === t.ADD_PAY_REQUEST_PART) {
    let newState = Object.assign({}, state);   
    newState.data.partPayments.push(PAY_REQUEST_PART_DATA);
    return newState;
  }
  if (action.type === t.REMOVE_PAY_REQUEST_PART) {
    let newState = Object.assign({}, state);

    let payRequestPartCount = 0;
    newState.data.partPayments.filter((item) => {
      if(item !== undefined){
        payRequestPartCount++;
      }
      return 1;
    });

    if (payRequestPartCount === 1) {
      return state;
    }

    delete newState.data.partPayments[action.index];
    return newState; 
  }



  if (action.type === t.PAY_REQUEST_IS_LOADING) {
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
  if (action.type === t.PAY_REQUEST_SUCCESSED) {
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
  if (action.type === t.PAY_REQUEST_FAILED) {
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