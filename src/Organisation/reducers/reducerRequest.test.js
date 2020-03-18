import { organisationReducer } from './reducer'
import * as t from './../actionTypeList'
import { ORGANISATIONS, REQUEST } from './../initialState'

function getLoadingAction(type) {
  return {
      type: type,
      isFail: false,
      isLoading: true,
      isSucceed: false,
      message: 'Loading',
      response: null,
  };
}

function getSucceedAction(type) {
  return {
    type: type,
    isFail: false,
    isLoading: false,
    isSucceed: true,
    message: 'Succeed',
    response: "response",
  };
}

function getFailedAction(type) {
  return {
    type: type,
    isFail: true,
    isLoading: false,
    isSucceed: false,
    message: 'Failed',
    response: "errorMessage",
  }
}

function getExpectedState(action) {
  return {
    request: {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSucceed: action.isSucceed,
      message: action.message,
      response: action.response,
    }
  }
}

describe('Organisations reducer', () => {

  it (t.ORGANISATIONS_GET_LOADING, () => {
    const state = { request: {} };
    const action = getLoadingAction(t.ORGANISATIONS_GET_LOADING);
    const expectedState = getExpectedState(action)
    expect(organisationReducer(state, action)).toEqual(expectedState);    
  })
  it (t.ORGANISATION_POST_LOADING, () => {
    const state = { request: {} };
    const action = getLoadingAction(t.ORGANISATION_POST_LOADING);
    const expectedState = getExpectedState(action)
    expect(organisationReducer(state, action)).toEqual(expectedState);     
  })
  it (t.ORGANISATION_PUT_LOADING, () => {
    const state = { request: {} };
    const action = getLoadingAction(t.ORGANISATION_PUT_LOADING);
    const expectedState = getExpectedState(action)
    expect(organisationReducer(state, action)).toEqual(expectedState);     
  })
  it (t.ORGANISATION_DELETE_LOADING, () => {
    const state = { request: {} };
    const action = getLoadingAction(t.ORGANISATION_DELETE_LOADING);
    const expectedState = getExpectedState(action)
    expect(organisationReducer(state, action)).toEqual(expectedState);     
  })



  it (t.ORGANISATIONS_GET_SUCCEED, () => {
    const state = { request: {} };
    const action = getSucceedAction(t.ORGANISATIONS_GET_SUCCEED);
    const expectedState = getExpectedState(action);
    expect(organisationReducer(state, action)).toEqual(expectedState);    
  })
  it (t.ORGANISATION_POST_SUCCEED, () => {
    const state = { request: {} };
    const action = getSucceedAction(t.ORGANISATION_POST_SUCCEED);
    const expectedState = getExpectedState(action);
    expect(organisationReducer(state, action)).toEqual(expectedState);    
  })
  it (t.ORGANISATION_PUT_SUCCEED, () => {
    const state = { request: {} };
    const action = getSucceedAction(t.ORGANISATION_PUT_SUCCEED);
    const expectedState = getExpectedState(action);
    expect(organisationReducer(state, action)).toEqual(expectedState);    
  })
  it (t.ORGANISATION_DELETE_SUCCEED, () => {
    const state = { request: {} };
    const action = getSucceedAction(t.ORGANISATION_DELETE_SUCCEED);
    const expectedState = getExpectedState(action);
    expect(organisationReducer(state, action)).toEqual(expectedState);    
  })

  

  it (t.ORGANISATIONS_GET_FAILED, () => {
    const state = { request: {} };
    const action = getFailedAction(t.ORGANISATIONS_GET_FAILED);
    const expectedState = getExpectedState(action);
    expect(organisationReducer(state, action)).toEqual(expectedState);  
  })
  it (t.ORGANISATION_POST_FAILED, () => {
    const state = { request: {} };
    const action = getFailedAction(t.ORGANISATION_POST_FAILED);
    const expectedState = getExpectedState(action);
    expect(organisationReducer(state, action)).toEqual(expectedState);  
  })
  it (t.ORGANISATION_PUT_FAILED, () => {
    const state = { request: {} };
    const action = getFailedAction(t.ORGANISATION_PUT_FAILED);
    const expectedState = getExpectedState(action);
    expect(organisationReducer(state, action)).toEqual(expectedState);  
  })
  it (t.ORGANISATION_DELETE_FAILED, () => {
    const state = { request: {} };
    const action = getFailedAction(t.ORGANISATION_DELETE_FAILED);
    const expectedState = getExpectedState(action);
    expect(organisationReducer(state, action)).toEqual(expectedState);  
  })

})