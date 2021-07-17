import React from 'react';
import { url } from 'constants/urls';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import { StP, StWrapper } from './styled';

const HeaderRoute = () => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  return (
      <StWrapper>
        <StP
          colors={colors}
          theme={theme}
        >
          <NavLink to={url.main}>
            {t('games')}
          </NavLink>
        </StP>
        <StP
          colors={colors}
          theme={theme}
        >
          <NavLink to={url.statistic}>
            {t('statistic')}
          </NavLink>
        </StP>
      </StWrapper>
  );
};
export default HeaderRoute;
