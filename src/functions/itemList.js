import React from 'react';

export function itemList(Component, itemList) {
  let list = itemList.map((item, index) => {
    return (
      <div key={index}>
        <Component item={item} index={index} key={index}/>
      </div>
    )
  });

  return list;
}
