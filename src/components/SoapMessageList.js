import React from 'react';

function SoapMessageList(props) {
  if (props.list === null) {
    return (<div className="SoapMessageList"></div>);
  }

  const list = props.list.map((item, index) => {
      return (<p>{xmlPrint(item)}</p>);
  });

  return (
    <div className="SoapMessageList">
      <h3>SOAP messages:</h3>
      <br />
      {list}
    </div>
  );
}

function xmlPrint(xml) {
  var format = require('xml-formatter');
 
  var formattedXml = format(xml);
  return formattedXml;
}


export default (SoapMessageList);

