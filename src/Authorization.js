import React from 'react';

import store from './store.js';
import { setUserName } from './actions/userData/setUserName';
import { setPassword } from './actions/userData/setPassword';

class Authorization extends React.Component {
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
    this.props.fetchData(this.props.userData);
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

export default Authorization;
