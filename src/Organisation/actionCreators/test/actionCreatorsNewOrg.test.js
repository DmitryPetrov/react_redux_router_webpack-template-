import { saveNewOrganisation } from './../actionCreatorsNewOrg'
import { addAccountToNewOrganisation, removeAccountFromNewOrganisation } from './../actionCreatorsNewOrg'
import { updateNewOrganisation, updateAccountInNewOrganisation } from './../actionCreatorsNewOrg'

import * as t from './../../actionTypeList'

describe('Organisations actionCreatorList', () => {
  
  it(t.SAVE_NEW_ORGANISATION, () => {
    expect(saveNewOrganisation()).toEqual({
      type: t.SAVE_NEW_ORGANISATION,
    });
  })

  it(t.ADD_ACCOUNT_TO_NEW_ORGANISATION, () => {
    expect(addAccountToNewOrganisation()).toEqual({
      type: t.ADD_ACCOUNT_TO_NEW_ORGANISATION,
    });
  })

  it(t.REMOVE_ACCOUNT_FROM_NEW_ORGANISATION, () => {
    const index = 3;
    expect(removeAccountFromNewOrganisation(index)).toEqual({
      type: t.REMOVE_ACCOUNT_FROM_NEW_ORGANISATION,
      index: index,
    });
  })

  it(t.UPDATE_NEW_ORGANISATION, () => {
    const data = { someField: 'content' };
    expect(updateNewOrganisation(data)).toEqual({
      type: t.UPDATE_NEW_ORGANISATION,
      data: data,
    });
  })

  it(t.UPDATE_ACCOUNT_IN_NEW_ORGANISATION, () => {
    const index = 2;
    const data = { someField: 'content' };
    expect(updateAccountInNewOrganisation(data, index)).toEqual({
      type: t.UPDATE_ACCOUNT_IN_NEW_ORGANISATION,
      data: data,
      index: index,
    });
  })

})