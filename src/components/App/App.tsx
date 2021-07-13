import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/signup" component={Registration} />
        </Switch>
      </Router>
      <StGlobalStyle
        theme={theme}
        colors={colors}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
