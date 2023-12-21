import React from 'react';
import ReactDOM from 'react-dom';
import ModalContextProvider from '@/contexts/ModalContext';
import Photo from '../components/Gallery';
import ImageContextProvider from '@/contexts/ImageContext';



const Gallery =()=> {
  return (
    <div className="app">
      <ModalContextProvider>
        <ImageContextProvider>
          <Photo />
        </ImageContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default Gallery;

