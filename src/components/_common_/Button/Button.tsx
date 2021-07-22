import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/components/hooks/useTheme';
import { StButton } from './styled';

interface IProps {
  text: string;
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IProps> = ({ text, onClick }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  
  return (
    <StButton
      type="button"
      theme={theme}
      colors={colors}
      onClick={onClick}
    >
      {t(text)}
    </StButton>
  );
};

export default Button;
