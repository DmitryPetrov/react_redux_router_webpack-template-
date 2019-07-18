import React from 'react';

import store from './store.js';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	userName: '',
    	password: '',
    };

    this.UserNameHandler = this.UserNameHandler.bind(this);
    this.PasswordHandler = this.PasswordHandler.bind(this);

    this.buttonHandler = this.buttonHandler.bind(this);
    this.actionCreatorInputFrom = this.actionCreatorInputFrom.bind(this);

    console.log("Authorization"); 
    printObjContent(this.props);
  }

  UserNameHandler(event) {
    this.setState({userName: event.target.value});
  }

  PasswordHandler(event) {
    this.setState({password: event.target.value});
  }

  buttonHandler(event) {
    event.preventDefault();
    let action = this.actionCreatorInputFrom();
    store.dispatch(action);
  }

  actionCreatorInputFrom() {
    return {
      type: "NEW_NAME",
      userName: this.state.userName,
      password: this.state.password
    }
  }

  render() {
    return (
      <div className="Authorization">
        <form action="index.html" method="post" onSubmit={this.buttonHandler}>
          <label>User Name: </label>
          <input type="text" onChange={this.UserNameHandler}/>

          <br/>
          <label>Password: </label>
          <input type="password" onChange={this.PasswordHandler}/>

          <br/>
          <input type="submit" value="Отправить" />
        </form>
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

export default Authorization;
