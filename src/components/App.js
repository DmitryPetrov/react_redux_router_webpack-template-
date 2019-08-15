import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './../Store.js';
import Authorization from './../Authorization/Component';
import StatmentRequest from './../StatementRequest/Component';
import RequestList from './../RequestList/RequestList';
import Navigate from './Navigate';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigate />
        
        <Switch>
          <Route path="/" exact component={Authorization} />
          <Route path='/request/statmentRequest' component={StatmentRequest}/>
          <Route path='/requestList' component={RequestList}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
