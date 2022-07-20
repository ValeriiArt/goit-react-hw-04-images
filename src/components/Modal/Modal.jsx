import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from './Modal.module.css'

const modalRoot = document.querySelector('#root-modal');

export default function Modal( {children, onClose} ){
    useEffect(() => {
        const handeleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            };
        };
        window.addEventListener('keydown', handeleKeyDown);
        return () => {
            window.removeEventListener('keydown', handeleKeyDown );
        }
    },[onClose]);

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }
      
    return createPortal(
        <div className={s.Overlay} onClick={handleBackdropClick}>
            <div className={s.Modal}>{children}</div>
        </div>,
        modalRoot,
    );  
}

