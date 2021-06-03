import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { LoginViewContainer, LoginViewSection } from "./LoginView.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const LoginView = () => {
  const handleLoginButton = () => {
    window.location.replace("https://career42gn.tk:8080/oauth2/authorization/42oauth");
  };

  return (
    <>
      <LoginViewContainer>
        <LoginViewSection>
          <LogoIcon />
          <button onClick={handleLoginButton}>42 Login</button>
          <Link to="/jobposts">move to</Link>
        </LoginViewSection>
      </LoginViewContainer>
    </>
  );
};

export default LoginView;
