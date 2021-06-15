import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import JobListView from "../components/JobListView/JobListView";
import JobFilter from "../components/JobFilter/JobFilter";
import JobListPagination from "../components/JobListPagination/JobListPagination";
import api from "../api/index";

const MainContainer = props => {
  const { pageNumber } = useParams();
  const { bookMark, tags, locations, types } = props;
  const [jobListData, setJobListData] = useState([]);
  // const [bookmarkList, setBookmarkList] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageNumber || 1);
  const [isMovePage, setIsMovePage] = useState(false);

  const [userData, setUserData] = useState(null);

  // const fetchBookmarkList = async url => {
  //   try {
  //     const res = await api.get(`${url}/${user.id}`);
  //     setBookmarkList([...res.data]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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

  // useEffect(async () => {

  //   if (bookmarkList.length === 0) {
  //     console.log("bookmarkList: ", bookmarkList);
  //     await fetchBookmarkList("/bookmarks");
  //   }
  // }, [pageNumber]);

  const fetchUserData = async url => {
    try {
      const res = await axios.get(`https://career.cadet.42seoul.io:8080/cadets`);
      setUserData(res.data);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(async () => {
    console.log("get job");
    // await fetchUserData("/cadets");
    // await fetchListData("/jobposts");
  }, []);

  useEffect(async () => {
    // await fetchListData("/jobposts");
  }, [pageNumber]);

  return (
    <>
      {/* <Header user={userData} /> */}
      <section className="content-section">
        <div className="content-container">
          <JobFilter locations={locations} tags={tags} types={types} pageNumber={pageNumber} handleFilterButton={handleFilterButton} />
          <JobListView dummyData={jobListData} bookMark={bookMark} />
          {jobListData.totalPages !== 0 ? <JobListPagination id="job-list-pagination" totalPages={jobListData.totalPages || 0} currentPage={currentPage} handleCurrentPage={handleCurrentPage} /> : ""}
        </div>
      </section>
    </>
  );
};

MainContainer.defaultProps = {
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
