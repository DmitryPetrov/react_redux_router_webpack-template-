import React from 'react';

import { formatXml } from './../functions/formatXml';

function Message(props) {
  return (
    <div className="Message">
      <pre>{formatXml(props.item)}</pre>
    </div>
  );
}

export default (Message);