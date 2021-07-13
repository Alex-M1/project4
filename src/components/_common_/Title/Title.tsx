import React from 'react';
import { StTitle } from './styled';
import { ITitle } from './types';

const Title = ({ title }: ITitle) => {
  return (
    <StTitle>{title}</StTitle>
  );
};

export default Title;
