import React from 'react';
import ReactDOM from 'react-dom';

interface IProps {
    children: JSX.Element
}

const Portal: React.FC <IProps> = (
    { children }) => (ReactDOM.createPortal(children, document.getElementById('portal'))
    );
export default Portal;
