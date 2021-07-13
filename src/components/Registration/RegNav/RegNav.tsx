import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { StNavLink } from '../../Auth/styled';

const RegNav = () => {
  const { t } = useTranslation();
  return (
    <StNavLink>
      <p>{t('toLogin')}</p>
      &nbsp;
      <NavLink to="/">
        {t('toLoginLink')}
      </NavLink>
    </StNavLink>
  );
};

export default RegNav;
