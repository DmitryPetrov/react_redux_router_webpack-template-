import { updateData } from './../actionCreatorList'
import { updateAccountData, addAccount, removeAccount } from './../actionCreatorList'
import { statementRequestIsLoading, statementRequestSucceed, statementRequestFailed } from './../actionCreatorList'
import * as t from './../actionTypeList'
import { ACCOUT_DATA, REQUEST } from './../initialState'

describe('PayRequest actionCreatorList', () => {
  it('STATMENT_REQUEST_UPDATE_DATA ', () => {
    const data = { someField: 'content' };
    expect(updateData(data)).toEqual({
    	type: t.STATMENT_REQUEST_UPDATE_DATA,
      data: data,
    });
  })



  it('UPDATE_ACCOUNT_DATA ', () => {
    const data = { someField: 'content' };
    const index = 5;
    expect(updateAccountData(data, index)).toEqual({
    	type: t.UPDATE_ACCOUNT_DATA,
      data: data,
      index: index,
    });
  })

  it('ADD_ACCOUNT ', () => {
    expect(addAccount()).toEqual({
    	type: t.ADD_ACCOUNT,
    });
  })

  it('REMOVE_ACCOUNT ', () => {
    const index = 5;
    expect(removeAccount(index)).toEqual({
    	type: t.REMOVE_ACCOUNT,
      index: index,
    });
  })



  it('STATMENT_REQUEST_IS_LOADING ', () => {
    expect(statementRequestIsLoading()).toEqual({
    	type: t.STATMENT_REQUEST_IS_LOADING,
			isFail: false,
			isLoading: true,
			isSucceed: false,
			message: 'Loading',
			response: null,
    });
  })

  it('STATMENT_REQUEST_SUCCESSED ', () => {
    const response = 'content';
    expect(statementRequestSucceed(response)).toEqual({
    	type: t.STATMENT_REQUEST_SUCCESSED,
      isFail: false,
			isLoading: false,
			isSucceed: true,
			message: 'Succeed',
			response: response,
    });
  })

  it('STATMENT_REQUEST_FAILED ', () => {
    const errorMessage = { someField: 'content' };
    expect(statementRequestFailed(errorMessage)).toEqual({
    	type: t.STATMENT_REQUEST_FAILED,
			isFail: true,
			isLoading: false,
			isSucceed: false,
			message: 'Failed',
			response: errorMessage,
    });
  })

})