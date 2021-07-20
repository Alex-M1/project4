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
        <NavLink to={url.main}>
          <StP
            colors={colors}
            theme={theme}
          >
            {t('games')}
          </StP>
        </NavLink>
        <NavLink to={url.statistic}>
          <StP
            colors={colors}
            theme={theme}
          >
            {t('statistic')}
          </StP>  
        </NavLink>
      </StWrapper>
  );
};
export default HeaderRoute;
