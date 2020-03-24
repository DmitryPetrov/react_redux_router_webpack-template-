import React from 'react';
import shortid from 'shortid';

export function itemList(Component, itemList) {
	if (itemList === null) {
		return null
	}

  let list = itemList.map((item, index) => {
    return <Component item={item} index={index} key={shortid.generate()}/>
  });

  return list;
}
