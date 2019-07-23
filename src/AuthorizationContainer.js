import React from 'react';
import { connect } from 'react-redux';

import Authorization from './Authorization.js'
import MessageFromServer from './MessageFromServer.js'
import { messageFetchData } from './action.js';

function AuthorizationContainer(props) {
  return (
    <div>
      <Authorization fetchData={props.fetchData}/>
      <br />
      <MessageFromServer response={props.response} />
    </div>
  )
}

function mapStateToProps(store) {
  return {
    message: store.message,
    hasErrored: store.error.hasErrored,
    isLoading: store.messageIsLoading,
    response: {
      message: store.message,
      hasErrored: store.error.hasErrored,
      errorMessage: store.error.errorMessage,
      isLoading: store.messageIsLoading
    }
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(messageFetchData(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);

