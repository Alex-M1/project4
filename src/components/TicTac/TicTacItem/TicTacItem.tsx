import React from 'react';
import { StTicTacItem } from './styled';

interface IProps {
  square: number;
  content: string;
  onClick: (square: number) => void
}

const TicTacItem: React.FC<IProps> = ({ square, content, onClick }: IProps) => {
  const handleClick = () => onClick(square);
  return (
    <StTicTacItem onClick={handleClick}>
      {content}
    </StTicTacItem>
  );
};

export default TicTacItem;
