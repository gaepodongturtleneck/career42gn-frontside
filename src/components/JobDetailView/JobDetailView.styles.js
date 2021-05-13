import styled from "styled-components";

export const JobDetailViewStyled = styled.div`
  padding: 60px;
  background-color: #fff;
  margin-bottom: 50px;
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
  font-size: 34px;
`;

JobDetailTitleTop.Left = styled.div`
  flex: 4;
`;

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
    font-size: 0.5em;
    color: #4a4a4a;
    padding-left: 20px;
  }
`;

JobDetailTitleTop.Title = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  color: #000;
  margin-top: 20px;
`;

JobDetailTitleTop.Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  & * {
    margin: 5px;
  }
`;

JobDetailTitleTop.Bookmark = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border: 2px solid #d6d6d6;
  background-color: #fff;
  cursor: pointer;
`;

export const JobDetailTitleBottom = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #27babb;
  font-size: 30px;
  padding: 20px 25px 25px 25px;
  margin-top: 15px;
`;

JobDetailTitleBottom.Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

JobDetailTitleBottom.InfoBox = styled.div`
  width: 50%;
`;

JobDetailTitleBottom.Item = styled.div`
  margin-bottom: 5px;

  p {
    display: inline-block;
    width: 110px;
    font-size: 0.5em;
    font-weight: bold;
    color: #4a4a4a;
  }
  span {
    font-size: 0.5em;
    color: #4a4a4a;
  }
`;

export const JobDetailInfo = styled.div`
  margin-top: 60px;

  p {
    font-size: 24px;
    font-weight: bold;
    color: #222;
  }
  hr {
    width: 100%;
    height: 2px;
    background-color: #d6d6d6;
    border: none;
    margin-top: 10px;
  }
  .info {
    width: 100%;
    height: 500px;
  }
`;

export const JobCompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #d6d6d6;
  padding: 35px 50px;

  .logo {
    min-width: 190px;
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
    font-size: 22px;
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
