import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './../Store.js';
import Authorization from './../Authorization/Component';
import StatmentRequest from './../StatementRequest/Component';
//import GetRequestStatus from './../GetRequestStatus/Component';
import Navigate from './Navigate';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigate />
        
        <Switch>
          <Route path="/" exact component={Authorization} />
          <Route path='/request/statmentRequest' component={StatmentRequest}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
