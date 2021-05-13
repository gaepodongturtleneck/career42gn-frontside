import styled from "styled-components";

export const ProfileBookmarkViewStyled = styled.div`
  padding: 40px;
  background-color: #fff;
  margin-bottom: 50px;
`;

export const BookmarkListTitle = styled.div`
  font-size: 18px;

  .title {
    font-weight: bold;
  }
  .count {
    font-size: 0.9em;
    font-weight: bold;
    color: #27babb;
    padding-left: 10px;
  }
`;

export const BookmarkListView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  ul {
    width: 100%;
  }
`;
