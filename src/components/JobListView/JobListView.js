import React from "react";
import JobListHeader from "../JobListHeader/JobListHeader";
import JobListItem from "../JobListItem/JobListItem";
import JobListPagination from "../JobListPagination/JobListPagination";
import { JobListViewStyled } from "./JobListView.styles";

const JobListView = props => {
  const { dummyData, bookMark, tags } = props;

  return (
    <JobListViewStyled name="job-list-view-container">
      <JobListHeader totalPostsNumber={dummyData.totalElements} />
      <ul>
        {dummyData?.content.map(item => {
          const isBookMark = bookMark.some(isMarked => isMarked.jobpost_id === item.id);
          return <JobListItem key={item.id} data={item} isBookMark={isBookMark} tags={tags} />;
        })}
      </ul>
      <JobListPagination totalPages={dummyData.totalPages} />
    </JobListViewStyled>
  );
};

export default JobListView;
