import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { addDocType } from './actionCreatorList';
import { incomingRequest } from './actionCreatorList';
import DocType from './DocType';
import { itemList } from './../functions/itemList'
import { RequestStyle } from './../style';
import DateInput from './../components/DateInput.js'


class IncomingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      incomingId: '(initialState)',
      attrRequestId: this.props.responseId,
      timestamp: '(initialState)',
    }

    this.incomingIdHandler = this.incomingIdHandler.bind(this);
    this.timestampHandler = this.timestampHandler.bind(this);

    this.getFiltredDocTypes = this.getFiltredDocTypes.bind(this);

    this.addDocTypeHandler = this.addDocTypeHandler.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
  }

  incomingIdHandler(event) {
    this.setState({incomingId: event.target.value});
  }

  timestampHandler(date) {
    this.setState({timestamp: date});
  }

  addDocTypeHandler(event) {
    store.dispatch(addDocType());
  }

  submitHandler(event) {
    let requestData = this.state;
    requestData.docTypes = this.getFiltredDocTypes();

    this.props.fetchData(requestData);
  }

  getFiltredDocTypes() {
    return this.props.incoming.docTypes.filter(function(item) {
      return item !== undefined;
    })
  }

  render() {
    return (
      <div className="IncomingForm" style={RequestStyle}>
        <form method="post" id="IncomingForm" onSubmit={this.submitHandler} >
          <br/>
          <label>Incoming id: </label>
          <input type="text" onChange={this.incomingIdHandler}/>

          <DateInput labelText={"Timestamp"} dispatchFunc={this.timestampHandler}/>
        </form>

        <br/>        
        {itemList(DocType, this.props.incoming.docTypes)}

        <br/>
        <input type="button" value="Add doc type" onClick={this.addDocTypeHandler}/>      

        <br/>
        <input type="button" form="IncomingForm" value="Отправить" onClick={this.submitHandler}/>

      </div>
      )
  }
}

function mapStateToProps(store) { 
  return {
    incoming: Object.assign({}, store.incoming),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(incomingRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomingForm);

