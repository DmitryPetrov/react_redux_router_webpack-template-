import * as types from './../actionTypeList';
import { docTypeData } from './../initialState'

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