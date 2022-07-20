import{ useState, useEffect } from "react";
import { createPortal } from "react-dom";
import s from './Modal.module.css'

const modalRoot = document.querySelector('#root-modal');

export default function Modal(onClose){

    // componentDidMount() {
    //     console.log('Modal componentDidMount')
    //     window.addEventListener('keydown', this.handeleKeyDown );
    // };

    // componentWillUnmount() {
    //     console.log('Modal componentWillUnmount')
    //     window.removeEventListener('keydown', this.handeleKeyDown );
    // };

    const handeleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        };
    };

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }
      
    return createPortal(
        <div className={s.Overlay} onClick={handleBackdropClick}>
            <div className={s.Modal}>
                
                {/* {children} */}
            </div>
        </div>,
        modalRoot,
    );
    
}

