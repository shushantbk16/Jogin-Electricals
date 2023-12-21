import React from "react";
import Image from "./Image";
import ModalWrapper from "./ModalWrapper";
import { ModalContext } from "../contexts/ModalContext";
import { ImageContext } from "../contexts/ImageContext";



const Gallery = () => {
  return (
    <ImageContext.Consumer>
      {imageContext => (
        <ModalContext.Consumer>
          {context => {
            const { photos, currentPhoto, findPhoto } = imageContext;

            const images = photos.map(photo => (
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
  );
};

export default Gallery;
