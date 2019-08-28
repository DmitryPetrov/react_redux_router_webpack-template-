import React from 'react';

import DocType from './DocType'

function DocTypeList(props) {
  const list = props.docTypes.map((item, index) => {
    if(item !== undefined){
      return (
        <div key={index}>
          <br/>
          <DocType index={index}/>
        </div>)
    } else {
      return <div key={index}></div>;
    }
  });
  return <div className="DocTypeList">{list}</div>;
}

export default DocTypeList;