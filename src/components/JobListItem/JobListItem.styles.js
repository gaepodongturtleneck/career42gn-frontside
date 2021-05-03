import styled from "styled-components";

export const JobListItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 24px;
  margin: 20px 0;
  opacity: ${props => (props.isClosed ? 0.3 : 1)};
  border: 2px solid #27babb;
  box-sizing: border-box;
`;

export const PostContentSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  padding-left: 10px;
`;

export const PostContent = styled.div`
  flex: 1;
  margin-left: 10px;

  #title {
    text-decoration: none;
    font-weight: bold;
    font-size: 0.8em;

    :link {
      text-decoration: none;
      color: black;
    }
    :visited {
      text-decoration: none;
      color: black;
    }
    :active {
      text-decoration: none;
      color: black;
    }
    :hover {
      text-decoration: none;
      color: gray;
    }
  }
`;

export const CompanyInfoBox = styled.div`
  font-size: 0.55em;
  margin: 10px 0;
  & * {
    color: #4a4a4a;
    padding-right: 8px;
    margin-right: 8px;
    border-right: 1px solid black;
  }
  & > :first-child {
    font-weight: bold;
  }
  & > :last-child {
    border: none;
  }
`;
