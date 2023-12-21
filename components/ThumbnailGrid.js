import React from "react";
import { ImageContext } from "../contexts/ImageContext";

const ThumbnailGrid = () => {
  return (
    <ImageContext.Consumer>
      {imageContext => {
        const { photos, findPhoto } = imageContext;

        return (
          <div className="thumbnail__grid">
            {photos.map(photo => {
              const handleClick = () => {
                findPhoto(photo.id);
              };

              const thumbnail =
                photo.id === imageContext.currentPhoto.id ? (
                  <img
                    key={photo.id}
                    className="thumbnail__image thumbnail__image--selected"
                    src={photo.cover}
                    alt=""
                    onClick={handleClick}
                  />
                ) : (
                  <img
                    key={photo.id}
                    className="thumbnail__image"
                    src={photo.cover}
                    alt=""
                    onClick={handleClick}
                  />
                );
              return thumbnail;
            })}
          </div>
        );
      }}
    </ImageContext.Consumer>
  );
};

export default ThumbnailGrid;
