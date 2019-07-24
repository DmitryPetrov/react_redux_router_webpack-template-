import React from 'react';
import { connect } from 'react-redux';

import Authorization from './Authorization.js'
import MessageFromServer from './MessageFromServer.js'
import { requestToServer } from './../actions/request/requestToServer';

function AuthorizationContainer(props) {
  return (
    <div>
      <Authorization fetchData={props.fetchData} userData={props.userData}/>
      <br />
      <MessageFromServer response={props.response} />
    </div>
  )
}

function mapStateToProps(store) {
  return {
    userData: {
      userName: store.userData.userName,
      password: store.userData.password,
    },
    response: {
      isFail: store.request.isFail,
      isLoading: store.request.isLoading,
      isSuccessed: store.request.isSuccessed,
      message: store.request.message,
    }
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(requestToServer(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);

