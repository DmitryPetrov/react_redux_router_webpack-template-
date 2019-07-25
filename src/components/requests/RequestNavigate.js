import React from 'react';
import { Link } from "react-router-dom";

function RequestNavigate() {
  return (
    <nav>
      <ul>
        <li>
          sendRequest
        </li>
        <li>
          <Link to="/sendRequest/1">....SendRequest1</Link>
        </li>
        <li>
          <Link to="/sendRequest/2">....SendRequest2</Link>
        </li>
        <li>
          <Link to="/sendRequest/3">....SendRequest3</Link>
        </li>
        <li>
          <Link to="/request/2">Request2</Link>
        </li>
        </ul>
    </nav>
  );
}

export default RequestNavigate;