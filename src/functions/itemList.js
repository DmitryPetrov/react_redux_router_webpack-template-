import React from 'react';

export function itemList(Component, itemList) {
  let list = itemList.map((item, index) => {
    return (
      <div key={index}>
        <Component item={item} index={index}/>
      </div>
    )
  });

  return list;
}
