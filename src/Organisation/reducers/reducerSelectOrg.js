import * as types from './../actionTypeList';

export function reducerSelectOrg(state = false, action) {

  if (action.type === types.SELECT_ORGANISATION) {
    const organisation = state.organisations[action.index];
    let newState = Object.assign({}, state);
    newState.selectedOrg.org = Object.assign({}, organisation);
    return newState;
  }

  if (action.type === types.SELECT_ACCOUNT) {
    const account = state.selectedOrg.org.accounts[action.index];
    let newState = Object.assign({}, state);
    newState.selectedOrg.acc = Object.assign({}, account);
    return newState;
  }

}