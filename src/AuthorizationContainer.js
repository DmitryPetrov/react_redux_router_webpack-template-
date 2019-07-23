import React from 'react';
import { connect } from 'react-redux';

import Authorization from './Authorization.js'
import MessageFromServer from './MessageFromServer.js'
import { requestToServer } from './action.js';

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
  console.log("mapStateToProps");
  console.log(store);

  return {
    response: {
      isFail: store.isFail,
      isLoading: store.isLoading,
      isSuccessed: store.isSuccessed,
      message: store.message,
    }
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(requestToServer(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);

