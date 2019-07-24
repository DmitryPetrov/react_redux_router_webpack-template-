import axios from 'axios';

import { requestIsLoading } from './requestIsLoading';
import { requestSuccessed } from './requestSuccessed';
import { requestFailed } from './requestFailed';

export function requestToServer(userData) {
    return (dispatch) => {
        dispatch(requestIsLoading());
        axios
        .get('/login?userName=' + userData.userName + '&password=' + userData.password)
        .then(response => {
            dispatch(requestSuccessed(response.data));
        })
        .catch(function (error) {
            dispatch(requestFailed(error.message));
        });
    };
}