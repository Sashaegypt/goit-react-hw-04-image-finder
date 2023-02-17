import { useState,useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/searchBar';
import { Loader } from './Loader/loader';
import { ImageGallery } from './ImageGallery/imageGallery';
import { Button } from './Button/button';

import { GlodalStyle } from './GlobalStyle';
import { DivApp } from './App.style';

import { searchImage } from './Api';

export const App = () =>{

    const [value, setValue] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);

    useEffect(() => {
        if (value === ''){
            return;
        }
        setIsLoading(true);
        searchImage(value, page)
            .then(response => {
                setImages(prevState => [...prevState, ...response.hits]);
                setIsLoadMore(true);
                responseFetch(response);
            })
            .catch(error => {
                toast.error('Error occurred. Please reload the page');
            })
            .finally(() => {
                setIsLoading(false);
            });
        
        const responseFetch = ({ totalHits, hits }) => {
        const PER_PAGE = 12;
        if (page === 1 && totalHits !== 0) {
            toast.success(`Hooray!! We found ${totalHits} images`);
            setIsLoadMore(true);
        }
        if (totalHits === 0) {
            toast.warn('Sorry, there a no images. Please try again');
            setIsLoadMore(false);
        } else if (hits.length < PER_PAGE) {
            toast.info('There are all pictures. We can try else');
            setIsLoadMore(false);
        }
    };
    }, [value, page]);


   const handleForm = event => {
        if (value !== event) {
            setValue(event);
            setImages([]);
            setPage(1);
            setIsLoadMore(false);
        }
    };


   const loadMore = () => {
       setPage(prevState => prevState + 1);
       setIsLoadMore(false);
    };


        return (
            <DivApp>
                <GlodalStyle />
                <Searchbar onSubmit={handleForm} isSubmitting={isLoading} />
                {images.length !== 0 && <ImageGallery items={images} />}
                {isLoading && <Loader />}
                {isLoadMore && <Button onClick={loadMore} />}
                <ToastContainer autoClose={2000} />
            </DivApp>
        )
}