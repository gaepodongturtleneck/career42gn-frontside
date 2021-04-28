import styled from "styled-components";

export const JobDetailViewStyled = styled.div`
  width: 100%;
  height: 1200px;
  padding: 150px 0 200px 0;
`;

export const JobDetailViewWrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding: 60px;
  background-color: #fff;
`;

export const JobDetailTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobDetailTitleTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

JobDetailTitleTop.Left = styled.div``;

JobDetailTitleTop.SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo {
    width: 55px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #b9b9b9;
  }
  .title {
    font-size: 26px;
    color: #4a4a4a;
    padding-left: 20px;
  }
`;

JobDetailTitleTop.Title = styled.p`
  font-size: 38px;
  font-weight: bold;
  color: #000;
  margin-top: 20px;
`;

JobDetailTitleTop.Right = styled.div`
  display: flex;
  flex-direction: row;
`;

JobDetailTitleTop.Bookmark = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 40px 20px 40px;
  border: 2px solid #d6d6d6;
  background-color: #fff;
  cursor: pointer;

  .count {
    font-size: 24px;
    font-weight: bold;
    color: #d6d6d6;
    margin-top: 11px;
  }
`;

JobDetailTitleTop.Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #27babb;
  padding: 28px 23px 28px 23px;
  margin-left: 18px;

  .d-day {
    font-size: 42px;
    font-weight: bold;
    color: #fff;
  }
  .date {
    font-size: 22px;
    color: #fff;
    margin-top: 10px;
  }
`;

export const JobDetailTitleBottom = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #27babb;
  padding: 30px;
  margin-top: 25px;
`;

JobDetailTitleBottom.Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

JobDetailTitleBottom.InfoBox = styled.div`
  width: 50%;
`;

JobDetailTitleBottom.Item = styled.div`
  margin-bottom: 20px;

  p {
    display: inline-block;
    width: 110px;
    font-size: 18px;
    font-weight: bold;
    color: #4a4a4a;
  }
  span {
    font-size: 18px;
    color: #4a4a4a;
  }
`;

JobDetailTitleBottom.Tags = styled.div`
  font-size: 18px;
  color: #27babb;
  margin-top: 10px;

  span {
    margin-right: 30px;
  }
`;

export const JobDetailInfo = styled.div`
  margin-top: 80px;

  p {
    font-size: 32px;
    font-weight: bold;
    color: #222;
  }
  hr {
    width: 100%;
    height: 2px;
    background-color: #d6d6d6;
    border: none;
    margin-top: 20px;
  }
  .info {
    width: 100%;
    height: 500px;
  }
`;

export const JobCompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #d6d6d6;
  padding: 35px 50px;

  .logo {
    width: 190px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #fff;
    background-color: #b9b9b9;
  }
`;

JobCompanyInfo.InfoBox = styled.div`
  margin-left: 50px;
`;

JobCompanyInfo.Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  span {
    font-size: 24px;
    font-weight: bold;
    color: #4a4a4a;
  }
  button {
    margin-left: 20px;
    color: #27babb;
    background-color: #fff;
    cursor: pointer;
  }
`;

JobCompanyInfo.Info = styled.div``;

JobCompanyInfo.Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  line-height: 1.5;

  .title {
    display: inline-block;
    width: 80px;
    font-size: 14px;
    font-weight: bold;
    color: #4a4a4a;
  }
  .info {
    display: inline-block;
    width: 500px;
    font-size: 14px;
    color: #4a4a4a;
  }
`;
