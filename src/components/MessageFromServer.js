import React from 'react';

import SoapMessageList from './SoapMessageList'
import ObjectFromServer from './ObjectFromServer'

function MessageFromServer(props) {
  if (props.request.isFail === true) {
    return (
      <div className="MessageFromServer">
        <h2>Request status: {props.request.message}</h2>
      </div>
      );
  }

  if (props.request.isLoading === true) {
    return (
      <div className="MessageFromServer">
        <h2>Request status: {props.request.message}</h2>
      </div>
      );
  }

  if (props.request.isSuccessed === true) {
    return (
      <div className="MessageFromServer">
        <h2>Request status: {props.request.message}</h2>
        <h2>Server response status: {props.request.response.status}</h2>
        <h2>Message from server: {props.request.response.message}</h2>
        <br />
        <SoapMessageList list={props.request.response.soapMessageList}/>
        <ObjectFromServer object={props.request.response.object}/>
      </div>
      );
  }

  return (
    <div className="MessageFromServer">
    </div>
  );
}

export default MessageFromServer;