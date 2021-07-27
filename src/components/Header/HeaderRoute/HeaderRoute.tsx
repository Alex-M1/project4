import React from 'react';
import { CLIENT } from 'constants/urls';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Location } from 'history';
import { useTheme } from '../../hooks/useTheme';
import { StGames, StStatistic, StWrapper } from './styled';

interface IProps {
  location: Location;
}

const HeaderRoute: React.FC <IProps> = ({ location }) => {
  const path = location.pathname;
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  return (
      <StWrapper>
        <NavLink to={CLIENT.main}>
          <StGames
            theme={theme}
            colors={colors}
            path={path}
          >
            {t('games')}
          </StGames>
        </NavLink>
        <NavLink to={CLIENT.statistic}>
          <StStatistic
            theme={theme}
            colors={colors}
            path={path}
          >
            {t('statistic')}
          </StStatistic>  
        </NavLink>
      </StWrapper>
  );
};
export default HeaderRoute;
