import React from "react";
import { ProfileViewStyled, ProfileInfo, LogoutButton } from "./ProfileView.styles";

const ProfileView = ({ userData }) => {
  const { nickname, email, phone, image } = userData;

  return (
    <ProfileViewStyled>
      <ProfileInfo>
        <ProfileInfo.Image>
          <img src={image} />
        </ProfileInfo.Image>
        <ProfileInfo.Text>
          <p className="title">{nickname}</p>
          <p className="info">{email}</p>
          {/* <p className="info">{phone}</p> */}
        </ProfileInfo.Text>
      </ProfileInfo>
      <LogoutButton>로그아웃</LogoutButton>
    </ProfileViewStyled>
  );
};

export default ProfileView;
