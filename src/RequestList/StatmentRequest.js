import React from 'react';

import {withExpandButton} from './withExpandButton';

function StatmentRequest(props) {
  const header = <b>Request name: {props.request.requestName}</b>;

  if (props.showJson === true) {
    return (
      <div className="StatmentRequest">
        <p>{header}</p>
        <pre>{JSON.stringify(props.request, undefined, 2)}</pre>
      </div>
    )
  }

  const bankNameList = props.request.accounts.map((item, index) => {
      return <li key={index}>Bank name {index + 1}: {item.bankName}</li>;
  });

  return (
    <div className="StatmentRequest">
      <p>
        {header}
        <br/>Request id: {props.request.requestId}
        <br/>Response id: {props.request.responseId}
        <br/>Org name: {props.request.orgName}
        <br/>From date: {props.request.fromDate}
        <br/>To date: {props.request.toDate}
      </p>
      <ul>
        {bankNameList}
      </ul>
    </div>
    )
}

export default withExpandButton(StatmentRequest);

