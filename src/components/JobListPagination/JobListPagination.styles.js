import styled from "styled-components";

export const JobListPaginationStyles = styled.div`
  width: 100%;
  font-size: 16px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  background-color: #fff;
  margin-bottom: 40px;

  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    min-height: 50px;
    margin-top: 5px;

    a {
      text-decoration: none;
      color: #b9b9b9;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8em;
      margin: 0 2px;
      border: 1px solid;
    }
    .page-id {
      width: 30px;
      height: 30px;
    }
    .page-button {
      height: 30px;
      padding: 0 4px;
      border: none;
    }
    a > span {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      margin-left: -1px;
      cursor: pointer;
    }
  }
`;
