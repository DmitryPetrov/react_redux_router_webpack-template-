import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import MessageFromServer from './../components/MessageFromServer.js'
import AccountList from './AccountList';
import StatementRequestView from './StatementRequestView';
import { statementRequestRequest, addAccount } from './actionCreatorList';

class StatementRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.addAccount = this.addAccount.bind(this);
    this.submit = this.submit.bind(this);
  }

  addAccount(event) {
    event.preventDefault();
    store.dispatch(addAccount());
  }

  submit(event) {
    event.preventDefault();
    let filteredAccounts =  this.props.data.accounts
      .filter(item => item !== undefined )
      .filter(item => item !== null);

    let data = this.props.data;
    data.accounts = filteredAccounts;
    this.props.fetchData(data);
  }

  render() {
    return (
      <div className="StatementRequest">
        <StatementRequestView />
        <AccountList accounts={this.props.data.accounts}/>

        <br/>
        <input type="button" value="Add account" onClick={this.addAccount}/>      

        <br/>
        <input type="button" form="StatementRequestForm" value="Отправить"  onClick={this.submit}/>

        <MessageFromServer request={this.props.request} />
      </div>
    )
  }
}

function mapStateToProps(store) { 
  return {
  	data : Object.assign({}, store.statementRequest.data),
    request: Object.assign({}, store.statementRequest.request),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(statementRequestRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatementRequest);

