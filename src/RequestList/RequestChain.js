import React from 'react';
import { connect } from 'react-redux';

import { nextStepRequest } from './actionCreatorList';
import { withExpandButton } from './withExpandButton';
import IncomingForm from './IncomingForm';

import StatmentRequest from './StatmentRequest';
import GetRequestStatus from './GetRequestStatus';
import Incoming from './Incoming';
import StatementDocument from './StatementDocument';

class RequestChain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {renderIncomingForm: null};

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(event) {
    event.preventDefault();
    if (this.props.item.phase === "STATEMENT_REQUEST") {
      this.setState({renderIncomingForm: null});
      this.props.fetchData(this.props.item.responseId);
    }
    if (this.props.item.phase === "STATEMENT_REQUEST_STATUS") {
      this.setState({renderIncomingForm: true});
    }
    if (this.props.item.phase === "INCOMING") {
      console.log("RequestChain nextStepHandler HII");
      this.setState({renderIncomingForm: null});
      this.props.fetchData(this.props.item.responseId);
    }
    if (this.props.item.phase === "STATEMENT_DOCUMENT") {
      //запросить документ отдельно
    }
  }

  render() {
    const head = <h2>Request response id: {this.props.item.responseId}</h2>;

    if (this.props.showJson == true) {
      return (
        <div className="RequestChain">
          {head}
          <pre>{JSON.stringify(this.props.item, undefined, 2)}</pre>
          <input type="button" value="Next step" onClick={this.nextStepHandler}/>
        </div>
      )
    }

    return (
      <div className="RequestChain">
        {head}
        <p>Phase: {this.props.item.phase}</p>
        {renderIfNotNull(StatmentRequest, this.props.item.statementRequest)}
        {renderIfNotNull(GetRequestStatus, this.props.item.getRequestStatus)}
        {renderIfNotNull(Incoming, this.props.item.incoming)}
        {renderIfNotNull(StatementDocument, this.props.item.statementDocument)}
        {renderIncomingForm(this.props.item.incoming, this.state.renderIncomingForm, this.props.item.responseId)}
        <input type="button" value="Next step" onClick={this.nextStepHandler}/>
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

function mapStateToProps(store) { 
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(nextStepRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withExpandButton(RequestChain));

