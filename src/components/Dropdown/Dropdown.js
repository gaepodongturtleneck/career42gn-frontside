import React, { useState, useEffect, useRef } from "react";
import DropdownWrapper from "./Dropdown.styles";
import { ReactComponent as FilterArrow } from "../../images/filter-arrow.svg";
import Checkbox from "./Checkbox";

const Dropdown = props => {
  const { title, items, handleSelectDropdown, dropdownName } = props;
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(prev => !prev);
    if (!open) {
      handleSelectDropdown(dropdownName);
    } else {
      handleSelectDropdown(null);
    }
  };

  return (
    <DropdownWrapper>
      <div className="dropdown-title" role="button" onClick={() => toggle()}>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{open ? "close" : "open"}</p>
        </div>
      </div>
    </DropdownWrapper>
  );
};

export default Dropdown;
