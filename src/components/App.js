import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';


import store from './../store.js';
import Authorization from './../Authorization/Authorization';
import StatmentRequest from './../StatementRequest/StatementRequest';
import PayRequest from './../PayRequest/components/PayRequest';
import RequestChainList from './../RequestList/components/RequestChainList';
import MessageList from './../SoapMessageList/MessageList';
import SideBar from './SideBar';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SideBar/>
        <Switch>
          <Route path="/" exact component={Authorization} />
          <Route path='/request/new/statementRequest' component={StatmentRequest}/>
          <Route path='/request/new/payRequest' component={PayRequest}/>
          <Route path='/request/list' component={RequestChainList}/>
          <Route path='/soapMessage/list' component={MessageList}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
