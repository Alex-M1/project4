import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/components/hooks/useTheme';
import Input from '../../_common_/Input';
import { IAuthIpt } from './types';
import { StInputDiv, StSpan } from './styled';

const AuthIpt = ({ type, value, onChange }: IAuthIpt) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
  return (
    <StInputDiv>
      <StSpan
        theme={theme}
        colors={colors}
      >
        {t(type)}
      </StSpan>
      <Input
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </StInputDiv>
  );
};

export default AuthIpt;
