import { REQUEST } from './../globalInitialState'

export var ACCOUT_DATA = {
    account: "(initialState)", 
    bankBIC: "(initialState)", 
    bankName: "(initialState)",
};

const DATA = {
    docDate: '(initialState)',
    docId: '(initialState)',
    docNumber: '(initialState)',
    fromDate: '(initialState)',
    orgId: '(initialState)',
    orgInn: '(initialState)',
    orgName: '(initialState)',
    toDate: '(initialState)',
    accounts: [ACCOUT_DATA],
};

export const STATEMENT_REQUEST = {
    data: DATA,
    request: REQUEST,
}

