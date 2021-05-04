import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Dropdown/Checkbox";

const JobFilter = props => {
  const { locations, tags, types } = props;
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleOutsideClick = ref => {
    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          setSelectedDropdown(null);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const handleSelectDropdown = name => {
    setSelectedDropdown(name);
  };

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
      <div className="filter-checkbox-wrapper" ref={dropdownRef}>
        {handleOutsideClick(dropdownRef)}
        <div className="filter-box">
          <Dropdown title={getTags()} dropdownName="tags" handleSelectDropdown={handleSelectDropdown} />
          <Dropdown title={getTypes()} dropdownName="types" handleSelectDropdown={handleSelectDropdown} />
          <Dropdown title={getLocations()} dropdownName="locations" handleSelectDropdown={handleSelectDropdown} />
        </div>
        {selectedDropdown && <Checkbox items={tags} selectFunction={handleTagSelect} />}
      </div>
      <button className="search-button">검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
