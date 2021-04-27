import styled from "styled-components";

export const JobListItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: beige;
  width: 100%;
  min-height: 100px;
  font-size: 26px;
`;

export const DateBox = styled.div`
  display: flex;
  min-width: 100px;
  min-height: 100%;
  background-color: #27babb;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    display: block;
    font-weight: bold;
  }
  span:nth-child(2) {
    font-size: 0.5em;
    padding-top: 7px;
  }
`;
