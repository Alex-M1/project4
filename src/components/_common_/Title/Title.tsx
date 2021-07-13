import React from 'react';
import { useTranslation } from 'react-i18next';
import { StTitle } from './styled';
import { ITitle } from './types';

const Title = ({ title }: ITitle) => {
  const { t } = useTranslation();
  return (
    <StTitle>{t(title)}</StTitle>
  );
};

export default Title;
