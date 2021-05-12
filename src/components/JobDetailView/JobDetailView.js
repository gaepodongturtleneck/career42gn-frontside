import React, { useState, useEffect } from "react";
import Heart from "react-animated-heart";
import { JobDetailViewStyled, JobDetailTitleWrapper, JobDetailTitleTop, JobDetailTitleBottom, JobDetailInfo, JobCompanyInfo } from "./JobDetailView.styles";
import DateBox from "../Common/DateBox";
import CompanyLogoBox from "../Common/CompanyLogoBox";
import TagBox from "../Common/TagBox";
import ScrollToTop from "../CustomHook/ScrollToTop";
import api from "../../api/index";

const JobDetailView = props => {
  ScrollToTop();
  const { detailData, bookmark, user } = props;
  const { id, title, content, dueDate, pay, tag, type, company, isClosed, homepage } = detailData;
  const [isClick, setClick] = useState(false);
  const registBookmark = async url => {
    try {
      const res = await api.post(`${url}`, {
        cadetId: user.id,
        jobpostId: id,
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  const cancelBookmark = async url => {
    // try {
    // 해당 부분, parameter변경될 것임, PK말고 jobId, userId로 요청.
    //   const res = await api.delete(`${url}/${bookmark.id}`);
    //   console.log(res);
    // } catch (err) {
    //   console.error(err);
    // }
  };
  const handleBookmark = () => {
    console.log("clicked");
    console.log(isClick);
    if (isClick === false) {
      console.log("request");
      registBookmark("/bookmarks");
    } else {
      console.log("cancel");
      cancelBookmark("/bookmarks");
    }
    setClick(prev => !prev);
  };
  useEffect(() => {
    if (bookmark.ismark) {
      setClick(true);
    }
  }, [bookmark.ismark]);
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
              <Heart ismark={isClick ? 1 : 0} onClick={handleBookmark} />
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
            {homepage ? <button>홈페이지 {">"}</button> : null}
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
