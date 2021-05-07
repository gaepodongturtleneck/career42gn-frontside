import React from "react";
import Header from "../components/Header/Header";
import JobDetailView from "../components/JobDetailView/JobDetailView";
import CompanyLogo from "../images/nong.png";

const DetailContainer = props => {
  const { infoData, user } = props;

  return (
    <>
      <Header user={user} />
      <div className="content-section">
        <div className="content-container">
          <JobDetailView infoData={infoData} imgsrc={CompanyLogo} />
        </div>
      </div>
    </>
  );
};

DetailContainer.defaultProps = {
  user: {
    id: 5,
    intra: "secho2",
    email: "seCho@seCHO.com",
    image: "https://cdn.intra.42.fr/users/small_secho.jpg",
  },
  infoData: {
    id: 1,
    title: "프론트엔드 개발자로 활약하실 분 모집",
    company: "농담곰 컴퍼니",
    dueDate: "05.07 (수)",
    tags: ["퍼블리싱", "프론트엔드", "채용시까지"],
    bookmark: true,
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

export default DetailContainer;
