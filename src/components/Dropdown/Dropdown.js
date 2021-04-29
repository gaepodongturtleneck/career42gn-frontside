import React, { useState, useEffect, useRef } from "react";
import DropdownWrapper from "./Dropdown.styles";
import { ReactComponent as FilterArrow } from "../../images/filter-arrow.svg";
import Checkbox from "./Checkbox";

const Dropdown = props => {
  const { title, items, onSubmit } = props;
  const [open, setOpen] = useState(false);
  const [isChecked, checking] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const handleClick = item => {
    props.onSubmit(item);
  };

  return (
    <DropdownWrapper>
      <div className="dd-header" role="button" onClick={() => toggleOpen(!open)}>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{open ? <FilterArrow width="19px" style={{ transform: [{ rotateY: "180deg" }] }} /> : <FilterArrow width="19px" />}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleClick(item)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
