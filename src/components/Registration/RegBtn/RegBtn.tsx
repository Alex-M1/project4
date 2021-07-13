import React from 'react';
import Button from 'common/Button';
import { IRegBtn } from './types';

const RegBtn = ({ signUpRequest }: IRegBtn) => {
  const onButtonClick = () => signUpRequest();
  return (
    <Button text="sign up" onClick={onButtonClick} />
  );
};

export default RegBtn;
