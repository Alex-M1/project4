import React from 'react';
import { Redirect } from 'react-router-dom';

interface IProps {
  to: string;
  setIsRedirect: (isReg: boolean) => void;
}

const ModRedirect: React.FC<IProps> = ({ to, setIsRedirect }: IProps) => {
  setIsRedirect(false);
  return <Redirect to={to} />;
};

export default ModRedirect;
