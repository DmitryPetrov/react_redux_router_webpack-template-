import React from 'react';

function MessageFromServer(props) {
  if (props.request.isFail === true) {
    return (
      <div>
        <h1>Sorry! There was an error loading the items</h1> 
        <p>{props.request.message}</p>
      </div>
      );
  }

  if (props.request.isLoading === true) {
    return (
      <div>
        <h1>Loading…</h1>
        <p>{props.request.message}</p>
      </div>
      );
  }

  if (props.request.isSuccessed === true) {
    return (
      <div>
        <h1>Message from server: {props.request.message.status}</h1>
        <p>{props.request.message.message}</p>
        <br />
        <h3>SOAP messages:</h3>
        <pre>{xmlPrint(props.request.message.soapMessages || "no soap messages")}</pre>
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