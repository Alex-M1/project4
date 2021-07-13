import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { StInput } from './styled';
import { IInput } from './types';

const Input = ({ type, value, placeholder, onChange }: IInput) => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <StInput
      type={type === 'confirm' ? 'password' : type}
      value={value}
      theme={theme}
      colors={colors}
      onChange={onChange}
      placeholder={t(`${placeholder}Ipt`)}
    />
  );
};

export default Input;
