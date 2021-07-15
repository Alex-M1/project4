import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { url } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StNavLink } from '../styled';

const AuthNav = () => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <StNavLink
      theme={theme}
      colors={colors}
    >
      <p>{t('to_register')}</p>
      &nbsp;
      <NavLink to={url.signUp}>
        {t('to_register_link')}
      </NavLink>
    </StNavLink>
  );
};

export default AuthNav;
