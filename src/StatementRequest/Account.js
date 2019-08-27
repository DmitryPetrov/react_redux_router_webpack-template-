import React from 'react';

import store from './../store';
import { updateAccountData, removeAccount} from './actionCreatorList'

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.accountHandler = this.accountHandler.bind(this);
    this.bankBICHandler = this.bankBICHandler.bind(this);
    this.bankNameHandler = this.bankNameHandler.bind(this);

    this.removeAccount = this.removeAccount.bind(this);
  }

  accountHandler(event) {
    store.dispatch(updateAccountData({account: event.target.value}, this.props.index));
  }
  bankBICHandler(event) {
    store.dispatch(updateAccountData({bankBIC: event.target.value}, this.props.index));
  }
  bankNameHandler(event) {
    store.dispatch(updateAccountData({bankName: event.target.value}, this.props.index));
  }

  removeAccount(event) {
    event.preventDefault();
    store.dispatch(removeAccount(this.props.index));
  }

  render() {
    return (
      <div className="Account">
        <form method="post" onSubmit={this.removeAccount}>
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

export default Account;
