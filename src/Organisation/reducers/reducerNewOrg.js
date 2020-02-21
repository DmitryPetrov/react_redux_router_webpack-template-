import * as types from './../actionTypeList';
import { EMPTY_ACC } from './../initialState'

export function reducerNewOrg(state = false, action) {

  if (action.type === types.SAVE_NEW_ORGANISATION) {
    let newState = Object.assign({}, state);
    newState.organisations.push(state.newOrg);
    return newState;
  }

  if (action.type === types.ADD_ACCOUNT_TO_NEW_ORGANISATION) {
    let newState = Object.assign({}, state);
    newState.newOrg.accounts.push(Object.assign({}, EMPTY_ACC));
    return newState;
  }

  if (action.type === types.REMOVE_ACCOUNT_FROM_NEW_ORGANISATION) {
    let newState = Object.assign({}, state);
    delete newState.newOrg.accounts[action.index];
    return newState;
  }

  if (action.type === types.UPDATE_NEW_ORGANISATION) {
    let newState = Object.assign({}, state);
    newState.newOrg = Object.assign({}, state.newOrg, action.data);
    return newState;
  }

  if (action.type === types.UPDATE_ACCOUNT_IN_NEW_ORGANISATION) {
    const account = state.newOrg.accounts[action.index];
    let newState = Object.assign({}, state);
    newState.newOrg.accounts[action.index] = Object.assign({}, account, action.data);
    return newState;
  }

}