import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/components/hooks/useTheme';
import { StInput } from './styled';
import { IInput } from './types';

const Input = ({ type, value, onChange }: IInput) => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <StInput
      type={type === 'confirm' ? 'password' : type}
      value={value}
      theme={theme}
      colors={colors}
      onChange={onChange}
      placeholder={t(`${type}Ipt`)}
    />
  );
};

export default Input;
