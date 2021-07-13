import React, { SyntheticEvent } from 'react';
import Input from 'common/Input';
import { useTranslation } from 'react-i18next';
import { IAuthIpt } from './types';
import { StInputDiv, StSpan } from './styled';

const AuthIpt = ({ type, value, onChange }: IAuthIpt) => {
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

export default AuthIpt;
