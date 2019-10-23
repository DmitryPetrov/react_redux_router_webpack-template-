import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { addDocType } from './actionCreatorList';
import { incomingRequest } from './actionCreatorList';
import IncomingFormView from './IncomingFormView';

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

  timestampHandler(event) {
    let date = event.target.value;
    if(date.length === 16) {
      date += ":00";
    }
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
      <IncomingFormView
        incomingIdHandler={this.incomingIdHandler}
        timestampHandler={this.timestampHandler}
        addDocTypeHandler={this.addDocTypeHandler}
        submitHandler={this.submitHandler}
        incoming={this.props.incoming}
        />
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

