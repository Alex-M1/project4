import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Statistic = () => {
  const { colors, theme } = useTheme();
  return (
      <div
        theme={theme}
        colors={colors}
      >
        Statistic will be here
      </div>
  );
};
export default Statistic;
