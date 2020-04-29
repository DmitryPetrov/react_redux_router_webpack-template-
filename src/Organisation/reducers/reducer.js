import * as t from './../actionTypeList';

export function organisationReducer(state = false, action) {

  if ((action.type === t.ORGANISATIONS_GET_LOADING) ||
        (action.type === t.ORGANISATION_POST_LOADING) ||
        (action.type === t.ORGANISATION_PUT_LOADING) ||
        (action.type === t.ORGANISATION_DELETE_LOADING)) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSucceed: action.isSucceed,
        message: action.message,
        response: action.response,
      }
    return newState;
  }

  if ((action.type === t.ORGANISATIONS_GET_SUCCEED) ||
        (action.type === t.ORGANISATION_POST_SUCCEED) ||
        (action.type === t.ORGANISATION_PUT_SUCCEED) ||
        (action.type === t.ORGANISATION_DELETE_SUCCEED)) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSucceed: action.isSucceed,
        message: action.message,
        response: action.response,
      }
    newState.organisations = action.response.organisations;
    return newState;
  }

  if ((action.type === t.ORGANISATIONS_GET_FAILED) ||
        (action.type === t.ORGANISATION_POST_FAILED) ||
        (action.type === t.ORGANISATION_PUT_FAILED) ||
        (action.type === t.ORGANISATION_DELETE_FAILED)) {
    let newState = Object.assign({}, state);
    newState.request = 
      {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSucceed: action.isSucceed,
        message: action.message,
        response: action.response,
      }
    return newState;
  }

  if (action.type === t.SELECT_ORGANISATION) {
    const organisation = state.organisations[action.index];
    let newState = Object.assign({}, state);
    newState.selectedOrg.org = Object.assign({}, organisation);
    return newState;
  }

  if (action.type === t.SELECT_ACCOUNT) {
    const account = state.selectedOrg.org.accounts[action.index];
    let newState = Object.assign({}, state);
    newState.selectedOrg.acc = Object.assign({}, account);
    return newState;
  }


  return state;
}