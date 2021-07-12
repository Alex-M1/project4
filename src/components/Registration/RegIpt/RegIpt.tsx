import React, { SyntheticEvent } from 'react';
import Input from 'common/Input';
import { IRegIpt } from './types';

const RegIpt = ({ type, value, placeholder, onChange }: IRegIpt) => {
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  return (
    <div>
      <span>{type}</span>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </div>
  );
};

export default RegIpt;
