import * as types from './../actionTypeList';

export function selectOrganisation(index) {
  return {
    type: types.SELECT_ORGANISATION,
    index: index,
  }
}

export function selectAccount(index) {
  return {
    type: types.SELECT_ACCOUNT,
    index: index,
  }
}
