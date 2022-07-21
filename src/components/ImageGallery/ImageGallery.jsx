import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';
import { MutatingDots } from 'react-loader-spinner';

const ImageGallery = ({data, toggleModal, isLoaded}) => {
    return (
        <>
            {isLoaded && <MutatingDots/>}
            <ul className={s.gallery}>
                {data.map(({ id, webformatURL, largeImageURL }) => {
                    return (                          
                        <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        toggleModal={toggleModal}
                        />
                    )
                })}
            </ul>
        </>
    );   
}
ImageGallery.propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    })
  ),
}
 
export default ImageGallery;