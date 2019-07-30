import React from 'react';
import { Link } from "react-router-dom";

function Navigate() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Authorization</Link>
        </li>
        <li>
          <Link to="/request/statmentRequest">....StatmentRequest</Link>
        </li>
        <li>
          <Link to="/request/getRequestStatus">....GetRequestStatus</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigate;