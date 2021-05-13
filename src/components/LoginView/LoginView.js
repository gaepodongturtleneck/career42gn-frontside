import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { LoginViewContainer, LoginViewSection } from "./LoginView.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const LoginView = () => {
  const handleLoginButton = () => {
    window.location.replace(
      "https://api.intra.42.fr/oauth/authorize?client_id=566e7e201da2842fddb2e21b8dba40467ea7b67d25796020feb9f05c9c7f2581&redirect_uri=http%3A%2F%2F34.64.149.166%3A8080%2F42oauth&response_type=code",
    );
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
