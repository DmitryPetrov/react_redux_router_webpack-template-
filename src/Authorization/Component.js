import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { setUserName, setPassword } from './DataActionCreators';
import MessageFromServer from './../components/MessageFromServer.js'
import { authorizationRequest } from './RequestActionCreators';

class AuthorizationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.UserNameHandler = this.UserNameHandler.bind(this);
    this.PasswordHandler = this.PasswordHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  UserNameHandler(event) {
    store.dispatch(setUserName(event.target.value));
  }

  PasswordHandler(event) {
    store.dispatch(setPassword(event.target.value));
  }

  buttonHandler(event) {
    event.preventDefault();
    this.props.fetchData(this.props.authorizationData);
  }

  render() {
    return (
      <div className="Authorization">
        <form method="post" onSubmit={this.buttonHandler}>
          <label>User Name: </label>
          <input type="text" onChange={this.UserNameHandler}/>

          <br/>
          <label>Password: </label>
          <input type="password" onChange={this.PasswordHandler}/>

          <br/>
          <input type="submit" value="Отправить" />
        </form>
        <MessageFromServer request={this.props.authorizationRequest} />
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    authorizationData: store.authorizationData,
    authorizationRequest: store.authorizationRequest,
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(authorizationRequest(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);

