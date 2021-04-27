import styled from "styled-components";

export const JobListItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  background-color: beige;
  width: 100%;
  min-height: 100px;
  font-size: 26px;
  margin: 10px 0 10px 0;
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

export const PostContentSection = styled.div`
  display: flex;
  margin-left: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CompanyLogoBox = styled.div`
  flex: 1;
  max-width: 70px;
  margin: 10px;
  img {
    width: 100%;
  }
`;
export const PostContent = styled.div`
  flex: 1;
  span:first-child {
    font-weight: bold;
    display: block;
    font-size: 0.8em;
  }
`;

export const CompanyInfoBox = styled.div`
  font-size: 0.5em;
  margin: 6px 0 6px 0;
  & * {
    color: #4a4a4a;
    padding-right: 5px;
    margin-right: 5px;
    border-right: 1px solid black;
  }
  & > :first-child {
    font-weight: bold;
  }
  & > :last-child {
    border: none;
  }
`;

export const HashTagBox = styled.div`
  font-size: 0.5em;
  & * {
    color: #27babb;
    padding-right: 10px;
  }
`;
