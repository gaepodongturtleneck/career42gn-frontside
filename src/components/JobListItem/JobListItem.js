import React from "react";
import { JobListItemStyled, DateBox } from "./JobListItem.styles";

const JobListItem = props => {
  return (
    <JobListItemStyled>
      <DateBox>
        <span>D-10</span>
        <span>05.05 (수)</span>
      </DateBox>
      <div>
        itemcontentcontainer
        <div>logo</div>
        <div>
          content
          <span>title</span>
          <a>compony title</a>
          <span>location</span>
          <span>jobtype</span>
          <span>edu</span>
          <div>
            etc info
            <a>hash1</a>
            <a>hash2</a>
            <a>hash3</a>
          </div>
        </div>
      </div>
      <div>0</div>
    </JobListItemStyled>
  );
};

JobListItem.propTypes = {};

export default JobListItem;
