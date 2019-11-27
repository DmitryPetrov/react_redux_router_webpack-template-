import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { updateAutorizationData, authorizationRequest } from './actionCreatorList';
import AuthorizationResponse from './AuthorizationResponse';
import AuthorizationView from './AuthorizationView';

class Authorization extends React.Component {
  constructor(props) {
    super(props);

    this.userNameHandle = this.userNameHandle.bind(this);
    this.passwordHandle = this.passwordHandle.bind(this);
    this.buttonHandle = this.buttonHandle.bind(this);
  }

  userNameHandle(event) {
    store.dispatch(updateAutorizationData({userName: event.target.value}));
  }

  passwordHandle(event) {
    store.dispatch(updateAutorizationData({password: event.target.value}));
  }

  buttonHandle(event) {
    event.preventDefault();
    this.props.fetchData(this.props.data);
  }

  render() {
    return (
      <div className="Authorization">
        <AuthorizationView
          userNameHandle={this.userNameHandle}
          passwordHandle={this.passwordHandle}
          buttonHandle={this.buttonHandle}
        />
        <AuthorizationResponse request={this.props.request}/>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    data: store.authorization.data,
    request: store.authorization.request,
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(authorizationRequest(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);

