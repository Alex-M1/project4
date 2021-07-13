import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { StNavLink } from '../styled';

const AuthLink = () => {
  const { t } = useTranslation();
  return (
    <StNavLink>
      <p>{t('toRegister')}</p>
      &nbsp;
      <NavLink to="/signup">
        {t('toRegisterLink')}
      </NavLink>
    </StNavLink>
  );
};

export default AuthLink;
