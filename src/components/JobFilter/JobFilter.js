import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";

const JobFilter = props => {
  const { locations, tags, types } = props;
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const isItemSelected = (item, array) => {
    if (array.find(current => current === item.value)) {
      return true;
    }
    return false;
  };

  const handleTagSelect = item => {
    if (!isItemSelected(item, selectedTags)) {
      setSelectedTags([...selectedTags, item.value]);
    } else {
      let selectedTagsAfterRemoval = selectedTags;
      selectedTagsAfterRemoval = selectedTagsAfterRemoval.filter(current => current !== item.value);
      setSelectedTags([...selectedTagsAfterRemoval]);
    }
  };

  const handleTypeSelect = item => {
    if (!isItemSelected(item, selectedTypes)) {
      setSelectedTypes([...selectedTypes, item.value]);
    } else {
      let selectedTypesAfterRemoval = selectedTypes;
      selectedTypesAfterRemoval = selectedTypesAfterRemoval.filter(current => current !== item.value);
      setSelectedTypes([...selectedTypesAfterRemoval]);
    }
  };

  const handleLocationSelect = item => {
    if (!isItemSelected(item, selectedLocations)) {
      setSelectedLocations([...selectedLocations, item.value]);
    } else {
      let selectedLocationsAfterRemoval = selectedLocations;
      selectedLocationsAfterRemoval = selectedLocationsAfterRemoval.filter(current => current !== item.value);
      setSelectedLocations([...selectedLocationsAfterRemoval]);
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
      <div className="filter-box">
        <Dropdown selectFunction={handleTagSelect} title={getTags()} items={tags} />
        <Dropdown selectFunction={handleTypeSelect} title={getTypes()} items={types} />
        <Dropdown selectFunction={handleLocationSelect} title={getLocations()} items={locations} />
      </div>
      <button className="search-button">검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
