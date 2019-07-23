import React from 'react';

class MessageFromServer extends React.Component {
  render() {
  	if (this.props.response.isFail === true) {
      return (
        <div>
          <h1>Sorry! There was an error loading the items</h1> 
          <p>{this.props.response.message}</p>
        </div>
        );
    }

    if (this.props.response.isLoading === true) {
      return (
        <div>
          <h1>Loading…</h1>
          <p>{this.props.response.message}</p>
        </div>
        );
    }

    if (this.props.response.isSuccessed === true) {
      return (
      <div>
        <h1>Message from server: {this.props.response.message.status}</h1>
        <p>{this.props.response.message.message}</p>
        <br />
        <h3>SOAP messages:</h3>
        <p>{xmlPrint(this.props.response.message.soapMessages)}</p>
      </div>
      );
    }

    return (
      <div className="MessageFromServer">
        <h1>Message from server: </h1>
      </div>
      );
  }
}


function xmlPrint(xml) {
  var format = require('xml-formatter');
 
  var formattedXml = format(xml);
  console.log(formattedXml);
  return formattedXml;
}


export default MessageFromServer;