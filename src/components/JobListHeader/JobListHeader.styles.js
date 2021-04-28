import styled from "styled-components";

export const JobListHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  padding-bottom: 20px;
  font-size: 26px;
  span {
    font-size: 1em;
    font-weight: bold;
  }
  span:nth-child(2) {
    font-size: 0.9em;
    color: #15b2b3;
    padding-left: 20px;
  }
  div:nth-child(2) button {
    min-width: 110px;
    color: #27babb;
    border: 1px solid #27babb;
    padding: 10px;
    background-color: white;
    font-size: 0.9em;
  }
  //media query => font size 축소
`;
