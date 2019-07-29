import React from 'react';
import { connect } from 'react-redux';

import RequestNavigate from './../RequestNavigate'

import store from './../../../store';
import {setDocDate, setDocId, setDocNumber} from './../../../actions/statmentRequestDataActionCreators'
import {setFromDate, setOrgId, setOrgInn, setOrgName, setToDate} from './../../../actions/statmentRequestDataActionCreators'
import {setAccAccount, setAccBankBIC, setAccBankName, setAccOrgName} from './../../../actions/statmentRequestDataActionCreators'
import { statmentRequestRequest } from './../../../actions/statmentRequestRequestActionCreators';
import MessageFromServer from './../../MessageFromServer.js'


class StatmentRequest extends React.Component {
  constructor(props) {
    super(props);

    this.docDateHandler = this.docDateHandler.bind(this);
    this.docIdHandler = this.docIdHandler.bind(this);
    this.docNumberHandler = this.docNumberHandler.bind(this);

    this.fromDateHandler = this.fromDateHandler.bind(this);
    this.orgIdHandler = this.orgIdHandler.bind(this);
    this.orgInnHandler = this.orgInnHandler.bind(this);
    this.orgNameHandler = this.orgNameHandler.bind(this);
    this.toDateHandler = this.toDateHandler.bind(this);

    this.accAccountHandler = this.accAccountHandler.bind(this);
    this.accBankBICHandler = this.accBankBICHandler.bind(this);
    this.accBankNameHandler = this.accBankNameHandler.bind(this);
    this.accOrgNameHandler = this.accOrgNameHandler.bind(this);

    this.buttonHandler = this.buttonHandler.bind(this);
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
  orgIdHandler(event) {
    store.dispatch(setOrgId(event.target.value));
  }
  orgInnHandler(event) {
    store.dispatch(setOrgInn(event.target.value));
  }
  orgNameHandler(event) {
    store.dispatch(setOrgName(event.target.value));
  }
  toDateHandler(event) {
    store.dispatch(setToDate(event.target.value));
  }

  accAccountHandler(event) {
    store.dispatch(setAccAccount(event.target.value));
  }
  accBankBICHandler(event) {
    store.dispatch(setAccBankBIC(event.target.value));
  }
  accBankNameHandler(event) {
    store.dispatch(setAccBankName(event.target.value));
  }
  accOrgNameHandler(event) {
    store.dispatch(setAccOrgName(event.target.value));
  }

  buttonHandler(event) {
    event.preventDefault();
    console.log(this.props.statmentRequestData);
    this.props.fetchData(this.props.statmentRequestData);
  }

  render() {
    return (
      <div className="StatmentRequest">
        <RequestNavigate />
        <form method="post" onSubmit={this.buttonHandler}>
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
          <br/>
          <label>fromDate: </label>
          <input type="text" onChange={this.fromDateHandler}/>

          <br/>
          <label>orgId: </label>
          <input type="text" onChange={this.orgIdHandler}/>

          <br/>
          <label>orgInn: </label>
          <input type="text" onChange={this.orgInnHandler}/>

          <br/>
          <label>orgName: </label>
          <input type="text" onChange={this.orgNameHandler}/>

          <br/>
          <label>toDate: </label>
          <input type="text" onChange={this.toDateHandler}/>

          <br/>
          <br/>
          <label>Acc account: </label>
          <input type="text" onChange={this.accAccountHandler}/>

          <br/>
          <label>Acc bankBIC: </label>
          <input type="text" onChange={this.accBankBICHandler}/>

          <br/>
          <label>Acc bankName: </label>
          <input type="text" onChange={this.accBankNameHandler}/>

          <br/>
          <label>Acc orgName: </label>
          <input type="text" onChange={this.accOrgNameHandler}/>

          <br/>
          <input type="submit" value="Отправить" />
        </form>
        <MessageFromServer response={this.props.statmentRequestResponse} />
      </div>
    )
  }
}


function mapStateToProps(store) {
  console.log("StatmentRequest mapStateToProps store.statmentRequestRequest");
  console.log(store.statmentRequestRequest);


  return {
  	statmentRequestData : store.statmentRequestData,
    statmentRequestResponse: store.statmentRequestRequest,
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(statmentRequestRequest(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatmentRequest);

