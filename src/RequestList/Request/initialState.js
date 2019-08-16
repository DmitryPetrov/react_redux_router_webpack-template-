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
							bankName: '(initialState)',
						}
					],
				}
			],
		},
};

