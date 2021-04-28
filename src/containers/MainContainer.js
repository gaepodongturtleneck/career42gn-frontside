import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import JobListItem from "../components/JobListItem/JobListItem";
import JobListHeader from "../components/JobListHeader/JobListHeader";
import JobListView from "../components/JobListView/JobListView";
import JobFilter from "../components/JobFilter/JobFilter";

const MainContainer = () => {
  return (
    <>
      <Header />
      <div className="content-section">
        <div className="job-container">
          <JobFilter />
          <JobListView />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
