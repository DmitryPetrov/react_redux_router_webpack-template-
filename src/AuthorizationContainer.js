import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Authorization from './Authorization.js'
import MessageFromServer from './MessageFromServer.js'
import store from './store.js';

class AuthorizationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      message: '',
    };

    this.listenerInputForm = this.listenerInputForm.bind(this);
    store.subscribe(this.listenerInputForm);
  }

  listenerInputForm() {
    let userName = this.props.userName;
    let password = this.props.password;

    axios.get('/login?userName=' + userName + '&password=' + password).then(response => {
      this.setState({message: response.data});
    });
  }

  render() {
    return (
      <div>
        <Authorization />
        <br />
        <MessageFromServer message={this.state.message} />
      </div>
    )
  }
}

function mapStateToProps (store) {
  return {
    userName: store.userName,
    password: store.password,
  }
}

export default connect(mapStateToProps)(AuthorizationContainer);

