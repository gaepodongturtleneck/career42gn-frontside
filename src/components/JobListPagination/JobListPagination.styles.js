import styled from "styled-components";

export const JobListPaginationStyles = styled.div`
  width: 100%;
  font-size: 16px;
  min-height: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    min-height: 50px;

    li {
      display: inline;
      font-size: 0.8em;
    }
    li > span {
      box-sizing: border-box;
      padding: 5px 10px;
      margin-left: -1px;
      border: 1px solid #ddd;
      cursor: pointer;
    }
  }
`;
