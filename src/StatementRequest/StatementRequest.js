import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { updateData, statementRequestRequest, addAccount } from './actionCreatorList';
import StatementRequestView from './StatementRequestView';
import MessageFromServer from './../components/MessageFromServer.js';


class StatementRequest extends React.Component {
  constructor(props) {
    super(props);

    this.addAccount = this.addAccount.bind(this);
    this.submit = this.submit.bind(this);

    this.docDateHandler = this.docDateHandler.bind(this);
    this.docIdHandler = this.docIdHandler.bind(this);
    this.docNumberHandler = this.docNumberHandler.bind(this);

    this.fromDateHandler = this.fromDateHandler.bind(this);
    this.orgIdHandler = this.orgIdHandler.bind(this);
    this.orgInnHandler = this.orgInnHandler.bind(this);
    this.orgNameHandler = this.orgNameHandler.bind(this);
    this.toDateHandler = this.toDateHandler.bind(this);
    this.signCollectionHandler = this.signCollectionHandler.bind(this);
  }

  docDateHandler(event) {
    let date = event.target.value;
    if(date.length === 16) {
      date += ":00";
    }
    store.dispatch(updateData({docDate: date}));
  }
  docIdHandler(event) {
    store.dispatch(updateData({docId: event.target.value}));
  }
  docNumberHandler(event) {
    store.dispatch(updateData({docNumber: event.target.value}));
  }

  fromDateHandler(date) {
    store.dispatch(updateData({fromDate: date}));
  }
  orgIdHandler(event) {
    store.dispatch(updateData({orgId: event.target.value}));
  }
  orgInnHandler(event) {
    store.dispatch(updateData({orgInn: event.target.value}));
  }
  orgNameHandler(event) {
    store.dispatch(updateData({orgName: event.target.value}));
  }
  toDateHandler(date) {
    store.dispatch(updateData({toDate: date}));
  }
  signCollectionHandler(data) {
    store.dispatch(updateData(data));
  }

  addAccount(event) {
    store.dispatch(addAccount());
  }

  submit(event) {
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
        <StatementRequestView 
          docDateHandler={this.docDateHandler}
          docIdHandler={this.docIdHandler}
          docNumberHandler={this.docNumberHandler}
          fromDateHandler={this.fromDateHandler}
          orgIdHandler={this.orgIdHandler}
          orgInnHandler={this.orgInnHandler}
          orgNameHandler={this.orgNameHandler}
          toDateHandler={this.toDateHandler}
          accounts={this.props.data.accounts}
          addAccountHandler={this.addAccount}
          submitHandler={this.submit}
          signCollectionHandler={this.signCollectionHandler}
        />
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

