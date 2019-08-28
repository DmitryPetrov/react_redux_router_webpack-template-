import React from 'react';

import { withExpandButton } from './withExpandButton';
import StateResponse from './StateResponse'

function GetRequestStatus(props) {
  const header = <b>Request name: {props.request.requestName}</b>;

  if (props.showJson == true) {
    return (
      <div className="GetRequestStatus">
        <p>{header}</p>
        <pre>{JSON.stringify(props.request, undefined, 2)}</pre>
      </div>
    )
  }

  return (
    <div className="GetRequestStatus">
      <p>{header}</p>
      <StateResponse response={props.request.stateResponseList[0]}/>
    </div>
  );
}

export default (GetRequestStatus);

