import React from 'react';
import Button from 'src/components/_common_/Button';

interface IProps {
  id: string,
}

const JoinBtn: React.FC<IProps> = ({ id }) => {
  const handleButtonClick = () => {
    
  };
  return (
    <Button
      text="join_room"
      onClick={handleButtonClick}
    />
  );
};

export default JoinBtn;
