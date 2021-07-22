import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { StTicTacItem } from './styled';

interface IProps {
  square: number;
  content: string;
  onClick: (square: number) => void
}

const TicTacItem: React.FC<IProps> = ({ square, content, onClick }) => {
  const handleClick = () => onClick(square);
  const { colors, theme } = useTheme();
  return (
    <StTicTacItem
      theme={theme}
      colors={colors}
      onClick={content ? null : handleClick}
    >
      {content}
    </StTicTacItem>
  );
};

export default TicTacItem;
