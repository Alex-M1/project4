import React from 'react';
import { useTranslation } from 'react-i18next';
import { ITitle } from './types';

const Title = ({ title }: ITitle) => {
  const { t } = useTranslation();
  return (
    <h1>{t(title)}</h1>
  );
};

export default Title;
