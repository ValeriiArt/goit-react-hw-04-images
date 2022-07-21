import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({id, webformatURL, largeImageURL, toggleModal }) => {
    return (
        <li key={id}
            className={s.galleryItem}
        >
            <img className={s.image}
                src={webformatURL}
                alt=""
                onClick={()=>{toggleModal(largeImageURL)}}
            />
        </li>
    );
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
}
export default ImageGalleryItem;