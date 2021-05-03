import React, { useRef, useEffect } from "react";
import CheckboxWrapper from "./Checkbox.styles";

const Checkbox = props => {
  const { items, selectFunction, outsideClick } = props;
  const dropdownRef = useRef(null);

  const handleOutsideClick = ref => {
    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          outsideClick();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  return (
    <CheckboxWrapper ref={dropdownRef}>
      {handleOutsideClick(dropdownRef)}
      {items.map(item => (
        <label key={item.id}>
          <input type="checkbox" name={item.value} onChange={() => selectFunction(item)} />
          {item.value}
        </label>
      ))}
    </CheckboxWrapper>
  );
};

export default Checkbox;
