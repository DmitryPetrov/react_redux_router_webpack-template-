import * as types from './../actionTypeList';

export function addOrganisationForUpdate(index) {
  return {
    type: types.ADD_ORGANISATION_FOR_UPDATE,
    index: index,
  }
}

export function saveUpdatedOrganisation() {
  return {
    type: types.SAVE_UPDATED_ORGANISATION,
  }
}

export function addAccountToUpdateOrganisation(data) {
  return {
    type: types.ADD_ACCOUNT_TO_UPDATE_ORGANISATION,
    data: data,
  }
}

export function removeAccountFromUpdateOrganisation(index) {
  return {
    type: types.REMOVE_ACCOUNT_FROM_UPDATE_ORGANISATION,
    index: index,
  }
}

export function updateOrganisation(data) {
  return {
    type: types.UPDATE_ORGANISATION,
    data: data,
  }
}

export function updateAccountInUpdateOrganisation(data, index) {
  return {
    type: types.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION,
    data: data,
    index: index,
  }
}