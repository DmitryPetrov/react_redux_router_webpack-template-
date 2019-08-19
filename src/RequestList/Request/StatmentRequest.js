import React from 'react';

function StatmentRequest(props) {

  let request = props.request;

  const bankNameList = request.accounts.map((item, index) => {
    if(item instanceof Object){
      return (
        <li key="bankNameList{index}">
          Bank name {index + 1}: {item.bankName}
        </li>
      )
    }
    return <li key="bankNameList{index}"></li>;
  });

  return (
    <div className="StatmentRequest">
      <p>
        <b>Request name: {request.requestName}</b>
        <br/>Request id: {request.requestId}
        <br/>Org name: {request.orgName}
        <br/>From date: {request.fromDate}
        <br/>To date: {request.toDate}
      </p>
      <ul>
        {bankNameList}
      </ul>
    </div>
    )
}


export default (StatmentRequest);

