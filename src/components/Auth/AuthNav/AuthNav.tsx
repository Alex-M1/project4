import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { useTheme } from 'src/components/hooks/useTheme';
import { StNavLink } from '../styled';

const AuthLink = () => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <StNavLink
      theme={theme}
      colors={colors}
    >
      <p>{t('toRegister')}</p>
      &nbsp;
      <NavLink to="/signup">
        {t('toRegisterLink')}
      </NavLink>
    </StNavLink>
  );
};

export default AuthLink;
