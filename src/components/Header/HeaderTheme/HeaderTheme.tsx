import React from 'react';
import { StThemeToggle } from './styled';
import { useTheme } from '../../hooks/useTheme';

interface IProps {
  toggleThemeMode: () => void;
}

const HeaderTheme: React.FC <IProps> = ({ toggleThemeMode }) => {
  const { colors, theme } = useTheme();
  
  return (
    <StThemeToggle
      theme={theme}
      colors={colors}
      onClick={toggleThemeMode}
    />
  );
};
export default HeaderTheme;
