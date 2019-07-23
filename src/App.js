import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import AuthorizationContainer from './AuthorizationContainer.js';
import store from './store.js';

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Authorization</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/home/">Home</Link>
            </li>
          </ul>
        </nav>
        
        <Route path="/" exact component={AuthorizationContainer} />
        <Route path="/about/" component={About} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
