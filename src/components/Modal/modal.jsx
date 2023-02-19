import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalDiv } from './modal.style';

const modalRoot = document.querySelector('#modal-root');

export const Modal =({ onChange, onClose, largeImageURL}) => {
     
    useEffect(() => {
       const handleKeyDown = event => {
        if (event.code === 'Escape') {
           onClose();
        }
    };

    

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onChange]);
  const handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
             onClose();
        }
    }

        return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <ModalDiv>
                    <img src={largeImageURL} alt="help me" />
                </ModalDiv>
            </Overlay>,
            modalRoot
        );
}

Modal.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};
