import React from "react";
import { Link } from "react-router-dom";
import HeaderStyled from "./Header.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const Header = props => {
  const { user } = props;
  console.log(user);
  return (
    <HeaderStyled>
      <Link to={`/`} className="logo-button">
        <LogoIcon width="50px" />
      </Link>
      <Link to={`/profile`} className="profile-box">
        <span>{user.intra}</span>
        <div className="profile-image">
          <img src={user.image}></img>
        </div>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
