import React from 'react';

import { withExpandButton } from './withExpandButton';

function StateResponse(props) {
  if (props.showJson == true) {
    return (
      <div className="StateResponse">
        <p><b>Doc type: {props.response.docType}</b></p>
        <pre>{JSON.stringify(props.response, undefined, 2)}</pre>
      </div>
    )
  }

  return (
    <div className="StateResponse">
      <p>
        <b>Doc type: {props.response.docType}</b>
        <br/>Bank message: {props.response.bankMessage}
        <br/>State: {props.response.state}
        <br/>Doc id: {props.response.docId}
        <br/>Ext id: {props.response.extId}          
      </p>
    </div>
  );
}

export default withExpandButton(StateResponse);

