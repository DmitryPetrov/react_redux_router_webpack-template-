import * as types from './../actionTypeList';

export function reducerRemoveOrg(state = false, action) {
  
  if (action.type === types.REMOVE_ORGANISATION) {
    let newState = Object.assign({}, state);
    delete newState.organisations[action.index];
    return newState;
  }

}