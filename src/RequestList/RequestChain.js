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

    this.state = {incomingForm: null};

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(event) {
    event.preventDefault();
    if (this.props.item.phase === "STATEMENT_REQUEST") {
      this.setState({incomingForm: null});
      this.props.fetchData(this.props.item.responseId);
    }
    if (this.props.item.phase === "STATEMENT_REQUEST_STATUS") {
      this.setState({incomingForm: true});
    }
    if (this.props.item.phase === "INCOMING") {
      this.setState({incomingForm: null});
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
        {renderInNotNull(StatmentRequest, this.props.item.statementRequest)}
        {renderInNotNull(GetRequestStatus, this.props.item.getRequestStatus)}
        {renderInNotNull(Incoming, this.props.item.incoming)}
        {renderInNotNull(StatementDocument, this.props.item.statementDocument)}
        {renderInNotNull(IncomingForm, this.state.incomingForm)}
        <input type="button" value="Next step" onClick={this.nextStepHandler}/>
      </div>
      )
  }
}

function renderInNotNull(Component, props) {
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

