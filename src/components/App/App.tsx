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
import { useTheme } from '../hooks/useTheme';
import TicTac from '../TicTac';

const App: React.FC = () => {
  useEffect(() => {
    const sock = new SockJS();
    sock.connect();
  });
  const { colors, theme } = useTheme();
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={url.authClient} component={Auth} />
          <Route path={url.regClient} component={Registration} />
          <Route path={url.ticTacClient} component={TicTac} />
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
