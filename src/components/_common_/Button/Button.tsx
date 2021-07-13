import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/components/hooks/useTheme';
import { StButton } from './styled';
import { IButton } from './types';

const Button = ({ text, onClick }: IButton) => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
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
