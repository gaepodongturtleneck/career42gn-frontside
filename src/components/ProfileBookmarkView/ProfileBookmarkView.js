import React, { useEffect, useState } from "react";
import axios from "axios";
import { atom, selector, useRecoilState, useRecoilValue, useRecoilCallback, useRecoilValueLoadable } from "recoil";
import { userBookmarkAtom, userInfoAtom, tokenWithLogin } from "../../recoil/user/index";
import { ProfileBookmarkViewStyled, BookmarkListTitle, BookmarkListView } from "./ProfileBookmarkView.styles";
import JobListItem from "../JobListItem/JobListItem";

const ProfileBookmarkView = ({ bookmarks, dummyData }) => {
  // 여기에 set되는 isbookMark 전부 true
  // 들어온 dummyData출력만해주면됨.
  const [userBookmarkData, setUserBookmarkData] = useRecoilState(userBookmarkAtom);
  const [bookmarksList, setBookmarkList] = useState([]);
  const fetchUserBookmarkList = async () => {
    const res = await axios.get(`http://localhost:5000/bookmarkslist?userId=${69103}`);
    setUserBookmarkData({ content: [...res.data.content] });
    console.log(res);
  };
  const fetchBookmarkList = async () => {
    const res = await axios.get(`http://localhost:5000/bookmarks?userId=${69103}`);
    setBookmarkList([...res.data]);
  };
  useEffect(async () => {
    await fetchUserBookmarkList();
    await fetchBookmarkList();
  }, []);
  return (
    <ProfileBookmarkViewStyled>
      <BookmarkListTitle>
        <span className="title">북마크 목록</span>
        <span className="count">{bookmarksList.length ? bookmarksList.length : 0}건</span>
      </BookmarkListTitle>
      <BookmarkListView>
        {bookmarksList.length ? (
          <ul>
            {userBookmarkData?.content.map(item => {
              const isBookMark = bookmarksList.some(isMarked => isMarked.jobpostId === item.id);

              return <JobListItem key={item.id} data={item} isBookMark={isBookMark} tags={item.tag} />;
            })}
          </ul>
        ) : (
          <p>선호한 북마크가 없습니다.</p>
        )}
      </BookmarkListView>
    </ProfileBookmarkViewStyled>
  );
};

export default ProfileBookmarkView;
