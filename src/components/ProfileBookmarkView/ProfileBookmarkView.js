import React from "react";
import { ProfileBookmarkViewStyled, BookmarkListTitle, BookmarkListView } from "./ProfileBookmarkView.styles";

const ProfileBookmarkView = ({ bookmarks }) => {
  return (
    <ProfileBookmarkViewStyled>
      <BookmarkListTitle>
        <span className="title">북마크 목록</span>
        <span className="count">{bookmarks.length ? bookmarks.length : 0}건</span>
      </BookmarkListTitle>
      <BookmarkListView>{bookmarks.length ? <p>있음!</p> : <p>선호한 북마크가 없습니다.</p>}</BookmarkListView>
    </ProfileBookmarkViewStyled>
  );
};

export default ProfileBookmarkView;
