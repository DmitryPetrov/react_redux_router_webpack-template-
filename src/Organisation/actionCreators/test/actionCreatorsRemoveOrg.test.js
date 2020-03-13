import { removeOrganisation } from './../actionCreatorsRemoveOrg'

import * as t from './../../actionTypeList'

describe('Organisations actionCreatorsRemoveOrg', () => {

  it(t.REMOVE_ORGANISATION, () => {
    const index = 2;
    expect(removeOrganisation(index)).toEqual({
      type: t.REMOVE_ORGANISATION,
      index: index,
    });
  })

})