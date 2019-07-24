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
          <Link to="/requestList">Requests list</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigate;