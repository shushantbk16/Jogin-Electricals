import React, { Component, createContext } from "react";
import {showcase4} from "../assets/data/dummydata";
// import photos from "@/assets/photos";
// import photos from "@/assets/photos";

export const ImageContext = createContext();

export class ImageContextProvider extends Component{
  static defaultProps = {
    photos: [...showcase4], 
  };
  
  
  state = {
    currentPhoto: ""
  };

  findPhoto = id => {
    let found = showcase4.find(photo => id === photo.id);

    return this.setState({ currentPhoto: found });
  };

  getPreviousPhoto = id => {
    let previousPhoto = id - 1;
    if (previousPhoto < 1) {
      previousPhoto = showcase4.length;
    }

    this.findPhoto(previousPhoto);
  };

  getNextPhoto = id => {
    let nextPhoto = id + 1;
    if (nextPhoto > 
      showcase4.length ) {
      nextPhoto = 1;
    }

    this.findPhoto(nextPhoto);
  };

  render() {
    return (
      <ImageContext.Provider
        value={{
          ...this.state,
          ...this.props,
          findPhoto: this.findPhoto,
          getPreviousPhoto: this.getPreviousPhoto,
          getNextPhoto: this.getNextPhoto
        }}
      >
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}

export default ImageContextProvider;
