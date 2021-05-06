import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Dropdown/Checkbox";

const JobFilter = props => {
  const { locations, tags, types } = props;
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const dropdownRef = useRef(null);
  const [openedDropdown, setOpenedDropdown] = useState([false, false, false]);

  const handleOpenDropdown = idx => {
    if (openedDropdown[idx]) {
      setOpenedDropdown([false, false, false]);
    } else {
      const changed = [false, false, false];
      changed[idx] = true;
      setOpenedDropdown(changed);
    }
    console.log(openedDropdown);
  };

  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [tagCheckList, setTagCheckList] = useState(new Array(tags.length).fill(false));
  const [typeCheckList, setTypeCheckList] = useState(new Array(types.length).fill(false));
  const [locationCheckList, setLocationCheckList] = useState(new Array(locations.length).fill(false));

  const isItemSelected = (item, array) => {
    if (array.find(current => current === item.value)) {
      return true;
    }
    return false;
  };

  const handleCheckClick = (index, item) => {
    if (selectedDropdown === "tags") {
      setTagCheckList(check => check.map((c, i) => (i === index ? !c : c)));
      if (!isItemSelected(item, selectedTags)) {
        setSelectedTags([...selectedTags, item.value]);
      } else {
        let selectedTagsAfterRemoval = selectedTags;
        selectedTagsAfterRemoval = selectedTagsAfterRemoval.filter(current => current !== item.value);
        setSelectedTags([...selectedTagsAfterRemoval]);
      }
    }
    if (selectedDropdown === "types") {
      setTypeCheckList(check => check.map((c, i) => (i === index ? !c : c)));
      if (!isItemSelected(item, selectedTypes)) {
        setSelectedTypes([...selectedTypes, item.value]);
      } else {
        let selectedTypesAfterRemoval = selectedTypes;
        selectedTypesAfterRemoval = selectedTypesAfterRemoval.filter(current => current !== item.value);
        setSelectedTypes([...selectedTypesAfterRemoval]);
      }
    }
    if (selectedDropdown === "locations") {
      setLocationCheckList(check => check.map((c, i) => (i === index ? !c : c)));
      if (!isItemSelected(item, selectedLocations)) {
        setSelectedLocations([...selectedLocations, item.value]);
      } else {
        let selectedLocationsAfterRemoval = selectedLocations;
        selectedLocationsAfterRemoval = selectedLocationsAfterRemoval.filter(current => current !== item.value);
        setSelectedLocations([...selectedLocationsAfterRemoval]);
      }
    }
  };

  const handleOutsideDropdownClick = ref => {
    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenedDropdown([false, false, false]);
          console.log(openedDropdown);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const selectCheckboxMenus = idx => {
    if (idx === 0) {
      return tags;
    }
    if (idx === 1) {
      return types;
    }
    if (idx === 2) {
      return locations;
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
        <Dropdown title={getTags()} isOpen={openedDropdown} idx={0} handleOpenDropdown={handleOpenDropdown} />
        <Dropdown title={getTypes()} isOpen={openedDropdown} idx={1} handleOpenDropdown={handleOpenDropdown} />
        <Dropdown title={getLocations()} isOpen={openedDropdown} idx={2} handleOpenDropdown={handleOpenDropdown} />
      </div>
      <div className="filter-checkbox-wrapper" ref={dropdownRef}>
        {openedDropdown.indexOf(true) !== -1 ? <Checkbox items={selectCheckboxMenus(openedDropdown.indexOf(true))} checkList={tagCheckList} selectFunction={handleCheckClick} /> : null}
      </div>
      <button className="search-button">검색하기</button>
    </JobFilterContainer>
  );
};

export default JobFilter;
