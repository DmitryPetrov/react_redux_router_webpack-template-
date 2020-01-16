import axios from 'axios'

import { payRequestRequest, PAY_REQUEST_URL } from './../actionCreatorList'
import * as t from './../actionTypeList'

"use strict";

require('babel-register');
require('babel-polyfill');

jest.mock('axios');

describe('PayRequest actionCreatorList async test', () => {

  it('payRequestRequest axios resolve', async () => {
    const response = { data: 'content' };
    axios.post.mockImplementation(() => Promise.resolve(response));
    const dispatchMock = jest.fn();

    await payRequestRequest("", {})(dispatchMock);

    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.PAY_REQUEST_SUCCESSED,
      isFail: false,
      isLoading: false,
      isSucceed: true,
      message: 'Succeed',
      response: response.data,
    });

  })

  it('payRequestRequest axios reject', async () => {
    const error = { message: 'content' }
    axios.post.mockImplementation(() => Promise.reject(error));
    const dispatchMock = jest.fn();

    await payRequestRequest("", {})(dispatchMock);

    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.PAY_REQUEST_FAILED,
      isFail: true,
      isLoading: false,
      isSucceed: false,
      message: 'Failed',
      response: error.message,
    }); 
  })
})