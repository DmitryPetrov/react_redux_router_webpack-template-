import axios from 'axios'

import { statementRequestRequest, STATEMENT_REQUEST_URL } from './../actionCreatorList'
import * as t from './../actionTypeList'

"use strict";

require('babel-register');
require('babel-polyfill');

jest.mock('axios');

describe('StatementRequest actionCreatorList async test', () => {

  it('statementRequestRequest axios resolve', async () => {
    const response = { data: 'content' };
    axios.post.mockImplementation(() => Promise.resolve(response));
    const dispatchMock = jest.fn();

    await statementRequestRequest({})(dispatchMock);

    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.STATMENT_REQUEST_SUCCESSED,
      isFail: false,
      isLoading: false,
      isSucceed: true,
      message: 'Succeed',
      response: response.data,
    });

  })

  it('statementRequestRequest axios reject', async () => {
    const error = { message: 'content' }
    axios.post.mockImplementation(() => Promise.reject(error));
    const dispatchMock = jest.fn();

    await statementRequestRequest({})(dispatchMock);

    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.STATMENT_REQUEST_FAILED,
      isFail: true,
      isLoading: false,
      isSucceed: false,
      message: 'Failed',
      response: error.message,
    }); 
  })
})