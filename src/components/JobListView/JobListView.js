import React, { useEffect } from "react";
import JobListHeader from "../JobListHeader/JobListHeader";
import JobListItem from "../JobListItem/JobListItem";
import { JobListViewStyled, JobListNoneMessage } from "./JobListView.styles";

const JobListView = props => {
  const { dummyData, bookMark } = props;
  const isFiltered = false;
  console.log(dummyData);
  useEffect(() => {});
  return (
    <JobListViewStyled name="job-list-view-container">
      <JobListHeader totalPostsNumber={dummyData.totalElements} />
      <ul>
        {dummyData?.content?.length > 0 ? (
          dummyData?.content?.map(item => {
            const isBookMark = bookMark.some(isMarked => isMarked.jobpostId === item.id);
            return <JobListItem key={item.id} data={item} isBookMark={isBookMark} tags={item.tag} />;
          })
        ) : (
          // {선택된 필터에 맞는}
          <JobListNoneMessage>{isFiltered ? "선택된 필터에 맞는 " : "현재 "}채용공고가 없습니다.</JobListNoneMessage>
        )}
      </ul>
    </JobListViewStyled>
  );
};

export default JobListView;
