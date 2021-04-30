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
  max-width: 1300px;
  height: 100%;
  width: 70%;
  padding-bottom: 150px;
  svg {
    padding-right: 28px;
    width: 250px;
    height: 250px;
    @media screen and (max-width: 576px) {
      width: 230px;
      height: 230px;
    }
  }
  button {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    width: 350px;
    height: 30px;
    color: white;
    transition: 0.2s;
    background-color: #15b2b3;
    @media screen and (max-width: 576px) {
      width: 280px;
      height: 30px;
    }
    &:hover {
      color: black;
    }
  }
  & path,
  rect {
    fill: black;
  }
`;
