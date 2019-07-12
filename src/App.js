import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Authorization from './Authorization.js'

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Authorization} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
}

export default App;
