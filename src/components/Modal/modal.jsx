import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalDiv } from './modal.style';

const modalRoot = document.querySelector('#modal-root');

export const Modal =({ onChange, onClose, largeImageURL}) => {
     
    useEffect(() => {
        window.addEventListener('keydown', onChange);

        return () => {
            window.removeEventListener('keydown', onChange);
        }
    }, [onChange]);

        return createPortal(
            <Overlay onClick={onClose}>
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