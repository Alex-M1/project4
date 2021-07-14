import React, { useMemo } from 'react';
import { StInputDiv } from 'src/components/Auth/AuthIpt/styled';
import ModRedirect from 'common/ModRedirect';
import Button from 'common/Button';
import { url } from 'constants/urls';
import { IRegBtn } from './types';

const RegBtn = ({ isRedirect, signUpRequest, setIsRedirect }: IRegBtn) => {
  const onButtonClick = () => signUpRequest();
  const redirect = useMemo(() => {
    if (isRedirect) {
      setIsRedirect(false);
      return <ModRedirect to={url.authClient} />;
    }
    return null;
  }, [isRedirect]);
  return (
    <>
      <StInputDiv>
        <Button
          text="sign_up_btn"
          onClick={onButtonClick}
        />
      </StInputDiv>
      {redirect}
    </>
  );
};

export default RegBtn;
