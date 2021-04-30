import styled from "styled-components";

export const JobListItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  background-color: beige;
  width: 100%;
  min-height: 100px;
  font-size: 26px;
  margin: 10px 0 10px 0;
  opacity: ${props => (props.isClosed ? 0.5 : 1)};
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

  .d-day {
    font-size: 1em;
    font-weight: bold;
    color: #fff;
  }
  .date {
    font-size: 0.5em;
    color: #fff;
    margin-top: 10px;
  }
`;

export const PostContentSection = styled.div`
  display: flex;
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
  #title {
    text-decoration: none;
    font-weight: bold;
    display: block;
    font-size: 0.8em;
  }
  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
  a:active {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: none;
    color: gray;
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
