import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import Header from "../components/Header/Header";
import JobListView from "../components/JobListView/JobListView";
import JobFilter from "../components/JobFilter/JobFilter";
import api from "../api/index";

//  import JobFilterContainer from '../components/JobFilter/JobFilter.styles';

const MainContainer = props => {
  const { dummyData, bookMark, tags, locations, types } = props;
  const [jobListData, setJobListData] = useState([]);
  const fetchListData = async () => {
    try {
      const res = await api.get("/jobposts/1");
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };
  // const { data, error } = useSWR("/jobposts/1", url => {
  //   return fetch(url).then(res => res.json());
  // });

  // const { data, error } = useSWR("/jobposts/1", fetchListData);

  useEffect(() => {
    // console.log(data);
    // const listData = await fetchListData();
    // if (listData !== null) {
    //   setJobListData(listData);
    // }
    // console.log(listData);
    //   // clear code
    // };
  });

  // if (error) return <div>농담곰에러</div>;
  // if (!data) return <div>로딩스</div>;

  return (
    <>
      <Header />
      <section className="content-section">
        <div className="content-container">
          <JobFilter locations={locations} tags={tags} types={types} />
          <JobListView dummyData={dummyData} bookMark={bookMark} tags={tags} />
        </div>
      </section>
    </>
  );
};

MainContainer.defaultProps = {
  // TODO 하기 API를 기반으로 요청, 데이터 get 후  rendering
  // * /jobposts?page=1?type=aa?tag=bb  <GET>

  dummyData: {
    content: [
      {
        id: 1,
        title: "프론트엔드 개발자 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "프론트엔드",
      },
      {
        id: 2,
        title: "백엔드 개발자 모십니다.",
        dueDate: "2021-04-13",
        isClosed: true,
        tag: ["Web", "iOS", "ETC"],
        type: "백엔드",
      },
      {
        id: 3,
        title: "농담곰 인턴 모십니다.",
        dueDate: "2021-04-29",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "프론트엔드",
      },
      {
        id: 4,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 5,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],

        type: "농담곰",
      },
      {
        id: 6,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 7,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 8,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 9,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 10,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
    ],
    empty: true,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 0,
    pageable: {
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      paged: true,
      sort: {
        empty: true,
        sorted: true,
        unsorted: true,
      },
      unpaged: true,
    },
    size: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    totalElements: 24,
    totalPages: 12,
  },

  // */bookmarks?cadetid=secho => 북마크 조회 <GET>
  bookMark: [
    {
      id: 1,
      jobpost_id: 1,
    },
    {
      id: 2,
      jobpost_id: 2,
    },
    {
      id: 3,
      jobpost_id: 3,
    },
    {
      id: 7,
      jobpost_id: 7,
    },
  ],

  tags: [
    {
      id: 1,
      value: "Web",
    },
    {
      id: 2,
      value: "Android",
    },
    {
      id: 3,
      value: "IOS",
    },
    {
      id: 4,
      value: "AI",
    },
    {
      id: 5,
      value: "Game",
    },
    {
      id: 6,
      value: "DB",
    },
    {
      id: 7,
      value: "Etc",
    },
  ],

  locations: [
    {
      id: 1,
      value: "서울",
    },
    {
      id: 2,
      value: "경기",
    },
    {
      id: 3,
      value: "부산",
    },
  ],

  types: [
    {
      id: 1,
      value: "신입",
    },
    {
      id: 2,
      value: "인턴",
    },
    {
      id: 3,
      value: "주니어",
    },
  ],
};

export default MainContainer;
