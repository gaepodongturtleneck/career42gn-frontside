import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";

const JobFilter = () => {
  const tagItems = [
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

  const typeItems = [
    {
      id: 1,
      value: "신입",
    },
    {
      id: 2,
      value: "인턴",
    },
    {
      id: 3,
      value: "주니어",
    },
  ];

  const locationItems = [
    {
      id: 1,
      value: "서울",
    },
    {
      id: 2,
      value: "경기",
    },
    {
      id: 3,
      value: "부산",
    },
  ];

  const [selectedTags, selectTags] = useState([]);
  const [selectedTypes, selectTypes] = useState([]);
  const [selectedLocations, selectLocations] = useState([]);

  const isItemSelected = (item, array) => {
    if (array.find(current => current === item.value)) {
      return true;
    }
    return false;
  };

  const handleTagSelect = item => {
    if (!isItemSelected(item, selectedTags)) {
      selectTags([...selectedTags, item.value]);
    } else {
      let selectedTagsAfterRemoval = selectedTags;
      selectedTagsAfterRemoval = selectedTagsAfterRemoval.filter(current => current !== item.value);
      selectTags([...selectedTagsAfterRemoval]);
    }
  };

  const handleTypeSelect = item => {
    if (!isItemSelected(item, selectedTypes)) {
      selectTypes([...selectedTypes, item.value]);
    } else {
      let selectedTypesAfterRemoval = selectedTypes;
      selectedTypesAfterRemoval = selectedTypesAfterRemoval.filter(current => current !== item.value);
      selectTypes([...selectedTypesAfterRemoval]);
    }
  };

  const handleLocationSelect = item => {
    if (!isItemSelected(item, selectedLocations)) {
      selectLocations([...selectedLocations, item.value]);
    } else {
      let selectedLocationsAfterRemoval = selectedLocations;
      selectedLocationsAfterRemoval = selectedLocationsAfterRemoval.filter(current => current !== item.value);
      selectLocations([...selectedLocationsAfterRemoval]);
    }
  };

  const getTags = () => {
    return selectedTags.length > 0 ? selectedTags.join(",") : "분야";
  };

  const getTypes = () => {
    return selectedTypes.length > 0 ? selectedTypes.join(",") : "경력";
  };

  const getLocations = () => {
    return selectedLocations.length > 0 ? selectedLocations.join(",") : "지역";
  };

  return (
    <JobFilterContainer>
      <Dropdown onChange={handleTagSelect} title={getTags()} items={tagItems} />
      <Dropdown onChange={handleTypeSelect} title={getTypes()} items={typeItems} />
      <Dropdown onChange={handleLocationSelect} title={getLocations()} items={locationItems} />
      <button>검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
