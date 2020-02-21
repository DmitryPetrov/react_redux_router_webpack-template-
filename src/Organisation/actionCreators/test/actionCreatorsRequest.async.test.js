import axios from 'axios'

import { getOrganisations, postOrganisations } from './../actionCreatorsRequest'
import { putOrganisations, deleteOrganisations } from './../actionCreatorsRequest'
import * as t from './../../actionTypeList'

"use strict";

require('babel-register');
require('babel-polyfill');

jest.mock('axios');

describe('Orgs actionCreatorList async test', () => {

  // GET succeed test
  it('getOrgs axios resolve', async () => {
    // given
    const response = { data: 'content' };
    axios.get.mockImplementation(() => Promise.resolve(response));
    const dispatchMock = jest.fn();

    // when
    await getOrganisations()(dispatchMock);

    // then
    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.ORGANISATIONS_GET_SUCCEED,
      isFail: false,
      isLoading: false,
      isSucceed: true,
      message: 'Succeed',
      response: response.data,
    });
  })
  // GET failed test
  it('getOrgs axios reject', async () => {
    // given
    const error = { message: 'content' }
    axios.get.mockImplementation(() => Promise.reject(error));
    const dispatchMock = jest.fn();

    // when
    await getOrganisations()(dispatchMock);

    // then
    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.ORGANISATIONS_GET_FAILED,
      isFail: true,
      isLoading: false,
      isSucceed: false,
      message: 'Failed',
      response: error.message,
    }); 
  })



  // POST succeed test
  it('postOrgs axios resolve', async () => {
    // given
    const response = { data: 'content' };
    axios.post.mockImplementation(() => Promise.resolve(response));
    const dispatchMock = jest.fn();

    // when
    await postOrganisations({})(dispatchMock);

    // then
    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.ORGANISATION_POST_SUCCEED,
      isFail: false,
      isLoading: false,
      isSucceed: true,
      message: 'Succeed',
      response: response.data,
    });
  })
  // POST failed test
  it('postOrgs axios reject', async () => {
    // given
    const error = { message: 'content' }
    axios.post.mockImplementation(() => Promise.reject(error));
    const dispatchMock = jest.fn();

    // when
    await postOrganisations({})(dispatchMock);

    // then
    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.ORGANISATION_POST_FAILED,
      isFail: true,
      isLoading: false,
      isSucceed: false,
      message: 'Failed',
      response: error.message,
    }); 
  })



  // PUT succeed test
  it('putOrgs axios resolve', async () => {
    // given
    const response = { data: 'content' };
    axios.put.mockImplementation(() => Promise.resolve(response));
    const dispatchMock = jest.fn();

    // when
    await putOrganisations({})(dispatchMock);

    // then
    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.ORGANISATION_PUT_SUCCEED,
      isFail: false,
      isLoading: false,
      isSucceed: true,
      message: 'Succeed',
      response: response.data,
    });
  })
  // PUT failed test
  it('putOrgs axios reject', async () => {
    // given
    const error = { message: 'content' }
    axios.put.mockImplementation(() => Promise.reject(error));
    const dispatchMock = jest.fn();

    // when
    await putOrganisations({})(dispatchMock);

    // then
    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.ORGANISATION_PUT_FAILED,
      isFail: true,
      isLoading: false,
      isSucceed: false,
      message: 'Failed',
      response: error.message,
    }); 
  })



  // DELETE succeed test
  it('deleteOrgs axios resolve', async () => {
    // given
    const response = { data: 'content' };
    axios.delete.mockImplementation(() => Promise.resolve(response));
    const dispatchMock = jest.fn();

    // when
    await deleteOrganisations({})(dispatchMock);

    // then
    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.ORGANISATION_DELETE_SUCCEED,
      isFail: false,
      isLoading: false,
      isSucceed: true,
      message: 'Succeed',
      response: response.data,
    });
  })
  // DELETE failed test
  it('deleteOrgs axios reject', async () => {
    // given
    const error = { message: 'content' }
    axios.delete.mockImplementation(() => Promise.reject(error));
    const dispatchMock = jest.fn();

    // when
    await deleteOrganisations({})(dispatchMock);

    // then
    expect(dispatchMock.mock.calls.length).toBe(2);
    expect(dispatchMock.mock.calls[1][0]).toEqual({
      type: t.ORGANISATION_DELETE_FAILED,
      isFail: true,
      isLoading: false,
      isSucceed: false,
      message: 'Failed',
      response: error.message,
    }); 
  })
})