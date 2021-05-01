import styled from "styled-components";

export const JobListHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 10px;
  font-size: 22px;

  span {
    font-size: 1em;
    font-weight: bold;
  }
  span:nth-child(2) {
    font-size: 0.85em;
    color: #15b2b3;
    padding-left: 16px;
  }
`;
