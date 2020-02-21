import * as types from './../actionTypeList';

export function saveNewOrganisation() {
  return {
    type: types.SAVE_NEW_ORGANISATION,
  }
}

export function addAccountToNewOrganisation() {
  return {
    type: types.ADD_ACCOUNT_TO_NEW_ORGANISATION,
  }
}

export function removeAccountFromNewOrganisation(index) {
  return {
    type: types.REMOVE_ACCOUNT_FROM_NEW_ORGANISATION,
    index: index,
  }
}

export function updateNewOrganisation(data) {
  return {
    type: types.UPDATE_NEW_ORGANISATION,
    data: data,
  }
}

export function updateAccountInNewOrganisation(data, index) {
  return {
    type: types.UPDATE_ACCOUNT_IN_NEW_ORGANISATION,
    data: data,
    index: index,
  }
}
