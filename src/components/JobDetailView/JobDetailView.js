import React, { useState } from "react";
import Heart from "react-animated-heart";
import { JobDetailViewStyled, JobDetailTitleWrapper, JobDetailTitleTop, JobDetailTitleBottom, JobDetailInfo, JobCompanyInfo } from "./JobDetailView.styles";
import DateBox from "../Common/DateBox";
import CompanyLogoBox from "../Common/CompanyLogoBox";
import TagBox from "../Common/TagBox";
import ScrollToTop from "../CustomHook/ScrollToTop";

const JobDetailView = props => {
  ScrollToTop();
  const { infoData, imgsrc } = props;
  const { title, company, dueDate, tags, bookmark } = infoData;

  const [isClick, setClick] = useState(bookmark);

  return (
    <JobDetailViewStyled>
      <JobDetailTitleWrapper>
        <JobDetailTitleTop name="detail-top">
          <JobDetailTitleTop.Left>
            <JobDetailTitleTop.SubTitle>
              <CompanyLogoBox src={imgsrc} />
              <span className="title">{company}</span>
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
                <span>인턴</span>
              </JobDetailTitleBottom.Item>
            </JobDetailTitleBottom.InfoBox>
            <JobDetailTitleBottom.InfoBox>
              <JobDetailTitleBottom.Item>
                <p>급여</p>
                <span>회사내규에 따름</span>
              </JobDetailTitleBottom.Item>
              <JobDetailTitleBottom.Item>
                <p>근무지역</p>
                <span>서울특별시 강남구</span>
              </JobDetailTitleBottom.Item>
            </JobDetailTitleBottom.InfoBox>
          </JobDetailTitleBottom.Info>
          <TagBox tags={infoData.tags} />
        </JobDetailTitleBottom>
      </JobDetailTitleWrapper>
      <JobDetailInfo>
        <p>상세 정보</p>
        <hr />
        <div className="info">info</div>
      </JobDetailInfo>
      <JobCompanyInfo>
        <div className="logo">Logo</div>
        <JobCompanyInfo.InfoBox>
          <JobCompanyInfo.Title>
            <span>{company}</span>
            <button>홈페이지 {">"}</button>
          </JobCompanyInfo.Title>
          <JobCompanyInfo.Info>
            <JobCompanyInfo.Item>
              <p className="title">기업주소</p>
              <p className="info">서울특별시 강남구 역삼로 20길 1, 4층</p>
            </JobCompanyInfo.Item>
            <JobCompanyInfo.Item>
              <p className="title">이메일</p>
              <p className="info">gom@gmail.com</p>
            </JobCompanyInfo.Item>
            <JobCompanyInfo.Item>
              <p className="title">기업소개</p>
              <p className="info">안녕하세요~~~ 우리는 농담곰! 오시면 엄청 좋아요. 디게 디게 좋아요 오세요~~~ 언제든 연락주세요~~~ 야근 없습니다. 연봉도 많이 줘요.~~~</p>
            </JobCompanyInfo.Item>
          </JobCompanyInfo.Info>
        </JobCompanyInfo.InfoBox>
      </JobCompanyInfo>
    </JobDetailViewStyled>
  );
};

export default JobDetailView;
