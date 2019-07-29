import React from 'react';
import { Link } from "react-router-dom";

function RequestNavigate() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/request/statmentRequest">....StatmentRequest</Link>
        </li>
        <li>
          <Link to="/request/2">....SendRequest2</Link>
        </li>
        <li>
          <Link to="/request/3">....SendRequest3</Link>
        </li>
      </ul>
    </nav>
  );
}

export default RequestNavigate;