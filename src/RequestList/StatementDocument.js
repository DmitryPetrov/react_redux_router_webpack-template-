import React from 'react';

import { itemList } from './../functions/itemList'
import { withExpandButton } from './withExpandButton';

import StateResponse from './StateResponse'
import Statement from './Statement'

class StatementDocument extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      buttonName: 'Show response',
    }

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(event) {
    if (this.state.show) {
      this.setState({show: false, buttonName: 'Show response',});
    } else {
      this.setState({show: true, buttonName: 'Hide response',});
    }
  }

  render(){
    const header = <b>Request name: {this.props.request.requestName}</b>;

    if (this.props.showJson === true) {
      return (
        <div className="StatementDocument">
          <p>{header}</p>
          <pre>{JSON.stringify(this.props.request, undefined, 2)}</pre>
        </div>
      )
    }

    if (this.props.request.notProcessedYet === true) {
      return (
        <div className="StatementDocument">
          <p>
            {header}
            <br/>State: NOT PROCESSED YET
          </p>
        </div>
      );
    }

    let stateResponseData = null;
    let statementData = null;
    if (this.state.show) {
      stateResponseData = itemList(StateResponse, this.props.request.stateResponseList);
      statementData = itemList(Statement, this.props.request.statementList);
    }

    return (
      <div className="StatementDocument">
        <p>
          {header}
          <br />
          <input type="button" value={this.state.buttonName} onClick={this.buttonHandler}/>
          
          {stateResponseData}
          {statementData}
        </p>
      </div>
    );
  }
}

export default withExpandButton(StatementDocument);

