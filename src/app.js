import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import resetCss from "reset-css";
import { createGlobalStyle } from "styled-components";
import MainContainer from "./containers/MainContainer";
import DetailContainer from "./containers/DetailContainer";

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
    min-width: 850px;
    display: flex;
    justify-content: center;
  }

  .content-container{
    display:flex;
    max-width: 1300px;
    flex-direction:column;
    min-width: 70%;
    /* min-width: 1300px; */
  }
  .job-list-container{
    padding: 20px;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainContainer} />
          <Route path="/jobpost/:id" exact component={DetailContainer} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
