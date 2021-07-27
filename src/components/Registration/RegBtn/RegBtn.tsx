import React, { useEffect, useMemo } from 'react';
import { StInputDiv } from 'src/components/Auth/AuthIpt/styled';
import ModRedirect from 'common/ModRedirect';
import Button from 'common/Button';
import { CLIENT } from 'constants/urls';

interface IProps {
  isRedirect: boolean;
  signUpRequest: () => void;
  setIsRedirect: (isReg: boolean) => void;
}

const RegBtn: React.FC<IProps> = ({ isRedirect, signUpRequest, setIsRedirect }) => {
  const onButtonClick = () => signUpRequest();
  useEffect(() => {
    const signup = (e) => {
      if (e.keyCode === 13) {
        onButtonClick();
      }
    };
    window.addEventListener('keydown', signup);
  return () => window.removeEventListener('keydown', signup);
  }, []);
  const redirect = useMemo(() => {
    if (isRedirect) {
      setIsRedirect(false);
      return <ModRedirect to={CLIENT.authClient} />;
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
