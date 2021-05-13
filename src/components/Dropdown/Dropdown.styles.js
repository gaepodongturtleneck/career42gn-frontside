import styled from "styled-components";

const DropdownWrapper = styled.div`
  width: 100%;
  margin-right: 4px;

  .dropdown-button {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border: solid #d6d6d6 2px;
    box-sizing: border-box;
    padding: 15px 10px;
    cursor: pointer;
  }

  .dropdown-title {
    padding-right: 10px;
  }

  .dropdown-icon {
    width: 15px;
    height: 12px;
  }

  .dd-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid #27babb 2px;
  }
`;

export default DropdownWrapper;
