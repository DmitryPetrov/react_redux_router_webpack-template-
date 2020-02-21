import { addOrganisationForUpdate, saveUpdatedOrganisation } from './../actionCreatorsUpdateOrg'
import { addAccountToUpdateOrganisation, removeAccountFromUpdateOrganisation } from './../actionCreatorsUpdateOrg'
import { updateExistingOrganisation, updateAccountInUpdateOrganisation } from './../actionCreatorsUpdateOrg'

import * as t from './../../actionTypeList'

describe('Organisations actionCreatorList', () => {

  it(t.ADD_ORGANISATION_FOR_UPDATE, () => {
    const index = 3;
    expect(addOrganisationForUpdate(index)).toEqual({
      type: t.ADD_ORGANISATION_FOR_UPDATE,
      index: index,
    });
  })

  it(t.SAVE_UPDATED_ORGANISATION, () => {
    expect(saveUpdatedOrganisation()).toEqual({
      type: t.SAVE_UPDATED_ORGANISATION,
    });
  })

  it(t.ADD_ACCOUNT_TO_UPDATE_ORGANISATION, () => {
    const data = {someField: "content"};
    expect(addAccountToUpdateOrganisation(data)).toEqual({
      type: t.ADD_ACCOUNT_TO_UPDATE_ORGANISATION,
      data: data,
    });
  })

  it(t.REMOVE_ACCOUNT_FROM_UPDATE_ORGANISATION, () => {
    const index = 2;
    expect(removeAccountFromUpdateOrganisation(index)).toEqual({
      type: t.REMOVE_ACCOUNT_FROM_UPDATE_ORGANISATION,
      index: index,
    });
  })

  it(t.UPDATE_EXISTING_ORGANISATION, () => {
    const data = { someField: 'content' };
    expect(updateExistingOrganisation(data)).toEqual({
      type: t.UPDATE_EXISTING_ORGANISATION,
      data: data,
    });
  })

  it(t.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION, () => {
    const index = 0;
    const data = { someField: 'content' };
    expect(updateAccountInUpdateOrganisation(data, index)).toEqual({
      type: t.UPDATE_ACCOUNT_IN_UPDATE_ORGANISATION,
      data: data,
      index: index,
    });
  })
  
})