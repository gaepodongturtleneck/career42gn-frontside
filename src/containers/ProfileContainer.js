import React from "react";
import Header from "../components/Header/Header";
import ProfileView from "../components/ProfileView/ProfileView";
import ProfileBookmarkView from "../components/ProfileBookmarkView/ProfileBookmarkView";

const ProfileContainer = props => {
  const { user, bookmarks } = props;

  return (
    <>
      <Header />
      <section className="content-section">
        <div className="content-container">
          <ProfileView userData={user} />
          <ProfileBookmarkView bookmarks={bookmarks} />
        </div>
      </section>
    </>
  );
};

ProfileContainer.defaultProps = {
  user: {
    nickname: "jiwonlee",
    image: null,
    email: "jiwonlee@student.42seoul.kr",
    phone: "+82 10 1234 5678",
  },
  bookmarks: null,
};

export default ProfileContainer;
