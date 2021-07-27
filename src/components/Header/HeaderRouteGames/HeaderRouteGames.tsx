import React from 'react';
import { CLIENT } from 'constants/urls';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import { StP, StWrapperGame } from '../HeaderRoute/styled';

const HeaderRouteGames = () => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  return (
    <StWrapperGame>
        <NavLink to={CLIENT.main}>
          <StP
            theme={theme}
            colors={colors}
          >
            {t('back_to_main_menu')}
          </StP>  
        </NavLink>
    </StWrapperGame>
  );
};
export default HeaderRouteGames;
