import React, { useState, useEffect, useRef } from "react";
import DropdownWrapper from "./Dropdown.styles";
import { ReactComponent as FilterArrow } from "../../images/filter-arrow.svg";
import Checkbox from "./Checkbox";

const Dropdown = props => {
  const { title, isOpen, idx, handleOpenDropdown } = props;

  return (
    <DropdownWrapper>
      <div className="dropdown-title" role="button" onClick={() => handleOpenDropdown(idx)}>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{isOpen[idx] === true ? "close" : "open"}</p>
        </div>
      </div>
    </DropdownWrapper>
  );
};

export default Dropdown;
