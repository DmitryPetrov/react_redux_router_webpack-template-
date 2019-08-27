const DATA = {
    docDate: '(initialState)',
    docId: '(initialState)',
    docNumber: '(initialState)',
    fromDate: '(initialState)',
    orgId: '(initialState)',
    orgInn: '(initialState)',
    orgName: '(initialState)',
    toDate: '(initialState)',
    accounts: [
        {
            account: "(initialState)", 
            bankBIC: "(initialState)", 
            bankName: "(initialState)",
        }
    ],
};

const REQUEST = {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
};

export const statementRequest = {
    data: DATA,
    request: REQUEST,
}



export var accountData = {
    account: "(initialState)", 
    bankBIC: "(initialState)", 
    bankName: "(initialState)",
};
