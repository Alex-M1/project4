import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StGlobalStyle } from './styled';
import Auth from '../Auth';
import Registration from '../Registration';
import Header from '../Header';
import { useTheme } from '../hooks/useTheme';

const App = () => {
  const { colors, theme } = useTheme();
  return (
    <div>
      <StGlobalStyle 
        theme={theme}
        colors={colors}
      />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/signup" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
