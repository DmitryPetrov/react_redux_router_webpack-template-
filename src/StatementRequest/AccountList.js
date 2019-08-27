import React from 'react';

import Account from './Account'

function AccountList(props) {
  const list = props.accounts.map((item, index) => {
    if(item !== undefined){
      return (
        <div key={index}>
          <br/>
          <Account index={index}/>
        </div>)
      }
    return <div key={index}></div>;
  });
  return <div className="AccountList">{list}</div>;
}

export default AccountList;