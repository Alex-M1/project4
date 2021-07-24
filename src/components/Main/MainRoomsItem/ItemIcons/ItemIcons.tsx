import React from 'react';
import { StIcon } from './styled';

interface IProps {
  src: string,
  alt: string,
}

const ItemIcons: React.FC<IProps> = ({ src, alt }) => {
  return (
    <StIcon>
      <img src={src} alt={alt} />
    </StIcon>
  );
};

export default ItemIcons;
