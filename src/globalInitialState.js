export const REQUEST = {
    isFail: '(initialState)',
    isLoading: '(initialState)',
    isSuccessed: '(initialState)',
    message: '(initialState)',
    response: '(initialState)',
};

export const REST_API = {
  authorization: "/authorization",
  statementRequest: "/requests/statementRequest",
  payRequest: "/requests/payRequest",
  getRequestStatus: "/requests/getRequestStatus",
  incoming: "/requests/incoming",
  soapMessages: "/soapMessages",
  lastRequestSoapMessages: "/soapMessages/lastRequest",
  requestChains: "/requestChains",
};
