import React from 'react';

import { withExpandButton } from './withExpandButton';


function Statement(props)  {
  const header = <b>Doc type: {props.response.docType}</b>;

  if (props.showJson == true) {
    return (
      <div className="Statement">
        <p>{header}</p>
        <pre>{JSON.stringify(props.response, undefined, 2)}</pre>
      </div>
    )
  }

  return (
    <div className="Statement">
      <p>
        {header}
        <br/>Org name: {props.request.orgName}
        <br/>From date: {props.request.fromDate}
        <br/>To date: {props.request.toDate}       
      </p>
    </div>
  );
}

export default withExpandButton(Statement);

