import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import resetCss from "reset-css";
import { createGlobalStyle } from "styled-components";
import MainContainer from "./containers/MainContainer";
import DetailContainer from "./containers/DetailContainer";
import LoginContainer from "./containers/LoginContainer";
import ProfileContainer from "./containers/ProfileContainer";

const GlobalStyle = createGlobalStyle`
  ${resetCss};
  html, body {
    height: 100%;
    background-color: #f9f9f9;
    box-sizing: border-box;
  }
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Spoqa Han Sans', sans-serif;
    font-weight: normal;
  }
	button {
		border: none;
		padding: 0;
    font-family: 'Spoqa Han Sans', sans-serif;
	}
  .content-section{
    padding-top:120px;
    @media screen and (min-width: 768px){
      display: block;
      padding: 120px 10px 10px 10px;
    }
    @media screen and (min-width: 1024px){
      display: flex;
      justify-content: center;
      min-width: 850px;
    }
  }

  .content-container{
    display:flex;
    max-width: 1300px;
    flex-direction:column;
    min-width: 70%;
    /* min-width: 1300px; */
    @media screen and (min-width: 768px){
      font-size: 32px;
    }
  }
  .job-list-container{
    padding: 20px;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter basename="/career42gn-frontside">
        <Switch>
          <Route path="/jobpost:token" exact component={MainContainer} />
          <Route path="/jobposts/:pageNumber" component={MainContainer} />
          <Route path="/jobpost/:id" exact component={DetailContainer} />
          <Route path="/" exact component={LoginContainer} />
          <Route path="/profile" exact component={ProfileContainer} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
