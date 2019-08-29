import React from 'react';

import { itemList } from './itemList'
import { withExpandButton } from './withExpandButton';

import StateResponse from './StateResponse'
import Statement from './Statement'

function StatementDocument(props)  {
  const header = <b>Request name: {props.request.requestName}</b>;
  console.log("StatementDocument ");

  if (props.showJson == true) {
    return (
      <div className="StatementDocument">
        <p>{header}</p>
        <pre>{JSON.stringify(props.request, undefined, 2)}</pre>
      </div>
    )
  }

  if (props.request.notProcessedYet === true) {
    return (
      <div className="StatementDocument">
        <p>
          {header}
          <br/>State: NOT PROCESSED YET
        </p>
      </div>
    );
  }

  return (
    <div className="StatementDocument">
      <p>
        {header}
        {itemList(StateResponse, props.request.stateResponseList)}
        {itemList(Statement, props.request.statementList)}
      </p>
    </div>
  );
}

export default withExpandButton(StatementDocument);

