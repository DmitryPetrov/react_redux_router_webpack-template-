import React from 'react';

import { withExpandButton } from './withExpandButton';
import StateResponse from './StateResponse'
import { JsonStyle } from './../style';


function GetRequestStatus(props) {
  const header = <b>Request name: {props.request.requestName}</b>;

  if (props.showJson === true) {
    return (
      <div className="GetRequestStatus">
        <p>{header}</p>
        <pre style={JsonStyle}>{JSON.stringify(props.request, undefined, 2)}</pre>
      </div>
    )
  }

  if (props.request.notProcessedYet === true) {
    return (
      <div className="GetRequestStatus">
        <p>
          {header}
          <br/>State: NOT PROCESSED YET
        </p>
      </div>
    );
  }

  return (
    <div className="GetRequestStatus">
      <p>{header}</p>
      <StateResponse item={props.request.stateResponseList[0]}/>
    </div>
  );
}

export default withExpandButton(GetRequestStatus);

