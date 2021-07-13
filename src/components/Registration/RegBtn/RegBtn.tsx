import React, { useMemo } from 'react';
import Button from 'common/Button';
import { StInputDiv } from 'src/components/Auth/AuthIpt/styled';
import ModRedirect from 'common/ModRedirect';
import { IRegBtn } from './types';

const RegBtn = ({ isRedirect, signUpRequest, setIsRedirect }: IRegBtn) => {
  const onButtonClick = () => signUpRequest();
  const redirect = useMemo(() => {
    if (isRedirect) {
      setIsRedirect(false);
      return <ModRedirect to="/" />;
    }
    return null;
  }, [isRedirect]);
  return (
    <>
      <StInputDiv>
        <Button
          text="signUpBtn"
          onClick={onButtonClick}
        />
      </StInputDiv>
      {redirect}
    </>
  );
};

export default RegBtn;
