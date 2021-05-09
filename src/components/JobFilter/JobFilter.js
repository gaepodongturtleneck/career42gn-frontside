import React, { useCallback, useState, useEffect, useRef } from "react";
import useSWR from "swr";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Dropdown/Checkbox";
import api from "../../api/index";

const JobFilter = props => {
  const { locations, tags, types, pageNumber, handleFilterButton } = props;
  const dropdownRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [openedDropdown, setOpenedDropdown] = useState([false, false, false]);
  const [tagCheckList, setTagCheckList] = useState(new Array(tags.length).fill(false));
  const [typeCheckList, setTypeCheckList] = useState(new Array(types.length).fill(false));
  const [locationCheckList, setLocationCheckList] = useState(new Array(locations.length).fill(false));
  const [shouldFetch, setShouldFetch] = useState(false);
  const dropdownIndex = openedDropdown.indexOf(true);
  //  let locationFilter = [];
  //  let typeFilter = [];
  const tagStr = selectedTags.map(item => item.slice(0, 2).toLowerCase()).join("-");

  const handleOpenDropdown = idx => {
    if (openedDropdown[idx]) {
      setOpenedDropdown([false, false, false]);
    } else {
      const changed = [false, false, false];
      changed[idx] = true;
      setOpenedDropdown(changed);
    }
  };

  const isItemSelected = (item, array) => {
    if (array.find(current => current === item.value)) {
      return true;
    }
    return false;
  };

  const handleCheckClick = (index, item) => {
    if (openedDropdown[0]) {
      setTagCheckList(check => check.map((c, i) => (i === index ? !c : c)));
      if (!isItemSelected(item, selectedTags)) {
        setSelectedTags([...selectedTags, item.value]);
      } else {
        let selectedTagsAfterRemoval = selectedTags;
        selectedTagsAfterRemoval = selectedTagsAfterRemoval.filter(current => current !== item.value);
        setSelectedTags([...selectedTagsAfterRemoval]);
      }
    }
    if (openedDropdown[1]) {
      setTypeCheckList(check => check.map((c, i) => (i === index ? !c : c)));
      if (!isItemSelected(item, selectedTypes)) {
        setSelectedTypes([...selectedTypes, item.value]);
      } else {
        let selectedTypesAfterRemoval = selectedTypes;
        selectedTypesAfterRemoval = selectedTypesAfterRemoval.filter(current => current !== item.value);
        setSelectedTypes([...selectedTypesAfterRemoval]);
      }
    }
    if (openedDropdown[2]) {
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

  const selectCheckList = idx => {
    if (idx === 0) {
      return tagCheckList;
    }
    if (idx === 1) {
      return typeCheckList;
    }
    if (idx === 2) {
      return locationCheckList;
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

  const fetchFilterData = async url => {
    try {
      let page = 0;
      page = pageNumber === undefined ? 0 : pageNumber - 1;
      const res = await api.get(`${url}?page=${page}`, {
        params: {
          pageSize: 10,
          tag: tagStr,
        },
      });
      console.log(`fetchFilterData 실행됨`);
      console.log({ ...res.data });
      handleFilterButton({ ...res.data });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //  const { data, error } = useSWR(shouldFetch ? "/job-posts" : null, fetchFilterData);

  const handleSearchButtonClick = () => {
    //  setShouldFetch(true);
    console.log(tagStr);
    fetchFilterData("/job-posts");
    //  console.log(`fetch? : ${shouldFetch}`);
  };

  return (
    <JobFilterContainer>
      <div className="filter-checkbox-wrapper" ref={dropdownRef}>
        {handleOutsideDropdownClick(dropdownRef)}
        <div className="filter-box">
          <Dropdown title={getTags()} isOpen={openedDropdown} idx={0} handleOpenDropdown={handleOpenDropdown} />
          <Dropdown title={getTypes()} isOpen={openedDropdown} idx={1} handleOpenDropdown={handleOpenDropdown} />
          <Dropdown title={getLocations()} isOpen={openedDropdown} idx={2} handleOpenDropdown={handleOpenDropdown} />
        </div>
        <div className="checkbox-wrapper">
          {dropdownIndex !== -1 ? <Checkbox items={selectCheckboxMenus(dropdownIndex)} checkList={selectCheckList(dropdownIndex)} selectFunction={handleCheckClick} /> : null}
        </div>
      </div>
      <button className="search-button" onClick={() => handleSearchButtonClick()}>
        검색하기
      </button>
    </JobFilterContainer>
  );
};

export default JobFilter;
