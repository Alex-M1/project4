import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from 'src/components/hooks/useTheme';
import { IStatUUID } from 'store/statistic/types';
import StatisticItem from '../StatisticItem';
import { StHeaderWrapper, StResultsWrapper, StWrapper } from './styled';

interface IProps {
  getStatistic: () => void;
  statisticData: Array<IStatUUID>;
}

const StatisticTable: React.FC <IProps> = ({ getStatistic, statisticData }) => {
  useEffect(() => {
    getStatistic();
  }, []);
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const statistic = statisticData.map((el) => {
    return <StatisticItem {...el} key={uuidv4()}/>;
  });

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
          <span>{t('opposer')}</span>
          <span>{t('winner')}</span>
        </div>
      </StHeaderWrapper>
      <StResultsWrapper
        theme={theme}
        colors={colors}
      >
        {statistic}
      </StResultsWrapper>
    </StWrapper>
  );
};

export default StatisticTable;
