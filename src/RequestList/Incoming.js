import React from 'react';

import {withExpandButton} from './withExpandButton';

function Incoming(props) {
  const header = <b>Request name: {props.request.requestName}</b>;

  if (props.showJson == true) {
    return (
      <div className="Incoming">
        <p>{header}</p>
        <pre>{JSON.stringify(props.request, undefined, 2)}</pre>
      </div>
    )
  }

  const docTypeList = props.request.docTypes.map((item, index) => {
      return <li key={index}>Doc Type {index + 1}: {item}</li>;
  });

  return (
    <div className="Incoming">
      <p>
        {header}
        <br/>Request id: {props.request.requestId}
        <br/>Response id: {props.request.responseId}
      </p>
      <ul>
        {docTypeList}
      </ul>
    </div>
    )
}

export default withExpandButton(Incoming);

