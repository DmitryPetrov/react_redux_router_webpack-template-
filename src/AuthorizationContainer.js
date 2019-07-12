import React from 'react';
import { createStore } from 'redux'
import axios from 'axios';

import Authorization from './Authorization.js'
import MessageFromServer from './MessageFromServer.js'

let store = createStore(reducerInputForm);

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
    let userName = store.getState().userName;
    console.log(userName);
    axios.get('/login?userName=' + userName + '&password=' + password).then(response => {
      this.setState({message: response.data});
    });
  }

  render() {
    return (
      <div>
        <Authorization store={store} />
        <br />
        <MessageFromServer message={this.state.message} />
      </div>
    )
  }
}

function reducerInputForm(state, action) {
  if (typeof state === 'undefined') {
    return {userName: 'no userName'}
  }

  if (action.type === "NEW_NAME") {
    return Object.assign({}, state, {userName: action.userName})
  }

  console.log(action);
}

export default AuthorizationContainer;