import React from 'react';
import { connect } from 'react-redux';

import SoapMessageList from './../../components/SoapMessageList'
import ObjectFromServer from './../../components/ObjectFromServer'

function GetRequestStatus(props) {
  if (props.request.isFail === true) {
    return (
      <div className="GetRequestStatus">
        <h2>Request status: {props.request.message}</h2>
        <h2>Server response status: {props.request.response.status}</h2>
        <h2>Message from server: {props.request.response.message}</h2>
      </div>
      );
  }

  if (props.request.isLoading === true) {
    return (
      <div className="GetRequestStatus">
        <h2>Request status: {props.request.message}</h2>
        <h2>Server response status: {props.request.response.status}</h2>
        <h2>Message from server: {props.request.response.message}</h2>
      </div>
      );
  }

  if (props.request.isSuccessed === true) {
    return (
      <div className="GetRequestStatus">
        <h2>Request status: {props.request.message}</h2>
        <h2>Server response status: {props.request.response.status}</h2>
        <h2>Message from server: {props.request.response.message}</h2>
        <br />
        <SoapMessageList list={props.request.response.soapMessages}/>
        <ObjectFromServer object={props.request.response.object}/>
      </div>
      );
  }

  return (
    <div className="GetRequestStatus">
    </div>
  );
}

function xmlPrint(xml) {
  var format = require('xml-formatter');
 
  var formattedXml = format(xml);
  return formattedXml;
}


export default (GetRequestStatus);

