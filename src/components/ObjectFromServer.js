import React from 'react';

function ObjectFromServer(props) {
  if (props.object === null) {
    return (<div className="ObjectFromServer"></div>);
  }

  return (
    <div className="ObjectFromServer">
      <h3>Response object:</h3>
      <pre>{JSON.stringify(props.object, null, 2)}</pre>
    </div>
  );
}

export default (ObjectFromServer);

