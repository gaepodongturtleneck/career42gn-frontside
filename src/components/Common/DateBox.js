import React from "react";
import styled from "styled-components";

const CalDate = date => {
  const today = new Date();
  const DateInput = date.concat("T00:00:00+0900");
  const dday = new Date(DateInput);
  const gap = dday.getTime() - today.getTime();
  if (gap >= 0) {
    return "D-".concat(Math.floor(gap / (1000 * 60 * 60 * 24)));
  }
  return "OVER";
};

const DateBox = props => {
  const { dueDate, detail } = props;
  return (
    <DateBoxWrapper detail={detail}>
      <span className="d-day">{CalDate(dueDateg)}</span>
      <span className="date">{dueDate}</span>
    </DateBoxWrapper>
  );
};

DateBox.defaultProps = {
  dueDate: 12,
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
