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
      value: "Android",
    },
    {
      id: 3,
      value: "IOS",
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
      value: "DB",
    },
    {
      id: 7,
      value: "Etc",
    },
  ];

  const [selectedTags, selectTags] = useState([]);

  const isItemSelected = item => {
    if (selectedTags.find(current => current === item.value)) {
      return true;
    }
    return false;
  };

  const handleSelect = item => {
    if (!isItemSelected(item)) {
      selectTags([...selectedTags, item.value]);
    } else {
      let selectedTagsAfterRemoval = selectedTags;
      selectedTagsAfterRemoval = selectedTagsAfterRemoval.filter(current => current !== item.value);
      selectTags([...selectedTagsAfterRemoval]);
    }
  };

  const getTitle = () => {
    return selectedTags.length > 0 ? selectedTags.join(",") : "분야";
  };

  return (
    <JobFilterContainer>
      <Dropdown onChange={handleSelect} title={getTitle()} items={items} />
      <Dropdown />
      <Dropdown />
      <button>검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
