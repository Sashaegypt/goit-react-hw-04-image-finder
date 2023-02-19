import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalDiv } from './modal.style';

const modalRoot = document.querySelector('#modal-root');

export const Modal =({ onCloseByEscape, largeImg}) => {
     
    useEffect(() => {
       const handleKeyDown = event => {
        if (event.code === 'Escape') {
           onCloseByEscape();
        }
    };

    

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onCloseByEscape]);
  const handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
             onCloseByEscape();
        }
    }

        return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <ModalDiv>
                    <img src={largeImg} alt="help me" />
                </ModalDiv>
            </Overlay>,
            modalRoot
        );
}

Modal.propTypes = {
    onCloseByEscape: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired,
};
