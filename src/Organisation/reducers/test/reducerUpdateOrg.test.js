import { reducerUpdateOrg } from './../reducerUpdateOrg'
import { EMPTY_ACC } from './../../initialState'

import * as t from './../../actionTypeList'

describe('Organisations reducerUpdateOrg', () => {

  it(t.SAVE_UPDATED_ORGANISATION, () => {
    const state = {
      organisations: [
        {org0: "org0"},
        {org1: "org1"},
        {org2: "org2"},
      ],
      orgForUpdate: { 
        someField: "content",
        index: 2,
      }
    }
    const action = { type: t.SAVE_UPDATED_ORGANISATION };
    expect(reducerUpdateOrg(state, action)).toEqual({
      organisations: [
        state.organisations[0], 
        state.organisations[1], 
        state.orgForUpdate
      ],
      orgForUpdate: state.orgForUpdate,
    });
  })

  it(t.ADD_ORGANISATION_FOR_UPDATE, () => {
    const state = {
      organisations: [ { someField: "content" } ],
      orgForUpdate: {}
    };
    const action = { 
      type: t.ADD_ORGANISATION_FOR_UPDATE,
      index: 0,
    };
    expect(reducerUpdateOrg(state, action)).toEqual({
      organisations: state.organisations,
      orgForUpdate:  Object.assign({}, state.organisations[action.index], {index: action.index})
    });
  })

  it(t.ADD_ACCOUNT_TO_UPDATE_ORGANISATION, () => {
    const state = {
      orgForUpdate: {
        accounts: []
      }
    };
    const action = { type: t.ADD_ACCOUNT_TO_UPDATE_ORGANISATION };
    expect(reducerUpdateOrg(state, action)).toEqual({
      orgForUpdate: {
        accounts: [EMPTY_ACC]
      },
    });
  })
  
  it(t.REMOVE_ACCOUNT_FROM_UPDATE_ORGANISATION, () => {
    const state = {
      orgForUpdate: {
        accounts: [
          { account: "account1" },
          { account: "account2" },
        ]
      }
    };
    const action = {
      type: t.REMOVE_ACCOUNT_FROM_UPDATE_ORGANISATION,
      index: 0,
    };
    expect(reducerUpdateOrg(state, action)).toEqual({
      orgForUpdate: {
        accounts: [
          undefined,
          state.orgForUpdate.accounts[1]
        ]
      },
    });
  })

  it(t.UPDATE_EXISTING_ORGANISATION + " replace content", () => {
    const state = {
      orgForUpdate: {
        someField: "content",
      }
    };
    const action = {
      type: t.UPDATE_EXISTING_ORGANISATION,
      data: { someField: "new content" },
    };
    expect(reducerUpdateOrg(state, action)).toEqual({
      orgForUpdate: {
        someField: action.data.someField
      }
    });
  })

  it(t.UPDATE_EXISTING_ORGANISATION + " add content", () => {
    const state = {
      orgForUpdate: {
        someField1: "content",
      }
    };
    const action = {
      type: t.UPDATE_EXISTING_ORGANISATION,
      data: { someField2: "new content" },
    };
    expect(reducerUpdateOrg(state, action)).toEqual({
      orgForUpdate: {
        someField1: state.orgForUpdate.someField1,
        someField2: action.data.someField2,
      }
    });
  })

  it(t.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION + " replace content", () => {
    const state = {
      orgForUpdate: {
        accounts: [
          { someField: "content" },
        ]
      }
    };
    const action = {
      type: t.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION,
      index: 0,
      data: { someField: "new content" },
    };
    expect(reducerUpdateOrg(state, action)).toEqual({
      orgForUpdate: {
        accounts: [
          action.data
        ]
      },
    });
  })

  it(t.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION + " add content", () => {
    const state = {
      orgForUpdate: {
        accounts: [
          { someField1: "content" },
        ]
      }
    };
    const action = {
      type: t.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION,
      index: 0,
      data: { someField2: "new content" },
    };
    expect(reducerUpdateOrg(state, action)).toEqual({
      orgForUpdate: {
        accounts: [
          {
            someField1: state.orgForUpdate.accounts[0].someField1,
            someField2: action.data.someField2,
          }
        ]
      },
    });
  })

})