import React, { useMemo } from 'react';
import { StInputDiv } from 'src/components/Auth/AuthIpt/styled';
import ModRedirect from 'common/ModRedirect';
import Button from 'common/Button';
import { url } from 'constants/urls';

export interface IProps {
  isRedirect: boolean;
  signUpRequest: () => void;
  setIsRedirect: (isReg: boolean) => void;
}

const RegBtn: React.FC<IProps> = ({ isRedirect, signUpRequest, setIsRedirect }: IProps) => {
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
