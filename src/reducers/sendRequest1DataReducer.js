import * as types from './../actions/actionTypes';

export function sendRequest1DataReducer(state = false, action) {
  if (action.type === types.SET_ORG_ID) {
    return Object.assign({}, state, {orgId: action.orgId});
  }
  if (action.type === types.SET_ORG_INN) {
    return Object.assign({}, state, {orgInn: action.orgInn});
  }
  if (action.type === types.SET_ORG_NAME) {
    return Object.assign({}, state, {orgName: action.orgName});
  }
  if (action.type === types.SET_ACCOUNT) {
    return Object.assign({}, state, {account: action.account});
  }
  if (action.type === types.SET_BANK_BIC) {
    return Object.assign({}, state, {bankBIC: action.bankBIC});
  }

  return state;
}