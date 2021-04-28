import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";

const JobFilter = () => {
  const [selectedTags, selectTags] = useState([]);

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
      <Dropdown onSubmit={onSubmit} title={getTitle()} />
      <Dropdown />
      <Dropdown />
      <button>검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
