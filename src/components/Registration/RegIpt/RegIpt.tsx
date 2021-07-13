import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { StInputDiv, StSpan } from 'src/components/Auth/AuthIpt/styled';
import { useTheme } from 'src/components/hooks/useTheme';
import Input from 'common/Input';
import { IRegIpt } from './types';

const RegIpt = ({ type, value, onChange }: IRegIpt) => {
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

export default RegIpt;
