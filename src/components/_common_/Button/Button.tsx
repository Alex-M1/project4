import React from 'react';
import { StButton } from './styled';
import { IButton } from './types';

const Button = ({ text, onClick }: IButton) => (
  <StButton type="button" onClick={onClick}>
    {text}
  </StButton>
);

export default Button;
