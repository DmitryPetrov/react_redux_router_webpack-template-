import React from 'react';

export function itemList(Component, itemList) {
	if (itemList === null) {
		return null
	}

  let list = itemList.map((item, index) => {
    return <Component item={item} index={index} key={index}/>
  });

  return list;
}
