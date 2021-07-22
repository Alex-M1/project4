import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { client } from 'constants/urls';
import { StGlobalStyle } from './styled';
import Auth from '../Auth';
import Registration from '../Registration';
import Header from '../Header';
import Main from '../Main';
import { useTheme } from '../hooks/useTheme';
import TicTac from '../TicTac';
import Statistic from '../Statistic';
import Checkers from '../Checkers';

const App: React.FC = () => {
  const { colors, theme } = useTheme();
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path={client.authClient} component={Auth} />
          <Route path={client.regClient} component={Registration} />
          <Route path={client.main} component={Main} />
          <Route path={client.ticTacClient} component={TicTac} />
          <Route path={client.statistic} component={Statistic} />
          <Route path={client.checkers} component={Checkers} />
        </Switch>
      </Router>
      <StGlobalStyle
        theme={theme}
        colors={colors}
      />
      <ToastContainer />
    </>
  );
};

export default App;
