import React from 'react';
import { Redirect } from 'react-router-dom';

interface IModRedirect {
  to: string;
  setIsRedirect: (isReg: boolean) => void;
}

const ModRedirect = ({ to, setIsRedirect }: IModRedirect) => {
  setIsRedirect(false);
  return <Redirect to={to} />;
};

export default ModRedirect;
