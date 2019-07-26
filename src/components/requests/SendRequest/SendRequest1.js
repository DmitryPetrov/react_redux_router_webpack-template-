import React from 'react';
import { connect } from 'react-redux';

import RequestNavigate from './../RequestNavigate'

import store from './../../../store';
import {setOrgId, setOrgInn, setOrgName, setAccount, setBankBIC, setDocDate, setDocId, setDocNumber, setFromDate, setToDate, setBankName} from './../../../actions/sendRequest1DataActionCreators'
import { sendRequest1Request } from './../../../actions/sendRequest1RequestActionCreators';
import MessageFromServer from './../../MessageFromServer.js'


class SendRequest1 extends React.Component {
  constructor(props) {
    super(props);

    this.orgIdHandler = this.orgIdHandler.bind(this);
    this.orgInnHandler = this.orgInnHandler.bind(this);
    this.orgNameHandler = this.orgNameHandler.bind(this);
    this.accountHandler = this.accountHandler.bind(this);
    this.bankBICHandler = this.bankBICHandler.bind(this);
    
    this.docDateHandler = this.docDateHandler.bind(this);
    this.docIdHandler = this.docIdHandler.bind(this);
    this.docNumberHandler = this.docNumberHandler.bind(this);
    this.fromDateHandler = this.fromDateHandler.bind(this);
    this.toDateHandler = this.toDateHandler.bind(this);
    this.bankNameHandler = this.bankNameHandler.bind(this);

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  orgIdHandler(event) {
    store.dispatch(setOrgId(event.target.value));
  }
  orgInnHandler(event) {
    store.dispatch(setOrgInn(event.target.value));
  }
  orgNameHandler(event) {
    store.dispatch(setOrgName(event.target.value));
  }
  accountHandler(event) {
    store.dispatch(setAccount(event.target.value));
  }
  bankBICHandler(event) {
    store.dispatch(setBankBIC(event.target.value));
  }
  docDateHandler(event) {
    store.dispatch(setDocDate(event.target.value));
  }
  docIdHandler(event) {
    store.dispatch(setDocId(event.target.value));
  }
  docNumberHandler(event) {
    store.dispatch(setDocNumber(event.target.value));
  }
  fromDateHandler(event) {
    store.dispatch(setFromDate(event.target.value));
  }
  toDateHandler(event) {
    store.dispatch(setToDate(event.target.value));
  }
  bankNameHandler(event) {
    store.dispatch(setBankName(event.target.value));
  }

  buttonHandler(event) {
    event.preventDefault();
    console.log(this.props.sendRequest1Data);
    this.props.fetchData(this.props.sendRequest1Data);
  }

  render() {
    return (
      <div className="SendRequest1">
        <RequestNavigate />
        <form method="post" onSubmit={this.buttonHandler}>
          <label>orgId: </label>
          <input type="text" onChange={this.orgIdHandler}/>

          <br/>
          <label>orgInn: </label>
          <input type="text" onChange={this.orgInnHandler}/>

          <br/>
          <label>orgName: </label>
          <input type="text" onChange={this.orgNameHandler}/>

          <br/>
          <label>account: </label>
          <input type="text" onChange={this.accountHandler}/>

          <br/>
          <label>bankBIC: </label>
          <input type="text" onChange={this.bankBICHandler}/>

          <br/>
          <label>docDate: </label>
          <input type="text" onChange={this.docDateHandler}/>

          <br/>
          <label>docId: </label>
          <input type="text" onChange={this.docIdHandler}/>

          <br/>
          <label>docNumber: </label>
          <input type="text" onChange={this.docNumberHandler}/>

          <br/>
          <label>fromDate: </label>
          <input type="text" onChange={this.fromDateHandler}/>

          <br/>
          <label>toDate: </label>
          <input type="text" onChange={this.toDateHandler}/>

          <br/>
          <label>bankName: </label>
          <input type="text" onChange={this.bankNameHandler}/>

          <br/>
          <input type="submit" value="Отправить" />
        </form>
        <MessageFromServer response={this.props.sendRequest1Response} />
      </div>
    )
  }
}


function mapStateToProps(store) {
  console.log("SendRequest1 mapStateToProps store.sendRequest1Request");
  console.log(store.sendRequest1Request);


  return {
  	sendRequest1Data : store.sendRequest1Data,
    sendRequest1Response: store.sendRequest1Request,
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(sendRequest1Request(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendRequest1);

