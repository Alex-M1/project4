import React from 'react';
import { StThemeToggle } from './styled';
import { useTheme } from '../../hooks/useTheme';

const HeaderTheme: React.FC = () => {
  const { colors, theme, changeTheme } = useTheme();
  return (
    <StThemeToggle
      theme={theme}
      colors={colors}
      onClick={changeTheme}
    />
  );
};
export default HeaderTheme;
