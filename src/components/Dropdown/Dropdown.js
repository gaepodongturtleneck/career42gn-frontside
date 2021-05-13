import React, { useState, useEffect } from "react";
import DropdownWrapper from "./Dropdown.styles";
import { ReactComponent as DropdownIcon } from "../../images/icon-dropdown.svg";

const Dropdown = props => {
  const { title, isOpen, idx, handleOpenDropdown } = props;
  const [checkData, setCheckData] = useState(false);

  useEffect(() => {
    if (!(title === "분야" || title === "경력" || title === "지역")) {
      setCheckData(true);
    } else {
      setCheckData(false);
    }
  }, [title]);

  return (
    <DropdownWrapper style={{ marginRight: idx === 2 && 0 }}>
      <div className="dropdown-button" style={{ borderColor: (isOpen[idx] || checkData) && "#27babb" }} role="button" onClick={() => handleOpenDropdown(idx)}>
        <p className="dropdown-title" style={{ color: (isOpen[idx] || checkData) && "#27babb" }}>
          {title}
        </p>
        <div className="dropdown-icon" style={{ transform: isOpen[idx] && "rotate(180deg)" }}>
          <DropdownIcon style={{ fill: isOpen[idx] || checkData ? "#27babb" : "#d6d6d6" }} />
        </div>
      </div>
    </DropdownWrapper>
  );
};

export default Dropdown;
