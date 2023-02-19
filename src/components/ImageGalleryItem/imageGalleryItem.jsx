import { Item, Image } from './imageGallery.style';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags, onSelected }) =>{

    return (
        <div>
            <Item>
                <Image
                    src={webformatURL}
                    alt={tags}
                    loading="lazy"
                    onClick={() => onSelected({ largeImageURL, tags })}
                />
            </Item>
        </div>
    )
    }


ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};