import * as types from '../actionTypes';

export function setUserName(userName) {
    console.log("setUserNameAction");
    return {
        type: types.SET_USERNAME,
        userName: userName,
    };
}