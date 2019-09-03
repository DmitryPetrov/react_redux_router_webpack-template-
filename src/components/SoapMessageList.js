import React from 'react';

import { formatXml } from './../functions/formatXml';

function SoapMessageList(props) {
  if (props.list === null) {
    return (<div className="SoapMessageList"></div>);
  }

  const list = props.list.map((item, index) => {
      return (<pre>{formatXml(item)}</pre>);
  });

  return (
    <div className="SoapMessageList">
      <h3>SOAP messages:</h3>
      {list}
    </div>
  );
}

export default (SoapMessageList);

