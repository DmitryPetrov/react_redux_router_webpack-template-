import { reducerRemoveOrg } from './../reducerRemoveOrg'
import * as t from './../../actionTypeList'

describe('Organisations reducerRemoveOrg', () => {

  it(t.REMOVE_ORGANISATION, () => {
    const state = {
      organisations: [
        { organisation: "org0" },
        { organisation: "org1" },
        { organisation: "org2" }
      ],
    }
    const action = {
      type: t.REMOVE_ORGANISATION,
      index: 1,
    };
    expect(reducerRemoveOrg(state, action)).toEqual({
      organisations: [
        state.organisations[0],
        undefined,
        state.organisations[2],
      ]
    });
  })

})