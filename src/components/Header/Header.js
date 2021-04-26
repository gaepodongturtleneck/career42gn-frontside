import React from "react";
import HeaderStyled from "./Header.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const Header = props => {
  const { name } = props;

  return (
    <HeaderStyled>
      <LogoIcon width="50px" />
      <div className="profile-box">
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
