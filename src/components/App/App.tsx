import React from 'react';
import { StGlobalStyle } from './styled';

import Auth from '../Auth';

const App = () => {
  return (
    <div>
      <StGlobalStyle />
      <Auth/>
    </div>
  );
};

export default App;
