import * as types from './../actionTypeList';
import { requestIsLoading, requestSucceed, requestFailed } from './actionCreatorsResponse';
import axios from 'axios';

import { REST_API } from './../../globalInitialState';

export function getOrganisations() {
  return (dispatch) => {
    dispatch(requestIsLoading(types.ORGANISATIONS_GET_LOADING));
    axios
      .get(REST_API.organisations)
      .then(
      	response => dispatch(requestSucceed(types.ORGANISATIONS_GET_SUCCEED, response.data)),
      	error => dispatch(requestFailed(types.ORGANISATIONS_GET_FAILED, error.message))
      );
  };
}

export function postOrganisation(requestBody) {
  return (dispatch) => {
    dispatch(requestIsLoading(types.ORGANISATION_POST_LOADING));
    axios
      .post(REST_API.organisations, requestBody)
      .then(
      	response => dispatch(requestSucceed(types.ORGANISATION_POST_SUCCEED, response.data)),
      	error => dispatch(requestFailed(types.ORGANISATION_POST_FAILED, error.message))
      );
  };
}

export function putOrganisation(requestBody, id) {
  return (dispatch) => {
    dispatch(requestIsLoading(types.ORGANISATION_PUT_LOADING));
    axios
      .put(REST_API.organisations + "/" + id, requestBody)
      .then(
      	response => dispatch(requestSucceed(types.ORGANISATION_PUT_SUCCEED, response.data)),
      	error => dispatch(requestFailed(types.ORGANISATION_PUT_FAILED, error.message))
      );
  };
}

export function deleteOrganisation(id) {
  return (dispatch) => {
    dispatch(requestIsLoading(types.ORGANISATION_DELETE_LOADING));
    axios
      .delete(REST_API.organisations + "/" + id)
      .then(
      	response => dispatch(requestSucceed(types.ORGANISATION_DELETE_SUCCEED, response.data)),
      	error => dispatch(requestFailed(types.ORGANISATION_DELETE_FAILED, error.message))
      );
  };
}