import styled from "styled-components";

export const LoginViewContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoginViewSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 35px;

  svg {
    padding-right: 28px;
    width: 180px;
    height: 180px;
    margin-bottom: 35px;
  }
  button {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 120px;
    color: white;
    cursor: pointer;
    transition: 0.2s;
    background-color: #15b2b3;
  }
  & path,
  rect {
    fill: black;
  }
`;
