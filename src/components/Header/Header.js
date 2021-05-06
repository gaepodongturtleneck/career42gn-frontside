import React from "react";
import { Link } from "react-router-dom";
import HeaderStyled from "./Header.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const Header = props => {
  const { name } = props;

  return (
    <HeaderStyled>
      <Link to={`/`} className="logo-button">
        <LogoIcon width="50px" />
      </Link>
      <Link to={`/profile`} className="profile-box">
        <span>{name}</span>
        <div className="profile-image"></div>
      </Link>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  name: "jiwonlee",
};

export default Header;
