import React from 'react';

import AccountComponent from './AccountComponent'

function AccountListComponent(props) {
  const list = props.accounts.map((item, index) => {
    if(item !== undefined){
      return (
        <div key={index}>
          <br/>
          <AccountComponent index={index}/>
        </div>)
      }
    return <div key={index}></div>;
  });
  return <div className="AccountListComponent">{list}</div>;
}

export default AccountListComponent;