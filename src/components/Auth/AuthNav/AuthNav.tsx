import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { url } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StNavLink } from '../styled';

const AuthNav: React.FC = () => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
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
