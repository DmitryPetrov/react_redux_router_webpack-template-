import * as types from './../actionTypeList';

export function removeOrganisation(index) {
  return {
    type: types.REMOVE_ORGANISATION,
    index: index,
  }
}

