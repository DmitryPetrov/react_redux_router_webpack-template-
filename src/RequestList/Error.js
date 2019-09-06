import React from 'react';

import SoapMessageList from './../components/SoapMessageList';
import { ErrorStyle } from './../style';


function Error(props)  {
  return (
    <div className="Error" style={ErrorStyle}>
      <p>Server message: {props.message}</p>
      <SoapMessageList list={props.xmlList}/>
    </div>
  );
}

export default Error;

