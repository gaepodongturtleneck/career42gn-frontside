import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";

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

  const handleSelect = item => {
    let newArr = selectedTags;
    const idx = selectedTags.indexOf(item.value);
    if (isChecked[item.id]) {
      if (idx === -1) {
        newArr = [...selectedTags, item.value];
      }
    } else {
      newArr = selectedTags.splice(idx, 1);
    }
    selectTags(newArr);
  };

  const handleCheck = item => {
    setIsChecked({ ...isChecked, [item.id]: item.checked });
    console.log(isChecked);
    handleSelect(item);
  };

  const getTitle = () => {
    return selectedTags.length > 0 ? selectedTags.join(",") : "분야";
  };

  return (
    <JobFilterContainer>
      <Dropdown onChange={handleCheck} title={getTitle()} isChecked={isChecked} items={items} />
      <Dropdown />
      <Dropdown />
      <button>검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
