import * as types from '../actionTypes';

export function requestFailed(errorMessage) {
    console.log("requestFailedAction");
    return {
        type: types.REQUEST_FAILED,
        isFail: true,
        isLoading: false,
        isSuccessed: false,
        message: errorMessage,
    };
}