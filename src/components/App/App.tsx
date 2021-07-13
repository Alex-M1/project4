import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StGlobalStyle } from './styled';

import Auth from '../Auth';
import Registration from '../Registration';

const App = () => {
  return (
    <div>
      <StGlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/signup" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
