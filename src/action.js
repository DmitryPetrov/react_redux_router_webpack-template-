import axios from 'axios';

export function messageHasErrored(bool, errorMessage) {
    console.log("action messageHasErrored");
    return {
        type: 'MESSAGE_HAS_ERRORED',
        hasErrored: bool,
        errorMessage: errorMessage,
    };
}

export function messageIsLoading(bool) {
    console.log("action messageIsLoading");
    return {
        type: 'MESSAGE_IS_LOADING',
        isLoading: bool
    };
}

export function messageFetchDataSuccess(message) {
    console.log("action messageFetchDataSuccess");
    return {
        type: 'MESSAGE_FETCH_DATA_SUCCESS',
        message
    };
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(messageHasErrored(true));
        }, 5000);
    };
}

export function messageFetchData(action) {
    console.log("action messageFetchData");

    return (dispatch) => {
        dispatch(messageIsLoading(true));

        axios
            .get('/login?userName=' + action.userName + '&password=' + action.password)
            .then(response => {
                console.log("action response.data");
                console.log(response.data);

                dispatch(messageIsLoading(false));

                dispatch(messageFetchDataSuccess(response.data.message));

                return response;
            })
            .catch(function (error) {
                console.log("action error");
                console.log(error);
                dispatch(messageIsLoading(false));
                dispatch(messageHasErrored(true, error.message));
            });
    };
}