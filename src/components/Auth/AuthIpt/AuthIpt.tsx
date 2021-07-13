import React, { SyntheticEvent } from 'react';
import Input from 'common/Input';
import { IAuthIpt } from './types';
import { StInputDiv } from './styled';

const AuthIpt = ({ type, value, placeholder, onChange }: IAuthIpt) => {
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  return (
    <StInputDiv>
      <span>{type}</span>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
      /> 
    </StInputDiv>
  );
};

export default AuthIpt;
