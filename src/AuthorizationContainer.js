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

    console.log("AuthorizationContainer props"); 
    printObjContent(this.props);

    this.listenerInputForm = this.listenerInputForm.bind(this);
    store.subscribe(this.listenerInputForm);
  }

  listenerInputForm() {
    let userName = this.props.userName;
    let password = this.props.password;
    console.log(userName);
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

function printObjContent(obj, offset = "") {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      console.log(offset + "#" + obj[key] + "#");
      printObjContent(obj[key], (offset + "--->"));
    } else {
      console.log(offset + key + " = [" + obj[key] + "]");  
    }
  }
}

function mapStateToProps (store) {

    console.log("AuthorizationContainer store"); 
    printObjContent(store);

  return {
    userName: store.userName,
    password: store.password,
  }
}

export default connect(mapStateToProps)(AuthorizationContainer);

