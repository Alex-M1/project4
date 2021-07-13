import React from 'react';
import { useTranslation } from 'react-i18next';
import { StButton } from './styled';
import { IButton } from './types';

const Button = ({ text, onClick }: IButton) => {
  const { t } = useTranslation();
  return (
    <StButton type="button" onClick={onClick}>
      {t(text)}
    </StButton>
  );
};

export default Button;
