import { selectOrganisation, selectAccount } from './../actionCreatorsSelectOrg'

import * as t from './../../actionTypeList'

describe('Organisations actionCreatorsSelectOrg', () => {

  it(t.SELECT_ORGANISATION, () => {
    const index = 2;
    expect(selectOrganisation(index)).toEqual({
      type: t.SELECT_ORGANISATION,
      index: index,
    });
  })

  it(t.SELECT_ACCOUNT, () => {
    const index = 2;
    expect(selectAccount(index)).toEqual({
      type: t.SELECT_ACCOUNT,
      index: index,
    });
  })
})