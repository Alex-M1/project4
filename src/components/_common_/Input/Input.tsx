import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import { StInput } from './styled';

export interface IProps {
  type: string;
  value: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ type, value, onChange }: IProps) => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <StInput
      type={type === 'confirm' ? 'password' : type}
      value={value}
      theme={theme}
      colors={colors}
      onChange={onChange}
      placeholder={t(`${type}_ipt`)}
    />
  );
};

export default Input;
