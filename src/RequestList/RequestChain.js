import React from 'react';
import { connect } from 'react-redux';

import { nextStepRequest } from './actionCreatorList';
import Error from './Error';
import IncomingForm from './IncomingForm';
import StatmentRequest from './StatmentRequest';
import GetRequestStatus from './GetRequestStatus';
import Incoming from './Incoming';
import StatementDocument from './StatementDocument';

import { RequestChainStyle } from './../style';

const START = 0;
const STATEMENT_REQUEST = 1;
const STATEMENT_REQUEST_STATUS = 2;
const INCOMING = 3;
const STATEMENT_DOCUMENT = 4;
const FINNISH = 5;

class RequestChain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {renderIncomingForm: null};

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(event) {
    event.preventDefault();
    if (this.props.item.phaseNum === STATEMENT_REQUEST) {
      this.setState({renderIncomingForm: null});
      this.props.fetchData(this.props.item.responseId);
    }
    if (this.props.item.phaseNum === STATEMENT_REQUEST_STATUS) {
      this.setState({renderIncomingForm: true});
    }
    if (this.props.item.phaseNum === INCOMING) {
      this.setState({renderIncomingForm: null});
      this.props.fetchData(this.props.item.responseId);
    }
    if (this.props.item.phaseNum === STATEMENT_DOCUMENT) {
      //запросить документ отдельно
    }
  }

  render() {
    const head = <h2>Request response id: {this.props.item.responseId}</h2>;

    return (
      <div className="RequestChain" style={RequestChainStyle}>
        {head}
        <p>
          <label>Phase: {this.props.item.phase}  </label>
          <input type="button" value="Next step" onClick={this.nextStepHandler}/>
        </p>
        {renderIfNotNull(StatmentRequest, this.props.item.statementRequest)}
        {renderIfNotNull(GetRequestStatus, this.props.item.getRequestStatus)}
        {renderIfNotNull(Incoming, this.props.item.incoming)}
        {renderIfNotNull(StatementDocument, this.props.item.statementDocument)}
        {renderIncomingForm(this.props.item.incoming, this.state.renderIncomingForm, this.props.item.responseId)}
        {renderError(this.props.item.status, this.props.item.soapMessageList, this.props.item.message)}
      </div>
      )
  }
}

function renderIncomingForm(incomingResponse, renderIncomingForm, responseId) {
  if ((incomingResponse === null) && (renderIncomingForm === true)) {
      return <IncomingForm responseId={responseId}/>;
  }
  return null;
}

function renderIfNotNull(Component, props) {
  if (props !== null) {
    return <Component request={props} />;
  }
  return null;
}

function renderError(status, xmlList, message) {
  if (status === 'ERROR') {
      return <Error xmlList={xmlList} message={message}/>;
  }
  return null;
}

function mapStateToProps(store) { 
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(nextStepRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestChain);

