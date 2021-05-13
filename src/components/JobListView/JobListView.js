import React, { useEffect } from "react";
import JobListHeader from "../JobListHeader/JobListHeader";
import JobListItem from "../JobListItem/JobListItem";
import { JobListViewStyled } from "./JobListView.styles";

const JobListView = props => {
  const { dummyData, bookMark, tags } = props;
  useEffect(() => {});
  return (
    <JobListViewStyled name="job-list-view-container">
      <JobListHeader totalPostsNumber={dummyData.totalElements} />
      <ul>
        {dummyData?.content?.map(item => {
          const isBookMark = bookMark.some(isMarked => isMarked.jobpostId === item.id);
          return <JobListItem key={item.id} data={item} isBookMark={isBookMark} tags={item.tag} />;
        })}
      </ul>
    </JobListViewStyled>
  );
};

export default JobListView;
