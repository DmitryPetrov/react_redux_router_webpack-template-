import * as types from './ActionTypes';

export function statementRequestDataReducer(state = false, action) {
  if (action.type === types.SET_DOC_DATE) {
    return Object.assign({}, state, {docDate: action.docDate});
  }
  if (action.type === types.SET_DOC_ID) {
    return Object.assign({}, state, {docId: action.docId});
  }
  if (action.type === types.SET_DOC_NUMBER) {
    return Object.assign({}, state, {docNumber: action.docNumber});
  }

  if (action.type === types.SET_FROM_DATE) {
    return Object.assign({}, state, {fromDate: action.fromDate});
  }
  if (action.type === types.SET_ORG_ID) {
    return Object.assign({}, state, {orgId: action.orgId});
  }
  if (action.type === types.SET_ORG_INN) {
    return Object.assign({}, state, {orgInn: action.orgInn});
  }
  if (action.type === types.SET_ORG_NAME) {
    return Object.assign({}, state, {orgName: action.orgName});
  }
  if (action.type === types.SET_TO_DATE) {
    return Object.assign({}, state, {toDate: action.toDate});
  }

  if (action.type === types.SET_ACCOUNTS) {
    let newAccounts =  action.accounts.filter(function(item) {
      return item !== undefined;
    });
    let newState =  Object.assign({}, state);

    newState.accounts.splice(0, newState.accounts.length); //clear array
    newState.accounts.push(...newAccounts);
    return newState;
  }
  
  return state;
}