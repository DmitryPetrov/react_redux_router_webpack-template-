import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './../store.js';
import Authorization from './../Authorization/Authorization';
import Organisations from './../Organisation/Organisations';
import StatmentRequest from './../StatementRequest/StatementRequest';
import PayRequest from './../PayRequest/components/PayRequest';
import RequestChainList from './../RequestList/components/RequestChainList';
import MessageList from './../SoapMessageList/MessageList';
import SideBar from './SideBar';

import { REST_API } from './../globalInitialState';


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SideBar/>
        <Switch>
          <Route path={REST_API.authorization} exact component={Authorization} />
          <Route path={REST_API.organisations} component={Organisations} />
          <Route path={REST_API.statementRequest} component={StatmentRequest}/>
          <Route path={REST_API.payRequest} component={PayRequest}/>
          <Route path={REST_API.requestChains} component={RequestChainList}/>
          <Route path={REST_API.soapMessages} component={MessageList}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
