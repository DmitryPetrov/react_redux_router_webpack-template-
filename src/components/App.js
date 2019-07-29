import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import AuthorizationContainer from './AuthorizationContainer.js';
import store from './../store.js';
import StatmentRequest from './requests/SendRequest/StatmentRequest';
import SendRequest2 from './requests/SendRequest/SendRequest2';
import SendRequest3 from './requests/SendRequest/SendRequest3';
import Navigate from './Navigate';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigate />
        
        <Switch>
          <Route path="/" exact component={AuthorizationContainer} />
            <Route path='/sendRequest/1' component={StatmentRequest}/>
            <Route path='/sendRequest/2' component={SendRequest2}/>
            <Route path='/sendRequest/3' component={SendRequest3}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
