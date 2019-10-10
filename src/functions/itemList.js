import React from 'react';

export function itemList(Component, itemList) {
  let list = itemList.map((item, index) => {
    return <Component item={item} index={index} key={index}/>
  });

  return list;
}
