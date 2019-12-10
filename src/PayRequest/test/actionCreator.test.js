import { updateData } from './../actionCreatorList'
import { updatePayRequestPartData, addPayRequestPart, removePayRequestPart } from './../actionCreatorList'
import { payRequestIsLoading, payRequestSuccessed, payRequestFailed } from './../actionCreatorList'
import * as t from './../actionTypeList'
import { PAY_REQUEST_PART_DATA, REQUEST } from './../initialState'

describe('PayRequest actionCreatorList', () => {
  it('PAY_REQUEST_UPDATE_DATA ', () => {
    const data = { someField: 'content' };
    expect(updateData(data)).toEqual({
    	type: t.PAY_REQUEST_UPDATE_DATA,
      data: data,
    });
  })



  it('UPDATE_PAY_REQUEST_PART_DATA ', () => {
    const data = { someField: 'content' };
    const index = 5;
    expect(updatePayRequestPartData(data, index)).toEqual({
    	type: t.UPDATE_PAY_REQUEST_PART_DATA,
      data: data,
      index: index,
    });
  })

  it('ADD_PAY_REQUEST_PART ', () => {
    expect(addPayRequestPart()).toEqual({
    	type: t.ADD_PAY_REQUEST_PART,
    });
  })

  it('REMOVE_PAY_REQUEST_PART ', () => {
    const index = 5;
    expect(removePayRequestPart(index)).toEqual({
    	type: t.REMOVE_PAY_REQUEST_PART,
      index: index,
    });
  })



  it('PAY_REQUEST_IS_LOADING ', () => {
    expect(payRequestIsLoading()).toEqual({
    	type: t.PAY_REQUEST_IS_LOADING,
			isFail: false,
			isLoading: true,
			isSuccessed: false,
			message: 'Loading',
			response: null,
    });
  })

  it('PAY_REQUEST_SUCCESSED ', () => {
    const response = 'content';
    expect(payRequestSuccessed(response)).toEqual({
    	type: t.PAY_REQUEST_SUCCESSED,
      isFail: false,
			isLoading: false,
			isSuccessed: true,
			message: 'Successed',
			response: response,
    });
  })

  it('PAY_REQUEST_FAILED ', () => {
    const errorMessage = { someField: 'content' };
    expect(payRequestFailed(errorMessage)).toEqual({
    	type: t.PAY_REQUEST_FAILED,
			isFail: true,
			isLoading: false,
			isSuccessed: false,
			message: 'Failed',
			response: errorMessage,
    });
  })

})