import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import AuthorizationContainer from './AuthorizationContainer.js';
import store from './../store.js';
import RequestList from './requests/RequestList'
import SendRequest1 from './requests/SendRequest/SendRequest1';
import SendRequest2 from './requests/SendRequest/SendRequest2';
import SendRequest3 from './requests/SendRequest/SendRequest3';
import Request_2 from './requests/Request_2/Request_2';
import Navigate from './Navigate';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigate />
        
        <Switch>
          <Route path="/" exact component={AuthorizationContainer} />
          <Route path="/requestList" exact component={RequestList} />
            <Route path='/sendRequest/1' component={SendRequest1}/>
            <Route path='/sendRequest/2' component={SendRequest2}/>
            <Route path='/sendRequest/3' component={SendRequest3}/>
            <Route path='/request/2' component={Request_2}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
