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
          <Link to="/request/incoming">....Incoming</Link>
        </li>
        <li>
          <Link to="/requestList">....RequestList</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigate;