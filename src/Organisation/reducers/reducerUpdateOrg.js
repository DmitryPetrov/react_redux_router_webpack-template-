import * as types from './../actionTypeList';
import { EMPTY_ACC } from './../initialState'

export function reducerUpdateOrg(state = false, action) {

  if (action.type === types.SAVE_UPDATED_ORGANISATION) {
    let newState = Object.assign({}, state);
    const org = Object.assign({}, state.orgForUpdate);
    newState.organisations[state.orgForUpdate.index] = org;
    return newState;
  }

  if (action.type === types.ADD_ORGANISATION_FOR_UPDATE) {
    const orgForUpdate = state.organisations[action.index];
    let newState = Object.assign({}, state);
    newState.orgForUpdate = Object.assign({}, orgForUpdate, {index: action.index});
    return newState;
  }

  if (action.type === types.ADD_ACCOUNT_TO_UPDATE_ORGANISATION) {
    let newState = Object.assign({}, state);
    newState.orgForUpdate.accounts.push(Object.assign({}, EMPTY_ACC));
    return newState;
  }

  if (action.type === types.REMOVE_ACCOUNT_FROM_UPDATE_ORGANISATION) {
    let newState = Object.assign({}, state);
    delete newState.orgForUpdate.accounts[action.index];
    return newState;
  }

  if (action.type === types.UPDATE_EXISTING_ORGANISATION) {
    let newState = Object.assign({}, state);
    newState.orgForUpdate = Object.assign({}, state.orgForUpdate, action.data);
    return newState;
  }

  if (action.type === types.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION) {
    const account = Object.assign({}, state.orgForUpdate.accounts[action.index], action.data);
    let newState = Object.assign({}, state);
    newState.orgForUpdate.accounts[action.index] = account;
    return newState;
  }

}