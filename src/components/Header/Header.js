import React from "react";
import { Link } from "react-router-dom";
import HeaderStyled from "./Header.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const Header = props => {
  const { name } = props;

  const handleShowProfile = () => {
    console.log("open");
  };

  return (
    <HeaderStyled>
      <Link to={`/`} className="logo-button">
        <LogoIcon width="50px" />
      </Link>
      <div className="profile-box" onClick={handleShowProfile}>
        <span>{name}</span>
        <div className="profile-image"></div>
      </div>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  name: "jiwonlee",
};

export default Header;
