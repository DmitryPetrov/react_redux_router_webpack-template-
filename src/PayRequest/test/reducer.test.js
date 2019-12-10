import { payRequestReducer } from './../reducer'
import * as t from './../actionTypeList'
import { PAY_REQUEST_PART_DATA, REQUEST } from './../initialState'


describe('PayRequest reducer', () => {
  it('PAY_REQUEST_UPDATE_DATA ', () => {
    const state = {}
    const action = {
      type: t.PAY_REQUEST_UPDATE_DATA,
      data: { someField: 'content' },
    };
    expect(payRequestReducer(state, action)).toEqual({
      data: { someField: action.data.someField }
    });
  })




  it ('UPDATE_PAY_REQUEST_PART_DATA', () => {
    const state = { data: { partPayments: [{ }] } };
    const action = {
      type: t.UPDATE_PAY_REQUEST_PART_DATA,
      index: 0,
      data: { someField: 'content' },
    };
    expect(payRequestReducer(state, action)).toEqual({
      data: {
        partPayments: [
          { someField: action.data.someField },
        ]
      },
    });
  })

  it ('REMOVE_PAY_REQUEST_PART partPayments.length=1', () => {
    const state = {
      data: {
        partPayments: [
          { someField: 'content' }
        ],
      },
    };
    const action = {
      type: t.REMOVE_PAY_REQUEST_PART,
      index: 0,
    };
    expect(payRequestReducer(state, action)).toEqual(state);    
  })

  it ('REMOVE_PAY_REQUEST_PART partPayments.length=3', () => {
    const state = {
      data: {
        partPayments: [
          {object0: 'object 0',},
          {object1: 'object 1',},
          {object2: 'object 2',},
        ],
      },
    };
    const action = {
      type: t.REMOVE_PAY_REQUEST_PART,
      index: 1,
    };
    expect(payRequestReducer(state, action)).toEqual({
      data: {
        partPayments: [
          state.data.partPayments[0],
          undefined,
          state.data.partPayments[2],
        ],
      },
    });    
  })

  it ('ADD_PAY_REQUEST_PART', () => {
    const state = {
      data: {
        partPayments: [
          {object0: 'object 0',},
          {object1: 'object 1',},
        ],
      },
    };
    const action = { type: t.ADD_PAY_REQUEST_PART };
    expect(payRequestReducer(state, action)).toEqual({
      data: {
        partPayments: [
          state.data.partPayments[0],
          state.data.partPayments[1],
          PAY_REQUEST_PART_DATA,
        ],
      },
    });    
  })




  it ('PAY_REQUEST_IS_LOADING', () => {
    const state = { request: {} };
    const action = {
        type: t.PAY_REQUEST_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSuccessed: false,
        message: 'Loading',
        response: null,
    };
    expect(payRequestReducer(state, action)).toEqual({
      request: {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSuccessed: action.isSuccessed,
        message: action.message,
        response: action.response,
      }
    });    
  })

  it ('PAY_REQUEST_SUCCESSED', () => {
    const state = { request: {} };
    const action = {
      type: t.PAY_REQUEST_SUCCESSED,
      isFail: false,
      isLoading: false,
      isSuccessed: true,
      message: 'Successed',
      response: "response",
    };
    expect(payRequestReducer(state, action)).toEqual({
      request: {
        isFail: action.isFail,
        isLoading: action.isLoading,
        isSuccessed: action.isSuccessed,
        message: action.message,
        response: action.response,
      }
    });    
  })

  it ('PAY_REQUEST_FAILED', () => {
    const state = { request: {} };
    const action = {
      type: t.PAY_REQUEST_FAILED,
      isFail: true,
      isLoading: false,
      isSuccessed: false,
      message: 'Failed',
      response: "errorMessage",
    };
    expect(payRequestReducer(state, action)).toEqual({
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