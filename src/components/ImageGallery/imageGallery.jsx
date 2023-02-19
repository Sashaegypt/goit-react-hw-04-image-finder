import PropTypes from 'prop-types';
import { GalleryList } from './imageGallery.style';
import { ImageGalleryItem } from 'components/ImageGalleryItem/imageGalleryItem';

export const ImageGallery = ({ items, ...othersProps }) => {
    return (
    <GalleryList>
            {items.map(({ id, largeImageURL, webformatURL, tags }) => (
                <ImageGalleryItem
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    key={id}
                    {...othersProps}
                />
            ))}
    </GalleryList>
    )
};

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ),
};