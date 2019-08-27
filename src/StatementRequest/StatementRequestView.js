import React from 'react';

import store from './../store';
import { updateData } from './actionCreatorList'

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

  docDateHandler(event) {
    store.dispatch(updateData({docDate: event.target.value}));
  }
  docIdHandler(event) {
    store.dispatch(updateData({docId: event.target.value}));
  }
  docNumberHandler(event) {
    store.dispatch(updateData({docNumber: event.target.value}));
  }

  fromDateHandler(event) {
    store.dispatch(updateData({fromDate: event.target.value}));
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
  toDateHandler(event) {
    store.dispatch(updateData({toDate: event.target.value}));
  }

  render() {
    return (
      <div className="StatementRequestView">
        <form method="post" id="StatementRequestForm" onSubmit={this.submitHandler} >
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
        </form>
      </div>
      )
  }
}

export default StatementRequestView;

