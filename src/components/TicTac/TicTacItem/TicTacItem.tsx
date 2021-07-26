import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { StTicTacItem } from './styled';

interface IProps {
  square: number;
  content: string;
  onClick: (square: number) => void;
  isGameEnd: boolean;
}

const TicTacItem: React.FC<IProps> = ({ isGameEnd, square, content, onClick }) => {
  const handleClick = () => onClick(square);
  const { colors, theme } = useTheme();
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
