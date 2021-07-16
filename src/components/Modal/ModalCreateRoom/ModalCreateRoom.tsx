import React from 'react';

const ModalCreateRoom = ({handleCloseModal, header, content}) => {

    const handleClick = () => {
        handleCloseModal();
        console.log(1)
      };

    return(
        <div>
            <button onClick={handleClick}></button>
            <div>{header}</div>
            {content}
        </div>
    )
}
export default ModalCreateRoom;
