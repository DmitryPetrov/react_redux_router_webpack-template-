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

    this.docDateHandle = this.docDateHandle.bind(this);
    this.docIdHandle = this.docIdHandle.bind(this);
    this.docNumberHandle = this.docNumberHandle.bind(this);

    this.fromDateHandle = this.fromDateHandle.bind(this);
    this.orgIdHandle = this.orgIdHandle.bind(this);
    this.orgInnHandle = this.orgInnHandle.bind(this);
    this.orgNameHandle = this.orgNameHandle.bind(this);
    this.toDateHandle = this.toDateHandle.bind(this);
    this.signCollectionHandle = this.signCollectionHandle.bind(this);
  }

  docDateHandle(event) {
    let date = event.target.value;
    if(date.length === 16) {
      date += ":00";
    }
    store.dispatch(updateData({docDate: date}));
  }
  docIdHandle(event) {
    store.dispatch(updateData({docId: event.target.value}));
  }
  docNumberHandle(event) {
    store.dispatch(updateData({docNumber: event.target.value}));
  }

  fromDateHandle(date) {
    store.dispatch(updateData({fromDate: date}));
  }
  orgIdHandle(event) {
    store.dispatch(updateData({orgId: event.target.value}));
  }
  orgInnHandle(event) {
    store.dispatch(updateData({orgInn: event.target.value}));
  }
  orgNameHandle(event) {
    store.dispatch(updateData({orgName: event.target.value}));
  }
  toDateHandle(date) {
    store.dispatch(updateData({toDate: date}));
  }
  signCollectionHandle(data) {
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
          docDateHandle={this.docDateHandle}
          docIdHandle={this.docIdHandle}
          docNumberHandle={this.docNumberHandle}
          fromDateHandle={this.fromDateHandle}
          orgIdHandle={this.orgIdHandle}
          orgInnHandle={this.orgInnHandle}
          orgNameHandle={this.orgNameHandle}
          toDateHandle={this.toDateHandle}
          accounts={this.props.data.accounts}
          addAccountHandle={this.addAccount}
          submitHandle={this.submit}
          signCollectionHandle={this.signCollectionHandle}
          dataForSign={this.props.dataForSign}
          selectedOrg={this.props.selectedOrg}
        />
        <MessageFromServer request={this.props.request} />
      </div>
    )
  }
}

function mapStateToProps(store) { 
  // {signCollection: null}
  // предотвращяет исчезновение надписи о заверщенной генерации подписи 
  // после генерации подписи
  return {
  	data : Object.assign({}, store.statementRequest.data),
    dataForSign : Object.assign({}, store.statementRequest.data, {signCollection: null}),
    request: Object.assign({}, store.statementRequest.request),
    selectedOrg: store.organisation.selectedOrg,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(statementRequestRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatementRequest);

