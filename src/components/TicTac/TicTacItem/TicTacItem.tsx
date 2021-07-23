import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { StTicTacItem } from './styled';

interface IProps {
  square: number;
  content: string;
  isGameEnd: boolean;
  onClick: (square: number) => void
}

const TicTacItem: React.FC<IProps> = ({ isGameEnd, square, content, onClick }) => {
  const handleClick = () => onClick(square);
  const { colors, theme } = useTheme();
  console.log(isGameEnd);
  return (
    <StTicTacItem
      theme={theme}
      colors={colors}
      onClick={content || isGameEnd ? null : handleClick}
    >
      {content}
    </StTicTacItem>
  );
};

export default TicTacItem;
