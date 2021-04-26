import React, { useCallback } from "react";

const Dropdown = ({ onChangeLocationClick }) => {
  const handleChangeLocationClick = useCallback(() => {
    onChangeLocationClick?.();
  }, [onChangeLocationClick]);

  return <button onClick={handleChangeLocationClick}>button</button>;
};

export default Dropdown;
