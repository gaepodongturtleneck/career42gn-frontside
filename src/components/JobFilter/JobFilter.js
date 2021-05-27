import React, { useCallback, useState, useEffect, useRef } from "react";
import { JobFilterContainer } from "./JobFilter.styles";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Dropdown/Checkbox";
import api from "../../api";

const JobFilter = props => {
  const { locations, tags, types, pageNumber, handleFilterButton } = props;
  const dropdownRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [openedDropdown, setOpenedDropdown] = useState([false, false, false]);
  const [checkboxTags, setCheckboxTags] = useState(new Array(tags.length).fill(false));
  const [checkboxTypes, setCheckboxTypes] = useState(new Array(types.length).fill(false));
  const [checkboxLocations, setCheckboxLocations] = useState(new Array(locations.length).fill(false));

  const typeHashmap = { 신입: "ne", 인턴: "in", 주니어: "ju" };
  const locationHashmap = { 서울: "se", 경기: "gy", 부산: "bu" };
  const dropdownIndex = openedDropdown.indexOf(true);
  const tagQuery = selectedTags.map(item => item.slice(0, 2).toLowerCase()).join("-");
  const typeQuery = selectedTypes.map(item => typeHashmap[item]).join("-");
  const locationQuery = selectedLocations.map(item => locationHashmap[item]).join("-");

  const handleOpenDropdown = idx => {
    if (openedDropdown[idx]) {
      setOpenedDropdown([false, false, false]);
    } else {
      const changed = [false, false, false];
      changed[idx] = true;
      setOpenedDropdown(changed);
    }
  };

  const handleOutsideDropdownClick = ref => {
    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenedDropdown([false, false, false]);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const isItemSelected = (item, array) => {
    if (array.find(current => current === item.value)) {
      return true;
    }
    return false;
  };

  const setSelection = (item, selected, setSelected) => {
    if (!isItemSelected(item, selected)) {
      setSelected([...selected, item.value]);
    } else {
      let selectedAfterRemoval = selected;
      selectedAfterRemoval = selectedAfterRemoval.filter(current => current !== item.value);
      setSelected([...selectedAfterRemoval]);
    }
  };

  const handleCheckClick = (index, item) => {
    if (openedDropdown[0]) {
      setCheckboxTags(check => check.map((c, i) => (i === index ? !c : c)));
      setSelection(item, selectedTags, setSelectedTags);
    }
    if (openedDropdown[1]) {
      setCheckboxTypes(check => check.map((c, i) => (i === index ? !c : c)));
      setSelection(item, selectedTypes, setSelectedTypes);
    }
    if (openedDropdown[2]) {
      setCheckboxLocations(check => check.map((c, i) => (i === index ? !c : c)));
      setSelection(item, selectedLocations, setSelectedLocations);
    }
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
      return checkboxTags;
    }
    if (idx === 1) {
      return checkboxTypes;
    }
    if (idx === 2) {
      return checkboxLocations;
    }
  };

  const fetchFilterData = async url => {
    try {
      let page = 0;
      page = pageNumber === undefined ? 1 : pageNumber;
      const res = await api.get(`${url}?page=${page - 1}`, {
        params: {
          pageSize: 10,
          ...(tagQuery ? { tag: tagQuery } : {}),
          ...(typeQuery ? { type: typeQuery } : {}),
          ...(locationQuery ? { location: locationQuery } : {}),
        },
      });
      handleFilterButton(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchButtonClick = () => {
    fetchFilterData("/jobposts");
  };

  return (
    <JobFilterContainer>
      <div className="filter-checkbox-wrapper" ref={dropdownRef}>
        {handleOutsideDropdownClick(dropdownRef)}
        <div className="filter-box">
          <Dropdown title={selectedTags.join(",") || "분야"} isOpen={openedDropdown} idx={0} handleOpenDropdown={handleOpenDropdown} />
          <Dropdown title={selectedTypes.join(",") || "경력"} isOpen={openedDropdown} idx={1} handleOpenDropdown={handleOpenDropdown} />
          <Dropdown title={selectedLocations.join(",") || "지역"} isOpen={openedDropdown} idx={2} handleOpenDropdown={handleOpenDropdown} />
        </div>
        <div className="checkbox-wrapper">
          {dropdownIndex !== -1 ? <Checkbox items={selectCheckboxMenus(dropdownIndex)} checkList={selectCheckList(dropdownIndex)} selectFunction={handleCheckClick} /> : null}
        </div>
      </div>
      <button className="search-button" onClick={handleSearchButtonClick}>
        검색하기
      </button>
    </JobFilterContainer>
  );
};

export default JobFilter;
