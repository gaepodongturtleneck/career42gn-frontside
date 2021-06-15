import React from "react";
import { LoginViewContainer, LoginViewSection } from "./LoginView.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const LoginView = () => {
  const handleLoginButton = () => {
    window.location.replace("https://career.cadet.42seoul.io:8080/oauth2/authorization/42oauth");
  };

  return (
    <>
      <LoginViewContainer>
        <LoginViewSection>
          <LogoIcon />
          <button onClick={handleLoginButton}>42 Login</button>
        </LoginViewSection>
      </LoginViewContainer>
    </>
  );
};

export default LoginView;
