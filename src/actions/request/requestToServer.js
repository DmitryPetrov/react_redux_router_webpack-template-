import axios from 'axios';

import * as types from '../actionTypes';
import { requestIsLoading } from './requestIsLoading';
import { requestSuccessed } from './requestSuccessed';
import { requestFailed } from './requestFailed';

export function requestToServer(userData) {
    console.log("requestToServer");

    return (dispatch) => {
        dispatch(requestIsLoading());

        axios
        .get('/login?userName=' + userData.userName + '&password=' + userData.password)
        .then(response => {
            console.log("response.data");
            console.log(response.data);

            dispatch(requestSuccessed(response.data));
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);

            dispatch(requestFailed(error.message));
        });
    };
}