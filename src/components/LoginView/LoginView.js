import React from "react";
import { Link } from "react-router-dom";
import { LoginViewContainer, LoginViewSection } from "./LoginView.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const LoginView = () => {
  return (
    <>
      <LoginViewContainer>
        <LoginViewSection>
          <LogoIcon></LogoIcon>
          <Link to="/job-posts">move to</Link>
          <button>42 Login</button>
        </LoginViewSection>
      </LoginViewContainer>
    </>
  );
};

export default LoginView;
