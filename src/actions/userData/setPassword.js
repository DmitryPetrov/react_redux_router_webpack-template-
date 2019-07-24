import * as types from '../actionTypes';

export function setPassword(password) {
    console.log("setPasswordAction");
    return {
        type: types.SET_PASSWORD,
        password: password,
    };
}