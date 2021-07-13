import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'common/Input';
import { StInputDiv, StSpan } from 'src/components/Auth/AuthIpt/styled';
import { IRegIpt } from './types';

const RegIpt = ({ type, value, onChange }: IRegIpt) => {
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  const { t } = useTranslation();
  return (
    <StInputDiv>
      <StSpan>{t(type)}</StSpan>
      <Input
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </StInputDiv>
  );
};

export default RegIpt;
