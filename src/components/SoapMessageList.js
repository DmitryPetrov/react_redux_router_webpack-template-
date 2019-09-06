import React from 'react';

import { formatXml } from './../functions/formatXml';
import { XmlStyle } from './../style';


function SoapMessageList(props) {
  if (props.list === null) {
    return (<div className="SoapMessageList"></div>);
  }

  const list = props.list.map((item, index) => {
      return (<pre key={index} style={XmlStyle}>{formatXml(item)}</pre>);
  });

  return (
    <div className="SoapMessageList">
      <h3>SOAP messages:</h3>
      {list}
    </div>
  );
}

export default (SoapMessageList);

