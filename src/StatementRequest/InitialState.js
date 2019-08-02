export var statementRequestData = {
    docDate: '(initialState)',
    docId: '(initialState)',
    docNumber: '(initialState)',

    fromDate: '(initialState)',
    orgId: '(initialState)',
    orgInn: '(initialState)',
    orgName: '(initialState)',
    toDate: '(initialState)',
    
    accounts: [],
};

export var accounts = {
    acc: [
        {
            account: '(initialState)',
            bankBIC: '(initialState)',
            bankName: '(initialState)',
        }
    ],
};

export var accData = {
    account: '(initialState)',
    bankBIC: '(initialState)',
    bankName: '(initialState)',
};

export var statementRequestRequest = {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
};