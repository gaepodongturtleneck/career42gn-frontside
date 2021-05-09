import React, { useState, useEffect } from "react";
import Heart from "react-animated-heart";
import { JobDetailViewStyled, JobDetailTitleWrapper, JobDetailTitleTop, JobDetailTitleBottom, JobDetailInfo, JobCompanyInfo } from "./JobDetailView.styles";
import DateBox from "../Common/DateBox";
import CompanyLogoBox from "../Common/CompanyLogoBox";
import TagBox from "../Common/TagBox";
import ScrollToTop from "../CustomHook/ScrollToTop";

const JobDetailView = props => {
  ScrollToTop();
  const { detailData } = props;
  const { title, content, dueDate, pay, tag, type, company, isClosed } = detailData;
  const [isClick, setClick] = useState(true);

  useEffect(() => {
    console.log(detailData);
  });
  return (
    <JobDetailViewStyled>
      <JobDetailTitleWrapper>
        <JobDetailTitleTop name="detail-top">
          <JobDetailTitleTop.Left>
            <JobDetailTitleTop.SubTitle>
              <CompanyLogoBox src={company?.img_url} />
              <span className="title">{company?.name}</span>
            </JobDetailTitleTop.SubTitle>
            <JobDetailTitleTop.Title>{title}</JobDetailTitleTop.Title>
          </JobDetailTitleTop.Left>
          <JobDetailTitleTop.Right>
            <JobDetailTitleTop.Bookmark>
              <Heart ismark={isClick ? 1 : 0} onClick={() => setClick(!isClick)} />
            </JobDetailTitleTop.Bookmark>
            <DateBox detail={true} dueDate={dueDate} />
          </JobDetailTitleTop.Right>
        </JobDetailTitleTop>
        <JobDetailTitleBottom name="detail-bottom">
          <JobDetailTitleBottom.Info>
            <JobDetailTitleBottom.InfoBox>
              <JobDetailTitleBottom.Item>
                <p>경력</p>
                <span>신입</span>
              </JobDetailTitleBottom.Item>
              <JobDetailTitleBottom.Item>
                <p>근무형태</p>
                <span>{type}</span>
              </JobDetailTitleBottom.Item>
            </JobDetailTitleBottom.InfoBox>
            <JobDetailTitleBottom.InfoBox>
              <JobDetailTitleBottom.Item>
                <p>급여</p>
                <span>{pay}</span>
              </JobDetailTitleBottom.Item>
              <JobDetailTitleBottom.Item>
                <p>근무지역</p>
                <span>{company?.location}</span>
              </JobDetailTitleBottom.Item>
            </JobDetailTitleBottom.InfoBox>
          </JobDetailTitleBottom.Info>
          <TagBox tags={tag} />
        </JobDetailTitleBottom>
      </JobDetailTitleWrapper>
      <JobDetailInfo>
        <p>상세 정보</p>
        <hr />
        <div className="info">{content}</div>
      </JobDetailInfo>
      <JobCompanyInfo>
        <div className="logo">Logo</div>
        <JobCompanyInfo.InfoBox>
          <JobCompanyInfo.Title>
            <span>{company?.name}</span>
            <button>홈페이지 {">"}</button>
          </JobCompanyInfo.Title>
          <JobCompanyInfo.Info>
            <JobCompanyInfo.Item>
              <p className="title">기업주소</p>
              <p className="info">{company?.location}</p>
            </JobCompanyInfo.Item>
            <JobCompanyInfo.Item>
              <p className="title">이메일</p>
              <p className="info">gom@gmail.com</p>
            </JobCompanyInfo.Item>
            <JobCompanyInfo.Item>
              <p className="title">기업소개</p>
              <p className="info">{company?.info}</p>
            </JobCompanyInfo.Item>
          </JobCompanyInfo.Info>
        </JobCompanyInfo.InfoBox>
      </JobCompanyInfo>
    </JobDetailViewStyled>
  );
};

export default JobDetailView;
