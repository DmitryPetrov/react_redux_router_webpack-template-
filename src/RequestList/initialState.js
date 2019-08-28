export var requestListRequest = {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
    response: 
		{
	    status: '(initialState)',
	    message: '(initialState)',
	    requestChain: '(initialState)',
	    requestChainList: '(initialState)',
	    soapMessageList: '(initialState)',
		},
};

export var getRequestStatusRequest = {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
    response: {
			status: '(initialState)',
			message: '(initialState)',
			soapMessages: '(initialState)',
			object: [
				{
					requestName: '(initialState)',
					requestId: '(initialState)',
					orgName: '(initialState)',
					fromDate: '(initialState)',
					toDate: '(initialState)',
					accounts: [
						{
							bankName: '(initialState)'
						}
					],
				}
			],
		},
};

export var incomingDocTypes = {
	docTypes: ['(initialState)',],
}

export var docTypeData = {
	docType: '(initialState)',
};

export var incomingRequest = {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
    response: '(initialState)',
};