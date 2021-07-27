import React from 'react';
import { CLIENT } from 'constants/urls';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Location } from 'history';
import { useTheme } from '../../hooks/useTheme';
import { StG, StS, StWrapper } from './styled';

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
          <StG
            theme={theme}
            colors={colors}
            path={path}
          >
            {t('games')}
          </StG>
        </NavLink>
        <NavLink to={CLIENT.statistic}>
          <StS
            theme={theme}
            colors={colors}
            path={path}
          >
            {t('statistic')}
          </StS>  
        </NavLink>
      </StWrapper>
  );
};
export default HeaderRoute;
