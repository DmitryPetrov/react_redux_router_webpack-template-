import React from 'react';

import store from './../../Store';
import {setAccount, setBankBIC, setBankName, removeAcc} from './ActionCreators'

class AccountComponent extends React.Component {
  constructor(props) {
    super(props);

    this.accountHandler = this.accountHandler.bind(this);
    this.bankBICHandler = this.bankBICHandler.bind(this);
    this.bankNameHandler = this.bankNameHandler.bind(this);

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  accountHandler(event) {
    store.dispatch(setAccount(event.target.value, this.props.index));
  }
  bankBICHandler(event) {
    store.dispatch(setBankBIC(event.target.value, this.props.index));
  }
  bankNameHandler(event) {
    store.dispatch(setBankName(event.target.value, this.props.index));
  }

  buttonHandler(event) {
    event.preventDefault();
    store.dispatch(removeAcc(this.props.index));
  }

  render() {
    return (
      <div className="AccountComponent">
        <form method="post" onSubmit={this.buttonHandler}>
          <label>account: </label>
          <input type="text" onChange={this.accountHandler}/>

          <br/>
          <label>bankBIC: </label>
          <input type="text" onChange={this.bankBICHandler}/>

          <br/>
          <label>bankName: </label>
          <input type="text" onChange={this.bankNameHandler}/>

          <br/>
          <input type="submit" value="Remove" />
        </form>
      </div>
      )
  }
}

export default AccountComponent;
