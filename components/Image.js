import React from "react";
import { ModalContext } from "../contexts/ModalContext";



const Image = ({ photo, findPhoto }) => {
  return (
    <ModalContext.Consumer>
      {context => {
        let { toggleModal } = context;

        const handleClick = () => {
          toggleModal();
          findPhoto(photo.id);
        };

        return (
          <div className="gallery__item">
            <img
              src={photo.cover}
              alt=""
              className="gallery__image"
              onClick={handleClick}
            />
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
};

export default Image;
