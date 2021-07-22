import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITitle } from './types';
import { StTitle } from './styled';
import { useTheme } from '../../hooks/useTheme';

const Title = ({ title }: ITitle) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  
  return (
    <StTitle
      theme={theme}
      colors={colors}
    >
      {t(title)}
    </StTitle>
  );
};

export default Title;
