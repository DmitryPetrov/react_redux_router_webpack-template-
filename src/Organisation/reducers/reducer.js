import { reducerRequest } from './reducerRequest';
import { reducerSelectOrg } from './reducerSelectOrg';
import { reducerNewOrg } from './reducerNewOrg';
import { reducerUpdateOrg } from './reducerUpdateOrg';

import * as t from './../actionTypeList';

export function organisationMainReducer(state = false, action) {

  if ((action.type === t.ORGANISATIONS_GET_LOADING) ||
      (action.type === t.ORGANISATIONS_GET_SUCCEED) ||
      (action.type === t.ORGANISATIONS_GET_FAILED) ||
      (action.type === t.ORGANISATION_POST_LOADING) ||
      (action.type === t.ORGANISATION_POST_SUCCEED) ||
      (action.type === t.ORGANISATION_POST_FAILED) ||
      (action.type === t.ORGANISATION_PUT_LOADING) ||
      (action.type === t.ORGANISATION_PUT_SUCCEED) ||
      (action.type === t.ORGANISATION_PUT_FAILED) ||
      (action.type === t.ORGANISATION_DELETE_LOADING) ||
      (action.type === t.ORGANISATION_DELETE_SUCCEED) ||
      (action.type === t.ORGANISATION_DELETE_FAILED)) {
    return reducerRequest(state, action);
  }

  if ((action.type === t.SELECT_ORGANISATION) ||
      (action.type === t.SELECT_ACCOUNT)) {
    return reducerSelectOrg(state, action);
  }

  if ((action.type === t.SAVE_NEW_ORGANISATION) ||
      (action.type === t.ADD_ACCOUNT_TO_NEW_ORGANISATION) ||
      (action.type === t.REMOVE_ACCOUNT_FROM_NEW_ORGANISATION) ||
      (action.type === t.UPDATE_NEW_ORGANISATION) ||
      (action.type === t.UPDATE_ACCOUNT_IN_NEW_ORGANISATION)) {
    return reducerNewOrg(state, action);
  }

  if ((action.type === t.ADD_ORGANISATION_FOR_UPDATE) ||
      (action.type === t.SAVE_UPDATED_ORGANISATION) ||
      (action.type === t.ADD_ACCOUNT_TO_UPDATE_ORGANISATION) ||
      (action.type === t.REMOVE_ACCOUNT_FROM_UPDATE_ORGANISATION) ||
      (action.type === t.UPDATE_EXISTING_ORGANISATION) ||
      (action.type === t.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION)) {
    return reducerRequest(state, action);
  }

  return state;
}