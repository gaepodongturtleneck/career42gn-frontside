import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { LoginViewContainer, LoginViewSection } from "./LoginView.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

const LoginView = () => {
  const handleLoginButton = () => {
    window.location.replace(
      // "https://api.intra.42.fr/oauth/authorize?client_id=566e7e201da2842fddb2e21b8dba40467ea7b67d25796020feb9f05c9c7f2581&redirect_uri=https%3A%2F%2Fcareer42gn.tk%3A8080%2F42oauth&response_type=code",
      // test code
      "https://api.intra.42.fr/oauth/authorize?client_id=67ce410deb2af7aa9ce7a753c6f4b1dc40296dc5c76eb65c16f3f17431c8136b&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fget-token&response_type=code",
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
