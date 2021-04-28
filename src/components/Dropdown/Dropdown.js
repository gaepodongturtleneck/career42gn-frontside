import React, { useCallback, useState, useEffect, useRef } from "react";
import DropdownWrapper from "./Dropdown.styles";

const Dropdown = () => {
  const [location, setLocation] = useState(["seoul", "busan", "seongnam"]);
  const loc = location.map(loc => loc);
  const handleChange = e => console.log(location[e.target.value]);

  return (
    <DropdownWrapper>
      <select onChange={e => handleChange(e)}>
        {loc.map((location, key) => (
          <option key={key} value={key}>
            {location}
          </option>
        ))}
      </select>
    </DropdownWrapper>
  );
};

/*
const Dropdown = props => {
  const { title, items, onSubmit } = props;
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
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
      {open && (
        <ul ref={dropdownRef} className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => props.onSubmit(item)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </DropdownWrapper>
  );
};
*/

Dropdown.defaultProps = {
  title: "location",
  items: [
    {
      id: 1,
      value: "Seoul",
    },
    {
      id: 2,
      value: "Busan",
    },
    {
      id: 3,
      value: "Seongnam",
    },
  ],
};

export default Dropdown;
