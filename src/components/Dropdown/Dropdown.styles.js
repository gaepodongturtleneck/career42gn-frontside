import styled from "styled-components";

const DropdownWrapper = styled.div`
  width: 100%;

  .dropdown-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border: solid #d6d6d6 2px;
    box-sizing: border-box;
    padding: 15px 10px;
    margin-left: -2px;
  }

  .dd-list {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    border: solid #27babb 2px;
  }
`;

export default DropdownWrapper;
