import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'src/components/hooks/useTheme';
import { StNavLink } from 'src/components/Auth/styled';
import { url } from 'constants/urls';

const RegNavigation = () => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <StNavLink
      theme={theme}
      colors={colors}
    >
      <p>{t('to_login')}</p>
      &nbsp;
      <NavLink to={url.authClient}>
        {t('to_login_link')}
      </NavLink>
    </StNavLink>
  );
};

export default RegNavigation;
