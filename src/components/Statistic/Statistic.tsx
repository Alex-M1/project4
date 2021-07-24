import React from 'react';
import { useTheme } from '../hooks/useTheme';
import StatisticTable from './StatisticTable';
import { StContainer } from './styled';

const Statistic: React.FC = () => {
  const { colors, theme } = useTheme();
  return (
      <StContainer
        theme={theme}
        colors={colors}
      >
        <StatisticTable/>
      </StContainer>
  );
};
export default Statistic;
