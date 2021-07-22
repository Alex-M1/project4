import React from 'react';
import { IStatUUID } from 'store/statistic/types';
import { useTheme } from '../hooks/useTheme';
import { StContainer } from './styled';

interface IProps {
  getStatUUID: IStatUUID[],
}

const Statistic: React.FC <IProps> = () => {
  const { colors, theme } = useTheme();
  return (
      <StContainer
        theme={theme}
        colors={colors}
      >
        Statistic will be here
      </StContainer>
  );
};
export default Statistic;
