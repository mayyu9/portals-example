import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children, open, close}) => (
    open ?
    ReactDOM.createPortal(
        <div className= "modal" style={{border:2}}>
            <div className="modal_close" onClick={close}>
                &times;
            </div>
            {children}
        </div>,
        document.body
    ):
    null
);

export default Modal;
