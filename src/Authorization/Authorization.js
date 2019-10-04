import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { updateAutorizationData, authorizationRequest } from './actionCreatorList';
import AuthorizationResponse from './AuthorizationResponse';
import AuthorizationView from './AuthorizationView';

class Authorization extends React.Component {
  constructor(props) {
    super(props);

    this.userNameHandler = this.userNameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  userNameHandler(event) {
    store.dispatch(updateAutorizationData({userName: event.target.value}));
  }

  passwordHandler(event) {
    store.dispatch(updateAutorizationData({password: event.target.value}));
  }

  buttonHandler(event) {
    event.preventDefault();
    this.props.fetchData(this.props.data);
  }

  render() {
    return (
      <div className="Authorization">
        <AuthorizationView
          userNameHandler={this.userNameHandler}
          passwordHandler={this.passwordHandler}
          buttonHandler={this.buttonHandler}
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

