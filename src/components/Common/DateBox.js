import React from "react";
import styled from "styled-components";

const DateBox = props => {
  const { dueDate, detail } = props;
  return (
    <DateBoxWrapper detail={detail}>
      <span className="d-day">D-10</span>
      <span className="date">{dueDate}</span>
    </DateBoxWrapper>
  );
};

export default DateBox;

const DateBoxWrapper = styled.div`
  min-width: 110px;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #27babb;
  color: #fff;
  font-size: ${props => (props.detail ? "36px" : "30px")};
  .d-day {
    font-size: 0.95em;
    font-weight: bold;
    color: #fff;
  }
  .date {
    font-size: 0.5em;
    color: #fff;
    margin-top: 12px;
  }
`;
