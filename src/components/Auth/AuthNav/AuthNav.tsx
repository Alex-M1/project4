import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CLIENT } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StNavLink, StP } from '../styled';

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
      <NavLink to={CLIENT.signUp}>
        <StP
          theme={theme}
          colors={colors}
        >
          {t('to_register_link')}
        </StP>
      </NavLink>
    </StNavLink>
  );
};

export default AuthNav;
