
export function requestIsLoading(type) {
	return {
		type: type,
		isFail: false,
		isLoading: true,
		isSucceed: false,
		message: 'Loading',
		response: null,
	};
}

export function requestSucceed(type, response) {
	return {
		type: type,
		isFail: false,
		isLoading: false,
		isSucceed: true,
		message: 'Succeed',
		response: response,
	};
}

export function requestFailed(type, errorMessage) {
	return {
		type: type,
		isFail: true,
		isLoading: false,
		isSucceed: false,
		message: 'Failed',
		response: errorMessage,
	};
}