import React, { useState, useEffect, useRef } from "react";
import DropdownWrapper from "./Dropdown.styles";
import { ReactComponent as FilterArrow } from "../../images/filter-arrow.svg";
import Checkbox from "./Checkbox";

const Dropdown = props => {
  const { title, items, selectFunction } = props;
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(prev => !prev);
  const dropdownRef = useRef(null);

  const handleOutsideClick = ref => {
    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      {handleOutsideClick(dropdownRef)}
      <div className="dropdown-title" role="button" onClick={() => toggle()}>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{open ? "close" : "open"}</p>
        </div>
      </div>
      {open && <Checkbox items={items} selectFunction={selectFunction} />}
    </DropdownWrapper>
  );
};

export default Dropdown;
