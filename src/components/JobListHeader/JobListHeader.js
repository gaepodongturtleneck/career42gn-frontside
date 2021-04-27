import React from "react";
import { JobListHeaderStyled } from "./JobListHeader.styles";

const JobListHeader = props => {
  const { totalPostsNumber } = props;
  return (
    <JobListHeaderStyled>
      <div>
        <span>전체 채용정보</span>
        <span>{totalPostsNumber}건</span>
      </div>
      <div>
        <button>최신순</button>
      </div>
    </JobListHeaderStyled>
  );
};

JobListHeader.defaultProps = {
  totalPostsNumber: 12,
};

export default JobListHeader;
