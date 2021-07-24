import React, { useMemo } from 'react';

import ModRedirect from 'common/ModRedirect';
import Button from 'common/Button';
import { StInputDiv } from '../AuthIpt/styled';

interface IProps {
  isRedirect: boolean;
  setIsRedirect: (isRedirect: boolean) => void;
  signInRequest: () => void;
}

const AuthBtn: React.FC<IProps> = ({ isRedirect, setIsRedirect, signInRequest }) => {
  const onButtonClick = () => signInRequest();
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
