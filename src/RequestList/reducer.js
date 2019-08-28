import * as types from './actionTypeList';

export function nextStepReducer(state = false, action) {
  if (action.type === types.NEXT_STEP_IS_LOADING) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.NEXT_STEP_SUCCESSED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.NEXT_STEP_FAILED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }
  return state;
}


const docTypeData = {docType: '(initialState)'};
export function docTypeReducer(state = false, action) {
  if (action.type === types.SET_DOC_TYPE) {
    let index = action.index;
    let newState = Object.assign({}, state);
    newState.docTypes[index] = action.docType
    return newState;
  }

  if (action.type === types.ADD_DOC_TYPE) {
    let newDocType = Object.assign({}, docTypeData);
    let newState =  Object.assign({}, state);
    newState.docTypes.push(newDocType.docType);
    return newState;
  }
  
  if (action.type === types.REMOVE_DOC_TYPE) {
    let newState = Object.assign({}, state);

    let docTypeCount = 0;
    newState.docTypes.filter((item) => {
      if(item !== undefined){
        docTypeCount++;
      }
      return 1;
    });

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
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.REQUEST_LIST_SUCCESSED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.REQUEST_LIST_FAILED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }
  return state;
}