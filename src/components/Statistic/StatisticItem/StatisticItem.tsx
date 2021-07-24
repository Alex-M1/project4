import React from 'react';
import { useTranslation } from 'react-i18next';
import { IStatUUID } from 'store/statistic/types';

interface IProps {
  statistic: Array<IStatUUID>;
}

const StatisticItem: React.FC <IProps> = ({ statistic }) => {
  const { t } = useTranslation();
  return (
    statistic.map((data) => {
      return (
      <div key={data.id}>
        <span>{data.creatorLogin}</span>
        <span>{t(data.gameType)}</span>
        <span>{data.id}</span>
      </div>
      );
    })
  );
};

export default StatisticItem;
