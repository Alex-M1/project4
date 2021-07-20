import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SockJS from 'src/helpers/SockJS';
import { url } from 'constants/urls';
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
  useEffect(() => {
    const sock = new SockJS();
    sock.connect();
  });
  const { colors, theme } = useTheme();

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path={url.authClient} component={Auth} />
          <Route path={url.regClient} component={Registration} />
          <Route path={url.main} component={Main} />
          <Route path={url.ticTacClient} component={TicTac} />
          <Route path={url.statistic} component={Statistic} />
          <Route path={url.checkers} component={Checkers} />
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
