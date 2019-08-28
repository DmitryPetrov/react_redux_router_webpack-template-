import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './../store.js';
import Authorization from './../Authorization/Component';
import StatmentRequest from './../StatementRequest/StatementRequest';
import RequestChainList from './../RequestList/RequestChainList';
import Navigate from './Navigate';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigate />
        
        <Switch>
          <Route path="/" exact component={Authorization} />
          <Route path='/request/statementRequest' component={StatmentRequest}/>
          <Route path='/requestList' component={RequestChainList}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
