import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './../store.js';
import Authorization from './../Authorization/Authorization';
import StatmentRequest from './../StatementRequest/StatementRequest';
import RequestChainList from './../RequestList/RequestChainList';
import MessageList from './../SoapMessageList/MessageList';
import Navigate from './Navigate';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Navigate />
        
        <Switch>
          <Route path="/" exact component={Authorization} />
          <Route path='/request/new/statementRequest' component={StatmentRequest}/>
          <Route path='/request/list' component={RequestChainList}/>
          <Route path='/soapMessage/list' component={MessageList}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
