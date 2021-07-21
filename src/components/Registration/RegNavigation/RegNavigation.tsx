import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'src/components/hooks/useTheme';
import { StNavLink, StP } from 'src/components/Auth/styled';
import {client} from 'constants/urls';

const RegNavigation: React.FC = () => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <StNavLink
      theme={theme}
      colors={colors}
    >
      <p>{t('to_login')}</p>
      &nbsp;
      <NavLink to={client.authClient}>
        <StP
          theme={theme}
          colors={colors}
        >
          {t('to_login_link')}
        </StP>
      </NavLink>
    </StNavLink>
  );
};

export default RegNavigation;
