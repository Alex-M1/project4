import React, { SyntheticEvent } from 'react';
import Input from 'common/Input';
import { StInputDiv, StSpan } from 'src/components/Auth/AuthIpt/styled';
import { IRegIpt } from './types';

const RegIpt = ({ type, value, placeholder, onChange }: IRegIpt) => {
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  return (
    <StInputDiv>
      <StSpan>{type}</StSpan>
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onInputChange}
        />
    </StInputDiv>
  );
};

export default RegIpt;
