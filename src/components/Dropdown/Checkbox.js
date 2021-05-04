import React, { useRef, useEffect } from "react";
import CheckboxWrapper from "./Checkbox.styles";

const Checkbox = props => {
  const { items, selectFunction } = props;

  return (
    <CheckboxWrapper>
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
