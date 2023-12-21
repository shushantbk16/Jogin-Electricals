import React, { Component, createContext } from "react";

export const ModalContext = createContext();

class ModalContextProvider extends Component {
  state = {
    isModalToggled: false
  };

  toggleModal = () => {
    this.setState({
      isModalToggled: !this.state.isModalToggled
    });
  };

  render() {
    return (
      <ModalContext.Provider
        value={{ ...this.state, toggleModal: this.toggleModal }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default ModalContextProvider;
