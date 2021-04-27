import React from "react";
import JobListHeader from "../JobListHeader/JobListHeader";
import JobListItem from "../JobListItem/JobListItem";
import { JobListViewStyled } from "./JobListView.styles";

const JobListView = props => {
  const { dummyData } = props;
  return (
    <JobListViewStyled>
      <ul>
        <JobListHeader />
        {dummyData?.content.map(item => {
          return <JobListItem key={item.id} data={item} />;
        })}
      </ul>
    </JobListViewStyled>
  );
};

JobListView.defaultProps = {
  // * /jobposts?page=1?type=aa?tag=bb  <GET>
  // TODO 상기 API를 기반으로 요청, 데이터 get 후  rendering

  dummyData: {
    content: [
      {
        id: 1,
        title: "프론트엔드 개발자 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: "인턴",
        type: "프론트엔드",
      },
      {
        id: 2,
        title: "백엔드 개발자 모십니다.",
        dueDate: "2021-04-13",
        isClosed: true,
        tag: "인턴",
        type: "백엔드",
      },
      {
        id: 3,
        title: "농담곰 인턴 모십니다.",
        dueDate: "2021-04-29",
        isClosed: false,
        tag: "인턴",
        type: "프론트엔드",
      },
      {
        id: 4,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: "정규직",
        type: "농담곰",
      },
      {
        id: 5,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: "정규직",
        type: "농담곰",
      },
      {
        id: 6,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: "정규직",
        type: "농담곰",
      },
      {
        id: 7,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: "정규직",
        type: "농담곰",
      },
      {
        id: 8,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: "정규직",
        type: "농담곰",
      },
      {
        id: 9,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: "정규직",
        type: "농담곰",
      },
      {
        id: 10,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: "정규직",
        type: "농담곰",
      },
    ],
  },
};

JobListView.propTypes = {};

export default JobListView;
