import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import resetCss from "reset-css";
import { createGlobalStyle } from "styled-components";
import MainContainer from "./containers/MainContainer";

const GlobalStyle = createGlobalStyle`
  ${resetCss};
  html, body {
    height: 100%;
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
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .content-section{
    padding-top:120px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .job-container{
    width:70%;
  }
  .job-filter-container{
    min-height:100px;
  }
  .job-list-container{
    padding-top:20px;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainContainer} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
