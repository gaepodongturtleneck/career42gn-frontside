import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";

const JobFilter = props => {
  const { locations, tags, types } = props;
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
      <Dropdown onChange={handleTagSelect} title={getTags()} items={tags} />
      <Dropdown onChange={handleTypeSelect} title={getTypes()} items={types} />
      <Dropdown onChange={handleLocationSelect} title={getLocations()} items={locations} />
      <button>검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
