import React from 'react';

import { formatXml } from './../functions/formatXml';
import { XmlStyle } from './../style';


function Message(props) {
  return (
    <div className="Message">
      <pre style={XmlStyle}>{formatXml(props.item)}</pre>
    </div>
  );
}

export default (Message);