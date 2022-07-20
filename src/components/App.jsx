import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./Modal";
import Searchbar from "./Searchbar";
import {fetchPictures} from '../service/fetchPictures'
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import { toast } from "react-toastify";

export function App() {
  const [modalImage, setModalImage] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalHitsPage, setTotalHitsPage] = useState(null);

  useEffect(() => {
    if (searchText) {
      if (!searchText) {
        return;
      }
      setIsLoaded(true);
      fetchPictures(searchText, page)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error('По даному запиту нічого не знайдено.')
          );
        })
        .then((result) => {
          setIsLoaded(true);
          setData(prevData => [...prevData, ...result.hits]);
          setTotalHitsPage(result.totalHits);
          if (result.hits.length === 0) {
            return toast.error('По даному запиту нічого не знайдено.');
          }
        },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        ).finally(() => setIsLoaded(false ))
    };
  }, [page, searchText]);

  const handelFormSubmit = searchText => {
    setPage(1);
    setData([]);
    setSearchText(searchText);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = (largeImageURL) => {
    setShowModal(!showModal);
    setModalImage(largeImageURL);
  };



    return (
      <>
        <Searchbar
          onSubmit={handelFormSubmit}
        />
        <ImageGallery
          data={data}
          toggleModal={toggleModal}
          isLoaded = {isLoaded}
        />

        { data.length !== 0 && totalHitsPage !== data.length && <Button
          nameButton='Load More'
          Click={loadMore}
        /> } 
        
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={modalImage} alt="" />
            <Button 
              nameButton='Close'
              Click={toggleModal}
            />
          </Modal>
        )}

        <ToastContainer autoClose={3000}/>
      </>
    ); 

};

