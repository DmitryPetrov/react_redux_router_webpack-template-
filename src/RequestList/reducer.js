import * as types from './actionTypeList';

import { DOC_TYPE } from './initialState';

export function nextStepReducer(state = false, action) {
  if (action.type === types.NEXT_STEP_IS_LOADING) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSucceed: action.isSucceed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.NEXT_STEP_SUCCESSED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSucceed: action.isSucceed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.NEXT_STEP_FAILED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSucceed: action.isSucceed,
      message: action.message,
      response: action.response,
    });
  }
  return state;
}


export function docTypeReducer(state = false, action) {
  if (action.type === types.SET_DOC_TYPE) {
    let newState = Object.assign({}, state);
    newState.docTypes[action.index] = action.docType
    return newState;
  }

  if (action.type === types.ADD_DOC_TYPE) {
    let newState = Object.assign({}, state);
    newState.docTypes.push(DOC_TYPE);
    return newState;
  }
  
  if (action.type === types.REMOVE_DOC_TYPE) {
    let newState = Object.assign({}, state);

    let docTypeCount = 0;
    for (var i = 0; i < newState.docTypes.length; i++) {
      if(newState.docTypes[i] !== undefined){
        docTypeCount++;
      }
    }

    if (docTypeCount === 1) {
      return state;
    }

    delete newState.docTypes[action.index];
    return newState; 
  }
  return state;
}


export function requestListReducer(state = false, action) {
  if (action.type === types.REQUEST_LIST_IS_LOADING) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSucceed: action.isSucceed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.REQUEST_LIST_SUCCESSED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSucceed: action.isSucceed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.REQUEST_LIST_FAILED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSucceed: action.isSucceed,
      message: action.message,
      response: action.response,
    });
  }
  return state;
}