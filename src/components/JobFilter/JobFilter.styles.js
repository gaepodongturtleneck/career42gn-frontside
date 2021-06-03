import styled from "styled-components";

export const JobFilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 30px 35px;
  margin-bottom: 20px;
  background: #fff;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
  .filter-checkbox-wrapper {
    width: 80%;
  }
  .filter-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .search-button {
    width: 15%;
    height: 50px;
    display: inline-block;
    background-color: #27babb;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
  }
  .search-button-off {
    width: 15%;
    height: 50px;
    display: inline-block;
    background-color: #d6d6d6;
    font-size: 16px;
    color: #fff;
  }
`;

export default JobFilterContainer;
