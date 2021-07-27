import React, { useEffect, useMemo } from 'react';

import ModRedirect from 'common/ModRedirect';
import Button from 'common/Button';
import { KEY_CODES } from 'constants/constants';
import { StInputDiv } from '../AuthIpt/styled';

interface IProps {
  isRedirect: boolean;
  setIsRedirect: (isRedirect: boolean) => void;
  signInRequest: () => void;
}

const AuthBtn: React.FC<IProps> = ({ isRedirect, setIsRedirect, signInRequest }) => {
  const onButtonClick = () => signInRequest();
  useEffect(() => {
    const signin = (e) => {
      if (e.key === KEY_CODES.ENTER) {
        onButtonClick();
      }
    };
    window.addEventListener('keydown', signin);
  return () => window.removeEventListener('keydown', signin);
  }, []);
  const redirect = useMemo(() => {
    if (isRedirect) {
      setIsRedirect(false);
      return <ModRedirect to="/main" />;
    }
    return null;
  }, [isRedirect]);
  
  return (
    <>
      <StInputDiv>
        <Button
          text="sign_in_btn"
          onClick={onButtonClick}
        />
      </StInputDiv>
      {redirect}
    </>
  );
};

export default AuthBtn;
