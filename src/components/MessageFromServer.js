import React from 'react';

function MessageFromServer(props) {
  if (props.response.isFail === true) {
    return (
      <div>
        <h1>Sorry! There was an error loading the items</h1> 
        <p>{props.response.message}</p>
      </div>
      );
  }

  if (props.response.isLoading === true) {
    return (
      <div>
        <h1>Loading…</h1>
        <p>{props.response.message}</p>
      </div>
      );
  }

  if (props.response.isSuccessed === true) {
    return (
      <div>
        <h1>Message from server: {props.response.message.status}</h1>
        <p>{props.response.message.message}</p>
        <br />
        <h3>SOAP messages:</h3>
        <pre>{xmlPrint(props.response.message.soapMessages || "no soap messages")}</pre>
      </div>
      );
  }

  return (
    <div className="MessageFromServer">
      <h1>Message from server: </h1>
    </div>
    );
}

function xmlPrint(xml) {
  var format = require('xml-formatter');
 
  var formattedXml = format(xml);
  return formattedXml;
}


export default MessageFromServer;