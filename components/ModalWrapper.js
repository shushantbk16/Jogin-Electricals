import React from "react";
import { useTransition } from "react-spring";
import Modal from "./Modal";



const ModalWrapper = ({ photo, isModalToggled }) => {
  const transition = useTransition(isModalToggled, null, {
    from: { opacity: 0, transform: `translate3d(0, -40px, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(0, -40px, 0)` }
  });
  console.log(photo);
  return (
    <div>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              key={photo.id}

              photo={photo}
              animation={animation}
              isModalToggled={isModalToggled}
            />
          ) 
      )}

    </div>
  );
};

export default ModalWrapper;
