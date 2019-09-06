import React from 'react';

import { withExpandButton } from './withExpandButton';
import { JsonStyle } from './../style';


function Statement(props)  {
  const header = <b>Doc type: {props.item.docType}</b>;

  if (props.showJson === true) {
    return (
      <div className="Statement">
        <p>{header}</p>
        <pre style={JsonStyle}>{JSON.stringify(props.item, undefined, 2)}</pre>
      </div>
    )
  }

  return (
    <div className="Statement">
      <p>
        {header}
        <br/>Org name: {props.item.orgName}
        <br/>From date: {props.item.fromDate}
        <br/>To date: {props.item.toDate}       
      </p>
    </div>
  );
}

export default withExpandButton(Statement);

