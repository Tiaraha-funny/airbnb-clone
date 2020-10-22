import React, { useState } from "react";

const UseModal = () => {
  const [isShow, setIsShow] = useState(false);

  function toggle() {
    setIsShow(!isShow);
  }

  return {
    isShow,
    toggle
  }
}
export default UseModal;