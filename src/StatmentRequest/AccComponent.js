import React from 'react';
import { connect } from 'react-redux';

import store from './../Store';
import {setAccount, setBankBIC, setBankName, removeAcc} from './AccDataActionCreators'

class AccComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log("AccComponent.props");
    console.log(this.props);

    this.accountHandler = this.accountHandler.bind(this);
    this.bankBICHandler = this.bankBICHandler.bind(this);
    this.bankNameHandler = this.bankNameHandler.bind(this);

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  accountHandler(event) {
    store.dispatch(setAccount(event.target.value));
  }
  bankBICHandler(event) {
    store.dispatch(setBankBIC(event.target.value));
  }
  bankNameHandler(event) {
    store.dispatch(setBankName(event.target.value));
  }

  buttonHandler(event) {
    event.preventDefault();
    store.dispatch(removeAcc(this.props.index));
  }

  render() {
    return (
      <div className="AccComponent">
      <fieldset>
        <legend>Account</legend>
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
      </fieldset>
      </div>
      )
  }
}

export default AccComponent;
