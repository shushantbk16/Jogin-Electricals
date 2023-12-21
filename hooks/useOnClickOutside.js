// TODO
// Come back to this.  Want to close modal onOutsideClick
// but all items are too closely tied.

import { useEffect } from "react";

function useClickOnOutside(ref, handler) {
  useEffect(() => {
    const listener = evt => {
      if (!ref.current || ref.current.contains(evt.target)) {
        console.log(ref.current.children);
        return;
      }

      if (!ref.current.children[0].children) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}

export default useClickOnOutside;
