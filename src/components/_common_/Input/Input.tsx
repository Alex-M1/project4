import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { StInput } from './styled';
import { IInput } from './types';

const Input = ({ type, value, placeholder, onChange }: IInput) => {
  const { colors, theme } = useTheme();
  return (
    <StInput
      type={type === 'confirm' ? 'password' : type}
      value={value}
      theme={theme}
      colors={colors}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
