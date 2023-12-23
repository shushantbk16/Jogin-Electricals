import React from "react";
import Image from "./Image";

import ModalWrapper from "./ModalWrapper";

import { ModalContext } from "../contexts/ModalContext";

import { ImageContext } from "../contexts/ImageContext";

import { motion } from "framer-motion";
// import {showcase4 ,showcase5} from "../assets/data/dummydata";

const Gallery = () => {
  return (
    <div className='gallery-description'>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 1,y:60 },
        }}
      >
    <h2  className='Decorative'>Decorative street light poles</h2>
    </motion.div>
    <div style={{marginTop:"8%"}}>
    <ImageContext.Consumer >
      {imageContext => (
        <ModalContext.Consumer>
          {context => {
            const { photos, currentPhoto, findPhoto } = imageContext;
           console.log(photos);
            const images =photos.slice(1,20).map(photo => (
              <Image key={photo.id} photo={photo} findPhoto={findPhoto} />
            ));
            return (
              <div className="gallery__container">
                <div className="gallery__grid">{images}</div>
                <ModalWrapper
                  photo={currentPhoto}
                  isModalToggled={context.isModalToggled}
                />
              </div>
            );
          }}
        </ModalContext.Consumer>
      )}
    </ImageContext.Consumer>
    </div>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 1,y:60 },
        }}
      >
    <h2  className='Decorative' style={{marginTop:"10%"}}>Site Photos</h2>
    </motion.div>
    <div style={{marginTop:"8%"}}>
    <ImageContext.Consumer>
      {imageContext => (
        <ModalContext.Consumer>
          {context => {
            const { photos, currentPhoto, findPhoto } = imageContext;
            console.log(photos);
            const images = photos.slice(21,40).map(photo => (
              <Image key={photo.id} photo={photo} findPhoto={findPhoto} />
            ));
            return (
              <div className="gallery__container">
                <div className="gallery__grid">{images}</div>
                <ModalWrapper
                  photo={currentPhoto}
                  isModalToggled={context.isModalToggled}
                />
              </div>
            );
          }}
        </ModalContext.Consumer>
      )}
    </ImageContext.Consumer>
    </div> 
    </div>
  );
};

export default Gallery;
