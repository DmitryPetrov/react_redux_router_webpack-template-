import React from 'react';

import { connect } from 'react-redux';

import Authorization from './Authorization.js'
import MessageFromServer from './MessageFromServer.js'
import { messageFetchData } from './action.js';

class AuthorizationContainer extends React.Component {


  render() {
    return (
      <div>
        <Authorization fetchData={this.props.fetchData}/>
        <br />
        <MessageFromServer response={this.props.response} />
      </div>
    )
  }
}

function mapStateToProps (store) {
  console.log("mapStateToProps")
  console.log(store)

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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (action) => dispatch(messageFetchData(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);

