import React, { SyntheticEvent } from 'react';
import Input from 'common/Input';
import { IAuthIpt } from './types';

const AuthIpt = ({ type, value, placeholder, onChange }: IAuthIpt) => {
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  return (
    <Input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  );
};

export default AuthIpt;
