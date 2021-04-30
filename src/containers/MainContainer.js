import React, { useCallback, useState } from "react";
import Header from "../components/Header/Header";
import Dropdown from "../components/Dropdown/Dropdown";
import JobListItem from "../components/JobListItem/JobListItem";
import JobListHeader from "../components/JobListHeader/JobListHeader";
import JobListView from "../components/JobListView/JobListView";

const MainContainer = () => {
  const [location, setLocation] = useState(null);

  const handleChangeLocationClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
      <Header />
      <section className="content-section">
        <div className="content-container">
          <div className="job-filter-container">
            <button>지역</button>
            <button>분야</button>
            <button>경력</button>
            <button>검색하기</button>
          </div>
          <JobListView />
        </div>
      </section>
      <footer>footer</footer>
    </>
  );
};

export default MainContainer;
