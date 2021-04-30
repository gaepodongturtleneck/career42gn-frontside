import styled from "styled-components";

const HeaderStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #252831;
  z-index: 1;

  .logo-button {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
  }
  .profile-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    span {
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
    }
    .profile-image {
      width: 30px;
      height: 30px;
      background-color: #ffffff;
      border-radius: 30px;
      margin-left: 10px;
    }
  }
`;

export default HeaderStyled;
