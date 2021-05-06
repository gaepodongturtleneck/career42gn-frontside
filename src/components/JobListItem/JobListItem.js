import React, { useState } from "react";
import Heart from "react-animated-heart";
import { Link, useHistory } from "react-router-dom";
import { JobListItemStyled, PostContentSection, PostContent, CompanyInfoBox } from "./JobListItem.styles";
import CompanyLogo from "../../images/nong.png";
import DateBox from "../Common/DateBox";
import CompanyLogoBox from "../Common/CompanyLogoBox";
import TagBox from "../Common/TagBox";

const JobListItem = props => {
  const { data, isBookMark, tags } = props;
  const [isClick, setClick] = useState(isBookMark);
  return (
    <JobListItemStyled id={data.id} isClosed={data.isClosed}>
      <DateBox dueDate={data.dueDate} />
      <PostContentSection name="content-container">
        <CompanyLogoBox imgsrc={CompanyLogo} name="logo-container" />
        <PostContent name="content">
          <Link id="title" to={`/jobpost/${data.id}`}>
            {data.title}
          </Link>
          <CompanyInfoBox>
            <a>농담곰 컴퍼니</a>
            <span>서울 강남구</span>
            <span>{data.tag}</span>
            <span>학력무관</span>
          </CompanyInfoBox>
          <TagBox tags={tags} />
        </PostContent>
        <Heart ismark={isClick ? 1 : 0} onClick={() => setClick(!isClick)} />
      </PostContentSection>
    </JobListItemStyled>
  );
};

export default JobListItem;
