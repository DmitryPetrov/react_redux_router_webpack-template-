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
          <Link to="/request/new/statementRequest">....StatmentRequest</Link>
        </li>
        <li>
          <Link to="/request/list">....RequestList</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigate;