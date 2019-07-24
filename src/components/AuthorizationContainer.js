import React from 'react';
import { connect } from 'react-redux';

import Authorization from './Authorization.js'
import MessageFromServer from './MessageFromServer.js'
import { authorizationRequest } from './../actions/authorizationActionCreators';

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
      isFail: store.authorizationRequest.isFail,
      isLoading: store.authorizationRequest.isLoading,
      isSuccessed: store.authorizationRequest.isSuccessed,
      message: store.authorizationRequest.message,
    }
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(authorizationRequest(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);

