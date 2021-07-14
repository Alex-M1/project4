import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/components/hooks/useTheme';
import Input from '../../_common_/Input';
import { IAuthIpt } from './types';
import { StInputDiv, StSpan } from './styled';

const AuthIpt = ({ type, value, onChange }: IAuthIpt) => {
  const { colors, theme } = useTheme();
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  const { t } = useTranslation();
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
