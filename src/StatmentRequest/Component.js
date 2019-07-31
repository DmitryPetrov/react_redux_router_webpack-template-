import React from 'react';
import { connect } from 'react-redux';

import store from './../Store';
import AccComponent from './AccComponent';
import {setDocDate, setDocId, setDocNumber} from './DataActionCreators'
import {setFromDate, setOrgId, setOrgInn, setOrgName, setToDate} from './DataActionCreators'
import {addAccount} from './DataActionCreators'
import { statmentRequestRequest } from './RequestActionCreators';
import MessageFromServer from './../components/MessageFromServer.js'

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

    this.addAccountHandler = this.addAccountHandler.bind(this);
    this.addAddComponents = this.addAddComponents.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
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

  addAccountHandler(event) {
    event.preventDefault();
    store.dispatch(addAccount());
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.fetchData(this.props.statmentRequestData);
  }

  componentDidMount(){
    store.dispatch(addAccount());
  }

  addAddComponents() {
    this.props.statmentRequestData.accounts.forEach((item, i, arr) => {
      if(item !== null){
        return <AccComponent index={i} />;
      }
    });
  }

  render() {
    return (
      <div className="StatmentRequest">
      <form method="post" id="StatmentRequestForm" onSubmit={this.submitHandler} >
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
      
      <br/>
      <PrintAccounts accounts={this.props.statmentRequestData.accounts}/>
      <br/>
      <input type="button" value="Add account" onClick={this.addAccountHandler}/>      

      <br/>
      <input type="submit" form="StatmentRequestForm" value="Отправить" />
      <MessageFromServer request={this.props.statmentRequestResponse} />
      </div>
      )
  }
}

function PrintAccounts(props) {
  const list = props.accounts.map((item, index) => {
    if(item !== undefined){
      return <AccComponent key={index} index={index}/> 
    }
  });
  return <div>{list}</div>
}


function mapStateToProps(store) {
  console.log("store.statmentRequestData.accounts");
  console.log(store.statmentRequestData);
  
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

