import React from "react";
import { JobDetailViewStyled, JobDetailViewWrapper, JobDetailTitleWrapper, JobDetailTitleTop, JobDetailTitleBottom, JobDetailInfo, JobCompanyInfo } from "./JobDetailView.styles";
import { ReactComponent as BookmarkIcon } from "../../images/icon-bookmark.svg";
import DateBox from "../Common/DateBox";
import CompanyLogoBox from "../Common/CompanyLogoBox";
import TagBox from "../Common/TagBox";

const JobDetailView = props => {
  const { title, company, dueDate, tags } = props.infoData;

  return (
    <JobDetailViewStyled>
      <JobDetailViewWrapper>
        <JobDetailTitleWrapper>
          <JobDetailTitleTop name="detail-top">
            <JobDetailTitleTop.Left>
              <JobDetailTitleTop.SubTitle>
                <div className="logo">Logo</div>
                <span className="title">{company}</span>
              </JobDetailTitleTop.SubTitle>
              <JobDetailTitleTop.Title>{title}</JobDetailTitleTop.Title>
            </JobDetailTitleTop.Left>
            <JobDetailTitleTop.Right>
              <JobDetailTitleTop.Bookmark>
                <BookmarkIcon />
                <p className="count">5</p>
              </JobDetailTitleTop.Bookmark>
              <DateBox detail={true} dueDate={dueDate}></DateBox>
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
            <JobDetailTitleBottom.Tags>
              {tags.map((tag, i) => (
                <span key={i}>#{tag}</span>
              ))}
            </JobDetailTitleBottom.Tags>
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
      </JobDetailViewWrapper>
    </JobDetailViewStyled>
  );
};

JobDetailView.defaultProps = {
  infoData: {
    id: 1,
    title: "프론트엔드 개발자로 활약하실 분 모집",
    company: "농담곰 컴퍼니",
    dueDate: "05.07 (수)",
    tags: ["퍼블리싱", "프론트엔드", "채용시까지"],
  },
  dummyData: {
    id: 1,
    companyId: 1,
    title: "프론트엔드 개발자로 활약하실 분 모집",
    pay: "회사 내규에 따름",
    tag: ["퍼블리싱", "프론트엔드", "채용시 까지"],
    type: "인턴",
    createdDate: "20210420",
    modifiedDate: "20210427",
    dueDate: "20210507",
    content: "대충 이러 저러한 내용들로 구성되어 있다.",
    isClosed: false,
  },
};

export default JobDetailView;
