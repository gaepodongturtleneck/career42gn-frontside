import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userInfoAtom, tokenWithLogin } from "../recoil/user/index";
import Header from "../components/Header/Header";
import ProfileView from "../components/ProfileView/ProfileView";
import ProfileBookmarkView from "../components/ProfileBookmarkView/ProfileBookmarkView";

const ProfileContainer = props => {
  const { user, dummyData, tags, bookmarks } = props;
  const [userData, setUserData] = useRecoilState(userInfoAtom);
  return (
    <>
      <Header />
      <section className="content-section">
        <div className="content-container">
          <ProfileView userData={userData} />
          <ProfileBookmarkView dummyData={dummyData} bookmarks={bookmarks} />
        </div>
      </section>
    </>
  );
};

ProfileContainer.defaultProps = {
  user: {
    id: 5,
    intra: "secho2",
    email: "seCho@seCHO.com",
    image: "https://cdn.intra.42.fr/users/small_secho.jpg",
  },
  // user: {
  //   nickname: "jiwonlee",
  //   image: null,
  //   email: "jiwonlee@student.42seoul.kr",
  //   phone: "+82 10 1234 5678",
  // },

  dummyData: {
    content: [
      {
        id: 1,
        title: "프론트엔드 개발자 모십니다.",
        dueDate: "2021-06-01",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "프론트엔드",
      },
      {
        id: 2,
        title: "백엔드 개발자 모십니다.",
        dueDate: "2021-04-29",
        isClosed: true,
        tag: ["WEB", "iOS", "DB"],
        type: "백엔드",
      },
      {
        id: 3,
        title: "농담곰 인턴 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "프론트엔드",
      },
      {
        id: 4,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "농담곰",
      },
      {
        id: 5,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "농담곰",
      },
      {
        id: 6,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "농담곰",
      },
      {
        id: 7,
        title: "농담곰 모십니다.",
        dueDate: "2021-06-07",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "농담곰",
      },
      {
        id: 8,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-27",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "농담곰",
      },
      {
        id: 9,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-20",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "농담곰",
      },
      {
        id: 10,
        title: "농담곰 모십니다.",
        dueDate: "2021-05-17",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
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
  bookmarks: [
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

export default ProfileContainer;
