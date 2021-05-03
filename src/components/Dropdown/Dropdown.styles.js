import styled from "styled-components";

const DropdownWrapper = styled.div`
  width: 200px;
  height: 75px;

  .dd-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border: solid #27babb 2px;
    box-sizing: border-box;
    padding: 10px;
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
