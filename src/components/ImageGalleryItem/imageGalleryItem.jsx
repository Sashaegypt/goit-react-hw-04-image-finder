import { Item, Image } from './imageGallery.style';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Modal } from 'components/Modal/modal';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) =>{
    const [showModal, setshowModal] = useState(false);

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            setshowModal(false);
        }
    };

    const handleBackdropClick = event => {
        if (event.targer === event.currentTarget) {
            setshowModal(false);
        }
    }

//     handleKeyDown = event => {
//         if (event.code === 'Escape') {
//             this.setState({
//                 showModal: false,
//             })
//         }
//     };

//     handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//         this.setState({
//             showModal: false,
//         });
//     }
// };
    

    return (
        <div>
            <Item>
                <Image src={webformatURL} alt={tags} loading="lazy" onClick={() => { setshowModal(true); }} />
            </Item>
            {showModal && (
                <Modal
                    largeImageURL={largeImageURL}
                    onClose={handleBackdropClick}
                    onChange={handleKeyDown}
                />
            )}
        </div>
    )
    }


ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};