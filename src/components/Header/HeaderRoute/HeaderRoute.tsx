import React from 'react';
import { StP, StWrapper } from './styled';
import { useTheme } from '../../hooks/useTheme';

const HeaderRoute = () => {
  const { colors, theme } = useTheme();
  return (
      <StWrapper>
        <StP
          colors={colors}
          theme={theme}
        >
          Main Page
        </StP>
        <StP
          colors={colors}
          theme={theme}
        >
          Statistic
        </StP>
      </StWrapper>
  );
};
export default HeaderRoute;
