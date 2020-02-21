import { reducerSelectOrg } from './../reducerSelectOrg'
import * as t from './../../actionTypeList'

describe('Organisations reducerSelectOrg', () => {

  it(t.SELECT_ORGANISATION, () => {
    const state = {
      organisations: [
        { organisation: "org0" },
        { organisation: "org1" }
      ],
      selectedOrg: {},
    }
    const action = {
      type: t.SELECT_ORGANISATION,
      index: 1,
    };
    expect(reducerSelectOrg(state, action)).toEqual({
      organisations: state.organisations,
      selectedOrg: { 
        org: state.organisations[action.index],
      },
    });
  })

  it(t.SELECT_ACCOUNT, () => {
    const state = {
      selectedOrg: {
        org: {
          accounts:[
            {account: "acc0"},
            {account: "acc1"}
          ]
        },
        acc: {}
      }
    }
    const action = {
      type: t.SELECT_ACCOUNT,
      index: 0,
    };
    expect(reducerSelectOrg(state, action)).toEqual({
      selectedOrg: { 
        org: state.selectedOrg.org,
        acc: state.selectedOrg.org.accounts[action.index]
      }
    });
  })

})