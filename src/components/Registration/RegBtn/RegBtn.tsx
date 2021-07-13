import React from 'react';

import Button from 'common/Button';
import { StInputDiv } from 'src/components/Auth/AuthIpt/styled';
import { IRegBtn } from './types';

const RegBtn = ({ signUpRequest }: IRegBtn) => {
  const onButtonClick = () => signUpRequest();
  return (
    <StInputDiv>
      <Button 
        text="signUpBtn" 
        onClick={onButtonClick} 
      />
    </StInputDiv>
  );
};

export default RegBtn;
