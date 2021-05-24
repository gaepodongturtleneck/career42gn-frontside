import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue, useRecoilCallback, useRecoilValueLoadable } from "recoil";
import { userInfoAtom, tokenWithLogin } from "../../recoil/user/index";
import HeaderStyled from "./Header.styles";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Login이 필요합니다.</h1>;
    }

    return this.props.children;
  }
}

const UserInfo = () => {
  const accessToken = localStorage.getItem("accessToken");
  const userDataLoadable = useRecoilValueLoadable(tokenWithLogin(accessToken));
  const [userData, setUserData] = useRecoilState(userInfoAtom);
  useEffect(() => {
    if (userDataLoadable.state === "hasValue") setUserData({ ...userDataLoadable.contents });
  }, [userDataLoadable]);
  switch (userDataLoadable.state) {
    case "hasValue":
      return (
        <>
          <span>{userDataLoadable.contents.intra}</span>
          <div className="profile-image">
            <img src={userDataLoadable.contents.image}></img>
          </div>
        </>
      );
    case "loading":
      return <div>Loading...</div>;
    case "hasError":
      throw userDataLoadable.contents;
    default:
      break;
  }
};

const UserInfo2 = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [userData, setUserData] = useRecoilState(userInfoAtom);

  const getUserData = useRecoilCallback(({ snapshot, set }) => () => {
    const a = snapshot.getLoadable(tokenWithLogin(accessToken)); // pre-fetch user info
    console.log(a, accessToken);
    // if (a.state === "hasValue") setUserData({ ...a.contents });
    set(userInfoAtom, a.contents); // change current user to start new render
  });
  useEffect(() => {
    getUserData();
  }, []);
  return <div>hELLO{userData.intra}</div>;
};

const Header = props => {
  const { user } = props;

  return (
    <HeaderStyled>
      <Link to={`/jobposts`} className="logo-button">
        <LogoIcon width="50px" />
      </Link>
      <Link to={`/profile`} className="profile-box">
        <ErrorBoundary>
          <UserInfo />
          {/* <UserInfo2 /> */}
        </ErrorBoundary>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
