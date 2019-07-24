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
          <Link to="/request">Requests</Link>
        </li>
        <li>
          <label>────Request 1</label>
        </li>
        <li>
          <Link to="/request/1/1">────────Request 1 1</Link>
        </li>
        <li>
          <Link to="/request/1/2">────────Request 1 2</Link>
        </li>
        <li>
          <Link to="/request/1/3">────────Request 1 3</Link>
        </li>
        <li>
          <Link to="/request/2">────Request 2</Link>
        </li>
        </ul>
    </nav>
  );
}

export default Navigate;