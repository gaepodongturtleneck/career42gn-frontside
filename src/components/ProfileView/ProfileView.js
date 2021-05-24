import React from "react";
import { ProfileViewStyled, ProfileInfo, LogoutButton } from "./ProfileView.styles";

const ProfileView = ({ userData }) => {
  const { nickname, email, image } = userData;
  if (userData.id === null) {
    return <div>Login이 필요합니다.</div>;
  }
  return (
    <ProfileViewStyled>
      <ProfileInfo>
        <ProfileInfo.Image>
          <img src={image} />
        </ProfileInfo.Image>
        <ProfileInfo.Text>
          <p className="title">{nickname}</p>
          <p className="info">{email}</p>
        </ProfileInfo.Text>
      </ProfileInfo>
      <LogoutButton>로그아웃</LogoutButton>
    </ProfileViewStyled>
  );
};

export default ProfileView;
