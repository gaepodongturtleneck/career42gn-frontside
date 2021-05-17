import React from "react";
import { JobListHeaderStyled } from "./JobListHeader.styles";

const JobListHeader = props => {
  const { totalPostsNumber } = props;
  return (
    <JobListHeaderStyled>
      <span>전체 채용정보</span>
      <span>{totalPostsNumber || 0}건</span>
    </JobListHeaderStyled>
  );
};

export default JobListHeader;
