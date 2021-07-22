import React from 'react';
import { CLIENT } from 'constants/urls';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import { StP, StWrapper } from './styled';

const HeaderRoute = () => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  return (
      <StWrapper>
        <NavLink to={CLIENT.main}>
          <StP
            theme={theme}
            colors={colors}
          >
            {t('games')}
          </StP>
        </NavLink>
        <NavLink to={CLIENT.statistic}>
          <StP
            theme={theme}
            colors={colors}
          >
            {t('statistic')}
          </StP>  
        </NavLink>
      </StWrapper>
  );
};
export default HeaderRoute;
