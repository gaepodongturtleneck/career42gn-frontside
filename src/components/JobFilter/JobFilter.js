import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Dropdown/Checkbox";

const JobFilter = () => {
  const items = [
    {
      id: 1,
      value: "Web",
    },
    {
      id: 2,
      value: "App",
    },
    {
      id: 3,
      value: "DB",
    },
    {
      id: 4,
      value: "AI",
    },
    {
      id: 5,
      value: "Game",
    },
    {
      id: 6,
      value: "Etc",
    },
  ];

  const [selectedTags, selectTags] = useState([]);
  const [isChecked, setIsChecked] = useState({});
  const onChange = item => {
    setIsChecked({ ...isChecked, [item.id]: item.checked });
  };

  const onSubmit = data => {
    const newArr = [...selectedTags, data.value];
    selectTags(newArr);
    console.log(selectedTags);
  };

  const getTitle = () => {
    return selectedTags.length > 0 ? selectedTags.join(",") : "분야";
  };

  return (
    <JobFilterContainer>
      <Checkbox items={items} onChange={onChange} isChecked={isChecked} />
      <Dropdown onSubmit={onSubmit} title={getTitle()} isChecked={isChecked} items={items} />
      <Dropdown />
      <Dropdown />
      <button>검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
