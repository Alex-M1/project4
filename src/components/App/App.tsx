import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from '../Auth';
import Registration from '../Registration';
import Header from '../Header';
import Main from '../Main';
import { useTheme } from '../hooks/useTheme';
import { url } from 'constants/urls';

import { StGlobalStyle } from './styled';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const { colors, theme } = useTheme();
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path={url.signUp} component={Registration} />
          <Route path={url.main} component={Main} />
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
