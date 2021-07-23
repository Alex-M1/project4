import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import StatisticItem from '../StatisticItem';
import { StHeaderWrapper, StResultsWrapper, StWrapper } from './styled';

const StatisticTable = () => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();

  return (
    <StWrapper
          theme={theme}
          colors={colors}
    >
      <StHeaderWrapper
        theme={theme}
        colors={colors}
      >
        <h1>{t('game_statistic')}</h1>
        <div>
          <span>{t('user_name')}</span>
          <span>{t('game_type')}</span>
          <span>{t('result')}</span>
        </div>
      </StHeaderWrapper>
      <StResultsWrapper
        theme={theme}
        colors={colors}
      >
        <StatisticItem/>
      </StResultsWrapper>
    </StWrapper>
  );
};

export default StatisticTable;
