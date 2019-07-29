import React from 'react';
import { Link } from "react-router-dom";

import RequestNavigate from './requests/RequestNavigate'

function Navigate() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Authorization</Link>
        </li>
      </ul>
      <RequestNavigate/>
    </nav>
  );
}

export default Navigate;