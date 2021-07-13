import React from 'react';
import Button from 'common/Button';
import { IRegBtn } from './types';
import { StInputDiv } from 'src/components/Auth/AuthIpt/styled';

const RegBtn = ({ signUpRequest }: IRegBtn) => {
  const onButtonClick = () => signUpRequest();
  return (
    <StInputDiv>
    <Button text="sign up" onClick={onButtonClick} />
    </StInputDiv>
  );
};

export default RegBtn;
