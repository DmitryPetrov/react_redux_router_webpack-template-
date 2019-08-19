import React from 'react';

function Incoming(porps) {

  let request = this.props.request;

  const docTypeList = request.accounts.map((item, index) => {
    if(item instanceof Object){
      return (
        <li key="docTypeList{index}">
          Doc Type {index + 1}: {item.docType}
        </li>
      )
    }
    return <li key="docTypeList{index}"></li>;
  });

  return (
    <div className="Incoming">
      <p>
        <b>Request name: {request.requestName}</b>
        <br/>Request id: {request.requestId}
      </p>
      <ul>
        {docTypeList}
      </ul>
    </div>
    )
}


export default (Incoming);

