import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import AuthorizationContainer from './AuthorizationContainer.js';
import store from './../store.js';
import RequestList from './requests/RequestList'
import Request_1_1 from './requests/Request_1/Request_1_1';
import Request_1_2 from './requests/Request_1/Request_1_2';
import Request_1_3 from './requests/Request_1/Request_1_3';
import Request_2 from './requests/Request_2/Request_2';
import Navigate from './Navigate';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigate />
        
        <Switch>
          <Route path="/" exact component={AuthorizationContainer} />
          <Route path="/request" exact component={RequestList} />
            <Route path='/request/1/1' component={Request_1_1}/>
            <Route path='/request/1/2' component={Request_1_2}/>
            <Route path='/request/1/3' component={Request_1_3}/>
            <Route path='/request/2' component={Request_2}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
