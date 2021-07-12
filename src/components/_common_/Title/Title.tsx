import React from 'react';
import { ITitle } from './types';

const Title = ({ title }: ITitle) => {
  return (
    <h1>{title}</h1>
  );
};

export default Title;
