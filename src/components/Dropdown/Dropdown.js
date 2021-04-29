import React, { useState, useEffect, useRef } from "react";
import DropdownWrapper from "./Dropdown.styles";
import { ReactComponent as FilterArrow } from "../../images/filter-arrow.svg";
import Checkbox from "./Checkbox";

const Dropdown = props => {
  const { title, items, isChecked, onChange } = props;
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <DropdownWrapper>
      <div className="dd-header" role="button" onClick={() => toggle(!open)}>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{open ? "close" : "open"}</p>
        </div>
      </div>
      {open && <Checkbox items={items} onChange={onChange} isChecked={isChecked} />}
    </DropdownWrapper>
  );
};

export default Dropdown;
