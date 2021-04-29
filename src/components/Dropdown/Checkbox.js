import React from "react";
import CheckboxWrapper from "./Checkbox.styles";

const Checkbox = props => {
  const { items, onChange, isChecked } = props;
  return (
    <CheckboxWrapper>
      {items.map(item => (
        <label key={item.id}>
          <input type="checkbox" name={item.value} checked={isChecked[item.id]} onChange={() => props.onChange(item)} />
          {item.value}
        </label>
      ))}
    </CheckboxWrapper>
  );
};

export default Checkbox;
