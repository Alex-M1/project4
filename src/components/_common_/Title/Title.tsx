import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../hooks/useTheme';
import { StTitle } from './styled';
import { ITitle } from './types';

const Title = ({ title }: ITitle) => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
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
