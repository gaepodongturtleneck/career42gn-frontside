import React from "react";
import { LoginViewContainer, LoginViewSection } from "./LoginView.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const LoginView = () => {
  return (
    <>
      <LoginViewContainer>
        <LoginViewSection>
          <LogoIcon></LogoIcon>
          <button>42 Login</button>
        </LoginViewSection>
      </LoginViewContainer>
    </>
  );
};

export default LoginView;
