import styled from "styled-components";

export const ProfileViewStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

ProfileInfo.Image = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;
  background-color: lightgray;
`;

ProfileInfo.Text = styled.div`
  font-size: 26px;
  line-height: 1.5;
  padding-left: 30px;

  .title {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .info {
    font-size: 0.5em;
  }
`;

export const LogoutButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #fff;
  border: 2px solid #27babb;
  font-size: 14px;
  font-weight: 600;
  color: #27babb;
  cursor: pointer;
`;
