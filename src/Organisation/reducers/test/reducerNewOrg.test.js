import { reducerNewOrg } from './../reducerNewOrg'
import { EMPTY_ACC } from './../../initialState'

import * as t from './../../actionTypeList'

describe('Organisations reducerNewOrg', () => {

  it(t.SAVE_NEW_ORGANISATION, () => {
    const state = {
      organisations: [],
      newOrg: { someField: "content" },
    }
    const action = { type: t.SAVE_NEW_ORGANISATION };
    expect(reducerNewOrg(state, action)).toEqual({
      organisations: [state.newOrg],
      newOrg: state.newOrg,
    });
  })

  it(t.ADD_ACCOUNT_TO_NEW_ORGANISATION, () => {
    const state = {
      newOrg: {
        accounts: []
      }
    };
    const action = { type: t.ADD_ACCOUNT_TO_NEW_ORGANISATION };
    expect(reducerNewOrg(state, action)).toEqual({
      newOrg: {
        accounts: [EMPTY_ACC]
      },
    });
  })

  it(t.REMOVE_ACCOUNT_FROM_NEW_ORGANISATION, () => {
    const state = {
      newOrg: {
        accounts: [
          { account: "account1" },
          { account: "account2" },
        ]
      }
    };
    const action = {
      type: t.REMOVE_ACCOUNT_FROM_NEW_ORGANISATION,
      index: 0,
    };
    expect(reducerNewOrg(state, action)).toEqual({
      newOrg: {
        accounts: [
          undefined,
          state.newOrg.accounts[1]
        ]
      },
    });
  })

  it(t.UPDATE_NEW_ORGANISATION + " replace content", () => {
    const state = {
      newOrg: {
        someField: "content",
      }
    };
    const action = {
      type: t.UPDATE_NEW_ORGANISATION,
      data: { someField: "new content" },
    };
    expect(reducerNewOrg(state, action)).toEqual({
      newOrg: {
        someField: action.data.someField
      }
    });
  })

  it(t.UPDATE_NEW_ORGANISATION + " add content", () => {
    const state = {
      newOrg: {
        someField1: "content",
      }
    };
    const action = {
      type: t.UPDATE_NEW_ORGANISATION,
      data: { someField2: "new content" },
    };
    expect(reducerNewOrg(state, action)).toEqual({
      newOrg: {
        someField1: state.newOrg.someField1,
        someField2: action.data.someField2,
      }
    });
  })

  it(t.UPDATE_ACCOUNT_IN_NEW_ORGANISATION + " replace content", () => {
    const state = {
      newOrg: {
        accounts: [
          { someField: "content" },
        ]
      }
    };
    const action = {
      type: t.UPDATE_ACCOUNT_IN_NEW_ORGANISATION,
      index: 0,
      data: { someField: "new content" },
    };
    expect(reducerNewOrg(state, action)).toEqual({
      newOrg: {
        accounts: [
          action.data
        ]
      },
    });
  })

  it(t.UPDATE_ACCOUNT_IN_NEW_ORGANISATION + " add content", () => {
    const state = {
      newOrg: {
        accounts: [
          { someField1: "content" },
        ]
      }
    };
    const action = {
      type: t.UPDATE_ACCOUNT_IN_NEW_ORGANISATION,
      index: 0,
      data: { someField2: "new content" },
    };
    expect(reducerNewOrg(state, action)).toEqual({
      newOrg: {
        accounts: [
          {
            someField1: state.newOrg.accounts[0].someField1,
            someField2: action.data.someField2,
          }
        ]
      },
    });
  })

})