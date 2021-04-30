import React from "react";
import Header from "../components/Header/Header";
import JobDetailView from "../components/JobDetailView/JobDetailView";

const DetailContainer = () => {
  return (
    <>
      <Header />
      <div className="content-section">
        <div className="content-container">
          <JobDetailView />
        </div>
      </div>
    </>
  );
};

export default DetailContainer;
