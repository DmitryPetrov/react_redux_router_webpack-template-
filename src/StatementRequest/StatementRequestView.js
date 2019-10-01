import React from 'react';

import store from './../store';
import { updateData } from './actionCreatorList'
import DateWithTimezoneInput from './../components/DateWithTimezoneInput.js'
import DateInput from './../components/DateInput.js'


class StatementRequestView extends React.Component {
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
  }

  docDateHandler(date) {
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

  render() {
    return (
      <div className="StatementRequestView">
        <form method="post" id="StatementRequestForm" onSubmit={this.submitHandler} >
          <br/>
          <DateInput labelText={"docDate"} dispatchFunc={this.docDateHandler}/>

          <label>docId: </label>
          <input type="text" onChange={this.docIdHandler}/>

          <br/>
          <label>docNumber: </label>
          <input type="text" onChange={this.docNumberHandler}/>

          <br/>
          <br/>
          <DateWithTimezoneInput labelText={"fromDate"} dispatchFunc={this.fromDateHandler}/>

          <label>orgId: </label>
          <input type="text" onChange={this.orgIdHandler}/>

          <br/>
          <label>orgInn: </label>
          <input type="text" onChange={this.orgInnHandler}/>

          <br/>
          <label>orgName: </label>
          <input type="text" onChange={this.orgNameHandler}/>

          <br/>
          <DateWithTimezoneInput labelText={"toDate"} dispatchFunc={this.toDateHandler}/>
        </form>
      </div>
      )
  }
}

export default StatementRequestView;

