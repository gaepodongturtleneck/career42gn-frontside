import React from "react";
import JobListItem from "../JobListItem/JobListItem";
import { ProfileBookmarkViewStyled, BookmarkListTitle, BookmarkListView } from "./ProfileBookmarkView.styles";

const ProfileBookmarkView = ({ bookmarks, dummyData, tags }) => {
  // 여기에 set되는 isbookMark 전부 true
  // 들어온 dummyData출력만해주면됨.
  return (
    <ProfileBookmarkViewStyled>
      <BookmarkListTitle>
        <span className="title">북마크 목록</span>
        <span className="count">{bookmarks.length ? bookmarks.length : 0}건</span>
      </BookmarkListTitle>
      <BookmarkListView>
        {bookmarks.length ? (
          <ul>
            {dummyData?.content.map(item => {
              return <JobListItem key={item.id} data={item} isBookMark={true} tags={tags} />;
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
