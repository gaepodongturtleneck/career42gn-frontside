import React, { useState } from "react";
import Heart from "react-animated-heart";
import { JobListItemStyled, DateBox, CompanyLogoBox, PostContentSection, PostContent, CompanyInfoBox, HashTagBox } from "./JobListItem.styles";
import CompanyLogo from "../../images/nong.png";

const JobListItem = props => {
  const [isClick, setClick] = useState(false);
  return (
    <JobListItemStyled>
      <DateBox>
        <span>D-10</span>
        <span>05.05 (수)</span>
      </DateBox>
      <PostContentSection name="content-container">
        <CompanyLogoBox name="logo-container">
          <img src={CompanyLogo}></img>
        </CompanyLogoBox>
        <PostContent name="content">
          <span>프론트엔드 개발자로 활약하실 분 모집</span>
          <CompanyInfoBox>
            <a>농담곰 컴퍼니</a>
            <span>서울 강남구</span>
            <span>인턴</span>
            <span>학력무관</span>
          </CompanyInfoBox>
          <HashTagBox>
            <a>#퍼블리싱</a>
            <a>#프론트엔드</a>
            <a>#채용시까지</a>
            <a>#경력 3년 이하</a>
          </HashTagBox>
        </PostContent>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </PostContentSection>
    </JobListItemStyled>
  );
};

JobListItem.propTypes = {};

export default JobListItem;
