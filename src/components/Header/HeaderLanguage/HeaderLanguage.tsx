import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { StLangToggle } from './styled';

interface IProps {
  text: string;
}

const HeaderLanguage: React.FC <IProps> = ({ text }: IProps) => {
  const { colors, theme } = useTheme();

  return (
    <StLangToggle
      theme={theme}
      colors={colors}
    >
      {text}
    </StLangToggle>
  );
};
export default HeaderLanguage;
