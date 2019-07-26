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
  if (action.type === types.SET_DOC_DATE) {
    return Object.assign({}, state, {docDate: action.docDate});
  }
  if (action.type === types.SET_DOC_ID) {
    return Object.assign({}, state, {docId: action.docId});
  }
  if (action.type === types.SET_DOC_NUNBER) {
    return Object.assign({}, state, {docNumber: action.docNumber});
  }
  if (action.type === types.SET_FROM_DATE) {
    return Object.assign({}, state, {fromDate: action.fromDate});
  }
  if (action.type === types.SET_TO_DATE) {
    return Object.assign({}, state, {toDate: action.toDate});
  }
  if (action.type === types.SET_BANK_NAME) {
    return Object.assign({}, state, {bankName: action.bankName});
  }

  return state;
}