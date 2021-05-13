import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import JobListView from "../components/JobListView/JobListView";
import JobFilter from "../components/JobFilter/JobFilter";
import JobListPagination from "../components/JobListPagination/JobListPagination";
import api from "../api/index";

//  import JobFilterContainer from '../components/JobFilter/JobFilter.styles';

const MainContainer = props => {
  const { pageNumber } = useParams();
  const { bookMark, tags, locations, types, user } = props;
  const [jobListData, setJobListData] = useState([]);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageNumber || 1);
  const [isMovePage, setIsMovePage] = useState(false);

  const fetchBookmarkList = async url => {
    try {
      const res = await api.get(`${url}/${user.id}`);
      setBookmarkList([...res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchListData = async url => {
    try {
      let page = 0;
      page = pageNumber === undefined ? 1 : pageNumber;
      const res = await api.get(`${url}?page=${page - 1}`, {
        params: {
          pageSize: 10,
        },
      });
      res.data.content.forEach(value => {
        value.tag = ["WEB", "iOS"];
      });
      setJobListData({ ...res.data });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleCurrentPage = reqPage => {
    window.scrollTo(0, 0);
    if (reqPage !== currentPage) {
      setIsMovePage(true);
      setCurrentPage(reqPage);
    } else {
      setIsMovePage(false);
    }
  };

  const handleFilterButton = data => {
    data.content.forEach(value => {
      value.tag = ["WEB", "iOS"];
    });
    setJobListData({ ...data });
  };

  useEffect(async () => {
    console.log("hello");
    await fetchListData("/jobposts");
    if (bookmarkList.length === 0) {
      console.log("bookmarkList: ", bookmarkList);
      await fetchBookmarkList("/bookmarks");
    }
  }, [pageNumber]);

  // if (error) return <div>농담곰에러</div>;
  // if (!data) return <div>로딩스</div>;
  return (
    <>
      <Header user={user} />
      <section className="content-section">
        <div className="content-container">
          <JobFilter locations={locations} tags={tags} types={types} pageNumber={pageNumber} handleFilterButton={handleFilterButton} />
          <JobListView dummyData={jobListData} bookMark={bookmarkList} />
          {jobListData.totalPages !== 0 ? <JobListPagination id="job-list-pagination" totalPages={jobListData.totalPages || 0} currentPage={currentPage} handleCurrentPage={handleCurrentPage} /> : ""}
        </div>
      </section>
    </>
  );
};

MainContainer.defaultProps = {
  // TODO 하기 API를 기반으로 요청, 데이터 get 후  rendering
  // * /jobposts?page=1?type=aa?tag=bb  <GET>
  user: {
    id: 5,
    intra: "secho",
    email: "seCho@seCHO.com",
    image: "https://cdn.intra.42.fr/users/small_secho.jpg",
  },
  dummyData: {
    content: [
      {
        id: 1,
        title: "프론트엔드 개발자 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "프론트엔드",
      },
      {
        id: 2,
        title: "백엔드 개발자 모십니다.",
        dueDate: "2021-06-13",
        isClosed: true,
        tag: ["Web", "iOS", "ETC"],
        type: "백엔드",
      },
      {
        id: 3,
        title: "농담곰 인턴 모십니다.",
        dueDate: "2021-06-29",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "프론트엔드",
      },
      {
        id: 4,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
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
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 7,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 8,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 9,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["Web", "iOS", "ETC"],
        type: "농담곰",
      },
      {
        id: 10,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
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
      id: 0,
      value: "Web",
    },
    {
      id: 1,
      value: "Android",
    },
    {
      id: 2,
      value: "IOS",
    },
    {
      id: 3,
      value: "AI",
    },
    {
      id: 4,
      value: "Game",
    },
    {
      id: 5,
      value: "DB",
    },
    {
      id: 6,
      value: "Etc",
    },
  ],

  locations: [
    {
      id: 0,
      value: "서울",
    },
    {
      id: 1,
      value: "경기",
    },
    {
      id: 2,
      value: "부산",
    },
  ],

  types: [
    {
      id: 0,
      value: "신입",
    },
    {
      id: 1,
      value: "인턴",
    },
    {
      id: 2,
      value: "주니어",
    },
  ],
};

export default MainContainer;
