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

    this.incomingIdHandle = this.incomingIdHandle.bind(this);
    this.timestampHandle = this.timestampHandle.bind(this);
    this.getFiltredDocTypes = this.getFiltredDocTypes.bind(this);
    this.addDocTypeHandle = this.addDocTypeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  incomingIdHandle(event) {
    this.setState({incomingId: event.target.value});
  }

  timestampHandle(event) {
    let date = event.target.value;
    if(date.length === 16) {
      date += ":00";
    }
    this.setState({timestamp: date});
  }

  addDocTypeHandle(event) {
    store.dispatch(addDocType());
  }

  submitHandle(event) {
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
        incomingIdHandle={this.incomingIdHandle}
        timestampHandle={this.timestampHandle}
        addDocTypeHandle={this.addDocTypeHandle}
        submitHandle={this.submitHandle}
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

