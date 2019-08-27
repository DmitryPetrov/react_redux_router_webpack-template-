import React from 'react';

function Incoming(props) {

  let request = props.request;

  const docTypeList = request.docTypes.map((item, index) => {
    if((typeof item) === 'string'){
      return (
        <li key={index}>
          Doc Type {index + 1}: {item}
        </li>
      )
    }
    return <li key={index}></li>;
  });

  return (
    <div className="Incoming">
      <p>
        <b>Request name: {request.requestName}</b>
        <br/>Request id: {request.requestId}
        <br/>Response id: {request.responseId}
      </p>
      <ul>
        {docTypeList}
      </ul>
    </div>
    )
}


export default (Incoming);

