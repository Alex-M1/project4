import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import { StInput } from './styled';

interface IProps {
  type: string;
  value: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ type, value, onChange }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  
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
