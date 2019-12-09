import { statementRequestReducer } from './../reducer'
import * as t from './../actionTypeList'
import { ACCOUT_DATA, REQUEST } from './../initialState'


describe('PayRequest reducer', () => {
  it('STATMENT_REQUEST_UPDATE_DATA ', () => {
    const state = {}
    const action = {
      type: t.STATMENT_REQUEST_UPDATE_DATA,
      data: { someField: 'content' },
    };
    expect(statementRequestReducer(state, action)).toEqual({
      data: { someField: action.data.someField }
    });
  })




  it ('UPDATE_ACCOUNT_DATA', () => {
    const state = { data: { accounts: [{ }] } };
    const action = {
      type: t.UPDATE_ACCOUNT_DATA,
      index: 0,
      data: { someField: 'content' },
    };
    expect(statementRequestReducer(state, action)).toEqual({
      data: {
        accounts: [
          { someField: action.data.someField },
        ]
      },
    });
  })

  it ('REMOVE_ACCOUNT accounts.length=1', () => {
    const state = {
      data: {
        accounts: [
          { someField: 'content' }
        ],
      },
    };
    const action = {
      type: t.REMOVE_ACCOUNT,
      index: 0,
    };
    expect(statementRequestReducer(state, action)).toEqual(state);    
  })

  it ('REMOVE_ACCOUNT accounts.length=3', () => {
    const state = {
      data: {
        accounts: [
          {object0: 'object 0',},
          {object1: 'object 1',},
          {object2: 'object 2',},
        ],
      },
    };
    const action = {
      type: t.REMOVE_ACCOUNT,
      index: 1,
    };
    expect(statementRequestReducer(state, action)).toEqual({
      data: {
        accounts: [
          state.data.accounts[0],
          undefined,
          state.data.accounts[2],
        ],
      },
    });    
  })

  it ('ADD_ACCOUNT', () => {
    const state = {
      data: {
        accounts: [
          {object0: 'object 0',},
          {object1: 'object 1',},
        ],
      },
    };
    const action = { type: t.ADD_ACCOUNT };
    expect(statementRequestReducer(state, action)).toEqual({
      data: {
        accounts: [
          state.data.accounts[0],
          state.data.accounts[1],
          ACCOUT_DATA,
        ],
      },
    });    
  })




  it ('STATMENT_REQUEST_IS_LOADING', () => {
    const state = { request: {} };
    const action = {
        type: t.STATMENT_REQUEST_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSuccessed: false,
        message: 'Loading',
        response: null,
    };
    expect(statementRequestReducer(state, action)).toEqual({
      request: {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSuccessed: action.isSuccessed,
        message: action.message,
        response: action.response,
      }
    });    
  })

  it ('STATMENT_REQUEST_SUCCESSED', () => {
    const state = { request: {} };
    const action = {
      type: t.STATMENT_REQUEST_SUCCESSED,
      isFail: false,
      isLoading: false,
      isSuccessed: true,
      message: 'Successed',
      response: "response",
    };
    expect(statementRequestReducer(state, action)).toEqual({
      request: {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSuccessed: action.isSuccessed,
        message: action.message,
        response: action.response,
      }
    });    
  })

  it ('STATMENT_REQUEST_FAILED', () => {
    const state = { request: {} };
    const action = {
      type: t.STATMENT_REQUEST_FAILED,
      isFail: true,
      isLoading: false,
      isSuccessed: false,
      message: 'Failed',
      response: "errorMessage",
    };
    expect(statementRequestReducer(state, action)).toEqual({
      request: {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSuccessed: action.isSuccessed,
        message: action.message,
        response: action.response,
      }
    });    
  })

})