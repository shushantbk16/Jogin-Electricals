import React from "react";
import { animated } from "react-spring";
import { ModalContext } from "../contexts/ModalContext";
import { ImageContext } from "../contexts/ImageContext";
import ThumbnailGrid from "./ThumbnailGrid";



const Modal = ({ photo, animation }) => {
  return (
    <ImageContext.Consumer>
      {imageContext => (
        <ModalContext.Consumer>
          {context => {
            let { toggleModal } = context;
            let { getPreviousPhoto, getNextPhoto } = imageContext;

            const handlePrevPhotoClick = () => {
              getPreviousPhoto(photo.id);
            };

            const handleNextPhotoClick = () => {
              getNextPhoto(photo.id);
            };

            return (
              <div className="modal">
                <animated.div className="modal__items" style={animation}>
                  <button
                    className="button prev__button"
                    onClick={handlePrevPhotoClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__image"
                      viewBox="0 0 19 19"
                    >
                      <g data-name="Layer 2">
                        <path
                          d="M10.85 13.12a.5.5 0 0 1 0 .71.5.5 0 0 1-.7 0l-4-4a.5.5 0 0 1 0-.71l4-4a.5.5 0 0 1 .7 0 .5.5 0 0 1 0 .71L7.21 9.48zM18 9.5A8.5 8.5 0 1 0 9.5 18 8.51 8.51 0 0 0 18 9.5zm1 0A9.5 9.5 0 1 1 9.5 0 9.5 9.5 0 0 1 19 9.5z"
                          data-name="Layer 1"
                        />
                      </g>
                    </svg>
                  </button>
                  <div>
                    <img className="modal__image" src={photo.cover} alt="" />
                  </div>
                  <button
                    className="button next__button"
                    onClick={handleNextPhotoClick}
                  >
                    <svg
                      className="button__image"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 19 19"
                    >
                      <g data-name="Layer 2">
                        <path
                          d="M8.15 5.83a.5.5 0 0 1 0-.71.5.5 0 0 1 .7 0l4 4a.5.5 0 0 1 0 .71l-4 4a.5.5 0 0 1-.7 0 .5.5 0 0 1 0-.71l3.64-3.64zM18 9.5A8.5 8.5 0 1 0 9.5 18 8.51 8.51 0 0 0 18 9.5zm1 0A9.5 9.5 0 1 1 9.5 0 9.5 9.5 0 0 1 19 9.5z"
                          data-name="Layer 1"
                        />
                      </g>
                    </svg>
                  </button>
                  <ThumbnailGrid />
                </animated.div>
                <button className="modal__button" onClick={toggleModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                    <g data-name="Layer 2">
                      <path
                        className="modal-button__image"
                        d="M8.79 9.5L5.15 5.85a.49.49 0 0 1 .7-.7L9.5 8.79l3.65-3.64a.49.49 0 0 1 .7.7L10.21 9.5l3.64 3.65a.49.49 0 0 1-.7.7L9.5 10.21l-3.65 3.64a.49.49 0 0 1-.7-.7L8.79 9.5zm9.21 0A8.5 8.5 0 1 0 9.5 18 8.51 8.51 0 0 0 18 9.5zm1 0A9.5 9.5 0 1 1 9.5 0 9.5 9.5 0 0 1 19 9.5z"
                        data-name="Layer 1"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            );
          }}
        </ModalContext.Consumer>
      )}
    </ImageContext.Consumer>
  );
};

export default Modal;
