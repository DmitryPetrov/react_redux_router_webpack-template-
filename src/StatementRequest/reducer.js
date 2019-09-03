import * as types from './actionTypeList';
import { ACCOUT_DATA} from './initialState'

export function statementRequestReducer(state = false, action) {
  if (action.type === types.UPDATE_DATA) {
    let newState = Object.assign({}, state);
    let newData = Object.assign({}, newState.data, action.data);
    newState.data = newData;
    return newState;
  }
  if (action.type === types.UPDATE_ACCOUNT_DATA) {
    let index = action.index;
    let newState = Object.assign({}, state);
    let newAccount = Object.assign({}, newState.data.accounts[index], action.data);
    newState.data.accounts[index] = newAccount;
    return newState;
  }



  if (action.type === types.ADD_ACCOUNT) {
    let newState = Object.assign({}, state);   
    newState.data.accounts.push(ACCOUT_DATA);
    return newState;
  }
  if (action.type === types.REMOVE_ACCOUNT) {
    let newState = Object.assign({}, state);

    let accountCount = 0;
    newState.data.accounts.filter((item) => {
      if(item !== undefined){
        accountCount++;
      }
      return 1;
    });

    if (accountCount === 1) {
      return state;
    }

    delete newState.data.accounts[action.index];
    return newState; 
  }



  if (action.type === types.STATMENT_REQUEST_IS_LOADING) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSuccessed: action.isSuccessed,
        message: action.message,
        response: action.response,
      }
    return newState;
  }
  if (action.type === types.STATMENT_REQUEST_SUCCESSED) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSuccessed: action.isSuccessed,
        message: action.message,
        response: action.response,
      }
    return newState;
  }
  if (action.type === types.STATMENT_REQUEST_FAILED) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSuccessed: action.isSuccessed,
        message: action.message,
        response: action.response,
      }
    return newState;
  }
  return state;
}