import styled from "styled-components";

export const JobListPaginationStyles = styled.div`
  width: 100%;
  font-size: 16px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    min-height: 50px;
    margin-top: 5px;

    li {
      display: inline;
      font-size: 0.8em;
      margin: 0 1.5px;
    }
    li > span {
      box-sizing: border-box;
      padding: 7px 10px;
      margin-left: -1px;
      border: 1px solid #ddd;
      cursor: pointer;
    }
  }
`;
