import React from 'react';

import { withExpandButton } from './withExpandButton';
import { JsonStyle } from './../style';


function StateResponse(props) {
  if (props.showJson === true) {
    return (
      <div className="StateResponse">
        <p><b>Doc type: {props.item.docType}</b></p>
        <pre style={JsonStyle}>{JSON.stringify(props.item, undefined, 2)}</pre>
      </div>
    )
  }

  return (
    <div className="StateResponse">
      <p>
        <b>Doc type: {props.item.docType}</b>
        <br/>Bank message: {props.item.bankMessage}
        <br/>State: {props.item.state}
        <br/>Doc id: {props.item.docId}
        <br/>Ext id: {props.item.extId}          
      </p>
    </div>
  );
}

export default withExpandButton(StateResponse);

