import { requestIsLoading, requestSucceed, requestFailed } from './../actionCreatorsResponse'
import * as t from './../../actionTypeList'

describe('Organisations actionCreatorList', () => {

  it("requestIsLoading ", () => {
    const type = "test_type";
    expect(requestIsLoading(type)).toEqual({
    	type: type,
			isFail: false,
			isLoading: true,
			isSucceed: false,
			message: 'Loading',
			response: null,
    });
  })

  it("requestSucceed ", () => {
    const type = "test_type";
    const response = {response: "content"};
    expect(requestSucceed(type, response)).toEqual({
      type: type,
      isFail: false,
      isLoading: false,
      isSucceed: true,
      message: 'Succeed',
      response: response,
    });
  })

  it("requestFailed ", () => {
    const type = "test_type";
    const errorMessage = {someField: "content"};
    expect(requestFailed(type, errorMessage)).toEqual({
      type: type,
      isFail: true,
      isLoading: false,
      isSucceed: false,
      message: 'Failed',
      response: errorMessage,
    });
  })

})